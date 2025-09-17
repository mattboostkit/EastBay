import Link from 'next/link'
import { ArrowRight, BookOpen, FileText, GraduationCap, Search } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Learn | East Wear Bay Project',
  description: 'Educational resources and research publications from the East Wear Bay Archaeological Project.',
}

const learnItems = [
  {
    title: 'Education Resources',
    description: 'Access our comprehensive educational materials including lesson plans, activity guides, and learning modules designed for students and educators.',
    href: '/education',
    icon: GraduationCap,
    color: 'text-blue-500',
    features: [
      'Interactive lesson plans',
      'Student activity guides',
      'Educational videos',
      'Teacher resources'
    ]
  },
  {
    title: 'Research, Reports and Publications',
    description: 'Explore our academic research, published papers, and detailed archaeological reports from the East Wear Bay excavations.',
    href: '/research/publications',
    icon: FileText,
    color: 'text-green-500',
    features: [
      'Academic papers',
      'Excavation reports',
      'Research findings',
      'Technical analyses'
    ]
  },
]

export default function LearnPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Learn with East Wear Bay
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Discover our educational resources and dive deep into archaeological research 
          from the East Wear Bay project.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {learnItems.map((item) => {
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
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-muted p-8">
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">For Educators</h2>
          </div>
          <p className="mb-4 text-muted-foreground">
            Our educational resources are designed to bring archaeology into the classroom. 
            From primary school to university level, we offer materials that make learning 
            about our archaeological heritage engaging and accessible.
          </p>
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Browse educational materials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-lg bg-muted p-8">
          <div className="mb-4 flex items-center gap-3">
            <Search className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">For Researchers</h2>
          </div>
          <p className="mb-4 text-muted-foreground">
            Access our comprehensive research database including excavation data, 
            artifact analyses, and peer-reviewed publications. Our research contributes 
            to understanding East Wear Bay's rich archaeological landscape.
          </p>
          <Link
            href="/research/publications"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Access research publications
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}