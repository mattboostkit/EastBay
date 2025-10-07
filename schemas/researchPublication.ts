export default {
  name: 'researchPublication',
  title: 'Research Publication',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
    },
    {
      name: 'externalAuthors',
      title: 'External Authors',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Authors who are not part of the team',
    },
    {
      name: 'publicationType',
      title: 'Publication Type',
      type: 'string',
      options: {
        list: [
          { title: 'Journal Article', value: 'journal-article' },
          { title: 'Book', value: 'book' },
          { title: 'Book Chapter', value: 'book-chapter' },
          { title: 'Conference Paper', value: 'conference-paper' },
          { title: 'Interim Report', value: 'interim-report' },
          { title: 'Management Plan', value: 'management-plan' },
          { title: 'Research Paper', value: 'research-paper' },
          { title: 'Report', value: 'report' },
          { title: 'Thesis', value: 'thesis' },
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Featured Publication', value: 'featured' },
          { title: 'Grey Literature Reports', value: 'grey-literature' },
          { title: 'Publications', value: 'publications' },
        ],
      },
      description: 'Determines which section this appears in on the research page',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display as the main featured publication',
      initialValue: false,
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Cover image or thumbnail for the publication',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isbn',
      title: 'ISBN',
      type: 'string',
      description: 'For books',
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
    },
    {
      name: 'journal',
      title: 'Journal',
      type: 'string',
      description: 'Name of the journal (if applicable)',
    },
    {
      name: 'volume',
      title: 'Volume',
      type: 'string',
    },
    {
      name: 'issue',
      title: 'Issue',
      type: 'string',
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'string',
      description: 'e.g., "123-145"',
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
    },
    {
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
    },
    {
      name: 'doi',
      title: 'DOI',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Link to the publication',
    },
    {
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      description: 'Upload the PDF file here',
      options: {
        accept: '.pdf',
      },
    },
    {
      name: 'pdfUrl',
      title: 'External PDF URL',
      type: 'url',
      description: 'Or provide an external link to the PDF (if not uploading directly)',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'citation',
      title: 'Citation',
      type: 'text',
      description: 'Full citation in a standard format',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publicationDate',
    },
    prepare(selection: any) {
      const { date } = selection;
      return {
        ...selection,
        subtitle: date && new Date(date).getFullYear(),
      };
    },
  },
};