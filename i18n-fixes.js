window.MIKI_FIXES={vi:{},en:{},ko:{},zh:{},ru:{}};
// Vietnamese source and the four supported customer languages.
const mikiCopyRows=[
['Waxing dịch vụ Miki Spa','Waxing at Miki Spa','Miki Spa 왁싱','Miki Spa 蜜蜡脱毛','Ваксинг в Miki Spa'],
['Waxing tại Miki Skin Spa','Waxing at Miki Skin Spa','Miki Skin Spa 왁싱','Miki Skin Spa 蜜蜡脱毛','Ваксинг в Miki Skin Spa'],
['Chăm sóc da Miki Spa','Skincare at Miki Spa','Miki Spa 스킨케어','Miki Spa 皮肤护理','Уход за кожей в Miki Spa'],
['Điều trị mụn Miki Spa','Acne care at Miki Spa','Miki Spa 여드름 케어','Miki Spa 痘肌护理','Уход за проблемной кожей в Miki Spa'],
['Không gian điều trị mụn tại Miki Skin Spa','Acne care space at Miki Skin Spa','Miki Skin Spa 여드름 케어 공간','Miki Skin Spa 痘肌护理空间','Кабинет ухода за проблемной кожей в Miki Skin Spa'],
['Đào tạo học viên Miki Spa Academy','Miki Spa Academy training','Miki Spa Academy 교육','Miki Spa Academy 培训','Обучение в Miki Spa Academy'],
['Thông tin thiết bị BM 109 tại Miki Skin Spa','BM 109 equipment information at Miki Skin Spa','Miki Skin Spa BM 109 장비 안내','Miki Skin Spa BM 109 设备介绍','Информация об аппарате BM 109 в Miki Skin Spa'],
['Google Reviews (100+ Đánh giá)','Google Reviews (100+ reviews)','Google 리뷰 (100개 이상)','Google 评价（100+条）','Google: более 100 отзывов'],
['Sạch sẽ & Phục vụ 1-on-1 Riêng tư','Clean, private one-to-one care','청결한 공간 · 일대일 프라이빗 케어','清洁环境 · 一对一私密护理','Чистота и индивидуальный уход'],
['Laser Hàn Băng ICE Cooling','Laser with ICE Cooling','아이스 쿨링 레이저','冰点冷却激光','Лазер с охлаждением ICE'],
['📍 47 Cô Giang, Hải Châu, Đà Nẵng (Cách Cầu Rồng 5 phút)','📍 47 Co Giang, Hai Chau, Da Nang (5 minutes from Dragon Bridge)','📍 47 Co Giang, Hai Chau, Da Nang (용다리에서 5분)','📍 47 Co Giang, Hai Chau, Da Nang（距龙桥5分钟）','📍 47 Co Giang, Hai Chau, Da Nang (5 минут от моста Дракона)'],
['01 · DỊCH VỤ NỔI BẬT','01 · FEATURED SERVICES','01 · 주요 서비스','01 · 精选服务','01 · ОСНОВНЫЕ УСЛУГИ'],
['Các nhóm dịch vụ được trình bày rõ ràng kèm hình ảnh trải nghiệm thực tế để khách dễ chọn đúng nhu cầu, tham khảo mức giá và đặt lịch thuận tiện.','Explore services and photos, compare prices and choose the care that suits you.','서비스 사진과 가격을 살펴보고 나에게 맞는 케어를 예약하세요.','浏览服务照片、比较价格，轻松选择适合您的护理。','Посмотрите фото услуг и цены, чтобы выбрать подходящий уход.'],
['✦ Dịch vụ được yêu thích nhất','✦ Guest favourite','✦ 인기 서비스','✦ 热门服务','✦ Выбор гостей'],
['Xem bảng giá & Đặt lịch →','View prices & book →','가격 확인 및 예약 →','查看价格并预约 →','Цены и запись →'],
['Sạch mịn nhanh chóng','Quick, smooth results','빠르고 매끄러운 케어','快捷光滑护理','Быстрый уход для гладкости'],
['Đặt lịch trải nghiệm →','Book your visit →','방문 예약 →','预约体验 →','Записаться →'],
['Cấp ẩm & Phục hồi','Hydration & recovery','보습 및 회복 케어','补水与修护','Увлажнение и восстановление'],
['Tư vấn da miễn phí →','Free skin consultation →','무료 피부 상담 →','免费皮肤咨询 →','Бесплатная консультация →'],
['Đặt lịch khám da →','Book a skin consultation →','피부 상담 예약 →','预约皮肤咨询 →','Запись на консультацию →'],
['Dưỡng thể thư thái','Relaxing body care','편안한 바디 케어','舒缓身体护理','Расслабляющий уход за телом'],
['INTERNATIONAL GUESTS & KẾT NỐI','INTERNATIONAL GUESTS & CONTACT','해외 고객 및 문의','国际宾客与联系','ИНОСТРАННЫМ ГОСТЯМ · КОНТАКТЫ'],
['Dành cho khách Việt Nam & Quốc tế.','For local and international guests.','현지 고객과 해외 고객 모두를 위해.','欢迎本地及国际宾客。','Для местных и иностранных гостей.'],
['Miki chào đón du khách quốc tế ghé thăm Đà Nẵng! Bạn có thể quét QR hoặc nhắn tin trực tiếp qua WhatsApp, Telegram, Zalo hoặc Facebook.','Visiting Da Nang? Scan a QR code or contact Miki on WhatsApp, Telegram, Zalo or Facebook.','다낭 여행 중이신가요? QR 코드를 스캔하거나 WhatsApp, Telegram, Zalo, Facebook으로 문의하세요.','来岘港旅行？扫描二维码或通过 WhatsApp、Telegram、Zalo、Facebook 联系 Miki。','В гостях в Дананге? Сканируйте QR-код или напишите Miki в WhatsApp, Telegram, Zalo или Facebook.'],
['Nhắn Miki qua WhatsApp để hỏi dịch vụ, giá cả, chỉ dẫn đường đi hoặc hẹn giờ.','Message Miki on WhatsApp for services, prices, directions or bookings.','서비스, 가격, 길 안내 및 예약은 WhatsApp으로 문의하세요.','通过 WhatsApp 咨询服务、价格、路线或预约。','Напишите в WhatsApp, чтобы узнать об услугах, ценах, маршруте или записи.'],
['Zalo (Việt Nam)','Zalo (Vietnam)','Zalo (베트남)','Zalo（越南）','Zalo (Вьетнам)'],
['Quét QR hoặc mở Zalo liên hệ trực tiếp Miki qua hotline 0935 555 170.','Scan the QR code or contact Miki on Zalo: 0935 555 170.','QR 코드를 스캔하거나 Zalo로 문의하세요: 0935 555 170.','扫描二维码或通过 Zalo 联系：0935 555 170。','Сканируйте QR-код или свяжитесь через Zalo: 0935 555 170.'],
['Vị Trí Trung Tâm','Central location','도심 위치','市中心位置','В центре города'],
['• Cách Cầu Rồng 5 phút di chuyển.','• 5 minutes from Dragon Bridge.','• 용다리에서 5분 거리.','• 距龙桥5分钟。','• 5 минут от моста Дракона.'],
['• Dễ dàng book Grab / Taxi cho du khách.','• Easy access by Grab or taxi.','• Grab 또는 택시로 편리하게 방문.','• 可方便搭乘 Grab 或出租车。','• Удобно добраться на Grab или такси.'],
['Xem Chỉ Đường Google Maps →','Directions on Google Maps →','Google Maps 길 안내 →','Google Maps 导航 →','Маршрут в Google Maps →'],
['Khám phá ngay →','Explore now →','자세히 보기 →','立即了解 →','Подробнее →'],
['Miki Skin Spa là không gian chăm sóc nhỏ gọn, ấm cúng tại Hải Châu, tập trung vào triệt lông, waxing, chăm sóc da và hỗ trợ da mụn trong môi trường riêng tư, dễ chịu.','A welcoming studio in Hai Chau for laser hair removal, waxing and skincare, with private, attentive care.','하이쩌우의 아늑한 공간에서 레이저 제모, 왁싱, 스킨케어를 프라이빗하게 받아보세요.','位于海洲的温馨工作室，提供激光脱毛、蜜蜡脱毛和私密细致的皮肤护理。','Уютная студия в Хайчау: лазерная эпиляция, ваксинг и внимательный уход за кожей в приватной обстановке.'],
['Triệt lông bằng Diode Laser theo từng vùng, kèm tư vấn theo đặc điểm lông và tình trạng da.','Diode laser hair removal by area, with advice based on your skin and hair.','피부와 모발 상태에 맞춘 상담 및 부위별 다이오드 레이저 제모.','按部位进行半导体激光脱毛，并根据皮肤和毛发情况提供咨询。','Диодная лазерная эпиляция по зонам с учётом состояния кожи и волос.'],
['Dành cho học viên muốn học nghề spa theo hướng thực hành, tập trung vào thao tác thực tế, vệ sinh nghề nghiệp, quy trình dịch vụ và kỹ năng chăm sóc khách hàng.','Practical spa training focused on technique, hygiene, service procedures and customer care.','실무 기술, 위생, 서비스 절차와 고객 응대에 집중하는 스파 교육.','注重实操技术、职业卫生、服务流程和客户护理的水疗培训。','Практическое обучение: техника, гигиена, порядок процедур и работа с клиентами.'],
['Chăm sóc da · Trải nghiệm tham khảo','Skincare · Service preview','스킨케어 · 서비스 안내','皮肤护理 · 服务介绍','Уход за кожей · Обзор услуги'],
['Triệt lông · Trải nghiệm tham khảo','Hair removal · Service preview','제모 · 서비스 안내','脱毛 · 服务介绍','Эпиляция · Обзор услуги'],
['Da mụn · Trải nghiệm tham khảo','Acne care · Service preview','여드름 케어 · 서비스 안내','痘肌护理 · 服务介绍','Уход за проблемной кожей · Обзор'],
['Không gian nhẹ nhàng và riêng tư, phù hợp với khách muốn chăm sóc da định kỳ và thư giãn.','A calm, private space for regular skincare and relaxation.','정기적인 피부 관리와 휴식을 위한 조용하고 프라이빗한 공간.','安静私密的空间，适合定期皮肤护理与放松。','Спокойная приватная обстановка для регулярного ухода и отдыха.'],
['Quy trình được giới thiệu rõ ràng, chú trọng vệ sinh, sự riêng tư và cảm giác thoải mái trong suốt buổi hẹn.','Clear treatment guidance, with attention to hygiene, privacy and comfort.','위생, 프라이버시와 편안함을 고려한 명확한 관리 안내.','清晰介绍护理流程，重视卫生、隐私与舒适。','Понятное описание процедур, внимание к гигиене, приватности и комфорту.'],
['Nội dung tư vấn tập trung vào cách chăm sóc phù hợp và hướng dẫn tại nhà theo tình trạng da thực tế.','Advice on suitable care and home routines based on your skin condition.','피부 상태에 맞는 관리 및 홈케어 안내.','根据实际肤况提供护理与居家保养建议。','Рекомендации по уходу и домашним процедурам с учётом состояния кожи.']
];
for(const [key,...values] of mikiCopyRows) ['en','ko','zh','ru'].forEach((l,i)=>window.MIKI_FIXES[l][key]=values[i]);
const heroSource='Miki Skin Spa là không gian chăm sóc da và làm đẹp ấm cúng tại Đà Nẵng, tập trung vào triệt lông, waxing, chăm sóc da, hỗ trợ da mụn và chăm sóc cơ thể. Miki ưu tiên sự sạch sẽ, riêng tư, tư vấn rõ ràng và cảm giác thoải mái trong từng buổi hẹn — cho cả khách Việt Nam và khách quốc tế.';
for(const [lang,text] of Object.entries({vi:'Triệt lông, waxing và chăm sóc da tại Đà Nẵng. Không gian riêng tư, tư vấn rõ ràng, chăm sóc theo nhu cầu của bạn.',en:'Laser hair removal, waxing and skincare in Da Nang. Private care, clear advice and treatments tailored to you.',ko:'다낭에서 만나는 레이저 제모, 왁싱, 스킨케어. 프라이빗 공간에서 명확한 상담과 맞춤 케어를 제공합니다.',zh:'岘港激光脱毛、蜜蜡脱毛与皮肤护理。私密空间，清晰咨询，为您提供适合的护理。',ru:'Лазерная эпиляция, ваксинг и уход за кожей в Дананге. Приватная обстановка, понятные рекомендации и индивидуальный уход.'}))window.MIKI_FIXES[lang][heroSource]=text;

