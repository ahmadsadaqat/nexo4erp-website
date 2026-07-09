import Link from 'next/link'
import { Check, ChevronRight, Users, MapPin, Clock, Shield } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { TRUST_POINTS } from '@/lib/constants'
import OpenContactButton from '@/components/OpenContactButton'

const DIFFERENTIATORS = [
  {
    text: 'We only do ERPNext and Odoo — not SAP, not Microsoft Dynamics, not every platform under the sun. Depth over breadth.',
    icon: Shield,
  },
  {
    text: 'Our team is Pakistan-based, fluent in local compliance, and available during Pakistani business hours.',
    icon: MapPin,
  },
  {
    text: "We've worked across 6 industries: manufacturing, retail, healthcare, logistics, NGOs, and professional services.",
    icon: Users,
  },
  {
    text: "We don't disappear after go-live. Our support retainers keep us accountable long-term.",
    icon: Clock,
  },
]

const TEAM = [
  {
    name: 'Ahmad Sadaqat',
    role: 'Senior Frappe/ERPNext Developer',
    initials: 'AS',
  },
  {
    name: 'Zaid Anwar',
    role: 'ERP, Point Of Sale Retail/day-to-day Operations Specialist',
    initials: 'ZA',
  },
  {
    name: 'Salman Imran',
    role: 'HR, Payroll, Workflow automation, Business Process Specialist',
    initials: 'SI',
  },
  {
    name: 'Ali Hamza',
    role: 'ERP Implementation CRMs with marketing, sales, and operations Expert',
    initials: 'AH',
  },
  {
    name: 'Awais Anwar',
    role: 'Bookkeeping Expert',
    initials: 'AA',
  },
  {
    name: 'Ahmad Shakeel',
    role: 'Internal and IT Audit Expert',
    initials: 'AS',
  },
]

export default function AboutContent() {
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
          <div className='text-center max-w-4xl mx-auto'>
            <h2 className='text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3'>
              About NEXO ERP
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Pakistan&apos;s ERPNext & Odoo{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Implementation Specialists
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-16 bg-white dark:bg-zinc-950'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>
            Our Story
          </h2>
          <div className='space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed'>
            <p>
              NEXO ERP was founded with a straightforward belief: Pakistani
              businesses deserve enterprise-grade ERP without enterprise-grade
              licensing costs. For many years, we&apos;ve been implementing
              Frappe ERPNext and Odoo for businesses across Pakistan — cutting
              through the complexity that makes ERP projects fail, and
              delivering systems that teams actually use.
            </p>
            <p>
              We built nexoERP — our branded ERPNext implementation framework —
              because we saw the same problems repeat across every project:
              misconfigured workflows, untrained users, no local compliance
              setup, and no support after go-live. nexoERP is our answer to
              that.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className='py-16 bg-gray-50 dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center'>
            What Makes Us Different
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {DIFFERENTIATORS.map((item, idx) => (
              <div
                key={idx}
                className='bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm flex items-start gap-4'
              >
                <div className='w-11 h-11 rounded-xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0'>
                  <item.icon className='w-5 h-5 text-primary-600 dark:text-primary-400' />
                </div>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className='py-16 bg-white dark:bg-zinc-950'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>
            Why Businesses in Pakistan Choose NEXO ERP
          </h2>
          <div className='space-y-4'>
            {TRUST_POINTS.map((point, idx) => (
              <div
                key={idx}
                className='flex items-start gap-4 bg-gray-50 dark:bg-zinc-900 rounded-xl p-5 border border-gray-100 dark:border-zinc-800'
              >
                <div className='w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <Check className='w-3.5 h-3.5 text-primary-600 dark:text-primary-400' />
                </div>
                <span className='text-gray-700 dark:text-gray-300'>
                  {point.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 bg-gray-50 dark:bg-black'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            Meet Our Team
          </h2>
          <p className='text-gray-500 dark:text-gray-400 mb-10'>
            The people behind your ERP implementation.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {TEAM.map((person, idx) => (
              <div
                key={idx}
                className='bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm'
              >
                <div className='w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center mx-auto mb-4 text-primary-600 dark:text-primary-400 font-bold text-xl'>
                  {person.initials}
                </div>
                <h3 className='font-bold text-gray-900 dark:text-white'>
                  {person.name}
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {person.role}
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
            Ready to See nexoERP in Action?
          </h2>
          <p className='text-primary-100 text-lg mb-8 max-w-2xl mx-auto'>
            Get a free 30-minute consultation with our ERP consultants.
            We&apos;ll assess your current setup, identify the right solution,
            and give you a clear implementation roadmap — no obligation.
          </p>
          <OpenContactButton />
        </div>
      </section>
    </main>
  )
}
