import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPackages = [
  {
    name: "Basic ERP",
    description: "Perfect for small businesses getting started",
    priceUSD: "$100 - $1,000",
    features: [
      "Core ERP modules",
      "Up to 10 users",
      "Basic reporting",
      "Email support",
      "3 months support",
      "Cloud deployment"
    ],
    popular: false,
    isContactUs: false
  },
  {
    name: "Professional ERP",
    description: "Ideal for growing businesses",
    priceUSD: "$1,500 - $2,500",
    features: [
      "All Basic features",
      "Advanced modules",
      "Up to 50 users",
      "Advanced analytics & dashboards",
      "Priority support",
      "6 months support",
      "Custom integrations",
      "Training included"
    ],
    popular: true,
    isContactUs: false
  },
  {
    name: "Enterprise ERP",
    description: "Complete solution for large organizations",
    priceUSD: "",
    features: [
      "All Professional features",
      "Unlimited users",
      "Full customization",
      "AI-powered insights",
      "24/7 dedicated support",
      "12 months support",
      "Multi-location support",
      "Advanced security features",
      "On-premise option available"
    ],
    popular: false,
    isContactUs: true
  }
]

export function Pricing() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-100/50 via-teal-50/30 to-transparent dark:from-slate-800/40 dark:via-slate-900/30 dark:to-transparent rounded-3xl">
      <div className="px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900 dark:text-white">Transparent Pricing</h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg mb-12 text-center max-w-2xl mx-auto">
          Choose the perfect plan for your business. All packages include deployment and training.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800/70 border rounded-2xl p-8 shadow-lg backdrop-blur transition-all hover:scale-105 hover:shadow-xl ${
                pkg.popular
                  ? "border-teal-500 dark:border-teal-500 ring-2 ring-teal-500/20"
                  : "border-teal-500/12 dark:border-teal-500/25"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">{pkg.description}</p>

              <div className="mb-6 text-center">
                {pkg.isContactUs ? (
                  <div className="py-4">
                    <span className="text-3xl font-bold text-teal-700 dark:text-teal-400">Contact Us</span>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Custom pricing based on your needs</p>
                  </div>
                ) : (
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-teal-700 dark:text-teal-400">{pkg.priceUSD}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">USD</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  pkg.popular
                    ? "bg-teal-700 hover:bg-teal-800 text-white"
                    : "bg-teal-50 hover:bg-teal-100 text-teal-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-teal-400"
                }`}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white dark:bg-slate-800/70 border border-teal-500/12 dark:border-teal-500/25 rounded-2xl p-8 shadow-lg backdrop-blur">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Need a Custom Solution?</h3>
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
          • All prices are starting rates. Final pricing depends on customization and complexity.
        </p>
      </div>
    </section>
  )
}
