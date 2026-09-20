/* Final Thai FAQ wording correction. */
(() => {
  const apply = () => {
    const api = window.MIKI_I18N;
    if (!api?.packs?.th) return false;
    api.packs.th['Dấu hiệu hàng rào da suy yếu là gì?'] = 'สัญญาณว่าเกราะป้องกันผิวอ่อนแอคืออะไร?';
    api.packs.th['Da có thể khô căng, châm chích, đỏ, bong hoặc đột nhiên không dung nạp những sản phẩm trước đây vẫn dùng được.'] = 'ผิวอาจแห้งตึง แสบยิบ ๆ แดง ลอก หรือจู่ ๆ ไม่ทนต่อผลิตภัณฑ์ที่เคยใช้ได้ตามปกติ';
    api.apply?.();
    return true;
  };
  if (!apply()) window.addEventListener('DOMContentLoaded', apply, { once:true });
  window.addEventListener('miki:language', () => queueMicrotask(apply));
})();
