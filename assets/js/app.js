/**
 * Cleanvo — App entry
 * Initializes shared modules in order.
 */

(function () {
  "use strict";

  function init() {
    if (window.CleanvoNavigation && typeof window.CleanvoNavigation.init === "function") {
      window.CleanvoNavigation.init();
    }
    if (window.CleanvoAnimation && typeof window.CleanvoAnimation.init === "function") {
      window.CleanvoAnimation.init();
    }
    if (window.CleanvoCarousel && typeof window.CleanvoCarousel.init === "function") {
      window.CleanvoCarousel.init();
    }
    if (window.CleanvoVideo && typeof window.CleanvoVideo.init === "function") {
      window.CleanvoVideo.init();
    }
    if (window.CleanvoContact && typeof window.CleanvoContact.init === "function") {
      window.CleanvoContact.init();
    }
    if (window.CleanvoFaq && typeof window.CleanvoFaq.init === "function") {
      window.CleanvoFaq.init();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
