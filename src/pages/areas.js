import { site, suburbs, coreSuburbs, routeDays, reviews } from '../data/site.js';
import { page, breadcrumbSchema, faqSchema } from '../templates/layout.js';
import { icons, esc, pageHero, ctaBand, faqBlock, reviewCard, areasSection, suburbHref, img } from '../templates/components.js';
import { suburbPages } from '../data/areas.js';

const areaFaqs = [
  { q: 'Which Ipswich suburbs do you service for lawn mowing?', a: 'Raceview, Ripley, Springfield Lakes, Redbank Plains, Brassall, Booval, Bundamba, Yamanto, Silkstone, Flinders View, Karalee, Collingwood Park, Goodna and surrounding suburbs across Ipswich City.' },
  { q: 'Do you service Springfield, Springfield Central and Brookwater?', a: 'Yes. The Springfield corridor including Springfield, Springfield Central, Springfield Lakes, Brookwater, Augustine Heights, Spring Mountain and Camira is covered on our eastern routes.' },
  { q: 'Do you mow in the rural suburbs west of Ipswich?', a: 'Yes. Rosewood, Walloon, Thagoona, Marburg, Haigslea, Willowbank, Peak Crossing, Purga and the surrounding rural suburbs are serviced, with acreage and larger blocks quoted on site.' },
  { q: 'What if my suburb isn\'t on a current route day?', a: 'Ask. Routes are built from the streets we already mow, so a new suburb usually joins the nearest route day once there are a couple of homes on it.' },
];

