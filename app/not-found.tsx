import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'

export const metadata = {
  title: '404 - Page Not Found | East Wear Bay Project',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-12 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have been moved, 
          deleted, or perhaps it never existed.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Search className="h-4 w-4" />
            Explore Content
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="mb-4 text-lg font-semibold">Popular Pages</h3>
          <div className="grid gap-2 text-sm">
            <Link href="/digital-museum" className="text-muted-foreground hover:text-primary">
              Digital Museum
            </Link>
            <Link href="/field-school" className="text-muted-foreground hover:text-primary">
              Field School
            </Link>
            <Link href="/about/project" className="text-muted-foreground hover:text-primary">
              About the Project
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}