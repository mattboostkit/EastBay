import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | East Wear Bay Project',
  description: 'Privacy policy for the East Wear Bay Archaeological Project website.',
}

export default function PrivacyPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              The East Wear Bay Archaeological Project ("we", "our", or "us") is committed to protecting 
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or participate in our programs.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            
            <h3 className="mt-4 text-xl font-semibold">Personal Information</h3>
            <p>We may collect personal information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number, postal address)</li>
              <li>Information provided when you sign up for our newsletter or programs</li>
              <li>Volunteer application information</li>
              <li>Educational background (for field school applications)</li>
              <li>Emergency contact information (for fieldwork participants)</li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information about your device:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit and time spent on those pages</li>
              <li>Referring website addresses</li>
              <li>Device and operating system information</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process applications for programs and volunteer opportunities</li>
              <li>Send newsletters and project updates (with your consent)</li>
              <li>Respond to your inquiries and provide support</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Ensure safety during fieldwork activities</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website. 
              We use Google Analytics to understand how visitors use our site. You can control 
              cookies through your browser settings.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information. We may share your information:</p>
            <ul>
              <li>With partner organizations involved in our archaeological work (with your consent)</li>
              <li>With service providers who assist in operating our website and programs</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with educational or research publications (anonymized)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. School programs are coordinated 
              through educational institutions.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 rounded-lg border bg-muted p-4">
              <p className="font-semibold">East Wear Bay Archaeological Project</p>
              <p>Email: privacy@eastwearbay.org</p>
              <p>Phone: +44 (0) 1234 567890</p>
              <p>Address: Archaeological Research Centre, Kent, UK</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}