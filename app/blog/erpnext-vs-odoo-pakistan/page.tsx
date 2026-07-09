import type { Metadata } from 'next'
import ERPNextVsOdooContent from './ERPNextVsOdooContent'

export const metadata: Metadata = {
  title:
    'ERPNext vs Odoo in Pakistan — Which ERP Should You Choose? (2025)',
  description:
    'Comparing ERPNext vs Odoo for Pakistani businesses? We break down costs, features & local support. Honest comparison from a team that implements both.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/blog/erpnext-vs-odoo-pakistan',
  },
  openGraph: {
    siteName: 'NEXO ERP',
    images: [{ url: '/og-image.png' }],
    title:
      'ERPNext vs Odoo in Pakistan — Which ERP Should You Choose? (2025)',
    description:
      'Comparing ERPNext and Odoo for Pakistani businesses? Honest comparison from a team that implements both.',
    url: 'https://www.nexo4erp.com/blog/erpnext-vs-odoo-pakistan',
    type: 'article',
  },
}

export default function ERPNextVsOdooPage() {
  return <ERPNextVsOdooContent />
}
