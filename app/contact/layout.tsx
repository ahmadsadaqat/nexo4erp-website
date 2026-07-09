import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Contact NEXO ERP | ERP Consultants in Lahore, Pakistan',
  description:
    'Contact NEXO ERP for ERPNext and Odoo consulting, implementation, migration, and support in Pakistan.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/contact',
  },
  openGraph: {
    type: 'website',
    siteName: 'NEXO ERP',
    images: [{ url: '/og-image.png' }],
    title: 'Contact NEXO ERP | ERP Consultants in Lahore, Pakistan',
    description:
      'Contact NEXO ERP for ERPNext and Odoo consulting, implementation, migration, and support in Pakistan.',
    url: 'https://www.nexo4erp.com/contact',
  },
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
