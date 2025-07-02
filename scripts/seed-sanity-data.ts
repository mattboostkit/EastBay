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

// Helper function to create a slug
const createSlug = (title: string) => ({
  _type: 'slug',
  current: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
})

async function seedEducationResources() {
  const resources = [
    {
      _type: 'educationResource',
      _id: `education-${nanoid()}`,
      title: 'Introduction to Roman Britain',
      slug: createSlug('Introduction to Roman Britain'),
      description: 'A comprehensive guide for KS2 students exploring life in Roman Britain through archaeological evidence.',
      resourceType: 'lesson-plan',
      ageGroup: 'elementary',
      subjects: ['history', 'archaeology'],
      duration: '45 minutes',
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'This lesson introduces students to Roman Britain through the lens of the East Wear Bay archaeological site.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ],
      // mainImage will need to be added manually through Sanity Studio
    },
    {
      _type: 'educationResource',
      _id: `education-${nanoid()}`,
      title: 'Archaeological Methods Workshop',
      slug: createSlug('Archaeological Methods Workshop'),
      description: 'Hands-on activities teaching students how archaeologists excavate and analyze artifacts.',
      resourceType: 'activity',
      ageGroup: 'middle-school',
      subjects: ['archaeology', 'science'],
      duration: '2 hours',
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'Students will learn excavation techniques, artifact recording, and dating methods used at East Wear Bay.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ],
      // mainImage will need to be added manually through Sanity Studio
    },
    {
      _type: 'educationResource',
      _id: `education-${nanoid()}`,
      title: 'Roman Villa Virtual Tour',
      slug: createSlug('Roman Villa Virtual Tour'),
      description: 'An interactive virtual tour of the Folkestone Roman Villa with 3D reconstructions.',
      resourceType: 'video',
      ageGroup: 'high-school',
      subjects: ['history', 'art-history', 'technology'],
      duration: '30 minutes',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'Take a virtual journey through time to explore the Roman Villa as it would have appeared in the 2nd century CE.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ],
      // mainImage will need to be added manually through Sanity Studio
    }
  ]

  console.log('Seeding education resources...')
  for (const resource of resources) {
    await client.createOrReplace(resource)
  }
  console.log(`Created ${resources.length} education resources`)
}

async function seedTestimonials() {
  const testimonials = [
    {
      _type: 'testimonial',
      _id: `testimonial-${nanoid()}`,
      name: 'Sarah Thompson',
      position: 'History Teacher',
      organization: 'Folkestone Academy',
      quote: 'The field school experience was transformative for my students. They gained hands-on experience with real archaeological work and developed a deep appreciation for our local heritage.',
      rating: 5,
      featured: true,
      order: 1,
      // image will need to be added manually through Sanity Studio
    },
    {
      _type: 'testimonial',
      _id: `testimonial-${nanoid()}`,
      name: 'Dr. Michael Chen',
      position: 'Volunteer Excavator',
      organization: 'University of Kent',
      quote: 'As a volunteer, I found the experience incredibly rewarding. The team was welcoming and professional, and I learned so much about archaeological techniques.',
      rating: 5,
      featured: true,
      order: 2,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-placeholder-testimonial-2'
        },
        alt: 'Dr. Michael Chen'
      }
    },
    {
      _type: 'testimonial',
      _id: `testimonial-${nanoid()}`,
      name: 'Emma Richards',
      position: 'Field School Participant',
      organization: 'Durham University',
      quote: 'The East Wear Bay field school provided invaluable practical experience. Working on a real Roman site was a dream come true!',
      rating: 5,
      featured: false,
      order: 3,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-placeholder-testimonial-3'
        },
        alt: 'Emma Richards'
      }
    }
  ]

  console.log('Seeding testimonials...')
  for (const testimonial of testimonials) {
    await client.createOrReplace(testimonial)
  }
  console.log(`Created ${testimonials.length} testimonials`)
}

