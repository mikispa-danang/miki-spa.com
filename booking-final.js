const LANGS=['vi','en','ko','zh','ru','th'];
const T={
vi:{
 title:'Đặt lịch | Miki Skin Spa',description:'Đặt lịch Miki Skin Spa tại 47 Cô Giang, Hải Châu, Đà Nẵng',
 visualTitle:'Đặt lịch cùng Miki',visualLead:'Nhanh chóng · Riêng tư · Chăm sóc tận tâm tại Miki Skin Spa.',
 stepLabels:['Dịch vụ','Ngày & giờ','Thông tin','Xác nhận'],
 kickers:['Bước 1 / 4','Bước 2 / 4','Bước 3 / 4','Bước 4 / 4'],
 titles:['Bạn muốn đặt dịch vụ nào?','Chọn ngày & giờ','Thông tin của bạn','Kiểm tra lịch hẹn'],
 leads:['Chọn dịch vụ phù hợp. Giá hiển thị là mức tham khảo và Miki sẽ xác nhận trước buổi hẹn.','Miki mở cửa 08:30–21:30 hằng ngày. Khung giờ được gửi dưới dạng yêu cầu và sẽ được Miki xác nhận.','Thông tin này giúp Miki liên hệ xác nhận lịch nhanh hơn.','Vui lòng kiểm tra lại trước khi gửi yêu cầu cho Miki.'],
 svc:{laser_underarm:['Triệt lông Laser – Nách nữ','Nách nữ · ICE Cooling'],laser_bikini:['Triệt lông Laser – Bikini cơ bản','Bikini cơ bản'],laser_lowerlegs:['Triệt lông Laser – Cẳng chân nữ','Cẳng chân gồm gối'],wax_underarm:['Waxing – Nách','Làm sạch nhanh theo vùng'],facial:['Basic Facial','Chăm sóc da cơ bản'],acne:['Acne Treatment','Chăm sóc & hỗ trợ da mụn']},
 dateLabel:'NGÀY HẸN',timeLabel:'GIỜ MONG MUỐN',nameLabel:'HỌ VÀ TÊN',phoneLabel:'SỐ ĐIỆN THOẠI',contactLabel:'KÊNH XÁC NHẬN',noteLabel:'GHI CHÚ (KHÔNG BẮT BUỘC)',namePh:'Tên của bạn',phonePh:'Ví dụ: 0935 555 170',notePh:'Vùng cần tư vấn, da nhạy cảm, khách quốc tế...',contacts:['Điện thoại','Zalo','WhatsApp','Telegram'],
 notice:'Lịch chỉ được xác nhận sau khi Miki phản hồi. Bấm “Gửi yêu cầu” sẽ mở WhatsApp với nội dung booking đã điền sẵn.',
 back:'Quay lại',continue:'Tiếp tục',send:'Gửi yêu cầu',doneTitle:'Yêu cầu đã sẵn sàng',doneLead:'Gửi tin nhắn để Miki xác nhận lịch hẹn của bạn.',wa:'Gửi booking qua WhatsApp →',map:'📍 Xem Miki Skin Spa trên Google Maps',
 hoursHead:'Giờ mở cửa',hoursValue:'08:30–21:30 · Hằng ngày',addressHead:'Địa chỉ',
 sum:['Dịch vụ','Giá tham khảo','Ngày','Giờ','Khách hàng','Điện thoại'],
 alerts:['Vui lòng chọn dịch vụ.','Vui lòng chọn ngày và giờ.','Vui lòng nhập tên và số điện thoại.'],
 msg:{head:'Miki Skin Spa - Yêu cầu đặt lịch',guest:'Khách',phone:'SĐT',service:'Dịch vụ',price:'Giá tham khảo',date:'Ngày',time:'Giờ',contact:'Kênh xác nhận',note:'Ghi chú'}
},
en:{
 title:'Book Appointment | Miki Skin Spa',description:'Book an appointment at Miki Skin Spa, 47 Co Giang, Hai Chau, Da Nang',
 visualTitle:'Book with Miki',visualLead:'Quick · Private · Thoughtful care at Miki Skin Spa.',
 stepLabels:['Service','Date & time','Details','Confirm'],kickers:['Step 1 / 4','Step 2 / 4','Step 3 / 4','Step 4 / 4'],
 titles:['Which service would you like?','Choose date & time','Your details','Review your appointment'],
 leads:['Choose a service. Prices shown are references and Miki will confirm before your appointment.','Open daily 08:30–21:30. Your preferred time is a request and will be confirmed by Miki.','This helps Miki confirm your appointment quickly.','Please check the details before sending your request.'],
 svc:{laser_underarm:['Laser Hair Removal – Female underarm','Female underarm · ICE Cooling'],laser_bikini:['Laser Hair Removal – Basic bikini','Basic bikini'],laser_lowerlegs:['Laser Hair Removal – Lower legs','Lower legs including knees'],wax_underarm:['Waxing – Underarm','Quick area treatment'],facial:['Basic Facial','Basic facial care'],acne:['Acne Treatment','Acne-prone skin care & support']},
 dateLabel:'APPOINTMENT DATE',timeLabel:'PREFERRED TIME',nameLabel:'FULL NAME',phoneLabel:'PHONE NUMBER',contactLabel:'CONFIRM VIA',noteLabel:'NOTE (OPTIONAL)',namePh:'Your name',phonePh:'Example: +84 935 555 170',notePh:'Treatment area, sensitive skin, international guest...',contacts:['Phone','Zalo','WhatsApp','Telegram'],
 notice:'Your appointment is confirmed only after Miki replies. “Send request” opens WhatsApp with your booking details pre-filled.',
 back:'Back',continue:'Continue',send:'Send request',doneTitle:'Your request is ready',doneLead:'Send the message so Miki can confirm your appointment.',wa:'Send booking via WhatsApp →',map:'📍 View Miki Skin Spa on Google Maps',
 hoursHead:'Opening hours',hoursValue:'08:30–21:30 · Daily',addressHead:'Address',
 sum:['Service','Reference price','Date','Time','Guest','Phone'],
 alerts:['Please choose a service.','Please choose a date and time.','Please enter your name and phone number.'],
 msg:{head:'Miki Skin Spa - Appointment request',guest:'Guest',phone:'Phone',service:'Service',price:'Reference price',date:'Date',time:'Time',contact:'Confirm via',note:'Note'}
},
ko:{
 title:'예약 | Miki Skin Spa',description:'다낭 Miki Skin Spa 예약 — 47 Co Giang, Hai Chau, Da Nang',
 visualTitle:'Miki 예약하기',visualLead:'빠르게 · 프라이빗하게 · 세심한 케어를 받아보세요.',
 stepLabels:['서비스','날짜 & 시간','정보','확인'],kickers:['1단계 / 4','2단계 / 4','3단계 / 4','4단계 / 4'],
 titles:['어떤 서비스를 예약하시겠어요?','날짜와 시간 선택','고객 정보','예약 내용 확인'],
 leads:['원하는 서비스를 선택하세요. 표시된 가격은 참고용이며 방문 전 Miki가 최종 확인해 드립니다.','매일 08:30–21:30 운영합니다. 선택한 시간은 요청 시간이며 Miki가 확인 후 확정합니다.','빠른 예약 확인을 위해 정보를 입력해 주세요.','요청을 보내기 전에 내용을 확인해 주세요.'],
 svc:{laser_underarm:['레이저 제모 – 여성 겨드랑이','여성 겨드랑이 · ICE Cooling'],laser_bikini:['레이저 제모 – 기본 비키니','기본 비키니'],laser_lowerlegs:['레이저 제모 – 여성 종아리','무릎 포함 종아리'],wax_underarm:['왁싱 – 겨드랑이','부위별 빠른 왁싱'],facial:['베이직 페이셜','기본 피부 관리'],acne:['여드름 케어','여드름 피부 관리 및 케어']},
 dateLabel:'예약 날짜',timeLabel:'희망 시간',nameLabel:'이름',phoneLabel:'전화번호',contactLabel:'확인 방법',noteLabel:'메모 (선택)',namePh:'이름을 입력하세요',phonePh:'예: +84 935 555 170',notePh:'원하는 부위, 민감성 피부 등...',contacts:['전화','Zalo','WhatsApp','Telegram'],
 notice:'Miki의 답변 후 예약이 최종 확정됩니다. “요청 보내기”를 누르면 예약 내용이 입력된 WhatsApp이 열립니다.',
 back:'이전',continue:'계속',send:'요청 보내기',doneTitle:'예약 요청이 준비되었습니다',doneLead:'메시지를 보내면 Miki가 예약을 확인해 드립니다.',wa:'WhatsApp으로 예약 보내기 →',map:'📍 Google Maps에서 Miki Skin Spa 보기',
 hoursHead:'운영 시간',hoursValue:'08:30–21:30 · 매일',addressHead:'주소',
 sum:['서비스','참고 가격','날짜','시간','고객','전화번호'],
 alerts:['서비스를 선택해 주세요.','날짜와 시간을 선택해 주세요.','이름과 전화번호를 입력해 주세요.'],
 msg:{head:'Miki Skin Spa - 예약 요청',guest:'고객',phone:'전화번호',service:'서비스',price:'참고 가격',date:'날짜',time:'시간',contact:'확인 방법',note:'메모'}
},
zh:{
 title:'预约 | Miki Skin Spa',description:'预约岘港 Miki Skin Spa，地址：47 Cô Giang, Hải Châu, Đà Nẵng',
 visualTitle:'预约 Miki',visualLead:'快捷 · 私密 · 贴心护理，尽在 Miki Skin Spa。',
 stepLabels:['服务','日期和时间','信息','确认'],kickers:['第 1 步 / 4','第 2 步 / 4','第 3 步 / 4','第 4 步 / 4'],
 titles:['您想预约哪项服务？','选择日期和时间','您的信息','确认预约信息'],
 leads:['请选择适合您的服务。所示价格仅供参考，Miki 会在到店前确认。','每日营业时间 08:30–21:30。您选择的时间为预约申请，需经 Miki 回复后确认。','填写这些信息有助于 Miki 更快确认预约。','发送申请前请再次核对信息。'],
 svc:{laser_underarm:['激光脱毛 – 女士腋下','女士腋下 · ICE Cooling'],laser_bikini:['激光脱毛 – 基础比基尼','基础比基尼'],laser_lowerlegs:['激光脱毛 – 女士小腿','小腿含膝盖'],wax_underarm:['蜜蜡脱毛 – 腋下','快速分区脱毛'],facial:['基础面部护理','基础皮肤护理'],acne:['痘肌护理','痘肌护理与支持']},
 dateLabel:'预约日期',timeLabel:'希望时间',nameLabel:'姓名',phoneLabel:'电话号码',contactLabel:'确认方式',noteLabel:'备注（可选）',namePh:'您的姓名',phonePh:'例如：+84 935 555 170',notePh:'护理部位、敏感肌、国际顾客等...',contacts:['电话','Zalo','WhatsApp','Telegram'],
 notice:'预约仅在 Miki 回复后确认。点击“发送申请”将打开 WhatsApp，并自动填入预约内容。',
 back:'返回',continue:'继续',send:'发送申请',doneTitle:'预约申请已准备好',doneLead:'发送消息后，Miki 将为您确认预约。',wa:'通过 WhatsApp 发送预约 →',map:'📍 在 Google Maps 查看 Miki Skin Spa',
 hoursHead:'营业时间',hoursValue:'08:30–21:30 · 每天',addressHead:'地址',
 sum:['服务','参考价格','日期','时间','顾客','电话'],
 alerts:['请选择服务。','请选择日期和时间。','请输入姓名和电话号码。'],
 msg:{head:'Miki Skin Spa - 预约申请',guest:'顾客',phone:'电话',service:'服务',price:'参考价格',date:'日期',time:'时间',contact:'确认方式',note:'备注'}
},
ru:{
 title:'Запись | Miki Skin Spa',description:'Запись в Miki Skin Spa, 47 Co Giang, Hai Chau, Da Nang',
 visualTitle:'Запись в Miki',visualLead:'Быстро · Приватно · Внимательный уход в Miki Skin Spa.',
 stepLabels:['Услуга','Дата и время','Данные','Подтверждение'],kickers:['Шаг 1 / 4','Шаг 2 / 4','Шаг 3 / 4','Шаг 4 / 4'],
 titles:['Какую услугу вы хотите выбрать?','Выберите дату и время','Ваши данные','Проверьте запись'],
 leads:['Выберите подходящую услугу. Цены указаны для ориентира и будут подтверждены Miki до визита.','Мы открыты ежедневно с 08:30 до 21:30. Выбранное время является запросом и будет подтверждено Miki.','Эти данные помогут Miki быстрее подтвердить запись.','Пожалуйста, проверьте данные перед отправкой запроса.'],
 svc:{laser_underarm:['Лазерная эпиляция – подмышки (жен.)','Подмышки · ICE Cooling'],laser_bikini:['Лазерная эпиляция – базовое бикини','Базовое бикини'],laser_lowerlegs:['Лазерная эпиляция – голени (жен.)','Голени включая колени'],wax_underarm:['Ваксинг – подмышки','Быстрая обработка зоны'],facial:['Базовый уход за лицом','Базовый уход за кожей'],acne:['Уход за проблемной кожей','Уход и поддержка кожи с акне']},
 dateLabel:'ДАТА ВИЗИТА',timeLabel:'ЖЕЛАЕМОЕ ВРЕМЯ',nameLabel:'ИМЯ',phoneLabel:'ТЕЛЕФОН',contactLabel:'СПОСОБ ПОДТВЕРЖДЕНИЯ',noteLabel:'КОММЕНТАРИЙ (НЕОБЯЗАТЕЛЬНО)',namePh:'Ваше имя',phonePh:'Например: +84 935 555 170',notePh:'Зона, чувствительная кожа, дополнительные пожелания...',contacts:['Телефон','Zalo','WhatsApp','Telegram'],
 notice:'Запись подтверждается только после ответа Miki. Кнопка «Отправить запрос» откроет WhatsApp с заполненными данными.',
 back:'Назад',continue:'Продолжить',send:'Отправить запрос',doneTitle:'Запрос готов',doneLead:'Отправьте сообщение, чтобы Miki подтвердил запись.',wa:'Отправить запись через WhatsApp →',map:'📍 Miki Skin Spa в Google Maps',
 hoursHead:'Часы работы',hoursValue:'08:30–21:30 · Ежедневно',addressHead:'Адрес',
 sum:['Услуга','Ориентировочная цена','Дата','Время','Клиент','Телефон'],
 alerts:['Выберите услугу.','Выберите дату и время.','Введите имя и номер телефона.'],
 msg:{head:'Miki Skin Spa - Запрос на запись',guest:'Клиент',phone:'Телефон',service:'Услуга',price:'Ориентировочная цена',date:'Дата',time:'Время',contact:'Подтверждение через',note:'Комментарий'}
},
th:{
 title:'จองคิว | Miki Skin Spa',description:'จองคิว Miki Skin Spa ที่ 47 Cô Giang, Hải Châu, Đà Nẵng',
 visualTitle:'จองคิวกับ Miki',visualLead:'รวดเร็ว · เป็นส่วนตัว · ดูแลอย่างใส่ใจที่ Miki Skin Spa',
 stepLabels:['บริการ','วันและเวลา','ข้อมูล','ยืนยัน'],kickers:['ขั้นตอน 1 / 4','ขั้นตอน 2 / 4','ขั้นตอน 3 / 4','ขั้นตอน 4 / 4'],
 titles:['ต้องการจองบริการใด?','เลือกวันและเวลา','ข้อมูลของคุณ','ตรวจสอบการจอง'],
 leads:['เลือกบริการที่เหมาะกับคุณ ราคาที่แสดงเป็นราคาโดยประมาณ และ Miki จะยืนยันก่อนวันนัด','เปิดทุกวัน 08:30–21:30 เวลาที่เลือกเป็นคำขอและจะได้รับการยืนยันจาก Miki','ข้อมูลนี้ช่วยให้ Miki ยืนยันการจองได้รวดเร็วขึ้น','กรุณาตรวจสอบข้อมูลก่อนส่งคำขอถึง Miki'],
 svc:{laser_underarm:['เลเซอร์กำจัดขน – รักแร้ผู้หญิง','รักแร้ผู้หญิง · ICE Cooling'],laser_bikini:['เลเซอร์กำจัดขน – บิกินีพื้นฐาน','บิกินีพื้นฐาน'],laser_lowerlegs:['เลเซอร์กำจัดขน – น่องผู้หญิง','น่องรวมเข่า'],wax_underarm:['แว็กซ์ – รักแร้','กำจัดขนแบบรวดเร็วตามบริเวณ'],facial:['ทรีตเมนต์พื้นฐาน','ดูแลผิวพื้นฐาน'],acne:['ดูแลผิวเป็นสิว','ดูแลและช่วยบำรุงผิวเป็นสิว']},
 dateLabel:'วันที่นัด',timeLabel:'เวลาที่ต้องการ',nameLabel:'ชื่อ-นามสกุล',phoneLabel:'เบอร์โทรศัพท์',contactLabel:'ช่องทางยืนยัน',noteLabel:'หมายเหตุ (ไม่บังคับ)',namePh:'ชื่อของคุณ',phonePh:'ตัวอย่าง: +84 935 555 170',notePh:'บริเวณที่ต้องการ ผิวแพ้ง่าย หรือข้อมูลเพิ่มเติม...',contacts:['โทรศัพท์','Zalo','WhatsApp','Telegram'],
 notice:'การจองจะยืนยันเมื่อ Miki ตอบกลับเท่านั้น กด “ส่งคำขอ” เพื่อเปิด WhatsApp พร้อมรายละเอียดการจองที่กรอกไว้',
 back:'ย้อนกลับ',continue:'ถัดไป',send:'ส่งคำขอ',doneTitle:'คำขอจองพร้อมแล้ว',doneLead:'ส่งข้อความเพื่อให้ Miki ยืนยันการจองของคุณ',wa:'ส่งการจองผ่าน WhatsApp →',map:'📍 ดู Miki Skin Spa บน Google Maps',
 hoursHead:'เวลาเปิดทำการ',hoursValue:'08:30–21:30 · ทุกวัน',addressHead:'ที่อยู่',
 sum:['บริการ','ราคาโดยประมาณ','วันที่','เวลา','ลูกค้า','โทรศัพท์'],
 alerts:['กรุณาเลือกบริการ','กรุณาเลือกวันและเวลา','กรุณากรอกชื่อและเบอร์โทรศัพท์'],
 msg:{head:'Miki Skin Spa - คำขอจอง',guest:'ลูกค้า',phone:'โทรศัพท์',service:'บริการ',price:'ราคาโดยประมาณ',date:'วันที่',time:'เวลา',contact:'ช่องทางยืนยัน',note:'หมายเหตุ'}
}
};

