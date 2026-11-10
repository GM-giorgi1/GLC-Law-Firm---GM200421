'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

export interface ScrollLetterRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  delay?: number;
  stagger?: number;
  once?: boolean;
  triggerMode?: 'scroll' | 'mount';
  highlightWord?: string;
  highlightClass?: string;
  colorClass?: string;
  gradientClass?: string;
  viewportAmount?: number;
}

const letterVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ScrollLetterReveal({
  text,
  className = '',
  as: Component = 'span',
  delay = 0,
  stagger = 0.016,
  once = false,
  triggerMode = 'scroll',
  highlightWord = '',
  highlightClass = 'text-[#D3AF37]',
  colorClass = '',
  gradientClass = '',
  viewportAmount = 0.12,
}: ScrollLetterRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isMount = triggerMode === 'mount';
  const isInView = useInView(containerRef, {
    once: isMount ? true : once,
    amount: isMount ? 0 : viewportAmount,
    margin: '0px 0px -30px 0px',
  });

  const words = text ? text.split(' ') : [];

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const MotionComponent = (motion as any)[Component] || motion.span;
  const shouldAnimate = isMount ? true : isInView;

  return (
    <MotionComponent
      ref={containerRef}
      key={text}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
      variants={containerVariant}
      className={`inline-block ${className}`}
    >
      {words.map((word, wordIndex) => {
        const isHighlighted =
          highlightWord &&
          word.toLowerCase().includes(highlightWord.toLowerCase());

        return (
          <span
            key={`${word}-${wordIndex}`}
            className={`inline-block whitespace-nowrap mr-[0.24em] ${
              gradientClass || ''
            }`}
          >
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${char}-${charIndex}`}
                variants={letterVariant}
                style={{
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)',
                }}
                className={`inline-block will-change-[transform,opacity] ${
                  isHighlighted ? highlightClass : colorClass
                }`}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </MotionComponent>
  );
}

// Drop-in compatible export for Alex template components
export function BlurWaveText({
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
  return (
    <ScrollLetterReveal
      text={text}
      className={className}
      delay={delay}
      highlightWord={highlightWord}
      highlightClass={highlightClass}
      triggerMode={triggerMode}
      once={false}
      stagger={0.016}
    />
  );
}
