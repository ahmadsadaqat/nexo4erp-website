'use client'

import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Share2, Tag, ChevronRight, Check } from 'lucide-react';
import { TRANSLATIONS } from '@/lib/constants';
import { BlogPost } from '@/lib/types';
import ScrollReveal from '@/components/ScrollReveal';

interface BlogPageProps {
  isArabic: boolean;
  blogs: BlogPost[];
  selectedPost: BlogPost | null;
  onPostSelect: (post: BlogPost) => void;
  onBack: () => void;
  onGoToBlogList: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ isArabic, blogs, selectedPost, onPostSelect, onBack, onGoToBlogList }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 600, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScrollProgress(0);
  }, [selectedPost]);

  const handleShare = async () => {
    // Construct a URL with a query parameter so the SPA knows which blog to load
    const shareUrl = `${window.location.origin}/?blogId=${selectedPost?.id}`;
    
    const shareData = {
      title: selectedPost?.title || 'NEXO 4 ERP Insights',
      text: selectedPost?.excerpt || 'Check out this article from NEXO 4 ERP',
      url: shareUrl,
    };

    try {
      if (navigator.share && typeof navigator.share === 'function') {
        await navigator.share(shareData);
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (err) {
      try {
        // Fallback for desktop/unsupported browsers: Copy specific link to clipboard
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (clipboardErr) {
        console.error('Clipboard copy failed:', clipboardErr);
      }
    }
  };

  const categories = ['All', ...new Set(blogs.map(p => p.category))];
  const filteredPosts = filter === 'All' ? blogs : blogs.filter(p => p.category === filter);

  if (selectedPost) {
    const pushOutAmount = scrollProgress * 15;

    return (
      <div className="bg-transparent min-h-screen pt-[80px] md:pt-[96px] relative overflow-x-hidden">
        <div className="sticky top-[80px] md:top-[90px] z-[45] h-0 pointer-events-none w-full">
            <div className="w-full relative px-4 md:px-12 flex justify-between">
                <div 
                  className="pointer-events-auto transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${pushOutAmount}vw)` }}
                >
                    <button 
                        onClick={onGoToBlogList}
                        className="flex items-center gap-2 px-5 py-3 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-100 dark:border-zinc-800 rounded-full shadow-xl hover:shadow-primary-500/20 text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-all group"
                    >
                        <ArrowLeft className="w-4 h-4 rtl:rotate-180 transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{isArabic ? 'العودة' : 'Back to Insights'}</span>
                    </button>
                </div>

                <div 
                  className="pointer-events-auto transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(${pushOutAmount}vw)` }}
                >
                    <button 
                        onClick={handleShare}
                        className="flex items-center gap-2 px-5 py-3 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-100 dark:border-zinc-800 rounded-full shadow-xl hover:shadow-primary-500/20 text-gray-700 dark:text-gray-200 hover:text-primary-600 transition-all group"
                    >
                        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{isArabic ? 'مشاركة' : 'Share'}</span>
                    </button>
                </div>
            </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12 md:py-16 relative bg-white/50 dark:bg-black/40 backdrop-blur-sm rounded-3xl my-8 border border-white/10">
            <ScrollReveal>
                <div className="text-center mb-10 pt-16">
                    <span className="inline-block px-4 py-1.5 bg-primary-50/80 dark:bg-primary-900/30 backdrop-blur-md text-primary-700 dark:text-primary-300 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-8 border border-primary-500/10">
                        {selectedPost.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-10 tracking-tight">
                        {selectedPost.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center text-white font-black text-xs uppercase shadow-lg shadow-primary-600/20">
                                {selectedPost.author.charAt(0)}
                            </div>
                            <span className="text-gray-900 dark:text-white uppercase tracking-wider">{selectedPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2 uppercase tracking-widest">
                            <Calendar className="w-4 h-4 text-primary-500" />
                            {selectedPost.date}
                        </div>
                        <div className="flex items-center gap-2 uppercase tracking-widest">
                            <Clock className="w-4 h-4 text-primary-500" />
                            {selectedPost.readTime}
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
                <div className="aspect-[21/10] rounded-[2rem] overflow-hidden shadow-2xl mb-16 border border-gray-100 dark:border-zinc-800/50 mt-12">
                    <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-[1.8] rtl:text-right font-sans">
                    {selectedPost.content.split('\n\n').map((para, i) => (
                        <p key={i} className="mb-8">{para}</p>
                    ))}
                </div>
            </ScrollReveal>
        </article>

        <section className="bg-gray-50/40 dark:bg-zinc-950/40 backdrop-blur-md py-24 border-t border-gray-100 dark:border-zinc-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-[0.3em] mb-4">{isArabic ? 'مقالات ذات صلة' : 'More to explore'}</h3>
                    <h4 className="text-3xl font-extrabold text-gray-900 dark:text-white">{isArabic ? 'مقالات ذات صلة' : 'Related Insights'}</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.filter(p => p.id !== selectedPost.id).slice(0, 3).map((post) => (
                        <div key={post.id} onClick={() => onPostSelect(post)} className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all cursor-pointer group border border-transparent hover:border-primary-500/20">
                            <span className="text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-4 block">{post.category}</span>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors mb-6 leading-tight">{post.title}</h4>
                            <div className="flex items-center gap-6 text-[10px] text-gray-400 font-black uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Calendar size={12} className="text-primary-500"/> {post.date}</span>
                                <span className="flex items-center gap-2"><Clock size={12} className="text-primary-500"/> {post.readTime}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen pt-[80px] md:pt-[96px]">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-gray-100 dark:border-zinc-900 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <button onClick={onBack} className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-primary-600 transition-colors mb-8 uppercase tracking-[0.3em]">
                <ArrowLeft className="w-3 h-3 rtl:rotate-180" /> {t.backHome}
            </button>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 leading-none tracking-tighter">{isArabic ? 'رؤى نكسو' : 'NEXO Insights'}</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{isArabic ? 'مقالات متعمقة حول تكنولوجيا ERP.' : 'In-depth articles on ERP technology, digital transformation, and the future of intelligent business.'}</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-24 bg-gray-50/20 dark:bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                  {categories.map(cat => (
                      <button key={cat} onClick={() => setFilter(cat)} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border backdrop-blur-md ${filter === cat ? 'bg-primary-600/90 border-primary-600 text-white shadow-xl shadow-primary-600/20' : 'bg-white/60 dark:bg-zinc-900/60 border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:border-primary-500'}`}>{cat}</button>
                  ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {filteredPosts.map((post, i) => (
                      <ScrollReveal key={post.id} delay={i * 100}>
                          <div className="group flex flex-col h-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-zinc-800/50 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-700 cursor-pointer rtl:text-right" onClick={() => onPostSelect(post)}>
                            <div className="relative h-64 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                                <div className="absolute top-6 left-6"><span className="px-4 py-2 bg-white/95 backdrop-blur-md text-primary-700 text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl border border-primary-500/10">{post.category}</span></div>
                            </div>
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
                                    <span className="flex items-center gap-2"><Calendar size={14} className="text-primary-500"/> {post.date}</span>
                                    <span className="flex items-center gap-2"><Clock size={14} className="text-primary-500"/> {post.readTime}</span>
                                </div>
                                <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 leading-[1.2] group-hover:text-primary-600 transition-colors">{post.title}</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-10 flex-grow line-clamp-3">{post.excerpt}</p>
                                <div className="flex items-center gap-3 text-primary-600 font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">{isArabic ? 'اقرأ المزيد' : 'Read Article'} <ArrowRight className="w-4 h-4 rtl:rotate-180" /></div>
                            </div>
                          </div>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default BlogPage;
