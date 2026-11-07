'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CornerDownRight, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import { BLOG_POSTS_DETAIL } from '@/src/data/blogsData';
import SEOHead from '@/src/components/common/SEOHead';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';

export default function BlogListPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogTitle = language === 'GEO'
    ? 'იურიდიული ბლოგი & პუბლიკაციები — GLC Law Company'
    : language === 'ENG'
    ? 'Legal Insights & Statutory Publications — GLC Law Company'
    : 'Юридические публикации — GLC Law Company';

  const blogDesc = language === 'GEO'
    ? 'პრაქტიკული იურიდიული რჩევები, საკანონმდებლო ანალიზი და სასამართლო პრაქტიკა GLC Law Company-ს ადვოკატებისგან.'
    : 'Practical legal guidance, case analysis, and statutory insights by GLC Law Company trial attorneys.';

  const categories = [
    { id: 'all', label: language === 'GEO' ? 'ყველა პუბლიკაცია' : language === 'ENG' ? 'All Publications' : language === 'RUS' ? 'Все публикации' : 'Tüm Yazılar' },
    { id: 'სამოქალაქო სამართალი', label: language === 'GEO' ? 'სამოქალაქო სამართალი' : 'Civil Law' },
    { id: 'კორპორაციული სამართალი', label: language === 'GEO' ? 'კორპორაციული სამართალი' : 'Corporate Law' },
    { id: 'სისხლის სამართალი', label: language === 'GEO' ? 'სისხლის სამართალი' : 'Criminal Law' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS_DETAIL
    : BLOG_POSTS_DETAIL.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0C0D0D] text-[#FAFAFB] flex flex-col selection:bg-[#D3AF37]/30 selection:text-white">
      <SEOHead
        title={blogTitle}
        description={blogDesc}
        canonicalPath="/blogs"
      />
      {/* Top Floating Mini Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-[#0C0D0D]/90 backdrop-blur-md border-b border-white/[0.08] px-6 sm:px-12 py-3.5 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-[#D3AF37] transition-colors text-sm font-medium font-inter-tight group"
        >
          <ArrowLeft className="w-4 h-4 text-[#D3AF37] group-hover:-translate-x-1 transition-transform" />
          <span>{language === 'GEO' ? 'მთავარ გვერდზე დაბრუნება' : language === 'ENG' ? 'Back to Home' : language === 'RUS' ? 'На главную' : 'Ana Sayfaya Dön'}</span>
        </Link>

        <span className="font-['Antonio'] font-bold text-sm tracking-widest text-[#D3AF37] uppercase">
          GLC LAW COMPANY
        </span>
      </nav>

      {/* Hero Header */}
      <section className="relative w-full py-16 sm:py-20 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D3AF37]/[0.05] rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-inter-tight text-white/40 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">GLC</Link>
            <ChevronRight className="w-3 h-3 text-[#D3AF37]" />
            <span className="text-[#D3AF37] font-semibold">
              {language === 'GEO' ? 'ბლოგები & პუბლიკაციები' : 'Blogs & Publications'}
            </span>
          </div>

          <h1 className="font-['Antonio'] uppercase text-4xl sm:text-6xl lg:text-7xl text-white font-bold tracking-tight leading-[1.08] mb-4">
            {language === 'GEO' ? 'სამართლებრივი პუბლიკაციები' : language === 'ENG' ? 'Legal Insights & Articles' : language === 'RUS' ? 'Юридические публикации' : 'Hukuki Makaleler'}
          </h1>
          <p className="font-inter-tight text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            {language === 'GEO' 
              ? 'პრაქტიკული ანალიტიკა, სასამართლო პრეცედენტები და საკანონმდებლო განმარტებები GLC Law Company-ის ადვოკატებისგან.'
              : 'Practical analysis, judicial precedents, and statutory breakdowns from GLC Law Company attorneys.'}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-inter-tight font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#D3AF37] text-[#0C0D0D] font-bold shadow-[0_0_16px_rgba(211,175,55,0.35)]'
                    : 'bg-[#151515] text-white/70 hover:text-white border border-white/10 hover:border-[#D3AF37]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-[#131414] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#D3AF37]/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex-1"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#181819]">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-semibold text-[#D3AF37] uppercase tracking-wider font-inter-tight border border-[#D3AF37]/30">
                  {post.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-xs text-white/50 font-inter-tight mb-2.5">
                    <span>{post.date[language] || post.date.GEO}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#D3AF37]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-['Antonio'] uppercase text-xl sm:text-2xl text-white font-bold tracking-tight leading-tight group-hover:text-[#D3AF37] transition-colors mb-3">
                    {post.title[language] || post.title.GEO}
                  </h2>

                  <p className="font-inter-tight text-sm text-white/70 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt[language] || post.excerpt.GEO}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#D3AF37]">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-xs font-semibold text-white/80 font-inter-tight">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/blogs/${post.slug}`}
                    className="saas-btn-gold px-3.5 py-1.5 rounded-lg text-xs font-['Antonio'] font-bold text-[#0C0D0D] uppercase tracking-wider inline-flex items-center gap-1 group-hover:scale-105 transition-transform"
                  >
                    <span>{language === 'GEO' ? 'სრულად' : language === 'ENG' ? 'Read' : language === 'RUS' ? 'Читать' : 'Oku'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
