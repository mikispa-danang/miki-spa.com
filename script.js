const modal = document.getElementById('bookingModal');
const form = document.getElementById('bookingForm');
const success = document.getElementById('successBox');
const bookingTitle = document.getElementById('bookingTitle');

const tr = (key) => window.mikiT ? window.mikiT(key) : key;
const currentLang = () => window.MIKI_LANGUAGE || localStorage.getItem('miki-language') || 'vi';
const DEFAULT_BOOKING_TITLE = 'Chọn dịch vụ phù hợp với bạn.';
const AUTO_BOOKING_TITLE = 'Bạn đã xem dịch vụ — Miki có thể giữ khung giờ phù hợp cho bạn.';

window.addEventListener('miki:language', (event) => {
  const lang = event.detail?.lang || currentLang();
  const languageSelect = form?.querySelector('select[name="language"]');
  if (languageSelect && [...languageSelect.options].some(o => o.value === lang)) languageSelect.value = lang;
  if (bookingTitle && !modal?.classList.contains('open')) bookingTitle.textContent = tr(DEFAULT_BOOKING_TITLE);
  const note=form?.querySelector('textarea[name="note"]');
  if(note?.dataset.mikiAutoPrefix && note.value.startsWith(note.dataset.mikiAutoPrefix)) {
    const suffix=note.value.slice(note.dataset.mikiAutoPrefix.length);
    note.dataset.mikiAutoPrefix=tr('Khách quan tâm sau khi xem Dịch vụ/Bảng giá. Ưu đãi đặt lịch trước MIKI10 (-10%).')+' ';
    note.value=note.dataset.mikiAutoPrefix+suffix;
  }
});

function openBooking({ auto = false } = {}) {
  if (!modal) return;
  if (bookingTitle) bookingTitle.textContent = tr(auto ? AUTO_BOOKING_TITLE : DEFAULT_BOOKING_TITLE);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (auto) {
    sessionStorage.setItem('miki_auto_booking_shown', '1');
    const note = form?.querySelector('textarea[name="note"]');
    if (note && !note.value.includes('MIKI10')) {
      note.value = tr('Khách quan tâm sau khi xem Dịch vụ/Bảng giá. Ưu đãi đặt lịch trước MIKI10 (-10%).') + ' ' + note.value;
      note.dataset.mikiAutoPrefix=tr('Khách quan tâm sau khi xem Dịch vụ/Bảng giá. Ưu đãi đặt lịch trước MIKI10 (-10%).')+' ';
    }
  } else {
    sessionStorage.setItem('miki_booking_interacted', '1');
  }
}

function bookingMessage(lead) {
  const labels = {laser:'Triệt lông',waxing:'Waxing',skin:'Chăm sóc da',acne:'Hỗ trợ chăm sóc da mụn',body:'Body Care',academy:'Đào tạo học viên',consult:'Tư vấn trước',morning:'Sáng',afternoon:'Chiều',evening:'Tối'};
  return [
    tr('Xin chào Miki Skin Spa, tôi muốn đặt lịch:'),
    tr('Họ tên:')+' '+(lead.name || ''),
    tr('SĐT/WhatsApp:')+' '+(lead.phone || ''),
    tr('Dịch vụ:')+' '+tr(labels[lead.service] || lead.service || 'dịch vụ'),
    tr('Ngày:')+' '+(lead.date || tr('chưa chọn')),
    tr('Thời gian:')+' '+tr(labels[lead.time] || lead.time || 'chưa chọn'),
    tr('Ghi chú:')+' '+(lead.note || ''),
    'MIKI10'
  ].join('\n');
}
function closeBooking() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => {
    if (form) form.hidden = false;
    if (success) success.hidden = true;
    if (bookingTitle) bookingTitle.textContent = tr(DEFAULT_BOOKING_TITLE);
  }, 250);
}

document.querySelectorAll('[data-open-booking]').forEach(btn => btn.addEventListener('click', e => {
  e.preventDefault();
  openBooking();
}));

document.querySelectorAll('[data-close-booking]').forEach(btn => btn.addEventListener('click', closeBooking));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal?.classList.contains('open')) closeBooking();
});

