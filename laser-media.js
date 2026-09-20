(() => {
 const dialog=document.getElementById('laserVideoDialog'), video=document.getElementById('laserServiceVideo');
 if(!dialog||!video)return;
 const copy={vi:['Xem video triệt lông','Xem một buổi triệt lông tại Miki','Mở video để tìm hiểu thao tác và không gian','Video triệt lông tại Miki','Video chưa phát được. Vui lòng thử lại.','Đóng video'],en:['Watch hair removal video','Explore a session at Miki','Watch the treatment and discover the space','Hair removal at Miki','Video unavailable. Please try again.','Close video'],ko:['제모 영상 보기','미키의 제모 시술 살펴보기','영상으로 시술과 공간을 확인하세요','미키 제모 영상','영상을 재생할 수 없습니다. 다시 시도해 주세요.','영상 닫기'],zh:['观看脱毛视频','了解Miki的脱毛护理','观看护理过程和空间','Miki脱毛视频','视频暂时无法播放，请重试。','关闭视频'],ru:['Смотреть видео эпиляции','Познакомьтесь с процедурой в Miki','Посмотрите процедуру и пространство','Эпиляция в Miki','Видео недоступно. Попробуйте снова.','Закрыть видео'],th:['ดูวิดีโอเลเซอร์กำจัดขน','ดูขั้นตอนที่ Miki','ชมขั้นตอนและบรรยากาศ','เลเซอร์กำจัดขนที่ Miki','ไม่สามารถเล่นวิดีโอได้ กรุณาลองอีกครั้ง','ปิดวิดีโอ']};
 const sources=['assets/laser/8258328388754.mp4','assets/laser/8258318796120.mp4'];
 const labels={vi:['Chọn video','Video','2 video · Chọn để xem'],en:['Choose a video','Video','2 videos · Choose to watch'],ko:['영상 선택','영상','영상 2개 · 선택하여 보기'],zh:['选择视频','视频','2个视频 · 点击观看'],ru:['Выберите видео','Видео','2 видео · Выберите для просмотра'],th:['เลือกวิดีโอ','วิดีโอ','2 วิดีโอ · เลือกเพื่อดู']};
 const playlist=document.createElement('div');playlist.className='laser-playlist';playlist.setAttribute('role','group');
 let selected=0;
 function selectVideo(index){selected=index;video.pause();video.removeAttribute('poster');dialog.querySelector('.laser-video-error').hidden=true;video.src=sources[index];video.load();playlist.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));video.play().catch(()=>{});}
 sources.forEach((src,index)=>{const button=document.createElement('button');button.type='button';button.dataset.laserIndex=String(index);button.setAttribute('aria-pressed',String(index===selected));button.addEventListener('click',()=>selectVideo(index));playlist.appendChild(button);});
 video.after(playlist);
 function translate(){let lang=window.MIKI_LANGUAGE||document.documentElement.lang||'vi';let t=copy[lang]||copy.vi;['watch','discover','detail','title','error'].forEach((key,i)=>document.querySelectorAll('[data-laser-copy="'+key+'"]').forEach(el=>el.textContent=t[i]));dialog.querySelector('[data-laser-close]').setAttribute('aria-label',t[5]);const l=labels[lang]||labels.vi;playlist.setAttribute('aria-label',l[0]);playlist.querySelectorAll('button').forEach((button,i)=>button.textContent=l[1]+' '+(i+1));document.querySelectorAll('[data-laser-copy=detail]').forEach(el=>el.textContent=l[2]);}
 let opener,previousOverflow;
 document.querySelectorAll('[data-laser-open]').forEach(button=>button.addEventListener('click',()=>{opener=button;translate();previousOverflow=document.body.style.overflow;dialog.showModal();document.body.style.overflow='hidden';if(!video.getAttribute('src'))selectVideo(selected);else video.play().catch(()=>{});}));
 dialog.querySelector('[data-laser-close]').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{video.pause();document.body.style.overflow=previousOverflow||'';opener?.focus();});
 video.addEventListener('error',()=>{dialog.querySelector('.laser-video-error').hidden=false;});
 new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});translate();
})();

