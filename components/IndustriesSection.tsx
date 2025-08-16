// components/IndustriesSection.jsx
import {
  Factory,
  Package,
  ShoppingCart,
  Building2,
  GraduationCap,
  Stethoscope,
  Leaf,
  Briefcase,
  UtensilsCrossed,
  HeartHandshake,
} from "lucide-react";
import type React from "react";

interface Industry {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  accent?: string;
}

const industries: Industry[] = [
  {
    name: "Manufacturing",
    icon: Factory,
    features: [
      "Production Planning & Scheduling",
      "Bill of Materials (BOM)",
      "Quality Control & Compliance",
      "Inventory & Supply Chain Optimization",
    ],
    accent: "from-teal-500/25 to-emerald-400/20",
  },
  {
    name: "Wholesale & Distribution",
    icon: Package,
    features: [
      "Multi-Warehouse Management",
      "Order Tracking & Fulfillment",
      "Supplier & Purchase Management",
      "Sales Reporting & Analytics",
    ],
    accent: "from-emerald-500/25 to-teal-400/20",
  },
  {
    name: "Retail & POS",
    icon: ShoppingCart,
    features: [
      "Integrated Point-of-Sale (POS)",
      "Centralized Pricing & Promotions",
      "Real-Time Inventory Updates",
      "Customer Loyalty & Rewards",
    ],
    accent: "from-teal-500/25 to-cyan-400/20",
  },
  {
    name: "Construction & Contracting",
    icon: Building2,
    features: [
      "Project Costing & Budget Tracking",
      "Resource Allocation",
      "Contractor & Vendor Management",
      "Milestone & Progress Monitoring",
    ],
    accent: "from-cyan-500/25 to-teal-400/20",
  },
  {
    name: "Education",
    icon: GraduationCap,
    features: [
      "Student Admissions & Records",
      "Timetable & Attendance Management",
      "Fee Billing & Collection",
      "HR & Payroll for Staff",
    ],
    accent: "from-teal-500/25 to-emerald-400/20",
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    features: [
      "Patient & Appointment Management",
      "Electronic Medical Records (EMR)",
      "Pharmacy & Inventory Tracking",
      "Billing & Insurance Integration",
    ],
    accent: "from-emerald-500/25 to-teal-400/20",
  },
  {
    name: "Agriculture & Farming",
    icon: Leaf,
    features: [
      "Crop & Livestock Tracking",
      "Supply Chain Integration",
      "Expense & Revenue Monitoring",
      "Equipment & Resource Management",
    ],
    accent: "from-teal-500/25 to-lime-400/20",
  },
  {
    name: "Services & Consulting",
    icon: Briefcase,
    features: [
      "Project Planning & Task Management",
      "CRM & Client Engagement",
      "Time Tracking & Billing",
      "Performance Analytics",
    ],
    accent: "from-teal-500/25 to-emerald-400/20",
  },
  {
    name: "Hospitality & Restaurants",
    icon: UtensilsCrossed,
    features: [
      "Reservation & Room Management",
      "Menu & Recipe Management",
      "POS for Restaurants & Cafes",
      "Inventory & Supplier Coordination",
    ],
    accent: "from-teal-500/25 to-cyan-400/20",
  },
  {
    name: "Nonprofits & NGOs",
    icon: HeartHandshake,
    features: [
      "Donation & Fund Tracking",
      "Volunteer Management",
      "Project & Event Planning",
      "Financial Reporting & Compliance",
    ],
    accent: "from-emerald-500/25 to-teal-400/20",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5 max-w-[1150px]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight text-slate-900 dark:text-white">
            Industries We Serve
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Nexo4 ERP adapts intelligently across sectors—delivering real-time
            visibility, compliance, and process excellence from the factory floor
            to field service, retail counters, and strategic operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-12">
          {industries.map(({ name, icon: Icon, features, accent }) => (
            <div
              key={name}
              className="group relative rounded-2xl bg-white/90 dark:bg-slate-800/60 border border-teal-500/12 dark:border-teal-500/25 shadow-lg backdrop-blur px-5 py-6 flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accent}`}
              />
              <div className="relative flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-teal-600/10 dark:bg-teal-500/10 flex items-center justify-center ring-1 ring-teal-600/20 dark:ring-teal-500/30">
                  <Icon className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
                  {name}
                </h3>
              </div>
              <ul className="relative grid gap-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-teal-500/15 dark:border-teal-500/25 bg-gradient-to-br from-emerald-100/60 via-teal-50/30 to-transparent dark:from-teal-600/10 dark:via-slate-800/40 dark:to-transparent p-8 md:p-10 shadow-lg backdrop-blur text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Not sure if we fit your industry?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Our modular architecture lets you start lean and expand quickly. Let us
            map your workflows to a unified and scalable operating system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Talk to Solutions Team
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 border border-teal-500/15 dark:border-teal-500/30 px-6 py-3 font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Explore Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}