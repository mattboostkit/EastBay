import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

/**
 * Generates a dynamic sitemap.xml file listing all main pages
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://archaeoproject.org';
  
  // Static pages
  const staticPages = [
    { url: '/', lastModified: new Date().toISOString() },
    { url: '/contact', lastModified: new Date().toISOString() },
    { url: '/team', lastModified: new Date().toISOString() },
    { url: '/artifacts', lastModified: new Date().toISOString() },
    { url: '/research', lastModified: new Date().toISOString() },
    { url: '/events', lastModified: new Date().toISOString() },
    { url: '/education', lastModified: new Date().toISOString() },
    { url: '/timeline', lastModified: new Date().toISOString() },
    { url: '/news', lastModified: new Date().toISOString() },
  ];

  // Fetch dynamic pages from Sanity
  let dynamicPages: Array<{url: string, lastModified: string}> = [];
  
  try {
    // Check if Sanity client is properly configured
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      // Fetch artifacts
      const artifacts = await client.fetch(`
        *[_type == "artifact"] {
          "slug": slug.current,
          _updatedAt
        }
      `);
      
      // Fetch posts
      const posts = await client.fetch(`
        *[_type == "post"] {
          "slug": slug.current,
          _updatedAt
        }
      `);
      
      // Fetch events
      const events = await client.fetch(`
        *[_type == "event"] {
          "slug": slug.current,
          _updatedAt
        }
      `);
      
      // Fetch team members
      const teamMembers = await client.fetch(`
        *[_type == "teamMember"] {
          "slug": slug.current,
          _updatedAt
        }
      `);
      
      // Transform fetched content into sitemap entries
      dynamicPages = [
        ...artifacts.map((item: any) => ({
          url: `/artifacts/${item.slug}`,
          lastModified: item._updatedAt,
        })),
        ...posts.map((item: any) => ({
          url: `/news/${item.slug}`,
          lastModified: item._updatedAt,
        })),
        ...events.map((item: any) => ({
          url: `/events/${item.slug}`,
          lastModified: item._updatedAt,
        })),
        ...teamMembers.map((item: any) => ({
          url: `/team/${item.slug}`,
          lastModified: item._updatedAt,
        })),
      ];
    }
  } catch (error) {
    console.error('Error fetching dynamic pages:', error);
    // Continue with static pages if content fetching fails
  }
  
  // Combine static and dynamic pages
  const allPages = [...staticPages, ...dynamicPages];
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.url === '/' ? 'daily' : 'weekly'}</changefreq>
      <priority>${page.url === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
}