// 2026-09-14 UI polish copy additions
const mikiUiPolishRows=[
['Laser Hair Removal.','Laser Hair Removal.','레이저 제모.','激光脱毛。','Лазерная эпиляция.'],
['Skin Care in Da Nang.','Skin Care in Da Nang.','다낭 스킨케어.','岘港皮肤护理。','Уход за кожей в Дананге.'],
['Private care · Clear consultation · Comfortable experience.','Private care · Clear consultation · Comfortable experience.','프라이빗 케어 · 명확한 상담 · 편안한 경험.','私密护理 · 清晰咨询 · 舒适体验。','Приватный уход · понятная консультация · комфортный опыт.'],
['Miki Skin Spa tập trung vào triệt lông, chăm sóc da, hỗ trợ da mụn, waxing và body care trong không gian riêng tư, sạch sẽ và nhẹ nhàng tại Đà Nẵng.','Miki Skin Spa focuses on laser hair removal, skin care, acne-support care, waxing and body care in a private, clean and gentle space in Da Nang.','Miki Skin Spa는 다낭에서 프라이빗하고 청결한 공간에서 레이저 제모, 스킨케어, 여드름 피부 케어, 왁싱, 바디 케어를 제공합니다.','Miki Skin Spa 在岘港提供激光脱毛、皮肤护理、痘肌护理、蜜蜡脱毛和身体护理，空间私密、干净、舒适。','Miki Skin Spa в Дананге предлагает лазерную эпиляцию, уход за кожей, уход за кожей с акне, ваксинг и уход за телом в приватной, чистой и комфортной обстановке.'],
['Xem bảng giá →','View pricing →','가격 보기 →','查看价格 →','Смотреть цены →'],
['Google Reviews','Google Reviews','Google 리뷰','Google 评价','Отзывы Google'],
['Riêng tư · sạch sẽ','Private · clean','프라이빗 · 청결','私密 · 干净','Приватно · чисто'],
['Thiết bị triệt lông Miki','Miki hair-removal equipment','미키 제모 장비','Miki 脱毛设备','Аппарат для удаления волос Miki'],
['Các dịch vụ chính tại Miki.','Main services at Miki.','미키의 주요 서비스.','Miki 的主要服务。','Основные услуги Miki.'],
['Những nhóm dịch vụ khách chọn nhiều nhất, trình bày ngắn gọn để bạn dễ xem hình, tham khảo giá và đặt lịch nhanh.','The most requested service groups, presented briefly so you can view photos, check prices and book quickly.','사진, 가격, 예약을 빠르게 볼 수 있도록 많이 찾는 서비스를 간단히 정리했습니다.','将顾客常选服务简洁展示，方便您快速看图、参考价格并预约。','Самые востребованные услуги показаны кратко, чтобы было удобно посмотреть фото, цены и быстро записаться.'],
['02 · BẢNG GIÁ THAM KHẢO','02 · REFERENCE PRICING','02 · 가격 안내','02 · 参考价格','02 · СПРАВОЧНЫЕ ЦЕНЫ'],
['Xem nhanh các mức giá phổ biến trước, sau đó mở từng nhóm dịch vụ để xem chi tiết đầy đủ.','See popular prices first, then open each service group for full details.','인기 가격을 먼저 보고, 이후 각 서비스 그룹의 상세 내용을 확인하세요.','先查看热门价格，再打开各服务组查看完整详情。','Сначала посмотрите популярные цены, затем откройте нужную группу услуг для подробностей.'],
['03 · THIẾT BỊ MIKI ĐANG SỬ DỤNG','03 · MIKI EQUIPMENT','03 · MIKI 사용 장비','03 · MIKI 使用设备','03 · ОБОРУДОВАНИЕ MIKI'],
['Thiết bị thật.','Real equipment.','실제 장비.','真实设备。','Реальное оборудование.'],
['Thông tin ngắn gọn, dễ hiểu.','Short, clear information.','짧고 이해하기 쉬운 정보.','简洁易懂的信息。','Краткая и понятная информация.'],
['Miki ưu tiên giới thiệu đúng tên máy, hình ảnh thật và những điểm khách cần biết trước khi đặt lịch.','Miki prioritises the correct device name, real photos and the key points guests should know before booking.','Miki는 장비의 정확한 이름, 실제 사진, 예약 전 고객이 알아야 할 핵심 내용을 우선 소개합니다.','Miki 优先展示准确的设备名称、真实图片以及预约前顾客需要了解的重点。','Miki в первую очередь показывает точное название аппарата, реальные фото и ключевую информацию перед записью.'],
['BM 109 · ICE COOLING','BM 109 · ICE COOLING','BM 109 · 아이스 쿨링','BM 109 · 冰点冷却','BM 109 · ОХЛАЖДЕНИЕ ICE'],
['Thiết bị triệt lông Miki đang sử dụng.','The hair-removal device used at Miki.','Miki에서 사용하는 제모 장비입니다.','Miki 正在使用的脱毛设备。','Аппарат для эпиляции, который использует Miki.'],
['BM 109 Hàn Băng -25°C là thiết bị Miki đang dùng cho dịch vụ triệt lông. Hình ảnh thực tế giúp khách dễ hình dung hơn trước khi đến spa.','BM 109 Hàn Băng -25°C is the device Miki uses for hair-removal services. Real photos help guests know what to expect before visiting.','BM 109 한방 -25°C는 Miki의 제모 서비스에 사용되는 장비입니다. 실제 사진으로 방문 전 더 쉽게 이해할 수 있습니다.','BM 109 韩冰 -25°C 是 Miki 用于脱毛服务的设备。真实图片能让顾客在到店前更直观地了解。','BM 109 Hàn Băng -25°C — аппарат, который Miki использует для эпиляции. Реальные фото помогают понять, чего ожидать до визита.'],
['04 · HÌNH ẢNH & VIDEO THỰC TẾ','04 · REAL PHOTOS & VIDEOS','04 · 실제 사진 & 영상','04 · 真实图片与视频','04 · РЕАЛЬНЫЕ ФОТО И ВИДЕО'],
['Không gian thật.','Real space.','실제 공간.','真实空间。','Реальное пространство.'],
['Hình ảnh thật từ Miki.','Real visuals from Miki.','Miki의 실제 이미지.','Miki 的真实图片。','Реальные кадры от Miki.'],
['05 · FIRST TIME AT MIKI','05 · FIRST TIME AT MIKI','05 · MIKI 첫 방문 가이드','05 · 初次到 MIKI','05 · ПЕРВЫЙ ВИЗИТ В MIKI'],
['4 bước đơn giản để bạn yên tâm trước buổi hẹn.','4 simple steps so you feel confident before your appointment.','예약 전에 안심할 수 있는 4단계 안내입니다.','4 个简单步骤，让您在到店前更安心。','4 простых шага, чтобы чувствовать себя спокойнее перед визитом.'],
['06 · GOOGLE REVIEWS','06 · GOOGLE REVIEWS','06 · GOOGLE 리뷰','06 · GOOGLE 评价','06 · GOOGLE ОТЗЫВЫ'],
['Khách hàng nói gì sau khi đến Miki.','What guests say after visiting Miki.','방문 후 고객의 이야기.','顾客到店后的评价。','Что говорят гости после визита в Miki.'],
['08 · FAQ CHUYÊN SÂU','08 · DETAILED FAQ','08 · 상세 FAQ','08 · 深入 FAQ','08 · ПОДРОБНЫЙ FAQ'],
['Câu hỏi phổ biến trước khi chọn dịch vụ.','Popular questions before choosing a service.','서비스 선택 전 자주 묻는 질문.','选择服务前的常见问题。','Популярные вопросы перед выбором услуги.'],
['Xem thêm câu hỏi','Show more questions','질문 더 보기','查看更多问题','Показать больше вопросов'],
['Thu gọn câu hỏi','Show fewer questions','질문 접기','收起问题','Свернуть вопросы'],
['KẾT NỐI NHANH','QUICK CONTACT','빠른 문의','快速联系','БЫСТРАЯ СВЯЗЬ'],
['Liên hệ nhanh.','Quick contact.','빠른 연락.','快速联系。','Быстрый контакт.'],
['Rõ ràng và dễ dùng.','Clear and easy to use.','명확하고 사용하기 쉽습니다.','清晰且易于使用。','Понятно и удобно.'],
['SẴN SÀNG ĐẶT LỊCH TẠI MIKI?','READY TO BOOK AT MIKI?','MIKI 예약을 시작할까요?','准备在 MIKI 预约吗？','ГОТОВЫ ЗАПИСАТЬСЯ В MIKI?'],
['Chọn dịch vụ phù hợp.','Choose the right service.','원하는 서비스를 선택하세요.','选择适合您的服务。','Выберите подходящую услугу.'],
['Miki hỗ trợ sắp xếp giờ thuận tiện cho bạn.','Miki helps arrange a convenient time for you.','편한 시간으로 안내해 드립니다.','Miki 将帮助您安排合适时间。','Miki поможет подобрать удобное время.'],
['MIKI AI · QUICK CONSULTATION','MIKI AI · QUICK CONSULTATION','MIKI AI · 빠른 상담','MIKI AI · 快速咨询','MIKI AI · БЫСТРАЯ КОНСУЛЬТАЦИЯ'],
['Nếu bạn mới tìm hiểu dịch vụ, hãy hỏi nhanh Miki AI về triệt lông, làn da nhạy cảm, chuẩn bị trước buổi hẹn hoặc thiết bị BM 109.','If you are just exploring services, ask Miki AI about hair removal, sensitive skin, how to prepare or the BM 109 device.','서비스를 알아보는 중이라면 제모, 민감한 피부, 준비 사항 또는 BM 109 장비에 대해 Miki AI에게 물어보세요.','如果您刚开始了解服务，可向 Miki AI 询问脱毛、敏感肌、到店前准备或 BM 109 设备。','Если вы только знакомитесь с услугами, спросите у Miki AI о эпиляции, чувствительной коже, подготовке или аппарате BM 109.']
];
for(const [key,...values] of mikiUiPolishRows) ['en','ko','zh','ru'].forEach((l,i)=>window.MIKI_FIXES[l][key]=values[i]);

