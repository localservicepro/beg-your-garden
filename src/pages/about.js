import { site, reviews } from '../data/site.js';
import { page, breadcrumbSchema } from '../templates/layout.js';
import { icons, esc, pageHero, credentialsGrid, ctaBand, reviewsWidget, ratingBadge, img } from '../templates/components.js';

export default ({ assetHash }) => {
  const crumbs = [{ name: 'Home', href: '/' }, { name: 'About', href: '/about/' }];
  const body = `
${pageHero({ h1: 'About Beg Your Garden: Ipswich\'s Scheduled Lawn &amp; Garden Team', lede: 'A local, police-checked team based in Raceview, running set-day lawn and garden routes across Ipswich and Springfield.', crumbs, image: 'hero-john-mowing-face-ipswich-generated', imageAlt: 'John from Beg Your Garden pushing a battery lawn mower across a mown lawn in Ipswich' })}
<section class="section">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">Who we are</span>
      <h2>Your local lawn &amp; garden experts in Ipswich</h2>
      <p>Beg Your Garden is run by John Wilson from Raceview, QLD 4305. We're a dedicated local team with years of hands-on experience, focused on honest, high-quality lawn and garden care for homeowners, investors, property managers and strata across Ipswich City and the Springfield corridor.</p>
      <p>We built the business around one idea: a lawn should be a system, not a chore. Fixed route days by suburb, a reminder before each visit, a photo when we leave, and the same crew every time. Shift workers, families with young kids and older residents tell us that's the part they value most.</p>
      <h3>Our mission</h3>
      <p>Keep the lawns and gardens of Ipswich looking their best all year round, by showing up on the day we say, doing what we said we'd do, and leaving work that speaks for itself.</p>
    </div>
    <div class="photo-frame photo-frame--tall reveal reveal--right">
      ${img('weed-control-ppe-spraying-ipswich', { alt: 'John Wilson of Beg Your Garden in PPE before a lawn weed control treatment in Ipswich', sizes: '(max-width: 900px) 100vw, 45vw' })}
      <div class="photo-frame__badge"><span class="big">AQF3</span><small>ChemCert accredited herbicide &amp; fertiliser application</small></div>
    </div>
  </div>
</section>

<section class="section section--off">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Credentials</span>
      <h2>Checked, certified and insured</h2>
      <p class="lede">Credentials available to clients, property managers and care coordinators. All current, all available on request.</p>
    </div>
    ${credentialsGrid()}
  </div>
</section>

<section class="section">
  <div class="container split split--rev">
    <div class="photo-frame reveal reveal--right">
      ${img('battery-mower-front-lawn-ipswich', { alt: 'Commercial lawn mower on an Ipswich front lawn', sizes: '(max-width: 900px) 100vw, 45vw' })}
    </div>
    <div class="reveal">
      <span class="eyebrow">How we work</span>
      <h2>Commercial gear, the same finish every time</h2>
      <p>We run commercial mowers, trimmers, hedge cutters and blowers, kept sharp and serviced on a schedule. Self-propelled mowers in two sizes handle everything from a Springfield Lakes courtyard to small acreage around Ripley, and the checklist is the same at every address.</p>
      <ul class="check-list" style="margin-top:16px">
        <li>Set-day routes by suburb, with reminders and photo updates</li>
        <li>Scheduled plans for homes, rentals, strata and care clients</li>
        <li>Written service notes for DVA and NDIS participants</li>
        <li>One-off clean-ups and pre-sale tidy-ups quoted separately</li>
      </ul>
    </div>
  </div>
</section>

<section class="section section--off">
  <div class="container">
    <div class="section-head center reveal"><span class="eyebrow">Reviews</span><h2>Trusted across Ipswich</h2><p>${ratingBadge()}</p></div>
    <div class="reveal">${reviewsWidget()}</div>
    <p class="center" style="margin-top:24px"><a class="link-arrow" href="${site.gbp}" target="_blank" rel="noopener">Read all ${site.reviewCount} reviews on Google ${icons.arrow}</a></p>
  </div>
</section>
${ctaBand({ heading: '<em>Leaf it to us.</em> Meet the team on your route day.', sub: 'Tell us about your property and we\'ll quote it, book it on the right route and introduce ourselves at the first visit.' })}`;
  return [{
    path: '/about/',
    html: page({ title: 'About Beg Your Garden | Lawn & Garden Care Ipswich', description: 'Meet Beg Your Garden: a police-checked, insured, ChemCert-accredited lawn & garden team from Raceview running set-day routes across Ipswich.', path: '/about/', body, schema: [breadcrumbSchema(crumbs)], assetHash }),
  }];
};
