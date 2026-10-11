# Miki Beauty Concierge V3.1 — server-side gateway

## Architecture
- Website: this repository, deployed with a serverless Node runtime
- AI gateway: Vercel function at `/api/chat`
- AI provider: OpenAI Responses API
- API key: stored only as a hosting environment variable, never committed to GitHub
- If gateway is unavailable/not configured, the website automatically uses the built-in local concierge fallback.

## One-time setup
1. Deploy the repository to Vercel (or an equivalent Node/serverless host).
2. In the deployment's Environment Variables, add `OPENAI_API_KEY` as a secret.
3. Optionally set `OPENAI_MODEL`, `OPENAI_ENABLE_WEB_SEARCH=true`, and `OPENAI_REASONING_EFFORT=medium`.
4. Keep `miki-ai-config.js` set to the same-origin `/api/chat`; do not paste a secret or a public key into it.
5. Open the deployed site, send one harmless test such as “Miki ở đâu?”, and confirm the answer is returned. If the key is absent, the site should show the local FAQ fallback rather than a blank chat.

## Security
Never paste `OPENAI_API_KEY` into `miki-ai-config.js`, `script.js`, HTML, GitHub Actions output, or any public repository file.

## What V3.1 does
- remembers up to the recent conversation in the browser session
- automatically answers in VI/EN/KO/ZH/RU/TH according to the guest
- concise service guidance and one useful follow-up at a time
- does not invent prices, promotions, medical diagnoses or live availability
- fallback concierge still works if the AI gateway is offline
- booking/WhatsApp/Zalo/Telegram remain the human/action handoff paths
