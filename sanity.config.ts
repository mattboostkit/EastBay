import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export const config = defineConfig({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  title: 'EastBay',
  apiVersion: '2023-12-18',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});