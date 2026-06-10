'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Languages, ChevronDown } from 'lucide-react'
import { TRANSLATIONS } from '@/lib/constants'
import { useLanguage } from '@/components/language-provider'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isArabic, toggleLanguage } = useLanguage()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.location.href = '/'
    }
  }

  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en

  const serviceLinks = [
    { name: 'ERPNext', href: '/services/erpnext' },
    { name: 'Odoo', href: '/services/odoo' },
  ]

  const navLinks = [
    { name: t.features, href: '/features' },
    { name: t.industries, href: '/industries' },
    { name: t.editions, href: '/pricing' },
    { name: t.blog, href: '/blog' },
    { name: t.about, href: '/about' },
  ]

  return (
    <div className='fixed w-full top-0 left-0 z-[100] pt-4 flex justify-center pointer-events-none'>
      {/* MAIN NAV PILL */}
      <nav
        className={`transition-all duration-300 ease-in-out flex items-center justify-between px-6 md:px-10 pointer-events-auto ${
          isScrolled
            ? 'w-[92%] py-3 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-full shadow-lg border border-black/5 dark:border-white/10'
            : 'w-[98%] py-6 bg-transparent border-transparent shadow-none'
        } ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Desktop Logo */}
        <a
          href='#'
          className='flex items-center cursor-pointer'
          onClick={handleLogoClick}
        >
          {mounted && (
            <img
              src={isDark ? '/White-logo.png' : '/LOGO.png'}
              alt='Nexo ERP'
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-8 md:h-9' : 'h-10 md:h-12'
              }`}
            />
          )}
        </a>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center space-x-10 rtl:space-x-reverse'>
          <div className='relative group'>
            <button
              type='button'
              aria-haspopup='true'
              aria-expanded='false'
              className={`font-bold text-[12px] uppercase tracking-widest transition-colors duration-150 hover:text-primary-600 inline-flex items-center gap-1 ${
                pathname.startsWith('/services')
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              {t.solutions}
              <ChevronDown className='h-3.5 w-3.5 transition-transform group-hover:rotate-180' />
            </button>
            <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-2xl border border-gray-200/70 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-2 shadow-xl backdrop-blur-xl transition-all'>
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className='block rounded-xl px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold text-[12px] uppercase tracking-widest transition-colors duration-150 hover:text-primary-600 ${
                pathname === link.href
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className='flex items-center space-x-6 border-l border-gray-300 dark:border-zinc-700 pl-8 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-8'>
            <button
              onClick={toggleLanguage}
              aria-label={
                isArabic
                  ? 'Switch language to English'
                  : 'Switch language to Arabic'
              }
              className='flex items-center gap-2 font-black text-[11px] uppercase text-gray-900 dark:text-white'
            >
              <Languages className='h-4 w-4' />
              <span>{isArabic ? 'English' : 'العربية'}</span>
            </button>

            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label='Toggle color theme'
              className='text-gray-900 dark:text-white'
            >
              {mounted &&
                (isDark ? (
                  <Sun className='h-5 w-5 text-yellow-400' />
                ) : (
                  <Moon className='h-5 w-5' />
                ))}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setIsOpen(true)}
            aria-label='Open navigation menu'
            className='text-gray-900 dark:text-white p-2'
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 h-screen w-full bg-white dark:bg-zinc-950 z-[120] transition-all duration-500 md:hidden pointer-events-auto ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className='flex items-center justify-between px-8 py-8 w-full'>
          {mounted && (
            <img
              src={isDark ? '/White-logo.png' : '/LOGO.png'}
              alt='Nexo ERP'
              className='h-10 w-auto'
            />
          )}
          <div className='flex items-center space-x-6'>
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label='Toggle color theme'
              className='text-gray-900 dark:text-white'
            >
              {mounted &&
                (isDark ? (
                  <Sun size={24} className='text-yellow-400' />
                ) : (
                  <Moon size={24} />
                ))}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              aria-label='Close navigation menu'
              className='text-primary-600 p-2'
            >
              <X size={32} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center flex-grow space-y-8 px-6 mt-10'>
          <div className='text-center space-y-4'>
            <p className='text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter'>
              {t.solutions}
            </p>
            <div className='flex flex-col gap-3'>
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className='text-lg font-bold text-primary-600 dark:text-primary-400'
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-black uppercase tracking-tighter ${
                pathname === link.href
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className='w-20 h-1 bg-primary-600/20 rounded-full my-4' />

          <button
            onClick={() => {
              toggleLanguage()
              setIsOpen(false)
            }}
            aria-label={
              isArabic
                ? 'Switch language to English'
                : 'Switch language to Arabic'
            }
            className='flex items-center gap-3 text-gray-900 dark:text-white font-bold text-lg uppercase'
          >
            <Languages className='h-6 w-6 text-primary-600' />
            <span>{isArabic ? 'Switch to English' : 'تحويل إلى العربية'}</span>
          </button>

          <Link
            href='/contact'
            onClick={() => setIsOpen(false)}
            className='w-full max-w-xs py-5 bg-primary-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-primary-600/30 text-center'
          >
            Contact Us!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
