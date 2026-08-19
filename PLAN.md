## Plan: Prestige React Brochure Site

Build a one-page React + TypeScript marketing site for Automatic Door Solutions using a static architecture optimized for low-cost hosting on Cloudflare Pages. The implementation will prioritize a premium visual identity, strong service storytelling, project showcase via carousel + gallery, and conversion-focused contact links (email + phone) with a clean upgrade path to a full contact form later.

**Steps**

1. Phase 1 - Project Foundation
1. Initialize a React + TypeScript app with Vite for fast local development and static production output.
1. Add baseline tooling for maintainability: ESLint, Prettier, and strict TypeScript settings.
1. Set up global design tokens (CSS variables) for typography, color, spacing, elevation, and motion to enforce a consistent premium visual system.
1. Configure routing as single-page now, with structure that can scale to multi-page later (section-based architecture and reusable content modules).

1. Phase 2 - Information Architecture and CMS-Ready Content Model (_depends on Phase 1_)
1. Define section data models for hero, company intro, services, projects, and contact to keep content easy to extend without rewriting components.
1. Introduce a content adapter layer (`src/content/providers/`) with a stable interface used by the UI.
1. Implement a local static content provider first (hardcoded JSON/TS data) that conforms to the adapter interface.
1. Seed demo content for brand: Automatic Door Solutions, services, sample projects, and provided contact details.
1. Separate content objects from presentational components so future updates can be done in one place.
1. Add lightweight runtime validation (for example with Zod) for provider payloads to reduce breakage during future CMS integration.

1. Phase 3 - Prestige UI Implementation (_depends on Phase 2_)
1. Build one-page layout sections: Hero, About/Company, Services, Projects, Contact.
1. Implement a distinctive visual system: expressive display typography paired with readable body type, warm-neutral palette, and editorial spacing.
1. Add meaningful motion only: staggered load-in for key sections, subtle hover states, reduced-motion support.
1. Ensure fully responsive behavior for desktop and mobile (including button sizing, readable typography scales, and section spacing).

1. Phase 4 - Projects Carousel + Gallery (_parallel with late Phase 3 styling pass once base sections exist_)
1. Implement a modern carousel for featured projects with swipe support and keyboard accessibility.
1. Add a companion gallery/grid view beneath or linked from the carousel for quick project scanning.
1. Populate 6-8 demonstrational projects with outcomes and sector labels.
1. Optimize images and loading behavior to preserve performance on mobile.

1. Phase 5 - Contact and Conversion UX (_depends on Phase 3_)
1. Add contact block with clickable email (mailto) and phone (tel) links using provided details.
1. Include microcopy for response expectations and service intent.
1. Structure contact component with future extension seam for form fields and backend endpoint integration.

1. Phase 6 - Accessibility, SEO, and Performance Hardening (_depends on Phases 3-5_)
1. Enforce semantic heading hierarchy, landmarks, alt text, and keyboard focus visibility.
1. Validate contrast and reduced-motion support.
1. Add metadata: title/description, Open Graph defaults, and favicon/app icons.
1. Run Lighthouse-style checks and resolve key performance blockers (image size, bundle split opportunities, lazy-loading).

1. Phase 7 - Deployment Setup for Cloudflare Pages (_depends on Phase 6_)
1. Configure production build command and output directory for Cloudflare Pages.
1. Add basic docs for local run, build, and deploy flow.
1. Validate final production build artifact and static hosting compatibility.

1. Phase 8 - CMS Migration Readiness (_can start in parallel once Phase 2 exists_)
1. Add environment-driven provider selection (`local` now, `cms` later) without changing section components.
1. Document target CMS schema mapping for all section models (hero, services, projects, contact).
1. Add a draft preview strategy (optional route or feature flag) for future content editor previews.
1. Keep static export compatibility by avoiding runtime-only server dependencies in core rendering paths.

**Relevant files**

- package.json - project scripts, dependencies, and build commands
- tsconfig.json - strict TypeScript configuration
- vite.config.ts - build configuration for static deployment
- src/main.tsx - app bootstrap entry
- src/App.tsx - one-page composition of all sections
- src/styles/global.css - global reset, tokens, and theme foundations
- src/components/sections/Hero.tsx - premium hero with primary conversion actions
- src/components/sections/About.tsx - company overview and trust positioning
- src/components/sections/Services.tsx - service cards and benefits
- src/components/sections/ProjectsCarousel.tsx - featured project slider implementation
- src/components/sections/ProjectsGallery.tsx - project grid/list view
- src/components/sections/Contact.tsx - email/phone CTA block with future form seam
- src/content/siteContent.ts - demo content model and section data
- src/content/types.ts - shared content schema types
- src/content/providers/localProvider.ts - hardcoded content provider implementing adapter interface
- src/content/providers/index.ts - provider resolver (local now, CMS-ready seam)
- public/ - optimized static media assets
- README.md - setup and deploy documentation

**Verification**

1. Local quality checks: lint, type-check, and production build complete without errors.
2. Responsive QA at common breakpoints (mobile, tablet, desktop), including carousel touch/keyboard behavior.
3. Accessibility QA: keyboard-only navigation pass, visible focus states, contrast validation, reduced-motion validation.
4. SEO sanity: metadata present and social preview tags set.
5. Deployment smoke test on Cloudflare Pages with valid route rendering and working mailto/tel links.

**Decisions**

- Hosting: Cloudflare Pages (cheap, static, scalable).
- Framework: React + TypeScript via Vite (fast and easy to extend).
- Scope included: one-page MVP with demo content, services, projects carousel+gallery, and contact links.
- Scope excluded for MVP: live CMS connection, live backend contact processing, authentication, blog/news module.
- Contact behavior: display-only email/phone now, explicit extension path for form later.
- CMS architecture: included now via content adapter seam; CMS provider implementation deferred.

**Further Considerations**

1. Carousel library selection recommendation: Embla Carousel (lightweight, customizable) vs Swiper (feature-rich but heavier).
2. Content management evolution path: swap local provider for CMS provider (e.g., Sanity, Contentful, or DatoCMS) without changing section components.
3. Post-MVP enhancement path: add testimonials, partner logos, and service-area map to improve trust and conversion.
