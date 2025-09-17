import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { fetchBySlug } from '@/lib/sanity.unified'
import { urlFor } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'

interface PageParams {
  params: {
    slug: string
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const page = await fetchBySlug('page', slug)
  
  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }
  
  return {
    title: `${page.title} | East Wear Bay Archaeological Project`,
    description: page.description || `Learn about ${page.title} at the East Wear Bay Archaeological Project`,
  }
}

// List of reserved routes that shouldn't be handled by this dynamic route
const reservedRoutes = [
  'about',
  'blog',
  'community',
  'contact',
  'digital-museum',
  'education',
  'events',
  'field-school',
  'folkestone',
  'partners',
  'research',
  'team',
  'timeline',
  'volunteer',
]

export default async function DynamicPage({ params }: PageParams) {
  const { slug } = await params
  
  // Skip if this is a reserved route
  if (reservedRoutes.includes(slug)) {
    notFound()
  }
  
  const page = await fetchBySlug('page', slug)
  
  if (!page) {
    notFound()
  }
  
  return (
    <>
      {/* Hero Section */}
      {page.mainImage && (
        <div className="relative h-[50vh] overflow-hidden">
          <Image
            src={urlFor(page.mainImage).width(1920).height(1080).url()}
            alt={page.mainImage.alt || page.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container">
              <Link 
                href="/"
                className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-4xl font-bold md:text-5xl">{page.title}</h1>
              {page.description && (
                <p className="mt-4 text-lg text-white/90 max-w-3xl">
                  {page.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="container py-12">
        {!page.mainImage && (
          <>
            <Link 
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold md:text-4xl mb-4">{page.title}</h1>
            {page.description && (
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                {page.description}
              </p>
            )}
          </>
        )}
        
        {/* Main Content */}
        {page.content && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={page.content} />
          </div>
        )}
        
        {/* Sections */}
        {page.sections && page.sections.length > 0 && (
          <div className="mt-12 space-y-12">
            {page.sections.map((section: any) => (
              <section key={section._key}>
                {section.sectionTitle && (
                  <h2 className="text-2xl font-bold mb-4">{section.sectionTitle}</h2>
                )}
                {section.content && (
                  <div className="prose prose-lg max-w-none">
                    <PortableText value={section.content} />
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  )
}