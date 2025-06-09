import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ModelViewer } from '@/components/ui/ModelViewer';

type FeaturedArtifactProps = {
  artifact: {
    title: string;
    slug: { current: string };
    period?: string;
    description?: string;
    modelUrl?: string;
    material?: string;
    dimensions?: string;
    conservation?: string;
    location?: string;
  };
}

export default function FeaturedArtifact({ artifact }: FeaturedArtifactProps) {
  return (
    <div className="mb-12 rounded-lg border bg-card shadow">
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <ModelViewer 
              src={artifact.modelUrl || "https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed"} 
              title={artifact.title}
              aspectRatio="square"
            />
          </div>
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Featured Artifact</span>
            <h2 className="mt-3 text-2xl font-bold">{artifact.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {artifact.location ? `Found in ${artifact.location}` : 'Location unknown'}
            </p>
            
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              {artifact.period && (
                <div>
                  <p className="font-medium">Period</p>
                  <p className="text-muted-foreground">{artifact.period}</p>
                </div>
              )}
              {artifact.material && (
                <div>
                  <p className="font-medium">Material</p>
                  <p className="text-muted-foreground">{artifact.material}</p>
                </div>
              )}
              {artifact.dimensions && (
                <div>
                  <p className="font-medium">Dimensions</p>
                  <p className="text-muted-foreground">{artifact.dimensions}</p>
                </div>
              )}
              {artifact.conservation && (
                <div>
                  <p className="font-medium">Condition</p>
                  <p className="text-muted-foreground">{artifact.conservation}</p>
                </div>
              )}
            </div>
            
            <p className="mt-4 text-muted-foreground">
              {artifact.description || 'No description available.'}
            </p>
            
            <div className="mt-6">
              <Link 
                href={`/digital-museum/${artifact.slug.current}`}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                View detailed information
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
