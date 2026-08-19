'use client'

import Hero from '@/components/Hero'
import TrustedClients from '@/components/TrustedClients'
import Solutions, { PakistanTrustSection } from '@/components/Solutions'
import Industries from '@/components/Industries'
import Integrations from '@/components/Integrations'
import FbrIntegrationBanner from '@/components/FbrIntegrationBanner'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Packages from '@/components/Packages'
import About from '@/components/About'
import Blog from '@/components/Blog'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import { BLOG_POSTS, TESTIMONIALS } from '@/lib/constants'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className='relative z-10'>
      <Hero />
      <TrustedClients />
      <Solutions />
      <FbrIntegrationBanner />
      <PakistanTrustSection />
      <Industries />
      <Integrations />
      <Features />
      <Testimonials
        testimonials={TESTIMONIALS}
        onSeeAll={() => router.push('/testimonials')}
      />
      <Packages />
      <About />
      <Blog
        blogs={BLOG_POSTS}
        onReadMore={() => {}}
        onSeeAll={() => {}}
      />
      <FAQ />
      <Contact />
    </main>
  )
}
