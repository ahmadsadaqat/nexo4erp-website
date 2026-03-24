'use client'

import { INDUSTRIES } from '@/lib/constants'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'

export default function IndustryDetailPage() {
  const params = useParams()
  const industry = INDUSTRIES.find((ind) => ind.id === params.id)

  if (!industry) {
    return (
      <main className='relative z-10 pt-32 pb-20 text-center'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
          Industry not found
        </h1>
        <Link
          href='/industries'
          className='text-primary-600 hover:text-primary-500 mt-4 inline-block'
        >
          ← Back to Industries
        </Link>
      </main>
    )
  }

  return (
    <main className='relative z-10'>
      {/* Hero */}
      <section className='relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src={industry.bgImage}
            alt={industry.name}
            className='w-full h-full object-cover opacity-20'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95 dark:from-black/80 dark:to-black/95' />
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <Link
            href='/industries'
            className='inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 text-sm font-semibold'
          >
            <ArrowLeft className='w-4 h-4 mr-2' /> Back to Industries
          </Link>
          <div className='flex items-center gap-3 mb-4'>
            <industry.icon className='w-8 h-8 text-primary-400' />
            <span className='text-primary-400 font-semibold uppercase tracking-wider text-sm'>
              {industry.name}
            </span>
          </div>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            {industry.heroHeadline}
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl'>
            {industry.heroSubheadline}
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className='py-20 bg-white dark:bg-zinc-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center'>
            Common Challenges
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {industry.painPoints.map((point, index) => (
              <div
                key={index}
                className='bg-gray-50 dark:bg-zinc-800 rounded-2xl p-6 border border-gray-100 dark:border-zinc-700'
              >
                <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>
                  {point.problem}
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  {point.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How NEXO Solves */}
      <section className='py-20 bg-gray-50 dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>
            How NEXO 4 Solves This
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-4xl mb-12'>
            {industry.solvesDescription}
          </p>

          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
            Core Modules
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
            {industry.coreModules.map((mod, index) => (
              <div
                key={index}
                className='bg-white dark:bg-zinc-900 rounded-xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/10 flex items-center justify-center text-primary-600 dark:text-primary-400'>
                    <mod.icon className='w-5 h-5' />
                  </div>
                  <h4 className='font-bold text-gray-900 dark:text-white'>
                    {mod.name}
                  </h4>
                </div>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  {mod.description}
                </p>
              </div>
            ))}
          </div>

          {industry.addOns.length > 0 && (
            <>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8'>
                Add-Ons
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
                {industry.addOns.map((addon, index) => (
                  <div
                    key={index}
                    className='bg-white dark:bg-zinc-900 rounded-xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm'
                  >
                    <h4 className='font-bold text-gray-900 dark:text-white mb-2'>
                      {addon.name}
                    </h4>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                      {addon.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Packages */}
      <section className='py-20 bg-white dark:bg-zinc-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center'>
            Available Packages
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {industry.packages.map((pkg, index) => (
              <div
                key={index}
                className='bg-gray-50 dark:bg-zinc-800 rounded-2xl p-8 border border-gray-100 dark:border-zinc-700'
              >
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  {pkg.name}
                </h3>
                <p className='text-primary-600 dark:text-primary-400 font-semibold text-sm mb-6'>
                  {pkg.price}
                </p>
                <ul className='space-y-3'>
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className='flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm'
                    >
                      <ChevronRight className='w-4 h-4 text-primary-500 flex-shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
