# Cleanvo Website — Project Structure

> **Purpose:** Single reference for the team and for Cursor AI when extending the site.  
> **Last updated:** 2026-07-20 · **Build status:** Phases 1–13 complete · Phase 14 (Performance, SEO, Deploy) pending

---

## 1. Overview

| Item | Detail |
|------|--------|
| **Project** | Official marketing website for **Cleanvo Care Solution** |
| **Brand** | Cleanvo — *Your Everyday Hygiene Partner* |
| **Type** | Static multi-page website (no backend, no e-commerce) |
| **Goal** | Build trust, showcase products, generate enquiries, support dealers/distributors, SEO |
| **Launch product** | Floor Cleaner (Phenyl) — Lavender Fresh, 1 L |
| **Hosting target** | GitHub Pages → custom domain `www.cleanvo.in` |
| **Development method** | Incremental phases from `docs/plan.md` (one phase at a time, always deployable) |

**Out of scope:** shopping cart, payments, user login, admin panel, server-side code.

**Source of truth docs:**

| File | Role |
|------|------|
| `docs/requirement.md` | Master vision, brand, standards, sprint list |
| `docs/plan.md` | Executable phase-by-phase build checklist (Phases 0–14) |
| `docs/development-done.md` | Session log — what was built, when, and what remains |
| `docs/project-structure.md` | This file — architecture and file map |

---

## 2. Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic, accessible) |
| Styles | CSS3 — variables, Grid, Flexbox, `@import` pipeline |
| Scripts | Vanilla JavaScript (ES6+, IIFE modules on `window`) |
| Fonts | **Manrope** via Google Fonts |
| Contact | **EmailJS** (CDN on contact page only) |
| Animations | CSS keyframes + `IntersectionObserver` (GSAP planned but not used yet) |
| Hosting | Static files at **repo root** (GitHub Pages compatible) |

**Not used for the live site:** React, Vue, Tailwind, jQuery, PHP, Node backend.

---

## 3. Tools, Libraries & Frameworks

### Production (runtime)

| Tool | Where | Purpose |
|------|-------|---------|
| Google Fonts (Manrope) | `style.css` `@import` | Typography |
| EmailJS Browser SDK v4 | `contact.html` CDN | Send enquiry emails without backend |
| Google Maps embed | `contact.html` iframe | Office location |

### Development (optional)

| Tool | Notes |
|------|-------|
| **Python `http.server`** or **Live Server** | Recommended local preview — open repo root |
| **Vite** (`package.json`) | **Not wired to the main site.** A default Vite scaffold exists under `src/` and `dist/` from a separate experiment. The official Cleanvo site is the static HTML at repo root. Do not confuse `src/main.js` with the production site. |

### Planned for Phase 14

- Image compression / WebP + fallbacks  
- CSS/JS minification (manual or build script)  
- Favicon from logo (partial assets exist in `public/` / `dist/` from Vite scaffold — production favicon still to finalize on static pages)  
- Google Analytics snippet (placeholder)  
- Lighthouse / SEO hardening  

---

## 4. Repository Layout

```text
Cleanvo/                          ← GitHub Pages document root
├── index.html                    ← Home
├── about.html
├── products.html
├── quality-safety.html
├── contact.html
├── faq.html
├── privacy-policy.html
├── terms-and-conditions.html
├── robots.txt
├── sitemap.xml
├── README.md
├── .gitignore
│
├── assets/
│   ├── css/                      ← Design system + page styles (see §6)
│   ├── js/                       ← Modular scripts (see §7)
│   ├── images/
│   │   ├── logo/logo.png
│   │   ├── products/
│   │   │   ├── bottle-placeholder.svg
│   │   │   └── bottles-sticker.jpeg   ← label reference
│   │   ├── gallery/other-info.jpeg    ← brand card reference
│   │   ├── hero/                      ← (empty, ready)
│   │   ├── icons/                     ← (empty, inline SVGs used today)
│   │   └── backgrounds/               ← (empty)
│   ├── videos/
│   │   ├── my-video.mp4               ← homepage promo
│   │   └── README.md
│   ├── fonts/                         ← (optional self-host; using Google Fonts)
│   └── components/README.md           ← notes only (no SSI on GitHub Pages)
│
├── docs/
│   ├── requirement.md
│   ├── plan.md
│   ├── development-done.md
│   └── project-structure.md           ← this file
│
├── .cursor/rules/development-done.mdc ← Cursor rule: log work to development-done.md
│
├── src/                               ⚠ Vite starter (NOT production site)
├── public/                            ⚠ Vite public assets
├── dist/                              ⚠ Vite build output (gitignored)
├── package.json                       ⚠ Vite devDependency only
└── node_modules/                      ⚠ gitignored
```

