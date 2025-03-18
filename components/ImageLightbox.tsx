import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity.client';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type ImageLightboxProps = {
  images: any[];
  initialIndex: number;
  onClose: () => void;
  altText?: (index: number) => string;
};

export default function ImageLightbox({ images, initialIndex = 0, onClose, altText }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  // Create portal element on mount
  useEffect(() => {
    const element = document.createElement('div');
    element.className = 'lightbox-portal';
    document.body.appendChild(element);
    setPortalElement(element);

    // Handle keyboard controls
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigateToPrevious();
      } else if (e.key === 'ArrowRight') {
        navigateToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Lock body scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Cleanup
    return () => {
      document.body.removeChild(element);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [onClose]);

  const navigateToPrevious = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const navigateToNext = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const getImageAlt = (index: number) => {
    if (altText) return altText(index);
    return images[index]?.alt || `Image ${index + 1}`;
  };

  if (!portalElement) return null;

  const lightboxContent = (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-centre justify-centre">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colours z-50"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={navigateToPrevious}
        className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colours"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={navigateToNext}
        className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colours"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      {/* Image container */}
      <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-centre justify-centre p-4">
        {isLoading && (
          <div className="absolute inset-0 flex items-centre justify-centre">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}

        <Image
          src={urlForImage(images[currentIndex])
            ?.width(1600)
            ?.height(1200)
            ?.fit('max')
            ?.format('webp')
            ?.url() || '/placeholder-image.jpg'}
          alt={getImageAlt(currentIndex)}
          fill
          className={`object-contain transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleImageLoad}
          onClick={(e) => e.stopPropagation()}
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Caption */}
        {images[currentIndex]?.caption && (
          <div className="absolute bottom-12 left-0 right-0 text-centre px-4">
            <p className="text-white bg-black bg-opacity-60 inline-block px-4 py-2 rounded text-sm max-w-2xl mx-auto">
              {images[currentIndex].caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(lightboxContent, portalElement);
}