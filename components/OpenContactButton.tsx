'use client'

import { ChevronRight } from 'lucide-react'

interface OpenContactButtonProps {
  label?: string
  className?: string
}

export default function OpenContactButton({
  label = 'Book Free Consultation',
  className = 'px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-xl inline-flex items-center gap-2',
}: OpenContactButtonProps) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
      className={className}
    >
      {label}
      <ChevronRight className='w-4 h-4' />
    </button>
  )
}
