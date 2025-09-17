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

            {/* Copper Alloy Hod Hill Type Brooch - #2 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Copper Alloy Hod Hill Type Brooch"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/52304a6789cd47d597e08ea929472563/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Hod Hill Type Brooch</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Copper alloy brooch of the Hod Hill type, a distinctive style of Roman military brooch from the 1st century AD.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/copper-alloy-hod-hill-type-brooch-52304a6789cd47d597e08ea929472563" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/hod-hill-brooch"
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

            {/* Ceramic Spindle Whorl - #8 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Ceramic Spindle Whorl"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/13102c0f8941472ba93e6bd21e4a31de/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Ceramic Spindle Whorl</h3>
                <p className="mt-1 text-xs text-muted-foreground">Multi-period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Ceramic spindle whorl used for spinning thread from wool or plant fibres, an essential textile production tool.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/ceramic-spindle-whorl-13102c0f8941472ba93e6bd21e4a31de" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/spindle-whorl"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Ceramic Spindle Whorl (Second) - #9 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Ceramic Spindle Whorl"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/f535149ad9d14c7db8798109638abf25/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Ceramic Spindle Whorl II</h3>
                <p className="mt-1 text-xs text-muted-foreground">Multi-period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Another example of a ceramic spindle whorl, showing variations in size and decoration used for textile production.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/ceramic-spindle-whorl-f535149ad9d14c7db8798109638abf25" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/spindle-whorl-2"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Antler - #10 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Antler"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/37ca9dd3650d4b93bb51d5761b880f1a/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Worked Antler</h3>
                <p className="mt-1 text-xs text-muted-foreground">Multi-period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Worked antler piece, possibly used as a tool or raw material for crafting implements and ornaments.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/antler-37ca9dd3650d4b93bb51d5761b880f1a" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/worked-antler"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Vessel Fragment - #11 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Vessel Fragment"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/526b2e81ca8c4336a2588ca3218c94e4/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Vessel Fragment</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Fragment of a ceramic vessel showing construction techniques and decorative elements from the Roman period.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/vessel-fragment-526b2e81ca8c4336a2588ca3218c94e4" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/vessel-fragment"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Fragment from Cam 112 Type Beaker - #12 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Fragment from Cam 112 Type Beaker"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/a6d9ad9d5629488db29d6d6c8713cf6c/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Cam 112 Type Beaker</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Fragment from a Cam 112 type beaker, a distinctive form of Roman pottery dating to the 1st-2nd century AD.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/fragment-from-cam-112-type-beaker-a6d9ad9d5629488db29d6d6c8713cf6c" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/cam-112-beaker"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Fragment from Cam 112 Type Beaker (Second) - #13 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Fragment from Cam 112 Type Beaker"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/6bf48cc97d3c4cfd8c0d5acfdfe45123/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Cam 112 Type Beaker II</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Another fragment from a Cam 112 type beaker, showing different decorative elements and construction details.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/fragment-from-cam-112-type-beaker-6bf48cc97d3c4cfd8c0d5acfdfe45123" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/cam-112-beaker-2"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Copper Alloy Brooch - #14 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Copper Alloy Brooch"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/f57ead2f553a4d01831a6674b70a8a60/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Copper Alloy Brooch</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Copper alloy brooch used for fastening clothing, demonstrating Roman metalworking and fashion.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/copper-alloy-brooch-f57ead2f553a4d01831a6674b70a8a60" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/copper-brooch"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Bone Gaming Counter - #15 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Bone Gaming Counter"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/d18670bb704d4db5b9845ead98f6e2f1/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Bone Gaming Counter</h3>
                <p className="mt-1 text-xs text-muted-foreground">Roman Period</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Bone gaming counter used in Roman board games, evidence of leisure activities in Roman Britain.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/bone-gaming-counter-d18670bb704d4db5b9845ead98f6e2f1" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/gaming-counter"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Worked Flint - #16 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="p-3">
                <div className="sketchfab-embed-wrapper relative pb-[100%]">
                  <iframe
                    title="Worked Flint"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src="https://sketchfab.com/models/8df9ab499a674dc1be334fdb169ec1d6/embed"
                    className="absolute inset-0 w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Worked Flint</h3>
                <p className="mt-1 text-xs text-muted-foreground">Prehistoric</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Worked flint tool showing evidence of knapping techniques used in prehistoric tool production.
                </p>
                <div className="mt-3 text-xs">
                  <a href="https://sketchfab.com/3d-models/worked-flint-8df9ab499a674dc1be334fdb169ec1d6" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                    View on Sketchfab
                  </a>
                </div>
                <Link
                  href="/digital-museum/worked-flint"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
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
