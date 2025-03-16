import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community & Outreach | East Wear Bay Archaeological Project',
  description: 'Discover our community archaeology programs, educational outreach, and public engagement initiatives at the Folkestone Roman Villa site.',
}

export default function CommunityPage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Community & Outreach</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Engaging the public with archaeology and connecting communities to their local heritage through inclusive programs and activities.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        {/* Community Principles */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Our Community Principles</h2>
            <p className="mt-3 text-muted-foreground">
              At the East Wear Bay Project, we believe that archaeology belongs to everyone. Our community programs are designed around three core principles:
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-lg font-medium">Inclusivity</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Creating accessible opportunities for people of all ages, backgrounds, and abilities to engage with archaeology and heritage.
                </p>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                </div>
                <h3 className="text-lg font-medium">Co-creation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Involving local communities in shaping how we interpret, present, and share archaeological discoveries.
                </p>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                </div>
                <h3 className="text-lg font-medium">Relevance</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Connecting past and present to make archaeology meaningful to contemporary lives and local identity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Current Programs */}
        <section className="mb-16">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Our Community Programs</h2>
            <p className="mt-2 text-muted-foreground">
              Discover the ways you can get involved with the East Wear Bay Project
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Program 1 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?fit=crop&w=800&h=400"
                  fill
                  alt="Children working with archaeological finds and digital technology in a classroom setting"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Digital Time Capsule</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A schools program where pupils use 3D technology to document artifacts and create a digital archive, building digital skills while learning about their local Roman heritage.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Ages 9-14</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>School-based</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Term-time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Free program</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/digital-time-capsule"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Program 2 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=800&h=400"
                  alt="Elderly participants handling replica artifacts with assistance from project staff"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Memory Through Objects</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our dementia-friendly sessions use archaeology and object handling to stimulate memory, conversation, and wellbeing among elderly participants and those with memory challenges.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Seniors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Care homes & community centers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Year-round</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Free program</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/memory-through-objects"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Program 3 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?fit=crop&w=800&h=400"
                  alt="Recording session with community members sharing stories about East Wear Bay"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Folkestone Stories</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  An oral history project collecting local memories and stories about East Wear Bay, creating a social history archive alongside the archaeological record.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>All ages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Various locations</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Ongoing</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Volunteer opportunity</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/folkestone-stories"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Program 4 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551818176-60579e574b91?fit=crop&w=800&h=400"
                  alt="Young people designing heritage-inspired art projects"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Heritage Creatives</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A youth arts program where young people respond creatively to archaeological findings through art, music, creative writing, and digital media.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Ages 14-19</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Folkestone Creative Quarter</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>After school & holidays</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Free program</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/heritage-creatives"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Program 5 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?fit=crop&w=800&h=400"
                  alt="Walking tour at East Wear Bay with tour guide explaining site features"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Site Tours & Open Days</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Regular guided tours of the excavation site during the field season and special open days featuring demonstrations, hands-on activities, and talks.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>All ages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>East Wear Bay site</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>May-September</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Booking required for tours</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/site-tours"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Program 6 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?fit=crop&w=800&h=400"
                  alt="Workshop participants learning archaeological techniques"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Archaeology Workshops</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hands-on workshops teaching archaeological skills including pottery identification, artifact illustration, environmental sampling, and archaeological photography.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Adults</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Folkestone Museum</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Year-round</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Small fee applies</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/workshops"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact */}
        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold">Our Impact</h2>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="text-4xl font-bold text-primary">5,000+</div>
                <p className="mt-2 text-muted-foreground">Participants in community programs annually</p>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="text-4xl font-bold text-primary">24</div>
                <p className="mt-2 text-muted-foreground">Schools actively engaged with the project</p>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="text-4xl font-bold text-primary">150+</div>
                <p className="mt-2 text-muted-foreground">Regular community volunteers</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Community Feedback</h3>
              
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "The Digital Time Capsule program transformed my students' understanding of history. They went from seeing archaeology as dusty and distant to something vibrant and connected to their own lives."
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="font-medium">Ms. Williams</div>
                    <span className="text-sm text-muted-foreground">— Year 6 Teacher</span>
                  </div>
                </blockquote>
                
                <blockquote className="rounded-lg border bg-card p-5">
                  <p className="italic text-muted-foreground">
                    "As someone who's lived in Folkestone all my life, participating in the excavation has given me a new appreciation for the history beneath our feet. At 72, I never imagined I'd be helping uncover a Roman villa!"
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="font-medium">Alan</div>
                    <span className="text-sm text-muted-foreground">— Community Volunteer</span>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        {/* Get Involved */}
        <section>
          <div className="mx-auto max-w-4xl rounded-lg bg-primary p-8 text-primary-foreground">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Get Involved</h2>
              <p className="mt-2">
                There are many ways to participate in the East Wear Bay Project, from hands-on archaeology to supporting our community programs.
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/field-school"
                  className="rounded-md bg-white px-4 py-2 font-medium text-primary shadow-sm hover:bg-white/90"
                >
                  Join our Field School
                </Link>
                
                <Link
                  href="/volunteer"
                  className="rounded-md bg-white px-4 py-2 font-medium text-primary shadow-sm hover:bg-white/90"
                >
                  Volunteer Opportunities
                </Link>
                
                <Link
                  href="/support"
                  className="rounded-md border border-white bg-transparent px-4 py-2 font-medium text-white hover:bg-white/10"
                >
                  Support the Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}