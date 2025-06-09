<<<<<<< HEAD
"use client";

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

/**
 * Component to add canonical link to pages
 * Ensures that duplicate URLs are correctly identified and the main URL is designated as canonical
 */
export function CanonicalLink() {
  const pathname = usePathname();
  
  // Create canonical URL based on environment and current path
  const canonicalUrl = useMemo(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://archaeoproject.org';
    
    // Remove trailing slashes except for homepage
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    
    return `${baseUrl}${path}`;
  }, [pathname]);

  return (
    <link 
      rel="canonical" 
      href={canonicalUrl} 
      key="canonical"
    />
  );
=======
"use client";

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

/**
 * Component to add canonical link to pages
 * Ensures that duplicate URLs are correctly identified and the main URL is designated as canonical
 */
export function CanonicalLink() {
  const pathname = usePathname();
  
  // Create canonical URL based on environment and current path
  const canonicalUrl = useMemo(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://archaeoproject.org';
    
    // Remove trailing slashes except for homepage
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    
    return `${baseUrl}${path}`;
  }, [pathname]);

  return (
    <link 
      rel="canonical" 
      href={canonicalUrl} 
      key="canonical"
    />
  );
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
}