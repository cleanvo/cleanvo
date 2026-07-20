/**
 * Cleanvo — Homepage carousel
 * Fade slides, Ken Burns bg, autoplay, pause on hover, swipe, a11y controls.
 */

(function () {
  "use strict";

  var AUTOPLAY_MS = 5500;
  var SWIPE_MIN = 40;

  function initCarousel(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-slide]"));
    var dots = Array.prototype.slice.call(root.querySelectorAll("[data-carousel-dot]"));
    var prevBtn = root.querySelector("[data-carousel-prev]");
    var nextBtn = root.querySelector("[data-carousel-next]");
    var live = root.querySelector("[data-carousel-live]");
    var viewport = root.querySelector("[data-carousel-viewport]");
    var ken = root.querySelector("[data-carousel-kenburns]");
    if (!slides.length) return;

    var index = 0;
    var timer = null;
    var paused = false;
    var utils = window.CleanvoUtils;
    var reduced = utils && utils.prefersReducedMotion && utils.prefersReducedMotion();

    function announce(i) {
      if (!live) return;
      var label = slides[i].getAttribute("data-slide-label") || "Slide " + (i + 1);
      live.textContent = label + " (" + (i + 1) + " of " + slides.length + ")";
    }

    function goTo(next) {
      var total = slides.length;
      index = ((next % total) + total) % total;

      slides.forEach(function (slide, i) {
        var active = i === index;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
        if (active) {
          slide.removeAttribute("hidden");
        } else {
          slide.setAttribute("hidden", "");
        }
      });

      dots.forEach(function (dot, i) {
        var active = i === index;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", active ? "true" : "false");
        dot.tabIndex = active ? 0 : -1;
      });

      if (ken) {
        ken.classList.remove("is-animating");
        void ken.offsetWidth;
        if (!reduced) ken.classList.add("is-animating");
      }

      announce(index);
    }

    function next() {
      goTo(index + 1);
    }

    function prev() {
      goTo(index - 1);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      stop();
      if (reduced || paused || slides.length < 2) return;
      timer = setInterval(next, AUTOPLAY_MS);
    }

    if (nextBtn) nextBtn.addEventListener("click", function () {
      next();
      start();
    });
    if (prevBtn) prevBtn.addEventListener("click", function () {
      prev();
      start();
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goTo(i);
        start();
      });
    });

    root.addEventListener("mouseenter", function () {
      paused = true;
      stop();
    });
    root.addEventListener("mouseleave", function () {
      paused = false;
      start();
    });
    root.addEventListener("focusin", function () {
      paused = true;
      stop();
    });
    root.addEventListener("focusout", function (event) {
      if (!root.contains(event.relatedTarget)) {
        paused = false;
        start();
      }
    });

    /* Touch swipe */
    var startX = 0;
    var startY = 0;
    var tracking = false;
    var target = viewport || root;

    target.addEventListener(
      "touchstart",
      function (event) {
        if (!event.touches || !event.touches.length) return;
        tracking = true;
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        stop();
      },
      { passive: true }
    );

    target.addEventListener(
      "touchend",
      function (event) {
        if (!tracking || !event.changedTouches || !event.changedTouches.length) return;
        tracking = false;
        var dx = event.changedTouches[0].clientX - startX;
        var dy = event.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        }
        paused = false;
        start();
      },
      { passive: true }
    );

    root.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
        start();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
        start();
      }
    });

    goTo(0);
    start();
  }

  function init() {
    var nodes = document.querySelectorAll("[data-carousel]");
    nodes.forEach(initCarousel);
  }

  window.CleanvoCarousel = { init: init };
})();
