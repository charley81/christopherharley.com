import { z } from 'zod'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(100, { message: 'Name is too long' }),
  email: z
    .string()
    .refine((v) => emailRegex.test(v), {
      message: 'Please enter a valid email',
    }),
  inquiry: z.enum(['agency', 'freelance', 'hi'], {
    error: 'Please select a subject',
  }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(5000, { message: 'Message is too long' }),
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

export function narrowInquiry(
  value: string | undefined,
): 'agency' | 'freelance' | 'hi' {
  if (value === 'agency' || value === 'freelance' || value === 'hi') {
    return value
  }
  return 'hi'
}

/**
 * Parse Zod 4 errors into a flat field-errors map.
 */
export function parseZodErrors(
  error: z.ZodError<ContactFormValues>,
): Partial<Record<keyof ContactFormValues, string[]>> {
  const fieldErrors: Partial<Record<keyof ContactFormValues, string[]>> = {}
  for (const issue of error.issues) {
    const field = issue.path[0] as keyof ContactFormValues
    if (!fieldErrors[field]) {
      fieldErrors[field] = []
    }
    fieldErrors[field]!.push(issue.message)
  }
  return fieldErrors
}
