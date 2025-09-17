import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Calendar, Clock, Heart, MapPin, Award, Star, Send, Shield, Handshake, Car, Bus, Accessibility, Backpack, HardHat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Volunteer | East Wear Bay Archaeological Project',
  description: 'Join our volunteer team and help preserve East Wear Bay\'s archaeological heritage. No experience necessary - full training provided.',
}

export default function VolunteerPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/boostkit/East-Wear-Bay/Volunteer/Volunteer_Hero_EWB.webp?updatedAt=1758121883166"
          alt="Volunteers excavating at East Wear Bay"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white">
          <div className="text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-bronze-600/20 backdrop-blur-sm">
              <Heart className="h-8 w-8 text-bronze-300" />
            </div>
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
              Be a Volunteer
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-gray-200">
              Join us in preserving East Wear Bay's archaeological heritage for future generations
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <section className="mb-16">
            <div className="rounded-lg bg-muted p-8 text-center">
              <h2 className="text-2xl font-bold">Make a Difference Through Archaeology</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Canterbury Archaeological Trust volunteers make an enormous and valuable contribution to the preservation and understanding of East Wear Bay's rich heritage. Whether you're passionate about history, looking to learn new skills, or simply want to give back to your community, there's a place for you on our team.
              </p>
              <p className="mt-4 text-muted-foreground">
                No experience necessary - full training provided!
              </p>
            </div>
          </section>

          {/* Current Opportunities */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">Current Volunteering Opportunities</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Excavation Volunteers */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Excavation Volunteers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our field team in uncovering the past. Work alongside professional archaeologists and students to excavate, record, and preserve archaeological features. Learn excavation techniques, stratigraphic recording, and the use of archaeological tools. Perfect for those who enjoy outdoor work and hands-on learning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>May to October (weather dependent)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>East Wear Bay excavation site</span>
                  </div>
                </div>
              </div>

              {/* Finds Processing Volunteers */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Finds Processing Volunteers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Help process and catalogue archaeological finds in our dedicated facilities. Activities include washing, marking, sorting, and cataloguing artefacts. Learn about different pottery types, building materials, and small finds. Work in a comfortable indoor environment with flexible hours year-round.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Year-round opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>CAT offices, Canterbury</span>
                  </div>
                </div>
              </div>

              {/* Community Outreach Volunteers */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Community Outreach Volunteers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Share our discoveries with the public through events, school visits, and open days. Help run educational activities, guide site tours, and engage visitors with hands-on demonstrations. Perfect for those with strong communication skills and enthusiasm for sharing knowledge.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Events throughout the year</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Various locations in Kent</span>
                  </div>
                </div>
              </div>

              {/* Digital Documentation Volunteers */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Digital Documentation Volunteers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Support our digital archive through photography, database entry, and digital drawing. Help create 3D models, manage our online collections, and digitise paper records. Training provided in archaeological photography and digital recording techniques.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Flexible schedule available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>CAT offices or remote</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Get Involved */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">How to Get Involved</h2>

            <div className="rounded-lg border bg-card p-8">
              <p className="mb-6 text-muted-foreground">
                Register your interest using the form below, and our volunteer coordinator will contact you with current opportunities and next steps.
              </p>

              {/* Registration Form */}
              <form
                name="volunteer-registration"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="volunteer-registration" />

                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium mb-2">
                      Areas of Interest
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="interests"
                          value="excavation"
                          className="mr-2 rounded border-gray-300"
                        />
                        <span className="text-sm">Excavation</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="interests"
                          value="finds-processing"
                          className="mr-2 rounded border-gray-300"
                        />
                        <span className="text-sm">Finds Processing</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="interests"
                          value="community-outreach"
                          className="mr-2 rounded border-gray-300"
                        />
                        <span className="text-sm">Community Outreach</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="interests"
                          value="digital-documentation"
                          className="mr-2 rounded border-gray-300"
                        />
                        <span className="text-sm">Digital Documentation</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-2">
                      Previous Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="none">No previous experience</option>
                      <option value="some">Some archaeology experience</option>
                      <option value="student">Archaeology student</option>
                      <option value="professional">Professional background</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about yourself (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Share your interests, availability, or any questions you have..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Submit Registration
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                  <p className="text-sm text-muted-foreground">
                    Or email us at{' '}
                    <a href="mailto:get_involved@canterburytrust.co.uk" className="text-primary hover:underline">
                      get_involved@canterburytrust.co.uk
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </section>

          {/* Volunteer Stories */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">Volunteer Stories</h2>
            <p className="mb-8 text-muted-foreground">
              Hear from our dedicated volunteers about their experiences with the East Wear Bay Archaeological Project.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <blockquote className="rounded-lg border bg-card p-6">
                <p className="italic text-muted-foreground">
                  "I've learnt so much, learnt about the locality, and also being able to handle things that I've only seen through glass in the museum. You don't get this chance very often to actually pick up things that are probably two thousand years old."
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-muted-foreground">Volunteer interviewee</p>
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border bg-card p-6">
                <p className="italic text-muted-foreground">
                  "It's been amazing to be involved with many of the CAT team, work alongside them [and] feel you're making a contribution to the whole process."
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-muted-foreground">Volunteer survey respondent working on Finds Cleaning</p>
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border bg-card p-6">
                <p className="italic text-muted-foreground">
                  "For me it was something to look forward to, something to take me out of work. It was a nice calming activity. So it definitely has helped with my mental health."
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-muted-foreground">Volunteer interviewee</p>
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border bg-card p-6">
                <p className="italic text-muted-foreground">
                  "I think from a social point of view, and sort of health and well-being point of view, being out in fresh air, you can't beat it really."
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-muted-foreground">Volunteer interviewee</p>
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border bg-card p-6">
                <p className="italic text-muted-foreground">
                  "I've found out about other archaeological things going on in Kent. So I feel like my life is full. I feel like I'm engaged in the community. I'm engaged in life."
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-muted-foreground">Volunteer interviewee</p>
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border bg-card p-6">
                <p className="italic text-muted-foreground">
                  "Not every volunteering opportunity teaches you how to record. This was a pleasant surprise from the East Wear Bay project because not only we were told how to draw sections plans, [CAT staff] actually took time to show us every detail."
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-muted-foreground">Volunteer interviewee</p>
                </footer>
              </blockquote>

              <blockquote className="rounded-lg border bg-card p-6">
                <p className="italic text-muted-foreground">
                  "To be actually able to use some of the skills that I've been learning online as in how to measure your site, to document all the contents, put them all in the right places. All that sort of thing was great to be able to really get my hands on."
                </p>
                <footer className="mt-4">
                  <p className="text-sm text-muted-foreground">Volunteer interviewee</p>
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Our Mutual Commitments */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">Our Mutual Commitments</h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* What We Provide */}
              <div className="rounded-lg border bg-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">We commit to the following:</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">1. Induction and training</h4>
                    <p className="text-sm text-muted-foreground">
                      To provide information on the work of Canterbury Archaeological Trust, its staff, your volunteering role and the training necessary to assist you in meeting the responsibilities of your volunteering role.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">2. Supervision, support and flexibility</h4>
                    <p className="text-sm text-muted-foreground">
                      To define appropriate standards of our services, to communicate them to you, and to encourage and support you to achieve and maintain them as part of your voluntary work. To speak with you regularly to discuss your volunteering and any associated problems. To do our best to help you develop your volunteering role with us and to be flexible in how we use your volunteering.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">3. Health and safety</h4>
                    <p className="text-sm text-muted-foreground">
                      To provide adequate training and feedback in support of our health and safety policy, a copy of which is provided to you during induction.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">4. Insurance</h4>
                    <p className="text-sm text-muted-foreground">
                      To provide adequate insurance cover for volunteers whilst undertaking voluntary work approved and authorised by us.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">5. Equal opportunities</h4>
                    <p className="text-sm text-muted-foreground">
                      To ensure that all volunteers are dealt with in accordance with our equal opportunities policy, access to which is provided during your induction.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">6. Problems</h4>
                    <p className="text-sm text-muted-foreground">
                      To endeavour to resolve in a fair and just manner any problems, grievances or difficulties which may be encountered while you volunteer with us.
                    </p>
                  </div>
                </div>
              </div>

              {/* What We Ask of You */}
              <div className="rounded-lg border bg-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Handshake className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">We hope you can provide the following:</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">1. Accountability</h4>
                    <p className="text-sm text-muted-foreground">
                      To help us maintain and improve our services to those we work with and for. Carry out your volunteering role to the best of your ability. Time keeping is important to us, please keep to any arrangements made and inform us if you cannot, for example if you are ill, or have other commitments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">2. Health and safety</h4>
                    <p className="text-sm text-muted-foreground">
                      To always work safely.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">3. Equal opportunities and diversity</h4>
                    <p className="text-sm text-muted-foreground">
                      To adopt an approach to others within Canterbury Archaeological Trust which embraces diversity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Information */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">Practical Information</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Accessibility */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Accessibility className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Accessibility</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We strive to make our volunteering opportunities accessible to all. Please let us know about any specific requirements or adjustments you need, and we'll work with you to find suitable accommodations.
                </p>
              </div>

              {/* Transport */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bus className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Getting There</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our Canterbury office is easily accessible by public transport. The excavation site can be reached by car or bicycle, with limited parking available. We can help arrange car sharing for those without transport.
                </p>
              </div>

              {/* Parking */}
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Parking</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Limited free parking is available at our Canterbury office. Public car parks are available nearby. At the excavation site, designated volunteer parking areas are provided during active dig seasons.
                </p>
              </div>
            </div>
          </section>

          {/* Equipment & Preparation */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold">Equipment & Preparation</h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* What to Bring */}
              <div className="rounded-lg border bg-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Backpack className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">What You'll Need to Bring</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">• Weather-appropriate clothing (layers recommended)</li>
                  <li className="text-sm text-muted-foreground">• Sturdy boots for excavation work</li>
                  <li className="text-sm text-muted-foreground">• Water bottle and packed lunch for field days</li>
                  <li className="text-sm text-muted-foreground">• Sun protection (hat, sunscreen)</li>
                  <li className="text-sm text-muted-foreground">• Your own trowel (4" WHS pointing trowel recommended)</li>
                  <li className="text-sm text-muted-foreground">• Small finds kit (if you have one)</li>
                </ul>
              </div>

              {/* What We Provide */}
              <div className="rounded-lg border bg-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <HardHat className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">What will be provided</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">• Large tools (mattocks, shovels)</li>
                  <li className="text-sm text-muted-foreground">• Recording equipment (pens, pencils, erasers etc)</li>
                  <li className="text-sm text-muted-foreground">• Any specialist equipment needed</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}