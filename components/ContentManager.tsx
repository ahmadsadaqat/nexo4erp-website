'use client'

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Plus, Trash2, Edit2, Loader2, Upload, X, Save, Star, Tag } from 'lucide-react';
import { BlogPost, Testimonial } from '@/lib/types';
import { supabase } from '@/lib/supabase';

// HELPER: Compresses images to prevent 504 Gateway Timeouts
const compressImage = (base64Str: string): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800; 
      const scaleSize = MAX_WIDTH / img.width;
      canvas.width = MAX_WIDTH;
      canvas.height = img.height * scaleSize;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.7)); 
    };
  });
};

interface ContentManagerProps {
  isArabic: boolean;
  blogs: BlogPost[];
  setBlogs: (blogs: BlogPost[]) => void;
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  onBack: () => void;
}

const ContentManager: React.FC<ContentManagerProps> = ({ isArabic, blogs, setBlogs, testimonials, setTestimonials, onBack }) => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'testimonials'>('blogs');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const blogInputRef = useRef<HTMLInputElement>(null);
  const testimonialInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data: blogData } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
      if (blogData) setBlogs(blogData);
      const { data: testimonialData } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
      if (testimonialData) setTestimonials(testimonialData);
      setIsLoading(false);
    };
    fetchData();
  }, [setBlogs, setTestimonials]);

  const [newBlog, setNewBlog] = useState({
    title: '', author: 'Admin', category: 'Technical',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    content: ''
  });

  const [newTestimonial, setNewTestimonial] = useState({
    name: '', role: '', quote: '', rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=128'
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'blog' | 'testimonial') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const compressed = await compressImage(base64String);
        type === 'blog' 
          ? setNewBlog(prev => ({ ...prev, image: compressed })) 
          : setNewTestimonial(prev => ({ ...prev, image: compressed }));
      };
      reader.readAsDataURL(file);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewBlog({ title: '', author: 'Admin', category: 'Technical', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000', content: '' });
    setNewTestimonial({ name: '', role: '', quote: '', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=128' });
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const blogData = { 
        title: newBlog.title,
        author: newBlog.author || 'Admin',
        category: newBlog.category,
        content: newBlog.content,
        image: newBlog.image,
        excerpt: newBlog.content.slice(0, 150) + '...' 
    };

    if (editingId) {
      const { error } = await supabase.from('blogs').update(blogData).eq('id', editingId);
      if (error) alert("Update Failed: " + error.message);
      else {
        setBlogs(blogs.map(b => b.id === editingId ? { ...b, ...blogData } : b));
        cancelEdit();
      }
    } else {
      const { data, error } = await supabase.from('blogs').insert([{ ...blogData, date: new Date().toLocaleDateString() }]).select();
      if (error) alert("Insert Failed: " + error.message);
      else if (data) {
        setBlogs([data[0], ...blogs]);
        cancelEdit();
      }
    }
    setIsSaving(false);
  };

  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const testimonialData = {
        name: newTestimonial.name,
        role: newTestimonial.role,
        quote: newTestimonial.quote,
        rating: newTestimonial.rating,
        image: newTestimonial.image
    };

    if (editingId) {
      const { error } = await supabase.from('testimonials').update(testimonialData).eq('id', editingId);
      if (error) alert("Update Failed: " + error.message);
      else {
        setTestimonials(testimonials.map(t => t.id === editingId ? { ...t, ...testimonialData } : t));
        cancelEdit();
      }
    } else {
      const { data, error } = await supabase.from('testimonials').insert([testimonialData]).select();
      if (error) alert("Add Review Failed: " + error.message);
      else if (data) {
        setTestimonials([data[0], ...testimonials]);
        cancelEdit();
      }
    }
    setIsSaving(false);
  };

  const handleDelete = async (id: string, table: 'blogs' | 'testimonials') => {
    if (!confirm(isArabic ? 'هل أنت متأكد من الحذف؟' : 'Are you sure you want to delete this?')) return;
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) alert("Delete Failed: " + error.message);
    else {
      table === 'blogs' ? setBlogs(blogs.filter(b => b.id !== id)) : setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const handleEditClick = (item: any, type: 'blog' | 'testimonial') => {
    setEditingId(item.id);
    if (type === 'blog') {
      setActiveTab('blogs');
      setNewBlog({ title: item.title, author: item.author, category: item.category, image: item.image, content: item.content });
    } else {
      setActiveTab('testimonials');
      setNewTestimonial({ name: item.name, role: item.role, quote: item.quote, rating: item.rating || 5, image: item.image });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputClass = "w-full bg-white border border-zinc-200 rounded-xl p-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-primary-500 outline-none transition-all shadow-inner";

  return (
    <div className="bg-transparent min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <button onClick={onBack} className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:text-primary-600">
            <ArrowLeft size={14} /> {isArabic ? 'العودة' : 'Back'}
          </button>
          <div className="flex bg-white/10 p-1 rounded-2xl backdrop-blur-md border border-white/5">
            <button onClick={() => {setActiveTab('blogs'); cancelEdit();}} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'blogs' ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Blogs</button>
            <button onClick={() => {setActiveTab('testimonials'); cancelEdit();}} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'testimonials' ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>Testimonials</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-zinc-100 sticky top-32">
              <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-900 mb-6">
                {editingId ? (isArabic ? 'تعديل' : 'Edit Mode') : (isArabic ? 'إضافة جديد' : 'Add New')}
              </h3>

              {activeTab === 'blogs' ? (
                <form onSubmit={handleSaveBlog} className="space-y-4">
                  {/* Image Upload */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 group cursor-pointer" onClick={() => blogInputRef.current?.click()}>
                    <img src={newBlog.image} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"><Upload className="text-white" /></div>
                    <input type="file" ref={blogInputRef} className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, 'blog')} />
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Category</label>
                    <div className="grid grid-cols-2 gap-2">
                        {['Technical', 'Innovation', 'Strategy'].map((cat) => (
                            <button 
                                key={cat}
                                type="button"
                                onClick={() => setNewBlog({...newBlog, category: cat})}
                                className={`py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${newBlog.category === cat ? 'bg-zinc-900 text-white border-zinc-900 shadow-md' : 'bg-zinc-50 text-zinc-400 border-zinc-100 hover:bg-zinc-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <input 
                        value={newBlog.category} 
                        onChange={e => setNewBlog({...newBlog, category: e.target.value})} 
                        placeholder="Or type custom category..." 
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-lg p-2 text-[10px] outline-none focus:ring-1 focus:ring-primary-500" 
                    />
                  </div>

                  <input required value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} placeholder="Blog Title" className={inputClass} />
                  <textarea required value={newBlog.content} onChange={e => setNewBlog({...newBlog, content: e.target.value})} placeholder="Content..." rows={6} className={inputClass} />
                  
                  <button type="submit" disabled={isSaving} className="w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest bg-primary-600 text-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                    {isSaving ? <Loader2 size={14} className="animate-spin" /> : (editingId ? 'Update Post' : 'Publish Post')}
                  </button>
                  {editingId && <button type="button" onClick={cancelEdit} className="w-full text-[10px] font-black uppercase tracking-widest text-zinc-400">Cancel</button>}
                </form>
              ) : (
                <form onSubmit={handleSaveTestimonial} className="space-y-4">
                   <div className="flex flex-col items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-500 relative group cursor-pointer" onClick={() => testimonialInputRef.current?.click()}>
                      <img src={newTestimonial.image} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><Upload size={16} className="text-white"/></div>
                    </div>
                    <input type="file" ref={testimonialInputRef} className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, 'testimonial')} />
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={20} className={`cursor-pointer ${s <= newTestimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-200'}`} onClick={() => setNewTestimonial({...newTestimonial, rating: s})} />
                      ))}
                    </div>
                  </div>
                  <input required value={newTestimonial.name} onChange={e => setNewTestimonial({...newTestimonial, name: e.target.value})} placeholder="Client Name" className={inputClass} />
                  <input required value={newTestimonial.role} onChange={e => setNewTestimonial({...newTestimonial, role: e.target.value})} placeholder="Designation" className={inputClass} />
                  <textarea required value={newTestimonial.quote} onChange={e => setNewTestimonial({...newTestimonial, quote: e.target.value})} placeholder="Review..." rows={4} className={inputClass} />
                  <button type="submit" disabled={isSaving} className="w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest bg-emerald-600 text-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                    {isSaving ? <Loader2 size={14} className="animate-spin" /> : (editingId ? 'Update Review' : 'Add Review')}
                  </button>
                  {editingId && <button type="button" onClick={cancelEdit} className="w-full text-[10px] font-black uppercase tracking-widest text-zinc-400">Cancel</button>}
                </form>
              )}
            </div>
          </div>

          {/* List Side */}
          <div className="lg:col-span-2 space-y-4">
            {isLoading ? (
              <div className="flex flex-col items-center py-20 gap-4"><Loader2 className="animate-spin text-primary-500" size={32} /></div>
            ) : (
              activeTab === 'blogs' ? blogs.map(blog => (
                <div key={blog.id} className="bg-white p-4 rounded-3xl border border-zinc-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <img src={blog.image} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-primary-50 text-primary-600 rounded-full border border-primary-100">
                                {blog.category}
                            </span>
                        </div>
                        <h4 className="font-bold text-zinc-900">{blog.title}</h4>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditClick(blog, 'blog')} className="p-2 text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"><Edit2 size={16}/></button>
                    <button onClick={() => handleDelete(blog.id!, 'blogs')} className="p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"><Trash2 size={16}/></button>
                  </div>
                </div>
              )) : testimonials.map(t => (
                <div key={t.id} className="bg-white p-4 rounded-3xl border border-zinc-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <img src={t.image} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-zinc-900">{t.name}</h4>
                      <div className="flex gap-0.5">
                        {[...Array(t.rating || 5)].map((_, i) => <Star key={i} size={10} className="fill-amber-400 text-amber-400" />)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditClick(t, 'testimonial')} className="p-2 text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"><Edit2 size={16}/></button>
                    <button onClick={() => handleDelete(t.id!, 'testimonials')} className="p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"><Trash2 size={16}/></button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManager;
