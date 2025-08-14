import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: string
  description?: string
  icon?: LucideIcon
  variant?: 'gradient' | 'muted' | 'image'
  className?: string
}

export function PageHero({ 
  title, 
  description, 
  icon: Icon,
  variant = 'gradient',
  className 
}: PageHeroProps) {
  return (
    <section className={cn(
      "relative py-12 md:py-20",
      variant === 'gradient' && "bg-gradient-to-br from-primary/10 via-primary/5 to-background",
      variant === 'muted' && "bg-muted",
      className
    )}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {Icon && (
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          )}
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}