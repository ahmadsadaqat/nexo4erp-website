'use client'


import React from 'react';
import { Check } from 'lucide-react';
// Fix: Import PACKAGE_TIERS as PRICING_TIERS is not defined in constants.tsx
import { PACKAGE_TIERS, TRANSLATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

interface PricingProps {
  isArabic: boolean;
}

const Pricing: React.FC<PricingProps> = ({ isArabic }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-contact-modal'));
  };

  // Fix: Filter to show only ERP category tiers for general pricing overview
  const erpTiers = PACKAGE_TIERS.filter(tier => tier.category === 'ERP');

  return (
    <section id="pricing" className="py-24 bg-gray-50/20 dark:bg-black/20 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Fix: Use existing translation keys from constants.tsx */}
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.editions}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.editionsHeader}</h3>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              {t.editionsSub}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Fix: Map over erpTiers derived from PACKAGE_TIERS */}
          {erpTiers.map((tier, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div 
                className={`relative bg-white/70 dark:bg-zinc-900/70 rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2 backdrop-blur-md ${tier.isPopular ? 'border-2 border-primary-500 scale-105 z-10' : 'border border-gray-100 dark:border-zinc-800'}`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-primary-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {isArabic ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}

                <div className="p-8 rtl:text-right">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{tier.target}</p>
                  
                  <div className="mb-6">
                    {/* Fix: PackageTier doesn't have a specific price property, showing Custom Pricing as default */}
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{isArabic ? 'تسعير مخصص' : 'Custom Pricing'}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {/* Fix: Use modules property from PackageTier interface instead of features */}
                    {tier.modules.map((module, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mx-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{module}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    onClick={openModal}
                    className={`block w-full text-center py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                      tier.isPopular 
                        ? 'bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-xl hover:shadow-2xl hover:shadow-primary-600/50' 
                        : 'bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isArabic ? 'اطلب عرضاً مخصصاً' : 'Get a Custom Quote'}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
