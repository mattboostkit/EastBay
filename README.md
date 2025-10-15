# East Wear Bay Archaeological Project

A Next.js web application for the East Wear Bay Archaeological Project, featuring a digital museum, educational resources, and community engagement tools.

## Tech Stack

- **Framework**: Next.js 15.2.2 with App Router
- **UI**: React 18.3.0 + Tailwind CSS + shadcn/ui
- **CMS**: Sanity v3
- **Forms**: React Hook Form + Zod validation
- **Animation**: Framer Motion
- **3D Models**: Sketchfab integration

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm 8.15.4

### Installation
```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Sanity project details to .env.local
```

### Development
```bash
# Start development server
pnpm dev

# Access the site at http://localhost:3000
# Access Sanity Studio at http://localhost:3000/admin
```

### Build
```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
/app              # Next.js App Router pages
/components       # React components including shadcn/ui
/schemas          # Sanity schema definitions
/lib              # Utilities and Sanity client
/public           # Static assets
/docs             # Project documentation (organized by purpose)
/scripts          # Utility scripts (e.g., data seeding)
```

## Key Features

- **Digital Museum**: Interactive artifact displays with 3D models
- **Field School**: Educational programs and volunteer opportunities
- **Timeline**: Historical progression of the archaeological site
- **Research Hub**: Academic publications and research resources
- **Community Engagement**: Events, news, and volunteer programs
- **Instant Updates**: Sanity webhooks for real-time content updates (1-3 seconds)

## Documentation

See the `/docs` directory for comprehensive guides:

### Setup & Configuration (`/docs/setup`)
- **[INSTANT_UPDATES_SETUP.md](./docs/setup/INSTANT_UPDATES_SETUP.md)** - Complete webhook setup for instant content updates
- **[QUICK_START_WEBHOOKS.md](./docs/setup/QUICK_START_WEBHOOKS.md)** - 5-minute quick start for non-technical users
- **[DEPLOYMENT-CHECKLIST.md](./docs/setup/DEPLOYMENT-CHECKLIST.md)** - Production deployment steps
- **[MEDIA-GUIDE.md](./docs/setup/MEDIA-GUIDE.md)** - Image and 3D model integration
- **[SEO-ACCESSIBILITY-UPDATES.md](./docs/setup/SEO-ACCESSIBILITY-UPDATES.md)** - SEO and accessibility features
- **[UPDATE_SANITY_GUIDE.md](./docs/setup/UPDATE_SANITY_GUIDE.md)** - Sanity CMS configuration

### Launch & Content (`/docs/launch`)
- **[CONTENT_GUIDE.md](./docs/launch/CONTENT_GUIDE.md)** - Content creation standards and templates

### AI Assistant Guidance
- **[CLAUDE.md](./CLAUDE.md)** - Complete codebase overview and best practices for AI assistants

## Environment Variables

See `.env.example` for all required environment variables:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Instant Updates (see docs/setup/QUICK_START_WEBHOOKS.md)
REVALIDATION_SECRET=your_secure_random_secret

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://eastwearbay.org
```

For webhook setup to enable instant content updates, see the [Quick Start Guide](./docs/setup/QUICK_START_WEBHOOKS.md).

## Contributing

This is a private project for the East Wear Bay Archaeological Project. Please contact the project team for contribution guidelines.

## License

Private - All rights reserved