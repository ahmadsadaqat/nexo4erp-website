import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'ERPNext & Odoo Features for Pakistani Businesses | Nexo4ERP',
  description:
    'Explore Nexo4ERP features for accounting, inventory, manufacturing, HR, CRM, and local compliance tailored for Pakistani businesses.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/features',
  },
  openGraph: {
    title: 'ERPNext & Odoo Features for Pakistani Businesses | Nexo4ERP',
    description:
      'Explore Nexo4ERP features for accounting, inventory, manufacturing, HR, CRM, and local compliance.',
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