// 2026-09-14 mobile landing copy additions
const mikiLandingPolishRows=[
['LASER HAIR REMOVAL · SKIN CARE · ĐÀ NẴNG','LASER HAIR REMOVAL · SKIN CARE · DA NANG','레이저 제모 · 스킨케어 · 다낭','激光脱毛 · 皮肤护理 · 岘港','ЛАЗЕРНАЯ ЭПИЛЯЦИЯ · УХОД ЗА КОЖЕЙ · ДАНАНГ'],
['Miki Skin Spa tập trung vào triệt lông, chăm sóc da, waxing và body care trong không gian riêng tư, sạch sẽ và nhẹ nhàng tại Đà Nẵng.','Miki Skin Spa focuses on laser hair removal, skin care, waxing and body care in a private, clean and calm space in Da Nang.','Miki Skin Spa는 다낭의 프라이빗하고 청결한 공간에서 레이저 제모, 스킨케어, 왁싱, 바디 케어를 제공합니다.','Miki Skin Spa 在岘港提供激光脱毛、皮肤护理、蜜蜡脱毛和身体护理，环境私密、干净且舒适。','Miki Skin Spa в Дананге предлагает лазерную эпиляцию, уход за кожей, ваксинг и уход за телом в приватной, чистой и спокойной обстановке.'],
['Laser Hair Removal tại Miki','Laser Hair Removal at Miki','Miki 레이저 제모','Miki 激光脱毛','Лазерная эпиляция в Miki'],
['Riêng tư · tư vấn rõ ràng · ICE Cooling','Private · clear consultation · ICE Cooling','프라이빗 · 명확한 상담 · ICE Cooling','私密 · 清晰咨询 · ICE Cooling','Приватно · понятная консультация · ICE Cooling'],
['⭐ 4.9 Google Reviews','⭐ 4.9 Google Reviews','⭐ Google 리뷰 4.9','⭐ Google 评价 4.9','⭐ Google Reviews 4.9'],
['❄ ICE Cooling -25°C','❄ ICE Cooling -25°C','❄ ICE Cooling -25°C','❄ ICE Cooling -25°C','❄ ICE Cooling -25°C'],
['1-on-1 riêng tư','Private 1-on-1','1:1 프라이빗 케어','一对一私密服务','Приватный формат 1-на-1'],
['08:30–21:30 mỗi ngày','08:30–21:30 daily','매일 08:30–21:30','每天 08:30–21:30','Ежедневно 08:30–21:30'],
['4 dịch vụ chính, dễ chọn.','4 main services, easy to choose.','고르기 쉬운 4가지 주요 서비스.','4 项主要服务，轻松选择。','4 основные услуги — легко выбрать.'],
['Xem nhanh dịch vụ phù hợp, sau đó tham khảo giá hoặc đặt lịch ngay.','Find the right service quickly, then check pricing or book right away.','원하는 서비스를 빠르게 확인한 뒤 가격을 보거나 바로 예약하세요.','快速找到适合的服务，然后查看价格或立即预约。','Быстро выберите услугу, затем посмотрите цены или сразу запишитесь.'],
['Giá phổ biến trước khi đặt lịch.','Popular prices before you book.','예약 전 인기 가격 안내.','预约前热门价格参考。','Популярные цены перед записью.'],
['Một số mức giá khách thường xem trước. Bảng giá chi tiết có thể xem trên website chính.','A few prices guests commonly check first. See the main website for the full price list.','고객이 자주 확인하는 대표 가격입니다. 전체 가격표는 메인 웹사이트에서 확인하세요.','这里列出顾客常先查看的部分价格。完整价格表请查看主网站。','Несколько цен, которые гости чаще всего смотрят заранее. Полный прайс доступен на основном сайте.'],
['Xem toàn bộ bảng giá →','View full price list →','전체 가격표 보기 →','查看完整价格表 →','Смотреть полный прайс →'],
['MIKI ACADEMY · DÀNH CHO HỌC VIÊN','MIKI ACADEMY · FOR STUDENTS','MIKI ACADEMY · 수강생 안내','MIKI ACADEMY · 学员培训','MIKI ACADEMY · ДЛЯ УЧЕНИКОВ'],
['Xem trải nghiệm & Google Reviews.','See the experience & Google Reviews.','서비스 경험과 Google 리뷰 보기.','查看服务体验与 Google 评价。','Посмотрите опыт гостей и отзывы Google.'],
['Các thẻ dưới đây giới thiệu trải nghiệm dịch vụ. Đánh giá công khai của khách được xem trực tiếp trên Google Maps.','The cards below introduce the service experience. Public guest reviews can be viewed directly on Google Maps.','아래 카드는 서비스 경험을 소개합니다. 실제 공개 후기는 Google Maps에서 직접 확인할 수 있습니다.','下方卡片用于介绍服务体验。顾客公开评价可直接在 Google Maps 查看。','Карточки ниже показывают формат услуг. Публичные отзывы гостей можно посмотреть напрямую в Google Maps.'],
['Đặt lịch nhanh.','Book quickly.','빠른 예약.','快速预约。','Быстрая запись.'],
['Miki sẽ xác nhận với bạn.','Miki will confirm with you.','Miki가 확인 연락을 드립니다.','Miki 将与您确认。','Miki свяжется с вами для подтверждения.'],
['Gọi 0935 555 170','Call 0935 555 170','전화 0935 555 170','致电 0935 555 170','Позвонить 0935 555 170'],
['Bảng giá','Pricing','가격표','价格表','Цены'],
['Gọi','Call','전화','电话','Позвонить'],
['Liên hệ','Contact','문의','联系','Контакты']
];
for(const [key,...values] of mikiLandingPolishRows) ['en','ko','zh','ru'].forEach((l,i)=>window.MIKI_FIXES[l][key]=values[i]);

