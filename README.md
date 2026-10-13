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
src/data/areas.js     suburb landing pages (copy, FAQs, images)
src/data/blog.js      blog posts (HTML body, FAQs, meta, keyword notes)
src/templates/        layout.js (head, schema, header/footer wiring), components.js (nav, forms, cards…)
src/pages/*.js        one module per page group; each returns [{ path, html }]
src/styles/main.css   design system (tokens sampled from the logo) + components + motion
src/scripts/main.js   header, mega menu, mobile drawer, reveals, counters, before/after slider, service-area map animation, form handling
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
| `/lawn-mowing-redbank-plains/`, `-springfield-lakes/`, `-springfield/`, `-collingwood-park/`, `-goodna/`, `-brassall/`, `-augustine-heights/`, `-silkstone/`, `-leichhardt/`, `-riverview/` | suburb pages chosen from live search volume (see below) |
| `/blog/` + 8 posts | lawn & garden guides chosen from live search volume (see below) |
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

## Suburb pages and blog (keyword-led)

Both sets were chosen from live Australian Google Ads search-volume data (DataForSEO, Sep 2026) and
DataForSEO Labs keyword difficulty, cross-checked with Ubersuggest.

Suburb pages (`src/data/areas.js`, URL pattern `/lawn-mowing-{suburb}/` to match the existing Ripley page):

| Suburb | Monthly searches ("lawn mowing {suburb}") |
|---|---|
| Redbank Plains | 40–50 (KD 0) |
| Springfield Lakes | 10 + "lawn mowing services …" 10 + "lawn care …" 10 |
| Springfield (covers Springfield Central, Brookwater) | 20 |
| Collingwood Park | 20, up to 50 in peak months |
| Goodna | 10, up to 30 in peak months |
| Brassall | 10, steady all year |
| Augustine Heights | 10, up to 40 in peak months |
| Silkstone | 10, up to 30 in peak months |
| Leichhardt | 10, steady all year |
| Riverview | 10 |

Booval, Bundamba, Yamanto, Karalee, Raceview and most other suburbs show no measurable volume for their own phrase.

Blog posts (`src/data/blog.js`), each with FAQ + BlogPosting schema and a link to the matching service:

| Post | Head keyword (AU monthly) |
|---|---|
| Lawn grubs in Ipswich | "lawn grubs" 5,400 · "lawn grub treatment" 1,000 · "army worm lawn" 390 |
| When to fertilise your lawn in Queensland | "when to fertilise lawn" 480 · "best time to fertilise lawn" 260 |
| How much does lawn mowing cost in Ipswich | "how much does lawn mowing cost" 260 · "lawn mowing cost per hour" 70 |
| How often should you mow your lawn in Queensland | 140 · "mowing wet grass" 590 · "scalping a lawn" 590 |
| How to fix a patchy lawn | 210 · "brown patches on lawn" 480 · "dead patches in lawn" 260 |
| Get rid of weeds without killing the grass | 140 · "killing weeds in buffalo lawn" 1,000 · "how to get rid of nut grass" 210 |
| Winter lawn care in South East Queensland | "lawn care in winter" 140 (390 in Jun–Jul) |
| How much mulch do I need | 210 · "mulch types" 480 |

The price guide in the cost post is a general Ipswich market range, not Beg Your Garden's price list; adjust in `src/data/blog.js` if needed.
To add a post, append to `posts` in `src/data/blog.js` and rebuild; the index, homepage strip, sitemap and schema update automatically.

## Service-area map

`routeMap()` in `src/templates/components.js` draws an inline SVG map of Ipswich City from the suburb
coordinates in `mapPoints` (`src/data/site.js`): rivers, highways, the 20 route suburbs with labels and
route-day tags, outer suburbs for reach, and a top-down battery mower that drives the route loop from the
Raceview home base, pausing at each suburb and leaving a mowed trail. The animation runs only while the map
is on screen, is skipped under `prefers-reduced-motion`, and the map crops to the core suburbs on phones.
Coordinates are approximate suburb centroids; edit `mapPoints` to add, move or re-order stops.

## Performance

- Fonts are self-hosted variable WOFF2 files (`src/public/fonts/`, latin subset of Inter and Manrope) and preloaded; no Google Fonts request.
- `img()` in `src/templates/components.js` emits `srcset`/`sizes` from every `-640/-800/-1000` variant that exists, with exact widths read from the WebP header, plus `width`/`height` for zero layout shift. Add variants by dropping files with those suffixes into `src/public/images/`.
- The homepage hero poster is preloaded; the video's sources are attached by JS after the `load` event (and skipped under reduced motion or Data Saver) so it never competes with the first paint.
- The animated map initialises only when it scrolls near the viewport and samples the route path once (per-frame `getPointAtLength` calls were costing seconds on load).
- The LeadConnector review widget script is deferred; the tracking script is async.
- CSS and JS are minified with esbuild when it is installed (`npm install`); the build still works without it.
- Hosting configs set one-year immutable caching for `/images/*` and `/assets/*` (hashed URLs).

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
