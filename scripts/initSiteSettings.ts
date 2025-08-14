import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  apiVersion: '2023-12-18',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function initializeSiteSettings() {
  try {
    // Check if site settings document already exists
    const existing = await client.fetch(`*[_type == "siteSettings" && _id == "siteSettings"][0]`);
    
    if (existing) {
      console.log('✅ Site Settings document already exists');
      return;
    }

    // Create initial site settings document
    const siteSettings = {
      _id: 'siteSettings',
      _type: 'siteSettings',
      title: 'East Wear Bay Archaeological Society',
      description: 'Preserving the Folkestone Roman Villa through excavation, digital preservation, and public engagement.',
      keywords: [
        'archaeology',
        'Roman villa',
        'Folkestone',
        'East Wear Bay',
        'heritage',
        'excavation',
        'community archaeology',
        'digital museum'
      ],
      contact: {
        email: 'info@eastwearbay.org',
        phone: '+44 1303 123456',
        address: 'East Wear Bay\nFolkestone, Kent\nCT20 1PU\nUnited Kingdom'
      },
      socialMedia: {
        facebook: 'https://facebook.com/eastwearbaypt',
        twitter: 'https://twitter.com/eastwearbaypt',
        instagram: 'https://instagram.com/eastwearbaypt',
      },
      openingHours: 'Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed\nBank Holidays: Special hours apply'
    };

    await client.createOrReplace(siteSettings);
    console.log('✅ Site Settings document created successfully');
    console.log('📝 You can now upload your logo in Sanity Studio at /admin');
  } catch (error) {
    console.error('❌ Error initializing site settings:', error);
  }
}

initializeSiteSettings();