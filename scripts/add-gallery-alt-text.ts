import { createClient } from '@sanity/client'

/**
 * Adds alt text to all images in the Digital Time Capsule gallery
 * Usage: npx tsx scripts/add-gallery-alt-text.ts
 */

const DOCUMENT_ID = 'drafts.afe63a95-4115-4696-b49f-58804c73867e'

const client = createClient({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  apiVersion: '2023-12-18',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

async function addAltTextToGallery() {
  try {
    console.log('\nFetching Digital Time Capsule document...\n')

    // Fetch the document with gallery - try both draft and published
    let doc = await client.fetch(
      `*[_id == $id][0]{ _id, _rev, gallery }`,
      { id: DOCUMENT_ID }
    )

    if (!doc) {
      console.log('Draft not found, trying without drafts prefix...')
      const publishedId = DOCUMENT_ID.replace('drafts.', '')
      doc = await client.fetch(
        `*[_id == $id][0]{ _id, _rev, gallery }`,
        { id: publishedId }
      )
    }

    if (!doc) {
      console.error('Document not found!')
      console.error('Tried IDs:', DOCUMENT_ID, DOCUMENT_ID.replace('drafts.', ''))
      process.exit(1)
    }

    console.log(`Found document: ${doc._id}`)
    console.log(`Gallery count: ${doc.gallery?.length || 0}`)

    // If this version has no gallery, maybe there's a draft with images
    if (!doc.gallery || doc.gallery.length === 0) {
      console.log('\nThis version has no gallery. Checking if draft version exists...')

      // Try the draft version specifically
      const draftDoc = await client.fetch(
        `*[_id == $id][0]{ _id, _rev, gallery }`,
        { id: `drafts.${doc._id}` }
      )

      if (draftDoc && draftDoc.gallery && draftDoc.gallery.length > 0) {
        console.log(`Found draft with ${draftDoc.gallery.length} images!`)
        doc = draftDoc
      } else {
        console.error('No gallery images found in either version!')
        process.exit(1)
      }
    }

    console.log(`Found ${doc.gallery.length} images in gallery\n`)

    // Add alt text to each image
    const updatedGallery = doc.gallery.map((image: any, index: number) => {
      const number = String(index + 1).padStart(3, '0')
      const altText = `Digital Time Capsule ${number}`

      return {
        ...image,
        alt: altText,
      }
    })

    console.log('Updating document with alt text...\n')

    // Update the document using the actual ID we found
    await client
      .patch(doc._id)
      .set({ gallery: updatedGallery })
      .commit()

    console.log(`${'='.repeat(50)}`)
    console.log(`✓ Successfully added alt text to all ${doc.gallery.length} images!`)
    console.log(`${'='.repeat(50)}\n`)

  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

addAltTextToGallery()
