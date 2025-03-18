import { client } from '@/lib/sanity.client';
import ArtifactDetail from '@/components/ArtifactDetail';

export async function generateStaticParams() {
  const query = `*[_type == "artifact"] { slug }`;
  const artifacts = await client.fetch(query);
  
  return artifacts.map((artifact: any) => ({
    slug: artifact.slug.current,
  }));
}

async function getArtifact(slug: string) {
  const query = `*[_type == "artifact" && slug.current == $slug][0]`;
  const artifact = await client.fetch(query, { slug });
  
  return artifact;
}

export default async function ArtifactPage({ params }: { params: { slug: string } }) {
  const artifact = await getArtifact(params.slug);
  
  return (
    <div className="container mx-auto py-8 px-4">
      <ArtifactDetail artifact={artifact} />
    </div>
  );
}