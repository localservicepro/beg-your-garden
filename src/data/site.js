// All business facts, copy and SEO strings for the site live here.
// SEO strings (H1s, titles, meta descriptions, URLs, FAQ copy) are taken
// verbatim from the approved Step 1 research report (12 Oct 2026).

export const site = {
  name: 'Beg Your Garden',
  legalName: 'Beg Your Garden - Lawn and Garden Care',
  tagline: 'Leaf it to us – Beg Your Garden, where grass is greener',
  phone: '0411 638 432',
  phoneRaw: '+61411638432',
  email: 'team@begyourgarden.com',
  url: 'https://www.begyourgarden.com',
  suburb: 'Raceview',
  state: 'QLD',
  postcode: '4305',
  region: 'Ipswich',
  gbp: 'https://share.google/GRGpHViFyXyobowPZ',
  mapsPlace: 'https://www.google.com/maps/place/Beg+Your+Garden+-+Lawn+and+Garden+Care/data=!4m2!3m1!1s0x0:0x21e22114779b9d9c',
  facebook: 'https://www.facebook.com/profile.php?id=61557567952607',
  rating: '4.9',
  reviewCount: '67',
  owner: 'Johnathon (John) Wilson',
  geo: { lat: -27.6386, lng: 152.7785 }, // Raceview QLD centroid (service-area business, no street address shown)
  hours: [
    { days: 'Monday – Friday', open: '07:00', close: '18:00', label: '7:00am – 6:00pm' },
    { days: 'Saturday', open: '07:00', close: '13:00', label: '7:00am – 1:00pm' },
  ],
  trackingScript: {
    src: 'https://app.begyourgarden.com/js/external-tracking.js',
    id: 'tk_e59f9b2a0c9242dda56136d98144604c',
  },
};

export const routeDays = [
  { suburb: 'Raceview', day: 'Wednesday' },
  { suburb: 'Ripley', day: 'Friday' },
];

export const suburbs = [
  'Amberley', 'Ashwell', 'Augustine Heights', 'Barellan Point', 'Basin Pocket', 'Bellbird Park', 'Blacksoil', 'Blackstone', 'Booval', 'Brassall', 'Brookwater', 'Bundamba', 'Calvert', 'Camira', 'Carole Park', 'Churchill', 'Chuwar', 'Coalfalls', 'Collingwood Park', 'Deebing Heights', 'Dinmore', 'East Ipswich', 'Eastern Heights', 'Ebbw Vale', 'Ebenezer', 'Flinders View', 'Gailes', 'Goodna', 'Goolman', 'Grandchester', 'Haigslea', 'Ipswich', 'Ironbark', 'Jeebropilly', 'Karalee', 'Karrabin', 'Lanefield', 'Leichhardt', 'Lower Mount Walker', 'Marburg', 'Moores Pocket', 'Mount Forbes', 'Mount Marrow', 'Mount Mort', 'Mount Walker West', 'Muirlea', 'Mutdapilly', 'New Chum', 'Newtown', 'North Booval', 'North Ipswich', 'North Tivoli', 'One Mile', 'Peak Crossing', 'Pine Mountain', 'Purga', 'Raceview', 'Redbank', 'Redbank Plains', 'Ripley', 'Riverview', 'Rosewood', 'Sadliers Crossing', 'Silkstone', 'South Ripley', 'Spring Mountain', 'Springfield', 'Springfield Central', 'Springfield Lakes', 'Swanbank', 'Tallegalla', 'Thagoona', 'The Bluff', 'Tivoli', 'Walloon', 'West Ipswich', 'White Rock', 'Willowbank', 'Woodend', 'Woolshed', 'Wulkuraka', 'Yamanto',
];

// Suburbs on the current set-day routes / most-asked-for (shown first).
export const coreSuburbs = ['Raceview', 'Ripley', 'Springfield Lakes', 'Redbank Plains', 'Brassall', 'Booval', 'Bundamba', 'Yamanto', 'Silkstone', 'Flinders View', 'Karalee', 'Collingwood Park', 'Goodna', 'Augustine Heights', 'Springfield', 'North Ipswich', 'East Ipswich', 'Leichhardt', 'Riverview', 'Churchill'];

export const credentials = [
  { icon: 'shield', title: 'Police checked', text: 'Every team member holds a current national police check.' },
  { icon: 'card', title: 'Blue Card holder', text: 'Working with Children Check for family homes and care settings.' },
  { icon: 'flask', title: 'ChemCert AQF3', text: 'Accredited for safe herbicide and fertiliser application.' },
  { icon: 'umbrella', title: 'Fully insured', text: 'Public liability insurance on every job, every visit.' },
  { icon: 'heart', title: 'DVA & NDIS clients', text: 'Ongoing lawn and garden care with written service notes.' },
  { icon: 'battery', title: 'Battery equipment only', text: 'Commercial battery gear: quiet, fume-free, no petrol spills.' },
];

