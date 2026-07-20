/**
 * Cleanvo — Navigation
 * Sticky header, mobile menu, active link, shrink-on-scroll, smooth anchors.
 */

(function () {
  "use strict";

  var SCROLL_SHRINK_AT = 24;
  var DESKTOP_MQ = "(min-width: 1024px)";

  function getPathName() {
    var path = window.location.pathname.replace(/\\/g, "/");
    var file = path.split("/").pop() || "index.html";
    if (file === "" || file === "/") return "index.html";
    return file;
  }

  function setActiveLinks(root) {
    var current = getPathName();
    var links = root.querySelectorAll("[data-nav-link]");
    links.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      var isActive = href === current || (current === "index.html" && href === "index.html");
      if (isActive) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      }
    });
  }

  function initMobileMenu(header) {
    var toggle = header.querySelector("[data-nav-toggle]");
    var nav = header.querySelector("[data-site-nav]") || document.querySelector("[data-site-nav]");
    var slot = header.querySelector(".site-header__inner");
    if (!toggle || !nav || !slot) return;

    var mq = window.matchMedia(DESKTOP_MQ);

    function placeNav() {
      if (mq.matches) {
        if (nav.parentElement !== slot) {
          slot.appendChild(nav);
        }
        closeMenu();
      } else if (nav.parentElement !== document.body) {
        document.body.appendChild(nav);
      }
    }

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-label", "Open menu");
    }

    function openMenu() {
      if (mq.matches) return;
      if (nav.parentElement !== document.body) {
        document.body.appendChild(nav);
      }
      toggle.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
      document.body.classList.add("nav-open");
      toggle.setAttribute("aria-label", "Close menu");
    }

    function setOpen(open) {
      if (open) openMenu();
      else closeMenu();
    }

    placeNav();

    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (mq.matches) return;
      var shouldOpen = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(shouldOpen);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      closeMenu();
    });

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", placeNav);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(placeNav);
    }
  }

  function initShrinkOnScroll(header) {
    var utils = window.CleanvoUtils;
    var reduced = utils && utils.prefersReducedMotion && utils.prefersReducedMotion();

    function update() {
      header.classList.toggle("is-shrunk", window.scrollY > SCROLL_SHRINK_AT);
    }

    update();
    var onScroll = reduced
      ? update
      : utils && utils.debounce
        ? utils.debounce(update, 10)
        : update;
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initSmoothScroll() {
    var utils = window.CleanvoUtils;
    if (utils && utils.prefersReducedMotion && utils.prefersReducedMotion()) return;
    document.documentElement.classList.add("smooth-scroll");
  }

  function initNavigation() {
    var header = document.querySelector("[data-site-header]");
    if (!header) return;

    setActiveLinks(document);
    initMobileMenu(header);
    initShrinkOnScroll(header);
    initSmoothScroll();
  }

  window.CleanvoNavigation = { init: initNavigation };
})();
