import { defineType, defineField } from 'sanity'
import { Users } from 'lucide-react'

export default defineType({
  name: 'volunteerOpportunity',
  title: 'Volunteer Opportunity',
  type: 'document',
  icon: Users,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., "People skills", "Digital skills", "Age 18+"'
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'string',
      description: 'e.g., "Monday-Saturday", "Flexible schedule", "Year-round"'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Canterbury", "Folkestone", "On-site", "Remote"'
    }),
    defineField({
      name: 'season',
      title: 'Season/Dates',
      type: 'string',
      description: 'e.g., "May - September", "Dates to be announced", "Year-round"'
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Users', value: 'users' },
          { title: 'Heart', value: 'heart' },
          { title: 'Globe', value: 'globe' },
          { title: 'Calendar', value: 'calendar' },
          { title: 'Award', value: 'award' },
          { title: 'Code', value: 'code' },
          { title: 'Database', value: 'database' }
        ]
      },
      description: 'Icon to display with the opportunity'
    }),
    defineField({
      name: 'trainingProvided',
      title: 'Training Provided',
      type: 'boolean',
      description: 'Is training provided for this role?',
      initialValue: true
    }),
    defineField({
      name: 'dbsRequired',
      title: 'DBS Check Required',
      type: 'boolean',
      description: 'Is a DBS check required for this role?',
      initialValue: false
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this opportunity (lower numbers appear first)'
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Is this opportunity currently available?',
      initialValue: true
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'email',
      description: 'Email address for volunteers to contact (defaults to get_involved@canterburytrust.ac.uk)'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      active: 'isActive'
    },
    prepare({ title, subtitle, active }) {
      return {
        title,
        subtitle: `${subtitle || 'No location'} ${active ? '' : '(Inactive)'}`
      }
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }]
    },
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ]
})