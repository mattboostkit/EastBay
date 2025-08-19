import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Community & Outreach | East Wear Bay Archaeological Project',
  description: 'Discover our community archaeology programmes, educational outreach, and public engagement initiatives at the Folkestone Roman Villa site.',
}

export default function CommunityPage() {
  return (
    <>
      <PageHero
        title="Community & Outreach"
        description="Engaging the public with archaeology and connecting communities to their local heritage through inclusive programmes and activities."
        icon={Users}
        variant="gradient"
      />
      
      <div className="container py-12">
        {/* Community Principles */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold">Our Community Principles</h2>
            <p className="mt-3 text-muted-foreground">
              At the East Wear Bay Project, we believe that archaeology belongs to everyone. Our community programmes are designed around three core principles:
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
        
        {/* Current Programmes */}
        <section className="mb-16">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Workshops</h2>
            <p className="mt-2 text-muted-foreground">
              Discover the ways you can get involved with the East Wear Bay Project
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Workshop 1 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                  fill
                  alt="Hands working with clay to create Iron Age pottery replicas"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Iron Age Pottery</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn ancient pottery techniques and create your own Iron Age vessels using traditional methods. Explore how pottery helps archaeologists date sites and understand past cultures.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Ages 12+</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Folkestone Museum</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Monthly sessions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>£15 per session</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/iron-age-pottery"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Workshop 2 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                  alt="Colorful Roman mosaic patterns being assembled"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Roman Mosaics</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Design and create your own Roman mosaic using authentic techniques. Learn about the geometric patterns and marine motifs found at the Folkestone Villa site.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>All ages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Various venues</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Weekends</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>£10 adults, £5 children</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/roman-mosaics"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Workshop 3 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                  alt="Students using 3D technology to create digital archives"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Digital Time Capsule</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use cutting-edge 3D scanning and digital technology to create virtual time capsules. Learn how archaeologists use digital preservation to save sites threatened by erosion.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Ages 10-16</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Schools & Museum</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Term-time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Free for schools</span>
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
            
            {/* Workshop 4 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                  alt="Interactive timeline workshop with historical artefacts"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Timeline</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Create interactive timelines exploring 2000 years of history at East Wear Bay. Handle real artefacts and learn how archaeologists piece together the story of a site.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Families</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Folkestone Museum</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>School holidays</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Free drop-in</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/timeline"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Workshop 5 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                  alt="Roman food preparation and cooking demonstration"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Food & Drink</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Discover what Romans ate and drank at the Folkestone Villa. Prepare authentic recipes using archaeological evidence and taste history come to life.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Adults</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Various venues</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Monthly</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>£25 includes ingredients</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/food-and-drink"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Workshop 6 */}
            <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                  alt="Career presentation showing various archaeology professions"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Careers in Archaeology</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore diverse career paths in archaeology and heritage. Meet professionals, learn about required skills, and get hands-on experience with archaeological techniques.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Ages 16+</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>University & Museum</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Quarterly</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                    <span>Free for students</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link
                    href="/community/careers"
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
                <p className="mt-2 text-muted-foreground">Participants in community programmes annually</p>
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
                    "The Digital Time Capsule programme transformed my students' understanding of history. They went from seeing archaeology as dusty and distant to something vibrant and connected to their own lives."
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
                There are many ways to participate in the East Wear Bay Project, from hands-on archaeology to supporting our community programmes.
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