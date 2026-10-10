// Miki Spa Telegram booking relay for Vercel.
// Configure TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID as server-side Environment Variables.
// Do not put a Telegram token in browser JavaScript or in GitHub.
const limit = (value, max = 180) => String(value ?? '').trim().slice(0, max);
const expectedOrigin = new Set(['https://miki-spa.com', 'https://www.miki-spa.com']);
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ok:false});
  const origin = req.headers.origin;
  if (!origin || !expectedOrigin.has(origin)) return res.status(403).json({ok:false});
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return res.status(503).json({ok:false, error:'not_configured'});
  const body = req.body || {};
  if (typeof body !== 'object' || Array.isArray(body) || JSON.stringify(body).length > 7000) return res.status(400).json({ok:false});
  // A human-completed checkout creates the booking record first. This relay only sends an alert.
  const name = limit(body.name, 120);
  const phone = limit(body.phone, 35);
  const service = limit(body.service, 1200);
  const date = limit(body.date, 20);
  const time = limit(body.time, 20);
  if (!name || !phone || !service || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !time) return res.status(400).json({ok:false});
  const text = [
    '🔔 MIKI SPA — YÊU CẦU ĐẶT LỊCH',
    '👤 Khách: ' + name,
    '📞 SĐT: ' + phone,
    '💆 Dịch vụ: ' + service,
    '💰 Giá tham khảo: ' + limit(body.price, 100),
    '📅 Ngày: ' + date,
    '🕒 Giờ: ' + time,
    '💬 Liên hệ: ' + limit(body.channel, 30),
    '📝 Ghi chú: ' + limit(body.note, 1000),
    '⏳ Chờ Miki xác nhận lịch.'
  ].join('\n').slice(0, 3900);
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6500);
    let response;
    try {
      response = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
        method:'POST', headers:{'content-type':'application/json'},
        body:JSON.stringify({chat_id:chatId, text}), signal:controller.signal
      });
    } finally {clearTimeout(timeout)}
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.ok !== true) return res.status(502).json({ok:false,error:'delivery_failed'});
    return res.status(200).json({ok:true});
  } catch {
    return res.status(502).json({ok:false,error:'delivery_failed'});
  }
}
