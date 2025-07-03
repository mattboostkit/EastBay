import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Users, Clock, Download, BookOpen, Activity, Video } from 'lucide-react'
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

export default async function EducationPage() {
  const resources = await fetchAllEducationResources()

  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Education Resources</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Engaging learning materials for teachers and students to explore Roman Britain and archaeology through the East Wear Bay site.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        {/* School Visits Section */}
        <section className="mb-16">
          <div className="rounded-lg border bg-card p-8">
            <h2 className="text-2xl font-bold mb-4">School Visits</h2>
            <p className="text-muted-foreground mb-6">
              School visits are subject to funding availability. Please contact us to enquire about current opportunities for educational visits.
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
                  <Card key={resource._id} className="flex flex-col">
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