'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Package,
  Factory,
  Users,
  Briefcase,
  Settings,
  Server,
  Headset,
  MessageSquare,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { useState } from 'react'
import OpenContactButton from '@/components/OpenContactButton'
import WhatsAppButton from '@/components/WhatsAppButton'

const BENEFITS = [
  {
    title: 'Financial Control',
    description: 'Get real-time insights into your cash flow, automate invoicing, and streamline your tax reporting for FBR compliance.',
    icon: BarChart3,
  },
  {
    title: 'Inventory Optimization',
    description: 'Stop overstocking and prevent stockouts. Track stock movement across multiple warehouses in real-time.',
    icon: Package,
  },
  {
    title: 'Manufacturing Efficiency',
    description: 'Manage production planning, multi-level Bill of Materials (BOMs), and track factory floor performance accurately.',
    icon: Factory,
  },
  {
    title: 'HR & Payroll Management',
    description: 'Automate attendance tracking, handle complex payroll structures, and manage employee lifecycles easily.',
    icon: Users,
  },
  {
    title: 'Sales & CRM',
    description: 'Track leads, send professional quotations, and close deals faster with a fully integrated sales pipeline.',
    icon: Briefcase,
  },
  {
    title: 'Procurement',
    description: 'Streamline purchasing, manage supplier relationships, and ensure you always get the best rates automatically.',
    icon: Settings,
  },
]

const SERVICES = [
  {
    title: 'ERPNext Implementation',
    description: 'End-to-end setup mapping your business processes to the system efficiently.',
    href: '/services/implementation', // Assuming placeholder, will adjust if routes exist
    icon: Settings,
  },
  {
    title: 'ERPNext Customization',
    description: 'Custom modules, reports, and workflows tailored to your unique requirements.',
    href: '/services/customization',
    icon: Zap,
  },
  {
    title: 'ERPNext Hosting',
    description: 'Secure, high-performance cloud hosting or on-premise deployment options.',
    href: '/services/hosting',
    icon: Server,
  },
  {
    title: 'ERPNext HRMS',
    description: 'Dedicated HR management implementation with local payroll compliance.',
    href: '/services/hrms',
    icon: Users,
  },
  {
    title: 'ERPNext Support',
    description: 'Ongoing technical support and maintenance to keep your system running.',
    href: '/contact',
    icon: Headset,
  },
  {
    title: 'WhatsApp Integration',
    description: 'Connect ERPNext with WhatsApp for automated notifications and approvals.',
    href: '/contact',
    icon: MessageSquare,
  },
]

const INDUSTRIES = [
  'Manufacturing',
  'Bakeries & Food',
  'Petroleum & Oil',
  'Distribution',
  'Retail',
  'Logistics',
]

const PROCESS_STEPS = [
  {
    title: 'Discovery',
    description: 'We understand your business goals, current bottlenecks, and operational requirements.',
  },
  {
    title: 'Business Analysis',
    description: 'Mapping your existing processes to standard ERPNext workflows to minimize customization.',
  },
  {
    title: 'System Design',
    description: 'Creating the blueprint for your system including architecture, modules, and integrations.',
  },
  {
    title: 'Configuration',
    description: 'Setting up the system, configuring workflows, and customizing where necessary.',
  },
  {
    title: 'Data Migration',
    description: 'Securely transferring your historical data from legacy systems or spreadsheets into ERPNext.',
  },
  {
    title: 'Training',
    description: 'Hands-on sessions with your team to ensure high adoption rates from day one.',
  },
  {
    title: 'Go Live',
    description: 'System deployment with on-standby support to handle any immediate questions.',
  },
  {
    title: 'Support',
    description: 'Continuous optimization, bug fixes, and updates to keep your ERP running smoothly.',
  },
]

