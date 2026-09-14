# Miki Skin Spa — Production Package

## Chạy local
- Static preview: `python -m http.server 8080`
- Trang chính: `/`
- Landing page: `/landing/` (hoặc `/dat-lich` khi deploy Vercel)

## Deploy đề xuất: Vercel
1. Upload toàn bộ thư mục này lên GitHub hoặc kéo thả project vào Vercel.
2. Trong Vercel > Project Settings > Environment Variables, cấu hình:
   - `LEAD_WEBHOOK_URL`: webhook nhận booking (Make, Zapier, Google Apps Script, CRM...).
   - `OPENAI_API_KEY`: chỉ cần nếu muốn chatbot dùng AI backend.
   - `OPENAI_MODEL`: model API muốn dùng; có thể đổi mà không sửa code.
3. Deploy.

## Hành vi an toàn khi chưa cấu hình backend
- Booking form không báo giả là đã gửi. Nếu `LEAD_WEBHOOK_URL` chưa có, website đưa khách sang WhatsApp để xác nhận.
- Chatbot vẫn có câu trả lời cục bộ cho giá, dịch vụ, địa chỉ và FAQ; AI backend chỉ hoạt động khi có API key.

## Nội dung đã khóa theo dịch vụ hiện tại
Triệt lông, Waxing, Chăm sóc da, Điều trị mụn, Body Care, Đào tạo học viên. Nail, nối mi, gội đầu và massage thư giãn không được giới thiệu như dịch vụ hiện tại.
