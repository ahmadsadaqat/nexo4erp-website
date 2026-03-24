'use client'

import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/types';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 transform transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col max-h-[90vh] ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
      >
        <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={onClose}
            className="p-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full hover:bg-white dark:hover:bg-zinc-800 transition-colors duration-300 text-gray-900 dark:text-white focus:outline-none shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {post && (
          <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
            {/* Header Image */}
            <div className="relative h-64 md:h-80 shrink-0">
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 shadow-lg">
                    {post.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight shadow-black/50 drop-shadow-md">
                    {post.title}
                  </h2>
               </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-10">
               {/* Meta Data */}
               <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8 pb-8 border-b border-gray-100 dark:border-zinc-800">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-primary-600" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary-600" />
                    {post.readTime}
                  </div>
               </div>

               {/* Text */}
               <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-lg">
                      {paragraph}
                    </p>
                  ))}
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogModal;