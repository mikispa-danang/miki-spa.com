(() => {
 const dialog=document.getElementById('laserVideoDialog'), video=document.getElementById('laserServiceVideo');
 if(!dialog||!video)return;
 const copy={vi:['Xem video triệt lông','Xem một buổi triệt lông tại Miki','Mở video để tìm hiểu thao tác và không gian','Video triệt lông tại Miki','Video chưa phát được. Vui lòng thử lại.','Đóng video'],en:['Watch hair removal video','Explore a session at Miki','Watch the treatment and discover the space','Hair removal at Miki','Video unavailable. Please try again.','Close video'],ko:['제모 영상 보기','미키의 제모 시술 살펴보기','영상으로 시술과 공간을 확인하세요','미키 제모 영상','영상을 재생할 수 없습니다. 다시 시도해 주세요.','영상 닫기'],zh:['观看脱毛视频','了解Miki的脱毛护理','观看护理过程和空间','Miki脱毛视频','视频暂时无法播放，请重试。','关闭视频'],ru:['Смотреть видео эпиляции','Познакомьтесь с процедурой в Miki','Посмотрите процедуру и пространство','Эпиляция в Miki','Видео недоступно. Попробуйте снова.','Закрыть видео']};
 const sources=['assets/laser/8258328388754.mp4','assets/laser/8258318796120.mp4'];
 const labels={vi:['Chọn video','Video','2 video · Chọn để xem'],en:['Choose a video','Video','2 videos · Choose to watch'],ko:['영상 선택','영상','영상 2개 · 선택하여 보기'],zh:['选择视频','视频','2个视频 · 点击观看'],ru:['Выберите видео','Видео','2 видео · Выберите для просмотра']};
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
