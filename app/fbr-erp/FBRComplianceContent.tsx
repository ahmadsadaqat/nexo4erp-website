'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Shield,
  Building2,
  Factory,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  Stethoscope,
  Briefcase,
  ChevronDown,
  ChevronUp,
  QrCode,
  Zap,
  Send,
  FileCheck,
  MapPin,
  Clock,
  Phone,
} from 'lucide-react'
import { useState } from 'react'
import OpenContactButton from '@/components/OpenContactButton'

const COMPLIANCE_FEATURES = [
  {
    title: 'FBR Digital Invoicing (SRO 709)',
    description: 'Real-time invoice transmission to FBR via PRAL API with automatic IRN and QR code generation.',
  },
  {
    title: 'Withholding Tax (Sec. 236 WHT)',
    description: 'Automatic WHT calculation and deduction at source for every applicable transaction.',
  },
  {
    title: 'Advance Income Tax',
    description: 'Precise advance tax computation and reporting across all revenue streams.',
  },
  {
    title: 'SRB (Sindh Revenue Board)',
    description: 'Full integration with SRB for Sindh-based businesses handling provincial sales tax.',
  },
  {
    title: 'PRA (Punjab Revenue Authority)',
    description: 'Seamless PRA compliance for Punjab-registered service providers and businesses.',
  },
  {
    title: 'KPRA (KP Revenue Authority)',
    description: 'KP provincial tax compliance built into the same system — no separate tools required.',
  },
  {
    title: 'EOBI Payroll Deductions',
    description: 'Automatic EOBI contribution calculation and deduction integrated with your payroll.',
  },
  {
    title: 'PESSI Deductions',
    description: 'Punjab Employees Social Security deductions handled seamlessly alongside payroll processing.',
  },
  {
    title: 'Pakistani Chart of Accounts',
    description: 'Pre-configured chart of accounts aligned with Pakistani accounting standards and FBR requirements.',
  },
]

const INTEGRATION_STEPS = [
  {
    step: '01',
    title: 'Record Sale',
    description: 'Your team creates a sales invoice in NexoERP — business as usual.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Invoice Auto-Formatted',
    description: 'NexoERP structures the invoice in FBR\'s exact required format automatically.',
    icon: FileCheck,
  },
  {
    step: '03',
    title: 'Transmitted to PRAL',
    description: 'The formatted invoice is sent to FBR via PRAL API in real time — no manual step.',
    icon: Send,
  },
  {
    step: '04',
    title: 'IRN + QR Returned',
    description: 'FBR returns a unique Invoice Reference Number and QR code — printed on customer receipt.',
    icon: QrCode,
  },
]

const INDUSTRIES = [
  {
    name: 'Manufacturers',
    subtitle: 'FMCG, textile, chemical',
    description: 'FBR compliance is critical for manufacturers managing high-volume raw material purchases and finished goods sales — every transaction must be invoiced electronically.',
    icon: Factory,
    href: '/industries/manufacturing',
  },
  {
    name: 'Wholesalers & Distributors',
    subtitle: 'B2B bulk operations',
    description: 'Distributors handle hundreds of invoices daily across multiple buyers — automated FBR integration eliminates the compliance bottleneck entirely.',
    icon: Truck,
    href: '/industries/distribution',
  },
  {
    name: 'Retail Chains',
    subtitle: 'Multi-location POS',
    description: 'Every point-of-sale transaction must reach FBR in real time. NexoERP connects your retail POS directly to PRAL across all outlets.',
    icon: ShoppingBag,
    href: '/industries/retail',
  },
  {
    name: 'Import/Export Businesses',
    subtitle: 'Cross-border trade',
    description: 'Import duties, customs integration, and export rebates require precise FBR reporting — NexoERP handles the full compliance trail.',
    icon: Building2,
    href: '/industries/trading',
  },
  {
    name: 'Service Companies',
    subtitle: 'Restaurants, clinics, couriers',
    description: 'SRO 288(I)/2026 now extends FBR integration to service businesses — early compliance gives you a competitive advantage.',
    icon: UtensilsCrossed,
    href: '/industries/healthcare',
  },
  {
    name: 'Trading Companies',
    subtitle: 'Buy-sell operations',
    description: 'Trading companies with high transaction volumes need seamless FBR invoicing to avoid penalties and maintain smooth tax refund cycles.',
    icon: Briefcase,
    href: '/industries/logistics',
  },
]

