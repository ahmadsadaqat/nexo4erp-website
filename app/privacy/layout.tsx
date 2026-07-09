import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Privacy Policy | NEXO ERP',
  description:
    'Read the privacy policy for NEXO ERP and learn how we handle contact form and website data.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
