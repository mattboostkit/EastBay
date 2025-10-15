# East Wear Bay Project Documentation

Welcome to the comprehensive documentation for the East Wear Bay Archaeological Project website. This folder contains all guides, references, and setup instructions organized by purpose.

## 📁 Documentation Structure

### `/setup` - Technical Setup & Configuration
Active documentation for setting up and configuring the project:

- **[INSTANT_UPDATES_SETUP.md](./setup/INSTANT_UPDATES_SETUP.md)** - Complete guide for setting up Sanity webhooks for instant content updates (1-3 seconds)
- **[QUICK_START_WEBHOOKS.md](./setup/QUICK_START_WEBHOOKS.md)** - Quick 5-minute guide for non-technical users to set up webhooks
- **[DEPLOYMENT-CHECKLIST.md](./setup/DEPLOYMENT-CHECKLIST.md)** - Step-by-step deployment checklist for production
- **[UPDATE_SANITY_GUIDE.md](./setup/UPDATE_SANITY_GUIDE.md)** - Guide for updating and managing Sanity CMS
- **[MEDIA-GUIDE.md](./setup/MEDIA-GUIDE.md)** - Guidelines for images, 3D models, and media assets
- **[SEO-ACCESSIBILITY-UPDATES.md](./setup/SEO-ACCESSIBILITY-UPDATES.md)** - SEO optimization and accessibility features documentation

### `/launch` - Launch Preparation
Documentation for preparing and launching the site:

- **[CONTENT_GUIDE.md](./launch/CONTENT_GUIDE.md)** - Comprehensive content creation guide with templates and style guidelines

### `/archived` - Historical Documentation
Outdated documentation kept for reference:

- Old setup guides and launch preparation documents
- Superseded by current documentation in `/setup` and `/launch`

## 🚀 Quick Start

### For Developers
1. Read [CLAUDE.md](../CLAUDE.md) in the project root for AI assistant guidance
2. Follow [DEPLOYMENT-CHECKLIST.md](./setup/DEPLOYMENT-CHECKLIST.md) before deploying
3. Set up webhooks using [INSTANT_UPDATES_SETUP.md](./setup/INSTANT_UPDATES_SETUP.md)

### For Content Editors
1. Use [QUICK_START_WEBHOOKS.md](./setup/QUICK_START_WEBHOOKS.md) for instant updates setup (5 minutes)
2. Follow [CONTENT_GUIDE.md](./launch/CONTENT_GUIDE.md) for content creation standards
3. Access Sanity Studio at `/admin` to manage content

### For Non-Technical Team
- **Need instant updates?** → [QUICK_START_WEBHOOKS.md](./setup/QUICK_START_WEBHOOKS.md)
- **Adding content?** → [CONTENT_GUIDE.md](./launch/CONTENT_GUIDE.md)
- **Need help?** → Contact your developer or refer to troubleshooting sections in each guide

## 📚 Main Documentation Files

### Project Root Files
These important files remain in the project root for easy access:

- **[README.md](../README.md)** - Main project overview and setup instructions
- **[CLAUDE.md](../CLAUDE.md)** - Comprehensive guide for AI assistants working with the codebase

## 🔧 Technology Stack

- **Framework**: Next.js 15.2.2 with App Router
- **CMS**: Sanity v4 (latest)
- **UI**: React 18.3.0 + Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form + Zod
- **Analytics**: Google Analytics 4

## 📖 Documentation Standards

When adding new documentation:
1. Place in appropriate folder (`/setup`, `/launch`, or `/archived`)
2. Use clear, descriptive filenames
3. Include table of contents for longer documents
4. Add code examples where relevant
5. Keep documentation updated with code changes
6. Use Markdown formatting consistently

## 🎯 Common Tasks

### Setting Up Instant Content Updates
1. Get `REVALIDATION_SECRET` from hosting platform
2. Follow [QUICK_START_WEBHOOKS.md](./setup/QUICK_START_WEBHOOKS.md)
3. Test by publishing content in Sanity

### Deploying to Production
1. Review [DEPLOYMENT-CHECKLIST.md](./setup/DEPLOYMENT-CHECKLIST.md)
2. Ensure all environment variables are set
3. Run production build test locally
4. Deploy and verify

### Adding Media Assets
1. Consult [MEDIA-GUIDE.md](./setup/MEDIA-GUIDE.md) for specifications
2. Optimize images before upload
3. Add proper alt text and metadata
4. Use Sanity CDN for delivery

## 💡 Tips

- **First time setup?** Start with CLAUDE.md for architecture overview
- **Making changes?** Always commit and push immediately (see CLAUDE.md)
- **Need instant updates?** Webhooks are essential - see QUICK_START_WEBHOOKS.md
- **Deploying?** Use the deployment checklist to avoid issues
- **Content team?** The content guide has templates and examples

## 🆘 Need Help?

- Check the relevant guide in `/setup` or `/launch`
- Review troubleshooting sections in each document
- Contact Canterbury Archaeological Trust: get_involved@canterburytrust.ac.uk
- Check archived docs for historical context

## 📝 Recent Updates

- **2025-01**: Updated Sanity to v4.10.3
- **2025-01**: Added comprehensive webhook setup guides
- **2025-01**: Reorganized documentation structure
- **2025-01**: Updated all package versions to latest

---

**Project**: East Wear Bay Archaeological Project
**Organization**: Canterbury Archaeological Trust Ltd
**Last Updated**: January 2025
