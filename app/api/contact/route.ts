import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic"; // ensure not prerendered

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name = "", email = "", message = "" } = body || {};

    const user = process.env.ZOHO_EMAIL_USER;
    const pass = process.env.ZOHO_EMAIL_APP_PASS;
    const to = process.env.ZOHO_EMAIL_TO || "info@nexo4erp.com";

    if (!user || !pass) {
      console.error("Zoho SMTP env vars missing");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
      port: Number(process.env.ZOHO_SMTP_PORT) || 465,
      secure: true,
      auth: { user, pass },
    });

    const mailOptions = {
      from: `Nexo4ERP Website <${user}>`,
      to,
      replyTo: email || undefined,
      subject: `New Contact Form Submission from ${name || "Unknown"}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(
          /\n/g,
          "<br>"
        )}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, id: info.messageId });
  } catch (error) {
    console.error("/api/contact error", error);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}