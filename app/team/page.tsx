import { Metadata } from 'next'
import Image from 'next/image'
import { client } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Our Team | East Wear Bay Archaeological Project',
  description: 'Meet the dedicated team of archaeologists, researchers, and specialists working to preserve the Folkestone Roman Villa site.',
}

async function getTeamMembers() {
  const query = `*[_type == "teamMember"] | order(order asc, name asc) {
    _id,
    name,
    position,
    "speciality": expertise[0],
    image,
    slug
  }`
  
  return client.fetch(query)
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Team</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the dedicated professionals, researchers, and specialists working to preserve and study the East Wear Bay archaeological site.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="mx-auto max-w-6xl">
          {teamMembers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No team members found. Please add team members in the Sanity Studio.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member: any) => (
                <div key={member._id} className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full bg-muted">
                    {member.image ? (
                      <Image
                        src={urlFor(member.image).width(256).height(256).url()}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-3xl font-semibold text-muted-foreground">
                          {member.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{member.position}</p>
                  {member.speciality && (
                    <p className="mt-1 text-sm text-muted-foreground">{member.speciality}</p>
                  )}
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-16 rounded-lg border bg-muted/50 p-8">
            <h2 className="text-2xl font-bold text-center mb-4">Join Our Team</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our mission. Whether you're an experienced archaeologist, 
              a student looking to gain field experience, or a volunteer wanting to help preserve local heritage, we'd love to hear from you.
            </p>
            <div className="mt-6 text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}