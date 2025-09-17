import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | East Wear Bay Project',
  description: 'Terms of service for using the East Wear Bay Archaeological Project website and services.',
}

export default function TermsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
            <p>
              By accessing or using the East Wear Bay Archaeological Project website and services, 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">2. Use of Website</h2>
            
            <h3 className="mt-4 text-xl font-semibold">Acceptable Use</h3>
            <p>You may use our website for lawful purposes only. You agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit harmful or malicious content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Harvest or collect data about other users without consent</li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">Account Responsibilities</h3>
            <p>
              If you create an account for programs or volunteer opportunities, you are responsible 
              for maintaining the confidentiality of your account information and for all activities 
              that occur under your account.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
            
            <h3 className="mt-4 text-xl font-semibold">Website Content</h3>
            <p>
              All content on this website, including text, images, graphics, logos, and software, 
              is the property of the East Wear Bay Archaeological Project or its content suppliers 
              and is protected by copyright and other intellectual property laws.
            </p>

            <h3 className="mt-4 text-xl font-semibold">Educational Use</h3>
            <p>
              Content may be used for personal, educational, and non-commercial research purposes, 
              provided proper attribution is given. For commercial use or publication, please contact 
              us for permission.
            </p>

            <h3 className="mt-4 text-xl font-semibold">User Contributions</h3>
            <p>
              By submitting content to our website (such as comments or volunteer applications), 
              you grant us a non-exclusive, royalty-free license to use, reproduce, and distribute 
              that content in connection with our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">4. Program Participation</h2>
            
            <h3 className="mt-4 text-xl font-semibold">Field School and Volunteer Programs</h3>
            <p>
              Participation in our field school and volunteer programs is subject to additional 
              terms and conditions, including:
            </p>
            <ul>
              <li>Completion of required application forms</li>
              <li>Acceptance of safety protocols and procedures</li>
              <li>Compliance with archaeological best practices</li>
              <li>Respect for the archaeological site and materials</li>
              <li>Agreement to media release for educational purposes</li>
            </ul>

            <h3 className="mt-4 text-xl font-semibold">Risk Acknowledgment</h3>
            <p>
              Archaeological fieldwork involves inherent risks. Participants acknowledge these risks 
              and agree to follow all safety instructions provided by project staff.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">5. Privacy</h2>
            <p>
              Your use of our website is also governed by our Privacy Policy. Please review our 
              Privacy Policy to understand our practices regarding personal information.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">6. Disclaimers and Limitations</h2>
            
            <h3 className="mt-4 text-xl font-semibold">Content Accuracy</h3>
            <p>
              While we strive for accuracy, archaeological interpretations may change as new 
              evidence emerges. We do not guarantee the completeness or accuracy of all information 
              on the website.
            </p>

            <h3 className="mt-4 text-xl font-semibold">Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not responsible for 
              the content or practices of these external sites.
            </p>

            <h3 className="mt-4 text-xl font-semibold">Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, the East Wear Bay Archaeological Project 
              shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages arising from your use of the website or participation in programs.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless the East Wear Bay Archaeological Project, 
              its affiliates, and their respective directors, officers, employees, and agents from 
              any claims, damages, or expenses arising from your violation of these terms or your 
              use of the website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">8. Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting on the website. Your continued use of the website 
              after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">9. Termination</h2>
            <p>
              We may terminate or suspend your access to our website and services at any time, 
              without prior notice, for any reason, including breach of these terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">10. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of England and Wales. Any disputes 
              arising from these terms shall be subject to the exclusive jurisdiction of the courts 
              of England and Wales.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">11. Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 rounded-lg border bg-muted p-4">
              <p className="font-semibold">Canterbury Archaeological Trust Ltd</p>
              <p>Email: get_involved@canterburytrust.ac.uk</p>
              <p>Address: 92a Broad Street, Canterbury, Kent, CT1 2LU</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}