'use client'

import { useActionState, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { ArrowRight } from 'lucide-react'

import { Button } from './ui/button'
import { Field, FieldGroup, FieldLabel, FieldError } from './ui/field'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
  contactSchema,
  parseZodErrors,
  type ContactFormValues,
} from '../lib/contact-schema'

type FormState = {
  values: ContactFormValues
  errors: null | Partial<Record<keyof ContactFormValues, string[]>>
  success: boolean
  serverError: string | null
}

const initialState: FormState = {
  values: { name: '', email: '', inquiry: 'freelance', message: '' },
  errors: null,
  success: false,
  serverError: null,
}

const inquiryLabels: Record<string, string> = {
  agency: 'Agency Role',
  freelance: 'Freelance Project',
  hi: 'Just saying hi',
}

async function netlifyAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const values = {
    name: (formData.get('name') as string) || '',
    email: (formData.get('email') as string) || '',
    inquiry: (formData.get('inquiry') as string) || 'freelance',
    message: (formData.get('message') as string) || '',
  } as ContactFormValues

  // Validate on the client before sending to Netlify
  const result = contactSchema.safeParse(values)
  if (!result.success) {
    return {
      values,
      errors: parseZodErrors(result.error),
      success: false,
      serverError: null,
    }
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 15000)

  try {
    // Submit directly to Netlify Forms
    const body = new URLSearchParams()
    body.append('form-name', 'contact')
    body.append('name', result.data.name)
    body.append('email', result.data.email)
    body.append('inquiry', inquiryLabels[result.data.inquiry])
    body.append('message', result.data.message)

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error('Something went wrong. Please try again.')
    }

    return {
      values: { name: '', email: '', inquiry: 'freelance', message: '' },
      errors: null,
      success: true,
      serverError: null,
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return {
        ...prevState,
        success: false,
        serverError: 'Request timed out. Please try again.',
      }
    }
    return {
      ...prevState,
      errors: null,
      success: false,
      serverError:
        error instanceof TypeError
          ? 'Unable to connect. Please check your internet connection.'
          : error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
    }
  } finally {
    clearTimeout(timeoutId)
  }
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    netlifyAction,
    initialState,
  )
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      toast('Message sent!', {
        description: 'Thanks for reaching out. I typically respond within 48 hours.',
        icon: (
          <div className="rounded-full bg-text-primary p-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-surface)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        ),
      })
    }
  }, [state.success])

  return (
    <form ref={formRef} action={formAction} className="space-y-8" noValidate>
      <input type="hidden" name="form-name" value="contact" />

      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Field data-invalid={!!state.errors?.name?.length}>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              name="name"
              defaultValue={state.values.name}
              disabled={pending}
              aria-invalid={!!state.errors?.name?.length}
              placeholder="Jane Doe"
            />
            {state.errors?.name && (
              <FieldError>{state.errors.name[0]}</FieldError>
            )}
          </Field>

          <Field data-invalid={!!state.errors?.email?.length}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={state.values.email}
              disabled={pending}
              aria-invalid={!!state.errors?.email?.length}
              placeholder="jane@example.com"
            />
            {state.errors?.email && (
              <FieldError>{state.errors.email[0]}</FieldError>
            )}
          </Field>
        </div>

        <Field data-invalid={!!state.errors?.inquiry?.length}>
          <FieldLabel htmlFor="inquiry">Subject</FieldLabel>
          <div className="relative">
            <select
              id="inquiry"
              name="inquiry"
              defaultValue={state.values.inquiry}
              disabled={pending}
              aria-invalid={!!state.errors?.inquiry?.length}
              className="w-full bg-transparent border-0 border-b border-border-muted focus:border-primary focus:ring-0 focus:outline-none px-0 py-3 font-body-md text-body-md text-text-primary transition-colors duration-300 appearance-none cursor-pointer rounded-none"
            >
              <option className="bg-background" value="agency">
                Agency Role
              </option>
              <option className="bg-background" value="freelance">
                Freelance Project
              </option>
              <option className="bg-background" value="hi">
                Just saying hi
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
              <span className="material-symbols-outlined text-[20px]">
                expand_more
              </span>
            </div>
          </div>
          {state.errors?.inquiry && (
            <FieldError>{state.errors.inquiry[0]}</FieldError>
          )}
        </Field>

        <Field data-invalid={!!state.errors?.message?.length}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            defaultValue={state.values.message}
            disabled={pending}
            aria-invalid={!!state.errors?.message?.length}
            placeholder="Tell me about your project..."
            rows={5}
          />
          {state.errors?.message && (
            <FieldError>{state.errors.message[0]}</FieldError>
          )}
        </Field>
      </FieldGroup>

      {state.serverError && (
        <p className="text-label-mono font-medium text-error">
          {state.serverError}
        </p>
      )}

      <div className="pt-8">
        <Button type="submit" disabled={pending} className="w-full group">
          <span>{pending ? 'Sending...' : 'Send Message'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </form>
  )
}
