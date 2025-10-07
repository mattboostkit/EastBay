import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { 
  fetchAllArtefacts, 
  fetchFeaturedArtefacts, 
  searchArtefacts,
  fetchArtefactsByPeriod,
  fetchArtefactsByCategory
} from '@/lib/sanity.unified';
import ArtefactSearch from '@/components/ArtefactSearch';
import ArtefactCard from '@/components/ArtefactCard';
import FeaturedArtefact from '@/components/FeaturedArtefact';

export const metadata: Metadata = {
  title: 'Digital Museum | 3D Artefacts from the Folkestone Roman Villa',
  description: 'Explore 3D digital models of artefacts discovered at the East Wear Bay Roman Villa, preserving these finds through digital technology before coastal erosion claims the site.',
};

// Revalidate page every 60 seconds
export const revalidate = 60;

export default async function DigitalMuseumPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; period?: string; category?: string; modelType?: string; page?: string }>;
}) {
  const params = await searchParams;
  const query = params?.q || '';
  const period = params?.period || '';
  const category = params?.category || '';
  const modelType = params?.modelType || '';
  const currentPage = Number(params?.page) || 1;
  const pageSize = 8;
  
  // Fetch all artefacts first
  let artefacts = await fetchAllArtefacts();

  // Apply filters
  if (query) {
    artefacts = artefacts.filter((artefact: any) =>
      artefact.title?.toLowerCase().includes(query.toLowerCase()) ||
      artefact.description?.toLowerCase().includes(query.toLowerCase()) ||
      artefact.period?.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (period) {
    artefacts = artefacts.filter((artefact: any) =>
      artefact.period === period
    );
  }

  if (category) {
    artefacts = artefacts.filter((artefact: any) =>
      artefact.categories?.includes(category)
    );
  }

  if (modelType) {
    artefacts = artefacts.filter((artefact: any) => {
      if (modelType === '3d') {
        return artefact.sketchfabUrl || artefact.modelUrl;
      } else if (modelType === 'photo') {
        return !artefact.sketchfabUrl && !artefact.modelUrl && artefact.image;
      }
      return true;
    });
  }
  
  // Fetch featured artefacts for the featured section
  const featuredArtefacts = await fetchFeaturedArtefacts();
  const featuredArtefact = featuredArtefacts[0] || artefacts[0];
  
  // Pagination
  const totalArtefacts = artefacts.length;
  const totalPages = Math.ceil(totalArtefacts / pageSize);
  const paginatedArtefacts = artefacts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
  // Get all periods and categories for filters
  const allArtefacts = await fetchAllArtefacts();
  const allPeriods = Array.from(new Set(allArtefacts.map((artefact: any) => artefact.period).filter(Boolean))) as string[];
  const allCategories = Array.from(new Set(allArtefacts.flatMap((artefact: any) => artefact.categories || []))) as string[];
  
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Digital%20Museum/Digital_Museum_Banner.webp?updatedAt=1759861001813"
          alt="Digital Museum - East Wear Bay artefacts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Digital Museum</h1>
              <p className="mt-4 text-lg text-white/90 md:text-xl">
                Explore 3D models and photographs of artefacts discovered at East Wear Bay, digitally preserved as part of our race against coastal erosion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container py-12">
        {/* Search and Filter */}
        <ArtefactSearch periods={allPeriods} categories={allCategories} />
        
        {/* Featured Artefact */}
        {featuredArtefact && <FeaturedArtefact artefact={featuredArtefact} />}

        {/* Artefact Grid from Sanity CMS */}
        {paginatedArtefacts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Digital Collection</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {paginatedArtefacts.map((artefact: any) => (
                <ArtefactCard key={artefact._id} artefact={artefact} />
              ))}
            </div>
          </>
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

        {/* Acknowledgements Section */}
        <section className="mt-16 border-t pt-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-muted-foreground">
              Canterbury Archaeological Trust would like to extend its warmest thanks to the following volunteers and CAT staff who have worked hard to develop and deliver this fantastic resource:
            </p>
            <p className="mt-4 text-sm font-medium">
              Illia Shabalkin, Mary Fenske, Alicia Allan Padilla, Eleni Padilla, Heather Miller, Frances Morgan, Heather Hanson, Sawney Hewitt.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
