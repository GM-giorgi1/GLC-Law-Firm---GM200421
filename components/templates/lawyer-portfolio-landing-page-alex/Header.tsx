'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowUpRight, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck,
  Award,
  ChevronRight,
  Globe,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

// Browser subscriptions for smooth continuous scroll animation (SSR-safe via useSyncExternalStore)
function subscribeResize(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function subscribeScroll(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
}

function getScrollSnapshot() {
  return typeof window !== 'undefined' ? window.scrollY : 0;
}

function getWindowWidthSnapshot() {
  return typeof window !== 'undefined' ? window.innerWidth : 1200;
}

function getWindowHeightSnapshot() {
  return typeof window !== 'undefined' ? window.innerHeight : 800;
}

const brandLogos = [
  {
    name: 'GBA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'JUSTICE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor">
        <path d="M12 3V21M3 9L12 7L21 9M6 13L3 9L6 9M18 13L21 9L18 9M6 13C6 15 4.5 16 3 16C1.5 16 0 15 0 13M18 13C18 15 19.5 16 21 16C22.5 16 24 15 24 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'COUNSEL',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor">
        <path d="M4 4H20M6 4V20M18 4V20M10 8V16M14 8V16M2 20H22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'EXPERTISE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor">
        <circle cx="12" cy="8" r="6" strokeWidth="2" />
        <path d="M15.477 12.89L17 22L12 19L7 22L8.523 12.89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'STRATEGY',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'INTEGRITY',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor">
        <path d="M12 22S4 18 4 12V5L12 2L20 5V12C20 18 12 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

// Fluid cinematic slow scroll-triggered or mount-triggered blurry wave reveal
function BlurWaveText({
  text,
  className = '',
  delay = 0.05,
  highlightWord = '',
  highlightClass = 'text-[#D3AF37]',
  triggerMode = 'scroll',
}: {
  text: string;
  className?: string;
  delay?: number;
  highlightWord?: string;
  highlightClass?: string;
  triggerMode?: 'scroll' | 'mount';
}) {
  const words = text ? text.split(' ') : [];
  const isMount = triggerMode === 'mount';

  return (
    <motion.span
      key={text}
      initial="hidden"
      animate={isMount ? 'visible' : undefined}
      whileInView={!isMount ? 'visible' : undefined}
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

export default function Header() {
  const { language, setLanguage, t: tr } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isBookedSuccess, setIsBookedSuccess] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const lastScrollYRef = React.useRef(0);

  // Read scroll and window dimensions using React's native useSyncExternalStore
  const scrollY = useSyncExternalStore(subscribeScroll, getScrollSnapshot, () => 0);
  const windowWidth = useSyncExternalStore(subscribeResize, getWindowWidthSnapshot, () => 1200);
  const windowHeight = useSyncExternalStore(subscribeResize, getWindowHeightSnapshot, () => 800);

  // Continuous scroll interpolation calculations
  const scrollThreshold = Math.min(500, Math.max(280, (windowHeight || 800) * 0.55));
  const t = Math.min(1, Math.max(0, scrollY / scrollThreshold));
  const isOtherSection = scrollY > scrollThreshold * 0.95;

  // Track scroll direction for other sections
  useEffect(() => {
    const handleDirectionScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollYRef.current;
      const heroThreshold = Math.min(500, Math.max(280, (windowHeight || 800) * 0.65));

      // Always show navigation when at or near the hero section
      if (currentY <= heroThreshold) {
        setIsNavHidden(false);
      } else {
        // In other sections:
        // Scrolling down (diff > 4) -> show navigation and middle SVG
        // Scrolling up (diff < -4) -> hide navigation and middle SVG
        if (diff > 4) {
          setIsNavHidden(false);
        } else if (diff < -4) {
          setIsNavHidden(true);
        }
      }
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleDirectionScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleDirectionScroll);
  }, [windowHeight]);

  // Continuous dimensions & coordinates for Name SVG:
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  // Exact horizontal padding matching selected div container (px-6=48px, md:px-12=96px, lg:px-[90px]=180px)
  const containerPadding = isMobile ? 48 : (isTablet ? 96 : 180);
  const heroWidth = Math.max(280, windowWidth - containerPadding);
  // Refined proportional height for the brand watermark to prevent taking up excessive vertical screen space
  const heroHeight = Math.min(isMobile ? 54 : (isTablet ? 78 : 110), Math.max(42, heroWidth / 7.6));

  // Dynamic content measurement to guarantee the watermark NEVER collides or overlaps with the button in any language
  const middleContentRef = useRef<HTMLDivElement>(null);
  const [contentBottom, setContentBottom] = useState(480);

  useEffect(() => {
    if (middleContentRef.current) {
      const calculatedBottom = middleContentRef.current.offsetTop + middleContentRef.current.offsetHeight;
      setContentBottom(Math.max(420, calculatedBottom));
    }
  }, [language, windowWidth, windowHeight]);

  // Starting coordinate (at bottom of header, with guaranteed safe spacing below the button)
  const bottomPadding = isMobile ? 12 : 24;
  const safeTopFromContent = contentBottom + (isMobile ? 20 : 32);
  const naturalBottomTop = windowHeight - heroHeight - bottomPadding;
  const initialTop = Math.max(safeTopFromContent, naturalBottomTop);

  // Target coordinate (middle alignment of fixed top navbar, with smaller height as requested)
  const navBarHeight = isMobile ? 56 : 64;
  const targetHeight = isMobile ? 18 : 22; // Sleek and compact in the navbar
  const targetWidth = targetHeight * 5.188;
  const targetTop = (navBarHeight - targetHeight) / 2;

  // Continuous travel from bottom to top with continuous reduction in size
  const currentTop = initialTop + (targetTop - initialTop) * t;
  const currentHeight = heroHeight + (targetHeight - heroHeight) * t;
  const currentWidth = heroWidth + (targetWidth - heroWidth) * t;
  
  // Form State
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: 'Corporate & Business Law',
    date: '',
    time: '10:00 AM',
    notes: ''
  });

  // Handle escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsBookingOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageBody = `New Legal Consultation Request from Website:
• Name: ${bookingData.name}
• Email: ${bookingData.email}
• Phone: ${bookingData.phone || 'N/A'}
• Service Needed: ${bookingData.practiceArea}
• Preferred Date: ${bookingData.date || 'Flexible'} (${bookingData.time})
• Message: ${bookingData.notes || 'N/A'}`;

    const whatsappUrl = `https://wa.me/995599277794?text=${encodeURIComponent(messageBody)}`;
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Could not open WhatsApp window:', err);
    }

    setIsBookedSuccess(true);
    setTimeout(() => {
      setIsBookedSuccess(false);
      setIsBookingOpen(false);
      setBookingData({
        name: '',
        email: '',
        phone: '',
        practiceArea: 'Corporate & Business Law',
        date: '',
        time: '10:00 AM',
        notes: ''
      });
    }, 2800);
  };

  return (
    <>
      {/* Self-contained Google Fonts & Styling for standalone copy-paste */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter+Tight:wght@400;500;600;700&display=swap');
        .font-antonio { font-family: 'Antonio', sans-serif !important; }
        .font-inter-tight { font-family: 'Inter Tight', sans-serif !important; }
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif !important; }
      `}</style>

      <header className="relative w-full min-h-screen bg-[#0C0D0D] text-[#FAFAFB] flex flex-col justify-between overflow-hidden select-none pb-6 sm:pb-8 lg:pb-12">
      {/* Background Image Layer with Cinematic Dark Moody Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/.tempmediaStorage/HERO_GUBE.jpeg"
          alt="Giorgi Gubeladze - Senior Business Lawyer"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover object-top lg:object-[center_20%] brightness-[0.88] contrast-[1.05]"
        />
        {/* Subtle Vignette & Gradient Overlays for optimal typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0D] via-transparent to-[#0C0D0D]/60 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D0D]/90 via-[#0C0D0D]/50 to-transparent opacity-95 lg:opacity-85" />
        
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D3AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Outer Viewport Container - Full Width with specific padding */}
      <div 
        className="relative z-10 w-full max-w-full h-full min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-[90px] box-border"
        style={{ paddingTop: '8px', paddingBottom: '16px' }}
      >
        
        {/* ================= TOP NAVIGATION ROW ================= */}
        <div 
          className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-[90px] h-14 md:h-16 flex flex-row justify-between items-center transition-all duration-300 ${
            isOtherSection 
              ? 'bg-[#0C0D0D]/40 backdrop-blur-md border-b border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.25)]' 
              : 'bg-transparent border-0 border-none shadow-none'
          }`}
          style={{ 
            transform: isNavHidden && isOtherSection ? 'translateY(-110%)' : 'translateY(0)',
            opacity: isNavHidden && isOtherSection ? 0 : 1,
            pointerEvents: isNavHidden && isOtherSection ? 'none' : 'auto',
          }}
        >
          {/* Left: Icon on Desktop, Icon + Name SVG on Tablet & Mobile */}
          <div 
            className="cursor-pointer flex items-center group shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95 gap-2.5 sm:gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="GLC Law Company - Back to Top"
            aria-label="Back to Top"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 relative flex items-center justify-center shrink-0">
              <Image 
                src="https://cdn.jiro.build/Alex/All%20SVG/nav%20left%20top%20icon.svg"
                alt="GLC Law Company"
                width={36}
                height={36}
                priority
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Tablet & Mobile: Name placed directly to the right of the icon */}
            <div className="flex lg:hidden items-center h-5 sm:h-6 md:h-7 w-auto max-w-[140px] sm:max-w-[200px] md:max-w-[240px]">
              <span className="font-antonio font-bold tracking-tight text-[#D3AF37] uppercase text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                GLC Law Company
              </span>
            </div>
          </div>

          {/* Right: Language Selector & Menu button */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
            {/* Multi-language Selector (4 Languages: ENG, GEO, RUS, TUR) */}
            <div className="relative flex items-center">
              {/* Desktop & Tablet: Segmented Pill */}
              <div className="hidden sm:inline-flex items-center p-0.5 rounded-full border border-[#D3AF37]/30 bg-black/40 backdrop-blur-md shadow-sm">
                {(['ENG', 'GEO', 'RUS', 'TUR'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={`px-2.5 py-1 text-xs font-semibold tracking-wider transition-all duration-200 rounded-full cursor-pointer ${
                      language === lang
                        ? 'bg-gradient-to-r from-[#FDE99A] via-[#E2C359] to-[#CDA12B] text-black shadow-[0_2px_10px_rgba(211,175,55,0.35)]'
                        : 'text-[#D3AF37]/80 hover:text-[#D3AF37] hover:bg-[#D3AF37]/10'
                    }`}
                    aria-label={`Select language ${lang}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Mobile: Compact Dropdown Button */}
              <div className="sm:hidden relative">
                <button
                  type="button"
                  onClick={() => setIsLangDropdownOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#D3AF37]/30 bg-black/40 text-[#D3AF37] hover:bg-[#D3AF37]/10 text-xs font-semibold tracking-wider transition-all"
                  aria-label="Change Language"
                >
                  <Globe className="w-3.5 h-3.5 text-[#D3AF37]" />
                  <span>{language}</span>
                  <ChevronDown className={`w-3 h-3 text-[#D3AF37] transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-28 rounded-xl bg-[#121213]/95 backdrop-blur-xl border border-[#D3AF37]/30 shadow-2xl py-1 z-50 flex flex-col"
                    >
                      {(['ENG', 'GEO', 'RUS', 'TUR'] as const).map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => {
                            setLanguage(lang);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`px-3 py-1.5 text-xs text-left font-semibold tracking-wider flex items-center justify-between transition-colors ${
                            language === lang
                              ? 'text-[#D3AF37] bg-[#D3AF37]/15'
                              : 'text-white/70 hover:text-[#D3AF37] hover:bg-[#D3AF37]/10'
                          }`}
                        >
                          <span>{lang}</span>
                          {language === lang && <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37]" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Menu text + Menu icon */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-row items-center gap-2 md:gap-3 cursor-pointer group py-2 px-3 rounded-md focus:outline-none shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label="Open Navigation Menu"
            >
              <span className="font-antonio font-bold text-xl md:text-[22px] leading-none tracking-[-0.02em] text-[#FFFEFE]/90 group-hover:text-[#D3AF37] transition-colors">
                {tr.nav.menu}
              </span>
              <div className="w-6 h-6 flex items-center justify-center relative">
                {/* Menu Icon Frame with Gold Accent */}
                <div className="w-full h-[14px] border-y-[2.33px] border-[#D3AF37] flex items-center justify-center group-hover:border-white transition-colors">
                  <div className="w-full h-[2px] bg-[#D3AF37] group-hover:bg-white transition-colors" />
                </div>
              </div>
            </button>
          </div>
        </div>


        {/* ================= MIDDLE CONTENT ROW ================= */}
        <div 
          ref={middleContentRef}
          className="w-full mt-16 sm:mt-20 md:mt-22 lg:mt-24 mb-auto pt-2 pb-6 md:pb-8 lg:pb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12"
          style={{
            opacity: Math.max(0, 1 - scrollY / 350),
            transform: scrollY > 0 ? `translateY(-${Math.min(80, scrollY * 0.2)}px)` : 'none',
          }}
        >
          
          {/* Left Text Block */}
          <motion.div 
            layout="position"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-5 sm:gap-6 md:gap-7 max-w-full lg:max-w-[620px]"
          >
            {/* Main Title */}
            <h1 className="font-inter-tight font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] leading-[1.22] pb-1 tracking-tight text-[#FFFEFE]">
              <BlurWaveText text={tr.hero.mainTitle} delay={0.15} triggerMode="mount" />
            </h1>

            {/* Subheading Row */}
            <div className="flex flex-row items-start gap-3.5 sm:gap-4 max-w-[560px]">
              {/* Pillar Icon Frame */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 relative flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-[#D3AF37]"
                >
                  {/* Classical Greek Pillars / Legal Columns Vector */}
                  <rect x="3" y="2" width="18" height="3" rx="0.5" fill="#D3AF37" />
                  <rect x="4" y="6" width="16" height="2" rx="0.5" fill="#D3AF37" />
                  <path d="M6 9V18M10 9V18M14 9V18M18 9V18" stroke="#D3AF37" strokeWidth="2" strokeLinecap="round" />
                  <rect x="4" y="19" width="16" height="3" rx="0.5" fill="#D3AF37" />
                </svg>
              </div>

              {/* Subheading Text */}
              <p className="font-inter-tight font-normal text-xs sm:text-sm lg:text-[15px] leading-[1.6] text-[#FFFEFE]/85">
                {tr.hero.subheading}
              </p>
            </div>

            {/* Primary Consultation Booking CTA Button - Structured with Flexbox with safe gap & relative positioning */}
            <div className="w-full sm:w-auto pt-2 pb-1 relative z-20">
              <motion.div 
                layout="position"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex items-center py-2.5 px-4 sm:py-3 sm:px-6 gap-3 bg-[#030405]/90 hover:bg-[#030405] border border-[#D3AF37]/60 hover:border-[#D3AF37] shadow-[0px_8px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(211,175,55,0.15)] rounded-xl sm:rounded-2xl cursor-pointer pointer-events-auto transition-all duration-300 group select-none"
              >
                {/* White Square Icon Box */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#D3AF37] transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#030405] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>

                {/* Button Label in Antonio Google Font */}
                <span className="font-antonio font-bold text-base sm:text-xl md:text-2xl leading-tight tracking-[-0.02em] text-[#D3AF37] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {tr.hero.bookConsultation}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Card Block (Bar Association Member Badge) */}
          <motion.div 
            initial={{ opacity: 0, x: 140 }}
            animate={{ 
              opacity: scrollY > 260 ? 0 : 1, 
              x: scrollY > 260 ? 140 : 0 
            }}
            transition={{ 
              duration: 1.0, 
              delay: scrollY > 260 ? 0 : 0.25, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="hidden sm:flex w-[224px] min-h-[230px] p-5 bg-[#0C0D0D]/75 backdrop-blur-md border border-[#D3AF37]/80 rounded-[8px] flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:border-[#D3AF37] transition-all duration-300"
          >
            {/* Header / Gold Laurel & Scales Icon */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#D3AF37]/10 flex items-center justify-center border border-[#D3AF37]/30 text-[#D3AF37] group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                  {/* Scales of Justice in Wreath */}
                  <path d="M24 10V34M16 16H32M16 16L11 26H21L16 16ZM32 16L27 26H37L32 16Z" stroke="#D3AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 38C8 34 8 26 12 20M36 38C40 34 40 26 36 20" stroke="#D3AF37" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center">
                {tr.hero.memberBadge ? (
                  <span className="text-[12px] uppercase tracking-[0.2em] font-semibold text-[#FAFAFB]/60 font-inter-tight">
                    {tr.hero.memberBadge}
                  </span>
                ) : null}
                <span className="font-antonio font-bold text-[16px] sm:text-[18px] tracking-wider text-[#D3AF37] uppercase leading-snug">
                  {tr.hero.barAssociation}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#D3AF37]/20 my-2" />

            {/* List */}
            <ul className="space-y-2 py-1 text-[#FFFEFE]/80 font-inter-tight font-medium flex flex-col justify-between">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37] shrink-0" />
                <span className="text-[14px] sm:text-[15px] leading-snug whitespace-nowrap">{tr.hero.badgePillars[0]}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37] shrink-0" />
                <span className="text-[14px] sm:text-[15px] leading-snug whitespace-nowrap">{tr.hero.badgePillars[1]}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37] shrink-0" />
                <span className="text-[14px] sm:text-[15px] leading-snug whitespace-nowrap">{tr.hero.badgePillars[2]}</span>
              </li>
            </ul>
          </motion.div>

        </div>


        {/* ================= TABLET & MOBILE BOTTOM ROW (STAYS AT BOTTOM, NEVER TRAVELS TO TOP ON SCROLL) ================= */}
        <div className="block lg:hidden w-full relative z-20 pb-4 sm:pb-6 md:pb-8 pt-2 select-none">
          <div className="relative w-full flex flex-col items-center justify-center">
            {/* Giant Typography / Name Vector */}
            <div 
              className="w-full flex items-center justify-center"
              style={{
                width: '100%',
                maxWidth: `${heroWidth}px`,
                height: `${heroHeight}px`,
              }}
            >
              <span 
                className="font-antonio font-bold tracking-tighter text-[#D3AF37] uppercase leading-none block select-none whitespace-nowrap text-center"
                style={{
                  fontSize: `${Math.max(26, heroHeight * 0.72)}px`,
                }}
              >
                GLC Law Company
              </span>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP BOTTOM ROW (CONTINUOUS TRAVEL TO NAVBAR ON SCROLL) ================= */}
        <div 
          className="hidden lg:flex fixed left-0 right-0 z-50 items-center justify-center pointer-events-none"
          style={{
            top: `${currentTop}px`,
            height: `${currentHeight}px`,
            transform: isNavHidden && isOtherSection ? 'translateY(-140px)' : 'none',
            opacity: isNavHidden && isOtherSection ? 0 : 1,
            transition: isOtherSection ? 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease' : 'none',
          }}
        >
          {/* Giant Typography / Name Vector Container */}
          <div 
            onClick={() => {
              if (t > 0.8) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center justify-center transition-transform ${
              t > 0.8 
                ? 'pointer-events-auto cursor-pointer hover:scale-105' 
                : 'pointer-events-none'
            }`}
            style={{
              width: `${currentWidth}px`,
              height: `${currentHeight}px`,
              maxWidth: '100%',
            }}
          >
            <span 
              className="font-antonio font-bold tracking-tighter text-[#D3AF37] uppercase leading-none block select-none whitespace-nowrap text-center"
              style={{
                fontSize: `${Math.max(18, currentHeight * 0.7)}px`,
              }}
            >
              GLC Law Company
            </span>
          </div>
        </div>

      </div>


      {/* ================= FULLSCREEN MENU MODAL / DRAWER ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#0C0D0D]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="w-full max-w-[1420px] mx-auto flex justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#D3AF37]" />
                <span className="font-antonio font-bold text-2xl tracking-wider text-[#D3AF37]">
                  GLC LAW COMPANY
                </span>
              </div>

              {/* Multi-language Selector & Close Button */}
              <div className="flex items-center gap-2.5 sm:gap-4">
                <div className="flex items-center p-0.5 rounded-full border border-[#D3AF37]/30 bg-black/40 backdrop-blur-md">
                  {(['ENG', 'GEO', 'RUS', 'TUR'] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLanguage(lang)}
                      className={`px-2 sm:px-3 py-1 text-xs font-semibold tracking-wider transition-all duration-200 rounded-full cursor-pointer ${
                        language === lang
                          ? 'bg-gradient-to-r from-[#FDE99A] via-[#E2C359] to-[#CDA12B] text-black shadow-[0_2px_10px_rgba(211,175,55,0.35)]'
                          : 'text-[#D3AF37]/80 hover:text-[#D3AF37] hover:bg-[#D3AF37]/10'
                      }`}
                      aria-label={`Switch to ${lang}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D3AF37]/30 flex items-center justify-center text-white hover:border-[#D3AF37] hover:text-[#D3AF37] transition-colors shrink-0"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>
            </div>

            {/* Menu Links */}
            <div className="w-full max-w-[1420px] mx-auto my-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
                {[
                  { name: tr.nav.home, href: '#' },
                  { name: tr.nav.about, href: '#about' },
                  { name: tr.nav.services, href: '#services' },
                  { name: tr.nav.cases, href: '#cases' },
                  { name: tr.nav.testimonials, href: '#testimonials' },
                  { name: tr.nav.team, href: '#team' },
                  { name: tr.nav.blogs, href: '#blogs' },
                  { name: tr.nav.contact, href: '#contact' },
                ].map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx + 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-antonio font-bold text-3xl sm:text-5xl lg:text-6xl text-[#FAFAFB] hover:text-[#D3AF37] transition-colors flex items-center justify-between group py-1 border-b border-white/5"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-[#D3AF37] transition-all" />
                  </motion.a>
                ))}
              </div>

              {/* Contact Info Sidebar in Menu */}
              <div className="lg:col-span-5 bg-[#151415] border border-[#D3AF37]/20 rounded-2xl p-8 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-[#D3AF37] uppercase font-inter-tight block mb-2">
                    {tr.nav.officeHeadquarters}
                  </span>
                  <h3 className="font-antonio text-2xl font-bold text-white mb-4">
                    GLC LAW COMPANY
                  </h3>
                  <div className="space-y-4 text-sm text-gray-300 font-inter-tight">
                    <a
                      href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&name=Georgia%2C+Batumi%2C+Kutaisi+str%2C+office+%2331%2C+Batumi%2C+Georgia%2C+6000&mkt=en-US&FORM=FBKPL1&q=41.649%2C+41.6436&cp=41.648998%7E41.643600&lvl=4&style=r"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 hover:text-[#D3AF37] transition-colors group/map"
                    >
                      <MapPin className="w-5 h-5 text-[#D3AF37] shrink-0 mt-0.5 group-hover/map:scale-110 transition-transform" />
                      <span>{tr.nav.address}</span>
                    </a>
                    <a
                      href="tel:+995599277794"
                      className="flex items-center gap-3 hover:text-[#D3AF37] transition-colors"
                    >
                      <Phone className="w-5 h-5 text-[#D3AF37] shrink-0" />
                      <span>+995 599 27 77 94</span>
                    </a>
                    <a
                      href="mailto:lawyergiorgigubeladze@gmail.com"
                      className="flex items-center gap-3 hover:text-[#D3AF37] transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#D3AF37] shrink-0" />
                      <span>lawyergiorgigubeladze@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsBookingOpen(true);
                    }}
                    className="w-full py-4 bg-[#D3AF37] hover:bg-[#b9962e] text-black font-antonio font-bold text-xl uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{tr.nav.scheduleConsultation}</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer inside Menu */}
            <div className="w-full max-w-[1420px] mx-auto text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6 font-inter-tight">
              <p>{tr.nav.rightsReserved}</p>
              <p className="text-gray-400">{tr.nav.attorneyNotice}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ================= BOOK CONSULTATION MODAL ================= */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#0C0D0D] border border-[#D3AF37]/50 rounded-2xl p-6 sm:p-8 text-[#FAFAFB] shadow-[0_25px_60px_rgba(0,0,0,0.9)] my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close Booking Modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-[#D3AF37] font-antonio font-bold text-sm tracking-wider uppercase mb-1">
                  <Award className="w-4 h-4" />
                  <span>{tr.hero.confidentialSession}</span>
                </div>
                <h2 className="font-antonio font-bold text-3xl sm:text-4xl text-white">
                  {tr.hero.bookConsultation}
                </h2>
                <p className="text-sm text-gray-400 font-inter-tight mt-1">
                  {tr.hero.modalSubtitle}
                </p>
              </div>

              {/* Form or Success State */}
              {isBookedSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D3AF37]/20 border-2 border-[#D3AF37] text-[#D3AF37] flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-antonio font-bold text-3xl text-white">
                    {tr.hero.requestReceived}
                  </h3>
                  <p className="text-sm text-gray-300 font-inter-tight max-w-md">
                    {tr.hero.requestReceivedDesc}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4 font-inter-tight">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      {tr.hero.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Vance"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171717] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D3AF37] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                        {tr.hero.workEmailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vance@corporation.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#171717] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D3AF37] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                        {tr.hero.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#171717] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D3AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      {tr.hero.practiceAreaLabel}
                    </label>
                    <select
                      value={bookingData.practiceArea}
                      onChange={(e) => setBookingData({ ...bookingData, practiceArea: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171717] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#D3AF37] transition-colors"
                    >
                      <option value="Corporate & Business Law">{tr.hero.options.corporate}</option>
                      <option value="Mergers & Acquisitions">{tr.hero.options.ma}</option>
                      <option value="Commercial Litigation">{tr.hero.options.litigation}</option>
                      <option value="Intellectual Property">{tr.hero.options.ip}</option>
                      <option value="Regulatory Compliance">{tr.hero.options.regulatory}</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#D3AF37]" />
                        <span>{tr.hero.preferredDateLabel}</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full px-4 py-3 bg-[#171717] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#D3AF37] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#D3AF37]" />
                        <span>{tr.hero.preferredTimeLabel}</span>
                      </label>
                      <select
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full px-4 py-3 bg-[#171717] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#D3AF37] transition-colors"
                      >
                        <option value="09:00 AM">09:00 AM EST</option>
                        <option value="10:30 AM">10:30 AM EST</option>
                        <option value="01:30 PM">01:30 PM EST</option>
                        <option value="03:30 PM">03:30 PM EST</option>
                        <option value="05:00 PM">05:00 PM EST</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                      {tr.hero.caseSummaryLabel}
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Provide key details regarding your business or legal inquiry..."
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171717] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D3AF37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-4 bg-[#D3AF37] hover:bg-[#c3a130] text-[#0C0D0D] font-antonio font-bold text-xl uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_5px_20px_rgba(211,175,55,0.3)] hover:shadow-[0_8px_30px_rgba(211,175,55,0.5)] cursor-pointer"
                  >
                    {tr.hero.confirmScheduleBtn}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      </header>

      {/* Second Section: Brand Logos Marquee + Refined Legal Authority Hierarchy */}
      <section className="relative w-full bg-[#0C0D0D] text-[#FAFAFB] py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D3AF37]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        {/* Top Running Brand Logos (Right to Left Marquee) */}
        <div className="relative w-full overflow-hidden mb-10 sm:mb-14">
          {/* Soft edge fade masks for high-end cinematic feel */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0C0D0D] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0C0D0D] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 28,
                ease: 'linear',
              },
            }}
            className="flex flex-row items-center gap-12 sm:gap-16 md:gap-24 w-max whitespace-nowrap will-change-transform"
          >
            {duplicatedLogos.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center gap-2.5 sm:gap-3 text-white/50 hover:text-[#D3AF37] transition-colors duration-300 group cursor-default select-none"
              >
                <span className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-white/60 group-hover:text-[#D3AF37]">
                  {brand.icon}
                </span>
                <span className="font-inter-tight font-medium text-base sm:text-lg md:text-xl tracking-tight text-white/60 group-hover:text-white transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Content Container - Compact and Well-Proportioned Typography Hierarchy */}
        <div className="relative z-10 max-w-[1080px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col items-center text-center">
          
          {/* 1. Sub-line / Area Callout: Relatively smaller and refined */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(14px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D3AF37]/10 border border-[#D3AF37]/30 text-[#D3AF37] text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase font-inter-tight mb-4 sm:mb-5 shadow-xs select-none will-change-[transform,opacity,filter]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37]" />
            <span>{tr.hero.section2Subline || 'სამოქალაქო და ადმინისტრაციული დავები'}</span>
          </motion.div>

          {/* 2. Lead Header: Prominent, elegant and scroll-triggered blur/fade text reveal */}
          <h2 className="font-antonio font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight uppercase text-white leading-[1.2] max-w-[880px] mb-4 sm:mb-5">
            <BlurWaveText
              text={tr.hero.section2Badge || 'სისხლის სამართალში 2005 წლიდან'}
              delay={0.08}
              triggerMode="scroll"
            />
          </h2>

          {/* Decorative Gold Accent Bar */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-14 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D3AF37] to-transparent mb-4 sm:mb-5"
          />

          {/* 3. Narrative Tagline: Fluid scroll-triggered text reveal */}
          <p className="font-inter-tight font-normal text-sm sm:text-base md:text-lg text-white/75 max-w-[740px] leading-[1.65] sm:leading-[1.75] tracking-normal">
            <BlurWaveText
              text={tr.hero.section2Tagline || tr.hero.trustParagraph}
              delay={0.15}
              triggerMode="scroll"
            />
          </p>
        </div>
      </section>
    </>
  );
}
