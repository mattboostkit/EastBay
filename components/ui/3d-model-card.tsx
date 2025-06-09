"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ModelViewer } from '@/components/ui/ModelViewer'
import { ArrowRight, Maximize, Minimize } from 'lucide-react'

interface ArtifactCardProps {
  id: string
  title: string
  period: string
  description: string
  modelUrl?: string
  imageUrl?: string
  slug: string
  expanded?: boolean
}

export function ArtifactCard({
  id,
  title,
  period,
  description,
  modelUrl,
  imageUrl,
  slug,
  expanded = false,
}: ArtifactCardProps) {
  const [isExpanded, setIsExpanded] = useState(expanded)

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          {(modelUrl || imageUrl) && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8"
            >
              {isExpanded ? (
                <Minimize className="h-4 w-4" />
              ) : (
                <Maximize className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
        <CardDescription>{period}</CardDescription>
      </CardHeader>
      
      <CardContent className="p-4">
        {modelUrl ? (
          <div className={`overflow-hidden rounded-md transition-all ${isExpanded ? "h-[400px]" : "h-[250px]"}`}>
            <ModelViewer 
              src={modelUrl} 
              title={title} 
              aspectRatio={isExpanded ? "16/9" : "square"}
            />
          </div>
        ) : imageUrl ? (
          <div className={`relative overflow-hidden rounded-md transition-all ${isExpanded ? "h-[400px]" : "h-[250px]"}`}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        ) : null}
        
        <p className={`mt-4 text-sm text-muted-foreground ${isExpanded ? "" : "line-clamp-3"}`}>
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link href={`/artifacts/${slug}`}>
          <Button variant="outline" size="sm" className="gap-1">
            View details <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}