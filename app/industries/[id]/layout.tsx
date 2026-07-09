import type { Metadata } from 'next'
import type React from 'react'
import { INDUSTRIES } from '@/lib/constants'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = INDUSTRIES.find((ind) => ind.id === resolvedParams.id)

  if (!industry) {
    return {
      title: 'Industry Solution Not Found | NEXO ERP',
      description: 'The requested industry solution page could not be found.',
    }
  }

  return {
    title: `${industry.name} ERP Solutions in Pakistan | NEXO ERP`,
    description: industry.description,
    alternates: {
      canonical: `https://www.nexo4erp.com/industries/${industry.id}`,
    },
    openGraph: {
      siteName: 'NEXO ERP',
      title: `${industry.name} ERP Solutions in Pakistan | NEXO ERP`,
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
