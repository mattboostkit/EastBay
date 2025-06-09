<<<<<<< HEAD
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Sparkles, ArrowRight, School, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Field School | East Wear Bay Archaeological Project',
  description: 'Join our archaeological field school at the Folkestone Roman Villa site and gain hands-on excavation experience while helping preserve a heritage site threatened by coastal erosion.',
}

export default function FieldSchoolPage() {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?fit=crop&w=2000&h=800"
          alt="Students excavating at the East Wear Bay archaeological site with tools and equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">East Wear Bay Field School</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl">
              Learn archaeological techniques while helping to preserve a Roman villa threatened by coastal erosion
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-lg border bg-card p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold">2025 Field School Sessions</h2>
            <p className="mt-2 text-muted-foreground">
              Join our internationally recognized field school for hands-on archaeological experience at the Folkestone Roman Villa site
            </p>

            <div className="mt-6 grid gap-6">
              {/* Session 1 */}
              <div className="rounded-lg border p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium">Summer Session</h3>
                    <p className="text-sm text-muted-foreground">For university students and adult learners</p>
                  </div>
                  <Link
                    href="/field-school/apply"
                    className="mt-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 sm:mt-0"
                  >
                    Apply now
                  </Link>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">July 5 - August 2, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">4 weeks, full-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">East Wear Bay, Folkestone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">20 participants</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm">
                    This intensive four-week session provides comprehensive training in excavation techniques, recording,
                    finds processing, and site interpretation. Suitable for university students
                    (with potential academic credit) and adult learners.
                  </p>
                </div>
              </div>

              {/* Session 2 */}
              <div className="rounded-lg border p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium">Community Weekend Program</h3>
                    <p className="text-sm text-muted-foreground">For local residents and beginners</p>
                  </div>
                  <Link
                    href="/field-school/apply"
                    className="mt-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 sm:mt-0"
                  >
                    Apply now
                  </Link>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">June - September 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Weekends only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">East Wear Bay, Folkestone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">10 participants per weekend</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm">
                    Our weekend program allows local residents and beginners to participate in ongoing excavations
                    with flexible scheduling. Each weekend includes training, excavation experience, and finds processing.
                    No previous experience required.
                  </p>
                </div>
              </div>

              {/* Session 3 */}
              <div className="rounded-lg border p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium">Youth Field School</h3>
                    <p className="text-sm text-muted-foreground">For students aged 16-18</p>
                  </div>
                  <Link
                    href="/field-school/apply"
                    className="mt-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 sm:mt-0"
                  >
                    Apply now
                  </Link>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">July 7-18, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">2 weeks, daytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">East Wear Bay, Folkestone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">15 participants</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm">
                    Designed specifically for young people considering archaeology or heritage careers. This two-week program
                    provides age-appropriate training, excavation experience, and insight into archaeological
                    practices and potential career paths.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing and Accommodation */}
          <div className="mb-12 rounded-lg border bg-card p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold">Pricing and Accommodation</h2>
            <p className="mt-2 text-muted-foreground">
              Field School training activities will include: Site introduction; site induction including health and safety; archaeological excavation and the use of tools; finds processing; the written site record; archaeological site drawing; site surveys, site photography, and Historic Building Recording.
            </p>

            <p className="mt-4 text-muted-foreground">
              Subject to weather conditions and availability, we will also be running sessions on environmental processing and analysis, and geophysics.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-5">
                <h3 className="text-xl font-medium">With Accommodation</h3>
                <div className="mt-2 text-3xl font-bold">£800</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A two-week Field School placement includes all training and necessary equipment, plus accommodation in a 4-person shared apartment in Folkestone.
                </p>
              </div>

              <div className="rounded-lg border p-5">
                <h3 className="text-xl font-medium">Without Accommodation</h3>
                <div className="mt-2 text-3xl font-bold">£650</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are happy to make suitable recommendations to those wishing to find their own private accommodation in the Canterbury or Folkestone areas.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No prior experience is required. CAT provides accredited professional training. Individual progress is logged using the BAJR skills passport, a document recognised by most professional and academic institutions in the UK.
            </p>
          </div>

          {/* Course Tutors */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Course Tutors</h2>
            <p className="mt-2 text-muted-foreground">
              Learn from experienced professionals who are passionate about sharing their knowledge
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex gap-4 rounded-lg border bg-card p-6">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-muted">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-2xl font-semibold text-muted-foreground">JW</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dr. James Wilson</h3>
                  <p className="text-sm font-medium text-muted-foreground">Field Director</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    20+ years of experience in coastal archaeology and rescue excavations. 
                    Specializes in Roman Britain and archaeological field methods.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 rounded-lg border bg-card p-6">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-muted">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-2xl font-semibold text-muted-foreground">SC</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Dr. Sophie Chen</h3>
                  <p className="text-sm font-medium text-muted-foreground">Digital Heritage Lead</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Expert in 3D recording, photogrammetry, and digital preservation techniques. 
                    Pioneering new methods for documenting threatened archaeological sites.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">What You'll Learn</h2>
            <p className="mt-2 text-muted-foreground">
              Our field school provides comprehensive training in archaeological methods and techniques
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">Excavation Techniques</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn proper excavation methods including troweling, context identification, and stratigraphic principles.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2 12h2"></path><path d="M6 12h2"></path><path d="M10 12h2"></path><path d="M18 12h2"></path><path d="M14 12h2"></path><path d="M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M14 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M6 16V8"></path><path d="M14 16V8"></path><path d="M6 12h8"></path></svg>
                </div>
                <h3 className="text-lg font-medium">Site Recording</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Master archaeological documentation including context sheets, planning, section drawing, and digital recording.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3 className="text-lg font-medium">Finds Processing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Develop skills in washing, marking, identification, and preliminary analysis of archaeological materials.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path><path d="M8 14v.5"></path><path d="M16 14v.5"></path><path d="M11.5 17h1"></path></svg>
                </div>
                <h3 className="text-lg font-medium">Survey Techniques</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Introduction to archaeological survey methods including total station use, GIS applications, and geophysical survey.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="8" x2="16" y1="10" y2="10"></line><line x1="8" x2="16" y1="14" y2="14"></line><line x1="8" x2="16" y1="18" y2="18"></line></svg>
                </div>
                <h3 className="text-lg font-medium">Archaeological Theory</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Engage with archaeological interpretation, contextual analysis, and understanding site formation processes.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                </div>
                <h3 className="text-lg font-medium">Digital Archaeology</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Introduction to digital recording, 3D modeling, and documentation technologies used in modern archaeology.
                </p>
              </div>
            </div>
          </div>

          {/* Why Join Our Field School */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Why Join Our Field School</h2>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <School className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Hands-on Learning</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Gain practical field experience under the guidance of professional archaeologists with varying levels of experience accommodated.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Academic Credit</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    University students can earn academic credit through our partnerships with UK and international institutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="5" r="3"></circle><line x1="12" x2="12" y1="22" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Save Heritage at Risk</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Contribute to the preservation of important archaeological data from a site threatened by coastal erosion.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Professional Networking</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Connect with archaeologists, specialists, and fellow students to build valuable professional relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Participant Testimonials</h2>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=400&h=400"
                      alt="Sarah, university student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah</p>
                    <p className="text-sm text-muted-foreground">University Student, 2024</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "The East Wear Bay Field School exceeded all my expectations. The training was thorough, the site
                  fascinating, and the experience of working on a site that's actively being lost to erosion made
                  our work feel urgent and meaningful."
                </blockquote>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400"
                      alt="David, local volunteer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">David</p>
                    <p className="text-sm text-muted-foreground">Local Volunteer, 2024</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "As a Folkestone resident, I'd walked past this site for years without understanding its significance.
                  The weekend program gave me practical archaeology skills and a deeper connection to my local heritage.
                  I've returned for three seasons now!"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Accommodation</h2>
            <p className="mt-2 text-muted-foreground">
              Choose the option that best suits your needs and budget
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?fit=crop&w=800&h=400"
                    alt="Shared student accommodation with modern facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Shared Apartments</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our preferred accommodation option includes modern 4-person shared apartments in Folkestone town center. 
                    Each participant has their own bedroom with shared kitchen and living areas.
                  </p>
                  <ul className="mt-4 text-sm text-muted-foreground space-y-1">
                    <li>• Private bedroom with study space</li>
                    <li>• Shared kitchen and common areas</li>
                    <li>• WiFi and utilities included</li>
                    <li>• 10-minute walk to site</li>
                    <li>• Weekly cleaning service</li>
                  </ul>
                  <p className="mt-4 text-lg font-semibold">£800 (2 weeks)</p>
                </div>
              </div>
              
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?fit=crop&w=800&h=400"
                    alt="Independent accommodation options in Folkestone"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Independent Options</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    We can provide recommendations for local B&Bs, hotels, or private rentals if you prefer 
                    to arrange your own accommodation. Many participants choose this option for family stays.
                  </p>
                  <ul className="mt-4 text-sm text-muted-foreground space-y-1">
                    <li>• Hotels from £60/night</li>
                    <li>• B&Bs from £45/night</li>
                    <li>• Private rentals available</li>
                    <li>• Family-friendly options</li>
                    <li>• Transport advice provided</li>
                  </ul>
                  <p className="mt-4 text-lg font-semibold">£650 (course only)</p>
                </div>
              </div>
            </div>
          </div>

          {/* What to See/Do in Folkestone */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">What to See & Do in Folkestone</h2>
            <p className="mt-2 text-muted-foreground">
              Make the most of your time off-site exploring this vibrant coastal town
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?fit=crop&w=800&h=400"
                    alt="Folkestone Creative Quarter with art installations and cafes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Creative Quarter & Harbor</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Explore Folkestone's transformation from traditional port to cultural hub. The Creative Quarter 
                    features artist studios, independent shops, and the famous Harbor Arm with its lighthouse bar.
                  </p>
                  <ul className="mt-4 text-sm text-muted-foreground space-y-1">
                    <li>• Folkestone Artworks outdoor exhibition</li>
                    <li>• Independent galleries and studios</li>
                    <li>• Harbor Arm sunset drinks</li>
                    <li>• Local food markets</li>
                    <li>• Live music and events</li>
                  </ul>
                </div>
              </div>
              
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=800&h=400"
                    alt="The Leas promenade with Victorian gardens and sea views"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Victorian Heritage & Nature</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Discover Folkestone's Victorian elegance along the famous Leas promenade, with its ornamental 
                    gardens, cliff railway, and stunning views across the English Channel to France.
                  </p>
                  <ul className="mt-4 text-sm text-muted-foreground space-y-1">
                    <li>• The Leas cliff-top promenade</li>
                    <li>• Historic Leas Lift funicular railway</li>
                    <li>• Coastal walks and beach access</li>
                    <li>• Folkestone Museum</li>
                    <li>• Kent Downs nearby</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link
                href="/folkestone"
                className="inline-flex items-center text-primary hover:underline"
              >
                Discover more about Folkestone
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Apply Now CTA */}
          <div className="rounded-lg bg-primary p-8 text-primary-foreground">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Ready to Join Us at East Wear Bay?</h2>
              <p className="mt-2">
                Applications for our 2025 field school sessions are now open. Places fill quickly, so we recommend applying early.
              </p>
              <div className="mt-6">
                <Link
                  href="/field-school/apply"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 font-medium text-primary shadow-sm hover:bg-white/90"
                >
                  Apply to the Field School
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
=======
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Sparkles, ArrowRight, School, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Field School | East Wear Bay Archaeological Project',
  description: 'Join our archaeological field school at the Folkestone Roman Villa site and gain hands-on excavation experience while helping preserve a heritage site threatened by coastal erosion.',
}

export default function FieldSchoolPage() {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1598449426314-8b02525e8733?fit=crop&w=2000&h=800"
          alt="Students excavating at the East Wear Bay archaeological site with tools and equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">East Wear Bay Field School</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl">
              Learn archaeological techniques while helping to preserve a Roman villa threatened by coastal erosion
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-lg border bg-card p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold">2025 Field School Sessions</h2>
            <p className="mt-2 text-muted-foreground">
              Join our internationally recognized field school for hands-on archaeological experience at the Folkestone Roman Villa site
            </p>
            
            <div className="mt-6 grid gap-6">
              {/* Session 1 */}
              <div className="rounded-lg border p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium">Summer Session</h3>
                    <p className="text-sm text-muted-foreground">For university students and adult learners</p>
                  </div>
                  <Link
                    href="/field-school/apply"
                    className="mt-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 sm:mt-0"
                  >
                    Apply now
                  </Link>
                </div>
                
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">July 5 - August 2, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">4 weeks, full-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">East Wear Bay, Folkestone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">20 participants</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm">
                    This intensive four-week session provides comprehensive training in excavation techniques, recording, 
                    finds processing, and site interpretation. Suitable for university students 
                    (with potential academic credit) and adult learners.
                  </p>
                </div>
              </div>
              
              {/* Session 2 */}
              <div className="rounded-lg border p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium">Community Weekend Program</h3>
                    <p className="text-sm text-muted-foreground">For local residents and beginners</p>
                  </div>
                  <Link
                    href="/field-school/apply"
                    className="mt-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 sm:mt-0"
                  >
                    Apply now
                  </Link>
                </div>
                
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">June - September 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Weekends only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">East Wear Bay, Folkestone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">10 participants per weekend</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm">
                    Our weekend program allows local residents and beginners to participate in ongoing excavations 
                    with flexible scheduling. Each weekend includes training, excavation experience, and finds processing. 
                    No previous experience required.
                  </p>
                </div>
              </div>
              
              {/* Session 3 */}
              <div className="rounded-lg border p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium">Youth Field School</h3>
                    <p className="text-sm text-muted-foreground">For students aged 16-18</p>
                  </div>
                  <Link
                    href="/field-school/apply"
                    className="mt-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 sm:mt-0"
                  >
                    Apply now
                  </Link>
                </div>
                
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">August 10-21, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">2 weeks, daytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">East Wear Bay, Folkestone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">15 participants</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm">
                    Designed specifically for young people considering archaeology or heritage careers. This two-week program 
                    provides age-appropriate training, excavation experience, and insight into archaeological 
                    practices and potential career paths.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* What You'll Learn */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">What You'll Learn</h2>
            <p className="mt-2 text-muted-foreground">
              Our field school provides comprehensive training in archaeological methods and techniques
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">Excavation Techniques</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn proper excavation methods including troweling, context identification, and stratigraphic principles.
                </p>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2 12h2"></path><path d="M6 12h2"></path><path d="M10 12h2"></path><path d="M18 12h2"></path><path d="M14 12h2"></path><path d="M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M14 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M6 16V8"></path><path d="M14 16V8"></path><path d="M6 12h8"></path></svg>
                </div>
                <h3 className="text-lg font-medium">Site Recording</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Master archaeological documentation including context sheets, planning, section drawing, and digital recording.
                </p>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3 className="text-lg font-medium">Finds Processing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Develop skills in washing, marking, identification, and preliminary analysis of archaeological materials.
                </p>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"></path><path d="M8 14v.5"></path><path d="M16 14v.5"></path><path d="M11.5 17h1"></path></svg>
                </div>
                <h3 className="text-lg font-medium">Survey Techniques</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Introduction to archaeological survey methods including total station use, GIS applications, and geophysical survey.
                </p>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="8" x2="16" y1="10" y2="10"></line><line x1="8" x2="16" y1="14" y2="14"></line><line x1="8" x2="16" y1="18" y2="18"></line></svg>
                </div>
                <h3 className="text-lg font-medium">Archaeological Theory</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Engage with archaeological interpretation, contextual analysis, and understanding site formation processes.
                </p>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                </div>
                <h3 className="text-lg font-medium">Digital Archaeology</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Introduction to digital recording, 3D modeling, and documentation technologies used in modern archaeology.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Join Our Field School */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Why Join Our Field School</h2>
            
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <School className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Hands-on Learning</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Gain practical field experience under the guidance of professional archaeologists with varying levels of experience accommodated.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Academic Credit</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    University students can earn academic credit through our partnerships with UK and international institutions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="5" r="3"></circle><line x1="12" x2="12" y1="22" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Save Heritage at Risk</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Contribute to the preservation of important archaeological data from a site threatened by coastal erosion.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Professional Networking</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Connect with archaeologists, specialists, and fellow students to build valuable professional relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Participant Testimonials</h2>
            
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=400&h=400"
                      alt="Sarah, university student"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah</p>
                    <p className="text-sm text-muted-foreground">University Student, 2024</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "The East Wear Bay Field School exceeded all my expectations. The training was thorough, the site 
                  fascinating, and the experience of working on a site that's actively being lost to erosion made 
                  our work feel urgent and meaningful."
                </blockquote>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400"
                      alt="David, local volunteer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">David</p>
                    <p className="text-sm text-muted-foreground">Local Volunteer, 2024</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "As a Folkestone resident, I'd walked past this site for years without understanding its significance. 
                  The weekend program gave me practical archaeology skills and a deeper connection to my local heritage. 
                  I've returned for three seasons now!"
                </blockquote>
              </div>
            </div>
          </div>
          
          {/* Apply Now CTA */}
          <div className="rounded-lg bg-primary p-8 text-primary-foreground">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Ready to Join Us at East Wear Bay?</h2>
              <p className="mt-2">
                Applications for our 2025 field school sessions are now open. Places fill quickly, so we recommend applying early.
              </p>
              <div className="mt-6">
                <Link
                  href="/field-school/apply"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 font-medium text-primary shadow-sm hover:bg-white/90"
                >
                  Apply to the Field School
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
}