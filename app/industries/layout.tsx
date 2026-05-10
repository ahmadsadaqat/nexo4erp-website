import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'ERP Solutions by Industry in Pakistan | Nexo4ERP',
  description:
    'Explore ERPNext and Odoo solutions for manufacturing, retail, healthcare, logistics, NGOs, and service businesses in Pakistan.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/industries',
  },
  openGraph: {
    title: 'ERP Solutions by Industry in Pakistan | Nexo4ERP',
    description:
      'Explore ERPNext and Odoo solutions for manufacturing, retail, healthcare, logistics, NGOs, and service businesses in Pakistan.',
    url: 'https://www.nexo4erp.com/industries',
  },
}

export default function IndustriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
