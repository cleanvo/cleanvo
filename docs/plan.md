# Cleanvo Website — Executable Build Plan

> **How to use this plan:** Execute one phase at a time. Before coding, read the phase objectives. After coding, complete the testing checklist. Do not start the next phase until the current phase is deployable and production-quality.
>
> **Golden rule (from requirement):** Before generating or modifying code, always preserve existing architecture and design system. Reuse components, variables, animations, and styles. Extend incrementally. Never rewrite working code unnecessarily.

---

## Brand Snapshot (from requirements + uploaded images)

| Item | Value |
|------|--------|
| Company | Cleanvo Care Solution |
| Brand | Cleanvo |
| Founder & CEO | Jayant Saxena |
| Tagline (site) | Your Everyday Hygiene Partner |
| Tagline (labels) | Cleaning Made Better. |
| Banner line | HOME CLEANING ESSENTIAL |
| Motto | Clean Home. Clear Mind. Better Life. |
| Phone | 9129669512 |
| Email | cleanvosupport@gmail.com |
| Website | www.cleanvo.in |
| Address | Madra Khel Near Old Railway Line, Shahjahanpur, U.P. 242001 |
| Launch product | Floor Cleaner (Phenyl) — Lavender Fresh, 1 L |
| Upcoming | Dishwasher Liquid, Hand Wash, White Phenyl, Toilet Cleaner |
| Voice | Premium with Simplicity — human, trustworthy, confident |
| Stack | HTML5, CSS3, Vanilla JS (ES6+), EmailJS, GSAP (later), GitHub Pages |

### Uploaded assets (current location: `images/`)

| File | Use |
|------|-----|
| `images/logo.png` | Brand mark (blue crescent + green leaf + sparkles). Crop/clean to transparent PNG/SVG for nav, footer, favicon. |
| `images/bottles-sticker.jpeg` | Product label reference for Floor Cleaner, Toilet Cleaner, Dishwash Liquid (front + back artwork, colors, benefits, directions). |
| `images/other info.jpeg` | Brand banner colors, contact details, product list, house-on-leaf motif. |

**Note:** Labels also reference “Cleanvo Hygiene Products Pvt. Ltd.” Confirm legal company name for About / Privacy / Terms before Sprint 3 / 8 / 9 copy is finalized.

---

## Site Map (8 pages)

1. `index.html` — Home  
2. `about.html` — About Us  
3. `products.html` — Products  
4. `quality-safety.html` — Quality & Safety  
5. `contact.html` — Contact Us  
6. `faq.html` — FAQ  
7. `privacy-policy.html` — Privacy Policy  
8. `terms-and-conditions.html` — Terms & Conditions  

**Out of scope:** e-commerce, cart, payments, login, admin panel, backend.

---

# PHASE 0 — Project Kickoff & Asset Prep

### Objectives
- Confirm brand facts and asset readiness before coding.
- Organize uploaded images into the final asset folders.

### Steps
- [ ] Confirm company legal name for public copy (Care Solution vs Hygiene Products Pvt. Ltd.).
- [ ] Confirm Contact Form recipient email (`cleanvosupport@gmail.com` or another inbox).
- [ ] Create EmailJS account (needed in Contact phase; can be stubbed until then).
- [ ] Crop/export clean logo from `logo.png` → transparent PNG (and SVG if possible).
- [ ] Extract / note exact brand blues & greens from logo + business card for CSS variables.
- [ ] Move/copy uploaded files into structured folders once Phase 1 folders exist:
  - Logo → `assets/images/logo/`
  - Label sheet → `assets/images/products/` (reference) + later cut individual product shots
  - Business card/info → `assets/images/brand/` or docs reference
- [ ] Plan WebP conversions for all final images (executed in Performance phase).

### Testing
- [ ] All source images open correctly.
- [ ] Logo is readable at small (nav) and large (hero/footer) sizes.

### Exit criteria
Brand facts locked; assets identified; ready to scaffold.

---

# PHASE 1 — Project Foundation (Folders, Files, Git)

### Objectives
- Create full folder structure and empty shell HTML pages.
- GitHub Pages–compatible static project root.
- README + `.gitignore` in place.

### Files / folders to create