**Important:** All 8 production pages, `assets/css`, and `assets/js` live at **repo root**. Header and footer markup is **duplicated identically** on every HTML file (no server-side includes on GitHub Pages).

---

## 5. Site Map & Build Progress

| Page | File | Phase | Status |
|------|------|-------|--------|
| Home | `index.html` | 4–5 | ✅ Complete |
| About Us | `about.html` | 6 | ✅ Complete |
| Products | `products.html` | 7 | ✅ Complete |
| Quality & Safety | `quality-safety.html` | 8 | ✅ Complete |
| Contact | `contact.html` | 9 | ✅ Complete (EmailJS keys pending) |
| FAQ | `faq.html` | 10 | ✅ Complete |
| Privacy Policy | `privacy-policy.html` | 11 | ✅ Complete |
| Terms & Conditions | `terms-and-conditions.html` | 12 | ✅ Complete |
| Cross-page QA | all pages | 13 | ✅ Complete |
| Performance / SEO / Deploy | — | 14 | ⏳ Pending |

---

## 6. Screen-Wise Implementation

Every page shares the same **global chrome**: skip link → sticky header → `<main>` → footer.  
Nav links: Home · About Us · Products · Quality & Safety · Contact · FAQ · **Enquire** CTA.

### 6.1 Home — `index.html` · `main--home`

| Section | CSS | JS | Notes |
|---------|-----|-----|-------|
| Hero | `home.css`, `animations.css` | — | Floating bottle, glow, ripple, sparkles; CTAs → products / contact |
| Carousel (3 slides) | `home.css` | `carousel.js` | Fade, Ken Burns, autoplay, pause on hover, swipe, dots, a11y |
| Why Choose Cleanvo | `home.css` | `animation.js` | Benefit cards + icons |
| Experience Cleanvo (video) | `home.css` | `video.js` | Modal player → `assets/videos/my-video.mp4` |
| Featured Product | `home.css` | — | Floor Cleaner Lavender Fresh 1L |
| Product Benefits | `home.css` | — | Label-aligned benefit strip |
| Upcoming Products | `home.css` | — | Coming Soon tiles |
| Our Promise | `home.css` | — | Trust copy |
| Contact CTA band | `home.css` | — | Link to `contact.html` |
| Wave divider | `home.css` | — | Between carousel and Why Choose |

**Scripts loaded:** `utils.js` → `navigation.js` → `animation.js` → `carousel.js` → `video.js` → `app.js`

---

### 6.2 About Us — `about.html` · `main--about` · `about.css`

| Section | Content |
|---------|---------|
| Page hero | Company intro |
| Brand story & mission | Founder-tone narrative |
| Founder spotlight | Jaynt Saxena — initials avatar placeholder |
| Values | Cleanliness, safety, simplicity, trust |
| Motto band | *Clean Home. Clear Mind. Better Life.* |
| Quality philosophy | Manufacturing / quality stance |
| CTA | → Products, Contact |

---

### 6.3 Products — `products.html` · `main--products` · `products.css`

