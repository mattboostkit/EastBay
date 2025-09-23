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
    
    // Send to FormSpark
    const FORMSPARK_ACTION_URL = process.env.FORMSPARK_NEWSLETTER_FORM_ID
      ? `https://submit-form.com/${process.env.FORMSPARK_NEWSLETTER_FORM_ID}`
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
            email,
            signup_date: new Date().toISOString(),
            signup_source: 'website',
            _email: {
              subject: 'New Newsletter Signup',
              from: email,
            },
          }),
        });

        if (!response.ok) {
          throw new Error('FormSpark submission failed');
        }
      } catch (error) {
        // Log error in development only
        if (process.env.NODE_ENV === 'development') {
          console.error('FormSpark error:', error);
        }
      }
    } else if (process.env.NODE_ENV === 'development') {
      // Only log in development when no FormSpark ID is configured
      console.log('Newsletter signup (dev):', email, new Date().toISOString());
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing! Please check your email to confirm your subscription.' 
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing newsletter signup:', error);
    }
    return NextResponse.json(
      { error: 'An error occurred while processing your subscription. Please try again.' },
      { status: 500 }
    );
  }
}