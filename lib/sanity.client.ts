import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  apiVersion: '2023-12-18',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for generating image URLs
const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return source ? builder.image(source) : null;
}

// Helper function for videos
export function getVideoUrl(video: any) {
  if (!video) return null;
  
  // For directly uploaded videos
  if (video.videoFile && video.videoFile.asset) {
    return `https://cdn.sanity.io/files/ce9tlzu0/production/${video.videoFile.asset._ref.replace('file-', '').replace('-mp4', '.mp4')}`;
  }
  
  // For external videos (YouTube, Vimeo, etc.)
  if (video.externalVideo) {
    return video.externalVideo;
  }
  
  return null;
}
