# Miki Skin Spa — V4 Growth Engine status

The V4 Growth build has been upgraded in the preserved production package. The current V3 on `main` remains untouched.

## Implemented in V4 Growth package
- Visitor/session IDs and UTM/referrer attribution
- Page-view, scroll-depth, CTA and booking-funnel events
- Optional GA4, Microsoft Clarity and Meta Pixel loaders after consent
- Multi-language lead capture (VI/EN/KO/ZH/RU/TH)
- Explicit contact consent
- Context-aware offer/consultation CTA
- Lead endpoint, event endpoint and booking endpoint hooks
- WhatsApp fallback when no backend is configured
- Booking enrichment with visitor/source data
- CRM funnel metrics and lead stages
- AI Concierge bridge to the consultation form
- 30 localized home/service pages wired to the Growth Engine

## Production activation still requires external IDs/endpoints
Public analytics IDs and secure backend URLs are intentionally not invented or committed. Configure them in `data/config.json` only after the secure services exist.

## Safety boundary
Do not store production customer data only in localStorage. Real CRM use requires an authenticated backend, access control, encryption, retention policy and audit logging.
