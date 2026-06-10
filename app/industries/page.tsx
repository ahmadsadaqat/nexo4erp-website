import { INDUSTRIES } from '@/lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import OpenContactButton from '@/components/OpenContactButton'

export default function IndustriesPage() {
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
              Industries
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Built for{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Every Sector
              </span>
            </h1>
            <p className='text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              Tailored ERP solutions built to meet the unique operational
              challenges, compliance requirements, and growth goals of your
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className='pb-24 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.id}
                className='group relative bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500'
              >
                {/* Image */}
                <div className='relative h-52 overflow-hidden'>
                  <Image
                    src={industry.bgImage}
                    alt={industry.name}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
                  <div className='absolute bottom-4 left-4 flex items-center gap-2'>
                    <div className='w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center'>
                      <industry.icon className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-white font-bold text-sm'>
                      {industry.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4'>
                    {industry.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {industry.coreModules.slice(0, 3).map((mod) => (
                      <span
                        key={mod.name}
                        className='text-xs px-2.5 py-1 bg-primary-50 dark:bg-primary-900/10 text-primary-700 dark:text-primary-400 rounded-full font-medium border border-primary-100 dark:border-primary-900/20'
                      >
                        {mod.name}
                      </span>
                    ))}
                    {industry.coreModules.length > 3 && (
                      <span className='text-xs px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 rounded-full font-medium'>
                        +{industry.coreModules.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className='py-16 bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-900'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            Don&apos;t see your industry?
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-8'>
            NEXO 4 ERP is built on a flexible, API-first architecture that can
            be tailored to virtually any vertical. Talk to our team about a
            custom solution.
          </p>
          <OpenContactButton
            label='Talk to a Specialist'
            className='px-8 py-4 bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold rounded-xl shadow-xl dark:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2'
          />
        </div>
      </section>
    </main>
  )
}
