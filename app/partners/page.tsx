import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Working Together</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The East Wear Bay Archaeological Project is a community project with the aim of researching the historic landscape of East Wear Bay and preserving archaeological remains associated with Folkestone Roman Villa 'by record' before they are lost forever to coastal erosion.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="mx-auto max-w-6xl">
          {/* Principal Funders Section */}
          {principalFunders.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Principal Funders</h2>
              {principalFunders.map((partner: any) => (
                <div key={partner._id} className="mb-8 rounded-lg bg-primary/5 p-8">
                  <div className="text-center">
                    <div className="mx-auto mb-6 bg-white rounded-lg p-6 max-w-sm">
                      {partner.logo ? (
                        <Image 
                          src={urlForImage(partner.logo)?.url() || ''} 
                          alt={partner.logo.alt || partner.name}
                          width={300}
                          height={100}
                          className="h-20 w-full object-contain"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-primary">{partner.name}</span>
                      )}
                    </div>
                    {partner.description && (
                      <p className="mx-auto max-w-3xl text-muted-foreground">
                        {partner.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Lead Partners */}
          {leadPartners.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Lead Partners</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our lead partners bring expertise, resources, and community connections that are essential to the project's success.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {leadPartners.map((partner: any) => (
                  <div key={partner._id} className="group">
                    {partner.website ? (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border bg-card p-4 transition-all hover:shadow-md hover:border-primary/50"
                        title={partner.name}
                      >
                        <div className="h-20 flex items-center justify-center p-2">
                          {partner.logo ? (
                            <Image 
                              src={urlForImage(partner.logo)?.url() || ''} 
                              alt={partner.logo.alt || partner.name}
                              width={150}
                              height={80}
                              className="max-h-16 w-full object-contain"
                            />
                          ) : (
                            <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
                              {partner.name}
                            </span>
                          )}
                        </div>
                      </a>
                    ) : (
                      <div className="rounded-lg border bg-card p-4" title={partner.name}>
                        <div className="h-20 flex items-center justify-center p-2">
                          {partner.logo ? (
                            <Image 
                              src={urlForImage(partner.logo)?.url() || ''} 
                              alt={partner.logo.alt || partner.name}
                              width={150}
                              height={80}
                              className="max-h-16 w-full object-contain"
                            />
                          ) : (
                            <span className="text-sm font-medium text-center text-muted-foreground">
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

          {/* Supporters Grid */}
          {supporters.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Supporters</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {supporters.map((partner: any) => (
                  <div key={partner._id} className="group">
                    {partner.website ? (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border bg-card p-4 transition-all hover:shadow-md hover:border-primary/50"
                        title={partner.name}
                      >
                        <div className="h-20 flex items-center justify-center p-2">
                          {partner.logo ? (
                            <Image 
                              src={urlForImage(partner.logo)?.url() || ''} 
                              alt={partner.logo.alt || partner.name}
                              width={150}
                              height={80}
                              className="max-h-16 w-full object-contain"
                            />
                          ) : (
                            <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
                              {partner.name}
                            </span>
                          )}
                        </div>
                      </a>
                    ) : (
                      <div className="rounded-lg border bg-card p-4" title={partner.name}>
                        <div className="h-20 flex items-center justify-center p-2">
                          {partner.logo ? (
                            <Image 
                              src={urlForImage(partner.logo)?.url() || ''} 
                              alt={partner.logo.alt || partner.name}
                              width={150}
                              height={80}
                              className="max-h-16 w-full object-contain"
                            />
                          ) : (
                            <span className="text-sm font-medium text-center text-muted-foreground">
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