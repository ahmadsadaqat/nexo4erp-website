'use client'

import { PACKAGE_TIERS } from '@/lib/constants'
import { Check, ArrowLeft, Zap, Shield, Crown } from 'lucide-react'
import Link from 'next/link'

const erpIcons = [Shield, Zap, Crown]

export default function PricingPage() {
  const erpTiers = PACKAGE_TIERS.filter((t) => t.category === 'ERP')
  const hrmsTiers = PACKAGE_TIERS.filter((t) => t.category === 'HRMS')

  return (
    <main className='relative z-10'>
      {/* Hero */}
      <section className='pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent' />
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <Link
            href='/'
            className='inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 mb-10 text-sm font-semibold'
          >
            <ArrowLeft className='w-4 h-4 mr-2' /> Back to Home
          </Link>
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3'>
              NEXO Editions
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Choose Your{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Edition
              </span>
            </h1>
            <p className='text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              Select the framework that aligns with your business maturity and
              growth objectives. All plans include implementation support.
            </p>
          </div>
        </div>
      </section>

      {/* ERP Tiers */}
      <section className='pb-20 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 text-center mb-10'>
            ERP Editions
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-24'>
            {erpTiers.map((tier, index) => {
              const Icon = erpIcons[index] || Shield
              return (
                <div
                  key={tier.name}
                  className={`relative bg-white dark:bg-zinc-900 rounded-2xl border p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    tier.isPopular
                      ? 'border-primary-500 ring-2 ring-primary-500/30 scale-[1.02]'
                      : 'border-gray-100 dark:border-zinc-800'
                  }`}
                >
                  {tier.isPopular && (
                    <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                      <span className='bg-gradient-to-r from-primary-700 to-primary-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-primary-600/30'>
                        ✦ Most Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      tier.isPopular
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    }`}
                  >
                    <Icon className='w-6 h-6' />
                  </div>
                  <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
                    {tier.name}
                  </h4>
                  <p className='text-primary-600 dark:text-primary-400 font-semibold text-sm mb-3'>
                    {tier.target}
                  </p>
                  <p className='text-gray-600 dark:text-gray-400 text-sm mb-7 leading-relaxed border-b border-gray-100 dark:border-zinc-800 pb-7'>
                    {tier.description}
                  </p>
                  <ul className='space-y-3 mb-8'>
                    {tier.modules.map((mod) => (
                      <li
                        key={mod}
                        className='flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm'
                      >
                        <div className='w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0'>
                          <Check className='w-3 h-3 text-primary-600 dark:text-primary-400' />
                        </div>
                        {mod}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      window.dispatchEvent(new Event('open-contact-modal'))
                    }
                    className={`w-full py-3.5 font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                      tier.isPopular
                        ? 'bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 shadow-xl dark:shadow-white/10'
                        : 'bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white hover:bg-primary-50 dark:hover:bg-zinc-700'
                    }`}
                  >
                    Explore Edition
                  </button>
                </div>
              )
            })}
          </div>

          {/* HRMS Tiers */}
          <h3 className='text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 text-center mb-10'>
            HRMS Editions
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
            {hrmsTiers.map((tier) => (
              <div
                key={tier.name}
                className='bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
                  {tier.name}
                </h4>
                <p className='text-primary-600 dark:text-primary-400 font-semibold text-sm mb-3'>
                  {tier.target}
                </p>
                <p className='text-gray-600 dark:text-gray-400 text-sm mb-6 border-b border-gray-100 dark:border-zinc-800 pb-6 leading-relaxed'>
                  {tier.description}
                </p>
                <ul className='space-y-3 mb-8'>
                  {tier.modules.map((mod) => (
                    <li
                      key={mod}
                      className='flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm'
                    >
                      <div className='w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0'>
                        <Check className='w-3 h-3 text-primary-600 dark:text-primary-400' />
                      </div>
                      {mod}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event('open-contact-modal'))
                  }
                  className='w-full py-3.5 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white font-bold rounded-xl hover:bg-primary-50 dark:hover:bg-zinc-700 transition-all duration-300 hover:-translate-y-0.5'
                >
                  Explore Edition
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className='py-16 bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-900'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <p className='text-gray-600 dark:text-gray-400 mb-3 text-sm'>
            Need help choosing the right edition?
          </p>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
            Talk to a NEXO Specialist
          </h2>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() =>
                window.dispatchEvent(new Event('open-contact-modal'))
              }
              className='px-8 py-4 bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold rounded-xl shadow-xl dark:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              Book a Free Demo
            </button>
            <Link
              href='/faqs'
              className='px-8 py-4 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300'
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
