import { createClient } from '@sanity/client'
import { nanoid } from 'nanoid'

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ce9tlzu0',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2023-12-18',
  useCdn: false,
})

async function seedHomepageSections() {
  const sections = [
    {
      _type: 'homepageSection',
      _id: `homepage-section-hero`,
      title: 'Hero Section',
      sectionId: 'hero',
      subtitle: 'Preserving the past for future generations',
      description: 'Join us in protecting a remarkable Roman villa threatened by coastal erosion at East Wear Bay, Folkestone.',
      order: 1,
      backgroundColor: 'default',
      layout: 'hero'
    },
    {
      _type: 'homepageSection',
      _id: `homepage-section-about`,
      title: 'About the East Wear Bay Project',
      sectionId: 'about',
      description: 'The East Wear Bay Archaeological Project is dedicated to excavating, recording, and preserving the Folkestone Roman Villa and its surrounding archaeological landscape before it is lost to coastal erosion.',
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'The East Wear Bay Archaeological Project is dedicated to excavating, recording, and preserving the Folkestone Roman Villa and its surrounding archaeological landscape before it is lost to coastal erosion.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        },
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'Through a combination of professional archaeology, community involvement, and innovative digital technology, we\'re racing against time to document this important heritage site for future generations.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ],
      ctaText: 'Learn more about our project',
      ctaLink: '/about',
      order: 2,
      backgroundColor: 'default',
      layout: 'two-columns'
    },
    {
      _type: 'homepageSection',
      _id: `homepage-section-artifacts`,
      title: 'Featured Artefacts',
      sectionId: 'featured-artifacts',
      subtitle: 'Explore our collection of digitally preserved artefacts from East Wear Bay.',
      order: 3,
      backgroundColor: 'muted',
      layout: 'full'
    },
    {
      _type: 'homepageSection',
      _id: `homepage-section-community`,
      title: 'Join Our Community',
      sectionId: 'community',
      subtitle: 'There are many ways to get involved and contribute to the preservation of this important archaeological site.',
      description: 'Whether you\'re interested in hands-on excavation, historical research, or community outreach, we welcome your participation.',
      items: [
        {
          _key: nanoid(),
          title: 'Local Volunteers',
          subtitle: 'No experience necessary',
          description: 'Join our friendly team of volunteers and help uncover East Wear Bay\'s Roman past. Full training provided.',
          link: '/volunteer',
          linkText: 'Become a volunteer'
        },
        {
          _key: nanoid(),
          title: 'Field School',
          subtitle: 'Professional training',
          description: 'Gain hands-on archaeological experience through our accredited field school program.',
          link: '/field-school',
          linkText: 'Learn more'
        },
        {
          _key: nanoid(),
          title: 'Educational Visits',
          subtitle: 'School programs',
          description: 'Bring history to life for your students with guided site tours and hands-on activities.',
          link: '/education',
          linkText: 'Book a visit'
        },
        {
          _key: nanoid(),
          title: 'Research Access',
          subtitle: 'Academic collaboration',
          description: 'Access our finds archive and collaborate on research projects.',
          link: '/research',
          linkText: 'Explore research'
        }
      ],
      order: 4,
      backgroundColor: 'default',
      layout: 'grid'
    },
    {
      _type: 'homepageSection',
      _id: `homepage-section-field-school`,
      title: 'Join Our Field School',
      sectionId: 'field-school',
      description: 'The East Wear Bay International Field School offers hands-on archaeological experience for students and volunteers of all backgrounds and skill levels.',
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'The East Wear Bay International Field School offers hands-on archaeological experience for students and volunteers of all backgrounds and skill levels.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        },
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'Whether you\'re a student seeking field experience, a local resident interested in your heritage, or simply an enthusiast wanting to try archaeology, we welcome your participation.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ],
      ctaText: 'View field school details',
      ctaLink: '/field-school',
      order: 5,
      backgroundColor: 'muted',
      layout: 'two-columns'
    },
    {
      _type: 'homepageSection',
      _id: `homepage-section-news`,
      title: 'Onsite Blog',
      sectionId: 'news',
      subtitle: 'Updates from our excavations and community projects',
      items: [
        {
          _key: nanoid(),
          title: 'Discovery of Intact Mosaic Floor',
          description: 'Our team has uncovered a remarkably well-preserved mosaic floor in the eastern wing of the Folkestone Villa, providing new insights into Roman domestic life.',
          date: '2025-05-15',
          link: '/news/mosaic-discovery',
          linkText: 'Read more'
        },
        {
          _key: nanoid(),
          title: 'Spring 2025 Field School Applications Open',
          description: 'We\'re now accepting applications for our upcoming field school season. Join us for hands-on archaeological training at this unique coastal site.',
          date: '2025-04-28',
          link: '/field-school/apply',
          linkText: 'Read more'
        },
        {
          _key: nanoid(),
          title: 'Community Archaeology Day Success',
          description: 'Our outreach team has successfully engaged over 1,000 Folkestone students through innovative archaeology workshops and site visits this school year.',
          date: '2025-04-20',
          link: '/news/education-milestone',
          linkText: 'Read more'
        }
      ],
      order: 7,
      backgroundColor: 'muted',
      layout: 'grid'
    }
  ]

  console.log('Seeding homepage sections...')
  for (const section of sections) {
    await client.createOrReplace(section)
  }
  console.log(`Created ${sections.length} homepage sections`)
}

async function main() {
  try {
    console.log('Starting homepage sections seeding...')
    await seedHomepageSections()
    console.log('✅ Homepage sections successfully seeded!')
    console.log('\n📝 Note: You can now add images to these sections through Sanity Studio:')
    console.log('- Hero Section: Add a background image')
    console.log('- About Section: Add a main image to display on the right')
    console.log('- Field School Section: Add a main image to display on the left')
    console.log('- Community/News items: Add images for each item')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

// Run the seeding
main()