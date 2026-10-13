import { site, services, serviceList } from '../data/site.js';
import { page, faqSchema, breadcrumbSchema } from '../templates/layout.js';
import { icons, esc, pageHero, servicesGrid, faqBlock, ctaBand, asideCard, serviceCard } from '../templates/components.js';

function serviceSchema(s) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/services/${s.slug}/#service`,
    name: s.name,
    serviceType: s.keyword,
    description: s.description,
    url: `${site.url}/services/${s.slug}/`,
    image: `${site.url}/images/${s.image}.webp`,
    provider: { '@id': `${site.url}/#business` },
    areaServed: { '@type': 'City', name: 'Ipswich, QLD' },
    offers: { '@type': 'Offer', priceCurrency: 'AUD', availability: 'https://schema.org/InStock', url: `${site.url}/contact/` },
  };
}

export default ({ assetHash }) => {
  const pages = [];

  // ---- /services/ index (existing URL kept) ----
  const indexCrumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services/' }];
  const indexBody = `
${pageHero({ h1: 'Lawn &amp; Garden Services in Ipswich', lede: 'Nine services across six pages: lawn mowing, hedge reduction and gardening, mulch laying, weed control and fertilising, pressure cleaning, rubbish removal, sprinkler installation and irrigation. All on a set schedule, all with the same quiet battery gear.', crumbs: indexCrumbs, image: 'front-yard-mulch-garden-bed-ipswich-1000', imageAlt: 'Mown front lawn and mulched garden bed in Ipswich' })}
<section class="section">
  <div class="container">
    ${servicesGrid()}
  </div>
</section>
<section class="section section--off">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">All nine services</span>
      <h2>Which page covers which job</h2>
      <p>Some services share a page because they're done on the same visit by the same crew. Here's the full list from the brief and where each one lives.</p>
      <ul class="check-list" style="margin-top:18px">${serviceList.map((s) => { const p = services.find((x) => x.slug === s.page); return `<li><span><strong>${esc(s.name)}</strong> — <a href="/services/${p.slug}/">${esc(p.name)}</a></span></li>`; }).join('')}</ul>
    </div>
    <div class="reveal reveal--right">
      <div class="route-card">
        <h3>One plan, one team</h3>
        <p>Most clients start with scheduled lawn mowing and add garden, hedge, treatment and clean-up work to the same plan. One quote, one route day, one person to call.</p>
        <ul><li><span>Scheduled plans</span><span>Set-day routes</span></li><li><span>One-off clean-ups</span><span>Quoted separately</span></li><li><span>DVA &amp; NDIS</span><span>Service notes included</span></li></ul>
        <p style="margin-top:18px"><a class="btn btn--light" href="/contact/#quote">Get a free quote ${icons.arrow}</a></p>
      </div>
    </div>
  </div>
</section>
${ctaBand()}`;
  pages.push({
    path: '/services/',
    priority: '0.8',
    html: page({ title: 'Lawn & Garden Services Ipswich | Beg Your Garden', description: 'Lawn mowing, hedging, mulching, weed control, pressure cleaning, green waste removal & irrigation across Ipswich. Scheduled, insured, battery-only. Free quote!', path: '/services/', body: indexBody, schema: [breadcrumbSchema(indexCrumbs)], assetHash }),
  });

  // ---- individual service pages ----
  for (const s of services) {
    const crumbs = [{ name: 'Home', href: '/' }, { name: 'Services', href: '/services/' }, { name: s.name, href: `/services/${s.slug}/` }];
    const related = s.related.map((slug) => services.find((x) => x.slug === slug));
    const body = `
${pageHero({ h1: s.h1, lede: s.citable, crumbs, image: s.image, imageAlt: s.imageAlt })}
<section class="section">
  <div class="container layout-2col">
    <article class="prose">
      ${s.intro}
      <div class="callout"><strong>Scheduled, not sporadic.</strong> ${esc(s.name)} is built into a set-day plan so it happens at the right time of year, with a reminder before and a photo update after.</div>
      ${s.sections.map((sec) => `<h2>${esc(sec.h2)}</h2>${sec.html}`).join('\n')}
      <h2>${esc(s.name)} FAQs</h2>
      ${faqBlock(s.faqs, { id: `faq-${s.slug}` })}
      <h2>Related services in Ipswich</h2>
      <div class="grid grid-2">${related.map((r) => serviceCard(r)).join('')}</div>
    </article>
    ${asideCard({ related: s.related })}
  </div>
</section>
${ctaBand({ heading: `<em>Leaf it to us.</em> Book ${esc(s.name.toLowerCase())} in Ipswich.`, sub: `Send a few details and we'll quote ${s.name.toLowerCase()} for your property and let you know the route day for your suburb.` })}`;
    pages.push({
      path: `/services/${s.slug}/`,
      priority: '0.9',
      html: page({ title: s.title, description: s.description, path: `/services/${s.slug}/`, body, schema: [serviceSchema(s), faqSchema(s.faqs), breadcrumbSchema(crumbs)], ogImage: `/images/${s.image}.webp`, assetHash }),
    });
  }
  return pages;
};
