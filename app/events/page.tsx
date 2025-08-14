import { Metadata } from 'next'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events | East Wear Bay Archaeological Project',
  description: 'Join us at upcoming events, workshops, and excavations at the East Wear Bay Archaeological Project.',
}

export default function EventsPage() {
  // Placeholder events data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Summer Field School 2025',
      date: 'July 15-28, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'East Wear Bay Site',
      type: 'Field School',
      description: 'Join our two-week intensive archaeological field school. Learn excavation techniques and artifact processing.',
      capacity: '20 participants',
      status: 'Registration Opening Soon'
    },
    {
      id: 2,
      title: 'Community Open Day',
      date: 'August 10, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'East Wear Bay Visitor Center',
      type: 'Open Day',
      description: 'Visit the excavation site, meet archaeologists, and see recent discoveries. Family-friendly activities available.',
      capacity: 'Open to all',
      status: 'Free Entry'
    },
    {
      id: 3,
      title: 'Introduction to Archaeological Techniques',
      date: 'September 5, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Online Workshop',
      type: 'Workshop',
      description: 'Learn the basics of archaeological excavation and recording techniques in this online workshop.',
      capacity: '50 participants',
      status: 'Register Online'
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: 'Autumn Excavation 2024',
      date: 'October 1-14, 2024',
      type: 'Excavation',
      description: 'Two-week excavation focusing on the eastern wing of the Roman villa.',
    },
    {
      id: 5,
      title: 'Schools Heritage Week',
      date: 'September 15-19, 2024',
      type: 'Educational',
      description: 'Special programs for local schools featuring hands-on activities and site tours.',
    },
  ]

  return (
    <>
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Events & Activities</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join us for excavations, workshops, open days, and educational programs throughout the year
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold">Upcoming Events</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="group rounded-lg border bg-card transition-all hover:shadow-lg">
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {event.type}
                      </span>
                      <span className="text-xs font-medium text-secondary">
                        {event.status}
                      </span>
                    </div>
                    
                    <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{event.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
              <h3 className="mb-4 text-xl font-semibold">Want to Stay Updated?</h3>
              <p className="mb-6 text-muted-foreground">
                Subscribe to our newsletter to receive notifications about upcoming events and activities.
              </p>
              <Link
                href="/contact#newsletter"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="border-t py-12">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold">Past Events</h2>
            
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <div key={event.id} className="rounded-lg border bg-card/50 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="rounded-full bg-muted px-3 py-1 text-xs">
                        {event.type}
                      </span>
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/news"
                className="text-sm text-primary hover:underline"
              >
                View all past events in our news archive →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}