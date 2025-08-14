import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"

export default function HomePage() {
  return (
    <>
      <main className="container mx-auto px-5 max-w-[1150px]">
        <Hero />
        <Features />
        <Pricing />
      </main>
    </>
  )
}
