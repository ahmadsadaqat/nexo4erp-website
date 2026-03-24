'use client'

import React, { useState, useEffect } from 'react';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '@/lib/constants';
import { sendContactEmail } from '@/lib/email'; // Import your EmailJS service

interface ContactModalProps {
  isArabic: boolean;
}

const ContactModal: React.FC<ContactModalProps> = ({ isArabic }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const handleOpen = (e: any) => {
      const subject = e.detail?.subject || (isArabic ? 'استفسار عام' : 'General Inquiry');
      setFormState(prev => ({ ...prev, subject }));
      setIsOpen(true);
      setIsSuccess(false);
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), 10);
    };

    window.addEventListener('open-contact-modal', handleOpen as EventListener);
    return () => window.removeEventListener('open-contact-modal', handleOpen as EventListener);
  }, [isArabic]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }, 400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Calling the EmailJS service instead of Formspree
      const result = await sendContactEmail({
        name: formState.name,
        email: formState.email,
        // Combining subject and message so both appear in your email body
        message: `Subject: ${formState.subject}\n\nMessage: ${formState.message}`
      });

      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          handleClose();
        }, 3500);
      } else {
        throw new Error("EmailJS failed to send");
      }
    } catch (error) {
      console.error('Submission error', error);
      alert(isArabic ? 'عذراً، حدث خطأ ما' : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose}></div>

      <div className={`relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10 transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}>
        
        <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-10">
          <button onClick={handleClose} className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 md:p-12 rtl:text-right">
          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 dark:text-emerald-400 shadow-lg">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
                {isArabic ? 'تم الإرسال!' : 'Message Sent'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {isArabic 
                  ? 'سيتواصل معك فريقنا في أقرب وقت ممكن.' 
                  : 'Our team will contact you shortly.'}
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter">{t.modalConnect}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg font-medium">{t.modalSub}</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">{t.fullName}</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      placeholder={isArabic ? 'الاسم' : "John Doe"}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">{t.bizEmail}</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">{t.modalSubject}</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all font-bold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-400 mb-2 tracking-widest">{t.message}</label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      placeholder={isArabic ? 'كيف يمكننا مساعدتك؟' : "How can we help?"}
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 bg-primary-600 hover:bg-primary-500 text-white font-black text-base uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-primary-600/40 hover:shadow-primary-600/60 transition-all transform hover:-translate-y-1.5 flex items-center justify-center gap-4 mt-6 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>{isArabic ? 'جاري الإرسال' : 'SENDING'}</span>
                    </>
                  ) : (
                    <>
                      <span>{isArabic ? 'إرسال الطلب' : 'SUBMIT REQUEST'}</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:rotate-180" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
