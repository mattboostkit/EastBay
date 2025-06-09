"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type TimelineEntry = {
  _id: string
  title: string
  date: string
  description?: string
  image?: any
  category?: string
  isMajor?: boolean
}

interface TimelineProps {
  entries: TimelineEntry[]
}

export default function Timeline({ entries }: TimelineProps) {
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null)
  const [activePeriod, setActivePeriod] = useState<string | null>(null)
  
  // Sort entries by date
  const sortedEntries = [...entries].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  
  // Extract years for filtering
  const years = Array.from(new Set(sortedEntries.map(entry => 
    new Date(entry.date).getFullYear().toString()
  ))).sort()
  
  // Filter entries by active period
  const filteredEntries = activePeriod 
    ? sortedEntries.filter(entry => 
        new Date(entry.date).getFullYear().toString() === activePeriod
      )
    : sortedEntries
  
  // Get category color class
  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'discovery': return 'border-blue-500 bg-blue-500/10'
      case 'field-work': return 'border-green-500 bg-green-500/10'
      case 'publication': return 'border-purple-500 bg-purple-500/10'
      case 'exhibition': return 'border-yellow-500 bg-yellow-500/10'
      case 'award': return 'border-red-500 bg-red-500/10'
      default: return 'border-gray-500 bg-gray-500/10'
    }
  }
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }
  
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Period filter */}
      <div className="mb-10 flex items-center justify-center">
        <button 
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
          onClick={() => setActivePeriod(prev => {
            const index = years.indexOf(prev || '')
            return index > 0 ? years[index - 1] : null
          })}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <div className="relative mx-4 min-w-40 text-center">
          <button
            className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 hover:bg-muted"
            onClick={() => setActivePeriod(null)}
          >
            <Calendar className="h-4 w-4" />
            {activePeriod || 'All Years'}
          </button>
        </div>
        
        <button 
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted"
          onClick={() => setActivePeriod(prev => {
            const index = years.indexOf(prev || '')
            return index < years.length - 1 ? years[index + 1] : years[years.length - 1]
          })}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      
      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
        
        <div className="space-y-12">
          {filteredEntries.map((entry, index) => (
            <motion.div 
              key={entry._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative flex items-center justify-between gap-4",
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              )}
            >
              {/* Content */}
              <div className="w-5/12">
                <motion.div 
                  className={cn(
                    "rounded-lg border p-4 shadow-sm transition-all",
                    entry.isMajor ? "border-2 border-primary" : "border",
                    expandedEntry === entry._id ? "bg-card" : "bg-background",
                    getCategoryColor(entry.category)
                  )}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setExpandedEntry(
                    expandedEntry === entry._id ? null : entry._id
                  )}
                >
                  <span className="mb-1 block text-sm font-medium text-muted-foreground">
                    {formatDate(entry.date)}
                  </span>
                  <h3 className="mb-2 font-bold">{entry.title}</h3>
                  
                  {expandedEntry === entry._id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-2"
                    >
                      {entry.image && (
                        <div className="mb-3 overflow-hidden rounded-md">
                          <Image
                            src={entry.image?.url || "https://images.unsplash.com/photo-1626695435298-cfa53686c81f"}
                            alt={entry.title}
                            width={400}
                            height={250}
                            className="aspect-video w-full object-cover"
                          />
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground">{entry.description}</p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              
              {/* Center dot */}
              <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}