// The nine services from the brief, mapped to the six service pages in the
// approved keyword map. "page" is the slug of the page that owns the service.
export const serviceList = [
  { name: 'Lawn Mowing', page: 'lawn-mowing' },
  { name: 'Hedge Reduction', page: 'garden-maintenance' },
  { name: 'Gardening', page: 'garden-maintenance' },
  { name: 'Pressure Cleaning', page: 'pressure-cleaning' },
  { name: 'Rubbish Removal', page: 'rubbish-removal' },
  { name: 'Mulch Laying', page: 'garden-maintenance' },
  { name: 'Weed Control', page: 'weed-control-fertilising' },
  { name: 'Sprinkler Installation', page: 'irrigation' },
  { name: 'Irrigation', page: 'irrigation' },
];

const quoteNote = 'Beg Your Garden runs scheduled, set-day routes across Ipswich so regular clients always get their visit on time. One-off garden clean-ups and pre-sale tidy-ups are quoted separately.';

export const services = [
  {
    slug: 'lawn-mowing',
    name: 'Lawn Mowing',
    navDescriptor: 'Redbank Plains, Springfield Lakes & Ripley',
    short: 'Scheduled, set-day lawn mowing with quiet battery mowers, sharp edges and a reminder before every visit.',
    icon: 'mower',
    h1: 'Scheduled Lawn Mowing in Redbank Plains, Springfield Lakes & Ripley',
    title: 'Lawn Mowing Redbank Plains & Springfield | Beg Your Garden',
    description: 'Scheduled lawn mowing in Redbank Plains, Springfield Lakes & Ripley. Quiet battery mowers, sharp edges, reminders before every visit. Book a free quote today!',
    keyword: 'Lawn Mowing Redbank Plains',
    image: 'battery-mower-front-lawn-ipswich',
    imageAlt: 'Commercial battery lawn mower on a freshly cut front lawn in Ipswich, part of a scheduled Beg Your Garden mowing visit',
    cardImage: 'battery-mower-front-lawn-ipswich',
    cardAlt: 'Commercial battery lawn mower on a freshly cut front lawn in Ipswich',
    citable: 'Beg Your Garden provides scheduled lawn mowing in Redbank Plains, Springfield Lakes and Ripley using commercial battery equipment.',
    intro: `<p>Beg Your Garden provides scheduled lawn mowing in Redbank Plains, Springfield Lakes and Ripley using commercial battery equipment. Your lawn goes on a fixed day, you get a message before we arrive and a quick wrap-up when we leave, and the mow, edges, whipper-snipping and blow-down are done the same way every visit.</p>
<p>Lawn mowing in Redbank Plains and the Springfield growth corridor is mostly about rhythm. Buffalo and couch lawns here grow fast from October to April and slow right down through winter, so a fortnightly cut in summer and a three- to four-weekly cut in the cooler months keeps the grass at the right height for the season without scalping it.</p>`,
    sections: [
      { h2: 'What is included in every lawn mowing visit', html: `<ul class="check-list">
<li>Mow at the right height for your grass type and the season</li>
<li>Edges along paths, driveways, kerbs and garden beds</li>
<li>Whipper-snipping around fences, posts and trees</li>
<li>Full blow-down of paths, driveway and patio</li>
<li>Clippings removed or mulched, your choice</li>
<li>Gates closed and a photo update when we're done</li>
</ul>` },
      { h2: 'Lawn mowing in Redbank Plains, Springfield Lakes and Ripley', html: `<p>These three suburbs are where most of our route days run. New estates in Ripley and Springfield Lakes tend to have smaller front lawns, narrow side access and fresh turf that needs a gentle, regular cut to thicken up. Established homes in Redbank Plains often have bigger backyards, mature trees and more edging. Our 22-inch and 30-inch self-propelled battery mowers cover both without the noise of a ride-on, which matters when the neighbour's a shift worker.</p>
<p>We also mow across Raceview, Brassall, Booval, Bundamba, Yamanto, Silkstone, Flinders View, Collingwood Park, Goodna and the rest of Ipswich City. If your suburb isn't on a current route day, ask: we add streets to routes as they fill.</p>` },
      { h2: 'Why battery lawn mowing?', html: `<p>Commercial battery mowers cut as cleanly as petrol with far less noise and no fumes. Shift workers in Ipswich regularly sleep through a visit. There's no petrol stored on your property, no two-stroke smell drifting through open windows, and no oil drips on the driveway.</p>` },
      { h2: 'Scheduled lawn mowing, not one-off mows', html: `<p>${quoteNote} Keeping routes for regular clients is how we can promise your visit lands on the same day each cycle and that rain reschedules are sorted early, not after the fact.</p>` },
    ],
    faqs: [
      { q: 'How often should my lawn be mowed in Redbank Plains?', a: 'Fortnightly through spring and summer and every three to four weeks through winter suits most buffalo and couch lawns in Redbank Plains, Springfield Lakes and Ripley. We set your cycle at the first visit and adjust it with the season.' },
      { q: 'Do you offer one-off lawn mowing in Ipswich, or only regular service?', a: quoteNote },
      { q: 'Do you do NDIS or DVA lawn mowing in Ipswich?', a: 'Yes. Beg Your Garden provides ongoing lawn and garden maintenance for DVA clients and NDIS participants across Ipswich, with written service notes after every visit.' },
      { q: 'Can you mow acreage or larger blocks around Ipswich?', a: 'Yes. We mow larger blocks and small acreage around Ripley, South Ripley, Deebing Heights, Purga and the rural fringe of Ipswich with wide-cut battery mowers and a battery brushcutter for the rough edges. Acreage work is quoted on site.' },
    ],
    related: ['weed-control-fertilising', 'garden-maintenance'],
  },
  {
    slug: 'garden-maintenance',
    name: 'Garden Maintenance & Hedge Trimming',
    navDescriptor: 'Hedging, mulching & clean-ups across Ipswich',
    short: 'Hedge reduction and trimming, mulch laying, weeding and garden clean-ups on a set schedule.',
    icon: 'hedge',
    h1: 'Garden Maintenance in Ipswich — Hedge Trimming, Mulching & Clean-Ups',
    title: 'Garden Maintenance Ipswich | Hedging & Mulch | BYG',
    description: 'Garden maintenance in Ipswich: hedge trimming, mulching, weeding & garden clean-ups on a set schedule. Police-checked, insured local team. Get a free quote!',
    keyword: 'Garden Maintenance Ipswich',
    image: 'front-yard-mulch-garden-bed-ipswich',
    imageAlt: 'Freshly mulched garden bed and mown front lawn maintained by Beg Your Garden in Ipswich',
    cardImage: 'hedge-trimming-lilly-pilly-ipswich-generated',
    cardAlt: 'Hedge trimming in Ipswich by Beg Your Garden',
    citable: 'Beg Your Garden provides scheduled garden maintenance in Ipswich, including hedge trimming, hedge reduction, mulch laying, weeding and garden clean-ups.',
    intro: `<p>Beg Your Garden provides scheduled garden maintenance in Ipswich, including hedge trimming, hedge reduction, mulch laying, weeding and garden clean-ups. It's the same team that mows your lawn, so the whole yard is kept to one standard on one visit, and you deal with one person.</p>
<p>Garden maintenance in Ipswich is a different job to lawn care. Beds fill with weeds after every summer storm, lilly pilly and murraya hedges put on half a metre a season, and mulch breaks down faster in our heat than it does down south. We build the garden work into your lawn schedule so nothing gets away from you.</p>`,
    sections: [
      { h2: 'Hedge trimming and hedge reduction in Ipswich', html: `<p>Regular trims keep hedges dense and shaped. Hedge reduction is the bigger job: bringing an overgrown hedge back down to a manageable height and width over one or two cuts so it recovers well. We handle lilly pilly, murraya, photinia, viburnum, box and native screening hedges, use battery hedge trimmers (quiet, no fumes near your windows) and ladders rated for the job, and all clippings go with us.</p>
<ul class="check-list">
<li>Maintenance trims on a 6- to 12-week cycle</li>
<li>Staged hedge reduction for overgrown screens and boundary hedges</li>
<li>Shaping of topiary, balls and feature plants</li>
<li>Green waste removed on the day</li>
</ul>` },
      { h2: 'Mulch laying across Raceview, Ripley and Springfield Lakes', html: `<p>We supply and spread mulch for garden beds, native gardens and around trees across Raceview, Ripley, Springfield Lakes and the rest of Ipswich. A 75 mm layer of the right mulch cuts watering, suppresses weeds and keeps roots cooler through January. We advise on bark, chip, forest-fine or organic mulch for your beds, prepare the bed first, and leave a clean edge.</p>` },
      { h2: 'Gardening, weeding and garden clean-ups', html: `<p>Hand-weeding and targeted spraying of beds, pruning of shrubs and roses, tidying of pathways and pebbled areas, and the pre-sale or end-of-lease clean-up that gets a yard back to presentable in a day. Landlords, property managers and strata committees across Ipswich use us for inspection-ready gardens.</p>` },
      { h2: 'Scheduled garden care for homeowners, landlords and strata', html: `<p>${quoteNote} Most garden maintenance clients pair a fortnightly or monthly garden visit with their lawn mowing so the whole property is covered on one plan.</p>` },
    ],
    faqs: [
      { q: 'How often should hedges be trimmed in Ipswich?', a: 'Fast growers like lilly pilly and murraya need a trim every six to eight weeks through the warmer months and once or twice over winter. Slower hedges such as box or viburnum can go longer. We set the cycle to the plant, not the calendar.' },
      { q: 'What is the best time of year to mulch garden beds in South-East Queensland?', a: 'Autumn and spring are ideal: the soil is still warm, and a fresh layer locks in moisture before summer heat or winter dry. We can mulch at any time of year if beds are bare.' },
      { q: 'Do you take the green waste away after hedge trimming?', a: 'Yes. Clippings, prunings and weeds are removed on the day as part of the service, so nothing is left on your lawn or kerb.' },
      { q: 'Can you tidy my garden before a rental inspection or sale?', a: 'Yes. Pre-sale and end-of-lease garden tidy-ups are quoted separately from scheduled plans and can usually be done within the week.' },
    ],
    related: ['lawn-mowing', 'rubbish-removal'],
  },
  {
    slug: 'weed-control-fertilising',
    name: 'Lawn Fertilising & Weed Control',
    navDescriptor: 'Thick, green, bindi-free lawns in Ipswich',
    short: 'ChemCert AQF3 accredited, pet-safe treatments for bindis, broadleaf weeds and tired, patchy turf.',
    icon: 'spray',
    h1: 'Weed Control & Lawn Fertilising in Ipswich — Thick, Green, Bindi-Free Lawns',
    title: 'Weed Control & Lawn Fertilising Ipswich | Beg Your Garden',
    description: 'Lawn fertilising & weed control in Ipswich. ChemCert AQF3 accredited, pet-safe treatments for thick, green, bindi-free lawns. Get a free quote today!',
    keyword: 'Weed Control Ipswich',
    image: 'weed-control-ppe-spraying-ipswich',
    imageAlt: 'Lawn fertilising and weed control Ipswich: Beg Your Garden technician in PPE ready for herbicide application',
    cardImage: 'weed-control-ppe-spraying-ipswich',
    cardAlt: 'Lawn fertilising and weed control Ipswich',
    citable: 'Beg Your Garden provides lawn fertilising and weed control in Ipswich, applied by a ChemCert AQF3 accredited operator.',
    intro: `<p>Beg Your Garden provides lawn fertilising and weed control in Ipswich, applied by a ChemCert AQF3 accredited operator. Weed control in Ipswich lawns is mostly about timing: bindis (jo-jo) germinate in autumn and set their prickles in spring, so the treatment that stops them goes down in May and June, not when the kids are already hopping across the grass.</p>
<p>A seasonal lawn care program pairs targeted herbicide with the right fertiliser for your grass, so the lawn thickens up and crowds weeds out on its own. We treat buffalo, couch, kikuyu and zoysia lawns across Raceview, Ripley, Springfield Lakes, Brassall and the rest of Ipswich.</p>`,
    sections: [
      { h2: 'Weed control for Ipswich lawns', html: `<ul class="check-list">
<li>Bindi and broadleaf weed control (clover, cudweed, dandelion, creeping oxalis)</li>
<li>Nutgrass, winter grass and crabgrass treatments</li>
<li>Pre-emergent programs for problem lawns</li>
<li>Path, driveway and garden bed weed spraying</li>
<li>Selective products matched to your grass type so the lawn isn't damaged</li>
</ul>` },
      { h2: 'Lawn fertilising programs', html: `<p>A slow-release granular feed in early spring, a boost in summer and a potassium-rich autumn application set the lawn up for winter. We match the product to your soil and grass, water it in or time it with rain, and note what was applied on your service report. Clients on DVA and NDIS plans get the same written notes after every treatment.</p>` },
      { h2: 'Safe for kids, pets and the people next door', html: `<p>Every product we apply is professional-grade, registered for home lawns and applied at label rates by a ChemCert AQF3 accredited operator in full PPE. Once dry, treated areas are safe for pets and children. We tell you before we spray, mark the lawn, and avoid windy days so nothing drifts into your veggie patch or the neighbour's.</p>` },
      { h2: 'Part of your lawn plan', html: `<p>${quoteNote} Fertilising and weed control is usually added to a scheduled lawn mowing plan as a seasonal program, so it goes on at the right time without you having to remember.</p>` },
    ],
    faqs: [
      { q: 'When should bindis be sprayed in Ipswich?', a: 'Late autumn to early winter (May to July), while the bindi plants are small and before they flower. Spraying in spring, once the prickles have formed, is too late for that season.' },
      { q: 'Are your herbicide and fertiliser treatments safe for pets and children?', a: 'Yes. We use registered, professional-grade products applied responsibly by a ChemCert AQF3 accredited operator. Once the lawn is dry, it is safe for pets and children.' },
      { q: 'How long until I see results from lawn fertilising?', a: 'A colour change usually shows within one to two weeks of a feed with water, and the lawn visibly thickens over a full season of regular mowing and feeding.' },
      { q: 'Do you offer lawn care programs for DVA and NDIS clients in Ipswich?', a: 'Yes. Ongoing lawn care including fertilising and weed control can be set up as a scheduled plan with written service notes after every visit.' },
    ],
    related: ['lawn-mowing', 'irrigation'],
  },
  {
    slug: 'pressure-cleaning',
    name: 'Pressure Cleaning & House Washing',
    navDescriptor: 'Driveways, paths & exteriors across Ipswich',
    short: 'Driveways, paths, patios and exterior walls brought back to clean with the right pressure for each surface.',
    icon: 'nozzle',
    h1: 'House Washing & Pressure Cleaning in Ipswich — Driveways, Paths & Exteriors',
    title: 'House Washing Ipswich | Pressure Cleaning | Beg Your Garden',
    description: 'House washing & pressure cleaning in Ipswich for driveways, paths, patios & exterior walls. Local, insured, quiet battery equipment. Get a free quote today!',
    keyword: 'House Washing Ipswich',
    image: 'pressure-cleaning-driveway-ipswich-generated',
    imageAlt: 'Pressure cleaning a concrete driveway in Ipswich, half cleaned to show the difference',
    cardImage: 'pressure-cleaning-driveway-ipswich-generated',
    cardAlt: 'Driveway pressure cleaning in Ipswich',
    citable: 'Beg Your Garden provides house washing and pressure cleaning in Ipswich for driveways, paths, patios and exterior walls.',
    intro: `<p>Beg Your Garden provides house washing and pressure cleaning in Ipswich for driveways, paths, patios and exterior walls. House washing in Ipswich is usually a once-or-twice-a-year job: our humid summers grow green mould on south-facing walls and shaded concrete, and a wet season leaves driveways grey and slippery.</p>
<p>We match pressure and detergent to the surface. Concrete and pavers take high pressure with a surface cleaner for an even finish without stripe marks. Render, weatherboard, Colorbond and painted brick get a low-pressure soft wash that lifts mould and grime without forcing water under cladding or into eaves.</p>`,
    sections: [
      { h2: 'What we pressure clean', html: `<ul class="check-list">
<li>Driveways, carports and garage aprons</li>
<li>Footpaths, pool surrounds and patios</li>
<li>Pavers and retaining walls</li>
<li>Exterior walls: render, brick, weatherboard and Colorbond</li>
<li>Fences, gates and outdoor furniture</li>
<li>Gutters and fascias (exterior face)</li>
</ul>` },
      { h2: 'House washing before a sale, inspection or paint', html: `<p>A clean driveway and exterior is the cheapest street-appeal lift a home in Ipswich can get before photos are taken. Homeowners prepping for sale, landlords between tenants and body corporates in Springfield Lakes and Brookwater book house washing alongside a garden tidy-up so the whole frontage is done in one visit.</p>` },
      { h2: 'Why book pressure cleaning with your lawn team?', html: `<p>Because we're already at your place. Adding a driveway or patio clean to a scheduled lawn or garden visit means one quote, one team you already know, and the same photo update when it's done. We carry our own water where needed and leave surfaces rinsed, not puddled.</p>` },
      { h2: 'Booking and pricing', html: `<p>Pressure cleaning is quoted per surface from a few photos or a quick site visit. ${quoteNote}</p>` },
    ],
    faqs: [
      { q: 'How often should a driveway be pressure cleaned in Ipswich?', a: 'Once a year keeps most concrete driveways in Ipswich looking fresh. Shaded or south-facing driveways that grow mould may need it twice a year, usually after the wet season.' },
      { q: 'Will pressure cleaning damage my pavers or render?', a: 'Not when the pressure is matched to the surface. We use a surface cleaner on concrete and pavers and a low-pressure soft wash on render, weatherboard and painted surfaces.' },
      { q: 'Can you pressure clean my driveway as well as mow the lawn in Ipswich?', a: 'Yes. Pressure cleaning, house washing, green waste removal and irrigation installation can all be added to a lawn care plan or booked as a separate job.' },
      { q: 'Do you need my water or power?', a: 'We connect to an outdoor tap for most jobs and run battery or petrol equipment that doesn\'t need your power. If water access is limited, tell us and we\'ll bring our own.' },
    ],
    related: ['garden-maintenance', 'rubbish-removal'],
  },
  {
    slug: 'rubbish-removal',
    name: 'Green Waste & Rubbish Removal',
    navDescriptor: 'Clippings, prunings & yard clean-ups taken away',
    short: 'Clippings, prunings, branches and overgrown-yard rubbish loaded, taken away and disposed of properly.',
    icon: 'trailer',
    h1: 'Green Waste & Garden Rubbish Removal in Ipswich',
    title: 'Green Waste Removal Ipswich | Beg Your Garden',
    description: 'Green waste & garden rubbish removal in Ipswich. Clippings, prunings, branches & yard clean-ups taken away by your local lawn team. Get a free quote today!',
    keyword: 'Green Waste Removal Ipswich',
    image: 'green-waste-removal-trailer-ipswich-generated',
    imageAlt: 'Green waste removal in Ipswich: trailer loaded with hedge prunings and palm fronds',
    cardImage: 'green-waste-removal-trailer-ipswich-generated',
    cardAlt: 'Green waste and garden rubbish removal Ipswich',
    citable: 'Beg Your Garden provides green waste and garden rubbish removal in Ipswich, taking clippings, prunings, branches and yard clean-up waste away on the day.',
    intro: `<p>Beg Your Garden provides green waste and garden rubbish removal in Ipswich, taking clippings, prunings, branches and yard clean-up waste away on the day. Green waste removal in Ipswich is the part of a garden job most people underestimate: a single hedge reduction fills a trailer, and the council green bin takes a month to work through it.</p>
<p>We load it, strap it and take it to the right facility, so there's nothing sitting on your kerb and no trips to the tip on your Saturday. Rubbish removal for overgrown yards, storm clean-ups and end-of-lease properties is handled the same way, with a quote from a few photos.</p>`,
    sections: [
      { h2: 'What we take away', html: `<ul class="check-list">
<li>Lawn clippings, hedge trimmings and prunings</li>
<li>Branches, palm fronds and fallen limbs after storms</li>
<li>Weeds, vines and overgrown garden beds cleared</li>
<li>Old mulch, soil and pot plants</li>
<li>General garden rubbish: broken pots, timber edging, garden furniture</li>
<li>End-of-lease and pre-sale yard clean-outs</li>
</ul>
<p>We don't take household rubbish, building waste or asbestos; a skip-bin company is the right call for those.</p>` },
      { h2: 'Overgrown yard rescues across Ipswich', html: `<p>Inherited a jungle at a new rental, or let the backyard go over a hard few months? We cut it back, clear the beds, mow it down in stages and remove everything in one visit, then set it up on a schedule so it stays that way. Common jobs run from Goodna and Redbank Plains out to Rosewood and Walloon.</p>` },
      { h2: 'Storm and end-of-lease clean-ups', html: `<p>Summer storms across Ipswich drop branches and strip trees. We clear and remove debris, make the yard safe and tidy the lawn. For end-of-lease, we work to the property manager's checklist so the bond inspection passes first time.</p>` },
      { h2: 'Booking', html: `<p>Green waste removal is included with our hedge trimming and garden maintenance, and quoted by the load for stand-alone pick-ups. ${quoteNote}</p>` },
    ],
    faqs: [
      { q: 'Do you remove green waste as part of hedge trimming and garden maintenance?', a: 'Yes. Clippings and prunings from any scheduled garden visit are removed on the day at no extra charge. Stand-alone loads from your own garden work are quoted per trailer load.' },
      { q: 'What garden rubbish can you take in Ipswich?', a: 'Lawn clippings, hedge trimmings, branches, palm fronds, weeds, old mulch, soil, pot plants and general garden rubbish. We don\'t take household waste, building materials or asbestos.' },
      { q: 'Can you clear an overgrown yard before a rental inspection?', a: 'Yes. Overgrown yard clean-ups and end-of-lease tidy-ups are quoted from photos and usually completed in a single visit, with all waste removed.' },
      { q: 'Do you do storm clean-ups in Ipswich?', a: 'Yes. We clear fallen branches and debris, remove it and tidy the lawn and beds after storm damage across Ipswich and Springfield.' },
    ],
    related: ['garden-maintenance', 'lawn-mowing'],
  },
  {
    slug: 'irrigation',
    name: 'Irrigation & Sprinkler Installation',
    navDescriptor: 'Water-wise systems for lawns & garden beds',
    short: 'Pop-up sprinklers, drip lines and timers installed and maintained so your lawn stays green through an Ipswich summer.',
    icon: 'sprinkler',
    h1: 'Irrigation & Sprinkler Installation in Ipswich — Water-Wise Lawns & Gardens',
    title: 'Irrigation Ipswich | Sprinkler Install | Beg Your Garden',
    description: 'Irrigation & sprinkler installation in Ipswich. Water-wise systems for lawns & garden beds, fitted and maintained by locals. Get a free quote today!',
    keyword: 'Irrigation Ipswich',
    image: 'sprinkler-irrigation-lawn-ipswich-generated',
    imageAlt: 'Pop-up sprinkler irrigation watering a green lawn in Ipswich',
    cardImage: 'sprinkler-irrigation-lawn-ipswich-generated',
    cardAlt: 'Sprinkler installation and irrigation Ipswich',
    citable: 'Beg Your Garden installs and maintains irrigation and sprinkler systems for lawns and garden beds in Ipswich.',
    intro: `<p>Beg Your Garden installs and maintains irrigation and sprinkler systems for lawns and garden beds in Ipswich. Irrigation in Ipswich isn't a luxury in January: a week over 35°C with no rain will brown off a new lawn in Ripley or Springfield Lakes in days, and hand-watering with a hose rarely gets water deep enough to matter.</p>
<p>We design simple, water-wise systems: pop-up sprinklers for lawns, drip line for garden beds and hedges, and a tap timer or controller so it runs before dawn when evaporation is lowest. Sprinkler installation for new-build lawns, acreage and keen gardeners is quoted after a quick look at your water pressure and layout.</p>`,
    sections: [
      { h2: 'Sprinkler and irrigation installation', html: `<ul class="check-list">
<li>Pop-up sprinkler systems for front and back lawns</li>
<li>Drip irrigation for garden beds, hedges and veggie patches</li>
<li>Tap timers and multi-zone controllers (battery or mains)</li>
<li>New-build lawn irrigation before or after turf is laid</li>
<li>Rain sensors and water-wise scheduling</li>
</ul>` },
      { h2: 'Irrigation repairs and maintenance', html: `<p>Broken pop-ups after a mow, blocked drip emitters, a controller that's lost its program, or a zone that never seems to come on. We find the fault, fix it and re-set the schedule for the season. Because we already mow many of the lawns we irrigate, we spot problems early and adjust run times as the weather changes.</p>` },
      { h2: 'Water-wise lawns in Ipswich', html: `<p>Deep, infrequent watering grows deeper roots and a lawn that copes with heat. Two or three long early-morning runs a week in summer beat a daily sprinkle, and a well-set system uses less water than a hand-held hose while giving a far better lawn. Pair irrigation with a fertilising program and the result is a lawn that stays green from Christmas to Easter.</p>` },
      { h2: 'Booking', html: `<p>Irrigation and sprinkler installation is quoted on site after checking your water pressure, tap locations and lawn layout. ${quoteNote}</p>` },
    ],
    faqs: [
      { q: 'How much does sprinkler installation cost in Ipswich?', a: 'It depends on lawn size, number of zones and whether you want a simple tap timer or a multi-zone controller. We quote after a short site visit so the price covers exactly what your yard needs, with no surprises.' },
      { q: 'Can you install irrigation on a new-build lawn in Ripley or Springfield Lakes?', a: 'Yes. We install pop-up sprinklers and drip lines on new-build blocks before or after turf is laid, and set the schedule to establish the new lawn quickly.' },
      { q: 'How often should I water my lawn in an Ipswich summer?', a: 'Two to three deep waterings a week in the early morning is better than a light water every day. A timer-controlled system makes this automatic.' },
      { q: 'Do you repair existing sprinkler systems?', a: 'Yes. We repair broken heads, blocked drippers, leaking lines and faulty controllers, and can take over the seasonal maintenance of a system we didn\'t install.' },
    ],
    related: ['lawn-mowing', 'weed-control-fertilising'],
  },
];

