'use client'

import React, { useState, useEffect } from 'react'
import {
  ChevronRight,
  Search,
  Bell,
  LayoutDashboard,
  Calculator,
  Package,
  CreditCard,
  Users,
  ShoppingCart,
  FileText,
  Settings,
} from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import { TRANSLATIONS } from '@/lib/constants'

interface HeroProps {
  isArabic: boolean
}

const Hero: React.FC<HeroProps> = ({ isArabic }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(
      new CustomEvent('open-contact-modal', {
        detail: {
          subject: isArabic ? 'طلب عرض تجريبي مجاني' : 'Free Demo Request',
        },
      }),
    )
  }

  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en

  return (
    <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent dark:bg-transparent'>
      {/* Background Elements with Parallax Effect */}
      <div
        className='absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl opacity-50 z-0 will-change-transform transition-transform duration-75 ease-out'
        style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
      />
      <div
        className='absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl opacity-50 z-0 will-change-transform transition-transform duration-75 ease-out'
        style={{ transform: `translate3d(0, ${scrollY * -0.2}px, 0)` }}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <ScrollReveal>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-zinc-900 text-primary-600 dark:text-primary-400 font-medium text-sm mb-8 border border-transparent dark:border-zinc-800'>
              <span className='w-2 h-2 rounded-full bg-primary-600 mx-2 animate-pulse'></span>
              {t.heroTag}
            </div>

            <h1 className='text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-6'>
              {t.heroHeadline}
            </h1>

            <p className='mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10'>
              {t.heroSubheadline}
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <a
                href='#'
                onClick={openModal}
                className='w-full sm:w-auto px-10 py-5 bg-primary hover:bg-[#366872] text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3'
              >
                {t.demo}
                <ChevronRight className='w-6 h-6 rtl:rotate-180' />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Dashboard Preview / Visual */}
        <ScrollReveal delay={200}>
          <div className='mt-16 md:mt-24 relative rounded-xl bg-gray-900/70 dark:bg-[#0f1115]/60 backdrop-blur-xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/30 mx-auto max-w-6xl group hover:shadow-primary-500/10 transition-all duration-500'>
            <div className='flex h-auto md:h-[650px] text-gray-400 font-sans text-xs md:text-sm'>
              {/* Mock Sidebar */}
              <div className='w-60 bg-transparent border-r rtl:border-r-0 rtl:border-l border-gray-200/20 dark:border-gray-800/50 hidden md:flex flex-col flex-shrink-0'>
                {/* Logo Section */}
                <div className='p-6 mb-2'>
                  <img
                    src='/White-logo.png'
                    alt='NEXO Logo'
                    className='h-8 w-auto object-contain'
                  />
                </div>

                <div className='flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar'>
                  <div className='text-[10px] uppercase font-semibold text-gray-500 dark:text-gray-600 mt-2 mb-1 px-3'>
                    Public
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded text-gray-400 hover:bg-white/5 cursor-pointer'>
                    <LayoutDashboard size={16} /> Home
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded bg-white/10 text-white cursor-pointer backdrop-blur-sm'>
                    <LayoutDashboard size={16} /> Dashboards
                  </div>

                  <div className='text-[10px] uppercase font-semibold text-gray-500 dark:text-gray-600 mt-4 mb-1 px-3'>
                    Modules
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <Calculator size={16} /> Accounting
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <Package size={16} /> Assets
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <ShoppingCart size={16} /> Selling
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <CreditCard size={16} /> NEXO POS
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <ShoppingCart size={16} /> Buying
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <Package size={16} /> Stock
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <Settings size={16} /> Manufacturing
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <Users size={16} /> HR
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <FileText size={16} /> Payroll
                  </div>
                  <div className='flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 cursor-pointer'>
                    <Users size={16} /> CRM
                  </div>
                </div>
              </div>

              {/* Mock Main Content */}
              <div className='flex-1 flex flex-col min-w-0 bg-transparent'>
                {/* Top Bar */}
                <div className='h-16 border-b border-gray-200/20 dark:border-gray-800/50 flex items-center justify-between px-6 bg-transparent'>
                  <h2 className='text-white font-semibold text-lg'>
                    Dashboards
                  </h2>
                  <div className='flex items-center gap-4'>
                    <div className='hidden sm:flex items-center bg-white/5 rounded-md px-3 py-1.5 border border-white/10 w-64 backdrop-blur-sm'>
                      <Search size={14} className='text-gray-500 mx-2' />
                      <span className='text-gray-500 text-xs'>
                        Search or type a command (Ctrl + G)
                      </span>
                    </div>
                    <Bell
                      size={18}
                      className='text-gray-400 hover:text-white cursor-pointer'
                    />
                    <div className='w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs'>
                      A
                    </div>
                  </div>
                </div>

                {/* Scrollable Dashboard Area */}
                <div className='flex-1 overflow-y-auto p-6 custom-scrollbar'>
                  <h3 className='text-base font-medium text-white mb-4'>
                    Analytics Overview
                  </h3>

                  {/* Graphs Grid */}
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
                    {/* Main Revenue Chart */}
                    <div className='lg:col-span-2 bg-white/5 p-5 rounded-lg border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all'>
                      <div className='flex justify-between items-start mb-6'>
                        <div>
                          <h4 className='text-white font-medium text-sm'>
                            Revenue Trends
                          </h4>
                          <p className='text-xs text-gray-500 mt-1'>
                            Monthly purchase vs sales comparison
                          </p>
                        </div>
                        <div className='flex gap-2'>
                          <span className='w-2 h-2 rounded-full bg-[#42808b] mt-1'></span>
                          <span className='text-[10px] text-gray-400'>
                            Sales
                          </span>
                          <span className='w-2 h-2 rounded-full bg-emerald-500 mt-1 mx-2'></span>
                          <span className='text-[10px] text-gray-400'>
                            Profit
                          </span>
                        </div>
                      </div>

                      <div className='w-full h-48 relative'>
                        <div className='absolute inset-0 flex flex-col justify-between text-[9px] text-gray-600'>
                          <div className='border-b border-white/5 w-full h-0'></div>
                          <div className='border-b border-white/5 w-full h-0'></div>
                          <div className='border-b border-white/5 w-full h-0'></div>
                          <div className='border-b border-white/5 w-full h-0'></div>
                          <div className='border-b border-white/5 w-full h-0'></div>
                        </div>

                        <svg
                          viewBox='0 0 100 50'
                          preserveAspectRatio='none'
                          className='w-full h-full absolute inset-0 overflow-visible'
                        >
                          <path
                            d='M0,50 L0,30 C10,25 20,35 30,20 C40,10 50,25 60,15 C70,5 80,10 90,20 L100,10 L100,50 Z'
                            fill='url(#gradient1)'
                            opacity='0.2'
                          />
                          <path
                            d='M0,30 C10,25 20,35 30,20 C40,10 50,25 60,15 C70,5 80,10 90,20 L100,10'
                            fill='none'
                            stroke='#42808b'
                            strokeWidth='0.8'
                            vectorEffect='non-scaling-stroke'
                          />
                          <path
                            d='M0,45 C15,40 30,42 45,30 C60,18 75,25 90,15 L100,20'
                            fill='none'
                            stroke='#10b981'
                            strokeWidth='0.8'
                            strokeDasharray='2,1'
                            vectorEffect='non-scaling-stroke'
                          />
                          <defs>
                            <linearGradient
                              id='gradient1'
                              x1='0%'
                              y1='0%'
                              x2='0%'
                              y2='100%'
                            >
                              <stop
                                offset='0%'
                                stopColor='#42808b'
                                stopOpacity='0.5'
                              />
                              <stop
                                offset='100%'
                                stopColor='#42808b'
                                stopOpacity='0'
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className='flex justify-between text-[10px] text-gray-500 mt-2 px-1'>
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                        <span>Aug</span>
                      </div>
                    </div>

                    {/* Activity Bar Chart */}
                    <div className='bg-white/5 p-5 rounded-lg border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all flex flex-col'>
                      <div className='mb-6'>
                        <h4 className='text-white font-medium text-sm'>
                          Weekly Activity
                        </h4>
                        <p className='text-xs text-gray-500 mt-1'>
                          Orders processed
                        </p>
                      </div>
                      <div className='flex-1 flex items-end justify-between gap-2 h-48 px-2'>
                        <div className='w-full bg-[#366872] rounded-t-sm h-[40%] hover:bg-[#42808b] transition-all'></div>
                        <div className='w-full bg-[#366872] rounded-t-sm h-[65%] hover:bg-[#42808b] transition-all'></div>
                        <div className='w-full bg-[#366872] rounded-t-sm h-[30%] hover:bg-[#42808b] transition-all'></div>
                        <div className='w-full bg-[#42808b] rounded-t-sm h-[85%] relative group'>
                          <div className='absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity'>
                            85%
                          </div>
                        </div>
                        <div className='w-full bg-[#366872] rounded-t-sm h-[50%] hover:bg-[#42808b] transition-all'></div>
                        <div className='w-full bg-[#366872] rounded-t-sm h-[60%] hover:bg-[#42808b] transition-all'></div>
                        <div className='w-full bg-[#366872] rounded-t-sm h-[45%] hover:bg-[#42808b] transition-all'></div>
                      </div>
                      <div className='flex justify-between text-[10px] text-gray-500 mt-2'>
                        <span>M</span>
                        <span>T</span>
                        <span>W</span>
                        <span>T</span>
                        <span>F</span>
                        <span>S</span>
                        <span>S</span>
                      </div>
                    </div>
                  </div>

                  {/* Lists Grid */}
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
                    <div>
                      <div className='flex justify-between items-center mb-3'>
                        <span className='text-gray-400 text-xs font-semibold'>
                          Purchase Order
                        </span>
                      </div>
                      <div className='bg-white/5 rounded border border-white/10 overflow-hidden backdrop-blur-sm'>
                        <div className='p-3 flex justify-between items-center border-b border-white/5'>
                          <div>
                            <div className='text-white text-xs font-medium'>
                              Summit Traders Ltd.
                            </div>
                            <div className='text-[10px] text-gray-500'>
                              1 month ago
                            </div>
                          </div>
                          <span className='bg-orange-900/40 text-orange-400 border border-orange-900/50 text-[10px] px-2 py-0.5 rounded-full'>
                            To Receive
                          </span>
                        </div>
                        <div className='bg-white/5 p-2 text-center text-[10px] text-gray-400 hover:bg-white/10 cursor-pointer transition-colors'>
                          View List
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className='flex justify-between items-center mb-3'>
                        <span className='text-gray-400 text-xs font-semibold'>
                          Purchase Receipt
                        </span>
                      </div>
                      <div className='bg-white/5 rounded border border-white/10 overflow-hidden backdrop-blur-sm'>
                        <div className='p-3 flex justify-between items-center border-b border-white/5'>
                          <div>
                            <div className='text-white text-xs font-medium'>
                              Zuckerman Security Ltd.
                            </div>
                            <div className='text-[10px] text-gray-500'>
                              4 days ago
                            </div>
                          </div>
                          <span className='bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 text-[10px] px-2 py-0.5 rounded-full'>
                            Completed
                          </span>
                        </div>
                        <div className='p-3 flex justify-between items-center border-b border-white/5'>
                          <div>
                            <div className='text-white text-xs font-medium'>
                              ALI
                            </div>
                            <div className='text-[10px] text-gray-500'>
                              1 week ago
                            </div>
                          </div>
                          <span className='bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 text-[10px] px-2 py-0.5 rounded-full'>
                            Completed
                          </span>
                        </div>
                        <div className='p-3 flex justify-between items-center border-b border-white/5'>
                          <div>
                            <div className='text-white text-xs font-medium'>
                              Zuckerman Security Ltd.
                            </div>
                            <div className='text-[10px] text-gray-500'>
                              2 weeks ago
                            </div>
                          </div>
                          <span className='bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 text-[10px] px-2 py-0.5 rounded-full'>
                            Completed
                          </span>
                        </div>
                        <div className='bg-white/5 p-2 text-center text-[10px] text-gray-400 hover:bg-white/10 cursor-pointer transition-colors'>
                          View List
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className='flex justify-between items-center mb-3'>
                        <span className='text-gray-400 text-xs font-semibold'>
                          Purchase Invoice
                        </span>
                      </div>
                      <div className='bg-white/5 rounded border border-white/10 overflow-hidden h-[180px] flex flex-col backdrop-blur-sm'>
                        <div className='flex-1 flex items-center justify-center text-xs text-gray-500'>
                          No Data...
                        </div>
                        <div className='bg-white/5 p-2 text-center text-[10px] text-gray-400 hover:bg-white/10 cursor-pointer transition-colors mt-auto'>
                          View List
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className='text-base font-medium text-white mb-4'>
                    Items Dashboard
                  </h3>

                  {/* Charts Grid */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm'>
                      <div className='flex justify-between items-center mb-6'>
                        <span className='text-gray-400 text-xs font-semibold'>
                          Purchase By Item Groups
                        </span>
                        <div className='flex gap-2 text-gray-500'>
                          <Settings size={12} />
                        </div>
                      </div>
                      <div className='flex items-center justify-center'>
                        <div
                          className='w-32 h-32 rounded-full relative'
                          style={{
                            background:
                              'conic-gradient(#366872 0% 45%, #dc2626 45% 100%)',
                          }}
                        ></div>
                      </div>
                      <div className='flex justify-center gap-4 mt-6'>
                        <div className='flex items-center gap-2 text-[10px] text-gray-400'>
                          <div className='w-2 h-2 rounded-full bg-primary-700 mx-2'></div>{' '}
                          All Item Groups
                        </div>
                        <div className='flex items-center gap-2 text-[10px] text-gray-400'>
                          <div className='w-2 h-2 rounded-full bg-red-600 mx-2'></div>{' '}
                          Demo Item Group
                        </div>
                      </div>
                    </div>

                    <div className='bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm'>
                      <div className='flex justify-between items-center mb-6'>
                        <span className='text-gray-400 text-xs font-semibold'>
                          Sales By Item Group
                        </span>
                        <div className='flex gap-2 text-gray-500'>
                          <Settings size={12} />
                        </div>
                      </div>
                      <div className='flex items-center justify-center'>
                        <div
                          className='w-32 h-32 rounded-full relative'
                          style={{
                            background:
                              'conic-gradient(#5fa2ab 0% 60%, #10b981 60% 100%)',
                          }}
                        ></div>
                      </div>
                      <div className='flex justify-center gap-4 mt-6'>
                        <div className='flex items-center gap-2 text-[10px] text-gray-400'>
                          <div className='w-2 h-2 rounded-full bg-primary-500 mx-2'></div>{' '}
                          All Item Groups
                        </div>
                        <div className='flex items-center gap-2 text-[10px] text-gray-400'>
                          <div className='w-2 h-2 rounded-full bg-emerald-500 mx-2'></div>{' '}
                          Raw Material
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Hero
