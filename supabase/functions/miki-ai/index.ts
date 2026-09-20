const ALLOWED_ORIGINS = new Set([
  'https://miki-spa.com',
  'https://www.miki-spa.com',
  'http://localhost:8080',
  'http://127.0.0.1:8080'
]);

const cors = (origin: string | null) => ({
  'Access-Control-Allow-Origin': origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://miki-spa.com',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Vary': 'Origin'
});

const clean = (v: unknown, max: number) => typeof v === 'string' ? v.trim().slice(0, max) : '';

const SYSTEM = `You are Miki Beauty Concierge for Miki Skin Spa in Da Nang, Vietnam.
Business facts: address 47 Co Giang, Hai Chau, Da Nang; phone/Zalo +84 935 555 170; open daily 08:30-21:30. Services include laser hair removal, waxing, skincare, acne-support care and body care.
Be warm, concise and practical. Answer in the visitor's language when possible.
Do not diagnose medical conditions, claim guaranteed results, or replace medical advice. For significant pain, infection, severe skin reactions, pregnancy-related medical questions, or other clinical concerns, advise the visitor to seek qualified medical care. Do not invent prices, availability, promotions or treatment outcomes. If exact pricing or appointment availability is unknown, direct the visitor to the website pricing/booking flow or Miki staff.
Do not ask for unnecessary sensitive medical information. Encourage booking or staff contact when a human follow-up is more appropriate.`;

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const headers = { ...cors(origin), 'Content-Type': 'application/json; charset=utf-8' };
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'method_not_allowed' }), { status: 405, headers });
  if (origin && !ALLOWED_ORIGINS.has(origin)) return new Response(JSON.stringify({ error: 'origin_not_allowed' }), { status: 403, headers });

  const len = Number(req.headers.get('content-length') || 0);
  if (len > 30000) return new Response(JSON.stringify({ error: 'payload_too_large' }), { status: 413, headers });

  let body: any;
  try { body = await req.json(); }
  catch { return new Response(JSON.stringify({ error: 'invalid_json' }), { status: 400, headers }); }

  const apiKey = Deno.env.get('OPENAI_API_KEY');
  if (!apiKey) return new Response(JSON.stringify({ error: 'ai_not_configured' }), { status: 503, headers });

  const raw = Array.isArray(body?.messages) ? body.messages.slice(-16) : [];
  const input = raw
    .filter((m: any) => m && (m.role === 'user' || m.role === 'assistant'))
    .map((m: any) => ({ role: m.role, content: clean(m.content, m.role === 'user' ? 2000 : 5000) }))
    .filter((m: any) => m.content);
  if (!input.length) return new Response(JSON.stringify({ error: 'empty_messages' }), { status: 400, headers });

  const language = clean(body?.language, 12) || 'vi';
  const page = clean(body?.page, 300);
  const instructions = `${SYSTEM}\nVisitor language: ${language}. Current website page: ${page || '/'}.`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const r = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: Deno.env.get('OPENAI_MODEL') || 'gpt-5.6-luna',
        instructions,
        input,
        max_output_tokens: 550,
        store: false
      }),
      signal: controller.signal
    });
    if (!r.ok) return new Response(JSON.stringify({ error: 'ai_unavailable' }), { status: 502, headers });
    const data = await r.json();
    let reply = '';
    for (const item of Array.isArray(data?.output) ? data.output : []) {
      if (item?.type !== 'message') continue;
      for (const part of Array.isArray(item?.content) ? item.content : []) {
        if (part?.type === 'output_text' && typeof part.text === 'string') reply += part.text;
      }
    }
    reply = reply.trim().slice(0, 8000);
    if (!reply) return new Response(JSON.stringify({ error: 'empty_response' }), { status: 502, headers });
    return new Response(JSON.stringify({ reply }), { status: 200, headers });
  } catch {
    return new Response(JSON.stringify({ error: 'ai_unavailable' }), { status: 502, headers });
  } finally {
    clearTimeout(timer);
  }
});