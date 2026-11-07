'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Menu, 
  ShieldCheck, 
  ChevronRight, 
  Calendar,
  Globe,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import ConsultationModal from '@/src/components/common/ConsultationModal';

export default function GlobalNavbar() {
  const { language, setLanguage, t: tr } = useLanguage();
  const location = useLocation();
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

  const isPracticeAreaPage = location.pathname.startsWith('/practice-areas');

  const navLinks = [
    { name: tr.nav.home, href: '/' },
    { name: tr.nav.about, href: isHomePage ? '#about' : '/#about' },
    { name: tr.nav.blogs, href: '/blogs' },
    { name: tr.nav.contact, href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#030508]/75 border-b border-[#D3AF37]/20 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_1px_15px_rgba(211,175,55,0.08)] ${
          isScrolled || !isHomePage ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between gap-4">
          
          {/* ================= 1. LEFT: Brand Logo & Title ================= */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 select-none cursor-pointer group min-w-0"
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
            <div className="flex flex-col truncate">
              <span className="font-['Antonio'] font-bold text-base sm:text-lg lg:text-xl tracking-wider uppercase text-white group-hover:text-[#D3AF37] transition-colors leading-none truncate">
                GLC LAW COMPANY
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#D3AF37]/80 tracking-widest uppercase font-inter-tight font-medium mt-0.5 truncate">
                {language === 'GEO' ? 'ადვოკატი გიორგი გუბელაძე' : 'Advocate Giorgi Gubeladze'}
              </span>
            </div>
          </Link>

          {/* ================= 2. CENTER: Main Navigation Links (Desktop) ================= */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 shrink-0">
            {/* Home Link */}
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 px-1 relative ${
                isHomePage ? 'text-[#D3AF37] font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{tr.nav.home}</span>
              {isHomePage && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#D3AF37] rounded-full shadow-[0_0_8px_#D3AF37]" />
              )}
            </Link>

            {/* About Link */}
            <a
              href={isHomePage ? '#about' : '#/about'}
              className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors duration-200 py-1.5 px-1"
            >
              {tr.nav.about}
            </a>

            {/* Practice Areas Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPracticeDropdownOpen(true)}
              onMouseLeave={() => setIsPracticeDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsPracticeDropdownOpen((prev) => !prev)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 px-1 inline-flex items-center gap-1.5 cursor-pointer ${
                  location.pathname.startsWith('/practice-areas')
                    ? 'text-[#D3AF37] font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{tr.nav.services}</span>
                <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${isPracticeDropdownOpen ? 'rotate-180 text-[#D3AF37]' : ''}`} />
              </button>

              <AnimatePresence>
                {isPracticeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-80 z-50 pointer-events-auto"
                  >
                    <div className="p-3 bg-[#0E0E10]/98 border border-[#D3AF37]/35 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col gap-1.5">
                      <div className="px-2.5 py-1 text-[11px] font-semibold text-[#D3AF37] uppercase tracking-wider border-b border-white/5">
                        {language === 'GEO' ? 'სპეციალიზებული პრაქტიკა' : 'Practice Areas'}
                      </div>

                      <Link
                        to="/practice-areas/criminal-defense"
                        onClick={() => setIsPracticeDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                            {language === 'GEO' ? 'სისხლის სამართალი' : 'Criminal Defense'}
                          </div>
                          <div className="text-[11px] text-gray-400 mt-0.5">
                            {language === 'GEO' ? '21+ წლიანი გამოცდილება' : 'Trial & Investigation Defense'}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </Link>

                      <Link
                        to="/practice-areas/family-law"
                        onClick={() => setIsPracticeDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                            {language === 'GEO' ? 'საოჯახო & მემკვიდრეობა' : 'Family & Inheritance'}
                          </div>
                          <div className="text-[11px] text-gray-400 mt-0.5">
                            {language === 'GEO' ? 'ქონების გაყოფა და დავები' : 'Asset Division & Probate'}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </Link>

                      <Link
                        to="/practice-areas/real-estate-law"
                        onClick={() => setIsPracticeDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                            {language === 'GEO' ? 'უძრავი ქონება & კონტრაქტები' : 'Real Estate & Contracts'}
                          </div>
                          <div className="text-[11px] text-gray-400 mt-0.5">
                            {language === 'GEO' ? 'Due Diligence & გარიგებები' : 'Title Audits & Closings'}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </Link>

                      <Link
                        to="/practice-areas/corporate-law"
                        onClick={() => setIsPracticeDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#D3AF37]/10 hover:border-[#D3AF37]/30 border border-transparent transition-all flex items-center justify-between group/item"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover/item:text-[#D3AF37] transition-colors">
                            {language === 'GEO' ? 'ბიზნესი & კორპორაციული' : 'Business & Corporate Law'}
                          </div>
                          <div className="text-[11px] text-gray-400 mt-0.5">
                            {language === 'GEO' ? 'M&A, კომპანიების რეგისტრაცია & დავები' : 'M&A, Incorporation & Disputes'}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover/item:text-[#D3AF37] group-hover/item:translate-x-0.5 transition-all" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Blogs Link */}
            <Link
              to="/blogs"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 px-1 relative ${
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

            {/* Contact Link (Hidden on Practice Area sub-pages) */}
            {!isPracticeAreaPage && (
              <a
                href={isHomePage ? '#contact' : '#/blogs#contact'}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors duration-200 py-1.5 px-1"
              >
                {tr.nav.contact}
              </a>
            )}
          </nav>

          {/* ================= 3. RIGHT: Language Switcher, Consultation CTA, Hamburger ================= */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            
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

            {/* Quick Consultation CTA Button (Desktop / Laptop: lg+) */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="saas-btn-gold hidden sm:inline-flex items-center gap-2 py-2 px-3.5 lg:px-4 rounded-xl cursor-pointer text-xs lg:text-sm font-semibold tracking-wide text-black shadow-md whitespace-nowrap shrink-0 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-black shrink-0" />
              <span>{tr.hero.bookConsultation}</span>
            </button>

            {/* Mobile / Tablet Menu Button (xl:hidden) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden p-2 rounded-xl border border-[#D3AF37]/30 bg-[#141416]/90 text-white hover:text-[#D3AF37] hover:border-[#D3AF37] transition-all flex items-center justify-center shrink-0"
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
            className="fixed inset-0 z-50 bg-[#0A0A0B]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-[#D3AF37]" />
                <span className="font-['Antonio'] font-bold text-xl tracking-wider text-[#D3AF37]">
                  GLC LAW COMPANY
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-[#D3AF37]/40 flex items-center justify-center text-white hover:text-[#D3AF37] hover:border-[#D3AF37] transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="my-6 flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{tr.nav.home}</span>
                <ChevronRight className="w-6 h-6 text-[#D3AF37]" />
              </Link>

              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{tr.nav.about}</span>
                <ChevronRight className="w-6 h-6 text-[#D3AF37]" />
              </a>

              {/* Practice Areas Subsection in Drawer */}
              <div className="py-2.5 flex flex-col gap-2.5 border-b border-white/5 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <span className="text-xs uppercase tracking-widest text-[#D3AF37] font-bold">
                  {tr.nav.services}
                </span>
                <Link
                  to="/practice-areas/criminal-defense"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base text-gray-200 hover:text-[#D3AF37] transition-colors pl-2 flex items-center justify-between"
                >
                  <span>• {language === 'GEO' ? 'სისხლის სამართალი' : 'Criminal Law'}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="/practice-areas/family-law"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base text-gray-200 hover:text-[#D3AF37] transition-colors pl-2 flex items-center justify-between"
                >
                  <span>• {language === 'GEO' ? 'საოჯახო და მემკვიდრეობითი' : 'Family & Inheritance'}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="/practice-areas/real-estate-law"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base text-gray-200 hover:text-[#D3AF37] transition-colors pl-2 flex items-center justify-between"
                >
                  <span>• {language === 'GEO' ? 'უძრავი ქონება და კონტრაქტები' : 'Real Estate & Contracts'}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
                <Link
                  to="/practice-areas/corporate-law"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base text-gray-200 hover:text-[#D3AF37] transition-colors pl-2 flex items-center justify-between"
                >
                  <span>• {language === 'GEO' ? 'ბიზნესი და კორპორაციული' : 'Business & Corporate Law'}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
              </div>

              <Link
                to="/blogs"
                onClick={() => setIsMenuOpen(false)}
                className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{tr.nav.blogs}</span>
                <ChevronRight className="w-6 h-6 text-[#D3AF37]" />
              </Link>

              {!isPracticeAreaPage && (
                <a
                  href={isHomePage ? '#contact' : '#/blogs#contact'}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-['Antonio'] uppercase text-2xl sm:text-3xl font-bold text-white hover:text-[#D3AF37] transition-colors flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span>{tr.nav.contact}</span>
                  <ChevronRight className="w-6 h-6 text-[#D3AF37]" />
                </a>
              )}

              {/* Consultation CTA in Drawer */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="saas-btn-gold mt-4 w-full py-3.5 px-6 rounded-xl font-['Antonio'] text-lg uppercase font-bold text-black flex items-center justify-center gap-3 cursor-pointer shadow-lg"
              >
                <Calendar className="w-5 h-5 text-black" />
                <span>{tr.hero.bookConsultation}</span>
              </button>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-white/10 text-xs text-gray-400 flex flex-col gap-1.5">
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
