import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { client } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Partners & Funders | East Wear Bay Archaeological Project',
  description: 'Our partners and funders who make the East Wear Bay Archaeological Project possible through their generous support and collaboration.',
}

async function getPartners() {
  const query = `*[_type == "partner"] | order(order asc, name asc) {
    _id,
    name,
    partnershipType,
    logo,
    website,
    description
  }`
  
  return client.fetch(query)
}

export default async function PartnersPage() {
  const partners = await getPartners()

  // Group partners by partnership type
  const groupedPartners = partners.reduce((acc: any, partner: any) => {
    if (!acc[partner.partnershipType]) {
      acc[partner.partnershipType] = []
    }
    acc[partner.partnershipType].push(partner)
    return acc
  }, {})

  // Define the order of partnership types
  const partnershipOrder = [
    'Principal Funder',
    'Major Funder',
    'Academic Partner',
    'Heritage Partner',
    'Supporting Organization',
    'Community Partner'
  ]

  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Partners & Funders</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The East Wear Bay Archaeological Project is made possible through the generous support of our partners and funders who share our commitment to preserving and studying our archaeological heritage.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="mx-auto max-w-6xl">
          {partners.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No partners found. Please add partners in the Sanity Studio.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {partnershipOrder.map(partnershipType => {
                const partnersInCategory = groupedPartners[partnershipType]
                if (!partnersInCategory || partnersInCategory.length === 0) return null

                return (
                  <section key={partnershipType}>
                    <h2 className="text-2xl font-bold mb-6 text-center">{partnershipType}s</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {partnersInCategory.map((partner: any) => (
                        <div key={partner._id} className="rounded-lg border bg-card p-6">
                          <div className="flex flex-col items-center text-center">
                            {partner.logo ? (
                              <div className="relative h-24 w-full mb-4">
                                <Image
                                  src={urlFor(partner.logo).width(400).height(200).url()}
                                  alt={`${partner.name} logo`}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            ) : (
                              <div className="h-24 w-full mb-4 bg-muted rounded flex items-center justify-center">
                                <span className="text-2xl font-bold text-muted-foreground">
                                  {partner.name}
                                </span>
                              </div>
                            )}
                            <h3 className="text-lg font-semibold">{partner.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{partner.partnershipType}</p>
                            {partner.description && (
                              <p className="text-sm text-muted-foreground mt-3">{partner.description}</p>
                            )}
                            {partner.website && (
                              <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-4"
                              >
                                Visit website
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          )}
          
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