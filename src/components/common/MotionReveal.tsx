'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Word-level smooth wave reveal with blur and fade matching the Homepage
export function BlurWaveText({
  text,
  className = '',
  delay = 0,
  highlightWord = '',
  highlightClass = 'text-[#D3AF37]',
}: {
  text: string;
  className?: string;
  delay?: number;
  highlightWord?: string;
  highlightClass?: string;
}) {
  const words = text ? text.split(' ') : [];
  return (
    <motion.span
      key={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: '0px 0px -20px 0px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.04,
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
              hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            style={{ WebkitBackfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
            className={`inline-block whitespace-nowrap mr-[0.24em] will-change-[transform,opacity] ${
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

// Fade in up container on scroll
export function FadeInUp({
  children,
  delay = 0,
  className = '',
  yOffset = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for grids of cards
export const staggerGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerCardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
