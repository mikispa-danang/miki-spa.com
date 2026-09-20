(() => {
  const { createClient } = supabase;
  const client = createClient(
    'https://flbbjvmxqmbaynrcnefv.supabase.co',
    'sb_publishable_AvRkk9Tx-vR1M7k7P1mx3w_txvZ6teS',
    { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
  );

  const $ = s => document.querySelector(s);
  const authPanel = $('#authPanel');
  const app = $('#app');
  const denied = $('#denied');
  const logout = $('#logout');
  const loginForm = $('#loginForm');
  const authStatus = $('#authStatus');

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt = v => v ? new Date(v).toLocaleString('vi-VN') : '';

  async function isStaff(userId) {
    const { data, error } = await client.from('miki_crm_staff').select('user_id,role,active').eq('user_id', userId).maybeSingle();
    return !error && data?.active === true;
  }

  async function loadCRM() {
    const [{ data: leads, error: le }, { data: bookings, error: be }] = await Promise.all([
      client.from('miki_leads').select('*').order('created_at', { ascending: false }).limit(250),
      client.from('miki_bookings').select('*').order('created_at', { ascending: false }).limit(250)
    ]);
    if (le || be) throw le || be;
    renderLeads(leads || []);
    renderBookings(bookings || []);
    $('#leadCount').textContent = leads?.length || 0;
    $('#bookingCount').textContent = bookings?.length || 0;
    $('#newCount').textContent = (leads || []).filter(x => x.status === 'new').length + (bookings || []).filter(x => x.status === 'new').length;
    $('#visitedCount').textContent = (leads || []).filter(x => x.status === 'visited').length + (bookings || []).filter(x => x.status === 'visited').length;
  }

  function renderLeads(rows) {
    $('#leads').innerHTML = `<table><thead><tr><th>Thời gian</th><th>Khách</th><th>Liên hệ</th><th>Dịch vụ</th><th>Nguồn</th><th>Trạng thái</th></tr></thead><tbody>${rows.map(r => `<tr><td>${esc(fmt(r.created_at))}</td><td>${esc(r.name)}</td><td class="contact">${esc(r.contact)}</td><td>${esc(r.service || '')}</td><td><span class="muted">${esc(r.source?.utm_source || r.source?.referrer || 'direct')}</span></td><td><select class="status" data-table="miki_leads" data-id="${esc(r.id)}"><option ${r.status==='new'?'selected':''}>new</option><option ${r.status==='contacted'?'selected':''}>contacted</option><option ${r.status==='qualified'?'selected':''}>qualified</option><option ${r.status==='booked'?'selected':''}>booked</option><option ${r.status==='visited'?'selected':''}>visited</option><option ${r.status==='review'?'selected':''}>review</option><option ${r.status==='lost'?'selected':''}>lost</option></select></td></tr>`).join('')}</tbody></table>`;
  }

  function renderBookings(rows) {
    $('#bookings').innerHTML = `<table><thead><tr><th>Tạo lúc</th><th>Khách</th><th>Điện thoại</th><th>Dịch vụ</th><th>Lịch mong muốn</th><th>Trạng thái</th></tr></thead><tbody>${rows.map(r => `<tr><td>${esc(fmt(r.created_at))}</td><td>${esc(r.name)}</td><td class="contact">${esc(r.phone)}</td><td>${esc(r.service || '')}</td><td>${esc(r.appointment_date || '')} ${esc(r.appointment_time || '')}</td><td><select class="status" data-table="miki_bookings" data-id="${esc(r.id)}"><option ${r.status==='new'?'selected':''}>new</option><option ${r.status==='contacted'?'selected':''}>contacted</option><option ${r.status==='confirmed'?'selected':''}>confirmed</option><option ${r.status==='visited'?'selected':''}>visited</option><option ${r.status==='cancelled'?'selected':''}>cancelled</option><option ${r.status==='no_show'?'selected':''}>no_show</option></select></td></tr>`).join('')}</tbody></table>`;
  }

  document.addEventListener('change', async e => {
    const s = e.target.closest('.status');
    if (!s) return;
    s.disabled = true;
    const { error } = await client.from(s.dataset.table).update({ status: s.value }).eq('id', s.dataset.id);
    s.disabled = false;
    if (error) alert('Không cập nhật được trạng thái.');
  });

  document.querySelectorAll('[data-refresh]').forEach(b => b.onclick = () => loadCRM().catch(() => alert('Không tải được CRM.')));

  loginForm?.addEventListener('submit', async e => {
    e.preventDefault();
    authStatus.textContent = 'Đang gửi…';
    const email = $('#email').value.trim();
    const { error } = await client.auth.signInWithOtp({ email, options: { emailRedirectTo: new URL('crm.html', location.href).href } });
    authStatus.textContent = error ? 'Không gửi được magic link.' : 'Đã gửi magic link. Kiểm tra email của bạn.';
  });

  logout.onclick = async () => { await client.auth.signOut(); location.reload(); };

  async function boot() {
    const { data: { session } } = await client.auth.getSession();
    if (!session?.user) return;
    authPanel.hidden = true;
    logout.hidden = false;
    if (!(await isStaff(session.user.id))) { denied.hidden = false; return; }
    app.hidden = false;
    try { await loadCRM(); } catch { denied.hidden = false; app.hidden = true; }
  }

  client.auth.onAuthStateChange(() => setTimeout(boot, 0));
  boot();
})();