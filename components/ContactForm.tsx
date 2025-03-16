"use client"

import { useState, useId } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
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
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { trackFormSubmission } = useGoogleAnalytics()
  
  // Generate unique IDs for form fields
  const nameId = useId()
  const emailId = useId()
  const subjectId = useId()
  const messageId = useId()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      
      toast.success('Message sent successfully', {
        description: 'We will get back to you as soon as possible.',
      })
      
      // Track successful form submission
      trackFormSubmission('contact', true)
      
      form.reset()
    } catch (error) {
      toast.error('Failed to send message', {
        description: error instanceof Error ? error.message : 'Please try again later',
      })
      
      // Track failed form submission
      trackFormSubmission('contact', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" aria-label="Contact form">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={nameId}>Name</FormLabel>
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
                <FormLabel htmlFor={emailId}>Email</FormLabel>
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={subjectId}>Subject</FormLabel>
              <FormControl>
                <Input 
                  id={subjectId}
                  placeholder="Message subject" 
                  {...field} 
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.subject}
                  aria-describedby={form.formState.errors.subject ? `${subjectId}-error` : undefined}
                />
              </FormControl>
              <FormMessage id={`${subjectId}-error`} />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={messageId}>Message</FormLabel>
              <FormControl>
                <Textarea 
                  id={messageId}
                  placeholder="Write your message here..." 
                  className="min-h-[150px] resize-y"
                  {...field} 
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.message}
                  aria-describedby={
                    form.formState.errors.message 
                      ? `${messageId}-error ${messageId}-description` 
                      : `${messageId}-description`
                  }
                />
              </FormControl>
              <FormDescription id={`${messageId}-description`}>
                Please provide as much detail as possible.
              </FormDescription>
              <FormMessage id={`${messageId}-error`} />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full md:w-auto" 
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> 
              <span>Sending...</span>
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </Form>
  )
}