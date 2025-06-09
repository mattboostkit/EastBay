import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Coffee, Utensils, Camera, Users, Music } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Discover Folkestone | East Wear Bay Archaeological Project',
  description: 'Explore Folkestone - a vibrant coastal town with rich history, creative culture, and stunning natural beauty. Your perfect base for the East Wear Bay Field School.',
}

export default function FolkestonePage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Discover Folkestone</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A vibrant coastal town where history meets creativity, offering the perfect blend of archaeological heritage, 
              artistic culture, and seaside charm for your field school experience.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="mx-auto max-w-6xl">
          {/* Introduction */}
          <section className="mb-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">Welcome to Folkestone</h2>
                <p className="text-muted-foreground mb-4">
                  Folkestone is a historic port town on the Kent coast, just 90 minutes from London by train. 
                  Once a fashionable Victorian resort, today it combines seaside charm with a thriving creative 
                  quarter, excellent restaurants, and easy access to the stunning Kent Downs.
                </p>
                <p className="text-muted-foreground mb-4">
                  For archaeology students, Folkestone offers the perfect base: rich in history from Roman times 
                  to the present, with the East Wear Bay site just a short walk from the town center. The town's 
                  transformation into a cultural hub means you'll find plenty to explore during your downtime.
                </p>
                <p className="text-muted-foreground">
                  Whether you're interested in the town's maritime heritage, contemporary art scene, or simply 
                  enjoying fish and chips by the harbor, Folkestone has something for everyone.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?fit=crop&w=800&h=600"
                  alt="Folkestone harbor and seafront view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Getting Here */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Getting Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">By Train</h3>
                <p className="text-sm text-muted-foreground">
                  Direct high-speed trains from London St Pancras (55 minutes) and regular services from 
                  London Charing Cross (1h 30m). The station is a 10-minute walk from the town center.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">By Car</h3>
                <p className="text-sm text-muted-foreground">
                  Via M20 motorway, junction 13. Folkestone is 70 miles from London, 15 miles from Dover, 
                  and 10 miles from Canterbury. Parking available throughout the town.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">By Bus</h3>
                <p className="text-sm text-muted-foreground">
                  National Express coaches from London Victoria. Local buses connect Folkestone with Canterbury, 
                  Dover, and other Kent towns. The bus station is in the town center.
                </p>
              </div>
            </div>
          </section>

          {/* Where to Stay */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Where to Stay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?fit=crop&w=800&h=400"
                    alt="Modern hotel room with sea view"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Hotels & B&Bs</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    From boutique hotels in the Creative Quarter to traditional B&Bs with sea views, 
                    Folkestone offers accommodation for every budget. Popular areas include the Leas 
                    promenade and the Old High Street.
                  </p>
                  <p className="text-sm font-medium">Budget: £40-80/night</p>
                  <p className="text-sm font-medium">Mid-range: £80-150/night</p>
                </div>
              </div>
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?fit=crop&w=800&h=400"
                    alt="Student accommodation common area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Student & Budget Options</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Field school participants often share apartments or stay in local hostels. The YHA 
                    hostel offers affordable rooms, while private rentals can be found through local 
                    letting agencies.
                  </p>
                  <p className="text-sm font-medium">Hostels: £20-35/night</p>
                  <p className="text-sm font-medium">Shared apartments: £300-500/week</p>
                </div>
              </div>
            </div>
          </section>

          {/* What to See & Do */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What to See & Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Camera className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Creative Quarter</h3>
                <p className="text-sm text-muted-foreground">
                  Home to artists' studios, independent galleries, vintage shops, and the famous 
                  Folkestone Artworks - an outdoor exhibition of contemporary art throughout the town.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">The Leas & Coastal Park</h3>
                <p className="text-sm text-muted-foreground">
                  Victorian promenade with stunning Channel views, ornamental gardens, and the historic 
                  Leas Lift - a water-powered funicular railway connecting the clifftop to the beach.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Folkestone Museum</h3>
                <p className="text-sm text-muted-foreground">
                  Discover the town's history from prehistoric times through Roman occupation to the 
                  present day. Special exhibitions often feature finds from local archaeological sites.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Coffee className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Harbor Arm</h3>
                <p className="text-sm text-muted-foreground">
                  Renovated pier with food stalls, bars, and live music. Perfect for sunset drinks 
                  after a day on site. Home to the Lighthouse Champagne Bar and seasonal events.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Utensils className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Food Scene</h3>
                <p className="text-sm text-muted-foreground">
                  From Michelin-recommended restaurants to traditional fish and chips, Folkestone's 
                  food scene punches above its weight. Don't miss Rocksalt or The Smokehouse.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Music className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">Quarterhouse</h3>
                <p className="text-sm text-muted-foreground">
                  Cultural venue hosting theater, music, comedy, and film. Regular exhibitions and 
                  community events make it the heart of Folkestone's creative scene.
                </p>
              </div>
            </div>
          </section>

          {/* Practical Information */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Practical Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="font-semibold mb-4">Essential Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Supermarkets:</strong> Sainsbury's, Tesco, and Aldi in town center</li>
                  <li>• <strong>Banks:</strong> All major banks on Sandgate Road</li>
                  <li>• <strong>Post Office:</strong> Main branch on Bouverie Place</li>
                  <li>• <strong>Pharmacy:</strong> Boots and several independents</li>
                  <li>• <strong>Medical:</strong> Walk-in center at Royal Victoria Hospital</li>
                  <li>• <strong>Library:</strong> Free WiFi and study space available</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-muted/50 p-6">
                <h3 className="font-semibold mb-4">Getting Around</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>On Foot:</strong> Town center is compact and walkable</li>
                  <li>• <strong>Local Buses:</strong> Regular services to all areas</li>
                  <li>• <strong>Taxis:</strong> Available at station and town center</li>
                  <li>• <strong>Bike Hire:</strong> Available from Cycle Shepway</li>
                  <li>• <strong>To Site:</strong> 20-minute walk or short bus ride</li>
                  <li>• <strong>Parking:</strong> Pay & display throughout town</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="rounded-lg bg-primary p-8 text-primary-foreground">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Join Us?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Experience hands-on archaeology in a vibrant coastal town. Our field school combines 
                professional training with the opportunity to explore one of Kent's most creative communities.
              </p>
              <Link
                href="/field-school"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-primary shadow-sm hover:bg-white/90"
              >
                Apply to Field School
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}