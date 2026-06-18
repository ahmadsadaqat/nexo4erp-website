'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { TRANSLATIONS } from '@/lib/constants'
import { useLanguage } from '@/components/language-provider'

const WHATSAPP_NUMBER = '923329400079'

export default function WhatsAppButton() {
  const { isArabic } = useLanguage()
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en

  const message = isArabic
    ? 'مرحباً، أود التحدث عبر واتساب بخصوص خدمات NEXO 4 ERP.'
    : 'Hello, I would like to chat on WhatsApp about NEXO 4 ERP services.'

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <Link
      href={whatsappLink}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={t.whatsappChat}
      className='fixed bottom-5 right-5 z-[90] inline-flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-2xl shadow-emerald-500/30 transition-transform duration-300 hover:-translate-y-1 hover:bg-emerald-600 md:bottom-6 md:right-6'
    >
      <MessageCircle className='h-5 w-5' />
      <span className='hidden sm:inline text-sm font-semibold'>{t.whatsappChat}</span>
    </Link>
  )
}