form?.addEventListener('submit', async e => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalLabel = submitBtn?.textContent || 'Gửi yêu cầu đặt lịch';
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = tr('Đang gửi…'); }

  const data = Object.fromEntries(new FormData(form));
  if (data.website) { if (submitBtn) submitBtn.disabled = true; return; }
  delete data.website;
  const lead = { ...data, language: data.language || currentLang(), promo: 'MIKI10', createdAt: new Date().toISOString() };
  const waText = encodeURIComponent(bookingMessage(lead));
  const waUrl = `https://wa.me/qr/CZKPTD7OEQPII1?text=${waText}`;
  const waBtn = document.getElementById('bookingWhatsApp');
  const successTitle = document.getElementById('bookingSuccessTitle');
  const successText = document.getElementById('bookingSuccessText');
  let sent = false;

  try {
    if (location.protocol !== 'file:') {
      const res = await fetch('/api/lead', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(lead)});
      sent = res.ok;
    }
  } catch (_) { sent = false; }

  localStorage.setItem('miki_booking_request', JSON.stringify(lead));
  sessionStorage.setItem('miki_booking_submitted', '1');
  sessionStorage.setItem('miki_booking_interacted', '1');
  form.hidden = true;
  success.hidden = false;

  if (waBtn) { waBtn.href = waUrl; waBtn.hidden = sent; }
  if (successTitle) successTitle.textContent = tr(sent ? 'Miki đã nhận yêu cầu' : 'Thông tin đã sẵn sàng');
  if (successText) successText.textContent = sent
    ? tr('Miki sẽ liên hệ để xác nhận lịch phù hợp với bạn.')
    : tr('Hệ thống nhận lịch tự động chưa được kết nối. Hãy bấm WhatsApp bên dưới để gửi yêu cầu trực tiếp cho Miki.');

  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
});

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.price-panel').forEach(p => p.classList.remove('active'));
  tab.classList.add('active');
  document.querySelector(`[data-panel="${tab.dataset.tab}"]`)?.classList.add('active');
}));

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Auto-booking reminder:
// Start the 2-minute timer only after the customer has actually viewed
// either the Services section or the Pricing section.
const AUTO_BOOKING_DELAY = 2 * 60 * 1000;
let autoBookingTimer = null;
let engagementObserved = false;

function startAutoBookingTimer() {
  if (engagementObserved || autoBookingTimer) return;
  if (sessionStorage.getItem('miki_auto_booking_shown') ||
      sessionStorage.getItem('miki_booking_interacted') ||
      sessionStorage.getItem('miki_booking_submitted')) return;

  engagementObserved = true;
  sessionStorage.setItem('miki_service_price_viewed', String(Date.now()));

  autoBookingTimer = window.setTimeout(() => {
    if (sessionStorage.getItem('miki_auto_booking_shown') ||
        sessionStorage.getItem('miki_booking_interacted') ||
        sessionStorage.getItem('miki_booking_submitted')) return;
    if (modal?.classList.contains('open')) return;
    openBooking({ auto: true });
  }, AUTO_BOOKING_DELAY);
}

const watchedSections = ['services', 'pricing']
  .map(id => document.getElementById(id))
  .filter(Boolean);

if ('IntersectionObserver' in window && watchedSections.length) {
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.25)) {
      startAutoBookingTimer();
      observer.disconnect();
    }
  }, { threshold: [0.25] });
  watchedSections.forEach(section => observer.observe(section));
} else {
  // Safe fallback for older browsers: start only after a scroll interaction.
  window.addEventListener('scroll', startAutoBookingTimer, { once: true, passive: true });
}



// ---------- FAQ tabs ----------
const faqTabs = document.querySelectorAll('.faq-tab');
const faqPanels = document.querySelectorAll('.faq-panel');
faqTabs.forEach(tab => tab.addEventListener('click', () => {
  faqTabs.forEach(t => t.classList.remove('active'));
  faqPanels.forEach(p => p.classList.remove('active'));
  tab.classList.add('active');
  document.querySelector(`[data-faq-panel="${tab.dataset.faqTab}"]`)?.classList.add('active');
}));

// ---------- Miki AI Concierge ----------
const aiChat = document.getElementById('mikiAiChat');
const aiMessages = document.getElementById('mikiAiMessages');
const aiForm = document.getElementById('mikiAiForm');
const aiInput = document.getElementById('mikiAiInput');
const aiTyping = document.getElementById('mikiAiTyping');
let aiHistory = [];

