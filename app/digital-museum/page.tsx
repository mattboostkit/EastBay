import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search, Layers, Filter } from 'lucide-react'
import { ModelViewer } from '@/components/ui/ModelViewer'

export const metadata: Metadata = {
  title: 'Digital Museum | 3D Artifacts from the Folkestone Roman Villa',
  description: 'Explore 3D digital models of artifacts discovered at the East Wear Bay Roman Villa, preserving these finds through digital technology before coastal erosion claims the site.',
}

export default function DigitalMuseumPage() {
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
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="search" 
              placeholder="Search artifacts..." 
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <option value="">All Periods</option>
                <option value="1st-century">1st Century CE</option>
                <option value="2nd-century">2nd Century CE</option>
                <option value="3rd-century">3rd Century CE</option>
                <option value="4th-century">4th Century CE</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-muted-foreground" />
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <option value="">All Categories</option>
                <option value="pottery">Pottery</option>
                <option value="tools">Tools</option>
                <option value="jewelry">Jewelry</option>
                <option value="coins">Coins</option>
                <option value="architectural">Architectural</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Featured Artifact */}
        <div className="mb-12 rounded-lg border bg-card shadow">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <ModelViewer 
                  src="https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed" 
                  title="Roman Pottery from East Wear Bay"
                  aspectRatio="square"
                />
              </div>
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Featured Artifact</span>
                <h2 className="mt-3 text-2xl font-bold">Roman Samian Ware Bowl</h2>
                <p className="mt-1 text-sm text-muted-foreground">Found in 2023 • Room 7 • Villa Complex</p>
                
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Period</p>
                    <p className="text-muted-foreground">Late 1st Century CE</p>
                  </div>
                  <div>
                    <p className="font-medium">Material</p>
                    <p className="text-muted-foreground">Terra Sigillata</p>
                  </div>
                  <div>
                    <p className="font-medium">Dimensions</p>
                    <p className="text-muted-foreground">Diameter: 15.8cm</p>
                  </div>
                  <div>
                    <p className="font-medium">Condition</p>
                    <p className="text-muted-foreground">Fragmented, 85% complete</p>
                  </div>
                </div>
                
                <p className="mt-4 text-muted-foreground">
                  This nearly complete Samian ware bowl from central Gaul demonstrates the villa occupants' 
                  access to high-quality imported goods. The decorated rim features a distinctive egg-and-dart
                  pattern typical of the period. The bowl was discovered during the 2023 field season in 
                  the dining room area of the villa complex.
                </p>
                
                <div className="mt-6">
                  <Link 
                    href="/digital-museum/samian-bowl"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    View detailed information
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Artifact Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Artifact 1 */}
          <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="p-3">
              <ModelViewer 
                src="https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed" 
                title="Roman Pottery from East Wear Bay"
                aspectRatio="square"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Roman Pottery Fragment</h3>
              <p className="mt-1 text-xs text-muted-foreground">1st Century CE</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                This well-preserved pottery fragment was discovered during excavations at the East Wear Bay site.
              </p>
              <Link 
                href="/digital-museum/roman-pottery" 
                className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                aria-label="View detailed information about the Roman pottery fragment"
              >
                View details
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Artifact 2 */}
          <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="p-3">
              <ModelViewer 
                src="https://sketchfab.com/models/7d625b3bcebb418496e7de44e3d555e7/embed" 
                title="Bronze Fibula brooch from the Roman period found at East Wear Bay"
                aspectRatio="square"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Bronze Fibula Brooch</h3>
              <p className="mt-1 text-xs text-muted-foreground">Late 2nd Century CE</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                This decorative bronze brooch shows the craftsmanship of Roman metalsmiths.
              </p>
              <Link 
                href="/digital-museum/bronze-fibula" 
                className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                aria-label="View detailed information about the Bronze Fibula brooch"
              >
                View details
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Artifact 3 */}
          <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="p-3">
              <ModelViewer 
                src="https://sketchfab.com/models/58d0a78e33b84df99a13316d765c9bce/embed" 
                title="Fragment of Roman wall painting from the Folkestone Villa site"
                aspectRatio="square"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Wall Painting Fragment</h3>
              <p className="mt-1 text-xs text-muted-foreground">2nd-3rd Century CE</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                This painted plaster fragment reveals the once-colorful interior decoration of the villa.
              </p>
              <Link 
                href="/digital-museum/wall-painting" 
                className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                aria-label="View detailed information about the Roman wall painting fragment"
              >
                View details
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Artifact 4 */}
          <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="p-3">
              <ModelViewer 
                src="https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed" 
                title="Roman coin found at the Folkestone Villa excavation"
                aspectRatio="square"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Roman Coin</h3>
              <p className="mt-1 text-xs text-muted-foreground">3rd Century CE</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                A bronze coin featuring Emperor Claudius Gothicus, found in the villa's courtyard.
              </p>
              <Link 
                href="/digital-museum/roman-coin" 
                className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                aria-label="View detailed information about the Roman coin"
              >
                View details
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Artifact 5 */}
          <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="p-3">
              <ModelViewer 
                src="https://sketchfab.com/models/7d625b3bcebb418496e7de44e3d555e7/embed" 
                title="Bone hairpin from the Folkestone Roman Villa"
                aspectRatio="square"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Bone Hairpin</h3>
              <p className="mt-1 text-xs text-muted-foreground">2nd Century CE</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                A finely carved bone hairpin used by a woman living at the villa for personal grooming.
              </p>
              <Link 
                href="/digital-museum/bone-hairpin" 
                className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                aria-label="View detailed information about the bone hairpin"
              >
                View details
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Artifact 6 */}
          <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="p-3">
              <ModelViewer 
                src="https://sketchfab.com/models/58d0a78e33b84df99a13316d765c9bce/embed" 
                title="Glass vessel fragment from the Folkestone Roman Villa"
                aspectRatio="square"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Glass Vessel Fragment</h3>
              <p className="mt-1 text-xs text-muted-foreground">Late 2nd Century CE</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                A delicate blue-green glass fragment from an imported drinking vessel.
              </p>
              <Link 
                href="/digital-museum/glass-fragment" 
                className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                aria-label="View detailed information about the glass vessel fragment"
              >
                View details
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Artifact 7 */}
          <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="p-3">
              <ModelViewer 
                src="https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed" 
                title="Iron stylus used for writing on wax tablets at the Folkestone Villa"
                aspectRatio="square"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Iron Stylus</h3>
              <p className="mt-1 text-xs text-muted-foreground">2nd-3rd Century CE</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                A writing implement used by the villa residents, indicating literacy among the household.
              </p>
              <Link 
                href="/digital-museum/iron-stylus" 
                className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                aria-label="View detailed information about the iron stylus"
              >
                View details
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Artifact 8 */}
          <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="p-3">
              <ModelViewer 
                src="https://sketchfab.com/models/7d625b3bcebb418496e7de44e3d555e7/embed" 
                title="Ceramic oil lamp found at the Folkestone Roman Villa"
                aspectRatio="square"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Ceramic Oil Lamp</h3>
              <p className="mt-1 text-xs text-muted-foreground">1st Century CE</p>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                A nearly complete oil lamp with decorative motifs used for household lighting.
              </p>
              <Link 
                href="/digital-museum/oil-lamp" 
                className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                aria-label="View detailed information about the ceramic oil lamp"
              >
                View details
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center">
          <nav className="flex items-center gap-1" aria-label="Pagination">
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm"
              aria-label="Go to previous page"
            >
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </span>
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground"
              aria-current="page"
            >
              1
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium text-foreground hover:bg-muted"
            >
              2
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium text-foreground hover:bg-muted"
            >
              3
            </a>
            <span className="inline-flex h-9 w-9 items-center justify-center text-sm">
              ...
            </span>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium text-foreground hover:bg-muted"
            >
              8
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm"
              aria-label="Go to next page"
            >
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}