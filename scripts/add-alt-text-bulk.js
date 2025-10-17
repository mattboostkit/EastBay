require('dotenv').config({ path: '.env.local' })
const {createClient} = require('@sanity/client')

console.log('Token exists:', !!process.env.SANITY_API_TOKEN)

const client = createClient({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  apiVersion: '2023-12-18',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const DRAFT_ID = 'drafts.afe63a95-4115-4696-b49f-58804c73867e'

async function addAltText() {
  console.log('\n🔍 Fetching document...\n')

  const doc = await client.fetch(
    `*[_id == $id][0]{ _id, _rev, title, gallery }`,
    { id: DRAFT_ID }
  )

  if (!doc) {
    console.error('❌ Document not found!')
    process.exit(1)
  }

  console.log(`✓ Found: ${doc.title}`)
  console.log(`✓ Gallery images: ${doc.gallery?.length || 0}\n`)

  if (!doc.gallery || doc.gallery.length === 0) {
    console.error('❌ No gallery images found!')
    process.exit(1)
  }

  console.log('📝 Adding alt text to images...\n')

  const updatedGallery = doc.gallery.map((image, index) => {
    const number = String(index + 1).padStart(3, '0')
    const altText = `Digital Time Capsule ${number}`

    if ((index + 1) % 50 === 0) {
      console.log(`   Processed ${index + 1}/${doc.gallery.length} images...`)
    }

    return {
      ...image,
      alt: altText,
    }
  })

  console.log(`\n💾 Saving changes to Sanity...\n`)

  await client
    .patch(DRAFT_ID)
    .set({ gallery: updatedGallery })
    .commit()

  console.log('='.repeat(60))
  console.log(`✅ Successfully added alt text to all ${doc.gallery.length} images!`)
  console.log('='.repeat(60))
  console.log('\n📌 Next step: Publish the document in Sanity Studio\n')
}

addAltText().catch(err => {
  console.error('\n❌ Error:', err.message)
  process.exit(1)
})