const FAQS = [
  {
    question: 'Is FBR digital invoicing mandatory for all businesses in Pakistan?',
    answer: 'Yes. Since August 2025, under SRO 709(I)/2025, all sales-tax-registered businesses in Pakistan are required to electronically transmit every invoice to FBR in real time. Non-compliance can result in penalties, blocked tax refunds, and business registration suspension.',
  },
  {
    question: 'What is PRAL and how does NexoERP connect to it?',
    answer: 'PRAL (Pakistan Revenue Automation Limited) is FBR\'s technology partner that manages the electronic invoicing infrastructure. NexoERP connects directly to PRAL\'s API so that every invoice is automatically transmitted in the required format — no manual uploads, no separate software needed.',
  },
  {
    question: 'What taxes does NexoERP handle automatically?',
    answer: 'NexoERP manages FBR sales tax invoicing, withholding tax under Section 236, advance income tax, SRB (Sindh), PRA (Punjab), KPRA (KP) provincial taxes, EOBI payroll deductions, and PESSI deductions — all from one unified system.',
  },
  {
    question: 'Does NexoERP work for both B2B and B2C FBR invoicing?',
    answer: 'Absolutely. NexoERP handles both business-to-business and business-to-consumer invoicing. Whether you issue bulk invoices to distributors or point-of-sale receipts to walk-in customers, each transaction is transmitted to FBR with the correct format and tax treatment.',
  },
  {
    question: 'What happens if my business doesn\'t integrate with FBR?',
    answer: 'Businesses that fail to comply with FBR digital invoicing face financial penalties, potential suspension of their sales tax registration, blocked input tax adjustments, and inability to claim tax refunds. The penalties increase for continued non-compliance under the latest SRO 288(I)/2026 rules.',
  },
  {
    question: 'How long does FBR integration setup take with NexoERP?',
    answer: 'For businesses already using NexoERP, FBR integration can be activated in as little as 2–3 days. For new NexoERP implementations that include FBR compliance, the full setup typically takes 2–4 weeks depending on your business complexity and number of locations.',
  },
]