async function seedTimelineEntries() {
  const entries = [
    {
      _type: 'timelineEntry',
      _id: `timeline-${nanoid()}`,
      title: 'Discovery of Roman Villa',
      date: '1924-07-15',
      description: 'Initial discovery of Roman remains during construction work in East Wear Bay.',
      category: 'discovery',
      isMajor: true,
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'During routine construction work, workers uncovered tessellated pavements and pottery fragments, leading to the identification of a significant Roman villa site.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ],
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-placeholder-timeline-1'
        },
        alt: 'Discovery of Roman Villa in 1924'
      }
    },
    {
      _type: 'timelineEntry',
      _id: `timeline-${nanoid()}`,
      title: 'First Major Excavation',
      date: '1952-06-01',
      description: 'Systematic archaeological excavation begins under the direction of S.E. Winbolt.',
      category: 'field-work',
      isMajor: true,
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'The first systematic excavation revealed the villa\'s bath house complex and several rooms with intact mosaic floors.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ],
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-placeholder-timeline-2'
        },
        alt: 'First major excavation in 1952'
      }
    },
    {
      _type: 'timelineEntry',
      _id: `timeline-${nanoid()}`,
      title: 'Heritage Lottery Fund Grant',
      date: '2010-03-15',
      description: 'Major funding secured for comprehensive site investigation and public engagement.',
      category: 'milestone',
      isMajor: true,
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'A £500,000 grant from the Heritage Lottery Fund enabled modern archaeological techniques and community involvement programs.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ]
    },
    {
      _type: 'timelineEntry',
      _id: `timeline-${nanoid()}`,
      title: 'Digital Museum Launch',
      date: '2023-09-01',
      description: 'Launch of the online digital museum showcasing 3D models of artifacts.',
      category: 'milestone',
      isMajor: false,
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'The digital museum allows global access to our artifact collection with interactive 3D models and detailed archaeological data.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ]
    }
  ]

  console.log('Seeding timeline entries...')
  for (const entry of entries) {
    await client.createOrReplace(entry)
  }
  console.log(`Created ${entries.length} timeline entries`)
}

async function seedResearchPublications() {
  const publications = [
    {
      _type: 'researchPublication',
      _id: `publication-${nanoid()}`,
      title: 'The Folkestone Roman Villa: New Evidence for Elite Settlement in Cantium',
      slug: createSlug('The Folkestone Roman Villa New Evidence'),
      authors: ['Dr. Keith Parfitt', 'Dr. Andrew Richardson'],
      publicationDate: '2023-06-15',
      journal: 'Britannia',
      volume: '54',
      pages: '123-156',
      doi: '10.1017/S0068113X23000123',
      abstract: 'Recent excavations at East Wear Bay have revealed new evidence for the chronology and status of the Folkestone Roman Villa...',
      keywords: ['Roman Britain', 'Villa', 'Kent', 'Elite settlement'],
      pdfUrl: 'https://example.com/publications/folkestone-villa-2023.pdf',
      openAccess: true,
      featured: true
    },
    {
      _type: 'researchPublication',
      _id: `publication-${nanoid()}`,
      title: 'Ceramic Analysis from East Wear Bay: Trade Networks in Roman Kent',
      slug: createSlug('Ceramic Analysis from East Wear Bay'),
      authors: ['Dr. Emma Wilson', 'Prof. Martin Millett'],
      publicationDate: '2022-12-01',
      journal: 'Journal of Roman Pottery Studies',
      volume: '19',
      pages: '45-78',
      abstract: 'Analysis of ceramic assemblages from East Wear Bay provides new insights into trade networks and consumption patterns...',
      keywords: ['Ceramics', 'Trade', 'Roman Kent', 'Pottery analysis'],
      featured: false
    },
    {
      _type: 'researchPublication',
      _id: `publication-${nanoid()}`,
      title: 'Environmental Evidence from the Folkestone Villa: Agriculture and Landscape',
      slug: createSlug('Environmental Evidence from the Folkestone Villa'),
      authors: ['Dr. Ruth Pelling', 'Dr. Chris Stevens'],
      publicationDate: '2023-03-20',
      journal: 'Environmental Archaeology',
      volume: '28',
      issue: '2',
      pages: '89-112',
      doi: '10.1080/14614103.2023.2123456',
      abstract: 'Environmental samples from recent excavations reveal evidence for agricultural practices and landscape management...',
      keywords: ['Environmental archaeology', 'Agriculture', 'Palaeobotany', 'Landscape'],
      openAccess: true,
      featured: true
    }
  ]

  console.log('Seeding research publications...')
  for (const publication of publications) {
    await client.createOrReplace(publication)
  }
  console.log(`Created ${publications.length} research publications`)
}

