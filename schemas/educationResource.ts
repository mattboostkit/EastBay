export default {
  name: 'educationResource',
  title: 'Educational Resource',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Recommended dimensions: 800×600px (4:3 aspect ratio)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Lesson Plan', value: 'lesson-plan' },
          { title: 'Activity', value: 'activity' },
          { title: 'Video', value: 'video' },
          { title: 'Guide', value: 'guide' },
          { title: 'Worksheet', value: 'worksheet' },
          { title: 'Presentation', value: 'presentation' },
        ],
      },
    },
    {
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      options: {
        list: [
          { title: 'Primary School (5-11)', value: 'elementary' },
          { title: 'Secondary School (12-16)', value: 'middle-school' },
          { title: 'Sixth Form (17-18)', value: 'high-school' },
          { title: 'Undergraduate', value: 'undergraduate' },
          { title: 'Postgraduate', value: 'graduate' },
          { title: 'Adult/Continuing Education', value: 'adult' },
        ],
      },
    },
    {
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Archaeology', value: 'archaeology' },
          { title: 'History', value: 'history' },
          { title: 'Anthropology', value: 'anthropology' },
          { title: 'Art History', value: 'art-history' },
          { title: 'Science', value: 'science' },
          { title: 'Technology', value: 'technology' },
        ],
      },
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "45 minutes", "2 hours"',
    },
    {
      name: 'fileUrl',
      title: 'File URL',
      type: 'url',
      description: 'URL to downloadable resource (if applicable)',
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'URL to embedded video (if applicable)',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          description: 'Inline images - Recommended dimensions: 800×600px (4:3 aspect ratio)',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    },
    {
      name: 'relatedResources',
      title: 'Related Resources',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'educationResource' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};