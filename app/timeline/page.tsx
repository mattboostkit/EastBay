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
    details: 'A flint blade discovered at the end of the 2016 excavation season provides the first evidence of human activity at East Wear Bay during the late Ice Age.',
    findings: ['Flint blade tool'],
    significance: 'Represents one of the earliest signs of human activity on the Kent coast.',
    color: 'bg-gray-500',
  },
  {
    id: 'bronze-age',
    year: 'c. 1500-800 BCE',
    period: 'Late Bronze Age',
    title: 'Bronze Age Settlement',
    description: 'Evidence of Bronze Age occupation discovered beneath later Iron Age and Roman layers.',
    details: 'Multiple phases of occupation were discovered during the 2015-2017 field school, with Bronze Age features found at the deepest levels.',
    findings: ['Pottery fragments', 'Post holes suggesting structures'],
    significance: 'Shows continuous occupation of this strategic coastal location for over 3,000 years.',
    color: 'bg-amber-600',
  },
  {
    id: 'iron-age',
    year: 'c. 150 BCE - 43 CE',
    period: 'Late Iron Age',
    title: 'Quern Stone Production Centre',
    description: 'The site became a major centre for quern stone production and international trade.',
    details: 'During the Late Iron Age, East Wear Bay served as the focus of a quern-stone production industry and probably functioned as a port of trade with the developing Roman Empire. The querns were made from local greensand stone brought up from the cliffs and beaches around Folkestone.',
    findings: ['Quern stone production area', 'Iron Age coins from Gaul and Britain', 'Evidence of roundhouses', 'International trade goods'],
    significance: 'Demonstrates extensive trading connections across the Channel before the Roman conquest.',
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
    year: 'c. 70-400 CE',
    period: 'Roman Period',
    title: 'Folkestone Roman Villa',
    description: 'A major villa complex was established, surrounded by ditched fields and enclosures.',
    details: 'After the Roman Conquest, a substantial villa complex was built on the site. The villa featured multiple rooms, mosaic floors, painted walls, and a bath house. It was surrounded by a system of ditched fields and enclosures that replaced earlier Iron Age features.',
    findings: ['Mosaic floors', 'Painted wall plaster', 'Bath house complex', 'Hypocaust heating system', 'Coins and jewelry'],
    significance: 'One of the most significant Roman villa sites on the Kent coast.',
    color: 'bg-purple-600',
  },
  {
    id: 'post-roman',
    year: 'c. 400-1900 CE',
    period: 'Post-Roman to Victorian',
    title: 'Site Abandonment',
    description: 'The villa was abandoned and gradually buried by soil and vegetation.',
    details: 'After the end of Roman rule, the villa fell into ruin and was gradually covered by centuries of soil accumulation.',
    findings: ['Medieval pottery sherds (scattered)', 'Victorian artifacts near surface'],
    significance: 'The site remained undisturbed for over 1,400 years.',
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
    color: 'bg-blue-600',
  },
  {
    id: 'winbolt',
    year: '1923-1924',
    period: 'Winbolt Excavations',
    title: 'First Major Excavation',
    description: 'S.E. Winbolt excavated the site on behalf of Folkestone Town Council.',
    details: 'Sussex archaeologist S.E. Winbolt led extensive excavations that exposed the foundations of a large Roman villa complex. The site became a major tourist attraction with one of the first aerial photographs of an archaeological site taken here.',
    findings: ['Complete villa ground plan', 'Multiple mosaic floors', 'Bath house', 'Hypocaust system'],
    significance: 'Made East Wear Bay one of Britain\'s most important publicly accessible Roman sites.',
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
    color: 'bg-green-600',
  },
  {
    id: 'wartime',
    year: '1940-1945',
    period: 'Second World War',
    title: 'Military Occupation',
    description: 'The site was occupied by the army who dug defensive positions.',
    details: 'The army dug slit trenches and weapon pits across the site, causing some damage to the archaeology. The site formed part of the coastal defenses against potential invasion.',
    findings: ['Slit trenches', 'Weapon pits', 'Military artifacts'],
    significance: 'Added a layer of 20th-century military history to the site.',
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
    color: 'bg-gray-600',
  },
  {
    id: 'karu',
    year: '1989',
    period: 'KARU Excavation',
    title: 'Erosion Assessment',
    description: 'Kent Archaeological Rescue Unit investigated coastal erosion impact.',
    details: 'KARU excavated part of the villa to assess erosion since 1924. They found that up to 10 metres had been lost to the sea and discovered intact Iron Age features beneath the villa.',
    findings: ['Iron Age ditches', 'Chalk floor surfaces', 'Classis Britannica tiles'],
    significance: 'Revealed the urgent threat of coastal erosion to the site.',
    color: 'bg-red-700',
  },
  {
    id: 'town-unearthed',
    year: '2010-2013',
    period: 'A Town Unearthed',
    title: 'Community Archaeology Project',
    description: 'Heritage Lottery funded project engaging the local community.',
    details: 'This project re-opened the northern part of the villa and revealed unexpectedly complex Iron Age structures beneath. Featured on BBC\'s "Digging for Britain" and won Current Archaeology\'s "Rescue Dig of the Year".',
    findings: ['Iron Age structures', 'Quern stones', 'Coins and jewelry', 'New villa rooms'],
    significance: 'Demonstrated the value of community archaeology and revealed the site\'s Iron Age importance.',
    color: 'bg-teal-600',
  },
  {
    id: 'field-school',
    year: '2015-2017',
    period: 'Field School',
    title: 'International Training Excavation',
    description: 'Three seasons of excavation training for students and volunteers.',
    details: 'The East Wear Bay Archaeological Field School investigated land north of the villa, establishing the extent of Iron Age features. An extensive quern stone production area was discovered.',
    findings: ['Quern production site', 'Multiple occupation phases', 'Bronze Age to Roman artifacts'],
    significance: 'Provided professional archaeological training while making significant discoveries.',
    color: 'bg-blue-700',
  },
  {
    id: 'mosaic2022',
    year: '2022',
    period: 'Recent Work',
    title: 'Mosaic Re-excavation',
    description: 'Community excavation focused on villa Room 40\'s mosaic floor.',
    details: 'Local volunteers and University of Kent students re-excavated Room 40 to assess the mosaic\'s condition. The floor was found to be better preserved than expected.',
    findings: ['Preserved mosaic sections', 'Stamped tile', '4th century coin', 'Painted wall plaster'],
    significance: 'Demonstrated ongoing preservation potential despite erosion threats.',
    color: 'bg-purple-700',
  },
  {
    id: 'copt-point',
    year: '2022',
    period: 'Copt Point',
    title: 'Mystery Mound Investigation',
    description: 'Exploratory trenching on a circular mound at Copt Point.',
    details: 'A circular mound enclosing a WWII bunker was investigated. The mound appears to predate the bunker and may be a prehistoric or Roman burial mound.',
    findings: ['Circular earthwork', 'WWII bunker', 'Stratified deposits'],
    significance: 'Potential discovery of a previously unknown burial mound.',
    color: 'bg-amber-700',
  },
  {
    id: 'current',
    year: '2023-2025',
    period: 'Current Phase',
    title: 'Major Excavation Programme',
    description: 'National Lottery Heritage Fund supported excavations.',
    details: 'The Trust is conducting major excavations focused on areas most at risk from coastal erosion. The 2025 Field School (July 7-18) successfully trained 24 participants and uncovered new sections of the villa.',
    findings: ['3 new villa rooms', '200+ pottery fragments', '15 coins', 'Mosaic floor sections'],
    significance: 'Racing against coastal erosion to record the site before it\'s lost.',
    color: 'bg-green-700',
  },
  {
    id: 'future',
    year: '2026 onwards',
    period: 'Future Plans',
    title: 'Continued Research & Conservation',
    description: 'Ongoing excavations and digital preservation efforts.',
    details: 'Plans include further excavations of areas at risk, comprehensive digital documentation, and expanded community engagement programs. The 2026 Field School is planned for July.',
    findings: ['To be discovered'],
    significance: 'Ensuring the site\'s heritage is preserved for future generations.',
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
      <div className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Archaeological Timeline
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Journey through 12,000 years of human history at East Wear Bay, from Ice Age hunters to modern archaeological discoveries.
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
                          <p className="text-muted-foreground mb-4">{entry.details}</p>
                          
                          {entry.findings.length > 0 && (
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
                            <h4 className="font-semibold mb-1">Historical Significance:</h4>
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