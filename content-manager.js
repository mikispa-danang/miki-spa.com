(function(){
  const STORAGE_KEY='mikiContentV2';
  const deepMerge=(a,b)=>{const out=Array.isArray(a)?[...a]:{...(a||{})}; if(!b||typeof b!=='object')return out; for(const k of Object.keys(b)){if(b[k]&&typeof b[k]==='object'&&!Array.isArray(b[k])) out[k]=deepMerge(out[k],b[k]); else out[k]=b[k];} return out;};
  const fixVietnamese=s=>String(s)
    .replace(/\bdep\b/gi, m=>m[0]===m[0].toUpperCase()?'Đẹp':'đẹp')
    .replace(/\bdẹp\b/gi, m=>m[0]===m[0].toUpperCase()?'Đẹp':'đẹp');
  const sanitize=o=>{
    if(Array.isArray(o)) return o.map(sanitize);
    if(o&&typeof o==='object') return Object.fromEntries(Object.entries(o).map(([k,v])=>[k,sanitize(v)]));
    return typeof o==='string'?fixVietnamese(o):o;
  };
  const get=(obj,path)=>path.split('.').reduce((o,k)=>o==null?undefined:o[k],obj);
  let local={}; try{local=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}catch(e){}
  const data=sanitize(deepMerge(window.MIKI_CONTENT||{},local));
  window.MIKI_ACTIVE_CONTENT=data;
  function apply(){
    document.querySelectorAll('[data-miki]').forEach(el=>{
      const key=el.dataset.miki, value=get(data,key); if(value===undefined||value===null)return;
      const attr=el.dataset.mikiAttr;
      if(attr){
        const fallback=el.getAttribute(attr);
        if(attr==='src' && fallback && String(value)!==fallback){
          el.addEventListener('error',()=>{
            if(el.getAttribute(attr)!==fallback) el.setAttribute(attr,fallback);
          },{once:true});
        }
        el.setAttribute(attr,value);
        return;
      }
      if(el.dataset.mikiHtml==='1') el.innerHTML=value; else el.textContent=value;
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply); else apply();
})();

