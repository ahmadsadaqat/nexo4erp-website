'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection() {
  return (
    <>
      <main className='overflow-hidden'>
        <div
          aria-hidden
          className='z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block'
        >
          <div className='w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]' />
          <div className='h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]' />
          <div className='h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]' />
        </div>
        <section>
          <div className='relative pt-24 md:pt-36'>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring' as const,
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className='absolute inset-0 -z-20'
            >
              <Image
                src='/night-background.png'
                alt='background'
                className='absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block'
                width={3276}
                height={4095}
                priority
              />
            </AnimatedGroup>
            <div
              aria-hidden
              className='absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]'
            />
            <div className='mx-auto max-w-7xl px-6'>
              <div className='text-center sm:mx-auto lg:mr-auto lg:mt-0'>
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href='#link'
                    className='hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950'
                  >
                    <span className='text-foreground text-sm'>
                      Introducing Support for ERP Software
                    </span>
                    <span className='dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700'></span>

                    <div className='bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500'>
                      <div className='flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0'>
                        <span className='flex size-6'>
                          <ArrowRight className='m-auto size-3' />
                        </span>
                        <span className='flex size-6'>
                          <ArrowRight className='m-auto size-3' />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h1 className='mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]'>
                    Architecting Your Digital Future
                  </h1>
                  <p className='mx-auto mt-8 max-w-2xl text-balance text-lg'>
                    Engineering the next wave of intelligent enterprises through
                    a fully integrated suite of custom software, data-driven
                    ERP, and frictionless digital commerce.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className='mt-12 flex flex-col items-center justify-center gap-2 md:flex-row'
                >
                  <div
                    key={1}
                    className='bg-foreground/10 rounded-[14px] border p-0.5'
                  >
                    <Button
                      asChild
                      size='lg'
                      className='rounded-xl px-5 text-base'
                    >
                      <Link href='contact'>
                        <span className='text-nowrap'>Book A free Demo</span>
                      </Link>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className='relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20'>
                <div
                  aria-hidden
                  className='bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%'
                />
                <div className='inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1'>
                  <Image
                    className='bg-background aspect-15/8 relative hidden rounded-2xl dark:block'
                    src='/Dashboard.png'
                    alt='app screen'
                    width={2700}
                    height={1440}
                    priority
                  />
                  <Image
                    className='z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden'
                    src='/Dashboard.png'
                    alt='app screen'
                    width={2700}
                    height={1440}
                    priority
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        {/* <section className='bg-background pb-16 pt-16 md:pb-32'>
          <div className='group relative m-auto max-w-5xl px-6'>
            <div className='absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100'>
              <Link
                href='/'
                className='block text-sm duration-150 hover:opacity-75'
              >
                <span> Meet Our Customers</span>

                <ChevronRight className='ml-1 inline-block size-3' />
              </Link>
            </div>
            <div className='group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14'>
              <div className='flex'>
                <Image
                  className='mx-auto h-5 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/nvidia.svg'
                  alt='Nvidia Logo'
                  height={20}
                  width={80}
                />
              </div>

              <div className='flex'>
                <Image
                  className='mx-auto h-4 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/column.svg'
                  alt='Column Logo'
                  height={16}
                  width={64}
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-4 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/github.svg'
                  alt='GitHub Logo'
                  height={16}
                  width={64}
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-5 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/nike.svg'
                  alt='Nike Logo'
                  height={20}
                  width={80}
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-5 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/lemonsqueezy.svg'
                  alt='Lemon Squeezy Logo'
                  height={20}
                  width={80}
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-4 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/laravel.svg'
                  alt='Laravel Logo'
                  height={16}
                  width={64}
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-7 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/lilly.svg'
                  alt='Lilly Logo'
                  height={28}
                  width={112}
                />
              </div>

              <div className='flex'>
                <Image
                  className='mx-auto h-6 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/openai.svg'
                  alt='OpenAI Logo'
                  height={24}
                  width={96}
                />
              </div>
            </div>
          </div>
        </section> */}
        <section id='industries' className='bg-background pb-16 pt-8 md:pb-24'>
          <div className='mx-auto max-w-6xl px-6'>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.25,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className=''>
                <h2 className='text-2xl md:text-3xl font-semibold'>
                  Industries we serve
                </h2>
                <p className='text-muted-foreground mt-2 max-w-3xl text-sm md:text-base'>
                  Tailored ERP solutions across sectors to streamline
                  operations, amplify insights, and scale with confidence.
                </p>
              </div>

              <div className='group relative m-auto mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {/* Manufacturing */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M3 21h18' />
                          <path d='M19 21V8l-3 2-4-3-4 3-3-2v13' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Manufacturing</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Plan production, orchestrate supply chains, and track inventory with real-time shop-floor insights.
                    </p>
                  </div>

                  {/* Financial Services */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M3 21h18' />
                          <path d='M5 21V8l7-4 7 4v13' />
                          <path d='M9 13h6' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Financial Services</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Automate accounting, compliance, and reporting with unified ledgers and instant analytics.
                    </p>
                  </div>

                  {/* Healthcare */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M12 8v8' />
                          <path d='M8 12h8' />
                          <rect x='3' y='3' width='18' height='18' rx='2' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Healthcare</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Coordinate patient services, procurement, and billing with audit-ready records.
                    </p>
                  </div>

                  {/* Hospitality */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M3 10h18' />
                          <path d='M7 10v11' />
                          <path d='M17 10v11' />
                          <path d='M12 6V3' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Hospitality</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Manage reservations, inventory, and operations with centralized insights.
                    </p>
                  </div>

                  {/* Online Retail */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <Image
                          src='/globe.svg'
                          alt='Online'
                          width={24}
                          height={24}
                          className='dark:invert'
                        />
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Online Retail</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Unify product, pricing, and promotions with seamless omnichannel experiences.
                    </p>
                  </div>

                  {/* Ecommerce */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M6 6h15l-1.5 9h-12z' />
                          <circle cx='9' cy='20' r='1' />
                          <circle cx='18' cy='20' r='1' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Ecommerce</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Connect storefronts, payments, and fulfillment to boost conversion and loyalty.
                    </p>
                  </div>

                  {/* Education */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M22 10L12 4 2 10l10 6 10-6z' />
                          <path d='M6 12v5c3 1 9 1 12 0v-5' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Education</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Streamline admissions, finance, and assets with transparent reporting.
                    </p>
                  </div>

                  {/* Transport & Logistics */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M10 17h4' />
                          <path d='M3 7h13v10H3z' />
                          <path d='M16 13h3l2 2v2h-5z' />
                          <circle cx='7.5' cy='17.5' r='1.5' />
                          <circle cx='17.5' cy='17.5' r='1.5' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Transport & Logistics</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Optimize fleet, warehousing, and last‑mile delivery with live visibility.
                    </p>
                  </div>

                  {/* Oil & Gas */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M12 3c3 3 4 5 4 7a4 4 0 0 1-8 0c0-2 1-4 4-7z' />
                          <path d='M8 17h8' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Oil & Gas</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Oversee upstream to downstream operations with cost controls and asset visibility.
                    </p>
                  </div>

                  {/* Mining */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M3 12l6-6 3 3-6 6z' />
                          <path d='M14 7l7 7' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Mining</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Track assets, materials, and safety metrics from pit to port.
                    </p>
                  </div>

                  {/* Trading & Distribution */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M3 12h18' />
                          <path d='M7 8l-4 4 4 4' />
                          <path d='M17 16l4-4-4-4' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Trading & Distribution</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Balance demand, pricing, and logistics across multi-warehouse networks.
                    </p>
                  </div>

                  {/* Construction */}
                  <div className='group/card rounded-2xl border border-slate-200/80 dark:border-slate-700/50 bg-white dark:bg-slate-800/80 p-6 shadow-sm hover:shadow-xl hover:border-teal-500/30 duration-300 backdrop-blur-sm hover:-translate-y-1'>
                    <div className='mb-5'>
                      <span className='inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 group-hover/card:ring-teal-500/40 transition-all'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          className='size-6'
                        >
                          <path d='M3 20h18' />
                          <path d='M6 20V9l6-4 6 4v11' />
                          <path d='M9 20v-4h6v4' />
                        </svg>
                      </span>
                    </div>
                    <h3 className='text-lg font-semibold mb-3 text-slate-900 dark:text-white'>Construction</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                      Control project costs, contractors, and materials with live dashboards.
                    </p>
                  </div>
                </div>
                <section className='py-16' id='features'>
                  <h2 className='text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
                    Integrate with your favourite Apps
                  </h2>
                  <p className='text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-3xl'>
                    To achieve your business goals, we seamlessly integrate your
                    applications with your existing systems, ensuring smooth
                    data flow and enhanced functionality.
                  </p>

                  <div className='mt-6'>
                    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center'>
                      {[
                        {
                          src: 'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg',
                          alt: 'PayPal',
                        },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg', alt: 'Dropbox' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg', alt: 'Razorpay' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg', alt: 'Slack' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', alt: 'Stripe' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', alt: 'AWS' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg', alt: 'WooCommerce' },
                        { src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg', alt: 'Shopify' },
                      ].map(({ src, alt }) => (
                        <div
                          key={alt}
                          className='flex items-center justify-center rounded-xl bg-white p-4 shadow-sm border border-slate-200 dark:border-transparent h-24 transition-transform hover:-translate-y-1'
                          role='img'
                          aria-label={alt}
                        >
                          <Image
                            src={src}
                            alt={alt}
                            width={160}
                            height={60}
                            className='h-10 w-full object-contain'
                            priority={false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  )
}
