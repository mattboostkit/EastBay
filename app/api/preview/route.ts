import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const type = searchParams.get('type') || 'artefact';
  
  // Check the secret
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }
  
  // Determine the redirect URL based on content type
  let redirectUrl = '/';
  
  switch (type) {
    case 'artefact':
      redirectUrl = `/digital-museum/${slug}`;
      break;
    case 'post':
      redirectUrl = `/news/${slug}`;
      break;
    case 'event':
      redirectUrl = `/events/${slug}`;
      break;
    case 'page':
      redirectUrl = `/${slug}`;
      break;
  }
  
  // Create a response that redirects
  const response = new Response(null, {
    status: 307, // Temporary redirect
    headers: {
      'Location': redirectUrl,
      'Content-Type': 'text/plain',
    },
  });
  
  // Set the preview cookie
  response.headers.append(
    'Set-Cookie',
    `__next_preview_data=true; Path=/; HttpOnly; SameSite=Strict; ${
      process.env.NODE_ENV === 'production' ? 'Secure;' : ''
    }`
  );
  
  return response;
}