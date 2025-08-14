import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { partnersData } from '@/lib/partners-data'

export const metadata: Metadata = {
  title: 'Partners & Funders | East Wear Bay Archaeological Project',
  description: 'Our partners and funders who make the East Wear Bay Archaeological Project possible through their generous support and collaboration.',
}

export default function PartnersPage() {
  // Separate partners by type
  const principalFunder = partnersData.find(p => p.type === 'principal')
  const leadPartners = partnersData.filter(p => p.type === 'lead')
  const supporters = partnersData.filter(p => p.type === 'supporter')

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
          {/* Principal Funder Section */}
          {principalFunder && (
            <div className="mb-12 rounded-lg bg-primary/5 p-8">
              <div className="text-center">
                <div className="mx-auto mb-6 bg-white rounded-lg p-6 max-w-sm">
                  {principalFunder.logo ? (
                    <img 
                      src={principalFunder.logo} 
                      alt={principalFunder.name}
                      className="h-20 w-full object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-primary">{principalFunder.name}</span>
                  )}
                </div>
                <p className="mx-auto max-w-3xl text-muted-foreground">
                  {principalFunder.description || 'Using money raised by National Lottery players, The National Lottery Heritage Fund supports projects that connect people and communities with the UK\'s heritage. East Wear Bay is made possible with The National Lottery Heritage Fund. Thanks to National Lottery players, we have been able to excavate and record new areas of archaeology at the site and engage the local community in the project.'}
                </p>
              </div>
            </div>
          )}
          
          {/* Lead Partners */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Lead Partners</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Lead partners are Canterbury Archaeological Trust, Folkestone Museum, Folkestone Research and Archaeology Group, Dover Archaeological Group and the University of Kent.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {leadPartners.map((partner, index) => (
                <div key={index} className="group">
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
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
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
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
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

          {/* All Partners Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Supporters</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {supporters.map((partner, index) => (
                <div key={index} className="group">
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
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
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
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
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
          
          {/* Acknowledgment Text */}
          <div className="rounded-lg border bg-muted/50 p-8 mb-12">
            <p className="text-center text-muted-foreground">
              We are grateful to Folkestone and Hythe District Council for their continuing support of the project. 
              Thanks also to the Kent Community Foundation, the Society for the Promotion of Roman Studies, 
              The Association for Roman Archaeology, the Friends of the Canterbury Archaeological Trust, 
              The Roger De Haan Charitable Trust, The Lawson Trust, the Council for British Archaeology, 
              the Swire Charitable Trust and the Garfield Weston Foundation.
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