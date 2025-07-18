import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Default fallback values for local development
const defaultConfig = {
  projectId: 'development',
  dataset: 'development',
  apiVersion: '2023-08-01',
  useCdn: false
};

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || defaultConfig.projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || defaultConfig.dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || defaultConfig.apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Function to fetch all data of a specific type
export async function fetchAll(type: string) {
  return client.fetch(`*[_type == "${type}"]`);
}

// Function to fetch a single document by ID
export async function fetchById(type: string, id: string) {
  return client.fetch(`*[_type == "${type}" && _id == "${id}"][0]`);
}

// Function to fetch a single document by slug
export async function fetchBySlug(type: string, slug: string) {
  return client.fetch(`*[_type == "${type}" && slug.current == "${slug}"][0]`);
}

// Function to fetch paginated results
export async function fetchPaginated(type: string, start: number, end: number) {
  return client.fetch(`*[_type == "${type}"] | order(_createdAt desc)[${start}...${end}]`);
}

// Function to perform a search
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