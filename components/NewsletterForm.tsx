"use client"

import { useState, useId } from 'react'
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const { trackFormSubmission } = useGoogleAnalytics()
  const emailId = useId()
  const privacyId = useId()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return
    
    setStatus('loading')
    setMessage('')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        // Track successful submission
        trackFormSubmission('newsletter', true)
        setStatus('success')
        setMessage(data.message || 'Thank you for subscribing!')
        setEmail('')
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        throw new Error(data.error || 'Failed to subscribe')
      }
    } catch (error) {
      // Track failed submission
      trackFormSubmission('newsletter', false)
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.')
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  return (
    <div className="mt-8">
      <form 
        className="flex flex-col gap-4 sm:flex-row"
        aria-labelledby="newsletter-heading"
        onSubmit={handleSubmit}
      >
        <div className="relative flex-1">
          <label htmlFor={emailId} className="sr-only">Email address</label>
          <input
            id={emailId}
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 disabled:opacity-50"
            required
            aria-required="true"
            aria-describedby={`${privacyId} ${message ? 'newsletter-message' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary-foreground px-6 py-3 font-medium text-primary shadow-sm hover:bg-primary-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          aria-label="Subscribe to our newsletter"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
        <p id={privacyId} className="sr-only">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
      
      {message && (
        <div
          id="newsletter-message"
          className={`mt-4 text-sm ${
            status === 'success' 
              ? 'text-green-200' 
              : status === 'error' 
              ? 'text-red-200' 
              : ''
          }`}
          role={status === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {message}
        </div>
      )}
    </div>
  )
}