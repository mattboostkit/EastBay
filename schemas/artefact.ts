export default {
  name: 'artefact',
  title: 'Artefact',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'The first image will be the main image by default. You can mark a different image as the main image if needed.',
      of: [
        {
          type: 'image',
          description: 'Main images: 1200×800px (3:2 aspect ratio), Gallery thumbnails: 400×300px (4:3 aspect ratio)',
          options: {
            hotspot: true, // Enables better cropping control
          },
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
            {
              name: 'isMainImage',
              title: 'Main Image',
              type: 'boolean',
              description: 'Check this to override and make this image the main image',
              initialValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'modelUrl',
      title: '3D Model URL',
      type: 'url',
      description: 'Sketchfab embed URL',
    },
    {
      name: 'period',
      title: 'Historical Period',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Dating',
      type: 'string',
      description: 'e.g., "500-400 BCE" or "Late Bronze Age"',
    },
    {
      name: 'location',
      title: 'Discovery Location',
      type: 'string',
    },
    {
      name: 'geoLocation',
      title: 'Geographic Coordinates',
      type: 'object',
      fields: [
        { name: 'latitude', type: 'number', title: 'Latitude' },
        { name: 'longitude', type: 'number', title: 'Longitude' },
      ],
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g., "H: 15cm, W: 8cm, D: 6cm"',
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
    },
    {
      name: 'discoveryDate',
      title: 'Discovery Date',
      type: 'date',
    },
    {
      name: 'discoveredBy',
      title: 'Discovered By',
      type: 'string',
    },
    {
      name: 'currentLocation',
      title: 'Current Location',
      type: 'string',
      description: 'Museum or collection where the artifact is housed',
    },
    {
      name: 'inventoryNumber',
      title: 'Inventory Number',
      type: 'string',
    },
    {
      name: 'siteCode',
      title: 'Site Code',
      type: 'string',
      description: 'e.g., "EWB/FS/15"',
    },
    {
      name: 'sfNumber',
      title: 'SF Number',
      type: 'string',
      description: 'Small Finds number',
    },
    {
      name: 'contextNo',
      title: 'Context Number',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., "Worked", "Spindle whorl", "Arrowhead"',
    },
    {
      name: 'conservation',
      title: 'Conservation Status',
      type: 'string',
    },
    {
      name: 'relatedArtefacts',
      title: 'Related Artefacts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artefact' }],
        },
      ],
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'bibliography',
      title: 'Bibliography',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'featured',
      title: 'Featured Artefact',
      type: 'boolean',
      description: 'Display this artefact on the Digital Museum homepage',
      initialValue: false,
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Pottery', value: 'pottery' },
          { title: 'Tools', value: 'tools' },
          { title: 'Jewelry', value: 'jewelry' },
          { title: 'Coins', value: 'coins' },
          { title: 'Architectural', value: 'architectural' },
          // Add more categories as needed
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
};
