/* V3 Growth cleanup layer.
   Runs after the legacy V3 scripts without redesigning the approved layout.
   It removes retired UI/browser-persisted customer data and intercepts the legacy
   AI lead form so personal data is never written to localStorage. */
(() => {
  const PII_KEYS = ['miki_booking_request', 'miki_ai_leads'];
  for (const key of PII_KEYS) {
    try { localStorage.removeItem(key); } catch (_) {}
  }

  const cfg = () => window.MIKI_GROWTH_CONFIG || {};
  const lang = () => window.MIKI_LANGUAGE || localStorage.getItem('miki-language') || document.documentElement.lang || 'vi';

  function removeQuickConnect(root = document) {
    const section = root.querySelector?.('#connect-miki, .connect-miki');
    if (section) section.remove();
  }

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
      `Language: ${(lead.lang || 'vi').toUpperCase()}`
    ].join('\n');
    const url = base + (base.includes('?') ? '&' : '?') + 'text=' + encodeURIComponent(msg);
    window.open(url, '_blank', 'noopener');
  }

  function consentCopy() {
    const l = lang();
    if (l === 'vi') return 'Tôi đồng ý để Miki liên hệ về yêu cầu tư vấn này.';
    if (l === 'ko') return '이 상담 요청과 관련해 Miki가 연락하는 것에 동의합니다.';
    if (l === 'zh') return '我同意 Miki 就此咨询请求与我联系。';
    if (l === 'ru') return 'Я согласен(на), чтобы Miki связался со мной по этому запросу.';
    if (l === 'th') return 'ฉันยินยอมให้ Miki ติดต่อเกี่ยวกับคำขอปรึกษานี้';
    return 'I agree that Miki may contact me about this consultation request.';
  }

  function prepareLegacyAiLead(root = document) {
    root.querySelectorAll?.('#mikiAiLeadForm').forEach((form) => {
      if (!form.querySelector('[data-miki-lead-consent]')) {
        const label = document.createElement('label');
        label.className = 'miki-ai-consent';
        label.dataset.mikiLeadConsent = '1';
        label.innerHTML = `<input type="checkbox" name="mikiConsent" required> <span>${consentCopy()}</span>`;
        const submit = form.querySelector('button[type="submit"]');
        form.insertBefore(label, submit || null);
      } else {
        const span = form.querySelector('[data-miki-lead-consent] span');
        if (span) span.textContent = consentCopy();
      }
    });
  }

  /* Capture-phase interception runs before the old submitAiLead handler in script.js. */
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.id !== 'mikiAiLeadForm') return;

    event.preventDefault();
    event.stopImmediatePropagation();
    prepareLegacyAiLead(form);
    if (!form.reportValidity()) return;

    const fd = new FormData(form);
    if (fd.get('mikiConsent') !== 'on') return;
    const growth = window.MikiGrowth;
    const currentLang = String(fd.get('language') || lang());
    const lead = {
      id: `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,9)}`,
      createdAt: new Date().toISOString(),
      visitorId: growth?.visitorId || '',
      sessionId: growth?.sessionId || '',
      source: growth?.source || {},
      lang: currentLang,
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
      const text = lead.lang === 'vi'
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
    prepareLegacyAiLead(root);
  };

  function normalizeReviewTrust(root = document) {
    root.querySelectorAll?.('.review-highlight-card .review-stars').forEach((stars) => {
      stars.hidden = true;
      stars.setAttribute('aria-hidden', 'true');
    });
    root.querySelectorAll?.('.hero-trust-badges .trust-badge-item span').forEach((span) => {
      if (/4[.,]9/.test(span.textContent || '')) span.textContent = '★';
    });
  }

  removeQuickConnect();
  cleanPromo();
  normalizeReviewTrust();
  new MutationObserver((records) => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (node.nodeType !== 1) continue;
        removeQuickConnect(node);
        cleanPromo(node);
        normalizeReviewTrust(node);
      }
    }
  }).observe(document.documentElement, {childList:true, subtree:true});

  window.addEventListener('miki:language', () => prepareLegacyAiLead());
})();
