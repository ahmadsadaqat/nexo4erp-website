import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Careers at Nexo4ERP | ERPNext & Odoo Jobs in Pakistan',
  description:
    'Explore open roles at Nexo4ERP, including ERP consultants, developers, and business roles focused on ERPNext and Odoo.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/careers',
  },
  openGraph: {
    title: 'Careers at Nexo4ERP | ERPNext & Odoo Jobs in Pakistan',
    description:
      'Explore open roles at Nexo4ERP, including ERP consultants, developers, and business roles.',
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
