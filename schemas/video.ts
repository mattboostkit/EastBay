export default {
    name: 'video',
    title: 'Video',
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
        name: 'videoFile',
        title: 'Video File',
        type: 'file',
        options: {
          accept: 'video/*'
        },
        description: 'Upload video directly (recommended for shorter clips)',
      },
      {
        name: 'externalVideo',
        title: 'External Video URL',
        type: 'url',
        description: 'URL to YouTube, Vimeo, or other video hosting platforms',
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
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
        ],
      },
      {
        name: 'duration',
        title: 'Duration',
        type: 'string',
        description: 'Duration of the video (e.g., "2:30")',
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
      },
      {
        name: 'relatedContent',
        title: 'Related Content',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              { type: 'artifact' },
              { type: 'post' },
              { type: 'event' },
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'thumbnail',
      },
    },
  };