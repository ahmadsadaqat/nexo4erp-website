'use client'

import { ChevronRight } from 'lucide-react'

export default function OpenContactButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
      className='px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-xl inline-flex items-center gap-2'
    >
      Book Free Consultation
      <ChevronRight className='w-4 h-4' />
    </button>
  )
}
