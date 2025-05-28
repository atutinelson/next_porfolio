import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega:{
      studioUrl: "http://127.0.0.1:3000/studio"
       
  },
  token: process.env.SANITY_READ_TOKEN,
})
