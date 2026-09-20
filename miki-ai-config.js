/* Miki AI V3.1 runtime configuration.
   The secure Supabase gateway is deployed; enable only after OPENAI_API_KEY is configured in Supabase Secrets. */
window.MIKI_AI_CONFIG = Object.freeze({
  endpoint: 'https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-ai',
  siteOrigin: 'https://miki-spa.com',
  bookingUrl: '/booking.html',
  whatsapp: 'https://wa.me/84935555170',
  zalo: 'https://zalo.me/0935555170',
  enabled: false
});

/* Production booking routing.
   V3 uses booking.html as the single booking UI. Legacy modal markup is removed at runtime
   until the final production cleanup physically removes the old source block. */
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

/* Technical SEO metadata and LocalBusiness structured data. */
(() => {
  if (document.querySelector('script[data-miki-seo]')) return;
  const s = document.createElement('script');
  s.src = 'seo-meta.js?v=20260920-1';
  s.defer = true;
  s.dataset.mikiSeo = '1';
  document.head.appendChild(s);
})();

/* Final production i18n polish. */
(() => {
  if (document.querySelector('script[data-miki-final-i18n]')) return;
  const s = document.createElement('script');
  s.src = 'i18n-final.js?v=20260917-final';
  s.defer = true;
  s.dataset.mikiFinalI18n = '1';
  document.head.appendChild(s);
})();

/* Unified typography/contrast layer. Kept separate now; final performance pass will merge it. */
(() => {
  if (document.querySelector('link[data-miki-type-system]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'v3-type-system.css?v=20260920-1';
  link.dataset.mikiTypeSystem = '1';
  document.head.appendChild(link);
})();

/* Cleanup layer: removes retired UI/promo/browser-PII behavior without redesigning V3. */
(() => {
  if (document.querySelector('script[data-miki-cleanup]')) return;
  const s = document.createElement('script');
  s.src = 'v3-cleanup.js?v=20260920-2';
  s.defer = true;
  s.dataset.mikiCleanup = '1';
  document.head.appendChild(s);
})();

/* V3 Growth layer — isolated from the approved V3 layout.
   Public config only; analytics and backend activate only after real IDs/endpoints are supplied. */
(() => {
  if (document.querySelector('script[data-miki-growth]')) return;

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'v3-growth.css?v=20260920-1';
  css.dataset.mikiGrowthCss = '1';
  document.head.appendChild(css);

  const cfg = document.createElement('script');
  cfg.src = 'v3-growth-config.js?v=20260920-1';
  cfg.dataset.mikiGrowthConfig = '1';
  cfg.onload = () => {
    const app = document.createElement('script');
    app.src = 'v3-growth.js?v=20260920-1';
    app.defer = true;
    app.dataset.mikiGrowth = '1';
    document.head.appendChild(app);
  };
  document.head.appendChild(cfg);
})();
