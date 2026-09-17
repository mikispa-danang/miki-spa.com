(function(){
  const FAQ_LABELS={vi:{more:'Xem thêm câu hỏi',less:'Thu gọn câu hỏi'},en:{more:'Show more questions',less:'Show fewer questions'},ko:{more:'질문 더 보기',less:'질문 접기'},zh:{more:'查看更多问题',less:'收起问题'},ru:{more:'Показать больше вопросов',less:'Свернуть вопросы'}};
  const getLang=()=>(document.documentElement.getAttribute('lang')||'vi').toLowerCase().slice(0,2);
  const getLabels=()=>FAQ_LABELS[getLang()]||FAQ_LABELS.vi;
  const syncButtonLabels=()=>{const labels=getLabels();document.querySelectorAll('.faq-more-toggle').forEach(btn=>{const panel=btn.closest('.faq-panel');btn.textContent=panel&&panel.classList.contains('expanded')?labels.less:labels.more;});};

  function fixQuickContact(){
    const section=document.getElementById('connect-miki');if(!section)return;
    const cards=[...section.querySelectorAll('.connect-card')];
    const qr=[['.whatsapp-qr-preview','/assets/optimized/whatsapp-miki-qr.png?v=20260916-2'],['.zalo-qr-preview','/assets/optimized/zalo-miki-qr.png?v=20260916-2'],['.telegram-qr-preview','/assets/optimized/telegram.jpg?v=20260916-2']];
    qr.forEach(([selector,src])=>{const link=section.querySelector(selector);if(!link)return;link.href=src;const img=link.querySelector('img');if(img){img.src=src;img.removeAttribute('width');img.removeAttribute('height');img.loading='eager';img.decoding='async';}});
    const style=document.createElement('style');style.id='miki-quick-contact-compact';style.textContent=`
      #connect-miki .connect-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:16px!important;align-items:stretch!important}
      #connect-miki .connect-card{min-width:0!important;min-height:0!important;height:auto!important;padding:22px!important;border-radius:22px!important;display:flex!important;flex-direction:column!important;align-items:flex-start!important;overflow:hidden!important}
      #connect-miki .connect-card>.connect-icon{width:44px!important;height:44px!important;min-height:44px!important;display:grid!important;place-items:center!important;margin:0 0 14px!important;font-size:14px!important}
      #connect-miki .connect-card>strong{font-size:clamp(19px,1.6vw,25px)!important;line-height:1.12!important;margin:0 0 10px!important}
      #connect-miki .connect-card>p{font-size:14px!important;line-height:1.55!important;margin:0 0 14px!important}
      #connect-miki .qr-contact-card>a[class$="qr-preview"]{width:132px!important;height:132px!important;min-height:132px!important;margin:2px auto 16px!important;padding:7px!important;border:1px solid rgba(91,66,44,.14)!important;border-radius:16px!important;background:#fff!important;display:grid!important;place-items:center!important;overflow:hidden!important}
      #connect-miki .qr-contact-card>a[class$="qr-preview"] img{display:block!important;visibility:visible!important;opacity:1!important;width:100%!important;height:100%!important;max-width:100%!important;object-fit:contain!important;object-position:center!important;border-radius:9px!important}
      #connect-miki .connect-card>.btn{margin-top:auto!important;width:100%!important;min-height:44px!important;padding:11px 12px!important;font-size:12px!important;white-space:normal!important}
      #connect-miki .location-card p strong{font-size:15px!important;line-height:1.35!important}
      @media(max-width:1050px){#connect-miki .connect-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
      @media(max-width:620px){#connect-miki .connect-grid{grid-template-columns:1fr!important;gap:12px!important}#connect-miki .connect-card{padding:18px!important}#connect-miki .qr-contact-card>a[class$="qr-preview"]{width:124px!important;height:124px!important;min-height:124px!important}}
    `;document.getElementById(style.id)?.remove();document.head.appendChild(style);cards.forEach(c=>c.style.removeProperty('height'));
  }

  function refineMobileHero(){
    const style=document.createElement('style');style.id='miki-mobile-hero-refinement';style.textContent=`
      @media(max-width:620px){
        .utility-bar{position:relative!important;min-height:64px!important;padding:8px 18px!important;display:flex!important;justify-content:flex-end!important;align-items:center!important}.utility-address{display:none!important}.utility-bar .lang-list{width:auto!important;max-width:100%!important;margin-left:auto!important;display:flex!important;justify-content:flex-end!important;align-items:center!important;gap:7px!important;flex-wrap:nowrap!important}.utility-bar .lang-list button{flex:0 0 auto!important;padding:7px 8px!important;min-width:auto!important;font-size:13px!important;white-space:nowrap!important}.site-header{padding-top:10px!important;padding-bottom:10px!important}.hero.section-pad{padding-top:36px!important}.hero-copy .eyebrow{font-size:11px!important;letter-spacing:.16em!important;white-space:nowrap!important;line-height:1.3!important}.hero-copy h1{margin-top:24px!important}.hero-copy h1 .hero-line{display:block!important;white-space:nowrap!important;letter-spacing:-.035em!important}.hero-copy h1 .hero-line-main{font-size:clamp(34px,10.2vw,48px)!important;line-height:1.02!important}.hero-copy h1 .hero-line-accent{font-size:clamp(31px,9.2vw,44px)!important;line-height:1.08!important;margin-top:7px!important}.signature-slogan{margin-top:24px!important;font-size:16px!important;line-height:1.5!important}.hero-lead{font-size:18px!important;line-height:1.7!important}.hero-actions .btn{font-size:16px!important}.hero-actions .text-link{font-size:15px!important}.hero-trust-badges .trust-badge-item{font-size:15px!important;line-height:1.45!important}.contact-line a{font-size:15px!important;line-height:1.5!important}
      }
      @media(max-width:390px){.utility-bar{padding-left:10px!important;padding-right:10px!important}.utility-bar .lang-list{gap:3px!important}.utility-bar .lang-list button{font-size:12px!important;padding:6px!important}.hero-copy .eyebrow{font-size:10px!important;letter-spacing:.1em!important}.hero-copy h1 .hero-line-main{font-size:9.5vw!important}.hero-copy h1 .hero-line-accent{font-size:8.7vw!important}.hero-lead{font-size:17px!important}}
    `;document.getElementById(style.id)?.remove();document.head.appendChild(style);
  }

  function mobilePricingSlider(){
    const tabs=document.querySelector('.price-tabs.catalog-tabs');if(!tabs)return;
    const style=document.createElement('style');style.id='miki-mobile-pricing-slider';style.textContent=`
      @media(max-width:620px){
        .price-tabs.catalog-tabs{display:flex!important;flex-wrap:nowrap!important;gap:12px!important;width:calc(100% + 36px)!important;margin-left:-18px!important;padding:10px 18px 18px!important;overflow-x:auto!important;overflow-y:hidden!important;scroll-snap-type:x mandatory!important;scroll-padding-left:18px!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior-x:contain!important;scrollbar-width:none!important}
        .price-tabs.catalog-tabs::-webkit-scrollbar{display:none!important}
        .price-tabs.catalog-tabs .tab{flex:0 0 auto!important;min-width:max-content!important;max-width:78vw!important;min-height:58px!important;padding:14px 24px!important;border-radius:30px!important;white-space:nowrap!important;font-size:17px!important;line-height:1.2!important;scroll-snap-align:start!important;transition:background .2s ease,color .2s ease,border-color .2s ease,transform .2s ease!important}
        .price-tabs.catalog-tabs .tab.active{background:#211b17!important;color:#fff!important;border-color:#211b17!important;transform:translateY(-1px)!important}
      }
    `;document.getElementById(style.id)?.remove();document.head.appendChild(style);
    tabs.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{window.setTimeout(()=>tab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'}),40);}));
  }

  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.faq-more-toggle').forEach(btn=>{btn.addEventListener('click',()=>{const panel=btn.closest('.faq-panel');if(!panel)return;panel.classList.toggle('expanded');syncButtonLabels();});});
    syncButtonLabels();fixQuickContact();refineMobileHero();mobilePricingSlider();
    const observer=new MutationObserver(syncButtonLabels);observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  });
})();
