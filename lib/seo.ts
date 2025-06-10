// SEO utility functions
// This file provides a centralized place for all SEO-related functions

import { Metadata } from 'next';

// Base URL for the site
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';

// Default metadata values
const defaultTitle = 'East Wear Bay Project | Folkestone Roman Villa Research';
const defaultDescription = 'Exploring the Folkestone Roman Villa through community archaeology, digital preservation, and education. Join us in preserving this coastal heritage site threatened by erosion.';
const defaultOgImage = 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg';
const defaultKeywords = [
  'archaeology', 
  'Folkestone Roman Villa', 
  '3D artifacts', 
  'community archaeology', 
  'digital preservation', 
  'coastal erosion', 
  'heritage', 
  'East Wear Bay'
];

// Interface for page metadata
export interface PageSeoProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonicalPath?: string;
}

/**
 * Generate metadata for a page
 */
export function generateMetadata({
  title,
  description,
  ogImage = defaultOgImage,
  ogType = 'website',
  noIndex = false,
  keywords = [],
  author = 'East Wear Bay Project Team',
  publishedTime,
  modifiedTime,
  section,
  tags,
  canonicalPath,
}: PageSeoProps): Metadata {
  // Combine default and custom keywords without using Set spread
  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));
  
  // Construct canonical URL
  const canonicalUrl = canonicalPath 
    ? `${siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}` 
    : siteUrl;
  
  // Ensure image URL is absolute
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // Build metadata object
  const metadata: Metadata = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: allKeywords,
    authors: [{ name: author }],
    openGraph: {
      type: ogType,
      url: canonicalUrl,
      title: title || defaultTitle,
      description: description || defaultDescription,
      siteName: 'East Wear Bay Project',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title || defaultTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || defaultTitle,
      description: description || defaultDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
  
  // Add article-specific metadata if applicable
  if (ogType === 'article' && metadata.openGraph) {
    // Create a new object for article metadata
    const articleMetadata = {
      ...metadata.openGraph,
      // These properties are added at the top level for OG article metadata
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      section: section,
      tags: tags,
    };
    
    metadata.openGraph = articleMetadata;
  }
  
  // Add robots directive if noIndex is true
  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }
  
  return metadata;
}

/**
 * Generate JSON-LD structured data for an article
 */
export function generateArticleStructuredData({
  title,
  description,
  url,
  imageUrl,
  publishedTime,
  modifiedTime,
  author,
}: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: publishedTime,
    ...(modifiedTime && { dateModified: modifiedTime }),
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'East Wear Bay Project',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Generate JSON-LD structured data for an artifact
 */
export function generateArtifactStructuredData({
  name,
  description,
  url,
  imageUrl,
  dateCreated,
  artform,
  artMedium,
  artworkSurface,
  creator,
}: {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  dateCreated: string;
  artform?: string;
  artMedium?: string;
  artworkSurface?: string;
  creator?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: name,
    description: description,
    image: imageUrl,
    url: url,
    dateCreated: dateCreated,
    ...(artform && { artform: artform }),
    ...(artMedium && { artMedium: artMedium }),
    ...(artworkSurface && { artworkSurface: artworkSurface }),
    ...(creator && {
      creator: {
        '@type': 'Organization',
        name: creator,
      },
    }),
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generate organization structured data
 */
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'East Wear Bay Project',
    url: siteUrl,
    logo: 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg',
    sameAs: [
      'https://twitter.com/eastwearbaypt',
      'https://facebook.com/eastwearbaypt',
      'https://instagram.com/eastwearbaypt',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-1234-567890',
      contactType: 'customer service',
      email: 'info@eastwearbaypt.org',
    },
  };
}
