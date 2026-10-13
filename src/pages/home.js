import { site, homeFaqs, beforeAfter } from '../data/site.js';
import { page, faqSchema } from '../templates/layout.js';
import { icons, servicesGrid, reviewsMarquee, ratingBadge, faqBlock, ctaBand, areasSection, compare, credentialsGrid } from '../templates/components.js';

export default ({ assetHash }) => {
  const body = `
<section class="hero" id="top">
  <div class="hero__media">
    <img src="/images/hero-john-mowing-face-ipswich-generated.webp" srcset="/images/hero-john-mowing-face-ipswich-generated-640.webp 640w, /images/hero-john-mowing-face-ipswich-generated.webp 1200w" sizes="100vw" width="1200" height="675" alt="John from Beg Your Garden pushing a battery lawn mower across a freshly mown lawn in Ipswich QLD" fetchpriority="high" decoding="async">
    <video class="hero__video" autoplay muted loop playsinline preload="metadata" poster="/images/hero-john-mowing-face-ipswich-generated.webp" aria-hidden="true" tabindex="-1">
      <source src="/video/hero-john-mowing-ipswich.mp4" type="video/mp4">
      <source src="/video/hero-john-mowing-ipswich.webm" type="video/webm">
    </video>
  </div>
  <div class="hero__overlay"></div>
  <div class="container hero__grid">
    <div>
      <div class="hero__pill reveal-up"><span class="dot">${icons.star}</span><span class="stars">★★★★★</span> ${site.rating} · ${site.reviewCount} Google reviews · Ipswich</div>
      <h1 class="reveal-up">Lawn Mowing Ipswich: <em>Quiet, Reliable, Scheduled</em> Lawn &amp; Garden Care</h1>
      <p class="lede reveal-up">Set-day lawn mowing in Ipswich and garden care across Raceview, Ripley, Springfield Lakes and the Springfield corridor. Commercial battery gear so quiet the neighbours sleep through it, a message before we arrive, and a photo when we're done.</p>
      <div class="btn-row reveal-up">
        <a class="btn btn--lg" href="/contact/#quote">Get a free quote ${icons.arrow}</a>
        <a class="btn btn--outline-light btn--lg" href="tel:${site.phoneRaw}">${icons.phone} ${site.phone}</a>
      </div>
      <div class="hero__proof reveal-up">
        <div>${icons.check} Police checked</div>
        <div>${icons.check} Blue Card holder</div>
        <div>${icons.check} ChemCert AQF3</div>
        <div>${icons.check} Fully insured</div>
      </div>
    </div>
    </div>
  </div>
</section>

<div class="container trust">
  <div class="trust__box stagger">
    <div class="stat"><span class="stat__icon">${icons.star}</span><div><strong><span data-count="4.9">0</span>★</strong><small>Google rating, ${site.reviewCount} reviews</small></div></div>
    <div class="stat"><span class="stat__icon">${icons.pin}</span><div><strong><span data-count="84" data-suffix="+">0</span></strong><small>Ipswich &amp; Springfield suburbs</small></div></div>
    <div class="stat"><span class="stat__icon">${icons.battery}</span><div><strong><span data-count="100" data-suffix="%">0</span></strong><small>Battery equipment, no fumes</small></div></div>
    <div class="stat"><span class="stat__icon">${icons.calendar}</span><div><strong>Set-day</strong><small>Routes, reminders &amp; photos</small></div></div>
  </div>
</div>

<section class="section" id="about-intro">
  <div class="container split">
    <div class="photo-frame reveal reveal--left">
      <img src="/images/front-yard-mulch-garden-bed-ipswich-1000.webp" srcset="/images/front-yard-mulch-garden-bed-ipswich-640.webp 640w, /images/front-yard-mulch-garden-bed-ipswich-1000.webp 1000w" sizes="(max-width: 900px) 100vw, 50vw" width="1000" height="450" alt="Front yard lawn mowing and garden bed mulching by Beg Your Garden in Ipswich" loading="lazy" decoding="async">
      <div class="photo-frame__badge"><span class="big">${site.rating}★</span><small>${site.reviewCount} Google reviews from Ipswich homes, rentals and strata</small></div>
    </div>
    <div class="reveal">
      <span class="eyebrow">Your local team in Raceview</span>
      <h2>Lawn mowing in Ipswich that runs like clockwork</h2>
      <p>Beg Your Garden is a local, police-checked team based in Raceview, QLD 4305. We give Ipswich families, shift workers, landlords and DVA and NDIS clients a simple, set-and-forget path to a tidy, healthy lawn: fixed route days by suburb, a reminder before every visit, and a quick wrap-up with photos after.</p>
      <p>Everything we run is commercial battery equipment. It cuts as cleanly as petrol, with a fraction of the noise and no fumes drifting through your windows. Alongside lawn mowing in Ipswich we handle hedge reduction, gardening, mulch laying, weed control and fertilising, pressure cleaning, green waste and rubbish removal, sprinkler installation and irrigation, so one team keeps the whole property to one standard.</p>
      <div class="btn-row" style="margin-top:22px"><a class="btn btn--navy" href="/about/">More about us ${icons.arrow}</a><a class="link-arrow" href="/services/">All nine services ${icons.arrow}</a></div>
    </div>
  </div>
</section>

<section class="section section--off" id="services">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Services</span>
      <h2>Lawn mowing, garden maintenance &amp; outdoor services across Ipswich</h2>
      <p class="lede">Nine services, one scheduled plan. Each page covers what's included, the suburbs we run it in, and what to expect on the day.</p>
    </div>
    ${servicesGrid()}
    <p class="center" style="margin-top:28px;color:var(--muted)">Lawn mowing · Hedge reduction · Gardening · Pressure cleaning · Rubbish removal · Mulch laying · Weed control · Sprinkler installation · Irrigation</p>
  </div>
</section>

<section class="section section--navy" id="why">
  <div class="container split split--rev">
    <div class="photo-frame photo-frame--navy reveal reveal--right">
      <img src="/images/battery-mower-greenworks-collage-640.webp" srcset="/images/battery-mower-greenworks-collage-640.webp 640w, /images/battery-mower-greenworks-collage.webp 1020w" sizes="(max-width: 900px) 100vw, 45vw" width="1020" height="1020" alt="Commercial Greenworks battery mowers used by Beg Your Garden for quiet lawn mowing in Ipswich" loading="lazy" decoding="async" style="aspect-ratio:1/1">
    </div>
    <div class="reveal">
      <span class="eyebrow" style="color:#CBE6A5">Why Beg Your Garden</span>
      <h2>Make the lawn a system, not a chore</h2>
      <p style="color:rgba(255,255,255,.82)">Lawns thrive on rhythm. A reliable cycle gives even growth, strong roots and a clean edge that lasts. That's the whole idea behind our lawn mowing in Ipswich: a schedule that runs like a good habit, instead of a scramble every time the grass gets away.</p>
      <div class="features" style="margin-top:28px">
        <div class="feature"><span class="feature__icon">${icons.calendar}</span><div><h3>Schedule over chaos</h3><p>Your lawn is booked on fixed route days. Your visit never gets bumped for ad-hoc jobs.</p></div></div>
        <div class="feature"><span class="feature__icon">${icons.volume}</span><div><h3>Battery equipment only</h3><p>Quiet, commercial gear that cuts cleanly, protects hearing and leaves no fumes. Shift workers sleep through our visits.</p></div></div>
        <div class="feature"><span class="feature__icon">${icons.bell}</span><div><h3>Communication that removes doubt</h3><p>A note before we come, an early heads-up if rain moves the route, and a photo update after every visit.</p></div></div>
        <div class="feature"><span class="feature__icon">${icons.shield}</span><div><h3>Police-checked, Blue Card, insured</h3><p>ChemCert AQF3 accredited for treatments, and trusted by DVA clients and NDIS participants across Ipswich.</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="process">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">How it works</span>
      <h2>From first quote to a lawn you don't think about</h2>
      <p class="lede" style="margin-inline:auto">Four steps from “can someone just mow this?” to scheduled lawn mowing in Ipswich that happens without you.</p>
    </div>
    <div class="steps stagger">
      <div class="step"><h3>Tell us about the yard</h3><p>Send the form or call. A few details on size, access and what you'd like done is all we need to start.</p></div>
      <div class="step"><h3>Get a clear quote</h3><p>A price per visit from a quick estimate, confirmed on site. No surprise extras for edging, blowing or clippings.</p></div>
      <div class="step"><h3>Join your route day</h3><p>Your suburb's set day goes in the calendar. You get a reminder before each visit and a photo after.</p></div>
      <div class="step"><h3>Enjoy the lawn</h3><p>Edges hold their line, paths stay clean, and the lawn sits at the right height for the season. Adjust the plan any time.</p></div>
    </div>
  </div>
</section>

<section class="section section--green" id="pricing">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">Pricing</span>
      <h2>How much does lawn mowing cost in Ipswich?</h2>
      <p>Every yard is different, and so are our clients' needs. We're not the local “cut-and-go” outfit: the price of lawn mowing in Ipswich with us covers a reliable scheduled visit from a police-checked, Blue Card-certified, fully insured team, with communication you can count on.</p>
      <p>Most residential lawns in Ipswich fall between a set price per visit based on lawn size and access. We quote from a quick estimate, confirm it on site, and the price includes mowing, edging, whipper-snipping, blow-down and clippings. Fertilising, weed control, hedging and the rest are added to the plan at the rates we quote up front.</p>
      <div class="btn-row" style="margin-top:22px"><a class="btn" href="/contact/#quote">Get my lawn mowing price ${icons.arrow}</a><a class="link-arrow" href="/services/lawn-mowing/">What's included ${icons.arrow}</a></div>
    </div>
    <div class="reveal reveal--right">
      ${credentialsGrid()}
    </div>
  </div>
</section>

<section class="section" id="results">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Before &amp; after</span>
      <h2>A yard that looks after you</h2>
      <p class="lede">Drag the handle. Real backyards from our lawn mowing Ipswich routes, photographed after the first scheduled visit.</p>
    </div>
    <div class="grid grid-2 stagger">${beforeAfter.map(compare).join('')}</div>
    <p class="center" style="margin-top:28px"><a class="btn btn--ghost" href="/our-work/">See more of our work ${icons.arrow}</a></p>
  </div>
</section>

<section class="section section--off" id="reviews">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Reviews</span>
      <h2>What Ipswich customers say about our lawn mowing</h2>
      <p style="margin-top:8px">${ratingBadge()}</p>
    </div>
  </div>
  <div class="reveal">${reviewsMarquee()}</div>
</section>

<section class="section" id="areas">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Areas we service</span>
      <h2>Lawn mowing across Ipswich City &amp; the Springfield corridor</h2>
      <p class="lede">Raceview is home base. From there, set-day lawn mowing Ipswich routes cover the city, Springfield and the rural fringe, 84 suburbs in all.</p>
    </div>
    ${areasSection({ compact: true })}
    <p style="margin-top:24px"><a class="link-arrow" href="/areas/">See every suburb we cover ${icons.arrow}</a></p>
  </div>
</section>

<section class="section section--off" id="faq">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">FAQ</span>
      <h2>Lawn mowing Ipswich: questions we get asked</h2>
    </div>
    <div class="reveal">${faqBlock(homeFaqs)}</div>
  </div>
</section>

${ctaBand({ heading: '<em>Leaf it to us.</em> Your lawn, on a schedule.', sub: 'Tell us about your lawn or garden and we\'ll come back with a clear quote and the route day for your street. No chasing, no surprises.' })}
`;

  return [{
    path: '/',
    priority: '1.0',
    html: page({
      title: 'Lawn Mowing Ipswich | Beg Your Garden Lawn & Garden Care',
      description: 'Reliable lawn mowing in Ipswich from Beg Your Garden. Quiet battery gear, set-day visits & full garden care across Raceview, Ripley & Springfield. Free quote!',
      path: '/',
      body,
      schema: [faqSchema(homeFaqs)],
      ogImage: '/images/hero-john-mowing-battery-raceview.webp',
      assetHash,
    }),
  }];
};
