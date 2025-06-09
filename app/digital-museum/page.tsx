import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { 
  fetchAllArtifacts, 
  fetchFeaturedArtifacts, 
  searchArtifacts,
  fetchArtifactsByPeriod,
  fetchArtifactsByCategory
} from '@/lib/sanity.unified';
import ArtifactSearch from '@/components/ArtifactSearch';
import ArtifactCard from '@/components/ArtifactCard';
import FeaturedArtifact from '@/components/FeaturedArtifact';

export const metadata: Metadata = {
  title: 'Digital Museum | 3D Artifacts from the Folkestone Roman Villa',
  description: 'Explore 3D digital models of artifacts discovered at the East Wear Bay Roman Villa, preserving these finds through digital technology before coastal erosion claims the site.',
};

// Revalidate page every hour
export const revalidate = 3600;

export default async function DigitalMuseumPage({
  searchParams,
}: {
  searchParams?: { q?: string; period?: string; category?: string; page?: string };
}) {
  const query = searchParams?.q || '';
  const period = searchParams?.period || '';
  const category = searchParams?.category || '';
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = 8;
  
  // Fetch artifacts based on search/filter parameters
  let artifacts;
  if (query) {
    artifacts = await searchArtifacts(query);
  } else if (period) {
    artifacts = await fetchArtifactsByPeriod(period);
  } else if (category) {
    artifacts = await fetchArtifactsByCategory(category);
  } else {
    artifacts = await fetchAllArtifacts();
  }
  
  // Fetch featured artifacts for the featured section
  const featuredArtifacts = await fetchFeaturedArtifacts();
  const featuredArtifact = featuredArtifacts[0] || artifacts[0];
  
  // Pagination
  const totalArtifacts = artifacts.length;
  const totalPages = Math.ceil(totalArtifacts / pageSize);
  const paginatedArtifacts = artifacts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
  // Get all periods and categories for filters
  const allArtifacts = await fetchAllArtifacts();
  const allPeriods = Array.from(new Set(allArtifacts.map((artifact: any) => artifact.period).filter(Boolean))) as string[];
  const allCategories = Array.from(new Set(allArtifacts.flatMap((artifact: any) => artifact.categories || []))) as string[];
  
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Digital Museum</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore 3D models of artifacts discovered at the Folkestone Roman Villa site,
              digitally preserved as part of our race against coastal erosion.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        {/* Search and Filter */}
        <ArtifactSearch periods={allPeriods} categories={allCategories} />
        
        {/* Featured Artifact */}
        {featuredArtifact && <FeaturedArtifact artifact={featuredArtifact} />}
        
        {/* Artifact Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {paginatedArtifacts.map((artifact: any) => (
            <ArtifactCard key={artifact._id} artifact={artifact} />
          ))}
        </div>
        
        {/* No Results */}
        {paginatedArtifacts.length === 0 && (
          <div className="my-12 text-center">
            <h2 className="text-xl font-semibold">No artifacts found</h2>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center">
            <nav className="flex items-center gap-1" aria-label="Pagination">
              {/* Previous page button */}
              {currentPage > 1 && (
                <Link
                  href={{
                    pathname: '/digital-museum',
                    query: {
                      ...(query && { q: query }),
                      ...(period && { period }),
                      ...(category && { category }),
                      page: currentPage - 1,
                    },
                  }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm"
                  aria-label="Go to previous page"
                >
                  <span aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </span>
                </Link>
              )}
              
              {/* Page numbers */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNumber = i + 1;
                return (
                  <Link
                    key={pageNumber}
                    href={{
                      pathname: '/digital-museum',
                      query: {
                        ...(query && { q: query }),
                        ...(period && { period }),
                        ...(category && { category }),
                        page: pageNumber,
                      },
                    }}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ${
                      pageNumber === currentPage
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                    aria-current={pageNumber === currentPage ? 'page' : undefined}
                  >
                    {pageNumber}
                  </Link>
                );
              })}
              
              {/* Next page button */}
              {currentPage < totalPages && (
                <Link
                  href={{
                    pathname: '/digital-museum',
                    query: {
                      ...(query && { q: query }),
                      ...(period && { period }),
                      ...(category && { category }),
                      page: currentPage + 1,
                    },
                  }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm"
                  aria-label="Go to next page"
                >
                  <span aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </span>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