export const homeFaqs = [
  { q: 'How much does lawn mowing cost in Ipswich?', a: 'Most residential lawns in Ipswich fall between a set price per visit based on lawn size and access. Beg Your Garden quotes from a quick estimate online, then confirms on site — there are no surprise extras for edging, blowing or clippings.' },
  { q: 'Do you offer one-off lawn mowing in Ipswich, or only regular service?', a: 'Beg Your Garden runs scheduled, set-day routes across Ipswich so regular clients always get their visit on time. One-off garden clean-ups and pre-sale tidy-ups are quoted separately.' },
  { q: 'Which Ipswich suburbs do you service for lawn mowing?', a: 'Raceview, Ripley, Springfield Lakes, Redbank Plains, Brassall, Booval, Bundamba, Yamanto, Silkstone, Flinders View, Karalee, Collingwood Park, Goodna and surrounding suburbs across Ipswich City.' },
  { q: 'Do you do NDIS or DVA lawn mowing in Ipswich?', a: 'Yes. Beg Your Garden provides ongoing lawn and garden maintenance for DVA clients and NDIS participants across Ipswich, with written service notes after every visit.' },
  { q: 'Is battery lawn mowing as good as petrol?', a: 'Commercial battery mowers cut as cleanly as petrol with far less noise and no fumes. Shift workers in Ipswich regularly sleep through a visit.' },
  { q: 'Can you pressure clean my driveway as well as mow the lawn in Ipswich?', a: 'Yes. Pressure cleaning, house washing, green waste removal and irrigation installation can all be added to a lawn care plan or booked as a separate job.' },
];

