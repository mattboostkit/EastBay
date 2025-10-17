import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Users, Clock, Download, BookOpen, Activity, GraduationCap, Map, Sparkles, Package, Library, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fetchEducationResourcesByCategory, urlForImage } from '@/lib/sanity.unified'

export const metadata: Metadata = {
  title: 'Education Resources | East Wear Bay Archaeological Project',
  description: 'Engaging learning resources bringing 12,000 years of human history to life through the archaeology of East Wear Bay.',
}

// Helper to get file URL from Sanity
function getFileUrl(file: any): string | null {
  if (!file?.asset?.url) return null
  return file.asset.url
}

// Featured learning programmes
const featuredPrograms = [
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
    description: 'Explore our collection of 3D models and photographs of artefacts uncovered at East Wear Bay.',
    link: '/digital-museum',
    color: 'bg-orange-500',
    badge: 'Featured'
  },
  {
    title: 'Downloadable Lesson Plans',
    icon: FileText,
    description: 'Inspire your students with our free, downloadable lesson plans that explore archaeology and uncover the rich heritage in your local area.',
    link: '#resources',
    color: 'bg-blue-500',
    badge: 'Free'
  },
  {
    title: 'Digital Time Capsule',
    icon: Package,
    description: 'Explore the fascinating entries in our East Wear Bay digital time capsule, then inspire your class to create their own unique contributions.',
    link: '#digital-time-capsule',
    color: 'bg-green-500',
    badge: 'New'
  },
  {
    title: 'Sensory Stories',
    icon: Heart,
    description: 'Our immersive sensory story invites children with profound and complex disabilities to experience the thrill of an archaeological excavation.',
    link: '#sensory-story',
    color: 'bg-pink-500',
    badge: 'Inclusive'
  },
  {
    title: 'CAT Loan Boxes',
    icon: Library,
    description: 'Borrow a CAT Box packed with replica artefacts and hands-on learning resources—perfect for sparking curiosity and enriching your lessons.',
    link: 'https://www.canterburytrust.co.uk/copy-of-cat-box-loans-collection-1',
    color: 'bg-teal-500',
    badge: 'Popular',
    external: true
  },
  {
    title: 'Dementia Friendly Workshops',
    icon: Users,
    description: 'Get in touch to invite us to a dementia café or community group near you or explore our archaeology-themed workshop ideas.',
    link: '/learn/dementia-resources',
    color: 'bg-amber-500',
    badge: 'Community'
  }
]

// Icon mapping helper for resource types
function getResourceIcon(resourceType: string | undefined) {
  const iconMap: Record<string, any> = {
    'lesson-plan': FileText,
    'activity': Activity,
    'video': Sparkles,
    'guide': BookOpen,
    'worksheet': FileText,
    'presentation': FileText,
    'sensory-story': Heart,
    'workshop-guide': Users,
    'gallery': Package,
  }
  return iconMap[resourceType || 'lesson-plan'] || FileText
}

