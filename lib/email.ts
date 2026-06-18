import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

export const sendContactEmail = async (formData: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) => {
  try {
    const time = new Date().toLocaleString('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        time,
        message: formData.message,
      },
      PUBLIC_KEY,
    )
    return { success: true, data: response }
  } catch (error) {
    console.error('EmailJS Error Details:', error)
    return { success: false, error }
  }
}
