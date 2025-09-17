import { cn } from '@/lib/utils'

interface SectionDividerProps {
  variant?: 'wave' | 'dots' | 'line' | 'archaeological'
  className?: string
}

export function SectionDivider({ variant = 'archaeological', className }: SectionDividerProps) {
  if (variant === 'wave') {
    return (
      <div className={cn("w-full h-12 relative overflow-hidden", className)}>
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,56 C150,100 350,0 600,56 C850,112 1050,0 1200,56 L1200,120 L0,120 Z"
            className="fill-sand-100 dark:fill-stone-900"
          />
        </svg>
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className={cn("flex justify-center items-center py-8", className)}>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse-soft" />
          <div className="w-2 h-2 rounded-full bg-bronze-500 animate-pulse-soft delay-150" />
          <div className="w-2 h-2 rounded-full bg-bronze-600 animate-pulse-soft delay-300" />
        </div>
      </div>
    )
  }

  if (variant === 'line') {
    return (
      <div className={cn("relative py-8", className)}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-bronze-200 dark:border-bronze-800" />
        </div>
      </div>
    )
  }

  // Archaeological pattern (default)
  return (
    <div className={cn("relative py-12", className)}>
      <div className="flex justify-center items-center gap-4">
        <div className="h-px bg-gradient-to-r from-transparent via-bronze-300 to-transparent w-24" />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="text-bronze-400"
        >
          {/* Ancient Greek meander pattern */}
          <path
            d="M5 20h10v-10h10v10h10M5 20v10h10v-10M25 20v10h10v-10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="h-px bg-gradient-to-r from-transparent via-bronze-300 to-transparent w-24" />
      </div>
    </div>
  )
}