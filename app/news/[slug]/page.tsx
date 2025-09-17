import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock, ArrowLeft, User } from 'lucide-react'
import { client } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface Props {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    _createdAt,
    mainImage,
    categories,
    author-> {
      name,
      role,
      image
    },
    body,
    relatedPosts[]-> {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }
  }`

  return client.fetch(query, { slug })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | East Wear Bay Archaeological Project`,
    description: post.excerpt || 'Read the latest updates from the East Wear Bay Archaeological Project',
  }
}

export async function generateStaticParams() {
  const query = `*[_type == "post"] {
    slug
  }`

  const posts = await client.fetch(query)

  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            width={800}
            height={450}
            className="rounded-lg w-full"
          />
          {value.caption && (
            <p className="mt-2 text-center text-sm text-muted-foreground">{value.caption}</p>
          )}
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-primary underline hover:no-underline">
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold mt-6 mb-3">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
  },
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const date = post.publishedAt || post._createdAt
  const formattedDate = date ? new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null

  return (
    <article className="min-h-screen">
      {/* Header */}
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <Link
            href="/news"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>

          <div className="max-w-4xl">
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category: string) => (
                  <span
                    key={category}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg text-muted-foreground">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              )}

              {formattedDate && (
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      {post.mainImage && (
        <div className="container py-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {post.body && (
              <PortableText
                value={post.body}
                components={components}
              />
            )}
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost: any) => (
                  <Link
                    key={relatedPost._id}
                    href={`/news/${relatedPost.slug.current}`}
                    className="group"
                  >
                    <div className="rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                      {relatedPost.mainImage && (
                        <div className="relative aspect-video">
                          <Image
                            src={urlFor(relatedPost.mainImage).width(400).url()}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        {relatedPost.excerpt && (
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}