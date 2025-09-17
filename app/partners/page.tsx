import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Handshake } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { client, urlForImage } from '@/lib/sanity.client'
import { partnersQuery } from '@/lib/queries/partners'

export const metadata: Metadata = {
  title: 'Partners & Funders | East Wear Bay Archaeological Project',
  description: 'Our partners and funders who make the East Wear Bay Archaeological Project possible through their generous support and collaboration.',
}

// Revalidate page every hour
export const revalidate = 3600

export default async function PartnersPage() {
  // Fetch partners from Sanity
  const partners = await client.fetch(partnersQuery)
  
  // Separate partners by type based on partnershipType field
  const principalFunders = partners.filter((p: any) => 
    p.partnershipType?.toLowerCase().includes('principal') || 
    p.partnershipType?.toLowerCase().includes('funder')
  )
  
  const leadPartners = partners.filter((p: any) => 
    p.partnershipType?.toLowerCase().includes('lead') || 
    p.partnershipType?.toLowerCase().includes('academic')
  )
  
  const supporters = partners.filter((p: any) => 
    !p.partnershipType?.toLowerCase().includes('principal') && 
    !p.partnershipType?.toLowerCase().includes('funder') &&
    !p.partnershipType?.toLowerCase().includes('lead') &&
    !p.partnershipType?.toLowerCase().includes('academic')
  )

  return (
    <>
      <PageHero
        title="Working Together"
        description="The East Wear Bay Archaeological Project is a community project with the aim of researching the historic landscape of East Wear Bay and preserving archaeological remains associated with Folkestone Roman Villa 'by record' before they are lost forever to coastal erosion."
        icon={Handshake}
        variant="image"
        backgroundImage="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Partners/Partners_Hero_EWB.webp?updatedAt=1758121883166"
      />

      <div className="container py-12">
        <div className="mx-auto max-w-6xl">
          {/* New introductory section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Working together to discover the past and inspire the future</h2>
            <div className="space-y-4 text-muted-foreground max-w-4xl mx-auto">
              <p>
                The East Wear Bay project, spearheaded by Canterbury Archaeological Trust (CAT), is breathing new life into Folkestone's rich heritage. With their deep archaeological expertise, CAT is safeguarding this remarkable site for generations to come.
              </p>
              <p>
                But it's not just about preservation—it's about participation. CAT's dedicated engagement team has teamed up with the local community to create fresh, interactive ways to explore the fascinating story of the Folkestone Roman Villa and its surrounding landscape.
              </p>
              <p>
                Thanks to the support of our funders and partners, the East Wear Bay project is proudly celebrating our shared history through hands-on learning experiences that connect people with the past while strengthening community ties.
              </p>
            </div>
          </div>

          {/* Funders Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Funders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'National Lottery Heritage Fund', logo: null },
                { name: 'Roger De Haan Charitable Trust', logo: null },
                { name: 'Garfield Weston Charitable Trust', logo: null },
                { name: 'The Lawson Trust', logo: null },
                { name: 'Friends of Canterbury Archaeological Trust', logo: null },
                { name: 'Kent Community Foundation', logo: null },
                { name: 'Folkestone Town Council', logo: null },
                { name: 'Folkestone and Hythe District Council', logo: null },
                { name: 'Council for British Archaeology', logo: null },
                { name: 'Association for Roman Archaeology', logo: null },
                { name: 'Society of the Promotion of Roman Studies', logo: null }
              ].map((funderInfo) => {
                // Try to find the funder in the Sanity data
                const funder = principalFunders.find((p: any) =>
                  p.name?.toLowerCase().includes(funderInfo.name.toLowerCase()) ||
                  funderInfo.name.toLowerCase().includes(p.name?.toLowerCase())
                );

                return (
                  <div key={funderInfo.name} className="text-center">
                    <div className="mb-4 bg-muted rounded-lg p-8 h-32 flex items-center justify-center">
                      {funder?.logo ? (
                        <Image
                          src={urlForImage(funder.logo)?.url() || ''}
                          alt={funder.logo.alt || funderInfo.name}
                          width={200}
                          height={80}
                          className="max-h-20 w-full object-contain"
                        />
                      ) : funderInfo.logo ? (
                        <Image
                          src={funderInfo.logo}
                          alt={funderInfo.name}
                          width={200}
                          height={80}
                          className="max-h-20 w-full object-contain"
                        />
                      ) : (
                        <span className="text-sm text-muted-foreground font-medium">{funderInfo.name}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg">{funderInfo.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Lead Partners */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Lead Partners</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our lead partners bring expertise, resources, and community connections that are essential to the project's success.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { name: 'Folkestone Museum', logo: null },
                { name: 'The University of Kent', logo: null },
                { name: 'Dover Archaeology Group', logo: null },
                { name: 'Folkestone Research and Archaeology Group', logo: null },
                { name: 'Canterbury Christ Church University', logo: null },
                { name: 'Folkestone and Hythe District Council', logo: null },
                { name: 'Folkestone Town Council', logo: null },
                { name: 'Historic England', logo: null },
                { name: 'Kent Archaeological Society', logo: null },
                { name: 'Kent Downs Landscape', logo: null },
                { name: 'Creative Folkestone', logo: null }
              ].map((partnerInfo) => {
                // Try to find the partner in the Sanity data
                const partner = leadPartners.find((p: any) =>
                  p.name?.toLowerCase().includes(partnerInfo.name.toLowerCase()) ||
                  partnerInfo.name.toLowerCase().includes(p.name?.toLowerCase())
                );

                return (
                  <div key={partnerInfo.name} className="group">
                    {partner?.website ? (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border bg-card p-4 transition-all hover:shadow-md hover:border-primary/50"
                        title={partnerInfo.name}
                      >
                        <div className="h-20 flex items-center justify-center p-2">
                          {partner?.logo ? (
                            <Image
                              src={urlForImage(partner.logo)?.url() || ''}
                              alt={partner.logo.alt || partnerInfo.name}
                              width={150}
                              height={80}
                              className="max-h-16 w-full object-contain"
                            />
                          ) : partnerInfo.logo ? (
                            <Image
                              src={partnerInfo.logo}
                              alt={partnerInfo.name}
                              width={150}
                              height={80}
                              className="max-h-16 w-full object-contain"
                            />
                          ) : (
                            <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
                              {partnerInfo.name}
                            </span>
                          )}
                        </div>
                      </a>
                    ) : (
                      <div className="rounded-lg border bg-card p-4" title={partnerInfo.name}>
                        <div className="h-20 flex items-center justify-center p-2">
                          {partner?.logo ? (
                            <Image
                              src={urlForImage(partner.logo)?.url() || ''}
                              alt={partner.logo.alt || partnerInfo.name}
                              width={150}
                              height={80}
                              className="max-h-16 w-full object-contain"
                            />
                          ) : partnerInfo.logo ? (
                            <Image
                              src={partnerInfo.logo}
                              alt={partnerInfo.name}
                              width={150}
                              height={80}
                              className="max-h-16 w-full object-contain"
                            />
                          ) : (
                            <span className="text-sm font-medium text-center text-muted-foreground">
                              {partnerInfo.name}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          
          {/* Acknowledgment Text */}
          <div className="rounded-lg border bg-muted/50 p-8 mb-12">
            <p className="text-center text-muted-foreground">
              We are grateful to all our partners and supporters for their continuing support of the project. 
              Their contributions, whether through funding, expertise, or resources, are essential to preserving 
              the archaeological heritage of East Wear Bay for future generations.
            </p>
          </div>
          
          <div className="mt-16 space-y-8">
            <div className="rounded-lg border bg-muted/50 p-8">
              <h2 className="text-2xl font-bold text-center mb-4">Become a Partner</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                We welcome partnerships with organizations that share our commitment to archaeological preservation, 
                education, and community engagement. Whether through funding, expertise, or resources, 
                your support can make a real difference.
              </p>
              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-8">
              <h2 className="text-2xl font-bold text-center mb-4">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold mb-2">Community Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Support vital archaeological work that engages the local community and preserves 
                    important heritage for future generations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Research Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Contribute to cutting-edge archaeological research that advances our understanding 
                    of Romano-British society and culture.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Educational Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Help provide training and educational experiences for students, volunteers, 
                    and the wider public through our field school and outreach programs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Digital Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Support pioneering digital preservation techniques that ensure archaeological 
                    discoveries are accessible long after the physical site is lost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}