<<<<<<< HEAD
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email } = data;
    
    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Here you would typically:
    // 1. Store the email in your newsletter database
    // 2. Add to a mailing service like Mailchimp, SendGrid, etc.
    
    // For this demo, we'll just log and return success
    console.log('Newsletter signup:', email);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    });
  } catch (error) {
    console.error('Error processing newsletter signup:', error);
    return NextResponse.json(
      { error: 'Failed to process your subscription' },
      { status: 500 }
    );
  }
=======
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email } = data;
    
    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }
    
    // Here you would typically:
    // 1. Store the email in your newsletter database
    // 2. Add to a mailing service like Mailchimp, SendGrid, etc.
    
    // For this demo, we'll just log and return success
    console.log('Newsletter signup:', email);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    });
  } catch (error) {
    console.error('Error processing newsletter signup:', error);
    return NextResponse.json(
      { error: 'Failed to process your subscription' },
      { status: 500 }
    );
  }
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
}