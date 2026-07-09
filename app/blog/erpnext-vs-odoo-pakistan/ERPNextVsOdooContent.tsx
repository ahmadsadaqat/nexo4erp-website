'use client'

import Link from 'next/link'
import { ArrowLeft, Check, X as XIcon, ChevronRight } from 'lucide-react'

const COMPARISON_TABLE = [
  {
    factor: 'Core platform',
    erpnext: 'Frappe ERPNext',
    odoo: 'Odoo Community / Enterprise',
  },
  {
    factor: 'Licensing cost',
    erpnext: 'Free (open source)',
    odoo: 'Free community / paid enterprise',
  },
  {
    factor: 'Best for',
    erpnext: 'Manufacturing, NGO, services',
    odoo: 'Trading, retail, e-commerce',
  },
  {
    factor: 'Customization',
    erpnext: 'Deep, via Frappe framework',
    odoo: 'Strong, via Odoo Studio / Python',
  },
  {
    factor: 'Pakistan community',
    erpnext: 'Growing',
    odoo: 'Larger, more established',
  },
  {
    factor: 'UI/UX',
    erpnext: 'Clean, functional',
    odoo: 'Polished, modern',
  },
  {
    factor: 'Local implementors',
    erpnext: 'Fewer, more specialized',
    odoo: 'More widely available',
  },
  {
    factor: 'FBR/tax support',
    erpnext: 'Available via customization',
    odoo: 'Available via customization',
  },
]