// Real Google reviews published on the client's existing site (verbatim).
export const reviews = [
  { name: 'Janina Levy', suburb: 'North Booval', date: '2025-08-20', text: 'John and his team did an amazing job! My garden was completely overgrown, full of weeds, and very untidy — but they transformed it beautifully. John made the whole process so easy, was extremely professional, and his guidance throughout was outstanding. I\'m so happy with the results! Reasonable Rates highly Recommend.' },
  { name: 'Ashley McPherson', suburb: 'Coalfalls', date: '2025-03-11', text: 'I\'ve been using Beg Your Garden for several months and the results have been outstanding. We live on a main road in a heritage area, and our manicured lawn is now the best on the street thanks to John\'s expertise and care. Our lawn care plan includes regular mowing, fertilising, pest control, and preventative treatments. John\'s professionalism, attention to detail, and network of specialists have made a real difference. He also works within budget, offering everything from basic services to high end upgrades that have added significant value to our home. Highly recommended for anyone looking for expert lawn and garden maintenance!' },
  { name: 'Andrew Rae', suburb: 'Ripley', date: '2025-09-17', text: 'John is a pleasure to work with. He\'s friendly to talk to and a true expert in lawn care and gardening. I especially like that he\'s honest; if he doesn\'t know the answer, he\'ll be upfront and find it for you. He\'s also been incredibly flexible with helping me with some odd jobs outside of his normal routine, which I really appreciate. 100% would recommend.' },
  { name: 'Sophie Wilson', suburb: 'Bundamba', date: '2025-01-14', text: 'John and the team are the absolute best! Honestly the most important efficient (and nearly SILENT) lawn mowing I\'ve ever had the pleasure of seeing! They keep our yard looking tidy at an affordable rate, and always greet us with a smile and a genuine chat - If I could rate them 10 stars, I would!' },
  { name: 'Mairead Nash', suburb: 'Springfield Lakes', date: '2024-11-06', text: 'These guys were amazing! We\'re so easy to communicate with prior and did an amazing job on the yard! Helped get our place cleaned up for inspection immaculately tackling our overgrown front yard. Would definitely recommend!' },
  { name: 'Steve & Sue Blanch', suburb: 'Ipswich', date: '2024-11-10', text: 'John is an awesome gardener, happy to help my elderly father out. Great at communication and willing to fit in with Dad\'s requests. Highly recommend. Top job.' },
  { name: 'Rob Lamont', suburb: 'Brassall', date: '2025-06-20', text: 'I was quoted by BegYourGarden and they were significantly better than my other 2 quotes. They were quick to come out, send me photos when they finished and a delight to chat with on the phone. I own a NDIS house and am used to being ripped off, beg your garden were the opposite. I contacted my NDIS Provider and will be sending lots of work there way. A 10/10 effort. Very satisfying to have such good service.' },
];

