import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, Lock, LockOpen, FileText, Calendar, Users, BookOpen } from 'lucide-react'
import { fetchAllResearchPublications } from '@/lib/sanity.unified'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Research, Reports and Publications | East Wear Bay Archaeological Project',
  description: 'Academic publications, research papers, and scholarly articles about the Folkestone Roman Villa and East Wear Bay archaeological excavations.',
}

// Revalidate every 60 seconds to ensure fresh data
export const revalidate = 60

export default async function PublicationsPage() {
  const publications = await fetchAllResearchPublications()

  const formatAuthors = (publication: any) => {
    const authorNames: string[] = []

    // Add team member authors
    if (publication.authors && Array.isArray(publication.authors)) {
      publication.authors.forEach((author: any) => {
        if (author?.name) {
          authorNames.push(author.name)
        }
      })
    }

    // Add external authors
    if (publication.externalAuthors && Array.isArray(publication.externalAuthors)) {
      authorNames.push(...publication.externalAuthors)
    }

    if (authorNames.length === 0) return 'Author not specified'
    if (authorNames.length === 1) return authorNames[0]
    if (authorNames.length === 2) return authorNames.join(' and ')
    return authorNames.slice(0, -1).join(', ') + ' and ' + authorNames[authorNames.length - 1]
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })
  }

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Research/Research_Banner.webp?updatedAt=1759861559853"
          alt="Research, Reports and Publications - East Wear Bay"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <BookOpen className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Research, Reports and Publications
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Scholarly articles and research papers from the East Wear Bay Archaeological Project, advancing our understanding of Roman Britain.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">

        {/* Grey Literature Reports */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Grey Literature Reports</h2>
          <p className="text-muted-foreground mb-8">All grey literature reports are available in PDF format.</p>
          
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
                          {formatAuthors(publication)}
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
                      {(publication.pdfFile?.asset?.url || publication.pdfUrl) ? (
                        <a
                          href={publication.pdfFile?.asset?.url || publication.pdfUrl}
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

        {/* Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Publications</h2>

          {/* Books */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-6">Books</h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Folkestone to 1500: A Town Unearthed</CardTitle>
                <CardDescription>Edited by Ian Coulson (2013)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">ISBN: 9781870545273</p>
                <p className="text-sm text-muted-foreground mb-2">Price: £14.99</p>
                <p className="text-sm text-muted-foreground mb-4">Available directly from Canterbury Archaeological Trust. Please contact us to request a printed copy.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  Contact us to order
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Academic Papers and Reports */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Academic Papers and Reports</h3>
            <div className="space-y-4">
              {/* Paper 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Investigating economic models and cultural exchange through a zooarchaeological perspective: analysis of the faunal assemblage from the Iron Age port settlement and Roman villa at East Wear Bay, Kent, England</CardTitle>
                  <CardDescription>Katharine Steinke (2024)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Edinburgh Research Archive: Archaeology thesis and dissertation collection</p>
                  <a
                    href="http://dx.doi.org/10.7488/era/4434"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                    target="-blank"
                    rel="noopener noreferrer"
                  >
                    http://dx.doi.org/10.7488/era/4434
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              {/* Paper 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Roman Folkestone: A Record of Excavation of Roman Villas at East Wear Bay</CardTitle>
                  <CardDescription>S. E. Winbolt (1925)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Methuen & Co., Ltd., London</p>
                  <a
                    href="https://www.amazon.co.uk/Folkestone-Excavation-Speculations-Historical-Sketches/dp/B0018Y0MNC"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                    target="-blank"
                    rel="noopener noreferrer"
                  >
                    Buy now on Amazon
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>

              {/* Paper 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Republican Dressel 1 Amphorae from East Wear Bay, Folkestone</CardTitle>
                  <CardDescription>Adrian Weston</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    View PDF
                  </a>
                </CardContent>
              </Card>

              {/* Paper 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">More Classis Britannica Tiles from East Wear Bay, Folkestone</CardTitle>
                  <CardDescription>Adrian Weston (2017)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Archaeologia Cantiana, 2017: 301-08</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    View PDF
                  </a>
                </CardContent>
              </Card>

              {/* Paper 5 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quern Production at Folkestone, South-East Kent: An Interim Note</CardTitle>
                  <CardDescription>P. T. Keller (1989)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Britannia, Volume 20, November 1989, pp. 193-200</p>
                  <a
                    href="https://doi.org/10.2307/526162"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                    target="-blank"
                    rel="noopener noreferrer"
                  >
                    DOI: https://doi.org/10.2307/526162
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Research Data */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Research Data</h2>
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