async function seedVideos() {
  const videos = [
    {
      _type: 'video',
      _id: `video-${nanoid()}`,
      title: 'East Wear Bay Excavation 2023 - Season Highlights',
      slug: createSlug('East Wear Bay Excavation 2023 Season Highlights'),
      description: 'A summary of the 2023 excavation season showcasing major discoveries and community involvement.',
      externalVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '12:30',
      categories: ['field-work', 'discoveries', 'community'],
      thumbnail: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-placeholder-video-1'
        },
        alt: '2023 Excavation highlights'
      }
    },
    {
      _type: 'video',
      _id: `video-${nanoid()}`,
      title: 'How to Identify Roman Pottery',
      slug: createSlug('How to Identify Roman Pottery'),
      description: 'Educational video teaching the basics of Roman pottery identification for volunteers and students.',
      externalVideo: 'https://vimeo.com/123456789',
      duration: '8:45',
      categories: ['education', 'pottery', 'tutorial'],
      thumbnail: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-placeholder-video-2'
        },
        alt: 'Roman pottery identification guide'
      }
    }
  ]

  console.log('Seeding videos...')
  for (const video of videos) {
    await client.createOrReplace(video)
  }
  console.log(`Created ${videos.length} videos`)
}

async function seedPages() {
  const pages = [
    {
      _type: 'page',
      _id: `page-${nanoid()}`,
      title: 'Visiting Information',
      slug: createSlug('Visiting Information'),
      description: 'Essential information for planning your visit to the East Wear Bay archaeological site.',
      mainImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: 'image-placeholder-page-1'
        },
        alt: 'East Wear Bay site entrance'
      },
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'The East Wear Bay archaeological site is open to visitors during the excavation season from May to September.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ],
      sections: [
        {
          _type: 'object',
          _key: nanoid(),
          sectionTitle: 'Opening Hours',
          content: [
            {
              _type: 'block',
              _key: nanoid(),
              children: [
                {
                  _type: 'span',
                  text: 'Tuesday to Sunday: 10:00 AM - 4:00 PM (May - September)',
                  _key: nanoid()
                }
              ],
              markDefs: [],
              style: 'normal'
            }
          ]
        }
      ]
    },
    {
      _type: 'page',
      _id: `page-${nanoid()}`,
      title: 'Site Conservation',
      slug: createSlug('Site Conservation'),
      description: 'Our approach to preserving and protecting the archaeological remains at East Wear Bay.',
      content: [
        {
          _type: 'block',
          _key: nanoid(),
          children: [
            {
              _type: 'span',
              text: 'Conservation is at the heart of our archaeological work, ensuring the site is preserved for future generations.',
              _key: nanoid()
            }
          ],
          markDefs: [],
          style: 'normal'
        }
      ]
    }
  ]

  console.log('Seeding pages...')
  for (const page of pages) {
    await client.createOrReplace(page)
  }
  console.log(`Created ${pages.length} pages`)
}

async function main() {
  try {
    console.log('Starting Sanity data seeding...')
    
    await seedEducationResources()
    await seedTestimonials()
    await seedTimelineEntries()
    await seedResearchPublications()
    await seedVideos()
    await seedPages()
    
    console.log('✅ All dummy data successfully seeded!')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

// Run the seeding
main()