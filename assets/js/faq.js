/**
 * Cleanvo — FAQ accordion
 * Behaviour: one item open at a time (better for mobile scanning).
 */

(function () {
  "use strict";

  function initFaq() {
    var root = document.querySelector("[data-faq]");
    if (!root) return;

    var items = Array.prototype.slice.call(root.querySelectorAll("[data-faq-item]"));

    function closeItem(item) {
      var btn = item.querySelector("[data-faq-trigger]");
      var panel = item.querySelector("[data-faq-panel]");
      item.classList.remove("is-open");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (panel) panel.setAttribute("hidden", "");
    }

    function openItem(item) {
      var btn = item.querySelector("[data-faq-trigger]");
      var panel = item.querySelector("[data-faq-panel]");
      item.classList.add("is-open");
      if (btn) btn.setAttribute("aria-expanded", "true");
      if (panel) panel.removeAttribute("hidden");
    }

    items.forEach(function (item) {
      var btn = item.querySelector("[data-faq-trigger]");
      if (!btn) return;

      btn.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        items.forEach(closeItem);
        if (!isOpen) openItem(item);
      });
    });
  }

  window.CleanvoFaq = { init: initFaq };
})();