// Gallery: client's own photos. Source: Google Business Profile (gbp) and the
// existing website (lc). Alt text names the service and an Ipswich suburb.
export const gallery = [
  { src: 'front-yard-mulch-garden-bed-ipswich-1000', alt: 'Front yard lawn mowing and fresh garden bed mulch in Ipswich', cap: 'Mowing + mulch, Ipswich', size: 'wide tall', source: 'lc' },
  { src: 'hero-john-mowing-battery-raceview-800', alt: 'John from Beg Your Garden mowing a lawn in Raceview with a battery mower', cap: 'Battery mowing, Raceview', size: 'wide', source: 'lc' },
  { src: 'acreage-mowing-blower-ipswich', alt: 'Acreage mowing with a battery blower on a rural block near Ipswich', cap: 'Acreage mowing, Ipswich', size: '', source: 'lc' },
  { src: 'verge-edging-footpath-booval', alt: 'Verge mowing and footpath edging in Booval, Ipswich', cap: 'Verge + edging, Booval', size: 'wide', source: 'gbp' },
  { src: 'garden-bed-mulch-pebbles-ripley', alt: 'Garden bed with red mulch and pebble edging beside a driveway in Ripley', cap: 'Garden bed tidy, Ripley', size: 'tall', source: 'gbp' },
  { src: 'battery-mower-front-lawn-ipswich-640', alt: 'Greenworks 76 cm commercial battery mower on an Ipswich front lawn', cap: 'Commercial battery gear', size: '', source: 'lc' },
  { src: 'front-yard-new-build-springfield-lakes', alt: 'Freshly mown front lawn of a new-build home in Springfield Lakes', cap: 'New-build lawn, Springfield Lakes', size: 'wide', source: 'gbp' },
  { src: 'footpath-edge-trimming-silkstone', alt: 'Footpath edge trimming along a nature strip in Silkstone, Ipswich', cap: 'Edge trimming, Silkstone', size: 'tall', source: 'gbp' },
  { src: 'street-verge-mowing-raceview', alt: 'Street verge and nature strip mowing in Raceview', cap: 'Nature strip, Raceview', size: 'wide', source: 'gbp' },
  { src: 'lawn-edging-verge-ipswich', alt: 'Sharp lawn edges along a kerb after a scheduled mow in Ipswich', cap: 'Sharp edges, Ipswich', size: 'wide', source: 'lc' },
  { src: 'courtyard-garden-tidy-yamanto', alt: 'Courtyard garden bed tidy-up in Yamanto, Ipswich', cap: 'Courtyard tidy, Yamanto', size: '', source: 'gbp' },
  { src: 'lawn-mowing-equipment-shade-ipswich', alt: 'Battery mower and line trimmer on a shaded lawn in Ipswich', cap: 'Scheduled visit, Ipswich', size: '', source: 'gbp' },
  { src: 'acreage-slashing-mount-walker-view', alt: 'Acreage lawn slashing with mountain views on the Ipswich rural fringe', cap: 'Acreage, rural Ipswich', size: 'wide', source: 'gbp' },
  { src: 'nature-strip-mowing-fenceline-brassall', alt: 'Nature strip mowing along a fence line in Brassall', cap: 'Fence line, Brassall', size: 'wide', source: 'gbp' },
  { src: 'front-yard-mown-springfield', alt: 'Mown front yard and clean footpath in Springfield', cap: 'Front yard, Springfield', size: 'wide', source: 'lc' },
  { src: 'backyard-clean-up-before-after-grid', alt: 'Backyard clean-up before and after photos in Ipswich', cap: 'Before + after, Ipswich', size: 'tall', source: 'gbp' },
  { src: 'nature-strip-battery-mowing-east-ipswich', alt: 'Battery mower on a freshly cut nature strip in East Ipswich', cap: 'Nature strip, East Ipswich', size: 'wide', source: 'gbp' },
  { src: 'footpath-verge-mowing-collage-ipswich', alt: 'Footpath and verge mowing collage from Ipswich route days', cap: 'Verges + footpaths, Ipswich', size: '', source: 'gbp' },
];

export const beforeAfter = [
  { before: 'before-backyard-overgrown-ipswich', after: 'after-backyard-mown-ipswich', beforeAlt: 'Overgrown backyard lawn before a Beg Your Garden clean-up in Ipswich', afterAlt: 'Same Ipswich backyard after mowing, edging and tidy-up', title: 'Backyard rescue, Ipswich' },
  { before: 'before-backyard-2-ipswich', after: 'after-backyard-2-ipswich', beforeAlt: 'Patchy, overgrown backyard before scheduled lawn care in Redbank Plains', afterAlt: 'Backyard after the first scheduled mow and edge in Redbank Plains', title: 'First scheduled visit, Redbank Plains' },
];
