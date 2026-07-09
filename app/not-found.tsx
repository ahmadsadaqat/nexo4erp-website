import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | NEXO ERP',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className='relative z-10 min-h-screen flex items-center justify-center px-4'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent' />
      </div>

      <div className='text-center max-w-2xl mx-auto relative z-10'>
        <p className='text-8xl md:text-9xl font-black text-primary-600 dark:text-primary-400 mb-4 leading-none'>
          404
        </p>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
          Page Not Found
        </h1>
        <p className='text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto'>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary-600/30'
          >
            <Home className='w-4 h-4' />
            Back to Home
          </Link>
          <Link
            href='/blog'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-0.5'
          >
            <Search className='w-4 h-4' />
            Browse Blog
          </Link>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-100 dark:border-zinc-800'>
          <p className='text-sm text-gray-400 dark:text-gray-500 mb-4'>
            Looking for something specific?
          </p>
          <div className='flex flex-wrap gap-3 justify-center'>
            {[
              { label: 'ERPNext Services', href: '/services/erpnext-pakistan' },
              { label: 'Odoo Services', href: '/services/odoo' },
              { label: 'Industries', href: '/industries' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Contact Us', href: '/contact' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className='text-sm text-primary-600 dark:text-primary-400 hover:underline'
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
