import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email'),
  inquiry: z.enum(['agency', 'freelance', 'hi'], {
    required_error: 'Please select a subject',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message is too long'),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export type ContactFormState = {
  values: ContactFormValues
  errors: null | Partial<Record<keyof ContactFormValues, string[]>>
  success: boolean
  serverError: string | null
}

export const inquiryLabels: Record<string, string> = {
  agency: 'Agency Role',
  freelance: 'Freelance Project',
  hi: 'Just saying hi',
}
