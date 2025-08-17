import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="grid md:grid-cols-[1.1fr_1fr] gap-9 items-center py-14 md:py-20">
      <div className="order-2 md:order-1">
        <div className="bg-white dark:bg-slate-800/60 backdrop-blur border border-teal-500/12 dark:border-teal-500/20 rounded-[22px] p-5.5 shadow-lg relative overflow-hidden">
          <div className="absolute top-3.5 left-3.5 bg-white dark:bg-slate-700/70 px-3 py-2 rounded-full border border-teal-500/15 dark:border-teal-500/25 text-xs text-slate-700 dark:text-slate-200 shadow-lg z-10">
            Future-Ready
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-radial from-emerald-200/80 to-transparent dark:from-teal-500/30 dark:to-transparent blur-sm animate-pulse" />
          <Image
            src="/login-theme.png"
            alt="Nexo4 ERP UI Preview"
            width={600}
            height={400}
            className="w-full rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10"
          />
        </div>
      </div>

      <div className="order-1 md:order-2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-slate-900 dark:text-white">
          Zero Chaos. Maximum Control —
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 max-w-2xl">
          Transforming complexity into clarity with a modern ERP built for speed, visibility, and growth.
        </p>

        <div className="flex gap-3 mb-6">

          <Button
            asChild
            variant="outline"
            className="bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 border-teal-500/15 dark:border-teal-500/30 shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            <Link href="/features">Explore Features</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4.5 justify-items-center-safe">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
            { value: "Fast", label: "Onboarding" },
            { value: "Modular", label: "Scale as you grow" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-slate-800/60 border border-teal-500/12 dark:border-teal-500/25 rounded-2xl p-6 text-center shadow-lg backdrop-blur"
            >
              <div className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