// Learning pathways for different age groups
const learningPathways = [
  {
    age: 'Primary KS1-2: History',
    learningOutcomes: [
      'Significant historical events, people and places in their own locality',
      'Changes within living memory. Where appropriate, these should be used to reveal aspects of change in national life',
      'Events beyond living memory that are significant nationally or globally',
      'Changes in Britain from the Stone Age to the Iron Age',
      'The Roman Empire and its impact on Britain',
      'A local history study',
      'A study of an aspect or theme in British history that extends pupils\' chronological knowledge beyond 1066'
    ],
    activities: [
      'Iron Age pottery making',
      'Roman mosaics',
      'Ancient flour making',
      'Change in the 20th Century',
      'Archaeology time machine',
      'Site visit'
    ]
  },
  {
    age: 'Primary KS1-2: Art and Design',
    learningOutcomes: [
      'To use a range of materials creatively to design and make products',
      'To develop a wide range of art and design techniques in using colour, pattern, texture, line, shape, form and space',
      'About the work of a range of artists, craft makers and designers, describing the differences and similarities between different practices and disciplines, and making links to their own work',
      'To improve their mastery of art and design techniques, including drawing, painting and sculpture with a range of materials [for example, pencil, charcoal, paint, clay]'
    ],
    activities: [
      'Roman mosaics',
      'Iron Age pottery making'
    ]
  },
  {
    age: 'Secondary KS3: History',
    learningOutcomes: [
      'Challenges for Britain, Europe and the wider world 1901 to the present day',
      'Local history study',
      'The study of an aspect or theme in British history that consolidates and extends pupils\' chronological knowledge from before 1066'
    ],
    activities: [
      'Change in the 20th Century',
      'The Romans in Folkestone'
    ]
  },
  {
    age: 'Secondary KS3: Citizenship',
    learningOutcomes: [
      'Develop an interest in, and commitment to, participation in volunteering as well as other forms of responsible activity, that they will take with them into adulthood',
      'The roles played by public institutions and voluntary groups in society, and the ways in which citizens work together to improve their communities, including opportunities to participate in school-based activities'
    ],
    activities: [
      'Site visit or archive visit'
    ]
  }
]

