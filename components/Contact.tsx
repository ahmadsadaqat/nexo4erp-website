'use client'

import React, { useState } from 'react';
import { Mail, Phone, Send, Clock, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { TRANSLATIONS } from '@/lib/constants';
import { sendContactEmail } from '@/lib/email'; // Import the new service

interface ContactProps {
  isArabic: boolean;
}

const Contact: React.FC<ContactProps> = ({ isArabic }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use the EmailJS service instead of the old fetch/Formspree
      const result = await sendContactEmail(formState);

      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        // Success message stays for 8 seconds
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        alert(isArabic ? "عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى." : "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const rawPhoneNumber = "+923134859727";
  const whatsappLink = `https://wa.me/923134859727?text=${encodeURIComponent(isArabic ? 'مرحباً، أود الاستفسار عن حلول NEXO 4 ERP.' : 'Hello, I would like to inquire about NEXO 4 ERP solutions.')}`;

  return (
    <section id="contact" className="py-24 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <ScrollReveal>
            <div className="rtl:text-right">
              <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.contactHeader}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.contactSub}</h3>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-10">
                {t.contactDesc}
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:info@nexo4erp.com" 
                  className="flex items-center space-x-4 rtl:space-x-reverse p-5 bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all border border-transparent dark:border-zinc-800 backdrop-blur-md group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{t.emailUs}</p>
                    <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">info@nexo4erp.com</span>
                  </div>
                </a>
                
                <div className="p-5 bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-sm border border-transparent dark:border-zinc-800 backdrop-blur-md">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{t.callUs}</p>
                      <span className="text-lg font-bold text-gray-900 dark:text-white" dir="ltr">+92 313 485 9727</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href={`tel:${rawPhoneNumber}`}
                      className="flex items-center justify-center gap-2 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold text-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-600/20 active:scale-95"
                    >
                      <Phone size={16} /> {isArabic ? 'اتصل الآن' : 'Call Now'}
                    </a>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-600/20 active:scale-95"
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse p-5 bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-sm border border-transparent dark:border-zinc-800 backdrop-blur-md">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600">
                    <Clock className="h-6 w-6" />
                  </div>
                   <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{t.workingHours}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{isArabic ? 'الاثنين–الجمعة، 9:00–17:00' : 'Mon–Fri, 9:00–17:00'}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white/95 dark:bg-zinc-900/95 rounded-[2rem] shadow-xl p-10 border border-gray-100 dark:border-zinc-800 backdrop-blur-md rtl:text-right relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              {isSuccess ? (
                <div className="text-center animate-scale-in">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={40} className="animate-target-hit" />
                  </div>
                  <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                    {isArabic ? 'تم الإرسال بنجاح!' : 'Message Sent!'}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                    {isArabic 
                      ? 'شكراً لتواصلك معنا. لقد تم استلام استفسارك وسيقوم فريقنا بالرد عليك قريباً عبر البريد الإلكتروني.' 
                      : 'Thank you for reaching out. Your inquiry has been sent successfully and our team will get back to you shortly.'}
                  </p>
                </div>
              ) : (
                <>
                  <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">{t.scheduleDemo}</h4>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest transition-colors group-focus-within:text-primary-500">{t.fullName}</label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-zinc-800 transition-all outline-none"
                        placeholder={isArabic ? 'أدخل اسمك' : 'John Doe'}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest transition-colors group-focus-within:text-primary-500">{t.bizEmail}</label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-zinc-800 transition-all outline-none"
                        placeholder={isArabic ? 'البريد الإلكتروني للعمل' : 'john@company.com'}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="message" className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest transition-colors group-focus-within:text-primary-500">{t.message}</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-zinc-800 transition-all outline-none custom-scrollbar"
                        placeholder={isArabic ? 'أخبرنا عن احتياجات عملك...' : 'Tell us about your business needs...'}
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-5 bg-primary-600 hover:bg-primary-500 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl hover:shadow-primary-600/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed translate-y-0 shadow-none' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{isArabic ? 'جاري الإرسال...' : 'Sending...'}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.sendMessage}</span>
                          <Send className="w-4 h-4 rtl:rotate-180" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
