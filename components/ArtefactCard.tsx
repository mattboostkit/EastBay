import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ModelViewer } from '@/components/ui/ModelViewer';

type ArtefactCardProps = {
  artefact: {
    _id: string;
    title: string;
    slug: { current: string };
    period?: string;
    description?: string;
    modelUrl?: string;
  };
}

export default function ArtefactCard({ artefact }: ArtefactCardProps) {
  return (
    <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="p-3">
        <ModelViewer 
          src={artefact.modelUrl || "https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed"} 
          title={artefact.title}
          aspectRatio="square"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{artefact.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{artefact.period || 'Unknown period'}</p>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {artefact.description || 'No description available.'}
        </p>
        <Link 
          href={`/digital-museum/${artefact.slug.current}`} 
          className="mt-3 inline-flex items-center text-sm font-medium text-primary"
          aria-label={`View detailed information about ${artefact.title}`}
        >
          View details
          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
