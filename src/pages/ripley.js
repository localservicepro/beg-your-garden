import { site, reviews } from '../data/site.js';
import { page, breadcrumbSchema, faqSchema } from '../templates/layout.js';
import { icons, esc, pageHero, ctaBand, faqBlock, reviewCard, asideCard } from '../templates/components.js';

const faqs = [
  { q: 'What day do you mow in Ripley?', a: 'Ripley is a Friday route. Scheduled clients in Ripley and South Ripley get their visit on Fridays, with a reminder the day before and an early heads-up if rain moves the route.' },
  { q: 'Do you mow new-build lawns in Ripley?', a: 'Yes. New turf in Ripley estates needs a gentle, regular cut to thicken up. We set the height and cycle for fresh turf and adjust as it establishes.' },
  { q: 'Can you look after the garden and hedges as well as the lawn in Ripley?', a: 'Yes. Hedge trimming, mulching, weed control, fertilising, pressure cleaning and green waste removal can all be added to your Ripley lawn plan.' },
];

export default ({ assetHash }) => {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Service Areas', href: '/areas/' }, { name: 'Lawn Mowing Ripley', href: '/lawn-mowing-ripley/' }];
  const body = `
${pageHero({ h1: 'Lawn Mowing Ripley: Friday Route, Sharp Edges, Set-and-Forget Service', lede: 'Beg Your Garden provides scheduled lawn mowing in Ripley and South Ripley every Friday with a reminder before every visit.', crumbs, image: 'front-yard-new-build-springfield-lakes', imageAlt: 'Freshly mown front lawn of a new-build home near Ripley, Ipswich' })}
<section class="section">
  <div class="container layout-2col">
    <article class="prose">
      <p>Ripley is one of the fastest-growing suburbs in Queensland, and most of its lawns are young: fresh turf on compacted builder's soil, narrow side access, a verge the council expects you to keep, and neighbours ten metres away in every direction. Lawn mowing in Ripley is about keeping that new lawn thick and even with a regular cut at the right height.</p>
      <p>Beg Your Garden runs Ripley as a Friday route. Your lawn goes on the schedule, you get a message the day before, and the mow, edges, whipper-snipping and blow-down are done the same way every visit. Our self-propelled commercial mowers fit through standard side gates and leave a clean, striped finish.</p>
      <h2>What's included in lawn mowing in Ripley</h2>
      <ul class="check-list">
        <li>Mow at the right height for buffalo, couch or zoysia turf</li>
        <li>Edges along driveways, paths, kerbs and garden beds</li>
        <li>Verge and nature strip mowed with the lawn</li>
        <li>Blow-down of driveway, paths and alfresco</li>
        <li>Clippings removed, gates closed, photo update sent</li>
      </ul>
      <h2>Ripley, South Ripley, Deebing Heights and Spring Mountain</h2>
      <p>The Friday route covers Ripley Town Centre estates, South Ripley, Deebing Heights, White Rock and the Spring Mountain side. Larger blocks toward the rural edge, and small acreage around Peak Crossing and Purga, are quoted on site for the wider-cut mower and a brushcutter for the rough edges.</p>
      <h2>Add garden care to your Ripley lawn plan</h2>
      <p>Hedge trimming for lilly pilly screens, mulch for new garden beds, bindi and weed control in autumn, fertilising in spring, and pressure cleaning of the driveway before a rental inspection. Most Ripley clients start with scheduled mowing and add the rest as the garden grows in.</p>
      <h2>From a Ripley customer</h2>
      ${reviewCard(reviews[2])}
      <h2>Lawn mowing Ripley FAQs</h2>
      ${faqBlock(faqs, { id: 'faq-ripley' })}
      <p style="margin-top:28px"><a class="link-arrow" href="/services/lawn-mowing/">Lawn mowing service details ${icons.arrow}</a> &nbsp;·&nbsp; <a class="link-arrow" href="/areas/">All service areas ${icons.arrow}</a></p>
    </article>
    ${asideCard({ related: ['lawn-mowing', 'garden-maintenance', 'weed-control-fertilising'] })}
  </div>
</section>
${ctaBand({ heading: '<em>Leaf it to us.</em> Join the Ripley Friday route.', sub: 'Send your address and a note about the lawn and we\'ll quote it and confirm the next Friday visit.' })}`;
  return [{
    path: '/lawn-mowing-ripley/',
    priority: '0.7',
    html: page({ title: 'Lawn Mowing Ripley | Friday Route | Beg Your Garden', description: 'Scheduled lawn mowing in Ripley & South Ripley every Friday. Sharp edges, verge included, reminders before each visit, photo after. Free quote!', path: '/lawn-mowing-ripley/', body, schema: [breadcrumbSchema(crumbs), faqSchema(faqs)], ogImage: '/images/front-yard-new-build-springfield-lakes.webp', assetHash }),
  }];
};
