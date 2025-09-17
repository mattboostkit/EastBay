import { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { BookOpen, Download, Users, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sensory Stories | East Wear Bay Archaeological Project',
  description: 'Download our sensory story resources designed to make archaeology accessible for people with profound learning disabilities, autism, and dementia.',
}

export default function SensoryStoriesPage() {
  return (
    <>
      <PageHero
        title="Sensory Stories"
        description="Making archaeology accessible through multisensory storytelling experiences"
        icon={BookOpen}
      />

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
              <div className="rounded-lg border p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Special Educational Needs</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for schools and centres working with children and adults with profound,
                  complex and multiple learning disabilities.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Dementia Care Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Designed to stimulate memories and encourage engagement for people living with
                  dementia in care homes and day centres.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Early Years Education</h3>
                <p className="text-sm text-muted-foreground">
                  Engaging resources for nurseries and primary schools to introduce young children
                  to archaeology and local history.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Autism Support Groups</h3>
                <p className="text-sm text-muted-foreground">
                  Structured, predictable stories that provide a calming way to explore archaeology
                  for people on the autism spectrum.
                </p>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What's Included in Our Sensory Stories?</h2>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-6">
                <h3 className="font-semibold mb-2">The Story Book</h3>
                <p className="text-muted-foreground">
                  A beautifully illustrated story that takes readers on a journey through the
                  archaeological discoveries at East Wear Bay, written in simple, accessible language.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-6">
                <h3 className="font-semibold mb-2">Sensory Activities Guide</h3>
                <p className="text-muted-foreground">
                  Step-by-step instructions for creating multisensory experiences to accompany the
                  story, including suggestions for objects to touch, sounds to make, and activities to try.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-6">
                <h3 className="font-semibold mb-2">Visual Resources</h3>
                <p className="text-muted-foreground">
                  High-quality images and symbols that can be printed and used alongside the story
                  to support understanding and engagement.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-6">
                <h3 className="font-semibold mb-2">Facilitator Notes</h3>
                <p className="text-muted-foreground">
                  Guidance for parents, carers, teachers and support workers on how to use the
                  resources effectively with different groups.
                </p>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="mb-12">
            <div className="rounded-xl bg-gradient-to-br from-bronze-50 to-sand-50 border-2 border-bronze-200 p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Download Our Free Resources</h2>
              <p className="text-muted-foreground mb-6">
                All our sensory story resources are available to download free of charge.
                We believe everyone should have access to their local heritage.
              </p>
              <div className="space-y-4">
                <button
                  disabled
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white opacity-50 cursor-not-allowed"
                >
                  <Download className="h-5 w-5" />
                  Sensory Story Book (Coming Soon)
                </button>
                <p className="text-sm text-muted-foreground">
                  Our sensory story resources are currently being finalised and will be available
                  for download soon. Please check back or <Link href="/contact" className="text-primary hover:underline">contact us</Link> to
                  be notified when they're ready.
                </p>
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