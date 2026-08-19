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

Use these settings in Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: latest LTS (recommended)

After connecting your repository, each push to your production branch will deploy a static build.
