(function(){
  const FAQ_LABELS={vi:{more:'Xem thêm câu hỏi',less:'Thu gọn câu hỏi'},en:{more:'Show more questions',less:'Show fewer questions'},ko:{more:'질문 더 보기',less:'질문 접기'},zh:{more:'查看更多问题',less:'收起问题'},ru:{more:'Показать больше вопросов',less:'Свернуть вопросы'}};
  const getLang=()=>(document.documentElement.getAttribute('lang')||'vi').toLowerCase().slice(0,2);
  const getLabels=()=>FAQ_LABELS[getLang()]||FAQ_LABELS.vi;
  const syncButtonLabels=()=>{const labels=getLabels();document.querySelectorAll('.faq-more-toggle').forEach(btn=>{const panel=btn.closest('.faq-panel');btn.textContent=panel&&panel.classList.contains('expanded')?labels.less:labels.more;});};

  function fixQuickContact(){
    const section=document.getElementById('connect-miki');if(!section)return;
    const qr=[['.whatsapp-qr-preview','/assets/optimized/whatsapp-miki-qr.png?v=20260916-2'],['.zalo-qr-preview','/assets/optimized/zalo-miki-qr.png?v=20260916-2'],['.telegram-qr-preview','/assets/optimized/telegram.jpg?v=20260916-2']];
    qr.forEach(([selector,src])=>{const link=section.querySelector(selector);if(!link)return;link.href=src;const img=link.querySelector('img');if(img){img.src=src;img.loading='eager';img.decoding='async';}});
  }

  function mobilePolish(){
    const style=document.createElement('style');style.id='miki-mobile-polish';style.textContent=`
      @media(max-width:620px){
        .utility-bar{position:relative!important;min-height:64px!important;padding:8px 18px!important;display:flex!important;justify-content:flex-end!important;align-items:center!important}.utility-address{display:none!important}.utility-bar .lang-list{width:auto!important;margin-left:auto!important;display:flex!important;justify-content:flex-end!important;gap:7px!important;flex-wrap:nowrap!important}.utility-bar .lang-list button{padding:7px 8px!important;font-size:13px!important;white-space:nowrap!important}.site-header{padding-top:10px!important;padding-bottom:10px!important}.hero.section-pad{padding-top:32px!important;padding-bottom:38px!important}.hero-copy .eyebrow{font-size:11px!important;letter-spacing:.16em!important;white-space:nowrap!important}.hero-copy h1{margin-top:24px!important}.hero-copy h1 .hero-line{display:block!important;white-space:nowrap!important;letter-spacing:-.035em!important}.hero-copy h1 .hero-line-main{font-size:clamp(34px,10.2vw,48px)!important}.hero-copy h1 .hero-line-accent{font-size:clamp(31px,9.2vw,44px)!important;margin-top:7px!important}.signature-slogan{margin-top:24px!important;font-size:16px!important}.hero-lead{font-size:18px!important;line-height:1.7!important}.hero-actions .btn{font-size:16px!important}
        .section-pad{padding-top:38px!important;padding-bottom:38px!important}.section-heading{margin-bottom:20px!important}.section-heading h2{margin-bottom:8px!important}.section-heading p{margin-top:8px!important}.pricing .section-heading{margin-bottom:16px!important}.laser-feature-strip{margin-top:12px!important;margin-bottom:14px!important}.popular-pricing{margin-top:14px!important;margin-bottom:14px!important}.services+.technology-proof,.technology-proof+.pricing,.pricing+.media-showcase,.media-showcase+#process{margin-top:0!important}
        .catalog-benefit-note{margin:12px 0 16px!important;padding:17px!important;border-radius:20px!important}.catalog-benefit-note>div>span{font-size:11px!important;letter-spacing:.14em!important}.catalog-benefit-note>div>strong{font-size:23px!important;line-height:1.18!important}.catalog-benefit-note>p{display:none!important}
        .miki-combo-points{display:grid!important;gap:7px!important;margin-top:12px!important}.miki-combo-point{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;padding:9px 11px!important;border-radius:14px!important;background:rgba(255,255,255,.55)!important}.miki-combo-point span{font-size:14px!important;line-height:1.35!important}.miki-combo-point b{flex:0 0 auto!important;font-size:14px!important;color:#7b5433!important;white-space:nowrap!important}
        .price-tabs.catalog-tabs{display:flex!important;flex-wrap:nowrap!important;gap:12px!important;width:calc(100% + 36px)!important;margin-left:-18px!important;padding:8px 18px 12px!important;overflow-x:auto!important;scroll-snap-type:x mandatory!important;scrollbar-width:none!important}.price-tabs.catalog-tabs::-webkit-scrollbar{display:none!important}.price-tabs.catalog-tabs .tab{flex:0 0 auto!important;min-width:max-content!important;min-height:52px!important;padding:12px 21px!important;border-radius:28px!important;white-space:nowrap!important;font-size:17px!important;scroll-snap-align:start!important}.price-tabs.catalog-tabs .tab.active{background:#211b17!important;color:#fff!important;border-color:#211b17!important}
        #process.section-pad{padding-top:32px!important;padding-bottom:34px!important}#process .section-heading{margin-bottom:18px!important}#process .section-heading h2{font-size:clamp(32px,8.5vw,43px)!important;line-height:1.08!important}.process-grid{gap:9px!important}.process-grid article{min-height:0!important;padding:16px 18px!important;border-radius:20px!important;display:grid!important;grid-template-columns:38px minmax(0,1fr)!important;column-gap:10px!important;row-gap:3px!important;align-items:start!important}.process-grid article>span{grid-column:1!important;grid-row:1 / span 2!important;margin:3px 0 0!important;font-size:15px!important;line-height:1.2!important}.process-grid article>h3{grid-column:2!important;grid-row:1!important;margin:0!important;font-size:24px!important;line-height:1.15!important}.process-grid article>p{grid-column:2!important;grid-row:2!important;margin:2px 0 0!important;font-size:15px!important;line-height:1.42!important}.price-cta{margin-top:16px!important}.price-cta .btn{min-height:52px!important;font-size:16px!important}
      }
      @media(max-width:390px){.utility-bar{padding-left:10px!important;padding-right:10px!important}.utility-bar .lang-list{gap:3px!important}.utility-bar .lang-list button{font-size:12px!important;padding:6px!important}.hero-copy .eyebrow{font-size:10px!important;letter-spacing:.1em!important}.hero-copy h1 .hero-line-main{font-size:9.5vw!important}.hero-copy h1 .hero-line-accent{font-size:8.7vw!important}.hero-lead{font-size:17px!important}.process-grid article{grid-template-columns:34px minmax(0,1fr)!important;padding:15px 16px!important}.process-grid article>h3{font-size:22px!important}.process-grid article>p{font-size:14.5px!important}}
    `;document.getElementById(style.id)?.remove();document.head.appendChild(style);
  }

  function enhanceComboOffer(){
    const note=document.querySelector('.catalog-benefit-note');if(!note)return;
    const strong=note.querySelector('strong');if(strong)strong.textContent='Combo tiết kiệm đến 20%';
    if(!note.querySelector('.miki-combo-points')){
      const points=document.createElement('div');points.className='miki-combo-points';points.innerHTML=`<div class="miki-combo-point"><span><strong>Combo 1</strong> · Chọn nhiều vùng trong cùng buổi</span><b>TIẾT KIỆM</b></div><div class="miki-combo-point"><span><strong>Combo 2</strong> · Gói liệu trình theo nhu cầu</span><b>ĐẾN 20%</b></div>`;note.appendChild(points);
    }
  }

  function mobilePricingSlider(){const tabs=document.querySelector('.price-tabs.catalog-tabs');if(!tabs)return;tabs.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>setTimeout(()=>tab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'}),40)));}

  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.faq-more-toggle').forEach(btn=>btn.addEventListener('click',()=>{const panel=btn.closest('.faq-panel');if(!panel)return;panel.classList.toggle('expanded');syncButtonLabels();}));
    syncButtonLabels();fixQuickContact();mobilePolish();enhanceComboOffer();mobilePricingSlider();
    const observer=new MutationObserver(syncButtonLabels);observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  });
})();
