import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ArrowRight, ScrollText, Group as UserGroup, Calendar } from 'lucide-react'
import { ModelViewer } from '@/components/ui/ModelViewer'
import { ArtifactStructuredData, EventStructuredData } from '@/components/SEO/StructuredData'
import { NewsletterForm } from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'East Wear Bay Project | Preserving Folkestone Roman Villa',
  description: 'Join our community archaeology project protecting the Folkestone Roman Villa from coastal erosion through excavation, digital preservation, and public engagement.',
  openGraph: {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578164614429-3b3ffa22f800?fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Archaeological excavation at East Wear Bay',
      },
    ],
  },
}

export default async function Home() {
  return (
    <>
      {/* Schema.org structured data */}
      <ArtifactStructuredData 
        name="Roman Pottery from East Wear Bay"
        description="1st Century CE pottery fragment discovered at the Folkestone Roman Villa site"
        image="/images/artifacts/roman-pottery.jpg"
        dateCreated="1st Century CE"
        url="/digital-museum/roman-pottery"
        material="Terracotta"
      />
      <EventStructuredData
        name="East Wear Bay Field School: Summer Session"
        description="Join our annual field school and learn archaeological techniques while helping excavate the Folkestone Roman Villa site."
        startDate="2025-07-05T09:00:00"
        location="East Wear Bay, Folkestone"
        url="/field-school/summer-session"
        organizer="East Wear Bay Project"
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden" aria-labelledby="hero-heading">
        <Image
          src="https://images.unsplash.com/photo-1578164614429-3b3ffa22f800?fit=crop&w=2000&h=1000"
          fill
          priority
          alt="Archaeological excavation at East Wear Bay with the Folkestone cliffs and English Channel in the background"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="container relative z-10 flex h-full flex-col items-start justify-center text-white">
          <h1 id="hero-heading" className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Preserving Folkestone's Roman Heritage
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            A community archaeology project protecting the East Wear Bay Roman Villa from coastal erosion through excavation, digital preservation, and public engagement.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/digital-museum" 
              className="rounded-md bg-white px-6 py-3 font-medium text-gray-900 shadow-sm hover:bg-gray-100"
              aria-label="Explore our digital museum of 3D artifacts from the Folkestone Roman Villa"
            >
              Explore Digital Museum
            </Link>
            <Link 
              href="/field-school" 
              className="rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10"
              aria-label="Learn about volunteer opportunities at our archaeological field school"
            >
              Join Our Field School
            </Link>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="container py-16 md:py-24" aria-labelledby="about-project-heading">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 id="about-project-heading" className="text-3xl font-bold tracking-tight md:text-4xl">About the East Wear Bay Project</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              The East Wear Bay Archaeological Project is dedicated to excavating, recording, and preserving the Folkestone Roman Villa and its surrounding archaeological landscape before it is lost to coastal erosion.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Through a combination of professional archaeology, community involvement, and innovative digital technology, we're racing against time to document this important heritage site for future generations.
            </p>
            <div className="mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center text-lg font-medium text-primary"
                aria-label="Learn more about the East Wear Bay Project's mission and history"
              >
                Learn more about our project
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-80 md:h-auto">
            <Image 
              src="https://images.unsplash.com/photo-1588506565838-cdd0a9f50cf9?fit=crop&w=800&h=600" 
              alt="Coastal view of East Wear Bay showing the archaeological site and the eroding cliff face"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Artifacts */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="featured-artifacts-heading">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 id="featured-artifacts-heading" className="text-3xl font-bold tracking-tight md:text-4xl">Featured Artifacts</h2>
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                Explore our collection of digitally preserved artifacts from the Folkestone Roman Villa
              </p>
            </div>
            <Link href="/digital-museum" className="group inline-flex items-center gap-1 text-sm font-medium" aria-label="View all artifacts in our digital museum">
              View all artifacts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Artifact 1 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="p-4">
                <ModelViewer 
                  src="https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed" 
                  title="Roman Pottery from East Wear Bay"
                  aspectRatio="square"
                />
              </div>
              <div className="p-4 pt-0">
                <h3 className="text-xl font-bold">Roman Pottery Fragment</h3>
                <p className="mt-1 text-sm text-muted-foreground">1st Century CE</p>
                <p className="mt-2 line-clamp-3 text-sm">
                  This well-preserved pottery fragment was discovered during excavations at the East Wear Bay site and provides evidence of trade networks between Britain and the continent.
                </p>
                <Link 
                  href="/digital-museum/roman-pottery" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  aria-label="View detailed information about the Roman pottery fragment"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Artifact 2 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="p-4">
                <ModelViewer 
                  src="https://sketchfab.com/models/7d625b3bcebb418496e7de44e3d555e7/embed" 
                  title="Bronze Fibula brooch from the Roman period found at East Wear Bay"
                  aspectRatio="square"
                />
              </div>
              <div className="p-4 pt-0">
                <h3 className="text-xl font-bold">Bronze Fibula Brooch</h3>
                <p className="mt-1 text-sm text-muted-foreground">Late 2nd Century CE</p>
                <p className="mt-2 line-clamp-3 text-sm">
                  This decorative bronze brooch shows the craftsmanship of Roman metalsmiths and gives insight into the personal adornment of the villa's inhabitants.
                </p>
                <Link 
                  href="/digital-museum/bronze-fibula" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  aria-label="View detailed information about the Bronze Fibula brooch"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Artifact 3 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="p-4">
                <ModelViewer 
                  src="https://sketchfab.com/models/58d0a78e33b84df99a13316d765c9bce/embed" 
                  title="Fragment of Roman wall painting from the Folkestone Villa site"
                  aspectRatio="square"
                />
              </div>
              <div className="p-4 pt-0">
                <h3 className="text-xl font-bold">Roman Wall Painting Fragment</h3>
                <p className="mt-1 text-sm text-muted-foreground">2nd-3rd Century CE</p>
                <p className="mt-2 line-clamp-3 text-sm">
                  This painted plaster fragment reveals the once-colorful interior decoration of the Folkestone Roman Villa, suggesting a residence of considerable wealth and status.
                </p>
                <Link 
                  href="/digital-museum/wall-painting" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  aria-label="View detailed information about the Roman wall painting fragment"
                >
                  View details
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="container py-16 md:py-24" aria-labelledby="community-involvement-heading">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 id="community-involvement-heading" className="text-3xl font-bold tracking-tight md:text-4xl">Community Involvement</h2>
            <p className="mt-2 text-lg text-muted-foreground md:text-xl">
              Engaging the local community through inclusive archaeological experiences
            </p>
          </div>
          <Link href="/community" className="group inline-flex items-center gap-1 text-sm font-medium" aria-label="Learn more about our community outreach programs">
            View all outreach programs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Community Item 1 */}
          <div className="flex flex-col rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?fit=crop&w=800&h=400"
                fill
                alt="Children participating in the Digital Time Capsule program, working with artifacts and technology"
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <h3 className="mt-2 text-xl font-bold">Digital Time Capsule</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A youth engagement program that allows local schoolchildren to create digital records of artifacts, learning about both archaeology and technology.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                href="/community/digital-time-capsule" 
                className="inline-flex items-center text-sm font-medium text-primary"
                aria-label="Learn more about the Digital Time Capsule project"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Community Item 2 */}
          <div className="flex flex-col rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?fit=crop&w=800&h=400"
                alt="A dementia-friendly session where elderly participants handle replica artifacts with assistance from project staff"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <h3 className="mt-2 text-xl font-bold">Memory Through Objects</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our dementia-friendly sessions use archaeology to stimulate memory and conversation among elderly participants through object handling and storytelling.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                href="/community/memory-through-objects" 
                className="inline-flex items-center text-sm font-medium text-primary"
                aria-label="Learn more about the Memory Through Objects program"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Community Item 3 */}
          <div className="flex flex-col rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1583778986347-89051948b5c6?fit=crop&w=800&h=400"
                alt="A workshop with diverse community members recording oral histories related to East Wear Bay"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <h3 className="mt-2 text-xl font-bold">Folkestone Stories</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                An oral history project collecting local memories and stories about East Wear Bay, creating a social history archive alongside the archaeological record.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                href="/community/folkestone-stories" 
                className="inline-flex items-center text-sm font-medium text-primary"
                aria-label="Learn more about the Folkestone Stories oral history project"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Field School */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="field-school-heading">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative rounded-lg overflow-hidden h-80 md:h-auto">
              <Image 
                src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?fit=crop&w=800&h=600" 
                alt="Students and volunteers participating in the East Wear Bay Field School, excavating the Roman villa site"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 id="field-school-heading" className="text-3xl font-bold tracking-tight md:text-4xl">Join Our Field School</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                The East Wear Bay International Field School offers hands-on archaeological experience for students and volunteers of all backgrounds and skill levels.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you're a student seeking field experience, a local resident interested in your heritage, or simply an enthusiast wanting to try archaeology, we welcome your participation.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Learn professional excavation techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Contribute to saving a site threatened by coastal erosion</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />
                  <span>No experience necessary - training provided</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  href="/field-school" 
                  className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                  aria-label="Learn about our field school and how to apply"
                >
                  Volunteer opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="container py-16 md:py-24" aria-labelledby="latest-news-heading">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 id="latest-news-heading" className="text-3xl font-bold tracking-tight md:text-4xl">Latest News</h2>
            <p className="mt-2 text-lg text-muted-foreground md:text-xl">
              Updates from our excavations and community projects
            </p>
          </div>
          <Link href="/news" className="group inline-flex items-center gap-1 text-sm font-medium" aria-label="View all news and updates">
            View all news
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
        
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* News Item 1 */}
          <div className="flex flex-col rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?fit=crop&w=800&h=400"
                fill
                alt="Recent excavation showing the newly discovered mosaic floor in Room 7 of the Roman villa"
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">May 15, 2025</span>
              </div>
              <h3 className="mt-2 text-xl font-bold">Discovery of Intact Mosaic Floor</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                Our team has uncovered a remarkably well-preserved mosaic floor in the eastern wing of the Folkestone Villa, providing new insights into Roman artistic traditions in Britain.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                href="/news/mosaic-discovery" 
                className="inline-flex items-center text-sm font-medium text-primary"
                aria-label="Read more about the mosaic floor discovery"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="flex flex-col rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1503602642458-232111445657?fit=crop&w=800&h=400"
                alt="3D scanning equipment being used to document artifacts from the East Wear Bay site"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">April 22, 2025</span>
              </div>
              <h3 className="mt-2 text-xl font-bold">Digital Preservation Project Receives Funding</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                The East Wear Bay Project has secured additional funding to expand our digital preservation efforts, allowing for comprehensive 3D documentation of the site and artifacts.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                href="/news/digital-funding" 
                className="inline-flex items-center text-sm font-medium text-primary"
                aria-label="Read more about the digital preservation funding"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="flex flex-col rounded-lg border bg-card shadow-sm">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?fit=crop&w=800&h=400"
                alt="Local schoolchildren participating in the East Wear Bay educational program"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">March 8, 2025</span>
              </div>
              <h3 className="mt-2 text-xl font-bold">Education Program Reaches 1,000 Local Students</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                Our outreach team has successfully engaged over 1,000 Folkestone students through innovative archaeology workshops and site visits this school year.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                href="/news/education-milestone" 
                className="inline-flex items-center text-sm font-medium text-primary"
                aria-label="Read more about our education program milestone"
              >
                Read more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24" aria-labelledby="newsletter-heading">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="newsletter-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-4 text-lg md:text-xl">
              Stay updated with our latest discoveries, field school opportunities, and community events at East Wear Bay.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}