import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/fbr-erp'],
      disallow: ['/favicon.ico', '/api/', '/cdn-cgi/'],
    },
    sitemap: 'https://www.nexo4erp.com/sitemap.xml',
    host: 'https://www.nexo4erp.com',
  }
}
