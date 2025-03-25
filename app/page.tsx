import { Metadata } from 'next';
import { ArtifactStructuredData, EventStructuredData } from '@/components/SEO/StructuredData';
import { NewsletterForm } from '@/components/NewsletterForm';
import HomepageSection from '@/components/HomepageSection';
import { fetchAllHomepageSections } from '@/lib/sanity.unified';

export const metadata: Metadata = {
  title: 'East Wear Bay Project | Preserving Folkestone Roman Villa',
  description: 'Join our community archaeology project protecting the Folkestone Roman Villa from coastal erosion through excavation, digital preservation, and public engagement.',
};

// Revalidate page every hour
export const revalidate = 3600;

export default async function Home() {
  // Fetch all homepage sections from Sanity
  const sections = await fetchAllHomepageSections();
  
  return (
    <>
      {/* Schema.org structured data */}
      <ArtifactStructuredData 
        name="Roman Pottery from East Wear Bay"
        description="1st Century CE pottery fragment discovered at the Folkestone Roman Villa site"
        image="/images/artifacts/roman-pottery.jpg"
        dateCreated="1st Century CE"
        url="/digital-museum/roman-pottery"
        material="Terracotta"
      />
      <EventStructuredData
        name="East Wear Bay Field School: Summer Session"
        description="Join our annual field school and learn archaeological techniques while helping excavate the Folkestone Roman Villa site."
        startDate="2025-07-05T09:00:00"
        location="East Wear Bay, Folkestone"
        url="/field-school/summer-session"
        organizer="East Wear Bay Project"
      />

      {/* Render all homepage sections in order */}
      {sections.map((section: any) => (
        <HomepageSection key={section._id} section={section} />
      ))}
      
      {/* Newsletter Section - This could also be moved to Sanity */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24" aria-labelledby="newsletter-heading">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="newsletter-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-4 text-lg md:text-xl">
              Stay updated with our latest discoveries, field school opportunities, and community events at East Wear Bay.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
