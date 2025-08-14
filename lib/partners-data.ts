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
    logo: '/partners/nlhf-logo.svg',
    website: 'https://www.heritagefund.org.uk',
    type: 'principal',
    description: 'Using money raised by National Lottery players, The National Lottery Heritage Fund supports projects that connect people and communities with the UK\'s heritage.'
  },
  
  // Lead Partners
  {
    name: 'Canterbury Archaeological Trust',
    logo: '/partners/cat-logo.svg',
    website: 'https://www.canterburytrust.co.uk',
    type: 'lead'
  },
  {
    name: 'Folkestone Museum',
    logo: '/partners/folkestone-museum-logo.svg',
    website: 'https://folkestonemuseum.co.uk',
    type: 'lead'
  },
  {
    name: 'Folkestone Research and Archaeology Group',
    logo: '/partners/frag-logo.svg',
    website: undefined,
    type: 'lead'
  },
  {
    name: 'Dover Archaeological Group',
    logo: '/partners/dag-logo.svg',
    website: 'https://www.doverarchaeology.org.uk',
    type: 'lead'
  },
  {
    name: 'University of Kent',
    logo: '/partners/kent-uni-logo.svg',
    website: 'https://www.kent.ac.uk',
    type: 'lead'
  },
  
  // Supporters
  {
    name: 'Kent Community Foundation',
    logo: '/partners/kcf-logo.svg',
    website: 'https://www.kentcf.org.uk',
    type: 'supporter'
  },
  {
    name: 'The Lawson Trust',
    logo: '/partners/lawson-trust-logo.svg',
    website: undefined,
    type: 'supporter'
  },
  {
    name: 'The Roger De Haan Charitable Trust',
    logo: '/partners/rdh-logo.svg',
    website: 'https://rdhct.org.uk',
    type: 'supporter'
  },
  {
    name: 'Garfield Weston Foundation',
    logo: '/partners/gwf-logo.svg',
    website: 'https://garfieldweston.org',
    type: 'supporter'
  },
  {
    name: 'The Swire Charitable Trust',
    logo: '/partners/swire-logo.svg',
    website: undefined,
    type: 'supporter'
  },
  {
    name: 'Council for British Archaeology',
    logo: '/partners/cba-logo.svg',
    website: 'https://new.archaeologyuk.org',
    type: 'supporter'
  },
  {
    name: 'Association for Roman Archaeology',
    logo: '/partners/ara-logo.svg',
    website: 'https://associationromanarchaeology.org',
    type: 'supporter'
  },
  {
    name: 'Society for the Promotion of Roman Studies',
    logo: '/partners/sprs-logo.svg',
    website: 'https://www.romansociety.org',
    type: 'supporter'
  },
  {
    name: 'Friends of the Canterbury Archaeological Trust',
    logo: '/partners/fcat-logo.svg',
    website: 'https://www.canterburytrust.co.uk/fcat',
    type: 'supporter'
  },
  {
    name: 'Folkestone & Hythe District Council',
    logo: '/partners/fhdc-logo.svg',
    website: 'https://www.folkestone-hythe.gov.uk',
    type: 'supporter'
  }
]