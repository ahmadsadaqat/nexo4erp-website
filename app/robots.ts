import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/favicon.ico', '/api/'],
    },
    sitemap: 'https://www.nexo4erp.com/sitemap.xml',
    host: 'https://www.nexo4erp.com',
  }
}
