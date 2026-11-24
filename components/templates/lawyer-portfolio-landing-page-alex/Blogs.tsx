'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { CornerDownRight, ArrowRight, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import { BLOG_POSTS_DETAIL } from '@/src/data/blogsData';

// Letter-level smooth typewriter wave reveal with blur-fade effect
function BlurWaveText({
  text,
  className = '',
  delay = 0,
  highlightWord = '',
  highlightClass = 'text-[#D2AF37]',
}: {
  text: string;
  className?: string;
  delay?: number;
  highlightWord?: string;
  highlightClass?: string;
}) {
  const words = text ? text.split(' ') : [];
  return (
    <motion.span
      key={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: '0px 0px -30px 0px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.016,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {words.map((word, wordIndex) => {
        const isHighlighted = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <span
            key={`${word}-${wordIndex}`}
            className="inline-block whitespace-nowrap mr-[0.25em]"
          >
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                variants={{
                  hidden: { opacity: 0, y: 12, filter: 'blur(5px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                style={{ WebkitBackfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                className={`inline-block will-change-[transform,opacity] ${
                  isHighlighted ? highlightClass : ''
                }`}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}

export default function Blogs() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const singleSetRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    amount: 0.15,
    once: false,
  });

  // Dynamically derive posts from BLOG_POSTS_DETAIL so the horizontal carousel
  // automatically scales cleanly as new articles are added over time.
  const posts = useMemo(
    () =>
      BLOG_POSTS_DETAIL.map((post) => ({
        id: post.id,
        slug: post.slug,
        category: post.category,
        readTime: post.readTime,
        date: post.date[language] || post.date.GEO,
        title: post.title[language] || post.title.GEO,
        excerpt: post.excerpt[language] || post.excerpt.GEO,
        image: post.image,
        alt: post.alt,
      })),
    [language]
  );

  // Continuous horizontal auto-slide state (pixels/sec, crisp & readable)
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const offsetRef = useRef(0);
  const targetNudgeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragDistanceRef = useRef(0);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Continuous requestAnimationFrame loop for buttery 60fps auto-advance
  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();
    const SPEED_PX_PER_SEC = 78; // Crisp, engaging pace — dynamic yet easily readable

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const singleSetEl = singleSetRef.current;
      const trackEl = trackRef.current;

      if (singleSetEl && trackEl) {
        const setWidth = singleSetEl.offsetWidth;
        if (setWidth > 0) {
          // Apply manual arrow nudge smoothly if triggered
          if (Math.abs(targetNudgeRef.current) > 0.5) {
            const step = targetNudgeRef.current * Math.min(1, dt * 10);
            offsetRef.current += step;
            targetNudgeRef.current -= step;
          } else if (!isPausedRef.current && !isDraggingRef.current) {
            offsetRef.current -= SPEED_PX_PER_SEC * dt;
          }

          // Seamless infinite wrap-around
          while (offsetRef.current <= -setWidth) {
            offsetRef.current += setWidth;
          }
          while (offsetRef.current > 0) {
            offsetRef.current -= setWidth;
          }

          trackEl.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [posts.length]);

  const handleStep = (direction: 'prev' | 'next') => {
    const firstCard = singleSetRef.current?.querySelector('article') as HTMLElement | null;
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : 420;
    targetNudgeRef.current += direction === 'next' ? -cardStep : cardStep;
  };

  // Pointer drag / swipe handlers for mobile & mouse interaction
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragDistanceRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    dragStartXRef.current = e.clientX;
    dragDistanceRef.current += Math.abs(dx);
    offsetRef.current += dx;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const isGeo = language === 'GEO';

  const renderCard = (post: (typeof posts)[number], isClone = false) => (
    <Link
      key={`${isClone ? 'clone' : 'orig'}-${post.id}`}
      to={`/blogs/${post.slug}`}
      tabIndex={isClone ? -1 : 0}
      draggable={false}
      onClick={(e) => {
        if (dragDistanceRef.current >= 8) {
          e.preventDefault();
        }
      }}
      className="group flex flex-col w-[82vw] sm:w-[350px] md:w-[385px] lg:w-[405px] shrink-0 cursor-pointer select-none rounded-[18px] bg-[#121315] border border-white/[0.08] hover:border-[#D2AF37]/55 hover:shadow-[0_14px_38px_rgba(211,175,55,0.14)] overflow-hidden transition-all duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D2AF37]"
    >
      <article className="flex flex-col flex-1">
        {/* Image Box */}
        <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-[#151415]">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            sizes="(max-width: 768px) 82vw, 405px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05] pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* Dark subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-[#D2AF37]/35 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#D2AF37] font-inter-tight pointer-events-none">
            {post.category}
          </span>

          {/* Signature Gold Corner Bracket Mark (Top Right) */}
          <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-[#D2AF37] shadow-[0_0_8px_#D2AF37]" />
            <div className="absolute top-0 right-0 h-full w-[2px] bg-[#D2AF37] shadow-[0_0_8px_#D2AF37]" />
          </div>
        </div>

        {/* Compact Content Area Beneath Photo */}
        <div className="p-4 flex flex-col items-start flex-1 justify-between gap-2.5">
          <div className="w-full">
            {/* Date & Read Time */}
            <div className="flex items-center gap-2 text-white/55 text-[11px] sm:text-xs font-inter-tight font-normal tracking-wide">
              <time>{post.date}</time>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-[#D2AF37]/90">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            {/* Full Title — balanced scale for Georgian vs English, never cut off */}
            <h3
              className={`text-white group-hover:text-[#D2AF37] transition-colors duration-300 mt-1.5 ${
                isGeo
                  ? 'font-inter-tight font-semibold text-[15px] sm:text-[16px] leading-[1.35] tracking-normal'
                  : "font-['Antonio'] uppercase tracking-tight text-lg sm:text-[21px] font-bold leading-[1.15]"
              }`}
            >
              {post.title}
            </h3>

            {/* Concise 2-line Excerpt */}
            <p className="font-inter-tight text-xs text-white/60 leading-snug mt-1.5 line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          {/* Action Indicator (span inside outer Link to avoid nested interactive links) */}
          <div className="w-full pt-2.5 border-t border-white/[0.06] flex items-center justify-between">
            <span className="saas-btn-dark px-3.5 py-1.5 rounded-full text-white/90 group-hover:text-[#D2AF37] text-xs font-medium font-inter-tight inline-flex items-center gap-1.5 overflow-hidden">
              <span>{t.blogsSection.readAnalysis || 'Read More'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );

  return (
    <section
      ref={sectionRef}
      id="blogs"
      className="relative w-full bg-[#0A0A0B] text-[#FBFBFB] py-24 sm:py-32 md:py-36 overflow-hidden select-none scroll-mt-20"
    >

      {/* Ambient Luxury Warm Glow in Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[500px] bg-[#D2AF37]/[0.035] rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-full px-6 md:px-12 lg:px-[90px]">
        {/* ================= 1. TOP ROW: HEADER + CAROUSEL CONTROLS & VIEW ALL ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Left: Heading */}
          <div className="flex-shrink-0">
            <h2 className="font-['Antonio'] uppercase tracking-tight text-[38px] sm:text-[50px] md:text-[64px] lg:text-[76px] leading-[1.18] pb-1 text-white">
              <BlurWaveText
                text={t.blogsSection.headline}
                highlightWord={t.blogsSection.headlineHighlight}
                highlightClass="bg-gradient-to-r from-[#FFF4CC] via-[#D2AF37] to-[#C59827] bg-clip-text text-transparent"
                delay={0.1}
              />
            </h2>
          </div>

          {/* Right: Stepper Controls + Action Link */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleStep('prev')}
                aria-label="Previous article"
                className="w-11 h-11 rounded-full bg-[#151517] border border-white/15 hover:border-[#D2AF37] text-white/80 hover:text-[#D2AF37] flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleStep('next')}
                aria-label="Next article"
                className="w-11 h-11 rounded-full bg-[#151517] border border-white/15 hover:border-[#D2AF37] text-white/80 hover:text-[#D2AF37] flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                  : { opacity: 0, x: 20, filter: 'blur(8px)' }
              }
              transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/blogs"
                className="group inline-flex items-center gap-2.5 text-white/90 hover:text-[#D2AF37] transition-all duration-300 text-sm sm:text-base md:text-[17px] font-medium font-inter-tight cursor-pointer py-2 px-1 shrink-0"
              >
                <CornerDownRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-0.5" />
                <span className="tracking-wide">{t.blogsSection.viewAllBtn}</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 2. FULL-BLEED HORIZONTAL AUTO-SLIDE CAROUSEL ================= */}
      <div
        className="relative w-full overflow-hidden touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handlePointerUp();
        }}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Subtle edge fade masks */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-[#0A0A0B] to-transparent z-20 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#0A0A0B] to-transparent z-20 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex flex-row flex-nowrap w-max will-change-transform px-6 md:px-12 lg:px-[90px]"
        >
          {/* Primary Track */}
          <div ref={singleSetRef} className="flex flex-row flex-nowrap gap-6 pr-6 shrink-0">
            {posts.map((post) => renderCard(post, false))}
          </div>

          {/* Seamless Infinite Loop Clone Track */}
          <div aria-hidden="true" className="flex flex-row flex-nowrap gap-6 pr-6 shrink-0">
            {posts.map((post) => renderCard(post, true))}
          </div>
        </div>
      </div>
    </section>
  );
}
