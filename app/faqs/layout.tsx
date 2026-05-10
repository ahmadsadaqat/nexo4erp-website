import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'ERPNext & Odoo FAQs | Nexo4ERP',
  description:
    'Answers to common questions about ERPNext implementation, Odoo implementation, pricing, migration, compliance, and support in Pakistan.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/faqs',
  },
  openGraph: {
    title: 'ERPNext & Odoo FAQs | Nexo4ERP',
    description:
      'Answers to common questions about ERPNext implementation, Odoo implementation, pricing, migration, compliance, and support.',
    url: 'https://www.nexo4erp.com/faqs',
  },
}

export default function FaqsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
