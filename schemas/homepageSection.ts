export default {
  name: 'homepageSection',
  title: 'Homepage Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'Unique identifier for this section (e.g., "hero", "about", "featured-artifacts")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Section Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
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
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'linkText',
              title: 'Link Text',
              type: 'string',
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date',
            },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this section appears on the homepage',
      validation: (Rule: any) => Rule.min(1),
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Muted', value: 'muted' },
          { title: 'Primary', value: 'primary' },
        ],
      },
      initialValue: 'default',
    },
    {
      name: 'layout',
      title: 'Section Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Full Width', value: 'full' },
          { title: 'Two Columns', value: 'two-columns' },
          { title: 'Grid', value: 'grid' },
          { title: 'Hero', value: 'hero' },
        ],
      },
      initialValue: 'full',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sectionId',
      media: 'mainImage',
    },
  },
}
