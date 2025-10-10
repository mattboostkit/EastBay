import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { BookOpen, Download, Users, Heart, ArrowRight } from 'lucide-react'
import { fetchAllSensoryStories } from '@/lib/sanity.unified'

export const metadata: Metadata = {
  title: 'Sensory Stories | East Wear Bay Archaeological Project',
  description: 'Download our sensory story resources designed to make archaeology accessible for people with profound learning disabilities, autism, and dementia.',
}

// Revalidate every 60 seconds to ensure fresh data
export const revalidate = 60

export default async function SensoryStoriesPage() {
  const sensoryStories = await fetchAllSensoryStories()
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Sensory%20Story/Sensory%20Story%20Banner.webp?updatedAt=1760085986542"
          alt="Sensory Stories - East Wear Bay"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <BookOpen className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Sensory Stories
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Making archaeology accessible through multisensory storytelling experiences
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Bringing the Past to Life Through the Senses</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our sensory story resources have been specially created to make the experience of archaeology
              accessible to everyone. These materials can be used to recreate archaeological discoveries
              through touch, sound, sight, and even smell.
            </p>
            <p className="text-muted-foreground">
              Whether you're working with people with profound and complex learning disabilities, young
              children, people with autism, or those living with dementia, these resources provide a way
              to connect with our shared heritage in a meaningful and engaging way.
            </p>
          </section>

          {/* Who Are These For */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Who Are These Resources For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Sensory%20Story/Special%20educational%20needs.webp?updatedAt=1760085986037"
                    alt="Special Educational Needs"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Special Educational Needs</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for schools and centres working with children and adults with profound,
                    complex and multiple learning disabilities.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Sensory%20Story/Dementia%20care%20settings.webp?updatedAt=1760085985894"
                    alt="Dementia Care Settings"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Dementia Care Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Designed to stimulate memories and encourage engagement for people living with
                    dementia in care homes and day centres.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Sensory%20Story/Early%20years%20education.webp?updatedAt=1760085986074"
                    alt="Early Years Education"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Early Years Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Engaging resources for nurseries and primary schools to introduce young children
                    to archaeology and local history.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Sensory%20Story/Autism%20support%20groups.webp?updatedAt=1760085985368"
                    alt="Autism Support Groups"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Autism Support Groups</h3>
                  <p className="text-sm text-muted-foreground">
                    Structured, predictable stories that provide a calming way to explore archaeology
                    for people on the autism spectrum.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How to Use Sensory Stories</h2>
            <div className="prose prose-stone max-w-none">
              <ol className="space-y-3">
                <li>
                  <strong>Prepare your space:</strong> Create a calm, comfortable environment with
                  minimal distractions. Gather any sensory objects you'll be using.
                </li>
                <li>
                  <strong>Read at the right pace:</strong> Take your time with each page, allowing
                  participants to fully experience each sensory element.
                </li>
                <li>
                  <strong>Encourage participation:</strong> Invite touch, movement, and vocalisation
                  where appropriate, but never force engagement.
                </li>
                <li>
                  <strong>Adapt as needed:</strong> Feel free to simplify or expand the story based
                  on your group's needs and responses.
                </li>
                <li>
                  <strong>Repeat and revisit:</strong> Familiarity builds comfort and engagement -
                  don't be afraid to use the story multiple times.
                </li>
              </ol>
            </div>
          </section>

          {/* Download Section */}
          <section className="mb-12">
            <div className="rounded-xl bg-gradient-to-br from-bronze-50 to-sand-50 border-2 border-bronze-200 p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Access Our Free Resources</h2>
              <p className="text-muted-foreground mb-6">
                All our sensory story resources are available to download free of charge.
                We believe everyone should have access to their local heritage.
              </p>
              {sensoryStories && sensoryStories.length > 0 ? (
                <div className="space-y-4">
                  {sensoryStories.map((story: any) => (
                    <a
                      key={story._id}
                      href={story.pdfFile?.asset?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90 transition-colors"
                    >
                      <Download className="h-5 w-5" />
                      {story.title}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Sensory stories will be available for download soon.
                </p>
              )}
              <div className="mt-8 pt-8 border-t border-bronze-200">
                <p className="text-muted-foreground mb-4">
                  We have specially made sensory story packs that are free to borrow from CAT. The packs contain everything you need to tell the story and a fully illustrated story book.
                </p>
                <a
                  href="https://www.canterburytrust.co.uk/general-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90 transition-colors"
                >
                  Order here
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="rounded-lg border bg-muted/50 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Support or Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              We're here to help you make the most of these resources. Whether you need advice on
              adapting the stories for your group or want to arrange a sensory session with our team,
              we'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}