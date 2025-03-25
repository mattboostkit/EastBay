import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { structure } from './sanity.structure';

export const config = defineConfig({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  title: 'EastBay Archaeological Society',
  apiVersion: '2023-12-18',
  basePath: '/admin',
  plugins: [
    deskTool({
      structure
    }), 
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
});
