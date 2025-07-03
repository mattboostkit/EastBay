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
/documentation    # Project documentation
/scripts          # Utility scripts (e.g., data seeding)
```

## Key Features

- **Digital Museum**: Interactive artifact displays with 3D models
- **Field School**: Educational programs and volunteer opportunities
- **Timeline**: Historical progression of the archaeological site
- **Research Hub**: Academic publications and research resources
- **Community Engagement**: Events, news, and volunteer programs

## Documentation

See the `/documentation` directory for detailed guides:
- `CLAUDE.md` - AI assistant guidance and codebase overview
- `DEPLOYMENT-CHECKLIST.md` - Production deployment steps
- `MEDIA-GUIDE.md` - Image and 3D model integration
- `SEO-ACCESSIBILITY-UPDATES.md` - SEO and accessibility features
- `UPDATE_SANITY_GUIDE.md` - Sanity CMS configuration

## Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

## Contributing

This is a private project for the East Wear Bay Archaeological Project. Please contact the project team for contribution guidelines.

## License

Private - All rights reserved