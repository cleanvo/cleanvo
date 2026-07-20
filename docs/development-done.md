# Cleanvo — Development Done

## [2026-07-19] Phase 1 — Project Foundation

### Functionality covered
- Full static site folder structure at repo root (GitHub Pages ready)
- All 8 HTML page shells with semantic skeleton, meta title/description, shared CSS/JS links
- CSS pipeline wired: reset → variables → typography → layout → components → animations via `style.css`
- JS modules scaffolded: `utils.js`, `navigation.js`, `animation.js`, `app.js` (deferred load order)
- `robots.txt` and `sitemap.xml` stubs
- `README.md` and `.gitignore`
- Uploaded images copied into `assets/images/` (originals kept in `images/`)
- Git initialized on branch `feature/project-foundation` (no commit yet)

### Quick summary
Phase 1 foundation is in place so every page loads the same design-system and script stack. No visual theme or navigation yet — that starts in Phase 2–3. Ready for you to open pages in a browser and verify.

### Files added / changed
- `index.html`, `about.html`, `products.html`, `quality-safety.html`, `contact.html`, `faq.html`, `privacy-policy.html`, `terms-and-conditions.html` — added (shells)
- `assets/css/reset.css`, `variables.css`, `typography.css`, `layout.css`, `components.css`, `animations.css`, `style.css` — added
- `assets/js/utils.js`, `navigation.js`, `animation.js`, `app.js` — added
- `assets/images/logo/logo.png` — added (copy from upload)
- `assets/images/products/bottles-sticker.jpeg` — added (copy)
- `assets/images/gallery/other-info.jpeg` — added (copy)
- `assets/components/README.md` — added
- `assets/videos/`, `assets/fonts/`, image subfolders — added (empty dirs ready)
- `README.md`, `.gitignore`, `robots.txt`, `sitemap.xml` — added
- `development-done.md` — added (this log)

### Status
Completed — verified; Phase 2 started after confirmation

### Testing done (if any)
- Verified all required Phase 1 paths exist on disk
- Confirmed `index.html` references `style.css` and deferred JS in correct order
- Git branch `feature/project-foundation` active
- Manual browser check: open `index.html` (and other pages) locally to confirm no 404s on CSS/JS

---

## [2026-07-19] Phase 2 — Design System

### Functionality covered
- Full brand design tokens (blue/green palette, spacing, radii, shadows, breakpoints)
- Manrope typography hierarchy (H1–H6, lead, caption, muted)
- Brand wordmark utility: Clean (blue) + vo (green)
- Layout helpers: container, sections, grids, flex, stack, skip-link, sticky-header offset
- Buttons: `.btn--primary`, `.btn--outline`, `.btn--secondary` (+ sizes/ghost)
- Fade-up / fade-in animation utilities with prefers-reduced-motion
- Temporary bottle SVG placeholder for hero/product use
- Homepage design-system preview for visual verification

### Quick summary
Encoded Cleanvo’s visual identity in CSS so later pages reuse the same theme. Manrope is the site font. Index shows a branded preview with buttons and placeholder bottle so you can check colors, type, and hover states before Phase 3 nav/footer.

### Files added / changed
- `assets/css/variables.css` — modified (full token set)
- `assets/css/typography.css` — modified (Manrope hierarchy + wordmark)
- `assets/css/layout.css` — modified (section/grid/skip-link helpers)
- `assets/css/components.css` — modified (buttons + ds-preview)
- `assets/css/animations.css` — modified (fade-up utilities)
- `assets/css/style.css` — modified (Manrope @import first)
- `assets/images/products/bottle-placeholder.svg` — added
- `index.html` — modified (design system preview)
- `about.html`, `products.html`, `quality-safety.html`, `contact.html`, `faq.html`, `privacy-policy.html`, `terms-and-conditions.html` — modified (skip-link + font preconnect)

### Status
Completed — verified; Phase 3 started after confirmation

### Testing done (if any)
- Open `index.html`: confirm Manrope, blue/green wordmark, gradient preview panel
- Hover primary button → should shift to green accent
- Resize ~320px and ~1440px: no horizontal scroll expected
- Confirm bottle placeholder SVG loads under the CTAs

---

## [2026-07-19] Phase 3 — Global Chrome (Nav + Footer)

### Functionality covered
- Sticky site header with logo, primary links, Enquire CTA
- Mobile hamburger menu (ARIA expanded, overlay, Escape/outside close)
- Active nav link detection via JS
- Header shrink-on-scroll
- Site-wide footer: quick links, products, contact, social placeholders, legal links
- Scroll-reveal via IntersectionObserver + subtle page-load fade
- Smooth scroll (respects reduced motion)

