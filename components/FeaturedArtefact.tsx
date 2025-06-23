import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ModelViewer } from '@/components/ui/ModelViewer';

type FeaturedArtefactProps = {
  artefact: {
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

export default function FeaturedArtefact({ artefact }: FeaturedArtefactProps) {
  return (
    <div className="mb-12 rounded-lg border bg-card shadow">
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <ModelViewer 
              src={artefact.modelUrl || "https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed"} 
              title={artefact.title}
              aspectRatio="square"
            />
          </div>
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Featured Artefact</span>
            <h2 className="mt-3 text-2xl font-bold">{artefact.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {artefact.location ? `Found in ${artefact.location}` : 'Location unknown'}
            </p>
            
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              {artefact.period && (
                <div>
                  <p className="font-medium">Period</p>
                  <p className="text-muted-foreground">{artefact.period}</p>
                </div>
              )}
              {artefact.material && (
                <div>
                  <p className="font-medium">Material</p>
                  <p className="text-muted-foreground">{artefact.material}</p>
                </div>
              )}
              {artefact.dimensions && (
                <div>
                  <p className="font-medium">Dimensions</p>
                  <p className="text-muted-foreground">{artefact.dimensions}</p>
                </div>
              )}
              {artefact.conservation && (
                <div>
                  <p className="font-medium">Condition</p>
                  <p className="text-muted-foreground">{artefact.conservation}</p>
                </div>
              )}
            </div>
            
            <p className="mt-4 text-muted-foreground">
              {artefact.description || 'No description available.'}
            </p>
            
            <div className="mt-6">
              <Link 
                href={`/digital-museum/${artefact.slug.current}`}
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
