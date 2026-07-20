/**
 * Cleanvo — EmailJS public config (safe to commit public IDs only)
 *
 * Setup:
 * 1. Create an EmailJS account → Email Services → connect inbox (e.g. cleanvosupport@gmail.com)
 * 2. Create a template with variables: {{name}} {{phone}} {{email}} {{city}} {{message}}
 * 3. Paste publicKey, serviceId, templateId below
 * 4. Set configured: true
 *
 * Do NOT put private keys here.
 */

window.CleanvoEmailConfig = {
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  configured: false,
};
