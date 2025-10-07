import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchAllArtefacts, fetchArtefactBySlug } from '@/lib/sanity.unified';
import ArtefactDetail from '@/components/ArtefactDetail';

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const artefact = await fetchArtefactBySlug(params.slug);

  if (!artefact) {
    return {
      title: 'Artefact Not Found',
    };
  }

  return {
    title: `${artefact.title} | Digital Museum`,
    description: artefact.description || `View details and 3D model of ${artefact.title} from the Folkestone Roman Villa archaeological site.`,
  };
}

// Generate static paths for all artefacts
export async function generateStaticParams() {
  const artefacts = await fetchAllArtefacts();

  return artefacts.map((artefact: any) => ({
    slug: artefact.slug.current,
  }));
}

export default async function ArtefactPage({ params }: { params: { slug: string } }) {
  const artefact = await fetchArtefactBySlug(params.slug);
  
  if (!artefact) {
    notFound();
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <ArtefactDetail artefact={artefact} />
    </div>
  );
}
