import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import BackgroundParticles from '@/components/BackgroundParticles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal'
import CookiePolicyModal from '@/components/CookiePolicyModal'
import TermsModal from '@/components/TermsModal'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nexo4erp.com'),
  title: 'NEXO 4 ERP - Architecting Your Digital Future',
  description:
    'NEXO 4 ERP is a high-performance, unified business management suite designed to streamline operations, automate workflows, and drive unparalleled growth for modern enterprises.',
  keywords: [
    'ERP system',
    'enterprise resource planning',
    'NEXO ERP',
    'NEXO 4 ERP',
    'cloud ERP software',
    'business management software',
    'finance automation',
    'inventory management',
    'HR management software',
    'scalable business solutions',
    'SaaS ERP'
  ],
  authors: [{ name: 'NEXO 4 ERP Team', url: 'https://nexo4erp.com' }],
  creator: 'NEXO 4 ERP',
  publisher: 'NEXO 4 ERP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://nexo4erp.com',
    siteName: 'NEXO 4 ERP',
    title: 'NEXO 4 ERP - Architecting Your Digital Future',
    description:
      'A high-performance, unified business management suite designed to streamline operations and drive growth. Book a free demo today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NEXO 4 ERP - Architecting Your Digital Future',
      },
    ],
    locale: 'en_US',
    alternateLocale: 'ar_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXO 4 ERP - Architecting Your Digital Future',
    description:
      'High-performance ERP solutions for industry leaders. Simplify complexity and gain maximum control over your operations.',
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
  alternates: {
    canonical: 'https://nexo4erp.com',
    languages: {
      'en-US': 'https://nexo4erp.com',
      'ar-AE': 'https://nexo4erp.com/ar',
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
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
      style={{ scrollBehavior: 'smooth', scrollPaddingTop: '100px' }}
    >
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <BackgroundParticles />
            <Navbar />
            <ContactModal isArabic={false} />
            <PrivacyPolicyModal isArabic={false} />
            <CookiePolicyModal isArabic={false} />
            <TermsModal isArabic={false} />
            <SpeedInsights />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
