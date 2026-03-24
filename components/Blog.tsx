'use client'


import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { TRANSLATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';
import { BlogPost } from '@/lib/types';

interface BlogProps {
  isArabic: boolean;
  blogs: BlogPost[];
  onReadMore: (post: BlogPost) => void;
  onSeeAll: () => void;
}

const Blog: React.FC<BlogProps> = ({ isArabic, blogs, onReadMore, onSeeAll }) => {
  const t = isArabic ? TRANSLATIONS.ar : TRANSLATIONS.en;
  
  // Show only top 3 on home page
  const featuredPosts = blogs.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm border-t border-transparent dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">{t.blogHeader}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.blogSub}</h3>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              {t.blogDesc}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <div 
                className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-900/10 dark:hover:shadow-primary-900/20 border border-gray-100 dark:border-zinc-800 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer rtl:text-right"
                onClick={() => onReadMore(post)}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                     <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm text-primary-700 dark:text-primary-400 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                       {post.category}
                     </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                   <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-3 rtl:space-x-reverse">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mx-1" />
                        {post.date}
                      </div>
                      <div className="w-1 h-1 bg-gray-300 dark:bg-zinc-700 rounded-full"></div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mx-1" />
                        {post.readTime}
                      </div>
                   </div>

                   <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                     {post.title}
                   </h4>

                   <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                     {post.excerpt}
                   </p>

                   <div className="mt-auto pt-4 border-t border-gray-50 dark:border-zinc-800 flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                     {isArabic ? 'اقرأ المقال' : 'Read Article'} <ArrowRight className="w-4 h-4 mx-2 rtl:rotate-180" />
                   </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
            <button 
                onClick={onSeeAll}
                className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-1"
            >
                {isArabic ? 'عرض جميع المقالات' : 'View All Insights'} <ArrowRight className="mx-2 w-4 h-4 rtl:rotate-180" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
