import Link from 'next/link';
import Image from 'next/image';
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
    sketchfabUrl?: string;
    image?: {
      url?: string;
      alt?: string;
    };
  };
}

export default function ArtefactCard({ artefact }: ArtefactCardProps) {
  // Determine if this is a 3D model or image-based artefact
  const has3DModel = artefact.modelUrl || artefact.sketchfabUrl;
  const hasImage = artefact.image?.url;

  return (
    <div className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="p-3">
        {has3DModel ? (
          <ModelViewer
            src={artefact.modelUrl || artefact.sketchfabUrl || "https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed"}
            title={artefact.title}
            aspectRatio="square"
          />
        ) : hasImage ? (
          <div className="relative aspect-square overflow-hidden rounded-md bg-muted">
            <Image
              src={artefact.image.url}
              alt={artefact.image.alt || artefact.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="relative aspect-square overflow-hidden rounded-md bg-muted flex items-center justify-center">
            <p className="text-muted-foreground text-sm">No image available</p>
          </div>
        )}
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
