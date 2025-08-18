import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, Lock, LockOpen, FileText, Calendar, Users, BookOpen } from 'lucide-react'
import { fetchAllResearchPublications } from '@/lib/sanity.unified'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Research, Reports and Publications | East Wear Bay Archaeological Project',
  description: 'Academic publications, research papers, and scholarly articles about the Folkestone Roman Villa and East Wear Bay archaeological excavations.',
}

export default async function PublicationsPage() {
  const publications = await fetchAllResearchPublications()

  const formatAuthors = (authors: string[]) => {
    if (!authors || authors.length === 0) return ''
    if (authors.length === 1) return authors[0]
    if (authors.length === 2) return authors.join(' and ')
    return authors.slice(0, -1).join(', ') + ' and ' + authors[authors.length - 1]
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })
  }

  return (
    <>
      <PageHero
        title="Research, Reports and Publications"
        description="Scholarly articles and research papers from the East Wear Bay Archaeological Project, advancing our understanding of Roman Britain."
        icon={BookOpen}
        variant="gradient"
      />

      <div className="container py-12">
        {/* Research Impact */}
        <section className="mb-12">
          <div className="rounded-lg border bg-card p-8">
            <h2 className="text-2xl font-bold mb-4">Our Research Impact</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-muted-foreground">Peer-reviewed publications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground">Conference presentations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">8</p>
                <p className="text-muted-foreground">Research institutions involved</p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Grey Literature Reports</h2>
          
          {publications && publications.length > 0 ? (
            <div className="space-y-6">
              {publications.map((publication: any) => (
                <Card key={publication._id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl leading-tight">
                          {publication.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {formatAuthors(publication.authors)}
                        </CardDescription>
                      </div>
                      {publication.featured && (
                        <Badge variant="secondary" className="ml-4">Featured</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Publication Details */}
                    <div className="mb-4 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">{publication.journal}</span>
                        {publication.volume && ` ${publication.volume}`}
                        {publication.issue && `(${publication.issue})`}
                        {publication.pages && `, pp. ${publication.pages}`}
                        {publication.publicationDate && ` • ${formatDate(publication.publicationDate)}`}
                      </p>
                      {publication.doi && (
                        <p className="mt-1">
                          DOI: <a 
                            href={`https://doi.org/${publication.doi}`} 
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {publication.doi}
                          </a>
                        </p>
                      )}
                    </div>

                    {/* Abstract */}
                    {publication.abstract && (
                      <div className="mb-4">
                        <p className="text-sm">{publication.abstract}</p>
                      </div>
                    )}

                    {/* Keywords */}
                    {publication.keywords && publication.keywords.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {publication.keywords.map((keyword: string) => (
                            <Badge key={keyword} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      {publication.pdfUrl ? (
                        <a 
                          href={publication.pdfUrl}
                          className="inline-flex items-center text-sm text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="mr-1 h-4 w-4" />
                          Download PDF
                        </a>
                      ) : (
                        <span className="inline-flex items-center text-sm text-muted-foreground">
                          <Lock className="mr-1 h-4 w-4" />
                          PDF not available
                        </span>
                      )}
                      
                      {publication.openAccess && (
                        <Badge variant="secondary" className="text-xs">
                          <LockOpen className="mr-1 h-3 w-3" />
                          Open Access
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Publications are being prepared. Please check back soon!</p>
            </div>
          )}
        </section>

        {/* Research Areas */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Research Areas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Roman Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analysis of villa construction techniques, architectural phases, and comparative studies with other Romano-British sites.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Material Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ceramic analysis, small finds studies, and investigation of trade networks and consumption patterns.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Environmental Archaeology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Palaeobotanical evidence, landscape reconstruction, and agricultural practices in Roman Kent.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Digital Archaeology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  3D documentation, photogrammetry, GIS analysis, and virtual reconstructions of the site.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Public Archaeology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Community engagement methodologies, educational impact studies, and heritage management strategies.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conservation Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Site preservation techniques, coastal erosion monitoring, and sustainable excavation practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="rounded-lg border bg-muted/50 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Collaborate With Us</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We welcome collaborations with researchers and institutions. If you're interested in conducting research at East Wear Bay or accessing our archive, please get in touch.
            </p>
            <Link 
              href="/contact?subject=research"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Finds and Archive Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}