```text
cleanvo-website/   (or current clean/ as root — keep site files at repo root for GitHub Pages)
├── index.html
├── about.html
├── products.html
├── quality-safety.html
├── contact.html
├── faq.html
├── privacy-policy.html
├── terms-and-conditions.html
├── robots.txt                 (stub OK)
├── sitemap.xml               (stub OK)
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   ├── reset.css
    │   ├── variables.css
    │   ├── typography.css
    │   ├── layout.css
    │   ├── components.css
    │   ├── animations.css
    │   └── style.css         (imports all CSS in order)
    ├── js/
    │   ├── utils.js
    │   ├── navigation.js
    │   ├── animation.js
    │   └── app.js
    ├── images/
    │   ├── logo/
    │   ├── hero/
    │   ├── products/
    │   ├── gallery/
    │   ├── icons/
    │   └── backgrounds/
    ├── videos/
    ├── fonts/                (optional if self-hosting)
    └── components/           (optional HTML partials / notes)
```

### Steps
- [ ] Create every folder listed above.
- [ ] Create all 8 HTML files with minimal valid skeleton:
  - `<!DOCTYPE html>`, `lang="en"`
  - charset, viewport meta
  - title + description placeholders
  - link to `assets/css/style.css`
  - scripts deferred: utils → navigation → animation → app
- [ ] Create empty (comment-headed) CSS and JS files.
- [ ] Wire `style.css` to `@import` or `@layer` / link-order docs for: reset → variables → typography → layout → components → animations.
- [ ] Write `README.md`: project name, local preview method, stack, branch convention, sprint list.
- [ ] Write `.gitignore` (OS junk, editor files, secrets like EmailJS private keys if ever stored).
- [ ] Initialize git (if not already); create branch `feature/project-foundation`.
- [ ] Relocate uploaded images from root `images/` into `assets/images/...` (keep originals until processed).

### CSS / JS rules to enforce from day one
- No inline CSS / no inline JS.
- CSS variables only for colors, spacing, radii, shadows, fonts.
- BEM-friendly class names where appropriate.
- Semantic HTML5 only.

### Testing
- [ ] Open `index.html` in browser — blank but valid, CSS/JS load without 404.
- [ ] Every page links the same CSS/JS without console errors.
- [ ] Folder tree matches requirement exactly (plus robots/sitemap stubs).

### Exit criteria
Structure complete; all shells open; Git-ready.

---

# PHASE 2 — Design System (Theme, Typography, Layout Base)

### Objectives
- Encode Cleanvo visual identity into CSS variables and base styles.
- Mobile-first responsive base ready for all pages.

### Brand theme (implement as CSS variables)

| Token | Direction |
|-------|-----------|
| `--color-primary` | Brand blue (from logo/card ≈ vivid professional blue) |
| `--color-secondary` | Brand green (leaf green) |
| `--color-bg` | White |
| `--color-surface` | White cards |
| `--color-text` | Near-black / dark grey |
| `--color-muted` | Soft grey for secondary text |
| `--color-accent-gradient` | Light blue → soft green accents |
| `--radius-*` | Soft rounded corners |
| `--shadow-*` | Soft professional shadows |
| `--space-*` | Consistent spacing scale |
| `--container-max` | ~1200–1440 content width |

**Logo wordmark:** “Clean” in blue, “vo” in green (match business card).

### Steps
- [ ] `reset.css` — modern CSS reset / normalize box model, images, lists, buttons.
- [ ] `variables.css` — all design tokens above + breakpoints if needed.
- [ ] `typography.css` — load **Poppins** or **Manrope** (Google Fonts or self-hosted under `assets/fonts/`).
  - Hierarchy: H1–H6, body, small, button text, caption.
- [ ] `layout.css` — container, section spacing, grid helpers, skip-link, sticky header offset.
- [ ] `components.css` — base utilities only this phase: `.btn`, `.btn--primary`, `.btn--outline`, `.btn--secondary`, `.container`, `.sr-only`.
- [ ] `animations.css` — reduce-motion media query stub; utility classes for fade-up later.
- [ ] Document breakpoint targets: **320 / 480 / 768 / 1024 / 1440**.
- [ ] Create temporary placeholder product bottle image for hero if final bottle PNG not ready.

### Testing
- [ ] Toggle a sample H1 + primary/outline buttons on `index.html` — colors match brand.
- [ ] Resize to 320px and 1440px — no horizontal scroll on shell.
- [ ] Fonts load; fallbacks readable if fonts fail.

### Exit criteria
Theme tokens live; typography & base components usable site-wide.

---

# PHASE 3 — Global Chrome (Navigation + Footer + Base Animations)

