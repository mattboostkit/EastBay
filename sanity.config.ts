import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { structure } from './sanity.structure';

const config = defineConfig({
  projectId: 'ce9tlzu0',
  dataset: 'production',
  title: 'East Wear Bay Archaeological Project',
  apiVersion: '2023-12-18',
  basePath: '/studio',
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