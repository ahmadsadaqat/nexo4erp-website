import type { MetadataRoute } from 'next'
import { BLOG_POSTS, INDUSTRIES } from '@/lib/constants'

const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/careers',
  '/contact',
  '/cookie-policy',
  '/faqs',
  '/features',
  '/locations',
  '/pricing',
  '/privacy',
  '/refund-policy',
  '/services/erpnext-pakistan',
  '/services/odoo',
  '/terms',
  '/testimonials',
  '/fbr-erp',
  '/blog/erpnext-vs-odoo-pakistan',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map((url) => ({
    url: `https://www.nexo4erp.com${url}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: url === '/' ? 1 : 0.8,
  }))

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `https://www.nexo4erp.com/blog/${post.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const industryEntries = INDUSTRIES.map((industry) => ({
    url: `https://www.nexo4erp.com/industries/${industry.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const locationEntries = ['lahore', 'karachi', 'islamabad'].map((city) => ({
    url: `https://www.nexo4erp.com/locations/${city}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticEntries,
    ...blogEntries,
    ...industryEntries,
    ...locationEntries,
  ]
}
