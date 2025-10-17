export default {
  name: 'dementiaResource',
  title: 'Dementia Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Activity Guide', value: 'activity-guide' },
          { title: 'Object Handling Guide', value: 'object-handling-guide' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of this resource',
    },
    {
      name: 'pdfFile',
      title: 'Resource File',
      type: 'file',
      description: 'Upload PDF, Word document (.docx), or PowerPoint (.pptx)',
      options: {
        accept: '.pdf,.docx,.pptx',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this resource appears (lower numbers appear first)',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'title',
      resourceType: 'resourceType',
    },
    prepare(selection: any) {
      const { title, resourceType } = selection;
      return {
        title,
        subtitle: resourceType ? resourceType.replace('-', ' ').toUpperCase() : 'Resource',
      };
    },
  },
};
