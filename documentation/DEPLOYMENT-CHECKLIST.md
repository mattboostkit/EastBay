# Production Deployment Checklist

## Pre-Deployment

### Environment Variables
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Configure `NEXT_PUBLIC_GA_MEASUREMENT_ID` with your Google Analytics ID
- [ ] Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct (currently: ce9tlzu0)
- [ ] Set `SANITY_API_TOKEN` for preview functionality
- [ ] Generate and set `SANITY_PREVIEW_SECRET` (use a secure random string)

### Build & Quality Checks
- [ ] Run `pnpm build` locally and resolve any TypeScript/ESLint errors
- [ ] Run `pnpm lint` to ensure code quality
- [ ] Test all pages and functionality locally
- [ ] Verify all images load correctly from Sanity CDN

### SEO & Performance
- [ ] Update sitemap configuration if domain changes
- [ ] Verify robots.txt allows search engine crawling
- [ ] Test meta tags and structured data on key pages
- [ ] Check page load performance with Lighthouse

## Deployment

### Hosting Setup (Vercel/Netlify/etc.)
- [ ] Connect repository to hosting platform
- [ ] Configure environment variables in hosting dashboard
- [ ] Set Node.js version to 18+ if needed
- [ ] Configure custom domain and SSL certificate

### DNS Configuration
- [ ] Point domain to hosting provider
- [ ] Configure www redirect (if applicable)
- [ ] Set up any required subdomains

## Post-Deployment

### Verification
- [ ] Test live site on production domain
- [ ] Verify all API routes work correctly
- [ ] Test contact form submission
- [ ] Test newsletter signup
- [ ] Verify Sanity admin panel at /admin
- [ ] Check Google Analytics is tracking

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (e.g., Sentry)
- [ ] Monitor Core Web Vitals
- [ ] Set up backup strategy for Sanity content

## Important Notes

- The project uses `pnpm` - ensure your deployment platform supports it
- Build output is set to 'standalone' mode for optimized deployments
- Sanity Studio is embedded at `/admin` route
- All sensitive tokens should be kept secure and never committed to git