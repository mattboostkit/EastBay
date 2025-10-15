import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    // Get the secret from the request
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Get the type and slug from the request body
    const body = await request.json()
    const { _type, slug } = body

    console.log(`[Revalidate] Received webhook for ${_type}${slug ? ` (${slug})` : ''}`)

    // Revalidate based on the type of content that was updated
    switch (_type) {
      case 'partner':
      case 'sponsor':
        revalidatePath('/partners')
        revalidatePath('/') // Homepage might show partners
        console.log('[Revalidate] Cleared: /partners, /')
        break
      case 'artefact':
        revalidatePath('/digital-museum')
        revalidatePath('/') // Homepage shows featured artefacts
        revalidatePath('/search') // Search page
        // If we have a slug, revalidate the specific page
        if (slug) {
          revalidatePath(`/digital-museum/${slug}`)
          console.log(`[Revalidate] Cleared: /digital-museum/${slug}`)
        }
        console.log('[Revalidate] Cleared: /digital-museum, /, /search')
        break
      case 'newsPost':
        revalidatePath('/news')
        if (slug) {
          revalidatePath(`/news/${slug}`)
          console.log(`[Revalidate] Cleared: /news/${slug}`)
        }
        console.log('[Revalidate] Cleared: /news')
        break
      case 'teamMember':
        revalidatePath('/team')
        revalidatePath('/about')
        console.log('[Revalidate] Cleared: /team, /about')
        break
      case 'event':
        revalidatePath('/events')
        revalidatePath('/')
        console.log('[Revalidate] Cleared: /events, /')
        break
      case 'publication':
        revalidatePath('/research/publications')
        revalidatePath('/research')
        console.log('[Revalidate] Cleared: /research/publications, /research')
        break
      case 'siteSettings':
        // Site settings affect all pages
        revalidatePath('/', 'layout')
        console.log('[Revalidate] Cleared: All pages (layout change)')
        break
      default:
        // Revalidate all pages as a fallback
        revalidatePath('/', 'layout')
        console.log('[Revalidate] Cleared: All pages (unknown type)')
    }

    return NextResponse.json({
      revalidated: true,
      type: _type,
      slug: slug || null,
      message: `Successfully revalidated ${_type}${slug ? ` (${slug})` : ''} pages`,
      timestamp: new Date().toISOString()
    })
  } catch (err) {
    console.error('Error revalidating:', err)
    return NextResponse.json(
      { message: 'Error revalidating', error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Also handle GET requests for manual testing
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const path = searchParams.get('path') || '/'

    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    revalidatePath(path, 'layout')

    return NextResponse.json({
      revalidated: true,
      path,
      message: `Successfully revalidated ${path}`
    })
  } catch (err) {
    console.error('Error revalidating:', err)
    return NextResponse.json(
      { message: 'Error revalidating', error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}