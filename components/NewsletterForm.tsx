<<<<<<< HEAD
"use client"

import { useState, useId } from 'react'
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const { trackFormSubmission } = useGoogleAnalytics()
  const emailId = useId()
  const privacyId = useId()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (email) {
      // Here you would send the email to your API
      fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // Track successful submission
            trackFormSubmission('newsletter', true)
            setEmail('')
            alert('Thank you for subscribing to our newsletter!')
          } else {
            throw new Error(data.error || 'Failed to subscribe')
          }
        })
        .catch((error) => {
          // Track failed submission
          trackFormSubmission('newsletter', false)
          alert(error.message || 'An error occurred. Please try again.')
        })
    }
  }

  return (
    <form 
      className="mt-8 flex flex-col gap-4 sm:flex-row"
      aria-labelledby="newsletter-heading"
      onSubmit={handleSubmit}
    >
      <div className="relative flex-1">
        <label htmlFor={emailId} className="sr-only">Email address</label>
        <input
          id={emailId}
          type="email"
          placeholder="Enter your email"
          className="flex-1 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
          required
          aria-required="true"
          aria-describedby={privacyId}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary-foreground px-6 py-3 font-medium text-primary shadow-sm hover:bg-primary-foreground/90"
        aria-label="Subscribe to our newsletter"
      >
        Subscribe
      </button>
      <p id={privacyId} className="sr-only">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
=======
"use client"

import { useState, useId } from 'react'
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const { trackFormSubmission } = useGoogleAnalytics()
  const emailId = useId()
  const privacyId = useId()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (email) {
      // Here you would send the email to your API
      fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // Track successful submission
            trackFormSubmission('newsletter', true)
            setEmail('')
            alert('Thank you for subscribing to our newsletter!')
          } else {
            throw new Error(data.error || 'Failed to subscribe')
          }
        })
        .catch((error) => {
          // Track failed submission
          trackFormSubmission('newsletter', false)
          alert(error.message || 'An error occurred. Please try again.')
        })
    }
  }

  return (
    <form 
      className="mt-8 flex flex-col gap-4 sm:flex-row"
      aria-labelledby="newsletter-heading"
      onSubmit={handleSubmit}
    >
      <div className="relative flex-1">
        <label htmlFor={emailId} className="sr-only">Email address</label>
        <input
          id={emailId}
          type="email"
          placeholder="Enter your email"
          className="flex-1 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
          required
          aria-required="true"
          aria-describedby={privacyId}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary-foreground px-6 py-3 font-medium text-primary shadow-sm hover:bg-primary-foreground/90"
        aria-label="Subscribe to our newsletter"
      >
        Subscribe
      </button>
      <p id={privacyId} className="sr-only">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
}