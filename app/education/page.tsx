import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileText, Users, Clock, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Education Resources | East Wear Bay Archaeological Project',
  description: 'Educational materials, learning resources, and school visit information for teachers and students exploring the Folkestone Roman Villa archaeology site.',
}

export default function EducationPage() {
  return (
    <>
      <div className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Education Resources</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Engaging learning materials for teachers and students to explore Roman Britain and archaeology through the East Wear Bay site.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        {/* School Visits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">School Visits</h2>
              <p className="mt-3 text-muted-foreground">
                We offer a range of engaging educational visits for schools, providing students with hands-on experiences of archaeology and Roman history linked to the National Curriculum.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="rounded-lg border p-5">
                  <h3 className="text-lg font-semibold">Site Tours</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Users className="mr-1 h-3 w-3" />
                      KS2-KS3
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Clock className="mr-1 h-3 w-3" />
                      2 hours
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Visit the active excavation site at East Wear Bay and learn about the archaeological process, how artifacts are discovered, and what they tell us about Roman Britain. Available May-September.
                  </p>
                </div>
                
                <div className="rounded-lg border p-5">
                  <h3 className="text-lg font-semibold">Roman Villa Experience</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Users className="mr-1 h-3 w-3" />
                      KS2
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Clock className="mr-1 h-3 w-3" />
                      Half day
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Combined site visit and museum workshop exploring daily life in Roman Britain. Includes handling real artifacts, trying on Roman clothing, and investigating the villa's layout and functions.
                  </p>
                </div>
                
                <div className="rounded-lg border p-5">
                  <h3 className="text-lg font-semibold">Digital Archaeology Workshop</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Users className="mr-1 h-3 w-3" />
                      KS3-KS4
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Clock className="mr-1 h-3 w-3" />
                      Full day
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Learn how modern technology is used in archaeology. Students use tablets to document finds, explore 3D models of artifacts, and participate in a simulated digital excavation record.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link 
                  href="/education/school-visits"
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Book a school visit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?fit=crop&w=800&h=800" 
                alt="School children participating in an archaeological workshop at East Wear Bay"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Teaching Resources */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Teaching Resources</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Resource 1 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?fit=crop&w=800&h=400"
                  alt="Preview of the Roman Villa teaching resource showing lesson plans and activity sheets"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">Roman Villa Life</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <Users className="mr-1 h-3 w-3" />
                    KS2
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <FileText className="mr-1 h-3 w-3" />
                    Lesson Plan
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  A complete lesson plan exploring daily life in a Romano-British villa. Includes teacher notes, presentation slides, activity worksheets, and discussion prompts.
                </p>
                <div className="mt-4">
                  <Link
                    href="/downloads/roman-villa-life-ks2.pdf"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download resource
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Resource 2 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1533854775446-95c4609da544?fit=crop&w=800&h=400"
                  alt="Preview of the Archaeological Evidence educational resource showing excavation documentation templates"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">Archaeological Evidence</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <Users className="mr-1 h-3 w-3" />
                    KS3
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <FileText className="mr-1 h-3 w-3" />
                    Workshop
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Students learn how archaeologists use different types of evidence to understand the past. Includes artifact identification exercises and interpretation activities.
                </p>
                <div className="mt-4">
                  <Link
                    href="/downloads/archaeological-evidence-ks3.pdf"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download resource
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Resource 3 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?fit=crop&w=800&h=400"
                  alt="Preview of the Roman Britain trade routes map and trade good illustrations"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">Romans & Trade</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <Users className="mr-1 h-3 w-3" />
                    KS2-KS3
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <FileText className="mr-1 h-3 w-3" />
                    Project
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Explore Roman trade networks and East Wear Bay's role in cross-channel commerce. Includes maps, artifact cards, and a trade simulation game.
                </p>
                <div className="mt-4">
                  <Link
                    href="/downloads/romans-trade-ks2-ks3.pdf"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download resource
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Resource 4 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1511296265581-c2450046447d?fit=crop&w=800&h=400"
                  alt="Preview of digital resource showing 3D model interaction instructions"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">Digital Artifact Lab</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <Users className="mr-1 h-3 w-3" />
                    KS3-KS4
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <FileText className="mr-1 h-3 w-3" />
                    Digital
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Interactive digital resource using 3D models from our collection. Students analyze objects in detail and complete analytical tasks.
                </p>
                <div className="mt-4">
                  <Link
                    href="/education/digital-artifact-lab"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Access online resource
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Resource 5 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?fit=crop&w=800&h=400"
                  alt="Preview of climate change and archaeology resource with coastal erosion diagrams"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">Climate Change & Heritage</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <Users className="mr-1 h-3 w-3" />
                    KS4-KS5
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <FileText className="mr-1 h-3 w-3" />
                    Cross-Curricular
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Explores how climate change threatens archaeological sites, using East Wear Bay as a case study. Links archaeology, geography, and environmental science.
                </p>
                <div className="mt-4">
                  <Link
                    href="/downloads/climate-heritage-ks4-ks5.pdf"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download resource
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Resource 6 */}
            <div className="rounded-lg border bg-card shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1551029506-0807df4e2031?fit=crop&w=800&h=400"
                  alt="Preview of careers in archaeology resource with job role profiles"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">Careers in Archaeology</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <Users className="mr-1 h-3 w-3" />
                    KS4-KS5
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <FileText className="mr-1 h-3 w-3" />
                    Careers
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Information about diverse career paths in archaeology and heritage. Includes professional profiles, required qualifications, and skills development guidance.
                </p>
                <div className="mt-4">
                  <Link
                    href="/downloads/archaeology-careers-ks4-ks5.pdf"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download resource
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="/education/resources"
              className="inline-flex items-center text-primary"
            >
              View all educational resources
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>
        
        {/* For Educators */}
        <section className="mb-16">
          <div className="rounded-lg bg-muted p-8">
            <h2 className="text-2xl font-bold">For Educators</h2>
            <p className="mt-3 text-muted-foreground">
              We offer continuing professional development (CPD) opportunities for teachers interested in incorporating archaeology and local heritage into their teaching.
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-semibold">Teacher Training Workshops</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Practical sessions on teaching archaeology in the classroom, using archaeological evidence to support curriculum learning, and incorporating digital heritage resources.
                </p>
                <div className="mt-4">
                  <Link
                    href="/education/teacher-training"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    View upcoming sessions
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="rounded-lg border bg-card p-5">
                <h3 className="text-lg font-semibold">Educational Consultations</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our education specialists can provide customized advice on developing archaeology and heritage projects tailored to your curriculum needs and student interests.
                </p>
                <div className="mt-4">
                  <Link
                    href="/education/consultations"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Request a consultation
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Teacher Testimonials</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <blockquote className="rounded-lg border bg-card p-6">
              <p className="italic text-muted-foreground">
                "The East Wear Bay resources have transformed how my pupils engage with history. The combination of digital models, hands-on activities, and real archaeological context makes Roman Britain tangible and exciting for them."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="font-medium">Ms. Thompson</div>
                <span className="text-sm text-muted-foreground">— Year 4 Teacher, Folkestone Primary</span>
              </div>
            </blockquote>
            
            <blockquote className="rounded-lg border bg-card p-6">
              <p className="italic text-muted-foreground">
                "Our site visit was exceptionally well-organized and educational. Students were actively engaged in archaeological processes and thinking skills. The connections made to multiple curriculum areas - history, geography, science - were invaluable."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="font-medium">Mr. Patel</div>
                <span className="text-sm text-muted-foreground">— History Lead, Canterbury Academy</span>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  )
}