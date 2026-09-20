# Miki Skin Spa — V3 Growth activation

This branch upgrades the existing V3 without redesigning the approved interface.

## Current status
- Supabase project: `Miki Spa CRM` (`ap-southeast-1`, Singapore)
- Growth ingestion Edge Function: deployed as `miki-growth`
- Secure CRM tables: active with RLS
- CRM owner pre-authorized by verified email: `namanhuan@gmail.com`
- Miki AI Edge Function: deployed as `miki-ai`, intentionally disabled in frontend until `OPENAI_API_KEY` is configured in Supabase Secrets
- Live `main` branch: unchanged

## Added
- Anonymous visitor ID + per-tab session ID
- UTM/referrer/landing attribution
- Page view, scroll depth, booking, contact, Google Maps and review-click events
- Consent-gated GA4 and Microsoft Clarity loaders
- Quick consultation lead form with explicit contact consent
- WhatsApp fallback when the lead backend is unavailable
- Booking-funnel tracking on `booking.html`
- Secure Supabase schema for leads, bookings and events
- Validated Supabase Edge Function ingestion
- Authenticated Mini CRM with email-based staff authorization
- Technical SEO layer, sitemap and canonical-domain cleanup

## Public frontend config
`v3-growth-config.js` contains only public endpoints/IDs.

Current ingestion routes:

```js
leadEndpoint: 'https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-growth?type=lead',
bookingEndpoint: 'https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-growth?type=booking',
eventEndpoint: 'https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-growth?type=event'
```

Do not place Supabase service-role keys, OpenAI API keys, admin tokens or database passwords in frontend files.

## Database migrations
Apply in order when reproducing the environment:
1. `supabase/migrations/20260920_v3_growth.sql`
2. CRM/RLS migrations added after the base schema
3. `supabase/migrations/20260920_crm_owner_email.sql`
4. `supabase/migrations/20260920_crm_rls_hardening.sql`

## CRM security
- `miki_leads`, `miki_bookings`, `miki_events` and `miki_crm_staff` use RLS.
- Anonymous browser sessions cannot read CRM records.
- CRM access requires an authenticated Supabase session and an active staff record.
- `namanhuan@gmail.com` is pre-authorized as `owner`; access is granted only after Supabase Auth verifies that email.
- Customer contact details are not persisted by the V3 Growth layer in localStorage.

## Miki AI
The secure gateway is deployed at:

```text
https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-ai
```

Frontend `enabled` remains `false` until `OPENAI_API_KEY` is added to Supabase Secrets. The secret must never be committed to GitHub or placed in browser JavaScript. Once the secret is configured, set `enabled: true` in `miki-ai-config.js` and test before merging.

## Analytics
GA4 and Clarity remain disabled until real public project IDs are supplied. They load only after analytics consent.

Recommended events:
- `page_view`
- `scroll_depth`
- `booking_click`
- `booking_step`
- `booking_submit`
- `lead_modal_open`
- `lead_submit`
- `contact_click`
- `maps_click`
- `google_review_click`

## Deployment safety
The live `main` branch remains unchanged. Review and test `v3-growth` first, then merge only after booking, CRM auth and responsive-layout QA pass.
