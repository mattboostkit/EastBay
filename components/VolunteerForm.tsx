"use client"

import { useState } from 'react'
import { Send } from 'lucide-react'
import { toast } from 'sonner'

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const interests = formData.getAll('interests')

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'Not provided',
      subject: 'Volunteer Registration',
      message: `
Experience: ${formData.get('experience')}
Interests: ${interests.join(', ')}
Availability: ${formData.get('availability') || 'Not specified'}

Additional Information:
${formData.get('message') || 'None provided'}
      `.trim()
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      toast.success('Registration submitted successfully!', {
        description: 'Thank you for volunteering. We will contact you soon.',
      })

      e.currentTarget.reset()
    } catch (error) {
      toast.error('Failed to submit registration', {
        description: error instanceof Error ? error.message : 'Please try again later',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="availability" className="block text-sm font-medium mb-2">
          Availability (optional)
        </label>
        <input
          type="text"
          id="availability"
          name="availability"
          placeholder="e.g., Weekends, Weekdays, Specific dates"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Areas of Interest (select all that apply)
        </label>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="interests"
              value="excavation"
              className="mr-2 rounded border-gray-300"
            />
            <span className="text-sm">Excavation</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="interests"
              value="finds-processing"
              className="mr-2 rounded border-gray-300"
            />
            <span className="text-sm">Finds Processing</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="interests"
              value="community-outreach"
              className="mr-2 rounded border-gray-300"
            />
            <span className="text-sm">Community Outreach</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="interests"
              value="digital-documentation"
              className="mr-2 rounded border-gray-300"
            />
            <span className="text-sm">Digital Documentation</span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium mb-2">
          Previous Experience
        </label>
        <select
          id="experience"
          name="experience"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="none">No previous experience</option>
          <option value="some">Some archaeology experience</option>
          <option value="student">Archaeology student</option>
          <option value="professional">Professional background</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Tell us about yourself (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Share your interests, availability, or any questions you have..."
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          <Send className="ml-2 h-4 w-4" />
        </button>
        <p className="text-sm text-muted-foreground">
          Or email us at{' '}
          <a href="mailto:get_involved@canterburytrust.ac.uk" className="text-primary hover:underline">
            get_involved@canterburytrust.ac.uk
          </a>
        </p>
      </div>
    </form>
  )
}
