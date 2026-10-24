'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

function BlurWaveText({
  text,
  className = '',
  delay = 0,
  highlightWord = '',
  highlightClass = 'text-[#D3AF37]',
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
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.09,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {words.map((word, wordIndex) => {
        const isHighlighted = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <motion.span
            key={`${word}-${wordIndex}`}
            variants={{
              hidden: { opacity: 0, y: 24, filter: 'blur(14px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  duration: 1.05,
                  ease: [0.25, 1, 0.5, 1],
                },
              },
            }}
            className={`inline-block whitespace-nowrap mr-[0.24em] will-change-[transform,opacity,filter] ${
              isHighlighted ? highlightClass : ''
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

export default function AboutMe() {
  const { t } = useLanguage();
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven flat top-to-bottom soft reveal (0% -> 100% on scroll down, 100% -> 0% on scroll up)
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start 92%', 'center 45%'],
  });

  // Top-to-bottom progressive smooth reveal: 0% -> 100% on scroll down, 100% -> 0% on scroll back up (no tilt/kaat)
  const clipBottom = useTransform(imageProgress, [0, 1], [100, 0]);
  const clipPath = useTransform(clipBottom, (val) => `inset(0% 0% ${val}% 0%)`);
  const opacity = useTransform(imageProgress, [0, 0.15, 1], [0.1, 0.6, 1]);

  // Main Heading split into words for sequential reveal
  const wordsArray = t.aboutMe.headingText.split(' ');
  const headingWords = wordsArray.map((w) => ({
    text: w,
    highlight: t.aboutMe.headingHighlight
      ? w.toLowerCase().includes(t.aboutMe.headingHighlight.toLowerCase())
      : false,
  }));

  return (
    <section className="relative w-full bg-[#0C0D0D] text-[#FAFAFB] py-[90px] overflow-hidden">
      {/* Self-contained Google Fonts & Styling for standalone copy-paste */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter+Tight:wght@400;500;600;700&display=swap');
        .font-antonio { font-family: 'Antonio', sans-serif !important; }
        .font-inter-tight { font-family: 'Inter Tight', sans-serif !important; }
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif !important; }
      `}</style>

      {/* Ambient background gold glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#D3AF37]/[0.035] rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container matching Header's exact width and horizontal padding */}
      <div className="relative z-10 w-full max-w-full px-6 md:px-12 lg:px-[90px]">
        
        {/* ================= TOP SECTION: BADGE + MAIN HEADLINE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20 md:mb-28">
          
          {/* Left: (01) ABOUT US Badge */}
          <div className="lg:col-span-3 pt-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 font-inter-tight text-xs sm:text-sm font-semibold tracking-wider uppercase select-none"
            >
              <span className="text-[#D3AF37]">{t.aboutMe.badgeNumber}</span>
              <span className="text-white/80">{t.aboutMe.badgeText}</span>
            </motion.div>
          </div>

          {/* Right: Giant Headline with Reversible Letter-by-Letter Blurry Wave */}
          <div className="lg:col-span-9">
            <motion.h2 
              key={t.aboutMe.headingText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.09,
                  },
                },
              }}
              className="font-antonio font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.22] sm:leading-[1.26] pb-1 tracking-normal uppercase"
            >
              {headingWords.map((item, index) => (
                <motion.span
                  key={`${item.text}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 24, filter: 'blur(14px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: {
                        duration: 1.05,
                        ease: [0.25, 1, 0.5, 1],
                      },
                    },
                  }}
                  className={`inline-block whitespace-nowrap mr-[0.24em] select-none pb-0.5 will-change-[transform,opacity,filter] ${
                    item.highlight ? 'text-[#D3AF37]' : 'text-white'
                  }`}
                >
                  {item.text}
                </motion.span>
              ))}
            </motion.h2>
          </div>

        </div>


        {/* ================= BOTTOM SECTION: PORTRAIT CARD + PHILOSOPHY QUOTE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Card with Soft Top-to-Bottom Reveal (0% to 100%, without any tilt) */}
          <div className="lg:col-span-5 flex flex-col max-w-[430px]" ref={imageContainerRef}>
            
            {/* Image Card Container: No background color, no shadow, no border during reveal */}
            <div className="w-full relative aspect-[4/4.2] max-h-[430px] rounded-[14px] overflow-hidden bg-transparent shadow-none border-0">
              <motion.div
                style={{
                  clipPath,
                  opacity,
                }}
                className="w-full h-full relative will-change-[clip-path,opacity] rounded-[14px] overflow-hidden"
              >
                {/* Lawyer Image - exact same width & height as the div */}
                <Image
                  src="/.tempmediaStorage/GUBE1.jpeg"
                  alt="Giorgi Gubeladze - Legal Counsel"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  referrerPolicy="no-referrer"
                  className="object-cover object-top brightness-[0.95] contrast-[1.05] w-full h-full rounded-[14px]"
                />

                {/* Overlaid Gold Handwritten Calligraphy Signature without drop-shadow */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-none z-10">
                  <svg 
                    viewBox="0 0 260 90" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-36 sm:w-48 h-auto text-[#D3AF37]"
                  >
                    {/* Artistic Alex Carter Calligraphy Curves */}
                    <path 
                      d="M18 65C32 20 48 10 58 45C64 65 52 75 42 70C30 65 32 40 45 35C62 28 80 55 90 40C98 28 108 55 116 42C122 32 135 60 148 40" 
                      stroke="#D3AF37" 
                      strokeWidth="2.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <path 
                      d="M165 48C152 40 145 58 158 64C172 70 188 35 195 25C202 15 192 48 200 45C208 42 215 58 225 45C232 35 240 50 250 42" 
                      stroke="#D3AF37" 
                      strokeWidth="2.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <path 
                      d="M175 45H220" 
                      stroke="#D3AF37" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Below Card: Name & Title */}
            <div className="w-full flex justify-between items-center mt-5 px-1 font-inter-tight">
              <span className="font-antonio font-bold text-lg sm:text-xl tracking-wider uppercase text-white">
                {t.aboutMe.founderTitle}
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/50">
                {t.aboutMe.founderSubtitle}
              </span>
            </div>

          </div>


          {/* Right Column: Philosophy Tag, Quote, Body & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2 lg:pl-6">
            
            <div>
              {/* (MY PHILOSOPHY) Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/60 font-inter-tight mb-6 sm:mb-8"
              >
                ({t.aboutMe.quoteTitle})
              </motion.div>

              {/* Structured Bio Quote Paragraph 1 */}
              <div className="relative pl-5 sm:pl-6 border-l-2 border-[#D3AF37]/50 mb-6 sm:mb-8">
                <p className="font-inter-tight font-medium text-base sm:text-lg lg:text-[21px] leading-[1.5] text-white/95 tracking-normal">
                  “<BlurWaveText text={t.aboutMe.quoteParagraph} delay={0.08} />”
                </p>
              </div>

              {/* Structured Bio Quote Paragraph 2 */}
              <motion.div
                initial={{ opacity: 0, y: 24, filter: 'blur(14px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
                className="p-4 sm:p-5 rounded-xl bg-[#141415]/80 border border-[#D3AF37]/25 mb-10 sm:mb-14 will-change-[transform,opacity,filter]"
              >
                <p className="font-inter-tight font-semibold text-sm sm:text-base text-[#D3AF37] leading-relaxed">
                  <BlurWaveText text={t.aboutMe.quoteParagraph2} delay={0.12} highlightClass="text-[#FDE99A]" />
                </p>
              </motion.div>
            </div>

            {/* Bottom-Right CTA: EXPLORE PRACTICE AREAS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-start sm:justify-end items-center"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="group flex items-center gap-3 cursor-pointer py-2 focus:outline-none"
              >
                <span className="font-antonio font-bold text-sm sm:text-base tracking-widest uppercase text-white group-hover:text-[#D3AF37] transition-colors">
                  {t.aboutMe.exploreBtn}
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-[#D3AF37] group-hover:bg-[#b9962e] flex items-center justify-center text-[#0C0D0D] transition-transform duration-300 group-hover:translate-x-1 shadow-[0_4px_15px_rgba(211,175,55,0.4)]">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
