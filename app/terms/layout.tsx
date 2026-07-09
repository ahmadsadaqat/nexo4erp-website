import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Terms of Service | NEXO ERP',
  description:
    'Read the terms of service for NEXO ERP consulting and implementation services.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/terms',
  },
}

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
