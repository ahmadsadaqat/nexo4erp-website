'use client'

import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import { FEATURES, FEATURE_TABS } from '@/lib/constants'
import { useState } from 'react'

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(FEATURE_TABS[0].id)
  const activeFeature = FEATURE_TABS.find((t) => t.id === activeTab)!

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
              Platform Capabilities
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Powerful Features,{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Zero Complexity
              </span>
            </h1>
            <p className='text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              A complete suite of tools engineered to optimize every aspect of
              your business operations — from finance to fulfillment.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className='py-16 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className='group relative bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden'
              >
                <div className='absolute top-0 right-0 w-32 h-32 bg-primary-50 dark:bg-primary-900/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500' />
                <div className='relative z-10'>
                  <div className='w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300'>
                    <feature.icon className='w-6 h-6' />
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Deep-Dive */}
      <section className='py-20 bg-white dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Explore by Category
            </h2>
            <p className='text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              Drill into the specific capabilities that matter most to your
              business.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className='flex flex-wrap gap-3 justify-center mb-12'>
            {FEATURE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-zinc-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                {activeFeature.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-8 leading-relaxed'>
                {activeFeature.description}
              </p>
              <ul className='space-y-4'>
                {activeFeature.points.map((point, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <div className='w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <Check className='w-3 h-3 text-primary-600 dark:text-primary-400' />
                    </div>
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  window.dispatchEvent(new Event('open-contact-modal'))
                }
                className='mt-10 px-8 py-3 bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold rounded-xl shadow-xl dark:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5'
              >
                Book a Free Demo
              </button>
            </div>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className='w-full h-80 object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-primary-600 dark:bg-primary-900/30'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to See It in Action?
          </h2>
          <p className='text-primary-100 text-lg mb-8 max-w-2xl mx-auto'>
            Book a personalised demo and let our specialists walk you through
            the features most relevant to your business.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() =>
                window.dispatchEvent(new Event('open-contact-modal'))
              }
              className='px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-xl'
            >
              Book a Free Demo
            </button>
            <Link
              href='/pricing'
              className='px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
