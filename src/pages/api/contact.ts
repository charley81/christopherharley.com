import type { APIRoute } from "astro";
import { contactSchema, inquiryLabels, type ContactFormState } from "../../lib/contact-schema";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const values = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      inquiry: (formData.get("inquiry") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    // Server-side validation
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      return new Response(
        JSON.stringify({
          values,
          errors: result.error.flatten().fieldErrors,
          success: false,
          serverError: null,
        } satisfies ContactFormState),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }

    // Process the submission
    console.log("Contact form submission:", {
      name: values.name,
      email: values.email,
      inquiry: inquiryLabels[values.inquiry] || values.inquiry,
      message: values.message,
    });

    // TODO: Send email notification
    // Example with Resend:
    // import { Resend } from "resend";
    // const resend = new Resend(import.meta.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@christopherharley.com",
    //   to: "hello@christopherharley.com",
    //   subject: `Portfolio Contact: ${inquiryLabels[values.inquiry]} from ${values.name}`,
    //   text: `From: ${values.name} (${values.email})\n\n${values.message}`,
    // });

    return new Response(
      JSON.stringify({
        values: { name: "", email: "", inquiry: "freelance", message: "" },
        errors: null,
        success: true,
        serverError: null,
      } satisfies ContactFormState),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        values: { name: "", email: "", inquiry: "freelance", message: "" },
        errors: null,
        success: false,
        serverError: "Something went wrong. Please try again.",
      } satisfies ContactFormState),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
