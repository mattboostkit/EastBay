export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Recommended dimensions: 96×96px (1:1 aspect ratio, square)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
      description: 'Rating from 1 to 5',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as a featured testimonial',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to order testimonials on the page',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'organization',
      media: 'image',
    },
  },
};