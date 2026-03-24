'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Languages } from 'lucide-react'
import { TRANSLATIONS } from '@/lib/constants'
import { useLanguage } from '@/components/language-provider'
import { useTheme } from 'next-themes'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isArabic, toggleLanguage } = useLanguage()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

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

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en

  const navLinks = [
    { name: t.solutions, href: '#solutions' },
    { name: t.features, href: '#features' },
    { name: t.industries, href: '#industries' },
    { name: t.editions, href: '#packages' },
    { name: t.blog, href: '#blog' },
  ]

  return (
    <div className="fixed w-full top-0 left-0 z-[100] pt-4 flex justify-center pointer-events-none">
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
          href="#"
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          {mounted && (
            <img
              src={isDark ? '/White-logo.png' : '/LOGO.png'}
              alt="Nexo ERP"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-8 md:h-9' : 'h-10 md:h-12'
              }`}
            />
          )}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-bold text-[12px] uppercase tracking-widest transition-colors duration-150 text-gray-900 dark:text-gray-100 hover:text-primary-600"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center space-x-6 border-l border-gray-300 dark:border-zinc-700 pl-8 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-8">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 font-black text-[11px] uppercase text-gray-900 dark:text-white"
            >
              <Languages className="h-4 w-4" />
              <span>{isArabic ? 'English' : 'العربية'}</span>
            </button>

            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="text-gray-900 dark:text-white"
            >
              {mounted &&
                (isDark ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5" />
                ))}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-900 dark:text-white p-2"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 h-screen w-full bg-white dark:bg-zinc-950 z-[120] transition-all duration-500 md:hidden pointer-events-auto ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-8 py-8 w-full">
          {mounted && (
            <img
              src={isDark ? '/White-logo.png' : '/LOGO.png'}
              alt="Nexo ERP"
              className="h-10 w-auto"
            />
          )}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="text-gray-900 dark:text-white"
            >
              {mounted &&
                (isDark ? (
                  <Sun size={24} className="text-yellow-400" />
                ) : (
                  <Moon size={24} />
                ))}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-600 p-2"
            >
              <X size={32} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow space-y-8 px-6 mt-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}

          <div className="w-20 h-1 bg-primary-600/20 rounded-full my-4" />

          <button
            onClick={() => {
              toggleLanguage()
              setIsOpen(false)
            }}
            className="flex items-center gap-3 text-gray-900 dark:text-white font-bold text-lg uppercase"
          >
            <Languages className="h-6 w-6 text-primary-600" />
            <span>
              {isArabic ? 'Switch to English' : 'تحويل إلى العربية'}
            </span>
          </button>

          <button
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="w-full max-w-xs py-5 bg-primary-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-primary-600/30"
          >
            Contact Us!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
