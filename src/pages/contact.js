import { site } from '../data/site.js';
import { page, breadcrumbSchema } from '../templates/layout.js';
import { icons, esc, pageHero, quoteForm, ratingBadge } from '../templates/components.js';

export default ({ assetHash }) => {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact/' }];
  const body = `
${pageHero({ h1: 'Contact Beg Your Garden: Free Lawn &amp; Garden Quote in Ipswich', lede: 'Call, email or send the form. We reply within one business day with a price and the route day for your suburb.', crumbs, plain: true })}
<section class="section">
  <div class="container contact-grid">
    <div>
      <div class="contact-info reveal">
        <div class="item"><span class="item__icon">${icons.phone}</span><div><strong>Call or text</strong><a href="tel:${site.phoneRaw}">${site.phone}</a></div></div>
        <div class="item"><span class="item__icon">${icons.mail}</span><div><strong>Email</strong><a href="mailto:${site.email}">${site.email}</a></div></div>
        <div class="item"><span class="item__icon">${icons.pin}</span><div><strong>Based in</strong><a href="/areas/">${site.suburb} QLD ${site.postcode} · servicing Ipswich &amp; Springfield</a></div></div>
        <div class="item"><span class="item__icon">${icons.clock}</span><div><strong>Hours</strong><span style="font-weight:600;color:var(--navy-900)">Mon–Fri 7am–6pm · Sat 7am–1pm</span></div></div>
      </div>
      <p style="margin:26px 0 18px">${ratingBadge()}</p>
      <div class="map-embed reveal">
        <iframe title="Beg Your Garden service area map, Raceview Ipswich QLD" src="https://www.google.com/maps?q=Raceview%20QLD%204305&z=11&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
      <p style="font-size:.85rem;color:var(--muted);margin-top:12px">We're a service-area business: we come to you, so there's no shopfront to visit.</p>
    </div>
    <div class="quote-card reveal reveal--right" id="quote">
      <h2>Request a free quote</h2>
      <p class="small">Lawn mowing, hedge reduction, gardening, pressure cleaning, rubbish removal, mulch laying, weed control, sprinkler installation or irrigation.</p>
      ${quoteForm({ id: 'contact-quote' })}
    </div>
  </div>
</section>`;
  return [{
    path: '/contact/',
    priority: '0.8',
    html: page({ title: 'Contact Beg Your Garden | Free Lawn Care Quote Ipswich', description: `Get a free lawn mowing or garden care quote in Ipswich. Call ${site.phone} or send the form. Based in Raceview, servicing Ipswich & Springfield.`, path: '/contact/', body, schema: [breadcrumbSchema(crumbs)], onDark: false, assetHash }),
  }];
};
