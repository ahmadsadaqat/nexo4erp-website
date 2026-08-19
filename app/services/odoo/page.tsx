import type { Metadata } from 'next'
import OdooServicesContent from './OdooServicesContent'
import JsonLd from '@/components/JsonLd'

const FAQS = [
  {
    question: 'How long does an Odoo implementation take?',
    answer:
      'A standard Odoo setup for small-to-medium businesses takes 3 to 6 weeks. Larger enterprise projects with custom modules, complex integrations, and multi-company setups take 3 to 6 months.',
  },
  {
    question: 'Can you migrate data from our existing software to Odoo?',
    answer:
      'Yes. We handle end-to-end data migration from legacy systems (Excel, QuickBooks, SAP B1, custom software, etc.) including master data, open transactions, and historical records.',
  },
  {
    question: 'Do you handle Pakistani FBR tax and local compliance in Odoo?',
    answer:
      'Yes. We configure sales tax, withholding tax, income tax rules, EOBI/PESSI payroll deductions, and local chart of accounts tailored to Pakistani tax regulations.',
  },
  {
    question: 'What support do you offer after go-live?',
    answer:
      'We provide ongoing monthly support plans covering user queries, bug fixes, system updates, new module configuration, and performance optimization.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Odoo Implementation Services',
  provider: {
    '@type': 'Organization',
    name: 'NEXO ERP',
  },
  areaServed: 'Pakistan',
  serviceType: 'Odoo implementation, customization, migration, and support',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.nexo4erp.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.nexo4erp.com/services/odoo',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Odoo',
      item: 'https://www.nexo4erp.com/services/odoo',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

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
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <OdooServicesContent />
    </>
  )
}

