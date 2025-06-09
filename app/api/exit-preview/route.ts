import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // Determine the redirect URL
  const { searchParams } = new URL(request.url);
  const redirectUrl = searchParams.get('redirect') || '/';
  
  // Create a response that redirects
  const response = new Response(null, {
    status: 307, // Temporary redirect
    headers: {
      'Location': redirectUrl,
      'Content-Type': 'text/plain',
    },
  });
  
  // Clear the preview cookie
  response.headers.append(
    'Set-Cookie',
    `__next_preview_data=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; ${
      process.env.NODE_ENV === 'production' ? 'Secure;' : ''
    }`
  );
  
  return response;
}
