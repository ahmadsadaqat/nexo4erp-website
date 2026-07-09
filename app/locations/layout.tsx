import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'ERP Services by Location in Pakistan | NEXO ERP',
  description:
    'Explore ERPNext and Odoo consulting and implementation services in Lahore, Karachi, and Islamabad.',
}

export default function LocationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
