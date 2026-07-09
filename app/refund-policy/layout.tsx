import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Refund Policy | NEXO ERP',
  description:
    'Read the refund policy for NEXO ERP consulting and implementation services.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/refund-policy',
  },
}

export default function RefundPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
