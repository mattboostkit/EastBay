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
          { title: 'Report', value: 'report' },
          { title: 'Thesis', value: 'thesis' },
        ],
      },
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
      name: 'pdfUrl',
      title: 'PDF URL',
      type: 'url',
      description: 'Link to download the PDF',
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