| Section | Content |
|---------|---------|
| Page hero | Range overview |
| Floor Cleaner launch (`#floor-cleaner`) | Full product detail: benefits, 3-step how-to-use, fragrance/safety notes |
| Coming soon grid (`#coming-soon`) | Dishwash Liquid, Hand Wash, White Phenyl, Toilet Cleaner — no buy buttons |
| Enquiry CTA | Soft CTAs for customers / retailers / distributors |

Product-family accent colors on coming-soon cards (blue/lavender, green, red hints).

---

### 6.4 Quality & Safety — `quality-safety.html` · `main--quality` · `quality-safety.css`

| Section | Content |
|---------|---------|
| Page hero | Responsibility-first intro |
| On-page TOC | Jump links to sections |
| Safe usage | `#safe-usage` |
| Storage | `#storage` |
| Packaging standards | `#packaging` |
| Customer guidelines | `#guidelines` |
| Caution | `#caution` — high-level; pack label authoritative |
| Quality promise | `#promise` |
| CTA | → Products, Contact |

---

### 6.5 Contact — `contact.html` · `main--contact` · `contact.css`

| Block | Detail |
|-------|--------|
| Contact info | Phone, email, address, Mon–Sat 10:00–6:00 IST |
| Social links | Placeholder `#` URLs |
| Google Map | Embedded iframe — Shahjahanpur |
| Enquiry form | Name, Phone, Email, City, Message — client validation |
| EmailJS | `emailjs.config.js` — set `configured: true` + public IDs to enable send |

**Scripts:** + EmailJS CDN, `emailjs.config.js`, `contact.js`

---

### 6.6 FAQ — `faq.html` · `main--faq` · `faq.css`

| Section | Detail |
|---------|---------|
| Page hero | — |
| Accordion groups | Usage · Safety/storage · Availability/dealers · Upcoming · Company/contact |
| Behaviour | One item open at a time; keyboard accessible (`faq.js`) |
| CTA | → Contact, Products |

**Schema.org FAQ markup:** deferred to Phase 14.

---

### 6.7 Privacy Policy — `privacy-policy.html` · `main--legal` · `legal.css`

Long-form legal doc: data collected, EmailJS, cookies/analytics, third-party embeds, retention, contact. Last updated 20 Jul 2026.

---

### 6.8 Terms & Conditions — `terms-and-conditions.html` · `main--legal` · `legal.css`

Long-form legal doc: enquiry-only site, IP, pack-label disclaimer, liability, India / U.P. governing law. Last updated 20 Jul 2026.

---

## 7. Theme & Styles

### 7.1 CSS pipeline — `assets/css/style.css`

Import order (do not reorder without reason):

```text
Google Fonts (Manrope)
→ reset.css
→ variables.css          ← design tokens
→ typography.css
→ layout.css
→ components.css         ← header, nav, footer, buttons, shared UI
→ home.css
→ about.css
→ products.css
→ quality-safety.css
→ contact.css
→ faq.css
→ legal.css
→ responsive.css         ← global mobile/a11y hardening (Phase 13)
→ animations.css         ← motion utilities + hero keyframes
```

Every page links **one** stylesheet: `assets/css/style.css`.

### 7.2 Brand tokens — `variables.css`

| Token | Value / role |
|-------|----------------|
| `--color-primary` | `#0a5ebd` (brand blue) |
| `--color-secondary` | `#3d9a4a` (leaf green) |
| `--color-bg` | White |
| `--color-accent-gradient` | Light blue → soft green |
| `--font-family-base` | Manrope stack |
| `--container-max` | 1200px |
| `--radius-*`, `--shadow-*`, `--space-*` | Consistent UI scale |
| Breakpoints | 320 · 480 · 768 · 1024 · 1440 px |

**Wordmark:** `.brand-name__clean` (blue) + `.brand-name__vo` (green).

### 7.3 UI principles

