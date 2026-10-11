import { validateRequest, loadKnowledge, buildInstructions, responseEvents } from '../lib/miki-ai.js';

const SOURCE_LABELS = { vi: 'Nguồn tham khảo', en: 'Sources', ko: '참고 자료', zh: '参考来源', ru: 'Источники', th: 'แหล่งข้อมูล' };
function appendSources(reply, sources, language) {
  const unique = [...sources.values()].slice(0, 4);
  if (!unique.length) return reply;
  const lines = unique.map(source => `- ${source.title || source.url}: ${source.url}`);
  return `${reply.trim()}\n\n${SOURCE_LABELS[language] || SOURCE_LABELS.vi}:\n${lines.join('\n')}`;
}

export function createHandler({ fetchImpl = globalThis.fetch, getKnowledge = loadKnowledge, env = process.env, timeoutMs = 45000, logger = console } = {}) {
  return async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store');
    const origin = req.headers?.origin;
    const allowedOrigins = String(env.AI_ALLOWED_ORIGINS || '')
      .split(',')
      .map(value => value.trim())
      .filter(Boolean);
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    }
    if (req.method === 'OPTIONS') return res.status(204).end();
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' }); }
    let input;
    try {
      let body = req.body;
      if (typeof body === 'string') { if (body.length > 64000) throw new Error('BODY_TOO_LARGE'); body = JSON.parse(body); }
      input = validateRequest(body);
    } catch { return res.status(400).json({ error: 'INVALID_REQUEST' }); }
    // Validate credentials inside the handler: missing keys no longer crash module startup.
    if (!env.OPENAI_API_KEY?.trim()) return res.status(503).json({ error: 'AI_NOT_CONFIGURED' });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    const started = Date.now();
    // Use a documented reasoning-capable model by default; deployments can pin
    // another model through OPENAI_MODEL without changing the source.
    const model = env.OPENAI_MODEL?.trim() || 'gpt-5.2';
    const webSearchTool = env.OPENAI_WEB_SEARCH_TOOL?.trim() || 'web_search_preview';
    const webSearchEnabled = String(env.OPENAI_ENABLE_WEB_SEARCH || 'true').toLowerCase() !== 'false';
    const reasoningEffort = env.OPENAI_REASONING_EFFORT?.trim()
      || (/^(gpt-(5|6)|o[1-9])/i.test(model) ? 'medium' : '');
    const streaming = String(req.headers?.accept || '').includes('application/x-ndjson');
    const disconnected = () => { if (!res.writableEnded) controller.abort(); };
    res.on?.('close', disconnected);
    const send = event => res.write(JSON.stringify(event) + '\n');
    try {
      const knowledge = await getKnowledge();
      const upstream = await fetchImpl('https://api.openai.com/v1/responses', {
        method: 'POST', signal: controller.signal,
        headers: { Authorization: `Bearer ${env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          instructions: buildInstructions(knowledge, input.language),
          input: input.messages,
          ...(webSearchEnabled ? {
            tools: [{ type: webSearchTool }],
            tool_choice: 'auto',
            max_tool_calls: 3,
            include: ['web_search_call.action.sources']
          } : {}),
          ...(reasoningEffort ? { reasoning: { effort: reasoningEffort } } : {}),
          store: false,
          stream: true,
          max_output_tokens: 2200
        })
      });
      if (!upstream.ok) {
        logger.warn('miki_ai_upstream', { status: upstream.status, requestId: upstream.headers?.get('x-request-id'), model, elapsedMs: Date.now() - started });
        await upstream.body?.cancel();
        return res.status(upstream.status === 429 ? 429 : 503).json({ error: 'AI_UNAVAILABLE' });
      }
      if (streaming) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/x-ndjson; charset=utf-8');
        res.setHeader('X-Accel-Buffering', 'no');
        res.flushHeaders?.();
      }
      let reply = '', complete = false;
      const sources = new Map();
      for await (const event of responseEvents(upstream.body)) {
        if (event.type === 'response.output_text.delta') {
          reply += event.delta;
          if (streaming) send({ type: 'delta', text: event.delta });
        }
        if (event.type === 'response.output_text.annotation.added') {
          const annotation = event.annotation;
          if (annotation?.type === 'url_citation' && typeof annotation.url === 'string' && /^https:\/\//i.test(annotation.url)) {
            sources.set(annotation.url, { url: annotation.url, title: typeof annotation.title === 'string' ? annotation.title : '' });
          }
        }
        if (event.type === 'response.completed') complete = true;
        if (['response.failed', 'response.incomplete', 'error'].includes(event.type)) throw new Error('INCOMPLETE_RESPONSE');
      }
      if (!complete || !reply.trim()) throw new Error('EMPTY_OR_INTERRUPTED_RESPONSE');
      const finalReply = appendSources(reply, sources, input.language);
      logger.info('miki_ai_complete', { model, elapsedMs: Date.now() - started, language: input.language, faqCount: knowledge.faq.length, sourceCount: sources.size });
      if (streaming) {
        if (finalReply.length > reply.length) send({ type: 'delta', text: finalReply.slice(reply.length) });
        send({ type: 'done' });
        return res.end();
      }
      return res.status(200).json({ reply: finalReply });
    } catch (error) {
      logger.warn('miki_ai_failure', { code: controller.signal.aborted ? 'TIMEOUT_OR_DISCONNECT' : 'REQUEST_FAILED', model, elapsedMs: Date.now() - started });
      if (res.destroyed) return;
      if (res.headersSent) { send({ type: 'error', code: 'AI_UNAVAILABLE' }); return res.end(); }
      return res.status(controller.signal.aborted ? 504 : 503).json({ error: 'AI_UNAVAILABLE' });
    } finally { clearTimeout(timeout); res.off?.('close', disconnected); }
  };
}
export default createHandler();