export default async function EducationPage() {
  // Fetch lesson plans from Sanity
  const lessonPlans = await fetchEducationResourcesByCategory('lesson-plans')

  // Fetch other resources from Sanity
  const otherResourcesFromSanity = await fetchEducationResourcesByCategory('other-resources')

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
              Engaging learning resources bringing 12,000 years of human history to life through the archaeology of East Wear Bay
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="#programs"
                className="rounded-md bg-white px-6 py-3 font-medium text-primary shadow-lg hover:bg-gray-100 transition-colors"
              >
                Explore Resources
              </Link>
              <Link
                href="#pathways"
                className="rounded-md border-2 border-white px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
              >
                Learning Pathways
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
        {/* Featured Learning Programmes Section */}
        <section id="programs" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Featured Learning Programmes</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Engaging resources and experiences designed to bring archaeology to life
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredPrograms.map((program) => {
              const Icon = program.icon
              const isExternal = program.external
              const LinkComponent = isExternal ? 'a' : Link
              const linkProps = isExternal
                ? { href: program.link, target: "_blank", rel: "noopener noreferrer" }
                : { href: program.link }

              return (
                <LinkComponent
                  key={program.title}
                  {...linkProps}
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
                </LinkComponent>
              )
            })}
          </div>
        </section>

        {/* Learning Pathways */}
        <section id="pathways" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Learning Pathways</h2>
            <p className="mt-3 text-muted-foreground">
              Tailored educational experiences for KS1-3
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {learningPathways.map((pathway) => (
              <div key={pathway.age} className="rounded-lg border bg-card p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">{pathway.age}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Learning Outcomes Covered:</h4>
                    <ul className="space-y-2">
                      {pathway.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start text-sm text-muted-foreground">
                          <ArrowRight className="mr-2 h-3 w-3 text-primary shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Activities:</h4>
                    <ul className="space-y-1">
                      {pathway.activities.map((activity) => (
                        <li key={activity} className="flex items-start text-sm text-muted-foreground">
                          <Activity className="mr-2 h-3 w-3 text-primary shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Downloadable Lesson Plans */}
        <section id="resources" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Downloadable Lesson Plans</h2>
            <p className="mt-3 text-muted-foreground">
              Free, downloadable lesson plans exploring archaeology and local heritage
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lessonPlans && lessonPlans.length > 0 ? (
              lessonPlans.map((resource) => {
                const Icon = getResourceIcon(resource.resourceType)
                const hasFiles = resource.resourceFiles && resource.resourceFiles.length > 0
                const fileUrl = hasFiles ? getFileUrl(resource.resourceFiles[0]) : null
                const fileName = hasFiles ? resource.resourceFiles[0].asset?.originalFilename : null

                return (
                  <Card key={resource.slug.current} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="inline-flex rounded-lg bg-blue-500 p-3 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        {resource.comingSoon && (
                          <Badge variant="secondary" className="text-xs">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.keyStages?.map((ks: string) => (
                          <Badge key={ks} variant="secondary" className="text-xs">
                            {ks.toUpperCase()}
                          </Badge>
                        ))}
                        {resource.subjects?.map((subject: string) => (
                          <Badge key={subject} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      {resource.duration && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Clock className="h-4 w-4" />
                          <span>{resource.duration}</span>
                        </div>
                      )}
                      <div className="mt-auto">
                        {resource.comingSoon ? (
                          <button
                            disabled
                            className="inline-flex items-center text-sm text-muted-foreground cursor-not-allowed"
                          >
                            Coming Soon
                          </button>
                        ) : fileUrl ? (
                          <a
                            href={fileUrl}
                            download={fileName || 'lesson-plan.zip'}
                            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                          >
                            <Download className="h-4 w-4" />
                            Download Resources
                          </a>
                        ) : resource.externalLink ? (
                          <a
                            href={resource.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary hover:underline"
                          >
                            View External Resource
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </a>
                        ) : (
                          <Link
                            href={`/education/resources/${resource.slug.current}`}
                            className="inline-flex items-center text-sm text-primary hover:underline"
                          >
                            View Resources
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })
            ) : (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No lesson plans available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Other Learning Resources */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Other Learning Resources</h2>
            <p className="mt-3 text-muted-foreground">
              Additional resources and materials for educators
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherResourcesFromSanity && otherResourcesFromSanity.length > 0 ? (
              otherResourcesFromSanity.map((resource) => {
                const Icon = getResourceIcon(resource.resourceType)
                const hasFiles = resource.resourceFiles && resource.resourceFiles.length > 0
                const fileUrl = hasFiles ? getFileUrl(resource.resourceFiles[0]) : null
                const fileName = hasFiles ? resource.resourceFiles[0].asset?.originalFilename : null
                const isGallery = resource.resourceType === 'gallery'

                return (
                  <Card key={resource._id} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="inline-flex rounded-lg bg-primary p-3 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        {resource.comingSoon && (
                          <Badge variant="secondary" className="text-xs">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      {resource.comingSoon ? (
                        <button
                          disabled
                          className="inline-flex items-center text-sm text-muted-foreground cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      ) : resource.externalLink ? (
                        <div className="flex flex-col gap-2">
                          <a
                            href={resource.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary hover:underline"
                          >
                            View External Resource
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </a>
                          {fileUrl && (
                            <a
                              href={fileUrl}
                              download={fileName}
                              className="inline-flex items-center text-sm text-primary hover:underline"
                            >
                              <Download className="mr-1 h-3 w-3" />
                              Download Resource
                            </a>
                          )}
                        </div>
                      ) : fileUrl ? (
                        <a
                          href={fileUrl}
                          download={fileName}
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          Download Resource
                        </a>
                      ) : isGallery ? (
                        <Link
                          href={`/education/resources/${resource.slug.current}`}
                          className="inline-flex items-center text-sm text-primary hover:underline"
                        >
                          View Gallery
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      ) : (
                        <Link
                          href={`/education/resources/${resource.slug.current}`}
                          className="inline-flex items-center text-sm text-primary hover:underline"
                        >
                          View Resource
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                )
              })
            ) : (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Additional resources coming soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Site Visits and Workshops Section */}
        <section className="mt-16">
          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border p-8">
            <h2 className="text-2xl font-bold mb-4">Site Visits and Workshops</h2>
            <p className="text-muted-foreground mb-6">
              Bring archaeology to life in your classroom with our expert-led session or join us on site for a visit to learn about a particular theme you have been studying.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-3">Site Visits</h3>
                <div className="mb-3">
                  <Badge variant="secondary">
                    <Users className="mr-1 h-3 w-3" />
                    KS1-3
                  </Badge>
                  <Badge variant="secondary" className="ml-2">
                    <Clock className="mr-1 h-3 w-3" />
                    20mins to 1 hour
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Visit the active excavation site at East Wear Bay and find out how archaeologists uncover the past. Choose a theme to explore during your visit: The Romans, the Iron Age, archaeology time machine, or citizenship and volunteering.
                </p>
                <p className="text-sm text-muted-foreground">
                  Get in touch if you would like to visit our site. Site visits take place during the excavation season and are subject to funding and availability.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-3">Workshop Sessions</h3>
                <div className="mb-3">
                  <Badge variant="secondary">
                    <Users className="mr-1 h-3 w-3" />
                    KS1-2
                  </Badge>
                  <Badge variant="secondary" className="ml-2">
                    <Clock className="mr-1 h-3 w-3" />
                    1.5-2 hours
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Hands-on workshops where pupils can handle real artefacts and learn about different historical themes in their own classroom. Tailored to different key stages and delivered by our Engagement Team.
                </p>
                <p className="text-sm text-muted-foreground">
                  Get in touch if you would like us to visit your school. Workshops are subject to funding and availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Time Capsule Section */}
        <section id="digital-time-capsule" className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Digital Time Capsule</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              A living archive of memories and stories for future generations
            </p>
          </div>

          <div className="rounded-lg border bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-8 md:p-12">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex rounded-lg bg-green-500 p-3 text-white">
                  <Package className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Explore the East Wear Bay Digital Time Capsule</h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Explore the fascinating entries in our East Wear Bay digital time capsule, then inspire your class to create their own unique contributions to be part of this living archive.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground mb-6">
                    Our digital time capsule preserves the voices, memories, and stories of people connected to East Wear Bay. From volunteers who have dug at the site to local residents who remember the area from decades past, each contribution adds a personal dimension to our archaeological work.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">How Schools Can Get Involved</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Explore Existing Entries:</strong> Browse submissions from community members to understand what makes a meaningful time capsule contribution
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Create Your Own:</strong> Inspire your class to reflect on what they would like future generations to know about life today
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Submit Contributions:</strong> Share your students' entries to become part of our permanent digital archive
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-green-500 px-6 py-3 text-sm font-medium text-white hover:bg-green-600 transition-colors"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sensory Story Section */}
        <section id="sensory-story" className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold md:text-4xl">Sensory Stories</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Bringing archaeology to life through touch, sound, smell and imagination
            </p>
          </div>

          <div className="rounded-lg border bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 p-8 md:p-12">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex rounded-lg bg-pink-500 p-3 text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">An Immersive Archaeological Experience</h3>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Our immersive sensory story invites children with profound and complex disabilities to experience the thrill of an archaeological excavation—bringing the adventure to life through touch, sound, smell and imagination.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground mb-6">
                    Designed specifically for inclusive education, our sensory stories use multi-sensory props and carefully crafted narratives to make archaeology accessible to all learners. Each story is an opportunity to explore, discover, and connect with the past in a meaningful way.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">What's Included</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Activity className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Tactile Props:</strong> Carefully selected objects that children can touch and explore, from replica artefacts to textured materials
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Sound Elements:</strong> Audio cues and soundscapes that enhance the storytelling experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Scents:</strong> Aromatic elements that bring the past to life through smell
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Story Book:</strong> A downloadable guide that enables you to create your own sensory story experience
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Two Ways to Access</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Library className="h-5 w-5 text-pink-500" />
                      <h5 className="font-semibold">Borrow a CAT Box</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our sensory story CAT boxes are free to borrow and include all the props and materials you need for a complete multi-sensory experience.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Download className="h-5 w-5 text-pink-500" />
                      <h5 className="font-semibold">Download the Story</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Download our sensory story book and create your own version using materials you have available in your classroom or at home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.canterburytrust.co.uk/copy-of-cat-box-loans-collection-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-pink-500 px-6 py-3 text-sm font-medium text-white hover:bg-pink-600 transition-colors"
                >
                  Borrow a CAT Box
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border-2 border-pink-500 px-6 py-3 text-sm font-medium text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950 transition-colors"
                >
                  Download Story Book
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
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
                target="_blank"
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