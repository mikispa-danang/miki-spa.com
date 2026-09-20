# Miki Skin Spa — V3 Growth activation

This branch upgrades the existing V3 without redesigning the approved interface.

## Added
- Anonymous visitor ID + per-tab session ID
- UTM/referrer/landing attribution
- Page view, scroll depth, booking, contact, Google Maps and review-click events
- Consent-gated GA4 and Microsoft Clarity loaders
- Quick consultation lead form with explicit contact consent
- WhatsApp fallback when the lead backend is not configured
- Booking-funnel tracking on `booking.html`
- Secure Supabase schema for leads, bookings and events
- Supabase Edge Function template for validated ingestion

## Public frontend config
Edit `v3-growth-config.js` only with public IDs and deployed HTTPS endpoints.

Example after Supabase deployment:

```js
leadEndpoint: 'https://<project>.supabase.co/functions/v1/miki-growth/lead',
bookingEndpoint: 'https://<project>.supabase.co/functions/v1/miki-growth/booking',
eventEndpoint: 'https://<project>.supabase.co/functions/v1/miki-growth/event',
ga4MeasurementId: 'G-XXXXXXXXXX',
clarityProjectId: '<public-project-id>'
```

Do not place Supabase service-role keys, private API keys, admin tokens or database passwords in this file.

## Supabase activation
1. Create/connect the Supabase project.
2. Apply `supabase/migrations/20260920_v3_growth.sql`.
3. Deploy `supabase/functions/miki-growth/index.ts` as the `miki-growth` Edge Function.
4. Verify allowed website origins in the Edge Function.
5. Put only the public function URLs into `v3-growth-config.js`.
6. Test lead, booking and event ingestion from a preview environment.
7. Add authenticated staff CRM before exposing real customer records to any dashboard.

## Analytics activation
GA4 and Clarity remain disabled until real project IDs are supplied. They load only after analytics consent.

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

## CRM security boundary
The database tables have RLS enabled and deliberately expose no anonymous table policies. Website writes are intended to pass through the Edge Function. A production CRM must use authenticated staff access and should not rely on browser localStorage for customer data.

## Deployment safety
The live `main` branch is unchanged. Review and test `v3-growth` first, then merge only after backend endpoints and analytics IDs are confirmed.