/* Full price-list gallery: opens all price sheets in one horizontal swipe viewer. */
(() => {
 const triggers=[...document.querySelectorAll('.pricing-source-card')];
 if(!triggers.length||document.getElementById('miki-price-gallery'))return;
 const items=[
  {src:'assets/optimized/laser-women-pricing.webp',title:'Triệt lông Nữ / Women'},
  {src:'assets/optimized/laser-men-pricing.webp',title:'Triệt lông Nam / Men'},
  {src:'assets/optimized/waxing-pricing.webp',title:'Waxing'},
  {src:'assets/optimized/skin-pricing.webp',title:'Chăm sóc da & Điều trị mụn'}
 ];
 const style=document.createElement('style');
 style.id='miki-price-gallery-style';
 style.textContent=`
  .price-gallery-overlay{position:fixed;inset:0;z-index:10050;display:none;align-items:center;justify-content:center;padding:18px;background:rgba(27,20,16,.78);backdrop-filter:blur(9px)}
  .price-gallery-overlay.is-open{display:flex}
  .price-gallery-shell{position:relative;width:min(1080px,96vw);height:min(930px,94dvh);display:grid;grid-template-rows:auto minmax(0,1fr) auto;overflow:hidden;border:1px solid rgba(184,150,103,.28);border-radius:28px;background:#fbf6ef;box-shadow:0 28px 80px rgba(20,13,8,.34)}
  .price-gallery-head{min-height:70px;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 22px;border-bottom:1px solid rgba(132,95,62,.14);background:rgba(255,252,247,.96)}
  .price-gallery-head div{min-width:0}.price-gallery-head small{display:block;margin-bottom:3px;color:#a2774e;font:800 10px/1.2 Manrope,sans-serif;letter-spacing:.16em}.price-gallery-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#35271f;font:600 20px/1.2 Manrope,sans-serif}
  .price-gallery-close{flex:0 0 42px;width:42px;height:42px;border:1px solid rgba(132,95,62,.22);border-radius:50%;background:#fff;color:#3c2b22;font-size:26px;line-height:1;cursor:pointer}
  .price-gallery-stage{position:relative;min-height:0;overflow:hidden;background:linear-gradient(180deg,#f3eadf,#fffaf4)}
  .price-gallery-track{height:100%;display:flex;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scroll-behavior:smooth;overscroll-behavior-x:contain;scrollbar-width:none;touch-action:pan-x pan-y}
  .price-gallery-track::-webkit-scrollbar{display:none}
  .price-gallery-slide{flex:0 0 100%;width:100%;height:100%;scroll-snap-align:center;scroll-snap-stop:always;display:flex;align-items:center;justify-content:center;padding:18px 74px}
  .price-gallery-slide a{height:100%;max-width:100%;display:flex;align-items:center;justify-content:center;text-decoration:none}
  .price-gallery-slide img{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:16px;box-shadow:0 14px 36px rgba(59,38,24,.12);background:#fff}
  .price-gallery-arrow{position:absolute;top:50%;z-index:3;transform:translateY(-50%);width:48px;height:48px;border:1px solid rgba(132,95,62,.25);border-radius:50%;background:rgba(255,252,247,.94);color:#795333;font-size:25px;box-shadow:0 8px 22px rgba(45,28,17,.12);cursor:pointer}.price-gallery-prev{left:14px}.price-gallery-next{right:14px}
  .price-gallery-foot{min-height:66px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;padding:10px 22px;border-top:1px solid rgba(132,95,62,.14);background:#fffaf5}
  .price-gallery-hint{color:#73665d;font:500 12px/1.3 Manrope,sans-serif}.price-gallery-dots{display:flex;align-items:center;justify-content:center;gap:8px}.price-gallery-dot{width:10px;height:10px;padding:0;border:0;border-radius:50%;background:#d9cab9;cursor:pointer}.price-gallery-dot.is-active{width:24px;border-radius:999px;background:#9a7148}.price-gallery-counter{justify-self:end;color:#765536;font:700 12px/1 Manrope,sans-serif}
  @media(max-width:640px){.price-gallery-overlay{padding:8px}.price-gallery-shell{width:100%;height:94dvh;border-radius:22px}.price-gallery-head{min-height:60px;padding:10px 14px}.price-gallery-title{font-size:16px}.price-gallery-close{width:38px;height:38px;flex-basis:38px}.price-gallery-slide{padding:10px 12px}.price-gallery-arrow{width:40px;height:40px;top:auto;bottom:10px;transform:none;background:rgba(255,252,247,.96)}.price-gallery-prev{left:12px}.price-gallery-next{right:12px}.price-gallery-foot{min-height:62px;padding:8px 58px;grid-template-columns:1fr auto}.price-gallery-hint{display:none}.price-gallery-counter{justify-self:end}}
 `;
 document.head.appendChild(style);
 const overlay=document.createElement('div');
 overlay.id='miki-price-gallery';
 overlay.className='price-gallery-overlay';
 overlay.setAttribute('aria-hidden','true');
 overlay.innerHTML=`<div class="price-gallery-shell" role="dialog" aria-modal="true" aria-label="Bảng giá đầy đủ Miki Skin Spa">
   <div class="price-gallery-head"><div><small>MIKI SKIN SPA · BẢNG GIÁ ĐẦY ĐỦ</small><strong class="price-gallery-title"></strong></div><button class="price-gallery-close" type="button" aria-label="Đóng bảng giá">×</button></div>
   <div class="price-gallery-stage"><div class="price-gallery-track">${items.map((item,i)=>`<div class="price-gallery-slide" data-index="${i}"><a href="${item.src}" target="_blank" rel="noopener" aria-label="Mở ${item.title} kích thước đầy đủ"><img src="${item.src}" alt="Bảng giá ${item.title} Miki Skin Spa" loading="${i===0?'eager':'lazy'}" decoding="async"></a></div>`).join('')}</div><button class="price-gallery-arrow price-gallery-prev" type="button" aria-label="Bảng giá trước">‹</button><button class="price-gallery-arrow price-gallery-next" type="button" aria-label="Bảng giá tiếp theo">›</button></div>
   <div class="price-gallery-foot"><span class="price-gallery-hint">← Vuốt ngang hoặc bấm mũi tên để xem bảng giá khác →</span><div class="price-gallery-dots">${items.map((_,i)=>`<button class="price-gallery-dot${i===0?' is-active':''}" type="button" data-index="${i}" aria-label="Xem bảng giá ${i+1}"></button>`).join('')}</div><span class="price-gallery-counter">1 / ${items.length}</span></div>
  </div>`;
 document.body.appendChild(overlay);
 const track=overlay.querySelector('.price-gallery-track'), title=overlay.querySelector('.price-gallery-title'), counter=overlay.querySelector('.price-gallery-counter'), dots=[...overlay.querySelectorAll('.price-gallery-dot')];
 let current=0,opener=null,previousOverflow='',scrollTimer;
 function update(){title.textContent=items[current].title;counter.textContent=`${current+1} / ${items.length}`;dots.forEach((dot,i)=>dot.classList.toggle('is-active',i===current));}
 function go(index,behavior='smooth'){current=(index+items.length)%items.length;track.scrollTo({left:current*track.clientWidth,behavior});update();}
 function openGallery(index,trigger){opener=trigger;previousOverflow=document.body.style.overflow;overlay.classList.add('is-open');overlay.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';requestAnimationFrame(()=>{go(index,'auto');overlay.querySelector('.price-gallery-close').focus();});}
 function closeGallery(){overlay.classList.remove('is-open');overlay.setAttribute('aria-hidden','true');document.body.style.overflow=previousOverflow||'';opener?.focus();}
 triggers.forEach(trigger=>trigger.addEventListener('click',event=>{event.preventDefault();const href=trigger.getAttribute('href')||'';let index=items.findIndex(item=>href.includes(item.src.split('/').pop()));if(index<0)index=0;openGallery(index,trigger);}));
 overlay.querySelector('.price-gallery-close').addEventListener('click',closeGallery);
 overlay.querySelector('.price-gallery-prev').addEventListener('click',()=>go(current-1));
 overlay.querySelector('.price-gallery-next').addEventListener('click',()=>go(current+1));
 dots.forEach(dot=>dot.addEventListener('click',()=>go(Number(dot.dataset.index))));
 track.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{const next=Math.max(0,Math.min(items.length-1,Math.round(track.scrollLeft/Math.max(1,track.clientWidth))));if(next!==current){current=next;update();}},70);},{passive:true});
 overlay.addEventListener('click',event=>{if(event.target===overlay)closeGallery();});
 window.addEventListener('keydown',event=>{if(!overlay.classList.contains('is-open'))return;if(event.key==='Escape')closeGallery();if(event.key==='ArrowLeft')go(current-1);if(event.key==='ArrowRight')go(current+1);});
 window.addEventListener('resize',()=>{if(overlay.classList.contains('is-open'))go(current,'auto');});
 update();
})();
