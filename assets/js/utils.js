/**
 * Cleanvo — Utilities
 * Shared helpers (debounce, DOM queries, reduced-motion).
 */

(function (global) {
  "use strict";

  function debounce(fn, wait) {
    let timer;
    return function debounced(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.from((scope || document).querySelectorAll(selector));
  }

  global.CleanvoUtils = {
    debounce,
    prefersReducedMotion,
    qs,
    qsa,
  };
})(window);
