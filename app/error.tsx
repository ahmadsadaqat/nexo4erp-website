'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className='relative z-10 min-h-screen flex items-center justify-center px-4'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/8 via-transparent to-transparent' />
      </div>

      <div className='text-center max-w-2xl mx-auto relative z-10'>
        <p className='text-8xl md:text-9xl font-black text-red-500/80 dark:text-red-400/80 mb-4 leading-none'>
          500
        </p>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
          Something Went Wrong
        </h1>
        <p className='text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto'>
          An unexpected error occurred on our end. Please try again or return to
          the homepage.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={reset}
            className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary-600/30'
          >
            <RefreshCw className='w-4 h-4' />
            Try Again
          </button>
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-0.5'
          >
            <Home className='w-4 h-4' />
            Back to Home
          </Link>
        </div>

        {error.digest && (
          <p className='mt-8 text-xs text-gray-400 dark:text-gray-600 font-mono'>
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </main>
  )
}
