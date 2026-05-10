'use client'

import { BLOG_POSTS } from '@/lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react'

const CATEGORIES = [
  'All',
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
]

export default function BlogListPage() {
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
              Insights
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Latest News &{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Articles
              </span>
            </h1>
            <p className='text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              Stay ahead of the curve with expert insights on ERP technology,
              digital transformation, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {BLOG_POSTS[0] && (
        <section className='pb-8 bg-gray-50 dark:bg-zinc-950'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Link
              href={`/blog/${BLOG_POSTS[0].id}`}
              className='group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500'
            >
              <div className='relative h-72 lg:h-auto overflow-hidden'>
                <Image
                  src={BLOG_POSTS[0].image}
                  alt={BLOG_POSTS[0].title}
                  fill
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  className='object-cover group-hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-transparent to-black/20' />
                <div className='absolute top-4 left-4'>
                  <span className='bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full'>
                    Featured
                  </span>
                </div>
              </div>
              <div className='p-8 lg:p-12 flex flex-col justify-center'>
                <span className='inline-block bg-primary-50 dark:bg-primary-900/10 text-primary-700 dark:text-primary-400 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit'>
                  {BLOG_POSTS[0].category}
                </span>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight'>
                  {BLOG_POSTS[0].title}
                </h2>
                <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className='flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6'>
                  <span className='flex items-center gap-1.5'>
                    <User className='w-4 h-4' /> {BLOG_POSTS[0].author}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <Clock className='w-4 h-4' /> {BLOG_POSTS[0].readTime}
                  </span>
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
                <div className='flex items-center text-primary-600 dark:text-primary-400 font-bold text-sm gap-2 group-hover:gap-3 transition-all duration-300'>
                  Read Article <ArrowRight className='w-4 h-4' />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className='py-16 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center gap-3 mb-10 flex-wrap'>
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className='px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full cursor-default'
              >
                {cat}
              </span>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className='group bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col'
              >
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full'>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className='p-6 flex flex-col flex-1'>
                  <div className='flex items-center text-xs text-gray-500 dark:text-gray-400 gap-3 mb-3'>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug flex-1'>
                    {post.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-zinc-800'>
                    <span className='text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5'>
                      <User className='w-3.5 h-3.5' /> {post.author}
                    </span>
                    <span className='text-primary-600 dark:text-primary-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all duration-300'>
                      Read <ArrowRight className='w-3.5 h-3.5' />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className='py-20 bg-primary-600 dark:bg-primary-900/30'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Stay in the Loop
          </h2>
          <p className='text-primary-100 mb-8 max-w-xl mx-auto'>
            Get the latest ERP insights, industry news, and product updates
            delivered to your inbox.
          </p>
          <button
            onClick={() =>
              window.dispatchEvent(new Event('open-contact-modal'))
            }
            className='px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-xl'
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  )
}
