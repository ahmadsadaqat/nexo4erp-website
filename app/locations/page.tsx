import Link from 'next/link'
import type { Metadata } from 'next'

const CITIES = [
  {
    name: 'Lahore',
    slug: 'lahore',
    description:
      'ERPNext and Odoo implementation, migration, and support in Lahore.',
  },
  {
    name: 'Karachi',
    slug: 'karachi',
    description:
      'ERPNext and Odoo consulting for Karachi-based businesses and teams.',
  },
  {
    name: 'Islamabad',
    slug: 'islamabad',
    description:
      'ERP implementation services for companies in Islamabad and nearby regions.',
  },
]

export const metadata: Metadata = {
  title: 'ERP Services Locations in Pakistan | NEXO ERP',
  description:
    'Find ERPNext and Odoo services by city across Pakistan, including Lahore, Karachi, and Islamabad.',
  alternates: {
    canonical: 'https://www.nexo4erp.com/locations',
  },
}

export default function LocationsPage() {
  return (
    <main className='relative z-10 pt-32 pb-20'>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto mb-14'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
            ERP Services by Location
          </h1>
          <p className='text-xl text-gray-500 dark:text-gray-400'>
            Choose a city page to learn how we support ERPNext and Odoo projects
            locally.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className='bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>
                {city.name}
              </h2>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                {city.description}
              </p>
              <span className='text-primary-600 dark:text-primary-400 font-semibold'>
                View city page →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
