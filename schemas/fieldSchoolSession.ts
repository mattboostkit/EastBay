export default {
  name: 'fieldSchoolSession',
  title: 'Field School Session',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Session Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g., "Archaeology Field School", "Community Weekend Programme"',
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
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(2024).max(2030),
      description: 'Year of the field school session',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g., "For university students and adult learners"',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      description: 'Full description of what this field school session offers',
    },
    {
      name: 'dates',
      title: 'Dates',
      type: 'string',
      description: 'e.g., "July 5 - August 2, 2026" or "Dates TBA"',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'Actual start date (optional if dates are TBA)',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Actual end date (optional if dates are TBA)',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g., "2 weeks, full time" or "Weekends only"',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g., "East Wear Bay, Folkestone"',
    },
    {
      name: 'participantLimit',
      title: 'Participant Limit',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(100),
      description: 'Maximum number of participants',
    },
    {
      name: 'registrationStatus',
      title: 'Registration Status',
      type: 'string',
      options: {
        list: [
          { title: 'Not Yet Open', value: 'not-open' },
          { title: 'Open', value: 'open' },
          { title: 'Closed', value: 'closed' },
          { title: 'Full', value: 'full' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'registrationOpenDate',
      title: 'Registration Opens Date',
      type: 'string',
      description: 'When registration opens, e.g., "December 2025"',
    },
    {
      name: 'registrationButtonText',
      title: 'Registration Button Text',
      type: 'string',
      description: 'Text for the registration button, e.g., "Applications Closed" or "Registration Opens Dec 2025"',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Show this session on the field school page',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which sessions appear (lower numbers appear first)',
    },
    {
      name: 'additionalInfo',
      title: 'Additional Information',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule: any) => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
                  }
                ]
              }
            ]
          }
        }
      ],
      description: 'Any additional rich text information about the session',
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      status: 'registrationStatus',
      active: 'isActive',
    },
    prepare(selection: any) {
      const { title, year, status, active } = selection;
      const statusLabels: any = {
        'not-open': '⏰ Not Yet Open',
        'open': '✅ Open',
        'closed': '❌ Closed',
        'full': '🔒 Full',
      };
      return {
        title: `${title} (${year})`,
        subtitle: `${statusLabels[status] || status} ${active ? '• Active' : '• Inactive'}`,
      };
    },
  },
};