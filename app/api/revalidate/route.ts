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

    // Get the type from the request body
    const body = await request.json()
    const { _type } = body

    // Revalidate based on the type of content that was updated
    switch (_type) {
      case 'partner':
        revalidatePath('/partners')
        revalidatePath('/') // Homepage might show partners
        break
      case 'artefact':
        revalidatePath('/digital-museum')
        revalidatePath('/digital-museum/[slug]', 'page')
        revalidatePath('/') // Homepage shows featured artefacts
        break
      case 'newsPost':
        revalidatePath('/news')
        revalidatePath('/news/[slug]', 'page')
        break
      case 'teamMember':
        revalidatePath('/team')
        break
      default:
        // Revalidate all pages as a fallback
        revalidatePath('/', 'layout')
    }

    return NextResponse.json({
      revalidated: true,
      type: _type,
      message: `Successfully revalidated ${_type || 'all'} pages`
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