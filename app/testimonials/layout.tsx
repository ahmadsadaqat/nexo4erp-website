import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'ERPNext & Odoo Client Testimonials | Nexo4ERP',
  description:
    'Read client testimonials and success stories from businesses that implemented ERPNext and Odoo with Nexo4ERP.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/testimonials',
  },
  openGraph: {
    title: 'ERPNext & Odoo Client Testimonials | Nexo4ERP',
    description:
      'Read client testimonials and success stories from businesses that implemented ERPNext and Odoo with Nexo4ERP.',
    url: 'https://www.nexo4erp.com/testimonials',
  },
}

export default function TestimonialsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
