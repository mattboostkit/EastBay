import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ArtefactStructuredData, EventStructuredData } from '@/components/SEO/StructuredData';
import ArtefactCard from '@/components/ArtefactCard';
import { urlForImage } from '@/lib/sanity.unified';
import { fetchFeaturedArtefacts, fetchAllHomepageSections, fetchAllVideos } from '@/lib/sanity.unified';
import { urlFor } from '@/lib/sanity.client';

export const metadata: Metadata = {
  title: 'East Wear Bay Project | Preserving Folkestone\'s Archaeological Heritage',
  description: 'Join our community archaeology project protecting the East Wear Bay archaeological landscape from coastal erosion through excavation, digital preservation, and public engagement.',
};

// Revalidate page every hour
export const revalidate = 3600;

export default async function Home() {
  // Fetch featured artefacts
  const featuredArtefacts = await fetchFeaturedArtefacts();
  
  // Fetch homepage sections from Sanity (for images only)
  const sections = await fetchAllHomepageSections();
  
  // Fetch videos
  const videos = await fetchAllVideos();
  
  // Find specific sections by their IDs
  const heroSection = sections.find((section: any) => section.sectionId === 'hero');
  const aboutSection = sections.find((section: any) => section.sectionId === 'about');
  const artefactsSection = sections.find((section: any) => section.sectionId === 'featured-artifacts');
  const communitySection = sections.find((section: any) => section.sectionId === 'community');
  const fieldSchoolSection = sections.find((section: any) => section.sectionId === 'field-school');
  const newsSection = sections.find((section: any) => section.sectionId === 'news');
  
  return (
    <>
      {/* Schema.org structured data */}
      <ArtefactStructuredData 
        name="Roman Pottery from East Wear Bay"
        description="1st Century CE pottery fragment discovered at the Folkestone Roman Villa site"
        image="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
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
      <section className="relative h-[60vh] overflow-hidden" aria-labelledby="hero-heading">
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
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/east-wear-bay-logo.png"
              alt="East Wear Bay Archaeological Project"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full bg-white/10 p-2 backdrop-blur-sm"
              priority
            />
            <h1 id="hero-heading" className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Preserving Folkestone's Heritage
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            A community archaeology project protecting the East Wear Bay Roman Villa and its surrounding archaeological landscape from coastal erosion through excavation, digital preservation, and public engagement.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/digital-museum" 
              className="rounded-md bg-white px-6 py-3 font-medium text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Explore Digital Museum
            </Link>
            <Link 
              href="/volunteer" 
              className="rounded-md bg-transparent px-6 py-3 font-medium text-white ring-1 ring-white hover:bg-white/10"
            >
              Volunteer With Us
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

      {/* Featured Artefacts Section */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="artefacts-heading">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 id="artefacts-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                Featured Artefacts
              </h2>
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                Explore our collection of digitally preserved artefacts from East Wear Bay.
              </p>
            </div>
            <Link href="/digital-museum" className="group inline-flex items-center gap-1 text-sm font-medium">
              View all artefacts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Display artefact cards */}
            {featuredArtefacts && featuredArtefacts.length > 0 ? (
              // If we have artefacts from Sanity, display them
              featuredArtefacts.slice(0, 3).map((artefact: any) => (
                <ArtefactCard key={artefact._id} artefact={artefact} />
              ))
            ) : (
              // If no artefacts are fetched, display placeholder cards
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
                      ?.url() || 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg'}
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
                      ?.url() || 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg'}
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
                      ?.url() || 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg'}
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

      {/* 2025 Field School Results Section */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="field-school-heading">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {fieldSchoolSection?.mainImage && (
              <div className="relative rounded-lg overflow-hidden h-80 md:h-auto">
                <Image 
                  src={urlForImage(fieldSchoolSection.mainImage)
                    ?.width(800)
                    ?.height(600)
                    ?.url() || 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg'}
                  alt={fieldSchoolSection.mainImage.alt || "Field school participants from July 2025 excavation"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h2 id="field-school-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                2025 Field School Success
              </h2>
              <div className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Completed July 2025
              </div>
              <p className="mt-6 text-lg">
                Our 2025 Field School (July 7-18) was a remarkable success with 24 participants from 8 countries joining us for two weeks of excavation and discovery.
              </p>
              <p className="mt-4 text-lg">
                Key achievements from this season include the discovery of a new section of the villa's eastern wing and several well-preserved Iron Age features beneath.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Uncovered 3 new rooms of the Roman villa</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Found over 200 pottery fragments and 15 coins</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Trained 24 participants in excavation techniques</span>
                </li>
              </ul>
              <div className="mt-8 flex gap-4">
                <Link 
                  href="/blog/field-school-2025-results" 
                  className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Read Full Report
                </Link>
                <Link 
                  href="/field-school/2026" 
                  className="rounded-md border border-primary px-6 py-3 font-medium text-primary shadow-sm hover:bg-primary/10"
                >
                  2026 Applications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="bg-background py-16 md:py-24" aria-labelledby="volunteer-heading">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="volunteer-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
              Be a Volunteer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Join us in preserving East Wear Bay's archaeological heritage. We welcome volunteers of all backgrounds and experience levels.
            </p>
            <div className="mt-8">
              <Link 
                href="/volunteer" 
                className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Volunteer Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      {videos && videos.length > 0 && (
        <section className="py-16 md:py-24" aria-labelledby="videos-heading">
          <div className="container">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end mb-8">
              <div>
                <h2 id="videos-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                  Watch Our Work
                </h2>
                <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                  Videos from our excavations and educational content
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {videos.slice(0, 2).map((video: any) => (
                <div key={video._id} className="rounded-lg border bg-card overflow-hidden">
                  {video.thumbnail && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={urlFor(video.thumbnail).width(800).height(450).url()}
                        alt={video.thumbnail.alt || video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="rounded-full bg-white p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
                    {video.duration && (
                      <p className="text-sm text-muted-foreground">
                        Duration: {video.duration}
                      </p>
                    )}
                    {video.externalVideo && (
                      <a 
                        href={video.externalVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline mt-4"
                      >
                        Watch on {video.externalVideo.includes('youtube') ? 'YouTube' : 'Vimeo'}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Onsite Blog Section */}
      <section className="bg-muted py-16 md:py-24" aria-labelledby="blog-heading">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 id="blog-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                Onsite Blog
              </h2>
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                Updates from our excavations and community projects
              </p>
            </div>
            <Link href="/blog" className="group inline-flex items-center gap-1 text-sm font-medium">
              View all posts
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
                      ?.url() || 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg'}
                    alt={newsSection.items[0].image.alt || "Mosaic floor discovery"}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              )}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    August 12, 2025
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Field School Uncovers Mosaic Floor</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  During the 2025 Field School, participants uncovered a remarkably well-preserved mosaic floor in the eastern wing of the Folkestone Villa.
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
                      ?.url() || 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg'}
                    alt={newsSection.items[1].image.alt || "Digital preservation equipment"}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              )}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    July 28, 2025
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
                      ?.url() || 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg'}
                    alt={newsSection.items[2].image.alt || "Students participating in education program"}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
              )}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    June 15, 2025
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
    </>
  );
}