export default ({ assetHash }) => {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Service Areas', href: '/areas/' }];
  const groups = {
    'Ipswich central & inner suburbs': ['Ipswich', 'East Ipswich', 'West Ipswich', 'North Ipswich', 'Basin Pocket', 'Booval', 'North Booval', 'Brassall', 'Bundamba', 'Blackstone', 'Churchill', 'Coalfalls', 'Dinmore', 'Eastern Heights', 'Ebbw Vale', 'Flinders View', 'Leichhardt', 'Moores Pocket', 'New Chum', 'Newtown', 'North Tivoli', 'One Mile', 'Raceview', 'Riverview', 'Sadliers Crossing', 'Silkstone', 'Tivoli', 'Woodend', 'Wulkuraka', 'Yamanto'],
    'Springfield & the eastern corridor': ['Augustine Heights', 'Bellbird Park', 'Brookwater', 'Camira', 'Carole Park', 'Collingwood Park', 'Gailes', 'Goodna', 'Redbank', 'Redbank Plains', 'Spring Mountain', 'Springfield', 'Springfield Central', 'Springfield Lakes', 'White Rock'],
    'Ripley Valley & the south': ['Ripley', 'South Ripley', 'Deebing Heights', 'Swanbank', 'Goolman', 'Peak Crossing', 'Purga', 'Mutdapilly', 'Mount Forbes', 'Ironbark', 'Willowbank', 'Jeebropilly', 'Amberley', 'Ebenezer'],
    'Karalee, Chuwar & the north': ['Karalee', 'Barellan Point', 'Chuwar', 'Pine Mountain', 'Muirlea', 'Blacksoil', 'Karrabin'],
    'Rosewood & the rural west': ['Rosewood', 'Walloon', 'Thagoona', 'Haigslea', 'Marburg', 'Ashwell', 'Calvert', 'Grandchester', 'Lanefield', 'Lower Mount Walker', 'Mount Marrow', 'Mount Mort', 'Mount Walker West', 'Tallegalla', 'The Bluff', 'Woolshed'],
  };
  const listed = new Set(Object.values(groups).flat());
  const missing = suburbs.filter((s) => !listed.has(s));
  if (missing.length) groups['Also serviced'] = missing;
  const groupHtml = Object.entries(groups).map(([name, list]) => `
<div class="reveal">
  <h3>${esc(name)}</h3>
  <div class="areas__chips">${list.map((s) => suburbHref(s) !== '/areas/' ? `<a class="chip chip--route chip--link" href="${suburbHref(s)}">${esc(s)}</a>` : `<span class="chip${coreSuburbs.includes(s) ? ' chip--route' : ''}">${esc(s)}</span>`).join('')}</div>
</div>`).join('');

  const body = `
${pageHero({ h1: 'Lawn Mowing &amp; Garden Care Service Areas Across Ipswich &amp; Springfield', lede: `Beg Your Garden is based in ${site.suburb} QLD ${site.postcode} and runs set-day lawn and garden routes across 80+ suburbs of Ipswich City and the Springfield corridor.`, crumbs, image: 'street-verge-mowing-raceview', imageAlt: 'Street verge mowing in Raceview, Ipswich' })}
<section class="section">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">Route days</span><h2>Where we mow, and when</h2><p class="lede">Green chips are route suburbs we're in every cycle. Every other suburb on this page is inside our service area and joins the nearest route day.</p></div>
    ${areasSection({ compact: true })}
  </div>
</section>
<section class="section section--green">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">Suburb guides</span><h2>Lawn mowing by suburb</h2><p class="lede">Our most-requested suburbs each have their own page: what the lawns are like, what's included, the route, and local FAQs.</p></div>
    <div class="grid grid-3 stagger suburb-grid">${[{ name: 'Ripley', slug: 'ripley', blurb: 'Friday route for Ripley, South Ripley and Deebing Heights new-build lawns.', image: 'front-yard-new-build-springfield-lakes' }, ...suburbPages.map((s) => ({ name: s.name, slug: s.slug, blurb: s.lede, image: s.image }))].map((s) => `<a class="suburb-card" href="/lawn-mowing-${s.slug}/">${img(s.image, { alt: `Lawn mowing in ${s.name}`, sizes: '(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px' })}<div><h3>Lawn mowing ${esc(s.name)}</h3><p>${esc(s.blurb)}</p><span class="link-arrow">${esc(s.name)} guide ${icons.arrow}</span></div></a>`).join('')}</div>
  </div>
</section>
<section class="section section--off">
  <div class="container">
    <div class="section-head reveal"><span class="eyebrow">80+ suburbs</span><h2>Lawn mowing, garden maintenance &amp; outdoor services by area</h2></div>
    <div class="grid" style="gap:36px">${groupHtml}</div>
  </div>
</section>
<section class="section">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">Local proof</span>
      <h2>Reviews from the route</h2>
      <p>Customers in Ripley, Brassall, Bundamba, Springfield Lakes, North Booval and Coalfalls have left ${site.reviewCount} reviews on Google at ${site.rating} stars. A couple from the suburbs we're asked about most:</p>
      <p><a class="link-arrow" href="/lawn-mowing-ripley/">Lawn mowing in Ripley ${icons.arrow}</a></p>
    </div>
    <div class="grid stagger" style="gap:16px">${[reviews[2], reviews[6]].map(reviewCard).join('')}</div>
  </div>
</section>
<section class="section section--off">
  <div class="container">
    <div class="section-head center reveal"><span class="eyebrow">FAQ</span><h2>Service area questions</h2></div>
    <div class="reveal">${faqBlock(areaFaqs, { id: 'faq-areas' })}</div>
  </div>
</section>
${ctaBand({ heading: '<em>Leaf it to us,</em> wherever you are in Ipswich.', sub: 'Tell us your suburb and we\'ll confirm your route day with the quote.' })}`;
  return [{
    path: '/areas/',
    priority: '0.8',
    html: page({ title: 'Lawn Mowing Service Areas Ipswich | Beg Your Garden', description: `Lawn mowing & garden care across 80+ Ipswich & Springfield suburbs: Raceview, Ripley, Springfield Lakes, Redbank Plains, Brassall & more. Free quote!`, path: '/areas/', body, schema: [breadcrumbSchema(crumbs), faqSchema(areaFaqs)], assetHash }),
  }];
};
