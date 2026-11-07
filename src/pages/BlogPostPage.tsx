'use client';

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Share2, 
  Phone,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import { BLOG_POSTS_DETAIL } from '@/src/data/blogsData';
import SEOHead from '@/src/components/common/SEOHead';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const post = BLOG_POSTS_DETAIL.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0C0D0D] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-['Antonio'] text-4xl mb-4 text-[#D3AF37]">სტატია ვერ მოიძებნა</h1>
        <p className="text-gray-400 mb-8 max-w-md">მოთხოვნილი პუბლიკაცია არ არსებობს ან წაშლილია.</p>
        <Link 
          to="/blogs" 
          className="saas-btn-gold px-6 py-3 rounded-xl font-['Antonio'] font-bold text-black uppercase tracking-wider"
        >
          ყველა პუბლიკაციის ნახვა
        </Link>
      </div>
    );
  }

  const localizedContent = post.content[language] || post.content.GEO;
  const postTitle = `${post.title[language] || post.title.GEO} — GLC Law Company`;
  const postDesc = (localizedContent.intro || post.excerpt[language] || post.excerpt.GEO).slice(0, 160);
  const directConsultationUrl = `https://wa.me/995599277794?text=${encodeURIComponent(
    `მოგესალმებით, გავეცანი თქვენს სტატიას „${post.title[language] || post.title.GEO}“ და მსურს კონსულტაცია ამ საკითხზე.`
  )}`;

  return (
    <div className="min-h-screen bg-[#0C0D0D] text-[#FAFAFB] flex flex-col selection:bg-[#D3AF37]/30 selection:text-white">
      <SEOHead
        title={postTitle}
        description={postDesc}
        ogImage={post.image}
        isArticle={true}
        canonicalPath={`/blogs/${post.slug}`}
      />
      {/* Top Floating Mini Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-[#0C0D0D]/90 backdrop-blur-md border-b border-white/[0.08] px-6 sm:px-12 py-3.5 flex items-center justify-between">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-white/80 hover:text-[#D3AF37] transition-colors text-sm font-medium font-inter-tight group"
        >
          <ArrowLeft className="w-4 h-4 text-[#D3AF37] group-hover:-translate-x-1 transition-transform" />
          <span>{language === 'GEO' ? 'ყველა პუბლიკაცია' : language === 'ENG' ? 'All Publications' : language === 'RUS' ? 'Все статьи' : 'Tüm Makaleler'}</span>
        </Link>

        <span className="font-['Antonio'] font-bold text-sm tracking-widest text-[#D3AF37] uppercase hidden sm:inline-block">
          GLC LAW COMPANY
        </span>
      </nav>

      {/* Article Hero */}
      <header className="relative w-full pt-14 pb-12 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D3AF37]/[0.05] rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-inter-tight text-white/40 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-white transition-colors">GLC</Link>
            <ChevronRight className="w-3 h-3 text-[#D3AF37]" />
            <Link to="/blogs" className="hover:text-white transition-colors">{language === 'GEO' ? 'ბლოგი' : 'Blog'}</Link>
            <ChevronRight className="w-3 h-3 text-[#D3AF37]" />
            <span className="text-[#D3AF37] font-semibold">{post.category}</span>
          </div>

          <span className="inline-block px-3 py-1 rounded bg-[#D3AF37]/15 border border-[#D3AF37]/30 text-[#D3AF37] text-xs font-semibold tracking-widest uppercase mb-4 font-inter-tight">
            {post.category}
          </span>

          <h1 className="font-['Antonio'] uppercase text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
            {post.title[language] || post.title.GEO}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/60 font-inter-tight pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D3AF37]">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-white font-semibold">{post.author.name}</p>
                <p className="text-xs text-white/40">{post.author.role[language] || post.author.role.GEO}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D3AF37]" />
              <span>{post.date[language] || post.date.GEO}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D3AF37]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 -mt-2 my-10 w-full">
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#D3AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#141415]">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Main Content Article Body */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 pb-20 w-full font-inter-tight">
        {/* Intro */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#141515] border-l-4 border-[#D3AF37] mb-12 text-base sm:text-lg text-white/90 leading-relaxed font-normal">
          {localizedContent.intro}
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {localizedContent.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-['Antonio'] uppercase text-2xl sm:text-3xl text-white font-bold tracking-tight">
                {section.heading}
              </h2>

              {section.statuteRef && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D3AF37]/10 border border-[#D3AF37]/25 text-[#D3AF37] text-xs font-mono">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{section.statuteRef}</span>
                </div>
              )}

              <div className="space-y-3 pt-2">
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-white/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Key Takeaways Card */}
        <div className="my-14 p-6 sm:p-8 rounded-2xl bg-[#111212] border border-[#D3AF37]/40 shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 text-[#D3AF37] font-semibold text-xs uppercase tracking-widest mb-4">
            <CheckCircle2 className="w-5 h-5 text-[#D3AF37]" />
            <span>{language === 'GEO' ? 'მთავარი სამართლებრივი დასკვნები' : 'Key Legal Takeaways'}</span>
          </div>

          <ul className="space-y-3.5">
            {localizedContent.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-white/85">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37] mt-2 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Statutory Summary / Notice */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs sm:text-sm text-white/50 leading-relaxed mb-14">
          <span className="font-semibold text-white/80 block mb-1">
            {language === 'GEO' ? 'საკანონმდებლო დათქმა:' : 'Legal Notice:'}
          </span>
          {localizedContent.statutorySummary}
        </div>

        {/* Author Bio & Consultation Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#161717] to-[#0E0F0F] border border-[#D3AF37]/50 shadow-[0_16px_40px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#D3AF37] shadow-[0_0_20px_rgba(211,175,55,0.3)] bg-[#121213]">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D3AF37] font-inter-tight mb-1">
              {post.author.role[language] || post.author.role.GEO}
            </span>
            <h3 className="font-['Antonio'] uppercase text-2xl text-white font-bold mb-2">
              {post.author.name}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {language === 'GEO'
                ? '21+ წლიანი გამოცდილება რთულ სისხლისა და სამოქალაქო სამართლის საქმეებში. გაიარეთ კონსულტაცია თქვენს კონკრეტულ საქმეზე.'
                : '21+ years of legal trial experience. Secure strategic counsel tailored to your specific matter.'}
            </p>

            <a
              href={directConsultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="saas-btn-gold px-6 py-3 rounded-xl font-['Antonio'] font-bold text-base text-[#0C0D0D] uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(211,175,55,0.25)]"
            >
              <span>{language === 'GEO' ? 'კონსულტაციის მიღება' : 'Request Consultation'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
