import type { Metadata } from 'next'
import FBRComplianceContent from './FBRComplianceContent'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'FBR-Integrated ERP Software in Pakistan | NexoERP',
  description:
    'NexoERP automatically submits every invoice to FBR via PRAL in real time — handling digital invoicing, sales tax, withholding tax, SRB, PRA and payroll compliance in one system. Book a free demo.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/fbr-erp',
  },
  openGraph: {
    type: 'website',
    siteName: 'NEXO ERP',
    title: 'FBR-Integrated ERP for Pakistan — NexoERP',
    description:
      'Automate FBR digital invoicing, sales tax, withholding tax and payroll compliance in one ERP — built for Pakistani businesses.',
    url: 'https://www.nexo4erp.com/fbr-erp',
    images: [
      {
        url: '/sales-performance-dashboard.webp',
        width: 1200,
        height: 630,
        alt: 'NexoERP FBR-Integrated ERP Software — Invoicing Dashboard with QR Code',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FBR-Integrated ERP for Pakistan — NexoERP',
    description:
      'Automate FBR digital invoicing, sales tax, withholding tax and payroll compliance in one ERP — built for Pakistani businesses.',
    images: ['/sales-performance-dashboard.webp'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is FBR digital invoicing mandatory for all businesses in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Since August 2025, under SRO 709(I)/2025, all sales-tax-registered businesses in Pakistan are required to electronically transmit every invoice to FBR in real time. Non-compliance can result in penalties, blocked tax refunds, and business registration suspension.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PRAL and how does NexoERP connect to it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PRAL (Pakistan Revenue Automation Limited) is FBR\'s technology partner that manages the electronic invoicing infrastructure. NexoERP connects directly to PRAL\'s API so that every invoice is automatically transmitted in the required format — no manual uploads, no separate software needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What taxes does NexoERP handle automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NexoERP manages FBR sales tax invoicing, withholding tax under Section 236, advance income tax, SRB (Sindh), PRA (Punjab), KPRA (KP) provincial taxes, EOBI payroll deductions, and PESSI deductions — all from one unified system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NexoERP work for both B2B and B2C FBR invoicing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. NexoERP handles both business-to-business and business-to-consumer invoicing. Whether you issue bulk invoices to distributors or point-of-sale receipts to walk-in customers, each transaction is transmitted to FBR with the correct format and tax treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my business doesn\'t integrate with FBR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Businesses that fail to comply with FBR digital invoicing face financial penalties, potential suspension of their sales tax registration, blocked input tax adjustments, and inability to claim tax refunds. The penalties increase for continued non-compliance under the latest SRO 288(I)/2026 rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does FBR integration setup take with NexoERP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For businesses already using NexoERP, FBR integration can be activated in as little as 2–3 days. For new NexoERP implementations that include FBR compliance, the full setup typically takes 2–4 weeks depending on your business complexity and number of locations.',
      },
    },
  ],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NexoERP — FBR-Integrated ERP',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Enterprise Resource Planning software with built-in FBR digital invoicing, PRAL API integration, sales tax automation, and full Pakistan tax compliance including SRB, PRA, KPRA, EOBI, and withholding tax.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'PKR',
    url: 'https://www.nexo4erp.com/fbr-erp',
  },
  featureList: [
    'FBR Digital Invoicing (SRO 709)',
    'PRAL API Real-Time Integration',
    'Withholding Tax (Section 236)',
    'SRB, PRA, KPRA Provincial Tax',
    'EOBI Payroll Deductions',
    'Pakistani Chart of Accounts',
  ],
  provider: {
    '@type': 'Organization',
    name: 'NEXO ERP',
    url: 'https://www.nexo4erp.com',
  },
}

export default function FBRCompliancePage() {
  return (
    <>
      <JsonLd data={[faqSchema, softwareSchema]} />
      <FBRComplianceContent />
    </>
  )
}
