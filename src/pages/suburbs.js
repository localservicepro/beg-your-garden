import { reviews } from '../data/site.js';
import { suburbPages } from '../data/areas.js';
import { page, breadcrumbSchema, faqSchema } from '../templates/layout.js';
import { icons, esc, pageHero, ctaBand, faqBlock, reviewCard, asideCard } from '../templates/components.js';

export default ({ assetHash }) => suburbPages.map((s) => {
  const path = `/lawn-mowing-${s.slug}/`;
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Service Areas', href: '/areas/' }, { name: `Lawn Mowing ${s.name}`, href: path }];
  const sections = s.sections.map((sec) => `
      <h2>${esc(sec.h2)}</h2>
      ${sec.p ? `<p>${esc(sec.p)}</p>` : ''}
      ${sec.list ? `<ul class="check-list">${sec.list.map((li) => `<li>${esc(li)}</li>`).join('')}</ul>` : ''}
      ${sec.links ? `<p class="link-row">${sec.links.map(([href, label]) => `<a class="link-arrow" href="${href}">${esc(label)} ${icons.arrow}</a>`).join('')}</p>` : ''}`).join('');
  const body = `
${pageHero({ h1: s.h1, lede: s.lede, crumbs, image: s.image, imageAlt: s.imageAlt })}
<section class="section">
  <div class="container layout-2col">
    <article class="prose">
      ${s.intro.map((t) => `<p>${esc(t)}</p>`).join('\n      ')}
      ${sections}
      <div class="callout">Beg Your Garden runs scheduled, set-day routes across Ipswich so regular clients always get their visit on time. One-off clean-ups and pre-sale tidy-ups are quoted separately.</div>
      ${s.review != null ? `<h2>From a ${esc(s.name)} customer</h2>${reviewCard(reviews[s.review])}` : ''}
      <h2>Lawn mowing ${esc(s.name)} FAQs</h2>
      ${faqBlock(s.faqs, { id: `faq-${s.slug}` })}
      <p style="margin-top:28px"><a class="link-arrow" href="/services/lawn-mowing/">Lawn mowing service details ${icons.arrow}</a> &nbsp;·&nbsp; <a class="link-arrow" href="/areas/">All service areas ${icons.arrow}</a></p>
    </article>
    ${asideCard({ related: s.related })}
  </div>
</section>
${ctaBand(s.cta)}`;
  return {
    path, priority: '0.7',
    html: page({ title: s.title, description: s.description, path, body, schema: [breadcrumbSchema(crumbs), faqSchema(s.faqs)], ogImage: `/images/${s.image}.webp`, assetHash }),
  };
});
