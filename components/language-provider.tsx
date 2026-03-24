'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

interface LanguageContextType {
  isArabic: boolean
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  isArabic: false,
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isArabic, setIsArabic] = useState(false)

  const toggleLanguage = useCallback(() => {
    setIsArabic((prev) => {
      const next = !prev
      document.documentElement.dir = next ? 'rtl' : 'ltr'
      document.documentElement.lang = next ? 'ar' : 'en'
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
