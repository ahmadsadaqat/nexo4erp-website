import type { Metadata } from 'next'
import ERPNextVsOdooContent from './ERPNextVsOdooContent'

export const metadata: Metadata = {
  title:
    'ERPNext vs Odoo in Pakistan — Which ERP Should You Choose? (2025)',
  description:
    'Comparing ERPNext and Odoo for Pakistani businesses? We break down cost, features, customization, local support, and which industries each suits best. Honest comparison from a team that implements both.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/blog/erpnext-vs-odoo-pakistan',
  },
  openGraph: {
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
