'use client'

import { ArrowLeft, MapPin, Clock, Briefcase, ArrowRight, Rocket, Users, Heart, Zap } from 'lucide-react'
import Link from 'next/link'

const OPEN_ROLES = [
  {
    title: 'Senior ERP Consultant',
    department: 'Implementation',
    location: 'Lahore, Pakistan / Remote',
    type: 'Full-time',
    description: 'Lead enterprise ERP implementations, guide clients through discovery, configuration, and go-live with NEXO 4.',
  },
  {
    title: 'Full-Stack Developer (Next.js)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain client-facing portals, ERP extensions, and internal tooling using Next.js and Python/ERPNext.',
  },
  {
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Dubai, UAE / Lahore, Pakistan',
    type: 'Full-time',
    description: 'Drive new enterprise accounts across the GCC and South Asia, with a focus on manufacturing, retail, and healthcare verticals.',
  },
  {
    title: 'Product Support Specialist',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Provide Tier-2 technical support to enterprise clients, triaging issues and coordinating with the engineering team.',
  },
]

const VALUES = [
  { icon: Rocket, title: 'Ship Fast, Learn Faster', desc: 'We move with urgency and embrace iteration. Every sprint, every client, every feedback loop makes us better.', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/20' },
  { icon: Users, title: 'Clients First', desc: 'Our clients\' success is our success. We go beyond the contract to ensure transformative outcomes.', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/20' },
  { icon: Heart, title: 'Genuine Care', desc: 'We hire for character and culture add. We take care of our team with great benefits and real flexibility.', color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/20' },
  { icon: Zap, title: 'Bias for Impact', desc: 'Every role at NEXO 4 is tied to measurable outcomes. We reward ownership and initiative.', color: 'text-violet-500', bg: 'bg-violet-100 dark:bg-violet-900/20' },
]

export default function CareersPage() {
  return (
    <main className='relative z-10'>
      {/* Hero */}
      <section className='pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent' />
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
              Careers
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Build the Future of{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Enterprise Software
              </span>
            </h1>
            <p className='text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10'>
              Join a team of experts building the next generation of ERP
              solutions for growing businesses across the Middle East and South
              Asia.
            </p>
            <a
              href='#open-roles'
              className='inline-flex items-center gap-2 px-8 py-4 bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold rounded-xl shadow-xl dark:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5'
            >
              View Open Roles <ArrowRight className='w-4 h-4' />
            </a>
          </div>
        </div>
      </section>

      {/* Culture / Values */}
      <section className='py-20 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-14'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Why Join NEXO 4?
            </h2>
            <p className='text-gray-500 dark:text-gray-400 max-w-xl mx-auto'>
              We don&apos;t just build products — we build careers. Here&apos;s
              what makes NEXO 4 different.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {VALUES.map((v) => (
              <div
                key={v.title}
                className='bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className='font-bold text-gray-900 dark:text-white mb-2'>
                  {v.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id='open-roles' className='py-20 bg-white dark:bg-black'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-14'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Open Positions
            </h2>
            <p className='text-gray-500 dark:text-gray-400'>
              We&apos;re hiring across multiple teams. Don&apos;t see your
              role? Send a general application.
            </p>
          </div>

          <div className='space-y-4'>
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className='group bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-6 hover:border-primary-200 dark:hover:border-primary-900/40 hover:shadow-lg transition-all duration-300'
              >
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                  <div className='flex-1'>
                    <div className='flex flex-wrap items-center gap-2 mb-2'>
                      <span className='text-xs font-bold uppercase tracking-wide text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 px-2.5 py-1 rounded-full'>
                        {role.department}
                      </span>
                      <span className='text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                        <Clock className='w-3 h-3' /> {role.type}
                      </span>
                      <span className='text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                        <MapPin className='w-3 h-3' /> {role.location}
                      </span>
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-1'>
                      {role.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                      {role.description}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      window.dispatchEvent(new Event('open-contact-modal'))
                    }
                    className='flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white font-bold text-sm rounded-xl hover:bg-primary-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-600/20 whitespace-nowrap flex-shrink-0'
                  >
                    Apply Now <ArrowRight className='w-4 h-4' />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* General Application */}
          <div className='mt-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-center'>
            <Briefcase className='w-12 h-12 text-white/80 mx-auto mb-4' />
            <h3 className='text-xl font-bold text-white mb-2'>
              Don&apos;t see your perfect role?
            </h3>
            <p className='text-primary-100 mb-6'>
              We&apos;re always on the lookout for exceptional talent. Send us
              your CV and a note about what you&apos;d like to build at NEXO 4.
            </p>
            <a
              href='mailto:careers@nexo4erp.com'
              className='inline-block px-8 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5'
            >
              Send General Application
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
