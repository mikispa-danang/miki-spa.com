(() => {
 const modal=document.getElementById('bookingModal'); if(!modal)return;
 const dialog=modal.querySelector('[role="dialog"]'); let previous=null,wasOpen=false;
 dialog.tabIndex=-1;
 const items=()=>[...dialog.querySelectorAll('button,a[href],input,select,textarea,[tabindex="0"]')].filter(x=>!x.disabled&&x.tabIndex>=0&&x.getClientRects().length);
 new MutationObserver(()=>{
  const open=modal.classList.contains('open');if(open===wasOpen)return;wasOpen=open;
  if(open){previous=document.activeElement;document.body.style.overflow='hidden';dialog.scrollTop=0;dialog.focus({preventScroll:true});}
  else{document.body.style.overflow='';previous?.focus({preventScroll:true});}
 }).observe(modal,{attributes:true,attributeFilter:['class']});
 modal.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const a=items(),first=a[0],last=a.at(-1);if(!first){e.preventDefault();return;}if(e.shiftKey&&(document.activeElement===first||document.activeElement===dialog)){e.preventDefault();last.focus();}else if(!e.shiftKey&&(document.activeElement===last||document.activeElement===dialog)){e.preventDefault();first.focus();}});
})();
