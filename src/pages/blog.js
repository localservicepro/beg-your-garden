import { site } from '../data/site.js';
import { posts } from '../data/blog.js';
import { page, breadcrumbSchema, faqSchema } from '../templates/layout.js';
import { icons, esc, pageHero, ctaBand, faqBlock, asideCard, postCard, fmtDate } from '../templates/components.js';

const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

function postSchema(p, path) {
  return {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    '@id': `${site.url}${path}#post`, headline: p.title, description: p.description,
    image: `${site.url}/images/${p.image}.webp`, datePublished: p.date, dateModified: p.date,
    author: { '@type': 'Organization', name: site.name, url: `${site.url}/` },
    publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: `${site.url}/images/logo-full.webp` } },
    mainEntityOfPage: `${site.url}${path}`, keywords: p.keyword, inLanguage: 'en-AU',
    about: { '@type': 'Place', name: 'Ipswich, Queensland' },
  };
}

export default ({ assetHash }) => {
  const indexCrumbs = [{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog/' }];
  const indexBody = `
${pageHero({ h1: 'Lawn &amp; Garden Care Tips for Ipswich and Springfield', lede: 'Practical, Queensland-specific advice from the Beg Your Garden route: when to feed, how often to mow, what to do about grubs, weeds and patches, and how much it all costs.', crumbs: indexCrumbs, plain: true })}
<section class="section">
  <div class="container">
    <div class="grid grid-3 stagger post-grid">${sorted.map((p) => postCard(p)).join('')}</div>
  </div>
</section>
${ctaBand({ heading: '<em>Leaf it to us.</em> Skip the DIY.', sub: 'Scheduled mowing, feeding, weed control and garden care across Ipswich and Springfield. Send your address and we\'ll quote it today.' })}`;
  const index = {
    path: '/blog/', priority: '0.6',
    html: page({ title: 'Lawn & Garden Care Tips for Ipswich | Beg Your Garden Blog', description: 'Queensland lawn care advice from Ipswich lawn pros: when to fertilise, how often to mow, lawn grubs, weeds, patchy lawns, winter care and mulch guides.', path: '/blog/', body: indexBody, schema: [breadcrumbSchema(indexCrumbs)], assetHash }),
  };

  const postPages = sorted.map((p, i) => {
    const path = `/blog/${p.slug}/`;
    const crumbs = [...indexCrumbs, { name: p.title, href: path }];
    const more = sorted.filter((x) => x.slug !== p.slug).slice(i % 2 === 0 ? 0 : 1, (i % 2 === 0 ? 0 : 1) + 3);
    const body = `
${pageHero({ h1: p.title, lede: p.excerpt, crumbs, image: p.image, imageAlt: p.imageAlt })}
<section class="section">
  <div class="container layout-2col">
    <article class="prose post">
      <p class="post-meta"><span>${icons.calendar} <time datetime="${p.date}">${fmtDate(p.date)}</time></span><span>${icons.clock} ${p.readTime} min read</span><span>${icons.pin} Ipswich &amp; Springfield, QLD</span></p>
      ${p.body}
      <h2>Frequently asked questions</h2>
      ${faqBlock(p.faqs, { id: `faq-${p.slug}` })}
      <p style="margin-top:28px"><a class="link-arrow" href="/blog/">All lawn &amp; garden tips ${icons.arrow}</a></p>
    </article>
    ${asideCard({ related: [p.related, 'lawn-mowing'].filter((v, k, a) => a.indexOf(v) === k) })}
  </div>
</section>
<section class="section section--off">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">Keep reading</span><h2>More from the route</h2></div>
    <div class="grid grid-3 stagger post-grid">${more.map((m) => postCard(m)).join('')}</div>
  </div>
</section>
${ctaBand({ heading: '<em>Leaf it to us.</em> Hand the lawn over.', sub: 'Scheduled mowing and garden care across Ipswich and Springfield. Send your address and a photo and we\'ll quote it today.' })}`;
    return {
      path, priority: '0.6',
      html: page({ title: p.metaTitle, description: p.description, path, body, schema: [breadcrumbSchema(crumbs), postSchema(p, path), faqSchema(p.faqs)], ogImage: `/images/${p.image}.webp`, assetHash }),
    };
  });
  return [index, ...postPages];
};
