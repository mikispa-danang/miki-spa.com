import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ALLOWED_ORIGINS = new Set([
  'https://www.miki-spa.com',
  'https://miki-spa.com',
  'http://localhost:8080',
  'http://127.0.0.1:8080'
]);

function cors(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://www.miki-spa.com';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin'
  };
}

function text(v: unknown, max = 500) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function source(body: any) {
  const s = body?.source || {};
  return {
    utm_source: text(s.utm_source, 120),
    utm_medium: text(s.utm_medium, 120),
    utm_campaign: text(s.utm_campaign, 180),
    utm_content: text(s.utm_content, 180),
    utm_term: text(s.utm_term, 180),
    referrer: text(s.referrer, 1000),
    landing: text(s.landing, 1000)
  };
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const headers = { ...cors(origin), 'Content-Type': 'application/json; charset=utf-8' };
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'method_not_allowed' }), { status: 405, headers });
  if (origin && !ALLOWED_ORIGINS.has(origin)) return new Response(JSON.stringify({ error: 'origin_not_allowed' }), { status: 403, headers });

  const len = Number(req.headers.get('content-length') || 0);
  if (len > 32_000) return new Response(JSON.stringify({ error: 'payload_too_large' }), { status: 413, headers });

  let body: any;
  try { body = await req.json(); } catch { return new Response(JSON.stringify({ error: 'invalid_json' }), { status: 400, headers }); }

  const url = new URL(req.url);
  const route = url.pathname.split('/').filter(Boolean).pop() || '';
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRole = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRole) return new Response(JSON.stringify({ error: 'server_not_configured' }), { status: 500, headers });

  const db = createClient(supabaseUrl, serviceRole, { auth: { persistSession: false } });
  const src = source(body);

  if (route === 'lead') {
    const name = text(body.name, 120);
    const contact = text(body.contact, 160);
    if (!name || !contact || !body.consentAt) return new Response(JSON.stringify({ error: 'missing_required_fields' }), { status: 400, headers });
    const row = {
      external_id: text(body.id, 160), name, contact,
      channel: text(body.channel, 60), service: text(body.service, 120), language: text(body.lang, 12),
      visitor_id: text(body.visitorId, 160), session_id: text(body.sessionId, 160),
      ...src, last_page: text(body.lastPage, 1000), consent_at: text(body.consentAt, 80), status: 'new'
    };
    const { error } = await db.from('miki_leads').upsert(row, { onConflict: 'external_id', ignoreDuplicates: true });
    if (error) return new Response(JSON.stringify({ error: 'db_error' }), { status: 500, headers });
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  if (route === 'booking') {
    const name = text(body.name, 120);
    const phone = text(body.phone, 160);
    if (!name || !phone) return new Response(JSON.stringify({ error: 'missing_required_fields' }), { status: 400, headers });
    const row = {
      external_id: text(body.id, 160), name, phone,
      service: text(body.service, 120), price: text(body.price, 80),
      appointment_date: text(body.date, 20) || null, appointment_time: text(body.time, 20),
      contact_channel: text(body.channel, 60), note: text(body.note, 1000), language: text(body.lang, 12),
      visitor_id: text(body.visitorId, 160), session_id: text(body.sessionId, 160),
      ...src, status: 'requested'
    };
    const { error } = await db.from('miki_bookings').upsert(row, { onConflict: 'external_id', ignoreDuplicates: true });
    if (error) return new Response(JSON.stringify({ error: 'db_error' }), { status: 500, headers });
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  if (route === 'event') {
    const eventName = text(body.name, 100);
    if (!eventName) return new Response(JSON.stringify({ error: 'missing_event_name' }), { status: 400, headers });
    const row = {
      external_id: text(body.id, 160), event_name: eventName,
      visitor_id: text(body.visitorId, 160), session_id: text(body.sessionId, 160), language: text(body.lang, 12),
      path: text(body.path, 500), ...src,
      event_data: typeof body.data === 'object' && body.data !== null ? body.data : {}
    };
    const { error } = await db.from('miki_events').upsert(row, { onConflict: 'external_id', ignoreDuplicates: true });
    if (error) return new Response(JSON.stringify({ error: 'db_error' }), { status: 500, headers });
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  return new Response(JSON.stringify({ error: 'unknown_route' }), { status: 404, headers });
});
