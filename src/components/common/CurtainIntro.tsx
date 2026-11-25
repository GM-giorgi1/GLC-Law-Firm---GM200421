'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export interface CurtainIntroProps {
  title?: string;
  subtitle?: string;
  backdropImage?: unknown;
  mode?: 'initial' | 'route';
}

const SESSION_CURTAIN_KEY = 'glc_intro_curtain_seen';
let initialCurtainPlayedInMemory = false;

function hasPlayedInitialCurtain(): boolean {
  if (initialCurtainPlayedInMemory) return true;
  try {
    return typeof window !== 'undefined' && window.sessionStorage.getItem(SESSION_CURTAIN_KEY) === '1';
  } catch {
    return initialCurtainPlayedInMemory;
  }
}

function markInitialCurtainPlayed(): void {
  initialCurtainPlayedInMemory = true;
  try {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(SESSION_CURTAIN_KEY, '1');
    }
  } catch {
    // Ignore storage access errors
  }
}

function prefersReducedMotion(): boolean {
  try {
    return (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  } catch {
    return false;
  }
}

function CurtainSequence({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(() => !prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsVisible(false);
      return;
    }

    // Fail-safe unmount at ~1.52s guarantees overlay never remains on screen
    const closeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      window.clearTimeout(closeTimer);
    };
  }, []);

  if (!isVisible) return null;

  const cleanTitle = (title || 'GLC LAW COMPANY').trim();
  const cleanSubtitle = (subtitle || 'GLC LAW COMPANY').trim();
  const letterStagger =
    cleanTitle.length > 0 ? Math.min(0.022, 0.32 / cleanTitle.length) : 0.022;

  const letterContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: letterStagger,
        delayChildren: 0.04,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.34,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="glc-curtain-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-hidden="true"
          className="fixed inset-0 z-[99999] w-full h-full overflow-hidden pointer-events-none select-none will-change-[opacity]"
        >
          {/* TOP OBSIDIAN CURTAIN PANEL */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration: 0.82,
              delay: 0.54,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute top-0 left-0 w-full h-[calc(50%+2px)] bg-[#0B0B0D] flex flex-col justify-end items-center pb-3 sm:pb-4 px-4 z-20 border-b border-[#D3AF37]/35 will-change-transform"
            style={{ backgroundColor: '#0B0B0D' }}
          >
            <motion.div
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              className="font-big-shoulders font-[900] uppercase text-[#F2ECEC] tracking-tight leading-none text-[32px] sm:text-[46px] md:text-[58px] lg:text-[70px] text-center flex items-center justify-center flex-wrap"
              style={{
                fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                fontWeight: 900,
                lineHeight: '100%',
                color: '#F2ECEC',
              }}
            >
              {cleanTitle.split('').map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={letterVariants}
                  className="inline-block will-change-[transform,opacity]"
                  style={{
                    whiteSpace: char === ' ' ? 'pre' : 'normal',
                    transform: 'translate3d(0,0,0)',
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* BOTTOM OBSIDIAN CURTAIN PANEL */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 0.82,
              delay: 0.54,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute bottom-0 left-0 w-full h-[calc(50%+2px)] bg-[#0B0B0D] flex flex-col justify-start items-center pt-3 sm:pt-4 px-4 z-20 border-t border-[#D3AF37]/35 will-change-transform"
            style={{ backgroundColor: '#0B0B0D' }}
          >
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="font-geist font-semibold text-[13px] sm:text-[15px] md:text-[17px] text-[#D3AF37] tracking-[0.28em] uppercase text-center will-change-[transform,opacity]"
              style={{
                fontFamily: "'Inter Tight', 'Geist', sans-serif",
                color: '#D3AF37',
              }}
            >
              {cleanSubtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const CurtainIntro: React.FC<CurtainIntroProps> = ({
  title = 'GLC LAW COMPANY',
  subtitle = 'ADVOCATE GIORGI GUBELADZE',
  mode = 'route',
}) => {
  const { pathname } = useLocation();
  const [shouldRender, setShouldRender] = useState<boolean>(() => {
    if (prefersReducedMotion()) return false;
    if (mode === 'initial') {
      return !hasPlayedInitialCurtain();
    }
    return true;
  });

  useEffect(() => {
    if (prefersReducedMotion()) {
      setShouldRender(false);
      return;
    }

    if (mode === 'initial') {
      if (hasPlayedInitialCurtain()) {
        setShouldRender(false);
        return;
      }
      setShouldRender(true);
      const markTimer = window.setTimeout(() => {
        markInitialCurtainPlayed();
      }, 180);
      return () => {
        window.clearTimeout(markTimer);
      };
    }

    // Any subpage navigation also counts as having experienced the initial curtain
    markInitialCurtainPlayed();
    setShouldRender(true);
  }, [mode, pathname]);

  if (!shouldRender) return null;

  return <CurtainSequence key={`${mode}:${pathname}`} title={title} subtitle={subtitle} />;
};

export default CurtainIntro;
