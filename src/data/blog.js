// Blog posts. Topics chosen from live Australian search-volume data (DataForSEO Google Ads, Sep 2026) and keyword
// difficulty (DataForSEO Labs). Volume figures are monthly averages for Australia; KD 0–5 means an easy top-10.
// Each post: slug, title (H1), metaTitle (≤60), description (≤160), keyword, volume note, date, image, excerpt, body (HTML), faqs.
export const posts = [
  {
    slug: 'lawn-grubs-ipswich-signs-and-treatment',
    title: 'Lawn Grubs in Ipswich: How to Spot Them and What to Do',
    metaTitle: 'Lawn Grubs in Ipswich: Signs & Treatment | Beg Your Garden',
    description: 'Brown patches spreading fast in summer? Lawn grubs and army worm hit Ipswich lawns from November. How to check, treat and recover your lawn.',
    keyword: 'lawn grubs', volume: '"lawn grubs" 5,400/mo, "lawn grub treatment" 1,000/mo, "army worm lawn" 390/mo. Peaks Dec–Mar.',
    date: '2026-10-13', readTime: 6, image: 'after-backyard-2-ipswich', imageAlt: 'Recovering back lawn in Ipswich after lawn grub treatment and a regular mow',
    excerpt: 'If a patch of your lawn turned brown in a week and it is not the heat, it is probably grubs. Here is how to check in two minutes and what to do about it.',
    related: 'weed-control-fertilising',
    body: `
<p>Every summer from about November we get the same call from Raceview, Springfield Lakes and Redbank Plains: "My lawn was fine last week and now there's a brown patch the size of a car." More often than not the answer is lawn grubs. They are the single most-searched lawn problem in Australia, and South East Queensland's warm, wet summers are exactly what they like.</p>
<h2>What lawn grubs actually are</h2>
<p>"Lawn grub" is a catch-all for a few different pests. In Ipswich the two that matter are:</p>
<ul>
<li><strong>Army worm and sod webworm</strong>, the caterpillars of small brown moths. They feed on the leaf blade at night, so the lawn looks grazed or scalped and turns brown from the top down. These are the fast ones: a lawn can go from green to brown in a few days.</li>
<li><strong>Curl grubs</strong> (the larvae of African black beetle and cockchafers). They live in the soil and eat the roots, so the grass yellows, loses vigour and can be rolled back like carpet because nothing is holding it down.</li>
</ul>
<p>Both show up most between December and March, with a second smaller wave in autumn, and both are far easier to deal with early.</p>
<h2>The two-minute check</h2>
<ol>
<li><strong>Soak a patch.</strong> Mix a bucket of warm water with a good squirt of dishwashing liquid and pour it over a square metre on the edge of the brown area, where it meets green grass. Army worm and webworm will come to the surface within ten minutes.</li>
<li><strong>Lift a corner.</strong> Push a spade in and lever up a sod. If the roots are gone and the grass peels away, or you can see fat white C-shaped grubs in the top five centimetres, you have curl grubs.</li>
<li><strong>Watch the birds.</strong> Magpies, ibis and butcherbirds pecking the same patch every morning are a reliable early warning.</li>
<li><strong>Look at the moths.</strong> Small brown moths lifting out of the lawn at dusk in December usually mean eggs have already been laid.</li>
</ol>
<h2>What usually works (and what doesn't)</h2>
<p><strong>Treat with a registered lawn grub product, applied properly.</strong> Granular products for curl grubs need to be watered in so they reach the root zone. Liquid or hose-on products for army worm and webworm need to go on in the late afternoon, because the caterpillars feed at night. Either way, follow the label rate; doubling it does not work faster and can burn the lawn.</p>
<p><strong>Treat the whole lawn, not just the patch.</strong> By the time a patch is visible the pests are already working outward into the green grass around it. Spraying only the brown area is why "it came back".</p>
<p><strong>Keep mowing, but lift the height.</strong> Scalping a stressed lawn makes it worse. Raise the cut a notch and keep the lawn moist (not soggy) while it recovers.</p>
<p><strong>Feed it afterwards.</strong> Once the pests are gone, a light application of a balanced lawn fertiliser plus consistent water will bring buffalo, couch and kikuyu back from leaf damage in two to four weeks. Root damage from curl grubs takes longer and bare patches may need a plug or seed repair.</p>
<p><strong>Skip the home remedies.</strong> Detergent brings grubs to the surface for a check, but it does not control them. Neither does petrol, bleach or "just mowing it short".</p>
<h2>Prevention for next summer</h2>
<p>A thick, healthy lawn is the best defence because it tends to recover faster than the grubs can eat it. Through spring: fertilise, water deeply but less often, and mow regularly at the right height. If you have had grubs two summers running, a preventative application in late November before the moths lay is far cheaper than a lawn repair in February.</p>
<div class="callout"><strong>Need it done?</strong> Beg Your Garden's ChemCert-accredited team treats lawn grubs across Ipswich and Springfield as part of our <a href="/services/weed-control-fertilising/">weed control &amp; fertilising</a> service, and can put the lawn on a mowing schedule so it recovers evenly.</div>`,
    faqs: [
      { q: 'How do I know if I have lawn grubs or just dry grass?', a: 'Dry grass browns evenly across sunny or high areas and greens up again after rain. Grub damage spreads outward from a patch in days, often with birds pecking at it, and the soapy-water test will bring caterpillars to the surface.' },
      { q: 'When is lawn grub season in Queensland?', a: 'December to March is the main season in South East Queensland, with a smaller wave in autumn. Warm nights after summer rain are when moth activity and egg laying peak.' },
      { q: 'Will my lawn recover from lawn grubs?', a: 'Usually, yes. Leaf damage from army worm recovers in two to four weeks with water and a light feed. Root damage from curl grubs takes longer and bare patches may need plugs or seed.' },
      { q: 'Can I mow a lawn that has grubs?', a: 'Yes, but raise the cutting height and avoid scalping. Mow a day or two after treating so the product has time to work.' },
    ],
  },
  {
    slug: 'when-to-fertilise-your-lawn-in-queensland',
    title: 'When to Fertilise Your Lawn in Queensland (and What to Use)',
    metaTitle: 'When to Fertilise Your Lawn in Queensland | Beg Your Garden',
    description: 'The best time to fertilise a lawn in South East Queensland, month by month, with what to use on buffalo, couch, kikuyu and zoysia. From Ipswich lawn pros.',
    keyword: 'when to fertilise lawn', volume: '"when to fertilise lawn" 480/mo, "best time to fertilise lawn" 260/mo, "best fertiliser for buffalo grass" 590/mo. KD 0.',
    date: '2026-09-08', readTime: 6, image: 'front-yard-mown-springfield', imageAlt: 'Thick green front lawn in Springfield after a spring fertilise and regular mowing',
    excerpt: 'Fertiliser only works when the grass is actively growing. In Ipswich that means two main windows and one you should skip. Here is the calendar.',
    related: 'weed-control-fertilising',
    body: `
<p>"When should I fertilise my lawn?" is one of the most searched lawn questions in Australia, and the answer depends entirely on where you live. In Ipswich and the Springfield corridor our lawns are warm-season grasses (buffalo, couch, kikuyu, zoysia) that grow hard from spring to autumn and slow right down in winter. Fertilise when they are growing and you get a thick green lawn. Fertilise when they are dormant and you mostly feed the weeds.</p>
<h2>The Queensland lawn fertilising calendar</h2>
<h3>Early spring (September): the main feed</h3>
<p>Once night temperatures stay above about 12°C and the lawn is visibly growing again, give it a full-rate application of a balanced slow-release lawn fertiliser. This is the most important feed of the year. It kick-starts growth, thickens the lawn before summer and helps it crowd out weeds.</p>
<h3>Early summer (late November to December): the top-up</h3>
<p>A lighter second application before the heat sets in keeps colour up through the storm season. If you are using a slow-release product this can be a half rate. Water it in well, ideally before rain.</p>
<h3>Autumn (March to April): the recovery feed</h3>
<p>After a hot summer, a balanced feed in early autumn repairs wear, thickens the lawn before winter and sets it up to green up faster in spring. Look for a product with a bit more potassium, which helps the grass cope with cold and stress.</p>
<h3>Winter (June to August): leave it</h3>
<p>Warm-season grasses are dormant or barely growing in an Ipswich winter. Fertiliser applied now sits in the soil, leaches with winter rain or feeds winter grass and broadleaf weeds. The exception is a dedicated iron or "winter green" product, which colours the leaf without pushing growth.</p>
<h2>What to use on each type of grass</h2>
<ul>
<li><strong>Buffalo (Sir Walter, Sapphire, Palmetto):</strong> a slow-release lawn fertiliser with a moderate nitrogen rate. Buffalo does not like being pushed with high-nitrogen fast-release products; it goes soft and thatchy.</li>
<li><strong>Couch:</strong> handles higher nitrogen well and responds fast. Feed a little more often, but keep mowing regularly or it will thatch up.</li>
<li><strong>Kikuyu:</strong> the hungriest and fastest grower. Moderate nitrogen is enough; more just means more mowing.</li>
<li><strong>Zoysia:</strong> light feeder. One spring and one autumn application is usually plenty.</li>
</ul>
<h2>How to apply it so it works</h2>
<ol>
<li>Mow a day or two before, so the fertiliser reaches the soil rather than sitting on long leaf.</li>
<li>Apply at the label rate with a spreader for an even result. Hand-throwing gives you stripes.</li>
<li>Water it in straight away (or apply just before steady rain). Fertiliser left dry on the leaf can burn the lawn, especially in summer.</li>
<li>Do not fertilise a drought-stressed, grub-damaged or freshly laid lawn. Fix the problem first, feed second.</li>
</ol>
<h2>Granular vs liquid</h2>
<p>Granular slow-release is the backbone: three or four applications a year does most of the work. Liquid or hose-on products are useful for a quick green-up before an event or an inspection, but they only last a few weeks. Organic pelletised products are gentle and improve the soil, but you need more of them and they can attract dogs.</p>
<div class="callout"><strong>Short on time?</strong> Our <a href="/services/weed-control-fertilising/">weed control &amp; fertilising</a> service feeds the lawn on the right calendar for your grass type, and our <a href="/services/lawn-mowing/">scheduled mowing</a> keeps it at the right height in between.</div>`,
    faqs: [
      { q: 'What is the best month to fertilise a lawn in Queensland?', a: 'September, once the lawn is actively growing again. A second lighter feed in late November and a recovery feed in March or April round out the year.' },
      { q: 'Should I fertilise my lawn in winter in Queensland?', a: 'Generally no. Warm-season grasses are dormant and will not use it. If you want winter colour, use an iron-based product rather than a growth fertiliser.' },
      { q: 'Can I fertilise before rain?', a: 'Yes, light steady rain is ideal because it waters the product in. Avoid fertilising before a heavy storm, which washes it off the lawn and into stormwater.' },
      { q: 'How long after fertilising can I mow?', a: 'Wait until the fertiliser has been watered in and the lawn has dried, usually two to three days. Mowing straight away can pick up the granules.' },
    ],
  },
  {
    slug: 'how-much-does-lawn-mowing-cost-ipswich',
    title: 'How Much Does Lawn Mowing Cost in Ipswich? A Straight Answer',
    metaTitle: 'How Much Does Lawn Mowing Cost in Ipswich? | Beg Your Garden',
    description: 'Typical lawn mowing prices in Ipswich and Springfield by block size, what changes the price, and why scheduled mowing costs less per visit than one-offs.',
    keyword: 'how much does lawn mowing cost', volume: '"how much does lawn mowing cost" 260/mo, "lawn mowing cost per hour" 70/mo, "jim mowing prices" 320/mo. KD 0.',
    date: '2026-09-22', readTime: 5, image: 'battery-mower-front-lawn-ipswich', imageAlt: 'Commercial mower on an Ipswich front lawn during a scheduled visit',
    excerpt: 'Most people want a number before they ask for a quote. Here is the honest range for Ipswich, what moves it up or down, and how to pay less per visit.',
    related: 'lawn-mowing',
    body: `
<p>Nobody likes asking for a quote without some idea of the answer, so here it is. Prices below are a guide to what Ipswich and Springfield homeowners typically pay a professional, insured lawn service in 2026. Your exact price depends on the block, which is why we quote from your address and a photo rather than a one-size-fits-all rate.</p>
<h2>Typical lawn mowing prices in Ipswich</h2>
<table class="table">
<thead><tr><th>Lawn</th><th>Typical block</th><th>Guide price per visit</th></tr></thead>
<tbody>
<tr><td>Small</td><td>Townhouse, courtyard or new-estate front and back under ~300 m² of grass</td><td>$55–$75</td></tr>
<tr><td>Standard</td><td>Most Ipswich suburban blocks, 300–600 m² of grass, verge included</td><td>$70–$100</td></tr>
<tr><td>Large</td><td>Big back yards, corner blocks, 600–1,000 m² of grass</td><td>$95–$150</td></tr>
<tr><td>Acreage</td><td>Rural fringe and small acreage, quoted on site</td><td>From $150, often hourly</td></tr>
</tbody>
</table>
<p>Those figures cover a proper visit: mow, edges along paths and driveways, whipper-snipping, the nature strip, a blow-down and the clippings taken away. A "mow only" price with no edges is cheaper but the yard never looks finished.</p>
<h2>What moves the price up or down</h2>
<ul>
<li><strong>How long the grass is.</strong> A fortnightly cut is quick. A lawn that has not been mowed for two months is a clean-up job: double handling, more clippings, often a brushcutter first. Expect a one-off clean-up to cost two to three times a scheduled visit.</li>
<li><strong>Access.</strong> Side gates narrower than a mower, steep slopes, steps and lots of obstacles (trampolines, clotheslines, garden ornaments) all add time.</li>
<li><strong>Edges and verges.</strong> Corner blocks have twice the kerb and footpath to edge. Long driveways and lots of garden beds add up too.</li>
<li><strong>Clippings.</strong> Removing clippings from site costs more than mulching them back in. Most clients want them gone.</li>
<li><strong>Frequency.</strong> This is the big one. A scheduled fortnightly client pays less per visit than a one-off, because the lawn is always in good condition and the visit is predictable.</li>
</ul>
<h2>Hourly rates vs a fixed price</h2>
<p>Searches for "lawn mowing cost per hour" are common, but an hourly rate is hard to compare because a slow operator with a small domestic mower takes twice as long as a professional with commercial gear. A fixed price per visit for your property is simpler, and it is what most Ipswich lawn services (including us) offer for regular work. Hourly makes sense for acreage, clean-ups and garden work where the scope is open-ended.</p>
<h2>Why cheap quotes often cost more</h2>
<p>Very low prices usually mean no insurance, no edges, no clippings removed, or a mower that scalps the lawn. Scalping buffalo in summer, or mowing wet couch with a blunt blade, can cost you a lawn repair that is worth months of mowing. Ask any quote what is included, whether they are insured, and what equipment they use.</p>
<h2>What Beg Your Garden charges</h2>
<p>We quote each property individually, from your address and a photo, usually the same day. Scheduled clients get a fixed price per visit, a set route day, a reminder before each visit and a photo after. There is no contract. Edges, verge, blow-down and clippings removal are always included.</p>
<div class="callout"><strong>Want your number?</strong> <a href="/contact/#quote">Send your address and a photo of the lawn</a> and we'll quote it today. Or read what's included in our <a href="/services/lawn-mowing/">lawn mowing service</a>.</div>`,
    faqs: [
      { q: 'What is the average cost of lawn mowing in Ipswich?', a: 'Most standard Ipswich blocks fall between about $70 and $100 per visit for a full service with edges, verge and clippings removed. Small courtyards are less, large and corner blocks more.' },
      { q: 'Is it cheaper to have lawn mowing done regularly?', a: 'Yes. Scheduled fortnightly or monthly mowing is priced lower per visit than one-off jobs because the lawn is always manageable and the visit is predictable.' },
      { q: 'Do lawn mowing prices include edges and the verge?', a: 'With Beg Your Garden, yes. Some operators quote mow-only and add edges, verge and clippings removal on top, so always ask what is included.' },
      { q: 'How much does an overgrown lawn clean-up cost?', a: 'Usually two to three times a scheduled visit, depending on how long the grass is and how much green waste needs removing. We quote it from a photo.' },
    ],
  },
  {
    slug: 'how-often-should-you-mow-your-lawn-queensland',
    title: 'How Often Should You Mow Your Lawn in Queensland?',
    metaTitle: 'How Often Should You Mow Your Lawn in QLD? | Beg Your Garden',
    description: 'How often to mow buffalo, couch, kikuyu and zoysia lawns in South East Queensland, season by season, plus the right cutting height and when not to mow.',
    keyword: 'how often should you mow your lawn', volume: '"how often should you mow your lawn" 140/mo, "mowing wet grass" 590/mo, "scalping a lawn" 590/mo. KD 0.',
    date: '2026-09-15', readTime: 5, image: 'hero-john-mowing-battery-raceview', imageAlt: 'John from Beg Your Garden mowing a Raceview lawn',
    excerpt: 'Fortnightly in summer, monthly in winter is the short answer. The long answer depends on your grass, the season and the one-third rule.',
    related: 'lawn-mowing',
    body: `
<p>The honest answer to "how often should I mow?" is: as often as it takes to never remove more than a third of the leaf in one cut. In an Ipswich summer that can mean every seven to ten days for kikuyu. In July it might be once a month. Here is how that plays out across the year for the grasses we mow most.</p>
<h2>The one-third rule</h2>
<p>Grass stores its energy in the leaf. Take off more than a third at once and the plant goes into shock: it browns, stops growing for a week or two, and opens up gaps for weeds. Mowing more often, at the right height, is less work for the lawn and leaves it thicker. It is also faster to mow, which is why scheduled clients get a better lawn for a lower price than people who call when it is knee-high.</p>
<h2>Season by season in South East Queensland</h2>
<table class="table">
<thead><tr><th>Season</th><th>Buffalo</th><th>Couch</th><th>Kikuyu</th><th>Zoysia</th></tr></thead>
<tbody>
<tr><td>Spring (Sep–Nov)</td><td>Every 10–14 days</td><td>Every 7–10 days</td><td>Every 7 days</td><td>Every 14 days</td></tr>
<tr><td>Summer (Dec–Feb)</td><td>Every 7–10 days</td><td>Every 7 days</td><td>Every 5–7 days</td><td>Every 10–14 days</td></tr>
<tr><td>Autumn (Mar–May)</td><td>Every 14 days</td><td>Every 10–14 days</td><td>Every 10 days</td><td>Every 14–21 days</td></tr>
<tr><td>Winter (Jun–Aug)</td><td>Every 3–4 weeks</td><td>Every 3–4 weeks</td><td>Every 2–3 weeks</td><td>Every 4 weeks</td></tr>
</tbody>
</table>
<p>Those are the intervals our set-day routes are built around. A fortnightly cycle from September to April and a three- to four-weekly cycle through winter suits the majority of Ipswich lawns.</p>
<h2>Cutting height matters as much as frequency</h2>
<ul>
<li><strong>Buffalo:</strong> 40–60 mm. Never scalp it; buffalo recovers slowly and burns in summer sun.</li>
<li><strong>Couch:</strong> 20–35 mm. Can be cut short, but only if it is mowed often; a short cut on long couch leaves it brown and stalky.</li>
<li><strong>Kikuyu:</strong> 30–45 mm. Tolerates almost anything but thatches if left long.</li>
<li><strong>Zoysia:</strong> 30–50 mm. Slow grower, so keep the blade sharp and do not over-mow.</li>
</ul>
<p>In summer heat, and in any shaded area, lift the height a notch. Longer leaf shades the soil, holds moisture and crowds out weeds.</p>
<h2>When not to mow</h2>
<p><strong>Wet grass.</strong> Mowing after a storm clumps the clippings, tears rather than cuts, and leaves ruts. If the lawn is soaked, wait a day. (Our route moves with the rain for exactly this reason.)</p>
<p><strong>Heat-stressed lawn.</strong> If the lawn is wilting in a heatwave, a hard cut will scorch it. Mow early in the morning or wait for a cooler day.</p>
<p><strong>Straight after fertilising.</strong> Give it two to three days.</p>
<p><strong>Freshly laid turf.</strong> Wait until it has rooted (tug a corner; if it holds, it is ready), then give it a light first cut on a high setting.</p>
<h2>Keep the blade sharp</h2>
<p>A blunt blade tears the leaf and leaves white, frayed tips that brown off within a day. If your lawn looks grey-brown the day after you mow, sharpen or replace the blade. Our commercial mowers are sharpened on a schedule for the same reason.</p>
<div class="callout"><strong>Never think about it again.</strong> Our <a href="/services/lawn-mowing/">scheduled lawn mowing</a> runs a set day for your street, fortnightly in the growing season and monthly in winter, at the right height for your grass.</div>`,
    faqs: [
      { q: 'How often should I mow my lawn in summer in Queensland?', a: 'Every 7 to 10 days for most buffalo and couch lawns, and weekly for kikuyu. The aim is never to remove more than a third of the leaf in one cut.' },
      { q: 'How often should I mow in winter?', a: 'Every three to four weeks is enough for most South East Queensland lawns between June and August. Growth slows right down, so mow high and less often.' },
      { q: 'Is it bad to mow wet grass?', a: 'Yes. It clumps, tears the leaf, spreads fungal disease and leaves ruts. Wait until the lawn has dried out.' },
      { q: 'Is scalping a lawn ever a good idea?', a: 'Only for couch in early spring to remove thatch, and only if you are prepared to water and feed it afterwards. Never scalp buffalo or zoysia.' },
    ],
  },
  {
    slug: 'how-to-fix-a-patchy-lawn',
    title: 'How to Fix a Patchy Lawn: Brown Spots, Bare Patches and Thin Grass',
    metaTitle: 'How to Fix a Patchy Lawn in Queensland | Beg Your Garden',
    description: 'Find the cause of brown patches or bare spots, then fix it: grubs, dog urine, shade, compaction, fungus or dry spots. Step-by-step lawn repair for QLD.',
    keyword: 'how to fix patchy lawn', volume: '"how to fix patchy lawn" 210/mo, "brown patches on lawn" 480/mo, "dead patches in lawn" 260/mo, "how to thicken lawn" 70/mo. KD 0.',
    date: '2026-09-29', readTime: 6, image: 'after-backyard-mown-ipswich', imageAlt: 'Back lawn in Ipswich recovering evenly after patch repair and scheduled mowing',
    excerpt: 'Patches have a cause. Work out which one you have first, fix it, then repair the grass. Otherwise the patch just comes back.',
    related: 'weed-control-fertilising',
    body: `
<p>Reseeding a bare patch without working out why it died is the most common lawn repair mistake we see. The new grass comes up, then dies for the same reason. So before you buy anything, diagnose the patch.</p>
<h2>Step 1: work out the cause</h2>
<table class="table">
<thead><tr><th>What it looks like</th><th>Likely cause</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Brown patch that spread fast in summer, birds pecking at it, grass pulls up easily</td><td>Lawn grubs or army worm</td><td>Treat the whole lawn, then repair. See our <a href="/blog/lawn-grubs-ipswich-signs-and-treatment/">lawn grub guide</a>.</td></tr>
<tr><td>Small round dead spots with a dark green ring, often near the back door</td><td>Dog urine</td><td>Flush with water, rake out dead grass, re-seed or plug. Train the dog to one spot.</td></tr>
<tr><td>Thin, pale grass under trees or beside a fence</td><td>Shade</td><td>Raise the mowing height, thin the canopy, switch to a shade-tolerant variety or mulch the area.</td></tr>
<tr><td>Hard, worn patches on paths, gates and under play equipment</td><td>Compaction and wear</td><td>Aerate with a fork or corer, top dress, re-seed or turf, and redirect traffic.</td></tr>
<tr><td>Circular or irregular brown patches after humid weather, sometimes with a smoky ring</td><td>Fungal disease (brown patch, dollar spot)</td><td>Water in the morning not evening, improve drainage, apply a lawn fungicide if it spreads.</td></tr>
<tr><td>Brown areas on slopes or in full sun that green up after rain</td><td>Dry spots and hydrophobic soil</td><td>Apply a soil wetting agent, water deeply, and check sprinkler coverage.</td></tr>
<tr><td>Grass yellowing in patches across the whole lawn</td><td>Nutrient deficiency or iron lock-up</td><td>Fertilise on the right calendar and add iron for colour.</td></tr>
</tbody>
</table>
<h2>Step 2: repair the patch</h2>
<ol>
<li><strong>Clear it.</strong> Rake out the dead grass and thatch until you can see soil.</li>
<li><strong>Loosen the soil.</strong> Fork it to 10 cm so new roots can get in. On hard clay (most of Ipswich) mix in a little sandy loam or a lawn top-dressing mix.</li>
<li><strong>Re-establish the grass.</strong> Couch and kikuyu can be seeded. Buffalo and zoysia cannot be grown from seed in Australia, so use plugs cut from a healthy edge of the lawn, or a square of turf. Plugs spaced 15 cm apart fill in over a season.</li>
<li><strong>Top dress lightly.</strong> A thin layer of lawn mix over seed or plugs keeps moisture in.</li>
<li><strong>Water little and often</strong> for the first two to three weeks, then taper to deep, less frequent watering.</li>
<li><strong>Feed after four weeks</strong> with a starter or balanced fertiliser, once the new grass is established.</li>
</ol>
<h2>Step 3: thicken the rest of the lawn</h2>
<p>A thick lawn does not get patches as easily. Mow more often at the right height, feed in spring and autumn, water deeply rather than daily, and deal with weeds early so they do not open up gaps. Most "patchy" lawns in Ipswich are actually thin lawns that have been mowed too short and fed too little.</p>
<h2>When to turf instead of repair</h2>
<p>If more than a third of the lawn is bare, or the soil underneath is builder's rubble, it is usually faster and cheaper to prepare the area properly and lay new turf than to chase patches for a year. Spring and early autumn are the best times to lay turf in South East Queensland.</p>
<div class="callout"><strong>Want it handled?</strong> We diagnose and treat patchy lawns across Ipswich as part of our <a href="/services/weed-control-fertilising/">weed control &amp; fertilising</a> service, then keep them thick with <a href="/services/lawn-mowing/">scheduled mowing</a>.</div>`,
    faqs: [
      { q: 'Why does my lawn have brown patches?', a: 'The usual causes in Queensland are lawn grubs, dog urine, dry hydrophobic soil, fungal disease after humid weather, shade or compaction. Each looks slightly different, so diagnose before you repair.' },
      { q: 'Can I grow buffalo grass from seed to fix a patch?', a: 'No. Buffalo and zoysia are not available as seed in Australia. Use plugs from a healthy part of the lawn or a piece of turf.' },
      { q: 'How long does a patchy lawn take to recover?', a: 'Seeded couch or kikuyu fills in within four to eight weeks in the growing season. Plugged buffalo takes a full season to knit together.' },
      { q: 'What is the best time to repair a lawn in Queensland?', a: 'Spring (September to November) and early autumn (March to April), when the grass is growing but the heat is not extreme.' },
    ],
  },
  {
    slug: 'get-rid-of-weeds-in-lawn-without-killing-grass',
    title: 'How to Get Rid of Weeds in Your Lawn Without Killing the Grass',
    metaTitle: 'Kill Lawn Weeds Without Killing Grass | Beg Your Garden',
    description: 'Bindis, nut grass, clover, winter grass and broadleaf weeds: how to identify common Queensland lawn weeds and remove them safely from buffalo, couch and kikuyu.',
    keyword: 'how to get rid of weeds in lawn', volume: '"killing weeds in buffalo lawn" 1,000/mo, "types of weeds in lawn" 590/mo, "common lawn weeds" 390/mo, "how to get rid of nut grass" 210/mo, "bindis in grass" 480/mo. KD 0.',
    date: '2026-10-06', readTime: 7, image: 'weed-control-ppe-spraying-ipswich', imageAlt: 'Beg Your Garden technician in PPE spot-spraying lawn weeds in Ipswich',
    excerpt: 'Most weed killers will take out buffalo along with the weed. Here is how to identify the five weeds we see most in Ipswich lawns and remove each one safely.',
    related: 'weed-control-fertilising',
    body: `
<p>The number one rule of lawn weed control: read the label for your grass type. Many broadleaf herbicides that are fine on couch and kikuyu will damage or kill buffalo. "Buffalo-safe" is printed on the front of the products that are, and if it is not, assume it is not. With that out of the way, here are the weeds we deal with most across Ipswich lawns and what works on each.</p>
<h2>Bindi (jo-jo, bindii)</h2>
<p><strong>Identify:</strong> a low, ferny, carrot-leaf rosette through winter that produces the prickly seed heads bare feet find in spring. <strong>Timing is everything:</strong> treat in late autumn or winter (June to August), before the prickles form. Once you can feel them it is too late for this year. <strong>Treat with:</strong> a bindi and clover herbicide labelled for your grass type, or hand-pull small infestations. A thick lawn mowed at the right height stops bindi getting established in the first place.</p>
<h2>Nut grass (nutgrass, Cyperus)</h2>
<p><strong>Identify:</strong> a glossy, upright, lime-green sedge with a triangular stem that grows faster than the lawn and pops up a day after mowing. <strong>Why it is hard:</strong> it spreads by underground "nuts". Pulling it leaves the nuts behind and makes more. <strong>Treat with:</strong> a selective nut grass herbicide (halosulfuron-based products are the standard and are safe on most lawns, including buffalo). Expect two or three applications across a season. Never rotary hoe it; you just plant the nuts everywhere.</p>
<h2>Winter grass (Poa annua)</h2>
<p><strong>Identify:</strong> bright, soft, tufty grass with white seed heads that appears in May and dies off in the heat, leaving bare patches. <strong>Treat with:</strong> a pre-emergent in autumn (April) to stop it germinating, or a selective winter grass herbicide once it is up. Mowing before it seeds limits next year's crop.</p>
<h2>Clover, creeping oxalis and other broadleaf weeds</h2>
<p><strong>Identify:</strong> clover has three round leaflets and white flowers; oxalis looks similar with heart-shaped leaflets and yellow flowers; cudweed, plantain, capeweed and dandelion are the other usual suspects. <strong>Treat with:</strong> a selective broadleaf herbicide (bromoxipil/MCPA based products are the common buffalo-safe option). Spot spray rather than blanket spray if there are only a few. Clover is also a sign of low nitrogen, so a feed helps the grass out-compete it.</p>
<h2>Crowsfoot, summer grass and other grassy weeds</h2>
<p><strong>Identify:</strong> coarse, pale, flat-growing grasses that appear in summer, often in thin or compacted areas. <strong>Treat with:</strong> these are the hardest, because most products that kill them also kill the lawn. A pre-emergent in early spring stops them germinating. Established plants are best hand-pulled, and the bare area repaired so the lawn fills in.</p>
<h2>Getting the application right</h2>
<ul>
<li>Spray on a still, dry morning with no rain forecast for 24 hours and no mowing for two days either side.</li>
<li>Use the label rate. More is not better and can burn the lawn.</li>
<li>Do not spray a drought-stressed lawn or in heat above 30°C.</li>
<li>Wear gloves, long sleeves and eye protection, and keep kids and pets off until dry.</li>
<li>Most lawn herbicides are registered for licensed use at commercial rates. For large areas or stubborn weeds a ChemCert-accredited operator can use products and rates that are not available over the counter.</li>
</ul>
<h2>The long game: a thick lawn</h2>
<p>Weeds get in where the grass is thin. The cheapest weed control is a lawn mowed at the right height on a regular schedule, fed in spring and autumn, and watered deeply rather than daily. We see it on the route every week: the lawns on a schedule have far fewer weeds than the ones mowed every six weeks.</p>
<div class="callout"><strong>Prefer not to spray it yourself?</strong> Our ChemCert AQF3-accredited team handles bindis, nut grass, winter grass and broadleaf weeds safely across Ipswich and Springfield. See <a href="/services/weed-control-fertilising/">weed control &amp; fertilising</a>.</div>`,
    faqs: [
      { q: 'What kills weeds but not buffalo grass?', a: 'Products labelled buffalo-safe, usually based on bromoxynil and MCPA for broadleaf weeds, or halosulfuron for nut grass. Always check the label for your grass type before spraying.' },
      { q: 'When should I treat bindis in Queensland?', a: 'In winter (June to August), while the plant is a soft rosette and before the prickles form in spring. Treating in spring is too late for that season.' },
      { q: 'How do I get rid of nut grass permanently?', a: 'Use a selective nut grass herbicide two or three times over a growing season to exhaust the underground nuts. Do not dig or pull it, which spreads it.' },
      { q: 'Does vinegar or salt kill lawn weeds?', a: 'They kill whatever they touch, including the grass, and salt damages the soil. They are not a selective option for lawns.' },
    ],
  },
  {
    slug: 'winter-lawn-care-south-east-queensland',
    title: 'Winter Lawn Care in South East Queensland: What to Do (and Not Do)',
    metaTitle: 'Winter Lawn Care in South East Queensland | Beg Your Garden',
    description: 'How to look after a buffalo, couch or kikuyu lawn through an Ipswich winter: mowing height, watering, winter grass and bindi, frost, and setting up spring.',
    keyword: 'lawn care in winter', volume: '"lawn care in winter" 140/mo, peaking 390/mo in June–July. "winter lawn care australia" KD 15.',
    date: '2026-10-01', readTime: 5, image: 'lawn-mowing-equipment-shade-ipswich', imageAlt: 'Mower and trimmer on a shaded Ipswich lawn during a winter visit',
    excerpt: 'Winter is when lawns are won or lost in Queensland. Less mowing, smarter watering, and the two weed jobs that save your summer.',
    related: 'lawn-mowing',
    body: `
<p>Ipswich winters are mild by most standards, but our lawns are warm-season grasses and they notice. Growth slows to a crawl from June, colour fades, and the lawn is at its most vulnerable to weeds and wear. The good news is that winter lawn care is mostly about doing less, and doing a couple of things at the right time.</p>
<h2>Mow less, and mow higher</h2>
<p>From June to August most Ipswich lawns only need a cut every three to four weeks. Raise the mowing height a notch (buffalo 50–60 mm, couch 30–35 mm, kikuyu 40–45 mm). The longer leaf keeps more green, shades out winter grass and protects the crown from frost. Do not scalp a lawn in winter to "tidy it up"; it will not grow back until September.</p>
<h2>Water deeply, rarely</h2>
<p>Dormant grass needs very little water, and cool nights mean overwatering invites fungus. If there has been no rain for three weeks and the lawn is going grey, give it one deep soak in the morning. Otherwise leave it. Turn automatic irrigation down to once a week or off.</p>
<h2>The two weed jobs that matter</h2>
<p><strong>Bindi.</strong> Winter is the only time to control bindi, while it is a soft rosette and before the prickles form. Treat in June or July with a bindi and clover product safe for your grass.</p>
<p><strong>Winter grass.</strong> The bright tufty grass that shows up in May and seeds through winter. A selective winter grass herbicide now, or a pre-emergent next April, stops it leaving bare patches when it dies off in spring.</p>
<p>Our <a href="/blog/get-rid-of-weeds-in-lawn-without-killing-grass/">lawn weed guide</a> covers both in detail.</p>
<h2>Skip the fertiliser (mostly)</h2>
<p>Warm-season grasses will not use a growth fertiliser in winter. Save the main feed for September. If you want colour for an inspection or an event, an iron-based "winter green" product greens the leaf without pushing growth. See our <a href="/blog/when-to-fertilise-your-lawn-in-queensland/">fertilising calendar</a>.</p>
<h2>Keep leaves and clutter off the lawn</h2>
<p>Deciduous trees, jacarandas and gum litter smother dormant grass and hold moisture against it. Rake or blow leaves off every couple of weeks, and move trampolines, pools and furniture so the grass underneath does not die out before spring.</p>
<h2>Frost</h2>
<p>Low-lying parts of Ipswich (Ripley, Rosewood, Walloon, the river flats) get frost. Frosted grass browns off but the crown usually survives. Do not walk on or mow a frosted lawn; wait until it has thawed and dried.</p>
<h2>Set up spring</h2>
<p>Late August is when winter care pays off. Aerate compacted areas with a fork, top dress low spots, sharpen the mower blade, and have your spring fertiliser ready for the first week the lawn is clearly growing again. A lawn that came through winter thick and weed-free will be green a month before the neighbours'.</p>
<div class="callout"><strong>On the schedule?</strong> Our routes drop to a three- to four-weekly cycle through winter and lift the cut height automatically, so your lawn is looked after without paying for cuts it doesn't need. See <a href="/services/lawn-mowing/">scheduled lawn mowing</a>.</div>`,
    faqs: [
      { q: 'How often should I mow my lawn in winter in Queensland?', a: 'Every three to four weeks for most buffalo, couch and kikuyu lawns in South East Queensland, at a slightly higher cutting height than summer.' },
      { q: 'Should I water my lawn in winter?', a: 'Rarely. A deep soak in the morning every three weeks or so in a dry spell is enough. Overwatering in winter encourages fungal disease.' },
      { q: 'Why is my lawn going brown in winter?', a: 'Warm-season grasses go dormant and lose colour in cold weather, and frost browns the leaf tips. It is normal and the lawn greens up again from September.' },
      { q: 'Can I fertilise my lawn in winter?', a: 'Growth fertiliser is wasted in winter. Use an iron-based product if you want colour, and save the main feed for early spring.' },
    ],
  },
  {
    slug: 'how-much-mulch-do-i-need',
    title: 'How Much Mulch Do I Need? A Garden Bed Calculator and Guide',
    metaTitle: 'How Much Mulch Do I Need? Calculator | Beg Your Garden',
    description: 'Work out how many cubic metres or bags of mulch your garden beds need, which mulch type suits Queensland gardens, and how to lay it so it lasts.',
    keyword: 'how much mulch do i need', volume: '"how much mulch do i need" 210/mo, "mulch types" 480/mo, "mulching for weed control" 260/mo. KD low.',
    date: '2026-09-01', readTime: 5, image: 'front-yard-mulch-garden-bed-ipswich', imageAlt: 'Freshly mulched front garden bed beside a mown lawn in Ipswich',
    excerpt: 'Length times width times depth, then add ten percent. Here is the quick maths, a worked example for a typical Ipswich bed, and which mulch to choose.',
    related: 'garden-maintenance',
    body: `
<p>Most people buy too little mulch, lay it too thin, and wonder why the weeds are back in a month. The maths is simple once you know the target depth, so here it is, plus a guide to the mulch types that actually suit Ipswich and Springfield gardens.</p>
<h2>The formula</h2>
<p><strong>Length (m) × width (m) × depth (m) = cubic metres.</strong> Then add about 10% for settling and uneven ground.</p>
<p>The right depth for most garden beds is <strong>75 mm (0.075 m)</strong>. Go to 100 mm for weed suppression in a bed you are not planting into for a while, and 50 mm around shallow-rooted plants and in small beds.</p>
<h3>Worked example</h3>
<p>A front garden bed 8 m long and 1.5 m wide at 75 mm deep: 8 × 1.5 × 0.075 = 0.9 m³. Add 10% and you need <strong>1 cubic metre</strong>.</p>
<h3>Bags vs bulk</h3>
<ul>
<li>A standard bag is about 50–70 litres. 1 m³ = 1,000 litres, so roughly 15–20 bags per cubic metre.</li>
<li>Bulk mulch from a landscape yard is sold by the cubic metre and is usually a third to half the price of bags once you need more than about 0.5 m³.</li>
<li>A 6×4 trailer holds about 1 m³ heaped. A standard ute tray holds a bit less.</li>
</ul>
<h2>Quick reference</h2>
<table class="table">
<thead><tr><th>Bed area</th><th>At 50 mm</th><th>At 75 mm</th><th>At 100 mm</th></tr></thead>
<tbody>
<tr><td>5 m²</td><td>0.3 m³</td><td>0.4 m³</td><td>0.55 m³</td></tr>
<tr><td>10 m²</td><td>0.55 m³</td><td>0.85 m³</td><td>1.1 m³</td></tr>
<tr><td>20 m²</td><td>1.1 m³</td><td>1.65 m³</td><td>2.2 m³</td></tr>
<tr><td>40 m²</td><td>2.2 m³</td><td>3.3 m³</td><td>4.4 m³</td></tr>
</tbody>
</table>
<p>Figures include the 10% allowance.</p>
<h2>Which mulch for a Queensland garden</h2>
<ul>
<li><strong>Hardwood chip or forest fines:</strong> the all-rounder. Lasts 12–18 months, suppresses weeds well, suits native and ornamental beds. Forest fines knit together and do not blow around.</li>
<li><strong>Tea tree mulch:</strong> fine, dark, looks sharp, lasts well and resists termites better than most. Good for front-of-house beds and around pools.</li>
<li><strong>Pine bark:</strong> chunky and decorative, slow to break down, but light and can wash out of sloping beds in a storm.</li>
<li><strong>Sugar cane or lucerne:</strong> for vegetable beds and anything you want to feed. Breaks down in a season and needs topping up.</li>
<li><strong>Pebbles and decorative stone:</strong> permanent and tidy, but they heat up in summer and do nothing for the soil. Best for courtyards and the strip beside the driveway.</li>
<li><strong>Coloured mulch:</strong> looks good on day one and fades within months in Queensland sun.</li>
</ul>
<h2>How to lay mulch so it lasts</h2>
<ol>
<li>Weed the bed properly first. Mulch slows weeds; it does not kill established ones.</li>
<li>Water the soil well before mulching, especially in summer.</li>
<li>Lay it 75 mm deep and keep it 5–10 cm clear of plant stems and tree trunks to avoid collar rot.</li>
<li>Rake it level and lightly water the surface to settle it.</li>
<li>Top up with 25–30 mm each spring.</li>
</ol>
<div class="callout"><strong>Easier to have it done?</strong> We supply and lay mulch across Ipswich and Springfield, including weeding and bed edging first, as part of our <a href="/services/garden-maintenance/">garden maintenance</a> service.</div>`,
    faqs: [
      { q: 'How many bags of mulch are in a cubic metre?', a: 'About 15 to 20 standard 50–70 litre bags. Once you need more than half a cubic metre, bulk mulch from a landscape yard is usually much cheaper.' },
      { q: 'How deep should mulch be?', a: '75 mm for most garden beds. Use 100 mm for weed suppression in an empty bed and 50 mm around shallow-rooted plants.' },
      { q: 'What is the best mulch for Queensland gardens?', a: 'Hardwood forest fines or tea tree mulch for general beds, sugar cane for vegetables, and pebbles for courtyards. Avoid dyed mulch, which fades fast in Queensland sun.' },
      { q: 'Does mulch stop weeds?', a: 'A 75–100 mm layer stops most weed seeds germinating by blocking light. It will not kill weeds that are already established, so weed the bed first.' },
    ],
  },
];
