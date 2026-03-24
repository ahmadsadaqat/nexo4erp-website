'use client'

import Hero from '@/components/Hero'
import TrustedClients from '@/components/TrustedClients'
import Solutions from '@/components/Solutions'
import Industries from '@/components/Industries'
import Integrations from '@/components/Integrations'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Packages from '@/components/Packages'
import About from '@/components/About'
import Blog from '@/components/Blog'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import { BLOG_POSTS, TESTIMONIALS } from '@/lib/constants'
import { useLanguage } from '@/components/language-provider'

export default function HomePage() {
  const { isArabic } = useLanguage()

  return (
    <main className='relative z-10'>
      <Hero isArabic={isArabic} />
      <TrustedClients isArabic={isArabic} />
      <Solutions isArabic={isArabic} />
      <Industries onSelectIndustry={() => {}} isArabic={isArabic} />
      <Integrations isArabic={isArabic} />
      <Features isArabic={isArabic} />
      <Testimonials
        isArabic={isArabic}
        testimonials={TESTIMONIALS}
        onSeeAll={() => {}}
      />
      <Packages isArabic={isArabic} />
      <About isArabic={isArabic} />
      <Blog
        isArabic={isArabic}
        blogs={BLOG_POSTS}
        onReadMore={() => {}}
        onSeeAll={() => {}}
      />
      <FAQ isArabic={isArabic} />
      <Contact isArabic={isArabic} />
    </main>
  )
}
