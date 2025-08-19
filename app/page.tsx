import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ArtefactStructuredData, EventStructuredData } from '@/components/SEO/StructuredData';
import ArtefactCard from '@/components/ArtefactCard';
import { urlForImage } from '@/lib/sanity.unified';
import { fetchFeaturedArtefacts, fetchAllHomepageSections, fetchAllVideos } from '@/lib/sanity.unified';
import { urlFor } from '@/lib/sanity.client';
import { client } from '@/lib/sanity.client';
import { siteSettingsQuery } from '@/lib/queries/siteSettings';

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
  
  // Fetch site settings
  const siteSettings = await client.fetch(siteSettingsQuery);
  
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
        <Image
          src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Home-Hero.jpg?updatedAt=1755600476498"
          fill
          priority
          alt="East Wear Bay coastal view"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="container relative z-10 flex h-full flex-col items-start justify-center text-white">
          <div className="mb-6 flex items-center gap-4">
            {siteSettings?.logo ? (
              <Image
                src={urlFor(siteSettings.logo)?.url() || ''}
                alt={siteSettings.logo.alt || 'East Wear Bay Archaeological Project'}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full bg-white/10 p-2 backdrop-blur-sm"
                priority
              />
            ) : (
              <div className="h-20 w-20 rounded-full bg-white/10 p-2 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white/60 text-xs">Logo</span>
              </div>
            )}
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
                The East Wear Bay Archaeological Project is dedicated to excavating, recording, and preserving Folkestone Roman Villa and its surrounding archaeological landscape before it is lost to coastal erosion.
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
            <div className="relative rounded-lg overflow-hidden h-80 md:h-auto">
              <Image 
                src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Home-About.jpg?updatedAt=1755600476501"
                alt="Coastal view of East Wear Bay showing the archaeological site"
                fill
                className="object-cover"
              />
            </div>
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
              // If no artefacts are fetched, display Sketchfab embeds
              <>
                {/* Dog Skull - Best model #1 */}
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
                      <a href="https://sketchfab.com/3d-models/dog-skull-377115ce55264f6ebe7e605ed1e27014?utm_medium=embed&utm_campaign=share-popup&utm_content=377115ce55264f6ebe7e605ed1e27014" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Dog Skull
                      </a>
                      {" by "}
                      <a href="https://sketchfab.com/CATrust25?utm_medium=embed&utm_campaign=share-popup&utm_content=377115ce55264f6ebe7e605ed1e27014" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        CATrust25
                      </a>
                      {" on "}
                      <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=377115ce55264f6ebe7e605ed1e27014" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Sketchfab
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

                {/* Tusk Pendant - Best model #2 */}
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
                      <a href="https://sketchfab.com/3d-models/iron-age-or-roman-period-tusk-pendant-07bc66e33bbe4c3ab97beca7b2206ee1?utm_medium=embed&utm_campaign=share-popup&utm_content=07bc66e33bbe4c3ab97beca7b2206ee1" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Iron Age or Roman Period Tusk Pendant
                      </a>
                      {" by "}
                      <a href="https://sketchfab.com/CATrust25?utm_medium=embed&utm_campaign=share-popup&utm_content=07bc66e33bbe4c3ab97beca7b2206ee1" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        CATrust25
                      </a>
                      {" on "}
                      <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=07bc66e33bbe4c3ab97beca7b2206ee1" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Sketchfab
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

                {/* Flint Arrowhead */}
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
                      <a href="https://sketchfab.com/3d-models/flint-arrowhead-47f3d49d46f541dcb8778aee7e3e7627?utm_medium=embed&utm_campaign=share-popup&utm_content=47f3d49d46f541dcb8778aee7e3e7627" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Flint Arrowhead
                      </a>
                      {" by "}
                      <a href="https://sketchfab.com/CATrust25?utm_medium=embed&utm_campaign=share-popup&utm_content=47f3d49d46f541dcb8778aee7e3e7627" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        CATrust25
                      </a>
                      {" on "}
                      <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=47f3d49d46f541dcb8778aee7e3e7627" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Sketchfab
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
              </>
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
              View all outreach programmes
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
                    alt={communitySection.items[0].image.alt || "Children participating in the Digital Time Capsule programme"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="mt-4 text-xl font-bold">Digital Time Capsule</h3>
              <p className="mt-2 flex-grow text-muted-foreground">
                A youth engagement programme that allows local school children to consider the importance of objects and identity and to create digital records of objects they think are important to the modern world for future preservation.
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
                Our dementia-friendly sessions explore archaeology through sensory engagement with artefacts and by undertaking craft activities to help stimulate conversation and the exchange of stories.
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
            <div className="relative rounded-lg overflow-hidden h-80 md:h-auto">
              <Image 
                src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Home-Success.jpg?updatedAt=1755600476499"
                alt="Field school participants from July 2025 excavation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 id="field-school-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
                2025 Field School Success
              </h2>
              <div className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Completed July 2025
              </div>
              <p className="mt-6 text-lg">
                Our 2025 Field School (July 7-18) was a remarkable success with 22 participants from 5 countries joining us for two weeks of training, excavation and discovery.
              </p>
              <p className="mt-4 text-lg">
                Key achievements from this season include better definition of a significant boundary ditch that runs across the site and the discovery of a possible four-post granary structure.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Trained 22 students in excavation techniques</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Geophysical survey results show a series of possible features at Copt Point</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Excavation results provide a greater understanding of the Iron Age to Roman period transition</span>
                </li>
              </ul>
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
              {/* Video 1 */}
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/oTalhuo-5Pg"
                    title="East Wear Bay Archaeological Project Video"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">East Wear Bay Archaeological Project</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore our ongoing archaeological work at the East Wear Bay Roman villa site.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=oTalhuo-5Pg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Watch on YouTube
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/aoQk4uq6Ol4"
                    title="Community Archaeology at East Wear Bay"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Community Archaeology at East Wear Bay</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about our community engagement and educational programmes at the site.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=aoQk4uq6Ol4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Watch on YouTube
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
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
                    alt={newsSection.items[2].image.alt || "Students participating in education programme"}
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
                <h3 className="mt-2 text-xl font-bold">Education Programme Reaches 1,000 Local Students</h3>
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