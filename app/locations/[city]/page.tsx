import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const CITY_PAGES = {
  lahore: {
    name: 'Lahore',
    title: 'ERPNext & Odoo Consultants in Lahore | Nexo4ERP',
    description:
      'ERP implementation, migration, customization, and support services for businesses in Lahore.',
    content:
      'We work with manufacturers, retailers, service firms, and growing SMEs in Lahore to implement practical ERP systems that reduce manual work and improve visibility.',
  },
  karachi: {
    name: 'Karachi',
    title: 'ERPNext & Odoo Consultants in Karachi | Nexo4ERP',
    description:
      'ERPNext and Odoo consulting services for companies operating in Karachi and surrounding areas.',
    content:
      'We help Karachi-based teams streamline finance, inventory, sales, and operations with ERP systems tailored to local workflows.',
  },
  islamabad: {
    name: 'Islamabad',
    title: 'ERPNext & Odoo Consultants in Islamabad | Nexo4ERP',
    description:
      'ERP implementation and support for companies in Islamabad looking to modernize operations with ERPNext or Odoo.',
    content:
      'We support Islamabad businesses with ERP planning, implementation, and training across finance, operations, and customer management.',
  },
} as const

export function generateMetadata({
  params,
}: {
  params: { city: string }
}): Metadata {
  const city = CITY_PAGES[params.city as keyof typeof CITY_PAGES]

  if (!city) {
    return {
      title: 'Location Not Found | Nexo4ERP',
      description: 'The requested location page was not found.',
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

export function generateStaticParams() {
  return Object.keys(CITY_PAGES).map((city) => ({ city }))
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = CITY_PAGES[params.city as keyof typeof CITY_PAGES]

  if (!city) notFound()

  return (
    <main className='relative z-10 pt-32 pb-20'>
      <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Link
          href='/locations'
          className='inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 mb-10 text-sm font-semibold'
        >
          ← Back to Locations
        </Link>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
          {city.name} ERP Services
        </h1>
        <p className='text-xl text-gray-500 dark:text-gray-400 mb-8'>
          {city.description}
        </p>
        <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
          {city.content}
        </p>
      </section>
    </main>
  )
}
