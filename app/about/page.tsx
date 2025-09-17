import Link from 'next/link'
import { ArrowRight, Users, Heart, HandHelpingIcon, Building, Mail, Info } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'About | East Wear Bay Project',
  description: 'Learn about the East Wear Bay Archaeological Project, our team, community initiatives, and how to get involved.',
}

const aboutItems = [
  {
    title: 'About the Project',
    description: 'Discover the history and mission of the East Wear Bay Archaeological Project, our goals, and the significance of our work.',
    href: '/about/project',
    icon: Info,
    color: 'text-blue-500',
  },
  {
    title: 'Community & Outreach',
    description: 'Learn about our community engagement programs, public events, and how we share our discoveries with the local community.',
    href: '/community',
    icon: Users,
    color: 'text-green-500',
  },
  {
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers. Find opportunities to participate in excavations, lab work, and community programs.',
    href: '/volunteer',
    icon: Heart,
    color: 'text-red-500',
  },
  {
    title: 'Partners',
    description: 'Meet our project partners, collaborating institutions, and organizations supporting archaeological research at East Wear Bay.',
    href: '/partners',
    icon: HandHelpingIcon,
    color: 'text-purple-500',
  },
  {
    title: 'Contact & Sponsors',
    description: 'Get in touch with our team, learn about sponsorship opportunities, and discover how to support our archaeological work.',
    href: '/contact',
    icon: Mail,
    color: 'text-orange-500',
  },
]

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          About East Wear Bay
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Learn about our archaeological project, meet our team, and discover how you can 
          get involved in preserving and sharing our heritage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aboutItems.map((item) => {
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

      <div className="mt-12 rounded-lg bg-muted p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            The East Wear Bay Archaeological Project is dedicated to uncovering, preserving, 
            and sharing the rich archaeological heritage of our region. Through careful excavation, 
            rigorous research, and community engagement, we work to understand the lives of those 
            who came before us and ensure their stories are told for generations to come.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/about/project"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Learn More About Our Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get Involved
              <Heart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Building className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Institutional Support</h3>
          <p className="text-sm text-muted-foreground">
            Backed by leading archaeological institutions and universities
          </p>
        </div>
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Community Focused</h3>
          <p className="text-sm text-muted-foreground">
            Engaging local communities in discovering their heritage
          </p>
        </div>
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <Heart className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Volunteer Powered</h3>
          <p className="text-sm text-muted-foreground">
            Supported by dedicated volunteers passionate about archaeology
          </p>
        </div>
      </div>
    </div>
  )
}