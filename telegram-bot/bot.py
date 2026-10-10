import os
from urllib.parse import quote
from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update, WebAppInfo
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes

TOKEN=os.environ["BOT_TOKEN"]
BOOKING="https://www.miki-spa.com/booking.html"
WEB="https://www.miki-spa.com/"
WA="https://wa.me/84935555170"
MAP="https://maps.app.goo.gl/Mswc1KA4MVyok92NA?g_st=iz"

LANGS={
"vi":("🇻🇳","Tiếng Việt"),"en":("🇬🇧","English"),"ru":("🇷🇺","Русский"),
"ko":("🇰🇷","한국어"),"zh":("🇨🇳","中文"),"th":("🇹🇭","ไทย")
}

T={
"vi":{"hello":"✨ <b>Chào mừng đến Miki Skin Spa</b>\n\nTriệt lông Laser · Chăm sóc da · Waxing\n📍 47 Cô Giang, Hải Châu, Đà Nẵng\n🕘 08:30–21:30 hằng ngày\n\nChọn mục bên dưới:","svc":"✨ Dịch vụ","faq":"❓ FAQ","contact":"📍 Liên hệ","lang":"🌐 Đổi ngôn ngữ","offer":"🎁 Ưu đãi","book":"📅 Đặt lịch","home":"🏠 Menu chính","back":"⬅️ Quay lại","choose":"<b>Danh mục dịch vụ</b>\nChọn nhóm bạn quan tâm:","laserw":"✨ Laser – Nữ","laserm":"✨ Laser – Nam","wax":"🌿 Waxing","skin":"🧖 Chăm sóc da","acne":"🫧 Da mụn","price":"Giá","deal":"✨ Khách lần đầu: giảm 15% triệt lông khi chương trình áp dụng.","faqtext":"❓ <b>FAQ</b>\n\n• Lịch chỉ được xác nhận sau khi Miki phản hồi.\n• Trước buổi triệt: không wax/nhổ lông; có thể cạo theo hướng dẫn.\n• Nếu da đang kích ứng, hãy báo Miki trước.\n• Giá trên bot là giá tham khảo theo bảng giá hiện tại.","offertext":"🎁 <b>Ưu đãi Miki Spa</b>\n\nKhách lần đầu có thể được giảm <b>15%</b> dịch vụ triệt lông theo chương trình hiện hành.","contacttext":"📍 <b>Miki Skin Spa</b>\n47 Cô Giang, Hải Châu, Đà Nẵng\n📞 0935 555 170\n🕘 08:30–21:30 hằng ngày"},
"en":{"hello":"✨ <b>Welcome to Miki Skin Spa</b>\n\nLaser Hair Removal · Skin Care · Waxing\n📍 47 Co Giang, Hai Chau, Da Nang\n🕘 08:30–21:30 daily\n\nChoose an option:","svc":"✨ Services","faq":"❓ FAQ","contact":"📍 Contact","lang":"🌐 Language","offer":"🎁 Offers","book":"📅 Book","home":"🏠 Main menu","back":"⬅️ Back","choose":"<b>Service categories</b>\nChoose a category:","laserw":"✨ Laser – Women","laserm":"✨ Laser – Men","wax":"🌿 Waxing","skin":"🧖 Skin Care","acne":"🫧 Acne Care","price":"Price","deal":"✨ First-time laser offer: 15% off when applicable.","faqtext":"❓ <b>FAQ</b>\n\n• Appointments are confirmed after Miki replies.\n• Before laser: do not wax or pluck; shaving may be done as advised.\n• Tell Miki in advance if your skin is irritated.\n• Bot prices are reference prices from the current list.","offertext":"🎁 <b>Miki Spa Offer</b>\n\nFirst-time guests may receive <b>15% off</b> laser hair removal under the current promotion.","contacttext":"📍 <b>Miki Skin Spa</b>\n47 Co Giang, Hai Chau, Da Nang\n📞 0935 555 170\n🕘 08:30–21:30 daily"}
}
for code in ["ru","ko","zh","th"]:
    T[code]=dict(T["en"])
    T[code]["hello"]={"ru":"✨ <b>Добро пожаловать в Miki Skin Spa</b>\n\nЛазерная эпиляция · Уход за кожей · Ваксинг\n📍 47 Cô Giang, Đà Nẵng\n🕘 08:30–21:30 ежедневно","ko":"✨ <b>Miki Skin Spa에 오신 것을 환영합니다</b>\n\n레이저 제모 · 피부 관리 · 왁싱\n📍 47 Cô Giang, Đà Nẵng\n🕘 매일 08:30–21:30","zh":"✨ <b>欢迎来到 Miki Skin Spa</b>\n\n激光脱毛 · 皮肤护理 · 蜜蜡脱毛\n📍 47 Cô Giang, Đà Nẵng\n🕘 每天 08:30–21:30","th":"✨ <b>ยินดีต้อนรับสู่ Miki Skin Spa</b>\n\nเลเซอร์กำจัดขน · ดูแลผิว · แว็กซ์\n📍 47 Cô Giang, Đà Nẵng\n🕘 ทุกวัน 08:30–21:30"}[code]

