(() => {
  const C = window.MIKI_GROWTH_CONFIG || {};
  if (C.enabled === false) return;

  const K={visitor:'miki_v3_visitor_id',session:'miki_v3_session_id',source:'miki_v3_source',consent:'miki_v3_consent',events:'miki_v3_events'};
  const uid=(p='id')=>`${p}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,9)}`;
  const getLS=(k,f='')=>{try{return localStorage.getItem(k)||f}catch(_){return f}};
  const setLS=(k,v)=>{try{localStorage.setItem(k,v)}catch(_){}};
  const getSS=(k,f='')=>{try{return sessionStorage.getItem(k)||f}catch(_){return f}};
  const setSS=(k,v)=>{try{sessionStorage.setItem(k,v)}catch(_){}};

  let visitorId=getLS(K.visitor); if(!visitorId){visitorId=uid('visitor');setLS(K.visitor,visitorId)}
  let sessionId=getSS(K.session); if(!sessionId){sessionId=uid('session');setSS(K.session,sessionId)}

  const qp=new URLSearchParams(location.search);
  const firstSource={
    utm_source:qp.get('utm_source')||'',utm_medium:qp.get('utm_medium')||'',utm_campaign:qp.get('utm_campaign')||'',
    utm_content:qp.get('utm_content')||'',utm_term:qp.get('utm_term')||'',referrer:document.referrer||'',landing:location.pathname+location.search
  };
  if(!getLS(K.source))setLS(K.source,JSON.stringify(firstSource));
  let source=firstSource;try{source=JSON.parse(getLS(K.source,'{}'))||firstSource}catch(_){}

  const lang=()=>window.MIKI_LANGUAGE||getLS('miki-language',document.documentElement.lang||'vi');
  const getConsent=()=>{try{return JSON.parse(getLS(K.consent,'{}'))||{}}catch(_){return {}}};
  const rememberEvent=e=>{try{const a=JSON.parse(getLS(K.events,'[]'))||[];a.push(e);setLS(K.events,JSON.stringify(a.slice(-120)))}catch(_){}};

  async function post(url,body){
    if(!url)return{ok:false,skipped:true};
    try{const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),keepalive:true});return{ok:r.ok,status:r.status}}
    catch(error){return{ok:false,error:String(error)}}
  }

  function track(name,data={}){
    const e={id:uid('evt'),name,at:new Date().toISOString(),visitorId,sessionId,lang:lang(),path:location.pathname,source,data};
    rememberEvent(e); // anonymous local diagnostics only; never stores lead contact details.
    if(getConsent().analytics===true){
      window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:name,...data});
      if(typeof window.gtag==='function'){try{window.gtag('event',name,data)}catch(_){}}
      post(C.eventEndpoint,e);
    }
    return e;
  }

  function loadGA4(){
    if(!C.ga4MeasurementId||document.querySelector('[data-miki-ga4]'))return;
    const s=document.createElement('script');s.async=true;s.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(C.ga4MeasurementId)}`;s.dataset.mikiGa4='1';document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config',C.ga4MeasurementId,{anonymize_ip:true});
  }
  function loadClarity(){
    if(!C.clarityProjectId||window.clarity)return;
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script',C.clarityProjectId);
  }
  function applyConsent(v){setLS(K.consent,JSON.stringify(v));if(v.analytics){loadGA4();loadClarity()}track('consent_update',{analytics:!!v.analytics,marketing:!!v.marketing})}
  function renderConsent(){
    if(!C.consentRequired||getLS(K.consent)){if(getConsent().analytics){loadGA4();loadClarity()}return}
    const el=document.createElement('div');el.className='miki-consent';
    el.innerHTML='<div><strong>Cookies & analytics</strong><p>Miki uses optional analytics to understand website usage. You can accept or continue with essential functions only.</p></div><div class="miki-consent-actions"><button data-consent-essential>Essential only</button><button class="primary" data-consent-accept>Accept analytics</button></div>';
    el.querySelector('[data-consent-essential]').onclick=()=>{applyConsent({analytics:false,marketing:false});el.remove()};
    el.querySelector('[data-consent-accept]').onclick=()=>{applyConsent({analytics:true,marketing:false});el.remove()};document.body.appendChild(el);
  }

  const TXT={
    vi:{title:'Tư vấn nhanh',lead:'Để lại thông tin, Miki sẽ liên hệ tư vấn dịch vụ phù hợp.',name:'Họ và tên',contact:'Số điện thoại / WhatsApp',service:'Dịch vụ quan tâm',channel:'Kênh liên hệ',consent:'Tôi đồng ý để Miki liên hệ về yêu cầu này.',submit:'Gửi yêu cầu',close:'Đóng',success:'Đã gửi yêu cầu. Miki sẽ liên hệ lại với bạn.'},
    en:{title:'Quick consultation',lead:'Leave your details and Miki will contact you about the right service.',name:'Full name',contact:'Phone / WhatsApp',service:'Interested service',channel:'Preferred channel',consent:'I agree that Miki may contact me about this request.',submit:'Send request',close:'Close',success:'Request sent. Miki will contact you soon.'}
  };
  const copy=()=>TXT[lang()]||TXT.en;

  function openLead(prefill=''){
    if(document.querySelector('.miki-lead-backdrop'))return;
    const t=copy(),wrap=document.createElement('div');wrap.className='miki-lead-backdrop';
    wrap.innerHTML=`<div class="miki-lead-modal" role="dialog" aria-modal="true"><button class="miki-lead-x" aria-label="${t.close}">×</button><div class="miki-lead-kicker">MIKI SKIN SPA</div><h2>${t.title}</h2><p>${t.lead}</p><form><label>${t.name}<input name="name" required autocomplete="name"></label><label>${t.contact}<input name="contact" required inputmode="tel" autocomplete="tel"></label><label>${t.service}<select name="service"><option>${prefill||'Laser Hair Removal'}</option><option>Waxing</option><option>Skin Care</option><option>Acne Care</option><option>Body Care</option><option>Other</option></select></label><label>${t.channel}<select name="channel"><option>WhatsApp</option><option>Zalo</option><option>Phone</option><option>Telegram</option></select></label><label class="miki-check"><input type="checkbox" name="consent" required><span>${t.consent}</span></label><button class="miki-lead-submit" type="submit">${t.submit}</button><div class="miki-lead-status" aria-live="polite"></div></form></div>`;
    const close=()=>wrap.remove();wrap.addEventListener('click',e=>{if(e.target===wrap)close()});wrap.querySelector('.miki-lead-x').onclick=close;
    wrap.querySelector('form').onsubmit=async e=>{
      e.preventDefault();const fd=new FormData(e.currentTarget);
      const lead={id:uid('lead'),createdAt:new Date().toISOString(),visitorId,sessionId,lang:lang(),name:String(fd.get('name')||'').trim(),contact:String(fd.get('contact')||'').trim(),service:String(fd.get('service')||''),channel:String(fd.get('channel')||''),source,landing:source.landing||'',lastPage:location.href,consentAt:new Date().toISOString(),status:'new'};
      track('lead_submit',{service:lead.service,channel:lead.channel});
      const result=await post(C.leadEndpoint,lead);wrap.querySelector('.miki-lead-status').textContent=t.success;
      if(!result.ok&&C.whatsapp){const msg=`Miki Spa - Consultation request\nName: ${lead.name}\nContact: ${lead.contact}\nService: ${lead.service}\nLanguage: ${lead.lang.toUpperCase()}`;const url=C.whatsapp+(C.whatsapp.includes('?')?'&':'?')+'text='+encodeURIComponent(msg);setTimeout(()=>window.open(url,'_blank','noopener'),350)}
      e.currentTarget.reset();
    };
    document.body.appendChild(wrap);track('lead_modal_open',{prefill});
  }

  function detectService(el){const card=el.closest('[id^="service-"]');if(card)return card.id.replace('service-','');const h=(el.getAttribute('href')||'').toLowerCase();if(h.includes('laser'))return'laser';if(h.includes('wax'))return'waxing';return''}
  function bindClicks(){document.addEventListener('click',e=>{const el=e.target.closest('a,button');if(!el)return;const h=el.getAttribute('href')||'',label=(el.textContent||'').trim().slice(0,80),service=detectService(el);if(el.matches('[data-open-booking]')||/booking\.html/.test(h))track('booking_click',{service,label});if(/wa\.me|whatsapp/i.test(h))track('contact_click',{channel:'whatsapp',service});if(/zalo\.me/i.test(h))track('contact_click',{channel:'zalo',service});if(/t\.me\//i.test(h))track('contact_click',{channel:'telegram',service});if(/maps\.app\.goo\.gl|google\.com\/maps/i.test(h))track('maps_click',{service});if(/writereview|review/i.test(h))track('google_review_click',{})},true)}
  function bindScroll(){const seen=new Set();addEventListener('scroll',()=>{const d=document.documentElement,max=Math.max(1,d.scrollHeight-innerHeight),pct=Math.round(scrollY/max*100);[25,50,75,90].forEach(x=>{if(pct>=x&&!seen.has(x)){seen.add(x);track('scroll_depth',{percent:x})}})},{passive:true})}
  function bindBookingPage(){
    if(!/booking\.html$/.test(location.pathname))return;const next=document.getElementById('next');if(!next)return;let step=1;
    next.addEventListener('click',()=>{const selected=document.querySelector('#services .card.sel'),selectedTime=document.querySelector('.time.sel');track('booking_step',{step,service:selected?.dataset.service||'',time:selectedTime?.textContent||''});const isFinal=document.getElementById('done')?.style.display==='block'||/send|gửi|ส่ง|отправ|发送|보내/i.test(next.textContent||'');if(isFinal){const booking={id:uid('booking'),createdAt:new Date().toISOString(),visitorId,sessionId,lang:lang(),source,service:selected?.dataset.service||'',price:selected?.dataset.price||'',date:document.getElementById('date')?.value||'',time:selectedTime?.textContent||'',name:document.getElementById('name')?.value.trim()||'',phone:document.getElementById('phone')?.value.trim()||'',channel:document.getElementById('contact')?.value||'',note:document.getElementById('note')?.value||''};if(booking.name&&booking.phone){track('booking_submit',{service:booking.service,channel:booking.channel});post(C.bookingEndpoint,booking)}}step=Math.min(step+1,4)})
  }
  function addLeadCTA(){if(/booking\.html$/.test(location.pathname))return;const b=document.createElement('button');b.className='miki-growth-cta';b.type='button';b.textContent=lang()==='vi'?'✦ Tư vấn nhanh':'✦ Quick consult';b.onclick=()=>openLead('');document.body.appendChild(b)}
  function init(){if(document.documentElement.dataset.mikiGrowthReady==='1')return;document.documentElement.dataset.mikiGrowthReady='1';renderConsent();bindClicks();bindScroll();bindBookingPage();addLeadCTA();track('page_view',{title:document.title})}

  window.MikiGrowth=Object.freeze({track,openLead,get visitorId(){return visitorId},get sessionId(){return sessionId},get source(){return source}});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
