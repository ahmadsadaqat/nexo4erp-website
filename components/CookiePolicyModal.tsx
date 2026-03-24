'use client'


import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings, BarChart, Info } from 'lucide-react';
import { TRANSLATIONS } from '@/lib/constants';

interface CookiePolicyModalProps {
  isArabic: boolean;
}

const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ isArabic }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), 10);
    };

    window.addEventListener('open-cookie-modal', handleOpen);
    return () => window.removeEventListener('open-cookie-modal', handleOpen);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }, 400); 
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>

      <div className={`relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 transform transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col max-h-[90vh] ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-3 rtl:flex-row-reverse">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                    <Cookie className="w-6 h-6" />
                </div>
                <div className="rtl:text-right">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{isArabic ? 'سياسة ملفات الارتباط' : 'Cookie Policy'}</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{isArabic ? 'تاريخ السريان: ٢٠ مايو ٢٠٢٥' : 'Effective Date: May 20, 2025'}</p>
                </div>
            </div>
            <button onClick={handleClose} className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors duration-300 text-gray-500 dark:text-gray-300">
                <X className="w-5 h-5" />
            </button>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar space-y-8 rtl:text-right">
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                    {isArabic 
                      ? 'توضح سياسة ملفات الارتباط هذه كيفية استخدامنا لملفات الارتباط والتقنيات المماثلة للتعرف عليك عند زيارة موقعنا.'
                      : 'This Cookie Policy explains how NEXO 4 ERP uses cookies and similar technologies to recognize you when you visit our website.'}
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-gray-100 dark:border-zinc-800">
                    <div className="flex items-start gap-4 rtl:flex-row-reverse">
                        <Settings className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{isArabic ? '١. ملفات الارتباط الضرورية' : '1. Essential Cookies'}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {isArabic ? 'هذه الملفات ضرورية لتمكينك من التنقل في الموقع واستخدام ميزاته.' : 'These cookies are strictly necessary to provide you with services available through our website.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-6 border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex justify-end">
            <button onClick={handleClose} className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:opacity-90">
                {t.understood}
            </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