### Objectives
- Sticky navigation and site-wide footer on every page.
- Shared JS for nav (mobile menu, shrink-on-scroll).
- Animation helpers ready for later sections.

### Navigation (all pages)
- [ ] Logo (image + text Cleanvo).
- [ ] Links: Home | About Us | Products | Quality & Safety | Contact | FAQ.
- [ ] Optional CTA button: Contact / Enquire.
- [ ] Mobile: hamburger, touch-friendly drawer/panel, ARIA expanded/controls.
- [ ] Active page state.
- [ ] Shrink / compact style on scroll (`navigation.js`).

### Footer (all pages)
- [ ] Company logo.
- [ ] Quick links (same primary pages).
- [ ] Products list (Floor Cleaner + coming soon items).
- [ ] Contact block: phone, email, address (from Phase 0).
- [ ] Social media placeholders (icons ready; URLs when available).
- [ ] Copyright © Cleanvo Care Solution.
- [ ] Links: Privacy Policy | Terms & Conditions.

### JS / animation base
- [ ] `utils.js` — debounce, query helpers, prefers-reduced-motion check.
- [ ] `navigation.js` — open/close menu, focus trap optional, scroll shrink, smooth scroll.
- [ ] `animation.js` — IntersectionObserver scroll-reveal hooks (fade-up sections).
- [ ] `app.js` — init orchestration.
- [ ] Loading animation stub (page fade-in or logo pulse) — keep subtle.

### Files modified
- All 8 HTML pages (shared header/footer markup — keep identical structure).
- `components.css`, `layout.css`, `animations.css`, all JS files.

### Testing
- [ ] Menu works on mobile and desktop on every page.
- [ ] Sticky nav does not cover content; skip link works.
- [ ] Footer links resolve to existing pages.
- [ ] Shrink-on-scroll does not jank; respects `prefers-reduced-motion`.

### Exit criteria
Global chrome complete; site navigable end-to-end with empty page bodies.

---

# PHASE 4 — Homepage Design (Core First Page)

### Objectives
- Build the full homepage structure and hero (premium first impression).
- Site remains deployable after this phase even if carousel/video polish continues in Phase 5.

### Homepage section order (build top → bottom)

1. Sticky Navigation (already done)  
2. **Hero**  
3. **Premium 3-slide Carousel** (can start markup; finish interactions in Phase 5 if needed)  
4. **Why Choose Cleanvo**  
5. **Brand Video Section** (“Experience Cleanvo”)  
6. **Featured Product** (Floor Cleaner)  
7. **Product Benefits**  
8. **Upcoming Products**  
9. **Our Promise**  
10. **Contact CTA**  
11. Footer (already done)

### Hero requirements
- [ ] Premium layout; large Floor Cleaner bottle visual (use product image / placeholder).
- [ ] Brand headline + tagline (“Your Everyday Hygiene Partner”).
- [ ] Short human description (founder tone — not AI fluff).
- [ ] CTAs: Explore Products | Contact.
- [ ] Animated background: soft glow, water ripple, sparkle twinkle (subtle).
- [ ] Floating bottle animation.
- [ ] No hero clutter: brand + headline + support line + CTAs + dominant product visual only.

### Content sections (this phase)
- [ ] Why Choose Cleanvo — benefit points with professional icons (clean, fresh fragrance, easy to use, trustworthy — align with floor cleaner label icons where sensible).
- [ ] Featured Product — Floor Cleaner Lavender Fresh 1L; pull benefit strip from labels: Clean Floors / Fresh Fragrance / Easy to Use / Suitable for Most Floors.
- [ ] Product Benefits — clear, non-exaggerated.
- [ ] Upcoming Products cards: Dishwasher Liquid, Hand Wash, White Phenyl, Toilet Cleaner — “Coming Soon” state.
- [ ] Our Promise — trust-focused short copy.
- [ ] Contact CTA band — link to `contact.html`.

### Design rules for this page
- Bright, clean, large white space; rounded corners; soft shadows.
- Cards only where interaction or discrete product tiles need them — avoid card-heavy template look.
- Prefer real product/label-derived imagery over abstract purple gradients.

### Testing
- [ ] First viewport looks premium on 320–1440.
- [ ] Hero CTAs route correctly.
- [ ] Animations are subtle; can be reduced via prefers-reduced-motion.
- [ ] No layout overflow; images scale responsively.

### Exit criteria
Homepage readable and branded; core sections present (carousel/video may be functional stubs).

