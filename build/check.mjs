// Post-build SEO sanity checks on dist/
import fs from 'node:fs';
import path from 'node:path';
const dist = path.resolve('dist');
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(dist);
let fail = 0;
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const rel = path.relative(dist, f);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const un = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  const title = un((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const desc = un((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const imgsNoAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length;
  const schemas = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
  let schemaOk = true; for (const s of schemas) { try { JSON.parse(s.replace(/<script[^>]*>|<\/script>/g, '')); } catch { schemaOk = false; } }
  const tracking = html.includes('external-tracking.js') && html.includes('tk_e59f9b2a0c9242dda56136d98144604c');
  const nsw = /Tweed|Bilambil|Terranora|Banora|Palm Beach/i.test(html);
  const problems = [];
  if (h1 !== 1) problems.push(`h1=${h1}`);
  if (title.length > 60) problems.push(`title ${title.length}ch`);
  if (desc.length > 160) problems.push(`desc ${desc.length}ch`);
  if (imgsNoAlt) problems.push(`${imgsNoAlt} img without alt`);
  if (!schemaOk) problems.push('bad JSON-LD');
  if (!tracking) problems.push('tracking script missing');
  if (nsw) problems.push('NSW place name found');
  if (problems.length) fail++;
  console.log(`${problems.length ? 'FAIL' : 'ok  '} ${rel.padEnd(44)} title=${title.length}ch desc=${desc.length}ch schema=${schemas.length} ${problems.join(', ')}`);
}
// keyword density on the homepage
const home = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const mainHtml = (home.match(/<main[\s\S]*?<\/main>/) || [home])[0];
const text = mainHtml.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').toLowerCase();
const words = text.split(' ').filter(Boolean).length;
const kw = (text.match(/lawn mowing (in )?ipswich/g) || []).length;
console.log(`homepage words=${words} "lawn mowing (in) ipswich" occurrences=${kw} density(word-weighted)=${((kw * 3) / words * 100).toFixed(2)}%`);
console.log(fail ? `${fail} page(s) with problems` : 'All pages pass');
process.exit(fail ? 1 : 0);
