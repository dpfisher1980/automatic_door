## TODO: Door Solutions Website

Legend:

- [ ] Not started
- [~] In progress
- [x] Done

### Phase 1 - Project Foundation

- [x] Initialize Vite React + TypeScript project
- [x] Add ESLint + Prettier + strict TypeScript settings
- [x] Create global design token system (colors, type, spacing, motion)
- [x] Prepare scalable single-page structure

### Phase 2 - Content Architecture

- [x] Define content models for hero, company, services, projects, contact
- [x] Define schema-first shared types for all content sections
- [x] Create content adapter interface used by UI components
- [x] Implement local static provider that satisfies adapter interface
- [x] Add demonstrational company/services/projects content
- [x] Keep content separate from presentational components
- [x] Add payload validation for provider data (e.g., Zod)

### Phase 3 - Prestige UI Implementation

- [x] Build sections: Hero, About, Services, Projects, Contact
- [x] Implement premium visual direction (typography, palette, spacing)
- [x] Add intentional motion and reduced-motion support
- [x] Complete responsive behavior for mobile/tablet/desktop

### Phase 4 - Projects Carousel + Gallery

- [x] Implement modern, accessible project carousel
- [x] Add linked project gallery/grid view
- [x] Populate 6-8 demo projects with outcomes and sector labels
- [x] Optimize media loading and image performance

### Phase 5 - Contact and Conversion UX

- [x] Add clickable email link: mailto:clakin1@gmail.com
- [x] Add clickable phone link: tel:07796842200
- [x] Add response expectation microcopy
- [x] Leave extension seam for future contact form

### Phase 6 - Accessibility, SEO, Performance

- [x] Validate semantic structure and heading hierarchy
- [x] Validate keyboard navigation and visible focus states
- [x] Validate color contrast and reduced-motion behavior
- [x] Add SEO metadata and social preview defaults
- [x] Run performance checks and fix key bottlenecks

### Phase 7 - Cloudflare Deployment

- [ ] Configure production build for Cloudflare Pages
- [ ] Add run/build/deploy instructions in README
- [ ] Run deployment smoke test in production

### Phase 8 - CMS Readiness (No Live CMS Yet)

- [x] Add environment-based content provider selection (local/cms)
- [x] Document CMS schema mapping for each section model
- [ ] Add preview-mode seam for future editor previews
- [~] Validate architecture can swap providers without UI refactor

### Notes

- Hosting target: Cloudflare Pages
- Stack target: React + TypeScript (Vite)
- MVP scope: one-page site with display-only contact links
- CMS strategy: architecture includes CMS seam now, live CMS integration later
