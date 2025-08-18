'use client'

import { useState } from 'react'
import { Download, Expand, X } from 'lucide-react'

interface PDFViewerProps {
  url: string
  title?: string
  className?: string
}

export function PDFViewer({ url, title, className = '' }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <>
      <div className={`relative ${className}`}>
        <div className="mb-2 flex items-center justify-between">
          {title && <h4 className="text-sm font-medium">{title}</h4>}
          <div className="flex gap-2">
            <button
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-xs hover:bg-accent"
              aria-label="View fullscreen"
            >
              <Expand className="h-3 w-3 mr-1" />
              Fullscreen
            </button>
            <a
              href={url}
              download
              className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-xs hover:bg-accent"
              aria-label="Download PDF"
            >
              <Download className="h-3 w-3 mr-1" />
              Download
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border bg-card">
          <iframe
            src={`${url}#toolbar=0&navpanes=0&scrollbar=1`}
            className="h-[600px] w-full"
            title={title || 'PDF Document'}
          />
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90">
          <div className="absolute right-4 top-4 flex gap-2">
            <a
              href={url}
              download
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
            <button
              onClick={() => setIsFullscreen(false)}
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100"
              aria-label="Close fullscreen"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <iframe
            src={`${url}#toolbar=0&navpanes=0&scrollbar=1`}
            className="h-full w-full pt-16"
            title={title || 'PDF Document'}
          />
        </div>
      )}
    </>
  )
}