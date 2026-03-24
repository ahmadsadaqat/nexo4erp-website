'use client'

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PACKAGE_TIERS, TRANSLATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

interface PackagesProps {
  isArabic: boolean;
}

const Packages: React.FC<PackagesProps> = ({ isArabic }) => {
  const openModal = (e: React.MouseEvent, pkgName: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-contact-modal', { 
      detail: { subject: isArabic ? `استفسار عن إصدار: ${pkgName}` : `Edition Inquiry: ${pkgName}` } 
    }));
  };

  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  const erpPackages = PACKAGE_TIERS.filter(p => p.category === 'ERP');
  const hrmsPackages = PACKAGE_TIERS.filter(p => p.category === 'HRMS');

  return (
    <section id="packages" className="py-24 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.editions}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.editionsHeader}</h3>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              {t.editionsSub}
            </p>
          </div>
        </ScrollReveal>

        {/* ERP Section */}
        <ScrollReveal>
          <div className="mb-12">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 rtl:border-l-0 rtl:border-r-4 border-primary-500 px-4 uppercase tracking-wider">Business ERP Editions</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {erpPackages.map((tier, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col bg-white/95 dark:bg-zinc-900/95 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-md h-full ${tier.isPopular ? 'border-2 border-primary-500 z-10' : 'border border-gray-100 dark:border-zinc-800'}`}
                >
                  {tier.isPopular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-700 to-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-tight">
                      Enterprise Standard
                    </div>
                  )}

                  <div className="p-8 flex flex-col h-full">
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h5>
                    <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-4">{tier.target}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow-0">
                      {tier.description}
                    </p>
                    
                    <div className="mb-6 pt-6 border-t border-gray-100 dark:border-zinc-800">
                      <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 mb-4 tracking-tighter">Edition Components</p>
                      <ul className="space-y-3 flex-grow overflow-y-auto">
                        {tier.modules.map((mod, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-4 w-4 text-emerald-500 mx-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300 text-xs font-medium">{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={(e) => openModal(e, tier.name)}
                      className={`mt-auto w-full py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2 ${
                        tier.isPopular 
                          ? 'bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-xl hover:shadow-2xl hover:shadow-primary-600/50' 
                          : 'bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      {t.learnMore} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* HRMS Section */}
        <ScrollReveal delay={200}>
          <div className="mt-20">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 rtl:border-l-0 rtl:border-r-4 border-emerald-500 px-4 uppercase tracking-wider">Specialized People Management (HRMS Editions)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {hrmsPackages.map((tier, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col bg-white/95 dark:bg-zinc-900/95 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-md border border-gray-100 dark:border-zinc-800"
                >
                  <div className="p-8 flex flex-col h-full">
                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h5>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4">{tier.target}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {tier.description}
                    </p>
                    
                    <div className="mb-6 pt-6 border-t border-gray-100 dark:border-zinc-800 flex-grow">
                       <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 mb-4 tracking-tighter">Edition Highlights</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {tier.modules.map((mod, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-4 w-4 text-emerald-500 mx-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300 text-xs font-medium">{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={(e) => openModal(e, tier.name)}
                      className="mt-8 w-full py-3 rounded-xl font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      Connect with HR Tech Expert
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Packages;