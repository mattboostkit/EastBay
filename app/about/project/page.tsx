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
        description="The East Wear Bay Archaeological Project is a community-led initiative to investigate, record, and preserve the Roman villa at Folkestone's East Wear Bay before it is lost to coastal erosion."
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
                  The East Wear Bay Archaeological Project was founded in 2015 with a critical mission: to rescue archaeological information from a nationally significant Roman villa site that is rapidly disappearing due to coastal erosion along the Kent cliffs.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Through a combination of professional archaeological investigation, digital preservation techniques, and community engagement, we are racing against time to document this important heritage site before it is lost forever to the sea.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our approach brings together archaeologists, specialists, students, and local community members in collaborative fieldwork that not only records valuable historical data but also creates meaningful connections to local heritage.
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
                <p className="mt-2 text-sm text-muted-foreground">Major funding for excavation and digital preservation</p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">Canterbury Archaeological Trust</h3>
                <p className="mt-2 text-sm text-muted-foreground">Core operational support and expertise</p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-center">
                <h3 className="text-lg font-bold">Kent County Council</h3>
                <p className="mt-2 text-sm text-muted-foreground">Community engagement funding</p>
              </div>
            </div>
          </section>
          
          {/* Our Beneficiaries */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold">Our Beneficiaries</h2>
            <p className="mt-3 text-muted-foreground">
              We are proud to have worked with numerous schools, community groups, and organizations across Kent.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold mb-3">Schools</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Folkestone Primary Academy</li>
                  <li>• St Eanswythe's Church of England Primary School</li>
                  <li>• The Harvey Grammar School</li>
                  <li>• Pent Valley Technology College</li>
                  <li>• Canterbury Academy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Community Groups</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Folkestone Memory Café</li>
                  <li>• Age UK Canterbury</li>
                  <li>• Kent Archaeological Society</li>
                  <li>• Folkestone Local History Society</li>
                  <li>• Creative Folkestone</li>
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
                  East Wear Bay has been a focus of human activity for millennia. While the Roman villa (late 1st-4th century CE) is the most prominent feature, excavations have revealed evidence spanning from the Bronze Age through to the medieval period.
                </p>
                <p className="mt-4 text-muted-foreground">
                  The Roman villa was a substantial coastal estate featuring mosaic floors, painted wall plaster, and a hypocaust heating system. However, the site also includes Iron Age settlement remains, Saxon occupation evidence, and medieval field systems.
                </p>
                <p className="mt-4 text-muted-foreground">
                  First identified in the 1920s by S.E. Winbolt, the site has faced accelerating coastal erosion since 2010. This multi-period archaeological landscape provides unique insights into 3,000 years of human adaptation to this dynamic coastal environment.
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
                  The project maintains academic rigor through partnerships with universities, regular publication of findings, and contribution to broader research questions about Romano-British settlement, economy, and society in coastal Kent.
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
                <h3 className="text-xl font-semibold">2015</h3>
                <p className="mt-2 text-muted-foreground">
                  Initial assessment of erosion threat and establishment of the East Wear Bay Project as a collaboration between local heritage groups and Kent Archaeological Society.
                </p>
              </div>
              
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2016-2019</h3>
                <p className="mt-2 text-muted-foreground">
                  First phase of fieldwork focusing on eastern wing of the villa complex. Establishment of the field school and initial community volunteer program.
                </p>
              </div>
              
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2020-2021</h3>
                <p className="mt-2 text-muted-foreground">
                  Limited fieldwork due to pandemic restrictions. Focus shifted to processing existing findings and developing digital preservation methodologies.
                </p>
              </div>
              
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2022-2024</h3>
                <p className="mt-2 text-muted-foreground">
                  Expanded excavations with major funding from the National Lottery Heritage Fund. Launch of comprehensive digital museum and expanded community engagement initiatives.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">2025-2028</h3>
                <p className="mt-2 text-muted-foreground">
                  Current phase focusing on remaining villa structures at highest risk. Enhanced public programming and development of permanent digital heritage resources.
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
          
          {/* Our Team */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold">Our Team</h2>
            <p className="mt-3 text-muted-foreground">
              The East Wear Bay Project brings together professionals, students, and volunteers with a shared passion for preserving archaeological heritage.
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                    alt="Dr. Emma Richards, Project Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold">Dr. Emma Richards</h3>
                <p className="text-sm text-muted-foreground">Project Director</p>
                <p className="mt-2 text-xs text-muted-foreground">Romano-British Archaeology</p>
                <Link 
                  href="/team/emma-richards" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View profile
                </Link>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                    alt="Dr. James Wilson, Field Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold">Dr. James Wilson</h3>
                <p className="text-sm text-muted-foreground">Field Director</p>
                <p className="mt-2 text-xs text-muted-foreground">Coastal Archaeology</p>
                <Link 
                  href="/team/james-wilson" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View profile
                </Link>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
                    alt="Dr. Sophie Chen, Digital Heritage Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold">Dr. Sophie Chen</h3>
                <p className="text-sm text-muted-foreground">Digital Heritage Lead</p>
                <p className="mt-2 text-xs text-muted-foreground">Archaeological Visualization</p>
                <Link 
                  href="/team/sophie-chen" 
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary"
                >
                  View profile
                </Link>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/team" 
                className="inline-flex items-center text-primary"
              >
                View all team members
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </section>
          
          {/* Partners and Funders */}
          <section>
            <h2 className="text-2xl font-bold">Partners and Funders</h2>
            <p className="mt-3 text-muted-foreground">
              The East Wear Bay Project is made possible through the generous support of our partners and funders.
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="flex h-16 w-full items-center justify-center">
                  <span className="text-lg font-bold text-primary">Heritage Fund</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Principal Funder</p>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="flex h-16 w-full items-center justify-center">
                  <span className="text-lg font-bold text-primary">Kent University</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Academic Partner</p>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="flex h-16 w-full items-center justify-center">
                  <span className="text-lg font-bold text-primary">Folkestone Museum</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Heritage Partner</p>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-5 text-center">
                <div className="flex h-16 w-full items-center justify-center">
                  <span className="text-lg font-bold text-primary">Kent Archaeology</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Supporting Organization</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/partners" 
                className="inline-flex items-center text-primary"
              >
                View all partners and funders
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}