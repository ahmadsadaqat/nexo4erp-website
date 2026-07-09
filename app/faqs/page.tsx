'use client'

import { FAQS } from '@/lib/constants'
import { ArrowLeft, ChevronDown, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import JsonLd from '@/components/JsonLd'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.nexo4erp.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'FAQs',
      item: 'https://www.nexo4erp.com/faqs',
    },
  ],
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
              Support
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Frequently Asked{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Questions
              </span>
            </h1>
            <p className='text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              Everything you need to know about NEXO ERP. Can&apos;t find the
              answer?{' '}
              <Link
                href='/contact'
                className='text-primary-600 dark:text-primary-400 hover:underline font-medium'
              >
                Contact our team.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className='pb-20 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6'>
          <JsonLd data={[faqSchema, breadcrumbSchema]} />
          <div className='space-y-4'>
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-zinc-900 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-primary-200 dark:border-primary-900/40 shadow-lg shadow-primary-600/5'
                    : 'border-gray-100 dark:border-zinc-800 shadow-sm'
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className='w-full flex items-center justify-between gap-4 p-6 text-left'
                >
                  <span className='font-bold text-gray-900 dark:text-white text-base leading-snug'>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className='px-6 pb-6'>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-zinc-800 pt-4'>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className='py-20 bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-900'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <div className='w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mx-auto mb-6'>
            <MessageCircle className='w-8 h-8 text-primary-600 dark:text-primary-400' />
          </div>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            Still have questions?
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-8'>
            Our team of experts is ready to help you find the right solution for
            your business.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() =>
                window.dispatchEvent(new Event('open-contact-modal'))
              }
              className='px-8 py-4 bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold rounded-xl shadow-xl dark:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              Talk to an Expert
            </button>
            <Link
              href='/contact'
              className='px-8 py-4 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
