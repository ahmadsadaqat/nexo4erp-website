'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'

import { TRANSLATIONS } from '@/lib/constants'
import Dashboard from './Dashboard'

const Hero = () => {
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(
      new CustomEvent('open-contact-modal', {
        detail: {
          subject: 'Free Demo Request',
        },
      }),
    )
  }

  const t = TRANSLATIONS.en

  return (
    <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent dark:bg-transparent'>
      <div className='absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl opacity-50 z-0' />
      <div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl opacity-50 z-0' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto animate-fade-in-up'>
          <h1 className='text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-6'>
            {t.heroHeadline}
          </h1>

          <p className='mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10'>
            {t.heroSubheadline}
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <a
              href='#'
              onClick={openModal}
              style={{ width: 'auto' }}
              className='w-full sm:w-auto px-10 py-5 bg-primary hover:bg-[#366872] text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3'
            >
              {t.demo}
              <ChevronRight className='w-6 h-6' />
            </a>
          </div>
        </div>
        <div className='mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xl'>
          <Dashboard />
        </div>
      </div>
    </section>
  )
}

export default Hero
