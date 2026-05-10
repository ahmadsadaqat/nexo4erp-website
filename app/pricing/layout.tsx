import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'ERPNext & Odoo Pricing in Pakistan | Nexo4ERP',
  description:
    'Compare Nexo4ERP editions and find the right ERPNext or Odoo implementation package for your business in Pakistan.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/pricing',
  },
  openGraph: {
    title: 'ERPNext & Odoo Pricing in Pakistan | Nexo4ERP',
    description:
      'Compare Nexo4ERP editions and find the right ERPNext or Odoo implementation package for your business.',
    url: 'https://www.nexo4erp.com/pricing',
  },
}

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
