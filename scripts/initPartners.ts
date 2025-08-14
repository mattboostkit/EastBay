import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  apiVersion: '2023-12-18',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Initial partner data to populate in Sanity
const partnersData = [
  // Principal Funder
  {
    name: 'National Lottery Heritage Fund',
    partnershipType: 'Principal Funder',
    website: 'https://www.heritagefund.org.uk',
    description: 'Using money raised by National Lottery players, The National Lottery Heritage Fund supports projects that connect people and communities with the UK\'s heritage. East Wear Bay is made possible with The National Lottery Heritage Fund.',
    order: 1
  },
  
  // Lead Partners
  {
    name: 'Canterbury Archaeological Trust',
    partnershipType: 'Lead Partner',
    website: 'https://www.canterburytrust.co.uk',
    order: 10
  },
  {
    name: 'Folkestone Museum',
    partnershipType: 'Lead Partner',
    website: 'https://folkestonemuseum.co.uk',
    order: 11
  },
  {
    name: 'Folkestone Research and Archaeology Group',
    partnershipType: 'Lead Partner',
    order: 12
  },
  {
    name: 'Dover Archaeological Group',
    partnershipType: 'Lead Partner',
    website: 'https://www.doverarchaeology.org.uk',
    order: 13
  },
  {
    name: 'University of Kent',
    partnershipType: 'Lead Academic Partner',
    website: 'https://www.kent.ac.uk',
    order: 14
  },
  
  // Supporters
  {
    name: 'Folkestone & Hythe District Council',
    partnershipType: 'Supporter',
    website: 'https://www.folkestone-hythe.gov.uk',
    order: 20
  },
  {
    name: 'Kent Community Foundation',
    partnershipType: 'Supporter',
    website: 'https://www.kentcf.org.uk',
    order: 21
  },
  {
    name: 'Society for the Promotion of Roman Studies',
    partnershipType: 'Supporter',
    website: 'https://www.romansociety.org',
    order: 22
  },
  {
    name: 'Association for Roman Archaeology',
    partnershipType: 'Supporter',
    website: 'https://associationromanarchaeology.org',
    order: 23
  },
  {
    name: 'Friends of the Canterbury Archaeological Trust',
    partnershipType: 'Supporter',
    website: 'https://www.canterburytrust.co.uk/fcat',
    order: 24
  },
  {
    name: 'The Roger De Haan Charitable Trust',
    partnershipType: 'Supporter',
    website: 'https://rdhct.org.uk',
    order: 25
  },
  {
    name: 'The Lawson Trust',
    partnershipType: 'Supporter',
    order: 26
  },
  {
    name: 'Council for British Archaeology',
    partnershipType: 'Supporter',
    website: 'https://new.archaeologyuk.org',
    order: 27
  },
  {
    name: 'The Swire Charitable Trust',
    partnershipType: 'Supporter',
    order: 28
  },
  {
    name: 'Garfield Weston Foundation',
    partnershipType: 'Supporter',
    website: 'https://garfieldweston.org',
    order: 29
  }
];

async function initializePartners() {
  console.log('🚀 Starting partner data initialization...');
  
  try {
    // Check existing partners
    const existingPartners = await client.fetch(`*[_type == "partner"]`);
    console.log(`📊 Found ${existingPartners.length} existing partners in Sanity`);
    
    if (existingPartners.length > 0) {
      console.log('ℹ️  Partners already exist in Sanity. To avoid duplicates, skipping initialization.');
      console.log('💡 You can manage partners through Sanity Studio at /admin');
      return;
    }
    
    // Create partners
    for (const partner of partnersData) {
      try {
        const doc = {
          _type: 'partner',
          ...partner
        };
        
        const result = await client.create(doc);
        console.log(`✅ Created partner: ${partner.name}`);
      } catch (error) {
        console.error(`❌ Error creating partner ${partner.name}:`, error);
      }
    }
    
    console.log('\n🎉 Partner initialization complete!');
    console.log('📝 You can now upload logos for each partner in Sanity Studio at /admin');
    console.log('🔍 Navigate to the Partners section to add logos and update descriptions');
    
  } catch (error) {
    console.error('❌ Error initializing partners:', error);
  }
}

// Run the initialization
initializePartners();