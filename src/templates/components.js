import { site, services, serviceList, suburbs, coreSuburbs, routeDays, reviews, credentials } from '../data/site.js';

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- inline SVG icons (24x24, stroked) ---------- */
const svg = (paths, extra = '') => `<svg viewBox="0 0 24 24" aria-hidden="true" ${extra}>${paths}</svg>`;
export const icons = {
  grid: svg('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
  mower: svg('<path d="M3 15h9l3-7h5"/><path d="M12 15v3"/><circle cx="6" cy="18" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M8.5 18h6"/><path d="M3 15v-3h7"/>'),
  hedge: svg('<path d="M12 21V11"/><path d="M5 11c0-3.5 3-6.5 7-6.5s7 3 7 6.5c0 2.5-2 4-4 4H9c-2 0-4-1.5-4-4Z"/><path d="M9 21h6"/><path d="M8 7.5 6 5M16 7.5l2-2.5"/>'),
  spray: svg('<path d="M9 4h4v4H9z"/><path d="M11 8v3"/><path d="M7 11h8l1 10H6l1-10Z"/><path d="M16 5h3M16 8h4M16 2h2"/>'),
  nozzle: svg('<path d="M3 13l6-6 3 3-6 6-3-3Z"/><path d="M9 7l3-3 4 4-3 3"/><path d="M16 4l2-2"/><path d="M14 15c2 0 3-1 5-1M14 18c2 0 4 0 6 1M13 21c2-1 4-1 6 0"/>'),
  trailer: svg('<path d="M2 15h14V7H2v8Z"/><path d="M16 11h5l1 4h-6"/><circle cx="7" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><path d="M5 7V5h8v2"/>'),
  sprinkler: svg('<path d="M12 21v-7"/><path d="M9 14h6"/><path d="M12 14V9"/><path d="M12 9c-3-1-5-3-6-6M12 9c3-1 5-3 6-6M12 9c-1.5-2-2-4-2-7M12 9c1.5-2 2-4 2-7"/>'),
  leaf: svg('<path d="M4 20c0-9 5-15 16-16-1 11-7 16-16 16Z"/><path d="M4 20c3-5 7-8 12-11"/>'),
  phone: svg('<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"/>', 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>', 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'),
  pin: svg('<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>', 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'),
  star: svg('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z"/>', 'fill="currentColor"'),
  check: svg('<path d="m5 12 5 5L20 7"/>', 'fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"'),
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>', 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'),
  shield: svg('<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>'),
  card: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16c.5-1.5 1.5-2.5 3-2.5s2.5 1 3 2.5M14 10h4M14 13h4"/>'),
  flask: svg('<path d="M10 3h4M11 3v6l-6 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-6-9V3"/><path d="M8 15h8"/>'),
  umbrella: svg('<path d="M3 13a9 9 0 0 1 18 0H3Z"/><path d="M12 13v6a2 2 0 0 0 4 0M12 4V2"/>'),
  heart: svg('<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/>'),
  battery: svg('<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M19 10h2v4h-2"/><path d="m10 9-2 3h4l-2 3"/>'),
  calendar: svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9 15 2 2 4-4"/>'),
  bell: svg('<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
  camera: svg('<path d="M4 8h3l2-3h6l2 3h3v11H4V8Z"/><circle cx="12" cy="13" r="3.5"/>'),
  volume: svg('<path d="M4 10v4h4l5 4V6L8 10H4Z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="m19 5 0 0M19 19l0 0"/>'),
  users: svg('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-4 3-6 6.5-6s6 2 6.5 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c3 0 5 1.5 5.5 5"/>'),
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3Z"/></svg>',
  google: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4Z"/><path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z"/><path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9l3.3-2.6Z"/><path d="M12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 7.8 9.4 6 12 6Z"/></svg>',
};

/* ---------- header ---------- */
export function header({ onDark = true } = {}) {
  const items = services.map((s) => `
        <a class="dd-item" role="menuitem" href="/services/${s.slug}/">
          <span class="dd-icon">${icons[s.icon]}</span>
          <span class="dd-text"><strong>${esc(s.name)}</strong><em>${esc(s.navDescriptor)}</em></span>
        </a>`).join('');
  const mobileItems = services.map((s) => `<a href="/services/${s.slug}/">${esc(s.name)}</a>`).join('');
  return `
<a class="sr-only" href="#main">Skip to content</a>
<header class="site-header ${onDark ? 'on-dark' : 'is-light'}">
  <div class="container nav-inner">
    <a href="/" class="brand" aria-label="${esc(site.name)} home">
      <img class="brand__badge" src="/images/logo-badge-160.webp" width="52" height="52" alt="${esc(site.name)} logo">
      <span><span class="brand__word">Beg Your Garden</span><span class="brand__tag">Ipswich lawn &amp; garden care</span></span>
    </a>
    <nav class="nav-main" aria-label="Main navigation">
      <a href="/" class="nav-link">Home</a>
      <div class="nav-dropdown">
        <button class="nav-link nav-trigger" aria-expanded="false" aria-controls="services-menu" type="button">
          Services <svg class="caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>
        <div class="dropdown-panel" id="services-menu" role="menu">
          <a class="dd-item is-all" role="menuitem" href="/services/">
            <span class="dd-icon">${icons.grid}</span>
            <span class="dd-text"><strong>All Services</strong><em>Lawn, garden &amp; outdoor care across Ipswich</em></span>
          </a>${items}
        </div>
      </div>
      <a href="/about/" class="nav-link">About</a>
      <a href="/our-work/" class="nav-link">Our Work</a>
      <a href="/areas/" class="nav-link">Areas</a>
      <a href="/contact/" class="nav-link">Contact</a>
    </nav>
    <div class="nav-actions">
      <a href="tel:${site.phoneRaw}" class="nav-phone">${icons.phone}<span>${site.phone}</span></a>
      <a href="/contact/#quote" class="btn btn--sm">Get a Free Quote</a>
      <button class="nav-burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav" type="button"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="mobile-nav" id="mobile-nav">
  <div class="mobile-nav__backdrop"></div>
  <nav class="mobile-nav__panel" aria-label="Mobile navigation">
    <a class="m-link" href="/">Home</a>
    <button class="m-link" type="button" aria-expanded="false" aria-controls="m-services">Services <svg viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
    <div class="m-acc" id="m-services" data-open="false"><div><a href="/services/">All Services</a>${mobileItems}</div></div>
    <a class="m-link" href="/about/">About</a>
    <a class="m-link" href="/our-work/">Our Work</a>
    <a class="m-link" href="/areas/">Service Areas</a>
    <a class="m-link" href="/contact/">Contact</a>
    <a class="btn" href="/contact/#quote">Get a Free Quote</a>
    <a class="m-phone" href="tel:${site.phoneRaw}">${icons.phone} Call ${site.phone}</a>
  </nav>
</div>
<div class="call-bar">
  <a class="btn btn--navy" href="tel:${site.phoneRaw}">${icons.phone} Call now</a>
  <a class="btn" href="/contact/#quote">Free quote</a>
</div>`;
}

/* ---------- footer ---------- */
export function footer() {
  const svcLinks = services.map((s) => `<li><a href="/services/${s.slug}/">${esc(s.name)}</a></li>`).join('');
  const areaLinks = coreSuburbs.slice(0, 8).map((s) => `<li><a href="/areas/">Lawn mowing ${esc(s)}</a></li>`).join('');
  return `
<footer class="site-footer" id="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="footer-logo" href="/" aria-label="${esc(site.name)} home"><img src="/images/logo-full-480.webp" width="230" height="160" alt="${esc(site.name)} – Leaf it to us, where grass is greener" loading="lazy"></a>
        <p>Quiet, scheduled, battery-only lawn mowing and garden care for homes, rentals and strata across Ipswich and Springfield, QLD.</p>
        <ul class="nap">
          <li>${icons.phone}<a href="tel:${site.phoneRaw}">${site.phone}</a></li>
          <li>${icons.mail}<a href="mailto:${site.email}">${site.email}</a></li>
          <li>${icons.pin}<span>Based in ${site.suburb} ${site.state} ${site.postcode} · servicing Ipswich &amp; Springfield</span></li>
          <li>${icons.clock}<span>Mon–Fri 7am–6pm · Sat 7am–1pm</span></li>
        </ul>
        <div class="social">
          <a href="${site.facebook}" target="_blank" rel="noopener" aria-label="Beg Your Garden on Facebook">${icons.facebook}</a>
          <a href="${site.gbp}" target="_blank" rel="noopener" aria-label="Beg Your Garden on Google">${icons.google}</a>
        </div>
      </div>
      <div>
        <h4>Services</h4>
        <ul><li><a href="/services/">All services</a></li>${svcLinks}</ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="/about/">About Beg Your Garden</a></li>
          <li><a href="/our-work/">Our work</a></li>
          <li><a href="/areas/">Service areas</a></li>
          <li><a href="/lawn-mowing-ripley/">Lawn mowing Ripley</a></li>
          <li><a href="/contact/">Contact &amp; free quote</a></li>
          <li><a href="${site.gbp}" target="_blank" rel="noopener">Google reviews (${site.rating}★)</a></li>
        </ul>
      </div>
      <div>
        <h4>Popular areas</h4>
        <ul>${areaLinks}</ul>
      </div>
    </div>
    <div class="footer-suburbs"><strong>Ipswich &amp; Springfield service area:</strong> ${suburbs.map(esc).join(' · ')}</div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${esc(site.name)}. All rights reserved. ABN available on request.</span>
      <span><a href="/privacy-policy/">Privacy Policy</a> · <a href="/terms-and-conditions/">Terms &amp; Conditions</a> · <a href="/sitemap.xml">Sitemap</a></span>
    </div>
  </div>
</footer>`;
}

/* ---------- quote form (GoHighLevel field mapping) ---------- */
export function quoteForm({ id = 'quote-form', compact = false, defaultService = '' } = {}) {
  const opts = serviceList.map((s) => `<option value="${esc(s.name)}"${s.name === defaultService ? ' selected' : ''}>${esc(s.name)}</option>`).join('') + '<option value="Other">Other</option>';
  return `
<form class="form" id="${id}" data-quote-form data-redirect="/thank-you/" action="/thank-you/" method="get" novalidate>
  <div class="hp" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
  <div class="field"><label for="${id}-name">Name <span>*</span></label><input id="${id}-name" name="full_name" type="text" autocomplete="name" required placeholder="Your full name"></div>
  <div class="form__row">
    <div class="field"><label for="${id}-email">Email <span>*</span></label><input id="${id}-email" name="email" type="email" autocomplete="email" required placeholder="you@example.com"></div>
    <div class="field"><label for="${id}-phone">Phone <span>*</span></label><input id="${id}-phone" name="phone" type="tel" autocomplete="tel" required placeholder="04xx xxx xxx"></div>
  </div>
  <div class="field"><label for="${id}-address">Property address <span>*</span></label><input id="${id}-address" name="property_address" type="text" autocomplete="street-address" required placeholder="Street, suburb (e.g. Raceview QLD 4305)"></div>
  <div class="form__row">
    <div class="field"><label for="${id}-size">Property size</label>
      <select id="${id}-size" name="property_size">
        <option value="">Select…</option>
        <option value="Small (under 400 m²)">Small (under 400 m²)</option>
        <option value="Medium (400–800 m²)">Medium (400–800 m²)</option>
        <option value="Large (800 m²–2,000 m²)">Large (800 m²–2,000 m²)</option>
        <option value="Acreage (over 2,000 m²)">Acreage (over 2,000 m²)</option>
        <option value="Not sure">Not sure</option>
      </select></div>
    <div class="field"><label for="${id}-service">Service needed <span>*</span></label>
      <select id="${id}-service" name="service_needed" required>
        <option value="">Select a service…</option>${opts}
      </select></div>
  </div>
  <div class="field"><label for="${id}-notes">Job notes</label><textarea id="${id}-notes" name="job_notes" rows="${compact ? 3 : 4}" placeholder="Tell us about the lawn or garden, access, pets, and how often you'd like visits."></textarea></div>
  <button class="btn btn--lg" type="submit">Request my free quote ${icons.arrow}</button>
  <p class="form__status" role="status" aria-live="polite"></p>
  <p class="form__note">No obligation. We reply within one business day, usually sooner.</p>
</form>`;
}

/* ---------- sections ---------- */
export function serviceCard(s, { tag = '' } = {}) {
  return `
<a class="svc-card" href="/services/${s.slug}/">
  <div class="svc-card__media"><img src="/images/${s.cardImage}.webp" alt="${esc(s.cardAlt)}" loading="lazy" decoding="async" width="800" height="600">${tag ? `<span class="svc-card__tag">${esc(tag)}</span>` : ''}</div>
  <div class="svc-card__body">
    <span class="svc-card__icon">${icons[s.icon]}</span>
    <h3>${esc(s.name)}</h3>
    <p>${esc(s.short)}</p>
    <span class="link-arrow">View service ${icons.arrow}</span>
  </div>
</a>`;
}

export function servicesGrid() {
  return `<div class="grid grid-3 stagger">${services.map((s) => serviceCard(s)).join('')}</div>`;
}

export function reviewCard(r) {
  const initials = r.name.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join('');
  return `
<article class="review">
  <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
  <p>“${esc(r.text)}”</p>
  <footer><span class="avatar" aria-hidden="true">${esc(initials)}</span><div><strong>${esc(r.name)}</strong><span>${esc(r.suburb)} · Google review</span></div></footer>
</article>`;
}

export function reviewsMarquee() {
  const cards = reviews.map(reviewCard).join('');
  // Track content is duplicated once so the CSS translateX(-50%) loop is seamless; the copy is hidden from AT.
  return `
<div class="marquee"><div class="marquee__track">${cards}<div aria-hidden="true" style="display:contents">${cards}</div></div></div>`;
}

export function ratingBadge() {
  return `<a class="rating-badge" href="${site.gbp}" target="_blank" rel="noopener"><span class="g">G</span><span><strong>${site.rating}</strong> <span class="stars">★★★★★</span><br><small>${site.reviewCount} Google reviews</small></span></a>`;
}

export function faqBlock(items, { id = 'faq' } = {}) {
  return `<div class="faq" id="${id}">${items.map((f, i) => `
<details${i === 0 ? ' open' : ''}>
  <summary>${esc(f.q)}</summary>
  <div class="faq__a"><p>${esc(f.a)}</p></div>
</details>`).join('')}</div>`;
}

export function ctaBand({ heading = 'Leaf it to us.', sub = 'Tell us about your lawn or garden and we\'ll come back with a clear quote and the route day for your street. No chasing, no surprises.' } = {}) {
  return `
<section class="cta-band section">
  <div class="container">
    <div class="reveal reveal--left"><h2>${heading}</h2><p>${esc(sub)}</p></div>
    <div class="btn-row reveal reveal--right">
      <a class="btn btn--lg" href="/contact/#quote">Get a free quote ${icons.arrow}</a>
      <a class="btn btn--outline-light btn--lg" href="tel:${site.phoneRaw}">${icons.phone} ${site.phone}</a>
    </div>
  </div>
</section>`;
}

export function areasSection({ compact = false } = {}) {
  const core = coreSuburbs.map((s) => `<a class="chip chip--route" href="/areas/">${esc(s)}</a>`).join('');
  const rest = suburbs.filter((s) => !coreSuburbs.includes(s)).map((s) => `<span class="chip">${esc(s)}</span>`).join('');
  return `
<div class="split">
  <div class="reveal">
    <h3 style="margin-bottom:12px">Route suburbs we mow every cycle</h3>
    <div class="areas__chips" style="margin-bottom:22px">${core}</div>
    ${compact ? '' : `<h3 style="margin-bottom:12px">And across the rest of Ipswich City</h3><div class="areas__chips">${rest}</div>`}
  </div>
  <div class="route-card reveal reveal--right">
    <h3>Set-day routes, not “sometime this week”</h3>
    <p>Each suburb has a fixed route day so your visit lands on the same day every cycle. Rain pushes the route, and you hear from us early with the new time.</p>
    <ul>${routeDays.map((r) => `<li><span>${esc(r.suburb)}</span><span>${esc(r.day)}</span></li>`).join('')}<li><span>Your suburb</span><span><a href="/contact/#quote" style="color:#CBE6A5">Ask for your route day</a></span></li></ul>
  </div>
</div>`;
}

export function credentialsGrid() {
  return `<div class="cred-grid stagger">${credentials.map((c) => `<div class="cred">${icons[c.icon]}<div><strong>${esc(c.title)}</strong><span>${esc(c.text)}</span></div></div>`).join('')}</div>`;
}

export function compare(item) {
  return `
<figure class="compare" aria-label="Before and after: ${esc(item.title)}">
  <img class="compare__before" src="/images/${item.before}.webp" alt="${esc(item.beforeAlt)}" loading="lazy" decoding="async">
  <img class="compare__after" src="/images/${item.after}.webp" alt="${esc(item.afterAlt)}" loading="lazy" decoding="async">
  <span class="compare__label compare__label--before">Before</span>
  <span class="compare__label compare__label--after">After</span>
  <div class="compare__handle" aria-hidden="true"></div>
  <input type="range" min="0" max="100" value="50" aria-label="Drag to compare before and after">
</figure>`;
}

export function breadcrumb(items) {
  return `<ol class="breadcrumb">${items.map((it, i) => i < items.length - 1 ? `<li><a href="${it.href}">${esc(it.name)}</a></li>` : `<li aria-current="page">${esc(it.name)}</li>`).join('')}</ol>`;
}

export function pageHero({ h1, lede, crumbs, image, imageAlt, plain = false }) {
  return `
<section class="page-hero${plain ? ' page-hero--plain' : ''}">
  ${image ? `<div class="page-hero__media"><img src="/images/${image}.webp" alt="${esc(imageAlt || '')}" fetchpriority="high" decoding="async"></div><div class="page-hero__overlay"></div>` : ''}
  <div class="container">
    ${crumbs ? breadcrumb(crumbs) : ''}
    <h1 class="reveal in">${h1}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ''}
  </div>
</section>`;
}

export function asideCard({ related = [] } = {}) {
  const rel = related.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean);
  return `
<aside class="aside-card">
  <h3>Get a free quote</h3>
  <p style="color:var(--muted);font-size:.95rem">Tell us about the job and we'll confirm a price and your route day.</p>
  <a class="btn" href="/contact/#quote" style="width:100%">Request a quote ${icons.arrow}</a>
  <ul class="nap">
    <li>${icons.phone}<a href="tel:${site.phoneRaw}">${site.phone}</a></li>
    <li>${icons.mail}<a href="mailto:${site.email}">${site.email}</a></li>
    <li>${icons.pin}<span>Servicing Ipswich &amp; Springfield from ${site.suburb} ${site.postcode}</span></li>
  </ul>
  ${rel.length ? `<h4 style="margin:22px 0 0;font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)">Related services</h4><div class="related">${rel.map((r) => `<a href="/services/${r.slug}/">${esc(r.name)} ${icons.arrow}</a>`).join('')}<a href="/services/">All services ${icons.arrow}</a></div>` : ''}
</aside>`;
}
