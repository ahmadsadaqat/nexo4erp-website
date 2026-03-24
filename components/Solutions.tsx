'use client'

import React, { useState } from 'react';
import { SOLUTIONS_CONTENT, TRANSLATIONS } from '@/lib/constants';
import { ArrowRight, Code, Database, Smartphone, Cloud } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

interface SolutionsProps {
  isArabic: boolean;
}

const Solutions: React.FC<SolutionsProps> = ({ isArabic }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-contact-modal'));
  };

  const handleCardClick = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="solutions" className="py-24 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.solutions}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.ecosystemHeader}</h3>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              {t.ecosystemSub}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Flip/Expand Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {SOLUTIONS_CONTENT.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <ScrollReveal key={item.id} delay={index * 100}>
                <div 
                  className={`group h-64 [perspective:1000px] cursor-pointer transition-all duration-500 ${isActive ? 'scale-105 z-20' : 'hover:scale-105'}`}
                  onClick={() => handleCardClick(item.id)}
                >
                   <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isActive ? '[transform:rotateY(180deg)]' : ''}`}>
                      
                      {/* Front Face */}
                      <div className={`absolute inset-0 [backface-visibility:hidden] bg-white dark:bg-zinc-900 rounded-xl shadow-sm border flex flex-col items-center justify-center p-6 text-center backdrop-blur-md bg-white/95 dark:bg-zinc-900/95 transition-all duration-300
                        ${isActive 
                            ? 'border-primary-500 shadow-[0_0_25px_rgba(66,128,139,0.4)]' 
                            : 'border-gray-100 dark:border-zinc-800'
                        }`}
                      >
                          {/* Top Glow Line */}
                          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-primary-500 rounded-b-full transition-all duration-500 ${isActive ? 'opacity-100 shadow-[0_0_10px_rgba(66,128,139,1)]' : 'opacity-0'}`}></div>

                          <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/10 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                            <item.icon className="w-7 h-7" />
                         </div>
                         <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                         
                         <p className="text-xs text-gray-400 mt-2 opacity-70">{isArabic ? 'انقر للكشف عن التفاصيل' : 'Click to reveal details'}</p>
                         
                         <div className={`mt-auto w-full h-1 rounded-full transition-all duration-500 ${isActive ? 'bg-primary-500 shadow-[0_0_10px_rgba(66,128,139,0.8)]' : 'bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-50'}`}></div>
                      </div>

                      {/* Back Face */}
                      <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gray-900 dark:bg-zinc-800 rounded-xl shadow-xl border flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300
                          ${isActive 
                            ? 'border-primary-500 shadow-[0_0_25px_rgba(66,128,139,0.4)]' 
                            : 'border-gray-800 dark:border-zinc-700'
                          }`}
                      >
                         <div className={`absolute top-0 left-0 w-full h-1 bg-primary-500 transition-all duration-500 ${isActive ? 'shadow-[0_0_15px_rgba(66,128,139,1)]' : ''}`}></div>
                         
                         <div className="w-10 h-10 bg-gray-800 dark:bg-zinc-700 rounded-full flex items-center justify-center mb-3 text-white">
                            <item.icon className="w-5 h-5" />
                         </div>

                         <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                         
                         <p className="text-gray-300 text-xs leading-relaxed mb-4">
                            {item.description}
                         </p>
                         
                         <div className="mt-auto">
                            <a href="#features" onClick={(e) => { e.stopPropagation(); handleScroll(e, '#features'); }} className="inline-flex items-center text-primary-400 text-xs font-semibold hover:text-primary-300 transition-colors">
                                {isArabic ? 'استكشف' : 'Explore'} <ArrowRight className="w-3 h-3 mx-1 rtl:rotate-180" />
                            </a>
                         </div>
                      </div>
                   </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="space-y-8 rtl:text-right">
                  <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                              <Database className="w-5 h-5" />
                          </div>
                      </div>
                      <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{isArabic ? 'نواة البيانات المركزية' : 'Centralized Data Core'}</h4>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {isArabic 
                                ? 'في قلب NEXO 4 توجد بنية قاعدة بيانات قوية تقضي على صوامع البيانات. سواء حدثت عملية بيع عبر الإنترنت، في المتجر، أو عبر وكيل متنقل، فإن تحديث المخزون ينتشر فوراً عبر النظام البيئي بأكمله.'
                                : 'At the heart of NEXO 4 is a robust database architecture that eliminates data silos. Whether a sale happens online, in-store, or via a mobile agent, the inventory update propagates instantly across the entire ecosystem.'
                              }
                          </p>
                      </div>
                  </div>

                  <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                              <Code className="w-5 h-5" />
                          </div>
                      </div>
                      <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{isArabic ? 'تطوير قائم على واجهة البرمجة (API-First)' : 'API-First Development'}</h4>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {isArabic
                                ? 'نهجنا "Headless ERP" يعني أن منطق الواجهة الخلفية منفصل عن عرض الواجهة الأمامية. يسمح لنا هذا ببناء بوابات ويب مخصصة، أو تطبيقات جوال، أو حتى تكاملات إنترنت الأشياء (IoT) دون تعطيل منطق العمل الأساسي.'
                                : 'Our "Headless ERP" approach means the backend logic is decoupled from the frontend presentation. This allows us to build custom web portals, mobile apps, or even IoT integrations without disrupting core business logic.'
                              }
                          </p>
                      </div>
                  </div>
                   
                   <div className="pt-4">
                       <a 
                        href="#" 
                        onClick={openModal}
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary-600/50 transition-all duration-300 transform hover:-translate-y-1"
                       >
                          {isArabic ? 'استشر مهندساً' : 'Consult an Architect'} <ArrowRight className="mx-2 w-4 h-4 rtl:rotate-180"/>
                       </a>
                   </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white/50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 backdrop-blur-sm rtl:text-right">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{isArabic ? 'مجموعة التقنيات والتوافق' : 'Tech Stack & Compatibility'}</h4>
                  <div className="space-y-4">
                      <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl flex items-center gap-4 shadow-sm border border-gray-100 dark:border-zinc-700">
                          <Cloud className="w-8 h-8 text-sky-500" />
                          <div>
                              <h5 className="font-bold text-gray-900 dark:text-white text-sm">{isArabic ? 'البنية التحتية السحابية' : 'Cloud Infrastructure'}</h5>
                              <p className="text-xs text-gray-500">AWS / Azure / Google Cloud</p>
                          </div>
                      </div>
                      <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl flex items-center gap-4 shadow-sm border border-gray-100 dark:border-zinc-700">
                          <Smartphone className="w-8 h-8 text-green-500" />
                          <div>
                              <h5 className="font-bold text-gray-900 dark:text-white text-sm">{isArabic ? 'أطر عمل الجوال' : 'Mobile Frameworks'}</h5>
                              <p className="text-xs text-gray-500">React Native / Flutter / Native iOS & Android</p>
                          </div>
                      </div>
                      <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl flex items-center gap-4 shadow-sm border border-gray-100 dark:border-zinc-700">
                          <Code className="w-8 h-8 text-orange-500" />
                          <div>
                              <h5 className="font-bold text-gray-900 dark:text-white text-sm">{isArabic ? 'تقنيات الواجهة الأمامية' : 'Frontend Technologies'}</h5>
                              <p className="text-xs text-gray-500">React / Vue / Next.js / Angular</p>
                          </div>
                      </div>
                  </div>
              </div>
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default Solutions;