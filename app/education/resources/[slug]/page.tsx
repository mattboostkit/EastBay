import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { client } from '@/lib/sanity.client'
import { urlForImage } from '@/lib/sanity.unified'
import Image from 'next/image'

// Revalidate this page every 60 seconds
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
    gallery[] {
      asset,
      alt,
      caption,
      title
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
  const hasGallery = resource.gallery && resource.gallery.length > 0

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

          {/* Gallery for gallery-type resources */}
          {isGallery && hasGallery && (
            <div className="mb-12">
              <ImageGallery images={resource.gallery} />
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
              {/* Render portable text content here if needed */}
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

// Image Gallery Component with Navigation
function ImageGallery({ images }: { images: any[] }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <button
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg border bg-muted hover:border-primary transition-colors"
            onClick={() => {
              // Open lightbox modal (we'll add this functionality)
              const event = new CustomEvent('openLightbox', { detail: { index } })
              window.dispatchEvent(event)
            }}
          >
            <Image
              src={urlForImage(image).width(600).height(600).fit('crop').url()}
              alt={image.alt || image.title || `Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {(image.title || image.caption) && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                {image.title && (
                  <h3 className="text-sm font-semibold text-white">{image.title}</h3>
                )}
                {image.caption && (
                  <p className="text-xs text-white/90 mt-1">{image.caption}</p>
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal - Client Component */}
      <LightboxModal images={images} />
    </div>
  )
}

// Lightbox Modal Component (needs to be client component)
function LightboxModal({ images }: { images: any[] }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              let currentIndex = 0;
              let isOpen = false;

              window.addEventListener('openLightbox', (e) => {
                currentIndex = e.detail.index;
                isOpen = true;
                showLightbox();
              });

              function showLightbox() {
                const modal = document.getElementById('lightbox-modal');
                const img = document.getElementById('lightbox-image');
                const title = document.getElementById('lightbox-title');
                const caption = document.getElementById('lightbox-caption');
                const counter = document.getElementById('lightbox-counter');

                if (modal && img) {
                  const images = ${JSON.stringify(
                    images.map((img) => ({
                      url: urlForImage(img).width(1920).height(1080).fit('max').url(),
                      alt: img.alt || img.title || '',
                      title: img.title || '',
                      caption: img.caption || '',
                    }))
                  )};

                  modal.classList.remove('hidden');
                  document.body.style.overflow = 'hidden';

                  img.src = images[currentIndex].url;
                  img.alt = images[currentIndex].alt;

                  if (title) {
                    title.textContent = images[currentIndex].title;
                    title.style.display = images[currentIndex].title ? 'block' : 'none';
                  }

                  if (caption) {
                    caption.textContent = images[currentIndex].caption;
                    caption.style.display = images[currentIndex].caption ? 'block' : 'none';
                  }

                  if (counter) {
                    counter.textContent = (currentIndex + 1) + ' / ' + images.length;
                  }
                }
              }

              window.closeLightbox = function() {
                const modal = document.getElementById('lightbox-modal');
                if (modal) {
                  modal.classList.add('hidden');
                  document.body.style.overflow = '';
                  isOpen = false;
                }
              };

              window.nextImage = function() {
                const images = ${JSON.stringify(images)};
                currentIndex = (currentIndex + 1) % images.length;
                showLightbox();
              };

              window.prevImage = function() {
                const images = ${JSON.stringify(images)};
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showLightbox();
              };

              document.addEventListener('keydown', (e) => {
                if (!isOpen) return;
                if (e.key === 'Escape') window.closeLightbox();
                if (e.key === 'ArrowRight') window.nextImage();
                if (e.key === 'ArrowLeft') window.prevImage();
              });
            })();
          `,
        }}
      />

      <div id="lightbox-modal" className="hidden fixed inset-0 z-50 bg-black/95">
        <button
          onClick={() => (window as any).closeLightbox()}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={() => (window as any).prevImage()}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>

        <button
          onClick={() => (window as any).nextImage()}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm z-10">
          <span id="lightbox-counter"></span>
        </div>

        <div className="flex items-center justify-center h-full p-4">
          <div className="max-w-7xl w-full">
            <img
              id="lightbox-image"
              className="w-full h-auto max-h-[80vh] object-contain"
              alt=""
            />
            <div className="mt-4 text-center text-white">
              <h3 id="lightbox-title" className="text-lg font-semibold"></h3>
              <p id="lightbox-caption" className="text-sm text-white/80 mt-1"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
