import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export function ArtefactCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="p-3">
        <Skeleton className="relative pb-[100%]" />
      </div>
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  )
}

export function NewsCardSkeleton() {
  return (
    <div className="flex flex-col rounded-lg border bg-card shadow-sm">
      <Skeleton className="h-48 rounded-t-lg" />
      <div className="flex-1 p-6 space-y-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
      <div className="p-6 pt-0">
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  )
}

export function PartnerLogoSkeleton() {
  return <Skeleton className="h-24 w-32 rounded-lg" />
}