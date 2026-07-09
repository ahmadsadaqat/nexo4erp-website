'use client'

import { TESTIMONIALS } from '@/lib/constants'
import { ArrowLeft, Quote, Star } from 'lucide-react'
import Link from 'next/link'

export default function TestimonialsPage() {
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
              Client Stories
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Chosen By{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                The Best
              </span>
            </h1>
            <p className='text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              See what industry leaders and enterprise teams have to say about
              their journey with NEXO ERP.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className='py-12 bg-primary-600 dark:bg-primary-900/30'>
        <div className='max-w-5xl mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            {[
              { value: '500+', label: 'Businesses Served' },
              { value: '98%', label: 'Client Retention Rate' },
              { value: '40%', label: 'Avg. Efficiency Gain' },
              { value: '9+', label: 'Industries Covered' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className='text-3xl md:text-4xl font-bold text-white mb-1'>
                  {stat.value}
                </div>
                <div className='text-primary-200 text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className='py-20 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className='group relative bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden'
              >
                {/* Decorative Quote */}
                <div className='absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity'>
                  <Quote className='w-16 h-16 text-primary-600' />
                </div>

                {/* Stars */}
                <div className='flex gap-1 mb-5'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 fill-amber-400 text-amber-400'
                    />
                  ))}
                </div>

                <p className='text-gray-700 dark:text-gray-300 leading-relaxed italic mb-8 relative z-10'>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className='flex items-center gap-4 pt-6 border-t border-gray-50 dark:border-zinc-800'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full object-cover ring-2 ring-primary-100 dark:ring-primary-900/30'
                  />
                  <div>
                    <h3 className='font-bold text-gray-900 dark:text-white'>
                      {testimonial.name}
                    </h3>
                    <p className='text-sm text-primary-600 dark:text-primary-400'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-900'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            Ready to Write Your Success Story?
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-8'>
            Join hundreds of businesses that trust NEXO ERP to run their
            operations.
          </p>
          <button
            onClick={() =>
              window.dispatchEvent(new Event('open-contact-modal'))
            }
            className='px-8 py-4 bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold rounded-xl shadow-xl dark:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5'
          >
            Book a Free Demo
          </button>
        </div>
      </section>
    </main>
  )
}
