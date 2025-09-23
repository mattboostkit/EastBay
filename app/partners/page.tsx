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
  // Principal Funders - exactly matching "Principal Funder"
  const funders = partners.filter((p: any) =>
    p.partnershipType === 'Principal Funder'
  )

  // Lead Partners - exactly matching "Lead Partner"
  const leadPartners = partners.filter((p: any) =>
    p.partnershipType === 'Lead Partner'
  )

  return (
    <>
      <PageHero
        title="Working Together"
        description="The East Wear Bay Archaeological Project is a community project with the aim of researching the historic landscape of East Wear Bay and preserving archaeological remains associated with Folkestone Roman Villa 'by record' before they are lost forever to coastal erosion."
        icon={Handshake}
        variant="image"
        backgroundImage="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Our-Mission.jpg?updatedAt=1755543727360"
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

          {/* Principal Funders Section - with logos and descriptions */}
          {funders.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Principal Funders</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {funders.slice(0, 11).map((funder: any) => (
                  <div key={funder._id} className="flex flex-col">
                    <div className="mb-4 bg-white border rounded-lg p-6 h-32 flex items-center justify-center">
                      {funder.logo ? (
                        funder.website ? (
                          <a
                            href={funder.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                          >
                            <Image
                              src={urlForImage(funder.logo)?.url() || ''}
                              alt={funder.logo.alt || funder.name}
                              width={200}
                              height={80}
                              className="max-h-20 w-auto object-contain"
                            />
                          </a>
                        ) : (
                          <Image
                            src={urlForImage(funder.logo)?.url() || ''}
                            alt={funder.logo.alt || funder.name}
                            width={200}
                            height={80}
                            className="max-h-20 w-auto object-contain"
                          />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground font-medium">{funder.name}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-base mb-2">{funder.name}</h3>
                    {funder.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{funder.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Lead Partners - logos only, linking to websites */}
          {leadPartners.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Lead Partners</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {leadPartners.map((partner: any) => (
                  <div key={partner._id} className="group">
                    {partner.website ? (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border bg-white p-4 h-24 transition-all hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
                        title={partner.name}
                      >
                        <div className="h-full flex items-center justify-center">
                          {partner.logo ? (
                            <Image
                              src={urlForImage(partner.logo)?.url() || ''}
                              alt={partner.logo.alt || partner.name}
                              width={140}
                              height={70}
                              className="max-h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
                              {partner.name}
                            </span>
                          )}
                        </div>
                      </a>
                    ) : (
                      <div
                        className="block rounded-lg border bg-white p-4 h-24"
                        title={partner.name}
                      >
                        <div className="h-full flex items-center justify-center">
                          {partner.logo ? (
                            <Image
                              src={urlForImage(partner.logo)?.url() || ''}
                              alt={partner.logo.alt || partner.name}
                              width={140}
                              height={70}
                              className="max-h-14 w-auto object-contain"
                            />
                          ) : (
                            <span className="text-xs font-medium text-center text-muted-foreground">
                              {partner.name}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}


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