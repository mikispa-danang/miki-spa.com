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
 dateLabel:'NGÀY HẸN',timeLabel:'GIỜ MONG MUỐN',nameLabel:'HỌ VÀ TÊN',phoneLabel:'SỐ ĐIỆN THOẠI',contactLabel:'KÊNH XÁC NHẬN',noteLabel:'GHI CHÚ (KHÔNG BẮT BUỘC)',namePh:'Tên của bạn',phonePh:'Ví dụ: 0935 555 170',notePh:'Vùng cần tư vấn, da nhạy cảm, khách quốc tế...',contacts:['WhatsApp','Telegram'],
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
 dateLabel:'APPOINTMENT DATE',timeLabel:'PREFERRED TIME',nameLabel:'FULL NAME',phoneLabel:'PHONE NUMBER',contactLabel:'CONFIRM VIA',noteLabel:'NOTE (OPTIONAL)',namePh:'Your name',phonePh:'Example: +84 935 555 170',notePh:'Treatment area, sensitive skin, international guest...',contacts:['WhatsApp','Telegram'],
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
 dateLabel:'예약 날짜',timeLabel:'희망 시간',nameLabel:'이름',phoneLabel:'전화번호',contactLabel:'확인 방법',noteLabel:'메모 (선택)',namePh:'이름을 입력하세요',phonePh:'예: +84 935 555 170',notePh:'원하는 부위, 민감성 피부 등...',contacts:['WhatsApp','Telegram'],
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
 dateLabel:'预约日期',timeLabel:'希望时间',nameLabel:'姓名',phoneLabel:'电话号码',contactLabel:'确认方式',noteLabel:'备注（可选）',namePh:'您的姓名',phonePh:'例如：+84 935 555 170',notePh:'护理部位、敏感肌、国际顾客等...',contacts:['WhatsApp','Telegram'],
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
 dateLabel:'ДАТА ВИЗИТА',timeLabel:'ЖЕЛАЕМОЕ ВРЕМЯ',nameLabel:'ИМЯ',phoneLabel:'ТЕЛЕФОН',contactLabel:'СПОСОБ ПОДТВЕРЖДЕНИЯ',noteLabel:'КОММЕНТАРИЙ (НЕОБЯЗАТЕЛЬНО)',namePh:'Ваше имя',phonePh:'Например: +84 935 555 170',notePh:'Зона, чувствительная кожа, дополнительные пожелания...',contacts:['WhatsApp','Telegram'],
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
 dateLabel:'วันที่นัด',timeLabel:'เวลาที่ต้องการ',nameLabel:'ชื่อ-นามสกุล',phoneLabel:'เบอร์โทรศัพท์',contactLabel:'ช่องทางยืนยัน',noteLabel:'หมายเหตุ (ไม่บังคับ)',namePh:'ชื่อของคุณ',phonePh:'ตัวอย่าง: +84 935 555 170',notePh:'บริเวณที่ต้องการ ผิวแพ้ง่าย หรือข้อมูลเพิ่มเติม...',contacts:['WhatsApp','Telegram'],
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
const CATALOG=[{"key": "laserWomen.mep-cam", "group": "laser", "vi": "Mép & cằm", "en": "Upper lip & chin", "price": "300.000đ", "pricePath": ["laserWomen", "mep-cam"], "section": "laser-women"}, {"key": "laserWomen.quanh-quang-vu", "group": "laser", "vi": "Quanh quầng vú", "en": "Areola", "price": "300.000đ", "pricePath": ["laserWomen", "quanh-quang-vu"], "section": "laser-women"}, {"key": "laserWomen.duong-bung", "group": "laser", "vi": "Đường bụng", "en": "Abdominal line", "price": "300.000đ", "pricePath": ["laserWomen", "duong-bung"], "section": "laser-women"}, {"key": "laserWomen.nach-nu", "group": "laser", "vi": "Nách nữ", "en": "Female underarms", "price": "500.000đ", "pricePath": ["laserWomen", "nach-nu"], "section": "laser-women"}, {"key": "laserWomen.lung-duoi-nu", "group": "laser", "vi": "Lưng dưới nữ", "en": "Female lower back", "price": "500.000đ", "pricePath": ["laserWomen", "lung-duoi-nu"], "section": "laser-women"}, {"key": "laserWomen.bikini-co-ban", "group": "laser", "vi": "Bikini cơ bản", "en": "Basic bikini", "price": "600.000đ", "pricePath": ["laserWomen", "bikini-co-ban"], "section": "laser-women"}, {"key": "laserWomen.cang-tay-nu", "group": "laser", "vi": "Cẳng tay nữ", "en": "Female forearms", "price": "600.000đ", "pricePath": ["laserWomen", "cang-tay-nu"], "section": "laser-women"}, {"key": "laserWomen.mong", "group": "laser", "vi": "Mông", "en": "Buttocks", "price": "600.000đ", "pricePath": ["laserWomen", "mong"], "section": "laser-women"}, {"key": "laserWomen.cang-chan-gom-goi", "group": "laser", "vi": "Cẳng chân (gồm gối)", "en": "Lower legs including knees", "price": "700.000đ", "pricePath": ["laserWomen", "cang-chan-gom-goi"], "section": "laser-women"}, {"key": "laserWomen.deep-bikini", "group": "laser", "vi": "Deep Bikini", "en": "Deep Bikini", "price": "800.000đ", "pricePath": ["laserWomen", "deep-bikini"], "section": "laser-women"}, {"key": "laserWomen.dui", "group": "laser", "vi": "Đùi", "en": "Thighs", "price": "800.000đ", "pricePath": ["laserWomen", "dui"], "section": "laser-women"}, {"key": "laserWomen.full-tay-nu", "group": "laser", "vi": "Full tay nữ", "en": "Female full arms", "price": "1.000.000đ", "pricePath": ["laserWomen", "full-tay-nu"], "section": "laser-women"}, {"key": "laserWomen.full-chan", "group": "laser", "vi": "Full chân", "en": "Full legs", "price": "1.300.000đ", "pricePath": ["laserWomen", "full-chan"], "section": "laser-women"}, {"key": "laserWomen.package", "group": "laser", "vi": "Full Package Nữ", "en": "Full Package Women — 4 areas", "price": "3.000.000đ", "pricePath": ["laserWomen", "package"], "section": "laser-women"}, {"key": "laserMen.ria-mep", "group": "laser", "vi": "Ria mép", "en": "Upper lip", "price": "300.000đ", "pricePath": ["laserMen", "ria-mep"], "section": "laser-men"}, {"key": "laserMen.rau", "group": "laser", "vi": "Râu", "en": "Beard", "price": "500.000đ", "pricePath": ["laserMen", "rau"], "section": "laser-men"}, {"key": "laserMen.nach-nam", "group": "laser", "vi": "Nách nam", "en": "Male underarms", "price": "600.000đ", "pricePath": ["laserMen", "nach-nam"], "section": "laser-men"}, {"key": "laserMen.lung-duoi-nam", "group": "laser", "vi": "Lưng dưới nam", "en": "Male lower back", "price": "600.000đ", "pricePath": ["laserMen", "lung-duoi-nam"], "section": "laser-men"}, {"key": "laserMen.cang-tay-nam", "group": "laser", "vi": "Cẳng tay nam", "en": "Male forearms", "price": "800.000đ", "pricePath": ["laserMen", "cang-tay-nam"], "section": "laser-men"}, {"key": "laserMen.nguc", "group": "laser", "vi": "Ngực", "en": "Chest", "price": "800.000đ", "pricePath": ["laserMen", "nguc"], "section": "laser-men"}, {"key": "laserMen.bung", "group": "laser", "vi": "Bụng", "en": "Abdomen", "price": "800.000đ", "pricePath": ["laserMen", "bung"], "section": "laser-men"}, {"key": "laserMen.full-tay-nam", "group": "laser", "vi": "Full tay nam", "en": "Male full arms", "price": "1.200.000đ", "pricePath": ["laserMen", "full-tay-nam"], "section": "laser-men"}, {"key": "laserMen.lung", "group": "laser", "vi": "Lưng", "en": "Back", "price": "1.500.000đ", "pricePath": ["laserMen", "lung"], "section": "laser-men"}, {"key": "laserMen.package", "group": "laser", "vi": "Full Package Nam", "en": "Full Package Men — 4 areas", "price": "3.900.000đ", "pricePath": ["laserMen", "package"], "section": "laser-men"}, {"key": "waxing.nach", "group": "waxing", "vi": "Nách", "en": "Underarms", "price": "180.000đ", "pricePath": ["waxing", "nach"], "section": "waxing"}, {"key": "waxing.mep-cam", "group": "waxing", "vi": "Mép / Cằm", "en": "Upper lip / chin", "price": "180.000đ", "pricePath": ["waxing", "mep-cam"], "section": "waxing"}, {"key": "waxing.long-may-tao-dang", "group": "waxing", "vi": "Lông mày (tạo dáng)", "en": "Eyebrow shaping", "price": "200.000đ", "pricePath": ["waxing", "long-may-tao-dang"], "section": "waxing"}, {"key": "waxing.tay", "group": "waxing", "vi": "Tay", "en": "Full arms", "price": "450.000đ", "pricePath": ["waxing", "tay"], "section": "waxing"}, {"key": "waxing.nua-chan", "group": "waxing", "vi": "Nửa chân", "en": "Half legs", "price": "450.000đ", "pricePath": ["waxing", "nua-chan"], "section": "waxing"}, {"key": "waxing.full-chan", "group": "waxing", "vi": "Full chân", "en": "Full legs", "price": "700.000đ", "pricePath": ["waxing", "full-chan"], "section": "waxing"}, {"key": "waxing.bikini-nu", "group": "waxing", "vi": "Bikini nữ", "en": "Women’s bikini", "price": "650.000đ", "pricePath": ["waxing", "bikini-nu"], "section": "waxing"}, {"key": "waxing.nguc", "group": "waxing", "vi": "Ngực", "en": "Chest", "price": "400.000đ", "pricePath": ["waxing", "nguc"], "section": "waxing"}, {"key": "waxing.bung", "group": "waxing", "vi": "Bụng", "en": "Abdomen", "price": "400.000đ", "pricePath": ["waxing", "bung"], "section": "waxing"}, {"key": "waxing.lung", "group": "waxing", "vi": "Lưng", "en": "Back", "price": "400.000đ", "pricePath": ["waxing", "lung"], "section": "waxing"}, {"key": "waxing.vung-dac-biet", "group": "waxing", "vi": "Vùng đặc biệt", "en": "Special area", "price": "500.000đ", "pricePath": ["waxing", "vung-dac-biet"], "section": "waxing"}, {"key": "waxing.full-body", "group": "waxing", "vi": "Full Body", "en": "Full Body (excluding bikini)", "price": "1.800.000đ", "pricePath": ["waxing", "full-body"], "section": "waxing"}, {"key": "waxing.package", "group": "waxing", "vi": "Full Body VIP", "en": "Full Body VIP (including bikini)", "price": "2.300.000đ", "pricePath": ["waxing", "package"], "section": "waxing"}, {"key": "skin.basic-facial", "group": "skin", "vi": "Basic Facial", "en": "Basic Facial", "price": "500.000đ", "pricePath": ["skin", "basic-facial"], "section": "skin"}, {"key": "skin.deep-cleansing-facial", "group": "skin", "vi": "Deep Cleansing Facial", "en": "Deep Cleansing Facial", "price": "800.000đ", "pricePath": ["skin", "deep-cleansing-facial"], "section": "skin"}, {"key": "skin.anti-aging-facial", "group": "skin", "vi": "Anti-Aging Facial", "en": "Anti-Aging Facial", "price": "1.200.000đ", "pricePath": ["skin", "anti-aging-facial"], "section": "skin"}, {"key": "skin.acne-treatment", "group": "acne", "vi": "Acne Treatment", "en": "Acne Treatment", "price": "900.000đ", "pricePath": ["skin", "acne-treatment"], "section": "skin"}, {"key": "skin.clear-up-back-acne", "group": "acne", "vi": "Clear Up Back Acne", "en": "Clear Up Back Acne", "price": "1.000.000đ", "pricePath": ["skin", "clear-up-back-acne"], "section": "skin"}, {"key": "skin.brighten-underarm-area", "group": "skin", "vi": "Brighten Underarm Area", "en": "Brighten Underarm Area", "price": "500.000đ", "pricePath": ["skin", "brighten-underarm-area"], "section": "skin"}, {"key": "skin.cold-algae-peel", "group": "skin", "vi": "Cold Algae Peel", "en": "Cold Algae Peel", "price": "500.000đ", "pricePath": ["skin", "cold-algae-peel"], "section": "skin"}, {"key": "skin.package", "group": "skin", "vi": "Skin Brightening", "en": "Skin Brightening", "price": "1.200.000đ", "pricePath": ["skin", "package"], "section": "skin"}, {"key": "body", "group": "body", "vi": "Tẩy tế bào chết & dưỡng thể", "en": "Body exfoliation & moisturizing", "price": null}, {"key": "training", "group": "training", "vi": "Tư vấn khóa đào tạo học viên", "en": "Training course consultation", "price": null}];
const GROUPS={vi:['Triệt lông Laser','Waxing','Chăm sóc da','Chăm sóc da mụn','Body Care','Đào tạo học viên'],en:['Laser Hair Removal','Waxing','Skin Care','Acne Care','Body Care','Training'],ko:['레이저 제모','왁싱','피부 관리','여드름 케어','바디 케어','교육'],zh:['激光脱毛','蜜蜡脱毛','皮肤护理','痘肌护理','身体护理','培训'],ru:['Лазерная эпиляция','Ваксинг','Уход за кожей','Уход за проблемной кожей','Уход за телом','Обучение'],th:['เลเซอร์กำจัดขน','แว็กซ์','ดูแลผิวหน้า','ดูแลผิวเป็นสิว','ดูแลผิวกาย','ฝึกอบรม']};
const DETAIL={vi:['DỊCH VỤ CHI TIẾT','Chọn dịch vụ chi tiết','Liên hệ','Nữ','Nam'],en:['SERVICE DETAILS','Choose a specific service','Contact us','Women','Men'],ko:['세부 서비스','서비스 선택','문의','여성','남성'],zh:['具体服务','选择具体服务','联系我们','女士','男士'],ru:['ВЫБЕРИТЕ УСЛУГУ','Выберите услугу','Свяжитесь с нами','Женщины','Мужчины'],th:['บริการโดยละเอียด','เลือกบริการ','ติดต่อเรา','ผู้หญิง','ผู้ชาย']};

