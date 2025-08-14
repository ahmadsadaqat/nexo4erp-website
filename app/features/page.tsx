export default function FeaturesPage() {
  const features = [
    {
      title: "Finance & Accounting",
      description:
        "Chart of accounts, journals, AR/AP, aging, bank reconciliation, multi-currency, financial statements.",
    },
    {
      title: "Sales & CRM",
      description: "Leads, opportunities, quotations, orders, delivery, invoicing, pipelines and activity logs.",
    },
    {
      title: "Inventory & Warehouse",
      description: "Items, batches & serials, bins & locations, stock ledger, transfers, picking & packing.",
    },
    {
      title: "Purchasing",
      description: "Suppliers, RFQ, purchase orders, receipts (GRN), returns, three-way matching.",
    },
    {
      title: "Point of Sale",
      description: "Fast billing UI, barcode, discounts, returns, cash/card, day-end closing.",
    },
    {
      title: "HR & Payroll",
      description: "Employee master, attendance, leave, earnings & deductions, payroll cycles, payslips.",
    },
    {
      title: "Approvals & Audit Trail",
      description: "Role-based workflow, maker-checker, version history, logs.",
    },
    {
      title: "Reports & Dashboards",
      description: "Real-time KPIs, drill-downs, export to Excel/PDF, schedule reports.",
    },
    {
      title: "Multi-Company / Multi-Currency",
      description: "Consolidation, intercompany, exchange rates, localization.",
    },
  ]

  return (
    <main className="container mx-auto px-5 max-w-[1150px]">
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Features</h1>
        <p className="text-slate-600 text-lg mb-8 max-w-3xl">A modular ERP that adapts to your business.</p>

        <div className="grid md:grid-cols-2 gap-4.5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-teal-500/12 rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
