import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const server = {
  sendContactEmail: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, 'Name is too short'),
      email: z.string().email('Invalid email'),
      message: z.string().min(10, 'Tell me a bit more'),
    }),
    handler: async (data) => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Valid data recieved', data)
      return { success: true, message: 'Talk soon' }
    },
  }),
}
