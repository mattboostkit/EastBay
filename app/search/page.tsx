import { Metadata } from 'next'
import { Search } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Search | East Wear Bay Archaeological Project',
  description: 'Search the East Wear Bay Archaeological Project website for artifacts, news, and information.',
}

export default function SearchPage() {
  return (
    <>
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Search</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Find artifacts, news, research, and more across our website
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <form className="mb-8">
              <div className="flex gap-2">
                <input
                  type="search"
                  placeholder="Search for artifacts, news, publications..."
                  className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Placeholder for search results */}
            <div className="rounded-lg border bg-card p-8 text-center">
              <p className="text-muted-foreground">
                Enter a search term above to find content across the East Wear Bay Archaeological Project website.
              </p>
            </div>

            {/* Popular Searches */}
            <div className="mt-12">
              <h2 className="mb-4 text-xl font-semibold">Popular Searches</h2>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/digital-museum"
                  className="rounded-full border bg-background px-4 py-2 text-sm hover:bg-accent"
                >
                  Roman Villa
                </Link>
                <Link
                  href="/field-school"
                  className="rounded-full border bg-background px-4 py-2 text-sm hover:bg-accent"
                >
                  Field School
                </Link>
                <Link
                  href="/volunteer"
                  className="rounded-full border bg-background px-4 py-2 text-sm hover:bg-accent"
                >
                  Volunteer Opportunities
                </Link>
                <Link
                  href="/education"
                  className="rounded-full border bg-background px-4 py-2 text-sm hover:bg-accent"
                >
                  Educational Resources
                </Link>
                <Link
                  href="/timeline"
                  className="rounded-full border bg-background px-4 py-2 text-sm hover:bg-accent"
                >
                  Project Timeline
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}