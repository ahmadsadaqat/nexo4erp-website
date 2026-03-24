'use client'

import React from 'react'
import { Linkedin, Instagram, Settings } from 'lucide-react'
import { SOCIALS, TRANSLATIONS } from '@/lib/constants'
import { useLanguage } from '@/components/language-provider'

const Footer: React.FC = () => {
  const { isArabic } = useLanguage()
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new Event('open-privacy-modal'))
  }

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new Event('open-terms-modal'))
  }

  const openCookies = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new Event('open-cookie-modal'))
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-20 pb-10 border-t border-transparent dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 rtl:text-right">
          <div className="space-y-4">
            <a
              href="#"
              className="inline-block"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img
                src="/White-logo.png"
                alt="NEXO 4 ERP"
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              {t.heroSubheadline}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse pt-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.name === 'Instagram' && (
                    <Instagram className="w-5 h-5" />
                  )}
                  {social.name === 'LinkedIn' && (
                    <Linkedin className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footerProduct}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="#solutions"
                  onClick={(e) => handleScroll(e, '#solutions')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.solutions}
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleScroll(e, '#features')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.features}
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  onClick={(e) => handleScroll(e, '#industries')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.industries}
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleScroll(e, '#packages')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.editions}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, '#about')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.about}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t.footerResources}
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="#blog"
                  onClick={(e) => handleScroll(e, '#blog')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.blog}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nexo4erp.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  {isArabic ? 'وثائق البرنامج' : 'Documentation'}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScroll(e, '#faq')}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {isArabic ? 'الأسئلة الشائعة' : 'FAQs'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footerLegal}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  onClick={openPrivacy}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={openTerms}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {isArabic ? 'شروط الخدمة' : 'Terms of Service'}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={openCookies}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {isArabic ? 'سياسة ملفات الارتباط' : 'Cookie Policy'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p dir="ltr">
            &copy; {new Date().getFullYear()} NEXO 4 ERP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
