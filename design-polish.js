(function(){
  const FAQ_LABELS = {
    vi: {more:'Xem thêm câu hỏi', less:'Thu gọn câu hỏi'},
    en: {more:'Show more questions', less:'Show fewer questions'},
    ko: {more:'질문 더 보기', less:'질문 접기'},
    zh: {more:'查看更多问题', less:'收起问题'},
    ru: {more:'Показать больше вопросов', less:'Свернуть вопросы'}
  };
  const getLang = () => (document.documentElement.getAttribute('lang') || 'vi').toLowerCase().slice(0,2);
  const getLabels = () => FAQ_LABELS[getLang()] || FAQ_LABELS.vi;
  const syncButtonLabels = () => {
    const labels = getLabels();
    document.querySelectorAll('.faq-more-toggle').forEach(btn => {
      const panel = btn.closest('.faq-panel');
      btn.textContent = panel && panel.classList.contains('expanded') ? labels.less : labels.more;
    });
  };

  function fixQuickContact(){
    const section=document.getElementById('connect-miki');
    if(!section) return;
    const cards=[...section.querySelectorAll('.connect-card')];
    const qr=[
      ['.whatsapp-qr-preview','assets/optimized/whatsapp-miki-qr.png'],
      ['.zalo-qr-preview','assets/optimized/zalo-miki-qr.png'],
      ['.telegram-qr-preview','assets/optimized/telegram.jpg']
    ];
    qr.forEach(([selector,src])=>{
      const link=section.querySelector(selector);
      if(!link) return;
      link.href=src;
      const img=link.querySelector('img');
      if(img){img.src=src;img.removeAttribute('width');img.removeAttribute('height');}
    });
    const style=document.createElement('style');
    style.id='miki-quick-contact-compact';
    style.textContent=`
      #connect-miki .connect-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:16px!important;align-items:stretch!important}
      #connect-miki .connect-card{min-width:0!important;min-height:0!important;height:auto!important;padding:22px!important;border-radius:22px!important;display:flex!important;flex-direction:column!important;align-items:flex-start!important;overflow:hidden!important}
      #connect-miki .connect-card>.connect-icon{width:44px!important;height:44px!important;min-height:44px!important;display:grid!important;place-items:center!important;margin:0 0 14px!important;font-size:14px!important}
      #connect-miki .connect-card>strong{font-size:clamp(19px,1.6vw,25px)!important;line-height:1.12!important;overflow-wrap:normal!important;word-break:normal!important;hyphens:none!important;margin:0 0 10px!important}
      #connect-miki .connect-card>p{font-size:14px!important;line-height:1.55!important;margin:0 0 14px!important;overflow-wrap:normal!important;word-break:normal!important}
      #connect-miki .qr-contact-card>a[class$="qr-preview"]{width:132px!important;height:132px!important;min-height:132px!important;margin:2px auto 16px!important;padding:7px!important;border:1px solid rgba(91,66,44,.14)!important;border-radius:16px!important;background:#fff!important;display:grid!important;place-items:center!important;overflow:hidden!important}
      #connect-miki .qr-contact-card>a[class$="qr-preview"] img{display:block!important;width:100%!important;height:100%!important;object-fit:contain!important;border-radius:9px!important}
      #connect-miki .connect-card>.btn{margin-top:auto!important;width:100%!important;min-height:44px!important;padding:11px 12px!important;font-size:12px!important;white-space:normal!important}
      #connect-miki .location-card p strong{font-size:15px!important;line-height:1.35!important}
      @media(max-width:1050px){#connect-miki .connect-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
      @media(max-width:620px){#connect-miki .connect-grid{grid-template-columns:1fr!important;gap:12px!important}#connect-miki .connect-card{padding:18px!important}#connect-miki .qr-contact-card>a[class$="qr-preview"]{width:124px!important;height:124px!important;min-height:124px!important}}
    `;
    document.getElementById(style.id)?.remove();
    document.head.appendChild(style);
    cards.forEach(c=>c.style.removeProperty('height'));
  }

  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.faq-more-toggle').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const panel=btn.closest('.faq-panel');
        if(!panel) return;
        panel.classList.toggle('expanded');
        syncButtonLabels();
      });
    });
    syncButtonLabels();
    fixQuickContact();
    const observer = new MutationObserver(syncButtonLabels);
    observer.observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  });
})();