function getLang(){
  const q=new URLSearchParams(location.search).get('lang');
  let stored='';try{stored=localStorage.getItem('miki-language')||''}catch(_){}
  const lang=LANGS.includes(q)?q:(LANGS.includes(stored)?stored:'vi');
  try{localStorage.setItem('miki-language',lang)}catch(_){}
  return lang;
}
let lang=getLang(),copy=T[lang],s=0,service=null,time=null;

const $=id=>document.getElementById(id);
const steps=[...document.querySelectorAll('.step')],back=$('back'),next=$('next'),dateEl=$('date'),timesEl=$('times'),nameEl=$('name'),phoneEl=$('phone'),contactEl=$('contact'),noteEl=$('note'),summaryEl=$('summary'),waEl=$('wa');

function applyLanguage(){
  copy=T[lang];document.documentElement.lang=lang;document.title=copy.title;
  document.querySelector('meta[name="description"]').setAttribute('content',copy.description);
  document.querySelectorAll('.lang a').forEach(a=>{a.classList.toggle('active',a.dataset.lang===lang);a.setAttribute('aria-current',a.dataset.lang===lang?'true':'false')});
  $('visualTitle').textContent=copy.visualTitle;$('visualLead').textContent=copy.visualLead;
  copy.stepLabels.forEach((v,i)=>$('stepLabel'+(i+1)).textContent=v);
  copy.kickers.forEach((v,i)=>$('kicker'+(i+1)).textContent=v);
  copy.titles.forEach((v,i)=>$('title'+(i+1)).textContent=v);
  copy.leads.forEach((v,i)=>$('lead'+(i+1)).textContent=v);
  ['laser_underarm','laser_bikini','laser_lowerlegs','wax_underarm','facial','acne'].forEach((key,i)=>{$('svc'+(i+1)+'desc').textContent=copy.svc[key][1]});
  $('dateLabel').textContent=copy.dateLabel;$('timeLabel').textContent=copy.timeLabel;$('nameLabel').textContent=copy.nameLabel;$('phoneLabel').textContent=copy.phoneLabel;$('contactLabel').textContent=copy.contactLabel;$('noteLabel').textContent=copy.noteLabel;
  nameEl.placeholder=copy.namePh;phoneEl.placeholder=copy.phonePh;noteEl.placeholder=copy.notePh;
  contactEl.innerHTML=copy.contacts.map(v=>`<option>${esc(v)}</option>`).join('');
  $('notice').textContent=copy.notice;$('doneTitle').textContent=copy.doneTitle;$('doneLead').textContent=copy.doneLead;waEl.textContent=copy.wa;$('mapDone').textContent=copy.map;
  $('hoursHead').textContent=copy.hoursHead;$('hoursValue').textContent=copy.hoursValue;$('addressHead').textContent=copy.addressHead;
  render();
}

