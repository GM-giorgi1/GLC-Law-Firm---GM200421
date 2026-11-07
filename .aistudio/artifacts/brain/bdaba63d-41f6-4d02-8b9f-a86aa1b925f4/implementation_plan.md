# Implementation Plan: GLC Law Company Multi-Page Luxury Architecture & UI/UX Transformation

Transform GLC Law Company from a single-page landing site into an editorial luxury multi-page web application utilizing `HashRouter`, featuring dedicated deep-dive practice area sub-pages, a comprehensive blog listing and reading portal, persistent navigation and footer, elite SaaS button lighting, and zero-clipping Georgian typography.

---

## 1. Architecture & Routing Strategy

- **Routing Library**: Install and integrate `react-router-dom` with `HashRouter` to guarantee seamless client-side navigation, browser history preservation, and direct URL sharing (`/#/`, `/#/practice-areas/:id`, `/#/blogs`, `/#/blogs/:slug`) with zero 404s on static hosting.
- **Scroll Restoration**: Create a `ScrollToTop` component that automatically glides the viewport to top on route change.
- **Persistent Global Chrome**:
  - `Header`: Shared responsive navbar with smooth link routing, active route indicators, language selector (`GEO`, `ENG`, `RUS`, `TUR`), mobile drawer, and quick consultation booking modal.
  - `Footer`: Shared luxury footer with upright Giorgi Gubeladze portrait, Antonio marquee, contact details, social links, and the symmetrical `.saas-btn-gold` CTA.

---

## 2. Page Hierarchy & Views

### A. Home View (`/`)
- Retain the high-converting Hero, About, Practice Areas overview, Case Studies, Metrics (hero `21+ წლიანი გამოცდილება`), Client Testimonials, Team, and Contact sections.
- Update internal links and cards so clicking "Explore", "Learn More", or specific practice cards navigates directly to their dedicated sub-pages (`/#/practice-areas/:id`), and clicking "View All Publications" / blog cards opens `/#/blogs` and `/#/blogs/:slug`.

### B. Dedicated Practice Area Pages (`/#/practice-areas/:id`)
Create 3 bespoke, rich sub-pages with dark obsidian luxury aesthetics (`#0B0A0A`, `#0E0E10`) and metallic gold accents:
1. **სისხლის სამართალი (Criminal Law)** (`id: 'criminal-defense'`):
   - **Hero**: Monumental Antonio headline, case credentials (21+ years trial advocacy, GBA Advocate #10044), emergency detention hotline button.
   - **Scope & Stages**: Investigation stage defense, urgent penitentiary visitation protocols, pre-trial detention hearings, trial advocacy, evidence suppression strategies.
   - **Statutory & Defense Framework**: Constitutional guarantees, Criminal Procedure Code defense tactics, acquittal case studies.
   - **Strategic Consultation CTA**: High-converting lead generation form and direct private consultation link (`https://wa.me/995571191819` styled without third-party app branding as requested).
2. **საოჯახო და მემკვიდრეობითი სამართალი (Family & Inheritance Law)** (`id: 'family-law'`):
   - **Hero**: Dignified representation in complex family and inheritance matters.
   - **Scope & Focus**: Marital asset division, high-net-worth divorce, child custody agreements, alimony enforcement, probate disputes, will challenges.
   - **Mediation & Trial Strategy**: Empathic confidential negotiation paired with decisive courtroom protection.
   - **Lead CTA**: Direct confidential legal consultation access.
3. **სახელშეკრულებო სამართალი და უძრავი ქონება (Contract Law & Real Estate)** (`id: 'real-estate-law'`):
   - **Hero**: Comprehensive legal shielding for property investments, commercial acquisitions, and contracts.
   - **Scope & Audit**: Legal Due Diligence, land registry verification, construction permits, drafting and vetting complex agreements, real estate litigation.
   - **Transaction Security**: Safeguarding buyers, developers, and investors from hidden encumbrances and title disputes.
   - **Lead CTA**: Contract audit & transaction consultation scheduler.

### C. Dedicated Blogs & Publications Portal (`/#/blogs` & `/#/blogs/:slug`)
- **Blog Index Page (`/#/blogs`)**:
  - Hero with category filters (სისხლის სამართალი, სამოქალაქო სამართალი, უძრავი ქონება, ბიზნესი).
  - Editorial grid of articles with publication dates, reading time, featured images, and tags.
  - Search/filter capability.
- **Individual Article Reading Page (`/#/blogs/:slug`)**:
  - In-depth statutory breakdown (1,000+ words of structured legal analysis, relevant Georgian articles of law, strategic counsel).
  - Author bio card for Giorgi Gubeladze (GBA member, founder).
  - Clean social share buttons (Copy Link, Direct Message, LinkedIn, Facebook).
  - Related publications carousel.
  - End-of-article high-converting Consultation CTA.

---

## 3. UI/UX, Typography & Motion Standards

- **Elite Multi-Layered SaaS Button Lighting**: Reusable `.saas-btn-gold` and `.saas-btn-dark` with mouse-coordinate radial spotlight tracking (`var(--mouse-x)`, `var(--mouse-y)`), 4-layer box-shadows, and zero uniform flat glows.
- **Cinematic Blur-Fade Reveals**: Consistent `BlurWaveText` with `amount: 0.05`, `margin: "0px 0px -30px 0px"`, and GPU acceleration (`transform: translate3d(0,0,0)`, `WebkitBackfaceVisibility: 'hidden'`).
- **Georgian Typography Descender Safeguards**:
  - Strict line-height (`1.3` to `1.35`) for headings.
  - Global `overflow: visible !important;` and bottom padding (`0.16em`) on `.bg-clip-text` elements so descenders (`ქ, წ, ჭ, შ, ყ, ძ, ჰ, გ, პ`) are never cropped.

---

## 4. Verification & Testing

1. Verify dependency installation (`react-router-dom`).
2. Run `compile_applet` and `lint_applet` (`tsc --noEmit`) to verify zero TypeScript errors.
3. Verify all routes (`/`, `/#/practice-areas/criminal-defense`, `/#/practice-areas/family-law`, `/#/practice-areas/real-estate-law`, `/#/blogs`, `/#/blogs/1`, etc.) load smoothly with scroll restoration.
4. Verify responsive mobile layout (360px+), touch navigation, and smooth modal flows.
