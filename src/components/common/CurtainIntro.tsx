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
 * Luxury Cinematic Shutter Curtain Reveal
 * Graceful, readable, GPU-accelerated transform/opacity pace
 * that never blocks user scrolling or adds duplicate <h1> elements.
 */
export const CurtainIntro: React.FC<CurtainIntroProps> = ({
  title,
  subtitle = 'GLC LAW COMPANY',
  backdropImage,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1850);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const letterContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.032,
        delayChildren: 0.08,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="curtain-loader-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-hidden="true"
          className="fixed inset-0 z-[99999] w-full h-full overflow-hidden pointer-events-none select-none will-change-[opacity]"
        >
          {backdropImage && (
            <div className="absolute inset-0 w-full h-full bg-[#0B0B0D]">
              <Image
                src={backdropImage}
                alt=""
                fill
                priority
                unoptimized
                sizes="100vw"
                className="object-cover object-center filter brightness-[0.52] contrast-[1.12]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/70 pointer-events-none" />
            </div>
          )}

          {/* TOP CURTAIN */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 0.98,
              delay: 0.78,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute top-0 left-0 w-full h-[calc(50%+2px)] bg-[#0B0B0D] flex flex-col justify-end items-center pb-2.5 sm:pb-3.5 px-4 z-20 border-b border-[#D3AF37]/35 shadow-[0_10px_30px_rgba(0,0,0,0.9)] will-change-transform"
            style={{ backgroundColor: '#0B0B0D' }}
          >
            <motion.div
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
                  className="inline-block will-change-[transform,opacity]"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* BOTTOM CURTAIN */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 0.98,
              delay: 0.78,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute bottom-0 left-0 w-full h-[calc(50%+2px)] bg-[#0B0B0D] flex flex-col justify-start items-center pt-3 sm:pt-4 px-4 z-20 border-t border-[#D3AF37]/35 shadow-[0_-10px_30px_rgba(0,0,0,0.9)] will-change-transform"
            style={{ backgroundColor: '#0B0B0D' }}
          >
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="font-geist font-semibold text-[13px] sm:text-[15px] md:text-[17px] text-[#D3AF37] tracking-[0.3em] uppercase text-center will-change-[transform,opacity]"
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
