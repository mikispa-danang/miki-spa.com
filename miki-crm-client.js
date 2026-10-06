(()=>{'use strict';
const endpoint='https://flbbjvmxqmbaynrcnefv.supabase.co/functions/v1/miki-growth';
let sessionId=crypto.randomUUID(),source={};try{const p=new URLSearchParams(location.search);const prior=JSON.parse(sessionStorage.getItem('miki_source')||'null');if(prior&&!p.has('utm_source'))source=prior;else{for(const k of ['utm_source','utm_medium','utm_campaign'])source[k]=(p.get(k)||'').slice(0,80);try{source.referrer=new URL(document.referrer).origin}catch{}source.landing=location.origin+location.pathname;sessionStorage.setItem('miki_source',JSON.stringify(source))}sessionId=sessionStorage.getItem('miki_session')||sessionId;sessionStorage.setItem('miki_session',sessionId)}catch{}
async function post(type,body){try{const r=await fetch(endpoint+'?type='+type,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...body,source,sessionId,lang:document.documentElement.lang}),signal:AbortSignal.timeout(8000)});if(!r.ok)return {ok:false};return await r.json()}catch{return {ok:false}}}
window.MikiCRM={source,submitBooking:b=>post('booking',{...b,id:b.id||crypto.randomUUID()}),event:(name,data={})=>post('event',{id:crypto.randomUUID(),name,path:location.pathname,data})};
window.MikiCRM.event('page_view');
})();
