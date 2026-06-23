(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var trigger = document.getElementById('top');
    if (navbar && trigger) {
      var observer = new IntersectionObserver(function (entries) {
        navbar.classList.toggle('navbar--sticky', entries[0].boundingClientRect.y < 0);
      });
      observer.observe(trigger);
    }

    var drawer = document.getElementById('navbar-drawer');
    var openBtn = document.getElementById('drawer-open');
    if (drawer && openBtn) {
      openBtn.addEventListener('click', function () { drawer.showModal(); });
      drawer.querySelectorAll('a, #drawer-close').forEach(function (el) {
        el.addEventListener('click', function () { drawer.close(); });
      });
    }
  });
})();