const FAQS = [
  {
    question: 'How much does ERPNext cost?',
    answer: 'ERPNext is open-source, meaning there are no per-user licensing fees like traditional ERPs. You only pay for implementation services, hosting, and ongoing support. The exact cost depends on the complexity of your business processes and the number of modules implemented.',
  },
  {
    question: 'Is ERPNext suitable for SMEs?',
    answer: 'Absolutely. ERPNext is designed to be user-friendly and highly modular. SMEs can start with core modules like Accounting and Sales, and scale up to Manufacturing or HRMS as they grow.',
  },
  {
    question: 'Can ERPNext be hosted on-premise?',
    answer: 'Yes, we offer both cloud hosting and on-premise deployment options based on your security requirements and IT infrastructure.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'A standard implementation takes between 4 to 12 weeks. This timeline varies based on your organization\'s size, data readiness, and any required customizations.',
  },
  {
    question: 'Do you provide training?',
    answer: 'Yes, comprehensive user training is a core part of our implementation process. We ensure your team is confident using the system before going live.',
  },
  {
    question: 'Do you migrate data from Excel?',
    answer: 'Yes, we handle data migration from Excel spreadsheets, QuickBooks, Tally, or any legacy software you are currently using.',
  },
  {
    question: 'Can ERPNext integrate with WhatsApp?',
    answer: 'Yes, we can integrate ERPNext with WhatsApp to send automated invoices, payment reminders, and approval requests directly to your customers or managers.',
  },
]

