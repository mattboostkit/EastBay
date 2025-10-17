import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Heart, Users, Brain, Sparkles, BookOpen, Home, Coffee, Music, Palette } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { fetchDementiaResourceByType } from '@/lib/sanity.unified'

export const metadata: Metadata = {
  title: 'Dementia Friendly Sessions | East Wear Bay Archaeological Project',
  description: 'Accessible archaeology sessions designed for people with dementia, using sensory engagement and hands-on activities to connect with local heritage.',
}

// Revalidate every 60 seconds to ensure fresh data
export const revalidate = 60

export default async function DementiaResourcesPage() {
  const activityGuide = await fetchDementiaResourceByType('activity-guide')
  const conversationPrompts = await fetchDementiaResourceByType('conversation-prompts')
  const objectHandlingGuide = await fetchDementiaResourceByType('object-handling-guide')
  return (
    <>
      <PageHero
        title="Dementia Friendly Sessions"
        description="Creating meaningful connections to local heritage through accessible archaeology sessions designed for people living with dementia."
        icon={Heart}
        variant="image"
        backgroundImage="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Dementia%20Friendly/Banner.webp?updatedAt=1760086932607"
      />

      <div className="container py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bronze-700 to-bronze-900 bg-clip-text text-transparent">
              Memory Through Objects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our dementia-friendly sessions explore archaeology through sensory engagement with artefacts
              and craft activities to help stimulate conversation and the exchange of stories.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-bronze-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Dementia%20Friendly/Sensory%20exploration.webp?updatedAt=1760086931867"
                  alt="Sensory exploration with archaeological artefacts"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Sensory Exploration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on experiences with real archaeological artefacts, encouraging tactile exploration
                  and sensory engagement to trigger memories and conversations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Dementia%20Friendly/Creative%20activities.webp?updatedAt=1760086933245"
                  alt="Creative activities with pottery"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Creative Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Craft workshops inspired by archaeological techniques, including pottery decoration,
                  mosaic making, and other activities adapted for different abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Dementia%20Friendly/Story%20telling.webp?updatedAt=1760086932422"
                  alt="Storytelling session with artefacts"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Storytelling Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sharing local history and personal memories through objects, photographs, and
                  archaeological discoveries, creating connections between past and present.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Dementia%20Friendly/Outreach%20visits.webp?updatedAt=1760087078089&tr=w-748%2Ch-655%2Cfo-custom%2Ccm-extract"
                  alt="Informal session with participants"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Informal Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Relaxed, small-group sessions in comfortable settings, with refreshments and
                  a welcoming atmosphere that encourages participation at each person's own pace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Dementia%20Friendly/Outreach%20visits.webp?updatedAt=1760087078089&tr=w-748%2Ch-655%2Cfo-custom%2Ccm-extract"
                  alt="Outreach visit to care home"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Outreach Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We can bring sessions to care homes, day centres, and community groups,
                  adapting our activities to suit your venue and participants' needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Dementia%20Friendly/Resource%20packs.webp?updatedAt=1760086932531"
                  alt="Resource packs and materials"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Resource Packs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Downloadable resources and loan boxes for families and carers, including activity ideas,
                  conversation prompts, and sensory story materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16 bg-sand-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Archaeological Engagement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-bronze-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Stimulates Memories</h3>
                <p className="text-sm text-muted-foreground">
                  Objects and activities can trigger long-term memories and encourage conversation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-bronze-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Promotes Social Interaction</h3>
                <p className="text-sm text-muted-foreground">
                  Group activities encourage conversation and connection with others.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-bronze-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Sensory Engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Tactile experiences with objects provide multi-sensory stimulation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-bronze-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Sense of Achievement</h3>
                <p className="text-sm text-muted-foreground">
                  Creative activities provide opportunities for success and pride.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-bronze-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Cultural Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Links to local history create meaningful connections to place and community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-bronze-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Reduces Anxiety</h3>
                <p className="text-sm text-muted-foreground">
                  Calm, structured activities in a supportive environment promote wellbeing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources for Download */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Resources for Families & Carers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-bronze-200">
              <CardHeader>
                <CardTitle>Activity Guide</CardTitle>
                <CardDescription>
                  Ideas for archaeological-themed activities to try at home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A collection of simple, engaging activities using everyday objects to explore history and archaeology together.
                </p>
                {activityGuide && activityGuide.pdfFile?.asset?.url ? (
                  <a
                    href={activityGuide.pdfFile.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF Guide
                  </a>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    <Download className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="border-bronze-200">
              <CardHeader>
                <CardTitle>Conversation Prompts</CardTitle>
                <CardDescription>
                  Questions and topics to encourage memories and discussion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Conversation starters linked to archaeological and historical themes, designed to prompt memories and encourage storytelling.
                </p>
                {conversationPrompts && conversationPrompts.pdfFile?.asset?.url ? (
                  <a
                    href={conversationPrompts.pdfFile.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Prompt Cards
                  </a>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    <Download className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="border-bronze-200">
              <CardHeader>
                <CardTitle>Loan Boxes</CardTitle>
                <CardDescription>
                  Objects you can use to explore the past
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Borrow one of our dementia friendly loan boxes to help explore the past. The boxes contain items such as jigsaw puzzles, postcards and archaeological finds.
                </p>
                <Link href="/contact">
                  <Button className="w-full" variant="outline">
                    <Heart className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-bronze-200">
              <CardHeader>
                <CardTitle>Object Handling Guide</CardTitle>
                <CardDescription>
                  Tips for using objects to stimulate memories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Guidance on using household objects and photographs to create meaningful sensory experiences.
                </p>
                {objectHandlingGuide && objectHandlingGuide.pdfFile?.asset?.url ? (
                  <a
                    href={objectHandlingGuide.pdfFile.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </a>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    <Download className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "Being able to look at and hold thousands of years old pottery, listen to the information given and be able to share stories of their own relevant interests."
              </p>
              <footer className="text-sm font-semibold">— Care home staff member</footer>
            </blockquote>

            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "Taking really tactile objects for [people with dementia] to hold is a really positive thing and they really enjoy it."
              </p>
              <footer className="text-sm font-semibold">— CAT Engagement Team member</footer>
            </blockquote>

            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "That anyone whether they are young/old; (living with) dementia; have learning difficulties or…disabilities such as limited vision, restricted mobility or dexterity can learn about and enjoy history/ archaeology."
              </p>
              <footer className="text-sm font-semibold">— Lighthouse Dementia Café Coordinator</footer>
            </blockquote>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="bg-gradient-to-br from-bronze-700 to-bronze-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-bronze-100">
            We deliver sessions to care homes, day centres, and community groups across Kent.
            All sessions are free and adapted to meet your group's specific needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-bronze-800 hover:bg-bronze-50">
              <Heart className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </Link>
        </section>
      </div>
    </>
  )
}