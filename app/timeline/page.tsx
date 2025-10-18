'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Calendar, MapPin, Users, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

// Comprehensive timeline data from Canterbury Trust research
const timelineData = [
  {
    id: 'palaeolithic',
    year: 'c. 10,000 BCE',
    period: 'Upper Palaeolithic',
    title: 'Earliest Human Presence',
    description: 'The earliest evidence that humans were present on the cliffs above East Wear Bay dates back to the Upper Palaeolithic period.',
    details: 'A flint blade discovered at the end of the 2016 excavation season provides some of the earliest evidence of human activity at East Wear Bay.',
    findings: ['Flint blade tool'],
    significance: 'Provides evidence for early human activity on the Kent coast.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Paleo%20Flint%20Blade%20Tool.webp?updatedAt=1760784931461',
    color: 'bg-gray-500',
  },
  {
    id: 'mesolithic',
    year: 'c. 8,300–3,500 BCE',
    period: 'Mesolithic',
    title: 'Mesolithic Activity',
    description: 'Flint microliths and blades have been recovered from the site, which show that people were hunting and fishing in the area.',
    details: 'Flint microliths and blades have been recovered from the site, which show that people were hunting and fishing in the area.',
    findings: ['Flint tools'],
    significance: 'Evidence shows how people used the natural resources in Folkestone during the Mesolithic period.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Mesolithic%20Flint%20Tools.webp?updatedAt=1760784932046',
    color: 'bg-stone-500',
  },
  {
    id: 'neolithic',
    year: 'c. 3,500-2,150 BCE',
    period: 'Neolithic',
    title: 'Neolithic Activity',
    description: 'Neolithic pottery sherds and flint tools found at East Wear Bay suggest that there was a settlement in the immediate area. This settlement is yet to be found by archaeologists.',
    details: 'Neolithic pottery sherds and flint tools found at East Wear Bay suggest that there was a settlement in the immediate area. This settlement is yet to be found by archaeologists.',
    findings: ['Flint tools', 'Pottery fragments'],
    significance: 'Neolithic people settled the land in Folkestone and were living not far from the site at East Wear Bay.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Neolithic%20Flint%20Tools.webp?updatedAt=1760785332099',
    color: 'bg-yellow-700',
  },
  {
    id: 'bronze-age',
    year: 'c. 2,150-800 BCE',
    period: 'Bronze Age',
    title: 'Bronze Age Activity',
    description: 'Possible evidence of Bronze Age settlement and finds related to activity during this period.',
    details: 'The Bronze Age is represented at the site by metalwork and pottery. Several undated post-holes may be evidence of Bronze Age structures, although further analysis needs to be done to confirm this.',
    findings: ['Pottery fragments', 'Post holes suggesting structures'],
    significance: 'Evidence may suggest that there was continuous occupation of this important coastal location for over 2,500 years.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Bronze%20Age%20Pottery.webp?updatedAt=1760784933164',
    color: 'bg-amber-600',
  },
  {
    id: 'early-iron-age',
    year: 'c. 800-150 BCE',
    period: 'Early to Mid-Iron Age',
    title: 'Iron Age Settlement',
    description: 'Continued occupation at East Wear Bay as it grows into a major coastal trading settlement.',
    details: 'Occupation appears to have continued at East Wear Bay throughout the early and middle Iron Age. Our recent excavations have established that from the 2nd century BC the site flourished as a major coastal trading and production settlement.',
    findings: ['Evidence for roundhouse and granary structures', 'Pottery', 'Metalwork'],
    significance: 'Occupation evidence shows a growing settlement whose coastal location became increasingly important over time.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Iron%20Age%20Reconstruction.webp?updatedAt=1760784931627',
    color: 'bg-orange-500',
  },
  {
    id: 'iron-age',
    year: 'c. 150 BCE - 43 CE',
    period: 'Late Iron Age',
    title: 'Quernstone Production Centre',
    description: 'The site became a major centre for quernstone production and international trade.',
    details: 'During the Late Iron Age, East Wear Bay served as the focus for large-scale quernstone production and also functioned as a port of trade with continental Europe and the developing Roman Empire. The quernstones were made from the local Greensand, which was brought up from the cliffs and beaches around Folkestone.',
    findings: ['Quernstone production area', 'Iron Age coins from Gaul and Britain', 'Evidence of roundhouses', 'International trade goods'],
    significance: 'Demonstrates extensive trading connections across the Channel before the Roman conquest.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/quernstone.webp?updatedAt=1760785552851',
    color: 'bg-orange-600',
  },
  {
    id: 'roman-conquest',
    year: '43 CE',
    period: 'Roman Conquest',
    title: 'Roman Invasion of Britain',
    description: 'The Roman conquest marks a significant transition at the site.',
    details: 'Following the Roman conquest, the site transitioned from an Iron Age settlement to a Romanized villa complex.',
    findings: ['Classis Britannica stamped tiles', 'Early Roman pottery'],
    significance: 'The site\'s proximity to the continent made it strategically important for the Roman fleet.',
    color: 'bg-red-600',
  },
  {
    id: 'roman-villa',
    year: '43-410 CE',
    period: 'Roman Period',
    title: 'Roman Period Occupation',
    description: 'From around 75 CE, a major villa complex was established at East Wear Bay.',
    details: 'This first villa was demolished in the late first or early second century and a bigger structure was built with deeper foundations. Roof tiles stamped by the \'Classis Britannica\' (the Roman fleet in British waters), suggests a link to this unit. The villa was abandoned in the late third century and was reoccupied in the fourth century when it may have been semi-derelict. The villa is finally abandoned by the early fifth century.',
    findings: ['Mosaic flooring', 'Painted wall plaster', 'Bathhouse complex', 'Hypocaust heating system'],
    significance: 'Folkestone Roman Villa is one of few 1st century villas in Britain and may have been connected to the Roman fleet.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Villa%20Reconstruction.webp?updatedAt=1760784932140',
    color: 'bg-purple-600',
  },
  {
    id: 'post-roman',
    year: 'c. 410-1900 CE',
    period: 'Post-Roman to Victorian',
    title: 'Site Abandonment',
    description: 'The villa was abandoned and gradually buried by soil and vegetation.',
    details: 'By the early 5th century, the villa was abandoned and was gradually forgotten. Although no evidence of occupation during the early Anglo-Saxon period has been found at East Wear Bay. By the mid-seventh century a monastic site had been established by St Eanswythe on Folkestone\'s west cliff, forming the focus for the later town. Excavations have recovered pottery and a coin of Alfred the Great dating to the ninth century AD, implying some people had re-occupied the site at this time.',
    findings: ['Coin of Alfred the Great'],
    significance: 'The focal area for settlement in Folkestone shifted after the Roman era.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Alfred%20Coin.webp?updatedAt=1760784931693',
    color: 'bg-gray-600',
  },
  {
    id: 'discovery',
    year: '1919',
    period: '20th Century',
    title: 'Rediscovery',
    description: 'Roman remains discovered eroding from the cliff-top at East Cliff.',
    details: 'Local residents noticed Roman building materials eroding from the cliff face above East Wear Bay, sparking archaeological interest.',
    findings: ['Building stones', 'Roof tiles', 'Pottery fragments'],
    significance: 'Began the modern archaeological investigation of the site.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Roof%20tile.webp?updatedAt=1760784931504',
    color: 'bg-blue-600',
  },
  {
    id: 'winbolt',
    year: '1923-1924',
    period: 'Winbolt Excavations',
    title: 'First Major Excavation',
    description: 'S.E. Winbolt excavated the site on behalf of Folkestone Town Council.',
    details: 'SE Winbolt excavated the site with his daughter Rosalind.',
    findings: ['Villa ground plan established', 'Mosaic flooring', 'Bathhouse'],
    significance: 'Important finds and evidence were uncovered that helped create a better understanding of the Roman world.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Winbolt.webp?updatedAt=1760784932445',
    color: 'bg-indigo-600',
  },
  {
    id: 'tourist',
    year: '1924-1940',
    period: 'Tourist Attraction',
    title: 'Public Access Era',
    description: 'The exposed villa became one of Britain\'s biggest archaeological tourist attractions.',
    details: 'The uncovered Roman villa was visited by thousands of holidaymakers. A tea room and toilet facilities were built to serve visitors. Many postcards and photographs from this period survive.',
    findings: ['Tea room foundations (rediscovered 2015)', 'Period photographs', 'Tourist postcards'],
    significance: 'Demonstrated early public engagement with archaeology.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Aerial%20Photo.webp?updatedAt=1760784932094',
    color: 'bg-green-600',
  },
  {
    id: 'wartime',
    year: '1940-1945',
    period: 'Second World War',
    title: 'Military Occupation',
    description: 'The site was occupied by the army who dug defensive positions.',
    details: 'The army dug slit trenches and weapon pits across the site, causing some damage to the archaeology. The site formed part of the coastal defenses against potential invasion.',
    findings: ['Defensive trenches', 'Tank tracks'],
    significance: 'Added a layer of 20th-century military history to the site.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/WWII.webp?updatedAt=1760784932146',
    color: 'bg-gray-700',
  },
  {
    id: 'reburial',
    year: '1957',
    period: 'Site Closure',
    title: 'Villa Reburied',
    description: 'The council decided to rebury the villa due to deterioration and declining visitors.',
    details: 'With tourists heading to sunnier climates and maintenance costs rising, Folkestone Council made the decision to cover the exposed ruins with soil for their protection.',
    findings: ['Site plans', 'Final condition photographs'],
    significance: 'Preserved the archaeology but removed it from public view.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Villa%20rebury.webp?updatedAt=1760784931827',
    color: 'bg-gray-600',
  },
  {
    id: 'karu',
    year: '1989',
    period: 'KARU Excavation',
    title: 'Erosion Assessment',
    description: 'Kent Archaeological Rescue Unit investigated coastal erosion impact.',
    details: 'KARU excavated part of the villa to assess erosion since 1924. They found that up to 10 metres had been lost to the sea and discovered intact Iron Age features beneath the villa.',
    findings: ['Intact Iron Age features', 'Impact of coastal erosion', 'Re-excavation of bathhouse structure'],
    significance: 'Revealed the urgent threat of coastal erosion to the site.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/KARU.webp?updatedAt=1760784932772',
    color: 'bg-red-700',
  },
  {
    id: 'town-unearthed',
    year: '2010-2013',
    period: 'Canterbury Archaeology Trust',
    title: 'A Town Unearthed',
    description: 'National Lottery Heritage Fund project engaging the local community.',
    details: 'This project involved re-excavating the northern part of the villa to reveal complex and well-preserved Iron Age deposits beneath the Roman period remains. Featured on BBC\'s \'Digging for Britain\' and won Current Archaeology\'s \'Rescue Dig of the Year\'.',
    findings: ['Iron Age deposits', 'Classis Britannica stamped roof tiles', 'Intact chalk floor surfaces'],
    significance: 'Evidence for economic and social changes during the Iron Age to Roman period transition in Britain.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Classis%20Britannica.webp?updatedAt=1760784932596',
    color: 'bg-teal-600',
  },
  {
    id: 'field-school',
    year: '2015-2017',
    period: 'CAT Field School',
    title: 'International Training Excavation',
    description: 'Three seasons of excavation training for students and volunteers.',
    details: 'The East Wear Bay Archaeological Field School investigated land north of the villa, establishing the extent of Iron Age features. An extensive quernstone production area was discovered.',
    findings: ['LIA quernstone production area', 'Multiple occupation phases', 'Late Bronze Age to Roman period evidence'],
    significance: 'Provided professional archaeological training while making significant discoveries.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Field%20School.webp?updatedAt=1760784937272',
    color: 'bg-blue-700',
  },
  {
    id: 'mosaic2022',
    year: '2022',
    period: 'CAT Project',
    title: 'Mosaic Re-excavation',
    description: 'Community excavation focused on villa Room 40\'s mosaic floor.',
    details: 'Local volunteers and University of Kent students re-excavated Room 40 of the villa to assess the condition of the mosaic floor. It was found to be better preserved than expected. Trenching to the north-west revealed undisturbed Roman period deposits.',
    findings: ['Preserved mosaic sections', 'Stamped tile', '4th century coin', 'Painted wall plaster'],
    significance: 'Demonstrated ongoing preservation potential despite erosion threats.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Mosaic%20recording.webp?updatedAt=1760784932206',
    color: 'bg-purple-700',
  },
  {
    id: 'current',
    year: '2023-2025',
    period: 'CAT Project',
    title: 'Facing the Cliff: The Race to Record the Archaeology of East Wear Bay',
    description: 'National Lottery Heritage Fund supported excavations.',
    details: 'With funding provided by the National Lottery Heritage Fund and <a href="/partners" class="text-primary hover:underline">other funding partners</a>, CAT has undertaken excavations that have focused on areas most at risk of coastal erosion. Run as a community excavation and field school, the project has engaged with many people in the local area.',
    findings: ['Evidence for Iron Age roundhouses', 'Better understanding of villa construction phases', 'Early imported pottery'],
    significance: 'Intact Iron Age and Roman period deposits are still to be recorded before the site is lost.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Facing%20the%20Cliff.webp?updatedAt=1760784932093',
    color: 'bg-green-700',
  },
  {
    id: 'future',
    year: '2026 onwards',
    period: 'Future Plans',
    title: 'Continued Research & Conservation',
    description: 'Ongoing excavations and digital preservation efforts.',
    details: 'Plans include further excavations of areas at risk, comprehensive digital documentation. Publication of results and expanded community engagement programmes to build on previous success. We are currently looking for <a href="/partners" class="text-primary hover:underline">funders to help us continue this important project</a>.',
    findings: [],
    significance: 'Ensuring that the site is digitally preserved, published and shared for future generations to enjoy.',
    image: 'https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/EWB.webp?updatedAt=1760784932100',
    color: 'bg-indigo-700',
  },
]

