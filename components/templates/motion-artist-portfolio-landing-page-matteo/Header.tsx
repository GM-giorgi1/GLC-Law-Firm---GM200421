'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowUpRight, Shield } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import ConsultationModal from '@/src/components/common/ConsultationModal';
import criminalHeroImg from '@/src/assets/criminalhero.png';

/**
 * ============================================================================
 * FULL-SCREEN CINEMATIC SHUTTER LOADING SCREEN COMPONENT
 * Primary Bold Headline: "CRIMINAL LAW"
 * Refined Subtitle: "GLC LAW COMPANY"
 * ============================================================================
 */
const LOADING_TITLE_TEXT = 'CRIMINAL LAW';
const LOADING_SUBTITLE_TEXT = 'GLC LAW COMPANY';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 2100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const letterContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 14,
      scale: 0.92,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[99999] w-full h-full overflow-hidden pointer-events-none select-none"
        >
          {/* BEHIND THE CURTAINS: CRIMINAL HERO BACKDROP */}
          <div className="absolute inset-0 w-full h-full bg-[#030508]">
            <Image
              src={criminalHeroImg}
              alt="GLC Law Courtroom Backdrop"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.48] contrast-[1.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/65 to-[#030508]/75 pointer-events-none" />
          </div>

          {/* TOP CURTAIN */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 1.05,
              delay: 0.95,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#00070B] flex flex-col justify-end items-center pb-2 sm:pb-3 px-4 z-20 border-b border-[#D3AF37]/30"
            style={{ backgroundColor: '#00070B' }}
          >
            <motion.h1
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              className="font-big-shoulders font-[900] uppercase text-[#F2ECEC] tracking-tight leading-none text-[34px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-center flex items-center justify-center flex-wrap"
              style={{
                fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                fontWeight: 900,
                lineHeight: '100%',
                color: '#F2ECEC',
              }}
            >
              {LOADING_TITLE_TEXT.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* BOTTOM CURTAIN */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 1.05,
              delay: 0.95,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#00070B] flex flex-col justify-start items-center pt-3 sm:pt-4 px-4 z-20 border-t border-[#D3AF37]/30"
            style={{ backgroundColor: '#00070B' }}
          >
            <motion.p
              initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-geist font-semibold text-[14px] sm:text-[16px] md:text-[18px] text-[#D3AF37] tracking-[0.3em] uppercase text-center"
              style={{
                fontFamily: "'Inter Tight', 'Geist', sans-serif",
                color: '#D3AF37',
              }}
            >
              {LOADING_SUBTITLE_TEXT}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const { language } = useLanguage();
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  const mainHeadlineText =
    language === 'GEO'
      ? 'სისხლის სამართალი და ადვოკატირება'
      : language === 'ENG'
      ? 'CRIMINAL LAW & DEFENCE ADVOCACY'
      : language === 'RUS'
      ? 'УГОЛОВНОЕ ПРАВО И АДВОКАТУРА'
      : 'CEZA HUKUKU VE SAVUNMA';

  const subheadlineLine1 =
    language === 'GEO'
      ? 'თავდაუზოგავი ბრძოლა თქვენი თავისუფლებისათვის.'
      : language === 'ENG'
      ? 'Relentless fight for your personal liberty.'
      : language === 'RUS'
      ? 'Бескомпромиссная борьба за вашу свободу.'
      : 'Özgürlüğünüz için tavizsiz mücadele.';

  const subheadlineLine2 =
    language === 'GEO'
      ? '21+ წლიანი გამოცდილება, სწორი სტრატეგია და 24/7 ოპერატიული რეაგირება.'
      : language === 'ENG'
      ? '21+ years of trial experience, proven strategy, and 24/7 immediate response.'
      : language === 'RUS'
      ? 'Более 21 года опыта, выверенная стратегия и круглосуточное реагирование 24/7.'
      : '21+ yıllık duruşma tecrübesi, doğru strateji ve 7/24 acil müdahale.';

  return (
    <>
      <LoadingScreen />

      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Antonio:wght@600;700;800&family=Inter+Tight:wght@400;500;600;700&display=swap');
          
          .font-big-shoulders {
            font-family: 'Big Shoulders Display', 'Antonio', sans-serif;
            font-optical-sizing: auto;
          }
          .font-geist {
            font-family: 'Inter Tight', -apple-system, sans-serif;
          }
          
          .criminal-gold-gradient {
            background: linear-gradient(180deg, #FEF5CD 0%, #E2C359 45%, #D2AE37 75%, #8C6A1C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `
      }} />

      <header
        className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#030508] border-b border-[#D3AF37]/15 overflow-hidden flex flex-col justify-center items-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12 selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]"
      >
        {/* Criminal Hero Architecture Background with Light, Elegant Luxury Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={criminalHeroImg || '/criminalhero.png'}
            alt="GLC Criminal Law Defense Advocacy"
            fill
            priority
            className="object-cover object-center filter brightness-[0.96] contrast-[1.08] scale-100"
            unoptimized
          />
          {/* Subtle Balanced Obsidian Tint - Clearly reveals the photo details across all devices */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(3, 5, 8, 0.35) 0%, rgba(3, 5, 8, 0.24) 40%, rgba(3, 5, 8, 0.58) 100%)'
            }}
          />
          {/* Soft Centered Radial Vignette for Editorial Elegance and Text Separation */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(3, 5, 8, 0.12) 0%, rgba(3, 5, 8, 0.32) 65%, rgba(3, 5, 8, 0.65) 100%)'
            }}
          />
        </div>

        {/* ================= HERO CONTENT: PERFECTLY CENTERED HIERARCHY ================= */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-2 my-auto">
          
          {/* Center Refined Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D3AF37]/40 bg-[#0E0E10]/85 backdrop-blur-md shadow-[0_0_15px_rgba(211,175,55,0.15)] mb-5 sm:mb-6"
          >
            <Shield className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span className="font-geist font-bold text-xs uppercase tracking-[0.22em] text-[#D3AF37]">
              {language === 'GEO' ? 'სრული სისხლისსამართლებრივი დაცვა' : 'Institutional Criminal Defense'}
            </span>
          </motion.div>

          {/* Centered Main Headline (Scaled down slightly, impeccably centered, luxury golden gradient) */}
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-big-shoulders font-[900] uppercase text-[clamp(34px,5.8vw,78px)] tracking-tight leading-[1.04] sm:leading-[0.98] criminal-gold-gradient select-none text-center max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_8px_rgba(211,175,55,0.35)]"
          >
            {mainHeadlineText}
          </motion.h1>

          {/* Centered Editorial Subheading (Two distinct centered lines) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-1.5 mt-5 sm:mt-6 text-center max-w-2xl mx-auto px-2"
          >
            <p className="font-geist font-semibold text-base sm:text-lg lg:text-xl text-[#FEF5CD] tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              {subheadlineLine1}
            </p>
            <p className="font-geist font-medium text-sm sm:text-base text-gray-200/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              {subheadlineLine2}
            </p>
          </motion.div>

          {/* Centered CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-7 sm:mt-8 w-full sm:w-auto"
          >
            {/* Primary Action: WhatsApp 24/7 Consultation */}
            <motion.a
              href="https://wa.me/995599277794"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto overflow-hidden inline-flex items-center justify-center pl-6 pr-3 py-3 gap-3 bg-gradient-to-r from-[#FEF5CD] via-[#D2AE37] to-[#BA9524] text-[#00070B] rounded-xl cursor-pointer shadow-[0_8px_30px_rgba(211,175,55,0.4)] font-big-shoulders font-[900] text-lg sm:text-xl uppercase tracking-wider"
            >
              <span>{language === 'GEO' ? 'გადაუდებელი კონსულტაცია' : 'Emergency Consultation'}</span>
              <div className="w-8 h-8 bg-[#00070B] rounded-lg flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4 text-[#D3AF37] stroke-[2.5]" />
              </div>
            </motion.a>

            {/* Secondary Action: Case Registration Modal */}
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0E0E10]/90 border border-[#D3AF37]/50 hover:border-[#D3AF37] hover:bg-[#D3AF37]/10 text-white text-sm font-semibold tracking-wide transition-all cursor-pointer font-geist shadow-md"
            >
              <Shield className="w-4 h-4 text-[#D3AF37]" />
              <span>{language === 'GEO' ? 'საქმის რეგისტრაცია' : 'Case Registration'}</span>
            </button>
          </motion.div>
        </div>

        {/* Global Consultation Modal */}
        <ConsultationModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          defaultService="criminal-defense"
        />
      </header>
    </>
  );
}
