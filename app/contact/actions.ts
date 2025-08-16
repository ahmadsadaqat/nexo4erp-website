// app/contact/actions.ts

"use server"

import nodemailer from "nodemailer"
import { contactSchema, ContactFormData, FormState } from "./schema"

export async function submitContactForm(data: ContactFormData): Promise<FormState> {
  const result = contactSchema.safeParse(data)
  if (!result.success) {
    return { success: false, message: "Validation failed on the server. Please check your input." }
  }

  const user = process.env.ZOHO_EMAIL_USER
  const pass = process.env.ZOHO_EMAIL_APP_PASS

  if (!user || !pass) {
    console.error("Missing ZOHO_EMAIL_USER or ZOHO_EMAIL_APP_PASS env vars")
    return { success: false, message: "Email service not configured. Please try again later." }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
      port: Number(process.env.ZOHO_SMTP_PORT) || 465,
      secure: true,
      auth: { user, pass },
    })

    if (process.env.NODE_ENV !== "production") {
      try { await transporter.verify() } catch (vErr) { console.error("SMTP verify failed:", vErr) }
    }

    const mailOptions = {
      from: `Nexo4ERP Contact <${user}>`,
      to: process.env.ZOHO_EMAIL_TO || "admin@nexo4erp.com",
      subject: `New Message from ${result.data.name}`,
      replyTo: result.data.email,
      text: `Name: ${result.data.name}\nEmail: ${result.data.email}\nMessage:\n${result.data.message}`,
      html: `
        <h1 style="font-family:system-ui,Arial,sans-serif;">New Contact Form Submission</h1>
        <p style="font-family:system-ui,Arial,sans-serif;">You have received a new message from your website's contact form.</p>
        <hr style="margin:16px 0;" />
        <p><strong>Name:</strong> ${escapeHtml(result.data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(result.data.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(result.data.message).replace(/\n/g, "<br>")}</p>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    if (process.env.NODE_ENV !== "production") {
      console.log("Mail sent", { id: info.messageId, accepted: info.accepted, rejected: info.rejected })
    }

    return { success: true, message: `Thank you, ${result.data.name}! Your message has been sent.` }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, message: "Something went wrong and we couldn't send your message. Please try again." }
  }
}

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}