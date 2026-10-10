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

const lang=getLang(), copy=T[lang], $=id=>document.getElementById(id);
const groupKeys=['laser','waxing','skin','acne','body','training'];
const W={
vi:{step:['Dịch vụ','Chuẩn bị','Ngày & giờ','Thông tin'],overline:'ĐẶT LỊCH TRỰC TUYẾN',hero:'Đặt lịch chăm sóc tại Miki',heroSub:'Chọn dịch vụ, xem giá và gửi yêu cầu đặt lịch chỉ trong vài bước.',stepCount:'BƯỚC',gender:'Dịch vụ dành cho',women:'Nữ',men:'Nam',categories:'Danh mục dịch vụ',choose:'Chọn một hoặc nhiều dịch vụ',chooseHint:'Chạm vào dịch vụ để thêm vào lịch hẹn. Giá tham khảo theo bảng giá Miki.',staff:'Nhân viên',staffAny:'Nhân viên phù hợp',staffDesc:'Miki sẽ bố trí nhân viên và liên hệ xác nhận.',selected:'Đã chọn',empty:'Chưa chọn dịch vụ',estimate:'Tổng giá tham khảo',next:'Tiếp tục',back:'Quay lại',confirm:'Gửi yêu cầu đặt lịch',prepTitle:'Chuẩn bị trước buổi hẹn',prepIntro:'Một vài thông tin giúp Miki đón tiếp bạn chu đáo hơn.',visit:'Đây có phải lần đầu đến Miki?',first:'Khách lần đầu',returning:'Đã từng đến',laserPrep:'Chuẩn bị vùng triệt lông',shaveHome:'Tôi sẽ cạo lông tại nhà theo hướng dẫn',shaveHelp:'Tôi cần Miki hỗ trợ tư vấn/cạo lông',shaveFee:'Nếu cần hỗ trợ tại spa, chi phí (nếu có) sẽ được báo trước, chưa cộng vào tổng giá.',prepNote:'Lưu ý trước khi đến',laserAdvice:'Tránh waxing/nhổ lông trước buổi triệt. Nếu vùng da bị kích ứng, mới rám nắng hoặc có lưu ý sức khỏe, hãy báo Miki để được tư vấn.',normalAdvice:'Nếu có da nhạy cảm, kích ứng hoặc yêu cầu đặc biệt, vui lòng ghi chú ở bước cuối.',contactTitle:'Ngày và giờ mong muốn',contactIntro:'Chọn khung giờ phù hợp với bạn. Đây là yêu cầu đặt lịch, chưa phải giờ trống được xác nhận.',date:'Chọn ngày',otherDate:'Chọn ngày khác',time:'Giờ mong muốn',timeNotice:'Miki sẽ kiểm tra lịch và xác nhận giờ hẹn qua kênh liên hệ.',profileTitle:'Thông tin đặt lịch',profileIntro:'Kiểm tra dịch vụ và để lại thông tin để Miki xác nhận lịch.',name:'Họ và tên',phone:'Số điện thoại',channel:'Kênh liên hệ',notes:'Ghi chú thêm (không bắt buộc)',notesPh:'Vùng da cần lưu ý, yêu cầu riêng, ngôn ngữ giao tiếp...',review:'Tóm tắt lịch hẹn',selectedServices:'Dịch vụ',preferred:'Giờ yêu cầu',customer:'Khách hàng',privacy:'Tôi đồng ý để Miki dùng thông tin này nhằm liên hệ xác nhận lịch hẹn.',terms:'Chính sách bảo mật',needed:'Vui lòng chọn ít nhất một dịch vụ.',needDate:'Vui lòng chọn ngày và giờ mong muốn.',needInfo:'Vui lòng nhập họ tên và số điện thoại hợp lệ.',needPrivacy:'Vui lòng đồng ý chính sách bảo mật để gửi yêu cầu.',send:'Đang gửi...',done:'Miki đã nhận yêu cầu đặt lịch',donePending:'Miki sẽ liên hệ xác nhận lịch và giá cuối cùng. Lịch chỉ được xác nhận sau khi Miki phản hồi.',doneFail:'Chưa thể lưu yêu cầu tự động. Bạn vui lòng gửi tin nhắn bằng nút bên dưới để đặt lịch.',viaWA:'Gửi tin nhắn qua WhatsApp',viaTG:'Mở Telegram với nội dung đặt lịch',copy:'Sao chép nội dung đặt lịch',copied:'Đã sao chép. Hãy dán vào cuộc trò chuyện Telegram với Miki.',copyHint:'Telegram mở cuộc trò chuyện với nội dung đặt lịch đã soạn. Bạn phải nhấn GỬI trong Telegram thì Miki mới nhận tin. Nếu không thấy nội dung, bấm Sao chép rồi dán vào Telegram.',map:'Chỉ đường tới Miki Spa',newBooking:'Đặt lịch khác',request:'YÊU CẦU ĐẶT LỊCH',forConfirm:'Giá và thời gian cần Miki xác nhận',staffNo:'Nhân viên sẽ được sắp xếp sau khi xác nhận',opening:'08:30–21:30 hằng ngày · nhận yêu cầu theo giờ hiển thị',contact:'Liên hệ nhanh'},
en:{step:['Services','Preparation','Date & time','Your details'],overline:'ONLINE BOOKING',hero:'Your Miki appointment',heroSub:'Select treatments, review prices and request an appointment in a few easy steps.',stepCount:'STEP',gender:'Treatments for',women:'Women',men:'Men',categories:'Service categories',choose:'Select one or more services',chooseHint:'Tap any treatment to add it. Prices are reference prices from Miki’s menu.',staff:'Specialist',staffAny:'Any suitable specialist',staffDesc:'Miki will assign a specialist and confirm with you.',selected:'Selected',empty:'No services selected',estimate:'Estimated total',next:'Continue',back:'Back',confirm:'Send booking request',prepTitle:'Prepare for your visit',prepIntro:'A few details help us get ready for you.',visit:'Is this your first visit to Miki?',first:'First visit',returning:'Returning guest',laserPrep:'Laser hair removal preparation',shaveHome:'I will shave at home as advised',shaveHelp:'I need shaving/preparation advice from Miki',shaveFee:'Any additional preparation fee, if applicable, will be quoted before the visit and is not included in the total.',prepNote:'Before your appointment',laserAdvice:'Avoid waxing or plucking before laser. Tell Miki about irritation, recent tanning or relevant health concerns so the team can advise.',normalAdvice:'Please mention sensitive skin or special requests in the final step.',contactTitle:'Preferred date & time',contactIntro:'Choose a convenient time. This is a booking request, not confirmed live availability.',date:'Choose a date',otherDate:'Another date',time:'Preferred time',timeNotice:'Miki will check the schedule and confirm via your chosen channel.',profileTitle:'Your booking details',profileIntro:'Review your selection and leave your contact information.',name:'Full name',phone:'Phone number',channel:'Contact channel',notes:'Additional notes (optional)',notesPh:'Sensitive areas, special requests, preferred language...',review:'Booking summary',selectedServices:'Services',preferred:'Requested time',customer:'Guest',privacy:'I agree that Miki may use my information to contact me about this booking.',terms:'Privacy policy',needed:'Please select at least one service.',needDate:'Please choose a date and preferred time.',needInfo:'Please enter your name and a valid phone number.',needPrivacy:'Please agree to the privacy policy before sending.',send:'Sending...',done:'Booking request received',donePending:'Miki will contact you to confirm your slot and final price. Your appointment is not confirmed until Miki responds.',doneFail:'Your request could not be saved automatically. Please send the message below to book.',viaWA:'Message Miki on WhatsApp',viaTG:'Open Telegram with booking details',copy:'Copy booking details',copied:'Copied. Paste the details in your Telegram chat with Miki.',copyHint:'Telegram opens with your booking details pre-filled. Tap SEND in the Miki chat to deliver the message. If the text is missing, copy the booking details and paste them in Telegram.',map:'Directions to Miki Spa',newBooking:'New booking',request:'BOOKING REQUEST',forConfirm:'Price and time subject to confirmation',staffNo:'Specialist assigned after confirmation',opening:'08:30–21:30 daily · requests within displayed hours',contact:'Quick contact'},
ko:{step:['서비스','방문 준비','날짜/시간','고객 정보'],overline:'온라인 예약',hero:'Miki 예약하기',heroSub:'서비스와 가격을 확인하고 예약을 요청하세요.',gender:'시술 대상',women:'여성',men:'남성',categories:'서비스 목록',choose:'하나 이상의 서비스 선택',chooseHint:'서비스를 눌러 추가하세요. 가격은 참고용입니다.',staff:'담당 직원',staffAny:'가능한 직원',staffDesc:'Miki가 담당자를 배정하고 확인합니다.',selected:'선택한 서비스',empty:'선택한 서비스 없음',estimate:'예상 합계',next:'다음',back:'이전',confirm:'예약 요청 보내기',prepTitle:'방문 전 준비',prepIntro:'방문 준비를 위한 몇 가지 질문입니다.',visit:'첫 방문인가요?',first:'첫 방문',returning:'재방문',laserPrep:'레이저 제모 준비',shaveHome:'안내에 따라 집에서 면도하겠습니다',shaveHelp:'Miki의 면도/준비 상담이 필요합니다',prepNote:'방문 전 안내',contactTitle:'희망 날짜와 시간',contactIntro:'선택한 시간은 요청이며 실시간 확정된 예약이 아닙니다.',date:'날짜 선택',otherDate:'다른 날짜',time:'희망 시간',profileTitle:'예약자 정보',name:'성함',phone:'전화번호',channel:'연락 방법',notes:'추가 요청 (선택)',review:'예약 요약',selectedServices:'서비스',preferred:'희망 시간',customer:'고객',privacy:'예약 확인을 위한 개인정보 이용에 동의합니다.',terms:'개인정보 처리방침',needed:'서비스를 선택해 주세요.',needDate:'날짜와 시간을 선택해 주세요.',needInfo:'이름과 유효한 전화번호를 입력하세요.',needPrivacy:'개인정보 처리방침에 동의해 주세요.',send:'전송 중...',done:'예약 요청을 받았습니다',donePending:'Miki가 시간과 최종 가격을 확인하여 연락드립니다.',doneFail:'자동 저장에 실패했습니다. 메시지로 연락해 주세요.',viaWA:'WhatsApp으로 메시지',viaTG:'예약 메시지로 Telegram 열기',copy:'예약 내용 복사',copied:'복사되었습니다.',map:'길찾기',newBooking:'새 예약',request:'예약 요청',copyHint:"Telegram에서 전송 버튼을 눌러야 Miki에게 예약 메시지가 전달됩니다. 내용이 비어 있으면 예약 내용을 복사해 붙여 넣으세요."},
zh:{step:['服务','到店准备','日期与时间','个人信息'],overline:'在线预约',hero:'预约 Miki Spa',heroSub:'选择服务、查看价格并提交预约申请。',gender:'服务对象',women:'女士',men:'男士',categories:'服务类别',choose:'选择一项或多项服务',chooseHint:'点击服务添加。所示价格仅供参考。',staff:'技师',staffAny:'安排合适技师',staffDesc:'Miki 将分配技师并与您确认。',selected:'已选服务',empty:'尚未选择服务',estimate:'参考总价',next:'下一步',back:'返回',confirm:'发送预约申请',prepTitle:'到店前准备',prepIntro:'请提供少量信息，以便我们准备。',visit:'第一次来 Miki 吗？',first:'首次到店',returning:'老顾客',laserPrep:'激光脱毛准备',shaveHome:'我会按说明在家剃毛',shaveHelp:'需要 Miki 协助准备/咨询',prepNote:'到店须知',contactTitle:'期望日期和时间',contactIntro:'时间仅为申请，尚未确认实时空位。',date:'选择日期',otherDate:'其他日期',time:'期望时间',profileTitle:'您的预约信息',name:'姓名',phone:'电话号码',channel:'联系方式',notes:'备注（可选）',review:'预约摘要',selectedServices:'服务',preferred:'申请时间',customer:'顾客',privacy:'我同意 Miki 为确认预约使用我的联系信息。',terms:'隐私政策',needed:'请至少选择一项服务。',needDate:'请选择日期和时间。',needInfo:'请输入姓名和有效电话号码。',needPrivacy:'请同意隐私政策。',send:'发送中...',done:'已收到预约申请',donePending:'Miki 将确认时间和最终价格，回复前预约尚未确定。',doneFail:'自动保存失败，请通过消息联系 Miki。',viaWA:'通过 WhatsApp 联系',viaTG:'打开 Telegram 预约消息',copy:'复制预约详情',copied:'已复制。',map:'导航至 Miki Spa',newBooking:'再次预约',request:'预约申请',copyHint:"在 Telegram 与 Miki 的聊天中点击发送，预约消息才会送达。如内容为空，请复制预约信息并粘贴发送。"},
ru:{step:['Услуги','Подготовка','Дата и время','Ваши данные'],overline:'ОНЛАЙН-ЗАПИСЬ',hero:'Запись в Miki Spa',heroSub:'Выберите услуги, посмотрите цены и отправьте заявку.',gender:'Услуги для',women:'Женщин',men:'Мужчин',categories:'Категории услуг',choose:'Выберите одну или несколько услуг',chooseHint:'Нажмите, чтобы добавить услугу. Цены ориентировочные.',staff:'Специалист',staffAny:'Любой доступный специалист',staffDesc:'Miki назначит специалиста и уточнит детали.',selected:'Выбрано',empty:'Услуги не выбраны',estimate:'Примерная сумма',next:'Продолжить',back:'Назад',confirm:'Отправить заявку',prepTitle:'Подготовка к визиту',prepIntro:'Немного информации для подготовки.',visit:'Вы у нас впервые?',first:'Первый визит',returning:'Повторный визит',laserPrep:'Подготовка к эпиляции',shaveHome:'Побрею зону дома по инструкции',shaveHelp:'Нужна помощь Miki с подготовкой',prepNote:'Перед визитом',contactTitle:'Желаемая дата и время',contactIntro:'Выбранное время — запрос, а не подтверждённая свободная запись.',date:'Выберите дату',otherDate:'Другая дата',time:'Желаемое время',profileTitle:'Ваши данные',name:'Имя',phone:'Телефон',channel:'Способ связи',notes:'Комментарий (необязательно)',review:'Детали записи',selectedServices:'Услуги',preferred:'Запрошенное время',customer:'Клиент',privacy:'Я согласен(-на) на использование данных для подтверждения записи.',terms:'Политика конфиденциальности',needed:'Выберите хотя бы одну услугу.',needDate:'Выберите дату и время.',needInfo:'Введите имя и корректный номер телефона.',needPrivacy:'Примите политику конфиденциальности.',send:'Отправка...',done:'Запрос на запись получен',donePending:'Miki подтвердит время и окончательную цену. До ответа запись не подтверждена.',doneFail:'Не удалось сохранить запрос. Отправьте сообщение ниже.',viaWA:'Написать в WhatsApp',viaTG:'Открыть Telegram с заявкой',copy:'Скопировать заявку',copied:'Скопировано.',map:'Маршрут до Miki Spa',newBooking:'Новая запись',request:'ЗАЯВКА НА ЗАПИСЬ',copyHint:"Нажмите «Отправить» в чате Telegram с Miki. Если текст не появился, скопируйте данные заявки и вставьте вручную."},
th:{step:['บริการ','เตรียมตัว','วันและเวลา','ข้อมูลลูกค้า'],overline:'จองคิวออนไลน์',hero:'จองคิวกับ Miki Spa',heroSub:'เลือกบริการ ดูราคา และส่งคำขอจองคิวได้ง่าย ๆ',gender:'บริการสำหรับ',women:'ผู้หญิง',men:'ผู้ชาย',categories:'หมวดบริการ',choose:'เลือกบริการหนึ่งรายการหรือมากกว่า',chooseHint:'แตะบริการเพื่อเพิ่ม ราคาที่แสดงเป็นราคาอ้างอิง',staff:'ผู้ให้บริการ',staffAny:'พนักงานที่ว่าง',staffDesc:'Miki จะจัดพนักงานและยืนยันอีกครั้ง',selected:'เลือกแล้ว',empty:'ยังไม่ได้เลือกบริการ',estimate:'ราคารวมโดยประมาณ',next:'ถัดไป',back:'ย้อนกลับ',confirm:'ส่งคำขอจอง',prepTitle:'เตรียมตัวก่อนมา',prepIntro:'ข้อมูลเล็กน้อยเพื่อเตรียมบริการให้คุณ',visit:'มาที่ Miki ครั้งแรกใช่ไหม?',first:'ครั้งแรก',returning:'เคยมาแล้ว',laserPrep:'การเตรียมก่อนเลเซอร์',shaveHome:'จะโกนขนที่บ้านตามคำแนะนำ',shaveHelp:'ต้องการคำแนะนำจาก Miki',prepNote:'ก่อนเข้ารับบริการ',contactTitle:'วันและเวลาที่ต้องการ',contactIntro:'เวลาที่เลือกเป็นคำขอ ยังไม่ได้รับการยืนยัน',date:'เลือกวันที่',otherDate:'วันที่อื่น',time:'เวลาที่ต้องการ',profileTitle:'ข้อมูลสำหรับการจอง',name:'ชื่อ-นามสกุล',phone:'เบอร์โทรศัพท์',channel:'ช่องทางติดต่อ',notes:'หมายเหตุ (ถ้ามี)',review:'สรุปการจอง',selectedServices:'บริการ',preferred:'เวลาที่ขอ',customer:'ลูกค้า',privacy:'ยินยอมให้ Miki ใช้ข้อมูลเพื่อติดต่อยืนยันการจอง',terms:'นโยบายความเป็นส่วนตัว',needed:'กรุณาเลือกบริการ',needDate:'กรุณาเลือกวันและเวลา',needInfo:'กรุณากรอกชื่อและเบอร์โทรที่ถูกต้อง',needPrivacy:'กรุณายอมรับนโยบายความเป็นส่วนตัว',send:'กำลังส่ง...',done:'ได้รับคำขอจองแล้ว',donePending:'Miki จะติดต่อยืนยันเวลาและราคาสุดท้าย',doneFail:'บันทึกอัตโนมัติไม่สำเร็จ กรุณาส่งข้อความด้านล่าง',viaWA:'ส่งข้อความผ่าน WhatsApp',viaTG:'เปิด Telegram พร้อมข้อความจอง',copy:'คัดลอกข้อมูลการจอง',copied:'คัดลอกแล้ว',map:'เส้นทางไป Miki Spa',newBooking:'จองใหม่',request:'คำขอจอง',copyHint:"กดส่งในแชต Telegram กับ Miki เพื่อส่งรายละเอียดการจอง หากข้อความไม่แสดง ให้คัดลอกข้อมูลแล้ววางในแชต"}
};
function tr(key){return W[lang]?.[key]||W.en[key]||key}
function price(item){
 let v=window.MIKI_CONTENT?.prices;
 for(const p of item.pricePath||[])v=v?.[p];
 return item.pricePath ? (v||item.price) : null;
}
function moneyToInt(v){const digits=String(v||'').replace(/[^0-9]/g,'');return digits?Number(digits):0}
function formatVnd(amount){return new Intl.NumberFormat('vi-VN').format(amount)+'đ'}
function serviceName(item){return lang==='vi'?item.vi:item.en}
const state={step:0,group:'laser',gender:'women',selected:new Map(),visit:'first',shave:'home',date:'',time:'',sent:false,msg:''};
const SERVICE_LOOKUP=new Map(CATALOG.map(x=>[x.key,x]));
const $steps=[...document.querySelectorAll('[data-step]')];
const $progress=[...document.querySelectorAll('[data-progress]')];
const todayParts=()=>Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));
function vnToday(){const p=todayParts();return p.year+'-'+p.month+'-'+p.day}
function dateLocal(base,plus){const d=new Date(base+'T12:00:00+07:00');d.setUTCDate(d.getUTCDate()+plus);return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit'}).format(d).replace(/\//g,'-')}
function dateStr(iso){if(!iso)return '—';const [y,m,d]=iso.split('-');return d+'/'+m+'/'+y}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function selectedItems(){return [...state.selected.keys()].map(k=>SERVICE_LOOKUP.get(k)).filter(Boolean)}
function estimatedTotal(){return selectedItems().reduce((sum,x)=>sum+moneyToInt(price(x)),0)}
function hasLaser(){return selectedItems().some(x=>x.group==='laser')}
function setTexts(){
 document.documentElement.lang=lang;document.title=copy.title;document.querySelector('meta[name="description"]').content=copy.description;
 document.querySelectorAll('[data-lang]').forEach(a=>{const active=a.dataset.lang===lang;a.classList.toggle('is-active',active);a.setAttribute('aria-current',active?'page':'false')});
 $('heroTitle').textContent=tr('hero');$('heroSub').textContent=tr('heroSub');
 $('introLabel').textContent=tr('overline');
 $progress.forEach((x,i)=>{x.querySelector('.progress-name').textContent=tr('step')[i]});
 $('genderTitle').textContent=tr('gender');$('femaleBtn').textContent='♀ '+tr('women');$('maleBtn').textContent='♂ '+tr('men');
 $('categoryTitle').textContent=tr('categories');$('menuTitle').textContent=tr('choose');$('menuHint').textContent=tr('chooseHint');
 $('staffTitle').textContent=tr('staff');$('staffAny').textContent=tr('staffAny');$('staffDesc').textContent=tr('staffDesc');
 $('preparationTitle').textContent=tr('prepTitle');$('prepIntro').textContent=tr('prepIntro');
 $('visitTitle').textContent=tr('visit');$('firstBtn').textContent=tr('first');$('returnBtn').textContent=tr('returning');
 $('laserPrepTitle').textContent=tr('laserPrep');$('shaveHome').textContent=tr('shaveHome');$('shaveHelp').textContent=tr('shaveHelp');$('shaveFee').textContent=tr('shaveFee');
 $('prepNoteTitle').textContent=tr('prepNote');
 $('calendarTitle').textContent=tr('contactTitle');$('calendarIntro').textContent=tr('contactIntro');
 $('dateLabel').textContent=tr('date');$('moreDateLabel').textContent=tr('otherDate');$('timeLabel').textContent=tr('time');$('timeNotice').textContent=tr('timeNotice');
 $('profileTitle').textContent=tr('profileTitle');$('profileIntro').textContent=tr('profileIntro');
 $('nameLabel').textContent=tr('name');$('phoneLabel').textContent=tr('phone');
 $('channelLabel').textContent=tr('channel');$('noteLabel').textContent=tr('notes');$('note').placeholder=tr('notesPh');
 $('reviewTitle').textContent=tr('review');
 $('privacyCopy').textContent=tr('privacy');$('privacyLink').textContent=tr('terms');
 $('summaryHead').textContent=tr('selected');$('summaryPriceLabel').textContent=tr('estimate');
 $('doneTitle').textContent=tr('done');$('wa').textContent=tr('viaWA');$('copyBooking').textContent=tr('copy');$('mapDone').textContent=tr('map');
 $('restart').textContent=tr('newBooking');$('copyHint').textContent=tr('copyHint');
 $('openingHours').textContent=tr('opening');
 $('quickContact').textContent=tr('contact');
}
function renderGroups(){
 const wrap=$('groups');wrap.replaceChildren();
 groupKeys.forEach((key,i)=>{
   const button=document.createElement('button');button.type='button';button.className='group-chip';button.textContent=GROUPS[lang][i];
   button.setAttribute('aria-pressed',String(state.group===key));
   if(state.group===key)button.classList.add('selected');
   button.onclick=()=>{state.group=key;renderGroups();renderServices()};
   wrap.appendChild(button);
 });
 const laser=state.group==='laser';$('genderArea').hidden=!laser;
 $('femaleBtn').classList.toggle('selected',state.gender==='women');$('maleBtn').classList.toggle('selected',state.gender==='men');
 $('femaleBtn').setAttribute('aria-pressed',String(state.gender==='women'));
 $('maleBtn').setAttribute('aria-pressed',String(state.gender==='men'));
}
function renderServices(){
 const area=$('services');area.replaceChildren();
 const items=CATALOG.filter(x=>x.group===state.group&&(state.group!=='laser'||x.section===(state.gender==='women'?'laser-women':'laser-men')));
 for(const item of items){
  const checked=state.selected.has(item.key);
  const card=document.createElement('label');card.className='treatment'+(checked?' selected':'');
  const input=document.createElement('input');input.type='checkbox';input.checked=checked;input.value=item.key;input.name='services';
  input.onchange=()=>{if(input.checked)state.selected.set(item.key,true);else state.selected.delete(item.key);renderServices();renderSummary();renderFooter()};
  const dot=document.createElement('span');dot.className='checkmark';dot.setAttribute('aria-hidden','true');dot.textContent=checked?'✓':'';
  const label=document.createElement('span');label.className='treatment-title';label.textContent=serviceName(item);
  const amount=document.createElement('strong');amount.className='treatment-price';amount.textContent=price(item)||'—';
  card.append(input,dot,label,amount);area.appendChild(card);
 }
}
function renderSummary(){
 const wrap=$('summaryList');wrap.replaceChildren();
 const list=selectedItems();
 if(!list.length){const p=document.createElement('p');p.className='empty-summary';p.textContent=tr('empty');wrap.appendChild(p)}
 else for(const item of list){const row=document.createElement('div');row.className='summary-item';
   const n=document.createElement('span');n.textContent=serviceName(item);
   const amt=document.createElement('b');amt.textContent=price(item)||'—';row.append(n,amt);wrap.appendChild(row);
 }
 $('total').textContent=list.some(x=>!price(x)) ? formatVnd(estimatedTotal())+' + '+(lang==='vi'?'tư vấn':'consultation') : formatVnd(estimatedTotal());
 $('amountWarning').textContent=tr('forConfirm');$('staffWarning').textContent=tr('staffNo');
 $('summaryDate').textContent=state.date?dateStr(state.date)+(state.time?' · '+state.time:''):'—';
 $('summaryDateRow').hidden=!state.date;
}
function renderPrep(){
 const laser=hasLaser();
 $('laserPreparation').hidden=!laser;
 $('prepNoteText').textContent=laser?tr('laserAdvice'):tr('normalAdvice');
 $('firstBtn').classList.toggle('selected',state.visit==='first');
 $('returnBtn').classList.toggle('selected',state.visit==='returning');
 $('shaveHomeBtn').classList.toggle('selected',state.shave==='home');
 $('shaveHelpBtn').classList.toggle('selected',state.shave==='help');
}
function renderDates(){
 const dayList=$('dateChoices');dayList.replaceChildren();
 const base=vnToday();$('date').min=base;
 const [y,m,d]=base.split('-').map(Number);
 for(let i=0;i<7;i++){
  const dt=new Date(Date.UTC(y,m-1,d+i,12));
  const iso=dt.toISOString().slice(0,10);
  const btn=document.createElement('button');btn.type='button';btn.className='date-tile';
  if(iso===state.date)btn.classList.add('selected');
  const locale=({vi:'vi-VN',en:'en-US',ko:'ko-KR',zh:'zh-CN',ru:'ru-RU',th:'th-TH'})[lang];
  const weekday=new Intl.DateTimeFormat(locale,{weekday:'short',timeZone:'UTC'}).format(dt);
  btn.innerHTML='<small>'+esc(weekday)+'</small><strong>'+dtoa(i, d,m,y)+'</strong><span>'+esc(new Intl.DateTimeFormat(locale,{month:'short',timeZone:'UTC'}).format(dt))+'</span>';
  btn.onclick=()=>{state.date=iso;state.time='';$('date').value=iso;renderDates();renderTimes();renderSummary()};
  dayList.appendChild(btn);
 }
 $('date').value=state.date;
}
function dtoa(i,day,month,year){return String(new Date(Date.UTC(year,month-1,day+i,12)).getUTCDate())}
function renderTimes(){
 const area=$('times');area.replaceChildren();
 const p=todayParts();const now=Number(p.hour)*60+Number(p.minute);
 for(let h=9;h<=20;h++)for(const mm of [0,30]){
  if(h===20&&mm===30)continue;
  const total=h*60+mm, t=String(h).padStart(2,'0')+':'+String(mm).padStart(2,'0');
  const past=state.date===vnToday()&&total<=now+45;
  const b=document.createElement('button');b.type='button';b.className='time-tile';b.textContent=t;b.disabled=past;
  if(t===state.time)b.classList.add('selected');
  b.onclick=()=>{state.time=t;renderTimes();renderSummary()};
  area.appendChild(b);
 }
}
function renderReview(){
 const items=selectedItems();
 const rows=[
 [tr('selectedServices'),items.map(serviceName).join(', ')],
 [tr('estimate'),$('total').textContent],
 [tr('preferred'),dateStr(state.date)+' · '+state.time],
 [tr('customer'),$('name').value.trim()],
 [tr('phone'),$('phone').value.trim()],
 [tr('channel'),$('channel').value]];
 $('reviewRows').replaceChildren();
 for(const [key,value] of rows){
  const row=document.createElement('div');row.className='review-row';
  const k=document.createElement('span');k.textContent=key;const v=document.createElement('b');v.textContent=value||'—';
  row.append(k,v);$('reviewRows').appendChild(row);
 }
}
function renderFooter(){
 const n=state.step;
 $('stepBadge').textContent=tr('stepCount')+' '+(n+1)+' / 4';
 $('next').textContent=n===3?tr('confirm'):tr('next');
 $('back').textContent=tr('back');$('back').hidden=n===0;
 $('next').disabled=state.sent;
 $steps.forEach((el,i)=>el.hidden=i!==n);
 $progress.forEach((el,i)=>{el.classList.toggle('active',i===n);el.classList.toggle('completed',i<n);el.setAttribute('aria-current',i===n?'step':'false')});
 $('sideSummary').hidden=state.sent;
 if(n===3)renderReview();
}
function goStep(n){state.step=n;renderFooter();$('bookingCard').scrollIntoView({behavior:'smooth',block:'start'})}
function validateStep(){
 if(state.step===0&&!selectedItems().length){alert(tr('needed'));return false}
 if(state.step===2&&(!state.date||!state.time)){alert(tr('needDate'));return false}
 if(state.step===3){
   if(!$('name').value.trim()||$('phone').value.replace(/[^\d]/g,'').length<8){alert(tr('needInfo'));return false}
   if(!$('privacy').checked){alert(tr('needPrivacy'));return false}
 }
 return true;
}
function composeMessage(code){
 const m=copy.msg,items=selectedItems();
 return [code?'Request: '+code:'',tr('request'),m.guest+': '+$('name').value.trim(),m.phone+': '+$('phone').value.trim(),
 m.service+': '+items.map(x=>serviceName(x)+' ('+(price(x)||'—')+')').join('; '),
 m.price+': '+$('total').textContent,m.date+': '+state.date,m.time+': '+state.time,
 m.contact+': '+$('channel').value,'First visit: '+state.visit,
 hasLaser()?'Preparation: '+state.shave:'',m.note+': '+($('note').value||'-'),'Language: '+lang.toUpperCase()
 ].filter(Boolean).join('\n');
}
async function finish(){
 if(state.sent)return;
 state.sent=true;$('next').disabled=true;$('next').textContent=tr('send');
 const selected=selectedItems(),serviceSummary=selected.map(x=>serviceName(x)).join(' + ');
 const priceSummary=$('total').textContent;
 const preparationNote=(hasLaser()?'Laser preparation: '+state.shave+'. ':'')+'Visit: '+state.visit+'. '+$('note').value.trim();
 let result={ok:false};
 try{
   if(window.MikiCRM?.submitBooking)result=await window.MikiCRM.submitBooking({
     name:$('name').value.trim(),phone:$('phone').value.trim(),service:serviceSummary,
     price:priceSummary,date:state.date,time:state.time,channel:$('channel').value,note:preparationNote
   });
 }catch(e){}
 const msg=composeMessage(result.code||'');state.msg=msg;
 const tg=$('channel').value==='Telegram';
 $('wa').href=tg?'https://t.me/+84935555170':'https://wa.me/84935555170?text='+encodeURIComponent(msg);
 $('wa').textContent=tg?tr('viaTG'):tr('viaWA');
 $('copyBooking').hidden=!tg;$('copyHint').hidden=!tg;
 $('doneStatus').textContent=result.ok?tr('donePending'):tr('doneFail');
 $('doneTitle').textContent=result.ok?tr('done'):(lang==='vi'?'Gửi tin nhắn để Miki nhận yêu cầu':'Send a message to finish your request');
 $('doneCode').textContent=result.code?'#'+result.code:'';
 $('bookingCard').hidden=true;$('doneCard').hidden=false;
 window.mikiAnalytics?.track('booking_message_ready',{booking_flow:'standard',contact_channel:$('channel').value.toLowerCase(),placement:'booking'});
 window.scrollTo({top:0,behavior:'smooth'});
}
function init(){
 setTexts();
 const selectedParam=new URLSearchParams(location.search).get('service');
 if(selectedParam){const item=CATALOG.find(x=>x.key===selectedParam);if(item){state.selected.set(item.key,true);state.group=item.group;if(item.group==='laser')state.gender=item.section==='laser-men'?'men':'women'}}
 $('femaleBtn').onclick=()=>{state.gender='women';CATALOG.filter(x=>x.group==='laser'&&x.section==='laser-men').forEach(x=>state.selected.delete(x.key));renderGroups();renderServices();renderSummary()};
 $('maleBtn').onclick=()=>{state.gender='men';CATALOG.filter(x=>x.group==='laser'&&x.section==='laser-women').forEach(x=>state.selected.delete(x.key));renderGroups();renderServices();renderSummary()};
 $('firstBtn').onclick=()=>{state.visit='first';renderPrep()};
 $('returnBtn').onclick=()=>{state.visit='returning';renderPrep()};
 $('shaveHomeBtn').onclick=()=>{state.shave='home';renderPrep()};
 $('shaveHelpBtn').onclick=()=>{state.shave='help';renderPrep()};
 $('date').onchange=()=>{state.date=$('date').value;state.time='';renderDates();renderTimes();renderSummary()};
 $('next').onclick=async()=>{if(!validateStep())return;if(state.step<3){goStep(state.step+1);return}await finish()};
 $('back').onclick=()=>{if(state.step>0)goStep(state.step-1)};
 $('name').oninput=renderReview;$('phone').oninput=renderReview;$('channel').onchange=renderReview;
 $('copyBooking').onclick=async()=>{try{await navigator.clipboard.writeText(state.msg);$('copiedStatus').textContent=tr('copied')}catch(e){$('copiedStatus').textContent=state.msg}};
 $('wa').addEventListener('click',async(e)=>{
  if($('channel').value!=='Telegram')return;
  e.preventDefault();
  const copying=navigator.clipboard?.writeText(state.msg);
  window.open($('wa').href,'_blank','noopener');
  if(copying){copying.then(()=>{$('copiedStatus').textContent=tr('copied')}).catch(()=>{$('copiedStatus').textContent=state.msg})}
  else {$('copiedStatus').textContent=state.msg}
 });
 $('restart').onclick=()=>{location.assign('booking.html?lang='+lang)};
 $('date').min=vnToday();
 renderGroups();renderServices();renderSummary();renderPrep();renderDates();renderTimes();renderFooter();
}
init();
