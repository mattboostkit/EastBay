import { Metadata } from 'next'
import { Mail, MapPin, Phone, Calendar } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | East Wear Bay Archaeological Project',
  description: 'Get in touch with the East Wear Bay team for inquiries about the Folkestone Roman Villa excavation, volunteering, educational visits, or sponsorship opportunities.',
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions about our research, field school, or community programs? 
              Get in touch with our team.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Project Office</p>
                    <p className="text-muted-foreground">East Wear Bay Archaeological Project</p>
                    <p className="text-muted-foreground">Folkestone Museum</p>
                    <p className="text-muted-foreground">Town Hall, 1-2 Guildhall Street</p>
                    <p className="text-muted-foreground">Folkestone, Kent CT20 1DY</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@eastwearbay.org</p>
                    <p className="text-sm text-muted-foreground">(General inquiries)</p>
                    <p className="mt-1 text-muted-foreground">info@eastwearbay.org</p>
                    <p className="text-sm text-muted-foreground">(Field school applications)</p>
                    <p className="mt-1 text-muted-foreground">info@eastwearbay.org</p>
                    <p className="text-sm text-muted-foreground">(School visits & education)</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+44 (1303) 123-456</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9:00-17:00</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-xl font-semibold">Site Visits</h3>
              <div className="flex items-start gap-4">
                <Calendar className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-muted-foreground">
                    Our excavation site at East Wear Bay is open to visitors during the field season (May-September).
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Guided tours run every Saturday at 11:00 and 14:00 during the summer season.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    School and group visits can be arranged by contacting our education team.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-xl font-semibold">Sponsors & Partners</h3>
              <p className="text-muted-foreground">
                If you're interested in sponsoring our work or developing a partnership, please contact our director, Dr. Emma Richards, at info@eastwearbay.org.
              </p>
              <p className="mt-2 text-muted-foreground">
                We offer various sponsorship opportunities for businesses and organizations interested in supporting community archaeology and heritage preservation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold">How to Find Us</h2>
          <div className="rounded-lg border overflow-hidden h-96">
            {/* We would normally embed a Google Map here, but we'll use a placeholder image instead */}
            <div className="relative h-full w-full bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg text-muted-foreground">Interactive map would be embedded here</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-lg font-medium">By Car</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The East Wear Bay site is located at the eastern end of The Leas in Folkestone. Limited parking is available at the Wear Bay Road car park. The project office is located at Folkestone Museum in the town centre.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-lg font-medium">By Public Transport</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Folkestone Central station is served by regular trains from London. The museum is a 10-minute walk from the station. Local buses (routes 16 and 73) stop near East Wear Bay Road for access to the excavation site.
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-lg font-medium">Accessibility</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our project office at Folkestone Museum is fully accessible. The excavation site has partial accessibility with flat routes to viewing areas. Please contact us in advance to discuss any specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}