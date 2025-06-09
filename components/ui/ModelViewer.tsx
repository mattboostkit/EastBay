"use client"

import { useRef, useEffect } from 'react'

interface ModelViewerProps {
  src: string
  title: string
  aspectRatio?: 'square' | '16/9' | '4/3'
  autoPlay?: boolean | number
  ui_controls?: number
  autoSpin?: number
  transparent?: number
}

export function ModelViewer({
  src,
  title,
  aspectRatio = 'square',
  autoPlay = true,
  ui_controls = 1,
  autoSpin = 0,
  transparent = 0,
}: ModelViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframeRef.current?.src === 'about:blank') {
            iframeRef.current.src = buildUrl(src, {
              autostart: autoPlay ? 1 : 0,
              ui_controls,
              autostart: autoPlay ? 1 : 0,
              autospin: autoSpin,
              transparent,
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current)
      }
    }
  }, [src, autoPlay, ui_controls, autoSpin, transparent])

  const buildUrl = (baseUrl: string, params: Record<string, any>) => {
    const url = new URL(baseUrl)
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, value.toString())
      }
    })
    return url.toString()
  }

  const getAspectRatio = () => {
    switch (aspectRatio) {
      case '16/9':
        return 'pb-[56.25%]' // 9/16 = 0.5625 or 56.25%
      case '4/3':
        return 'pb-[75%]' // 3/4 = 0.75 or 75%
      case 'square':
      default:
        return 'pb-[100%]' // 1/1 = 1 or 100%
    }
  }

  return (
    <div className="sketchfab-embed-wrapper">
      <div className={`relative w-full ${getAspectRatio()}`}>
        <iframe
          ref={iframeRef}
          title={title}
          src={autoPlay ? buildUrl(src, {
            autostart: 1,
            ui_controls,
            autospin: autoSpin,
            transparent,
          }) : 'about:blank'}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          className="absolute top-0 left-0 h-full w-full rounded-lg"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}