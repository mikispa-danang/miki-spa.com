(() => {
  const STORAGE_KEY='miki-promo-dismissed-at';
  const COOLDOWN_MS=24*60*60*1000;
  const DELAY_MS=7000;
  const LANGS=['vi','en','ko','zh','ru','th'];
  const copy={
    vi:{badge:'Ưu đãi tại Miki',title:'Ưu đãi dành cho khách đặt lịch online',text:'Miki đang có chương trình ưu đãi theo từng dịch vụ. Đặt lịch để được xác nhận mức ưu đãi hiện tại và khung giờ phù hợp.',book:'Đặt lịch ngay',later:'Để sau',close:'Đóng ưu đãi'},
    en:{badge:'Miki Special Offer',title:'A special offer for online bookings',text:'Miki currently has service-specific promotions. Book now to confirm the current offer and a suitable appointment time.',book:'Book now',later:'Maybe later',close:'Close offer'},
    ko:{badge:'Miki 특별 혜택',title:'온라인 예약 고객 특별 혜택',text:'Miki에서는 서비스별 프로모션을 운영하고 있습니다. 예약하시면 현재 적용 가능한 혜택과 가능한 시간을 확인해 드립니다.',book:'지금 예약하기',later:'나중에',close:'혜택 닫기'},
    zh:{badge:'Miki 专属优惠',title:'线上预约专属优惠',text:'Miki 目前针对不同服务提供优惠活动。立即预约，可确认当前优惠及合适的预约时间。',book:'立即预约',later:'稍后再说',close:'关闭优惠'},
    ru:{badge:'Спецпредложение Miki',title:'Специальное предложение для онлайн-записи',text:'В Miki действуют акции на отдельные услуги. Запишитесь, чтобы уточнить актуальное предложение и удобное время.',book:'Записаться',later:'Позже',close:'Закрыть предложение'},
    th:{badge:'ข้อเสนอพิเศษจาก Miki',title:'สิทธิพิเศษสำหรับการจองออนไลน์',text:'Miki มีโปรโมชั่นสำหรับบริการบางรายการ กรุณาจองเพื่อยืนยันโปรโมชั่นปัจจุบันและช่วงเวลาที่สะดวก',book:'จองตอนนี้',later:'ไว้ก่อน',close:'ปิดข้อเสนอ'}
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
        <div class="miki-promo-accent"></div>
        <button type="button" class="miki-promo-close" aria-label="${t.close}">×</button>
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
