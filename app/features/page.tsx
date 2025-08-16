import { BarChart3, Building2, DollarSign, FileText, Layers, Network, Package, ShoppingCart, Users2 } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "Finance & Accounting",
      description:
        "Chart of accounts, journals, AR/AP, aging, reconciliation, consolidation, multi-currency financials.",
      icon: DollarSign,
      accent: "from-teal-500/25 to-emerald-400/20",
    },
    {
      title: "Sales & CRM",
      description: "Leads, opportunities, quotes to cash, pipelines, activities, follow-ups, conversion analytics.",
      icon: ShoppingCart,
      accent: "from-emerald-500/25 to-teal-400/20",
    },
    {
      title: "Inventory & Warehouse",
      description: "Batches, serials, bins, putaway, reservations, stock ledger, transfers, cycle counts.",
      icon: Package,
      accent: "from-teal-500/25 to-cyan-400/20",
    },
    {
      title: "Purchasing",
      description: "Supplier management, RFQs, PO lifecycle, GRN, returns, three-way match & approvals.",
      icon: Layers,
      accent: "from-cyan-500/25 to-teal-400/20",
    },
    {
      title: "Point of Sale",
      description: "Fast UI, barcode, discounts, returns, multi-pay modes, sessions & day-end closing.",
      icon: Network,
      accent: "from-teal-500/25 to-emerald-400/20",
    },
    {
      title: "HR & Payroll",
      description: "Employees, attendance, leave, earnings & deductions, payroll runs, slips & compliance.",
      icon: Users2,
      accent: "from-emerald-500/25 to-teal-400/20",
    },
    {
      title: "Approvals & Audit Trail",
      description: "Role workflows, maker-checker, immutable logs, version diff, accountability insights.",
      icon: FileText,
      accent: "from-teal-500/25 to-cyan-400/20",
    },
    {
      title: "Reports & Dashboards",
      description: "Real-time KPIs, drill-down, pivoting, export, scheduled delivery & snapshot baselining.",
      icon: BarChart3,
      accent: "from-teal-500/25 to-emerald-400/20",
    },
    {
      title: "Multi-Company / Multi-Currency",
      description: "Intercompany, eliminations, exchange rates, localized formats & compliance layers.",
      icon: Building2,
      accent: "from-emerald-500/25 to-teal-400/20",
    },
  ]

  return (
    <main className="container mx-auto px-5 max-w-[1150px]">
      <section className="py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight text-slate-900 dark:text-white">
            Platform Features
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A modular ERP engineered for clarity, speed, and controlled growth. Start focused—scale without
            re-platforming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-16">
          {features.map(({ title, description, icon: Icon, accent }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-white/90 dark:bg-slate-800/60 border border-teal-500/12 dark:border-teal-500/25 shadow-lg backdrop-blur px-5 py-6 flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accent}`}
              />
              <div className="relative flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-teal-600/10 dark:bg-teal-500/10 flex items-center justify-center ring-1 ring-teal-600/20 dark:ring-teal-500/30">
                  <Icon className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight">{title}</h3>
              </div>
              <p className="relative text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                {description}
              </p>
              <div className="relative mt-5 flex items-center text-xs font-medium text-teal-700 dark:text-teal-400 gap-1 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                <span>Learn more</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-teal-500/15 dark:border-teal-500/25 bg-gradient-to-br from-emerald-100/60 via-teal-50/30 to-transparent dark:from-teal-600/10 dark:via-slate-800/40 dark:to-transparent p-8 md:p-10 shadow-lg backdrop-blur text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Need something more specific?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Add workflows, extend objects, or integrate external services. Our modular core lets you evolve without
            disruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Talk to Product Team
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 border border-teal-500/15 dark:border-teal-500/30 px-6 py-3 font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Explore Roadmap
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
