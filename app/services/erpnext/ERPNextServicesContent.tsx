'use client'

import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import {
  ArrowLeft,
  Database,
  Code,
  ArrowLeftRight,
  BookOpen,
  Shield,
  Check,
  ChevronRight,
} from 'lucide-react'

const ERPNEXT_SERVICES = [
  {
    title: 'ERPNext Implementation',
    description:
      'Complete greenfield ERPNext deployment. We start with a business process review, configure all required modules (Accounts, Inventory, HR, Manufacturing, CRM, Projects), migrate your data, and take you live — with zero surprises on timeline or cost.',
    icon: Database,
  },
  {
    title: 'ERPNext Customization & Module Development',
    description:
      "Frappe's architecture makes deep customization possible without breaking upgrades. We build custom doctypes, print formats, automated workflows, custom reports, and API integrations with third-party tools (payment gateways, e-commerce, FBR IRIS, etc.).",
    icon: Code,
  },
  {
    title: 'ERPNext Migration',
    description:
      'Moving to ERPNext from QuickBooks, Sage, Microsoft Dynamics, Tally, or a custom-built system? We handle schema mapping, data extraction, transformation, validation, and parallel-run testing — so your historical data is clean and your team is confident on day one.',
    icon: ArrowLeftRight,
  },
  {
    title: 'ERPNext Training',
    description:
      'Role-based training for every user level: end-user workshops, department-head sessions, and system administrator deep-dives. Delivered in Lahore or remotely across Pakistan, in Urdu or English.',
    icon: BookOpen,
  },
  {
    title: 'ERPNext Support & Maintenance',
    description:
      'Post go-live support retainers covering bug fixes, user queries, system updates, new module rollouts, and monthly performance reviews. You get a dedicated point of contact — not a ticket queue.',
    icon: Shield,
  },
]

const MODULES = [
  'Accounts & Finance',
  'Inventory & Stock',
  'Manufacturing & Production',
  'Purchase & Procurement',
  'Sales & CRM',
  'HR & Payroll',
  'Projects',
  'Point of Sale',
  'Quality',
  'Asset Management',
  'Website & E-commerce',
]

const COMPLIANCE = [
  'FBR tax configuration (sales tax, withholding tax, income tax)',
  'EOBI and PESSI payroll deductions',
  'Pakistani chart of accounts',
  'SRB (Sindh Revenue Board) where applicable',
]

const FAQS = [
  {
    question: 'How long does ERPNext implementation take?',
    answer:
      'A focused ERPNext project can take 2–4 weeks for smaller businesses, while larger multi-department rollouts often take 3–6 months.',
  },
  {
    question: 'Do you handle Pakistan compliance?',
    answer:
      'Yes. We configure FBR tax rules, payroll deductions, chart of accounts, and other local compliance settings.',
  },
  {
    question: 'Can you migrate from another system?',
    answer:
      'Yes. We support migration from QuickBooks, Tally, Microsoft Dynamics, SAP B1, and custom systems.',
  },
  {
    question: 'Do you offer support after go-live?',
    answer:
      'Yes. We provide ongoing support retainers, updates, bug fixes, and user assistance after launch.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ERPNext Implementation Services',
  provider: {
    '@type': 'Organization',
    name: 'Nexo4ERP',
  },
  areaServed: 'Pakistan',
  serviceType: 'ERPNext implementation, customization, migration, and support',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.nexo4erp.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.nexo4erp.com/services/erpnext',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'ERPNext',
      item: 'https://www.nexo4erp.com/services/erpnext',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function ERPNextServicesContent() {
  return (
    <main className='relative z-10'>
      {/* Hero */}
      <section className='pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent' />
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <Link
            href='/'
            className='inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 mb-10 text-sm font-semibold'
          >
            <ArrowLeft className='w-4 h-4 mr-2' /> Back to Home
          </Link>
          <div className='max-w-4xl'>
            <h2 className='text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3'>
              ERPNext Services
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Frappe ERPNext Implementation{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Services in Pakistan
              </span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl'>
              Nexo4ERP is a Pakistan-based ERPNext implementation partner with
              extensive Frappe framework expertise. Through our nexoERP offering
              — built on Frappe ERPNext — we deliver fully customised ERP
              implementations for businesses across Lahore, Karachi, Islamabad,
              and nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* What is nexoERP */}
      <section className='py-16 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
              What is nexoERP?
            </h2>
            <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6'>
              nexoERP is Nexo4ERP&apos;s branded ERPNext implementation — Frappe
              ERPNext configured, customised, and optimised for Pakistani
              business workflows. You get the full power of open-source ERPNext
              (zero licensing fees) with our layer of industry-specific
              customizations, local compliance configurations (FBR tax, EOBI,
              Pakistani payroll), and dedicated support.
            </p>
            <p className='text-gray-500 dark:text-gray-500 leading-relaxed'>
              Under the hood, it&apos;s 100% Frappe ERPNext — battle-tested,
              community-backed, and used by 500,000+ businesses globally.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className='py-20 bg-gray-50 dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center'>
            Our ERPNext Services
          </h2>
          <p className='text-gray-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-14'>
            Whether you&apos;re implementing ERPNext for the first time,
            migrating from legacy software, or need ongoing customization, our
            consultants own the entire process.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {ERPNEXT_SERVICES.map((service, idx) => (
              <div
                key={idx}
                className='group bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mb-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300'>
                  <service.icon className='w-6 h-6' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules We Implement */}
      <section className='py-20 bg-white dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center'>
            ERPNext Modules We Implement
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto'>
            {MODULES.map((module, idx) => (
              <div
                key={idx}
                className='flex items-center gap-3 bg-gray-50 dark:bg-zinc-900 rounded-xl px-4 py-3 border border-gray-100 dark:border-zinc-800'
              >
                <div className='w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0'>
                  <Check className='w-3 h-3 text-primary-600 dark:text-primary-400' />
                </div>
                <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                  {module}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Compliance */}
      <section className='py-16 bg-gray-50 dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
              Local Compliance We Handle
            </h2>
            <div className='space-y-4'>
              {COMPLIANCE.map((item, idx) => (
                <div
                  key={idx}
                  className='flex items-start gap-4 bg-white dark:bg-zinc-900 rounded-xl p-5 border border-gray-100 dark:border-zinc-800'
                >
                  <div className='w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <Check className='w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400' />
                  </div>
                  <span className='text-gray-700 dark:text-gray-300'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-20 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center'>
            ERPNext FAQs
          </h2>
          <div className='space-y-4'>
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className='bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800'
              >
                <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>
                  {faq.question}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-primary-600 dark:bg-primary-900/30'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Get a Free ERPNext Consultation
          </h2>
          <p className='text-primary-100 text-lg mb-8 max-w-2xl mx-auto'>
            Tell us about your business and current systems. We&apos;ll assess
            your requirements and propose a clear ERPNext implementation plan —
            with timeline and cost estimate.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('open-contact-modal', {
                    detail: { subject: 'ERPNext Implementation Inquiry' },
                  }),
                )
              }
              className='px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2'
            >
              Request Free Assessment
              <ChevronRight className='w-4 h-4' />
            </button>
            <Link
              href='/services/odoo'
              className='px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              View Odoo Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