document.querySelectorAll('#services .card').forEach(x=>x.onclick=()=>{document.querySelectorAll('#services .card').forEach(y=>y.classList.remove('sel'));x.classList.add('sel');service={key:x.dataset.service,price:x.dataset.price};render()});
const d=new Date(),today=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;dateEl.min=today;dateEl.value=today;
for(let h=9;h<=21;h++)for(const m of [0,30]){if(h===21&&m===30)continue;const t=`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`,b=document.createElement('button');b.type='button';b.className='time';b.textContent=t;b.onclick=()=>{document.querySelectorAll('.time').forEach(q=>q.classList.remove('sel'));b.classList.add('sel');time=t};timesEl.appendChild(b)}

function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function render(){
  steps.forEach((x,i)=>x.classList.toggle('active',i===s));back.style.display=s?'block':'none';next.textContent=s===3?copy.send:copy.continue;back.textContent=copy.back;
  document.querySelectorAll('.stepper-item').forEach((el,i)=>{el.classList.toggle('active',i===s);el.classList.toggle('done',i<s)});
  if(s===3&&service){
    const svc=copy.svc[service.key][0];
    const vals=[svc,service.price,dateEl.value,time||'',nameEl.value,phoneEl.value];
    summaryEl.innerHTML=copy.sum.map((label,i)=>`<div class="row"><span>${esc(label)}</span><b>${esc(vals[i])}</b></div>`).join('');
  }
}
next.onclick=()=>{
  if(s===0&&!service)return alert(copy.alerts[0]);
  if(s===1&&(!dateEl.value||!time))return alert(copy.alerts[1]);
  if(s===2&&(!nameEl.value.trim()||!phoneEl.value.trim()))return alert(copy.alerts[2]);
  if(s<3){s++;render();return}
  const svc=copy.svc[service.key][0],m=copy.msg;
  const msg=[m.head,`${m.guest}: ${nameEl.value}`,`${m.phone}: ${phoneEl.value}`,`${m.service}: ${svc}`,`${m.price}: ${service.price}`,`${m.date}: ${dateEl.value}`,`${m.time}: ${time}`,`${m.contact}: ${contactEl.value}`,`${m.note}: ${noteEl.value||'-'}`,`Language: ${lang.toUpperCase()}`].join('\n');
  waEl.href='https://wa.me/84935555170?text='+encodeURIComponent(msg);
  steps[s].classList.remove('active');$('done').style.display='block';document.querySelector('.bottom').style.display='none';
};
back.onclick=()=>{if(s){s--;render()}};
applyLanguage();
