import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Download, ExternalLink, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Research & Publications | East Wear Bay Archaeological Project',
  description: 'Academic research, scientific studies, and publications documenting the Folkestone Roman Villa excavation and its significance to Romano-British archaeology.',
}

export default function ResearchPage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Research & Publications</h1>
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
        
        {/* Research Themes */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Research Themes</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1584438602958-910d2511413d?fit=crop&w=800&h=400"
                  alt="Eroding cliff face at East Wear Bay showing archaeological layers"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">Coastal Heritage at Risk</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Investigating the impact of coastal erosion on archaeological sites and developing methodologies for recording heritage sites at risk.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/coastal-heritage"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    View research
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1554475659-287fb958a10e?fit=crop&w=800&h=400"
                  alt="Example of Roman villa architecture with floor plan overlaid"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">Romano-British Villa Economy</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Exploring the economic foundation, trade connections, and productive activities of Roman villas in southeast Britain.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/villa-economy"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    View research
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1590690737858-c903119e38b1?fit=crop&w=800&h=400"
                  alt="Digital archaeology equipment scanning artifacts"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">Digital Preservation Methods</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Developing and evaluating digital techniques for archaeological recording, documentation, and virtual presentation.
                </p>
                <div className="mt-4">
                  <Link
                    href="/research/digital-methods"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    View research
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Publication */}
        <section className="mb-16">
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="relative h-[300px] w-full md:w-[200px] lg:w-[250px]">
                  <Image
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?fit=crop&w=800&h=1200"
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
          <h2 className="mb-6 text-2xl font-bold">Recent Publications</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {/* Publication 1 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-3/4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      Journal Article
                    </span>
                    <span className="text-xs text-muted-foreground">Published Dec 2024</span>
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold">Coastal Erosion and Archaeological Loss: Quantifying Heritage Risk at East Wear Bay</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Authors:</strong> Wilson, J., Chen, S., & Ahmed, K.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Journal:</strong> Journal of Archaeological Science, Vol. 152, pp. 105789
                  </p>
                  
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    This paper presents the results of a five-year monitoring program at East Wear Bay, combining archaeological survey, 
                    LiDAR data, and climate modelling to quantify the rate of archaeological loss due to coastal erosion.
                  </p>
                </div>
                
                <div className="flex items-center justify-end gap-2 md:w-1/4">
                  <Link
                    href="/research/coastal-erosion-quantification"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read summary
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  
                  <a
                    href="/downloads/wilson_et_al_2024_coastal_erosion.pdf"
                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-input hover:bg-accent"
                    aria-label="Download PDF"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Publication 2 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-3/4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      Book Chapter
                    </span>
                    <span className="text-xs text-muted-foreground">Published Nov 2024</span>
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold">Romano-British Villas in Kent: Patterns of Distribution and Economic Integration</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Authors:</strong> Richards, E. & Davis, M.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>In:</strong> Taylor, S. (ed.) Rural Settlement in Roman Britain. Oxford University Press, pp. 187-214
                  </p>
                  
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    This chapter examines the distribution of Roman villas in Kent, analyzing their relationship to transport networks, 
                    natural resources, and urban centers, with the Folkestone Villa serving as a detailed case study.
                  </p>
                </div>
                
                <div className="flex items-center justify-end gap-2 md:w-1/4">
                  <Link
                    href="/research/kent-villas-distribution"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read summary
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  
                  <a
                    href="/downloads/richards_davis_2024_kent_villas.pdf"
                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-input hover:bg-accent"
                    aria-label="Download PDF"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Publication 3 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-3/4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      Journal Article
                    </span>
                    <span className="text-xs text-muted-foreground">Published Aug 2024</span>
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold">Digital Preservation of Archaeological Sites at Risk: A Methodological Framework</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Authors:</strong> Chen, S., Richards, E., & Smith, J.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Journal:</strong> Internet Archaeology, Vol. 59
                  </p>
                  
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    This paper presents a comprehensive framework for the digital preservation of archaeological sites at risk, 
                    using the East Wear Bay Project as a case study in implementing multi-method digital documentation strategies.
                  </p>
                </div>
                
                <div className="flex items-center justify-end gap-2 md:w-1/4">
                  <Link
                    href="/research/digital-preservation-framework"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read summary
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  
                  <a
                    href="/downloads/chen_et_al_2024_digital_preservation.pdf"
                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-input hover:bg-accent"
                    aria-label="Download PDF"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Publication 4 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-3/4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      Technical Report
                    </span>
                    <span className="text-xs text-muted-foreground">Published May 2024</span>
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold">East Wear Bay Excavation Report 2023: Eastern Wing of the Roman Villa</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Authors:</strong> East Wear Bay Project Team
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Published by:</strong> East Wear Bay Archaeological Project
                  </p>
                  
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    Detailed technical report of the 2023 excavation season, documenting the newly uncovered eastern wing of the villa 
                    complex, including room layouts, architectural features, and significant finds.
                  </p>
                </div>
                
                <div className="flex items-center justify-end gap-2 md:w-1/4">
                  <Link
                    href="/research/2023-excavation-report"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read summary
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  
                  <a
                    href="/downloads/ewb_excavation_report_2023.pdf"
                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-input hover:bg-accent"
                    aria-label="Download PDF"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Publication 5 */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-3/4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                      Conference Paper
                    </span>
                    <span className="text-xs text-muted-foreground">Published March 2024</span>
                  </div>
                  
                  <h3 className="mt-2 text-xl font-bold">Community Archaeology in Practice: Experiences from the East Wear Bay Project</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Authors:</strong> Richards, E., Wilson, J., & Parker, L.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong>Conference:</strong> Public Archaeology Conference 2024, York, UK
                  </p>
                  
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    This paper evaluates the community archaeology approaches implemented at East Wear Bay, assessing their impact on 
                    public engagement, volunteer retention, and the quality of archaeological data recovery.
                  </p>
                </div>
                
                <div className="flex items-center justify-end gap-2 md:w-1/4">
                  <Link
                    href="/research/community-archaeology-practice"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read summary
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  
                  <a
                    href="/downloads/richards_et_al_2024_community_archaeology.pdf"
                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-input hover:bg-accent"
                    aria-label="Download PDF"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="/research/publications"
              className="inline-flex items-center text-primary"
            >
              View all publications
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
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
                  Download 3D models of artifacts, architectural features, and site recordings from the East Wear Bay excavations.
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
                  Access our excavation database with context records, finds catalogs, and stratigraphic information from 2015-2024.
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
        
        {/* Research Collaboration */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Research Collaboration</h2>
          
          <div className="rounded-lg border bg-card p-6 md:p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">Join Our Research Community</h3>
                <p className="mt-3 text-muted-foreground">
                  The East Wear Bay Project welcomes research collaboration with academic institutions, individual researchers, and heritage organizations.
                </p>
                
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Access to excavation data and finds for research purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Opportunities for field research and specialist analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Support for PhD and Master's research projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Collaborative funding applications for research grants</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Link
                    href="/research/collaborate"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    Contact our research team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=800&h=600" 
                  alt="Research team collaborating on analysis of archaeological findings at East Wear Bay"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}