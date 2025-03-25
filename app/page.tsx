import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ArtifactStructuredData, EventStructuredData } from '@/components/SEO/StructuredData';
import { NewsletterForm } from '@/components/NewsletterForm';
import ArtifactCard from '@/components/ArtifactCard';
import { urlForImage } from '@/lib/sanity.unified';
import { fetchFeaturedArtifacts, fetchAllHomepageSections } from '@/lib/sanity.unified';

export const metadata: Metadata = {
  title: 'East Wear Bay Project | Preserving Folkestone Roman Villa',
  description: 'Join our community archaeology project protecting the Folkestone Roman Villa from coastal erosion through excavation, digital preservation, and public engagement.',
};

// Revalidate page every hour
export const revalidate = 3600;

export default async function Home() {
  // Fetch featured artifacts
  const featuredArtifacts = await fetchFeaturedArtifacts();
  
  // Fetch homepage sections from Sanity (for images only)
  const sections = await fetchAllHomepageSections();
  
  // Find specific sections by their IDs
  const heroSection = sections.find((section: any) => section.sectionId === 'hero');
  const aboutSection = sections.find((section: any) => section.sectionId === 'about');
  const artifactsSection = sections.find((section: any) => section.sectionId === 'featured-artifacts');
  const communitySection = sections.find((section: any) => section.sectionId === 'community');
  const fieldSchoolSection = sections.find((section: any) => section.sectionId === 'field-school');
  const newsSection = sections.find((section: any) => section.sectionId === 'news');
  
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
        {heroSection?.backgroundImage && (
          <Image
            src={urlForImage(heroSection.backgroundImage)
              ?.width(1920)
              ?.height(1080)
              ?.url() || ''}
            fill
            priority
            alt={heroSection.backgroundImage.alt || "East Wear Bay coastal view"}
            className="object-cover object-center"
          />
        )}
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
            >
              Explore Digital Museum
            </Link>
            <Link 
              href="/field-school" 
              className="rounded-md bg-transparent px-6 py-3 font-medium text-white ring-1 ring-white hover:bg-white/10"
            >
              Join Our Field School
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background py-16 md:py-24" aria-labelledby="about-heading">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 id="about-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                About the East Wear Bay Project
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                The East Wear Bay Archaeological Project is dedicated to excavating, recording, and preserving the Folkestone Roman Villa and its surrounding archaeological landscape before it is lost to coastal erosion.
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Through a combination of professional archaeology, community involvement, and innovative digital technology, we're racing against time to document this important heritage site for future generations.
              </p>
              <div className="mt-8">
                <Link 
                  href="/about" 
                  className="inline-flex items-center text-lg font-medium text-primary"
                >
                  Learn more about our project
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
            {aboutSection?.mainImage && (
              <div className="relative rounded-lg overflow-hidden h-80 md:h-auto">
                <Image 
                  src={urlForImage(aboutSection.mainImage)
                    ?.width(800)
                    ?.height(600)
                    ?.url() || ''}
                  alt={aboutSection.mainImage.alt || "Coastal view of East Wear Bay showing the archaeological site"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Artifacts Section */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="artifacts-heading">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 id="artifacts-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                Featured Artifacts
              </h2>
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                Explore our collection of digitally preserved artifacts from the Folkestone Roman Villa
              </p>
            </div>
            <Link href="/digital-museum" className="group inline-flex items-center gap-1 text-sm font-medium">
              View all artifacts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Display artifact cards */}
            {featuredArtifacts && featuredArtifacts.length > 0 ? (
              // If we have artifacts from Sanity, display them
              featuredArtifacts.slice(0, 3).map((artifact: any) => (
                <ArtifactCard key={artifact._id} artifact={artifact} />
              ))
            ) : (
              // If no artifacts are fetched, display placeholder cards
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="rounded-lg border bg-card shadow-sm">
                  <div className="p-3">
                    <div className="relative pb-[100%] bg-muted flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <span>3D Model Placeholder</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">
                      {index === 0 ? "Roman Pottery Fragment" : 
                       index === 1 ? "Bronze Fibula Brooch" : 
                       "Roman Wall Painting Fragment"}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {index === 0 ? "1st-2nd Century CE" : 
                       index === 1 ? "3rd Century CE" : 
                       "2nd Century CE"}
                    </p>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {index === 0 ? "Decorated pottery fragment found in the eastern wing of the villa." : 
                       index === 1 ? "Well-preserved bronze brooch with decorative elements." : 
                       "Painted plaster fragment showing geometric patterns in red and blue."}
                    </p>
                    <Link 
                      href={index === 0 ? "/digital-museum/roman-pottery" : 
                            index === 1 ? "/digital-museum/bronze-fibula" : 
                            "/digital-museum/wall-painting"} 
                      className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                    >
                      View details
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="bg-background py-16 md:py-24" aria-labelledby="community-heading">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 id="community-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                Community Involvement
              </h2>
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                Engaging the local community through inclusive archaeological experiences
              </p>
            </div>
            <Link href="/community" className="group inline-flex items-center gap-1 text-sm font-medium">
              View all outreach programs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col">
              {communitySection?.items && communitySection.items[0]?.image && (
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={urlForImage(communitySection.items[0].image)
                      ?.width(800)
                      ?.height(400)
                      ?.url() || '/images/community/digital-time-capsule.jpg'}
                    alt={communitySection.items[0].image.alt || "Children participating in the Digital Time Capsule program"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="mt-4 text-xl font-bold">Digital Time Capsule</h3>
              <p className="mt-2 flex-grow text-muted-foreground">
                A youth engagement program that allows local schoolchildren to create digital records of artifacts, learning about both archaeology and technology.
              </p>
              <Link 
                href="/community/digital-time-capsule" 
                className="mt-4 inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-col">
              {communitySection?.items && communitySection.items[1]?.image && (
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={urlForImage(communitySection.items[1].image)
                      ?.width(800)
                      ?.height(400)
                      ?.url() || '/images/community/memory-objects.jpg'}
                    alt={communitySection.items[1].image.alt || "Elderly participants handling archaeological objects"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="mt-4 text-xl font-bold">Memory Through Objects</h3>
              <p className="mt-2 flex-grow text-muted-foreground">
                Our dementia-friendly sessions use archaeology to stimulate memory and conversation among elderly participants through object handling and storytelling.
              </p>
              <Link 
                href="/community/memory-through-objects" 
                className="mt-4 inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-col">
              {communitySection?.items && communitySection.items[2]?.image && (
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={urlForImage(communitySection.items[2].image)
                      ?.width(800)
                      ?.height(400)
                      ?.url() || '/images/community/folkestone-stories.jpg'}
                    alt={communitySection.items[2].image.alt || "Community members recording oral histories"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="mt-4 text-xl font-bold">Folkestone Stories</h3>
              <p className="mt-2 flex-grow text-muted-foreground">
                An oral history project collecting local memories and stories about East Wear Bay, creating a social history archive alongside the archaeological record.
              </p>
              <Link 
                href="/community/folkestone-stories" 
                className="mt-4 inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Field School Section */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="field-school-heading">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {fieldSchoolSection?.mainImage && (
              <div className="relative rounded-lg overflow-hidden h-80 md:h-auto">
                <Image 
                  src={urlForImage(fieldSchoolSection.mainImage)
                    ?.width(800)
                    ?.height(600)
                    ?.url() || '/images/field-school/meals.jpg'}
                  alt={fieldSchoolSection.mainImage.alt || "Field school participants enjoying a meal together"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h2 id="field-school-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                Join Our Field School
              </h2>
              <p className="mt-6 text-lg">
                The East Wear Bay International Field School offers hands-on archaeological experience for students and volunteers of all backgrounds and skill levels.
              </p>
              <p className="mt-4 text-lg">
                Whether you're a student seeking field experience, a local resident interested in your heritage, or simply an enthusiast wanting to try archaeology, we welcome your participation.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Learn professional excavation techniques</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Contribute to saving a site threatened by coastal erosion</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>No experience necessary - training provided</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  href="/field-school" 
                  className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Volunteer opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-background py-16 md:py-24" aria-labelledby="news-heading">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 id="news-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                Latest News
              </h2>
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                Updates from our excavations and community projects
              </p>
            </div>
            <Link href="/news" className="group inline-flex items-center gap-1 text-sm font-medium">
              View all news
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* News Item 1 */}
            <div className="flex flex-col rounded-lg border bg-card shadow-sm">
              {newsSection?.items && newsSection.items[0]?.image && (
                <div className="relative h-48">
                  <Image
                    src={urlForImage(newsSection.items[0].image)
                      ?.width(800)
                      ?.height(400)
                      ?.url() || '/images/news/mosaic-discovery.jpg'}
                    alt={newsSection.items[0].image.alt || "Mosaic floor discovery"}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              )}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    May 15, 2025
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Discovery of Intact Mosaic Floor</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  Our team has uncovered a remarkably well-preserved mosaic floor in the eastern wing of the Folkestone Villa, providing new insights into Roman domestic life.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="/news/mosaic-discovery" 
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex flex-col rounded-lg border bg-card shadow-sm">
              {newsSection?.items && newsSection.items[1]?.image && (
                <div className="relative h-48">
                  <Image
                    src={urlForImage(newsSection.items[1].image)
                      ?.width(800)
                      ?.height(400)
                      ?.url() || '/images/news/digital-preservation.jpg'}
                    alt={newsSection.items[1].image.alt || "Digital preservation equipment"}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              )}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    April 22, 2025
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Digital Preservation Project Receives Funding</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  The East Wear Bay Project has secured additional funding to expand our digital preservation efforts, allowing for comprehensive 3D documentation of artifacts.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="/news/digital-funding" 
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="flex flex-col rounded-lg border bg-card shadow-sm">
              {newsSection?.items && newsSection.items[2]?.image && (
                <div className="relative h-48">
                  <Image
                    src={urlForImage(newsSection.items[2].image)
                      ?.width(800)
                      ?.height(400)
                      ?.url() || '/images/news/education-program.jpg'}
                    alt={newsSection.items[2].image.alt || "Students participating in education program"}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              )}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    March 8, 2025
                  </span>
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
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
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
  );
}
