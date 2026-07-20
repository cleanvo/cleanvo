/**
 * Cleanvo — Contact form validation + EmailJS submit
 */

(function () {
  "use strict";

  function trim(value) {
    return String(value || "").trim();
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isPhone(value) {
    var digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }

  function setFieldError(field, message) {
    field.classList.add("is-invalid");
    var error = field.querySelector(".form-error");
    if (error) error.textContent = message;
  }

  function clearFieldError(field) {
    field.classList.remove("is-invalid");
  }

  function showStatus(el, type, message) {
    if (!el) return;
    el.className = "form-status is-visible form-status--" + type;
    el.textContent = message;
    el.setAttribute("role", type === "error" ? "alert" : "status");
  }

  function hideStatus(el) {
    if (!el) return;
    el.className = "form-status";
    el.textContent = "";
    el.removeAttribute("role");
  }

  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    var status = form.querySelector("[data-form-status]");
    var submitBtn = form.querySelector("[data-form-submit]");
    var fields = {
      name: form.querySelector("#contact-name"),
      phone: form.querySelector("#contact-phone"),
      email: form.querySelector("#contact-email"),
      city: form.querySelector("#contact-city"),
      message: form.querySelector("#contact-message"),
    };

    Object.keys(fields).forEach(function (key) {
      var input = fields[key];
      if (!input) return;
      input.addEventListener("input", function () {
        clearFieldError(input.closest(".form-field"));
        hideStatus(status);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      hideStatus(status);

      var values = {
        name: trim(fields.name && fields.name.value),
        phone: trim(fields.phone && fields.phone.value),
        email: trim(fields.email && fields.email.value),
        city: trim(fields.city && fields.city.value),
        message: trim(fields.message && fields.message.value),
      };

      var valid = true;

      Object.keys(fields).forEach(function (key) {
        if (fields[key]) clearFieldError(fields[key].closest(".form-field"));
      });

      if (!values.name) {
        setFieldError(fields.name.closest(".form-field"), "Please enter your name.");
        valid = false;
      }

      if (!values.phone || !isPhone(values.phone)) {
        setFieldError(fields.phone.closest(".form-field"), "Enter a valid phone number (10–15 digits).");
        valid = false;
      }

      if (!values.email || !isEmail(values.email)) {
        setFieldError(fields.email.closest(".form-field"), "Enter a valid email address.");
        valid = false;
      }

      if (!values.city) {
        setFieldError(fields.city.closest(".form-field"), "Please enter your city.");
        valid = false;
      }

      if (!values.message || values.message.length < 10) {
        setFieldError(fields.message.closest(".form-field"), "Please write a short message (at least 10 characters).");
        valid = false;
      }

      if (!valid) {
        showStatus(status, "error", "Please fix the highlighted fields and try again.");
        var firstInvalid = form.querySelector(".form-field.is-invalid input, .form-field.is-invalid textarea");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var config = window.CleanvoEmailConfig || {};
      var ready =
        config.configured === true &&
        config.publicKey &&
        config.serviceId &&
        config.templateId &&
        config.publicKey.indexOf("YOUR_") !== 0;

      if (!ready) {
        showStatus(
          status,
          "info",
          "Your enquiry details look good. Email delivery is not connected yet — please email cleanvosupport@gmail.com or call +91 91296 69512, and add EmailJS keys in assets/js/emailjs.config.js."
        );
        return;
      }

      if (!window.emailjs || typeof window.emailjs.send !== "function") {
        showStatus(status, "error", "Email service could not load. Please email cleanvosupport@gmail.com directly.");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      try {
        if (typeof window.emailjs.init === "function") {
          window.emailjs.init({ publicKey: config.publicKey });
        }
      } catch (err) {
        /* init may already have run */
      }

      window.emailjs
        .send(config.serviceId, config.templateId, {
          name: values.name,
          phone: values.phone,
          email: values.email,
          city: values.city,
          message: values.message,
        })
        .then(function () {
          showStatus(status, "success", "Thank you. Your enquiry has been sent. We will get back to you soon.");
          form.reset();
        })
        .catch(function () {
          showStatus(
            status,
            "error",
            "Sorry — we could not send your message right now. Please try again or email cleanvosupport@gmail.com."
          );
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send enquiry";
          }
        });
    });
  }

  window.CleanvoContact = { init: initContactForm };
})();
