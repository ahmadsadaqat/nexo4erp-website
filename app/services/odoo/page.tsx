import type { Metadata } from 'next'
import OdooServicesContent from './OdooServicesContent'

export const metadata: Metadata = {
  title: 'Odoo ERP Implementation & Support in Pakistan | Nexo4ERP',
  description:
    'Nexo4ERP delivers Odoo ERP implementation, customization, and support services across Pakistan. Lahore, Karachi, Islamabad. Manufacturing, retail, services & more.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/services/odoo',
  },
  openGraph: {
    title: 'Odoo ERP Implementation & Support in Pakistan | Nexo4ERP',
    description:
      'Nexo4ERP delivers Odoo ERP implementation, customization, and support services across Pakistan.',
    url: 'https://www.nexo4erp.com/services/odoo',
  },
}

export default function OdooServicesPage() {
  return <OdooServicesContent />
}