- Premium, minimal, bright, large whitespace  
- Rounded corners, soft shadows  
- No inline CSS  
- BEM-friendly class names (e.g. `site-header__inner`, `btn--primary`)  
- Mobile-first; `overflow-x: clip` to prevent horizontal scroll  
- `prefers-reduced-motion` respected in animations  

### 7.4 Reusable components (`components.css` + `layout.css`)

| Class / pattern | Use |
|-----------------|-----|
| `.container` | Centered max-width wrapper |
| `.section`, `.section__header` | Page section spacing |
| `.btn`, `.btn--primary`, `.btn--outline`, `.btn--secondary` | CTAs |
| `.page-hero` | Inner pages top banner |
| `.fade-up` | Scroll-reveal target |
| `.skip-link`, `.sr-only` | Accessibility |
| `.site-header`, `.site-nav`, `.site-footer` | Global chrome |

---

## 8. JavaScript Architecture

All scripts use **IIFE pattern** and attach APIs to `window` for `app.js` to orchestrate.

| File | Global API | Loaded on | Responsibility |
|------|------------|-----------|----------------|
| `utils.js` | `CleanvoUtils` | All pages | `debounce`, `qs`, `qsa`, `prefersReducedMotion` |
| `navigation.js` | `CleanvoNavigation` | All pages | Mobile menu (body teleport on mobile), active link, shrink-on-scroll, smooth scroll |
| `animation.js` | `CleanvoAnimation` | All pages | IntersectionObserver scroll reveal, page-load fade |
| `carousel.js` | `CleanvoCarousel` | Home only | 3-slide carousel |
| `video.js` | `CleanvoVideo` | Home only | Video modal open/close, play/pause |
| `contact.js` | `CleanvoContact` | Contact only | Form validation + EmailJS send |
| `emailjs.config.js` | `CleanvoEmailConfig` | Contact only | Public EmailJS IDs |
| `faq.js` | `CleanvoFaq` | FAQ only | Accordion |
| `app.js` | — | All pages | `DOMContentLoaded` → init all present modules |

**Rules:** No inline JS. Deferred script tags at end of `<body>`. Order matters: dependencies before `app.js`.

---

## 9. Global Chrome (Header & Footer)

### Header (`data-site-header`)

- Logo image + wordmark → `index.html`  
- Primary nav with `data-nav-link` (active state via JS)  
- Hamburger below 1024px — full-height drawer teleported to `<body>`  
- Shrink class on scroll  

### Footer

- Logo + tagline  
- Quick links, product list, contact block  
- Social SVG icons (URLs TBD)  
- Copyright © 2026 Cleanvo Care Solution  
- Privacy Policy · Terms & Conditions  

**When editing nav/footer:** update **all 8 HTML files** to stay in sync.

---

## 10. Assets

| Asset | Path | Usage |
|-------|------|-------|
| Logo | `assets/images/logo/logo.png` | Header, footer |
| Bottle placeholder | `assets/images/products/bottle-placeholder.svg` | Hero, carousel, products |
| Label reference | `assets/images/products/bottles-sticker.jpeg` | Design/content reference — not shown on site yet |
| Brand card | `assets/images/gallery/other-info.jpeg` | Reference for colors/contact |
| Promo video | `assets/videos/my-video.mp4` | Homepage modal |

**Still to replace before v1.0 launch:** real product photography, optimized WebP, favicon on all pages, poster image for video.

Empty folders ready: `hero/`, `icons/`, `backgrounds/`, `fonts/`.

---

## 11. External Services & Configuration

| Service | Config location | Status |
|---------|-----------------|--------|
| EmailJS | `assets/js/emailjs.config.js` | Scaffolded — `configured: false` |
| Google Maps | Hardcoded iframe in `contact.html` | Active |
| Google Fonts | `style.css` | Active |
| Domain / SEO | `robots.txt`, `sitemap.xml` | Stubs point to `https://www.cleanvo.in/` |

