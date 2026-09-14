(function(){
  const STORAGE_KEY='mikiContentV2';
  const clone=o=>JSON.parse(JSON.stringify(o||{}));
  const fixVietnamese=s=>String(s)
    .replace(/\bdep\b/gi, m=>m[0]===m[0].toUpperCase()?'Đẹp':'đẹp')
    .replace(/\bdẹp\b/gi, m=>m[0]===m[0].toUpperCase()?'Đẹp':'đẹp');
  const sanitize=o=>{
    if(Array.isArray(o)) return o.map(sanitize);
    if(o&&typeof o==='object') return Object.fromEntries(Object.entries(o).map(([k,v])=>[k,sanitize(v)]));
    return typeof o==='string'?fixVietnamese(o):o;
  };
  const defaults=sanitize(clone(window.MIKI_CONTENT||{}));
  let draft=clone(defaults);
  try{ const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null'); if(saved) draft=merge(draft,saved); }catch(e){}
  function merge(a,b){const o=clone(a); if(!b||typeof b!=='object') return o; Object.keys(b).forEach(k=>{o[k]=(b[k]&&typeof b[k]==='object'&&!Array.isArray(b[k]))?merge(o[k]||{},b[k]):b[k]}); return o;}
  const get=(o,p)=>p.split('.').reduce((x,k)=>x==null?undefined:x[k],o);
  const set=(o,p,v)=>{const parts=p.split('.'); let x=o; parts.slice(0,-1).forEach(k=>x=x[k]||(x[k]={})); x[parts.at(-1)]=v;};
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  const pretty={
    'prices.laserWomen':'Triệt lông nữ','prices.laserMen':'Triệt lông nam','prices.waxing':'Waxing','prices.skin':'Chăm sóc da & mụn'
  };
  const labelize=s=>s.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())
    .replace('Mep Cam','Mép & cằm').replace('Nach Nu','Nách nữ').replace('Quanh Quang Vu','Quanh quầng vú').replace('Duong Bung','Đường bụng')
    .replace('Lung Duoi Nu','Lưng dưới nữ').replace('Bikini Co Ban','Bikini cơ bản').replace('Cang Tay Nu','Cẳng tay nữ').replace('Mong','Mông').replace('Cang Chan Gom Goi','Cẳng chân (gồm gối)').replace('Dui','Đùi')
    .replace('Full Tay Nu','Full tay nữ').replace('Full Chan','Full chân').replace('Ria Mep','Ria mép').replace('Rau','Râu').replace('Nach Nam','Nách nam').replace('Lung Duoi Nam','Lưng dưới nam').replace('Cang Tay Nam','Cẳng tay nam').replace('Nguc','Ngực').replace('Bung','Bụng').replace('Full Tay Nam','Full tay nam').replace('Lung','Lưng').replace('Mep Cam','Mép / Cằm').replace('Long May Tao Dang','Lông mày (tạo dáng)').replace('Tay','Tay').replace('Nua Chan','Nửa chân').replace('Bikini Nu','Bikini nữ').replace('Vung Dac Biet','Vùng đặc biệt').replace('Basic Facial','Basic Facial').replace('Deep Cleansing Facial','Deep Cleansing Facial').replace('Anti Aging Facial','Anti-Aging Facial').replace('Acne Treatment','Acne Treatment').replace('Clear Up Back Acne','Mụn lưng').replace('Brighten Underarm Area','Chăm sóc sáng vùng nách').replace('Cold Algae Peel','Cold Algae Peel').replace('Skin Brightening','Nano-infusion brightening').replace('Package','Gói / Package');

  const general=[
    ['announcement','Thanh thông báo','text'],['hero.main','Tiêu đề chính','text'],['hero.accent','Dòng nhấn','text'],['hero.slogan','Câu định hướng thương hiệu','text'],['hero.lead','Giới thiệu ngắn','textarea'],['hero.floatingTitle','Tiêu đề thẻ không gian','text'],['hero.floatingText','Mô tả thẻ không gian','textarea'],['contact.address','Địa chỉ','text'],['contact.phoneDisplay','Số điện thoại hiển thị','text']
  ];
  const services=[['laser','Triệt lông'],['waxing','Waxing'],['skin','Chăm sóc da'],['acne','Hỗ trợ da mụn'],['body','Body Care'],['training','Đào tạo học viên']];
  const images=[
    ['images.heroSkin','Hero · chăm sóc da'],['images.storefront','Hero · mặt tiền'],['images.room','Hero · phòng dịch vụ'],['images.serviceLaser','Dịch vụ · triệt lông'],['images.serviceSkin','Dịch vụ · chăm sóc da'],['images.serviceAcne','Dịch vụ · da mụn'],['images.beforeAfter','Before / After'],['images.academyTeam','Academy · đội ngũ'],['images.academyPractice','Academy · thực hành'],['images.priceWomen','Bảng giá · triệt lông nữ'],['images.priceMen','Bảng giá · triệt lông nam'],['images.priceWaxing','Bảng giá · waxing'],['images.priceSkin','Bảng giá · chăm sóc da']
  ];

  function fieldHtml(path,label,type='text',wide=false){const v=get(draft,path)||''; return `<div class="field-card ${wide?'wide':''}"><label>${esc(label)}</label>${type==='textarea'?`<textarea data-field="${path}">${esc(v)}</textarea>`:`<input data-field="${path}" value="${esc(v)}">`}</div>`}
  document.querySelector('#generalFields').innerHTML=general.map(([p,l,t],i)=>fieldHtml(p,l,t,t==='textarea')).join('');
  document.querySelector('#serviceFields').innerHTML=services.map(([k,l])=>`<article class="service-edit"><div class="title-col"><label>${l} · Tên</label><input data-field="services.${k}.title" value="${esc(get(draft,`services.${k}.title`)||'')}"></div><div><label>Mô tả</label><textarea data-field="services.${k}.text">${esc(get(draft,`services.${k}.text`)||'')}</textarea></div></article>`).join('');
  document.querySelector('#academyFields').innerHTML=fieldHtml('academy.heading','Tiêu đề Miki Skin Spa Academy','text',true)+fieldHtml('academy.text','Mô tả Miki Skin Spa Academy','textarea',true);
  document.querySelector('#reviewFields').innerHTML=[1,2,3].map(i=>`<article class="review-edit"><div class="title-col"><label>Thẻ ${i} · Tiêu đề</label><input data-field="reviews.r${i}.title" value="${esc(get(draft,`reviews.r${i}.title`)||'')}"></div><div><label>Nội dung</label><textarea data-field="reviews.r${i}.text">${esc(get(draft,`reviews.r${i}.text`)||'')}</textarea></div></article>`).join('');

  const groups=['prices.laserWomen','prices.laserMen','prices.waxing','prices.skin'];
  document.querySelector('#priceGroupTabs').innerHTML=groups.map((g,i)=>`<button class="${i===0?'active':''}" data-price-tab="${g}">${pretty[g]}</button>`).join('');
  document.querySelector('#priceFields').innerHTML=groups.map((g,i)=>{const obj=get(draft,g)||{}; return `<section class="price-group ${i===0?'active':''}" data-price-group="${g}"><div class="price-list">${Object.keys(obj).map(k=>`<div class="price-input"><label>${esc(labelize(k))}</label><input data-field="${g}.${k}" value="${esc(obj[k])}"></div>`).join('')}</div></section>`}).join('');

  const imageRoot=(path)=>path.startsWith('assets/')?path:path;
  document.querySelector('#imageFields').innerHTML=images.map(([p,l])=>{const src=get(draft,p)||''; return `<article class="image-card"><img data-preview-for="${p}" src="${esc(src)}" alt="${esc(l)}"><div class="image-body"><strong>${esc(l)}</strong><input data-field="${p}" value="${esc(src)}" placeholder="assets/..."></div></article>`}).join('');

  document.querySelector('#landingFields').innerHTML=
    fieldHtml('landing.topbar','Thanh thông tin đầu trang','text',true)+
    fieldHtml('landing.heroHeading','Tiêu đề landing (có thể dùng <br> và <em>)','textarea',true)+
    fieldHtml('landing.heroText','Mô tả landing','textarea',true)+
    services.slice(0,4).map(([k,l])=>fieldHtml(`landing.services.${k}.text`,`${l} · mô tả`,'textarea',true)).join('');

  function syncDraft(){document.querySelectorAll('[data-field]').forEach(el=>set(draft,el.dataset.field,fixVietnamese(el.value)));draft=sanitize(draft);}
  function toast(msg){const t=document.querySelector('#toast'); t.textContent=msg;t.hidden=false;clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.hidden=true,2600)}
  function saveDraft(){syncDraft(); localStorage.setItem(STORAGE_KEY,JSON.stringify(draft)); document.querySelector('#previewFrame').contentWindow?.location.reload(); document.querySelector('#statusText').textContent='Đã lưu bản nháp'; toast('Đã lưu. Khung xem trước đang cập nhật.');}
  document.querySelector('#saveDraft').onclick=saveDraft; document.querySelector('#saveDraft2').onclick=saveDraft;
  document.querySelector('#reloadPreview').onclick=()=>document.querySelector('#previewFrame').contentWindow?.location.reload();

  document.addEventListener('input',e=>{if(!e.target.matches('[data-field]'))return;set(draft,e.target.dataset.field,e.target.value);const img=document.querySelector(`[data-preview-for="${CSS.escape(e.target.dataset.field)}"]`);if(img) img.src=e.target.value;document.querySelector('#statusText').textContent='Có thay đổi chưa lưu';});
  document.querySelectorAll('[data-price-tab]').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('[data-price-tab]').forEach(x=>x.classList.toggle('active',x===btn));document.querySelectorAll('[data-price-group]').forEach(x=>x.classList.toggle('active',x.dataset.priceGroup===btn.dataset.priceTab));});
  document.querySelectorAll('.nav-item').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x===btn));document.querySelectorAll('.panel').forEach(x=>x.classList.toggle('active',x.dataset.panel===btn.dataset.tab));});

  function dataJs(){syncDraft();return 'window.MIKI_CONTENT = '+JSON.stringify(draft,null,2)+';\n';}
  function download(name,text,type){const b=new Blob([text],{type});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500)}
  document.querySelector('#downloadContent').onclick=()=>{download('content-data.js',dataJs(),'text/javascript');toast('Đã tạo file content-data.js');};
  document.querySelector('#exportJson').onclick=()=>{syncDraft();download('miki-content-backup.json',JSON.stringify(draft,null,2),'application/json');toast('Đã xuất bản sao lưu JSON');};
  document.querySelector('#importJson').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{draft=merge(defaults,JSON.parse(await f.text()));localStorage.setItem(STORAGE_KEY,JSON.stringify(draft));location.reload();}catch(err){toast('File JSON không hợp lệ.')}};
  document.querySelector('#resetDraft').onclick=()=>{if(!confirm('Khôi phục nội dung trong file content-data.js và xóa bản nháp?'))return;localStorage.removeItem(STORAGE_KEY);location.reload();};
  document.querySelector('#saveToFile').onclick=async()=>{syncDraft(); if(!window.showSaveFilePicker){toast('Trình duyệt chưa hỗ trợ. Hãy dùng Chrome/Edge hoặc tải file cập nhật.');return;} try{const h=await showSaveFilePicker({suggestedName:'content-data.js',types:[{description:'JavaScript',accept:{'text/javascript':['.js']}}]});const w=await h.createWritable();await w.write(dataJs());await w.close();localStorage.setItem(STORAGE_KEY,JSON.stringify(draft));toast('Đã lưu trực tiếp content-data.js');}catch(e){if(e.name!=='AbortError')toast('Không thể lưu file.')}};
})();

