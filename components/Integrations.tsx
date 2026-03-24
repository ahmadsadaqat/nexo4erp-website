'use client'


import React from 'react';
import { INTEGRATIONS, TRANSLATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

interface IntegrationsProps {
  isArabic: boolean;
}

const Integrations: React.FC<IntegrationsProps> = ({ isArabic }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  
  return (
    <section id="integrations" className="py-20 bg-white/20 dark:bg-black/20 backdrop-blur-sm border-t border-gray-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
            {t.integrationsHeader}
          </p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pb-8">
          {INTEGRATIONS.map((app, index) => (
             <ScrollReveal key={index} delay={index * 50} width="auto">
               <div 
                  className="flex flex-col items-center justify-center group relative cursor-default"
               >
                  <div className="bg-white/60 dark:bg-zinc-900/60 rounded-lg p-4 w-32 h-20 flex items-center justify-center 
                    opacity-90 group-hover:opacity-100
                    transform transition-all duration-300 ease-out
                    group-hover:bg-white dark:group-hover:bg-zinc-800 
                    group-hover:shadow-xl group-hover:scale-110 border border-gray-200 dark:border-zinc-800 group-hover:border-gray-300 dark:group-hover:border-zinc-700 overflow-hidden backdrop-blur-sm relative z-10">
                    
                    <img 
                      src={app.logo} 
                      alt={app.name} 
                      className="max-h-12 w-auto object-contain transition-all duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                  </div>
                  {/* Name below */}
                  <span className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-gray-700 dark:text-gray-300 absolute -bottom-6 whitespace-nowrap z-0">
                    {app.name}
                  </span>
               </div>
             </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
