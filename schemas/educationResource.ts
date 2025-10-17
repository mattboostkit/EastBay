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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Downloadable Lesson Plans', value: 'lesson-plans' },
          { title: 'Other Learning Resources', value: 'other-resources' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
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
          { title: 'Sensory Story', value: 'sensory-story' },
          { title: 'Workshop Guide', value: 'workshop-guide' },
          { title: 'Gallery', value: 'gallery' },
        ],
      },
    },
    {
      name: 'keyStages',
      title: 'Key Stages',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'KS1', value: 'ks1' },
          { title: 'KS2', value: 'ks2' },
          { title: 'KS3', value: 'ks3' },
          { title: 'KS4', value: 'ks4' },
          { title: 'KS5', value: 'ks5' },
        ],
      },
    },
    {
      name: 'ageGroup',
      title: 'Age Group (Legacy)',
      type: 'string',
      description: 'Use Key Stages field above instead',
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
          { title: 'Art and Design', value: 'art-design' },
          { title: 'Citizenship', value: 'citizenship' },
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
      name: 'comingSoon',
      title: 'Coming Soon',
      type: 'boolean',
      description: 'Check this if the resource is not yet available',
      initialValue: false,
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Link to external resource (e.g., Canterbury Trust)',
    },
    {
      name: 'resourceFiles',
      title: 'Resource Files',
      type: 'array',
      description: 'Upload resource files (PDFs, documents, etc.)',
      of: [
        {
          type: 'file',
          options: {
            accept: '.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip',
          },
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'File Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'File Description',
            },
          ],
        },
      ],
    },
    {
      name: 'fileUrl',
      title: 'File URL (Legacy)',
      type: 'url',
      description: 'Use Resource Files field above instead',
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'URL to embedded video (if applicable)',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      description: 'Image gallery (for Digital Time Capsule entries, etc.)',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
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
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
          ],
        },
      ],
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