<<<<<<< HEAD
"use client";

import { useMemo } from 'react';
import { Organization, WebSite, BreadcrumbList, WithContext } from 'schema-dts';

// Organization structured data
export function OrganizationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';
  
  const orgData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'East Wear Bay Project',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/eastwearbaypt',
      'https://facebook.com/eastwearbaypt',
      'https://instagram.com/eastwearbaypt',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+441303123456',
      contactType: 'customer service',
      email: 'contact@eastwearbaypt.org',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'East Wear Bay',
      addressLocality: 'Folkestone',
      addressRegion: 'Kent',
      postalCode: 'CT20 1PU',
      addressCountry: 'UK',
    },
    description: 'A community archaeology project preserving the Folkestone Roman Villa through excavation, digital preservation, and public engagement.',
    funder: {
      '@type': 'Organization',
      name: 'National Lottery Heritage Fund',
      url: 'https://www.heritagefund.org.uk/'
    }
  };

  const websiteData: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'East Wear Bay Project',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}

// Breadcrumb structured data component
export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';

  const breadcrumbData = useMemo(() => {
    const itemListElement = items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    }));

    const data: WithContext<BreadcrumbList> = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    };

    return data;
  }, [items, baseUrl]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

// Artifact structured data component
export function ArtifactStructuredData({ 
  name, 
  description, 
  image, 
  dateCreated, 
  url,
  material,
  artform,
  artMedium,
  creator
}: { 
  name: string;
  description: string;
  image: string;
  dateCreated: string;
  url: string;
  material?: string;
  artform?: string;
  artMedium?: string;
  creator?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';
  
  const artifactData = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name,
    description,
    image: `${baseUrl}${image}`,
    dateCreated,
    url: `${baseUrl}${url}`,
    ...(material && { material }),
    ...(artform && { artform }),
    ...(artMedium && { artMedium }),
    ...(creator && { 
      creator: {
        '@type': 'Person',
        name: creator
      }
    }),
    locationCreated: {
      '@type': 'Place',
      name: 'Folkestone Roman Villa, East Wear Bay',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Folkestone',
        addressRegion: 'Kent',
        addressCountry: 'UK'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(artifactData) }}
    />
  );
}

// Event structured data component
export function EventStructuredData({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  url,
  organizer,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
  url: string;
  organizer?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';

  const eventData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    ...(endDate && { endDate }),
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Folkestone',
        addressRegion: 'Kent',
        addressCountry: 'UK'
      }
    },
    ...(image && { image: `${baseUrl}${image}` }),
    url: `${baseUrl}${url}`,
    ...(organizer && {
      organizer: {
        '@type': 'Organization',
        name: organizer,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
    />
  );
=======
"use client";

import { useMemo } from 'react';
import { Organization, WebSite, BreadcrumbList, WithContext } from 'schema-dts';

// Organization structured data
export function OrganizationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';
  
  const orgData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'East Wear Bay Project',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/eastwearbaypt',
      'https://facebook.com/eastwearbaypt',
      'https://instagram.com/eastwearbaypt',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+441303123456',
      contactType: 'customer service',
      email: 'contact@eastwearbaypt.org',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'East Wear Bay',
      addressLocality: 'Folkestone',
      addressRegion: 'Kent',
      postalCode: 'CT20 1PU',
      addressCountry: 'UK',
    },
    description: 'A community archaeology project preserving the Folkestone Roman Villa through excavation, digital preservation, and public engagement.',
    funder: {
      '@type': 'Organization',
      name: 'National Lottery Heritage Fund',
      url: 'https://www.heritagefund.org.uk/'
    }
  };

  const websiteData: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'East Wear Bay Project',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}

// Breadcrumb structured data component
export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';

  const breadcrumbData = useMemo(() => {
    const itemListElement = items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    }));

    const data: WithContext<BreadcrumbList> = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    };

    return data;
  }, [items, baseUrl]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

// Artifact structured data component
export function ArtifactStructuredData({ 
  name, 
  description, 
  image, 
  dateCreated, 
  url,
  material,
  artform,
  artMedium,
  creator
}: { 
  name: string;
  description: string;
  image: string;
  dateCreated: string;
  url: string;
  material?: string;
  artform?: string;
  artMedium?: string;
  creator?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';
  
  const artifactData = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name,
    description,
    image: `${baseUrl}${image}`,
    dateCreated,
    url: `${baseUrl}${url}`,
    ...(material && { material }),
    ...(artform && { artform }),
    ...(artMedium && { artMedium }),
    ...(creator && { 
      creator: {
        '@type': 'Person',
        name: creator
      }
    }),
    locationCreated: {
      '@type': 'Place',
      name: 'Folkestone Roman Villa, East Wear Bay',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Folkestone',
        addressRegion: 'Kent',
        addressCountry: 'UK'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(artifactData) }}
    />
  );
}

// Event structured data component
export function EventStructuredData({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  url,
  organizer,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
  url: string;
  organizer?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';

  const eventData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    ...(endDate && { endDate }),
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Folkestone',
        addressRegion: 'Kent',
        addressCountry: 'UK'
      }
    },
    ...(image && { image: `${baseUrl}${image}` }),
    url: `${baseUrl}${url}`,
    ...(organizer && {
      organizer: {
        '@type': 'Organization',
        name: organizer,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
    />
  );
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
}