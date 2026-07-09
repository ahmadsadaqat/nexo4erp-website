import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About NEXO ERP — ERPNext & Odoo Consultants in Lahore, Pakistan',
  description:
    'NEXO ERP is a Lahore-based ERP implementation company with deep Frappe ERPNext & Odoo expertise, serving businesses across all sectors in Pakistan.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/about',
  },
  openGraph: {
    type: 'website',
    siteName: 'NEXO ERP',
    images: [{ url: '/og-image.png' }],
    title: 'About NEXO ERP — ERPNext & Odoo Consultants in Lahore, Pakistan',
    description:
    'NEXO ERP is a Lahore-based ERP implementation company with deep Frappe ERPNext & Odoo expertise, serving businesses across all sectors in Pakistan.',
    url: 'https://www.nexo4erp.com/about',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
