import { site } from '../data/site.js';
import { page } from '../templates/layout.js';
import { icons, pageHero } from '../templates/components.js';

export default ({ assetHash }) => {
  const thankYou = `
<section class="thank-you section">
  <div class="container" style="max-width:640px">
    <div class="tick">${icons.check}</div>
    <h1 data-thank-you-name>Thanks, your request is in!</h1>
    <p class="form__status" data-thank-you-photos></p>
    <p class="lede" style="margin-inline:auto" data-thank-you-lede data-email="${site.email}">Thanks! We'll be in touch soon. If it's urgent, call us on <a href="tel:${site.phoneRaw}">${site.phone}</a>.</p>
    <div class="btn-row" style="justify-content:center;margin-top:24px">
      <a class="btn" href="/">Back to home ${icons.arrow}</a>
      <a class="btn btn--ghost" href="/our-work/">See our work</a>
    </div>
  </div>
</section>`;

  const notFound = `
<section class="thank-you section">
  <div class="container" style="max-width:640px">
    <h1>That page has been mowed.</h1>
    <p class="lede" style="margin-inline:auto">The page you're after doesn't exist or has moved. Try one of these instead.</p>
    <div class="btn-row" style="justify-content:center;margin-top:24px">
      <a class="btn" href="/">Home</a>
      <a class="btn btn--ghost" href="/services/">Services</a>
      <a class="btn btn--ghost" href="/contact/">Contact</a>
    </div>
  </div>
</section>`;

  const privacy = `
${pageHero({ h1: 'Privacy Policy', plain: true, crumbs: [{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy-policy/' }] })}
<section class="section"><div class="container legal">
<p><em>Last updated: 25 October 2026.</em></p>
<p>${site.name} (ABN ${site.abn}) (“we”, “us”) respects your privacy and handles personal information in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth). This policy explains what we collect through this website and how it is used.</p>
<h2>What we collect</h2>
<p>When you request a quote we collect the details you enter in the form: your name, email address, phone number, property address, property size, the service you need, any job notes, any photos you attach, and whether you ticked the referral tick box. If you call or email us we keep the contact details and notes needed to quote and deliver the service.</p>
<h2>How we use it</h2>
<p>We use your information to prepare quotes, schedule and deliver services, send reminders and service updates, and respond to your enquiries. We may also send occasional service-related messages (for example seasonal lawn care reminders); you can opt out at any time by replying or contacting us.</p>
<h2>How it is stored and shared</h2>
<p>Form submissions are captured by our customer relationship management system (LeadConnector / GoHighLevel) and stored securely. We do not sell your information. We share it only with service providers who help us run the business (such as our CRM and messaging platforms) and only for the purposes above, or where required by law.</p>
<h2>Referral partners (only if you tick the box)</h2>
<p>Our quote form has an optional tick box. If you tick it and we cannot help you (for example you are outside our service area, we are fully booked, or you need a service we do not offer), you agree that we may pass your name, phone number, email address and suburb to a trusted local business that can help. We may receive a referral fee from that business. We do not pass on your job notes or photos. If you leave the box unticked, your details stay with us and are not shared with any referral partner. We record whether the box was ticked and the date and time you submitted the form. You can withdraw this consent at any time by emailing <a href="mailto:${site.email}">${site.email}</a>, and we will not refer your details after that.</p>
<h2>Cookies and analytics</h2>
<p>This site may use cookies and tracking scripts to understand how visitors use it and to attribute enquiries. You can disable cookies in your browser settings; the site will still work.</p>
<h2>Access and corrections</h2>
<p>You can ask to see, correct or delete the personal information we hold about you by emailing <a href="mailto:${site.email}">${site.email}</a> or calling <a href="tel:${site.phoneRaw}">${site.phone}</a>. We will respond within a reasonable time.</p>
<h2>Contact</h2>
<p>${site.name}, ${site.suburb} QLD ${site.postcode} · <a href="mailto:${site.email}">${site.email}</a> · <a href="tel:${site.phoneRaw}">${site.phone}</a></p>
</div></section>`;

  const terms = `
${pageHero({ h1: 'Terms &amp; Conditions', plain: true, crumbs: [{ name: 'Home', href: '/' }, { name: 'Terms & Conditions', href: '/terms-and-conditions/' }] })}
<section class="section"><div class="container legal">
<p><em>Last updated: October 2026.</em></p>
<h2>Quotes</h2>
<p>Quotes are free and based on the information you provide and, where needed, a site visit. A quoted price per visit covers the work described in the quote. Changes to the property, access or scope may change the price; we will tell you before any extra work is done.</p>
<h2>Scheduled services</h2>
<p>Scheduled lawn and garden services run on set route days by suburb. We will send a reminder before each visit and let you know early if weather or access moves the visit. Please keep gates unlocked and pets secured on your route day. Visits that cannot be completed because of locked access may be charged.</p>
<h2>One-off work</h2>
<p>One-off clean-ups, pre-sale tidy-ups, pressure cleaning, green waste removal and irrigation installation are quoted separately and scheduled around our routes.</p>
<h2>Payment</h2>
<p>Invoices are issued after each visit or as agreed in your quote and are payable by the due date shown on the invoice.</p>
<h2>Cancellations and changes</h2>
<p>You can pause, change or cancel a scheduled plan at any time by contacting us. Please give at least one business day's notice before a scheduled visit to avoid a call-out charge.</p>
<h2>Our responsibilities</h2>
<p>We are fully insured for public liability, police-checked and Blue Card holders, and ChemCert AQF3 accredited for herbicide and fertiliser application. We take reasonable care of your property and will notify you promptly of any damage caused by our work.</p>
<h2>Website</h2>
<p>Content on this website is general information about our services and is provided in good faith. Photos show real work by our team unless otherwise stated. We may update these terms from time to time; the current version is always published on this page.</p>
<h2>Contact</h2>
<p>${site.name}, ${site.suburb} QLD ${site.postcode} · <a href="mailto:${site.email}">${site.email}</a> · <a href="tel:${site.phoneRaw}">${site.phone}</a></p>
</div></section>`;

  return [
    { path: '/thank-you/', noindex: true, html: page({ title: 'Thanks! We\'ll be in touch | Beg Your Garden', description: 'Your quote request has been received. Beg Your Garden will be in touch within one business day.', path: '/thank-you/', body: thankYou, noindex: true, onDark: false, assetHash }) },
    { path: '/404.html', noindex: true, html: page({ title: 'Page not found | Beg Your Garden', description: 'That page could not be found.', path: '/404.html', body: notFound, noindex: true, onDark: false, assetHash }) },
    { path: '/privacy-policy/', priority: '0.3', html: page({ title: 'Privacy Policy | Beg Your Garden', description: 'How Beg Your Garden collects, uses and protects the personal information you share when requesting a lawn or garden care quote.', path: '/privacy-policy/', body: privacy, assetHash }) },
    { path: '/terms-and-conditions/', priority: '0.3', html: page({ title: 'Terms & Conditions | Beg Your Garden', description: 'Terms and conditions for Beg Your Garden lawn mowing, garden maintenance and outdoor services in Ipswich QLD.', path: '/terms-and-conditions/', body: terms, assetHash }) },
  ];
};