---

# PHASE 5 — Homepage Polish (Carousel + Video + Motion)

### Objectives
- Finish interactive homepage pieces to production quality.
- Optionally introduce GSAP for premium motion if CSS/Observer is not enough (keep elegant).

### Carousel (3 slides)
| Slide | Content |
|-------|---------|
| 1 | Launch product — Floor Cleaner |
| 2 | Brand story |
| 3 | Upcoming products |

### Steps
- [ ] Smooth fade transitions.
- [ ] Ken Burns–style slow background zoom/pan.
- [ ] Autoplay + pause on hover.
- [ ] Swipe support on mobile.
- [ ] Accessible controls (prev/next, dots, aria-live / labels).
- [ ] Video section: “Experience Cleanvo” + thumbnail; popup overlay player (placeholder video / YouTube later).
- [ ] Wave divider between sections if it fits the brand waves from the business card.
- [ ] Counter animation if homepage has stats (only if content exists — do not invent false numbers).
- [ ] Button / card hover polish; scroll reveal pass across all homepage sections.
- [ ] Document video file placement under `assets/videos/` when ready.

### Testing
- [ ] Autoplay pauses on hover; resumes correctly.
- [ ] Touch swipe works; keyboard operable.
- [ ] Video modal opens/closes; focus returns; ESC closes; backdrop click closes.
- [ ] Performance OK on mid-range mobile.

### Exit criteria
Homepage fully interactive and motion-complete.

---

# PHASE 6 — About Us Page (`about.html`)

### Objectives
- Tell company story; build founder trust.

### Sections to implement
- [ ] Page hero / intro: Cleanvo Care Solution overview.
- [ ] Brand story & mission — human founder tone.
- [ ] Founder spotlight: Jayant Saxena, Founder & CEO (use approved photo when available; placeholder meanwhile).
- [ ] Values: cleanliness, safety, simplicity, trust.
- [ ] “HOME CLEANING ESSENTIAL” / motto: Clean Home. Clear Mind. Better Life.
- [ ] Manufacturing / quality philosophy (no exaggerated claims).
- [ ] CTA → Products or Contact.

### Content guidelines
- Written as if by the founder.
- No copied competitor copy.
- No AI-sounding hype.

### Testing
- [ ] Consistent nav/footer; active About state.
- [ ] Readable hierarchy; mobile spacing good.
- [ ] SEO meta title/description for About filled.

### Exit criteria
About page complete and consistent with design system.

---

# PHASE 7 — Products Page (`products.html`)

### Objectives
- Showcase current product deeply; show upcoming lineup clearly.

### Current product — Floor Cleaner
- [ ] Hero product visual (bottle / label art).
- [ ] Name, variant: Lavender Fresh, net qty 1 L.
- [ ] Tagline alignment: Cleaning Made Better.
- [ ] Key benefits (from label + site voice).
- [ ] Directions for use (3-step: dilute → mop → no rinse — from back label; refine wording for web).
- [ ] Fragrance / usage notes without medical/false claims.
- [ ] Soft CTA to Contact for dealers/enquiries.

### Coming soon products
- [ ] Dishwasher / Dishwash Liquid — Lemon Fresh, 500 ml (from label art).
- [ ] Toilet Cleaner — 500 ml (from label art).
- [ ] Hand Wash.
- [ ] White Phenyl.
- [ ] Clear “Coming Soon” treatment — interest/enquiry CTA, not fake buy buttons.

### Steps
- [ ] Product grid + detail layout, reusable product card component styles.
- [ ] Use colors from each product family sparingly (floor = blues/lavender accents; dishwash = greens; toilet = red accents) without breaking global theme.
- [ ] Icons for features (line icons matching label style).

### Testing
- [ ] Floor Cleaner content complete and accurate vs labels.
- [ ] Coming soon items not presented as purchasable.
- [ ] Responsive product grid; images not cropped badly.

### Exit criteria
Products page complete; launch product highlighted.

---

# PHASE 8 — Quality & Safety (`quality-safety.html`)

### Objectives
- Communicate safe usage and trust signals for a hygiene brand.

### Required sections
- [ ] Safe Usage guidelines.
- [ ] Storage instructions (aligned with product labels).
- [ ] Packaging standards.
- [ ] Customer guidelines.
- [ ] Quality Promise.
- [ ] Caution highlights (general; toilet cleaner chemistry notes only at high level — avoid alarming or incomplete chemical advice; point to pack label as authoritative).

