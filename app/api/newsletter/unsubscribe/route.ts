import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, token } = data;
    
    // Validate inputs
    if (!email || !token) {
      return NextResponse.json(
        { error: 'Email and unsubscribe token are required' },
        { status: 400 }
      );
    }
    
    // Verify unsubscribe token (you would validate this against your database)
    // const isValidToken = await db.newsletter.verifyUnsubscribeToken(email, token);
    
    // Integration with SendGrid
    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_LIST_ID) {
      try {
        const response = await fetch(
          `https://api.sendgrid.com/v3/marketing/contacts/search`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `email = '${email}'`,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.result && data.result.length > 0) {
            const contactId = data.result[0].id;
            
            // Remove from list
            await fetch(
              `https://api.sendgrid.com/v3/marketing/lists/${process.env.SENDGRID_LIST_ID}/contacts`,
              {
                method: 'DELETE',
                headers: {
                  'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  contact_ids: [contactId],
                }),
              }
            );
          }
        }
      } catch (error) {
        console.error('SendGrid unsubscribe error:', error);
      }
    }
    
    // Integration with Mailchimp
    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID) {
      try {
        const server = process.env.MAILCHIMP_API_KEY.split('-')[1];
        const subscriberHash = require('crypto')
          .createHash('md5')
          .update(email.toLowerCase())
          .digest('hex');
          
        await fetch(
          `https://${server}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${subscriberHash}`,
          {
            method: 'PATCH',
            headers: {
              Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              status: 'unsubscribed',
            }),
          }
        );
      } catch (error) {
        console.error('Mailchimp unsubscribe error:', error);
      }
    }
    
    // Update database
    // await db.newsletter.updateUnsubscribeStatus(email, true);
    
    console.log('Newsletter unsubscribe:', email, new Date().toISOString());
    
    return NextResponse.json({ 
      success: true, 
      message: 'You have been successfully unsubscribed from our newsletter.' 
    });
  } catch (error) {
    console.error('Error processing unsubscribe:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  // Handle unsubscribe links from emails
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  
  if (!email || !token) {
    return new Response('Invalid unsubscribe link', { status: 400 });
  }
  
  // Return an HTML page for unsubscribe confirmation
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Unsubscribe - East Wear Bay Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
          }
          .container {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-width: 400px;
            text-align: center;
          }
          h1 {
            color: #333;
            margin-bottom: 1rem;
          }
          p {
            color: #666;
            margin-bottom: 1.5rem;
          }
          button {
            background-color: #dc3545;
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
          }
          button:hover {
            background-color: #c82333;
          }
          .success {
            color: #28a745;
            display: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Unsubscribe from Newsletter</h1>
          <p>Are you sure you want to unsubscribe from the East Wear Bay Project newsletter?</p>
          <button onclick="unsubscribe()">Yes, Unsubscribe Me</button>
          <p class="success" id="success">You have been successfully unsubscribed.</p>
        </div>
        <script>
          async function unsubscribe() {
            try {
              const response = await fetch('/api/newsletter/unsubscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: '${email}',
                  token: '${token}'
                })
              });
              const data = await response.json();
              if (data.success) {
                document.querySelector('button').style.display = 'none';
                document.querySelector('#success').style.display = 'block';
              }
            } catch (error) {
              alert('An error occurred. Please try again.');
            }
          }
        </script>
      </body>
    </html>
  `;
  
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}