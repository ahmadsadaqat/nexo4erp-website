'use client'

import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { FEATURES, FEATURE_TABS, TRANSLATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

interface FeaturesProps {
  isArabic: boolean;
}

const Features: React.FC<FeaturesProps> = ({ isArabic }) => {
  const [activeTab, setActiveTab] = useState(FEATURE_TABS[0].id);
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-contact-modal'));
  };

  return (
    <section id="features" className="py-24 bg-white/60 dark:bg-black/60 backdrop-blur-sm border-t border-transparent dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.features}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.capabilitiesHeader}</h3>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              {t.capabilitiesSub}
            </p>
          </div>
        </ScrollReveal>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div 
                className="group h-full p-8 bg-gray-50/90 dark:bg-zinc-900/90 rounded-2xl border border-transparent hover:border-primary-100 dark:border-zinc-800 dark:hover:border-primary-900/50 hover:bg-white dark:hover:bg-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-md rtl:text-right"
              >
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature Deep Dive Tabs */}
        <ScrollReveal>
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-zinc-800">
              <div className="flex flex-col md:flex-row border-b border-gray-100 dark:border-zinc-800">
                  {FEATURE_TABS.map((tab) => (
                      <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 py-6 px-4 text-center text-sm md:text-base font-semibold transition-colors ${
                              activeTab === tab.id 
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 border-b-2 border-primary-500' 
                              : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-800'
                          }`}
                      >
                          {tab.label}
                      </button>
                  ))}
              </div>

              <div className="p-8 md:p-12 min-h-[500px]">
                  {FEATURE_TABS.map((tab) => (
                      activeTab === tab.id && (
                          <div key={tab.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up rtl:text-right">
                              <div>
                                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">{tab.title}</h4>
                                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                      {tab.description}
                                  </p>
                                  <ul className="space-y-4 mb-8">
                                      {tab.points.map((point, idx) => (
                                          <li key={idx} className="flex items-start">
                                              <div className="mt-1 mx-3 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                                  <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                                              </div>
                                              <span className="text-gray-700 dark:text-gray-300">{point}</span>
                                          </li>
                                      ))}
                                  </ul>
                                  <a 
                                    href="#" 
                                    onClick={openModal}
                                    className="inline-flex px-8 py-3 bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary-600/50 transition-all duration-300 transform hover:-translate-y-1 items-center gap-2 cursor-pointer"
                                  >
                                      {t.learnMore} <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                                  </a>
                              </div>
                              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                  <img 
                                      src={tab.image} 
                                      alt={tab.title} 
                                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                  />
                              </div>
                          </div>
                      )
                  ))}
              </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;