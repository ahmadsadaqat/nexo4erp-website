import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      (phone !== undefined && typeof phone !== 'string') ||
      typeof message !== 'string' ||
      !name.trim() ||
      !message.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return Response.json(
        { error: 'Please provide a valid name, email, phone, and message.' },
        { status: 400 },
      )
    }

    const user = process.env.ZOHO_EMAIL_USER
    const pass = process.env.ZOHO_EMAIL_APP_PASS

    if (!user || !pass) {
      console.error('Missing ZOHO_EMAIL_USER or ZOHO_EMAIL_APP_PASS env vars')
      return Response.json(
        { error: 'Email service not configured. Please try again later.' },
        { status: 500 },
      )
    }

    const time = new Date().toLocaleString('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com',
      port: Number(process.env.ZOHO_SMTP_PORT) || 465,
      secure: true,
      auth: { user, pass },
    })

    if (process.env.NODE_ENV !== 'production') {
      try {
        await transporter.verify()
      } catch (verifyError) {
        console.error('SMTP verify failed:', verifyError)
      }
    }

    const mailOptions = {
      from: `Nexo4ERP Contact <${user}>`,
      to: process.env.ZOHO_EMAIL_TO || 'admin@nexo4erp.com',
      subject: `New Message from ${name}`,
      replyTo: email,
      text: [
        'New Contact Form Submission',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Received: ${time}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="margin:0; padding:0; background:#f6f7fb; font-family:Arial,Helvetica,sans-serif;">
          <div style="max-width:640px; margin:0 auto; padding:24px;">
            <div style="background:#ffffff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden;">
              <div style="background:#0f172a; color:#ffffff; padding:24px 28px;">
                <div style="font-size:14px; text-transform:uppercase; letter-spacing:1px; opacity:0.8;">New Contact Submission</div>
                <div style="font-size:26px; font-weight:700; margin-top:8px;">${escapeHtml(name)}</div>
              </div>

              <div style="padding:28px;">
                <p style="margin:0 0 20px; color:#334155; font-size:15px; line-height:1.6;">
                  A new message has been received from your website contact form.
                </p>

                <table role="presentation" style="width:100%; border-collapse:collapse; margin-bottom:24px;">
                  <tr>
                    <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; width:160px; color:#64748b; font-size:13px;">Name</td>
                    <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#0f172a; font-size:15px; font-weight:600;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; width:160px; color:#64748b; font-size:13px;">Email</td>
                    <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#0f172a; font-size:15px;">
                      <a href="mailto:${escapeHtml(email)}" style="color:#2563eb; text-decoration:none;">${escapeHtml(email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; width:160px; color:#64748b; font-size:13px;">Phone</td>
                    <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#0f172a; font-size:15px;">${escapeHtml(phone || 'Not provided')}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; width:160px; color:#64748b; font-size:13px;">Received</td>
                    <td style="padding:12px 0; border-bottom:1px solid #e5e7eb; color:#0f172a; font-size:15px;">${escapeHtml(time)}</td>
                  </tr>
                </table>

                <div style="margin:0 0 10px; color:#64748b; font-size:13px; text-transform:uppercase; letter-spacing:0.8px;">Message</div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px 18px; color:#0f172a; font-size:15px; line-height:1.7; white-space:pre-line;">
                  ${escapeHtml(message)}
                </div>
              </div>
            </div>

            <div style="text-align:center; color:#94a3b8; font-size:12px; padding:14px 0 0;">
              Sent from the Nexo4ERP contact form
            </div>
          </div>
        </div>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    if (process.env.NODE_ENV !== 'production') {
      console.log('[contact] Mail sent', {
        id: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
      })
    }

    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
