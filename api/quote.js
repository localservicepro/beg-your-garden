// Vercel serverless function: receives the quote form (JSON, photos as base64 data URLs),
// upserts the contact in GoHighLevel / LeadConnector via a Private Integration Token (PIT),
// uploads the photos to the location's Media Library and adds a note with the links.
//
// Environment variables (Vercel project settings):
//   GHL_PIT_TOKEN      Private Integration Token (scopes: contacts.write, contacts.readonly, medias.write)
//   GHL_LOCATION_ID    Sub-account (location) ID the contacts belong to
//   GHL_JOB_PHOTOS_FIELD_ID  ID of the contact's "Job Photos" file-upload custom field. Photos are attached there.
//                      If unset (or the attach fails) photos go to the Media Library and a note links to them.
//   GHL_CUSTOM_FIELDS  optional JSON: {"property_size":"<fieldId>","service_needed":"<fieldId>","job_notes":"<fieldId>"}
//                      When omitted, custom fields are sent by key (property_size, service_needed, job_notes).
//   GHL_TAG            optional tag added to the contact (default: website-quote)
//   GHL_API_VERSION    optional, default 2021-07-28

const API = 'https://services.leadconnectorhq.com';
const MAX_PHOTOS = 5;
const MAX_BODY = 4.5 * 1024 * 1024; // Vercel request limit
const MAX_PHOTO_BYTES = 1.5 * 1024 * 1024; // per decoded photo (client compresses to ~300 KB)

