import { NextResponse } from 'next/server';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email } = data;
    
    // Validate email format
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    // Integration with email service (example with SendGrid)
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_LIST_ID) {
      try {
        // SendGrid integration
        const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            list_ids: [process.env.SENDGRID_LIST_ID],
            contacts: [{
              email,
              custom_fields: {
                signup_source: 'website',
                signup_date: new Date().toISOString(),
              },
            }],
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add contact to SendGrid');
        }
      } catch (error) {
        console.error('SendGrid error:', error);
        // Continue with local storage as fallback
      }
    }
    
    // Integration with Mailchimp (alternative)
    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID) {
      try {
        const server = process.env.MAILCHIMP_API_KEY.split('-')[1];
        const response = await fetch(
          `https://${server}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
          {
            method: 'POST',
            headers: {
              Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email_address: email,
              status: 'subscribed',
              tags: ['website-signup'],
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          // Check if already subscribed
          if (errorData.title !== 'Member Exists') {
            throw new Error('Failed to add contact to Mailchimp');
          }
        }
      } catch (error) {
        console.error('Mailchimp error:', error);
        // Continue with local storage as fallback
      }
    }
    
    // Store in database as backup (you would implement this with your DB)
    // await db.newsletter.create({ email, subscribedAt: new Date() });
    
    // Log for monitoring
    console.log('Newsletter signup:', email, new Date().toISOString());
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing! Please check your email to confirm your subscription.' 
    });
  } catch (error) {
    console.error('Error processing newsletter signup:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your subscription. Please try again.' },
      { status: 500 }
    );
  }
}