(() => {
  const track = document.getElementById('miki-gallery');
  if (!track) return;
  const buttons = [...document.querySelectorAll('[data-gallery-step]')];
  const update = () => {
    const end = track.scrollWidth - track.clientWidth;
    buttons.forEach(button => {
      button.disabled = Number(button.dataset.galleryStep) < 0
        ? track.scrollLeft <= 2 : track.scrollLeft >= end - 2;
    });
  };
  const move = direction => {
    const card = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({left: direction * (card.getBoundingClientRect().width + gap),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  };
  buttons.forEach(button => button.addEventListener('click', () => move(Number(button.dataset.galleryStep))));
  track.addEventListener('scroll', update, {passive:true});
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  new ResizeObserver(update).observe(track);
  update();
})();
