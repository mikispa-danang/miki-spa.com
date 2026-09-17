/* Miki AI V3.1 runtime configuration.
   GitHub Pages serves the frontend only. Set endpoint to your deployed secure gateway. */
window.MIKI_AI_CONFIG = Object.freeze({
  endpoint: 'https://YOUR-MIKI-AI-WORKER.workers.dev/chat',
  siteOrigin: 'https://miki-spa.com',
  bookingUrl: '/booking.html',
  whatsapp: 'https://wa.me/84935555170',
  zalo: 'https://zalo.me/0935555170',
  enabled: true
});

/* Production booking routing hotfix — 2026-09-16.
   Route legacy booking triggers directly to the real GitHub Pages booking file.
   This avoids /booking/ directory/canonical-host redirect issues and disables the old modal. */
(() => {
  try { sessionStorage.setItem('miki_auto_booking_shown', '1'); } catch (_) {}

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-open-booking]');
    if (!trigger) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    try { sessionStorage.setItem('miki_booking_interacted', '1'); } catch (_) {}
    const lang = window.MIKI_LANGUAGE || localStorage.getItem('miki-language') || 'vi';
    const url = new URL('/booking.html', window.location.origin);
    if (lang) url.searchParams.set('lang', lang);
    window.location.assign(url.href);
  }, true);

  window.addEventListener('DOMContentLoaded', () => {
    const legacyModal = document.getElementById('bookingModal');
    if (legacyModal) {
      legacyModal.setAttribute('aria-hidden', 'true');
      legacyModal.remove();
    }
    document.body.style.overflow = '';
  });
})();

/* Final production i18n polish.
   i18n.js is loaded before this file on the main page, so this safely adds
   the last Thai editorial/privacy translations without changing layout. */
(() => {
  if (document.querySelector('script[data-miki-final-i18n]')) return;
  const s = document.createElement('script');
  s.src = 'i18n-final.js?v=20260917-final';
  s.defer = true;
  s.dataset.mikiFinalI18n = '1';
  document.head.appendChild(s);
})();