**EmailJS setup:** Add `publicKey`, `serviceId`, `templateId`, set `configured: true`. Template variables: `{{name}}`, `{{phone}}`, `{{email}}`, `{{city}}`, `{{message}}`. Never commit private keys.

---

## 12. Coding Standards (for team & Cursor)

1. **Preserve architecture** — extend; do not rewrite working code.  
2. **No inline CSS or JS.**  
3. **Use CSS variables** for colors, spacing, radii, shadows.  
4. **One page CSS file per route** — add new `@import` in `style.css`.  
5. **New page JS** — IIFE + `window.Cleanvo*` + register in `app.js`.  
6. **Semantic HTML5** — proper heading hierarchy, ARIA where needed.  
7. **Content voice** — human, founder-tone; no AI hype or competitor copy.  
8. **Incremental phases** — finish testing checklist in `plan.md` before next phase.  
9. **Log work** — append to `docs/development-done.md` after each phase/fix.  

---

## 13. Local Development

```bash
# Option A — simplest (recommended for static site)
# Open index.html in browser, or:
python -m http.server 5500
# Visit http://localhost:5500

# Option B — Vite (only affects src/ scaffold, NOT production pages)
npm install
npm run dev
```

**Git branches (from plan):**

| Branch | Phases |
|--------|--------|
| `feature/project-foundation` | 1–3 |
| `feature/home` | 4–5 |
| `feature/about` | 6 |
| `feature/products` | 7–8 |
| `feature/contact` | 9–10 |
| `feature/responsive` | 13 |
| `main` + `release/v1.0` | 11–12, 14 |

---

## 14. Animation Inventory

| Animation | Where | Mechanism |
|-----------|-------|-----------|
| Floating bottle | Home hero | CSS `@keyframes` |
| Ripple / glow / sparkle | Home hero | CSS |
| Scroll reveal (fade-up) | All pages | `animation.js` + `.fade-up` |
| Nav shrink | All pages | `navigation.js` |
| Page load fade | All pages | `animations.css` + JS |
| Carousel fade / Ken Burns | Home | `carousel.js` + CSS |
| Video modal | Home | `video.js` |
| Wave divider | Home | CSS |
| Button / card hover | Global | CSS transitions |
| FAQ accordion | FAQ | `faq.js` |

GSAP listed in requirements for future premium motion — **not integrated yet**.

---

## 15. What’s Next (Phase 14)

- [ ] Compress images; WebP + fallbacks  
- [ ] Lazy-load below-fold images  
- [ ] Minify CSS/JS for production  
- [ ] Favicon + Open Graph image from logo  
- [ ] Unique OG tags per page  
- [ ] Schema.org (Organization, WebSite, Product, FAQ)  
- [ ] Google Analytics + Search Console placeholders  
- [ ] Final Lighthouse pass  
- [ ] GitHub Pages deploy + custom domain DNS  
- [ ] EmailJS live test on production domain  
- [ ] Confirm legal entity name (Care Solution vs Hygiene Products Pvt. Ltd.)  
- [ ] Replace bottle placeholder with real product shots  

---

## 16. Quick Reference — File → Page Map

| CSS file | HTML page(s) |
|----------|----------------|
| `home.css` | `index.html` |
| `about.css` | `about.html` |
| `products.css` | `products.html` |
| `quality-safety.css` | `quality-safety.html` |
| `contact.css` | `contact.html` |
| `faq.css` | `faq.html` |
| `legal.css` | `privacy-policy.html`, `terms-and-conditions.html` |
| `components.css`, `layout.css`, `responsive.css`, `animations.css` | All pages |

| JS file | HTML page(s) |
|---------|----------------|
| `carousel.js`, `video.js` | `index.html` |
| `contact.js`, `emailjs.config.js` | `contact.html` |
| `faq.js` | `faq.html` |
| `utils.js`, `navigation.js`, `animation.js`, `app.js` | All pages |

---

*For phase objectives and testing checklists, always consult `docs/plan.md`. For session history, see `docs/development-done.md`.*