export default function FBRComplianceContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className='relative z-10'>
      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
      ──────────────────────────────────────────────────────── */}
      <section className='pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent' />
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'>
              FBR-Integrated ERP for Pakistani Businesses —{' '}
              <span className='text-primary-600 dark:text-primary-400'>NexoERP</span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed'>
              Stay 100% FBR-compliant, automate digital invoicing, and manage your entire business from a single platform.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <OpenContactButton label='Book Free Demo' />
              <Link
                href='#how-it-works'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors'
              >
                <Zap className='w-4 h-4' />
                See How It Works
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className='mt-12 max-w-4xl mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {[
                { label: 'FBR Digital Invoicing', icon: FileCheck },
                { label: 'PRAL Connected', icon: Send },
                { label: 'SRB / PRA / KPRA', icon: Shield },
                { label: 'Lahore-Based Support', icon: MapPin },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className='flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm'
                >
                  <badge.icon className='w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0' />
                  <span className='text-sm font-semibold text-gray-800 dark:text-gray-200'>{badge.label}</span>
                  <CheckCircle2 className='w-4 h-4 text-emerald-500 flex-shrink-0' />
                </div>
              ))}
            </div>
          </div>

          {/* Hero OG Image */}
          <div className='mt-12 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xl'>
            <Image
              src='https://placehold.co/1200x630'
              alt='NexoERP FBR-Integrated Invoicing Dashboard with QR Code'
              width={1200}
              height={630}
              className='w-full h-auto object-cover'
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. THE PROBLEM — OPEN WITH PAIN
      ──────────────────────────────────────────────────────── */}
      <section className='py-20 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
              FBR Digital Invoicing is Now Mandatory — Is Your ERP Ready?
            </h2>
            <div className='space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
              <p>
                Since August 2025, under <strong className='text-gray-900 dark:text-white'>SRO 709(I)/2025</strong>, every
                sales-tax-registered business in Pakistan is legally required to electronically submit every invoice to FBR in
                real time. This is not optional — it applies to manufacturers, retailers, distributors, and service
                businesses across the country.
              </p>
              <p>
                Non-compliant businesses face financial penalties, blocked input tax adjustments, and potential suspension
                of their sales tax registration. The recently proposed <strong className='text-gray-900 dark:text-white'>SRO
                288(I)/2026</strong> expands these requirements further to cover income tax, service businesses, and CCTV
                monitoring at POS terminals.
              </p>
              <p className='text-primary-600 dark:text-primary-400 font-semibold'>
                NexoERP handles this automatically — so your team keeps working exactly as before, while every invoice
                reaches FBR without lifting a finger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. HOW NEXO HANDLES FBR COMPLIANCE — CORE CONTENT
      ──────────────────────────────────────────────────────── */}
      <section id='how-it-works' className='py-24 bg-white dark:bg-black scroll-mt-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              How NexoERP&apos;s FBR Integration Works
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              When a sale is recorded in NexoERP, the invoice is automatically structured in FBR&apos;s required format and
              transmitted via PRAL API in real time. The system returns a unique Invoice Reference Number (IRN) and prints
              the QR code on the customer receipt. No manual steps. No separate software.
            </p>
          </div>

          {/* 4-Step Visual Flow */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {INTEGRATION_STEPS.map((step, idx) => (
              <div key={idx} className='relative group'>
                <div className='bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-primary-500/30 transition hover:-translate-y-1 h-full'>
                  <div className='flex items-center gap-3 mb-5'>
                    <div className='w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center'>
                      <step.icon className='w-6 h-6 text-primary-600 dark:text-primary-400' />
                    </div>
                    <span className='text-3xl font-black text-gray-200 dark:text-zinc-800'>{step.step}</span>
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>{step.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>{step.description}</p>
                </div>
                {/* Arrow connector (hidden on last item and mobile) */}
                {idx < INTEGRATION_STEPS.length - 1 && (
                  <div className='hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2'>
                    <ArrowRight className='w-6 h-6 text-primary-400 dark:text-primary-600' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. FULL COMPLIANCE COVERAGE — DIFFERENTIATOR
      ──────────────────────────────────────────────────────── */}
      <section className='py-24 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Beyond FBR — Complete Pakistan Tax Compliance in One ERP
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              FBR sales tax is just one piece. Your business also needs withholding tax, provincial revenue compliance,
              EOBI, PESSI, and a Pakistan-ready chart of accounts. NexoERP handles all of it in a single system — no
              patchwork of tools, no compliance gaps.
            </p>
          </div>

          {/* Feature Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {COMPLIANCE_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className='bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-primary-500/30 hover:shadow-lg transition'
              >
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 mt-0.5'>
                    <CheckCircle2 className='w-4 h-4 text-primary-600 dark:text-primary-400' />
                  </div>
                  <div>
                    <h3 className='text-base font-bold text-gray-900 dark:text-white mb-1'>{feature.title}</h3>
                    <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. WHO NEEDS FBR-INTEGRATED ERP — INDUSTRY TARGETING
      ──────────────────────────────────────────────────────── */}
      <section className='py-24 bg-white dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Which Businesses Need FBR-Integrated ERP?
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              If your business is sales-tax-registered in Pakistan, FBR digital invoicing is not optional. Here&apos;s how
              NexoERP serves the specific compliance needs of each industry.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {INDUSTRIES.map((industry, idx) => (
              <Link
                href={industry.href}
                key={idx}
                className='group bg-gray-50 dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-primary-500/30 hover:shadow-lg transition hover:-translate-y-1 block'
              >
                <div className='flex items-center justify-between mb-4'>
                  <div className='w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center'>
                    <industry.icon className='w-5 h-5 text-primary-600 dark:text-primary-400' />
                  </div>
                  <ArrowRight className='w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-1'>{industry.name}</h3>
                <p className='text-xs font-medium text-primary-600 dark:text-primary-400 mb-3'>{industry.subtitle}</p>
                <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. FAQ SECTION — LONG-TAIL KEYWORD MAGNET
      ──────────────────────────────────────────────────────── */}
      <section className='py-24 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              Frequently Asked Questions — FBR ERP Integration
            </h2>
          </div>
          <div className='space-y-4'>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className='bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl overflow-hidden'
              >
                <button
                  className='w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer'
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  id={`faq-trigger-${idx}`}
                  aria-controls={`faq-content-${idx}`}
                >
                  <span className='font-semibold text-gray-900 dark:text-white pr-8'>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className='w-5 h-5 text-gray-500 shrink-0' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-gray-500 shrink-0' />
                  )}
                </button>
                <div
                  id={`faq-content-${idx}`}
                  role='region'
                  aria-labelledby={`faq-trigger-${idx}`}
                  className={`px-6 overflow-hidden transition duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. CTA SECTION
      ──────────────────────────────────────────────────────── */}
      <section className='py-24 bg-primary-600 dark:bg-primary-900/30'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Get Your Business FBR-Compliant with NexoERP
          </h2>
          <p className='text-primary-100 text-lg mb-4 max-w-2xl mx-auto'>
            Our Lahore-based team gets you fully compliant in days, not months. From FBR digital invoicing to withholding
            tax, SRB, PRA, and payroll — one system, one setup, complete peace of mind.
          </p>
          <p className='text-primary-200 text-base mb-10 max-w-xl mx-auto'>
            Book a free initial consultation and let us assess your compliance readiness.
          </p>
          <OpenContactButton label='Book Free FBR Compliance Demo' />
        </div>
      </section>
    </main>
  )
}