### Quick summary
Every page now shares production-ready navigation and footer so the site is fully browsable end-to-end. Main content remains shell/preview until Phase 4 homepage work.

### Files added / changed
- All 8 HTML pages — modified (shared header + footer chrome)
- `assets/css/components.css` — modified (header, nav, footer, social styles)
- `assets/css/layout.css` — modified (flex page layout, smooth-scroll)
- `assets/css/animations.css` — modified (page-load fade + scripting fallback)
- `assets/js/navigation.js` — modified (menu, active link, shrink, smooth scroll)
- `assets/js/animation.js` — modified (reveal observer + is-ready)
- `.cursor/rules/development-done.mdc` — modified (append entries at end)

### Status
Completed — awaiting your verification before Phase 4 (Homepage design)

### Testing done (if any)
- Open `index.html`: sticky header + footer visible
- Resize below 1024px: hamburger opens/closes; Enquire and links work
- Navigate to About/Products: active link highlights; footer links resolve
- Scroll: header shrinks; page fade-in on load

---

## [2026-07-19] Phase 4 — Homepage Core Design

### Functionality covered
- Full homepage section stack: Hero → Carousel stub → Why Choose → Video stub → Featured Product → Benefits → Upcoming → Promise → Contact CTA
- Premium hero with soft glow, ripple, sparkles, floating bottle (respects reduced motion)
- Founder-tone copy; Floor Cleaner Lavender Fresh 1L featured with label benefits strip
- Upcoming product tiles with Coming Soon states
- Carousel markup (3 slides) and video panel left as clean stubs for Phase 5

### Quick summary
Homepage now reads as a real brand landing page instead of a design-system preview. Interactive carousel autoplay/swipe and video popup are intentionally deferred to Phase 5.

### Files added / changed
- `index.html` — modified (full homepage main content)
- `assets/css/home.css` — added (homepage section styles)
- `assets/css/style.css` — modified (import `home.css`)
- `assets/css/animations.css` — modified (hero motion keyframes + reduced-motion overrides)

### Status
Completed — awaiting your verification before Phase 5 (carousel + video polish)

### Testing done (if any)
- Open `index.html`: hero should show bottle float + soft background motion
- CTAs: Explore Products → `products.html`, Contact → `contact.html`
- Scroll through all sections on mobile (~320) and desktop; no horizontal overflow expected
- Confirm carousel note and video “Phase 5” hints are visible stubs only

---

## [2026-07-19] Phase 5 — Carousel, Video Modal & Mobile Overflow

### Functionality covered
- Interactive homepage carousel: fade transitions, Ken Burns background, autoplay, pause on hover/focus, swipe, prev/next, dots, aria-live
- Experience Cleanvo video modal with branded placeholder (ESC / backdrop / close button)
- Wave divider between carousel and Why Choose
- Mobile overflow hardening: `overflow-x: clip` on html/body, container max-width, hero/nav overflow containment — no horizontal scroll on small screens
- `assets/videos/README.md` documenting where the real promo file should go

### Quick summary
Homepage motion and interactivity are production-ready for v1 chrome. Video plays a placeholder until you add the final MP4/YouTube asset. Extra care taken so mobile devices do not get sideways scroll from nav drawer, hero glows, or wide sections.

### Files added / changed
- `assets/js/carousel.js` — added
- `assets/js/video.js` — added
- `assets/js/app.js` — modified (init carousel + video)
- `index.html` — modified (carousel controls, modal, wave, script tags)
- `assets/css/home.css` — modified (carousel, modal, waves, mobile safety)
- `assets/css/reset.css` — modified (overflow-x clip)
- `assets/css/layout.css` — modified (container max-width clamp)
- `assets/css/components.css` — modified (nav overflow containment)
- `assets/videos/README.md` — added

### Status
Completed — awaiting your verification before Phase 6 (About Us)

### Testing done (if any)
- Open `index.html` on phone width (~320–390): confirm no horizontal scrollbar
- Carousel: autoplay, hover pause, swipe, arrows, dots
- Video: Play preview → modal opens; ESC / backdrop / × close and focus returns
- Resize menu open/closed on mobile — page should not shift sideways

---

## [2026-07-19] Fix — Mobile nav full-height drawer

### Functionality covered
- Mobile menu now opens full viewport height (was clipped to header height)
- Root cause: `backdrop-filter` on sticky header trapped `position: fixed` nav
- Drawer mounts to `document.body` on mobile; returns to header on desktop
- Overlay z-index and outside-click close improved

