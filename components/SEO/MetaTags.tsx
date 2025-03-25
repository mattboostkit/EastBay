"use client";

import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface MetaTagsProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
}

export function MetaTags({
  title,
  description,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
  keywords = [],
  author = 'East Wear Bay Project Team',
}: MetaTagsProps) {
  const pathname = usePathname();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';
  const defaultTitle = 'East Wear Bay Project | Folkestone Roman Villa Research';
  const defaultDescription = 'Exploring the Folkestone Roman Villa through community archaeology, digital preservation, and education. Join us in preserving this coastal heritage site threatened by erosion.';
  
  // Use provided values or defaults
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageUrl = canonicalUrl || `${siteUrl}${pathname}`;
  const pageImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {author && <meta name="author" content={author} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content="East Wear Bay Project" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
    </Head>
  );
}
