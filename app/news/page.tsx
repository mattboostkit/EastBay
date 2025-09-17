import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarDays, Clock, ArrowRight, Filter, Search, Tag } from 'lucide-react'
import { client } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'News & Updates | East Wear Bay Archaeological Project',
  description: 'Latest news, discoveries, and updates from the East Wear Bay Archaeological Project. Stay informed about our excavations, research, and community events.',
}

async function getNews() {
  const query = `*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
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
      image
    }
  }[0...20]`

  return client.fetch(query)
}

async function getCategories() {
  const query = `*[_type == "post"] {
    categories
  } | order(categories asc)`

  const results = await client.fetch(query)
  const allCategories = results.flatMap((item: any) => item.categories || []).filter(Boolean)
  const categories = new Set(allCategories)
  return Array.from(categories)
}

export default async function NewsPage() {
  const news = await getNews()
  const categories = await getCategories()
  
  // Group news by category for featured display
  const featuredNews = news.slice(0, 3)
  const recentNews = news.slice(3)
  
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/boostkit/East Wear Bay/News/News_Banner_EWB.webp?updatedAt=1758122787198"
          alt="East Wear Bay archaeological news and updates"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4 bg-secondary text-white">Latest Updates</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                News & Discoveries
              </h1>
              <p className="mt-4 text-lg text-white/90 md:text-xl">
                Updates from our seasonal excavations and year-round community projects.
              </p>

              {/* Search Bar */}
              <div className="mt-8 flex max-w-md mx-auto gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search news and articles..."
                    className="pl-10 bg-white/95"
                  />
                </div>
                <Button className="bg-secondary hover:bg-secondary/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Cards */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Stories</h2>
            <div className="flex gap-2">
              {categories.map((category: any) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary/10">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredNews.map((item: any) => (
              <Card key={item._id} className="group overflow-hidden hover:shadow-lg transition-all border-2 hover:border-primary/50">
                {item.mainImage && (
                  <div className="aspect-video overflow-hidden bg-muted">
                    <Image
                      src={urlFor(item.mainImage).width(600).height(400).url()}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(item.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                    {item.category && (
                      <>
                        <span>•</span>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                          {item.category}
                        </Badge>
                      </>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 mt-2">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href={`/news/${item.slug.current}`}
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News with Tabs */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-muted">
                <TabsTrigger value="all">All News</TabsTrigger>
                <TabsTrigger value="excavations">Excavations</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            
            <TabsContent value="all" className="space-y-6">
              {recentNews.map((item: any) => (
                <Card key={item._id} className="hover:shadow-md transition-all border-l-4 border-l-primary">
                  <div className="flex gap-6 p-6">
                    {item.mainImage && (
                      <div className="hidden md:block w-48 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={urlFor(item.mainImage).width(200).height(130).url()}
                          alt={item.title}
                          width={200}
                          height={130}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {new Date(item.publishedAt).toLocaleDateString()}
                        </Badge>
                        {item.category && (
                          <Badge className="bg-secondary/10 text-secondary text-xs">
                            {item.category}
                          </Badge>
                        )}
                        {item.author && (
                          <span className="text-sm text-muted-foreground">
                            by {item.author.name}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                        <Link href={`/news/${item.slug.current}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-3">
                        {item.excerpt}
                      </p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex gap-2 flex-wrap">
                          {item.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="excavations">
              <div className="text-center py-8 text-muted-foreground">
                <p>No excavation news available at the moment.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="research">
              <div className="text-center py-8 text-muted-foreground">
                <p>No research news available at the moment.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="text-center py-8 text-muted-foreground">
                <p>No community news available at the moment.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <div className="text-center py-8 text-muted-foreground">
                <p>No event news available at the moment.</p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Load More */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="group">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA with Brand Colors */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg mb-6 text-white/90">
              Subscribe to our newsletter for weekly updates on discoveries, events, and research findings
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/95 text-foreground"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}