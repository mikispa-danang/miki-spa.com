/* Miki V3 Growth runtime configuration.
   Public IDs/endpoints only. Never place private API keys here. */
window.MIKI_GROWTH_CONFIG = Object.freeze({
  enabled: true,
  leadEndpoint: 'https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-growth?type=lead',
  bookingEndpoint: 'https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-growth?type=booking',
  eventEndpoint: 'https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-growth?type=event',
  ga4MeasurementId: null,
  clarityProjectId: null,
  metaPixelId: null,
  consentRequired: true,
  whatsapp: 'https://wa.me/84935555170',
  reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJEdrUdwAZQjERoj5O8akcMBs'
});
