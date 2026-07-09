import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import WhatsAppButton from '@/components/WhatsAppButton'
import JsonLd from '@/components/JsonLd'
import BackgroundParticles from '@/components/BackgroundParticles'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NEXO ERP',
  url: 'https://www.nexo4erp.com',
  logo: 'https://www.nexo4erp.com/LOGO.png',
  sameAs: ['https://www.linkedin.com'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NEXO ERP',
  url: 'https://www.nexo4erp.com',
  areaServed: ['Pakistan', 'Lahore', 'Karachi', 'Islamabad'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  telephone: '+92 332 9400079',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexo4erp.com'),
  title: 'ERPNext & Odoo Implementation Services in Pakistan | NEXO ERP',
  description:
    'NEXO ERP delivers expert ERPNext & Odoo implementation, customization & support across Pakistan. Lahore-based team with extensive Frappe expertise.',
  keywords: [
    'ERPNext implementation Pakistan',
    'Odoo implementation Pakistan',
    'ERPNext Lahore',
    'Odoo Lahore',
    'Frappe ERPNext',
    'nexoERP',
    'ERP Pakistan',
    'ERPNext customization',
    'Odoo customization Pakistan',
    'ERP consultants Lahore',
    'open source ERP Pakistan',
    'ERPNext migration',
    'Odoo migration',
    'FBR tax ERP',
    'manufacturing ERP Pakistan',
    'retail ERP Pakistan',
  ],
  authors: [{ name: 'NEXO ERP', url: 'https://www.nexo4erp.com' }],
  creator: 'NEXO ERP',
  publisher: 'NEXO ERP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexo4erp.com',
    siteName: 'NEXO ERP',
    title: 'ERPNext & Odoo Implementation Services in Pakistan | NEXO ERP',
    description:
      'Expert ERPNext & Odoo implementation, customization & support across Pakistan. Lahore-based team with extensive Frappe expertise. Free consultation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NEXO ERP — ERPNext & Odoo Implementation Services in Pakistan',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERPNext & Odoo Implementation Services in Pakistan | NEXO ERP',
    description:
      'Expert ERPNext & Odoo implementation for manufacturing, retail, healthcare & logistics businesses across Pakistan. Free consultation.',
    images: ['/og-image.png'],
    creator: '@Nexo4ERP',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
      style={{ scrollBehavior: 'smooth', scrollPaddingTop: '100px' }}
    >
      <body
        className='bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300'
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <JsonLd data={[organizationSchema, localBusinessSchema]} />
            <BackgroundParticles />
            <Navbar />
            <ContactModal isArabic={false} />
            <SpeedInsights />
            <WhatsAppButton />
            {children}
            <Footer />

            {/* Google Tag Manager - Offloaded from the critical loading path */}
            <Script
              src='https://www.googletagmanager.com/gtag/js?id=G-S7EJWDBPFR'
              strategy='afterInteractive' // Loads immediately after page becomes interactive
            />
            <Script id='google-analytics' strategy='afterInteractive'>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S7EJWDBPFR');
              `}
            </Script>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
