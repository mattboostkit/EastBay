import Link from 'next/link'
import { ArrowRight, Building2, GraduationCap, Newspaper, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Explore | East Wear Bay Project',
  description: 'Explore the East Wear Bay Archaeological Project through our digital museum, field school, news, and project timeline.',
}

const exploreItems = [
  {
    title: 'Digital Museum',
    description: 'Browse our collection of artifacts discovered at East Wear Bay. View 3D models, detailed photographs, and learn about each find.',
    href: '/digital-museum',
    icon: Building2,
    color: 'text-blue-500',
  },
  {
    title: 'Field School',
    description: 'Join our educational programs and hands-on archaeological training. Learn excavation techniques and artifact analysis.',
    href: '/field-school',
    icon: GraduationCap,
    color: 'text-green-500',
  },
  {
    title: 'News',
    description: 'Stay updated with the latest discoveries, project announcements, and archaeological findings from East Wear Bay.',
    href: '/news',
    icon: Newspaper,
    color: 'text-purple-500',
  },
  {
    title: 'Project Timeline',
    description: 'Follow the journey of the East Wear Bay project from its inception to current excavations and future plans.',
    href: '/timeline',
    icon: Clock,
    color: 'text-indigo-500',
  },
]

export default function ExplorePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Explore East Wear Bay
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Discover the rich archaeological heritage of East Wear Bay through our digital resources, 
          educational programs, and ongoing research.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exploreItems.map((item) => {
          const Icon = item.icon
          return (
            <Link key={item.href} href={item.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-4">
                    <div className={`rounded-full bg-background p-3 ${item.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      {item.title}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 rounded-lg bg-muted p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold">Ready to start exploring?</h2>
        <p className="mb-6 text-muted-foreground">
          Begin your journey through the archaeological discoveries at East Wear Bay. 
          Each section offers unique insights into our ongoing research and educational initiatives.
        </p>
        <Link
          href="/digital-museum"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Visit the Digital Museum
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}