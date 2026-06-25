"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { type ContactFormState } from "../lib/contact-schema";

const initialState: ContactFormState = {
  values: { name: "", email: "", inquiry: "freelance", message: "" },
  errors: null,
  success: false,
  serverError: null,
};

async function contactAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      signal: controller.signal,
    });

    return (await response.json()) as ContactFormState;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      return {
        ..._prevState,
        success: false,
        serverError: "Request timed out. Please try again.",
      };
    }
    return {
      ..._prevState,
      success: false,
      serverError:
        error instanceof TypeError
          ? "Unable to connect. Please check your internet connection."
          : "Something went wrong. Please try again.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(contactAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
        <div className="rounded-full bg-surface-container-high p-4">
          <CheckCircle className="w-8 h-8 text-text-primary" />
        </div>
        <h2 className="font-headline-md text-headline-md text-text-primary">
          Message sent!
        </h2>
        <p className="font-body-md text-body-md text-text-secondary max-w-sm">
          Thanks for reaching out. I'll get back to you within 48 hours.
        </p>
        <Button variant="outline" onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}>
          Send another
        </Button>
      </div>
    );
  }

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
              <option className="bg-background" value="agency">Agency Role</option>
              <option className="bg-background" value="freelance">Freelance Project</option>
              <option className="bg-background" value="hi">Just saying hi</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
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
        <p className="text-[0.8rem] font-medium text-error">{state.serverError}</p>
      )}

      <div className="pt-8">
        <Button type="submit" disabled={pending} className="w-full group">
          <span>{pending ? "Sending..." : "Send Message"}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </form>
  );
}
