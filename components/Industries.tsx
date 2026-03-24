'use client'

import React from 'react';

import { INDUSTRIES, TRANSLATIONS } from '@/lib/constants';

import ScrollReveal from '@/components/ScrollReveal';

import { Industry } from '@/lib/types';



interface IndustriesProps {

  isArabic: boolean;

  onSelectIndustry?: (industry: Industry) => void;

}



const Industries: React.FC<IndustriesProps> = ({ isArabic, onSelectIndustry }) => {

  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;



  return (

    <section id="industries" className="py-24 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal>

          <div className="text-center mb-16">

            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.industries}</h2>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.sectorsHeader}</h3>

            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">

              {t.sectorsSub}

            </p>

          </div>

        </ScrollReveal>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {INDUSTRIES.map((industry, index) => (

            <ScrollReveal key={index} delay={index * 50}>

              <div 

                onClick={() => onSelectIndustry?.(industry)}

                className="relative h-80 group rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-black"

              >

                {/* Background Image Layer */}

                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">

                  <img 

  src={industry.bgImage} 

  alt={industry.name} 

  className="w-full h-full object-cover"

  // Only lazy load cards after the first row

  loading={index < 3 ? "eager" : "lazy"} 

/>

                </div>

                

                {/* Overlay Layers - Darker by default for better text visibility */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:via-black/70 transition-colors duration-300"></div>

                

                {/* Accent Line */}

                <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-2 h-full bg-primary-500 transform -translate-x-full rtl:translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-20"></div>

                

                {/* Content Layer */}

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 rtl:text-right">

                  <div className="mb-4 inline-flex p-3 bg-white/10 backdrop-blur-md rounded-2xl w-fit group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">

                    <industry.icon className="w-8 h-8 text-white" />

                  </div>

                  

                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">

                    {industry.name}

                  </h4>

                  

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 line-clamp-2">

                    {industry.description}

                  </p>

                  

                  <div className="flex items-center text-primary-400 font-bold text-sm">

                    {t.exploreEdition} <span className="mx-2 transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">→</span>

                  </div>

                </div>



                {/* Glass effect on top */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white to-transparent transition-opacity duration-500 pointer-events-none"></div>

              </div>

            </ScrollReveal>

          ))}

        </div>

      </div>

    </section>

  );

};



export default Industries;