### Testing
- [ ] Clear, scannable sections; accessible headings.
- [ ] Links to Contact / Products where useful.
- [ ] Mobile readability of long-form content.

### Exit criteria
Quality & Safety page complete.

---

# PHASE 9 — Contact Us (`contact.html`)

### Objectives
- Enable enquiries for customers and dealers/distributors via EmailJS.
- Show real contact + map.

### Page contents
- [ ] Contact details: phone `9129669512`, email `cleanvosupport@gmail.com`, address Shahjahanpur.
- [ ] Business hours (confirm with founder; placeholder then lock).
- [ ] Social links (when URLs exist).
- [ ] Google Map embed (Shahjahanpur address).
- [ ] Contact form fields:
  - Name  
  - Phone Number  
  - Email  
  - City  
  - Message  
- [ ] Client-side validation + accessible error messages.
- [ ] EmailJS integration (public key / service / template IDs in JS config — never commit private secrets).
- [ ] Success / failure UI states.
- [ ] Dealer/distributor enquiry framing in intro copy.

### Testing
- [ ] Form validates empty/invalid inputs.
- [ ] Successful EmailJS test email received.
- [ ] Map loads; layout works on mobile.
- [ ] Click-to-call / mailto work on mobile.

### Exit criteria
Contact page live with working enquiry delivery on static hosting.

---

# PHASE 10 — FAQ (`faq.html`)

### Objectives
- Answer common customer questions; support SEO.

### Steps
- [ ] Accordion FAQ UI (keyboard accessible).
- [ ] Suggested topic clusters:
  - Product usage (floor cleaner dilution, surfaces)
  - Safety / storage
  - Availability & dealers
  - Upcoming products
  - Company / contact
- [ ] Soft CTA to Contact for unanswered questions.
- [ ] Optional FAQ Schema.org markup (complete in SEO phase if deferred).

### Testing
- [ ] Accordion open/close; one or multi open decision documented.
- [ ] Mobile tap targets ≥ 44px.

### Exit criteria
FAQ page complete and accessible.

---

# PHASE 11 — Privacy Policy (`privacy-policy.html`)

### Objectives
- Legal disclosure appropriate for static marketing site + EmailJS form.

### Cover at minimum
- [ ] What data is collected (contact form fields).
- [ ] How EmailJS / email is used.
- [ ] Cookies / analytics (when GA added).
- [ ] Third-party embeds (Google Maps, fonts, video).
- [ ] Data retention contact.
- [ ] Company legal entity name + address.
- [ ] Last updated date.

### Testing
- [ ] Linked from footer; readable long-form layout.
- [ ] No placeholder “lorem” left behind.

### Exit criteria
Privacy Policy publishable.

---

# PHASE 12 — Terms & Conditions (`terms-and-conditions.html`)

### Objectives
- Site usage terms for a non-ecommerce brand site.

### Cover at minimum
- [ ] Acceptance of terms.
- [ ] Informational / enquiry-only nature (no online sales claims).
- [ ] Intellectual property (logo, label art, content).
- [ ] Product information disclaimer (pack label prevails).
- [ ] Limitation of liability.
- [ ] Governing law (India / U.P. as advised).
- [ ] Contact for legal notices.
- [ ] Last updated date.

### Testing
- [ ] Footer link works; consistent legal page styling with Privacy.

### Exit criteria
Terms page publishable.

---

# PHASE 13 — Responsiveness & Cross-Page QA

### Objectives
- Perfect mobile-first behavior across all breakpoints and pages.

### Checklist
- [ ] Test every page at **320, 480, 768, 1024, 1440**.
- [ ] No horizontal scrolling anywhere.
- [ ] Touch-friendly nav, buttons, carousel, FAQ, form.
- [ ] Responsive typography and spacing.
- [ ] Images never overflow; hero remains one clear composition on mobile.
- [ ] Sticky nav + mobile menu on all pages.
- [ ] Active states, 404 risk: all internal links verified.
- [ ] Keyboard-only pass (tab order, focus styles, modals).
- [ ] Optional branch: `feature/responsive` for fixes only.

### Exit criteria
Fully responsive, accessible chrome and pages.

---

# PHASE 14 — Performance, SEO, Deployment

### Objectives
- Production hardening and GitHub Pages launch.

