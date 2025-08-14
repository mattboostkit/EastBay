export interface Partner {
  name: string
  logo?: string
  logoUrl?: string
  website?: string
  type: 'principal' | 'lead' | 'supporter'
  description?: string
}

export const partnersData: Partner[] = [
  // Principal Funder
  {
    name: 'National Lottery Heritage Fund',
    logo: undefined,
    website: 'https://www.heritagefund.org.uk',
    type: 'principal',
    description: 'Using money raised by National Lottery players, The National Lottery Heritage Fund supports projects that connect people and communities with the UK\'s heritage.'
  },
  
  // Lead Partners
  {
    name: 'Canterbury Archaeological Trust',
    logo: '/partners/cat-logo.png',
    website: 'https://www.canterburytrust.co.uk',
    type: 'lead'
  },
  {
    name: 'Folkestone Museum',
    logo: undefined,
    website: 'https://folkestonemuseum.co.uk',
    type: 'lead'
  },
  {
    name: 'Folkestone Research and Archaeology Group',
    logo: undefined,
    website: undefined,
    type: 'lead'
  },
  {
    name: 'Dover Archaeological Group',
    logo: undefined,
    website: 'https://www.doverarchaeology.org.uk',
    type: 'lead'
  },
  {
    name: 'University of Kent',
    logo: undefined,
    website: 'https://www.kent.ac.uk',
    type: 'lead'
  },
  
  // Supporters
  {
    name: 'Kent Community Foundation',
    logo: undefined,
    website: 'https://www.kentcf.org.uk',
    type: 'supporter'
  },
  {
    name: 'The Lawson Trust',
    logo: undefined,
    website: undefined,
    type: 'supporter'
  },
  {
    name: 'The Roger De Haan Charitable Trust',
    logo: undefined,
    website: 'https://rdhct.org.uk',
    type: 'supporter'
  },
  {
    name: 'Garfield Weston Foundation',
    logo: undefined,
    website: 'https://garfieldweston.org',
    type: 'supporter'
  },
  {
    name: 'The Swire Charitable Trust',
    logo: undefined,
    website: undefined,
    type: 'supporter'
  },
  {
    name: 'Council for British Archaeology',
    logo: undefined,
    website: 'https://new.archaeologyuk.org',
    type: 'supporter'
  },
  {
    name: 'Association for Roman Archaeology',
    logo: undefined,
    website: 'https://associationromanarchaeology.org',
    type: 'supporter'
  },
  {
    name: 'Society for the Promotion of Roman Studies',
    logo: undefined,
    website: 'https://www.romansociety.org',
    type: 'supporter'
  },
  {
    name: 'Friends of the Canterbury Archaeological Trust',
    logo: undefined,
    website: 'https://www.canterburytrust.co.uk/fcat',
    type: 'supporter'
  },
  {
    name: 'Folkestone & Hythe District Council',
    logo: undefined,
    website: 'https://www.folkestone-hythe.gov.uk',
    type: 'supporter'
  }
]