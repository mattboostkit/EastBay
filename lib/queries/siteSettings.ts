import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    logo {
      asset->,
      alt
    },
    logoLight {
      asset->,
      alt
    },
    favicon {
      asset->
    },
    description,
    keywords,
    socialMedia,
    contact,
    openingHours
  }
`;