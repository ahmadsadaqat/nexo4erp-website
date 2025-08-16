export default function AboutPage() {
  return (
    <main className="container mx-auto px-5 max-w-[1150px]">
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">About Us</h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 max-w-3xl">
          At Nexo4 ERP, we believe that technology should empower businesses, not complicate them. Founded with the
          vision of creating a truly integrated and user-friendly ERP platform, Nexo4 ERP helps organizations gain
          <span className="font-semibold text-teal-700 dark:text-teal-400"> Zero Chaos – Maximum Control </span>
          over their operations.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Our platform combines powerful automation, real-time analytics, and seamless module integration to
              streamline your core business functions — from finance and inventory to sales, procurement, and beyond.
            </p>
            <p>
              We are driven by four core values — Efficiency, Transparency, Scalability, and Innovation — represented
              in our name and our four signature bars. These values shape every feature we build and every client
              relationship we maintain.
            </p>
            <p>
              With a dedicated team of ERP specialists, industry consultants, and technology experts, we ensure that
              every implementation is tailored to meet your unique business needs. Whether you are a small enterprise
              looking to establish structured processes or a large corporation aiming for digital transformation,
              Nexo4 ERP is your trusted growth partner.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white dark:bg-slate-800/60 border border-teal-500/15 dark:border-teal-500/25 shadow-lg backdrop-blur">
            <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">At a Glance</h2>
            <ul className="grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              {[
                "Integrated modules",
                "Real-time dashboards",
                "Modular scalability",
                "Implementation support",
                "Secure & compliant",
                "Cloud-ready architecture",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To empower businesses with intuitive, reliable, and scalable ERP solutions that deliver measurable results
              and foster long-term growth.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the most trusted ERP solution in the region, known for simplifying complexity and enabling
              organizations to thrive in the digital era.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Why Choose Nexo4 ERP?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "All-in-One Solution",
                desc: "Finance, Sales, Procurement, Inventory, HR, and more in one platform.",
              },
              {
                title: "Real-Time Insights",
                desc: "Data-driven decision-making with instant reporting.",
              },
              {
                title: "Customizable Workflows",
                desc: "Tailored to fit your specific operational needs.",
              },
              {
                title: "Local Expertise, Global Standards",
                desc: "Understanding your market while delivering world-class performance.",
              },
              { title: "Dedicated Support", desc: "From onboarding to daily operations, we’re with you every step." },
              {
                title: "Scalable Architecture",
                desc: "Grow confidently with modular expansion and performance-ready design.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white dark:bg-slate-800/60 border border-teal-500/12 dark:border-teal-500/25 rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 backdrop-blur"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-teal-500/15 dark:border-teal-500/25 bg-gradient-to-br from-emerald-100/60 via-teal-50/30 to-transparent dark:from-teal-600/10 dark:via-slate-800/40 dark:to-transparent p-8 md:p-10 shadow-lg backdrop-blur mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Built for clarity, designed for growth.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mb-6 leading-relaxed">
            Whether you are replacing spreadsheets or upgrading from outdated systems, Nexo4 ERP gives you the control,
            visibility, and scalability you need to operate with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Talk to an Expert
            </a>
            <a
              href="/features"
              className="inline-flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-teal-700 dark:text-teal-400 border border-teal-500/15 dark:border-teal-500/30 px-6 py-3 font-medium shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
