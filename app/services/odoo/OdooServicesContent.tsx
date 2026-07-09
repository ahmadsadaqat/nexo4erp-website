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

const ODOO_SERVICES = [
  {
    title: 'Odoo Implementation',
    description:
      'End-to-end Odoo deployment covering requirements analysis, module configuration, data migration, user acceptance testing, and go-live support. We implement Odoo 16/17 Community and Enterprise editions.',
    icon: Database,
  },
  {
    title: 'Odoo Customization',
    description:
      'Custom Odoo modules, views, automated actions, and integrations built to extend Odoo beyond its standard capabilities — payment gateway integration, FBR e-invoicing, custom reports, and more.',
    icon: Code,
  },
  {
    title: 'Odoo Migration',
    description:
      'Migrating from an older Odoo version or from another ERP? We handle version upgrades (Odoo 12/13/14 → 16/17) and cross-platform migrations with full data integrity.',
    icon: ArrowLeftRight,
  },
  {
    title: 'Odoo Training',
    description:
      'Practical Odoo training for your team — from basic end-user navigation to advanced configuration and reporting. Delivered in-person in Lahore or remotely.',
    icon: BookOpen,
  },
  {
    title: 'Odoo Support',
    description:
      'Ongoing Odoo support retainers for bug fixes, configuration changes, version updates, and new module additions. Response SLAs available.',
    icon: Shield,
  },
]

const MODULES = [
  'Accounting & Finance',
  'Inventory & Warehouse',
  'Manufacturing (MRP)',
  'Purchase',
  'Sales & CRM',
  'HR & Payroll',
  'Project Management',
  'Point of Sale',
  'Field Service',
  'E-commerce',
  'Website',
]

const FAQS = [
  {
    question: 'How long does an Odoo implementation take?',
    answer:
      'Smaller Odoo rollouts can be completed in weeks, while more complex deployments with custom modules and migrations take several months.',
  },
  {
    question: 'Can you customize Odoo for local workflows?',
    answer:
      'Yes. We build custom modules, views, automation, and integrations to match Pakistani business workflows.',
  },
  {
    question: 'Do you support Odoo upgrades and migrations?',
    answer:
      'Yes. We handle version upgrades and migration from other ERPs with validation and testing.',
  },
  {
    question: 'Do you help choose between Odoo and ERPNext?',
    answer:
      'Yes. We advise based on your industry, budget, customization needs, and internal team capabilities.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Odoo Implementation Services',
  provider: {
    '@type': 'Organization',
    name: 'NEXO ERP',
  },
  areaServed: 'Pakistan',
  serviceType: 'Odoo implementation, customization, migration, and support',
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
      item: 'https://www.nexo4erp.com/services/odoo',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Odoo',
      item: 'https://www.nexo4erp.com/services/odoo',
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

export default function OdooServicesContent() {
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
              Odoo Services
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Odoo ERP Implementation{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Services in Pakistan
              </span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl'>
              Looking for an Odoo implementation partner in Pakistan? NEXO ERP
              provides complete Odoo ERP services — from initial module setup
              and configuration through to custom app development and long-term
              support. We&apos;ve implemented Odoo for manufacturing, wholesale,
              retail, and services businesses across Lahore, Karachi, Islamabad,
              and nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Odoo */}
      <section className='py-16 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
              Why Pakistani Businesses Are Choosing Odoo
            </h2>
            <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6'>
              Odoo has grown rapidly in Pakistan&apos;s SME and mid-market
              sector — particularly in manufacturing, wholesale trading, and
              retail. Its modular structure means you start with what you need
              (accounting, inventory, sales) and expand as your business grows.
              There are no per-module licensing walls, and the community edition
              is free to deploy.
            </p>
            <p className='text-gray-500 dark:text-gray-500 leading-relaxed'>
              NEXO ERP brings local expertise: our team understands Pakistani
              tax structures, FBR compliance, Urdu-language requirements, and
              the specific challenges of operating ERP in Pakistan&apos;s
              business environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className='py-20 bg-gray-50 dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center'>
            Our Odoo Services
          </h2>
          <p className='text-gray-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-14'>
            Full lifecycle Odoo ERP services — from deployment to long-term
            support.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {ODOO_SERVICES.map((service, idx) => (
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

      {/* Modules */}
      <section className='py-20 bg-white dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center'>
            Odoo Modules We Implement
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

      {/* ERPNext vs Odoo teaser */}
      <section className='py-16 bg-gray-50 dark:bg-black'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            ERPNext vs Odoo — Which Is Right for You?
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-8'>
            Not sure whether to go with ERPNext or Odoo? Both are excellent
            open-source ERPs with different strengths. We&apos;re experienced in
            both and will recommend the right fit for your business — not the
            one that&apos;s easier for us to sell.
          </p>
          <Link
            href='/blog/erpnext-vs-odoo-pakistan'
            className='inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold hover:underline'
          >
            Read our honest comparison
            <ChevronRight className='w-4 h-4' />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-20 bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center'>
            Odoo FAQs
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
            Talk to an Odoo Expert in Pakistan
          </h2>
          <p className='text-primary-100 text-lg mb-8 max-w-2xl mx-auto'>
            Get a free 30-minute consultation. We&apos;ll review your
            requirements and tell you honestly whether Odoo or ERPNext is the
            better fit — and what implementation would look like.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('open-contact-modal', {
                    detail: { subject: 'Odoo Implementation Inquiry' },
                  }),
                )
              }
              className='px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2'
            >
              Book Free Odoo Consultation
              <ChevronRight className='w-4 h-4' />
            </button>
            <Link
              href='/services/erpnext-pakistan'
              className='px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              View ERPNext Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
