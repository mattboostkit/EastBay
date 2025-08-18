import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Download, ExternalLink, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Research, Reports and Publications | East Wear Bay Archaeological Project',
  description: 'Academic research, scientific studies, and publications documenting the Folkestone Roman Villa excavation and its significance to Romano-British archaeology.',
}

export default function ResearchPage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Research, Reports and Publications</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Academic studies, scientific analysis, and publications documenting the Roman villa at East Wear Bay and its significance.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        {/* Search and Filter */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="search" 
              placeholder="Search publications..." 
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <option value="">All Categories</option>
              <option value="journal-articles">Journal Articles</option>
              <option value="reports">Technical Reports</option>
              <option value="book-chapters">Book Chapters</option>
              <option value="conference-papers">Conference Papers</option>
            </select>
            
            <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <option value="">All Years</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
        
        {/* Featured Publication */}
        <section className="mb-16">
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="relative h-[300px] w-full md:w-[200px] lg:w-[250px]">
                  <Image
                    src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                    alt="Cover of publication featuring architectural reconstruction of the Folkestone Villa"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Featured Publication
                    </span>
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      Journal Article
                    </span>
                    <span className="text-xs text-muted-foreground">Published Jan 2025</span>
                  </div>
                  
                  <h2 className="mt-3 text-2xl font-bold">The Folkestone Roman Villa: Architectural Development and Spatial Analysis</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Authors:</strong> Richards, E., Wilson, J., Chen, S., & Patel, R.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Journal:</strong> Britannia, Vol. 56, pp. 143-178
                  </p>
                  
                  <p className="mt-4 text-muted-foreground">
                    This paper presents the results of the 2022-2024 excavations at the East Wear Bay Roman villa, focusing on the architectural 
                    phasing and spatial organization of the complex. Using a combination of traditional archaeological methods and digital 
                    documentation techniques, we propose a revised chronology for the site's development from the late 1st century through 
                    the 4th century CE. The paper highlights the villa's unusual coastal location and discusses its role in cross-channel 
                    trade networks between Britain and Gaul.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="/research/villa-architecture-development"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                    >
                      Read summary
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    
                    <a
                      href="https://doi.org/10.1017/example.2025.001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent"
                    >
                      View on publisher site
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                    
                    <a
                      href="/downloads/richards_et_al_2025_folkestone_villa.pdf"
                      className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent"
                    >
                      Download PDF
                      <Download className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Publications */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Grey Literature Reports</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {/* Report 1 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-3/4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      Interim Report
                    </span>
                    <span className="text-xs text-muted-foreground">January 2012</span>
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold">Folkestone, East Wear Bay Roman villa: Interim report on excavations 2011</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Author:</strong> Keith Parfitt
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Published by:</strong> Canterbury Archaeological Trust Ltd
                  </p>
                  
                  <p className="mt-3 text-sm text-muted-foreground">
                    This interim report presents the findings from the 2011 excavation season at the East Wear Bay Roman villa site, 
                    including initial discoveries of the villa's structural remains and preliminary dating evidence.
                  </p>
                </div>
                
                <div className="flex items-center justify-end gap-2 md:w-1/4">
                  <a
                    href="/downloads/Parfitt_2012_EWB_Interim_Report.pdf"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    aria-label="Download PDF"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
            
            {/* Report 2 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-3/4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      Management Plan
                    </span>
                    <span className="text-xs text-muted-foreground">January 2021</span>
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold">EAST WEAR BAY FOLKESTONE ARCHAEOLOGICAL CONSERVATION MANAGEMENT PLAN</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Authors:</strong> Keith Parfitt and Andrew Richardson
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Published by:</strong> Canterbury Archaeological Trust Ltd
                  </p>
                  
                  <p className="mt-3 text-sm text-muted-foreground">
                    A comprehensive conservation management plan for the East Wear Bay archaeological site, outlining strategies for 
                    preservation, research priorities, and management of the site in the face of ongoing coastal erosion.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    Note: PDFs can be viewed directly in your browser or downloaded for offline reading.
                  </p>
                </div>
                
                <div className="flex items-center justify-end gap-2 md:w-1/4">
                  <a
                    href="/downloads/Parfitt_Richardson_2021_EWB_Management_Plan.pdf"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    aria-label="Download PDF"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Publications</h2>
          <div className="text-center py-12">
            <p className="text-muted-foreground">Academic publications are currently being prepared and will be added here soon.</p>
            <p className="mt-2 text-sm text-muted-foreground">Please check back for peer-reviewed articles and book chapters.</p>
          </div>
        </section>
        
        {/* Research Data */}
        <section className="mb-16">
          <div className="rounded-lg bg-muted p-8">
            <h2 className="text-2xl font-bold">Research Data</h2>
            <p className="mt-3 text-muted-foreground">
              As part of our commitment to open archaeology, we make our research data publicly available through our digital repository.
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-semibold">3D Models Archive</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Download 3D models of artefacts, architectural features, and site recordings from the East Wear Bay excavations.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/data/3d-models"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Access 3D models
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-semibold">Excavation Database</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Access our excavation database with context records, finds catalogues, and stratigraphic information from 2015-2024.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/data/excavation-database"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Access database
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-semibold">Environmental Data</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Environmental sampling data including pollen, soil chemistry, and paleobotanical analysis from the villa site.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/data/environmental"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Access environmental data
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-semibold">Coastal Erosion Monitoring</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Datasets from our coastal erosion monitoring program, including digital elevation models and erosion rate calculations.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/data/coastal-erosion"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Access erosion data
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}