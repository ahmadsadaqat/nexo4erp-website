import type { Metadata } from 'next'
import OdooServicesContent from './OdooServicesContent'

export const metadata: Metadata = {
  title: 'Odoo ERP Implementation & Support in Pakistan | NEXO ERP',
  description:
    'NEXO ERP delivers Odoo ERP implementation, customization, and support services across Pakistan. Lahore, Karachi, Islamabad. Manufacturing, retail, services & more.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/services/odoo',
  },
  openGraph: {
    type: 'website',
    siteName: 'NEXO ERP',
    images: [{ url: '/og-image.png' }],
    title: 'Odoo ERP Implementation & Support in Pakistan | NEXO ERP',
    description:
      'NEXO ERP delivers Odoo ERP implementation, customization, and support services across Pakistan.',
    url: 'https://www.nexo4erp.com/services/odoo',
  },
}

export default function OdooServicesPage() {
  return <OdooServicesContent />
}