SERVICES={
"laserw":[("Mép & cằm","Upper lip & chin","300.000đ"),("Quanh quầng vú","Areola","300.000đ"),("Đường bụng","Abdominal line","300.000đ"),("Nách nữ","Female underarms","500.000đ"),("Lưng dưới nữ","Female lower back","500.000đ"),("Bikini cơ bản","Basic bikini","600.000đ"),("Cẳng tay nữ","Female forearms","600.000đ"),("Mông","Buttocks","600.000đ"),("Cẳng chân gồm gối","Lower legs incl. knees","700.000đ"),("Deep Bikini","Deep Bikini","800.000đ"),("Đùi","Thighs","800.000đ"),("Full tay nữ","Female full arms","1.000.000đ"),("Full chân","Full legs","1.300.000đ"),("Full Package Nữ – 4 vùng","Full Package Women – 4 areas","3.000.000đ")],
"laserm":[("Ria mép","Upper lip","300.000đ"),("Râu","Beard","500.000đ"),("Nách nam","Male underarms","600.000đ"),("Lưng dưới nam","Male lower back","600.000đ"),("Cẳng tay nam","Male forearms","800.000đ"),("Ngực","Chest","800.000đ"),("Bụng","Abdomen","800.000đ"),("Full tay nam","Male full arms","1.200.000đ"),("Lưng","Back","1.500.000đ"),("Full Package Nam – 4 vùng","Full Package Men – 4 areas","3.900.000đ")],
"wax":[("Nách","Underarms","180.000đ"),("Mép / Cằm","Upper lip / chin","180.000đ"),("Lông mày tạo dáng","Eyebrow shaping","200.000đ"),("Tay","Full arms","450.000đ"),("Nửa chân","Half legs","450.000đ"),("Full chân","Full legs","700.000đ"),("Bikini nữ","Women’s bikini","650.000đ"),("Ngực","Chest","400.000đ"),("Bụng","Abdomen","400.000đ"),("Lưng","Back","400.000đ"),("Vùng đặc biệt","Special area","500.000đ"),("Full Body","Full Body excl. bikini","1.800.000đ"),("Full Body VIP","Full Body VIP incl. bikini","2.300.000đ")],
"skin":[("Basic Facial","Basic Facial","500.000đ"),("Deep Cleansing Facial","Deep Cleansing Facial","800.000đ"),("Anti-Aging Facial","Anti-Aging Facial","1.200.000đ"),("Brighten Underarm Area","Brighten Underarm Area","500.000đ"),("Cold Algae Peel","Cold Algae Peel","500.000đ"),("Skin Brightening","Skin Brightening","1.200.000đ")],
"acne":[("Acne Treatment","Acne Treatment","900.000đ"),("Clear Up Back Acne","Clear Up Back Acne","1.000.000đ")]
}

def lang(ctx): return ctx.user_data.get("lang","vi")
def c(ctx): return T[lang(ctx)]

def lang_kb():
    a=list(LANGS.items()); rows=[]
    for i in range(0,len(a),2):
        rows.append([InlineKeyboardButton(f"{f} {n}",callback_data=f"lang:{k}") for k,(f,n) in a[i:i+2]])
    return InlineKeyboardMarkup(rows)

def main_kb(ctx):
    x=c(ctx); l=lang(ctx)
    return InlineKeyboardMarkup([
      [InlineKeyboardButton(x["svc"],callback_data="services"),InlineKeyboardButton(x["faq"],callback_data="faq")],
      [InlineKeyboardButton(x["contact"],callback_data="contact"),InlineKeyboardButton(x["lang"],callback_data="language")],
      [InlineKeyboardButton(x["offer"],callback_data="offer")],
      [InlineKeyboardButton(x["book"],web_app=WebAppInfo(url=f"{BOOKING}?lang={l}"))]
    ])

def group_kb(ctx):
    x=c(ctx)
    return InlineKeyboardMarkup([
      [InlineKeyboardButton(x["laserw"],callback_data="g:laserw"),InlineKeyboardButton(x["laserm"],callback_data="g:laserm")],
      [InlineKeyboardButton(x["wax"],callback_data="g:wax")],
      [InlineKeyboardButton(x["skin"],callback_data="g:skin"),InlineKeyboardButton(x["acne"],callback_data="g:acne")],
      [InlineKeyboardButton(x["home"],callback_data="home")]
    ])

