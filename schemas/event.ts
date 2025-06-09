<<<<<<< HEAD
export default {
  name: 'event',
  title: 'Event',
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
      options: {
        hotspot: true,
      },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Conference', value: 'conference' },
          { title: 'Exhibition', value: 'exhibition' },
          { title: 'Lecture', value: 'lecture' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Field Trip', value: 'field-trip' },
          { title: 'Webinar', value: 'webinar' },
        ],
      },
    },
    {
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    },
    {
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'affiliation', type: 'string', title: 'Affiliation' },
            { name: 'bio', type: 'text', title: 'Bio' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
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
      name: 'relatedEvents',
      title: 'Related Events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'event' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'startDate',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { date } = selection;
      return {
        ...selection,
        subtitle: date && new Date(date).toLocaleDateString(),
      };
    },
  },
=======
export default {
  name: 'event',
  title: 'Event',
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
      options: {
        hotspot: true,
      },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Conference', value: 'conference' },
          { title: 'Exhibition', value: 'exhibition' },
          { title: 'Lecture', value: 'lecture' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Field Trip', value: 'field-trip' },
          { title: 'Webinar', value: 'webinar' },
        ],
      },
    },
    {
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    },
    {
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'affiliation', type: 'string', title: 'Affiliation' },
            { name: 'bio', type: 'text', title: 'Bio' },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
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
      name: 'relatedEvents',
      title: 'Related Events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'event' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'startDate',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { date } = selection;
      return {
        ...selection,
        subtitle: date && new Date(date).toLocaleDateString(),
      };
    },
  },
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
};