function openAi() {
  if (!aiChat) return;
  aiChat.classList.add('open');
  aiChat.setAttribute('aria-hidden','false');
  window.setTimeout(() => aiInput?.focus(), 120);
}
function closeAi() {
  aiChat?.classList.remove('open');
  aiChat?.setAttribute('aria-hidden','true');
}
document.querySelectorAll('[data-open-ai]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openAi(); }));
document.querySelectorAll('[data-close-ai]').forEach(b => b.addEventListener('click', closeAi));

document.addEventListener('keydown', e => { if (e.key === 'Escape' && aiChat?.classList.contains('open')) closeAi(); });

function addAiMessage(content, role='bot', {html=false}={}) {
  if (!aiMessages) return;
  const row = document.createElement('div');
  row.className = `ai-message ${role}`;
  const bubble = document.createElement('div');
  bubble.className = 'ai-bubble';
  if (html) bubble.innerHTML = content; else bubble.textContent = content;
  row.appendChild(bubble);
  aiMessages.appendChild(row);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  return bubble;
}
function showTyping(show=true){ if(aiTyping) aiTyping.hidden=!show; }

const AI_COPY = {
  vi: { offline: 'Miki AI đang tạm thời không kết nối được. Bạn có thể thử lại hoặc liên hệ Hotline/Zalo 0935 555 170 để được tư vấn.', reset: 'Cuộc trò chuyện mới', long: 'Bạn vui lòng gửi câu hỏi dưới 2.000 ký tự nhé.' },
  en: { offline: 'Miki AI is temporarily unavailable. Please try again or contact Miki via Hotline/Zalo +84 935 555 170.', reset: 'New conversation', long: 'Please keep your question under 2,000 characters.' },
  ko: { offline: '현재 Miki AI에 연결할 수 없습니다. 다시 시도하거나 전화/Zalo +84 935 555 170으로 문의해 주세요.', reset: '새 대화', long: '질문은 2,000자 이내로 입력해 주세요.' },
  zh: { offline: 'Miki AI 暂时无法连接。请重试，或通过电话/Zalo +84 935 555 170 联系我们。', reset: '新对话', long: '请将问题控制在2,000字以内。' },
  ru: { offline: 'Miki AI временно недоступен. Попробуйте снова или свяжитесь с Miki по телефону/Zalo +84 935 555 170.', reset: 'Новый разговор', long: 'Пожалуйста, ограничьте вопрос 2 000 символами.' }
};
const AI_SESSION_KEY = 'miki-ai-session-v2';
const AI_SESSION_TTL = 30 * 60 * 1000;
let aiBusy = false;
let aiLastActivity = 0;
const aiCopy = () => AI_COPY[currentLang()] || AI_COPY.vi;
function boundedAiHistory(history) {
  const result = [];
  let size = 0;
  for (let i = history.length - 1; i >= 0 && result.length < 24; i--) {
    if (size + history[i].content.length > 24000) break;
    size += history[i].content.length;
    result.unshift(history[i]);
  }
  while (result[0]?.role === 'assistant') result.shift();
  return result;
}
function clearAiMessages() {
  if (!aiMessages) return;
  Array.from(aiMessages.children).forEach(child => { if (child.id !== 'mikiAiQuick') child.remove(); });
}
function persistAiHistory() {
  aiHistory = boundedAiHistory(aiHistory);
  aiLastActivity = Date.now();
  try { sessionStorage.setItem(AI_SESSION_KEY, JSON.stringify({ at: aiLastActivity, messages: aiHistory })); } catch {}
}
function restoreAiHistory() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(AI_SESSION_KEY) || 'null');
    if (!saved || !Number.isFinite(saved.at) || Date.now() - saved.at > AI_SESSION_TTL || !Array.isArray(saved.messages)) {
      sessionStorage.removeItem(AI_SESSION_KEY); return;
    }
    aiHistory = boundedAiHistory(saved.messages.filter(m => m && ['user', 'assistant'].includes(m.role) && typeof m.content === 'string' && m.content.length <= (m.role === 'user' ? 2000 : 8000)));
    aiLastActivity = saved.at;
    aiHistory.forEach(m => addAiMessage(m.content, m.role === 'user' ? 'user' : 'bot'));
  } catch { aiHistory = []; }
}
function setAiBusy(busy) {
  aiBusy = busy;
  if (aiInput) aiInput.disabled = busy;
  aiForm?.querySelectorAll('button').forEach(b => b.disabled = busy);
  document.querySelectorAll('[data-ai-prompt], [data-ai-booking], [data-ai-reset]').forEach(b => b.disabled = busy);
  aiMessages?.setAttribute('aria-busy', String(busy));
}
async function askBackend(messages, onDelta) {
  if (location.protocol === 'file:') throw new Error('SERVER_REQUIRED');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 55000);
  try {
    const res = await fetch('/api/chat', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/x-ndjson' },
      body: JSON.stringify({ messages, language: currentLang() }), signal: controller.signal
    });
    if (!res.ok) throw new Error('AI_UNAVAILABLE');
    if (!res.headers.get('content-type')?.includes('application/x-ndjson')) {
      const data = await res.json();
      if (!data.reply) throw new Error('EMPTY_RESPONSE');
      onDelta(data.reply); return data.reply;
    }
    const reader = res.body.getReader(), decoder = new TextDecoder();
    let buffer = '', reply = '', done = false;
    const consume = line => {
      if (!line.trim()) return;
      const event = JSON.parse(line);
      if (event.type === 'error') throw new Error('AI_UNAVAILABLE');
      if (event.type === 'done') done = true;
      if (event.type === 'delta') { reply += event.text; onDelta(reply); }
    };
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      buffer += decoder.decode(chunk.value, { stream: true });
      let end;
      while ((end = buffer.indexOf('\n')) !== -1) { consume(buffer.slice(0, end)); buffer = buffer.slice(end + 1); }
    }
    buffer += decoder.decode(); if (buffer.trim()) consume(buffer);
    if (!done || !reply.trim()) throw new Error('INCOMPLETE_RESPONSE');
    return reply;
  } finally { controller.abort(); clearTimeout(timer); }
}
async function handleAiQuestion(question) {
  const clean = String(question || '').trim();
  if (!clean || aiBusy) return;
  if (clean.length > 2000) { addAiMessage(aiCopy().long); return; }
  if (aiLastActivity && Date.now() - aiLastActivity > AI_SESSION_TTL) {
    aiHistory = []; clearAiMessages();
  }
  addAiMessage(clean, 'user');
  aiHistory.push({ role: 'user', content: clean });
  persistAiHistory(); setAiBusy(true); showTyping(true);
  let bubble;
  try {
    const reply = await askBackend(aiHistory, text => {
      showTyping(false);
      if (!bubble) bubble = addAiMessage('');
      if (bubble) { bubble.textContent = text; aiMessages.scrollTop = aiMessages.scrollHeight; }
    });
    // Only real completed model replies become model context, never outage messages.
    aiHistory.push({ role: 'assistant', content: reply });
    persistAiHistory();
  } catch {
    if (bubble) bubble.textContent = aiCopy().offline;
    else addAiMessage(aiCopy().offline);
  } finally { showTyping(false); setAiBusy(false); aiInput?.focus(); }
}
restoreAiHistory();
if (aiMessages) {
  aiMessages.setAttribute('role', 'log');
  aiMessages.setAttribute('aria-live', 'polite');
  const reset = document.createElement('button');
  reset.type = 'button'; reset.dataset.aiReset = ''; reset.className = 'ai-reset';
  reset.textContent = aiCopy().reset;
  reset.addEventListener('click', () => {
    if (aiBusy) return;
    aiHistory = []; aiLastActivity = 0; clearAiMessages();
    try { sessionStorage.removeItem(AI_SESSION_KEY); } catch {}
    aiInput?.focus();
  });
  aiMessages.before(reset);
  new MutationObserver(() => { reset.textContent = aiCopy().reset; }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
}
if (aiInput) aiInput.maxLength = 2000;

aiForm?.addEventListener('submit', e => {
  e.preventDefault();
  if (aiBusy) return;
  const q = aiInput?.value || '';
  if (aiInput) aiInput.value='';
  handleAiQuestion(q);
});
document.querySelectorAll('[data-ai-prompt]').forEach(b => b.addEventListener('click', () => handleAiQuestion(b.textContent.trim() || b.dataset.aiPrompt || '')));
document.querySelectorAll('[data-ai-booking]').forEach(b => b.addEventListener('click', () => { addAiMessage(tr('Tôi muốn đặt lịch'),'user'); renderAiLeadForm(); }));

function renderAiLeadForm() {
  if (!aiMessages || aiMessages.querySelector('#mikiAiLeadForm')) return;
  const lang = currentLang();
  const languageOptions = [
    ['vi','Tiếng Việt'],['en','English'],['ko','한국어'],['zh','中文'],['ru','Русский'],['th','ไทย']
  ].map(([value,label]) => `<option value="${value}"${value===lang?' selected':''}>${label}</option>`).join('');
  const wrap=document.createElement('div');
  wrap.className='ai-lead-card';
  wrap.innerHTML=`<strong>${tr('Đặt lịch với Miki')}</strong><p>${tr('Để lại thông tin, Miki sẽ liên hệ xác nhận dịch vụ và khung giờ. Mã đặt lịch trước:')} <b>MIKI10</b>.</p>
  <form id="mikiAiLeadForm" class="ai-lead-grid">
    <input class="wide" name="name" required placeholder="Họ và tên *">
    <input class="wide" name="phone" required placeholder="SĐT / WhatsApp *">
    <select name="service" required><option value="">${tr('Dịch vụ')} *</option><option value="laser">${tr('Triệt lông')}</option><option value="waxing">Waxing</option><option value="skin">${tr('Chăm sóc da')}</option><option value="acne">${tr('Hỗ trợ chăm sóc da mụn')}</option><option value="body">Body Care</option><option value="academy">${tr('Đào tạo học viên')}</option><option value="consult">${tr('Tư vấn trước')}</option></select>
    <select name="language">${languageOptions}</select>
    <input type="date" name="date">
    <select name="time"><option value="morning">${tr('Sáng')}</option><option value="afternoon">${tr('Chiều')}</option><option value="evening">${tr('Tối')}</option></select>
    <button type="submit">${tr('Gửi yêu cầu cho Miki')}</button>
  </form>`;
  aiMessages.appendChild(wrap);
  aiMessages.scrollTop=aiMessages.scrollHeight;
  wrap.querySelector('form')?.addEventListener('submit', submitAiLead);
}
async function submitAiLead(e) {
  e.preventDefault();
  const f=e.currentTarget;
  const lead=Object.fromEntries(new FormData(f));
  lead.source='Miki AI Concierge';
  lead.language = lead.language || currentLang();
  lead.promo='MIKI10';
  lead.createdAt=new Date().toISOString();
  const leads=JSON.parse(localStorage.getItem('miki_ai_leads')||'[]');
  leads.push(lead); localStorage.setItem('miki_ai_leads',JSON.stringify(leads));
  // Secure production hook. If /api/lead is configured it can forward to Make/Zapier/Google Apps Script/CRM.
  if (location.protocol !== 'file:') {
    fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(lead)}).catch(()=>{});
  }
  f.closest('.ai-lead-card')?.remove();
  const text = currentLang()==='vi' ? `Cảm ơn ${lead.name || 'bạn'} ✨ Miki đã ghi nhận yêu cầu ${lead.service || 'tư vấn'}. Miki sẽ liên hệ qua ${lead.phone || 'thông tin bạn cung cấp'} để xác nhận dịch vụ và khung giờ.` : tr('Cảm ơn bạn ✨ Miki đã ghi nhận yêu cầu. Miki sẽ liên hệ để xác nhận dịch vụ và khung giờ.');
  addAiMessage(text,'bot');
  const waText=encodeURIComponent(bookingMessage(lead));
  addAiMessage(`<a class="ai-handoff" href="https://wa.me/qr/CZKPTD7OEQPII1?text=${waText}" target="_blank" rel="noopener">${tr('Mở WhatsApp để xác nhận ngay →')}</a>`,'bot',{html:true});
}


