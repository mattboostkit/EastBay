import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Configuration with environment variables and fallbacks
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ce9tlzu0';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-12-18';

// Create client with proper configuration
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  // Token only needed for authenticated requests (e.g., preview mode)
  token: process.env.SANITY_API_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return source ? builder.image(source) : null;
}

// Video URL helper
export function getVideoUrl(video: any) {
  if (!video) return null;
  
  // For directly uploaded videos
  if (video.videoFile && video.videoFile.asset) {
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${video.videoFile.asset._ref.replace('file-', '').replace('-mp4', '.mp4')}`;
  }
  
  // For external videos (YouTube, Vimeo, etc.)
  if (video.externalVideo) {
    return video.externalVideo;
  }
  
  return null;
}

// Generic utility functions
export async function fetchAll(type: string) {
  return client.fetch(`*[_type == "${type}"] | order(_createdAt desc)`);
}

export async function fetchById(type: string, id: string) {
  return client.fetch(`*[_type == "${type}" && _id == "${id}"][0]`);
}

export async function fetchBySlug(type: string, slug: string) {
  return client.fetch(`*[_type == "${type}" && slug.current == "${slug}"][0]`);
}

export async function fetchPaginated(type: string, start: number, end: number) {
  return client.fetch(`*[_type == "${type}"] | order(_createdAt desc)[${start}...${end}]`);
}

export async function search(query: string) {
  return client.fetch(`
    *[
      _type in ["artefact", "post", "event", "researchPublication"] &&
      (title match "${query}*" || 
       description match "${query}*" || 
       body match "${query}*")
    ]{
      _id,
      _type,
      title,
      "slug": slug.current,
      _createdAt
    }
  `);
}

// Artefact-specific utility functions
export async function fetchAllArtefacts() {
  return client.fetch(`*[_type == "artefact"] | order(_createdAt desc)`);
}

export async function fetchFeaturedArtefacts() {
  return client.fetch(`*[_type == "artefact" && featured == true] | order(_createdAt desc)[0...4]`);
}

export async function fetchArtefactBySlug(slug: string) {
  return client.fetch(`*[_type == "artefact" && slug.current == $slug][0]`, { slug });
}

export async function fetchArtefactsByPeriod(period: string) {
  return client.fetch(`*[_type == "artefact" && period == $period] | order(_createdAt desc)`, { period });
}

export async function fetchArtefactsByCategory(category: string) {
  return client.fetch(`*[_type == "artefact" && $category in categories] | order(_createdAt desc)`, { category });
}

export async function searchArtefacts(query: string) {
  const searchQuery = `*${query}*`;
  return client.fetch(`
    *[_type == "artefact" && (
      title match $searchQuery ||
      description match $searchQuery ||
      period match $searchQuery ||
      material match $searchQuery
    )] | order(_createdAt desc)
  `, { searchQuery });
}

// Post-specific utility functions
export async function fetchAllPosts() {
  return client.fetch(`*[_type == "post"] | order(_createdAt desc)`);
}

export async function fetchPostBySlug(slug: string) {
  return client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
}

export async function searchPosts(query: string) {
  const searchQuery = `*${query}*`;
  return client.fetch(`
    *[_type == "post" && (
      title match $searchQuery ||
      excerpt match $searchQuery ||
      body[].children[].text match $searchQuery
    )] | order(publishedAt desc)
  `, { searchQuery });
}

export async function fetchPostsByCategory(category: string) {
  return client.fetch(`*[_type == "post" && $category in categories] | order(publishedAt desc)`, { category });
}

export async function fetchPostsByYear(year: number) {
  const startDate = `${year}-01-01`;
  const endDate = `${year}-12-31`;
  return client.fetch(`
    *[_type == "post" && publishedAt >= $startDate && publishedAt <= $endDate] | order(publishedAt desc)
  `, { startDate, endDate });
}

// Event-specific utility functions
export async function fetchAllEvents() {
  return client.fetch(`*[_type == "event"] | order(startDate asc)`);
}

export async function fetchUpcomingEvents() {
  const now = new Date().toISOString();
  return client.fetch(`*[_type == "event" && startDate > $now] | order(startDate asc)`, { now });
}

// Research publication utility functions
export async function fetchAllResearchPublications() {
  return client.fetch(`*[_type == "researchPublication"] | order(publishDate desc)`);
}

// Education resource utility functions
export async function fetchAllEducationResources() {
  return client.fetch(`*[_type == "educationResource"] | order(_createdAt desc)`);
}

// Homepage section utility functions
export async function fetchAllHomepageSections() {
  return client.fetch(`*[_type == "homepageSection"] | order(order asc)`);
}

export async function fetchHomepageSectionById(sectionId: string) {
  return client.fetch(`*[_type == "homepageSection" && sectionId == $sectionId][0]`, { sectionId });
}

export async function fetchHomepageSectionsByIds(sectionIds: string[]) {
  return client.fetch(`*[_type == "homepageSection" && sectionId in $sectionIds] | order(order asc)`, { sectionIds });
}
