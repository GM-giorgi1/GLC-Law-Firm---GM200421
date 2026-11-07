'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface CurtainIntroProps {
  title: string;
  subtitle?: string;
  backdropImage?: any;
}

/**
 * Universal Cinematic Shutter Curtain Intro Screen
 * Features split top/bottom obsidian doors with subtle gold borders,
 * staggered letter typography, and smooth shutter reveal.
 */
export const CurtainIntro: React.FC<CurtainIntroProps> = ({
  title,
  subtitle = 'GLC LAW COMPANY',
  backdropImage,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Lock scroll during initial curtain opening
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
          key="curtain-loader-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[99999] w-full h-full overflow-hidden pointer-events-none select-none"
        >
          {/* OPTIONAL BACKDROP BEHIND CURTAINS */}
          {backdropImage && (
            <div className="absolute inset-0 w-full h-full bg-[#030508]">
              <Image
                src={backdropImage}
                alt="GLC Law Backdrop"
                fill
                priority
                unoptimized
                sizes="100vw"
                className="object-cover object-center filter brightness-[0.25] contrast-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/85 to-[#030508]/90 pointer-events-none" />
            </div>
          )}

          {/* TOP CURTAIN (Slides Up) */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 1.05,
              delay: 0.95,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#00070B] flex flex-col justify-end items-center pb-2 sm:pb-3 px-4 z-20 border-b border-[#D3AF37]/35 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            style={{ backgroundColor: '#00070B' }}
          >
            <motion.h1
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              className="font-big-shoulders font-[900] uppercase text-[#F2ECEC] tracking-tight leading-none text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] text-center flex items-center justify-center flex-wrap"
              style={{
                fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                fontWeight: 900,
                lineHeight: '100%',
                color: '#F2ECEC',
              }}
            >
              {title.split('').map((char, index) => (
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

          {/* BOTTOM CURTAIN (Slides Down) */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 1.05,
              delay: 0.95,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#00070B] flex flex-col justify-start items-center pt-3 sm:pt-4 px-4 z-20 border-t border-[#D3AF37]/35 shadow-[0_-10px_30px_rgba(0,0,0,0.9)]"
            style={{ backgroundColor: '#00070B' }}
          >
            <motion.p
              initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-geist font-semibold text-[13px] sm:text-[15px] md:text-[17px] text-[#D3AF37] tracking-[0.3em] uppercase text-center"
              style={{
                fontFamily: "'Inter Tight', 'Geist', sans-serif",
                color: '#D3AF37',
              }}
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CurtainIntro;
