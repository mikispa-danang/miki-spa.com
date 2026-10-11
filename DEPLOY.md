# Deploy Miki Skin Spa V3.1

## Production architecture

- Static website and `assets/`: served from this repository.
- Booking CRM relay: `/api/miki-growth` forwards requests to the existing Supabase Edge Function.
- Miki AI gateway: `/api/chat` calls the OpenAI Responses API on the server.
- Telegram booking alert: `/api/booking-telegram.js` is optional and requires server-side Telegram variables.

The production target must support Vercel-style serverless functions (or an equivalent Node/serverless runtime). GitHub Pages and a static-only hosting plan can serve the HTML and images, but they cannot execute the `/api` files. If the domain is pointed to a static host, keep the API routes on a separate Vercel/Node origin and configure the frontend endpoint accordingly.

## Required server variables

- `OPENAI_API_KEY`: server-only OpenAI key for `/api/chat`.
- Optional `OPENAI_MODEL`, `OPENAI_ENABLE_WEB_SEARCH`, and `OPENAI_REASONING_EFFORT`.
- Optional `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` for Telegram alerts.

Never put any of these values in HTML, browser JavaScript, GitHub files, or screenshots.

## Smoke checks before publishing

1. Confirm `assets/optimized/` is uploaded with the HTML; do not upload only `index.html`.
2. Check `/api/chat` and `/api/miki-growth` on the server deployment; a missing route is a hosting mismatch.
3. Open `/booking.html`, select a service, and confirm that the final screen clearly reports whether the CRM accepted the request.
4. Verify the WhatsApp, Zalo, Telegram, and Google Review QR images load with HTTP 200.
5. Review the browser console for blocked requests before switching DNS.
