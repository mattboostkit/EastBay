export const researchPublicationsQuery = `*[_type == "researchPublication"] | order(publicationDate desc) {
  _id,
  title,
  slug,
  authors[]->{ name, role },
  externalAuthors,
  publicationType,
  category,
  featured,
  coverImage,
  isbn,
  abstract,
  journal,
  volume,
  issue,
  pages,
  publisher,
  publicationDate,
  doi,
  url,
  pdfFile {
    asset-> {
      _id,
      url,
      originalFilename,
      size
    }
  },
  pdfUrl,
  keywords,
  citation
}`

export const featuredPublicationQuery = `*[_type == "researchPublication" && featured == true][0] {
  _id,
  title,
  slug,
  authors[]->{ name, role },
  externalAuthors,
  publicationType,
  category,
  coverImage,
  abstract,
  journal,
  volume,
  issue,
  pages,
  publisher,
  publicationDate,
  doi,
  url,
  pdfFile {
    asset-> {
      _id,
      url,
      originalFilename,
      size
    }
  },
  pdfUrl
}`

export const publicationsByCategoryQuery = (category: string) => `*[_type == "researchPublication" && category == "${category}"] | order(publicationDate desc) {
  _id,
  title,
  slug,
  authors[]->{ name, role },
  externalAuthors,
  publicationType,
  isbn,
  abstract,
  journal,
  volume,
  issue,
  pages,
  publisher,
  publicationDate,
  doi,
  url,
  pdfFile {
    asset-> {
      _id,
      url,
      originalFilename,
      size
    }
  },
  pdfUrl,
  citation
}`