### Quick summary
Hamburger menu on phones should now slide in as a full-height panel with all links and Enquire visible/scrollable.

### Files added / changed
- `assets/css/components.css` — modified (removed backdrop-filter; full `100dvh` drawer; z-index stack)
- `assets/js/navigation.js` — modified (body teleport for mobile drawer)

### Status
Completed — please re-check mobile menu before Phase 6

### Testing done (if any)
- Hard refresh on phone / DevTools mobile: tap hamburger
- Drawer should cover full screen height; all links + Enquire reachable
- Tap backdrop or Escape to close; rotate/resize to desktop restores header nav

---

## [2026-07-19] Phase 6 — About Us Page

### Functionality covered
- Full About page: hero, brand story & mission, founder spotlight, values, motto band, quality philosophy, CTA
- Founder block for Jayant Saxena with branded “JS” initials avatar placeholder
- Human, founder-tone copy; no exaggerated claims
- Updated SEO title/description; About nav active via existing JS
- Mobile-safe layout (no horizontal overflow patterns)

### Quick summary
`about.html` is now a complete brand story page consistent with the homepage design system, ready for a real founder photo later if you add one.

### Files added / changed
- `about.html` — modified (full About content)
- `assets/css/about.css` — added
- `assets/css/style.css` — modified (import about.css)

### Status
Completed — awaiting your verification before Phase 7 (Products)

### Testing done (if any)
- Open `about.html`: scroll all sections on mobile and desktop
- Confirm About is highlighted in nav
- CTAs: View products → `products.html`, Contact us → `contact.html`
- No horizontal scroll on ~320px width

---

## [2026-07-20] Phase 7 — Products Page

### Functionality covered
- Full Products page with Floor Cleaner deep dive (Lavender Fresh 1L)
- Benefits strip, 3-step how-to-use, fragrance/safety notes (pack label authoritative)
- Coming soon grid: Dishwash Liquid, Hand Wash, White Phenyl, Toilet Cleaner — no buy CTAs
- Soft enquiry CTAs for customers/retailers/distributors
- Product-family accent colors on coming-soon cards; mobile-safe layout

### Quick summary
`products.html` now showcases the launch product properly and sets expectations for the upcoming range without looking like fake e-commerce.

### Files added / changed
- `products.html` — modified (full products content)
- `assets/css/products.css` — added
- `assets/css/style.css` — modified (import products.css)

### Status
Completed — awaiting your verification before Phase 8 (Quality & Safety)

### Testing done (if any)
- Open `products.html` on mobile and desktop
- Confirm Products nav active; Coming Soon cards are not purchase buttons
- Enquire / Quality & Safety / Contact links work
- No horizontal scroll at ~320px

---

## [2026-07-20] Phase 8 — Quality & Safety Page

### Functionality covered
- Full Quality & Safety page: safe usage, storage, packaging, customer guidelines, caution, quality promise
- On-page jump links for scannable navigation
- Toilet cleaner caution kept high-level; pack label treated as authoritative
- CTAs to Products and Contact; mobile-readable long-form layout

### Quick summary
`quality-safety.html` now communicates trust and responsible use for a hygiene brand without alarmist or incomplete chemical advice.

### Files added / changed
- `quality-safety.html` — modified (full page content)
- `assets/css/quality-safety.css` — added
- `assets/css/style.css` — modified (import quality-safety.css)

### Status
Completed — awaiting your verification before Phase 9 (Contact + EmailJS)

### Testing done (if any)
- Open `quality-safety.html`; confirm nav active state
- Tap on-page TOC links; read on ~320px width (no horizontal scroll)
- CTA buttons route to products and contact

---

## [2026-07-20] Phase 9 — Contact Us + EmailJS Wiring

### Functionality covered
- Contact page with phone, email, address, Mon–Sat 10:00–6:00 IST hours, social placeholders
- Google Map embed for Shahjahanpur address
- Enquiry form: Name, Phone, Email, City, Message with accessible validation
- EmailJS integration scaffolded via `emailjs.config.js` placeholders (`configured: false` until keys added)
- Success / error / not-configured info states; dealer/customer intro copy

### Quick summary
Contact is ready for users to reach Cleanvo. Form validation works now; email send activates once you fill public EmailJS IDs and set `configured: true`.

