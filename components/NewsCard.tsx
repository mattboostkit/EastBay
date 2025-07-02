import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { urlForImage } from '@/lib/sanity.unified';

type NewsCardProps = {
  article: {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt?: string;
    excerpt?: string;
    mainImage?: any;
    categories?: string[];
    author?: {
      name: string;
      image?: any;
    };
  };
  featured?: boolean;
};

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  if (featured) {
    return (
      <div className="mb-12 rounded-lg border bg-card shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {article.mainImage && (
            <div className="relative h-60 md:col-span-2 md:h-auto">
              <Image
                src={urlForImage(article.mainImage)
                  ?.width(800)
                  ?.height(600)
                  ?.url() || '/placeholder.jpg'}
                alt={article.mainImage.alt || article.title}
                fill
                className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover"
              />
            </div>
          )}
          <div className="p-6 md:col-span-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{formattedDate}</span>
              <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                Featured
              </span>
              {article.categories?.map((category) => (
                <span
                  key={category}
                  className="ml-2 rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h2 className="mt-3 text-2xl font-bold">{article.title}</h2>
            
            {article.excerpt && (
              <p className="mt-3 text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>
            )}
            
            {article.author && (
              <div className="mt-4 flex items-center gap-2">
                {article.author.image && (
                  <Image
                    src={urlForImage(article.author.image)
                      ?.width(40)
                      ?.height(40)
                      ?.url() || '/placeholder.jpg'}
                    alt={article.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm text-muted-foreground">
                  By {article.author.name}
                </span>
              </div>
            )}
            
            <div className="mt-4">
              <Link
                href={`/news/${article.slug.current}`}
                className="inline-flex items-center text-primary hover:underline"
              >
                Read full article
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      {article.mainImage && (
        <div className="relative h-48">
          <Image
            src={urlForImage(article.mainImage)
              ?.width(400)
              ?.height(300)
              ?.url() || '/placeholder.jpg'}
            alt={article.mainImage.alt || article.title}
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{formattedDate}</span>
          {article.categories?.map((category) => (
            <span
              key={category}
              className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="mt-3 text-xl font-bold line-clamp-2">{article.title}</h3>
        
        {article.excerpt && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        )}
        
        <div className="mt-4">
          <Link
            href={`/news/${article.slug.current}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Read more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}