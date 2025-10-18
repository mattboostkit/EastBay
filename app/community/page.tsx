import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight, Heart, Sparkles, BookOpen } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'Community & Outreach | East Wear Bay Archaeological Project',
  description: 'Discover our community archaeology programmes, educational outreach, and public engagement initiatives at the Folkestone Roman Villa site.',
}

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Community & Outreach"
        description="Engaging the public with archaeology and connecting communities to their local heritage through inclusive programmes and activities."
        icon={Users}
        variant="image"
        backgroundImage="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/Banner_Image_1Community_EWB.webp?updatedAt=1758123737163"
      />
      
      <div className="container py-12">
        {/* Community Principles */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bronze-700 to-bronze-900 bg-clip-text text-transparent">Our Community Principles</h2>
            <p className="mt-3 text-muted-foreground">
              At the East Wear Bay Project, we believe that archaeology belongs to everyone. Our community programmes are designed around three core principles:
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 p-6 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-bronze-800">Inclusivity</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Creating accessible opportunities for people of all ages, backgrounds, and abilities to engage with archaeology and heritage.
                </p>
              </div>
              
              <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 p-6 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-bronze-800">Co-creation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Involving local communities in shaping how we interpret, present, and share archaeological discoveries.
                </p>
              </div>
              
              <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 p-6 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-bronze-800">Relevance</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Connecting past and present to make archaeology meaningful to contemporary lives and local identity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Current Programmes */}
        <section className="mb-16">
          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bronze-700 to-bronze-900 bg-clip-text text-transparent">Current community outreach work and resources</h2>
            <p className="mt-2 text-muted-foreground">
              Discover the ways you can get involved with the East Wear Bay Project
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* School resources */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/SchoolsCommunity_EWB.webp?updatedAt=1758123743165"
                  fill
                  alt="School resources"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">School resources</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We have a range of different learning resources that you can use for Key Stage 1 and 2 children to learn about their local archaeology and heritage.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Age 4-11</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Downloads available</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href="/education"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Field School */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/Field%20schoolCommunity_EWB.webp?updatedAt=1758123737391"
                  alt="Field School"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Field School</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Book to join our archaeology field school for next summer and learn a range of practical archaeological field methods.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Age 18+</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href="/field-school"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Volunteering */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/VolunteersCommunity_EWB.webp?updatedAt=1758123742774"
                  alt="Volunteering"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Volunteering</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Join the project as a volunteer or register your interest. Volunteers may help with excavation, recording, finds processing, public engagement, and data processing.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Age 18+ unless accompanied by an adult</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sensory Stories */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/Sensory%20storiesCommunity_EWB.webp?updatedAt=1758123742880"
                  alt="Sensory Stories"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Sensory Stories</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Download our sensory story book, which can be used to recreate the experience of archaeology for people with profound, complex and multiple learning disabilities, young children, people with autism and those with dementia.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Any Age</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href="/learn/sensory-stories"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Download
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Dementia Friendly Sessions */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/DementiaCommunity_EWB.webp?updatedAt=1758123737298"
                  alt="Dementia Friendly Sessions"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Dementia Friendly Sessions</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We deliver dementia friendly sessions within our local community. These can involve informal finds handling sessions, sensory exploration of archaeology, craft workshops and more. Get in touch if your local group would like to take part or download some useful resources to help engage with someone you know that has dementia.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Contact us
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href="/learn/dementia-resources"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Pop-Up Dig Pit */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/Dig%20pitCommunity_EWB.webp?updatedAt=1758123737147"
                  alt="Pop-Up Dig Pit"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Pop-Up Dig Pit</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Subject to availability and location, we can bring our pop-up dig pit to an event or youth group near you. We may also be able to loan our dig pit to local community youth groups who want to learn more about archaeology.
                </p>

                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Contact us
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Outreach Work */}
        <section className="mb-16">
          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bronze-700 to-bronze-900 bg-clip-text text-transparent">Previous Outreach Work</h2>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
              Learn about the different ways that we have worked with the community to inspire others, and to educate, communicate, and demonstrate the value of our shared heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Excavation and Recording */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/ExcavationCommunity_EWB.webp?updatedAt=1758123738544"
                  fill
                  alt="Excavation and Recording"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Excavation and Recording</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We worked with over 120 site volunteers between 2023-2025, who helped to excavate and record the site to preserve it by record. Take a look at our reports and publications section to find out what we have learnt about the archaeology of East Wear Bay with the help of our valued volunteer team.
                </p>

                <div className="mt-4">
                  <Link
                    href="/research/publications"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Work Placements */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/PlacementsCommunity_EWB.webp?updatedAt=1758123742673"
                  fill
                  alt="Work Placements"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Work Placements</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We have provided work experience and on-the-job training to university and sixth form students throughout the project. This has included on-site supervisory placements as part of the field school for students from the University of Kent, CCCU and UCL. Sixth form students who are interested in pursuing a career in archaeology have also joined us on site for hands-on work experience placements and this has helped them with their future decision-making. We are always looking for corporate sponsors to help fund work experience placements, so please get in touch if you would like to help.
                </p>

                <div className="mt-4">
                  <Link
                    href="/partners"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Sponsor Us
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Filmmaking Project */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/FilmmakingCommunity_EWB.webp?updatedAt=1758123737289"
                  fill
                  alt="Filmmaking Project"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Filmmaking Project</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  With the help of a professional filmmaker, the East Wear Bay project provided filmmaking workshops for young people who are not in education, employment or training (NEET), and to students at the Beacon School who wanted to undertake work experience. The participants learnt skills to be able to make their own short film on the East Wear Bay project. These were then shown to their peers to celebrate the hard work they had put into their creations. We would love to continue with outreach projects such as this one as they provide young people with confidence, skills training and opportunities for collaborative working. If you would like to help fund initiatives like this one, please get in touch.
                </p>

                <div className="mt-4">
                  <Link
                    href="/partners"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Sponsor Us
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Archaeology and Identity Workshops */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/Arch%20and%20IdentityCommunity_EWB.webp?updatedAt=1758123736989"
                  fill
                  alt="Archaeology and Identity Workshops"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Archaeology and Identity Workshops</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Throughout January and February 2025, CAT ran a series of workshops at Canterbury Cathedral on the theme of archaeology and identity. This was a fantastic opportunity for members of the public to handle real archaeological finds and to learn more about how we interpret them. We hope that with future funding, we will be able to run more workshops like this. If you would like to help fund initiatives like this one, please get in touch.
                </p>

                <div className="mt-4">
                  <Link
                    href="/partners"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Sponsor Us
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Open Day Events */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/Open%20dayCommunity_EWB.webp?updatedAt=1758123742852"
                  fill
                  alt="Open Day Events"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Open Day Events</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  No excavation season would be complete without a site open day, and we run these regularly throughout excavation seasons. Not only are they fantastic opportunities to communicate the outcomes of the project to the public, but we make opens days interactive and collaborative too. We have hosted the Geologists Association, the Kent Downs Landscape team, mudlarks from London, metal detectorists, and other heritage professionals at these events to give people the chance to engage with their local history and landscape in new and interesting ways. Arts and crafts are always part of open day events, and we foster a family friendly environment whereby everyone can get involved.
                </p>
              </div>
            </div>

            {/* Co-Curated Exhibition */}
            <div className="group rounded-xl border-2 border-bronze-100 bg-gradient-to-br from-white to-sand-50 shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Community/ExhibitionCommunity_EWB.webp?updatedAt=1758123738346"
                  fill
                  alt="Co-Curated Exhibition"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bronze-800 group-hover:text-bronze-900 transition-colors">Co-Curated Exhibition</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  During September and October of 2024, we hosted an exhibition in Folkestone called 'A reflection of the self: the art and archaeology of East Wear Bay'. The exhibition aimed to explore how the past is reflected in the present and how we can interpret archaeology in ways that help us to understand the human experience throughout time. Local artists contributed work that was displayed alongside archaeological artefacts to enable storytelling and self-reflection. Recreated photographs of the 1924 excavations were just some of the artworks on display.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-bronze-700 to-bronze-900 bg-clip-text text-transparent">Our Impact</h2>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border-2 border-bronze-100 bg-white p-6 text-center shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold text-bronze-600">
                  <AnimatedCounter end={5000} suffix="+" duration={2000} />
                </div>
                <p className="mt-2 text-muted-foreground">Participants in community programmes annually</p>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-bronze-100 bg-white p-6 text-center shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold text-copper-600">
                  <AnimatedCounter end={1057} duration={2500} />
                </div>
                <p className="mt-2 text-muted-foreground">Primary pupils engaged across 36 in-school sessions and one assembly</p>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-bronze-100 bg-white p-6 text-center shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold text-stone-600">
                  <AnimatedCounter end={100} suffix="+" duration={2000} />
                </div>
                <p className="mt-2 text-muted-foreground">New community volunteers since 2023</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border-2 border-bronze-100 bg-white p-6 text-center shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold text-bronze-600">
                  <AnimatedCounter end={250} suffix="+" duration={2200} />
                </div>
                <p className="mt-2 text-muted-foreground">People from underserved audiences engaged including those with dementia, adults with disabilities and NEET young people</p>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-bronze-100 bg-white p-6 text-center shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold text-copper-600">
                  <AnimatedCounter end={1400} duration={2800} />
                </div>
                <p className="mt-2 text-muted-foreground">Members of the general public engaged through open days, workshops, community events and visits to the dig site and finds store</p>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-bronze-100 bg-white p-6 text-center shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold text-stone-600">
                  <AnimatedCounter end={350} duration={2000} />
                </div>
                <p className="mt-2 text-muted-foreground">Primary and secondary school pupils engaged in the Filmmaking Project and Digital Time Capsule</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Community Feedback</h3>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "Having a large open excavation readily visible to passers-by attracts attention and curiosity - allowing the excavation team to tell the story of the site to many different people."
                  </p>
                  <span className="text-sm text-muted-foreground">— Volunteer interview</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "As the first excavation I have ever participated in, I must say that the 2023 East Wear Bay dig has set a precedent that will not easily be beaten. I enjoyed the dig so much that I came back after my two weeks were finished, just to spend more time on the site. The sense of community I felt there was incredibly heartwarming, and despite my lack of experience, I was treated with understanding and kindness."
                  </p>
                  <span className="text-sm text-muted-foreground">— University of Kent field school student testimonial</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "I hope that it continues because it's a lovely project and that it's really a collision of two cultural worlds. Plus it is one of the only sites being researched in the northwestern Europe with the querns. It is very interesting in so many aspects and it would be a shame to see all this go into the abyss, to the sea."
                  </p>
                  <span className="text-sm text-muted-foreground">— Volunteer interview</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "More child friendly events like this please! It was such an excellent experience for me and my children."
                  </p>
                  <span className="text-sm text-muted-foreground">— Survey respondent attending the End of Season Open Afternoon</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "You don't need a uni degree to discover and understand history."
                  </p>
                  <span className="text-sm text-muted-foreground">— Fieldwork Volunteer</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "Understanding how important it is to preserve and learn as much as possible about the history of this site before it disappears via erosion!"
                  </p>
                  <span className="text-sm text-muted-foreground">— Fieldwork Volunteer</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "I have learnt more filming skills and editing skills in the filming project."
                  </p>
                  <span className="text-sm text-muted-foreground">— NEET young person survey respondent</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "On our WhatsApp group I am still getting messages from everyone saying how much they all enjoyed your presentation and the ability to be able to play with the artefacts, especially the mill, was a huge hit."
                  </p>
                  <span className="text-sm text-muted-foreground">— Nonington Farms home school group</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "They loved hearing the history, and realising that the history spoken of was local to Canterbury."
                  </p>
                  <span className="text-sm text-muted-foreground">— Teacher at St Thomas Primary School</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "We have just had our lesson delivered by Blake and it was incredibly well received by the young people. The young people were fully engaged and would have quite happily have listened for longer."
                  </p>
                  <span className="text-sm text-muted-foreground">— Teacher at Rosewood School SEN class</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "Not every volunteering opportunity teaches you how to record. This was a pleasant surprise from the East Wear Bay project because not only we were told how to draw sections plans, [CAT staff] actually took time to show us every detail."
                  </p>
                  <span className="text-sm text-muted-foreground">— Volunteer interviewee</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "All of the children had an amazing time and they learned a great deal which will feed in nicely to their other work at school... On the way back one of the girls said, 'this has been the best day of my whole life!' We are thrilled with how the day went, it was so well organised by you all! The children were kept safe throughout our time with you and the safety briefing was excellent."
                  </p>
                  <span className="text-sm text-muted-foreground">— Teacher from Haddon Dene School</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "I think from a social point of view, and sort of health and well-being point of view, being out in fresh air, you can't beat it really."
                  </p>
                  <span className="text-sm text-muted-foreground">— Volunteer interviewee</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "For me it was something to look forward to, something to take me out of work. It was a nice calming activity. So it definitely has helped with my mental health."
                  </p>
                  <span className="text-sm text-muted-foreground">— Volunteer interviewee</span>
                </blockquote>

                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "I've found out about other archaeological things going on in Kent. So I feel like my life is full. I feel like I'm engaged in the community. I'm engaged in life."
                  </p>
                  <span className="text-sm text-muted-foreground">— Volunteer interviewee</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        {/* Get Involved */}
        <section>
          <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-br from-bronze-700 to-bronze-900 p-8 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Get Involved</h2>
              <p className="mt-3 text-lg text-bronze-100">
                There are many ways to participate in the East Wear Bay Project, from hands-on archaeology to supporting our community programmes.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/field-school"
                  className="rounded-lg bg-white px-6 py-3 font-medium text-bronze-800 shadow-lg transition-all hover:bg-bronze-50 hover:shadow-xl hover:scale-105"
                >
                  Join our Field School
                </Link>

                <Link
                  href="/volunteer"
                  className="rounded-lg bg-white px-6 py-3 font-medium text-bronze-800 shadow-lg transition-all hover:bg-bronze-50 hover:shadow-xl hover:scale-105"
                >
                  Volunteer Opportunities
                </Link>

                <Link
                  href="/partners"
                  className="rounded-lg border-2 border-bronze-300 bg-transparent px-6 py-3 font-medium text-bronze-100 transition-all hover:bg-bronze-800/20 hover:border-bronze-200"
                >
                  Support the Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}