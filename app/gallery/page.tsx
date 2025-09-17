import { Metadata } from 'next'
import Image from 'next/image'
import { Camera, Calendar, MapPin, Users } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Exhibition Gallery | East Wear Bay Archaeological Project',
  description: 'Explore artworks and photographs from "A reflection of the self: the art and archaeology of East Wear Bay" exhibition.',
}

export default function GalleryPage() {
  const galleryImages = [
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/1924-excavation-recreated.jpg?updatedAt=1758121355951',
      alt: 'Recreated photograph from the 1924 excavation',
      title: '1924 Excavation - Recreated',
      artist: 'Community Artist',
      description: 'A modern recreation of photographs from the original 1924 excavation, connecting past and present archaeological work.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/pottery-interpretation.jpg?updatedAt=1758121355951',
      alt: 'Artistic interpretation of Roman pottery',
      title: 'Fragments of Time',
      artist: 'Local Artist',
      description: 'Contemporary artistic response to Roman pottery fragments found at the site.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/community-dig-artwork.jpg?updatedAt=1758121355951',
      alt: 'Community dig participants artwork',
      title: 'Hands in the Earth',
      artist: 'Field School Participants',
      description: 'Collaborative artwork created by field school participants during the 2024 excavation season.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/coastal-erosion-series.jpg?updatedAt=1758121355951',
      alt: 'Coastal erosion photographic series',
      title: 'Against the Tide',
      artist: 'Photography Student',
      description: 'A photographic series documenting the ongoing coastal erosion at East Wear Bay.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/finds-collage.jpg?updatedAt=1758121355951',
      alt: 'Collage of archaeological finds',
      title: 'Layers of History',
      artist: 'School Children',
      description: 'Mixed media collage created by local school children inspired by archaeological finds.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/roman-villa-reconstruction.jpg?updatedAt=1758121355951',
      alt: 'Artist reconstruction of the Roman Villa',
      title: 'Villa Reimagined',
      artist: 'Digital Artist',
      description: 'Digital reconstruction artwork showing how the Roman Villa may have appeared in its prime.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/volunteer-portraits.jpg?updatedAt=1758121355951',
      alt: 'Portraits of volunteers',
      title: 'Faces of East Wear Bay',
      artist: 'Portrait Photographer',
      description: 'Portrait series celebrating the volunteers who have contributed to the project.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/archaeological-process.jpg?updatedAt=1758121355951',
      alt: 'Documentation of archaeological process',
      title: 'Method and Discovery',
      artist: 'Documentary Photographer',
      description: 'Photo essay documenting the archaeological process from excavation to preservation.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/memory-objects.jpg?updatedAt=1758121355951',
      alt: 'Personal objects and memories',
      title: 'Objects of Memory',
      artist: 'Community Members',
      description: 'Installation featuring personal objects that connect individual memories to archaeological discoveries.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/landscape-then-now.jpg?updatedAt=1758121355951',
      alt: 'Landscape comparison then and now',
      title: 'Landscape: Then and Now',
      artist: 'Local Historian',
      description: 'Comparative study showing the East Wear Bay landscape through different time periods.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/student-interpretations.jpg?updatedAt=1758121355951',
      alt: 'Student artistic interpretations',
      title: 'Young Perspectives',
      artist: 'Art Students',
      description: 'Artistic interpretations of archaeological finds by local art students.',
    },
    {
      src: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Gallery/excavation-tools-still-life.jpg?updatedAt=1758121355951',
      alt: 'Still life of excavation tools',
      title: 'Tools of Discovery',
      artist: 'Still Life Artist',
      description: 'Still life composition featuring the tools used in archaeological excavation.',
    },
  ]

  return (
    <>
      <PageHero
        title="Exhibition Gallery"
        description="A reflection of the self: the art and archaeology of East Wear Bay"
        icon={Camera}
        variant="gradient"
      />

      <div className="container py-12">
        {/* Exhibition Information */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-bronze-100 px-4 py-2">
              <Calendar className="h-4 w-4 text-bronze-600" />
              <span className="text-sm font-medium text-bronze-700">September - October 2024</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Co-Curated Exhibition</h2>
            <p className="text-lg text-muted-foreground mb-6">
              During September and October 2024, we hosted an exhibition in Folkestone that explored
              how the past is reflected in the present and how we can interpret archaeology in ways
              that help us understand the human experience throughout time.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Folkestone, Kent</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>12 Contributing Artists</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                <span>Over 50 Artworks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border-2 border-bronze-100 bg-white shadow-lg transition-all duration-300 hover:border-bronze-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-sand-50 to-stone-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-bronze-800 mb-1">{image.title}</h3>
                  <p className="text-sm text-bronze-600 mb-2">by {image.artist}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exhibition Themes */}
        <section className="mb-16 bg-sand-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Exhibition Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-bronze-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-bronze-700">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Identity & Memory</h3>
              <p className="text-sm text-muted-foreground">
                Exploring how archaeological objects connect to personal and collective memories,
                creating bridges between past and present identities.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-bronze-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-bronze-700">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Time & Change</h3>
              <p className="text-sm text-muted-foreground">
                Reflecting on the passage of time through archaeological layers and coastal erosion,
                and what we choose to preserve for the future.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-bronze-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-bronze-700">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Community & Place</h3>
              <p className="text-sm text-muted-foreground">
                Celebrating the role of community in archaeological discovery and how shared heritage
                strengthens our connection to place.
              </p>
            </div>
          </div>
        </section>

        {/* Artist Statements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Artist Reflections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "Working with archaeological finds made me think about the hands that made and used
                these objects centuries ago. My artwork tries to capture that human connection across time."
              </p>
              <footer className="text-sm font-semibold">— Contributing Artist</footer>
            </blockquote>

            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "The 1924 excavation photographs inspired me to recreate them with current volunteers,
                showing how archaeological work continues to bring communities together."
              </p>
              <footer className="text-sm font-semibold">— Photography Artist</footer>
            </blockquote>

            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "The coastal erosion at East Wear Bay is both destructive and revelatory.
                My work explores this paradox of loss and discovery."
              </p>
              <footer className="text-sm font-semibold">— Landscape Artist</footer>
            </blockquote>

            <blockquote className="rounded-lg border border-bronze-200 bg-card p-6">
              <p className="italic text-muted-foreground mb-4">
                "Collaborating with archaeologists opened my eyes to how art and science can work
                together to tell more complete stories about our past."
              </p>
              <footer className="text-sm font-semibold">— Digital Artist</footer>
            </blockquote>
          </div>
        </section>

        {/* Exhibition Impact */}
        <section className="bg-gradient-to-br from-bronze-700 to-bronze-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Exhibition Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-bronze-200">Exhibition Visitors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-bronze-200">Contributing Artists</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-bronze-200">Artworks Displayed</div>
            </div>
          </div>
          <p className="mt-8 text-lg text-bronze-100 max-w-2xl mx-auto">
            This exhibition demonstrated the power of combining art and archaeology to create
            meaningful community engagement and new perspectives on our shared heritage.
          </p>
        </section>
      </div>
    </>
  )
}