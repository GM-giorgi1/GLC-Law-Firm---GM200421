'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Menu, 
  ShieldCheck, 
  ChevronRight, 
  Calendar,
  Globe,
  ChevronDown,
  Scale,
  Building2,
  Users,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import ConsultationModal from '@/src/components/common/ConsultationModal';
import { scrollToSection } from '@/src/utils/scrollToSection';

export default function GlobalNavbar() {
  const { language, setLanguage, t: tr } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);

  const isHomePage = location.pathname === '/' || location.pathname === '';
  const langDropdownRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    if (isLangDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isLangDropdownOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLangDropdownOpen(false);
    setIsPracticeDropdownOpen(false);
  }, [location.pathname]);

  // Smooth scroll handler for anchor links across homepage and subpages
  const handleAnchorNavigation = (sectionId: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);
    setIsPracticeDropdownOpen(false);

    if (isHomePage) {
      if (!scrollToSection(sectionId)) {
        setTimeout(() => scrollToSection(sectionId), 120);
      }
    } else {
      try {
        sessionStorage.setItem('scroll_target', sectionId);
        navigate('/');
      } catch {
        navigate(`/#${sectionId}`);
      }
    }
  };

  return (
    <>
      <header
        data-global-navbar="true"
        className={`fixed top-0 left-0 right-0 w-full z-[80] transition-all duration-300 backdrop-blur-xl bg-[#030508]/85 border-b border-[#D3AF37]/20 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_1px_15px_rgba(211,175,55,0.08)] ${
          isScrolled || !isHomePage ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* ================= 1. LEFT: Brand Logo & Title ================= */}
          <Link
            to="/"
            onClick={() => {
              if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 xl:flex-initial select-none cursor-pointer group"
            aria-label="GLC Law Company Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1C1C1E] to-[#0B0B0C] border border-[#D3AF37]/50 shadow-[0_0_15px_rgba(211,175,55,0.15)] group-hover:border-[#D3AF37] group-hover:shadow-[0_0_20px_rgba(211,175,55,0.3)] transition-all shrink-0">
              <Image
                src="https://cdn.jiro.build/Alex/All%20SVG/nav%20left%20top%20icon.svg"
                alt="GLC Law Company"
                width={26}
                height={26}
                priority
                referrerPolicy="no-referrer"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-['Antonio'] font-bold text-sm sm:text-lg lg:text-xl tracking-wider uppercase text-white group-hover:text-[#D3AF37] transition-colors leading-none truncate">
                GLC LAW COMPANY
              </span>
              <span className="text-[9.5px] sm:text-[11px] text-[#D3AF37]/80 tracking-wider sm:tracking-widest uppercase font-inter-tight font-medium mt-0.5 truncate">
                {language === 'GEO'
                  ? 'ადვოკატი გიორგი გუბელაძე'
                  : language === 'RUS'
                    ? 'Адвокат Георгий Губеладзе'
                    : language === 'TUR'
                      ? 'Avukat Giorgi Gubeladze'
                      : 'Advocate Giorgi Gubeladze'}
              </span>
            </div>
          </Link>

          {/* ================= 2. CENTER: Main Navigation Links (Desktop) ================= */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-5 shrink-0 whitespace-nowrap">
            {/* 1. Home Link */}
            <Link
              to="/"
              onClick={() => {
                if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xs 2xl:text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 px-1 relative ${
                isHomePage ? 'text-[#D3AF37] font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{tr.nav.home}</span>
              {isHomePage && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#D3AF37] rounded-full shadow-[0_0_8px_#D3AF37]" />
              )}
            </Link>

            {/* 2. About Link -> Metrics section ("You deserve counsel that fights for you") */}
            <a
              href="/#metrics"
              onClick={(e) => handleAnchorNavigation('metrics', e)}
              className="text-xs 2xl:text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors duration-200 py-1.5 px-1 cursor-pointer"
            >
              {tr.nav.about}
            </a>

            {/* 3. Practice Areas Interactive Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPracticeDropdownOpen(true)}
              onMouseLeave={() => setIsPracticeDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsPracticeDropdownOpen((prev) => !prev)}
                className={`text-xs 2xl:text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 px-1 inline-flex items-center gap-1 cursor-pointer ${
                  location.pathname.startsWith('/practice-areas')
                    ? 'text-[#D3AF37] font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-expanded={isPracticeDropdownOpen}
              >
                <span>{tr.nav.services}</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-75 transition-transform duration-200 ${isPracticeDropdownOpen ? 'rotate-180 text-[#D3AF37]' : ''}`} />
              </button>

              <AnimatePresence>
                {isPracticeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-84 z-50 pointer-events-auto"
                  >
                    <div className="p-3 bg-[#0E0E10]/98 border border-[#D3AF37]/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-2xl flex flex-col gap-1.5">
                      
                      {/* Dropdown Category Header */}
                      <div className="px-2.5 py-1 text-[11px] font-semibold text-[#D3AF37] uppercase tracking-wider flex items-center justify-between border-b border-white/5">
                        <span>
                          {language === 'GEO'
                            ? 'სპეციალიზებული პრაქტიკა'
                            : language === 'RUS'
                              ? 'Специализация'
                              : language === 'TUR'
                                ? 'Uzmanlık Alanları'
                                : 'Practice Areas'}
                        </span>
                      </div>

                      {/* Option 0: All Services Overview on Homepage */}
                      <a
                        href="/#services"
                        onClick={(e) => handleAnchorNavigation('services', e)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item text-left w-full cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#D3AF37]/15 flex items-center justify-center text-[#D3AF37] shrink-0">
                            <Scale className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                              {language === 'GEO' ? 'სამართლის ყველა სფერო' : language === 'ENG' ? 'All Practice Areas Overview' : language === 'RUS' ? 'Все практики и услуги' : 'Tüm Hukuki Alanlar'}
                            </div>
                            <div className="text-[10px] text-gray-400">
                              {language === 'GEO'
                                ? 'სრული მომსახურების მიმოხილვა'
                                : language === 'RUS'
                                  ? 'Полный обзор услуг'
                                  : language === 'TUR'
                                    ? 'Tüm hizmetlere genel bakış'
                                    : 'Full Services Overview'}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </a>

                      <div className="w-full h-px bg-white/10 my-0.5" />

                      {/* 1. Criminal Defense */}
                      <Link
                        to="/practice-areas/criminal-defense"
                        onClick={() => setIsPracticeDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#D3AF37]/15 flex items-center justify-center text-[#D3AF37] shrink-0">
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                              {language === 'GEO'
                                ? 'სისხლის სამართალი'
                                : language === 'RUS'
                                  ? 'Уголовное право'
                                  : language === 'TUR'
                                    ? 'Ceza Hukuku'
                                    : 'Criminal Defense'}
                            </div>
                            <div className="text-[10px] text-gray-400">
                              {language === 'GEO'
                                ? '21+ წლიანი გამოცდილება'
                                : language === 'RUS'
                                  ? 'Защита на следствии и в суде'
                                  : language === 'TUR'
                                    ? 'Soruşturma ve Dava Savunması'
                                    : 'Trial & Investigation Defense'}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </Link>

                      {/* 2. Family Law */}
                      <Link
                        to="/practice-areas/family-law"
                        onClick={() => setIsPracticeDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#D3AF37]/15 flex items-center justify-center text-[#D3AF37] shrink-0">
                            <Users className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                              {language === 'GEO'
                                ? 'საოჯახო & მემკვიდრეობა'
                                : language === 'RUS'
                                  ? 'Семейное право и наследство'
                                  : language === 'TUR'
                                    ? 'Aile ve Miras Hukuku'
                                    : 'Family & Inheritance'}
                            </div>
                            <div className="text-[10px] text-gray-400">
                              {language === 'GEO'
                                ? 'ქონების გაყოფა და დავები'
                                : language === 'RUS'
                                  ? 'Раздел имущества и наследство'
                                  : language === 'TUR'
                                    ? 'Mal Paylaşımı ve Miras'
                                    : 'Asset Division & Probate'}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </Link>

                      {/* 3. Real Estate Law */}
                      <Link
                        to="/practice-areas/real-estate-law"
                        onClick={() => setIsPracticeDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#D3AF37]/15 flex items-center justify-center text-[#D3AF37] shrink-0">
                            <Building2 className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                              {language === 'GEO'
                                ? 'უძრავი ქონება & კონტრაქტები'
                                : language === 'RUS'
                                  ? 'Недвижимость и контракты'
                                  : language === 'TUR'
                                    ? 'Gayrimenkul ve Sözleşmeler'
                                    : 'Real Estate & Contracts'}
                            </div>
                            <div className="text-[10px] text-gray-400">
                              {language === 'GEO'
                                ? 'Due Diligence & გარიგებები'
                                : language === 'RUS'
                                  ? 'Аудит сделок и регистрация'
                                  : language === 'TUR'
                                    ? 'Tapu İncelemesi ve Tescil'
                                    : 'Title Audits & Closings'}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </Link>

                      {/* 4. Corporate Law */}
                      <Link
                        to="/practice-areas/corporate-law"
                        onClick={() => setIsPracticeDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#D3AF37]/15 flex items-center justify-center text-[#D3AF37] shrink-0">
                            <Briefcase className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                              {language === 'GEO'
                                ? 'ბიზნესი & კორპორაციული'
                                : language === 'RUS'
                                  ? 'Бизнес и корпоративное право'
                                  : language === 'TUR'
                                    ? 'İş ve Şirketler Hukuku'
                                    : 'Business & Corporate Law'}
                            </div>
                            <div className="text-[10px] text-gray-400">
                              {language === 'GEO'
                                ? 'M&A, კომპანიების რეგისტრაცია'
                                : language === 'RUS'
                                  ? 'M&A, регистрация и споры'
                                  : language === 'TUR'
                                    ? 'M&A, Şirket Kuruluşu ve Dava'
                                    : 'M&A, Incorporation & Disputes'}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Our Team Anchor Link -> Team section ("Meet the Legal Experts") */}
            <a
              href="/#team"
              onClick={(e) => handleAnchorNavigation('team', e)}
              className="text-xs 2xl:text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors duration-200 py-1.5 px-1 cursor-pointer"
            >
              {tr.nav.team}
            </a>

            {/* 7. Blogs & Latest Insights Link */}
            <Link
              to="/blogs"
              className={`text-xs 2xl:text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 px-1 relative ${
                location.pathname.startsWith('/blogs')
                  ? 'text-[#D3AF37] font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{tr.nav.blogs}</span>
              {location.pathname.startsWith('/blogs') && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#D3AF37] rounded-full shadow-[0_0_8px_#D3AF37]" />
              )}
            </Link>
          </nav>

          {/* ================= 3. RIGHT: Language Switcher, Consultation CTA, Hamburger ================= */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Sleek Compact Language Switcher Dropdown Button (All Screen Sizes) */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setIsLangDropdownOpen((prev) => !prev)}
                className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-[#D3AF37]/45 bg-[#121214]/90 hover:bg-[#1a1a1e] hover:border-[#D3AF37] text-[#D3AF37] text-xs font-bold inline-flex items-center gap-1.5 sm:gap-2 shadow-[0_2px_12px_rgba(0,0,0,0.6)] active:scale-95 transition-all cursor-pointer group"
                aria-label="Change Language"
                aria-expanded={isLangDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#D3AF37] group-hover:rotate-45 transition-transform duration-300 shrink-0" />
                <span className="tracking-wider">{language}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#D3AF37] transition-transform duration-200 shrink-0 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className="absolute right-0 top-full mt-2 w-36 bg-[#0E0E10]/98 border border-[#D3AF37]/40 rounded-xl shadow-[0_20px_45px_rgba(0,0,0,0.9)] p-1.5 flex flex-col gap-1 z-50 backdrop-blur-2xl"
                  >
                    {([
                      { code: 'GEO', label: 'ქართული' },
                      { code: 'ENG', label: 'English' },
                      { code: 'RUS', label: 'Русский' },
                      { code: 'TUR', label: 'Türkçe' },
                    ] as const).map(({ code, label }) => {
                      const isActive = language === code;
                      return (
                        <button
                          key={code}
                          type="button"
                          onClick={() => {
                            setLanguage(code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full py-1.5 px-2.5 text-xs text-left font-semibold rounded-lg flex items-center justify-between transition-all cursor-pointer ${
                            isActive
                              ? 'bg-gradient-to-r from-[#FEF5CD] via-[#D2AE37] to-[#BA9524] text-black font-bold shadow-sm'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono tracking-wider font-bold">{code}</span>
                            <span className={`text-[10px] ${isActive ? 'text-black/80 font-medium' : 'text-gray-400'}`}>
                              {label}
                            </span>
                          </div>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Consultation CTA Button (Tablet / Desktop: md+) */}
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="saas-btn-gold hidden md:inline-flex items-center gap-2 py-2 px-3 lg:px-4 rounded-xl cursor-pointer text-xs lg:text-sm font-semibold tracking-wide text-black shadow-md whitespace-nowrap shrink-0 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-black shrink-0" />
              <span>{tr.hero.bookConsultation}</span>
            </button>

            {/* Menu Drawer Button (Available on all screen sizes so Cases & Testimonials stay accessible inside Menu) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] p-2 rounded-xl border border-[#D3AF37]/35 bg-[#141416]/95 text-white hover:text-[#D3AF37] hover:border-[#D3AF37] transition-all inline-flex items-center justify-center shrink-0 cursor-pointer relative z-10"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-[#D3AF37]" />
            </button>
          </div>

        </div>
      </header>

      {/* ================= 4. MOBILE / TABLET SLIDE-OUT DRAWER ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[110] bg-[#0A0A0B]/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-10 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] overflow-y-auto overscroll-contain"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10 sticky top-0 bg-[#0A0A0B]/95 backdrop-blur-md z-10 pt-1">
              <div className="flex items-center gap-3 min-w-0">
                <ShieldCheck className="w-7 h-7 text-[#D3AF37] shrink-0" />
                <span className="font-['Antonio'] font-bold text-xl tracking-wider text-[#D3AF37] truncate">
                  GLC LAW COMPANY
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[#D3AF37]/40 bg-[#141416] flex items-center justify-center text-white hover:text-[#D3AF37] hover:border-[#D3AF37] transition-colors cursor-pointer shrink-0"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="my-5 flex flex-col gap-2.5">
              {/* Home */}
              <Link
                to="/"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{tr.nav.home}</span>
                <ChevronRight className="w-5 h-5 text-[#D3AF37]" />
              </Link>

              {/* About Us -> Metrics section */}
              <a
                href="/#metrics"
                onClick={(e) => handleAnchorNavigation('metrics', e)}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5 text-left w-full cursor-pointer min-h-[44px]"
              >
                <span>{tr.nav.about}</span>
                <ChevronRight className="w-5 h-5 text-[#D3AF37]" />
              </a>

              {/* Practice Areas Subsection */}
              <div className="py-2.5 flex flex-col gap-2 border-b border-white/5 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#D3AF37] font-bold">
                    {tr.nav.services}
                  </span>
                  <a
                    href="/#services"
                    onClick={(e) => handleAnchorNavigation('services', e)}
                    className="text-[11px] text-[#D3AF37] hover:underline cursor-pointer"
                  >
                    {language === 'GEO'
                      ? 'ყველა სფერო'
                      : language === 'RUS'
                        ? 'Все услуги'
                        : language === 'TUR'
                          ? 'Tüm Alanlar'
                          : 'All Services'}
                  </a>
                </div>
                
                <Link
                  to="/practice-areas/criminal-defense"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm sm:text-base text-gray-200 hover:text-[#D3AF37] transition-colors pl-2 flex items-center justify-between py-2 min-h-[44px]"
                >
                  <span>
                    -{' '}
                    {language === 'GEO'
                      ? 'სისხლის სამართალი'
                      : language === 'RUS'
                        ? 'Уголовное право'
                        : language === 'TUR'
                          ? 'Ceza Hukuku'
                          : 'Criminal Defense'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="/practice-areas/family-law"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm sm:text-base text-gray-200 hover:text-[#D3AF37] transition-colors pl-2 flex items-center justify-between py-2 min-h-[44px]"
                >
                  <span>
                    -{' '}
                    {language === 'GEO'
                      ? 'საოჯახო & მემკვიდრეობითი'
                      : language === 'RUS'
                        ? 'Семейное и наследственное право'
                        : language === 'TUR'
                          ? 'Aile ve Miras Hukuku'
                          : 'Family & Inheritance'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="/practice-areas/real-estate-law"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm sm:text-base text-gray-200 hover:text-[#D3AF37] transition-colors pl-2 flex items-center justify-between py-2 min-h-[44px]"
                >
                  <span>
                    -{' '}
                    {language === 'GEO'
                      ? 'უძრავი ქონება & კონტრაქტები'
                      : language === 'RUS'
                        ? 'Недвижимость и контракты'
                        : language === 'TUR'
                          ? 'Gayrimenkul ve Sözleşmeler'
                          : 'Real Estate & Contracts'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="/practice-areas/corporate-law"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm sm:text-base text-gray-200 hover:text-[#D3AF37] transition-colors pl-2 flex items-center justify-between py-2 min-h-[44px]"
                >
                  <span>
                    -{' '}
                    {language === 'GEO'
                      ? 'ბიზნესი & კორპორაციული'
                      : language === 'RUS'
                        ? 'Бизнес и корпоративное право'
                        : language === 'TUR'
                          ? 'İş ve Şirketler Hukuku'
                          : 'Business & Corporate Law'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
              </div>

              {/* Notable Results */}
              <a
                href="/#cases"
                onClick={(e) => handleAnchorNavigation('cases', e)}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5 text-left w-full cursor-pointer min-h-[44px]"
              >
                <span>{tr.nav.cases}</span>
                <ChevronRight className="w-5 h-5 text-[#D3AF37]" />
              </a>

              {/* Testimonials */}
              <a
                href="/#testimonials"
                onClick={(e) => handleAnchorNavigation('testimonials', e)}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5 text-left w-full cursor-pointer min-h-[44px]"
              >
                <span>{tr.nav.testimonials}</span>
                <ChevronRight className="w-5 h-5 text-[#D3AF37]" />
              </a>

              {/* Our Team -> Team section */}
              <a
                href="/#team"
                onClick={(e) => handleAnchorNavigation('team', e)}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5 text-left w-full cursor-pointer min-h-[44px]"
              >
                <span>{tr.nav.team}</span>
                <ChevronRight className="w-5 h-5 text-[#D3AF37]" />
              </a>

              {/* Blogs & Latest Insights */}
              <Link
                to="/blogs"
                onClick={() => setIsMenuOpen(false)}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{tr.nav.blogs}</span>
                <ChevronRight className="w-5 h-5 text-[#D3AF37]" />
              </Link>

              {/* Consultation CTA in Drawer */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="saas-btn-gold mt-3 w-full py-3.5 px-6 rounded-xl font-['Antonio'] text-lg uppercase font-bold text-black flex items-center justify-center gap-3 cursor-pointer shadow-lg"
              >
                <Calendar className="w-5 h-5 text-black" />
                <span>{tr.hero.bookConsultation}</span>
              </button>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-white/10 text-xs text-gray-400 flex flex-col gap-1">
              <p>{tr.nav.address}</p>
              <p className="text-gray-500">{tr.nav.rightsReserved}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Booking Consultation Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
