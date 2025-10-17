import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { client } from '@/lib/sanity.client'
import { urlForImage } from '@/lib/sanity.unified'
import Image from 'next/image'

export const revalidate = 60

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

async function getResource(slug: string) {
  const query = `*[_type == "educationResource" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    category,
    resourceType,
    mainImage,
    "gallery": gallery[0...12] {
      asset,
      alt
    },
    content,
    keyStages,
    subjects,
    duration
  }`

  return client.fetch(query, { slug })
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resource = await getResource(slug)

  if (!resource) {
    return {
      title: 'Resource Not Found',
    }
  }

  return {
    title: `${resource.title} | Education Resources | East Wear Bay Project`,
    description: resource.description || `View ${resource.title} from East Wear Bay Archaeological Project`,
  }
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params
  const resource = await getResource(slug)

  if (!resource) {
    notFound()
  }

  const isGallery = resource.resourceType === 'gallery'

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-6">
          <Link
            href="/education"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Education Resources
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{resource.title}</h1>
            {resource.description && (
              <p className="text-lg text-muted-foreground">{resource.description}</p>
            )}
          </div>

          {/* Simple Gallery */}
          {isGallery && resource.gallery && resource.gallery.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resource.gallery.map((image: any, index: number) => {
                  if (!image?.asset) return null

                  try {
                    const imageUrl = urlForImage(image)?.width(600).height(600).fit('crop').url()
                    if (!imageUrl) return null

                    return (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg border bg-muted"
                      >
                        <Image
                          src={imageUrl}
                          alt={image.alt || `Gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )
                  } catch (error) {
                    console.error('Error rendering image:', error)
                    return null
                  }
                })}
              </div>
            </div>
          )}

          {/* Main Image (for non-gallery resources) */}
          {!isGallery && resource.mainImage && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={urlForImage(resource.mainImage).width(800).height(600).url()}
                alt={resource.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          {resource.content && resource.content.length > 0 && (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground">Content rendering coming soon...</p>
            </div>
          )}

          {/* Metadata */}
          {(resource.keyStages || resource.subjects || resource.duration) && (
            <div className="mt-12 rounded-lg border bg-card p-6">
              <h2 className="text-lg font-semibold mb-4">Resource Details</h2>
              <dl className="space-y-3">
                {resource.keyStages && resource.keyStages.length > 0 && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Key Stages</dt>
                    <dd className="mt-1 flex flex-wrap gap-2">
                      {resource.keyStages.map((ks: string) => (
                        <span
                          key={ks}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                          {ks.toUpperCase()}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
                {resource.subjects && resource.subjects.length > 0 && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Subjects</dt>
                    <dd className="mt-1 flex flex-wrap gap-2">
                      {resource.subjects.map((subject: string) => (
                        <span
                          key={subject}
                          className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
                {resource.duration && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Duration</dt>
                    <dd className="mt-1 text-sm">{resource.duration}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
