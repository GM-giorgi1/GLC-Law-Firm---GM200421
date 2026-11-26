'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import ConsultationModal from '@/src/components/common/ConsultationModal';
import ScrollLetterReveal from '@/src/components/common/ScrollLetterReveal';
import CurtainIntro from '@/src/components/common/CurtainIntro';
import criminalHeroImg from '@/src/assets/criminalhero.webp';

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
      <CurtainIntro title="CRIMINAL LAW" subtitle="GLC LAW COMPANY" mode="route" />

      <header
        className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#030508] border-b border-[#D3AF37]/15 overflow-hidden flex flex-col justify-center items-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12 selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]"
      >
        {/* Criminal Hero Architecture Background with Light, Elegant Luxury Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={criminalHeroImg || '/criminalhero.png'}
            alt="GLC Criminal Law Defense Advocacy"
            fill
            sizes="100vw"
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D3AF37]/40 bg-[#0E0E10]/85 backdrop-blur-md shadow-[0_0_15px_rgba(211,175,55,0.15)] mb-5 sm:mb-6"
          >
            <Shield className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span className="font-geist font-bold text-xs uppercase tracking-[0.22em] text-[#D3AF37]">
              {language === 'GEO'
                ? 'სრული სისხლისსამართლებრივი დაცვა'
                : language === 'RUS'
                  ? 'ПОЛНАЯ УГОЛОВНО-ПРАВОВАЯ ЗАЩИТА'
                  : language === 'TUR'
                    ? 'TAM KAPSAMLI CEZA SAVUNMASI'
                    : 'Institutional Criminal Defense'}
            </span>
          </motion.div>

          {/* Centered Main Headline (Scaled down slightly, impeccably centered, luxury golden gradient) */}
          <h1
            className="font-big-shoulders font-[900] uppercase text-[clamp(34px,5.8vw,78px)] tracking-tight leading-[1.04] sm:leading-[0.98] criminal-gold-gradient select-none text-center max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_8px_rgba(211,175,55,0.35)]"
          >
            <ScrollLetterReveal text={mainHeadlineText} delay={0.64} triggerMode="mount" stagger={0.016} />
          </h1>

          {/* Centered Editorial Subheading (Two distinct centered lines) */}
          <div className="flex flex-col items-center justify-center gap-1.5 mt-5 sm:mt-6 text-center max-w-2xl mx-auto px-2">
            <p className="font-geist font-semibold text-base sm:text-lg lg:text-xl text-[#FEF5CD] tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              <ScrollLetterReveal text={subheadlineLine1} delay={0.78} triggerMode="mount" granularity="word" stagger={0.03} />
            </p>
            <p className="font-geist font-medium text-sm sm:text-base text-gray-200/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              <ScrollLetterReveal text={subheadlineLine2} delay={0.88} triggerMode="mount" granularity="word" stagger={0.025} />
            </p>
          </div>

          {/* Centered CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.96, ease: [0.16, 1, 0.3, 1] }}
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
              <span>
                {language === 'GEO'
                  ? 'გადაუდებელი კონსულტაცია'
                  : language === 'RUS'
                    ? 'Срочная консультация'
                    : language === 'TUR'
                      ? 'Acil Danışmanlık'
                      : 'Emergency Consultation'}
              </span>
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
              <span>
                {language === 'GEO'
                  ? 'საქმის რეგისტრაცია'
                  : language === 'RUS'
                    ? 'Регистрация дела'
                    : language === 'TUR'
                      ? 'Dava Kaydı'
                      : 'Case Registration'}
              </span>
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
