import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Calendar, Clock, Heart, MapPin, Award, Star } from 'lucide-react'
import { fetchAllTestimonials } from '@/lib/sanity.unified'
import { urlFor } from '@/lib/sanity.client'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Volunteer | East Wear Bay Archaeological Project',
  description: 'Join our volunteer team and help preserve East Wear Bay\'s archaeological heritage. No experience necessary - full training provided.',
}

export default async function VolunteerPage() {
  const testimonials = await fetchAllTestimonials()
  const volunteerTestimonials = testimonials?.filter((t: any) => 
    t.position?.toLowerCase().includes('volunteer') || 
    t.organization?.toLowerCase().includes('volunteer')
  )
  return (
    <>
      <PageHero
        title="Be a Volunteer"
        description="Join us in preserving East Wear Bay's archaeological heritage for future generations"
        icon={Heart}
        variant="gradient"
      />

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <section className="mb-16">
            <div className="rounded-lg bg-muted p-8 text-center">
              <h2 className="text-2xl font-bold">Make a Difference Through Archaeology</h2>
              <p className="mt-4 text-lg">
                The East Wear Bay Archaeological Project relies on the dedication and enthusiasm of volunteers. 
                Whether you're interested in hands-on excavation, finds processing, community outreach, or digital documentation, 
                there's a place for you on our team.
              </p>
              <p className="mt-4 text-lg font-medium text-primary">
                No experience necessary - full training provided!
              </p>
            </div>
          </section>

          {/* Volunteer Opportunities */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">Volunteer Opportunities</h2>
            
            <div className="grid gap-6">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Field Excavation</h3>
                    <p className="mt-2 text-muted-foreground">
                      Join our excavation team during the summer season (May-September). Learn proper excavation techniques, 
                      help uncover archaeological features, and directly contribute to saving heritage at risk from coastal erosion.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Calendar className="mr-1 h-3 w-3" />
                        May - September
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Clock className="mr-1 h-3 w-3" />
                        Weekdays & Weekends
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Finds Processing</h3>
                    <p className="mt-2 text-muted-foreground">
                      Help process archaeological finds in our laboratory. Activities include washing, marking, sorting, 
                      and cataloguing artefacts. This is perfect for those who prefer indoor work or have limited mobility.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Calendar className="mr-1 h-3 w-3" />
                        Year-round
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <MapPin className="mr-1 h-3 w-3" />
                        Canterbury
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Community Outreach</h3>
                    <p className="mt-2 text-muted-foreground">
                      Share your passion for archaeology with others! Help deliver school workshops, assist with community events, 
                      or support our dementia-friendly sessions. Training in public engagement provided.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Users className="mr-1 h-3 w-3" />
                        People skills
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <Calendar className="mr-1 h-3 w-3" />
                        Flexible schedule
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="16" height="16" x="4" y="4" rx="2"></rect><path d="m8 8 8 8"></path><path d="M16 8v8H8"></path></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Digital Documentation</h3>
                    <p className="mt-2 text-muted-foreground">
                      Support our digital preservation efforts by helping with photography, 3D scanning, database entry, 
                      or website content. Perfect for those with IT skills or an interest in digital heritage.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        Digital skills welcome
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        <MapPin className="mr-1 h-3 w-3" />
                        Remote options
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">What We Offer Our Volunteers</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <Award className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Professional Training</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Learn from experienced archaeologists and gain skills in excavation, recording, and heritage management
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 flex-shrink-0 text-primary"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                <div>
                  <h3 className="font-semibold">References & Certification</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Receive certificates of participation and references for employment or education applications
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Community & Friendships</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Join a welcoming community of people who share your interest in history and archaeology
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Heart className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Make a Real Difference</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Directly contribute to preserving important heritage before it's lost forever to coastal erosion
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Get Involved */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">How to Get Involved</h2>
            
            <div className="rounded-lg border bg-card p-8">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                  <div>
                    <h3 className="font-semibold">Get in Touch</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Email us at <a href="mailto:get_involved@canterburytrust.ac.uk" className="text-primary hover:underline">get_involved@canterburytrust.ac.uk</a> to express your interest
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                  <div>
                    <h3 className="font-semibold">Attend an Induction</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Join one of our volunteer induction sessions to learn about the project and health & safety procedures
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                  <div>
                    <h3 className="font-semibold">Choose Your Activities</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Select volunteer opportunities that match your interests, skills, and availability
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</span>
                  <div>
                    <h3 className="font-semibold">Start Volunteering!</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Join our team and begin making your contribution to preserving East Wear Bay's heritage
                    </p>
                  </div>
                </li>
              </ol>
              
              <div className="mt-8 text-center">
                <a
                  href="mailto:get_involved@canterburytrust.ac.uk?subject=Volunteer%20Enquiry%20-%20East%20Wear%20Bay"
                  className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Contact Us to Volunteer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h2 className="mb-8 text-2xl font-bold">Volunteer Stories</h2>
            
            {volunteerTestimonials && volunteerTestimonials.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {volunteerTestimonials.slice(0, 2).map((testimonial: any) => (
                  <blockquote key={testimonial._id} className="rounded-lg border bg-card p-6">
                    {testimonial.rating && (
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    <p className="italic text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                    <footer className="mt-4 flex items-center gap-3">
                      {testimonial.image && (
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={urlFor(testimonial.image).width(80).height(80).url()}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                          {testimonial.organization && `, ${testimonial.organization}`}
                        </p>
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <blockquote className="rounded-lg border bg-card p-6">
                  <p className="italic text-muted-foreground">
                    "Volunteering at East Wear Bay has been life-changing. I've learned so much about archaeology, 
                    made wonderful friends, and feel proud to be helping save this important site. The team is so 
                    welcoming - I felt part of the family from day one."
                  </p>
                  <footer className="mt-4">
                    <p className="font-medium">Sarah Mitchell</p>
                    <p className="text-sm text-muted-foreground">Volunteer since 2021</p>
                  </footer>
                </blockquote>
                
                <blockquote className="rounded-lg border bg-card p-6">
                  <p className="italic text-muted-foreground">
                    "As a retiree, I wanted to stay active and contribute to my community. Working on the excavations 
                    has given me a new lease of life. Every day brings new discoveries, and I'm constantly learning. 
                    It's never too late to try archaeology!"
                  </p>
                  <footer className="mt-4">
                    <p className="font-medium">David Thompson</p>
                    <p className="text-sm text-muted-foreground">Volunteer since 2019</p>
                  </footer>
                </blockquote>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  )
}