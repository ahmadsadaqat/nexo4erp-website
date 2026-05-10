import type { Metadata } from 'next'
import type React from 'react'
import { INDUSTRIES } from '@/lib/constants'

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  const industry = INDUSTRIES.find((ind) => ind.id === params.id)

  if (!industry) {
    return {
      title: 'Industry Solution Not Found | Nexo4ERP',
      description: 'The requested industry solution page could not be found.',
    }
  }

  return {
    title: `${industry.name} ERP Solutions in Pakistan | Nexo4ERP`,
    description: industry.description,
    alternates: {
      canonical: `https://www.nexo4erp.com/industries/${industry.id}`,
    },
    openGraph: {
      title: `${industry.name} ERP Solutions in Pakistan | Nexo4ERP`,
      description: industry.description,
      url: `https://www.nexo4erp.com/industries/${industry.id}`,
      type: 'article',
      images: [industry.bgImage],
    },
  }
}

export default function IndustryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
