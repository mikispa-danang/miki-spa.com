/* Miki AI quality layer.
   Improves the local fallback while the secure AI gateway is unavailable.
   Exact prices are read from data/services.json so they stay aligned with booking. */
(() => {
  const lang = () => window.MIKI_LANGUAGE || localStorage.getItem('miki-language') || document.documentElement.lang || 'vi';
  const norm = (value) => String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g,'d').replace(/[^a-z0-9\u00c0-\u024f\u3040-\u30ff\u3400-\u9fff\u0e00-\u0e7f\u0400-\u04ff]+/g,' ').trim();
  const money = (n) => Number.isFinite(n) ? new Intl.NumberFormat('vi-VN').format(n) + 'đ' : '';
  let catalog = null;

  fetch('data/services.json', { cache: 'no-store' })
    .then(r => r.ok ? r.json() : null)
    .then(data => { if (data?.groups) catalog = data; })
    .catch(() => {});

  const copy = {
    vi: {
      ask:'Bạn cho mình biết dịch vụ hoặc vùng bạn đang quan tâm nhé — ví dụ nách, bikini, chân, waxing hay chăm sóc da.',
      book:'Bạn có thể bấm “Đặt lịch” để gửi yêu cầu khung giờ. Đây là yêu cầu đặt lịch, Miki sẽ xác nhận lại trước khi chốt.',
      address:'Miki Skin Spa ở 47 Cô Giang, Hải Châu, Đà Nẵng. Mở cửa mỗi ngày 08:30–21:30.',
      laser:'Laser Hair Removal phù hợp khi mục tiêu là giảm lông lâu dài qua nhiều buổi. Miki dùng thiết bị BM109 với ICE Cooling đến -25°C để hỗ trợ giảm cảm giác nóng. Kết quả và số buổi tùy vùng, màu/độ dày lông, da và yếu tố hormone.',
      wax:'Waxing lấy lông ngay trong một buổi nhưng hiệu quả mang tính tạm thời. Nếu ưu tiên giảm lông lâu dài, Laser Hair Removal thường phù hợp hơn; nếu cần sạch lông nhanh cho một dịp gần, waxing có thể tiện hơn.',
      skin:'Miki có chăm sóc da và hỗ trợ da mụn trong phạm vi spa. Bạn cho mình biết vấn đề chính là dầu, khô, nhạy cảm, bít tắc/mụn hay cần làm sạch–cấp ẩm để mình hướng dẫn đúng hơn. Miki AI không chẩn đoán bệnh da.',
      body:'Miki có Body Care và tư vấn theo nhu cầu. Hiện giá Body Care chưa được công bố cố định trong catalogue; Miki sẽ xác nhận sau khi biết vùng và nhu cầu.',
      medical:'Nếu vùng da đang sưng đau nhiều, có mủ, nhiễm trùng, phồng rộp hoặc phản ứng nặng/kéo dài, bạn nên được bác sĩ hoặc nhân viên y tế phù hợp đánh giá trước khi làm dịch vụ spa.',
      priceAsk:'Bạn muốn xem giá dịch vụ/vùng nào? Ví dụ: triệt nách, bikini, cẳng chân, waxing nách, facial…',
      compare:'Nếu cần sạch lông ngay: Waxing. Nếu ưu tiên giảm lông lâu dài qua nhiều buổi: Laser Hair Removal. Với da đang kích ứng hoặc có vấn đề y khoa, nên đánh giá da trước.'
    },
    en: {
      ask:'Tell me the service or area you are interested in — for example underarms, bikini, legs, waxing or skincare.',
      book:'Tap “Book” to send a preferred appointment request. Miki will confirm the time before it is final.',
      address:'Miki Skin Spa is at 47 Co Giang, Hai Chau, Da Nang. Open daily 08:30–21:30.',
      laser:'Laser Hair Removal is intended for longer-term hair reduction over multiple sessions. Miki uses the BM109 system with ICE Cooling down to -25°C to help reduce heat discomfort. Results and session count vary by area, hair, skin and hormonal factors.',
      wax:'Waxing removes hair immediately in one visit, but the result is temporary. For longer-term hair reduction, Laser Hair Removal is usually the better direction; for quick removal before an event, waxing can be convenient.',
      skin:'Miki offers skincare and acne-support care within a spa scope. Tell me whether your main concern is oiliness, dryness, sensitivity, congestion/acne, cleansing or hydration. Miki AI does not diagnose skin disease.',
      body:'Miki offers Body Care consultation. A fixed Body Care price is not currently published in the catalogue; staff can confirm it after your area and needs are known.',
      medical:'If you have significant pain, pus, infection, blistering, or a severe/persistent skin reaction, please seek appropriate medical assessment before spa treatment.',
      priceAsk:'Which service or area would you like a price for? For example underarm laser, bikini, lower legs, underarm waxing or facial.',
      compare:'Need hair removed immediately: Waxing. Want longer-term reduction over multiple sessions: Laser Hair Removal. If the skin is irritated or medically concerning, get it assessed first.'
    },
    ko: {
      ask:'관심 있는 서비스나 부위를 알려 주세요. 예: 겨드랑이, 비키니, 다리, 왁싱, 스킨케어.',
      book:'“예약”을 눌러 희망 시간을 요청할 수 있습니다. 최종 예약은 Miki가 다시 확인해 드립니다.',
      address:'Miki Skin Spa: 47 Co Giang, Hai Chau, Da Nang. 매일 08:30–21:30 운영합니다.',
      laser:'Laser Hair Removal은 여러 회차를 통해 장기적인 제모 감소를 목표로 합니다. Miki는 최대 -25°C ICE Cooling을 지원하는 BM109 장비를 사용합니다. 필요한 회차와 결과는 부위, 모발, 피부, 호르몬 요인에 따라 다릅니다.',
      wax:'왁싱은 한 번에 바로 털을 제거하지만 효과는 일시적입니다. 장기적인 감소가 목표라면 레이저, 가까운 일정 전에 빠른 제거가 필요하면 왁싱이 더 편할 수 있습니다.',
      skin:'Miki는 스킨케어와 여드름 피부 관리 보조 서비스를 제공합니다. 유분, 건조, 민감성, 막힘/여드름, 클렌징, 보습 중 가장 큰 고민을 알려 주세요. Miki AI는 의료 진단을 하지 않습니다.',
      body:'Body Care 상담이 가능합니다. 현재 고정 가격은 공개 카탈로그에 없으며 부위와 요구를 확인한 뒤 안내합니다.',
      medical:'심한 통증, 고름, 감염, 물집 또는 심하거나 오래 지속되는 피부 반응이 있다면 스파 서비스 전에 의료진의 평가를 받으세요.',
      priceAsk:'어떤 서비스/부위의 가격을 확인할까요? 예: 겨드랑이 레이저, 비키니, 종아리, 겨드랑이 왁싱, 페이셜.',
      compare:'즉시 제모가 필요하면 왁싱, 여러 회차를 통한 장기 감소가 목표라면 Laser Hair Removal이 더 적합합니다.'
    },
    zh: {
      ask:'请告诉我你关注的服务或部位，例如腋下、比基尼、腿部、蜜蜡脱毛或皮肤护理。',
      book:'点击“预约”可提交期望时间；这只是预约申请，Miki 会再次确认后才算最终确定。',
      address:'Miki Skin Spa 位于 47 Co Giang, Hai Chau, Da Nang，每天 08:30–21:30 营业。',
      laser:'Laser Hair Removal 适合通过多次疗程实现长期减少毛发。Miki 使用带 ICE Cooling（最低至 -25°C）的 BM109 设备帮助降低热感。次数和效果会因部位、毛发、肤质和激素因素而异。',
      wax:'蜜蜡脱毛可以一次立即去除毛发，但效果是暂时的。若希望长期减少毛发，可优先考虑 Laser Hair Removal；若近期活动前需要快速去毛，蜜蜡会更方便。',
      skin:'Miki 提供皮肤护理和痘肌辅助护理。请告诉我主要问题是出油、干燥、敏感、堵塞/痘痘、清洁还是补水。Miki AI 不做医学诊断。',
      body:'Miki 提供 Body Care 咨询。目前目录没有固定公开价格，需要根据部位和需求确认。',
      medical:'如果出现明显疼痛、流脓、感染、水疱或严重/持续的皮肤反应，请先接受合适的医疗评估。',
      priceAsk:'你想查询哪个服务/部位的价格？例如腋下激光、比基尼、小腿、腋下蜜蜡或面部护理。',
      compare:'需要立即去毛：蜜蜡。希望多次疗程实现长期减少毛发：Laser Hair Removal。'
    },
    ru: {
      ask:'Уточните услугу или зону: подмышки, бикини, ноги, воск или уход за кожей.',
      book:'Нажмите «Записаться», чтобы отправить желаемое время. Miki подтвердит его отдельно — это запрос, а не окончательная запись.',
      address:'Miki Skin Spa: 47 Co Giang, Hai Chau, Da Nang. Ежедневно 08:30–21:30.',
      laser:'Laser Hair Removal предназначен для долговременного уменьшения роста волос за несколько сеансов. Miki использует BM109 с ICE Cooling до -25°C для снижения ощущения жара. Количество сеансов и результат индивидуальны.',
      wax:'Воск удаляет волосы сразу за один визит, но эффект временный. Для долговременного уменьшения роста обычно лучше Laser Hair Removal; перед ближайшим событием воск может быть удобнее.',
      skin:'Miki предлагает уход за кожей и поддерживающий уход при склонности к акне. Уточните главную задачу: жирность, сухость, чувствительность, закупорка/акне, очищение или увлажнение. Miki AI не ставит диагнозы.',
      body:'Доступна консультация по Body Care. Фиксированная цена сейчас не опубликована; её подтвердят после уточнения зоны и задачи.',
      medical:'При сильной боли, гное, инфекции, волдырях или выраженной/длительной реакции кожи сначала обратитесь за медицинской оценкой.',
      priceAsk:'Для какой услуги/зоны нужна цена? Например лазер подмышек, бикини, голени, воск подмышек или facial.',
      compare:'Нужно убрать волосы сразу — воск. Нужен долговременный эффект за несколько сеансов — Laser Hair Removal.'
    },
    th: {
      ask:'บอกบริการหรือบริเวณที่สนใจได้เลย เช่น รักแร้ บิกินี ขา แว็กซ์ หรือดูแลผิว',
      book:'กด “จอง” เพื่อส่งเวลาที่ต้องการได้ โดย Miki จะยืนยันเวลาอีกครั้งก่อนเป็นนัดหมายสุดท้าย',
      address:'Miki Skin Spa อยู่ที่ 47 Co Giang, Hai Chau, Da Nang เปิดทุกวัน 08:30–21:30',
      laser:'Laser Hair Removal เหมาะกับการลดขนระยะยาวผ่านหลายครั้ง Miki ใช้เครื่อง BM109 พร้อม ICE Cooling ถึง -25°C เพื่อช่วยลดความรู้สึกร้อน จำนวนครั้งและผลลัพธ์ขึ้นกับบริเวณ เส้นขน ผิว และปัจจัยฮอร์โมน',
      wax:'แว็กซ์กำจัดขนได้ทันทีในครั้งเดียวแต่ผลชั่วคราว หากต้องการลดขนระยะยาว Laser Hair Removal มักเหมาะกว่า ส่วนถ้าต้องการกำจัดขนเร็วสำหรับงานใกล้ ๆ แว็กซ์อาจสะดวกกว่า',
      skin:'Miki มีบริการดูแลผิวและช่วยดูแลผิวเป็นสิวในขอบเขตสปา บอกปัญหาหลักได้ เช่น มัน แห้ง แพ้ง่าย อุดตัน/สิว ทำความสะอาด หรือเติมความชุ่มชื้น Miki AI ไม่วินิจฉัยโรคผิวหนัง',
      body:'มีบริการปรึกษา Body Care ปัจจุบันยังไม่มีราคาคงที่ในแคตตาล็อก ต้องยืนยันตามบริเวณและความต้องการ',
      medical:'หากมีอาการปวดมาก หนอง ติดเชื้อ พุพอง หรือผิวมีปฏิกิริยารุนแรง/นาน ควรได้รับการประเมินจากบุคลากรทางการแพทย์ก่อนทำบริการสปา',
      priceAsk:'ต้องการดูราคาบริการ/บริเวณไหน เช่น เลเซอร์รักแร้ บิกินี น่อง แว็กซ์รักแร้ หรือ facial',
      compare:'ต้องการกำจัดขนทันที: แว็กซ์ ต้องการลดขนระยะยาวหลายครั้ง: Laser Hair Removal'
    }
  };

  function c() { return copy[lang()] || copy.en; }
  function allItems() { return (catalog?.groups || []).flatMap(g => (g.items || []).map(item => ({...item, group:g.title}))); }
  function findItem(q) {
    const n = norm(q);
    const aliases = [
      ['laser_underarm',['triet nach','nach nu','underarm laser','laser underarm','겨드랑이','腋下','подмыш','รักแร้']],
      ['laser_bikini',['bikini','비키니','比基尼','бикини','บิกินี']],
      ['laser_deep_bikini',['deep bikini']],
      ['laser_lowerlegs',['cang chan','lower leg','lower legs','종아리','小腿','голен','น่อง']],
      ['wax_underarm',['wax nach','waxing nach','underarm wax','underarm waxing']],
      ['facial',['basic facial','facial','cham soc da co ban']],
      ['acne',['acne treatment','cham soc mun','da mun','mụn','acne']],
      ['laser_beard',['rau','beard']],
      ['laser_back',['laser lung','back laser']],
      ['wax_full_body',['wax full body','full body wax']]
    ];
    for (const [key, words] of aliases) if (words.some(x => n.includes(norm(x)))) return allItems().find(i => i.key === key) || null;
    return allItems().find(i => n.includes(norm(i.label)) || n.includes(norm(i.key))) || null;
  }

  function priceReply(q) {
    const item = findItem(q);
    if (!item || item.price == null) return c().priceAsk;
    return `${item.label}: ${money(item.price)}. ${c().book}`;
  }

  function enhancedLocalConciergeReply(question) {
    const raw = String(question || '');
    const q = norm(raw);
    const severe = /sung dau|dau nhieu|mu |nhiem trung|phong rop|infection|pus|blister|severe pain|감염|고름|水疱|感染|инфек|гной|พุพอง|ติดเชื้อ/.test(q);
    if (severe) return c().medical;

    const priceIntent = /gia|bao nhieu|chi phi|price|cost|how much|가격|费用|价格|цена|стоим|ราคา/.test(q);
    if (priceIntent) return priceReply(raw);

    const compareIntent = ((/laser|triet|hair removal/.test(q) && /wax/.test(q)) || /so sanh|compare|khac nhau|better/.test(q));
    if (compareIntent) return `${c().compare} ${c().ask}`;

    if (/dia chi|o dau|google map|ban do|gio mo|address|where|location|map|open|영업|주소|地址|营业|адрес|работает|ที่อยู่|เปิด/.test(q)) return c().address;
    if (/dat lich|booking|appointment|reserve|예약|预约|запис|จอง/.test(q)) return c().book;
    if (/wax/.test(q)) return `${c().wax} ${c().ask}`;
    if (/laser|triet|hair removal|레이저|激光|лазер|เลเซอร์/.test(q)) return `${c().laser} ${c().ask}`;
    if (/body care|tay te bao|body/.test(q)) return `${c().body} ${c().book}`;
    if (/mun|acne|skin|da |cham soc|facial|피부|여드름|皮肤|痘|кож|акне|ผิว|สิว/.test(q)) return c().skin;

    return c().ask;
  }

  window.localConciergeReply = enhancedLocalConciergeReply;
  window.MikiAiQuality = Object.freeze({ get catalog(){ return catalog; }, localReply: enhancedLocalConciergeReply });
})();