export default function TimelinePage() {
  const [expandedPeriod, setExpandedPeriod] = useState<string | null>('current')

  const togglePeriod = (id: string) => {
    setExpandedPeriod(expandedPeriod === id ? null : id)
  }

  return (
    <>
      {/* Banner Image */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="https://ik.imagekit.io/boostkit/East%20Wear%20Bay/Timeline/Banner.webp?updatedAt=1760784932191"
          alt="East Wear Bay Archaeological Timeline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Archaeological Timeline
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Journey through 12,000 years of human history at East Wear Bay.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>12,000 years of history</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Strategic coastal location</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>International significance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-5xl">
          {/* Visual timeline bar */}
          <div className="relative mb-12">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-primary/50 to-primary"></div>
            
            {timelineData.map((entry, index) => (
              <div key={entry.id} className="relative mb-8">
                {/* Timeline dot */}
                <div className={`absolute left-5 w-7 h-7 rounded-full border-4 border-background ${entry.color} z-10`}></div>
                
                {/* Content card */}
                <div className="ml-20">
                  <button
                    onClick={() => togglePeriod(entry.id)}
                    className="w-full text-left group"
                  >
                    <div className={`rounded-lg border bg-card p-6 transition-all hover:shadow-md ${
                      expandedPeriod === entry.id ? 'ring-2 ring-primary' : ''
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${entry.color}`}>
                              {entry.year}
                            </span>
                            <span className="text-sm font-medium text-muted-foreground">
                              {entry.period}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
                          <p className="text-muted-foreground">{entry.description}</p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {expandedPeriod === entry.id ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      
                      {/* Expanded content */}
                      {expandedPeriod === entry.id && (
                        <div className="mt-6 pt-6 border-t">
                          <p
                            className="text-muted-foreground mb-4"
                            dangerouslySetInnerHTML={{ __html: entry.details }}
                          />

                          {entry.image && (
                            <div className="mb-6 relative h-64 md:h-80 rounded-lg overflow-hidden">
                              <Image
                                src={entry.image}
                                alt={entry.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}

                          {entry.findings && entry.findings.length > 0 && (
                            <div className="mb-4">
                              <h4 className="font-semibold mb-2">Key Discoveries:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                {entry.findings.map((finding, i) => (
                                  <li key={i}>{finding}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="p-4 bg-accent rounded-lg">
                            <h4 className="font-semibold mb-1">Archaeological Significance:</h4>
                            <p className="text-sm text-muted-foreground">{entry.significance}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="inline-block rounded-lg bg-destructive/10 px-6 py-3 mb-6">
              <p className="text-destructive font-medium">
                ⚠️ This site is under immediate threat from coastal erosion
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-4">Help Us Save This History</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every year, more of this irreplaceable archaeological site is lost to the sea. 
              Join us in our race against time to excavate, record, and preserve East Wear Bay's remarkable heritage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/volunteer"
                className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Volunteer With Us
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-primary px-6 py-3 font-medium text-primary shadow-sm hover:bg-primary/10"
              >
                Support the Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}