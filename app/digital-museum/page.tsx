import { Metadata } from 'next';
import Link from 'next/link';
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

// Revalidate page every hour
export const revalidate = 3600;

export default async function DigitalMuseumPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; period?: string; category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const query = params?.q || '';
  const period = params?.period || '';
  const category = params?.category || '';
  const currentPage = Number(params?.page) || 1;
  const pageSize = 8;
  
  // Fetch artefacts based on search/filter parameters
  let artefacts;
  if (query) {
    artefacts = await searchArtefacts(query);
  } else if (period) {
    artefacts = await fetchArtefactsByPeriod(period);
  } else if (category) {
    artefacts = await fetchArtefactsByCategory(category);
  } else {
    artefacts = await fetchAllArtefacts();
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
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Digital Museum</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore 3D models and photographs of artefacts discovered at East Wear Bay, digitally preserved as part of our race against coastal erosion.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        {/* Search and Filter */}
        <ArtefactSearch periods={allPeriods} categories={allCategories} />
        
        {/* Featured Artefact */}
        {featuredArtefact && <FeaturedArtefact artefact={featuredArtefact} />}
        
        {/* Sketchfab 3D Models Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Interactive 3D Models</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Dog Skull - #1 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe 
                    title="Dog Skull" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/377115ce55264f6ebe7e605ed1e27014/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Dog Skull</h3>
                <p className="mt-1 text-xs text-muted-foreground">Archaeological Specimen</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Well-preserved canine skull specimen discovered during excavations at East Wear Bay.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/dog-skull-377115ce55264f6ebe7e605ed1e27014" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link 
                  href="/digital-museum/dog-skull" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Iron Age or Roman Period Tusk Pendant - #2 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe 
                    title="Iron Age or Roman Period Tusk Pendant" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/07bc66e33bbe4c3ab97beca7b2206ee1/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Tusk Pendant</h3>
                <p className="mt-1 text-xs text-muted-foreground">Iron Age / Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Personal ornament crafted from animal tusk, likely worn as a pendant or amulet.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/iron-age-or-roman-period-tusk-pendant-07bc66e33bbe4c3ab97beca7b2206ee1" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link 
                  href="/digital-museum/tusk-pendant" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Flint Arrowhead - #3 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe 
                    title="Flint Arrowhead" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/47f3d49d46f541dcb8778aee7e3e7627/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Flint Arrowhead</h3>
                <p className="mt-1 text-xs text-muted-foreground">Prehistoric</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Well-preserved flint arrowhead from the prehistoric occupation of the site.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/flint-arrowhead-47f3d49d46f541dcb8778aee7e3e7627" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link 
                  href="/digital-museum/flint-arrowhead" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Fragment of Ceramic Roman Period Figurine - #4 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe 
                    title="Fragment of Ceramic Roman Period Figurine" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/c8d4a0ee9c00405994fe873944fd6e18/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Ceramic Roman Figurine Fragment</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Fragment of a ceramic figurine from the Roman period, showing detailed craftsmanship.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/fragment-of-ceramic-roman-period-figurine-c8d4a0ee9c00405994fe873944fd6e18" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link 
                  href="/digital-museum/ceramic-figurine" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Worked Stone, Possible Hone - #5 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe 
                    title="Worked Stone, Possible Hone" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/e4493f2c08ed4e799aab00fcc94d5f2e/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Worked Stone Hone</h3>
                <p className="mt-1 text-xs text-muted-foreground">Multi-period Tool</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Worked stone tool, possibly used as a hone for sharpening blades and tools.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/worked-stone-possible-hone-e4493f2c08ed4e799aab00fcc94d5f2e" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link 
                  href="/digital-museum/worked-stone-hone" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Ceramic Roman Figurine Fragment (Second) - #6 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe 
                    title="Fragment of Ceramic Roman Period Figurine" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/179e944e81d448be8993bf7b444a62e8/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Ceramic Figurine Fragment II</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Another fragment of a Roman period ceramic figurine, showing different decorative details.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/fragment-of-ceramic-roman-period-figurine-179e944e81d448be8993bf7b444a62e8" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link 
                  href="/digital-museum/ceramic-figurine-2" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Ceramic Roman Figurine Fragment (Third) - #7 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe 
                    title="Fragment of Ceramic Roman Period Figurine" 
                    frameBorder="0" 
                    allowFullScreen 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/121e5ba48d494c5a8305836387337afa/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Ceramic Figurine Fragment III</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Third fragment from Roman period ceramic figurines, possibly from a household shrine.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/fragment-of-ceramic-roman-period-figurine-121e5ba48d494c5a8305836387337afa" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link 
                  href="/digital-museum/ceramic-figurine-3" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Placeholder 5 - Add your Sketchfab embed here */}
            <div className="rounded-lg border bg-card shadow-sm border-dashed border-2 border-muted-foreground/25">
              <div className="p-3">
                <div className="relative pb-[100%] bg-muted flex items-center justify-center rounded-md">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-4 text-center">
                    <span className="text-sm font-medium">Placeholder for 3D Model #8</span>
                    <span className="text-xs mt-2">Replace this with your Sketchfab embed</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-muted-foreground">Model Title</h3>
                <p className="mt-1 text-xs text-muted-foreground">Period</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Description of the artefact will go here.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Artefact Grid from Sanity CMS */}
        {paginatedArtefacts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Collection Archive</h2>
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
      </div>
    </>
  );
}
