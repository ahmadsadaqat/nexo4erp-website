'use client'

import React from 'react';
import { Quote, ArrowRight, Star } from 'lucide-react'; // Added Star
import { TRANSLATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';
import { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  isArabic: boolean;
  testimonials: Testimonial[];
  onSeeAll?: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isArabic, testimonials, onSeeAll }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;

  return (
    <section id="testimonials" className="py-24 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.testimonialsHeader}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.testimonialsSub}</h3>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              {t.testimonialsDesc}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div 
                className="bg-white/95 dark:bg-zinc-900/95 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-800 relative flex flex-col backdrop-blur-md hover:transform hover:-translate-y-2 transition-transform duration-300 h-full rtl:text-right overflow-hidden"
              >
                {/* 1. FIXED QUOTE OVERLAP: Lower opacity and z-index */}
                <Quote className="absolute top-4 right-4 rtl:left-4 rtl:right-auto w-12 h-12 text-primary-100/40 dark:text-primary-900/20 transform rtl:scale-x-[-1] z-0" />
                
                {/* 2. RATING STARS: Added above the quote text */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < (testimonial.rating || 5) ? 'fill-amber-400 text-amber-400' : 'text-zinc-200 dark:text-zinc-700'}`} 
                    />
                  ))}
                </div>

                <div className="mb-6 flex-grow relative z-10">
                  <p className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center mt-auto relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden mx-4 border-2 border-primary-100 dark:border-primary-900 flex-shrink-0">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-gray-900 dark:text-white truncate">{testimonial.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
            <ScrollReveal delay={300}>
              <button 
                onClick={onSeeAll}
                className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-1 cursor-pointer gap-2"
              >
                  {isArabic ? 'اقرأ المزيد من قصص النجاح' : 'Read All Success Stories'} <ArrowRight size={18} className="rtl:rotate-180" />
              </button>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
