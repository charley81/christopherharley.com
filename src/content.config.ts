import { defineCollection } from 'astro:content'
import { file } from 'astro/loaders'
import { z } from 'astro/zod'

const projects = defineCollection({
  loader: file('./src/data/projects.json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      description: z.string(),
      tags: z.array(z.string()),
      projectUrl: z.string().url(),
    }),
})

export const collections = { projects }
