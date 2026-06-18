'use client'

import { ArrowLeft, Mail, Phone, Clock, MapPin, Send, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@nexo4erp.com',
    href: 'mailto:info@nexo4erp.com',
    color: 'text-blue-500',
    bg: 'bg-blue-100 dark:bg-blue-900/20',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '0332 9400079',
    href: 'tel:+923329400079',
    color: 'text-emerald-500',
    bg: 'bg-emerald-100 dark:bg-emerald-900/20',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Fri, 9am – 6pm PKT',
    href: null,
    color: 'text-amber-500',
    bg: 'bg-amber-100 dark:bg-amber-900/20',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Lahore, Pakistan',
    href: null,
    color: 'text-rose-500',
    bg: 'bg-rose-100 dark:bg-rose-900/20',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    whatsapp: '',
    service: 'ERPNext',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const whatsappLink = `https://wa.me/923329400079?text=${encodeURIComponent('Hello, I would like to chat on WhatsApp about NEXO 4 ERP services.')}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Dispatch the contact modal event as the backend is wired there
    window.dispatchEvent(new Event('open-contact-modal'))
    setStatus('idle')
  }

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
              Get in Touch
            </h2>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Let&apos;s Build Your{' '}
              <span className='text-primary-600 dark:text-primary-400'>
                Future
              </span>
            </h1>
            <p className='text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              Ready to streamline your operations? Fill out the form or reach
              out to us directly — our specialists respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className='pb-24 bg-gray-50 dark:bg-zinc-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
            {/* Left: Info */}
            <div className='lg:col-span-2 space-y-5'>
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className='bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-gray-100 dark:border-zinc-800 shadow-sm flex items-start gap-4'
                >
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className='text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-0.5'>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className='text-gray-900 dark:text-white font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className='text-gray-900 dark:text-white font-semibold'>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick Demo CTA */}
              <div className='bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white'>
                <h3 className='font-bold text-lg mb-2'>Book a Free Demo</h3>
                <p className='text-primary-100 text-sm mb-4'>
                  See NEXO 4 ERP live with a personalised walkthrough tailored
                  to your industry.
                </p>
                <div className='grid gap-3 sm:grid-cols-2'>
                  <button
                    onClick={() =>
                      window.dispatchEvent(new Event('open-contact-modal'))
                    }
                    className='w-full py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300'
                  >
                    Schedule Demo
                  </button>
                  <a
                    href={whatsappLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all duration-300'
                  >
                    <MessageCircle className='w-4 h-4' />
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className='lg:col-span-3'>
              <div className='bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm p-8'>
                <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className='space-y-5'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                        Full Name *
                      </label>
                      <input
                        type='text'
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder='e.g. Ahmad Sadaqat'
                        className='w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-sm'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                        Business Email *
                      </label>
                      <input
                        type='email'
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder='you@company.com'
                        className='w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-sm'
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                      Company Name
                    </label>
                    <input
                      type='text'
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder='Your Company Ltd.'
                      className='w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-sm'
                    />
                  </div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                        Service Interested In
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className='w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-sm'
                      >
                        <option>ERPNext</option>
                        <option>Odoo</option>
                        <option>Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                        WhatsApp Number
                      </label>
                      <div className='relative'>
                        <MessageCircle className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                        <input
                          type='tel'
                          value={form.whatsapp}
                          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                          placeholder='0332 9400079'
                          className='w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-sm'
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      className='w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-sm resize-none'
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full flex items-center justify-center gap-2 py-4 bg-zinc-950 text-white hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold rounded-xl shadow-xl dark:shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 text-sm'
                  >
                    <Send className='w-4 h-4' />
                    Send Message
                  </button>
                  <a
                    href={whatsappLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full flex items-center justify-center gap-2 py-4 bg-emerald-500 text-white hover:bg-emerald-400 font-bold rounded-xl shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 text-sm'
                  >
                    <MessageCircle className='w-4 h-4' />
                    WhatsApp Chat
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
