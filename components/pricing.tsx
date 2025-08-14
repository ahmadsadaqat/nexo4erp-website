import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-100/50 via-teal-50/30 to-transparent dark:from-slate-800/40 dark:via-slate-900/30 dark:to-transparent rounded-3xl">
      <div className="px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Transparent Pricing</h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">Simple structure that grows with you.</p>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white dark:bg-slate-800/70 border border-teal-500/12 dark:border-teal-500/25 rounded-2xl p-8 shadow-lg backdrop-blur">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">
              Get a customized ERP solution tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 dark:shadow-teal-900/40">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-teal-700 text-teal-700 dark:text-teal-400 dark:border-teal-500/40 hover:bg-teal-50 dark:hover:bg-slate-700/50 px-8 py-3 bg-transparent"
              >
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-6">
           • Customization depends on complexity.
        </p>
      </div>
    </section>
  )
}
