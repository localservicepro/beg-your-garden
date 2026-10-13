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

  /* ---------- services mega dropdown ---------- */
  const dd = d.querySelector('.nav-dropdown');
  if (dd) {
    const trigger = dd.querySelector('.nav-trigger');
    const hoverCapable = window.matchMedia('(hover: hover)').matches;
    const open = () => { dd.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); };
    const close = () => { dd.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); };
    let hoverTimer;
    if (hoverCapable) {
      dd.addEventListener('mouseenter', () => { clearTimeout(hoverTimer); open(); });
      dd.addEventListener('mouseleave', () => { hoverTimer = setTimeout(close, 120); });
    }
    trigger.addEventListener('click', (e) => { e.preventDefault(); dd.classList.contains('open') ? close() : open(); });
    d.addEventListener('click', (e) => { if (!dd.contains(e.target)) close(); });
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

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
    const accBtn = mnav.querySelector('.m-link[aria-controls]');
    if (accBtn) {
      const acc = d.getElementById(accBtn.getAttribute('aria-controls'));
      accBtn.addEventListener('click', () => {
        const o = accBtn.getAttribute('aria-expanded') === 'true';
        accBtn.setAttribute('aria-expanded', String(!o));
        acc.dataset.open = String(!o);
      });
    }
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

  /* ---------- hero video ---------- */
  const hv = d.querySelector('.hero__video');
  if (hv) {
    if (reduce) { hv.removeAttribute('autoplay'); hv.pause(); hv.remove(); }
    else {
      const mark = () => hv.classList.add('is-playing');
      hv.addEventListener('playing', mark, { once: true });
      const p = hv.play(); if (p && p.catch) p.catch(() => {});
    }
  }

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
     The GoHighLevel external-tracking script (loaded in <head>) captures the
     submit event and sends the mapped contact fields to the CRM. We let that
     listener run, then redirect to the thank-you page. */
  d.querySelectorAll('form[data-quote-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (form.querySelector('.hp input') && form.querySelector('.hp input').value) return; // honeypot
      if (!form.reportValidity()) return;
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      const status = form.querySelector('.form__status');
      if (status) { status.textContent = 'Thanks — sending your request…'; status.classList.add('show'); }
      try {
        const data = Object.fromEntries(new FormData(form).entries());
        delete data.website;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'quote_form_submit', form_id: form.id || 'quote', service_needed: data.service_needed || '' });
        sessionStorage.setItem('byg_last_quote', JSON.stringify({ name: data.full_name || '', service: data.service_needed || '' }));
      } catch (err) { /* non-fatal */ }
      // Give the tracking script's own submit handler time to flush, then redirect.
      setTimeout(() => { window.location.assign(form.dataset.redirect || '/thank-you/'); }, 600);
    });
  });

  /* ---------- thank-you personalisation ---------- */
  const ty = d.querySelector('[data-thank-you-name]');
  if (ty) {
    try {
      const last = JSON.parse(sessionStorage.getItem('byg_last_quote') || 'null');
      if (last && last.name) ty.textContent = 'Thanks, ' + last.name.split(' ')[0] + '!';
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
