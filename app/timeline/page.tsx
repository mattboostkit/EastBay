import { Metadata } from 'next'
import Timeline from '@/components/Timeline'
import { fetchAllTimelineEntries } from '@/lib/sanity.unified'

export const metadata: Metadata = {
  title: 'Project Timeline | East Wear Bay Archaeological Project',
  description: 'Explore the history and milestones of the East Wear Bay archaeological excavations from discovery to present day.',
}

export default async function TimelinePage() {
  const entries = await fetchAllTimelineEntries()

  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Project Timeline</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Journey through the history of the East Wear Bay archaeological site, from its discovery to ongoing research and conservation efforts.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        {entries && entries.length > 0 ? (
          <Timeline entries={entries} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Timeline data is being prepared. Please check back soon!</p>
          </div>
        )}
      </div>
    </>
  )
}