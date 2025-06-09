<<<<<<< HEAD
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Updates | East Wear Bay Archaeological Project',
  description: 'Latest discoveries, field reports, and project updates from the Folkestone Roman Villa excavation at East Wear Bay.',
}

export default function NewsPage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">News & Updates</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Latest discoveries, field reports, and project updates from the East Wear Bay excavation.
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
              placeholder="Search news..." 
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <option value="">All Categories</option>
              <option value="field-reports">Field Reports</option>
              <option value="discoveries">New Discoveries</option>
              <option value="events">Events & Activities</option>
              <option value="project-updates">Project Updates</option>
            </select>
            
            <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <option value="">All Years</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
        
        {/* Featured News */}
        <div className="mb-12 rounded-lg border bg-card shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="relative h-60 md:col-span-2 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?fit=crop&w=800&h=600"
                alt="Archaeologists examining the newly discovered mosaic floor in Room 7 of the Folkestone Roman Villa"
                fill
                className="rounded-t-lg object-cover md:rounded-l-lg md:rounded-tr-none"
              />
            </div>
            <div className="p-6 md:col-span-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>May 15, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Featured
                </span>
                <span className="ml-2 rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                  New Discovery
                </span>
              </div>
              
              <h2 className="mt-3 text-2xl font-bold">Discovery of Intact Mosaic Floor in Eastern Wing</h2>
              <p className="mt-3 text-muted-foreground">
                Our excavation team has uncovered a remarkably well-preserved mosaic floor in the eastern wing of the Folkestone Villa. 
                The mosaic features a geometric pattern with marine motifs, providing new insights into the artistic tastes and wealth 
                of the villa's inhabitants during the late 2nd century CE.
              </p>
              <p className="mt-3 text-muted-foreground">
                The discovery is particularly significant as this section of the villa is at immediate risk from coastal erosion, with 
                current projections suggesting it could be lost within the next 2-3 years.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/mosaic-discovery"
                  className="inline-flex items-center text-primary"
                >
                  Read full article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* News Item 1 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1503602642458-232111445657?fit=crop&w=800&h=400"
                alt="3D scanning equipment being used to document artifacts from the East Wear Bay site"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>April 22, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Project Update
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">Digital Preservation Project Receives Additional Funding</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                The East Wear Bay Project has secured £75,000 in additional funding from the National Lottery Heritage Fund 
                to expand our digital preservation efforts, allowing for comprehensive 3D documentation of the site and artifacts.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/digital-funding"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 2 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?fit=crop&w=800&h=400"
                alt="Local schoolchildren participating in the East Wear Bay educational program"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>March 8, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Community
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">Education Program Reaches 1,000 Local Students</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Our outreach team has successfully engaged over 1,000 Folkestone students through innovative archaeology workshops 
                and site visits this school year, helping to foster a connection between young people and their local heritage.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/education-milestone"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 3 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1599254142659-436c697afb9a?fit=crop&w=800&h=400"
                alt="Conservation work being performed on a Roman pottery artifact in the laboratory"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>February 19, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Research
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">New Analysis Reveals Trade Connections with Gaul</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Scientific analysis of pottery found at East Wear Bay has revealed direct trade connections with specific 
                workshops in central Gaul, suggesting the villa's inhabitants maintained extensive commercial networks.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/trade-connections"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 4 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1551818176-60579e574b91?fit=crop&w=800&h=400"
                alt="Conference presentation about the East Wear Bay Project findings"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>January 25, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Publication
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">Research Paper Published in Britannia Journal</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                The East Wear Bay Project's research on the villa's architectural development has been published in 
                Britannia, the leading journal for Romano-British archaeology, highlighting the site's significance.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/britannia-publication"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 5 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?fit=crop&w=800&h=400"
                alt="Public open day with visitors exploring the East Wear Bay excavation site"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>December 10, 2024</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Events
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">2025 Field Season Dates Announced</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                We're excited to announce the dates for our 2025 excavation season, which will run from May 1 to September 30. 
                This season will focus on the eastern villa complex which is most threatened by erosion.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/2025-season-dates"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 6 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?fit=crop&w=800&h=400"
                alt="Aerial drone survey being conducted at the East Wear Bay site"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>November 15, 2024</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Field Report
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">Coastal Erosion Monitoring Shows Accelerated Cliff Loss</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Our latest coastal erosion survey indicates that cliff retreat has accelerated by 15% compared to previous years, 
                highlighting the urgency of our rescue archaeology mission at the Folkestone Villa site.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/erosion-monitoring"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
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
        
        {/* Newsletter */}
        <div className="mt-16 rounded-lg bg-primary p-8 text-primary-foreground">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold">Stay Updated</h2>
            <p className="mt-2">
              Subscribe to our newsletter to receive the latest discoveries, field reports, and event announcements from the East Wear Bay Project.
            </p>
            
            <form className="mt-6 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-white px-4 py-2 font-medium text-primary shadow-sm hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-xs opacity-80">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </>
  )
