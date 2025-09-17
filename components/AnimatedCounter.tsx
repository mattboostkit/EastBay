'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16) // ~60fps

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}