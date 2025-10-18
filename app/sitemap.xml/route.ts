import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

/**
 * Generates a dynamic sitemap.xml file listing all main pages
 */
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://archaeoproject.org';
  
  // Static pages
  const staticPages = [
    { url: '/', lastModified: new Date().toISOString(), priority: '1.0' },
    { url: '/explore', lastModified: new Date().toISOString(), priority: '0.9' },
    { url: '/digital-museum', lastModified: new Date().toISOString(), priority: '0.9' },
    { url: '/field-school', lastModified: new Date().toISOString(), priority: '0.9' },
    { url: '/folkestone', lastModified: new Date().toISOString(), priority: '0.9' },
    { url: '/events', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/news', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/timeline', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/learn', lastModified: new Date().toISOString(), priority: '0.9' },
    { url: '/education', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/learn/dementia-resources', lastModified: new Date().toISOString(), priority: '0.7' },
    { url: '/learn/sensory-stories', lastModified: new Date().toISOString(), priority: '0.7' },
    { url: '/research/publications', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/about', lastModified: new Date().toISOString(), priority: '0.9' },
    { url: '/about/project', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/team', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/community', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/volunteer', lastModified: new Date().toISOString(), priority: '0.8' },
    { url: '/partners', lastModified: new Date().toISOString(), priority: '0.7' },
    { url: '/contact', lastModified: new Date().toISOString(), priority: '0.7' },
  ];

  // Fetch dynamic pages from Sanity
  let dynamicPages: Array<{url: string, lastModified: string}> = [];
  
  try {
    // Check if Sanity client is properly configured
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      // Fetch artefacts
      const artefacts = await client.fetch(`
        *[_type == "artefact"] {
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
        ...artefacts.map((item: any) => ({
          url: `/artefacts/${item.slug}`,
          lastModified: item._updatedAt,
          priority: '0.7',
        })),
        ...posts.map((item: any) => ({
          url: `/news/${item.slug}`,
          lastModified: item._updatedAt,
          priority: '0.6',
        })),
        ...events.map((item: any) => ({
          url: `/events/${item.slug}`,
          lastModified: item._updatedAt,
          priority: '0.6',
        })),
        ...teamMembers.map((item: any) => ({
          url: `/team/${item.slug}`,
          lastModified: item._updatedAt,
          priority: '0.5',
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
      (page: any) => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.url === '/' ? 'daily' : 'weekly'}</changefreq>
      <priority>${page.priority || '0.5'}</priority>
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