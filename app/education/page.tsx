import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Users, Clock, Download, BookOpen, Activity, Video, GraduationCap, Microscope, Map, Globe, Sparkles } from 'lucide-react'
import { fetchAllEducationResources } from '@/lib/sanity.unified'
import { urlFor } from '@/lib/sanity.client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Education Resources | East Wear Bay Archaeological Project',
  description: 'Educational materials, learning resources, and school visit information for teachers and pupils exploring the Folkestone Roman Villa archaeology site.',
}

const resourceTypeIcons = {
  'lesson-plan': FileText,
  'activity': Activity,
  'video': Video,
  'guide': BookOpen,
  'worksheet': FileText,
  'presentation': FileText,
}

const ageGroupLabels = {
  'elementary': 'Primary School (5-11)',
  'middle-school': 'Secondary School (12-16)',
  'high-school': 'Sixth Form (17-18)',
  'undergraduate': 'Undergraduate',
  'graduate': 'Postgraduate',
  'adult': 'Adult/Continuing Education',
}

// Featured educational programs
const featuredPrograms = [
  {
    title: 'Virtual Site Tours',
    icon: Globe,
    description: 'Explore East Wear Bay through immersive 360° virtual tours with expert archaeological commentary.',
    link: '/education/virtual-tour',
    color: 'bg-blue-500',
    badge: 'New'
  },
  {
    title: 'Archaeological Methods',
    icon: Microscope,
    description: 'Learn professional excavation techniques through our comprehensive video workshop series.',
    link: '/education/methods',
    color: 'bg-green-500',
    badge: 'Popular'
  },
  {
    title: 'Interactive Timeline',
    icon: Map,
    description: 'Journey through 12,000 years of history with 3D models and primary sources.',
    link: '/timeline',
    color: 'bg-purple-500',
    badge: 'Interactive'
  },
  {
    title: 'Digital Museum',
    icon: Sparkles,
    description: 'Access our collection of 3D-scanned artifacts with detailed educational notes.',
    link: '/digital-museum',
    color: 'bg-orange-500',
    badge: 'Featured'
  }
]

// Learning pathways for different age groups
const learningPathways = [
  {
    age: 'Primary (KS2)',
    topics: ['Roman Daily Life', 'Archaeological Discovery', 'Local History'],
    activities: ['Artifact Handling', 'Virtual Dig', 'Create a Mosaic'],
    duration: '2-3 hours'
  },
  {
    age: 'Secondary (KS3-4)',
    topics: ['Roman Britain', 'Archaeological Methods', 'Heritage Conservation'],
    activities: ['Site Analysis', 'Dating Techniques', 'Digital Recording'],
    duration: 'Half day'
  },
  {
    age: 'A-Level & University',
    topics: ['Research Methods', 'Site Management', 'Digital Heritage'],
    activities: ['Data Analysis', '3D Modelling', 'Report Writing'],
    duration: 'Full day'
  }
]

