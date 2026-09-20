(() => {
  const BASE = 'https://miki-spa.com';
  const title = 'Miki Skin Spa | Triệt lông & Chăm sóc da tại Đà Nẵng';
  const description = 'Miki Skin Spa tại Đà Nẵng chuyên triệt lông, waxing, chăm sóc da, hỗ trợ da mụn và body care trong không gian ấm cúng, sạch sẽ và riêng tư.';
  const image = `${BASE}/assets/optimized/miki-hero-no-poster-lamp.webp`;

  function ensureLink(rel, href) {
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) { el = document.createElement('link'); el.rel = rel; document.head.appendChild(el); }
    el.href = href;
  }
  function ensureMeta(selector, attrs) {
    let el = document.head.querySelector(selector);
    if (!el) { el = document.createElement('meta'); document.head.appendChild(el); }
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v));
  }

  ensureLink('canonical', `${BASE}/`);
  ensureMeta('meta[property="og:type"]', { property:'og:type', content:'website' });
  ensureMeta('meta[property="og:title"]', { property:'og:title', content:title });
  ensureMeta('meta[property="og:description"]', { property:'og:description', content:description });
  ensureMeta('meta[property="og:url"]', { property:'og:url', content:`${BASE}/` });
  ensureMeta('meta[property="og:image"]', { property:'og:image', content:image });
  ensureMeta('meta[property="og:locale"]', { property:'og:locale', content:'vi_VN' });
  ensureMeta('meta[name="twitter:card"]', { name:'twitter:card', content:'summary_large_image' });
  ensureMeta('meta[name="twitter:title"]', { name:'twitter:title', content:title });
  ensureMeta('meta[name="twitter:description"]', { name:'twitter:description', content:description });
  ensureMeta('meta[name="twitter:image"]', { name:'twitter:image', content:image });

  if (!document.getElementById('miki-local-business-schema')) {
    const schema = document.createElement('script');
    schema.id = 'miki-local-business-schema';
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context':'https://schema.org',
      '@type':'BeautySalon',
      '@id':`${BASE}/#business`,
      name:'Miki Skin Spa',
      url:`${BASE}/`,
      image,
      telephone:'+84 935 555 170',
      address:{
        '@type':'PostalAddress',
        streetAddress:'47 Cô Giang',
        addressLocality:'Hải Châu',
        addressRegion:'Đà Nẵng',
        addressCountry:'VN'
      },
      openingHoursSpecification:[{
        '@type':'OpeningHoursSpecification',
        dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens:'08:30',
        closes:'21:30'
      }],
      hasMap:'https://maps.app.goo.gl/Mswc1KA4MVyok92NA?g_st=iz'
    });
    document.head.appendChild(schema);
  }
})();
