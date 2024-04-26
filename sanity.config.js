import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'my_portfolio',

  projectId: 'e9praj72',
  dataset: 'production',

  bathPath: '/structure',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
