'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import ConsultationModal from '@/src/components/common/ConsultationModal';

// Custom Facebook and TikTok icons matching brand aesthetic
function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.3 6.3 0 0 0 1.87-4.47V8.75a8.28 8.28 0 0 0 4.9 1.58V6.88a4.83 4.83 0 0 1-1-.19z" />
    </svg>
  );
}

const PHRASES = Array(8).fill(null);

export default function Footer() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: false });

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Hover & mouse tracking states for cursor-following button
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroContainerRef.current) return;
    const rect = heroContainerRef.current.getBoundingClientRect();
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    // Follow right at the cursor point (centered or close with the pointer)
    const targetX = Math.min(Math.max(10, rawX - 110), rect.width - 250);
    const targetY = Math.min(Math.max(10, rawY - 26), rect.height - 60);
    setMousePos({ x: targetX, y: targetY });
  };

  const navLinks = [
    { name: t.nav.home, href: '#/' },
    { name: t.nav.about, href: '#/about' },
    { name: t.nav.services, href: '#/practice-areas/criminal-defense' },
    { name: t.nav.blogs, href: '#/blogs' },
    { name: t.nav.contact, href: '#/contact' },
  ];

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className="relative w-full bg-[#080909] text-[#FAFAFB] pt-[85px] pb-[32px] overflow-hidden"
    >
      {/* Dynamic Keyframes for ultra-slow right-to-left marquee & Self-contained Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter+Tight:wght@400;500;600;700&display=swap');
        .font-antonio { font-family: 'Antonio', sans-serif !important; }
        .font-inter-tight { font-family: 'Inter Tight', sans-serif !important; }
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif !important; }

        @keyframes footerMarqueeAnim {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .footer-marquee-track {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          width: max-content;
          will-change: transform;
          animation: footerMarqueeAnim 220s linear infinite;
          transition: animation-duration 0.8s ease;
        }
        .footer-marquee-track.slowed {
          animation-duration: 420s;
        }
      `}</style>

      {/* Background Ambient Warm Golden Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-[#D3AF37]/[0.035] rounded-full blur-[220px] pointer-events-none" />

      {/* ================= 1. HERO AREA: MARQUEE & REDUCED HEIGHT ROTATED IMAGE ================= */}
      <motion.div
        ref={heroContainerRef}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : { opacity: 0, y: 25, filter: 'blur(10px)' }
        }
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full min-h-[360px] sm:min-h-[430px] md:min-h-[490px] lg:min-h-[540px] flex items-center justify-center overflow-hidden select-none mb-12 sm:mb-16 md:mb-20 cursor-default"
      >
        {/* ================= 2ND DIV: RUNNING MARQUEE TEXT (STRICTLY 1 LINE WITH LETTER WAVE) ================= */}
        {/* Centered vertically across the image in 1 single continuous line. Cropping allowed as requested. */}
        <div
          className={`absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none transition-opacity duration-700 whitespace-nowrap flex-nowrap ${
            isHovered ? 'opacity-25' : 'opacity-100'
          }`}
        >
          <div
            className={`footer-marquee-track flex-nowrap whitespace-nowrap ${isHovered ? 'slowed' : ''}`}
          >
            {/* Repeated twice for seamless 0% to -50% loop */}
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex flex-row items-center flex-nowrap shrink-0 whitespace-nowrap">
                {PHRASES.map((_, i) => {
                  const phraseWord1 = t.footer.marqueeWord1 || "LET'S TALK";
                  const phraseWord2 = t.footer.marqueeWord2 || "LAW";
                  return (
                    <div
                      key={`${copyIndex}-${i}`}
                      className="inline-flex flex-row items-center flex-nowrap shrink-0 whitespace-nowrap gap-5 sm:gap-7 md:gap-9 mx-5 sm:mx-7 md:mx-9"
                    >
                      {/* Word 1: LET'S TALK with individual letter wave */}
                      <span className="font-['Antonio'] text-[70px] sm:text-[105px] md:text-[145px] lg:text-[180px] xl:text-[215px] font-bold tracking-tight uppercase leading-none whitespace-nowrap shrink-0 inline-flex flex-row">
                        {phraseWord1.split('').map((char, charIdx) => (
                          <motion.span
                            key={charIdx}
                            initial={{ y: 35, opacity: 0 }}
                            animate={
                              isInView
                                ? { y: [25, -12, 0], opacity: 1 }
                                : { y: 35, opacity: 0 }
                            }
                            transition={{
                              duration: 0.7,
                              delay: isInView ? (charIdx * 0.04) : 0,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="inline-block bg-gradient-to-b from-[#FFFEFE] via-[#E9E8E9] to-[#7B7A7B] bg-clip-text text-transparent"
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </motion.span>
                        ))}
                      </span>

                      {/* Word 2: LAW with continuing letter wave */}
                      <span className="font-['Antonio'] text-[70px] sm:text-[105px] md:text-[145px] lg:text-[180px] xl:text-[215px] font-bold tracking-tight uppercase leading-none whitespace-nowrap shrink-0 inline-flex flex-row">
                        {phraseWord2.split('').map((char, charIdx) => (
                          <motion.span
                            key={charIdx}
                            initial={{ y: 35, opacity: 0 }}
                            animate={
                              isInView
                                ? { y: [25, -12, 0], opacity: 1 }
                                : { y: 35, opacity: 0 }
                            }
                            transition={{
                              duration: 0.7,
                              delay: isInView ? ((phraseWord1.length + charIdx) * 0.04) : 0,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="inline-block bg-gradient-to-r from-[#F5E08E] via-[#D3AF37] to-[#8D6D19] bg-clip-text text-transparent"
                          >
                            {char}
                          </motion.span>
                        ))}
                      </span>

                      <span className="text-[#D3AF37] text-2xl sm:text-3xl md:text-4xl font-serif shrink-0 whitespace-nowrap">
                        •
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ================= 1ST DIV: CENTERED UPRIGHT FOUNDER PHOTO & PROMINENT SYMMETRICAL CTA BUTTON ================= */}
        <motion.div 
          initial={{ y: 140, opacity: 0, scale: 0.95 }}
          animate={
            isInView
              ? { y: 0, opacity: 1, scale: 1 }
              : { y: 140, opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-col items-center justify-center mx-auto my-6"
        >
          {/* Symmetrical Upright Founder Photo without tilt */}
          <div className="relative w-[190px] h-[250px] sm:w-[240px] sm:h-[310px] md:w-[280px] md:h-[360px] lg:w-[310px] lg:h-[400px] rounded-2xl overflow-hidden bg-[#080909] shadow-[0px_20px_50px_rgba(0,0,0,0.6)] border border-white/[0.06]">
            <Image
              src="/.tempmediaStorage/GUBE1.jpeg"
              alt="Giorgi Gubeladze Legal Counsel"
              fill
              sizes="(max-width: 768px) 240px, 320px"
              className="object-cover object-top border-0 outline-none transition-transform duration-700 ease-out hover:scale-105"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Top subtle shade */}
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

            {/* Bottom minimal gradient blend preserving full portrait visibility */}
            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#080909]/80 to-transparent pointer-events-none" />
          </div>

          {/* Symmetrical, fully visible, prominent booking CTA right beneath photo */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="saas-btn-gold inline-flex items-center p-2.5 sm:p-3 pr-6 sm:pr-8 gap-3 sm:gap-4 rounded-2xl group cursor-pointer shadow-[0px_10px_35px_rgba(211,175,55,0.35)] overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#080909] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#D3AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
              <span className="font-['Antonio'] font-bold text-lg sm:text-2xl md:text-[26px] leading-tight tracking-[-0.02em] text-[#080909] uppercase whitespace-nowrap">
                {t.footer.bookBtn || "Book a Consultation"}
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* ================= 2. MIDDLE NAVIGATION & SOCIALS BAR ================= */}
      <div className="relative z-10 w-full max-w-full px-6 md:px-12 lg:px-[90px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 sm:pb-16 border-b border-white/[0.08]">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm sm:text-base text-gray-400 hover:text-white font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons in brand gold */}
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61566775323850"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#D3AF37] hover:text-[#FFF3B2] transition-transform duration-200 hover:scale-110"
            >
              <div className="w-8 h-8 rounded border border-[#D3AF37]/70 flex items-center justify-center">
                <FacebookIcon className="w-4 h-4 fill-current" />
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@giorgi.gubeladze"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#D3AF37] hover:text-[#FFF3B2] transition-transform duration-200 hover:scale-110 flex items-center justify-center w-8 h-8"
            >
              <TikTokIcon className="w-4 h-4 fill-current" />
            </a>

            {/* Email */}
            <a
              href="mailto:lawyergiorgigubeladze@gmail.com"
              aria-label="Email GLC Law Company"
              className="text-[#D3AF37] hover:text-[#FFF3B2] transition-transform duration-200 hover:scale-110 flex items-center justify-center w-8 h-8"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* ================= 3. BOTTOM COPYRIGHT & CREDITS BAR ================= */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Brand Name & Title */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm">
            <span className="font-['Antonio'] text-[#D3AF37] font-bold tracking-wider uppercase text-sm sm:text-base">
              GLC Law Company
            </span>
            <span className="text-gray-500">—</span>
            <span className="text-gray-400 font-normal">
              {t.footer.justiceSlogan}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500 font-normal">
            {t.footer.copyright}
          </p>
        </div>
      </div>

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </footer>
  );
}