const ghlHeaders = () => ({
  Authorization: `Bearer ${process.env.GHL_PIT_TOKEN}`,
  Version: process.env.GHL_API_VERSION || '2021-07-28',
  Accept: 'application/json',
});

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = []; let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY) throw Object.assign(new Error('Request too large'), { status: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

const clean = (v, max = 500) => String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);

function splitName(full) {
  const parts = clean(full, 120).split(/\s+/).filter(Boolean);
  return { firstName: parts[0] || '', lastName: parts.slice(1).join(' ') };
}

function decodePhoto(p, i) {
  if (!p || typeof p.data !== 'string') return null;
  const m = /^data:(image\/(?:jpeg|png|webp|heic|heif));base64,([A-Za-z0-9+/=]+)$/.exec(p.data);
  if (!m) return null;
  const buf = Buffer.from(m[2], 'base64');
  if (!buf.length || buf.length > MAX_PHOTO_BYTES) return null;
  const ext = m[1] === 'image/jpeg' ? 'jpg' : m[1].split('/')[1];
  const base = clean(p.name, 80).replace(/[^A-Za-z0-9._-]+/g, '-').replace(/\.[A-Za-z0-9]+$/, '') || `photo-${i + 1}`;
  return { type: m[1], buf, name: `${base}.${ext}` };
}

async function ghl(path, init) {
  const res = await fetch(API + path, { ...init, headers: { ...ghlHeaders(), ...(init.headers || {}) } });
  const text = await res.text();
  let json = null; try { json = text ? JSON.parse(text) : null; } catch { json = { raw: text }; }
  if (!res.ok) throw Object.assign(new Error(`GHL ${path} ${res.status}: ${(json && (json.message || json.error)) || text.slice(0, 200)}`), { status: res.status, body: json });
  return json;
}

async function upsertContact(f, locationId, tag) {
  const { firstName, lastName } = splitName(f.full_name);
  let map = null;
  try { map = process.env.GHL_CUSTOM_FIELDS ? JSON.parse(process.env.GHL_CUSTOM_FIELDS) : null; } catch { map = null; }
  const cf = (key, value) => (value ? (map && map[key] ? { id: map[key], field_value: value } : { key, field_value: value }) : null);
  const customFields = [cf('property_size', f.property_size), cf('service_needed', f.service_needed), cf('job_notes', f.job_notes)].filter(Boolean);
  const body = {
    locationId, firstName, lastName, name: clean(f.full_name, 120),
    email: clean(f.email, 160), phone: clean(f.phone, 40), address1: clean(f.property_address, 200),
    source: 'Website quote form', tags: [tag], customFields,
  };
  const out = await ghl('/contacts/upsert', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  return out && out.contact ? out.contact : out;
}

async function uploadPhoto(photo, locationId, contactLabel) {
  const fd = new FormData();
  fd.append('file', new Blob([photo.buf], { type: photo.type }), photo.name);
  fd.append('hosted', 'false');
  fd.append('name', `${contactLabel} - ${photo.name}`);
  fd.append('locationId', locationId);
  const out = await ghl('/medias/upload-file', { method: 'POST', body: fd });
  return { name: photo.name, url: out && (out.url || out.fileUrl || (out.file && out.file.url)) || null, id: out && (out.fileId || out.id || (out.file && out.file.id)) || null };
}

// Attach photos to a file-upload custom field on the contact.
// 1) /forms/upload-custom-files?contactId&locationId with each file under the field id (what the form builder uses)
// 2) fallback: /locations/{id}/customFields/upload (id = field id) then PUT the contact with the returned file map
async function attachToField(photos, contactId, locationId, fieldId) {
  try {
    const fd = new FormData();
    for (const p of photos) fd.append(fieldId, new Blob([p.buf], { type: p.type }), p.name);
    await ghl(`/forms/upload-custom-files?contactId=${encodeURIComponent(contactId)}&locationId=${encodeURIComponent(locationId)}`, { method: 'POST', body: fd });
    return { method: 'forms/upload-custom-files', files: photos.map((p) => ({ name: p.name, url: null })) };
  } catch (e1) {
    const fd = new FormData();
    fd.append('id', fieldId); fd.append('maxFiles', String(MAX_PHOTOS));
    for (const p of photos) fd.append(p.name, new Blob([p.buf], { type: p.type }), p.name);
    const out = await ghl(`/locations/${encodeURIComponent(locationId)}/customFields/upload`, { method: 'POST', body: fd });
    const map = (out && out.uploadedFiles) || {};
    await ghl(`/contacts/${encodeURIComponent(contactId)}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ customFields: [{ id: fieldId, field_value: map }] }) });
    return { method: 'customFields/upload', files: Object.entries(map).map(([name, url]) => ({ name, url })), firstError: e1.message };
  }
}

async function addNote(contactId, text) {
  return ghl(`/contacts/${contactId}/notes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ body: text }) });
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.statusCode = 405; res.setHeader('Allow', 'POST'); return res.end(JSON.stringify({ ok: false, error: 'POST only' })); }
  res.setHeader('Content-Type', 'application/json');
  let data;
  try { data = await readJson(req); } catch (e) { res.statusCode = e.status || 400; return res.end(JSON.stringify({ ok: false, error: 'Bad request' })); }

  if (clean(data.website)) { res.statusCode = 200; return res.end(JSON.stringify({ ok: true, skipped: 'honeypot' })); } // bot
  const f = {
    full_name: clean(data.full_name, 120), email: clean(data.email, 160), phone: clean(data.phone, 40),
    property_address: clean(data.property_address, 200), property_size: clean(data.property_size, 60),
    service_needed: clean(data.service_needed, 80), job_notes: clean(data.job_notes, 2000),
  };
  if (!f.full_name || !f.email || !f.phone || !f.property_address || !f.service_needed) { res.statusCode = 422; return res.end(JSON.stringify({ ok: false, error: 'Missing required fields' })); }

  const photos = (Array.isArray(data.photos) ? data.photos : []).slice(0, MAX_PHOTOS).map(decodePhoto).filter(Boolean);
  const token = process.env.GHL_PIT_TOKEN, locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) { res.statusCode = 503; return res.end(JSON.stringify({ ok: false, error: 'CRM not configured', photos: 0 })); }
  const tag = process.env.GHL_TAG || 'website-quote';

  try {
    const contact = await upsertContact(f, locationId, tag);
    const contactId = contact && contact.id;
    let uploaded = []; const failed = []; let photoMethod = null;
    const fieldId = process.env.GHL_JOB_PHOTOS_FIELD_ID;
    if (photos.length && fieldId && contactId) {
      try { const r = await attachToField(photos, contactId, locationId, fieldId); uploaded = r.files; photoMethod = r.method; }
      catch (e) { console.error('custom field attach failed, falling back to media library', e.message); }
    }
    if (photos.length && !photoMethod) {
      photoMethod = 'medias/upload-file';
      for (const p of photos) {
        try { uploaded.push(await uploadPhoto(p, locationId, f.full_name)); } catch (e) { failed.push({ name: p.name, error: e.message }); }
      }
    }
    const lines = [
      `Website quote request (${clean(data.page, 120) || 'site'})`,
      `Service: ${f.service_needed}`, f.property_size ? `Property size: ${f.property_size}` : null,
      `Address: ${f.property_address}`, f.job_notes ? `Notes: ${f.job_notes}` : null,
      uploaded.length ? (photoMethod === 'forms/upload-custom-files' ? `Photos (${uploaded.length}) attached to the Job Photos field: ${uploaded.map((u) => u.name).join(', ')}` : `Photos (${uploaded.length}):`) : null,
      ...(photoMethod === 'forms/upload-custom-files' ? [] : uploaded.map((u) => `- ${u.url || u.name}`)),
      failed.length ? `Photos that failed to upload: ${failed.map((x) => x.name).join(', ')}` : null,
    ].filter(Boolean);
    if (contactId) { try { await addNote(contactId, lines.join('\n')); } catch (e) { console.error('note failed', e.message); } }
    if (failed.length) console.error('photo upload failures', JSON.stringify(failed));
    res.statusCode = 200;
    return res.end(JSON.stringify({ ok: true, contactId: contactId || null, photos: uploaded.length, photosFailed: failed.length, photoMethod }));
  } catch (e) {
    console.error('quote handler failed', e.message, e.body ? JSON.stringify(e.body).slice(0, 500) : '');
    res.statusCode = 502;
    return res.end(JSON.stringify({ ok: false, error: 'CRM request failed', photos: 0 }));
  }
}