// Pricing visual cards -> existing tab panels
 document.querySelectorAll('[data-pricing-open]').forEach((card)=>{
   card.addEventListener('click',()=>{
     const target=card.getAttribute('data-pricing-open');
     const tab=document.querySelector(`.catalog-tabs [data-tab="${target}"]`);
     if(tab){ tab.click(); setTimeout(()=>tab.scrollIntoView({behavior:'smooth',block:'center'}),80); }
   });
 });


/* V2.7 AI LASER CONSULTATION */
(() => {
  const openExistingAI = (prompt = '') => {
    const candidates = [
      '[data-open-ai]', '[data-ai-open]', '#aiFab', '.ai-fab',
      '.miki-ai-fab', '[aria-label*="Miki AI"]'
    ];
    let trigger = null;
    for (const selector of candidates) {
      trigger = document.querySelector(selector);
      if (trigger) break;
    }
    if (trigger) trigger.click();

    window.setTimeout(() => {
      const input = document.querySelector(
        '#aiInput, #chatInput, [data-ai-input], .ai-chat input, .ai-chat textarea, #aiModal textarea, #aiModal input'
      );
      if (input && prompt) {
        input.value = prompt;
        input.dispatchEvent(new Event('input', {bubbles:true}));
        input.focus();
      }
    }, 180);
  };

  document.addEventListener('click', (event) => {
    const quick = event.target.closest('[data-laser-prompt]');
    if (quick) {
      openExistingAI(quick.dataset.laserPrompt || '');
      return;
    }
    if (event.target.closest('[data-open-laser-ai]')) openExistingAI('');
  });
})();
