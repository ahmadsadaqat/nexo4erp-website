'use client'

import React from 'react'
import { Linkedin, Instagram } from 'lucide-react'
import { SOCIALS, TRANSLATIONS } from '@/lib/constants'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  const { isArabic } = useLanguage()
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en



  return (
    <footer className='bg-gray-900 dark:bg-black text-white pt-20 pb-10 border-t border-transparent dark:border-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 rtl:text-right'>
          <div className='space-y-4'>
            <a
              href='#'
              className='inline-block'
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <Image
                src='/nexoerp-white.svg'
                alt='NEXO ERP'
                width={150}
                height={48}
                style={{ width: 'auto' }}
            className='h-12 w-auto object-contain'
              />
            </a>

            <p className='text-gray-400 text-sm leading-relaxed mt-4'>
              {t.heroSubheadline}
            </p>
            <div className='flex space-x-4 rtl:space-x-reverse pt-4'>
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {social.name === 'Instagram' && (
                    <Instagram className='w-5 h-5' />
                  )}
                  {social.name === 'LinkedIn' && (
                    <Linkedin className='w-5 h-5' />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-6'>{t.footerProduct}</h4>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li>
                <Link
                  href='/services/erpnext-pakistan'
                  className='hover:text-primary-400 transition-colors'
                >
                  ERPNext
                </Link>
              </li>
              <li>
                <Link
                  href='/services/odoo'
                  className='hover:text-primary-400 transition-colors'
                >
                  Odoo
                </Link>
              </li>
              <li>
                <Link
                  href='/fbr-erp'
                  className='hover:text-primary-400 transition-colors'
                >
                  FBR ERP Integration
                </Link>
              </li>
              <li>
                <Link
                  href='/features'
                  className='hover:text-primary-400 transition-colors'
                >
                  {t.features}
                </Link>
              </li>

              <li>
                <Link
                  href='/locations'
                  className='hover:text-primary-400 transition-colors'
                >
                  {isArabic ? 'المواقع' : 'Locations'}
                </Link>
              </li>
              <li>
                <Link
                  href='/pricing'
                  className='hover:text-primary-400 transition-colors'
                >
                  {t.editions}
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-primary-400 transition-colors'
                >
                  {t.about}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-6'>{t.footerResources}</h4>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li>
                <Link
                  href='/blog'
                  className='hover:text-primary-400 transition-colors'
                >
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link
                  href='/blog/erpnext-vs-odoo-pakistan'
                  className='hover:text-primary-400 transition-colors'
                >
                  {isArabic
                    ? 'ERPNext مقابل Odoo في باكستان'
                    : 'ERPNext vs Odoo in Pakistan'}
                </Link>
              </li>
              <li>
                <Link
                  href='/testimonials'
                  className='hover:text-primary-400 transition-colors'
                >
                  {isArabic ? 'شهادات العملاء' : 'Testimonials'}
                </Link>
              </li>
              <li>
                <Link
                  href='/faqs'
                  className='hover:text-primary-400 transition-colors'
                >
                  {isArabic ? 'الأسئلة الشائعة' : 'FAQs'}
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='hover:text-primary-400 transition-colors'
                >
                  {isArabic ? 'وظائف' : 'Careers'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-6'>{t.footerLegal}</h4>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li>
                <Link
                  href='/privacy'
                  className='hover:text-primary-400 transition-colors'
                >
                  {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='hover:text-primary-400 transition-colors'
                >
                  {isArabic ? 'شروط الخدمة' : 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link
                  href='/cookie-policy'
                  className='hover:text-primary-400 transition-colors'
                >
                  {isArabic ? 'سياسة ملفات الارتباط' : 'Cookie Policy'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
          <p dir='ltr'>
            &copy; {new Date().getFullYear()} NEXO ERP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
