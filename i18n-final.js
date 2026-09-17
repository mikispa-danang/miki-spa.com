/* Final Thai language polish for production pages.
   Loaded after i18n.js so late editorial/fix keys never fall back to English. */
(() => {
  const applyFinalThai = () => {
    const api = window.MIKI_I18N;
    if (!api?.packs?.th) return;
    Object.assign(api.packs.th, {
      'Chăm sóc vừa đủ. Không gian dễ chịu. Trải nghiệm đáng tin.':'ดูแลอย่างใส่ใจ · บรรยากาศสบาย · ให้คำปรึกษาชัดเจน',
      'Không gian bám sát thực tế':'สำรวจบรรยากาศจริงของ Miki',
      'Hình ảnh được chọn và biên tập theo hướng bám sát không gian, thiết bị và cách phục vụ tại Miki, giúp khách dễ hình dung trước khi đến.':'ชมภาพบรรยากาศ อุปกรณ์ และขั้นตอนการดูแลของ Miki เพื่อให้เห็นภาพก่อนมาใช้บริการ',
      'Miki chỉ nên công bố tên máy, bước sóng, công nghệ làm lạnh, chứng nhận và khả năng phù hợp với từng tông da khi có hồ sơ thiết bị để xác minh.':'ทำความรู้จักอุปกรณ์และขั้นตอนก่อนนัด Miki จะพูดคุยเกี่ยวกับสภาพผิว ลักษณะเส้นขน และข้อควรระวังที่เหมาะกับคุณ',
      'Không quảng cáo bằng thông số chưa xác minh.':'ทำความเข้าใจก่อนเลือกบริการ',
      'Tên/model thiết bị, loại công nghệ, bước sóng, hệ thống làm lạnh và hướng dẫn sử dụng sẽ được bổ sung tại đây sau khi Miki cung cấp ảnh tem máy hoặc hồ sơ kỹ thuật.':'หากต้องการทราบข้อมูลเครื่อง BM 109 หรือการเตรียมตัวก่อนทำเลเซอร์ ติดต่อ Miki เพื่อรับคำอธิบายเกี่ยวกับขั้นตอนและข้อควรทราบ',
      'TRANSPARENCY FIRST':'ข้อมูลอุปกรณ์',
      'Màu sắc nhẹ nhàng và bố cục rõ ràng giúp trải nghiệm xem website dễ chịu hơn':'ดูบริการ ราคา และส่งคำขอนัดหมายได้อย่างสะดวก',
      'Thao tác gọn gàng và riêng tư':'ดูแลอย่างใส่ใจในพื้นที่ส่วนตัว',
      'Chọn nhanh nhu cầu của bạn.':'ค้นหาบริการที่เหมาะกับคุณ',
      'ĐÁNH GIÁ KHÁCH HÀNG':'ประสบการณ์ที่ Miki',
      'KHÁCH HÀNG CẢM NHẬN':'ประสบการณ์ที่ Miki',
      'Phần này giúp khách mới tham khảo trải nghiệm tại Miki. Hình ảnh được biên tập theo hướng bám sát thực tế; đánh giá công khai có thể xem thêm trên Google Maps.':'ชมตัวอย่างประสบการณ์การดูแลที่ Miki และอ่านรีวิวจากลูกค้าเพิ่มเติมได้บน Google Maps',
      'Bạn đã xem dịch vụ — Miki có thể giữ khung giờ phù hợp cho bạn.':'เลือกบริการได้แล้วใช่ไหม? ส่งคำขอเพื่อให้ Miki แนะนำและยืนยันช่วงเวลาที่เหมาะสม',
      'Xác nhận qua WhatsApp':'ส่งคำขอผ่าน WhatsApp',
      'Mở WhatsApp để xác nhận ngay →':'ส่งคำขอผ่าน WhatsApp →',
      'Để Miki đồng hành cùng bạn trên hành trình làm đẹp và chăm sóc bản thân.':'ฝากข้อมูลและเวลาที่ต้องการไว้ Miki จะติดต่อเพื่อให้คำปรึกษาและยืนยันนัดหมาย',
      'Miki Skin Spa là không gian chăm sóc da và làm đẹp ấm cúng tại Đà Nẵng, tập trung vào triệt lông, waxing, chăm sóc da, hỗ trợ da mụn và chăm sóc cơ thể. Miki ưu tiên sự sạch sẽ, riêng tư, tư vấn rõ ràng và cảm giác thoải mái trong từng buổi hẹn — cho cả khách Việt Nam và khách quốc tế.':'Miki Skin Spa เป็นสตูดิโอดูแลผิวและความงามที่อบอุ่นในดานัง ให้บริการเลเซอร์กำจัดขน แว็กซ์ ดูแลผิว ดูแลผิวเป็นสิว และบอดี้แคร์ โดยเน้นความสะอาด ความเป็นส่วนตัว คำปรึกษาที่ชัดเจน และความสบายใจสำหรับทั้งลูกค้าชาวเวียดนามและชาวต่างชาติ',
      'Waxing theo từng vùng, phù hợp với khách cần làm sạch lông nhanh, gọn và riêng tư.':'แว็กซ์ตามบริเวณ โดยเน้นความสะอาด ขั้นตอนที่เรียบร้อย และความเป็นส่วนตัว',
      'Tẩy tế bào chết và dưỡng thể nhẹ nhàng, tập trung vào sự thoải mái và chăm sóc bề mặt da cơ thể.':'ผลัดเซลล์ผิวและบำรุงผิวกายอย่างอ่อนโยน เพื่อความผ่อนคลายและผิวนุ่มสบาย',
      'Ưu đãi đặt lịch trước: -10%':'โปรโมชั่นจองล่วงหน้า: ลด 10%',
      'Khung giờ':'ช่วงเวลาที่ต้องการ',
      'Ngôn ngữ mong muốn':'ภาษาที่ต้องการให้ติดต่อ',
      'Đã ghi nhận yêu cầu':'ได้รับคำขอนัดหมายแล้ว',
      'Quy trình an toàn':'ขั้นตอนการดูแลที่ชัดเจน',
      'Waxing dịch vụ Miki Spa':'บริการแว็กซ์ที่ Miki Spa',
      'Waxing tại Miki Skin Spa':'แว็กซ์ที่ Miki Skin Spa',
      'Chăm sóc da Miki Spa':'ดูแลผิวที่ Miki Spa',
      'Điều trị mụn Miki Spa':'ดูแลผิวเป็นสิวที่ Miki Spa',
      'Không gian điều trị mụn tại Miki Skin Spa':'พื้นที่ดูแลผิวเป็นสิวที่ Miki Skin Spa',
      'Đào tạo học viên Miki Spa Academy':'การฝึกอบรม Miki Spa Academy',
      'Thông tin thiết bị BM 109 tại Miki Skin Spa':'ข้อมูลอุปกรณ์ BM 109 ที่ Miki Skin Spa',
      'Google Reviews (100+ Đánh giá)':'Google Reviews (มากกว่า 100 รีวิว)',
      'Sạch sẽ & Phục vụ 1-on-1 Riêng tư':'สะอาด · ดูแลแบบ 1 ต่อ 1 อย่างเป็นส่วนตัว',
      'Laser Hàn Băng ICE Cooling':'เลเซอร์พร้อมระบบ ICE Cooling',
      'INTERNATIONAL GUESTS & KẾT NỐI':'ลูกค้าต่างชาติและการติดต่อ',
      'Dành cho khách Việt Nam & Quốc tế.':'สำหรับลูกค้าชาวเวียดนามและชาวต่างชาติ',
      'Miki chào đón du khách quốc tế ghé thăm Đà Nẵng! Bạn có thể quét QR hoặc nhắn tin trực tiếp qua WhatsApp, Telegram, Zalo hoặc Facebook.':'Miki ยินดีต้อนรับนักท่องเที่ยวต่างชาติที่มาเยือนดานัง สแกน QR หรือติดต่อผ่าน WhatsApp, Telegram, Zalo หรือ Facebook ได้โดยตรง',
      'Quyền riêng tư | Miki Skin Spa':'ความเป็นส่วนตัว | Miki Skin Spa',
      'Quyền riêng tư':'ความเป็นส่วนตัว',
      'Khi bạn gửi yêu cầu đặt lịch, Miki Skin Spa có thể nhận những thông tin bạn chủ động cung cấp, bao gồm họ tên, số điện thoại/WhatsApp, dịch vụ quan tâm, ngày mong muốn, ngôn ngữ và ghi chú.':'เมื่อคุณส่งคำขอนัดหมาย Miki Skin Spa อาจได้รับข้อมูลที่คุณให้โดยสมัครใจ เช่น ชื่อ เบอร์โทร/WhatsApp บริการที่สนใจ วันที่ต้องการ ภาษา และหมายเหตุ',
      'Thông tin này được sử dụng để tư vấn, xác nhận lịch và hỗ trợ khách hàng. Vui lòng không gửi thông tin y tế nhạy cảm qua biểu mẫu công khai.':'ข้อมูลนี้ใช้เพื่อให้คำปรึกษา ยืนยันนัดหมาย และดูแลลูกค้า กรุณาอย่าส่งข้อมูลทางการแพทย์ที่ละเอียดอ่อนผ่านแบบฟอร์มสาธารณะ',
      'Khi website được kết nối với hệ thống tiếp nhận yêu cầu, dữ liệu có thể được chuyển đến công cụ vận hành do Miki cấu hình, chẳng hạn webhook hoặc CRM. Bạn cũng có thể chọn liên hệ trực tiếp qua Hotline, Zalo hoặc WhatsApp.':'เมื่อเว็บไซต์เชื่อมต่อกับระบบรับคำขอ ข้อมูลอาจถูกส่งไปยังเครื่องมือที่ Miki กำหนด เช่น webhook หรือ CRM คุณสามารถเลือกติดต่อโดยตรงผ่าน Hotline, Zalo หรือ WhatsApp ได้',
      'Miki AI sử dụng OpenAI để xử lý nội dung bạn gửi và ngữ cảnh hội thoại gần đây. Vui lòng không gửi thông tin y tế nhạy cảm. Lịch sử chat được lưu trong phiên trình duyệt, dùng lại trong vòng 30 phút kể từ lần tương tác gần nhất; bấm “Cuộc trò chuyện mới” để xóa. Backend không ghi nội dung chat vào log và gửi yêu cầu API với store=false; điều này không thay thế chính sách lưu giữ dữ liệu của nhà cung cấp.':'Miki AI ใช้ OpenAI เพื่อประมวลผลข้อความที่คุณส่งและบริบทการสนทนาล่าสุด กรุณาอย่าส่งข้อมูลทางการแพทย์ที่ละเอียดอ่อน ประวัติแชตจะถูกเก็บไว้ในเซสชันของเบราว์เซอร์และใช้ซ้ำได้ภายใน 30 นาทีหลังการโต้ตอบล่าสุด กด “เริ่มการสนทนาใหม่” เพื่อล้างข้อมูล ระบบหลังบ้านไม่บันทึกเนื้อหาแชตลงใน log และส่งคำขอ API โดยใช้ store=false ทั้งนี้ไม่ได้แทนนโยบายการเก็บรักษาข้อมูลของผู้ให้บริการ',
      'Liên hệ: 0935 555 170 · 47 Cô Giang, Hải Châu, Đà Nẵng.':'ติดต่อ: 0935 555 170 · 47 Cô Giang, Hải Châu, Đà Nẵng',
      'Không tìm thấy | Miki Skin Spa':'ไม่พบหน้า | Miki Skin Spa',
      'Trang bạn tìm không tồn tại hoặc đã được thay đổi.':'ไม่พบหน้าที่คุณต้องการ หรือหน้านี้อาจมีการเปลี่ยนแปลง',
      'Về trang Miki Skin Spa':'กลับไปหน้า Miki Skin Spa'
    });
    api.apply();
  };
  if (window.MIKI_I18N) applyFinalThai();
  else window.addEventListener('DOMContentLoaded', applyFinalThai, {once:true});
})();
