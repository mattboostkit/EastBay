# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
pnpm dev        # Start Next.js development server (http://localhost:3000)
pnpm build      # Create production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

### Package Management
This project uses pnpm 8.15.4. Install dependencies with:
```bash
pnpm install
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.2.2 with App Router
- **UI**: React 18.3.0 + Tailwind CSS + Radix UI/shadcn components
- **CMS**: Sanity v3 (admin at /admin)
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Google Analytics 4 (gtag)

### Project Structure
- `/app` - Next.js App Router pages and API routes
- `/components` - React components including shadcn/ui library
- `/schemas` - Sanity schema definitions
- `/lib` - Utilities including Sanity client configuration
- `/public` - Static assets organized by content type

### Key Integration Points

#### Sanity CMS
- **Project ID**: ce9tlzu0
- **Dataset**: production
- **Client**: Configured in `lib/sanity.client.ts` and `lib/sanity.unified.ts`
- **Schemas**: Defined in `/schemas` directory
- Admin interface accessible at `/admin`

#### SEO & Accessibility
- SEO components in `/components/SEO` (MetaTags, StructuredData, etc.)
- Dynamic sitemap generation at `/app/sitemap.xml/route.ts`
- WCAG 2.1 Level AA compliance implemented
- Form validation includes ARIA attributes

#### Media Handling
- Images: Use Next.js Image component with Sanity CDN
- 3D Models: Sketchfab integration via ModelViewer component
- Video: Custom VideoPlayer component
- Allowed image domains: cdn.sanity.io, sketchfab.com, ik.imagekit.io

### Environment Variables
Required for Sanity integration:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN` (for preview mode)

### Development Notes
- TypeScript strict mode is enabled
- Path alias `@/*` maps to project root
- Build ignores TypeScript/ESLint errors (configured in next.config.js)
- Server actions body size limit: 2MB