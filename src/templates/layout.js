import { site, suburbs } from '../data/site.js';
import { header, footer, esc } from './components.js';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${site.url}/#business`,
    name: site.name,
    alternateName: site.legalName,
    url: `${site.url}/`,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/images/logo-full.webp`,
    logo: `${site.url}/images/logo-full.webp`,
    slogan: site.tagline,
    description: 'Quiet, scheduled, battery-only lawn mowing and garden care for homes, rentals and strata across Ipswich and Springfield, QLD.',
    priceRange: '$$',
    // Service-area business: no street address is published.
    address: { '@type': 'PostalAddress', addressLocality: site.suburb, addressRegion: site.state, postalCode: site.postcode, addressCountry: 'AU' },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      { '@type': 'City', name: 'Ipswich', sameAs: 'https://en.wikipedia.org/wiki/Ipswich,_Queensland' },
      ...suburbs.map((s) => ({ '@type': 'Place', name: `${s}, QLD` })),
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '07:00', closes: '13:00' },
    ],
    sameAs: [site.gbp, site.mapsPlace, site.facebook],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: site.rating, reviewCount: site.reviewCount, bestRating: '5' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Lawn and garden services',
      itemListElement: ['Lawn Mowing', 'Hedge Reduction', 'Gardening', 'Pressure Cleaning', 'Rubbish Removal', 'Mulch Laying', 'Weed Control', 'Sprinkler Installation', 'Irrigation'].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
    },
  };
}

export function faqSchema(items) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}

export function breadcrumbSchema(items) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${site.url}${it.href}` })) };
}

export function page({ title, description, path, body, schema = [], onDark = true, noindex = false, ogImage = '/images/front-yard-mulch-garden-bed-ipswich-1000.webp', assetHash = '' }) {
  const canonical = `${site.url}${path}`;
  const json = [localBusinessSchema(), ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`).join('\n');
  return `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex, nofollow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<meta name="theme-color" content="#2C3990">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}${ogImage}">
<meta property="og:locale" content="en_AU">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.url}${ogImage}">
<meta name="geo.region" content="AU-QLD">
<meta name="geo.placename" content="Raceview, Ipswich">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/images/icon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/images/icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap">
<link rel="stylesheet" href="/assets/main.css?v=${assetHash}">
<script src="${site.trackingScript.src}" data-tracking-id="${site.trackingScript.id}" async></script>
${json}
</head>
<body>
${header({ onDark })}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/main.js?v=${assetHash}" defer></script>
</body>
</html>`;
}
