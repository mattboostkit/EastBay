export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      description: 'e.g., Heritage Fund',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'partnershipType',
      title: 'Partnership Type',
      type: 'string',
      description: 'e.g., Principal Funder, Academic Partner, Heritage Partner',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Partner logo (preferably PNG with transparent background)',
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'Link to partner website',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the partnership',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which partners appear on the page (lower numbers appear first)',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'partnershipType',
      media: 'logo',
    },
  },
}