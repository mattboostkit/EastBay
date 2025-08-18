import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface PageHeroProps {
  title: string
  description?: string
  icon?: LucideIcon
  variant?: 'gradient' | 'muted' | 'image'
  className?: string
  backgroundImage?: string
}

export function PageHero({ 
  title, 
  description, 
  icon: Icon,
  variant = 'gradient',
  className,
  backgroundImage
}: PageHeroProps) {
  return (
    <section className={cn(
      "relative py-12 md:py-20",
      variant === 'gradient' && !backgroundImage && "bg-gradient-to-br from-primary/10 via-primary/5 to-background",
      variant === 'muted' && !backgroundImage && "bg-muted",
      variant === 'image' && "overflow-hidden",
      className
    )}>
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        </>
      )}
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {Icon && (
            <div className={cn(
              "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full",
              backgroundImage ? "bg-white/20 backdrop-blur-sm" : "bg-primary/10"
            )}>
              <Icon className={cn(
                "h-8 w-8",
                backgroundImage ? "text-white" : "text-primary"
              )} />
            </div>
          )}
          <h1 className={cn(
            "text-3xl font-bold tracking-tight md:text-4xl",
            backgroundImage && "text-white"
          )}>{title}</h1>
          {description && (
            <p className={cn(
              "mt-4 text-lg",
              backgroundImage ? "text-white/90" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}