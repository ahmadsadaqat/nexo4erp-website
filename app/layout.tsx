import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import BackgroundParticles from '@/components/BackgroundParticles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import WhatsAppButton from '@/components/WhatsAppButton'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal'
import CookiePolicyModal from '@/components/CookiePolicyModal'
import TermsModal from '@/components/TermsModal'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexo4ERP',
  url: 'https://www.nexo4erp.com',
  logo: 'https://www.nexo4erp.com/LOGO.png',
  sameAs: ['https://www.linkedin.com'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Nexo4ERP',
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
  title: 'ERPNext & Odoo Implementation Services in Pakistan | Nexo4ERP',
  description:
    'Nexo4ERP delivers expert ERPNext and Odoo implementation, customization, and support across Pakistan. Extensive Frappe expertise. Based in Lahore. Free consultation.',
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
  authors: [{ name: 'Nexo4ERP', url: 'https://www.nexo4erp.com' }],
  creator: 'Nexo4ERP',
  publisher: 'Nexo4ERP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nexo4erp.com',
    siteName: 'Nexo4ERP',
    title: 'ERPNext & Odoo Implementation Services in Pakistan | Nexo4ERP',
    description:
      'Expert ERPNext and Odoo implementation, customization, and support across Pakistan. Lahore-based team with extensive Frappe expertise. Free consultation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexo4ERP — ERPNext & Odoo Implementation Services in Pakistan',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERPNext & Odoo Implementation Services in Pakistan | Nexo4ERP',
    description:
      'Expert ERPNext and Odoo implementation for manufacturing, retail, healthcare, and logistics businesses across Pakistan. Free consultation.',
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
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-S7EJWDBPFR'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S7EJWDBPFR');
          `}
        </Script>
      </head>
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
            <PrivacyPolicyModal isArabic={false} />
            <CookiePolicyModal isArabic={false} />
            <TermsModal isArabic={false} />
            <SpeedInsights />
            <WhatsAppButton />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
