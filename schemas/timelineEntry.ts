export default {
  name: 'timelineEntry',
  title: 'Timeline Entry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Discovery', value: 'discovery' },
          { title: 'Field Work', value: 'field-work' },
          { title: 'Publication', value: 'publication' },
          { title: 'Exhibition', value: 'exhibition' },
          { title: 'Award', value: 'award' },
          { title: 'Milestone', value: 'milestone' },
        ],
      },
    },
    {
      name: 'relatedItems',
      title: 'Related Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'artifact' },
            { type: 'post' },
            { type: 'event' },
            { type: 'researchPublication' },
          ],
        },
      ],
    },
    {
      name: 'isMajor',
      title: 'Major Milestone',
      type: 'boolean',
      description: 'Mark as a major milestone',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
    },
    prepare(selection: any) {
      const { date } = selection;
      return {
        ...selection,
        subtitle: date && new Date(date).toLocaleDateString(),
      };
    },
  },
};