import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The name of your website',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      description: 'Upload your site logo here',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
        }
      ]
    }),
    defineField({
      name: 'logoLight',
      title: 'Site Logo (Light Version)',
      type: 'image',
      description: 'Optional light version of logo for dark backgrounds',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
        }
      ]
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Browser tab icon (recommended: 32x32px or 16x16px)',
      options: {
        accept: 'image/png, image/x-icon, image/svg+xml',
      },
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'A short description of your website for SEO',
      rows: 3,
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for search engine optimization',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Physical Address',
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'text',
      description: 'Your organization\'s opening hours',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
});