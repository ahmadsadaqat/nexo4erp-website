'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS, TRANSLATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

interface FAQProps {
  isArabic: boolean;
}

const FAQ: React.FC<FAQProps> = ({ isArabic }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-xl text-primary-600 dark:text-primary-400 mb-4 transition-transform duration-300 hover:scale-110">
               <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{isArabic ? 'الدعم' : 'Support'}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.supportHeader}</h3>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {t.supportSub}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div 
                className={`bg-white dark:bg-zinc-900 rounded-2xl border transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index 
                    ? 'border-primary-500 shadow-md ring-1 ring-primary-500/20' 
                    : 'border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left rtl:text-right focus:outline-none"
                >
                  <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-primary-700 dark:text-primary-400' : 'text-gray-900 dark:text-white'}`}>
                      {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-500 ease-in-out ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'}`} />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed rtl:text-right">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;