"use client";

import { useState } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity.client';
import dynamic from 'next/dynamic';

// Dynamically import the Lightbox to avoid SSR issues
const ImageLightbox = dynamic(() => import('./ImageLightbox'), { ssr: false });

type ArtifactImage = {
  _key: string;
  alt?: string;
  caption?: string;
  isMainImage?: boolean;
  asset: {
    _ref: string;
    _type: string;
  };
};

type ArtifactProps = {
  artifact: {
    title: string;
    images?: ArtifactImage[];
    description?: string;
    [key: string]: any;
  };
};

export default function ArtifactDetail({ artifact }: ArtifactProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Error handling for missing artifact data
  if (!artifact) {
    return (
      <div className="p-4 bg-red-50 text-red-500 rounded-md">
        <h2 className="text-lg font-medium">Error Loading Artifact</h2>
        <p>The artifact data could not be loaded. Please try again later.</p>
      </div>
    );
  }

  // Find main image if one is specifically marked
  const mainImageIndex = artifact.images?.findIndex(img => img.isMainImage) ?? 0;
  const mainImage = artifact.images?.[mainImageIndex >= 0 ? mainImageIndex : 0];
  
  // Get other images
  const otherImages = artifact.images?.filter((_, i) => i !== mainImageIndex);

  // Function to handle opening the lightbox
  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };
  
  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  // Helper for image alt text in lightbox
  const getLightboxAltText = (index: number) => {
    if (index === mainImageIndex) {
      return mainImage?.alt || artifact.title;
    }
    
    const adjustedIndex = index > mainImageIndex ? index - 1 : index;
    return otherImages?.[adjustedIndex]?.alt || `${artifact.title} - image ${index + 1}`;
  };
  
  return (
    <div className="artifact-detail">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">{artifact.title}</h1>
      
      {/* Display main image with error handling */}
      {mainImage ? (
        <div className="main-image">
          <div 
            className="relative cursor-pointer overflow-hidden rounded-lg" 
            onClick={() => openLightbox(mainImageIndex)}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={urlForImage(mainImage)
                  ?.width(1200)
                  ?.height(800)
                  ?.format('webp')
                  ?.url() || '/placeholder-image.jpg'}
                alt={mainImage.alt || artifact.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-image.jpg';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
              <span className="sr-only">View full size</span>
            </div>
          </div>
          {mainImage.caption && (
            <p className="text-sm text-grey-600 mt-2 italic">{mainImage.caption}</p>
          )}
        </div>
      ) : (
        <div className="bg-grey-100 rounded-lg p-8 text-centre">
          <p className="text-grey-500">No primary image available for this artifact.</p>
        </div>
      )}
      
      {/* Display other images in a gallery with lazy loading */}
      {otherImages && otherImages.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="image-gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherImages.map((image, i) => (
              <div 
                key={image._key || i} 
                className="gallery-item relative cursor-pointer rounded-lg overflow-hidden"
                onClick={() => openLightbox(i + (mainImageIndex !== i ? 1 : 0))}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <Image
                    src={urlForImage(image)
                      ?.width(400)
                      ?.height(300)
                      ?.format('webp')
                      ?.url() || '/placeholder-image.jpg'}
                    alt={image.alt || `${artifact.title} - image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-image.jpg';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <span className="sr-only">View full size</span>
                </div>
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 text-xs truncate">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Other artifact details */}
      <div className="mt-8 space-y-6">
        {artifact.description && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-grey-700">{artifact.description}</p>
          </div>
        )}
        
        {/* Display additional metadata in a structured way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {artifact.period && (
            <div>
              <h3 className="text-sm font-medium text-grey-500">Historical Period</h3>
              <p className="mt-1">{artifact.period}</p>
            </div>
          )}
          
          {artifact.date && (
            <div>
              <h3 className="text-sm font-medium text-grey-500">Dating</h3>
              <p className="mt-1">{artifact.date}</p>
            </div>
          )}
          
          {artifact.material && (
            <div>
              <h3 className="text-sm font-medium text-grey-500">Material</h3>
              <p className="mt-1">{artifact.material}</p>
            </div>
          )}
          
          {artifact.dimensions && (
            <div>
              <h3 className="text-sm font-medium text-grey-500">Dimensions</h3>
              <p className="mt-1">{artifact.dimensions}</p>
            </div>
          )}
          
          {artifact.location && (
            <div>
              <h3 className="text-sm font-medium text-grey-500">Discovery Location</h3>
              <p className="mt-1">{artifact.location}</p>
            </div>
          )}
          
          {artifact.currentLocation && (
            <div>
              <h3 className="text-sm font-medium text-grey-500">Current Location</h3>
              <p className="mt-1">{artifact.currentLocation}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Lightbox for full-screen image viewing */}
      {lightboxOpen && artifact.images && artifact.images.length > 0 && (
        <ImageLightbox 
          images={artifact.images}
          initialIndex={selectedImageIndex || 0}
          onClose={closeLightbox}
          altText={getLightboxAltText}
        />
      )}
    </div>
  );
}