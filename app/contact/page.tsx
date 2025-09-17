import { Metadata } from 'next'
import { Mail, MapPin, Phone, Calendar } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact Us | East Wear Bay Archaeological Project',
  description: 'Get in touch with the East Wear Bay team for inquiries about the Folkestone Roman Villa excavation, volunteering, educational visits, or sponsorship opportunities.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have questions about our research, field school, or community programs? Get in touch with our team."
        icon={Mail}
        variant="image"
        backgroundImage="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Contact/Contact_Banner_EWB.webp?updatedAt=1758122320523"
      />
      
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
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">Canterbury Archaeological Trust</p>
                    <p className="text-muted-foreground">92A Broad Street</p>
                    <p className="text-muted-foreground">Canterbury, Kent</p>
                    <p className="text-muted-foreground">CT1 2LU</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">get-involved@canterburytrust.ac.uk</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">01227 462062</p>
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
                    Site visits are possible during the excavation season by appointment only.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Sponsors & Partners</h3>
              <p className="text-muted-foreground">
                If you're interested in sponsoring our work or developing a partnership, please contact us at get-involved@canterburytrust.ac.uk.
              </p>
              <p className="mt-2 text-muted-foreground">
                We offer various sponsorship opportunities for businesses and organisations interested in supporting community archaeology and heritage preservation.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-semibold">How to Find Us</h2>
          <div className="rounded-lg border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.171947405481!2d1.1978353275316445!3d51.08683414133876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47debeb449083847%3A0x39cb8c44fc6223df!2sWear%20Bay%20Rd%2C%20Folkestone%20CT19%206PY!5e0!3m2!1sen!2suk!4v1758098938105!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="East Wear Bay Location Map"
            />
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-lg font-medium">By Car</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                It is possible to access the site by car, but there is limited parking at the site. There is a car park at East Cliff Sports (Wear Bay Rd, Folkestone CT19 6PY), which is a short walk away. For those with access needs or who have a group visit planned, please contact us for parking arrangements.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Nearest postcode:</strong> CT19 6PY<br />
                <strong>What3words:</strong> ///having.treatable.distanced
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-lg font-medium">By Public Transport</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Wherever possible, we encourage our volunteers and visitors to use public transport to access the site. There are regular trains that run to Folkestone Central Station, and from there, it is possible to get the 104 to Morrison Road, or the 105 to Stanbury Crescent Bottom. The site is a short walk from these bus stops.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h3 className="text-lg font-medium">Accessibility</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The East Wear Bay project aims to be as inclusive as possible, and we welcome everyone. Please speak to the project about your accessibility requirements and we will do our best to accommodate your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}