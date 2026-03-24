'use client'


import React from 'react';
import { ArrowLeft, Quote, Star, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';
import TrustedClients from './TrustedClients';
import { Testimonial } from '@/lib/types';

interface TestimonialsPageProps {
  isArabic: boolean;
  testimonials: Testimonial[];
  onBack: () => void;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ isArabic, testimonials, onBack }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;

  return (
    <div className="bg-transparent min-h-screen pt-[80px] md:pt-[96px]">
      <section className="relative pt-20 pb-16 overflow-hidden border-b border-gray-100 dark:border-zinc-900 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-primary-600 transition-colors mb-8 uppercase tracking-[0.2em]"
            >
              <ArrowLeft className="w-3 h-3 rtl:rotate-180" /> {t.backHome}
            </button>
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              {isArabic ? 'قصص النجاح' : 'Success Stories'}
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
              {isArabic 
                ? 'تعرف على كيفية قيام NEXO 4 بتحويل العمليات لمؤسسات رائدة في المنطقة.'
                : 'See how NEXO 4 has transformed operations for leading organizations across the region.'
              }
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-gray-50/20 dark:bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {testimonials.map((testimonial, i) => (
                      <ScrollReveal key={i} delay={i * 100}>
                          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-10 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-500 group relative rtl:text-right h-full">
                              <Quote className="absolute top-10 right-10 opacity-10 text-primary-600 w-12 h-12 rtl:left-10 rtl:right-auto" />
                              
                              <div className="flex items-center gap-1 text-amber-500 mb-6">
                                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                              </div>

                              <p className="text-xl font-medium text-gray-700 dark:text-gray-200 leading-relaxed mb-10">
                                  "{testimonial.quote}"
                              </p>

                              <div className="flex items-center gap-4 border-t border-gray-50 dark:border-zinc-800 pt-8 mt-auto">
                                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary-50 dark:border-primary-900/20">
                                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                      <h4 className="font-extrabold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                      <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{testimonial.role}</p>
                                  </div>
                              </div>
                          </div>
                      </ScrollReveal>
                  ))}
                  
                  <ScrollReveal delay={300}>
                      <div className="bg-primary-600/90 backdrop-blur-md rounded-3xl p-10 flex flex-col justify-center items-center text-center text-white shadow-xl hover:-translate-y-2 transition-transform h-full">
                          <h4 className="text-2xl font-extrabold mb-4">{isArabic ? 'كن قصة نجاحنا التالية' : 'Be Our Next Success Story'}</h4>
                          <p className="text-primary-100 mb-8">{isArabic ? 'دعنا نساعدك في تحقيق أقصى قدر من الكفاءة لعملياتك.' : 'Let us help you achieve maximum efficiency for your operations.'}</p>
                          <button 
                            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                            className="px-8 py-3 bg-white text-primary-700 font-bold rounded-xl shadow-lg hover:bg-primary-50 transition-colors flex items-center gap-2"
                          >
                            {isArabic ? 'ابدأ اليوم' : 'Get Started'} <ArrowRight size={18} className="rtl:rotate-180" />
                          </button>
                      </div>
                  </ScrollReveal>
              </div>
          </div>
      </section>

      <div className="py-20 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md border-t border-gray-100 dark:border-zinc-900">
        <TrustedClients isArabic={isArabic} />
      </div>
    </div>
  );
};

export default TestimonialsPage;
