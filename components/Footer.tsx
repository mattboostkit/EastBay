import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">East Wear Bay Project</h3>
            <p className="mt-4 text-muted-foreground">
              Preserving the Folkestone Roman Villa through community archaeology, digital technology, and education.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://twitter.com/eastwearbaypt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://facebook.com/eastwearbaypt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com/eastwearbaypt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://youtube.com/eastwearbaypt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Explore</h4>
            <ul className="grid gap-2" aria-label="Explore section links">
              <li>
                <Link href="/digital-museum" className="text-muted-foreground hover:text-foreground">
                  Digital Museum
                </Link>
              </li>
              <li>
                <Link href="/field-school" className="text-muted-foreground hover:text-foreground">
                  Field School
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Learn</h4>
            <ul className="grid gap-2" aria-label="Learn section links">
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-foreground">
                  Education Resources
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-foreground">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  Outreach & Community
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <address className="not-italic">
              <div className="mb-3 flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <div>
                  <p className="text-muted-foreground">East Wear Bay</p>
                  <p className="text-muted-foreground">Folkestone, Kent</p>
                </div>
              </div>
              <div className="mb-3 flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <a href="mailto:contact@eastwearbaypt.org" className="text-muted-foreground hover:text-foreground">
                  contact@eastwearbaypt.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <a href="tel:+441303123456" className="text-muted-foreground hover:text-foreground">
                  +44 (1303) 123-456
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} East Wear Bay Project. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Supported by:</span>
              <a href="https://www.heritagefund.org.uk/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-foreground" aria-label="National Lottery Heritage Fund">
                National Lottery Heritage Fund
              </a>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}