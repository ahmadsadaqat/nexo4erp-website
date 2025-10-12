// import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { HeroSection } from '@/components/blocks/hero-section-1'

export default function HomePage() {
  return (
    <>
      <main className='container mx-auto px-5 max-w-[1150px] '>
        <HeroSection />
        <Features />
        <Pricing />
      </main>
    </>
  )
}
