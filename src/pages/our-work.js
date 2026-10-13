import { gallery, beforeAfter } from '../data/site.js';
import { page, breadcrumbSchema } from '../templates/layout.js';
import { icons, esc, pageHero, compare, ctaBand } from '../templates/components.js';

export default ({ assetHash }) => {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Our Work', href: '/our-work/' }];
  const figures = gallery.map((g) => `<figure class="${g.size}"><img src="/images/${g.src}.webp" alt="${esc(g.alt)}" loading="lazy" decoding="async"><figcaption>${esc(g.cap)}</figcaption></figure>`).join('');
  const body = `
${pageHero({ h1: 'Our Work: Lawn Mowing &amp; Garden Care Across Ipswich', lede: 'Real jobs from real route days in Raceview, Ripley, Springfield Lakes, Booval, Brassall and across Ipswich City. No stock photos in this gallery.', crumbs, image: 'front-yard-mulch-garden-bed-ipswich-1000', imageAlt: 'Front yard with fresh mulch and mown lawn in Ipswich' })}
<section class="section">
  <div class="container">
    <div class="section-head center reveal"><span class="eyebrow">Before &amp; after</span><h2>Overgrown to on-schedule</h2><p class="lede">Drag the handle to compare the first visit with the result.</p></div>
    <div class="grid grid-2 stagger">${beforeAfter.map(compare).join('')}</div>
  </div>
</section>
<section class="section section--off">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">Gallery</span><h2>Recent lawn mowing, edging, mulching and clean-ups in Ipswich</h2></div>
    <div class="gallery stagger">${figures}</div>
    <p style="margin-top:28px;color:var(--muted)">Want to see a job near you? Ask for photos from your suburb's route when you request a quote.</p>
  </div>
</section>
${ctaBand({ heading: '<em>Leaf it to us.</em> Your yard could be next.', sub: 'Send a photo of your lawn or garden with the quote form and we\'ll come back with a price and your route day.' })}`;
  return [{
    path: '/our-work/',
    html: page({ title: 'Our Work | Lawn & Garden Photos Ipswich | Beg Your Garden', description: 'Before & after photos of lawn mowing, edging, mulching and yard clean-ups by Beg Your Garden across Raceview, Ripley, Springfield Lakes & Ipswich.', path: '/our-work/', body, schema: [breadcrumbSchema(crumbs)], assetHash }),
  }];
};
