export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'academia', title: 'Academia.edu', type: 'url' },
        { name: 'researchGate', title: 'ResearchGate', type: 'url' },
        { name: 'orcid', title: 'ORCID', type: 'url' },
      ],
    },
    {
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'researchPublication' }],
        },
      ],
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to order team members on the team page',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
};