import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Users, Compass } from 'lucide-react';
import { ArtefactStructuredData, EventStructuredData } from '@/components/SEO/StructuredData';
import ArtefactCard from '@/components/ArtefactCard';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { SectionDivider } from '@/components/SectionDivider';
import { urlForImage } from '@/lib/sanity.unified';
import { fetchFeaturedArtefacts, fetchAllHomepageSections, fetchAllVideos } from '@/lib/sanity.unified';
import { urlFor } from '@/lib/sanity.client';
import { client } from '@/lib/sanity.client';
import { siteSettingsQuery } from '@/lib/queries/siteSettings';

export const metadata: Metadata = {
  title: 'East Wear Bay Project | Preserving Folkestone\'s Archaeological Heritage',
  description: 'Join our community archaeology project protecting the East Wear Bay archaeological landscape from coastal erosion through excavation, digital preservation, and public engagement.',
};

// Revalidate page every 60 seconds for faster updates
export const revalidate = 60;

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

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-bronze-900 to-stone-900" aria-labelledby="hero-heading">
        <Image
          src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Home/Home_Cover_EWB.webp?updatedAt=1758121883167"
          fill
          priority
          alt="East Wear Bay coastal view"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" aria-hidden="true" />

        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />

        <div className="container relative z-10 flex h-full min-h-[85vh] flex-col items-center justify-center text-white">
          <div className="animate-fade-up text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-bronze-600/20 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-bronze-300" />
              <span className="text-sm font-medium text-bronze-100">Folkestone, Kent</span>
            </div>

            <h1 id="hero-heading" className="mb-6 max-w-4xl text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
              Preserving Folkestone's
              <span className="mt-2 block text-bronze-200">Archaeological Heritage</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-100 drop-shadow-lg md:text-2xl">
              Racing against coastal erosion to excavate, record, and preserve the East Wear Bay Roman Villa
              through community archaeology and cutting-edge digital technology.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/digital-museum"
                className="group btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <Compass className="h-5 w-5" />
                Explore Digital Museum
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/volunteer"
                className="btn-outline inline-flex items-center gap-2 border-2 px-8 py-4 text-lg text-white hover:bg-white/20"
              >
                <Users className="h-5 w-5" />
                Join Our Team
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold text-bronze-300">
                  <AnimatedCounter end={12000} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-gray-300">years of history</p>
              </div>
              <div className="animate-fade-up" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-bold text-bronze-300">
                  <AnimatedCounter end={5000} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-gray-300">Artefacts Preserved</p>
              </div>
              <div className="animate-fade-up" style={{animationDelay: '0.6s'}}>
                <div className="text-3xl font-bold text-bronze-300">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-gray-300">volunteers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="h-8 w-5 rounded-full border-2 border-white/40">
            <div className="mx-auto mt-2 h-2 w-1 animate-pulse rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* About Section - Enhanced */}
      <section className="bg-gradient-to-br from-sand-50 to-white py-20 md:py-32" aria-labelledby="about-heading">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
            <div className="animate-fade-up">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bronze-100 px-3 py-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-bronze-700">Our Mission</span>
              </div>
              <h2 id="about-heading" className="text-gradient-bronze text-4xl font-bold tracking-tight md:text-5xl">
                Racing Against Time
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                The East Wear Bay Archaeological Project is dedicated to excavating, recording, and preserving
                <span className="font-semibold text-bronze-600"> Folkestone Roman Villa</span> and its surrounding
                archaeological landscape before it is lost to coastal erosion.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                Through professional archaeology, community involvement, and innovative digital technology,
                we're documenting this important heritage site for future generations.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bronze-200">
                    <span className="text-sm font-bold text-bronze-700">1</span>
                  </div>
                  <p className="text-stone-600">Professional archaeological excavation and recording</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bronze-200">
                    <span className="text-sm font-bold text-bronze-700">2</span>
                  </div>
                  <p className="text-stone-600">Community engagement and educational programmes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bronze-200">
                    <span className="text-sm font-bold text-bronze-700">3</span>
                  </div>
                  <p className="text-stone-600">Digital preservation using 3D scanning technology</p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-lg bg-bronze-600 px-6 py-3 text-white transition-all hover:bg-bronze-700 hover:shadow-lg"
                >
                  Discover Our Story
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="card-archaeological overflow-hidden p-2">
                <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px]">
                  <Image
                    src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Home/Home_About_EWB.webp?updatedAt=1758121883165"
                    alt="Coastal view of East Wear Bay showing the archaeological site"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-bronze-200/40 blur-3xl" />
              <div className="absolute -top-4 -left-4 -z-10 h-32 w-32 rounded-full bg-copper-200/40 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="archaeological" />

      {/* Featured Artefacts Section - Enhanced */}
      <section className="bg-gradient-to-b from-stone-50 to-sand-50 py-20 md:py-32" aria-labelledby="artefacts-heading">
        <div className="container">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-copper-100 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-copper-700">Digital Museum</span>
            </div>
            <h2 id="artefacts-heading" className="text-gradient-copper text-4xl font-bold tracking-tight md:text-5xl">
              Featured Artefacts
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Explore our collection of digitally preserved artefacts, each telling a unique story
              from East Wear Bay's rich archaeological heritage.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
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
                <div className="card-archaeological hover-lift group">
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
                      <a href="https://sketchfab.com/3d-models/dog-skull-377115ce55264f6ebe7e605ed1e27014?utm-medium=embed&utm-campaign=share-popup&utm-content=377115ce55264f6ebe7e605ed1e27014" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Dog Skull
                      </a>
                      {" by "}
                      <a href="https://sketchfab.com/CATrust25?utm-medium=embed&utm-campaign=share-popup&utm-content=377115ce55264f6ebe7e605ed1e27014" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        CATrust25
                      </a>
                      {" on "}
                      <a href="https://sketchfab.com?utm-medium=embed&utm-campaign=share-popup&utm-content=377115ce55264f6ebe7e605ed1e27014" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
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


                {/* Flint Arrowhead */}
                <div className="card-archaeological hover-lift group">
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
                      <a href="https://sketchfab.com/3d-models/flint-arrowhead-47f3d49d46f541dcb8778aee7e3e7627?utm-medium=embed&utm-campaign=share-popup&utm-content=47f3d49d46f541dcb8778aee7e3e7627" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Flint Arrowhead
                      </a>
                      {" by "}
                      <a href="https://sketchfab.com/CATrust25?utm-medium=embed&utm-campaign=share-popup&utm-content=47f3d49d46f541dcb8778aee7e3e7627" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        CATrust25
                      </a>
                      {" on "}
                      <a href="https://sketchfab.com?utm-medium=embed&utm-campaign=share-popup&utm-content=47f3d49d46f541dcb8778aee7e3e7627" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
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

                {/* Ceramic Roman Figurine Fragment - Third artifact */}
                <div className="card-archaeological hover-lift group">
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
                    <p className="mt-1 text-xs text-muted-foreground">1st Century CE</p>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      Copper alloy brooch of the Hod Hill type, a distinctive style of Roman military brooch from the 1st century AD.
                    </p>
                    <div className="mt-3 text-xs">
                      <a href="https://sketchfab.com/3d-models/copper-alloy-hod-hill-type-brooch-52304a6789cd47d597e08ea929472563" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Hod Hill Type Brooch
                      </a>
                      {" by "}
                      <a href="https://sketchfab.com/CATrust25" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        CATrust25
                      </a>
                      {" on "}
                      <a href="https://sketchfab.com" target="_blank" rel="nofollow" className="font-bold text-primary hover:underline">
                        Sketchfab
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
              </>
            )}
          </div>
          {/* View All Artefacts Button */}
          <div className="mt-12 text-center">
            <Link
              href="/digital-museum"
              className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-bronze-600 to-bronze-700 px-8 py-3 text-white shadow-lg hover:from-bronze-700 hover:to-bronze-800 hover:shadow-xl transition-all duration-300 group"
            >
              <Compass className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">View All Artefacts</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Community Involvement Section - Enhanced */}
      <section className="bg-gradient-to-br from-white to-sand-50 py-20 md:py-32" aria-labelledby="community-heading">
        <div className="container">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bronze-100 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-bronze-700">Community</span>
            </div>
            <h2 id="community-heading" className="text-gradient-bronze text-4xl font-bold tracking-tight md:text-5xl">
              Community Involvement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Engaging the local community through inclusive archaeological experiences
              and innovative educational programmes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card-archaeological hover-lift group flex flex-col p-6">
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
              <h3 className="mt-4 text-2xl font-bold text-bronze-700 group-hover:text-bronze-800 transition-colors">Digital Time Capsule</h3>
              <p className="mt-3 flex-grow text-stone-600 leading-relaxed">
                A youth engagement programme that allows local school children to consider the importance of objects and identity and to create digital records of objects they think are important to the modern world for future preservation.
              </p>
              <div className="mt-6 text-bronze-600 font-semibold">
                Coming Soon
              </div>
            </div>

            <Link href="/learn/dementia-resources" className="card-archaeological hover-lift group flex flex-col p-6">
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
              <h3 className="mt-4 text-2xl font-bold text-bronze-700 group-hover:text-bronze-800 transition-colors">Memory Through Objects</h3>
              <p className="mt-3 flex-grow text-stone-600 leading-relaxed">
                Our dementia-friendly sessions explore archaeology through sensory engagement with artefacts and by undertaking craft activities to help stimulate conversation and the exchange of stories.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-bronze-600 font-semibold group-hover:text-bronze-700 transition-colors">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/folkestone-stories" className="card-archaeological hover-lift group flex flex-col p-6">
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
              <h3 className="mt-4 text-2xl font-bold text-bronze-700 group-hover:text-bronze-800 transition-colors">Folkestone Stories</h3>
              <p className="mt-3 flex-grow text-stone-600 leading-relaxed">
                An oral history project collecting local memories and stories about East Wear Bay, creating a social history archive alongside the archaeological record.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-bronze-600 font-semibold group-hover:text-bronze-700 transition-colors">
                Read Stories
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* 2025 Field School Results Section - Enhanced */}
      <section className="bg-gradient-to-br from-copper-50 to-sand-50 py-20 md:py-32" aria-labelledby="field-school-heading">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
            <div className="relative order-2 md:order-1">
              <div className="card-archaeological overflow-hidden p-2">
                <div className="relative h-96 overflow-hidden rounded-lg md:h-[500px]">
                  <Image
                    src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Home/Home_Success_EWB.webp?updatedAt=1758122032245"
                    alt="Field school participants from July 2025 excavation"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 -z-10 h-40 w-40 rounded-full bg-copper-200/40 blur-3xl" />
            </div>
            <div className="order-1 md:order-2 animate-fade-up">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-green-700">Completed July 2025</span>
              </div>
              <h2 id="field-school-heading" className="text-gradient-copper text-4xl font-bold tracking-tight md:text-5xl">
                2025 Field School Success
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-700">
                Our 2025 Field School (July 7-18) was a remarkable success with <span className="font-semibold text-copper-600">22 participants from 5 countries</span> joining us for two weeks of training, excavation and discovery.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                Key achievements from this season include better definition of a significant boundary ditch that runs across the site and the discovery of a possible four-post granary structure.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3 rounded-lg bg-white/80 p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-200">
                    <Users className="h-5 w-5 text-copper-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">22 International Students</p>
                    <p className="text-sm text-stone-600">Trained in professional excavation techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-white/80 p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-200">
                    <MapPin className="h-5 w-5 text-copper-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Copt Point Discoveries</p>
                    <p className="text-sm text-stone-600">Geophysical survey reveals new archaeological features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-white/80 p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-200">
                    <Calendar className="h-5 w-5 text-copper-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Iron Age to Roman Transition</p>
                    <p className="text-sm text-stone-600">New understanding of historical period changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="archaeological" />

      {/* Volunteer Section - Enhanced */}
      <section className="relative bg-gradient-to-b from-bronze-900 to-stone-900 py-20 md:py-32 overflow-hidden" aria-labelledby="volunteer-heading">
        <div className="absolute inset-0 bg-pattern-meander opacity-5" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bronze-600/20 px-4 py-2 backdrop-blur-sm">
              <Users className="h-4 w-4 text-bronze-300" />
              <span className="text-sm font-semibold uppercase tracking-wider text-bronze-200">Join Our Team</span>
            </div>
            <h2 id="volunteer-heading" className="text-5xl font-bold text-white md:text-6xl">
              Be Part of History
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-bronze-100">
              Join us in preserving East Wear Bay's archaeological heritage. We welcome volunteers of all backgrounds and experience levels.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/volunteer"
                className="group inline-flex items-center gap-2 rounded-lg bg-bronze-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-bronze-700 hover:shadow-xl"
              >
                <Users className="h-5 w-5" />
                Volunteer Opportunities
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/field-school"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-bronze-400 px-8 py-4 text-lg font-semibold text-bronze-100 transition-all hover:bg-bronze-800/20"
              >
                <Calendar className="h-5 w-5" />
                Field School 2026
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Videos Section - Enhanced */}
      {videos && videos.length > 0 && (
        <section className="bg-gradient-to-br from-sand-50 to-white py-20 md:py-32" aria-labelledby="videos-heading">
          <div className="container">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-copper-100 px-3 py-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-copper-700">Media</span>
              </div>
              <h2 id="videos-heading" className="text-gradient-copper text-4xl font-bold tracking-tight md:text-5xl">
                Watch Our Work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
                Explore our excavations and educational programmes through video
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Video 1 */}
              <div className="card-archaeological hover-lift overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/oTalhuo-5Pg"
                    title="Community Archaeology at East Wear Bay"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bronze-700 mb-2">Community Archaeology at East Wear Bay</h3>
                  <p className="text-stone-600 mb-4">
                    Learn about our community engagement and educational programmes at the site.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=oTalhuo-5Pg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-copper-600 font-semibold hover:text-copper-700 transition-colors"
                  >
                    Watch on YouTube
                    <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Video 2 */}
              <div className="card-archaeological hover-lift overflow-hidden">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/aoQk4uq6Ol4"
                    title="East Wear Bay Archaeological Project Video"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bronze-700 mb-2">East Wear Bay Archaeological Project</h3>
                  <p className="text-stone-600 mb-4">
                    Explore our ongoing archaeological work at the East Wear Bay Roman villa site.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=aoQk4uq6Ol4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-copper-600 font-semibold hover:text-copper-700 transition-colors"
                  >
                    Watch on YouTube
                    <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <SectionDivider variant="wave" />

      {/* Onsite Blog Section - Enhanced */}
      <section className="bg-gradient-to-b from-stone-50 to-sand-50 py-20 md:py-32" aria-labelledby="blog-heading">
        <div className="container">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bronze-100 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-bronze-700">Latest Updates</span>
            </div>
            <h2 id="blog-heading" className="text-gradient-bronze text-4xl font-bold tracking-tight md:text-5xl">
              Onsite Blog
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Stay updated with our latest discoveries, excavation progress, and community activities
            </p>
            <Link
              href="/news"
              className="mt-6 inline-flex items-center gap-2 text-bronze-600 font-semibold hover:text-bronze-700"
            >
              View all news
              <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Placeholder for news items - will be populated from CMS */}
            <div className="card-archaeological hover-lift flex flex-col overflow-hidden">
              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold text-bronze-700">Latest News Coming Soon</h3>
                <p className="mt-3 text-stone-600 leading-relaxed">
                  Check back soon for updates on our excavations, discoveries, and community events.
                </p>
              </div>
            </div>

            <div className="card-archaeological hover-lift flex flex-col overflow-hidden">
              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold text-bronze-700">Field School Updates</h3>
                <p className="mt-3 text-stone-600 leading-relaxed">
                  Information about our upcoming field school sessions and participant experiences will be shared here.
                </p>
              </div>
            </div>

            <div className="card-archaeological hover-lift flex flex-col overflow-hidden">
              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold text-bronze-700">Community Engagement</h3>
                <p className="mt-3 text-stone-600 leading-relaxed">
                  Stay informed about our outreach programs and how you can get involved with preserving local heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* National Lottery Heritage Fund Section */}
      <section className="bg-white py-12 md:py-16" aria-labelledby="funder-heading">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/National_Lottery_Circle.webp?updatedAt=1759393562842&tr=w-400,h-400"
                  alt="National Lottery Heritage Fund logo"
                  width={200}
                  height={200}
                  className="w-[200px] h-[200px]"
                />
              </div>
              <div>
                <h2 id="funder-heading" className="text-2xl font-bold text-stone-900 mb-4">
                  Supported by The National Lottery Heritage Fund
                </h2>
                <p className="text-stone-700 leading-relaxed">
                  The National Lottery Heritage Fund is the largest funder for the UK's heritage. Using money raised by National Lottery players we support projects that connect people and communities to heritage. Our vision is for heritage to be valued, cared for and sustained for everyone, now and in the future. From historic buildings, our industrial legacy and the natural environment, to collections, traditions, stories and more. Heritage can be anything from the past that people value and want to pass on to future generations. We believe in the power of heritage to ignite the imagination, offer joy and inspiration, and to build pride in place and connection to the past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}