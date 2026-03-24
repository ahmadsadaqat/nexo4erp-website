'use client'

import React from 'react';
import { TRANSLATIONS } from '@/lib/constants';

const ClientLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center px-8 md:px-12 transition-all duration-300 transform cursor-pointer hover:scale-110 hover:z-30 relative shrink-0">
    <img 
      src={src} 
      alt={alt} 
      /* Removed contrast-0 and brightness-200 to restore original colors. 
         Added dark:brightness-110 to keep them vivid in dark mode. */
      className="h-16 md:h-20 w-auto object-contain max-w-[200px] drop-shadow-md transition-all duration-300 dark:brightness-110" 
    />
  </div>
);

interface TrustedClientsProps {
  isArabic?: boolean;
}

const TrustedClients: React.FC<TrustedClientsProps> = ({ isArabic = false }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  
  const logos = [
    { src: '/Vital.png', alt: 'Vital' },
    { src: '/Lal.png', alt: 'Lal Khan' },
    { src: '/United.png', alt: 'United' },
    { src: '/saheeb.png', alt: 'Saheeb Trading' },
  ];

  // Compliance Data
  const complianceLogos = [
    { 
      alt: 'PSEB', 
      label: isArabic ? 'شركة تكنولوجيا معلومات مسجلة' : 'Registered IT Company',
      link: '#' 
    },
    { 
      src: '/FBR.png', 
      alt: 'FBR', 
      label: isArabic ? 'فواتير إلكترونية معتمدة' : 'Authorized E-Invoicing',
      link: '#' 
    }
  ];

  return (
    <section className="py-16 bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-gray-200/50 dark:border-zinc-800/50 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
         <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            {t.trustedClientsHeader}
         </p>
      </div>

      {/* Optimized Marquee */}
      <div className="relative flex overflow-x-hidden group">
          {/* Gradient Overlays - Adjusted to match background better */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-gray-50 dark:from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-gray-50 dark:from-black to-transparent z-10"></div>

          {/* Animating Track - duplicated for seamless loop */}
          <div className="flex animate-scroll-right whitespace-nowrap py-8 hover:[animation-play-state:paused]">
            {/* Using a larger multiplier to ensure the track is long enough for the slow 80s scroll */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center">
                {logos.map((logo, index) => (
                  <ClientLogo key={`${i}-${index}`} src={logo.src} alt={logo.alt} />
                ))}
              </div>
            ))}
          </div>
      </div>

      {/* Compliance Row */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="pt-12 border-t border-gray-200/30 dark:border-zinc-800/50 flex flex-wrap justify-center gap-16 md:gap-32">
          {complianceLogos.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group transition-all duration-500"
            >
              <div className="relative">
                {item.alt === 'PSEB' ? (
                  <>
                    <img src="/PSEB.png" alt="PSEB" className="h-20 md:h-28 w-auto block dark:hidden group-hover:scale-110 transition-transform drop-shadow-lg" />
                    <img src="/White-PSEB.png" alt="PSEB" className="h-20 md:h-28 w-auto hidden dark:block group-hover:scale-110 transition-transform drop-shadow-lg" />
                  </>
                ) : (
                  <img src={item.src} alt={item.alt} className="h-20 md:h-28 w-auto block group-hover:scale-110 transition-transform drop-shadow-lg" />
                )}
              </div>
              <span className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-gray-600 dark:text-gray-300 group-hover:text-primary-500 transition-colors text-center">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
