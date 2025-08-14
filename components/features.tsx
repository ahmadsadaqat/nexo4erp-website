export function Features() {
  const features = [
    {
      icon: "FI",
      title: "Finance & Accounting",
      description: "Real-time GL, multi-currency, audit-ready statements.",
    },
    {
      icon: "SC",
      title: "Sales & CRM",
      description: "Leads to invoices in one flow with a customer 360.",
    },
    {
      icon: "IN",
      title: "Inventory & Warehouse",
      description: "Batch/serial tracking, bins, smart re-order levels.",
    },
    {
      icon: "PU",
      title: "Purchasing",
      description: "Vendors, RFQs, approvals, and GRN control.",
    },
    {
      icon: "POS",
      title: "Point of Sale",
      description: "Fast billing, multiple payments, returns.",
    },
    {
      icon: "HR",
      title: "HR & Payroll",
      description: "Employees, attendance, allowances, deductions.",
    },
  ]

  return (
    <section className="py-16" id="features">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Powerful features</h2>
      <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-3xl">
        All-in-one integration connecting Finance, Sales, Inventory, Purchasing, POS, and HR & Payroll with real-time
        insights.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800/60 border border-teal-500/12 dark:border-teal-500/25 rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 backdrop-blur"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-200 to-teal-300 dark:from-teal-500/30 dark:to-emerald-400/20 flex items-center justify-center font-bold text-slate-800 dark:text-teal-100 text-sm tracking-wide mb-2">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
