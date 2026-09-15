# Miki AI — bản nâng cấp 13/09/2026

Đã sửa mã và kiểm thử cục bộ. CHƯA triển khai GitHub/Vercel hoặc gọi mô hình thật.

## Những thay đổi

- Backend dùng fetch của Node 22, bỏ phụ thuộc SDK. Kiểm tra khóa bên trong handler để thiếu khóa trả 503 AI_NOT_CONFIGURED thay vì lỗi khởi tạo module. Chưa xác nhận nguyên nhân deployment cũ khi chưa có log Vercel.
- Dùng giá, dịch vụ và liên hệ từ content-data.js cùng website. Nạp đầy đủ 100 FAQ vào ngữ cảnh; chưa cần vector database. FAQ là nội dung sẵn có, chưa được chuyên gia duyệt lại toàn bộ.
- Hướng dẫn hội thoại tự nhiên, hiểu phủ định, hỗ trợ VI/EN/Hàn/Trung/Nga, không tự bật form từ từ khóa. Nút Đặt lịch vẫn hoạt động.
- Trả lời dần qua streaming. Timeout máy chủ 45 giây, trình duyệt 55 giây, Vercel 60 giây. Không lưu câu lỗi như nội dung trả lời AI.
- Tối đa 24 tin nhắn và 24.000 ký tự ngữ cảnh. sessionStorage trong tab, khôi phục nếu hoạt động gần nhất dưới 30 phút. Cuộc trò chuyện mới xóa lịch sử; không có bộ nhớ dài hạn.
- Không log nội dung hội thoại hoặc khóa. API dùng store=false, không thay thế chính sách lưu dữ liệu của nhà cung cấp.
- Giữ mặc định gpt-5.6-luna và tôn trọng OPENAI_MODEL hiện tại. Chưa so sánh chất lượng/chi phí mô hình thật.
- Chưa có kết nối lịch trống, xác nhận lịch, tài liệu thiết bị mới, fine-tuning hoặc tự học từ khách.

## Kiểm thử đã thực hiện

Chạy node --test tests/ai.test.js: 31 kiểm thử đã qua, API mô phỏng, không cần khóa.
Chrome headless 390px: câu phủ định không mở form; streaming; khôi phục sau tải lại; ngữ cảnh câu tiếp nối; lỗi tiếng Anh; xóa phiên; câu lỗi không đi vào ngữ cảnh; hiển thị văn bản an toàn; không tràn ngang; không có lỗi JavaScript.
Ảnh xem trước dùng câu trả lời mô phỏng để kiểm tra giao diện, không phải bằng chứng chất lượng mô hình.

## Triển khai

1. Giải nén gói cập nhật và chép đè vào thư mục gốc repository hiện tại. Giữ cấu trúc api/, lib/ và các file đi kèm. Không chỉ tải mỗi chat.js.
2. Trong Vercel Project Settings > Environment Variables, cấu hình OPENAI_API_KEY cho Preview/Production cần dùng. Không đưa khóa vào GitHub hoặc gửi qua chat. OPENAI_MODEL phải là mô hình tài khoản có quyền dùng.
3. Root Directory chứa package.json/vercel.json. Node 22.x, Framework Other, không cần build frontend. Giữ nguyên LEAD_WEBHOOK_URL đang dùng.
4. Deploy preview trước, kiểm thử giờ mở cửa, giá waxing nách, câu chưa muốn đặt lịch, hội thoại nhiều lượt và 5 ngôn ngữ; kiểm tra Functions Logs.
5. AI_NOT_CONFIGURED: kiểm tra biến môi trường đúng deployment rồi redeploy. AI_UNAVAILABLE: xem log miki_ai_upstream; 401/403 kiểm tra khóa/quyền, 404 mô hình, 429 hạn mức. Không gửi khóa trong log.
6. Chỉ chuyển production sau khi API thật hoạt động và nội dung tư vấn được duyệt. Có thể khôi phục deployment trước trong Vercel nếu cần.

Khi đổi giá trong trang admin, thay đổi localStorage chỉ có trên trình duyệt đó. Cần xuất và triển khai content-data.js mới để AI và website cùng sử dụng.

Tài liệu tham khảo:
https://developers.openai.com/api/docs/guides/streaming-responses
https://vercel.com/docs/project-configuration/vercel-json#functions

Bộ tests/evaluation-cases.json gồm 25 câu hỏi thật bằng 5 ngôn ngữ và tiêu chí duyệt. Chưa chạy mô hình thật; dùng sau khi cấu hình API trên preview.
