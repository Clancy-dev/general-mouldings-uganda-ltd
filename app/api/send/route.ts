import { EmailTemplate } from "@/components/email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Parse the request body to get form data
    const { name, email, subject, message } = await request.json()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["sekhar@gml.co.ug", "saphalgc@gmail.com","clancyro1789@gmail.com"],
      subject: `New Contact Form: ${subject}`,
      react: EmailTemplate({
        name,
        email,
        subject,
        message,
      }),
    })

    if (error) {
      console.error("Error sending email:", error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    console.error("Error in API route:", error)
    return Response.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
}

