/**
 * Cleanvo — Video modal (plays assets/videos/my-video.mp4)
 */

(function () {
  "use strict";

  function initVideoModal() {
    var openers = document.querySelectorAll("[data-video-open]");
    var modal = document.querySelector("[data-video-modal]");
    if (!modal || !openers.length) return;

    var closeEls = modal.querySelectorAll("[data-video-close]");
    var dialog = modal.querySelector("[data-video-dialog]");
    var player = modal.querySelector("[data-video-player]");
    var lastFocus = null;

    function playVideo() {
      if (!player) return;
      var playPromise = player.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {
          /* Autoplay may be blocked; native controls remain available */
        });
      }
    }

    function stopVideo() {
      if (!player) return;
      player.pause();
      try {
        player.currentTime = 0;
      } catch (e) {
        /* ignore seek errors on unload */
      }
    }

    function open() {
      lastFocus = document.activeElement;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      if (dialog) dialog.focus();
      playVideo();
    }

    function close() {
      stopVideo();
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    openers.forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        open();
      });
    });

    closeEls.forEach(function (el) {
      el.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        close();
      }
    });
  }

  window.CleanvoVideo = { init: initVideoModal };
})();