export default function ERPNextVsOdooContent() {
  return (
    <main className='relative z-10'>
      {/* Hero */}
      <section className='pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent' />
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <Link
            href='/blog'
            className='inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 mb-10 text-sm font-semibold'
          >
            <ArrowLeft className='w-4 h-4 mr-2' /> Back to Blog
          </Link>
          <div className='mb-6'>
            <span className='text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wide'>
              Comparison Guide
            </span>
            <span className='mx-3 text-gray-300 dark:text-zinc-700'>•</span>
            <span className='text-gray-500 dark:text-gray-400 text-sm'>
              May 2025
            </span>
            <span className='mx-3 text-gray-300 dark:text-zinc-700'>•</span>
            <span className='text-gray-500 dark:text-gray-400 text-sm'>
              8 min read
            </span>
          </div>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'>
            ERPNext vs Odoo for Pakistani Businesses — An Honest Comparison
            (2025)
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-400 leading-relaxed'>
            If you&apos;re evaluating ERP software for your business in
            Pakistan, you&apos;ve almost certainly come across two names:
            ERPNext (by Frappe) and Odoo. Both are open-source, both are free at
            the core, and both have active communities and local implementors in
            Pakistan. So which one should you choose?
          </p>
          <p className='text-gray-500 dark:text-gray-500 mt-4'>
            We implement both at NEXO ERP — so this isn&apos;t a sales pitch for
            one over the other. This is an honest breakdown of where each
            excels, where each falls short, and which types of businesses in
            Pakistan tend to be better suited to each platform.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className='py-16 bg-white dark:bg-zinc-950'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8'>
            Quick Comparison
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='border-b-2 border-gray-200 dark:border-zinc-800'>
                  <th className='text-left py-4 px-4 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
                    Factor
                  </th>
                  <th className='text-left py-4 px-4 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide'>
                    ERPNext (nexoERP)
                  </th>
                  <th className='text-left py-4 px-4 text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide'>
                    Odoo
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr
                    key={idx}
                    className='border-b border-gray-100 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors'
                  >
                    <td className='py-4 px-4 font-medium text-gray-900 dark:text-white text-sm'>
                      {row.factor}
                    </td>
                    <td className='py-4 px-4 text-gray-600 dark:text-gray-400 text-sm'>
                      {row.erpnext}
                    </td>
                    <td className='py-4 px-4 text-gray-600 dark:text-gray-400 text-sm'>
                      {row.odoo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ERPNext Strengths */}
      <section className='py-16 bg-gray-50 dark:bg-black'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6'>
            ERPNext Strengths for Pakistani Businesses
          </h2>
          <div className='prose dark:prose-invert max-w-none'>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
              ERPNext (the engine behind our nexoERP platform) has become the
              go-to open-source ERP for businesses that need deep manufacturing,
              NGO accounting, or project-based workflows. Its Frappe framework
              makes customization unusually clean — you can add fields,
              workflows, and reports without modifying core code, which keeps
              upgrades stable.
            </p>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
              For manufacturing companies in Pakistan — particularly in
              textiles, engineering, and food processing — ERPNext&apos;s
              production planning, BOM management, and shop-floor tracking
              modules are particularly strong.
            </p>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
              For NGOs and non-profits, ERPNext&apos;s grant management and
              donor tracking capabilities are well-suited to the compliance
              reporting requirements of international-funded organisations
              operating in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Odoo Strengths */}
      <section className='py-16 bg-white dark:bg-zinc-950'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6'>
            Odoo Strengths for Pakistani Businesses
          </h2>
          <div className='prose dark:prose-invert max-w-none'>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
              Odoo has a broader footprint in Pakistan&apos;s SME sector,
              particularly in wholesale trading, retail, and e-commerce. Its
              point-of-sale module is excellent for retail businesses. Its
              e-commerce integration (connecting your website directly to
              inventory and accounting) is more mature than ERPNext&apos;s
              equivalent.
            </p>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
              Odoo&apos;s UI is also generally more polished out-of-the-box,
              which can reduce the resistance to adoption from teams used to
              consumer-grade software.
            </p>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
              The enterprise edition adds significant features (studio, advanced
              reporting, marketing automation) but comes with per-user licensing
              costs that can add up for larger teams.
            </p>
          </div>
        </div>
      </section>

      {/* Which Should You Choose? */}
      <section className='py-16 bg-gray-50 dark:bg-black'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8'>
            Which Should You Choose?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* ERPNext */}
            <div className='bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-primary-200 dark:border-primary-900/40 shadow-lg'>
              <h3 className='text-xl font-bold text-primary-600 dark:text-primary-400 mb-5'>
                Choose ERPNext / nexoERP if:
              </h3>
              <ul className='space-y-3'>
                {[
                  "You're in manufacturing, production, or a project-based services business",
                  'You run an NGO or non-profit with grant compliance requirements',
                  'You want zero licensing costs at any scale',
                  'You need deep customization without breaking upgrades',
                  'Local Pakistani compliance (FBR, EOBI) is a priority',
                ].map((item, idx) => (
                  <li key={idx} className='flex items-start gap-3'>
                    <Check className='w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5' />
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Odoo */}
            <div className='bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-purple-200 dark:border-purple-900/40 shadow-lg'>
              <h3 className='text-xl font-bold text-purple-600 dark:text-purple-400 mb-5'>
                Choose Odoo if:
              </h3>
              <ul className='space-y-3'>
                {[
                  "You're in retail, wholesale trading, or e-commerce",
                  'You need a polished UI your team will adopt quickly',
                  'POS (point of sale) is a core requirement',
                  'You want a larger pool of local Odoo consultants to choose from',
                  "You're open to enterprise licensing for advanced features",
                ].map((item, idx) => (
                  <li key={idx} className='flex items-start gap-3'>
                    <Check className='w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5' />
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Can You Switch? */}
      <section className='py-16 bg-white dark:bg-zinc-950'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6'>
            Can You Switch Later?
          </h2>
          <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
            Yes, but it&apos;s expensive. Migrating from ERPNext to Odoo or vice
            versa after a full implementation involves significant data
            migration work and retraining. Make the right choice upfront — which
            is why we always recommend a proper requirements session before
            recommending either platform.
          </p>

          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12'>
            Conclusion
          </h2>
          <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
            Both ERPNext and Odoo are excellent choices for Pakistani
            businesses. The right answer depends on your industry, your team
            size, your budget for licensing (if any), and your specific module
            requirements.
          </p>
          <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
            At NEXO ERP, we implement both. If you&apos;d like an honest
            assessment of which is the right fit for your business, book a free
            30-minute consultation — we&apos;ll tell you straight.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-primary-600 dark:bg-primary-900/30'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Not Sure Which ERP Is Right for You?
          </h2>
          <p className='text-primary-100 text-lg mb-8 max-w-2xl mx-auto'>
            We&apos;ll assess your requirements and recommend the best fit —
            honestly. No sales pressure.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('open-contact-modal', {
                    detail: { subject: 'ERPNext vs Odoo — Help me choose' },
                  })
                )
              }
              className='px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2'
            >
              Book Free Consultation
              <ChevronRight className='w-4 h-4' />
            </button>
            <Link
              href='/services/erpnext-pakistan'
              className='px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              ERPNext Services
            </Link>
            <Link
              href='/services/odoo'
              className='px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              Odoo Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
