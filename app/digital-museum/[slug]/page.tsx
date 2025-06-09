import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchAllArtifacts, fetchArtifactBySlug } from '@/lib/sanity.unified';
import ArtifactDetail from '@/components/ArtifactDetail';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const artifact = await fetchArtifactBySlug(params.slug);
  
  if (!artifact) {
    return {
      title: 'Artifact Not Found',
    };
  }
  
  return {
    title: `${artifact.title} | Digital Museum`,
    description: artifact.description || `View details and 3D model of ${artifact.title} from the Folkestone Roman Villa archaeological site.`,
  };
}

// Generate static paths for all artifacts
export async function generateStaticParams() {
  const artifacts = await fetchAllArtifacts();
  
  return artifacts.map((artifact: any) => ({
    slug: artifact.slug.current,
  }));
}

export default async function ArtifactPage({ params }: { params: { slug: string } }) {
  const artifact = await fetchArtifactBySlug(params.slug);
  
  if (!artifact) {
    notFound();
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <ArtifactDetail artifact={artifact} />
    </div>
  );
}
