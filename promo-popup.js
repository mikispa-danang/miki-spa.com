(() => {
  const STORAGE_KEY='miki-promo-dismissed-at';
  const COOLDOWN_MS=24*60*60*1000;
  const DELAY_MS=7000;
  const LANGS=['vi','en','ko','zh','ru','th'];
  const copy={
    vi:{badge:'Ưu đãi tại Miki',title:'Đặt lịch trước · Giảm 20%',text:'Ưu đãi áp dụng cho tất cả dịch vụ theo chương trình hiện tại của Miki. Đặt lịch online để giữ ưu đãi và chọn khung giờ phù hợp.',book:'Đặt lịch ngay',later:'Để sau',close:'Đóng ưu đãi'},
    en:{badge:'Miki Special Offer',title:'Book ahead · Save 20%',text:'The current Miki promotion offers 20% off services when booking ahead. Book online to secure the offer and choose a suitable time.',book:'Book now',later:'Maybe later',close:'Close offer'},
    ko:{badge:'Miki 특별 혜택',title:'사전 예약 · 20% 할인',text:'현재 Miki 프로모션으로 사전 예약 시 서비스 20% 할인 혜택을 받을 수 있습니다. 온라인으로 예약하고 원하는 시간을 선택하세요.',book:'지금 예약하기',later:'나중에',close:'혜택 닫기'},
    zh:{badge:'Miki 专属优惠',title:'提前预约 · 享 8 折',text:'Miki 当前活动：提前预约可享服务 20% 优惠。在线预约即可保留优惠并选择合适时间。',book:'立即预约',later:'稍后再说',close:'关闭优惠'},
    ru:{badge:'Спецпредложение Miki',title:'Запишитесь заранее · скидка 20%',text:'По текущей акции Miki при предварительной записи действует скидка 20% на услуги. Запишитесь онлайн, чтобы сохранить предложение и выбрать удобное время.',book:'Записаться',later:'Позже',close:'Закрыть предложение'},
    th:{badge:'ข้อเสนอพิเศษจาก Miki',title:'จองล่วงหน้า · ลด 20%',text:'โปรโมชั่นปัจจุบันของ Miki มอบส่วนลด 20% สำหรับการจองล่วงหน้า จองออนไลน์เพื่อรับสิทธิ์และเลือกเวลาที่สะดวก',book:'จองตอนนี้',later:'ไว้ก่อน',close:'ปิดข้อเสนอ'}
  };

  function currentLang(){
    const live=window.MIKI_LANGUAGE;
    let stored='';
    try{stored=localStorage.getItem('miki-language')||''}catch(_){}
    const html=(document.documentElement.lang||'').slice(0,2);
    return LANGS.includes(live)?live:(LANGS.includes(stored)?stored:(LANGS.includes(html)?html:'vi'));
  }

  function recentlyDismissed(){
    try{
      const t=Number(localStorage.getItem(STORAGE_KEY)||0);
      return t && Date.now()-t<COOLDOWN_MS;
    }catch(_){return false}
  }

  function rememberDismiss(){
    try{localStorage.setItem(STORAGE_KEY,String(Date.now()))}catch(_){}
  }

  function bookingUrl(){
    const lang=currentLang();
    const url=new URL('/booking.html',location.origin);
    if(lang) url.searchParams.set('lang',lang);
    return url.href;
  }

  function build(){
    if(document.getElementById('mikiPromoPopup')) return null;
    const lang=currentLang(),t=copy[lang]||copy.vi;
    const wrap=document.createElement('div');
    wrap.id='mikiPromoPopup';
    wrap.className='miki-promo-overlay';
    wrap.setAttribute('role','dialog');
    wrap.setAttribute('aria-modal','true');
    wrap.setAttribute('aria-labelledby','mikiPromoTitle');
    wrap.innerHTML=`
      <section class="miki-promo-card">
        <button type="button" class="miki-promo-close" aria-label="${t.close}">×</button>
        <div class="miki-promo-media">
          <img src="assets/optimized/miki-promo-20.webp?v=20260918" alt="Miki Skin Spa - đặt lịch trước giảm 20%" width="1100" height="904" loading="eager" decoding="async">
        </div>
        <div class="miki-promo-inner">
          <div class="miki-promo-badge">${t.badge}</div>
          <h2 id="mikiPromoTitle" class="miki-promo-title">${t.title}</h2>
          <p class="miki-promo-copy">${t.text}</p>
          <div class="miki-promo-actions">
            <a class="miki-promo-book" href="${bookingUrl()}">${t.book}</a>
            <button type="button" class="miki-promo-later">${t.later}</button>
          </div>
        </div>
      </section>`;
    document.body.appendChild(wrap);
    return wrap;
  }

  function closePopup(wrap){
    if(!wrap) return;
    wrap.classList.remove('is-open');
    document.body.classList.remove('miki-promo-lock');
    rememberDismiss();
    setTimeout(()=>wrap.remove(),320);
  }

  function openPopup(){
    if(recentlyDismissed()||location.pathname.includes('booking')) return;
    const wrap=build();
    if(!wrap) return;
    const close=()=>closePopup(wrap);
    wrap.querySelector('.miki-promo-close')?.addEventListener('click',close);
    wrap.querySelector('.miki-promo-later')?.addEventListener('click',close);
    wrap.addEventListener('click',e=>{if(e.target===wrap) close()});
    wrap.addEventListener('keydown',e=>{if(e.key==='Escape') close()});
    wrap.querySelector('.miki-promo-book')?.addEventListener('click',()=>rememberDismiss());
    requestAnimationFrame(()=>{
      wrap.classList.add('is-open');
      document.body.classList.add('miki-promo-lock');
      wrap.querySelector('.miki-promo-close')?.focus({preventScroll:true});
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(openPopup,DELAY_MS));
  else setTimeout(openPopup,DELAY_MS);
})();
