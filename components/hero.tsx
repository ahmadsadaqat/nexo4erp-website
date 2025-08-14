import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="grid md:grid-cols-[1.1fr_1fr] gap-9 items-center py-14 md:py-20">
      <div className="order-2 md:order-1">
        <div className="bg-white border border-teal-500/12 rounded-[22px] p-5.5 shadow-lg relative overflow-hidden">
          <div className="absolute top-3.5 left-3.5 bg-white px-3 py-2 rounded-full border border-teal-500/15 text-xs text-slate-700 shadow-lg z-10">
            Future-Ready
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-radial from-emerald-200/80 to-transparent blur-sm animate-pulse" />
          <Image
            src="/login-theme.png"
            alt="Nexo4 ERP UI Preview"
            width={600}
            height={400}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="order-1 md:order-2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-slate-900">
          Zero Chaos. Maximum Control —
        </h1>
        <p className="text-slate-600 text-lg mb-6 max-w-2xl">
          Transforming complexity into clarity with a modern ERP built for speed, visibility, and growth.
        </p>

        <div className="flex gap-3 mb-6">
          <Button
            asChild
            className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            <Link href="/pricing">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white text-teal-700 border-teal-500/15 shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            <Link href="/features">Explore Features</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5">
          <div className="bg-white border border-teal-500/12 rounded-2xl p-5 text-center shadow-lg">
            <div className="text-2xl font-bold text-teal-700 mb-1">99.9%</div>
            <div className="text-sm text-slate-600">Uptime</div>
          </div>
          <div className="bg-white border border-teal-500/12 rounded-2xl p-5 text-center shadow-lg">
            <div className="text-2xl font-bold text-teal-700 mb-1">24/7</div>
            <div className="text-sm text-slate-600">Support</div>
          </div>
          <div className="bg-white border border-teal-500/12 rounded-2xl p-5 text-center shadow-lg">
            <div className="text-2xl font-bold text-teal-700 mb-1">Fast</div>
            <div className="text-sm text-slate-600">Onboarding</div>
          </div>
          <div className="bg-white border border-teal-500/12 rounded-2xl p-5 text-center shadow-lg px-0">
            <div className="text-2xl font-bold text-teal-700 mb-1">Modular</div>
            <div className="text-sm text-slate-600">Scale as you grow</div>
          </div>
        </div>
      </div>
    </section>
  )
}
