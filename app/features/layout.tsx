import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'ERPNext & Odoo Features for Pakistani Businesses | NEXO ERP',
  description:
    'Explore NEXO ERP features for accounting, inventory, manufacturing, HR, CRM, and local compliance tailored for Pakistani businesses.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/features',
  },
  openGraph: {
    type: 'website',
    siteName: 'NEXO ERP',
    images: [{ url: '/og-image.png' }],
    title: 'ERPNext & Odoo Features for Pakistani Businesses | NEXO ERP',
    description:
      'Explore NEXO ERP features for accounting, inventory, manufacturing, HR, CRM, and local compliance.',
    url: 'https://www.nexo4erp.com/features',
  },
}

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
