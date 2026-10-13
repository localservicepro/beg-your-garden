# Beg Your Garden — website rebuild

Static marketing site for **Beg Your Garden** (lawn mowing & garden care, Raceview / Ipswich QLD).
Built against the approved Step 1 SEO research report (12 Oct 2026): every H1, title, meta
description, URL and FAQ string comes from that spec.

## Quick start

```bash
npm run build     # renders src/ -> dist/ (no dependencies, Node 18+)
npm run serve     # preview dist/ at http://localhost:4173
npm run check     # SEO sanity checks on dist/ (one H1, title/meta length, alt text, JSON-LD, tracking script)
npm run images    # re-generate optimised WebP images from assets/source/ (needs python3 + Pillow)
```

Deploy `dist/` to any static host. `netlify.toml`, `vercel.json` and `src/public/_redirects`
carry the build settings, cache headers and 301 redirects from the old LeadConnector URLs.

## Structure

```
assets/source/        originals: leadconnector/ (old site photos), gbp/ (Google Business Profile photos),
                      generated/ (Higgsfield gap-fill images — see "Images" below)
build/build.mjs       static site generator (clean URLs, sitemap.xml, robots.txt)
build/check.mjs       post-build SEO checks
build/serve.mjs       local preview server
src/data/site.js      ALL business facts, copy, services, suburbs, reviews, FAQs
src/templates/        layout.js (head, schema, header/footer wiring), components.js (nav, forms, cards…)
src/pages/*.js        one module per page group; each returns [{ path, html }]
src/styles/main.css   design system (tokens sampled from the logo) + components + motion
src/scripts/main.js   header, mega menu, mobile drawer, reveals, counters, before/after slider, form handling
src/public/           copied verbatim into dist/ (images, manifest, _redirects)
tools/optimise-images.py   image pipeline (WebP, resize, logo crops, favicons)
```

## Pages

| URL | Target keyword (from report) |
|---|---|
| `/` | lawn mowing ipswich |
| `/services/` | index of all nine services |
| `/services/lawn-mowing/` | lawn mowing redbank plains |
| `/services/garden-maintenance/` | garden maintenance ipswich (hedge reduction, mulch laying, gardening) |
| `/services/weed-control-fertilising/` | weed control ipswich |
| `/services/pressure-cleaning/` | house washing ipswich |
| `/services/rubbish-removal/` | green waste removal ipswich |
| `/services/irrigation/` | irrigation ipswich (sprinkler installation + irrigation) |
| `/about/`, `/our-work/`, `/areas/`, `/contact/`, `/lawn-mowing-ripley/` | kept from the old site / supporting pages |
| `/thank-you/` | form redirect target (noindex) |
| `/privacy-policy/`, `/terms-and-conditions/` | legal (draft copy for client review) |

Old URLs: `/home` 301s to `/`; `/services`, `/about`, `/our-work`, `/contact`, `/lawn-mowing-ripley`
keep their paths (now with trailing slashes).

## Lead capture (GoHighLevel)

The external tracking script is loaded in `<head>` on every page:

```html
<script src="https://app.begyourgarden.com/js/external-tracking.js" data-tracking-id="tk_e59f9b2a0c9242dda56136d98144604c"></script>
```

Quote forms (`data-quote-form`) use these field names so the CRM mapping is direct:

| Field | `name` | CRM |
|---|---|---|
| Name | `full_name` | `{{contact.full_name}}` |
| Email | `email` | `{{contact.email}}` |
| Phone | `phone` | `{{contact.phone}}` |
| Property Address | `property_address` | `{{contact.property_address}}` |
| Property Size | `property_size` | `{{contact.property_size}}` |
| Service Needed | `service_needed` (dropdown: nine services + Other) | `{{contact.service_needed}}` |
| Job Notes | `job_notes` | `{{contact.job_notes}}` |

On submit the page lets the tracking script capture the submission, then redirects to `/thank-you/`.
There is no form endpoint of our own.

## Brand

Colours are sampled from the supplied logo file: green `#458D01` (frame / tagline) and navy
`#2C3990` (sky / wordmark), plus white, off-white `#F7F8F4` and neutral greys. Headings are
Playfair Display, body is Inter. The badge mark is used alone in the header; the full lockup with
the tagline sits in a white container in the footer.

## Images

- `assets/source/leadconnector/` — the client's photos from the existing site (hero, feature sections, before/after).
- `assets/source/gbp/` — the client's Google Business Profile photos (gallery). These are small (326 px tall) as served by Google.
- `assets/source/generated/` — Higgsfield-generated images used only where the client had no photo:
  pressure cleaning, green waste removal, irrigation/sprinkler, hedge trimming, and the homepage hero still of
  John mowing (face from his real PPE photo, mower and scene from his real mowing photo). Filenames end in `-generated`.
- `src/public/video/` — the homepage hero clip (MP4 + WebM, 6 s, muted loop), animated from that hero still with Higgsfield Kling.
  Replace them with real job photos when available: drop the photo in `assets/source/generated/`
  with the same base name, run `npm run images` and rebuild.
