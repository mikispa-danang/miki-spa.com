/* Miki GA4: public analytics only; no form values or prepared message URLs. */
(function () {
'use strict';
if (window.mikiAnalytics) return;
const ID = 'G-2W63FPHHZ3';
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
const cleanLocation = location.origin + location.pathname;
let cleanReferrer = '';
try { const r = new URL(document.referrer); cleanReferrer = r.origin + r.pathname; } catch (_) {}
const allowedEvents = ['contact_click', 'booking_open', 'combo_open', 'booking_message_ready'];
function track(name, values) {
 if (!allowedEvents.includes(name)) return;
 const params = {page_location:cleanLocation, page_referrer:cleanReferrer};
 const channels = ['whatsapp','telegram','facebook','phone','zalo'];
 const placements = ['booking','combo','connect','header','footer','floating','page'];
 if (channels.includes(values?.contact_channel)) params.contact_channel=values.contact_channel;
 if (placements.includes(values?.placement)) params.placement=values.placement;
 if (['standard','combo'].includes(values?.booking_flow)) params.booking_flow=values.booking_flow;
 window.gtag('event',name,params);window.MikiCRM?.event(name,params);
}
window.mikiAnalytics = {track:track,measurementId:ID};
window.gtag('js',new Date());
window.gtag('config',ID,{page_location:cleanLocation,page_referrer:cleanReferrer,campaign_source:window.MikiCRM?.source.utm_source||undefined,campaign_medium:window.MikiCRM?.source.utm_medium||undefined,campaign_name:window.MikiCRM?.source.utm_campaign||undefined,allow_google_signals:false,allow_ad_personalization_signals:false});
const tag = document.createElement('script');
tag.async=true;tag.src='https://www.googletagmanager.com/gtag/js?id='+ID;
document.head.appendChild(tag);
function channel(u){
 if(u.protocol==='tel:')return 'phone';
 if(['wa.me','api.whatsapp.com'].includes(u.hostname))return 'whatsapp';
 if(['t.me','telegram.me'].includes(u.hostname))return 'telegram';
 if(['facebook.com','www.facebook.com','m.facebook.com','m.me'].includes(u.hostname))return 'facebook';
 if(u.hostname==='zalo.me')return 'zalo';
 return '';
}
function placement(el){
 if(el.closest('#mikiComboDialog'))return 'combo';
 if(location.pathname.endsWith('booking.html'))return 'booking';
 if(location.pathname.endsWith('connect.html'))return 'connect';
 if(el.closest('.floating-contact'))return 'floating';
 if(el.closest('footer'))return 'footer';
 if(el.closest('header'))return 'header';
 return 'page';
}
document.addEventListener('click',function(e){
 const el=e.target.closest?.('[data-miki-contact-send],a,[data-mc-open]');
 if(!el)return;
 if(el.hasAttribute('data-mc-open'))track('combo_open',{placement:'page',booking_flow:'combo'});
 if(el.hasAttribute('data-miki-contact-send')){
   let u;try{u=new URL(el.href)}catch(_){return}
   const ch=channel(u);
   if(!['whatsapp','telegram'].includes(ch)||u.protocol!=='https:')return;
   track('contact_click',{contact_channel:ch,placement:placement(el)});
   window.open(u.href,'_blank','noopener,noreferrer');
   return;
 }
 if(el.tagName!=='A')return;
 let u;try{u=new URL(el.href,location.href)}catch(_){return}
 const ch=channel(u);
 if(ch)track('contact_click',{contact_channel:ch,placement:placement(el)});
 if(u.origin===location.origin&&u.pathname.endsWith('/booking.html'))
   track('booking_open',{placement:placement(el),booking_flow:'standard'});
},true);
})();