export default async function EducationPage() {
  const resources = await fetchAllEducationResources()

  return (
    <>
      {/* Enhanced Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70 py-16 md:py-24 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 mb-6">
              <GraduationCap className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Education Hub</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Discover the Past,<br />Inspire the Future
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90">
              Engaging educational resources bringing 2,000 years of history to life through the archaeology of East Wear Bay
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="#programs"
                className="rounded-md bg-white px-6 py-3 font-medium text-primary shadow-lg hover:bg-gray-100 transition-colors"
              >
                Explore Resources
              </Link>
              <Link
                href="/contact"
                className="rounded-md border-2 border-white px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
              >
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-background">
            <path d="M0,64 C480,150 960,-30 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="border-b bg-background py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="mt-1 text-sm text-muted-foreground">Students Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="mt-1 text-sm text-muted-foreground">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="mt-1 text-sm text-muted-foreground">Learning Modules</div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container py-12">
        {/* Featured Programs Section */}
        <section id="programs" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Featured Educational Programs</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Interactive experiences designed to bring archaeology to life
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredPrograms.map((program) => {
              const Icon = program.icon
              return (
                <Link
                  key={program.title}
                  href={program.link}
                  className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
                >
                  <div className={`h-1 ${program.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`inline-flex rounded-lg ${program.color} p-3 text-white`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      {program.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {program.badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {program.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Learning Pathways */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Learning Pathways</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Tailored educational experiences for every age group
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {learningPathways.map((pathway) => (
              <div key={pathway.age} className="rounded-lg border bg-card p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">{pathway.age}</h3>
                  <Badge variant="outline" className="mt-2">
                    <Clock className="mr-1 h-3 w-3" />
                    {pathway.duration}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {pathway.topics.map((topic) => (
                        <li key={topic} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="mr-2 h-3 w-3 text-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Activities:</h4>
                    <ul className="space-y-1">
                      {pathway.activities.map((activity) => (
                        <li key={activity} className="flex items-center text-sm text-muted-foreground">
                          <Activity className="mr-2 h-3 w-3 text-primary" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* School Visits Section - Enhanced */}
        <section className="mb-16">
          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border p-8">
            <h2 className="text-2xl font-bold mb-4">School Visits & Workshops</h2>
            <p className="text-muted-foreground mb-6">
              Bring archaeology to life in your classroom with our expert-led sessions. School visits are subject to funding availability.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-5">
                <h3 className="text-lg font-semibold">Site Tours</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <Users className="mr-1 h-3 w-3" />
                    KS2-KS4
                  </Badge>
                  <Badge variant="secondary">
                    <Clock className="mr-1 h-3 w-3" />
                    2 hours
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Visit the active excavation site at East Wear Bay and learn about the archaeological process, how artefacts are discovered, and what they tell us about Roman Britain. Suitable for Key Stage 2-4 pupils. Available May-September.
                </p>
              </div>
              
              <div className="rounded-lg border p-5">
                <h3 className="text-lg font-semibold">Workshop Sessions</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <Users className="mr-1 h-3 w-3" />
                    KS2-KS5
                  </Badge>
                  <Badge variant="secondary">
                    <Clock className="mr-1 h-3 w-3" />
                    Half day
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Hands-on workshops where pupils can handle real artefacts, try archaeological techniques, and learn about Roman life. Can be delivered at your school or on-site. Tailored for different key stages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Resources */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Learning Resources</h2>
          {resources && resources.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource: any) => {
                const Icon = resourceTypeIcons[resource.resourceType as keyof typeof resourceTypeIcons] || FileText
                
                return (
                  <Card key={resource.-id} className="flex flex-col">
                    {resource.mainImage && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={urlFor(resource.mainImage).width(400).height(300).url()}
                          alt={resource.mainImage.alt || resource.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Icon className="h-5 w-5 text-primary" />
                        {resource.duration && (
                          <Badge variant="outline" className="text-xs">
                            <Clock className="mr-1 h-3 w-3" />
                            {resource.duration}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.ageGroup && (
                          <Badge variant="secondary" className="text-xs">
                            {ageGroupLabels[resource.ageGroup as keyof typeof ageGroupLabels]}
                          </Badge>
                        )}
                        {resource.subjects?.map((subject: string) => (
                          <Badge key={subject} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {resource.slug && (
                          <Link 
                            href={`/education/${resource.slug.current}`}
                            className="text-sm text-primary hover:underline inline-flex items-center"
                          >
                            View Resource
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        )}
                        {resource.fileUrl && (
                          <a 
                            href={resource.fileUrl}
                            className="text-sm text-primary hover:underline inline-flex items-center"
                            download
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Download
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Educational resources are being prepared. Please check back soon!</p>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section className="mt-16">
          <div className="rounded-lg border bg-muted/50 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Make an Enquiry</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              To arrange a school visit or educational workshop, please contact our Education Officer who will be happy to discuss your requirements and availability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a 
                href="https://www.canterburytrust.co.uk/copy-of-cat-box-loans-collection-1"
                target="-blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Loan a CAT Box
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}