import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Nexo4ERP — ERPNext & Odoo Consultants in Lahore, Pakistan',
  description:
    'Nexo4ERP is a Lahore-based ERP implementation company with extensive Frappe ERPNext and Odoo experience. We\u2019ve served manufacturing, retail, healthcare, NGO, logistics, and services businesses across Pakistan.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/about',
  },
  openGraph: {
    title: 'About Nexo4ERP — ERPNext & Odoo Consultants in Lahore, Pakistan',
    description:
      'Lahore-based ERP implementation company with extensive Frappe ERPNext and Odoo experience.',
    url: 'https://www.nexo4erp.com/about',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
