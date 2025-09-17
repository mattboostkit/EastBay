import { Organization, WebSite, BreadcrumbList, WithContext } from 'schema-dts';

// Get base URL consistently
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org';
};

// Organization structured data
export function OrganizationStructuredData() {
  // Use a fixed URL to prevent hydration mismatches
  const baseUrl = 'https://eastwearbaypt.org';
  
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
      email: 'info@eastwearbay.org',
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
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        suppressHydrationWarning
      />
    </>
  );
}

// Breadcrumb structured data component
export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  // Use a fixed URL to prevent hydration mismatches
  const baseUrl = 'https://eastwearbaypt.org';

  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem' as const,
    position: index + 1,
    name: item.name,
    item: `${baseUrl}${item.url}`,
  }));

  const breadcrumbData: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      suppressHydrationWarning
    />
  );
}

// Artefact structured data component
export function ArtefactStructuredData({ 
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
  // Use a fixed URL to prevent hydration mismatches
  const baseUrl = 'https://eastwearbaypt.org';
  
  const artefactData = {
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(artefactData) }}
      suppressHydrationWarning
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
  // Use a fixed URL to prevent hydration mismatches
  const baseUrl = 'https://eastwearbaypt.org';

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
      suppressHydrationWarning
    />
  );
}