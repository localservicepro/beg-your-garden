/* Beg Your Garden — site behaviour (no dependencies) */
(function () {
  'use strict';
  const d = document;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- header: scrolled state ---------- */
  const header = d.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- header dropdowns (services, areas) ---------- */
  const dropdowns = Array.from(d.querySelectorAll('.nav-dropdown'));
  const hoverCapable = window.matchMedia('(hover: hover)').matches;
  dropdowns.forEach((dd) => {
    const trigger = dd.querySelector('.nav-trigger');
    const open = () => { dropdowns.forEach((o) => { if (o !== dd) { o.classList.remove('open'); o.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false'); } }); dd.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); };
    const close = () => { dd.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); };
    let hoverTimer;
    if (hoverCapable) {
      dd.addEventListener('mouseenter', () => { clearTimeout(hoverTimer); open(); });
      dd.addEventListener('mouseleave', () => { hoverTimer = setTimeout(close, 120); });
    }
    trigger.addEventListener('click', (e) => { e.preventDefault(); dd.classList.contains('open') ? close() : open(); });
    d.addEventListener('click', (e) => { if (!dd.contains(e.target)) close(); });
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  });

  /* ---------- mobile nav ---------- */
  const burger = d.querySelector('.nav-burger');
  const mnav = d.querySelector('.mobile-nav');
  if (burger && mnav) {
    const setOpen = (v) => {
      mnav.classList.toggle('open', v);
      burger.setAttribute('aria-expanded', String(v));
      burger.setAttribute('aria-label', v ? 'Close menu' : 'Open menu');
      d.body.style.overflow = v ? 'hidden' : '';
    };
    burger.addEventListener('click', () => setOpen(!mnav.classList.contains('open')));
    mnav.querySelector('.mobile-nav__backdrop').addEventListener('click', () => setOpen(false));
    mnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    mnav.querySelectorAll('.m-link[aria-controls]').forEach((accBtn) => {
      const acc = d.getElementById(accBtn.getAttribute('aria-controls'));
      accBtn.addEventListener('click', () => {
        const o = accBtn.getAttribute('aria-expanded') === 'true';
        accBtn.setAttribute('aria-expanded', String(!o));
        acc.dataset.open = String(!o);
      });
    });
  }

  /* ---------- scroll reveal ---------- */
  const revealEls = d.querySelectorAll('.reveal, .stagger');
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- hero video: sources attach after the page has loaded so the poster (LCP) wins ---------- */
  const hv = d.querySelector('.hero__video');
  if (hv) {
    const conn = navigator.connection || {};
    if (reduce || conn.saveData) { hv.remove(); }
    else {
      const attach = () => {
        hv.querySelectorAll('source[data-src]').forEach((src) => { src.src = src.dataset.src; src.removeAttribute('data-src'); });
        hv.addEventListener('playing', () => hv.classList.add('is-playing'), { once: true });
        hv.load();
        const p = hv.play(); if (p && p.catch) p.catch(() => {});
      };
      const later = () => ('requestIdleCallback' in window ? requestIdleCallback(attach, { timeout: 2500 }) : setTimeout(attach, 400));
      d.readyState === 'complete' ? later() : window.addEventListener('load', later, { once: true });
    }
  }

  /* ---------- service-area map: mower drives the route ---------- */
  d.querySelectorAll('[data-route-map]').forEach((wrap) => {
    const init = () => {
    const svg = wrap.querySelector('svg');
      const route = svg.querySelector('.rm-route');
      const trail = svg.querySelector('.rm-trail');
      const mower = svg.querySelector('.rm-mower');
      const stops = Array.from(svg.querySelectorAll('.rm-stop'));
      if (!route || !trail || !mower || !stops.length || !route.getTotalLength) return;
      const fullBox = svg.getAttribute('viewBox');
      const mq = window.matchMedia('(max-width: 960px)');
      const fit = () => svg.setAttribute('viewBox', mq.matches ? '300 40 600 450' : fullBox);
      fit(); mq.addEventListener ? mq.addEventListener('change', fit) : mq.addListener(fit);
  
      const L = route.getTotalLength();
      trail.style.strokeDasharray = L + ' ' + L;
      const setTrail = (len) => { trail.style.strokeDashoffset = String(L - Math.max(0, Math.min(L, len))); };
  
      // Sample the path once (getPointAtLength is slow on long paths) and interpolate from the samples.
      const N = 600, step = L / N, pts = new Array(N + 1);
      for (let i = 0; i <= N; i++) { const q = route.getPointAtLength(i * step); pts[i] = [q.x, q.y]; }
      const at = (len) => {
        const u = ((len % L) + L) % L / step, i = Math.floor(u), f = u - i, a = pts[i], b = pts[Math.min(N, i + 1)];
        return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
      };
  
      // Distance along the path of each stop, in route order.
      const stopAt = stops.map((g) => {
        const m = /translate\(([-\d.]+)[ ,]([-\d.]+)\)/.exec(g.getAttribute('transform')) || [0, 0, 0];
        const sx = +m[1], sy = +m[2];
        let best = 0, bd = Infinity;
        for (let i = 0; i <= N; i++) {
          const dd = (pts[i][0] - sx) * (pts[i][0] - sx) + (pts[i][1] - sy) * (pts[i][1] - sy);
          if (dd < bd) { bd = dd; best = i * step; }
        }
        return best;
      });
      stopAt[0] = 0;
  
      const place = (len) => {
        const a = at(len), b = at(len + 3);
        const ang = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
        mower.setAttribute('transform', 'translate(' + a[0].toFixed(1) + ' ' + a[1].toFixed(1) + ') rotate(' + ang.toFixed(1) + ')');
      };
  
      if (reduce) {
        stops.forEach((g) => g.classList.add('is-visited'));
        setTrail(L); place(0);
        return;
      }
  
      const SPEED = 95; // path units per second
      const DWELL = 650; // ms paused at each suburb
      const legs = stopAt.map((from, i) => {
        const to = i === stopAt.length - 1 ? L : stopAt[i + 1];
        return { from, dist: to - from, dur: ((to - from) / SPEED) * 1000 };
      });
      const total = legs.reduce((acc, l) => acc + l.dur + DWELL, 0);
      const ease = (t) => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const ping = (i) => {
        const g = stops[i]; if (!g || g.classList.contains('is-visited')) return;
        g.classList.add('is-visited', 'is-ping');
        setTimeout(() => g.classList.remove('is-ping'), 1200);
      };
  
      let clock = 0, last = 0, running = false, raf = 0;
      const frame = (now) => {
        if (!running) return;
        if (last) clock += Math.min(100, now - last);
        last = now;
        let t = clock % total;
        if (clock >= total) { clock = t; stops.forEach((g) => g.classList.remove('is-visited', 'is-ping')); }
        for (let i = 0; i < legs.length; i++) {
          const leg = legs[i];
          if (t < DWELL) { ping(i); place(leg.from); setTrail(leg.from); break; }
          t -= DWELL;
          if (t < leg.dur) { ping(i); const len = leg.from + ease(t / leg.dur) * leg.dist; place(len); setTrail(len); break; }
          t -= leg.dur;
        }
        raf = requestAnimationFrame(frame);
      };
      const start = () => { if (running) return; running = true; last = 0; raf = requestAnimationFrame(frame); };
      const stop = () => { running = false; cancelAnimationFrame(raf); };
      place(0); setTrail(0);
      if ('IntersectionObserver' in window) {
        new IntersectionObserver((en) => { en[0].isIntersecting ? start() : stop(); }, { threshold: 0.15 }).observe(wrap);
      } else start();
      d.addEventListener('visibilitychange', () => { d.hidden ? stop() : (wrap.getBoundingClientRect().top < window.innerHeight && start()); });
    
    };
    if ('IntersectionObserver' in window) {
      const pre = new IntersectionObserver((en) => { if (en[0].isIntersecting) { pre.disconnect(); init(); } }, { rootMargin: '400px 0px' });
      pre.observe(wrap);
    } else init();
  });

  /* ---------- review widget: load its script only when the widget is near the viewport ---------- */
  d.querySelectorAll('[data-widget-script]').forEach((box) => {
    const load = () => { if (box.dataset.loaded) return; box.dataset.loaded = '1'; const sc = d.createElement('script'); sc.src = box.dataset.widgetScript; sc.async = true; d.body.appendChild(sc); };
    if ('IntersectionObserver' in window) { const io = new IntersectionObserver((en) => { if (en[0].isIntersecting) { io.disconnect(); load(); } }, { rootMargin: '600px 0px' }); io.observe(box); }
    else load();
  });

  /* ---------- counters ---------- */
  const counters = d.querySelectorAll('[data-count]');
  if (counters.length) {
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = (el.dataset.count.split('.')[1] || '').length;
      const suffix = el.dataset.suffix || '';
      const dur = 1400; const start = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      if (reduce) { el.textContent = target.toFixed(decimals) + suffix; return; }
      el.textContent = (0).toFixed(decimals) + suffix;
      requestAnimationFrame(step);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { run(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- before / after sliders ---------- */
  d.querySelectorAll('.compare').forEach((box) => {
    const range = box.querySelector('input[type="range"]');
    const set = (v) => box.style.setProperty('--pos', v + '%');
    set(range.value);
    range.addEventListener('input', () => set(range.value));
    const fromPointer = (x) => {
      const r = box.getBoundingClientRect();
      const v = Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100));
      range.value = v; set(v);
    };
    let dragging = false;
    box.addEventListener('pointerdown', (e) => { dragging = true; fromPointer(e.clientX); });
    window.addEventListener('pointermove', (e) => { if (dragging) fromPointer(e.clientX); });
    window.addEventListener('pointerup', () => { dragging = false; });
  });

  /* ---------- FAQ: only one open at a time per group ---------- */
  d.querySelectorAll('.faq').forEach((group) => {
    group.querySelectorAll('details').forEach((det) => {
      det.addEventListener('toggle', () => {
        if (det.open) group.querySelectorAll('details[open]').forEach((o) => { if (o !== det) o.open = false; });
      });
    });
  });

  /* ---------- quote forms ----------
     Photos are shrunk in the browser, then the whole form is POSTed as JSON to
     /api/quote (Vercel function) which upserts the contact in the CRM and uploads
     the photos to its media library. The GoHighLevel tracking script in <head>
     still sees the submit event for attribution. If the API is unavailable the
     form falls back to the old behaviour: redirect to the thank-you page. */
  const MAX_PHOTOS = 5, MAX_EDGE = 1600, JPEG_Q = 0.82;
  const shrink = (file) => new Promise((resolve) => {
    const done = (dataUrl) => resolve({ name: file.name || 'photo.jpg', type: 'image/jpeg', data: dataUrl });
    const url = URL.createObjectURL(file);
    const im = new Image();
    im.onload = () => {
      const r = Math.min(1, MAX_EDGE / Math.max(im.naturalWidth, im.naturalHeight));
      const c = d.createElement('canvas'); c.width = Math.round(im.naturalWidth * r); c.height = Math.round(im.naturalHeight * r);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      try { done(c.toDataURL('image/jpeg', JPEG_Q)); } catch (err) { resolve(null); }
    };
    im.onerror = () => { URL.revokeObjectURL(url); resolve(null); };
    im.src = url;
  });

  /* ---------- spam protection ----------
     The inline guard in <head> calls this before the CRM tracking script sees a submit. A non-empty reason stops the
     submission there, so bots never reach the tracking script or /api/quote. */
  const MIN_FORM_MS = 3000;
  const spamState = new WeakMap(); // form -> { ts: Turnstile state or null, pending }
  window.__bygSpamCheck = (form) => {
    const hp = form.querySelector('.hp input');
    if (hp && hp.value) return 'honeypot';
    if (Date.now() - (window.__bygT0 || 0) < MIN_FORM_MS) return 'too-fast';
    const st = spamState.get(form);
    if (st && st.ts && st.ts.active && !st.ts.token) return 'pending-check';
    return '';
  };
  let turnstileP = null;
  const loadTurnstile = () => turnstileP || (turnstileP = new Promise((resolve, reject) => {
    window.__bygTsReady = () => resolve(window.turnstile);
    const sc = d.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__bygTsReady';
    sc.async = true; sc.onerror = reject; d.head.appendChild(sc);
  }));

  d.querySelectorAll('form[data-quote-form]').forEach((form) => {
    const input = form.querySelector('.photos-input');
    const previews = form.querySelector('.photo-previews');
    const zone = form.querySelector('.dropzone');
    let photos = []; // [{ file, dataUrl }]
    // Hidden fields the CRM tracking script captures with the submit event: consent (Yes/No) and submission time.
    // Kept current on every change so they are correct whichever phase the tracking script reads the form in.
    const hidden = (name) => form.querySelector('input[type="hidden"][name="' + name + '"]');
    const consentBox = form.querySelector('input[name="partner_sharing_tick"]');
    const syncMeta = () => {
      const now = new Date();
      if (hidden('partner_sharing')) hidden('partner_sharing').value = consentBox && consentBox.checked ? 'Yes' : 'No';
      if (hidden('submitted_at')) hidden('submitted_at').value = now.toISOString();
      if (hidden('submitted_local')) hidden('submitted_local').value = now.toLocaleString('en-AU', { timeZone: 'Australia/Brisbane', dateStyle: 'medium', timeStyle: 'short' }) + ' AEST';
    };
    syncMeta();
    form.addEventListener('input', syncMeta); form.addEventListener('change', syncMeta);

    // Job type -> service frequency: only shown (and required) for "Regular ongoing service".
    const freqWrap = form.querySelector('[data-frequency]');
    const freqSel = freqWrap && freqWrap.querySelector('select');
    const syncFrequency = () => {
      if (!freqWrap || !freqSel) return;
      const picked = form.querySelector('input[name="job_type"]:checked');
      const regular = !!picked && /^Regular/.test(picked.value);
      freqWrap.hidden = !regular;
      freqSel.disabled = !regular; // disabled = skipped by validation and left out of the submission
      if (!regular) freqSel.value = '';
    };
    form.querySelectorAll('input[name="job_type"]').forEach((r) => r.addEventListener('change', syncFrequency));
    syncFrequency();

    // Suburb: filled from the address (typed or browser-autofilled) until the customer types their own.
    const addr = form.querySelector('[data-address]');
    const sub = form.querySelector('[data-suburb]');
    const subHint = form.querySelector('[data-suburb-hint]');
    if (addr && sub) {
      const known = Array.from(form.querySelectorAll('datalist option')).map((o) => o.value);
      const titleCase = (t) => t.toLowerCase().replace(/(^|[\s'-])([a-z])/g, (m, a, b) => a + b.toUpperCase());
      const guessSuburb = (raw) => {
        const text = String(raw || '').replace(/\s+/g, ' ').trim();
        if (!text) return '';
        // 1) the last comma-separated part, minus state, postcode and country ("..., Raceview QLD 4305")
        const parts = text.split(',').map((t) => t.trim()).filter(Boolean);
        for (let i = parts.length - 1; i >= 1; i--) {
          const part = parts[i].replace(/\b(australia|QLD|Queensland|NSW|VIC|SA|WA|TAS|NT|ACT)\b\.?/ig, '').replace(/\b\d{4}\b/g, '').replace(/\s+/g, ' ').trim();
          if (!part) continue; // e.g. a trailing "QLD 4305" or "Australia"
          if (/\d/.test(part) || part.length > 40) break; // a street line, not a suburb
          const hit = known.find((k) => k.toLowerCase() === part.toLowerCase());
          return hit || titleCase(part);
        }
        // 2) a suburb we service named anywhere in the address; the one nearest the end wins ("Ripley Rd Flinders View")
        const low = ' ' + text.toLowerCase() + ' ';
        let best = '', bestEnd = -1;
        for (const k of known) {
          const re = new RegExp('[^a-z]' + k.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^a-z]', 'g');
          let m; while ((m = re.exec(low))) { const end = m.index + m[0].length; if (end > bestEnd || (end === bestEnd && k.length > best.length)) { best = k; bestEnd = end; } }
        }
        return best;
      };
      let manual = false, pickedAddr = ''; // pickedAddr: an address chosen from Google; its suburb is authoritative
      sub.addEventListener('input', () => { manual = sub.value.trim() !== ''; if (subHint) subHint.hidden = true; });
      const fromAddress = () => {
        if (manual || (pickedAddr && addr.value === pickedAddr)) return;
        const g = guessSuburb(addr.value);
        if (g && g !== sub.value) { sub.value = g; if (subHint) subHint.hidden = false; syncMeta(); }
      };
      addr.addEventListener('change', fromAddress);
      addr.addEventListener('blur', fromAddress);
      addr.addEventListener('input', () => { if (/,/.test(addr.value)) fromAddress(); });

      // Google address lookup (Places API New). Only when the build had GOOGLE_MAPS_API_KEY; loaded on first focus.
      const placesKey = addr.dataset.placesKey;
      const list = placesKey && form.querySelector('.addr-suggest');
      if (placesKey && list) {
        let lib = null, token = null, items = [], active = -1, timer = 0, seq = 0, failed = false;
        addr.setAttribute('role', 'combobox'); addr.setAttribute('aria-autocomplete', 'list');
        addr.setAttribute('aria-expanded', 'false'); addr.setAttribute('aria-controls', list.id);
        const loadPlaces = () => {
          if (window.__bygPlaces) return window.__bygPlaces;
          window.__bygPlaces = new Promise((resolve, reject) => {
            window.__bygPlacesReady = () => resolve();
            const sc = d.createElement('script');
            sc.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(placesKey) + '&v=weekly&loading=async&callback=__bygPlacesReady';
            sc.async = true; sc.onerror = reject; d.head.appendChild(sc);
          }).then(() => window.google.maps.importLibrary('places'));
          return window.__bygPlaces;
        };
        const close = () => { list.hidden = true; list.innerHTML = ''; items = []; active = -1; addr.setAttribute('aria-expanded', 'false'); addr.removeAttribute('aria-activedescendant'); };
        const highlight = (i) => {
          active = i;
          list.querySelectorAll('[role=option]').forEach((el, k) => el.setAttribute('aria-selected', k === i ? 'true' : 'false'));
          if (i >= 0) addr.setAttribute('aria-activedescendant', list.id + '-' + i); else addr.removeAttribute('aria-activedescendant');
        };
        const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
        const render = () => {
          if (!items.length) return close();
          list.innerHTML = items.map((p, i) => '<div class="addr-suggest__item" role="option" id="' + list.id + '-' + i + '" aria-selected="false" data-i="' + i + '"><strong>' + esc(p.mainText ? p.mainText.toString() : p.text.toString()) + '</strong><span>' + esc(p.secondaryText ? p.secondaryText.toString().replace(/, Australia$/, '') : '') + '</span></div>').join('') + '<div class="addr-suggest__credit">Powered by Google</div>';
          list.hidden = false; addr.setAttribute('aria-expanded', 'true'); active = -1;
        };
        const lookup = async () => {
          const q = addr.value.trim();
          if (q.length < 3 || failed) return close();
          const mine = ++seq;
          try {
            lib = lib || await loadPlaces();
            token = token || new lib.AutocompleteSessionToken();
            const res = await lib.AutocompleteSuggestion.fetchAutocompleteSuggestions({
              input: q, sessionToken: token, includedRegionCodes: ['au'], language: 'en-AU',
              locationBias: { center: { lat: -27.62, lng: 152.80 }, radius: 40000 }, // Ipswich & Springfield
            });
            if (mine !== seq) return; // a newer keystroke is already in flight
            items = (res.suggestions || []).map((x) => x.placePrediction).filter(Boolean).slice(0, 5);
            render();
          } catch (err) { failed = true; close(); } // bad key, quota or network: fall back to typing
        };
        const choose = async (i) => {
          const pred = items[i]; if (!pred) return;
          close();
          addr.value = pred.text.toString().replace(/, Australia$/, '');
          try {
            const place = pred.toPlace();
            await place.fetchFields({ fields: ['formattedAddress', 'addressComponents'] });
            token = null; // the session ends with the details call
            const comp = (type) => { const c = (place.addressComponents || []).find((x) => x.types.includes(type)); return c ? c.longText : ''; };
            if (place.formattedAddress) addr.value = place.formattedAddress.replace(/, Australia$/, '');
            const suburb = comp('locality') || comp('sublocality') || comp('postal_town');
            if (suburb) { sub.value = suburb; manual = false; pickedAddr = addr.value; if (subHint) subHint.hidden = false; }
          } catch (err) { /* keep the picked text; the suburb is parsed from it below */ }
          if (pickedAddr !== addr.value) { pickedAddr = ''; manual = false; fromAddress(); }
          syncMeta();
        };
        addr.addEventListener('focus', () => { loadPlaces().then((l) => { lib = l; addr.setAttribute('autocomplete', 'off'); }).catch(() => { failed = true; }); }, { once: true });
        addr.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(lookup, 220); });
        addr.addEventListener('keydown', (e) => {
          if (list.hidden || !items.length) return;
          if (e.key === 'ArrowDown') { e.preventDefault(); highlight((active + 1) % items.length); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(active <= 0 ? items.length - 1 : active - 1); }
          else if (e.key === 'Enter' && active >= 0) { e.preventDefault(); choose(active); }
          else if (e.key === 'Escape') { e.preventDefault(); close(); }
        });
        list.addEventListener('mousedown', (e) => e.preventDefault()); // keep focus in the input
        list.addEventListener('click', (e) => { const el = e.target.closest('[data-i]'); if (el) choose(+el.dataset.i); });
        addr.addEventListener('blur', () => setTimeout(close, 150));
      }
    }
    const status = form.querySelector('.form__status');
    const say = (msg, isError) => { if (!status) return; status.textContent = msg; status.classList.add('show'); status.classList.toggle('is-error', !!isError); };

    // Spam protection state for this form (optional Turnstile token).
    const spam = { ts: null, pending: false };
    spamState.set(form, spam);
    const slot = form.querySelector('[data-turnstile-sitekey]');
    if (slot) {
      spam.ts = { active: false, token: '', id: null };
      const startTs = () => loadTurnstile().then((t) => {
        spam.ts.active = true;
        spam.ts.id = t.render(slot, {
          sitekey: slot.dataset.turnstileSitekey, appearance: 'interaction-only', size: 'flexible', action: 'quote',
          callback: (tok) => { spam.ts.token = tok; if (spam.pending) { spam.pending = false; say('Thanks — sending your request…'); form.requestSubmit(); } },
          'expired-callback': () => { spam.ts.token = ''; try { t.reset(spam.ts.id); } catch (err) { /* ignore */ } },
          'error-callback': () => { spam.ts.active = false; spam.ts.token = ''; }, // don't trap a real person; the server decides
        });
      }).catch(() => { spam.ts.active = false; });
      form.addEventListener('focusin', startTs, { once: true });
    }
    form.addEventListener('byg:blocked', (e) => {
      if (e.detail === 'pending-check') { spam.pending = true; say('One moment, running a quick security check…'); }
      else if (e.detail === 'too-fast') say('Please check your details, then press the button again.', true);
      else window.location.assign(form.dataset.redirect || '/thank-you/'); // honeypot: let the bot think it worked
    });
    const render = () => {
      if (!previews) return;
      previews.innerHTML = photos.map((p, i) => `<figure><img src="${p.dataUrl}" alt=""><button type="button" data-remove="${i}" aria-label="Remove photo">×</button><figcaption>${(p.file.name || 'photo').replace(/[<>&]/g, '')}</figcaption></figure>`).join('');
    };
    const addFiles = async (list) => {
      const files = Array.from(list || []).filter((f) => /^image\//.test(f.type));
      if (!files.length) return;
      if (photos.length + files.length > MAX_PHOTOS) say('You can attach up to ' + MAX_PHOTOS + ' photos.', true);
      for (const f of files.slice(0, MAX_PHOTOS - photos.length)) {
        const out = await shrink(f);
        if (out) photos.push({ file: f, dataUrl: out.data });
      }
      render();
    };
    if (input) {
      input.addEventListener('change', () => { addFiles(input.files); input.value = ''; });
      previews && previews.addEventListener('click', (e) => { const b = e.target.closest('[data-remove]'); if (!b) return; photos.splice(+b.dataset.remove, 1); render(); });
      if (zone) {
        ['dragenter', 'dragover'].forEach((ev) => zone.addEventListener(ev, (e) => { e.preventDefault(); zone.classList.add('is-over'); }));
        ['dragleave', 'drop'].forEach((ev) => zone.addEventListener(ev, (e) => { e.preventDefault(); zone.classList.remove('is-over'); }));
        zone.addEventListener('drop', (e) => addFiles(e.dataTransfer && e.dataTransfer.files));
      }
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (form.querySelector('.hp input') && form.querySelector('.hp input').value) return; // honeypot
      if (!form.reportValidity()) return;
      const btn = form.querySelector('button[type="submit"]');
      if (btn && !btn.dataset.label) btn.dataset.label = btn.innerHTML;
      if (btn) { btn.disabled = true; btn.textContent = photos.length ? 'Sending photos…' : 'Sending…'; }
      say('Thanks — sending your request…');
      const data = {};
      syncMeta();
      const partner = hidden('partner_sharing').value === 'Yes' ? 'Yes' : 'No';
      try {
        Object.assign(data, Object.fromEntries(new FormData(form).entries()));
        data.form_ms = Date.now() - (window.__bygT0 || Date.now()); // time on page, by the visitor's own clock
        data.cf_token = (spam.ts && spam.ts.token) || data['cf-turnstile-response'] || '';
        delete data['cf-turnstile-response'];
        delete data.photos; delete data.website; delete data.partner_sharing_tick;
        data.partner_sharing = partner;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'quote_form_submit', form_id: form.id || 'quote', service_needed: data.service_needed || '', job_type: data.job_type || '', service_frequency: data.service_frequency || '', suburb: data.suburb || '', photos: photos.length });
      } catch (err) { /* non-fatal */ }
      let result = { ok: false, photos: 0 };
      try {
        const res = await fetch('/api/quote', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, page: location.pathname, photos: photos.map((p) => ({ name: p.file.name, type: 'image/jpeg', data: p.dataUrl })) }),
        });
        result = await res.json().catch(() => ({ ok: res.ok, photos: 0 }));
      } catch (err) { result = { ok: false, photos: 0 }; }
      if (result && result.error === 'verification') {
        // The server could not verify the bot check. Keep the details on screen so they can try again or call.
        if (btn) { btn.disabled = false; btn.innerHTML = btn.dataset.label || 'Request my free quote'; }
        if (spam.ts && window.turnstile && spam.ts.id != null) { spam.ts.token = ''; try { window.turnstile.reset(spam.ts.id); } catch (err) { /* ignore */ } }
        say('We could not complete the security check. Please press the button again, or call or text us on 0411 638 432.', true);
        return;
      }
      try {
        sessionStorage.setItem('byg_last_quote', JSON.stringify({ name: data.full_name || '', service: data.service_needed || '', photosSent: result.ok ? (result.photos || 0) : 0, photosWanted: photos.length, apiOk: !!result.ok, partner: partner === 'Yes' }));
      } catch (err) { /* ignore */ }
      // Give the tracking script's own submit handler time to flush, then redirect.
      setTimeout(() => { window.location.assign(form.dataset.redirect || '/thank-you/'); }, 400);
    });
  });

  /* ---------- quote modal ---------- */
  const qm = d.getElementById('quote-modal');
  if (qm && typeof qm.showModal === 'function') {
    const openModal = (src) => {
      if (mnav && mnav.classList.contains('open')) { mnav.classList.remove('open'); burger && burger.setAttribute('aria-expanded', 'false'); }
      qm.showModal(); d.body.style.overflow = 'hidden';
      const svc = src && src.dataset.service; const sel = qm.querySelector('select[name="service_needed"]');
      if (svc && sel) sel.value = svc;
      setTimeout(() => { const f = qm.querySelector('input[name="full_name"]'); f && f.focus({ preventScroll: true }); }, 60);
      try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'quote_modal_open', source: (src && src.textContent.trim()) || 'link' }); } catch (err) { /* ignore */ }
    };
    const closeModal = () => { qm.close(); d.body.style.overflow = ''; };
    d.querySelectorAll('[data-quote-open]').forEach((el) => el.addEventListener('click', (e) => { e.preventDefault(); openModal(el); }));
    qm.querySelectorAll('[data-quote-close]').forEach((el) => el.addEventListener('click', closeModal));
    qm.addEventListener('click', (e) => { if (e.target === qm) closeModal(); }); // backdrop click
    qm.addEventListener('close', () => { d.body.style.overflow = ''; });
    if (location.hash === '#quote') openModal(null);
  }

  /* ---------- thank-you personalisation ---------- */
  const ty = d.querySelector('[data-thank-you-name]');
  if (ty) {
    try {
      const last = JSON.parse(sessionStorage.getItem('byg_last_quote') || 'null');
      if (last && last.name) ty.textContent = 'Thanks, ' + last.name.split(' ')[0] + '!';
      const lede = d.querySelector('[data-thank-you-lede]');
      if (lede && last) {
        const email = lede.dataset.email || '';
        lede.innerHTML = last.partner
          ? 'Thanks! We\'ll be in touch soon. If we can\'t help, we may pass your details to a trusted local business, as you agreed. Changed your mind? Email <a href="mailto:' + email + '">' + email + '</a>.'
          : 'Thanks! We\'ll be in touch soon. Your details stay with us and won\'t be shared.';
      }
      const tp = d.querySelector('[data-thank-you-photos]');
      if (tp && last && last.photosWanted) {
        if (last.photosSent) { tp.textContent = 'We received ' + last.photosSent + (last.photosSent === 1 ? ' photo' : ' photos') + ' with your request.'; tp.classList.add('show'); }
        else { tp.textContent = 'We could not attach your photos. Please text them to 0411 638 432 and we will add them to your quote.'; tp.classList.add('show', 'is-error'); }
      }
    } catch (err) { /* ignore */ }
  }

  /* ---------- current nav item ---------- */
  const path = location.pathname.replace(/\/+$/, '') || '/';
  d.querySelectorAll('.nav-main .nav-link[href]').forEach((a) => {
    const href = a.getAttribute('href').replace(/\/+$/, '') || '/';
    if (href === path || (href !== '/' && path.startsWith(href))) a.classList.add('is-active');
  });
  if (path.startsWith('/services')) { const t = d.querySelector('.nav-trigger'); if (t) t.classList.add('is-active'); }
})();