### Files added / changed
- `contact.html` — modified (full contact UI + EmailJS CDN script)
- `assets/css/contact.css` — added
- `assets/css/style.css` — modified (import contact.css)
- `assets/js/emailjs.config.js` — added (placeholders)
- `assets/js/contact.js` — added (validation + send)
- `assets/js/app.js` — modified (init CleanvoContact)

### Status
Completed — awaiting verification before Phase 10 (FAQ). Add EmailJS keys when ready.

### Testing done (if any)
- Open `contact.html`; submit empty form → field errors
- Submit valid form before keys → info message pointing to email/phone + config file
- Check map loads; click-to-call / mailto on mobile
- No horizontal scroll at ~320px

---

## [2026-07-20] Phase 10 — FAQ Page

### Functionality covered
- Full FAQ page with topic clusters: usage, safety/storage, availability/dealers, upcoming products, company/contact
- Keyboard-accessible accordion (buttons + aria-expanded / aria-controls)
- Behaviour: one item open at a time (mobile-friendly)
- Soft CTA to Contact / Products
- Tap targets ≥ 44px via min-height on triggers

### Quick summary
`faq.html` answers common Cleanvo questions in a scannable accordion. FAQ Schema.org can be added in the SEO phase.

### Files added / changed
- `faq.html` — modified (full FAQ content)
- `assets/css/faq.css` — added
- `assets/css/style.css` — modified (import faq.css)
- `assets/js/faq.js` — added
- `assets/js/app.js` — modified (init CleanvoFaq)

### Status
Completed — awaiting verification before Phase 11 (Privacy Policy)

### Testing done (if any)
- Open `faq.html`; expand/collapse items; confirm only one open at a time
- Tab to triggers and operate with Enter/Space
- Check on ~320px width — no horizontal scroll; comfortable tap size

---

## [2026-07-20] Phase 11 — Privacy Policy

### Functionality covered
- Full Privacy Policy for static marketing site + EmailJS contact form
- Covers: data collected, EmailJS use, cookies/analytics (including future GA), third-party embeds (Fonts, Maps, video, hosting), retention, security, children’s note, contact for requests
- Company identity + Shahjahanpur address; last updated 20 July 2026
- Shared `legal.css` for Privacy/Terms long-form layout

### Quick summary
`privacy-policy.html` is publishable copy — no lorem. Linked from footer and ends with links to Terms and Contact.

### Files added / changed
- `privacy-policy.html` — modified (full policy content)
- `assets/css/legal.css` — added
- `assets/css/style.css` — modified (import legal.css)

### Status
Completed — awaiting verification before Phase 12 (Terms & Conditions)

### Testing done (if any)
- Open `privacy-policy.html`; confirm readable mobile long-form layout
- Footer Privacy link works; no placeholder lorem text

---

## [2026-07-20] Phase 12 — Terms & Conditions

### Functionality covered
- Full Terms for non-ecommerce brand site: acceptance, enquiry-only nature, IP, pack-label disclaimer, upcoming-products caveat, acceptable use, third parties, warranties, liability, privacy link, governing law (India / Shahjahanpur U.P.), legal contact
- Last updated 20 July 2026; same legal layout as Privacy Policy

### Quick summary
`terms-and-conditions.html` is publishable and consistent with Privacy styling. Footer Terms link already points here.

### Files added / changed
- `terms-and-conditions.html` — modified (full Terms content)

### Status
Completed — awaiting verification before Phase 13 (Responsive & cross-page QA)

### Testing done (if any)
- Open `terms-and-conditions.html`; check footer Terms link
- Confirm styling matches Privacy; readable on mobile

---

## [2026-07-20] Phase 13 — Responsive & Cross-Page QA

### Functionality covered
- Global responsive hardening via `responsive.css` (overflow lock, touch targets, 320px stacked CTAs, focus-visible, iOS input font-size)
- Carousel dots enlarged to ≥44px hit area
- Header inner max-width / gap tweak for narrow phones
- Map iframe sizing safeguarded inside `.contact-map`
- Automated audit: all 8 pages have header/footer/nav JS/viewport; **no broken internal .html links**

### Quick summary
Cross-page mobile QA pass complete with CSS fixes for horizontal scroll risk and touch usability. Manual spot-check still recommended at 320 / 768 / 1440 in the browser.

### Files added / changed
- `assets/css/responsive.css` — added
- `assets/css/style.css` — modified (import responsive.css)
- `assets/css/home.css` — modified (touch-friendly carousel dots)
- `assets/css/components.css` — modified (header inner spacing/max-width)

### Status
Completed — awaiting verification before Phase 14 (Performance, SEO, Deploy)