// 2026-09-14 production polish: remaining newly introduced static copy
const mikiProductionPolishRows=[
['Một vài hình ảnh và video nổi bật để bạn xem nhanh không gian, thao tác dịch vụ và trải nghiệm thực tế tại Miki.','A few highlighted photos and videos let you quickly preview the space, service process and real experience at Miki.','대표 사진과 영상을 통해 Miki의 공간, 서비스 과정, 실제 경험을 빠르게 확인하세요.','通过精选图片和视频，快速了解 Miki 的空间、服务流程和真实体验。','Несколько избранных фото и видео помогут быстро увидеть пространство, процесс услуг и реальный опыт в Miki.'],
['Một vài điểm khách thường đánh giá cao khi đến Miki: không gian riêng tư, quy trình rõ ràng và cảm giác nhẹ nhàng trong suốt buổi hẹn.','Guests often appreciate Miki’s private space, clear process and gentle experience throughout the appointment.','고객들은 Miki의 프라이빗 공간, 명확한 절차, 편안한 서비스 경험을 높이 평가합니다.','顾客通常很喜欢 Miki 的私密空间、清晰流程以及整个服务过程中的舒适感。','Гости часто отмечают приватную обстановку, понятный процесс и комфорт во время визита в Miki.'],
['Các đánh giá đầy đủ vẫn được xem trực tiếp trên Google Maps để bảo đảm minh bạch.','Full public reviews remain available directly on Google Maps for transparency.','전체 공개 후기는 투명성을 위해 Google Maps에서 직접 확인할 수 있습니다.','完整公开评价仍可直接在 Google Maps 查看，以确保透明度。','Полные публичные отзывы доступны напрямую в Google Maps для прозрачности.'],
['Không gian sạch sẽ, riêng tư','Clean, private space','청결하고 프라이빗한 공간','干净、私密的空间','Чистое и приватное пространство'],
['Khách dễ cảm thấy thoải mái hơn nhờ phòng dịch vụ gọn gàng, yên tĩnh và phục vụ 1-on-1.','A tidy, quiet treatment room and one-to-one service help guests feel more comfortable.','정돈되고 조용한 공간과 1:1 서비스로 더 편안하게 이용할 수 있습니다.','整洁安静的护理空间和一对一服务让顾客更放松。','Аккуратный тихий кабинет и формат 1-на-1 помогают гостям чувствовать себя комфортнее.'],
['Tư vấn rõ ràng trước dịch vụ','Clear consultation before service','서비스 전 명확한 상담','服务前清晰咨询','Понятная консультация до услуги'],
['Miki giải thích nhanh về quy trình, vùng điều trị và lưu ý trước/sau dịch vụ để khách yên tâm hơn.','Miki briefly explains the process, treatment area and before/after care so guests feel more confident.','Miki는 과정, 관리 부위, 전후 주의사항을 간단히 설명해 고객이 더 안심할 수 있도록 합니다.','Miki 会简要说明流程、护理区域及服务前后注意事项，让顾客更安心。','Miki кратко объясняет процесс, зону процедуры и рекомендации до/после услуги, чтобы гостям было спокойнее.'],
['Trải nghiệm nhẹ nhàng, thân thiện','Gentle, friendly experience','편안하고 친절한 경험','轻松友好的体验','Спокойный и дружелюбный опыт'],
['Phù hợp với khách mới đi spa hoặc khách quốc tế cần trao đổi nhanh, dễ hiểu và lịch sự.','Suitable for first-time spa guests and international visitors who value clear, polite communication.','처음 스파를 이용하는 고객이나 쉽고 명확한 소통을 원하는 해외 고객에게 적합합니다.','适合首次体验 spa 的顾客，以及希望沟通清晰、礼貌的国际顾客。','Подходит тем, кто впервые идёт в spa, и иностранным гостям, которым важна понятная и вежливая коммуникация.'],
['Website hiển thị trước các câu hỏi được xem nhiều nhất. Bộ 100 FAQ vẫn được giữ lại để hỗ trợ Miki AI và khách cần đọc sâu hơn.','The website shows the most-viewed questions first. The full 100-question FAQ remains available for Miki AI and guests who want more detail.','웹사이트에는 자주 보는 질문을 먼저 표시하며, 100개 전체 FAQ는 Miki AI와 더 자세한 정보를 원하는 고객을 위해 유지됩니다.','网站会先显示最常查看的问题。完整的 100 条 FAQ 仍保留给 Miki AI 和希望深入了解的顾客。','На сайте сначала показаны самые популярные вопросы. Полный набор из 100 FAQ остаётся доступным для Miki AI и тех, кому нужны подробности.'],
['Giữ lại các kênh liên hệ cần thiết nhất để khách Việt Nam và khách quốc tế nhắn tin, xem đường đi hoặc đặt lịch nhanh.','Only the most useful contact channels are shown so local and international guests can message, get directions or book quickly.','국내외 고객이 메시지, 길 안내, 예약을 빠르게 할 수 있도록 필요한 연락 채널만 표시합니다.','仅保留最实用的联系方式，方便本地和国际顾客快速咨询、导航或预约。','Оставлены только самые полезные каналы связи, чтобы местные и иностранные гости могли быстро написать, найти дорогу или записаться.'],
['Chương trình đào tạo theo hướng thực hành cho học viên muốn học nghề spa bài bản, gọn gàng và dễ theo dõi hơn trên website.','A practice-led training program for students who want structured spa skills, presented more clearly and concisely on the website.','스파 기술을 체계적으로 배우고 싶은 수강생을 위한 실습 중심 프로그램으로, 웹사이트에서 더 간결하고 쉽게 확인할 수 있습니다.','面向希望系统学习 spa 技能的学员，以实操为主，并在网站上以更清晰简洁的方式展示。','Практическая программа для учеников, которые хотят системно освоить spa-навыки; на сайте она представлена кратко и понятно.'],
['Miki Skin Spa | Laser Hair Removal & Skin Care Đà Nẵng','Miki Skin Spa | Laser Hair Removal & Skin Care in Da Nang','Miki Skin Spa | 다낭 레이저 제모 & 스킨케어','Miki Skin Spa | 岘港激光脱毛与皮肤护理','Miki Skin Spa | Лазерная эпиляция и уход за кожей в Дананге']
];
for(const [key,...values] of mikiProductionPolishRows) ['en','ko','zh','ru'].forEach((l,i)=>window.MIKI_FIXES[l][key]=values[i]);
for(const [lang,text] of Object.entries({en:'Lower legs (women)',ko:'여성 종아리',zh:'女士小腿',ru:'Голени (жен.)'})) window.MIKI_FIXES[lang]['Cẳng chân nữ']=text;