export default function ERPNextPakistanContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className='relative z-10'>
      {/* Hero Section */}
      <section className='pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent' />
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'>
              ERPNext Implementation Services in{' '}
              <span className='text-primary-600 dark:text-primary-400'>Pakistan</span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed'>
              Cut software licensing costs and scale your operations with a modern, open-source ERP. We help Pakistani businesses implement, customize, and manage ERPNext.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <OpenContactButton />
              <Link
                href='https://wa.me/923329400079?text=Hello,%20I%20would%20like%20to%20discuss%20ERPNext%20Implementation'
                target='_blank'
                rel='noopener noreferrer'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors'
              >
                <MessageSquare className='w-4 h-4' />
                Talk on WhatsApp
              </Link>
            </div>
          </div>
          
          <div className='mt-16 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xl'>
            <Image
              src='/erpnext-dashboard-pakistan.png'
              alt='ERPNext Dashboard'
              width={1200}
              height={675}
              className='w-full h-auto object-cover'
              priority
            />
          </div>
        </div>
      </section>

      {/* What is ERPNext? */}
      <section className='py-20 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>What is ERPNext?</h2>
              <div className='space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                <p>
                  ERPNext is a world-class, open-source Enterprise Resource Planning (ERP) platform designed for modern businesses. Unlike traditional ERPs like SAP or Oracle that charge exorbitant per-user licensing fees, ERPNext gives you full access to enterprise-grade tools without the ongoing software tax.
                </p>
                <p>
                  Built on the robust Frappe framework, it includes modules for accounting, inventory, manufacturing, CRM, sales, and HRMS out of the box. 
                </p>
                <p>
                  Businesses in Pakistan are rapidly adopting ERPNext because it combines affordability with unparalleled flexibility. It&apos;s highly customizable, allowing us to mold the software to fit your exact operational workflows instead of forcing your team to change how they work.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800'>
                <div className='text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2'>100%</div>
                <div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>Open Source</div>
              </div>
              <div className='bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800'>
                <div className='text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2'>Zero</div>
                <div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>Licensing Fees</div>
              </div>
              <div className='col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800'>
                <div className='text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2'>All-in-One</div>
                <div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>Unified platform for all departments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ERPNext for Your Business */}
      <section className='py-24 bg-white dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Why Choose ERPNext for Your Business?</h2>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              We focus on delivering measurable business outcomes, not just installing modules. Here is how ERPNext transforms your operations.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className='bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-primary-500/30 transition-colors'>
                <div className='w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6'>
                  <benefit.icon className='w-6 h-6 text-primary-600 dark:text-primary-400' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>{benefit.title}</h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className='py-10 bg-white dark:bg-black'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
           <div className='rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-xl'>
            <Image
              src='/erpnext-manufacturing-module.png'
              alt='ERPNext Manufacturing Module'
              width={1200}
              height={675}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Our ERPNext Services */}
      <section className='py-24 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center'>Our ERPNext Services</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {SERVICES.map((service, idx) => (
              <Link href={service.href} key={idx} className='group bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition-all hover:-translate-y-1 block'>
                 <div className='flex items-center justify-between mb-4'>
                    <div className='w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center'>
                      <service.icon className='w-5 h-5 text-primary-600 dark:text-primary-400' />
                    </div>
                    <ArrowRight className='w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors' />
                 </div>
                 <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2'>{service.title}</h3>
                 <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NEXO ERP? & Industries */}
      <section className='py-24 bg-white dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>Why Choose NEXO ERP?</h2>
              <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
                We are not just another IT agency. We are dedicated ERP specialists who understand the unique challenges of operating a business in Pakistan.
              </p>
              <ul className='space-y-4'>
                {[
                  { text: 'Local Pakistan Support & Expertise', icon: MapPin },
                  { text: 'Certified ERPNext Specialists', icon: ShieldCheck },
                  { text: 'Custom Development & Workflows', icon: Settings },
                  { text: 'On-Premise & Cloud Deployment', icon: Server },
                  { text: 'WhatsApp Business API Integration', icon: MessageSquare },
                  { text: 'Biometric Attendance Integration', icon: Clock },
                ].map((item, idx) => (
                  <li key={idx} className='flex items-center gap-4 text-gray-700 dark:text-gray-300 font-medium'>
                    <div className='w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0'>
                      <item.icon className='w-4 h-4 text-primary-600 dark:text-primary-400' />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className='bg-primary-600 dark:bg-primary-900/20 rounded-3xl p-8 lg:p-12 text-white border dark:border-primary-900/50'>
              <h3 className='text-2xl font-bold mb-6'>Industries We Serve</h3>
              <p className='mb-8 text-primary-100'>
                We bring deep domain expertise, having solved complex operational challenges for businesses in these sectors:
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {INDUSTRIES.map((industry, idx) => (
                  <div key={idx} className='flex items-center gap-3 bg-primary-700/50 dark:bg-black/40 px-4 py-3 rounded-xl border border-primary-500/30 dark:border-white/10'>
                    <CheckCircle2 className='w-5 h-5 text-primary-300 dark:text-primary-400' />
                    <span className='font-semibold'>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className='py-24 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Our ERPNext Implementation Process</h2>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              A proven methodology to ensure your implementation is completed on time, within budget, and with high user adoption.
            </p>
          </div>

          <div className='mb-16 max-w-5xl mx-auto'>
            <Image
              src='/erpnext-implementation-process.png'
              alt='Implementation Process Workflow'
              width={1200}
              height={675}
              className='w-full h-auto rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className='relative p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm'>
                <div className='text-4xl font-black text-gray-100 dark:text-zinc-800 absolute top-4 right-4'>
                  0{idx + 1}
                </div>
                <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-3 relative z-10'>{step.title}</h3>
                <p className='text-sm text-gray-600 dark:text-gray-400 relative z-10 leading-relaxed'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-white dark:bg-black'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Frequently Asked Questions</h2>
          </div>
          <div className='space-y-4'>
            {FAQS.map((faq, idx) => (
              <div key={idx} className='bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl overflow-hidden'>
                <button
                  className='w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none'
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className='font-semibold text-gray-900 dark:text-white pr-8'>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className='w-5 h-5 text-gray-500 shrink-0' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-gray-500 shrink-0' />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
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

      {/* Final CTA */}
      <section className='py-24 bg-primary-600 dark:bg-primary-900/30'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Ready to implement ERPNext?
          </h2>
          <p className='text-primary-100 text-lg mb-10 max-w-2xl mx-auto'>
            Stop struggling with disconnected spreadsheets and legacy software. Get a fully integrated system designed for your business.
          </p>
          <OpenContactButton />
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}
