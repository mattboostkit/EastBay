import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About the Project | East Wear Bay Archaeological Project',
  description: 'Learn about the East Wear Bay Project\'s mission to preserve the Folkestone Roman Villa site through excavation, digital preservation, and community archaeology before coastal erosion claims it completely.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About the Project"
        description="The East Wear Bay Archaeological project is a community-led initiative to investigate, record, preserve and share the archaeological landscape at East Wear Bay before it is lost to coastal erosion."
        icon={Info}
        variant="gradient"
      />
      
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="text-muted-foreground">
                  The East Wear Bay Archaeological project was founded in 2015 with a critical mission: to excavate and record a nationally significant Iron Age and Roman villa site that is rapidly disappearing due to coastal erosion along the Kent cliffs.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Alongside the important job of preserving the site by record, the project involves working within the Kent community to communicate the outputs of the excavation and to share everything that site can teach us about our culture and heritage.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our approach brings together archaeologist, specialists, students, artists, schools, and community members in collaborative fieldwork and outreach activities. The work we undertake not only records valuable archaeological data but also creates meaningful connections to local heritage.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[300px]">
                <Image 
                  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg" 
                  alt="Eroding cliff face at East Wear Bay showing archaeological features being lost to the sea"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
          
          {/* Our Funders */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold">Our Funders</h2>
            <p className="mt-3 text-muted-foreground">
              The East Wear Bay Archaeological Project is made possible through the generous support of our funding partners.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">National Lottery Heritage Fund</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">John Swire Charitable Trust</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">Roger De Haan Charitable Trust</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">Garfield Weston Foundation</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">The Lawson Trust</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">Friends of Canterbury Archaeological Trust</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">Association of Roman Archaeology</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">Folkestone Town Council</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">The Roman Society</h3>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">University of Kent</h3>
              </div>
            </div>
          </section>
          
          {/* Our Beneficiaries */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold">Our Beneficiaries</h2>
            <p className="mt-3 text-muted-foreground">
              We are proud to have worked with numerous schools, community groups, and organizations across Kent.
            </p>
            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Primary Schools</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• St Thomas School Catholic Primary School, Canterbury</li>
                  <li>• Christ Church, Church of England School, Folkestone</li>
                  <li>• Harcourt Community Primary, Folkestone</li>
                  <li>• Nonington Church of England School, Dover</li>
                  <li>• Castle Hill Community Primary, Folkestone</li>
                  <li>• St Mary's Primary Academy, Folkestone</li>
                  <li>• Mundella Primary School, Folkestone</li>
                  <li>• Haddon Dene Primary School</li>
                  <li>• St Peter's Church of England School Folkestone</li>
                  <li>• Martello Primary School, Folkestone</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">SEND/SEN Schools and Students</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• The Beacon School, Folkestone</li>
                  <li>• Students at Castle Hill Community Primary HI SRP, Folkestone</li>
                  <li>• Rosewood School, Staplehurst</li>
                  <li>• Goodnestone Primary School</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Universities and Colleges</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• East Kent College, Canterbury</li>
                  <li>• University of Kent, Canterbury</li>
                  <li>• Canterbury Christ Church University, Canterbury</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground font-semibold">Plus, students from the following universities:</p>
                <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                  <li>• University College London</li>
                  <li>• University of Bristol</li>
                  <li>• University of Aberdeen</li>
                  <li>• University of Pécs</li>
                  <li>• University of Nottingham</li>
                  <li>• Louisiana State University</li>
                  <li>• University of Melbourne</li>
                  <li>• Grand Valley State University</li>
                  <li>• University of North Carolina at Chapel Hill</li>
                  <li>• University of Toronto</li>
                  <li>• University of Leicester</li>
                  <li>• St. Lawrence University</li>
                  <li>• Macquarie University</li>
                  <li>• University of Winchester</li>
                  <li>• Yale University</li>
                  <li>• University of Cambridge</li>
                  <li>• University of Leiden</li>
                  <li>• Newcastle University</li>
                  <li>• Harvard University</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Community Groups</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Sunflower House</li>
                  <li>• Touchbase Care</li>
                  <li>• Lighthouse Dementia Café</li>
                  <li>• Hythe Dementia Café</li>
                  <li>• Forget-me-Not Dementia Café, Sevenoaks</li>
                  <li>• Thanington Dementia Café</li>
                  <li>• Wells Lodge Care Home</li>
                  <li>• Wells House Care home</li>
                  <li>• Pilgrims Hospice</li>
                  <li>• Nonington Farm</li>
                  <li>• Herne Bay Brownies</li>
                  <li>• 9th Deal Ash Scouts</li>
                  <li>• 2nd Sandgate Scouts</li>
                  <li>• Dover Archaeology Group</li>
                  <li>• Folkestone Research and Archaeology Group</li>
                  <li>• Hythe Walking Group</li>
                  <li>• Amber Foundation</li>
                  <li>• Young Archaeologist Club, Canterbury</li>
                  <li>• Hythe Local History Group</li>
                  <li>• Warnborough Foundation</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* The Archaeology */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold">The Archaeology</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative rounded-lg overflow-hidden h-[300px] md:order-2">
                <Image 
                  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg" 
                  alt="Archaeological excavation of the Folkestone Roman Villa showing room foundations and features"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-1">
                <p className="text-muted-foreground">
                  East Wear Bay has been a focus for human activity for millennia. While the Roman villa (1st-4th century CE) is the most prominent feature, excavations have revealed evidence spanning from the Upper Paleolithic through to the modern era.
                </p>
                <p className="mt-4 text-muted-foreground">
                  The Roman villa was a substantial coastal estate featuring mosaic floors, painted wall plaster and a hypocaust heating system. However, the site has also yielded significant evidence for Iron Age occupation, as well as being an important site for quern production during the Late Iron Age.
                </p>
                <p className="mt-4 text-muted-foreground">
                  First excavated in the 1920s by SE Winbolt and his daughter, Rosalind, this multi-period archaeological landscape provides unique insights into over 12,000 years of human history within a dynamic coastal environment.
                </p>
              </div>
            </div>
          </section>
          
          {/* Our Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold">Our Approach</h2>
            <div className="mt-6">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-semibold">Rescue Archaeology</h3>
                <p className="mt-3 text-muted-foreground">
                  Our primary focus is conducting methodical excavations in the areas most at risk of imminent erosion. We work with urgency but maintain rigorous archaeological standards to ensure proper documentation of all features and finds.
                </p>
              </div>
              
              <div className="mt-4 rounded-lg border p-6">
                <h3 className="text-xl font-semibold">Digital Preservation</h3>
                <p className="mt-3 text-muted-foreground">
                  We employ cutting-edge digital technologies including photogrammetry, 3D scanning, and immersive visualization to create permanent digital records of the site and its artefacts. These digital assets form an archive that will outlast the physical site.
                </p>
              </div>
              
              <div className="mt-4 rounded-lg border p-6">
                <h3 className="text-xl font-semibold">Community Archaeology</h3>
                <p className="mt-3 text-muted-foreground">
                  We believe that archaeology should be accessible to all. Our field school, volunteer programs, and public engagement initiatives create opportunities for people of all ages and backgrounds to participate in uncovering and preserving their local heritage.
                </p>
              </div>
              
              <div className="mt-4 rounded-lg border p-6">
                <h3 className="text-xl font-semibold">Academic Research</h3>
                <p className="mt-3 text-muted-foreground">
                  The project maintains academic rigour through partnerships with universities and specialists, regular reporting of findings, and contribution to broader research questions. These include themes relating to Romano-British and Iron Age settlement, economy and society, alongside investigations into the Iron Age to Roman period transition in Kent.
                </p>
              </div>
            </div>
          </section>
          
          {/* Project Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold">Project Timeline</h2>
            <div className="mt-6 relative border-l border-primary/30 pl-6">
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2015-2017</h3>
                <p className="mt-2 text-muted-foreground">
                  The East Wear Bay Archaeological Field School ran between 2015 and 2017 with the aim of investigating land to the north of the Villa. The focus of this excavation was to establish the extent of the earlier Iron Age features.
                </p>
              </div>
              
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2018-2021</h3>
                <p className="mt-2 text-muted-foreground">
                  Following the 2017 excavation season, lack of available funds and the COVID pandemic, necessitated a halt in the fieldwork programme. Some funds were obtained in 2021 to undertake a review of the recorded information and to produce a detailed conservation management plan for the site.
                </p>
              </div>
              
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2022</h3>
                <p className="mt-2 text-muted-foreground">
                  In a small community excavation was undertaken to investigate villa Room 40, known to contain a mosaic. The work was designed to determine the preservation level of the mosaic. Exploratory trenching was also undertaken on Copt Point where a mound enclosing a Second World War bunker was shown to be earlier than the building it surrounds.
                </p>
              </div>
              
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2023-2024</h3>
                <p className="mt-2 text-muted-foreground">
                  Expanded excavations with major funding from the national Lottery Heritage Fund. This included expanded community engagement initiatives and the development of the East Wear Bay heritage portal with the digital museum.
                </p>
              </div>
              
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2025</h3>
                <p className="mt-2 text-muted-foreground">
                  A small-scale community excavation and international field school focused on the seaward side of the villa to further explore the landscape during the Iron Age to Roman period transition.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2026-2027</h3>
                <p className="mt-2 text-muted-foreground">
                  Further funding is being sought to further the excavation and digital conservation work for areas most at risk of coastal erosion. Continued community involvement is planned with a broader engagement programme.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/timeline" 
                className="inline-flex items-center text-primary"
              >
                View detailed project timeline
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}