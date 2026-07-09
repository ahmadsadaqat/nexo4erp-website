import type { Metadata } from 'next'
import type React from 'react'
import { BLOG_POSTS } from '@/lib/constants'

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  const post = BLOG_POSTS.find((p) => p.id === params.id)

  if (!post) {
    return {
      title: 'Blog Post Not Found | NEXO ERP',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | NEXO ERP Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.nexo4erp.com/blog/${post.id}`,
    },
    openGraph: {
      siteName: 'NEXO ERP',
      title: `${post.title} | NEXO ERP Blog`,
      description: post.excerpt,
      url: `https://www.nexo4erp.com/blog/${post.id}`,
      type: 'article',
      images: [post.image],
    },
  }
}

export default function BlogPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
