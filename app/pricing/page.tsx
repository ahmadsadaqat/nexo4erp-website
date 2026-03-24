'use client'

import { PACKAGE_TIERS } from '@/lib/constants'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const erpTiers = PACKAGE_TIERS.filter((t) => t.category === 'ERP')
  const hrmsTiers = PACKAGE_TIERS.filter((t) => t.category === 'HRMS')

  return (
    <main className='relative z-10'>
      <section className='pt-32 pb-20 lg:pt-40 lg:pb-32'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2'>
              NEXO Editions
            </h2>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
              Choose Your Edition
            </h1>
            <p className='max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400'>
              Select the framework that aligns with your business maturity.
            </p>
          </div>

          {/* ERP Tiers */}
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
            ERP Editions
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {erpTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white dark:bg-zinc-900 rounded-2xl border p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  tier.isPopular
                    ? 'border-primary-500 ring-2 ring-primary-500/20'
                    : 'border-gray-100 dark:border-zinc-800'
                }`}
              >
                {tier.isPopular && (
                  <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
                    <span className='bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full'>
                      Most Popular
                    </span>
                  </div>
                )}
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  {tier.name}
                </h4>
                <p className='text-primary-600 dark:text-primary-400 font-semibold text-sm mb-2'>
                  {tier.target}
                </p>
                <p className='text-gray-600 dark:text-gray-400 text-sm mb-6'>
                  {tier.description}
                </p>
                <ul className='space-y-3'>
                  {tier.modules.map((mod) => (
                    <li
                      key={mod}
                      className='flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm'
                    >
                      <Check className='w-4 h-4 text-primary-500 flex-shrink-0' />
                      {mod}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event('open-contact-modal'))
                  }
                  className='mt-8 w-full py-3 bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5'
                >
                  Explore Edition
                </button>
              </div>
            ))}
          </div>

          {/* HRMS Tiers */}
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
            HRMS Editions
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {hrmsTiers.map((tier) => (
              <div
                key={tier.name}
                className='bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  {tier.name}
                </h4>
                <p className='text-primary-600 dark:text-primary-400 font-semibold text-sm mb-2'>
                  {tier.target}
                </p>
                <p className='text-gray-600 dark:text-gray-400 text-sm mb-6'>
                  {tier.description}
                </p>
                <ul className='space-y-3'>
                  {tier.modules.map((mod) => (
                    <li
                      key={mod}
                      className='flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm'
                    >
                      <Check className='w-4 h-4 text-primary-500 flex-shrink-0' />
                      {mod}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event('open-contact-modal'))
                  }
                  className='mt-8 w-full py-3 bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5'
                >
                  Explore Edition
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
