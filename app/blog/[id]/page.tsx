'use client'

import { BLOG_POSTS } from '@/lib/constants'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BlogPostPage() {
  const params = useParams()
  const post = BLOG_POSTS.find((p) => p.id === params.id)

  if (!post) {
    return (
      <main className='relative z-10 pt-32 pb-20 text-center'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
          Post not found
        </h1>
        <Link
          href='/blog'
          className='text-primary-600 hover:text-primary-500 mt-4 inline-block'
        >
          ← Back to Blog
        </Link>
      </main>
    )
  }

  return (
    <main className='relative z-10'>
      <article className='pt-32 pb-20 lg:pt-40 lg:pb-32'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Link
            href='/blog'
            className='inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 mb-8 text-sm font-semibold'
          >
            <ArrowLeft className='w-4 h-4 mr-2' /> Back to Blog
          </Link>

          <div className='mb-8'>
            <span className='bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full'>
              {post.category}
            </span>
          </div>

          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            {post.title}
          </h1>

          <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-8'>
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className='relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12'>
            <img
              src={post.image}
              alt={post.title}
              className='w-full h-full object-cover'
            />
          </div>

          <div className='prose prose-lg dark:prose-invert max-w-none'>
            {post.content.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
