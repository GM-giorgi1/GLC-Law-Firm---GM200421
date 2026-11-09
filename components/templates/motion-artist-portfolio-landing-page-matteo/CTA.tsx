'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, ShieldAlert } from 'lucide-react';

const CTA_BACKGROUNDS = [
  { id: 'img-1', src: '/legal_wallpaper.jpg' },
  { id: 'img-2', src: '/lawwallpaper.jpg' },
  { id: 'img-3', src: '/legal_walpaper1.jpg' },
  { id: 'img-4', src: '/law temple wallpapaer.jpg' },
];

export default function CTA() {
  const [timeString, setTimeString] = useState<string>('12:00:00 PM');
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Tbilisi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      try {
        const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
        setTimeString(formatted);
      } catch {
        setTimeString(now.toLocaleTimeString('en-US'));
      }
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CTA_BACKGROUNDS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const behindBoxVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 180,
      rotate: 0,
      scale: 0.92,
    },
    visible: {
      opacity: 0.25,
      y: 0,
      rotate: -4,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const mainCardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 320,
      y: 50,
      rotate: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 4,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const contentStaggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.45,
        staggerChildren: 0.08,
      },
    },
  };

  const itemBlurRevealVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="cta"
      className="sticky top-0 z-10 w-full min-h-screen lg:h-screen bg-[#00070B] overflow-hidden select-none flex items-center justify-center py-[70px] lg:py-[90px] px-4 sm:px-6"
      style={{ backgroundColor: '#00070B' }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Antonio:wght@700;900&family=Inter+Tight:wght@400;500;600;700&display=swap');
          
          .font-big-shoulders {
            font-family: 'Big Shoulders Display', 'Antonio', sans-serif;
            font-optical-sizing: auto;
          }
          .font-geist {
            font-family: 'Inter Tight', sans-serif;
          }
        `,
      }} />

      {/* BACKGROUND LEGAL ARCHITECTURE CAROUSEL */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#00070B]">
        {CTA_BACKGROUNDS.map((item, idx) => {
          const isActive = idx === activeIdx;

          return (
            <div
              key={item.id}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 2 : 1,
              }}
            >
              <Image
                src={item.src}
                alt="GLC Courtroom Architecture"
                fill
                unoptimized
                priority
                sizes="100vw"
                className="object-cover object-center w-full h-full filter brightness-[0.72] contrast-[1.10]"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}

        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] z-3 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[840px] flex items-center justify-center min-h-[480px] sm:min-h-[620px] lg:min-h-[600px]">
        {/* BEHIND ROTATED BOX */}
        <motion.div
          variants={behindBoxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="absolute inset-x-0 w-[94%] sm:w-full max-w-[800px] h-[450px] sm:h-[564px] mx-auto rounded-[16px] sm:rounded-[20px] bg-[#D3AF37]/20 border border-[#D3AF37]/40 -translate-x-[6px] sm:-translate-x-[19px] -translate-y-[10px] sm:-translate-y-[26px] pointer-events-none"
          style={{
            filter: 'blur(3px)',
            borderRadius: '20px',
          }}
        />

        {/* MAIN CONTEXT CARD WITH 4DEG TILT */}
        <motion.div
          variants={mainCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative z-10 w-[94%] sm:w-full max-w-[800px] min-h-[450px] sm:min-h-[564px] rounded-[16px] sm:rounded-[20px] bg-[#0A0E17] border border-[#D3AF37]/40 p-5 sm:p-8 lg:p-[28px_32px_24px_32px] flex flex-col justify-between items-center shadow-[0px_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl"
        >
          <motion.div
            variants={contentStaggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full max-w-[640px] flex flex-col items-center pt-1 sm:pt-4"
          >
            {/* Tag */}
            <motion.div
              variants={itemBlurRevealVariants}
              className="flex items-center justify-center gap-2 mb-3"
            >
              <ShieldAlert className="w-4 h-4 text-[#D3AF37]" />
              <span className="font-geist font-bold text-[12px] sm:text-[14px] leading-[140%] uppercase tracking-[0.2em] text-[#D3AF37]">
                დაიცავით თქვენი უფლებები
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              variants={itemBlurRevealVariants}
              className="flex flex-col items-center text-center leading-[100%]"
            >
              <h2
                className="font-big-shoulders font-[900] text-[clamp(36px,9vw,56px)] sm:text-[68px] md:text-[76px] lg:text-[84px] leading-[95%] uppercase text-white tracking-tight text-center"
                style={{
                  fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                  fontWeight: 900,
                }}
              >
                თავისუფლება
              </h2>
              <h2
                className="font-big-shoulders font-[900] text-[clamp(28px,7vw,46px)] sm:text-[54px] md:text-[62px] lg:text-[70px] leading-[95%] uppercase text-[#D3AF37] tracking-tight text-center mt-1"
                style={{
                  fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                  fontWeight: 900,
                }}
              >
                უპირველესია
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemBlurRevealVariants}
              className="font-geist font-light text-[14px] sm:text-[16px] lg:text-[18px] leading-[145%] text-gray-300 text-center max-w-[530px] mt-3 sm:mt-4 mb-4 sm:mb-6"
            >
              სისხლის სამართალში ყოველი წუთი გადამწყვეტია. დაგვიკავშირდით დაუყოვნებლივ 24/7 ოპერატიული საადვოკატო დახმარებისათვის.
            </motion.p>

            {/* Action Button */}
            <motion.div
              variants={itemBlurRevealVariants}
              className="flex items-center justify-center"
            >
              <motion.a
                href="https://wa.me/995599277794"
                target="_blank"
                rel="noopener noreferrer"
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative group overflow-hidden flex flex-row items-center justify-center pl-6 pr-2.5 py-2.5 sm:py-[10px] gap-3 sm:gap-4 w-auto h-[48px] sm:h-[60px] bg-gradient-to-r from-[#FEF5CD] via-[#D2AE37] to-[#BA9524] text-[#00070B] rounded-[8px] cursor-pointer shadow-lg"
              >
                <span
                  className="relative z-10 font-big-shoulders font-[900] text-[16px] sm:text-[20px] lg:text-[22px] leading-[140%] uppercase text-[#00070B] tracking-wide whitespace-nowrap flex items-center"
                >
                  {'პირდაპირი დაკავშირება'.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        initial: { opacity: 1, y: 0 },
                        hover: {
                          opacity: [0, 1],
                          y: [3, 0],
                          transition: {
                            delay: index * 0.02,
                            duration: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                      className="inline-block"
                      style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>

                <div className="relative z-10 overflow-hidden w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] bg-[#00070B] rounded-[6px] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px] text-[#D3AF37] stroke-[2.5]" />
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            variants={itemBlurRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full flex items-center justify-between border-t border-white/10 pt-3 sm:pt-4 px-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D3AF37] animate-pulse" />
              <span className="font-geist font-bold text-[12px] sm:text-[14px] text-gray-300 tracking-wide uppercase">
                თბილისი // 24/7 ცხელი ხაზი
              </span>
            </div>

            <div className="font-geist font-bold text-[12px] sm:text-[14px] text-[#D3AF37] tabular-nums tracking-wider">
              {timeString}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
