/* V3 Growth cleanup layer.
   This file intentionally runs after the legacy V3 scripts without changing the approved layout.
   It removes browser-persisted customer contact data from older builds and intercepts the legacy
   AI lead form so personal data is never written to localStorage. */
(() => {
  const PII_KEYS = ['miki_booking_request', 'miki_ai_leads'];
  for (const key of PII_KEYS) {
    try { localStorage.removeItem(key); } catch (_) {}
  }

  const cfg = () => window.MIKI_GROWTH_CONFIG || {};
  const lang = () => window.MIKI_LANGUAGE || localStorage.getItem('miki-language') || document.documentElement.lang || 'vi';

  async function postLead(lead) {
    const endpoint = String(cfg().leadEndpoint || '').trim();
    if (!endpoint) return false;
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(lead),
        keepalive: true
      });
      return res.ok;
    } catch (_) {
      return false;
    }
  }

  function whatsappFallback(lead) {
    const base = cfg().whatsapp || 'https://wa.me/84935555170';
    const msg = [
      'Miki Spa - Consultation request',
      `Name: ${lead.name || ''}`,
      `Contact: ${lead.contact || ''}`,
      `Service: ${lead.service || ''}`,
      `Language: ${(lead.language || 'vi').toUpperCase()}`
    ].join('\n');
    const url = base + (base.includes('?') ? '&' : '?') + 'text=' + encodeURIComponent(msg);
    window.open(url, '_blank', 'noopener');
  }

  /* Capture-phase interception runs before the old submitAiLead handler in script.js. */
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.id !== 'mikiAiLeadForm') return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const fd = new FormData(form);
    const growth = window.MikiGrowth;
    const lead = {
      id: `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,9)}`,
      createdAt: new Date().toISOString(),
      visitorId: growth?.visitorId || '',
      sessionId: growth?.sessionId || '',
      source: growth?.source || {},
      language: String(fd.get('language') || lang()),
      name: String(fd.get('name') || '').trim(),
      contact: String(fd.get('phone') || '').trim(),
      service: String(fd.get('service') || 'consult'),
      channel: 'WhatsApp',
      landing: location.pathname + location.search,
      lastPage: location.href,
      consentAt: new Date().toISOString(),
      status: 'new',
      origin: 'miki_ai_concierge'
    };

    growth?.track?.('lead_submit', {service: lead.service, channel: lead.channel, origin: lead.origin});
    const sent = await postLead(lead);
    form.closest('.ai-lead-card')?.remove();

    if (typeof window.addAiMessage === 'function') {
      const text = lead.language === 'vi'
        ? 'Cảm ơn bạn ✨ Miki đã ghi nhận yêu cầu tư vấn. Miki sẽ liên hệ để xác nhận dịch vụ và thời gian phù hợp.'
        : 'Thank you ✨ Your consultation request is ready. Miki will contact you to confirm the service and suitable time.';
      window.addAiMessage(text, 'bot');
    }

    if (!sent) whatsappFallback(lead);
  }, true);

  /* Older AI UI mentioned the retired MIKI10 offer. Remove only that legacy sentence when it appears. */
  const cleanPromo = (root = document) => {
    root.querySelectorAll?.('.ai-lead-card p').forEach((p) => {
      p.textContent = p.textContent
        .replace(/\s*Mã đặt lịch trước:\s*MIKI10\s*\.?/gi, '')
        .replace(/\s*Advance booking code:\s*MIKI10\s*\.?/gi, '')
        .trim();
    });
  };
  cleanPromo();
  new MutationObserver((records) => {
    for (const record of records) {
      for (const node of record.addedNodes) if (node.nodeType === 1) cleanPromo(node);
    }
  }).observe(document.documentElement, {childList:true, subtree:true});
})();
