import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Sparkles, ArrowRight, School, Award, Star } from 'lucide-react'
import { fetchFeaturedTestimonials } from '@/lib/sanity.unified'
import { urlFor } from '@/lib/sanity.client'
import { client } from '@/lib/sanity.client'

export const metadata: Metadata = {
  title: 'Field School | East Wear Bay Archaeological Project',
  description: 'Join our archaeological field school at the Folkestone Roman Villa site and gain hands-on excavation experience while helping preserve a heritage site threatened by coastal erosion.',
}

async function getFieldSchoolSessions() {
  const query = `*[-type == "fieldSchoolSession" && isActive == true] | order(displayOrder asc, year desc) {
    -id,
    title,
    slug,
    year,
    tagline,
    description,
    dates,
    startDate,
    endDate,
    duration,
    location,
    participantLimit,
    registrationStatus,
    registrationOpenDate,
    registrationButtonText,
    additionalInfo
  }`

  return client.fetch(query)
}

export default async function FieldSchoolPage() {
  const [testimonials, fieldSchoolSessions] = await Promise.all([
    fetchFeaturedTestimonials(),
    getFieldSchoolSessions()
  ])

  // If no sessions exist, create a default one
  const sessions = fieldSchoolSessions?.length > 0 ? fieldSchoolSessions : [{
    title: 'Archaeology Field School',
    year: 2026,
    tagline: 'For university students and adult learners',
    description: 'This intensive two-week field school provides comprehensive training in excavation techniques, recording, finds processing, and other field working skills. Students will work towards the completion of a portfolio to show evidence of learning and BAJR skills passport. Suitable for university students and adult learners.',
    dates: 'Dates TBA',
    duration: '2 weeks, full time',
    location: 'East Wear Bay Folkestone',
    participantLimit: 25,
    registrationStatus: 'not-open',
    registrationOpenDate: 'December 2025',
    registrationButtonText: 'Registration Opens Dec 2025'
  }]

  return (
    <>
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Field%20School/Field_School_Banner_EWB.webp?updatedAt=1758122483742"
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
              Learn fieldwork skills while helping to preserve an internationally significant archaeological site threatened by coastal erosion.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-lg border bg-card p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold">{sessions[0].year} East Wear Bay Field School</h2>
            <p className="mt-2 text-muted-foreground">
              {sessions[0].registrationStatus === 'not-open' && sessions[0].registrationOpenDate
                ? `We are not currently taking any bookings for the ${sessions[0].year} field school. We will open early registration for the course in ${sessions[0].registrationOpenDate} so watch this space.`
                : sessions[0].registrationStatus === 'open'
                ? 'Applications are now open for our field school sessions.'
                : 'Please check back for field school opportunities.'}
            </p>

            <div className="mt-6 grid gap-6">
              {sessions.map((session: any) => (
                <div key={session.-id || session.title} className="rounded-lg border p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-medium">{session.title}</h3>
                      {session.tagline && (
                        <p className="text-sm text-muted-foreground">{session.tagline}</p>
                      )}
                    </div>
                    <button
                      disabled={session.registrationStatus !== 'open'}
                      className={`mt-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium sm:mt-0 ${
                        session.registrationStatus === 'open'
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {session.registrationButtonText ||
                        (session.registrationStatus === 'not-open' ? 'Registration Not Open' :
                         session.registrationStatus === 'closed' ? 'Applications Closed' :
                         session.registrationStatus === 'full' ? 'Session Full' :
                         'Apply Now')}
                    </button>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.dates || 'Dates TBA'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{session.participantLimit} participants</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm">{session.description}</p>
                  </div>

                  {session.additionalInfo && session.additionalInfo.length > 0 && (
                    <div className="mt-4 prose prose-sm max-w-none">
                      {/* Portable text would go here if needed */}
                    </div>
                  )}
                </div>
              ))}
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
                <div className="mt-2 text-3xl font-bold">£950</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A two-week Field School placement includes all training and necessary equipment, plus accommodation in Folkestone.
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
              No prior experience is required. CAT provides accredited professional training. Individual progress is logged using the BAJR skills passport, a document recognised by professional and academic institutions in the UK.
            </p>
          </div>

          {/* Course Tutors */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Course Tutors</h2>
            <p className="mt-2 text-muted-foreground">
              Learn from experienced professionals who are passionate about sharing their knowledge
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Dr Lindsay Banfield, PhD AFHEA</h3>
                <p className="text-sm font-medium text-muted-foreground">CAT Head of Engagement and Marketing</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lindsay is a specialist in worked stone artefacts and Roman period small finds. She has taught students at field schools for UCL, the Culver Project and for CAT for over 8 years.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Andy Macintosh ACIfA PGCE</h3>
                <p className="text-sm font-medium text-muted-foreground">CAT Education and Project Officer</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Andy is an experienced field archaeologist who has been involved with the East Wear Bay project since 2011. He is also a qualified teacher who has directed fieldwork on commercial and community excavations.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Frances Morgan MA</h3>
                <p className="text-sm font-medium text-muted-foreground">CAT Engagement Assistant</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Frances is an experienced field archaeologist with a passion for post-medieval archaeology and human osteology.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Heather Hanson BA</h3>
                <p className="text-sm font-medium text-muted-foreground">CAT Engagement Assistant</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Heather is interested in the late Iron Age and Early Roman periods in Britain. She is passionate about fostering people's interest in the past for all time periods.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Dr Steve Willis PhD MCIfA</h3>
                <p className="text-sm font-medium text-muted-foreground">University of Kent</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Steve teaches archaeology and fieldwork modules at the University of Kent. He has significant excavation experience from digs and surveys for training and research at Iron Age and Roman sites in Britain and abroad.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Illia Shabalkin</h3>
                <p className="text-sm font-medium text-muted-foreground">Student Support Staff, University College London</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Illia is an undergraduate student with UCL and has been volunteering at East Wear Bay for two years. He has a passion for archaeology, with a particular interest in worked flint.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Adalina Teoaca MSc MA PCIfA</h3>
                <p className="text-sm font-medium text-muted-foreground">CAT Finds and Archives Manager</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Adelina is a specialist in bioarchaeology, an advocate for science in archaeology and an experienced post-excavation manager.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Rich Best MA</h3>
                <p className="text-sm font-medium text-muted-foreground">CAT Registered Finds Specialist</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Rich oversees the assessment and analysis of registered finds and has experience in running and supervising field schools. He is a specialist on Anglo-Saxon brooches.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Martha Carter BA</h3>
                <p className="text-sm font-medium text-muted-foreground">CAT Trainee Pottery Specialist</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Martha is learning to be a pottery specialist and can assess and analyse the different pottery fabrics and types of vessels that are uncovered during our excavations. She is particularly interested in Roman and Iron Age pottery.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Enid Allison PhD MCIfA</h3>
                <p className="text-sm font-medium text-muted-foreground">Environmental Manager and Specialist</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enid oversees environmental sampling, processing and post-excavation work for CAT and carries out analysis of insect remains from sites throughout Britain and Ireland.
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">What You'll Learn</h2>
            <p className="mt-4 text-muted-foreground">
              The aim of the field school is to provide training and coaching for anyone who has an interest in potentially pursuing a career in archaeology or heritage, or for those who want to formally develop their archaeological field-working skills. The field school forms part of an optional practical skills module for archaeology students at the University of Kent and is offered to those who wish to participate from other Higher Education institutes. Amateur archaeologists with some prior knowledge of fieldwork are also invited to participate.
            </p>
            <p className="mt-4 text-muted-foreground">
              The field school will be delivered through formal teaching sessions and informal practical learning. The formal sessions will be timetabled, with the schedule to be confirmed prior to your arrival in Folkestone. All sessions will be delivered by qualified and experienced heritage professionals. Some will be CAT staff members, including those currently working in commercial archaeology in the UK. Other sessions will be delivered by teaching staff from the University of Kent or by external tutors who have more specific specialist knowledge to share with you. The practical learning will be delivered through hands-on experience of excavation and recording while on site at East Wear Bay.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Site induction</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get an overview of the history and archaeology of the site and its importance.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Health and safety on site</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn how to work safely on an archaeological site, what the procedures are in the event of an emergency and how to safely use the excavation equipment.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">The written record</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Find out how to complete all the paperwork that we use when recording an archaeological feature.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Section drawing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gain experience in producing scale section drawings of archaeological features.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Plan drawing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Draw a plan while learning the correct conventions used in the archaeological profession.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Surveying</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gain practical skills on how to create site plans using a Total station or GPS.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Geophysical survey</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Carry out a geophysical survey to explore the below ground archaeology near the East Wear Bay site.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Historic Building Recording</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gain an introduction to Historic Building Recording and discover ways that this is used to conserve monuments and structures.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Finds processing and preparation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn how finds recovered from the site are processed and prepared for assessment.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Environmental processing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  After taking environmental samples on site, find out how they are processed and what we can learn from them.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-medium">Site photography</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get experience of site photography, the use of scales and how to create the best site photos for reports and publication.
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

          {/* Participant Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold">Participant Testimonials</h2>

            <div className="mt-6 space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3">
                  <p className="font-medium">University of Kent student</p>
                </div>
                <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "I found the experience very interesting and believed it greatly enhanced my understanding of field archaeology. Additionally, the members of CAT on site were extremely helpful in broadening my understanding of how to correctly excavate and document an archaeological site."
                </blockquote>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3">
                  <p className="font-medium">University of Kent student</p>
                </div>
                <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "Not only have I had incredible experiences excavating a Roman Villa, Iron Age Roundhouse, and investigating a possible barrow, but have done so alongside a wonderful and instructive team from CAT."
                </blockquote>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3">
                  <p className="font-medium">Dr Steve Willis</p>
                  <p className="text-sm text-muted-foreground">University of Kent</p>
                </div>
                <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                  "Over the past two seasons (2023 and 2024) CAT through the EWB Project have kindly undertaken to offer training and experience places and other opportunities to some of our students (these students coming from various backgrounds, and representing various types of learners). This has been an invaluable learning experience for our undergraduates that enables them to engage with the range of archaeological remains the site offers and develop skills in recording the evidence to a professional level. The students find the training accessible and carefully explained, with hands-on opportunities, with a range of equipment at this exciting site, rich in artefactual remains. These placements provided by the EWB Project staffed by CAT personnel would be very hard to match and so at the University we have been very pleased that CAT and the EWB Project has enabled these experiences. CAT staff have been generous with their time on site and subsequently, with support and further 'post-ex' opportunities provided through our subsequent University teaching term. The quality of the experience in my view is very high and greatly appreciated by our students. Only one or two of our students had any previous archaeological fieldwork experience and we can see from the quality of the academic work in their follow up Portfolios that they learned a great deal. Several are now minded to pursue archaeology as a career."
                </blockquote>
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
                    src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                    alt="Folkestone Creative Quarter with art installations and cafes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Creative Quarter & Harbour</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Explore Folkestone's transformation from traditional port to cultural hub. The Creative Quarter 
                    features artist studios, independent shops, and the famous Harbour Arm with its lighthouse bar.
                  </p>
                  <ul className="mt-4 text-sm text-muted-foreground space-y-1">
                    <li>• Folkestone Artworks outdoor exhibition</li>
                    <li>• Independent galleries and studios</li>
                    <li>• Harbour Arm sunset drinks</li>
                    <li>• Local food markets</li>
                    <li>• Live music and events</li>
                  </ul>
                </div>
              </div>
              
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
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
                Applications for our 2026 field school will open in December 2025. Check back then to secure your place.
              </p>
              <div className="mt-6">
                <button
                  disabled
                  className="inline-flex items-center rounded-md bg-white/50 px-6 py-3 font-medium text-primary/50 cursor-not-allowed"
                >
                  Applications Open December 2025
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}