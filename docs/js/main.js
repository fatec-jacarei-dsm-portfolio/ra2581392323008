/* ==========================================================================
   Portfólio — Jackson Machado
   JavaScript puro (sem dependências externas)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------------------------------------
     Menu mobile
  ----------------------------------------------------------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------------------------------
     Abas de Projetos: Acadêmicos / Profissionais / Pessoais
  ----------------------------------------------------------- */
  var tabButtons = document.querySelectorAll('.tab-btn');
  var panels = document.querySelectorAll('.project-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      panels.forEach(function (panel) {
        if (panel.id === target) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  /* -----------------------------------------------------------
     Revelação ao rolar a página + barras de habilidade
  ----------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal, .skill-bar-fill');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* -----------------------------------------------------------
     Header: leve realce ao rolar
  ----------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var lastY = window.scrollY;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      header.style.boxShadow = y > 8 ? '0 8px 24px rgba(0,0,0,0.25)' : 'none';
      lastY = y;
    }, { passive: true });
  }

});
