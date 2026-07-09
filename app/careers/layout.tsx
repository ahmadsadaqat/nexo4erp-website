import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Careers at NEXO ERP | ERPNext & Odoo Jobs in Pakistan',
  description:
    'Explore open roles at NEXO ERP, including ERP consultants, developers, and business roles focused on ERPNext and Odoo.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/careers',
  },
  openGraph: {
    type: 'website',
    siteName: 'NEXO ERP',
    images: [{ url: '/og-image.png' }],
    title: 'Careers at NEXO ERP | ERPNext & Odoo Jobs in Pakistan',
    description:
      'Explore open roles at NEXO ERP, including ERP consultants, developers, and business roles.',
    url: 'https://www.nexo4erp.com/careers',
  },
}

export default function CareersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