let lang=getLang(),copy=T[lang],activeGroup='',step=0,selected=new Map(),preferredTime='',isSubmitting=false,preparedMessage='';
const $=id=>document.getElementById(id);
const GROUP_KEYS=['laser','waxing','skin','acne','body','training'];
const labels={
 vi:{first:'1. Chọn nhóm dịch vụ',intro:'Chạm vào nhóm dịch vụ, xem tất cả bảng giá bên dưới và chọn dịch vụ muốn đặt.',details:'2. Chọn dịch vụ chi tiết và giá',hint:'Có thể chọn nhiều dịch vụ. Miki sẽ xác nhận giá và thời gian trước buổi hẹn.',male:'Dịch vụ nam',female:'Dịch vụ nữ',selected:'Dịch vụ đã chọn',chosen:'đã chọn',none:'Chưa có dịch vụ nào được chọn',total:'Tổng tạm tính',unknown:'Liên hệ báo giá',partial:' + dịch vụ cần báo giá',continue:'Tiếp tục điền thông tin',stage2:'Điền thông tin đặt lịch',lead2:'Chọn ngày, giờ mong muốn và điền thông tin. Miki sẽ liên hệ xác nhận lịch.',date:'Ngày mong muốn',time:'Giờ mong muốn',name:'Họ và tên',phone:'Số điện thoại',channel:'Kênh liên hệ',note:'Ghi chú (không bắt buộc)',review:'Xem lại dịch vụ',privacy:'Tôi đồng ý để Miki dùng thông tin này nhằm liên hệ xác nhận đặt lịch.',wait:'Đang gửi yêu cầu...',done:'Miki đã nhận yêu cầu đặt lịch của bạn!',pending:'Yêu cầu đã được lưu vào hệ thống Miki. Nhân viên sẽ liên hệ xác nhận; lịch chưa được chốt cho đến khi Miki phản hồi.',notSaved:'Chưa lưu được yêu cầu tự động. Vui lòng nhấn nút nhắn tin bên dưới để gửi cho Miki.',wa:'Nhắn WhatsApp cho Miki',tg:'Nhắn Telegram cho Miki',copy:'Sao chép nội dung đặt lịch',copied:'Đã sao chép. Hãy dán vào cuộc trò chuyện Telegram với Miki.',sendTelegram:'Telegram sẽ mở tin nhắn đã soạn sẵn. Khách cần bấm GỬI trong Telegram để Miki nhận được.',send:'Gửi yêu cầu đặt lịch',back:'Quay lại chọn dịch vụ',choose:'Vui lòng chọn ít nhất một dịch vụ chi tiết.',needDate:'Vui lòng chọn ngày và giờ mong muốn.',needInfo:'Vui lòng nhập tên và số điện thoại hợp lệ.',needConsent:'Bạn cần đồng ý dùng thông tin để liên hệ đặt lịch.',hours:'08:30–21:30 · Hằng ngày',summary:['Dịch vụ','Tổng tiền tham khảo','Ngày hẹn','Giờ hẹn','Họ tên','Số điện thoại'],code:'Mã yêu cầu',hintConfirm:'Giá và khung giờ còn trống sẽ được Miki xác nhận.',close:'Lịch chỉ được xác nhận sau khi Miki phản hồi.',reset:'Đặt lịch khác',general:'Nhóm dịch vụ'},
 en:{first:'1. Choose service category',intro:'Choose a category to see the complete price list, then select your treatments.',details:'2. Select treatments and prices',hint:'You can select multiple treatments. Miki will confirm prices and timing before the appointment.',male:'Men',female:'Women',selected:'Selected treatments',chosen:'selected',none:'No treatments selected',total:'Estimated total',unknown:'Ask for price',partial:' + quote required',continue:'Continue to your details',stage2:'Your booking details',lead2:'Choose a preferred date and time, then enter your contact details. Miki will confirm.',date:'Preferred date',time:'Preferred time',name:'Full name',phone:'Phone number',channel:'Contact via',note:'Notes (optional)',review:'Review treatments',privacy:'I agree to Miki using my details to contact me about this booking.',wait:'Sending your request...',done:'Miki has received your booking request!',pending:'Your request has been saved. Miki will contact you to confirm; your appointment is not confirmed until Miki replies.',notSaved:'Your booking was not saved automatically. Please send the message below to Miki.',wa:'Message on WhatsApp',tg:'Message on Telegram',copy:'Copy booking details',copied:'Copied. Paste into your Telegram conversation with Miki.',sendTelegram:'Telegram will open with booking text. Tap SEND in Telegram so Miki receives it.',send:'Send booking request',back:'Back to treatments',choose:'Please select at least one treatment.',needDate:'Please select your preferred date and time.',needInfo:'Please enter a name and valid phone number.',needConsent:'Please consent to contact for booking.',hours:'08:30–21:30 · Daily',summary:['Treatments','Estimated total','Date','Time','Name','Phone'],code:'Request code',hintConfirm:'Prices and available slots will be confirmed by Miki.',close:'Appointments are only confirmed after Miki replies.',reset:'Book again',general:'Service category'},
 ko:{first:'1. 서비스 종류 선택',intro:'서비스 종류를 선택하면 전체 가격표가 표시됩니다.',details:'2. 상세 서비스 및 가격 선택',hint:'서비스를 여러 개 선택할 수 있으며, Miki가 가격과 시간을 확인합니다.',male:'남성',female:'여성',selected:'선택한 서비스',chosen:'선택',none:'선택한 서비스 없음',total:'예상 합계',unknown:'가격 문의',continue:'예약 정보 입력',stage2:'예약 정보',lead2:'희망 날짜와 시간 및 연락처를 입력하세요.',date:'희망 날짜',time:'희망 시간',name:'이름',phone:'전화번호',channel:'연락 방법',note:'메모 (선택)',review:'서비스 확인',privacy:'예약 확인 연락을 위한 정보 사용에 동의합니다.',wait:'전송 중...',done:'예약 요청이 접수되었습니다!',pending:'Miki가 연락하여 예약을 확정합니다.',notSaved:'자동 저장에 실패했습니다. 아래에서 메시지를 보내주세요.',wa:'WhatsApp 메시지',tg:'Telegram 메시지',copy:'예약 내용 복사',copied:'복사되었습니다.',sendTelegram:'Telegram에서 전송 버튼을 눌러야 메시지가 전달됩니다.',send:'예약 요청 보내기',back:'서비스로 돌아가기',choose:'서비스를 선택하세요.',needDate:'날짜와 시간을 선택하세요.',needInfo:'이름과 전화번호를 입력하세요.',needConsent:'개인정보 사용에 동의해 주세요.',hours:'08:30–21:30 · 매일',summary:['서비스','예상 합계','날짜','시간','이름','전화번호'],code:'예약 번호',hintConfirm:'Miki가 가격과 시간을 확인합니다.',close:'Miki의 응답 후 예약이 확정됩니다.',reset:'다시 예약'},
 zh:{first:'1. 选择服务类别',intro:'选择类别后可查看完整服务及价格。',details:'2. 选择具体服务与价格',hint:'可选择多项服务，Miki 将确认价格和时间。',male:'男士',female:'女士',selected:'已选服务',chosen:'已选',none:'尚未选择服务',total:'参考总价',unknown:'咨询价格',continue:'填写预约信息',stage2:'预约信息',lead2:'选择日期、时间并填写联系方式。',date:'预约日期',time:'希望时间',name:'姓名',phone:'电话号码',channel:'联系方式',note:'备注（可选）',review:'核对服务',privacy:'我同意 Miki 使用我的信息联系确认预约。',wait:'发送中...',done:'Miki 已收到预约申请！',pending:'Miki 将与您联系确认预约。',notSaved:'自动保存失败，请通过下方消息联系 Miki。',wa:'WhatsApp 联系',tg:'Telegram 联系',copy:'复制预约信息',copied:'已复制。',sendTelegram:'Telegram 打开后请点击发送。',send:'发送预约申请',back:'返回服务',choose:'请至少选择一项服务。',needDate:'请选择日期和时间。',needInfo:'请输入姓名和正确的电话。',needConsent:'请同意信息用于联系确认。',hours:'08:30–21:30 · 每天',summary:['服务','参考总价','日期','时间','姓名','电话'],code:'申请编号',hintConfirm:'价格与时间由 Miki 确认。',close:'需经 Miki 回复后才算预约成功。',reset:'再次预约'},
 ru:{first:'1. Выберите категорию',intro:'Выберите категорию, чтобы посмотреть полный прайс-лист.',details:'2. Выберите услуги и цены',hint:'Можно выбрать несколько услуг. Miki подтвердит цены и время.',male:'Мужчины',female:'Женщины',selected:'Выбранные услуги',chosen:'выбрано',none:'Услуги не выбраны',total:'Примерная стоимость',unknown:'Уточнить цену',continue:'Перейти к данным',stage2:'Данные для записи',lead2:'Укажите удобную дату, время и контакты.',date:'Желаемая дата',time:'Желаемое время',name:'Имя',phone:'Телефон',channel:'Способ связи',note:'Комментарий (необязательно)',review:'Проверить услуги',privacy:'Я согласен(-на) на использование данных для подтверждения записи.',wait:'Отправка...',done:'Miki получил вашу заявку!',pending:'Miki свяжется с вами для подтверждения.',notSaved:'Не удалось автоматически сохранить заявку. Отправьте сообщение ниже.',wa:'Написать в WhatsApp',tg:'Написать в Telegram',copy:'Скопировать заявку',copied:'Скопировано.',sendTelegram:'В Telegram нужно нажать «Отправить».',send:'Отправить заявку',back:'Назад к услугам',choose:'Выберите хотя бы одну услугу.',needDate:'Выберите дату и время.',needInfo:'Введите имя и корректный номер.',needConsent:'Подтвердите согласие на связь.',hours:'08:30–21:30 · Ежедневно',summary:['Услуги','Ориентировочная цена','Дата','Время','Имя','Телефон'],code:'Код заявки',hintConfirm:'Miki подтвердит цену и время.',close:'Запись подтверждается после ответа Miki.',reset:'Новая запись'},
 th:{first:'1. เลือกประเภทบริการ',intro:'เลือกหมวดเพื่อดูรายการบริการและราคาทั้งหมด',details:'2. เลือกบริการและราคา',hint:'เลือกหลายบริการได้ Miki จะยืนยันราคาและเวลา',male:'ผู้ชาย',female:'ผู้หญิง',selected:'บริการที่เลือก',chosen:'เลือกแล้ว',none:'ยังไม่ได้เลือกบริการ',total:'ยอดรวมโดยประมาณ',unknown:'สอบถามราคา',continue:'กรอกข้อมูลการจอง',stage2:'ข้อมูลการจอง',lead2:'เลือกวันเวลาและกรอกข้อมูลติดต่อ',date:'วันที่ต้องการ',time:'เวลาที่ต้องการ',name:'ชื่อ',phone:'เบอร์โทร',channel:'ช่องทางติดต่อ',note:'หมายเหตุ (ถ้ามี)',review:'ตรวจสอบบริการ',privacy:'ยินยอมให้ Miki ใช้ข้อมูลเพื่อติดต่อยืนยันการจอง',wait:'กำลังส่ง...',done:'Miki ได้รับคำขอจองแล้ว!',pending:'Miki จะติดต่อยืนยันการจองอีกครั้ง',notSaved:'บันทึกอัตโนมัติไม่สำเร็จ กรุณาส่งข้อความด้านล่าง',wa:'ส่ง WhatsApp',tg:'ส่ง Telegram',copy:'คัดลอกรายละเอียด',copied:'คัดลอกแล้ว',sendTelegram:'ต้องกดส่งใน Telegram เพื่อส่งข้อความ',send:'ส่งคำขอจอง',back:'กลับไปเลือกบริการ',choose:'กรุณาเลือกอย่างน้อยหนึ่งบริการ',needDate:'กรุณาเลือกวันและเวลา',needInfo:'กรุณากรอกชื่อและเบอร์โทรที่ถูกต้อง',needConsent:'กรุณายอมรับการใช้ข้อมูลติดต่อ',hours:'08:30–21:30 · ทุกวัน',summary:['บริการ','ราคารวม','วันที่','เวลา','ชื่อ','โทรศัพท์'],code:'หมายเลขการจอง',hintConfirm:'Miki จะยืนยันราคาและเวลา',close:'จองสำเร็จเมื่อ Miki ตอบกลับเท่านั้น',reset:'จองใหม่'}
};
function tr(k){return labels[lang]?.[k]||labels.en[k]||k}
function servicePrice(item){let v=window.MIKI_CONTENT?.prices;for(const k of item.pricePath||[])v=v?.[k];return item.pricePath?(v||item.price):null}
function serviceName(item){return lang==='vi'?item.vi:item.en}
function priceNumber(p){if(!p)return 0;const d=String(p).replace(/\D/g,'');return Number(d)||0}
function formatMoney(n){return new Intl.NumberFormat('vi-VN').format(n)+'đ'}
const steps=[...document.querySelectorAll('.step')];
const dateEl=$('date'),timeArea=$('times'),nameEl=$('name'),phoneEl=$('phone'),contactEl=$('contact'),noteEl=$('note');
const continueBtn=$('next'),backBtn=$('back'),waEl=$('wa');
function itemsSelected(){return [...selected.keys()].map(key=>CATALOG.find(x=>x.key===key)).filter(Boolean)}
function estimate(){return itemsSelected().reduce((n,item)=>n+priceNumber(servicePrice(item)),0)}
function quoteNeeded(){return itemsSelected().some(item=>!servicePrice(item))}
function summaryCost(){const amount=formatMoney(estimate());return quoteNeeded()?(estimate()?amount+tr('partial'):tr('unknown')):amount}
function simpleDate(iso){const parts=iso.split('-');return parts.length===3?parts[2]+'/'+parts[1]+'/'+parts[0]:iso}
function todayVN(){const p=Object.fromEntries(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'Asia/Ho_Chi_Minh'}).formatToParts(new Date()).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));return p.year+'-'+p.month+'-'+p.day}
function groupCount(group){return CATALOG.filter(item=>item.group===group).length}
function renderGroups(){
 const wrapper=$('services');wrapper.replaceChildren();
 GROUP_KEYS.forEach((key,index)=>{
   const button=document.createElement('button');
   button.className='card'+(activeGroup===key?' sel':'');button.type='button';button.dataset.group=key;
   button.setAttribute('aria-pressed',String(activeGroup===key));
   const title=document.createElement('b');title.textContent=GROUPS[lang][index];
   const sub=document.createElement('small');sub.textContent=groupCount(key)+' '+(lang==='vi'?'dịch vụ':'services');
   button.append(title,sub);button.onclick=()=>{activeGroup=key;renderGroups();renderDetails();$('pricePanel').scrollIntoView({behavior:'smooth',block:'nearest'})};
   wrapper.appendChild(button);
 });
}
function renderDetails(){
 const panel=$('pricePanel'),wrapper=$('serviceOptions');
 panel.hidden=!activeGroup;
 if(!activeGroup)return;
 $('selectedGroupTitle').textContent=GROUPS[lang][GROUP_KEYS.indexOf(activeGroup)];
 wrapper.replaceChildren();
 let section='';
 for(const item of CATALOG.filter(x=>x.group===activeGroup)){
   if(activeGroup==='laser'&&item.section!==section){
      section=item.section;
      const h=document.createElement('h3');h.className='service-section';h.textContent=item.section==='laser-women'?tr('female'):tr('male');wrapper.appendChild(h);
   }
   const label=document.createElement('label');label.className='service-option'+(selected.has(item.key)?' selected':'');
   const input=document.createElement('input');input.type='checkbox';input.checked=selected.has(item.key);input.value=item.key;
   const name=document.createElement('span');name.className='service-option-name';name.textContent=serviceName(item);
   const price=document.createElement('strong');price.className='service-option-price';price.textContent=servicePrice(item)||tr('unknown');
   input.onchange=()=>{if(input.checked)selected.set(item.key,true);else selected.delete(item.key);renderDetails();renderSelection()};
   label.append(input,name,price);wrapper.appendChild(label);
 }
}
function renderSelection(){
 const chosen=itemsSelected(),list=$('selectedServices'),count=$('selectedCount');
 list.replaceChildren();count.textContent=chosen.length;
 for(const item of chosen){
   const row=document.createElement('div');row.className='chosen-row';
   const name=document.createElement('span');name.textContent=serviceName(item);
   const price=document.createElement('b');price.textContent=servicePrice(item)||tr('unknown');
   row.append(name,price);list.appendChild(row);
 }
 $('emptySelected').hidden=Boolean(chosen.length);
 $('totalPrice').textContent=summaryCost();$('continuePrice').disabled=!chosen.length;
 continueBtn.disabled=!chosen.length||isSubmitting;
}
function renderTimes(){
 timeArea.replaceChildren();
 const now=new Date();
 const vn=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now);
 const hNow=Number(vn.find(x=>x.type==='hour')?.value||0),mNow=Number(vn.find(x=>x.type==='minute')?.value||0);
 const isToday=dateEl.value===todayVN();
 for(let h=9;h<=20;h++)for(const m of [0,30]){
   const value=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0');
   const btn=document.createElement('button');btn.type='button';btn.className='time'+(preferredTime===value?' sel':'');
   btn.textContent=value;
   btn.disabled=isToday&&((h*60+m)<=hNow*60+mNow+30);
   btn.onclick=()=>{preferredTime=value;renderTimes();renderReview()};
   timeArea.appendChild(btn);
 }
}
function renderReview(){
 const items=itemsSelected();
 const vals=[items.map(x=>serviceName(x)+' — '+(servicePrice(x)||tr('unknown'))).join('; '),summaryCost(),simpleDate(dateEl.value||''),preferredTime,nameEl.value.trim(),phoneEl.value.trim()];
 const wrap=$('summary');wrap.replaceChildren();
 labels[lang].summary.forEach((label,index)=>{
    const row=document.createElement('div');row.className='row';
    const k=document.createElement('span');k.textContent=label;
    const v=document.createElement('b');v.textContent=vals[index]||'—';
    row.append(k,v);wrap.appendChild(row);
 });
}
function updateStepper(){
 steps.forEach((element,i)=>element.classList.toggle('active',i===step));
 document.querySelectorAll('.stepper-item').forEach((element,i)=>{element.classList.toggle('active',i===step);element.classList.toggle('done',i<step)});
 backBtn.style.display=step?'block':'none';
 continueBtn.textContent=step===0?tr('continue'):tr('send');
 continueBtn.disabled=isSubmitting||(step===0&&!selected.size);
 if(step===1){renderTimes();renderReview()}
}
function goStep(n){
 step=n;updateStepper();document.querySelector('.booking-panel').scrollIntoView({behavior:'smooth',block:'start'});
}
function composeMessage(code){
 const m=copy.msg,info=itemsSelected().map(item=>serviceName(item)+' ('+(servicePrice(item)||tr('unknown'))+')').join('; ');
 return [code?tr('code')+': '+code:'',m.head,
 m.guest+': '+nameEl.value.trim(),m.phone+': '+phoneEl.value.trim(),m.service+': '+info,
 m.price+': '+summaryCost(),m.date+': '+dateEl.value,m.time+': '+preferredTime,
 m.contact+': '+contactEl.value,m.note+': '+(noteEl.value.trim()||'-'),'Language: '+lang.toUpperCase()].filter(Boolean).join('\n');
}
async function submit(){
 if(isSubmitting)return;
 if(!dateEl.value||!preferredTime){alert(tr('needDate'));return}
 if(dateEl.value<todayVN()){alert(tr('needDate'));return}
 if(!nameEl.value.trim()||phoneEl.value.replace(/\D/g,'').length<8){alert(tr('needInfo'));return}
 if(!$('privacy').checked){alert(tr('needConsent'));return}
 isSubmitting=true;continueBtn.disabled=true;continueBtn.textContent=tr('wait');
 const booking={name:nameEl.value.trim(),phone:phoneEl.value.trim(),
 service:itemsSelected().map(serviceName).join(' + '),price:summaryCost(),
 date:dateEl.value,time:preferredTime,channel:contactEl.value,note:noteEl.value.trim()};
 let result={ok:false};
 try{if(window.MikiCRM?.submitBooking)result=await window.MikiCRM.submitBooking(booking)}catch(_){}
 isSubmitting=false;
 const msg=composeMessage(result.code||'');preparedMessage=msg;
 const tg=contactEl.value==='Telegram';
 waEl.href=tg?'https://t.me/+84935555170?text='+encodeURIComponent(msg):'https://wa.me/84935555170?text='+encodeURIComponent(msg);
 waEl.textContent=tg?tr('tg'):tr('wa');
 $('copyBooking').hidden=!tg;
 $('copyBooking').textContent=tr('copy');
 $('telegramHelp').hidden=!tg;
 $('telegramHelp').textContent=tr('sendTelegram');
 $('doneTitle').textContent=result.ok?tr('done'):(lang==='vi'?'Chưa gửi được booking tự động':'Unable to save your booking');
 $('doneLead').textContent=result.ok?tr('pending'):tr('notSaved');
 $('bookingCode').textContent=result.ok&&result.code?tr('code')+': '+result.code:'';
 $('done').style.display='block';
 steps.forEach(x=>x.classList.remove('active'));document.querySelector('.bottom').style.display='none';
 window.mikiAnalytics?.track('booking_message_ready',{booking_flow:'standard',contact_channel:contactEl.value.toLowerCase(),placement:'booking'});
 $('done').scrollIntoView({behavior:'smooth',block:'start'});
}
function applyLanguage(){
 copy=T[lang];document.documentElement.lang=lang;document.title=copy.title;
 document.querySelector('meta[name="description"]').content=copy.description;
 document.querySelectorAll('.lang a').forEach(a=>{const chosen=a.dataset.lang===lang;a.classList.toggle('active',chosen);a.setAttribute('aria-current',chosen?'page':'false')});
 $('visualTitle').textContent=copy.visualTitle;$('visualLead').textContent=copy.visualLead;
 $('stepLabel1').textContent=copy.stepLabels[0];$('stepLabel2').textContent=copy.stepLabels[2];
 $('kicker1').textContent=lang==='vi'?'Bước 1 / 2':'Step 1 / 2';$('kicker2').textContent=lang==='vi'?'Bước 2 / 2':'Step 2 / 2';
 $('title1').textContent=tr('first');$('lead1').textContent=tr('intro');
 $('detailsTitle').textContent=tr('details');$('detailsHint').textContent=tr('hint');
 $('title2').textContent=tr('stage2');$('lead2').textContent=tr('lead2');
 $('dateLabel').textContent=tr('date');$('timeLabel').textContent=tr('time');
 $('nameLabel').textContent=tr('name');$('phoneLabel').textContent=tr('phone');
 $('contactLabel').textContent=tr('channel');$('noteLabel').textContent=tr('note');
 nameEl.placeholder=copy.namePh;phoneEl.placeholder=copy.phonePh;noteEl.placeholder=copy.notePh;
 $('selectedHead').textContent=tr('selected');$('totalHead').textContent=tr('total');
 $('emptySelected').textContent=tr('none');$('reviewTitle').textContent=tr('review');
 $('privacyText').textContent=tr('privacy');$('policyLink').textContent=lang==='vi'?'Chính sách bảo mật':'Privacy policy';
 $('continuePrice').textContent=tr('continue');$('notice').textContent=tr('close')+' '+tr('hintConfirm');
 $('hoursHead').textContent=copy.hoursHead;$('hoursValue').textContent=tr('hours');
 $('addressHead').textContent=copy.addressHead;$('mapDone').textContent=copy.map;
 $('resetBooking').textContent=tr('reset');
 $('copyBooking').onclick=async()=>{try{await navigator.clipboard.writeText(preparedMessage);$('telegramHelp').textContent=tr('copied')}catch(_){$('telegramHelp').textContent=preparedMessage}};
 renderGroups();renderDetails();renderSelection();updateStepper();
}
function start(){
 const requested=new URLSearchParams(location.search).get('service');
 if(requested){const item=CATALOG.find(x=>x.key===requested);if(item){activeGroup=item.group;selected.set(item.key,true)}}
 const day=todayVN();dateEl.min=day;dateEl.value=day;
 dateEl.addEventListener('change',()=>{preferredTime='';renderTimes();renderReview()});
 [nameEl,phoneEl,contactEl,noteEl].forEach(e=>e.addEventListener('input',renderReview));
 continueBtn.onclick=()=>step===0?(selected.size?goStep(1):alert(tr('choose'))):submit();
 $('continuePrice').onclick=()=>{if(selected.size)goStep(1)};
 backBtn.onclick=()=>{if(step>0)goStep(0)};
 $('resetBooking').onclick=()=>{location.assign('booking.html?lang='+lang)};
 applyLanguage();
}
start();
