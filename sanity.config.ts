import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'white',
  
  projectId: 'crx6t0i5',
  dataset:   'production'

  plugins: [structureTool(), visionTool(), deskTool()],

  schema: {
    types: schemaTypes,
  },
})
