import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;
    
    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide name, email and message' },
        { status: 400 }
      );
    }
    
    // Send to FormSpark
    const FORMSPARK_ACTION_URL = process.env.FORMSPARK_CONTACT_FORM_ID
      ? `https://submit-form.com/${process.env.FORMSPARK_CONTACT_FORM_ID}`
      : null;

    if (FORMSPARK_ACTION_URL) {
      try {
        const response = await fetch(FORMSPARK_ACTION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _email: {
              subject: `New Contact Form Submission: ${subject}`,
              from: email,
            },
          }),
        });

        if (!response.ok) {
          throw new Error('FormSpark submission failed');
        }
      } catch (error) {
        // Log error but don't fail the request
        if (process.env.NODE_ENV === 'development') {
          console.error('FormSpark error:', error);
        }
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon.' 
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing contact form:', error);
    }
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}