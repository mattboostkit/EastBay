import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Heart, Users, Brain, Sparkles, BookOpen, Home, Coffee, Music, Palette } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Dementia Friendly Sessions | East Wear Bay Archaeological Project',
  description: 'Accessible archaeology sessions designed for people with dementia, using sensory engagement and hands-on activities to connect with local heritage.',
}

export default function DementiaResourcesPage() {
  return (
    <>
      <PageHero
        title="Dementia Friendly Sessions"
        description="Creating meaningful connections to local heritage through accessible archaeology sessions designed for people living with dementia."
        icon={Heart}
        variant="image"
        backgroundImage="https://ik.imagekit.io/boostkit/East-Wear-Bay/Community/Dementia_Friendly_Community_EWB.webp?updatedAt=1758121387444"
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
            <Card className="border-bronze-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze-100 mb-4">
                  <Brain className="h-6 w-6 text-bronze-600" />
                </div>
                <CardTitle>Sensory Exploration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on experiences with real archaeological artefacts, encouraging tactile exploration
                  and sensory engagement to trigger memories and conversations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze-100 mb-4">
                  <Palette className="h-6 w-6 text-bronze-600" />
                </div>
                <CardTitle>Creative Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Craft workshops inspired by archaeological techniques, including pottery decoration,
                  mosaic making, and other activities adapted for different abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze-100 mb-4">
                  <Music className="h-6 w-6 text-bronze-600" />
                </div>
                <CardTitle>Storytelling Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sharing local history and personal memories through objects, photographs, and
                  archaeological discoveries, creating connections between past and present.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze-100 mb-4">
                  <Coffee className="h-6 w-6 text-bronze-600" />
                </div>
                <CardTitle>Informal Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Relaxed, small-group sessions in comfortable settings, with refreshments and
                  a welcoming atmosphere that encourages participation at each person's own pace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze-100 mb-4">
                  <Home className="h-6 w-6 text-bronze-600" />
                </div>
                <CardTitle>Outreach Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We can bring sessions to care homes, day centres, and community groups,
                  adapting our activities to suit your venue and participants' needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bronze-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze-100 mb-4">
                  <BookOpen className="h-6 w-6 text-bronze-600" />
                </div>
                <CardTitle>Resource Packs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Downloadable resources for families and carers, including activity ideas,
                  conversation prompts, and sensory story materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How Sessions Work */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">How Our Sessions Work</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bronze-100 flex items-center justify-center text-bronze-700 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Welcome & Introduction</h3>
                    <p className="text-muted-foreground">
                      A gentle start with refreshments and informal chat, allowing participants to settle in comfortably.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bronze-100 flex items-center justify-center text-bronze-700 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Object Handling</h3>
                    <p className="text-muted-foreground">
                      Exploring real artefacts and replica objects through touch, encouraging sensory engagement and discussion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bronze-100 flex items-center justify-center text-bronze-700 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Creative Activity</h3>
                    <p className="text-muted-foreground">
                      Simple, enjoyable craft activities inspired by archaeological finds, adapted to different abilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bronze-100 flex items-center justify-center text-bronze-700 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sharing Stories</h3>
                    <p className="text-muted-foreground">
                      Encouraging participants to share their own memories and stories, creating connections between past and present.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://ik.imagekit.io/boostkit/East-Wear-Bay/Community/Dementia_Session_Activity.webp?updatedAt=1758121387444"
                alt="Dementia friendly session in progress"
                fill
                className="object-cover"
              />
            </div>
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
                  Objects and activities can trigger long-term memories and encourage reminiscence.
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
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF Guide
                </Button>
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
                  Conversation starters linked to archaeological themes, designed to prompt memories and encourage storytelling.
                </p>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Prompt Cards
                </Button>
              </CardContent>
            </Card>

            <Card className="border-bronze-200">
              <CardHeader>
                <CardTitle>Sensory Story: Roman Villa</CardTitle>
                <CardDescription>
                  An immersive story experience about life in Roman times
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A multi-sensory story with suggestions for props and activities to bring the Roman Villa to life.
                </p>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Story Pack
                </Button>
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
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Guide
                </Button>
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
                "The session was wonderful. My mother, who rarely engages with activities anymore,
                spent a full hour handling the pottery pieces and telling us stories about her childhood.
                It was magical to see her so animated."
              </p>
              <footer className="text-sm font-semibold">— Family member</footer>
            </blockquote>

            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "The CAT team are so patient and understanding. They create a warm, welcoming atmosphere
                where our residents feel valued and heard. The archaeological activities always generate
                lots of conversation and smiles."
              </p>
              <footer className="text-sm font-semibold">— Care home activity coordinator</footer>
            </blockquote>

            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "These sessions give participants a real sense of purpose. They're not just passive recipients
                - they're actively contributing their knowledge and memories to our understanding of local history."
              </p>
              <footer className="text-sm font-semibold">— Session facilitator</footer>
            </blockquote>

            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "The combination of tactile objects and creative activities works so well. Even those who
                struggle with verbal communication can participate fully through touch and making."
              </p>
              <footer className="text-sm font-semibold">— Dementia support worker</footer>
            </blockquote>
          </div>
        </section>

        {/* Book a Session */}
        <section className="bg-gradient-to-br from-bronze-700 to-bronze-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Book a Session for Your Group</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-bronze-100">
            We deliver sessions to care homes, day centres, and community groups across Kent.
            All sessions are free and adapted to meet your group's specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-bronze-800 hover:bg-bronze-50">
                <Heart className="h-5 w-5 mr-2" />
                Enquire About Sessions
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-bronze-300 text-bronze-100 hover:bg-bronze-800/20">
              <Download className="h-5 w-5 mr-2" />
              Download Information Pack
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}