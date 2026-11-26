'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CornerDownRight, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import { BLOG_POSTS_DETAIL } from '@/src/data/blogsData';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';
import CurtainIntro from '@/src/components/common/CurtainIntro';
import ScrollLetterReveal from '@/src/components/common/ScrollLetterReveal';
import SeoHead, { SITE_URL } from '@/src/components/common/SeoHead';
import gm7Img from '@/src/assets/GM7.webp';

export default function BlogListPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'GEO' ? 'ყველა პუბლიკაცია' : language === 'ENG' ? 'All Publications' : language === 'RUS' ? 'Все публикации' : 'Tüm Yazılar' },
    { id: 'მემკვიდრეობითი სამართალი', label: language === 'GEO' ? 'მემკვიდრეობითი სამართალი' : language === 'ENG' ? 'Inheritance Law' : language === 'RUS' ? 'Наследственное право' : 'Miras Hukuku' },
    { id: 'იურიდიული გზამკვლევი', label: language === 'GEO' ? 'იურიდიული გზამკვლევი' : language === 'ENG' ? 'Legal Guide' : language === 'RUS' ? 'Правовой гид' : 'Hukuk Rehberi' },
    { id: 'სისხლის სამართალი', label: language === 'GEO' ? 'სისხლის სამართალი' : language === 'ENG' ? 'Criminal Law' : language === 'RUS' ? 'Уголовное право' : 'Ceza Hukuku' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS_DETAIL
    : BLOG_POSTS_DETAIL.filter((p) => p.category === selectedCategory);

  const locale = language === 'GEO' ? 'ka_GE' : language === 'RUS' ? 'ru_RU' : language === 'TUR' ? 'tr_TR' : 'en_US';

  return (
    <div className="min-h-screen bg-[#0C0D0D] text-[#FAFAFB] flex flex-col selection:bg-[#D3AF37]/30 selection:text-white">
      <SeoHead
        title={
          language === 'GEO'
            ? 'სამართლებრივი პუბლიკაციები და ბლოგი | GLC Law Company'
            : language === 'RUS'
              ? 'Юридические публикации и блог | GLC Law Company'
              : language === 'TUR'
                ? 'Hukuki Yayınlar ve Blog | GLC Law Company'
                : 'Legal Insights & Articles | GLC Law Company'
        }
        description={
          language === 'GEO'
            ? 'პრაქტიკული ანალიტიკა, სასამართლო პრეცედენტები და საკანონმდებლო განმარტებები GLC Law Company-ის ადვოკატებისგან.'
            : language === 'RUS'
              ? 'Практический правовой анализ, судебные прецеденты и разъяснения законодательства от адвокатов GLC Law Company.'
              : language === 'TUR'
                ? 'GLC Law Company avukatlarından pratik hukuki analizler, yargı içtihatları ve mevzuat değerlendirmeleri.'
                : 'Practical legal analysis, judicial precedents, and statutory insights from GLC Law Company attorneys.'
        }
        canonicalPath="/blogs"
        ogType="website"
        ogImage="/GM7.webp"
        locale={locale}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'GLC Law Company - Legal Insights & Articles',
            url: `${SITE_URL}/blogs`,
            isPartOf: { '@id': `${SITE_URL}/#organization` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
            ],
          },
        ]}
      />
      {/* Cinematic Curtain Transition */}
      <CurtainIntro title="BLOGS & INSIGHTS" subtitle="GLC LAW COMPANY" backdropImage={gm7Img} mode="route" />

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

      <main className="flex-1 flex flex-col">
      {/* Hero Header with GM7 Background & Refined Balanced Luxury Overlay */}
      <section className="relative w-full py-20 sm:py-24 border-b border-[#D3AF37]/20 overflow-hidden bg-[#030508]">
        {/* Background Photo: GM7 with Vividly Visible Balanced Luxury Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <Image
            src={gm7Img}
            alt="GLC Law Legal Insights & Articles"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.92] contrast-[1.10]"
          />
          {/* Balanced luxury radial vignette (35% to 68% opacity range) revealing GM7 crisp details */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(3, 5, 8, 0.35) 0%, rgba(3, 5, 8, 0.48) 55%, rgba(3, 5, 8, 0.68) 100%)'
            }}
          />
          {/* Subtle gold ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D3AF37]/[0.08] rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0D] via-transparent to-[#0C0D0D]/30 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-inter-tight text-white/60 uppercase tracking-widest mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <Link to="/" className="hover:text-white transition-colors">GLC</Link>
            <ChevronRight className="w-3 h-3 text-[#D3AF37]" />
            <span className="text-[#D3AF37] font-semibold">
              {language === 'GEO'
                ? 'ბლოგები & პუბლიკაციები'
                : language === 'RUS'
                  ? 'Блог и публикации'
                  : language === 'TUR'
                    ? 'Blog ve Yayınlar'
                    : 'Blogs & Publications'}
            </span>
          </div>

          <h1
            className={`text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] mb-4 ${
              language === 'GEO'
                ? 'font-inter-tight font-semibold text-[26px] sm:text-[38px] lg:text-[44px] tracking-normal leading-[1.25]'
                : "font-['Antonio'] uppercase text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            }`}
          >
            <ScrollLetterReveal 
              text={language === 'GEO' ? 'სამართლებრივი პუბლიკაციები' : language === 'ENG' ? 'Legal Insights & Articles' : language === 'RUS' ? 'Юридические публикации' : 'Hukuki Makaleler'} 
              delay={0.64} 
              triggerMode="mount" 
              stagger={0.016} 
            />
          </h1>
          <p className="font-inter-tight text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <ScrollLetterReveal 
              text={
                language === 'GEO'
                  ? 'პრაქტიკული ანალიტიკა, სასამართლო პრეცედენტები და საკანონმდებლო განმარტებები GLC Law Company-ის ადვოკატებისგან.'
                  : language === 'RUS'
                    ? 'Практический анализ, судебные прецеденты и разъяснения законодательства от адвокатов GLC Law Company.'
                    : language === 'TUR'
                      ? 'GLC Law Company avukatlarından pratik hukuki analizler, yargı kararları ve mevzuat rehberleri.'
                      : 'Practical analysis, judicial precedents, and statutory breakdowns from GLC Law Company attorneys.'
              } 
              delay={0.78} 
              triggerMode="mount" 
              granularity="word"
              stagger={0.028} 
            />
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-inter-tight font-medium transition-all duration-300 cursor-pointer ${
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
      <section className="w-full py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPosts.map((post, idx) => (
            <Link
              key={post.id}
              to={`/blogs/${post.slug}`}
              className="group flex flex-col bg-[#131414] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#D3AF37]/60 hover:-translate-y-1 transition-all duration-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(211,175,55,0.14)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AF37]"
            >
              <article className="flex flex-col flex-1">
                {/* Image Frame */}
                <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-[#181819]">
                  <Image
                    src={post.image}
                    fallbackSrc={post.fallbackImage || '/criminalhero.png'}
                    alt={post.alt}
                    fill
                    priority={idx === 0}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-[#D3AF37] uppercase tracking-wider font-inter-tight border border-[#D3AF37]/30">
                    {post.category}
                  </span>
                </div>

                {/* Compact Card Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs text-white/50 font-inter-tight mb-1.5">
                      <span>{post.date[language] || post.date.GEO}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#D3AF37]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2
                      className={`text-white group-hover:text-[#D3AF37] transition-colors mb-1.5 ${
                        language === 'GEO'
                          ? 'font-inter-tight font-semibold text-[15px] sm:text-[16px] tracking-normal leading-[1.35]'
                          : "font-['Antonio'] uppercase text-lg sm:text-xl font-bold tracking-tight leading-[1.15]"
                      }`}
                    >
                      {post.title[language] || post.title.GEO}
                    </h2>

                    <p className="font-inter-tight text-xs sm:text-[13px] text-white/65 leading-snug line-clamp-2">
                      {post.excerpt[language] || post.excerpt.GEO}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#D3AF37] shrink-0 bg-[#181819]">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          loading="eager"
                          sizes="24px"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-xs font-medium text-white/80 font-inter-tight truncate">
                        {post.author.name}
                      </span>
                    </div>

                    <span
                      className={`saas-btn-gold px-3 py-1 rounded-lg text-[#0C0D0D] inline-flex items-center gap-1 group-hover:scale-105 transition-transform shrink-0 ${
                        language === 'GEO'
                          ? 'font-inter-tight font-semibold text-[11px]'
                          : "font-['Antonio'] font-bold text-xs uppercase tracking-wider"
                      }`}
                    >
                      <span>{language === 'GEO' ? 'სრულად' : language === 'ENG' ? 'Read' : language === 'RUS' ? 'Читать' : 'Oku'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
