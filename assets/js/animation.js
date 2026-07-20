/**
 * Cleanvo — Animations (JS)
 * Page load fade + IntersectionObserver scroll reveal.
 */

(function () {
  "use strict";

  function initPageLoad() {
    document.body.classList.add("is-ready");
  }

  function initScrollReveal() {
    var utils = window.CleanvoUtils;
    var targets = document.querySelectorAll(".fade-up, .fade-in, [data-reveal]");

    if (!targets.length) return;

    if (utils && utils.prefersReducedMotion && utils.prefersReducedMotion()) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initAnimations() {
    initPageLoad();
    initScrollReveal();
  }

  window.CleanvoAnimation = { init: initAnimations };
})();
