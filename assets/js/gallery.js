(function () {
  function initGallery(gallery) {
    var track = gallery.querySelector('.exo-track');
    var slides = [].slice.call(track.querySelectorAll('.exo-slide'));
    var thumbsWrap = gallery.querySelector('.exo-thumbs');
    var lightbox = gallery.querySelector('.exo-lightbox');
    var lightboxImg = lightbox ? lightbox.querySelector('.exo-lightbox-img') : null;
    var current = 0;

    slides.forEach(function (img, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'exo-thumb' + (i === 0 ? ' active' : '');
      b.setAttribute('aria-label', 'Go to photo ' + (i + 1));
      var t = document.createElement('img');
      t.src = img.src; t.alt = '';
      b.appendChild(t);
      b.addEventListener('click', function () { goTo(i); });
      thumbsWrap.appendChild(b);
    });
    var thumbs = [].slice.call(thumbsWrap.children);

    function goTo(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
    }
    function setActive(i) {
      if (i === current) return;
      current = i;
      thumbs.forEach(function (d, j) { d.classList.toggle('active', j === i); });
    }

    var raf;
    track.addEventListener('scroll', function () {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        setActive(Math.round(track.scrollLeft / track.clientWidth));
      });
    });
    gallery.querySelector('.exo-prev').addEventListener('click', function () { goTo((current - 1 + slides.length) % slides.length); });
    gallery.querySelector('.exo-next').addEventListener('click', function () { goTo((current + 1) % slides.length); });

    if (lightbox && lightboxImg) {
      slides.forEach(function (img) {
        img.addEventListener('click', function () {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightbox.hidden = false;
        });
      });
      lightbox.addEventListener('click', function () { lightbox.hidden = true; });
    }
  }
  function init() { [].slice.call(document.querySelectorAll('.exo-gallery')).forEach(initGallery); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