### Testing done (if any)
- Link/chrome audit script: 8 pages OK, missing links none
- Please verify in DevTools: 320, 480, 768, 1024, 1440 — no horizontal scroll; menu, FAQ, form, carousel usable

---

## [2026-07-20] Fix — Wire homepage promo video (my-video.mp4)

### Functionality covered
- Experience Cleanvo modal now plays `assets/videos/my-video.mp4`
- Modal open autoplays the clip; close pauses and resets to start
- Native controls + `playsinline` for mobile; placeholder “coming soon” copy removed
- Modal player sized for a wider video frame

### Quick summary
Homepage video section uses the real promo MP4 instead of a branded placeholder. Open Play video → film starts; ESC / backdrop / × still close and restore focus.

### Files added / changed
- `assets/videos/my-video.mp4` — added by user (source)
- `index.html` — modified (real `<video>` in modal; copy/CTA updated)
- `assets/js/video.js` — modified (play/pause/reset on open/close)
- `assets/css/home.css` — modified (video player layout)
- `assets/videos/README.md` — modified (documents current file)

### Status
Completed — optional later: poster image / compression if file is large

### Testing done (if any)
- Open `index.html` → Experience Cleanvo → Play video
- Confirm MP4 plays in modal; close stops playback
- Check on mobile: playsinline + controls usable

---

## [2026-07-20] Docs — Project structure reference

### Functionality covered
- Full `docs/project-structure.md` written for team, Cursor, and onboarding
- Covers: overview, stack, tools, repo layout, screen-wise sections, CSS/JS architecture, theme tokens, assets, EmailJS config, coding standards, animation inventory, Phase 14 checklist
- Documents that production site is static HTML at repo root; `src/`/`dist/` Vite scaffold is separate

### Quick summary
Central architecture doc so anyone (human or AI) can understand how the Cleanvo static site is organized without re-reading the whole repo. Maps every page to its CSS/JS files and records build progress through Phase 13.

### Files added / changed
- `docs/project-structure.md` — added (full project structure guide)

### Status
Completed

### Testing done (if any)
- Cross-checked file list, import order, script tags, and phase log against repo and `development-done.md`

---

## [2026-07-20] Tooling — Vite MPA build config

### Functionality covered
- Production-ready `vite.config.js` for static multi-page site at repo root
- Auto-discovers all root `*.html` pages for `build.rollupOptions.input`
- `npm run build` outputs complete `dist/` with all 8 pages, bundled CSS, hashed images/video, legacy JS copied verbatim
- GitHub Pages base path via `VITE_BASE_PATH` or `GITHUB_ACTIONS` + `GITHUB_REPOSITORY`
- Copies `robots.txt`, `sitemap.xml`, and reference images to `dist/`

### Quick summary
Vite now builds the existing HTML/CSS/JS site without moving files into `src/` or converting to a framework. Classic IIFE scripts stay unchanged; CSS is minified and cache-busted.

### Files added / changed
- `vite.config.js` — added

### Status
Completed

### Testing done (if any)
- `npm run build` — 8 HTML pages + assets in `dist/`
- `VITE_BASE_PATH=/Cleanvo/ npm run build` — CSS paths prefixed correctly

---

## [2026-07-20] Products — Promote Hand Wash & White Phenyl

### Functionality covered
- Hand Wash and White Phenyl moved from Coming Soon to full available product sections on `products.html`
- Coming Soon now lists only Dishwash Liquid and Toilet Cleaner
- Homepage carousel + upcoming section updated to match
- Footer product links on all 8 pages ordered available-first with section anchors
- About, FAQ, and Quality & Safety copy updated for the new lineup

### Quick summary
The live range is now Floor Cleaner, Hand Wash, and White Phenyl. Site-wide messaging no longer treats Hand Wash or White Phenyl as upcoming.

### Files added / changed
- `products.html` — modified (two new product sections; coming-soon reduced)
- `index.html` — modified (carousel, upcoming grid, footer)
- `about.html`, `faq.html`, `quality-safety.html` — modified (copy + footer)
- `contact.html`, `privacy-policy.html`, `terms-and-conditions.html` — modified (footer links)
- `assets/css/products.css` — modified (hand/phenyl themes, 2-col coming grid, scroll-margin)
- `assets/css/home.css` — modified (2-col upcoming grid + note)
- `docs/project-structure.md` — modified (products map)

### Status
Completed

### Testing done (if any)
- Verified product anchors and footer link order across pages via search
- Manual check recommended: `products.html` sections, homepage upcoming (2 cards), footer deep links