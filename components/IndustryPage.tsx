'use client'

import React, { useEffect } from 'react';
import { Industry } from '@/lib/types';
import { ChevronRight, Check, ArrowLeft, Send } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { TRANSLATIONS } from '@/lib/constants';

interface IndustryPageProps {
  industry: Industry;
  onBack: () => void;
  isArabic: boolean;
}

const IndustryPage: React.FC<IndustryPageProps> = ({ industry, onBack, isArabic }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industry]);

  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;

  const openModal = (e: React.MouseEvent, type: 'demo' | 'consult') => {
    e.preventDefault();
    const subject = type === 'demo' 
      ? (isArabic ? `طلب عرض تجريبي للصناعة: ${industry.name}` : `Industry Demo: ${industry.name}`)
      : (isArabic ? `استشارة متخصص: ${industry.name}` : `Consultation: ${industry.name}`);
      
    window.dispatchEvent(new CustomEvent('open-contact-modal', { 
      detail: { subject } 
    }));
  };

  return (
    <div className="bg-transparent min-h-screen pb-20">
      {/* 1️⃣ HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
            <img 
              src={industry.bgImage} 
              alt={`${industry.name} background`}
              className="w-full h-full object-cover"
            />
            {/* Darker overlay for better text contrast */}
            <div className="absolute inset-0 bg-white/80 dark:bg-black/85 transition-colors duration-300"></div>
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 dark:from-primary-950/40 via-transparent to-transparent"></div>
        </div>

        <button 
          onClick={onBack}
          className="absolute top-24 left-4 md:left-8 rtl:left-auto rtl:right-4 md:rtl:right-8 z-20 flex items-center gap-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors bg-white/50 dark:bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 dark:border-zinc-800"
        >
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
          <span className="text-sm font-semibold">{t.backHome}</span>
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl rtl:text-right">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/10 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 font-bold text-xs uppercase tracking-widest mb-8 border border-primary-500/20 backdrop-blur-md">
                {isArabic ? 'حلول الصناعة:' : 'Industry Solution:'} {industry.name}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                {industry.heroHeadline}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl drop-shadow-sm font-medium">
                {industry.heroSubheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={(e) => openModal(e, 'demo')}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl shadow-xl transition-all transform hover:-translate-y-1"
                >
                  {t.requestIndustryDemo}
                </button>
                <button 
                  onClick={(e) => openModal(e, 'consult')}
                  className="px-8 py-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white font-bold rounded-xl shadow-md transition-all transform hover:-translate-y-1"
                >
                  {t.consultSpecialist}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2️⃣ INDUSTRY PAIN POINTS */}
      <section className="py-24 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">{isArabic ? `التحديات الحرجة في ${industry.name}` : `Critical Challenges in ${industry.name}`}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-gray-50/80 dark:bg-zinc-900/80 backdrop-blur-md border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition-shadow rtl:text-right">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400 mb-4 font-bold border border-red-200 dark:border-red-900/40 shadow-sm">!</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{point.problem}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    <span className="text-primary-600 dark:text-primary-400 font-bold italic mx-1">{isArabic ? 'النتيجة:' : 'The Result:'}</span> {point.result}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ HOW NEXO SOLVES IT */}
      <section className="py-24 bg-primary-600/90 dark:bg-primary-700/90 text-white backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{isArabic ? 'بني من أجل الوضوح التشغيلي' : 'Built for Operational Clarity'}</h2>
            <p className="text-xl text-primary-50 leading-relaxed font-medium">
              {industry.solvesDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4️⃣ RECOMMENDED EDITIONS */}
      <section className="py-24 bg-gray-50/30 dark:bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{isArabic ? `إصدارات نيكسو الإستراتيجية لـ ${industry.name}` : `Strategic NEXO Editions for ${industry.name}`}</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">{isArabic ? 'أطر عمل معيارية مصممة لنطاق مؤسسي.' : 'Modular frameworks designed for institutional scale.'}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl p-8 border border-gray-100 dark:border-zinc-800 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 rtl:text-right">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-extrabold text-primary-600 dark:text-primary-400 mb-6" dir="ltr">{pkg.price}</div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feat, j) => (
                      <li key={j} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <Check className="w-4 h-4 text-emerald-500 mx-3 flex-shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('open-contact-modal', { 
                        detail: { subject: isArabic ? `استفسار عن حزمة: ${pkg.name}` : `Package Inquiry: ${pkg.name}` } 
                      }));
                    }}
                    className="w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:opacity-90 shadow-lg"
                  >
                    {isArabic ? 'اختر الإصدار' : 'Select Edition'}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ CORE MODULES */}
      <section className="py-24 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">{isArabic ? 'الوحدات الصناعية الأساسية' : 'Core Industrial Modules'}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industry.coreModules.map((mod, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center group p-6 rounded-2xl hover:bg-gray-50/50 dark:hover:bg-zinc-900/40 transition-colors backdrop-blur-sm">
                  <div className="w-16 h-16 bg-primary-100/80 dark:bg-primary-900/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <mod.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{mod.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{mod.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary-700/90 via-primary-800/90 to-primary-950/90 backdrop-blur-md rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden group rtl:text-right">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{isArabic ? `ارتقِ بعمليات ${industry.name} الخاصة بك` : `Elevate Your ${industry.name} Operations`}</h2>
                <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
                  {isArabic 
                    ? 'انضم إلى القادة العالميين الذين يستخدمون NEXO 4 للحصول على تحكم خالٍ من الفوضى وعائد استثمار ملموس في غضون أشهر.'
                    : 'Join global leaders who use NEXO 4 to gain zero-chaos control and measurable ROI within months.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={(e) => openModal(e, 'demo')}
                    className="px-10 py-5 bg-white text-primary-900 font-extrabold rounded-xl shadow-xl hover:shadow-white/20 transition-all transform hover:-translate-y-1"
                  >
                    {isArabic ? 'ابدأ إصدار العرض تجريبي المجاني' : 'Start Your Free Demo Edition'}
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('open-contact-modal', { 
                        detail: { subject: isArabic ? 'طلب دراسات الحالة' : 'Case Studies Request' } 
                      }));
                    }}
                    className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-extrabold rounded-xl hover:bg-white/10 transition-all"
                  >
                    {isArabic ? 'عرض دراسات الحالة' : 'View Case Studies'}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;