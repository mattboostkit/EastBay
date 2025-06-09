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
      _type in ["artifact", "post", "event", "researchPublication"] &&
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

// Artifact-specific utility functions
export async function fetchAllArtifacts() {
  return client.fetch(`*[_type == "artifact"] | order(_createdAt desc)`);
}

export async function fetchFeaturedArtifacts() {
  return client.fetch(`*[_type == "artifact" && featured == true] | order(_createdAt desc)[0...4]`);
}

export async function fetchArtifactBySlug(slug: string) {
  return client.fetch(`*[_type == "artifact" && slug.current == $slug][0]`, { slug });
}

export async function fetchArtifactsByPeriod(period: string) {
  return client.fetch(`*[_type == "artifact" && period == $period] | order(_createdAt desc)`, { period });
}

export async function fetchArtifactsByCategory(category: string) {
  return client.fetch(`*[_type == "artifact" && $category in categories] | order(_createdAt desc)`, { category });
}

export async function searchArtifacts(query: string) {
  const searchQuery = `*${query}*`;
  return client.fetch(`
    *[_type == "artifact" && (
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