def items_kb(ctx,g,p=0):
    rows=[]; items=SERVICES[g]; start=p*6
    for i,item in enumerate(items[start:start+6],start):
        name=item[0] if lang(ctx)=="vi" else item[1]
        rows.append([InlineKeyboardButton(f"{name} · {item[2]}",callback_data=f"s:{g}:{i}")])
    nav=[]
    if p: nav.append(InlineKeyboardButton("◀️",callback_data=f"p:{g}:{p-1}"))
    if start+6<len(items): nav.append(InlineKeyboardButton("▶️",callback_data=f"p:{g}:{p+1}"))
    if nav: rows.append(nav)
    rows.append([InlineKeyboardButton(c(ctx)["back"],callback_data="services"),InlineKeyboardButton(c(ctx)["home"],callback_data="home")])
    return InlineKeyboardMarkup(rows)

async def start(update:Update,ctx:ContextTypes.DEFAULT_TYPE):
    if "lang" not in ctx.user_data:
        await update.message.reply_text("Miki Skin Spa 💛\n\n🌐 Choose your language:",reply_markup=lang_kb()); return
    await update.message.reply_text(c(ctx)["hello"],reply_markup=main_kb(ctx),parse_mode="HTML")

async def chatid(update:Update,ctx:ContextTypes.DEFAULT_TYPE):
    """Show the numeric Telegram chat ID for private alert configuration."""
    chat=update.effective_chat
    if not chat or not update.effective_message:
        return
    if chat.type != "private":
        await update.effective_message.reply_text("🔒 Vui lòng mở chat riêng với @MikiSpaDaNangBot và gửi /chatid ở đó.")
        return
    await update.effective_message.reply_text(
        f"✅ Telegram Chat ID: `{chat.id}`\n\n"
        "Đây là ID dùng để nhận thông báo booking Miki Spa. "
        "Bạn có thể sao chép số ID này và gửi cho người cấu hình CRM. "
        "KHÔNG chia sẻ BOT TOKEN.",
        parse_mode="Markdown"
    )

async def show(q,text,kb):
    await q.edit_message_text(text,reply_markup=kb,parse_mode="HTML",disable_web_page_preview=True)

async def click(update:Update,ctx:ContextTypes.DEFAULT_TYPE):
    q=update.callback_query; await q.answer(); d=q.data
    if d.startswith("lang:"):
        ctx.user_data["lang"]=d.split(":")[1]; await show(q,c(ctx)["hello"],main_kb(ctx)); return
    if d=="language": await show(q,"🌐 Choose language:",lang_kb()); return
    if d=="home": await show(q,c(ctx)["hello"],main_kb(ctx)); return
    if d=="services": await show(q,c(ctx)["choose"],group_kb(ctx)); return
    if d=="faq": await show(q,c(ctx)["faqtext"],InlineKeyboardMarkup([[InlineKeyboardButton(c(ctx)["home"],callback_data="home")]])); return
    if d=="offer":
        await show(q,c(ctx)["offertext"],InlineKeyboardMarkup([[InlineKeyboardButton(c(ctx)["book"],web_app=WebAppInfo(url=f"{BOOKING}?lang={lang(ctx)}"))],[InlineKeyboardButton(c(ctx)["home"],callback_data="home")]])); return
    if d=="contact":
        kb=InlineKeyboardMarkup([[InlineKeyboardButton("WhatsApp",url=WA),InlineKeyboardButton("📍 Google Maps",url=MAP)],[InlineKeyboardButton("🌐 Website",url=WEB)],[InlineKeyboardButton(c(ctx)["home"],callback_data="home")]])
        await show(q,c(ctx)["contacttext"],kb); return
    if d.startswith("g:"):
        g=d.split(":")[1]; await show(q,c(ctx).get(g,g),items_kb(ctx,g)); return
    if d.startswith("p:"):
        _,g,p=d.split(":"); await show(q,c(ctx).get(g,g),items_kb(ctx,g,int(p))); return
    if d.startswith("s:"):
        _,g,i=d.split(":"); item=SERVICES[g][int(i)]
        name=item[0] if lang(ctx)=="vi" else item[1]
        extra="\n\n"+c(ctx)["deal"] if g.startswith("laser") else ""
        txt=f"✨ <b>{name}</b>\n\n{c(ctx)['price']}: <b>{item[2]}</b>{extra}"
        pre=quote(f"Miki Spa booking request\nService: {name}\nPrice: {item[2]}")
        kb=InlineKeyboardMarkup([[InlineKeyboardButton(c(ctx)["book"],web_app=WebAppInfo(url=f"{BOOKING}?lang={lang(ctx)}"))],[InlineKeyboardButton("WhatsApp",url=f"{WA}?text={pre}")],[InlineKeyboardButton(c(ctx)["back"],callback_data="services"),InlineKeyboardButton(c(ctx)["home"],callback_data="home")]])
        await show(q,txt,kb)

app=Application.builder().token(TOKEN).build()
app.add_handler(CommandHandler("start",start))
app.add_handler(CommandHandler("chatid",chatid))
app.add_handler(CommandHandler("menu",start))
app.add_handler(CallbackQueryHandler(click))
app.run_polling(allowed_updates=Update.ALL_TYPES)
