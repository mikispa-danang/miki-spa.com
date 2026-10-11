// Same-origin relay for the Miki CRM Supabase Edge Function.
// Keeping this call server-side lets the site retain a strict browser CSP.
const upstream = 'https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-growth';
const allowedOrigins = new Set(['https://miki-spa.com', 'https://www.miki-spa.com']);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' });
  }

  const origin = String(req.headers?.origin || '').trim();
  if (origin && !allowedOrigins.has(origin)) {
    return res.status(403).json({ ok: false, error: 'ORIGIN_NOT_ALLOWED' });
  }

  let body = req.body;
  try {
    if (typeof body === 'string') body = JSON.parse(body);
    if (!body || typeof body !== 'object' || Array.isArray(body) || JSON.stringify(body).length > 32000) {
      return res.status(400).json({ ok: false, error: 'INVALID_REQUEST' });
    }
  } catch {
    return res.status(400).json({ ok: false, error: 'INVALID_REQUEST' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(upstream, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal
    });
    const text = await response.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { ok: response.ok }; }
    return res.status(response.status).json(data && typeof data === 'object' ? data : { ok: response.ok });
  } catch {
    return res.status(502).json({ ok: false, error: 'CRM_UNAVAILABLE' });
  } finally {
    clearTimeout(timeout);
  }
}
