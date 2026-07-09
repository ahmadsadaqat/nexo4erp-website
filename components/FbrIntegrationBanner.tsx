'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

interface FbrIntegrationBannerProps {
  isArabic?: boolean
}

export default function FbrIntegrationBanner({ isArabic }: FbrIntegrationBannerProps) {
  return (
    <section className='py-16 bg-gradient-to-r from-emerald-900 to-emerald-700 dark:from-emerald-950 dark:to-emerald-900 text-white relative overflow-hidden'>
      <div className='absolute inset-0 bg-[url("/grid-pattern.svg")] opacity-10 mix-blend-overlay' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <ScrollReveal>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
            <div className='flex-1 text-center lg:text-left rtl:lg:text-right'>
              <div className='inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/50 rounded-full text-emerald-200 text-sm font-semibold mb-6 border border-emerald-500/30'>
                <ShieldCheck className='w-4 h-4' />
                {isArabic ? 'متوافق مع FBR' : '100% FBR Compliant'}
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4 leading-tight'>
                {isArabic 
                  ? 'هل نظامك متصل بـ FBR؟' 
                  : 'Is your ERP system FBR integrated?'}
              </h2>
              <p className='text-emerald-100 text-lg md:text-xl max-w-2xl leading-relaxed'>
                {isArabic 
                  ? 'تجنب الغرامات وقم بأتمتة الضرائب الخاصة بك. نحن نوفر تكامل FBR POS من المستوى 1 لشركات البيع بالتجزئة والتصنيع في باكستان.' 
                  : 'Avoid penalties and automate your tax reporting. We provide Tier-1 FBR POS integration for retail and manufacturing businesses in Pakistan.'}
              </p>
            </div>
            <div className='shrink-0'>
              <Link
                href='/fbr-erp'
                className='inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-emerald-900/20 hover:-translate-y-1'
              >
                {isArabic ? 'اكتشف تكامل FBR' : 'Explore FBR Integration'}
                <ArrowRight className='w-5 h-5 rtl:rotate-180' />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
