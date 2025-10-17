"use client"

import { useState, useId } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  story: z.string().min(50, {
    message: "Please share at least 50 characters about your experience.",
  }),
  involvement: z.string().min(5, {
    message: "Please tell us how you were involved with the project.",
  }),
})

export default function StoryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { trackFormSubmission } = useGoogleAnalytics()

  // Generate unique IDs for form fields
  const nameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const involvementId = useId()
  const storyId = useId()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      involvement: "",
      story: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: `Folkestone Stories Submission from ${values.name}`,
          message: `Phone: ${values.phone || 'Not provided'}\n\nHow I was involved:\n${values.involvement}\n\nMy Story:\n${values.story}`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      toast.success('Thank you for sharing your story!', {
        description: 'We will review your submission and may reach out to learn more.',
      })

      // Track successful form submission
      trackFormSubmission('folkestone_story', true)

      form.reset()
    } catch (error) {
      toast.error('Failed to submit story', {
        description: error instanceof Error ? error.message : 'Please try again later',
      })

      // Track failed form submission
      trackFormSubmission('folkestone_story', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" aria-label="Share your story form">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={nameId}>Name *</FormLabel>
                <FormControl>
                  <Input
                    id={nameId}
                    placeholder="Your name"
                    {...field}
                    aria-required="true"
                    aria-invalid={!!form.formState.errors.name}
                    aria-describedby={form.formState.errors.name ? `${nameId}-error` : undefined}
                  />
                </FormControl>
                <FormMessage id={`${nameId}-error`} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={emailId}>Email *</FormLabel>
                <FormControl>
                  <Input
                    id={emailId}
                    placeholder="Your email address"
                    type="email"
                    {...field}
                    aria-required="true"
                    aria-invalid={!!form.formState.errors.email}
                    aria-describedby={form.formState.errors.email ? `${emailId}-error` : undefined}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage id={`${emailId}-error`} />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={phoneId}>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input
                  id={phoneId}
                  placeholder="Your phone number"
                  type="tel"
                  {...field}
                  aria-invalid={!!form.formState.errors.phone}
                  aria-describedby={form.formState.errors.phone ? `${phoneId}-error` : undefined}
                  autoComplete="tel"
                />
              </FormControl>
              <FormDescription>
                In case we'd like to follow up with more questions
              </FormDescription>
              <FormMessage id={`${phoneId}-error`} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="involvement"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={involvementId}>Your Role/Involvement *</FormLabel>
              <FormControl>
                <Input
                  id={involvementId}
                  placeholder="e.g., Volunteer, Staff Member, Student, Local Resident"
                  {...field}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.involvement}
                  aria-describedby={
                    form.formState.errors.involvement
                      ? `${involvementId}-error ${involvementId}-description`
                      : `${involvementId}-description`
                  }
                />
              </FormControl>
              <FormDescription id={`${involvementId}-description`}>
                How were you involved with the East Wear Bay project?
              </FormDescription>
              <FormMessage id={`${involvementId}-error`} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="story"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={storyId}>Your Story *</FormLabel>
              <FormControl>
                <Textarea
                  id={storyId}
                  placeholder="Share your memories, experiences, and what the East Wear Bay project means to you..."
                  className="min-h-[200px] resize-y"
                  {...field}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.story}
                  aria-describedby={
                    form.formState.errors.story
                      ? `${storyId}-error ${storyId}-description`
                      : `${storyId}-description`
                  }
                />
              </FormControl>
              <FormDescription id={`${storyId}-description`}>
                Tell us about your experiences at East Wear Bay. What moments stand out? What did you learn? How did the project impact you?
              </FormDescription>
              <FormMessage id={`${storyId}-error`} />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-bronze-600 hover:bg-bronze-700 text-white md:w-auto"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>Share My Story</span>
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
