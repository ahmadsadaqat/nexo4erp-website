import type { Metadata } from 'next'
import ERPNextServicesContent from './ERPNextServicesContent'

export const metadata: Metadata = {
  title: 'ERPNext Implementation & Customization in Pakistan | Nexo4ERP',
  description:
    'Expert Frappe ERPNext implementation, customization, migration, and support in Pakistan. Extensive certified Frappe experience. Manufacturing, retail, NGO & more.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/services/erpnext',
  },
  openGraph: {
    title: 'ERPNext Implementation & Customization in Pakistan | Nexo4ERP',
    description:
      'Expert Frappe ERPNext implementation, customization, migration, and support in Pakistan. Extensive certified Frappe experience.',
    url: 'https://www.nexo4erp.com/services/erpnext',
  },
}

export default function ERPNextServicesPage() {
  return <ERPNextServicesContent />
}