### Performance
- [ ] Optimize images (compress, crop to use cases).
- [ ] Provide **WebP** (+ fallback).
- [ ] Lazy loading for below-fold images.
- [ ] Minify CSS/JS for production (build script or manual dist — document in README).
- [ ] Defer non-critical JS; font display strategy (`swap`).
- [ ] Loading animation final polish — no FOUC.

### SEO
- [ ] Unique Meta Title + Description per page.
- [ ] Open Graph tags (title, description, image, url).
- [ ] Favicon from Cleanvo logo.
- [ ] `robots.txt` finalized.
- [ ] `sitemap.xml` with all 8 URLs.
- [ ] Schema.org (Organization + WebSite; Product optional for Floor Cleaner; FAQ if applicable).
- [ ] Semantic headings review; alt text on all meaningful images.
- [ ] Canonical URLs for GitHub Pages domain (custom domain `www.cleanvo.in` when ready).

### Analytics / Search Console
- [ ] Google Analytics snippet ready (env/config commented until ID provided).
- [ ] Search Console verification meta/file placeholder documented.

### Deployment
- [ ] Confirm GitHub Pages settings (root or `/docs`).
- [ ] Branch strategy cleanup: merge feature branches → `main`; tag `release/v1.0`.
- [ ] Smoke test live URL: all pages, form, map, mobile.
- [ ] Custom domain DNS (cleanvo.in) when ready — HTTPS check.

### Testing
- [ ] Lighthouse pass targets: Performance / Accessibility / Best Practices / SEO (aim high; fix blockers).
- [ ] Form still sends on live domain (EmailJS domain allowlist).
- [ ] No console errors on production.

### Exit criteria
v1.0 live on GitHub Pages; SEO basics in place; README updated with live URL.

---

## Global Definition of Done (every phase)

Before marking any phase complete:

1. **Objectives** stated and met  
2. **Files created/modified** documented in commit message or sprint note  
3. **Website still deployable** (no broken links or half-removed CSS)  
4. **Testing checklist** passed  
5. **No inline CSS/JS**  
6. **Design system reused** — no parallel conflicting styles  
7. **Content** sounds human and on-brand  
8. **Responsive** check at least 320 + 1440 for touched pages  

### Before every sprint (requirement process)
- Explain: objectives, files created, files modified, testing steps  

### Git branches (map to phases)
| Branch | Phases |
|--------|--------|
| `feature/project-foundation` | 1–3 |
| `feature/home` | 4–5 |
| `feature/about` | 6 |
| `feature/products` | 7–8 |
| `feature/contact` | 9–10 |
| `feature/responsive` | 13 |
| `main` + `release/v1.0` | 11–12 content + 14 |

(Privacy/Terms can ship with contact or final release; keep legal pages reviewed before `release/v1.0`.)

---

## Animation Inventory (track until complete)

| Animation | Primary phase |
|-----------|---------------|
| Floating product bottle | 4 |
| Fade-up sections / scroll reveal | 3–5 |
| Navigation shrink | 3 |
| Ripple background | 4 |
| Sparkle twinkle | 4 |
| Wave divider | 5 |
| Button hover | 2–4 |
| Card hover | 4–7 |
| Counter animation | 5 (only if real metrics) |
| Video popup | 5 |
| Smooth scrolling | 3 |
| Loading animation | 3 / 14 |

---

## Asset Checklist (from `images/` upload)

- [ ] Process `logo.png` → nav/footer/favicon assets  
- [ ] Use `bottles-sticker.jpeg` for product color/content reference; crop individual art or commission bottle photos  
- [ ] Use `other info.jpeg` for exact contact block + dual-tone wordmark + house/leaf motif inspiration  
- [ ] Replace any placeholders before `release/v1.0`  

---

## Suggested Execution Order (quick reference)

| Phase | Name |
|-------|------|
| 0 | Kickoff & asset prep |
| 1 | Folders, shells, Git |
| 2 | Theme & typography |
| 3 | Nav + Footer + JS base |
| 4 | Homepage core design |
| 5 | Carousel, video, motion polish |
| 6 | About Us |
| 7 | Products |
| 8 | Quality & Safety |
| 9 | Contact + EmailJS |
| 10 | FAQ |
| 11 | Privacy Policy |
| 12 | Terms & Conditions |
| 13 | Full responsive & a11y QA |
| 14 | Performance, SEO, GitHub Pages launch |

---

*Plan derived from `requirement.md` and uploaded assets under `images/`. Execute phase-by-phase; do not build the entire site in one pass.*
