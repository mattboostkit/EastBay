#!/usr/bin/env node

/**
 * Seed Partners/Funders data for East Wear Bay Project
 * Based on supporters shown on Canterbury Trust website
 */

import { createClient } from '@sanity/client'

// Initialize Sanity client with the provided credentials
const client = createClient({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skdyPfJzDQXoCWLsTDKz44GQ3nsgpFyeIoco5YJg1lu5xmdPdLAfhySVkM2HS9omiYiatNee6yCGm9i7aKOZAhRzilIXp8twZwdu3q2cZagwSZwe3dQe1PhGu4kTEm7Fxwq0bGkZ935L9Jr9Js8vEAoqI0tyDx61PfJQUe6JNsDVaDjotf7E',
  useCdn: false,
})

// Partner data from Canterbury Trust website
const partners = [
  {
    _type: 'partner',
    name: 'National Lottery Heritage Fund',
    partnershipType: 'Principal Funder',
    description: 'Using money raised by National Lottery players, The National Lottery Heritage Fund supports projects that connect people and communities with the UK\'s heritage.',
    website: 'https://www.heritagefund.org.uk',
    order: 1,
  },
  {
    _type: 'partner',
    name: 'Kent Community Foundation',
    partnershipType: 'Major Funder',
    description: 'Supporting local communities across Kent through grant funding and charitable giving.',
    website: 'https://www.kentcf.org.uk',
    order: 2,
  },
  {
    _type: 'partner',
    name: 'The Lawson Trust',
    partnershipType: 'Major Funder',
    description: 'Supporting archaeological and heritage projects across the UK.',
    website: '',
    order: 3,
  },
  {
    _type: 'partner',
    name: 'The Roger De Haan Charitable Trust',
    partnershipType: 'Major Funder',
    description: 'Supporting education, arts, and heritage projects in Folkestone and East Kent.',
    website: 'https://rdhct.org.uk',
    order: 4,
  },
  {
    _type: 'partner',
    name: 'Garfield Weston Foundation',
    partnershipType: 'Major Funder',
    description: 'One of the UK\'s largest charitable foundations, supporting a wide range of causes.',
    website: 'https://garfieldweston.org',
    order: 5,
  },
  {
    _type: 'partner',
    name: 'The Swire Charitable Trust',
    partnershipType: 'Supporting Organisation',
    description: 'Supporting heritage, arts, and education projects.',
    website: '',
    order: 6,
  },
  {
    _type: 'partner',
    name: 'Council for British Archaeology',
    partnershipType: 'Heritage Partner',
    description: 'The leading educational charity working throughout the UK to involve people in archaeology.',
    website: 'https://new.archaeologyuk.org',
    order: 7,
  },
  {
    _type: 'partner',
    name: 'Association for Roman Archaeology',
    partnershipType: 'Heritage Partner',
    description: 'Promoting the study and understanding of the Roman period in Britain.',
    website: 'https://associationromanarchaeology.org',
    order: 8,
  },
  {
    _type: 'partner',
    name: 'Society for the Promotion of Roman Studies',
    partnershipType: 'Academic Partner',
    description: 'The leading organization for the study of Rome and the Roman Empire.',
    website: 'https://www.romansociety.org',
    order: 9,
  },
  {
    _type: 'partner',
    name: 'Friends of the Canterbury Archaeological Trust',
    partnershipType: 'Supporting Organisation',
    description: 'Supporting the work of Canterbury Archaeological Trust through membership and fundraising.',
    website: 'https://www.canterburytrust.co.uk/fcat',
    order: 10,
  },
  {
    _type: 'partner',
    name: 'University of Kent',
    partnershipType: 'Academic Partner',
    description: 'Providing student volunteers and academic expertise to the excavation project.',
    website: 'https://www.kent.ac.uk',
    order: 11,
  },
  {
    _type: 'partner',
    name: 'Folkestone Museum',
    partnershipType: 'Community Partner',
    description: 'Local museum partner providing exhibition space and community engagement.',
    website: 'https://folkestonemuseum.co.uk',
    order: 12,
  },
  {
    _type: 'partner',
    name: 'Folkestone Research and Archaeology Group',
    partnershipType: 'Community Partner',
    description: 'Local archaeological group providing volunteer support and expertise.',
    website: '',
    order: 13,
  },
  {
    _type: 'partner',
    name: 'Dover Archaeological Group',
    partnershipType: 'Community Partner',
    description: 'Regional archaeological group providing training and support throughout the field school.',
    website: 'https://www.doverarchaeology.org.uk',
    order: 14,
  },
  {
    _type: 'partner',
    name: 'Folkestone & Hythe District Council',
    partnershipType: 'Supporting Organisation',
    description: 'Providing ongoing support for the project and site access.',
    website: 'https://www.folkestone-hythe.gov.uk',
    order: 15,
  },
]

async function seedPartners() {
  console.log('🌱 Starting to seed partners...')
  
  try {
    // Delete existing partners
    console.log('🗑️  Deleting existing partners...')
    await client.delete({ query: '*[_type == "partner"]' })
    
    // Create new partners
    console.log('✨ Creating new partners...')
    
    for (const partner of partners) {
      const result = await client.create(partner)
      console.log(`✅ Created partner: ${partner.name}`)
    }
    
    console.log('\n🎉 Successfully seeded all partners!')
    console.log(`Total partners created: ${partners.length}`)
    
  } catch (error) {
    console.error('❌ Error seeding partners:', error)
    process.exit(1)
  }
}

// Run the seed function
seedPartners().then(() => {
  console.log('\n✨ Seeding complete!')
  process.exit(0)
})