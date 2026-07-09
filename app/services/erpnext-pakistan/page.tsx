import type { Metadata } from 'next'
import ERPNextPakistanContent from './ERPNextPakistanContent'

export const metadata: Metadata = {
  title: 'ERPNext Implementation Services in Pakistan | NEXO ERP',
  description:
    'Looking for ERPNext implementation services in Pakistan? NEXO ERP provides ERPNext consulting, customization, hosting, HRMS, and ongoing support for growing businesses.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/services/erpnext-pakistan',
  },
  openGraph: {
    type: 'website',
    siteName: 'NEXO ERP',
    images: [{ url: '/og-image.png' }],
    title: 'ERPNext Implementation Services in Pakistan | NEXO ERP',
    description:
      'Looking for ERPNext implementation services in Pakistan? NEXO ERP provides ERPNext consulting, customization, hosting, HRMS, and ongoing support for growing businesses.',
    url: 'https://www.nexo4erp.com/services/erpnext-pakistan',
  },
}

export default function ERPNextPakistanPage() {
  return <ERPNextPakistanContent />
}
