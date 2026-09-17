# Miki Skin Spa — V4 Master

This branch is reserved for the isolated V4 Master build. The current production V3 remains on `main`.

## V4 architecture
- 6 SEO-visible language URLs: VI / EN / KO / ZH / RU / TH
- Localized service landing pages for Laser Hair Removal, Waxing, Skin Care and Acne-support Care
- Self-canonical + hreflang + sitemap
- `DaySpa` LocalBusiness structured data
- Responsive Visual Pro UI
- Smart booking flow with service prefill and WhatsApp handoff
- Miki AI Concierge preview
- CRM/dashboard preview
- Tracking layer prepared for GA4/dataLayer

## Production boundary
The preview booking/CRM layer uses browser localStorage only. Do not use it as the real customer database. Before handling real customer data, connect a secure backend with authentication, authorization, encryption, retention rules and audit logging. API secrets must remain server-side.

## Rollout
Keep V4 isolated under `/v4/` during review. Only merge into `main` after visual browser QA, native-language proofing, real booking backend integration, structured-data validation and final smoke testing.
