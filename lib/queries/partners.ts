import { groq } from 'next-sanity';

export const partnersQuery = groq`
  *[_type == "partner"] | order(order asc, name asc) {
    _id,
    name,
    partnershipType,
    logo {
      asset->,
      alt
    },
    website,
    description,
    order
  }
`;