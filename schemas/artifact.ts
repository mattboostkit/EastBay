<<<<<<< HEAD
export default {
  name: 'artifact',
  title: 'Artifact',
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
      of: [
        {
          type: 'image',
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
              description: 'Set as the main image for this artifact',
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
      name: 'conservation',
      title: 'Conservation Status',
      type: 'string',
    },
    {
      name: 'relatedArtifacts',
      title: 'Related Artifacts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artifact' }],
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
      title: 'Featured Artifact',
      type: 'boolean',
      description: 'Display this artifact on the Digital Museum homepage',
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
=======
export default {
  name: 'artifact',
  title: 'Artifact',
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
      of: [
        {
          type: 'image',
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
              description: 'Set as the main image for this artifact',
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
      name: 'conservation',
      title: 'Conservation Status',
      type: 'string',
    },
    {
      name: 'relatedArtifacts',
      title: 'Related Artifacts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artifact' }],
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
      title: 'Featured Artifact',
      type: 'boolean',
      description: 'Display this artifact on the Digital Museum homepage',
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
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
