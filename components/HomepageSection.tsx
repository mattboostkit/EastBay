"use client";

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { urlForImage } from '@/lib/sanity.unified';
import { PortableText } from '@portabletext/react';

type HomepageSectionProps = {
  section: {
    _id: string;
    title: string;
    sectionId: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: any;
    mainImage?: any;
    content?: any;
    ctaText?: string;
    ctaLink?: string;
    items?: any[];
    backgroundColor?: 'default' | 'muted' | 'primary';
    layout?: 'full' | 'two-columns' | 'grid' | 'hero';
  };
};

export default function HomepageSection({ section }: HomepageSectionProps) {
  // Determine background color class
  const bgColorClass = {
    default: 'bg-background',
    muted: 'bg-muted',
    primary: 'bg-primary text-primary-foreground',
  }[section.backgroundColor || 'default'];

  // Render different layouts based on the section type
  const renderSectionContent = () => {
    switch (section.layout) {
      case 'hero':
        return renderHeroLayout();
      case 'two-columns':
        return renderTwoColumnsLayout();
      case 'grid':
        return renderGridLayout();
      case 'full':
      default:
        return renderFullWidthLayout();
    }
  };

  // Hero layout (full-width background image with overlay text)
  const renderHeroLayout = () => (
    <section className="relative h-[80vh] overflow-hidden" aria-labelledby={`${section.sectionId}-heading`}>
      {section.backgroundImage && (
        <Image
          src={urlForImage(section.backgroundImage)
            ?.width(1920)
            ?.height(1080)
            ?.url() || ''}
          fill
          priority
          alt={section.backgroundImage.alt || section.title}
          className="object-cover object-center"
        />
      )}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="container relative z-10 flex h-full flex-col items-start justify-center text-white">
        <h1 id={`${section.sectionId}-heading`} className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {section.title}
        </h1>
        {section.subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            {section.subtitle}
          </p>
        )}
        {section.description && (
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            {section.description}
          </p>
        )}
        {section.ctaText && section.ctaLink && (
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href={section.ctaLink} 
              className="rounded-md bg-white px-6 py-3 font-medium text-gray-900 shadow-sm hover:bg-gray-100"
            >
              {section.ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );

  // Two columns layout (text on one side, image on the other)
  const renderTwoColumnsLayout = () => (
    <section className={`${bgColorClass} py-16 md:py-24`} aria-labelledby={`${section.sectionId}-heading`}>
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 id={`${section.sectionId}-heading`} className="text-3xl font-bold tracking-tight md:text-4xl">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                {section.subtitle}
              </p>
            )}
            {section.description && (
              <p className="mt-6 text-lg text-muted-foreground">
                {section.description}
              </p>
            )}
            {section.content && (
              <div className="mt-6 text-lg text-muted-foreground">
                <PortableText value={section.content} />
              </div>
            )}
            {section.ctaText && section.ctaLink && (
              <div className="mt-8">
                <Link 
                  href={section.ctaLink} 
                  className="inline-flex items-center text-lg font-medium text-primary"
                >
                  {section.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
          {section.mainImage && (
            <div className="relative rounded-lg overflow-hidden h-80 md:h-auto">
              <Image 
                src={urlForImage(section.mainImage)
                  ?.width(800)
                  ?.height(600)
                  ?.url() || ''}
                alt={section.mainImage.alt || section.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );

  // Grid layout (for featured items, news, etc.)
  const renderGridLayout = () => (
    <section className={`${bgColorClass} py-16 md:py-24`} aria-labelledby={`${section.sectionId}-heading`}>
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 id={`${section.sectionId}-heading`} className="text-3xl font-bold tracking-tight md:text-4xl">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="mt-2 text-lg text-muted-foreground md:text-xl">
                {section.subtitle}
              </p>
            )}
          </div>
          {section.ctaText && section.ctaLink && (
            <Link href={section.ctaLink} className="group inline-flex items-center gap-1 text-sm font-medium">
              {section.ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>

        {section.description && (
          <p className="mt-6 text-lg text-muted-foreground">
            {section.description}
          </p>
        )}

        {section.items && section.items.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {section.items.map((item, index) => (
              <div key={item._key || index} className="flex flex-col rounded-lg border bg-card shadow-sm">
                {item.image && (
                  <div className="relative h-48">
                    <Image
                      src={urlForImage(item.image)
                        ?.width(800)
                        ?.height(400)
                        ?.url() || ''}
                      fill
                      alt={item.image.alt || item.title}
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 p-6">
                  {item.date && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  )}
                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                  {item.subtitle && (
                    <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
                  )}
                  {item.description && (
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
                {item.link && item.linkText && (
                  <div className="p-6 pt-0">
                    <Link 
                      href={item.link} 
                      className="inline-flex items-center text-sm font-medium text-primary"
                    >
                      {item.linkText}
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  // Full width layout (for simple content sections)
  const renderFullWidthLayout = () => (
    <section className={`${bgColorClass} py-16 md:py-24`} aria-labelledby={`${section.sectionId}-heading`}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id={`${section.sectionId}-heading`} className="text-3xl font-bold tracking-tight md:text-4xl">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="mt-2 text-lg text-muted-foreground md:text-xl">
              {section.subtitle}
            </p>
          )}
          {section.description && (
            <p className="mt-4 text-lg">
              {section.description}
            </p>
          )}
          {section.content && (
            <div className="mt-6 text-lg">
              <PortableText value={section.content} />
            </div>
          )}
          {section.ctaText && section.ctaLink && (
            <div className="mt-8">
              <Link 
                href={section.ctaLink} 
                className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                {section.ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  return renderSectionContent();
}
