'use client'


import React, { useState, useEffect } from 'react';
import { X, Shield, Lock, Eye, FileText } from 'lucide-react';
import { TRANSLATIONS } from '@/lib/constants';

interface PrivacyPolicyModalProps {
  isArabic: boolean;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isArabic }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), 10);
    };

    window.addEventListener('open-privacy-modal', handleOpen);
    return () => window.removeEventListener('open-privacy-modal', handleOpen);
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
                    <Shield className="w-6 h-6" />
                </div>
                <div className="rtl:text-right">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{isArabic ? 'آخر تحديث: ٢٠ مايو ٢٠٢٥' : 'Last Updated: May 20, 2025'}</p>
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
                      ? 'في NEXO 4 ERP، نحن نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك واستخدامها وحمايتها.'
                      : 'At NEXO 4 ERP, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information.'}
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-gray-100 dark:border-zinc-800">
                    <div className="flex items-start gap-4 rtl:flex-row-reverse">
                        <FileText className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{isArabic ? '١. المعلومات التي نجمعها' : '1. Information We Collect'}</h3>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li>{isArabic ? 'بيانات التعريف الشخصية: الاسم والبريد الإلكتروني وتفاصيل الشركة.' : 'Personal Identification Data: Name, email, and company details.'}</li>
                                <li>{isArabic ? 'البيانات الفنية: عنوان IP ونوع المتصفح وأنماط الاستخدام.' : 'Technical Data: IP address, browser type, and usage patterns.'}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-gray-100 dark:border-zinc-800">
                    <div className="flex items-start gap-4 rtl:flex-row-reverse">
                        <Lock className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{isArabic ? '٢. أمن البيانات' : '2. Data Security'}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {isArabic ? 'نحن نستخدم تشفير AES-256 للبيانات المخزنة وتشفير TLS 1.3 للبيانات المرسلة.' : 'We implement enterprise-grade security measures, including AES-256 encryption.'}
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

export default PrivacyPolicyModal;