=======
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Updates | East Wear Bay Archaeological Project',
  description: 'Latest discoveries, field reports, and project updates from the Folkestone Roman Villa excavation at East Wear Bay.',
}

export default function NewsPage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">News & Updates</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Latest discoveries, field reports, and project updates from the East Wear Bay excavation.
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
              placeholder="Search news..." 
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <option value="">All Categories</option>
              <option value="field-reports">Field Reports</option>
              <option value="discoveries">New Discoveries</option>
              <option value="events">Events & Activities</option>
              <option value="project-updates">Project Updates</option>
            </select>
            
            <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <option value="">All Years</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
        
        {/* Featured News */}
        <div className="mb-12 rounded-lg border bg-card shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="relative h-60 md:col-span-2 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?fit=crop&w=800&h=600"
                alt="Archaeologists examining the newly discovered mosaic floor in Room 7 of the Folkestone Roman Villa"
                fill
                className="rounded-t-lg object-cover md:rounded-l-lg md:rounded-tr-none"
              />
            </div>
            <div className="p-6 md:col-span-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>May 15, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Featured
                </span>
                <span className="ml-2 rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                  New Discovery
                </span>
              </div>
              
              <h2 className="mt-3 text-2xl font-bold">Discovery of Intact Mosaic Floor in Eastern Wing</h2>
              <p className="mt-3 text-muted-foreground">
                Our excavation team has uncovered a remarkably well-preserved mosaic floor in the eastern wing of the Folkestone Villa. 
                The mosaic features a geometric pattern with marine motifs, providing new insights into the artistic tastes and wealth 
                of the villa's inhabitants during the late 2nd century CE.
              </p>
              <p className="mt-3 text-muted-foreground">
                The discovery is particularly significant as this section of the villa is at immediate risk from coastal erosion, with 
                current projections suggesting it could be lost within the next 2-3 years.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/mosaic-discovery"
                  className="inline-flex items-center text-primary"
                >
                  Read full article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* News Item 1 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1503602642458-232111445657?fit=crop&w=800&h=400"
                alt="3D scanning equipment being used to document artifacts from the East Wear Bay site"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>April 22, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Project Update
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">Digital Preservation Project Receives Additional Funding</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                The East Wear Bay Project has secured £75,000 in additional funding from the National Lottery Heritage Fund 
                to expand our digital preservation efforts, allowing for comprehensive 3D documentation of the site and artifacts.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/digital-funding"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 2 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?fit=crop&w=800&h=400"
                alt="Local schoolchildren participating in the East Wear Bay educational program"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>March 8, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Community
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">Education Program Reaches 1,000 Local Students</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Our outreach team has successfully engaged over 1,000 Folkestone students through innovative archaeology workshops 
                and site visits this school year, helping to foster a connection between young people and their local heritage.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/education-milestone"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 3 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1599254142659-436c697afb9a?fit=crop&w=800&h=400"
                alt="Conservation work being performed on a Roman pottery artifact in the laboratory"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>February 19, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Research
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">New Analysis Reveals Trade Connections with Gaul</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Scientific analysis of pottery found at East Wear Bay has revealed direct trade connections with specific 
                workshops in central Gaul, suggesting the villa's inhabitants maintained extensive commercial networks.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/trade-connections"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 4 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1551818176-60579e574b91?fit=crop&w=800&h=400"
                alt="Conference presentation about the East Wear Bay Project findings"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>January 25, 2025</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Publication
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">Research Paper Published in Britannia Journal</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                The East Wear Bay Project's research on the villa's architectural development has been published in 
                Britannia, the leading journal for Romano-British archaeology, highlighting the site's significance.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/britannia-publication"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 5 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?fit=crop&w=800&h=400"
                alt="Public open day with visitors exploring the East Wear Bay excavation site"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>December 10, 2024</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Events
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">2025 Field Season Dates Announced</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                We're excited to announce the dates for our 2025 excavation season, which will run from May 1 to September 30. 
                This season will focus on the eastern villa complex which is most threatened by erosion.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/2025-season-dates"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* News Item 6 */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?fit=crop&w=800&h=400"
                alt="Aerial drone survey being conducted at the East Wear Bay site"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>November 15, 2024</span>
                <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Field Report
                </span>
              </div>
              
              <h3 className="mt-3 text-xl font-bold">Coastal Erosion Monitoring Shows Accelerated Cliff Loss</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Our latest coastal erosion survey indicates that cliff retreat has accelerated by 15% compared to previous years, 
                highlighting the urgency of our rescue archaeology mission at the Folkestone Villa site.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/news/erosion-monitoring"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
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
        
        {/* Newsletter */}
        <div className="mt-16 rounded-lg bg-primary p-8 text-primary-foreground">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold">Stay Updated</h2>
            <p className="mt-2">
              Subscribe to our newsletter to receive the latest discoveries, field reports, and event announcements from the East Wear Bay Project.
            </p>
            
            <form className="mt-6 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-white px-4 py-2 font-medium text-primary shadow-sm hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-xs opacity-80">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </>
  )
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
}