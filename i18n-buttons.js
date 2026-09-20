/* Miki V3 — customer-facing button/link translation completion.
   Loaded after the main i18n bundle so newer CTA labels never fall back to Vietnamese. */
(() => {
  const packs = {
    en: {
      'Đặt lịch online':'Book Online',
      'Đặt lịch tư vấn':'Book a Consultation',
      'Hỏi Miki AI':'Ask Miki AI',
      'HỎI MIKI AI →':'ASK MIKI AI →',
      'HỎI MIKI AI VỀ TRIỆT LÔNG':'ASK MIKI AI ABOUT LASER HAIR REMOVAL',
      'Lần đầu triệt lông':'First laser session',
      'Triệt vùng nách':'Underarm laser',
      'Da nhạy cảm':'Sensitive skin',
      'Xem thêm câu hỏi':'Show more questions',
      'Thu gọn câu hỏi':'Show fewer questions',
      'Tư vấn với Miki →':'Ask Miki →',
      'Viết đánh giá trên Google':'Write a Google review',
      'Xem Google Maps →':'View Google Maps →',
      'Đăng ký tư vấn khóa học':'Request course consultation',
      'Chọn dịch vụ & thời gian':'Choose service & time',
      'Xem bảng giá →':'View pricing →',
      'Xem bảng giá & Đặt lịch →':'View prices & book →',
      'Đặt lịch trải nghiệm →':'Book your visit →',
      'Tư vấn da miễn phí →':'Free skin consultation →',
      'Đặt lịch khám da →':'Book a skin consultation →',
      'Khám phá ngay →':'Explore now →',
      'Laser Hair Removal':'Laser Hair Removal',
      'Skin Care':'Skin Care',
      'Acne':'Acne Care',
      'Waxing':'Waxing'
    },
    ko: {
      'Đặt lịch online':'온라인 예약',
      'Đặt lịch tư vấn':'상담 예약',
      'Hỏi Miki AI':'Miki AI에게 질문',
      'HỎI MIKI AI →':'MIKI AI에게 질문 →',
      'HỎI MIKI AI VỀ TRIỆT LÔNG':'MIKI AI에게 레이저 제모 문의',
      'Lần đầu triệt lông':'첫 레이저 제모',
      'Triệt vùng nách':'겨드랑이 레이저',
      'Da nhạy cảm':'민감성 피부',
      'Xem thêm câu hỏi':'질문 더 보기',
      'Thu gọn câu hỏi':'질문 접기',
      'Tư vấn với Miki →':'Miki에게 상담하기 →',
      'Viết đánh giá trên Google':'Google 후기 작성',
      'Xem Google Maps →':'Google Maps 보기 →',
      'Đăng ký tư vấn khóa học':'교육 상담 신청',
      'Chọn dịch vụ & thời gian':'서비스 및 시간 선택',
      'Xem bảng giá →':'가격 보기 →',
      'Xem bảng giá & Đặt lịch →':'가격 확인 및 예약 →',
      'Đặt lịch trải nghiệm →':'방문 예약 →',
      'Tư vấn da miễn phí →':'무료 피부 상담 →',
      'Đặt lịch khám da →':'피부 상담 예약 →',
      'Khám phá ngay →':'자세히 보기 →',
      'Laser Hair Removal':'레이저 제모',
      'Skin Care':'스킨케어',
      'Acne':'여드름 케어',
      'Waxing':'왁싱'
    },
    zh: {
      'Đặt lịch online':'在线预约',
      'Đặt lịch tư vấn':'预约咨询',
      'Hỏi Miki AI':'咨询 Miki AI',
      'HỎI MIKI AI →':'咨询 MIKI AI →',
      'HỎI MIKI AI VỀ TRIỆT LÔNG':'向 MIKI AI 咨询激光脱毛',
      'Lần đầu triệt lông':'首次激光脱毛',
      'Triệt vùng nách':'腋下激光脱毛',
      'Da nhạy cảm':'敏感肌',
      'Xem thêm câu hỏi':'查看更多问题',
      'Thu gọn câu hỏi':'收起问题',
      'Tư vấn với Miki →':'咨询 Miki →',
      'Viết đánh giá trên Google':'在 Google 撰写评价',
      'Xem Google Maps →':'查看 Google Maps →',
      'Đăng ký tư vấn khóa học':'预约课程咨询',
      'Chọn dịch vụ & thời gian':'选择服务与时间',
      'Xem bảng giá →':'查看价格 →',
      'Xem bảng giá & Đặt lịch →':'查看价格并预约 →',
      'Đặt lịch trải nghiệm →':'预约体验 →',
      'Tư vấn da miễn phí →':'免费皮肤咨询 →',
      'Đặt lịch khám da →':'预约皮肤咨询 →',
      'Khám phá ngay →':'立即了解 →',
      'Laser Hair Removal':'激光脱毛',
      'Skin Care':'皮肤护理',
      'Acne':'痘肌护理',
      'Waxing':'蜜蜡脱毛'
    },
    ru: {
      'Đặt lịch online':'Записаться онлайн',
      'Đặt lịch tư vấn':'Записаться на консультацию',
      'Hỏi Miki AI':'Спросить Miki AI',
      'HỎI MIKI AI →':'СПРОСИТЬ MIKI AI →',
      'HỎI MIKI AI VỀ TRIỆT LÔNG':'СПРОСИТЬ MIKI AI О ЛАЗЕРНОЙ ЭПИЛЯЦИИ',
      'Lần đầu triệt lông':'Первый сеанс лазера',
      'Triệt vùng nách':'Лазер подмышек',
      'Da nhạy cảm':'Чувствительная кожа',
      'Xem thêm câu hỏi':'Показать больше вопросов',
      'Thu gọn câu hỏi':'Свернуть вопросы',
      'Tư vấn với Miki →':'Спросить Miki →',
      'Viết đánh giá trên Google':'Оставить отзыв в Google',
      'Xem Google Maps →':'Открыть Google Maps →',
      'Đăng ký tư vấn khóa học':'Запросить консультацию по курсу',
      'Chọn dịch vụ & thời gian':'Выбрать услугу и время',
      'Xem bảng giá →':'Посмотреть цены →',
      'Xem bảng giá & Đặt lịch →':'Цены и запись →',
      'Đặt lịch trải nghiệm →':'Записаться →',
      'Tư vấn da miễn phí →':'Бесплатная консультация →',
      'Đặt lịch khám da →':'Запись на консультацию →',
      'Khám phá ngay →':'Подробнее →',
      'Laser Hair Removal':'Лазерная эпиляция',
      'Skin Care':'Уход за кожей',
      'Acne':'Уход за кожей с акне',
      'Waxing':'Ваксинг'
    },
    th: {
      'Đặt lịch online':'จองออนไลน์',
      'Đặt lịch tư vấn':'จองคิวปรึกษา',
      'Hỏi Miki AI':'ถาม Miki AI',
      'HỎI MIKI AI →':'ถาม MIKI AI →',
      'HỎI MIKI AI VỀ TRIỆT LÔNG':'ถาม MIKI AI เรื่องเลเซอร์กำจัดขน',
      'Lần đầu triệt lông':'เลเซอร์ครั้งแรก',
      'Triệt vùng nách':'เลเซอร์รักแร้',
      'Da nhạy cảm':'ผิวแพ้ง่าย',
      'Xem thêm câu hỏi':'ดูคำถามเพิ่มเติม',
      'Thu gọn câu hỏi':'ย่อคำถาม',
      'Tư vấn với Miki →':'ปรึกษากับ Miki →',
      'Viết đánh giá trên Google':'เขียนรีวิวบน Google',
      'Xem Google Maps →':'ดู Google Maps →',
      'Đăng ký tư vấn khóa học':'ขอคำปรึกษาหลักสูตร',
      'Chọn dịch vụ & thời gian':'เลือกบริการและเวลา',
      'Xem bảng giá →':'ดูราคา →',
      'Xem bảng giá & Đặt lịch →':'ดูราคาและจองคิว →',
      'Đặt lịch trải nghiệm →':'จองบริการ →',
      'Tư vấn da miễn phí →':'ปรึกษาผิวฟรี →',
      'Đặt lịch khám da →':'จองปรึกษาผิว →',
      'Khám phá ngay →':'ดูบริการ →',
      'Laser Hair Removal':'เลเซอร์กำจัดขน',
      'Skin Care':'ดูแลผิว',
      'Acne':'ดูแลผิวเป็นสิว',
      'Waxing':'แว็กซ์'
    }
  };

  const apply = () => {
    const api = window.MIKI_I18N;
    if (!api?.packs) return false;
    Object.entries(packs).forEach(([lang, labels]) => {
      if (api.packs[lang]) Object.assign(api.packs[lang], labels);
    });
    api.apply?.();
    return true;
  };

  if (!apply()) {
    window.addEventListener('DOMContentLoaded', apply, { once: true });
  }
  window.addEventListener('miki:language', () => queueMicrotask(apply));
})();
