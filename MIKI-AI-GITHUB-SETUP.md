# Miki Beauty Concierge V3.1 — GitHub Pages frontend

## Architecture
- Website: GitHub Pages (`www.miki-spa.com`)
- AI gateway: Cloudflare Worker (separate, secure)
- AI provider: OpenAI Responses API
- API key: stored only as Worker secret, never committed to GitHub
- If gateway is unavailable/not configured, the website automatically uses the built-in local concierge fallback.

## One-time setup
1. Open `miki-ai-worker/` and deploy it to Cloudflare Workers.
2. Add secret `OPENAI_API_KEY` in Cloudflare Worker Settings > Variables and Secrets > Add > Secret.
3. Optionally change `OPENAI_MODEL` in `wrangler.jsonc` to a model available to your OpenAI account.
4. Copy the deployed Worker URL, e.g. `https://miki-ai-concierge.<account>.workers.dev/chat`.
5. Open root file `miki-ai-config.js` and replace `https://YOUR-MIKI-AI-WORKER.workers.dev/chat` with that URL.
6. Commit/push the whole website to GitHub Pages.

## Security
Never paste `OPENAI_API_KEY` into `miki-ai-config.js`, `script.js`, HTML, GitHub Actions output, or any public repository file.

## What V3.1 does
- remembers up to the recent conversation in the browser session
- automatically answers in VI/EN/KO/ZH/RU/TH according to the guest
- concise service guidance and one useful follow-up at a time
- does not invent prices, promotions, medical diagnoses or live availability
- fallback concierge still works if the AI gateway is offline
- booking/WhatsApp/Zalo remain the human/action handoff paths
