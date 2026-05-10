import type { Metadata } from 'next'
import type React from 'react'

const CITY_META = {
  lahore: {
    title: 'ERPNext & Odoo Consultants in Lahore | Nexo4ERP',
    description:
      'ERP implementation, migration, customization, and support services for businesses in Lahore.',
  },
  karachi: {
    title: 'ERPNext & Odoo Consultants in Karachi | Nexo4ERP',
    description:
      'ERPNext and Odoo consulting services for companies operating in Karachi and surrounding areas.',
  },
  islamabad: {
    title: 'ERPNext & Odoo Consultants in Islamabad | Nexo4ERP',
    description:
      'ERP implementation and support for companies in Islamabad looking to modernize operations with ERPNext or Odoo.',
  },
} as const

export function generateMetadata({
  params,
}: {
  params: { city: string }
}): Metadata {
  const city = CITY_META[params.city as keyof typeof CITY_META]

  if (!city) {
    return {
      title: 'Location Not Found | Nexo4ERP',
      description: 'The requested location page could not be found.',
    }
  }

  return {
    title: city.title,
    description: city.description,
    alternates: {
      canonical: `https://www.nexo4erp.com/locations/${params.city}`,
    },
  }
}

export default function CityLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
