<<<<<<< HEAD
import { NextResponse } from 'next/server';

/**
 * Generates a robots.txt file dynamically
 * Specifies which pages search engines should crawl or avoid
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://archaeoproject.org';
  
  // Define robots.txt content
  const robotsTxt = `
# www.robotstxt.org/

# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Disallow specific areas
Disallow: /api/
Disallow: /studio/
Disallow: /admin/
Disallow: /private/
Disallow: /search?q=
Disallow: /_next/
Disallow: /*?print=*

# Media files
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.gif$
Allow: /*.webp$
Allow: /*.svg$
Allow: /*.pdf$
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
=======
import { NextResponse } from 'next/server';

/**
 * Generates a robots.txt file dynamically
 * Specifies which pages search engines should crawl or avoid
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://archaeoproject.org';
  
  // Define robots.txt content
  const robotsTxt = `
# www.robotstxt.org/

# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Disallow specific areas
Disallow: /api/
Disallow: /studio/
Disallow: /admin/
Disallow: /private/
Disallow: /search?q=
Disallow: /_next/
Disallow: /*?print=*

# Media files
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.gif$
Allow: /*.webp$
Allow: /*.svg$
Allow: /*.pdf$
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
}