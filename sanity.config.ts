import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { structure } from './sanity.structure';

const config = defineConfig({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  title: 'EastBay Archaeological Society',
  apiVersion: '2023-12-18',
  basePath: '/admin',
  plugins: [
    structureTool({
      structure
    }), 
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
});

export default config;
export { config };