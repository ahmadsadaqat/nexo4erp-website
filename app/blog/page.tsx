'use client'

import { BLOG_POSTS } from '@/lib/constants'
import Link from 'next/link'

export default function BlogListPage() {
  return (
    <main className='relative z-10'>
      <section className='pt-32 pb-20 lg:pt-40 lg:pb-32'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2'>
              Insights
            </h2>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
              Latest News & Articles
            </h1>
            <p className='max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400'>
              Stay ahead of the curve with expert insights on ERP technology,
              digital transformation, and business growth.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className='group bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full'>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-3 mb-3'>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors'>
                    {post.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm line-clamp-2'>
                    {post.excerpt}
                  </p>
                  <div className='mt-4 flex items-center text-sm text-gray-500'>
                    <span>By {post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
