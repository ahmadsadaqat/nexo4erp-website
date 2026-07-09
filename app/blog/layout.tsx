import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'ERPNext & Odoo Blog | NEXO ERP',
  description:
    'Practical articles on ERPNext implementation, Odoo implementation, ERP pricing, migration, and Pakistani compliance.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/blog',
  },
  openGraph: {
    type: 'website',
    siteName: 'NEXO ERP',
    images: [{ url: '/og-image.png' }],
    title: 'ERPNext & Odoo Blog | NEXO ERP',
    description:
      'Practical articles on ERPNext implementation, Odoo implementation, ERP pricing, migration, and Pakistani compliance.',
    url: 'https://www.nexo4erp.com/blog',
  },
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
