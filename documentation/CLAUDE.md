# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
pnpm dev        # Start Next.js development server (http://localhost:3000)
pnpm build      # Create production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm seed       # Seed Sanity database with sample data
```

### Package Management
This project uses pnpm 8.15.4. Install dependencies with:
```bash
pnpm install
```

### Sanity Studio
Access the Sanity Studio admin interface at `/admin` in development or production.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.2.2 with App Router
- **UI**: React 18.3.0 + Tailwind CSS + Radix UI/shadcn components
- **CMS**: Sanity v3 (admin at /admin)
- **Forms**: React Hook Form + Zod validation
- **Animation**: Framer Motion
- **Analytics**: Google Analytics 4 (gtag)
- **3D Models**: Sketchfab integration

### Project Structure
- `/app` - Next.js App Router pages and API routes
  - `/admin` - Sanity Studio route
  - `/api` - API endpoints (contact, newsletter, search, preview)
  - Page routes for content sections
- `/components` - React components including shadcn/ui library
  - `/ui` - shadcn/ui components (Button, Card, Dialog, etc.)
  - `/SEO` - SEO components (MetaTags, StructuredData, GoogleAnalytics)
  - Feature components (ModelViewer, VideoPlayer, ImageLightbox)
- `/schemas` - Sanity schema definitions
  - Content types: artifact, event, teamMember, partner, sponsor, etc.
- `/lib` - Utilities including Sanity client configuration
- `/public` - Static assets organized by content type
- `/docs` & `/documentation` - Project documentation

### Key Integration Points

#### Sanity CMS
- **Project ID**: ce9tlzu0
- **Dataset**: production
- **Client**: Configured in `lib/sanity.client.ts` and `lib/sanity.unified.ts`
- **Schemas**: Defined in `/schemas` directory
- **Preview Mode**: Implemented with draft/published content switching
- Admin interface accessible at `/admin`

#### SEO & Accessibility
- SEO components in `/components/SEO` (MetaTags, StructuredData, etc.)
- Dynamic sitemap generation at `/app/sitemap.xml/route.ts`
- WCAG 2.1 Level AA compliance implemented
- Form validation includes ARIA attributes
- Structured data for archaeological content

#### Media Handling
- Images: Use Next.js Image component with Sanity CDN
- 3D Models: Sketchfab integration via ModelViewer component
- Video: Custom VideoPlayer component
- Image Lightbox: For gallery functionality
- Allowed image domains: cdn.sanity.io, sketchfab.com, ik.imagekit.io

### Environment Variables
Required for Sanity integration:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN` (for preview mode)

### Key Features & Routes
- **Digital Museum**: `/museum` - Artifact display with 3D models
- **Field School**: `/field-school` - Educational programs
- **Events**: `/events` - Community events and activities
- **Team**: `/team` - Organization members
- **Partners**: `/partners` - Sponsorship and partnerships
- **API Routes**:
  - `/api/contact` - Contact form submission
  - `/api/newsletter` - Newsletter signup
  - `/api/search` - Artifact search functionality
  - `/api/preview` & `/api/exit-preview` - Preview mode handling

### Development Notes
- TypeScript strict mode is enabled
- Path alias `@/*` maps to project root
- Build ignores TypeScript/ESLint errors (configured in next.config.js)
- Server actions body size limit: 2MB
- Standalone output mode for optimized deployments
- No automated testing framework currently implemented
- Note: The codebase uses both "artifact" and "artefact" spellings - "artefact" is used in Sanity schemas

### Important Configuration
- **next.config.js**: Contains image domains, build settings, and optimization flags
- **tsconfig.json**: Strict TypeScript with ES5 target
- **tailwind.config.ts**: Extended theme with custom colors and fonts
- **sanity.config.ts**: Studio configuration with vision tool enabled

### Common Patterns
- Use server components by default, client components only when needed
- Sanity queries use GROQ language
- Forms use React Hook Form with Zod schemas
- Images should always use Next.js Image component for optimization
- 3D models integrate via Sketchfab embed API
- All user-facing text should consider accessibility