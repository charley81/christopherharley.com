import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters long')
    .max(40, 'Name must not exceed 40 characters.'),
  email: z
    .email({ message: 'Please enter a valid email' })
    .trim()
    .toLowerCase()
    .min(1, 'Email is required')
    .max(100, 'Email is too long'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters long')
    .max(5000, 'Message must not exceed 5000 characters'),
})
