'use client'

import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsPage() {
  return (
    <main className='relative z-10'>
      <section className='pt-32 pb-20 lg:pt-40 lg:pb-32'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2'>
              Testimonials
            </h2>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
              Trusted by Industry Leaders
            </h1>
            <p className='max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400'>
              See what our partners have to say about their journey with NEXO 4
              ERP.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className='bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex items-center gap-4 mb-6'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-14 h-14 rounded-full object-cover'
                  />
                  <div>
                    <h3 className='font-bold text-gray-900 dark:text-white'>
                      {testimonial.name}
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed italic'>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
