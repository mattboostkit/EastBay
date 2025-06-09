<<<<<<< HEAD
export default {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tier',
      title: 'Sponsorship Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Platinum', value: 'platinum' },
          { title: 'Gold', value: 'gold' },
          { title: 'Silver', value: 'silver' },
          { title: 'Bronze', value: 'bronze' },
          { title: 'Partner', value: 'partner' },
        ],
      },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave blank if ongoing',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as a featured sponsor',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to order sponsors on the page',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tier',
      media: 'logo',
    },
  },
=======
export default {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tier',
      title: 'Sponsorship Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Platinum', value: 'platinum' },
          { title: 'Gold', value: 'gold' },
          { title: 'Silver', value: 'silver' },
          { title: 'Bronze', value: 'bronze' },
          { title: 'Partner', value: 'partner' },
        ],
      },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave blank if ongoing',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as a featured sponsor',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to order sponsors on the page',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tier',
      media: 'logo',
    },
  },
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
};