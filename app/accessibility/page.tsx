import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement | East Wear Bay Project',
  description: 'Accessibility statement for the East Wear Bay Archaeological Project website.',
}

export default function AccessibilityPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Accessibility Statement</h1>
        
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Our Commitment</h2>
            <p>
              The East Wear Bay Archaeological Project is committed to ensuring digital accessibility 
              for people with disabilities. We are continually improving the user experience for everyone 
              and applying the relevant accessibility standards.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Conformance Status</h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
              These guidelines explain how to make web content more accessible for people with disabilities 
              and more user-friendly for everyone.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Accessibility Features</h2>
            <p>We have implemented the following accessibility features:</p>
            
            <h3 className="mt-4 text-xl font-semibold">Navigation and Structure</h3>
            <ul>
              <li>Consistent navigation throughout the website</li>
              <li>Clear page structure with proper heading hierarchy</li>
              <li>Skip to main content link on all pages</li>
              <li>Descriptive page titles and headings</li>
              <li>Breadcrumb navigation where appropriate</li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">Visual Design</h3>
            <ul>
              <li>Sufficient color contrast for text and interactive elements</li>
              <li>Text can be resized up to 200% without loss of functionality</li>
              <li>Focus indicators are visible for keyboard navigation</li>
              <li>Dark mode option for reduced eye strain</li>
              <li>No content that flashes more than three times per second</li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">Images and Media</h3>
            <ul>
              <li>Alternative text for all informative images</li>
              <li>Captions for video content where applicable</li>
              <li>Transcripts available for audio content</li>
              <li>3D models include text descriptions</li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">Interactive Elements</h3>
            <ul>
              <li>All functionality available via keyboard</li>
              <li>Form labels and instructions clearly associated with controls</li>
              <li>Error messages clearly identify issues and suggest corrections</li>
              <li>Sufficient time to complete tasks</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Assistive Technology Compatibility</h2>
            <p>Our website is designed to be compatible with:</p>
            <ul>
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Voice recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Known Limitations</h2>
            <p>
              While we strive for accessibility, some areas may have limitations:
            </p>
            <ul>
              <li>
                Some older PDF documents may not be fully accessible. We are working to update these 
                documents or provide accessible alternatives.
              </li>
              <li>
                Third-party embedded content (such as social media feeds) may not fully conform to 
                our accessibility standards.
              </li>
              <li>
                Some complex data visualizations may require additional description for screen reader users.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Physical Site Accessibility</h2>
            <p>
              For information about accessibility at our physical archaeological sites and events:
            </p>
            <ul>
              <li>Field school locations are assessed for accessibility</li>
              <li>Alternative activities available for participants with mobility limitations</li>
              <li>Accessible parking and pathways where possible</li>
              <li>Please contact us to discuss specific accessibility needs for site visits</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Feedback and Contact</h2>
            <p>
              We welcome your feedback on the accessibility of our website. Please let us know if you 
              encounter accessibility barriers:
            </p>
            <div className="mt-4 rounded-lg border bg-muted p-4">
              <p className="font-semibold">Canterbury Archaeological Trust Ltd</p>
              <p>Email: get-involved@canterburytrust.ac.uk</p>
              <p>Address: 92a Broad Street, Canterbury, Kent, CT1 2LU</p>
            </div>
            <p className="mt-4">
              We aim to respond to accessibility feedback within 5 working days.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Enforcement</h2>
            <p>
              If you are not satisfied with our response to your accessibility concerns, you may contact:
            </p>
            <div className="mt-4 rounded-lg border bg-muted p-4">
              <p className="font-semibold">Equality and Human Rights Commission (EHRC)</p>
              <p>Website: <Link href="https://www.equalityhumanrights.com/" className="text-primary hover:underline">www.equalityhumanrights.com</Link></p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Technical Specifications</h2>
            <p>
              Accessibility of our website relies on the following technologies:
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WAI-ARIA</li>
            </ul>
            <p className="mt-4">
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Assessment and Testing</h2>
            <p>
              We regularly test our website using:
            </p>
            <ul>
              <li>Automated accessibility testing tools</li>
              <li>Manual keyboard navigation testing</li>
              <li>Screen reader testing</li>
              <li>Color contrast analyzers</li>
              <li>User testing with people with disabilities</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Continuous Improvement</h2>
            <p>
              We are committed to continuous improvement of our website's accessibility. We regularly 
              review and update our content and features to ensure they remain accessible to all users. 
              Staff receive training on digital accessibility and inclusive design principles.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}