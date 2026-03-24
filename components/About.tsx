'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, CheckCircle2, Layers, Zap, Settings, Globe, HeartHandshake, ArrowUpRight, TrendingUp, Users, Cloud, Rocket } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { TRANSLATIONS } from '@/lib/constants';

interface AboutProps {
  isArabic: boolean;
}

const About: React.FC<AboutProps> = ({ isArabic }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-contact-modal'));
  };

  return (
    <section id="about" className="py-24 bg-white/60 dark:bg-black/60 backdrop-blur-sm overflow-hidden border-t border-transparent dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.about}</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">{t.aboutHeader}</h3>
             <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed text-left md:text-center rtl:text-right md:rtl:text-center">
               <p>
                 {isArabic 
                   ? 'في NEXO 4 ERP، نؤمن بأن التكنولوجيا يجب أن تمكن الشركات لا أن تعقدها. تأسست NEXO 4 ERP برؤية تتمثل في إنشاء منصة ERP متكاملة وسهلة الاستخدام حقًا، وهي تساعد المؤسسات على تحقيق فوضى صفرية - تحكم أقصى في عملياتها.'
                   : 'At NEXO 4 ERP, we believe that technology should empower businesses, not complicate them. Founded with the vision of creating a truly integrated and user-friendly ERP platform, NEXO 4 ERP helps organizations gain Zero Chaos – Maximum Control over their operations.'
                 }
               </p>
               <p>
                 {isArabic
                   ? 'تجمع منصتنا بين الأتمتة القوية والتحليلات في الوقت الفعلي والتكامل السلس للوحدات لتبسيط وظائف عملك الأساسية - من التمويل والمخزون إلى المبيعات والمشتريات وما بعدها.'
                   : 'Our platform combines powerful automation, real-time analytics, and seamless module integration to streamline your core business functions — from finance and inventory to sales, procurement, and beyond.'
                 }
               </p>
               <p>
                 {isArabic
                   ? 'نحن مدفوعون بأربع قيم أساسية — الكفاءة والشفافية وقابلية التوسع والابتكار — ممثلة في اسمنا وأشرطة التوقيع الأربعة الخاصة بنا. تشكل هذه القيم كل ميزة نبنيها وكل علاقة عميل نحافظ عليها.'
                   : 'We are driven by four core values — Efficiency, Transparency, Scalability, and Innovation — represented in our name and our four signature bars. These values shape every feature we build and every client relationship we maintain.'
                 }
               </p>
             </div>
          </div>
        </ScrollReveal>

        {/* At a Glance */}
        <ScrollReveal delay={200}>
          <div className="mb-20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{isArabic ? 'لمحة سريعة' : 'At a Glance'}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                  {(isArabic ? ['وحدات متكاملة', 'لوحات معلومات لحظية', 'قابلية توسع معيارية', 'دعم التنفيذ', 'آمن ومتوافق', 'بنية سحابية جاهزة'] : ['Integrated modules', 'Real-time dashboards', 'Modular scalability', 'Implementation support', 'Secure & compliant', 'Cloud-ready architecture']).map((item, i) => (
                      <div key={i} className="flex items-center px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full border border-gray-200 dark:border-zinc-700">
                          <CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 mx-2" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                  ))}
              </div>
          </div>
        </ScrollReveal>

        {/* Our Journey Timeline */}
        <div ref={sectionRef} className="mb-24 relative">
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-zinc-800 hidden md:block"></div>
             
             <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500 via-primary-500 to-emerald-500 hidden md:block transition-all ease-linear"
                style={{ 
                    height: isVisible ? '100%' : '0%', 
                    transitionDuration: '2500ms'
                }}
             ></div>
             
             <ScrollReveal>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center relative z-10 bg-gray-50 dark:bg-black inline-block px-4 mx-auto block">{isArabic ? 'رحلتنا' : 'Our Journey'}</h4>
             </ScrollReveal>
             
             <div className="space-y-12">
                 {/* Sep 2025: Inception */}
                 <div className={`flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <div className="flex-1 md:text-right order-2 md:order-1 rtl:text-left md:rtl:text-right">
                         <h5 className="text-xl font-bold text-gray-900 dark:text-white">{isArabic ? 'سبتمبر 2025: البداية' : 'Sep 2025: Inception'}</h5>
                         <p className="text-gray-600 dark:text-gray-400 mt-2">{isArabic ? 'اجتمع أربعة من الرؤى بهدف مشترك: إعادة تعريف حلول ERP بالبساطة والقوة والقدرة على التكيف.' : 'Four visionaries came together with a shared goal: to redefine ERP solutions with simplicity, power, and adaptability.'}</p>
                     </div>
                     <div className={`w-14 h-14 bg-amber-100 dark:bg-amber-900/20 rounded-full border-4 border-white dark:border-zinc-900 flex items-center justify-center text-amber-600 dark:text-amber-500 shrink-0 order-1 md:order-2 shadow-lg shadow-amber-500/10 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}>
                         <Users className="w-6 h-6" />
                     </div>
                     <div className="flex-1 order-3 md:order-3"></div>
                 </div>
                 {/* Oct 2025: The Pivot */}
                 <div className={`flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <div className="flex-1 order-3 md:order-1"></div>
                     <div className={`w-14 h-14 bg-blue-100 dark:bg-blue-900/20 rounded-full border-4 border-white dark:border-zinc-900 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 order-1 md:order-2 shadow-lg shadow-blue-500/10 transition-transform duration-500 delay-500 ${isVisible ? 'scale-100' : 'scale-0'}`}>
                         <Cloud className="w-6 h-6" />
                     </div>
                     <div className="flex-1 order-2 md:order-3 rtl:text-right md:rtl:text-left">
                         <h5 className="text-xl font-bold text-gray-900 dark:text-white">{isArabic ? 'أكتوبر 2025: التحول' : 'Oct 2025: The Pivot'}</h5>
                         <p className="text-gray-600 dark:text-gray-400 mt-2">{isArabic ? 'الانتقال إلى نموذج SaaS ، وإطلاق منصة NEXO 4 ERP السحابية الأساسية ، وجلب ERP للشركات في أي مكان وفي أي وقت.' : 'Transitioned to a SaaS model, launching the core NEXO 4 ERP cloud platform, bringing ERP to businesses anywhere, anytime.'}</p>
                     </div>
                 </div>
                  {/* Nov 2025: Full-Suite Launch */}
                 <div className={`flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <div className="flex-1 md:text-right order-2 md:order-1 rtl:text-left md:rtl:text-right">
                         <h5 className="text-xl font-bold text-gray-900 dark:text-white">{isArabic ? 'نوفمبر 2025: إطلاق المجموعة الكاملة' : 'Nov 2025: Full-Suite Launch'}</h5>
                         <p className="text-gray-600 dark:text-gray-400 mt-2">{isArabic ? 'تم تقديم وحدات ERP كاملة ، جنباً إلى جنب مع تطبيقات الجوال وتكاملات واجهة برمجة التطبيقات لاتصال عمل سلس.' : 'Introduced complete ERP modules, along with mobile apps and API integrations for seamless business connectivity.'}</p>
                     </div>
                     <div className={`w-14 h-14 bg-purple-100 dark:bg-purple-900/20 rounded-full border-4 border-white dark:border-zinc-900 flex items-center justify-center text-purple-600 dark:text-purple-500 shrink-0 order-1 md:order-2 shadow-lg shadow-purple-500/10 transition-transform duration-500 delay-1000 ${isVisible ? 'scale-100' : 'scale-0'}`}>
                         <Rocket className="w-6 h-6" />
                     </div>
                     <div className="flex-1 order-3 md:order-3"></div>
                 </div>
                 {/* Dec 2025: Empowering Businesses */}
                 <div className={`flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 transition-all duration-700 delay-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <div className="flex-1 order-3 md:order-1"></div>
                     <div className={`w-14 h-14 bg-emerald-100 dark:bg-emerald-900/20 rounded-full border-4 border-white dark:border-zinc-900 flex items-center justify-center text-emerald-600 dark:text-emerald-500 shrink-0 order-1 md:order-2 shadow-lg shadow-emerald-500/10 transition-transform duration-500 delay-[1500ms] ${isVisible ? 'scale-100' : 'scale-0'}`}>
                         <TrendingUp className="w-6 h-6" />
                     </div>
                     <div className="flex-1 order-2 md:order-3 rtl:text-right md:rtl:text-left">
                         <h5 className="text-xl font-bold text-gray-900 dark:text-white">{isArabic ? 'ديسمبر 2025: تمكين الشركات' : 'Dec 2025: Empowering Businesses'}</h5>
                         <p className="text-gray-600 dark:text-gray-400 mt-2">{isArabic ? 'بدء دمج العملاء مع سير عمل مخصص ، مما يعزز الكفاءة والدقة عبر العمليات.' : 'Started onboarding clients with customized workflows, boosting efficiency and accuracy across operations.'}</p>
                     </div>
                 </div>
             </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <ScrollReveal delay={100}>
            <div className="h-full bg-white/50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 backdrop-blur-sm hover:border-primary-200 dark:hover:border-primary-900/30 transition-colors group rtl:text-right">
               <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                  <Target className={`w-6 h-6 ${isVisible ? 'animate-target-hit' : 'opacity-0'}`} />
               </div>
               <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{isArabic ? 'مهمتنا' : 'Our Mission'}</h4>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                 {isArabic 
                   ? 'تمكين الشركات من خلال حلول ERP بديهية وموثوقة وقابلة للتوسع توفر نتائج قابلة للقياس وتعزز النمو على المدى الطويل.'
                   : 'To empower businesses with intuitive, reliable, and scalable ERP solutions that deliver measurable results and foster long-term growth.'
                 }
               </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="h-full bg-white/50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 backdrop-blur-sm hover:border-primary-200 dark:hover:border-primary-900/30 transition-colors rtl:text-right">
               <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                  <Lightbulb className={`w-6 h-6 ${isVisible ? 'animate-bulb-on' : 'opacity-0'}`} />
               </div>
               <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{isArabic ? 'رؤيتنا' : 'Our Vision'}</h4>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                 {isArabic
                   ? 'أن نكون حل ERP الأكثر ثقة في المنطقة ، والمعروف بتبسيط التعقيد وتمكين المؤسسات من الازدهار في العصر الرقمي.'
                   : 'To be the most trusted ERP solution in the region, known for simplifying complexity and enabling organizations to thrive in the digital era.'
                 }
               </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Why Choose Nexo4 */}
        <div className="mb-20">
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">{isArabic ? 'لماذا تختار NEXO 4 ERP؟' : 'Why Choose NEXO 4 ERP?'}</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { 
                        title: isArabic ? "حل شامل" : "All-in-One Solution", 
                        desc: isArabic ? "التمويل والمبيعات والمشتريات والمخزون والموارد البشرية والمزيد في منصة واحدة." : "Finance, Sales, Procurement, Inventory, HR, and more in one platform.", 
                        icon: Layers,
                        color: "text-blue-600 dark:text-blue-400",
                        bg: "bg-blue-100 dark:bg-blue-900/20"
                    },
                    { 
                        title: isArabic ? "رؤى لحظية" : "Real-Time Insights", 
                        desc: isArabic ? "اتخاذ قرارات مدعومة بالبيانات مع تقارير فورية." : "Data-driven decision-making with instant reporting.", 
                        icon: Zap,
                        color: "text-amber-500 dark:text-amber-400",
                        bg: "bg-amber-100 dark:bg-amber-900/20"
                    },
                    { 
                        title: isArabic ? "سير عمل قابل للتخصيص" : "Customizable Workflows", 
                        desc: isArabic ? "مصمم ليناسب احتياجاتك التشغيلية المحددة." : "Tailored to fit your specific operational needs.", 
                        icon: Settings,
                        color: "text-cyan-600 dark:text-cyan-400",
                        bg: "bg-cyan-100 dark:bg-cyan-900/20"
                    },
                    { 
                        title: isArabic ? "خبرة محلية، معايير عالمية" : "Local Expertise, Global Standards", 
                        desc: isArabic ? "فهم سوقك مع تقديم أداء عالمي المستوى." : "Understanding your market while delivering world-class performance.", 
                        icon: Globe,
                        color: "text-emerald-600 dark:text-emerald-400",
                        bg: "bg-emerald-100 dark:bg-emerald-900/20"
                    },
                    { 
                        title: isArabic ? "دعم مخصص" : "Dedicated Support", 
                        desc: isArabic ? "من الإعداد إلى العمليات اليومية ، نحن معك في كل خطوة." : "From onboarding to daily operations, we’re with you every step.", 
                        icon: HeartHandshake,
                        color: "text-rose-600 dark:text-rose-400",
                        bg: "bg-rose-100 dark:bg-rose-900/20"
                    },
                    { 
                        title: isArabic ? "بنية قابلة للتوسع" : "Scalable Architecture", 
                        desc: isArabic ? "تنمو بثقة مع التوسع المعياري والتصميم الجاهز للأداء." : "Grow confidently with modular expansion and performance-ready design.", 
                        icon: ArrowUpRight,
                        color: "text-violet-600 dark:text-violet-400",
                        bg: "bg-violet-100 dark:bg-violet-900/20"
                    },
                ].map((item, index) => (
                    <ScrollReveal key={index} delay={index * 50}>
                      <div className="flex flex-col items-start p-6 rounded-xl bg-gray-50/50 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-zinc-700 h-full group cursor-default rtl:text-right rtl:items-end">
                          <div className={`p-3 rounded-xl mb-4 transition-transform group-hover:scale-110 duration-300 ${item.bg}`}>
                            <item.icon className={`w-8 h-8 ${item.color}`} />
                          </div>
                          <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>

        {/* Closing CTA */}
        <ScrollReveal>
          <div className="text-center bg-primary-600 dark:bg-primary-900/20 rounded-3xl p-10 md:p-16 relative overflow-hidden">
               {/* Decorative Background */}
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">{isArabic ? 'بني من أجل الوضوح، صمم من أجل النمو.' : 'Built for clarity, designed for growth.'}</h3>
               <p className="text-primary-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
                  {isArabic 
                    ? 'سواء كنت تستبدل جداول البيانات أو تقوم بالترقية من الأنظمة القديمة ، فإن NEXO 4 ERP يمنحك التحكم والوضوح وقابلية التوسع التي تحتاجها للعمل بثقة.'
                    : 'Whether you are replacing spreadsheets or upgrading from outdated systems, NEXO 4 ERP gives you the control, visibility, and scalability you need to operate with confidence.'
                  }
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                   <a 
                    href="#" 
                    onClick={openModal}
                    className="px-8 py-3 bg-white text-primary-700 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 cursor-pointer"
                   >
                       {isArabic ? 'تحدث إلى خبير' : 'Talk to an Expert'}
                   </a>
                   <a 
                    href="#features" 
                    onClick={(e) => handleScroll(e, '#features')}
                    className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                   >
                       {isArabic ? 'استكشف المميزات' : 'Explore Features'}
                   </a>
               </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;