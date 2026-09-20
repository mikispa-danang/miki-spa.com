/* Canonical service catalog bridge.
   Keeps the current booking UI functional while moving prices/services to data/services.json.
   HTML values remain as a safe fallback if the JSON cannot be loaded. */
(() => {
  const formatVnd = (value) => value == null ? '' : new Intl.NumberFormat('vi-VN').format(value) + 'đ';

  async function load() {
    try {
      const res = await fetch('data/services.json', {cache:'no-cache'});
      if (!res.ok) throw new Error(`services.json ${res.status}`);
      const catalog = await res.json();
      window.MIKI_SERVICE_CATALOG = Object.freeze(catalog);

      const items = new Map();
      for (const group of catalog.groups || []) {
        for (const item of group.items || []) items.set(item.key, {...item, group:group.key});
      }

      document.querySelectorAll('#services .card[data-service]').forEach((card) => {
        const item = items.get(card.dataset.service);
        if (!item) return;
        const price = formatVnd(item.price);
        if (price) {
          card.dataset.price = price;
          const priceEl = card.querySelector('.price');
          if (priceEl) priceEl.textContent = price;
        }
        card.dataset.catalogGroup = item.group || '';
      });

      window.dispatchEvent(new CustomEvent('miki:services-ready', {detail:{catalog}}));
    } catch (error) {
      console.warn('[Miki] Canonical service catalog unavailable; using embedded fallback values.', error);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load, {once:true});
  else load();
})();
