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

/* Combo savings banner + dedicated combo booking modal. */
(() => {
 function setupComboOffer(){
  const note=document.querySelector('.catalog-benefit-note');
  if(!note||document.getElementById('mikiComboModal'))return;

  const heading=note.querySelector('strong');
  if(heading)heading.textContent='Combo tiết kiệm đến 20%';
  note.classList.add('miki-combo-banner');

  const oldPoints=note.querySelector('.miki-combo-points');
  if(oldPoints)oldPoints.remove();

  const content=document.createElement('div');
  content.className='miki-combo-banner-content';
  content.innerHTML=`
   <div class="miki-combo-banner-main">
    <div class="miki-combo-badge">ƯU ĐÃI COMBO · ĐẾN 20%</div>
    <div class="miki-combo-options" aria-label="Gói combo ưu đãi">
     <button class="miki-combo-choice" type="button" data-combo-open="Combo 1">
      <span class="miki-combo-choice-icon">01</span>
      <span><strong>Combo 1</strong><small>Chọn nhiều vùng trong cùng buổi</small></span>
      <span class="miki-combo-choice-arrow">→</span>
     </button>
     <button class="miki-combo-choice" type="button" data-combo-open="Combo 2">
      <span class="miki-combo-choice-icon">02</span>
      <span><strong>Combo 2</strong><small>Gói liệu trình theo nhu cầu</small></span>
      <span class="miki-combo-choice-arrow">→</span>
     </button>
    </div>
    <button class="miki-combo-cta" type="button" data-combo-open="Combo 1"><span>✦</span> ĐẶT COMBO ƯU ĐÃI <b>→</b></button>
    <div class="miki-combo-benefits"><span>◆ Tiết kiệm hơn</span><span>◇ Tư vấn cá nhân hóa</span><span>♡ Xác nhận lịch nhanh</span></div>
   </div>
   <div class="miki-combo-visual" aria-hidden="true"><img src="assets/optimized/miki-promo-20.webp" alt="" loading="lazy" decoding="async"><span>COMBO<br><strong>-20%</strong></span></div>`;
  note.appendChild(content);

  const style=document.createElement('style');
  style.id='miki-combo-offer-style';
  style.textContent=`
   .catalog-benefit-note.miki-combo-banner{position:relative!important;overflow:hidden!important;isolation:isolate!important;margin-top:18px!important;padding:clamp(24px,3vw,38px)!important;border:1px solid rgba(149,102,62,.24)!important;border-radius:28px!important;background:linear-gradient(135deg,#fffaf4 0%,#f4e4d2 54%,#ead0b7 100%)!important;box-shadow:0 18px 48px rgba(94,59,33,.12)!important}
   .catalog-benefit-note.miki-combo-banner:before{content:"";position:absolute;inset:-25% auto auto -8%;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.86),rgba(255,255,255,0) 70%);z-index:-1;pointer-events:none}
   .catalog-benefit-note.miki-combo-banner>div:first-child{position:relative;z-index:2;max-width:720px}.catalog-benefit-note.miki-combo-banner>div:first-child>span{display:inline-block!important;color:#9b714d!important;font-weight:800!important;letter-spacing:.18em!important}.catalog-benefit-note.miki-combo-banner>div:first-child>strong{display:block!important;margin-top:8px!important;color:#2e211a!important;font-size:clamp(32px,4.2vw,58px)!important;line-height:1.02!important;letter-spacing:-.035em!important}
   .catalog-benefit-note.miki-combo-banner>p{position:relative;z-index:2;max-width:680px!important;margin:16px 0 0!important;color:#66584e!important;font-size:clamp(15px,1.5vw,19px)!important;line-height:1.65!important}
   .miki-combo-banner-content{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(240px,.92fr);gap:24px;align-items:stretch;margin-top:24px}.miki-combo-banner-main{display:flex;flex-direction:column;gap:14px}.miki-combo-badge{align-self:flex-start;padding:8px 12px;border:1px solid rgba(142,94,58,.22);border-radius:999px;background:rgba(255,255,255,.72);color:#8a5d3a;font:800 11px/1.2 Manrope,sans-serif;letter-spacing:.14em}.miki-combo-options{display:grid;gap:10px}.miki-combo-choice{width:100%;display:grid;grid-template-columns:48px minmax(0,1fr) 34px;align-items:center;gap:12px;padding:14px 16px;border:1px solid rgba(132,91,55,.18);border-radius:18px;background:rgba(255,255,255,.78);color:#33251d;text-align:left;box-shadow:0 8px 24px rgba(94,59,33,.06);cursor:pointer;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}.miki-combo-choice:hover{transform:translateY(-2px);border-color:rgba(132,91,55,.36);box-shadow:0 12px 28px rgba(94,59,33,.11)}.miki-combo-choice-icon{width:42px;height:42px;display:grid;place-items:center;border-radius:14px;background:#f0dfcd;color:#805638;font:800 12px/1 Manrope,sans-serif}.miki-combo-choice strong{display:block!important;margin:0!important;font:700 20px/1.15 Georgia,serif!important;color:#34241c!important}.miki-combo-choice small{display:block;margin-top:4px;color:#75665b;font:500 13px/1.35 Manrope,sans-serif}.miki-combo-choice-arrow{justify-self:end;color:#8b623f;font-size:22px}.miki-combo-cta{min-height:58px;display:flex;align-items:center;justify-content:center;gap:9px;margin-top:2px;padding:14px 20px;border:0;border-radius:999px;background:linear-gradient(135deg,#7a4d2e,#a9794f 58%,#6c4127);color:#fff;font:800 14px/1.1 Manrope,sans-serif;letter-spacing:.06em;box-shadow:0 14px 30px rgba(104,62,33,.22);cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.miki-combo-cta:hover{transform:translateY(-2px);box-shadow:0 17px 34px rgba(104,62,33,.28)}.miki-combo-cta b{font-size:20px}.miki-combo-benefits{display:flex;flex-wrap:wrap;gap:8px 14px;color:#705e51;font:600 11px/1.35 Manrope,sans-serif}.miki-combo-visual{position:relative;min-height:280px;overflow:hidden;border-radius:22px;background:linear-gradient(145deg,#f5dfca,#d9b48e);box-shadow:inset 0 0 0 1px rgba(255,255,255,.55),0 12px 30px rgba(92,57,31,.12)}.miki-combo-visual img{width:100%;height:100%;object-fit:cover;display:block}.miki-combo-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(45,28,17,.02),rgba(45,28,17,.16))}.miki-combo-visual>span{position:absolute;left:18px;bottom:16px;z-index:2;padding:10px 14px;border-radius:15px;background:rgba(255,250,244,.90);backdrop-filter:blur(8px);color:#775037;font:800 10px/1.1 Manrope,sans-serif;letter-spacing:.14em}.miki-combo-visual>span strong{display:block;margin-top:4px;color:#5f3925;font:800 30px/1 Manrope,sans-serif;letter-spacing:-.04em}
   .miki-combo-modal{position:fixed;inset:0;z-index:12050;display:none;align-items:center;justify-content:center;padding:18px;background:rgba(30,21,16,.72);backdrop-filter:blur(10px)}.miki-combo-modal.is-open{display:flex}.miki-combo-dialog{position:relative;width:min(680px,96vw);max-height:92dvh;overflow:auto;padding:28px;border:1px solid rgba(164,115,76,.25);border-radius:30px;background:linear-gradient(180deg,#fffaf4 0%,#f8eee3 100%);box-shadow:0 28px 90px rgba(20,13,8,.38)}.miki-combo-close{position:absolute;right:18px;top:18px;width:42px;height:42px;border:1px solid rgba(121,79,47,.2);border-radius:50%;background:#fff;color:#483226;font-size:26px;line-height:1;cursor:pointer}.miki-combo-modal-kicker{display:inline-flex;padding:7px 11px;border-radius:999px;background:#ead7c3;color:#80583c;font:800 10px/1.2 Manrope,sans-serif;letter-spacing:.16em}.miki-combo-dialog h3{margin:14px 52px 8px 0;color:#32231c;font:600 clamp(32px,5vw,46px)/1.05 Georgia,serif}.miki-combo-discount{display:inline-block;margin:4px 0 12px;padding:9px 15px;border-radius:14px;background:linear-gradient(135deg,#9b6c48,#6f442b);color:#fff;font:800 20px/1 Manrope,sans-serif;box-shadow:0 10px 20px rgba(93,53,29,.17)}.miki-combo-dialog>p{margin:0 0 20px;color:#6d6056;font:500 14px/1.55 Manrope,sans-serif}.miki-combo-form{display:grid;gap:13px}.miki-combo-radios{display:grid;grid-template-columns:1fr 1fr;gap:10px}.miki-combo-radio{position:relative}.miki-combo-radio input{position:absolute;opacity:0;pointer-events:none}.miki-combo-radio span{min-height:82px;display:flex;flex-direction:column;justify-content:center;padding:14px 15px;border:1px solid rgba(123,82,51,.18);border-radius:17px;background:#fff;color:#38271f;cursor:pointer}.miki-combo-radio span strong{font:700 18px/1.15 Georgia,serif}.miki-combo-radio span small{margin-top:5px;color:#76685d;font:500 12px/1.35 Manrope,sans-serif}.miki-combo-radio input:checked+span{border-color:#8b5d3b;background:#f3e4d5;box-shadow:0 0 0 2px rgba(139,93,59,.12)}.miki-combo-form label:not(.miki-combo-radio){display:grid;gap:6px;color:#4f4036;font:700 12px/1.2 Manrope,sans-serif}.miki-combo-form input,.miki-combo-form textarea{width:100%;min-height:50px;padding:12px 14px;border:1px solid rgba(124,84,54,.2);border-radius:14px;background:#fff;color:#2e241e;font:500 14px/1.3 Manrope,sans-serif;outline:none}.miki-combo-form textarea{min-height:86px;resize:vertical}.miki-combo-form input:focus,.miki-combo-form textarea:focus{border-color:#956946;box-shadow:0 0 0 3px rgba(149,105,70,.12)}.miki-combo-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.miki-combo-submit{min-height:58px;border:0;border-radius:999px;background:linear-gradient(135deg,#71462c,#a4754d,#70442a);color:#fff;font:800 15px/1.1 Manrope,sans-serif;letter-spacing:.04em;box-shadow:0 14px 30px rgba(95,57,31,.22);cursor:pointer}.miki-combo-form-note{text-align:center;color:#7b6c61;font:500 11px/1.45 Manrope,sans-serif}.miki-combo-status{min-height:18px;text-align:center;color:#725035;font:700 12px/1.35 Manrope,sans-serif}
   @media(max-width:760px){.miki-combo-banner-content{grid-template-columns:1fr}.miki-combo-visual{min-height:210px;order:-1}.miki-combo-dialog{padding:24px 18px 22px;border-radius:24px}.miki-combo-radios,.miki-combo-form-grid{grid-template-columns:1fr}.miki-combo-dialog h3{font-size:34px}.miki-combo-modal{align-items:flex-end;padding:8px}.miki-combo-dialog{width:100%;max-height:90dvh}.miki-combo-benefits{justify-content:center}.miki-combo-visual>span{left:12px;bottom:12px}}
   @media(max-width:620px){.catalog-benefit-note.miki-combo-banner{padding:20px!important;border-radius:24px!important}.catalog-benefit-note.miki-combo-banner>div:first-child>strong{font-size:34px!important}.miki-combo-visual{display:none}.miki-combo-choice{grid-template-columns:42px minmax(0,1fr) 28px;padding:13px}.miki-combo-choice-icon{width:38px;height:38px}.miki-combo-choice strong{font-size:18px!important}.miki-combo-cta{font-size:13px}}
  `;
  document.head.appendChild(style);

  const modal=document.createElement('div');
  modal.className='miki-combo-modal';
  modal.id='mikiComboModal';
  modal.setAttribute('aria-hidden','true');
  modal.innerHTML=`
   <section class="miki-combo-dialog" role="dialog" aria-modal="true" aria-labelledby="mikiComboTitle">
    <button class="miki-combo-close" type="button" aria-label="Đóng">×</button>
    <span class="miki-combo-modal-kicker">MIKI SKIN SPA · COMBO SAVINGS</span>
    <h3 id="mikiComboTitle">Đặt combo siêu ưu đãi</h3>
    <div class="miki-combo-discount">Ưu đãi đến 20%</div>
    <p>Chọn combo và để lại thông tin. Miki sẽ liên hệ tư vấn chi tiết, xác nhận dịch vụ và thời gian phù hợp cho bạn.</p>
    <form class="miki-combo-form" id="mikiComboForm">
     <div class="miki-combo-radios">
      <label class="miki-combo-radio"><input type="radio" name="combo" value="Combo 1" checked><span><strong>Combo 1</strong><small>Chọn nhiều vùng trong cùng buổi</small></span></label>
      <label class="miki-combo-radio"><input type="radio" name="combo" value="Combo 2"><span><strong>Combo 2</strong><small>Gói liệu trình theo nhu cầu</small></span></label>
     </div>
     <label>Họ và tên *<input name="name" autocomplete="name" placeholder="Nguyễn Minh Anh" required></label>
     <label>Số điện thoại / WhatsApp *<input name="phone" inputmode="tel" autocomplete="tel" placeholder="09xx xxx xxx / +84…" required></label>
     <div class="miki-combo-form-grid"><label>Ngày mong muốn<input name="date" type="date"></label><label>Giờ mong muốn<input name="time" type="time" min="08:30" max="21:30" step="1800"></label></div>
     <label>Ghi chú<textarea name="note" rows="3" placeholder="Ví dụ: muốn tư vấn vùng nách + bikini, lịch buổi tối…"></textarea></label>
     <button class="miki-combo-submit" type="submit">ĐẶT COMBO →</button>
     <div class="miki-combo-status" aria-live="polite"></div>
     <div class="miki-combo-form-note">🔒 Thông tin chỉ dùng để Miki tư vấn và xác nhận lịch hẹn.</div>
    </form>
   </section>`;
  document.body.appendChild(modal);

  const form=modal.querySelector('#mikiComboForm');
  const status=modal.querySelector('.miki-combo-status');
  let opener=null,previousOverflow='';
  const dateInput=form.elements.date;
  const now=new Date();
  const local=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
  dateInput.min=local;

  function openModal(combo,trigger){
   opener=trigger;previousOverflow=document.body.style.overflow;
   const radio=form.querySelector(`input[name="combo"][value="${combo}"]`);if(radio)radio.checked=true;
   status.textContent='';modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
   setTimeout(()=>modal.querySelector('.miki-combo-close').focus(),30);
  }
  function closeModal(){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=previousOverflow||'';opener?.focus();}
  document.querySelectorAll('[data-combo-open]').forEach(btn=>btn.addEventListener('click',()=>openModal(btn.dataset.comboOpen||'Combo 1',btn)));
  modal.querySelector('.miki-combo-close').addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open'))closeModal();});

  form.addEventListener('submit',e=>{
   e.preventDefault();
   const data=new FormData(form);const combo=data.get('combo')||'Combo 1';const name=(data.get('name')||'').trim();const phone=(data.get('phone')||'').trim();
   if(!name||!phone){form.reportValidity();return;}
   const date=data.get('date')||'Chưa chọn';const time=data.get('time')||'Chưa chọn';const noteText=(data.get('note')||'').trim()||'Không có';
   const message=`YÊU CẦU ĐẶT COMBO - MIKI SKIN SPA\n\n${combo}\nƯu đãi: đến 20%\nHọ tên: ${name}\nSĐT/WhatsApp: ${phone}\nNgày mong muốn: ${date}\nGiờ mong muốn: ${time}\nGhi chú: ${noteText}\n\nNhờ Miki tư vấn và xác nhận lịch giúp mình.`;
   status.textContent='Đang mở WhatsApp để gửi yêu cầu đặt combo…';
   window.open('https://wa.me/84935555170?text='+encodeURIComponent(message),'_blank','noopener');
   setTimeout(()=>{status.textContent='Yêu cầu đã sẵn sàng trên WhatsApp. Miki sẽ xác nhận lịch với bạn.';},500);
  });
 }

 if(document.readyState==='complete')setTimeout(setupComboOffer,60);
 else window.addEventListener('load',()=>setTimeout(setupComboOffer,60),{once:true});
})();