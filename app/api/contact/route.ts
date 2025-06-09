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
    
    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Process the contact form submission
    
    // For this demo, we'll just log and return success
    console.log('Contact form submission:', { name, email, subject, message });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}