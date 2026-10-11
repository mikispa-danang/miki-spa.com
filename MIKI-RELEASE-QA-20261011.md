# Miki Spa release QA — 2026-10-11

## Findings fixed

- The AI frontend was still configured with the placeholder `YOUR-MIKI-AI-WORKER...` URL. It now calls the same-origin `/api/chat` route.
- `vercel.json` referenced `api/chat.js`, but that file and its knowledge loader were absent from the repository. They are now present under `api/chat.js` and `lib/miki-ai.js`.
- CRM booking and event requests were sent directly from the browser to Supabase. They now use the same-origin `/api/miki-growth` relay, so the browser can keep a strict CSP while the existing Supabase Edge Function remains the data system.
- The WhatsApp, Zalo, and Telegram QR HTML pointed to filenames that were not in `assets/optimized/`. The references now use the existing QR assets.
- The booking page canonical URL now uses `https://miki-spa.com/booking.html`, and completion status is announced with `aria-live`.
- Booking now requires a clear Male/Female choice, carries the selection to the CRM payload and WhatsApp/Telegram message, and shows it in the CRM dashboard when the `gender` column is present.

## Verification completed

- 31 JavaScript files passed `node --check`.
- `vercel.json` parsed as valid JSON.
- 121 local HTML/CSS/JS references were checked; 0 missing static targets remain.
- API guard checks passed for missing OpenAI configuration, invalid CRM origin, and malformed CRM body.
- No API key, Telegram token, or Supabase service-role key was added to public files.
- The idempotent migration `supabase/migrations/20261011_add_booking_gender.sql` is included; review the live schema before running it.

## Required deployment settings

The deployment must execute the `api/` serverless functions. A static-only GitHub Pages or Mắt Bão plan can serve the website and images but cannot execute these routes. Set `OPENAI_API_KEY` in the server environment before testing Miki AI; never paste it into GitHub or the browser.

This folder is a locally tested release candidate. It has not been committed or pushed to GitHub from this workspace.
