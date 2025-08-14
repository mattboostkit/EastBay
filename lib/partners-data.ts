export interface Partner {
  name: string
  logo?: string
  website?: string
  type: 'principal' | 'lead' | 'supporter'
  description?: string
}

export const partnersData: Partner[] = [
  // Principal Funder
  {
    name: 'National Lottery Heritage Fund',
    logo: 'https://www.heritagefund.org.uk/sites/default/files/NLHF_Logo_English_Landscape_Full_Colour_RGB%20copy%20%281%29.svg',
    website: 'https://www.heritagefund.org.uk',
    type: 'principal',
    description: 'Using money raised by National Lottery players, The National Lottery Heritage Fund supports projects that connect people and communities with the UK\'s heritage.'
  },
  
  // Lead Partners
  {
    name: 'Canterbury Archaeological Trust',
    logo: 'https://www.canterburytrust.co.uk/wp-content/uploads/2023/09/CAT-Logo-2023.png',
    website: 'https://www.canterburytrust.co.uk',
    type: 'lead'
  },
  {
    name: 'Folkestone Museum',
    logo: 'https://www.folkestonemuseum.co.uk/wp-content/uploads/2023/06/folkestone-museum-logo.png',
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
    logo: 'https://www.kent.ac.uk/brand/assets/logos/kent-logo.svg',
    website: 'https://www.kent.ac.uk',
    type: 'lead'
  },
  
  // Supporters
  {
    name: 'Kent Community Foundation',
    logo: 'https://kentcf.org.uk/wp-content/uploads/2023/04/KCF-Logo.svg',
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
    logo: 'https://garfieldweston.org/wp-content/uploads/2023/01/GWF-Logo.svg',
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
    logo: 'https://new.archaeologyuk.org/wp-content/uploads/2023/03/CBA-Logo.svg',
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
    logo: 'https://www.folkestone-hythe.gov.uk/media/3843/FHDC-Logo/image',
    website: 'https://www.folkestone-hythe.gov.uk',
    type: 'supporter'
  }
]