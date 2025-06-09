<<<<<<< HEAD
import { NextResponse } from 'next/server';
import { search } from '@/lib/sanity';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    if (!query) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }
    
    // Search across multiple content types
    const results = await search(query);
    
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error during search:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
=======
import { NextResponse } from 'next/server';
import { search } from '@/lib/sanity';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    if (!query) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }
    
    // Search across multiple content types
    const results = await search(query);
    
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error during search:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
}