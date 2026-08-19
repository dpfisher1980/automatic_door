# Automatic Door Solutions Website

Modern one-page marketing website built with React + TypeScript + Vite, designed for low-cost static hosting and a CMS-ready content architecture.

## Stack

- React 19 + TypeScript
- Vite
- Embla Carousel
- Zod (content validation)
- ESLint + Oxlint + Prettier

## Local Development

1. Install dependencies:

   npm install

2. Start development server:

   npm run dev

3. Quality checks:

   npm run lint
   npm run lint:ox
   npm run typecheck
   npm run build

## Content Provider Architecture (CMS-ready)

The UI does not read hardcoded content directly. It reads from a provider interface:

- Local provider (current MVP): `src/content/providers/localProvider.ts`
- CMS provider seam (placeholder): `src/content/providers/cmsProvider.ts`
- Provider resolver: `src/content/providers/index.ts`

This lets you replace local content with a real CMS later without rewriting section components.

### Provider Selection

Set environment variable:

VITE_CONTENT_PROVIDER=local

Use `.env.example` as a template.

## Key Content Files

- Content schema/types: `src/content/types.ts`
- Local seed content: `src/content/siteContent.ts`
- Sections:
  - `src/components/sections/Hero.tsx`
  - `src/components/sections/About.tsx`
  - `src/components/sections/Services.tsx`
  - `src/components/sections/ProjectsCarousel.tsx`
  - `src/components/sections/ProjectsGallery.tsx`
  - `src/components/sections/Contact.tsx`

## Cloudflare Pages Deployment

1. In Cloudflare Dashboard, go to Workers & Pages > Create > Pages > Connect to Git.
2. Select this repository and choose your production branch (for example `main`).
3. Use the build settings below:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (project root)
- Node.js version: latest LTS (recommended)

4. Add environment variable for production:

- Key: `VITE_CONTENT_PROVIDER`
- Value: `local`

5. Click Save and Deploy.

## Post-Deploy Smoke Test

After Cloudflare provides the site URL, validate:

1. Homepage loads without missing assets.
2. Hero background image appears correctly.
3. Project carousel navigation works.
4. Contact links open correctly:

- `mailto:clakin1@gmail.com`
- `tel:07796842200`

Each push to your production branch will trigger a new deployment automatically.
