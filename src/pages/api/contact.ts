import type { APIRoute } from 'astro'
import {
  contactSchema,
  inquiryLabels,
  narrowInquiry,
  parseZodErrors,
  type ContactFormState,
} from '../../lib/contact-schema'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData()

    const rawValues = {
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      inquiry: (formData.get('inquiry') as string) || '',
      message: (formData.get('message') as string) || '',
    }

    const values = {
      name: rawValues.name,
      email: rawValues.email,
      inquiry: narrowInquiry(rawValues.inquiry),
      message: rawValues.message,
    }

    const result = contactSchema.safeParse(values)
    if (!result.success) {
      return new Response(
        JSON.stringify({
          values: {
            name: values.name,
            email: values.email,
            inquiry: values.inquiry,
            message: values.message,
          },
          errors: parseZodErrors(result.error),
          success: false,
          serverError: null,
        } satisfies ContactFormState),
        { status: 422, headers: { 'Content-Type': 'application/json' } },
      )
    }

    console.log('Contact form submission:', {
      name: result.data.name,
      email: result.data.email,
      inquiry: inquiryLabels[result.data.inquiry],
      message: result.data.message,
    })

    // TODO: Send email notification
    // Example with Resend:
    // import { Resend } from "resend";
    // const resend = new Resend(import.meta.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@christopherharley.com",
    //   to: "hello@christopherharley.com",
    //   subject: `Portfolio Contact: ${inquiryLabels[result.data.inquiry]} from ${result.data.name}`,
    //   text: `From: ${result.data.name} (${result.data.email})\n\n${result.data.message}`,
    // });

    return new Response(
      JSON.stringify({
        values: { name: '', email: '', inquiry: 'freelance', message: '' },
        errors: null,
        success: true,
        serverError: null,
      } satisfies ContactFormState),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({
        values: { name: '', email: '', inquiry: 'freelance', message: '' },
        errors: null,
        success: false,
        serverError: 'Something went wrong. Please try again.',
      } satisfies ContactFormState),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}
