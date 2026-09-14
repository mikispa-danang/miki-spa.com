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
    const observer = new MutationObserver(syncButtonLabels);
    observer.observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  });
})();
