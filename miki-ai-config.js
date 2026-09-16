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
    if (lang && lang !== 'vi') url.searchParams.set('lang', lang);
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
