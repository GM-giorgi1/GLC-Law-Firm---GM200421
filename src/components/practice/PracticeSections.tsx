'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, type LucideIcon } from 'lucide-react';
import ScrollLetterReveal from '@/src/components/common/ScrollLetterReveal';

export interface PracticePillarItem {
  number: string;
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  feature: string;
}

export interface PracticeProtocolStep {
  number: string;
  image: string;
  title: string;
  description: string;
}

const pillarsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const pillarCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const protocolHeaderVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const protocolContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const protocolCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PracticePillarsBento({
  sectionId,
  badgeText,
  headingText,
  subText,
  pillars,
}: {
  sectionId: string;
  badgeText: string;
  headingText: string;
  subText: string;
  pillars: PracticePillarItem[];
}) {
  return (
    <section
      id={sectionId}
      className="relative z-20 w-full bg-[#090D16] border-b border-[#D3AF37]/15 text-[#F2ECEC] overflow-hidden select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12"
      style={{ backgroundColor: '#090D16' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#D3AF37]/40 bg-[#0E1322]/90 backdrop-blur-md shadow-sm mb-4">
            <span className="font-geist font-bold text-xs uppercase tracking-[0.2em] text-[#D3AF37]">
              {badgeText}
            </span>
          </div>

          <h2 className="font-big-shoulders font-[900] uppercase text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            <ScrollLetterReveal text={headingText} delay={0.08} stagger={0.016} once={true} />
          </h2>

          <p className="font-geist font-normal text-sm sm:text-base lg:text-lg text-gray-300/85 mt-4 max-w-2xl leading-relaxed">
            <ScrollLetterReveal text={subText} delay={0.2} granularity="word" stagger={0.024} once={true} />
          </p>
        </motion.div>

        {/* Staggered 2x2 Bento Grid matching Criminal Defense */}
        <motion.div
          variants={pillarsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 w-full"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                variants={pillarCardVariants}
                whileHover={{ y: -6, transition: { duration: 0.28, ease: 'easeOut' } }}
                className="group relative flex flex-col justify-between p-7 sm:p-9 lg:p-10 rounded-2xl overflow-hidden border border-[#D3AF37]/25 hover:border-[#D3AF37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.6),0_12px_28px_rgba(0,0,0,0.5),0_24px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(211,175,55,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.7),0_20px_40px_rgba(0,0,0,0.6),0_32px_64px_rgba(0,0,0,0.5),0_0_28px_rgba(211,175,55,0.22)] transition-all duration-300 min-h-[360px]"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover object-center filter brightness-[0.92] contrast-[1.08] blur-[0.5px] transition-transform duration-700 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(3, 5, 8, 0.38) 0%, rgba(3, 5, 8, 0.48) 50%, rgba(3, 5, 8, 0.68) 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/65 via-transparent to-[#030508]/15 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D3AF37]/[0.03] group-hover:bg-[#D3AF37]/[0.10] rounded-bl-full pointer-events-none transition-colors duration-500" />
                </div>

                {/* Card Content Layer */}
                <div className="relative z-10 w-full flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A2234]/95 to-[#0A0F1A]/95 border border-[#D3AF37]/50 flex items-center justify-center text-[#D3AF37] group-hover:scale-105 group-hover:border-[#D3AF37] shadow-[0_4px_12px_rgba(0,0,0,0.7)] transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <div className="px-3.5 py-1 rounded-full border border-[#D3AF37]/40 bg-[#0B0F19]/85 backdrop-blur-md group-hover:bg-gradient-to-r group-hover:from-[#D3AF37]/30 group-hover:to-[#BA9524]/40 group-hover:border-[#D3AF37]/80 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                      <span className="font-big-shoulders font-[900] text-2xl sm:text-3xl text-[#D3AF37]/80 group-hover:text-[#FEF5CD] group-hover:drop-shadow-[0_0_8px_rgba(211,175,55,0.6)] transition-colors duration-300">
                        {pillar.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 my-2">
                    <h3 className="font-big-shoulders font-[900] uppercase text-2xl sm:text-3xl text-white group-hover:text-[#FEF5CD] transition-colors duration-200 tracking-tight leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                      {pillar.title}
                    </h3>

                    <p className="font-geist font-medium text-sm sm:text-base text-gray-100 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.98)] drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-xs font-bold text-[#D3AF37] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D3AF37]" />
                      <span className="text-[#FEF5CD]">{pillar.feature}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#D3AF37] opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function PracticeProtocolGrid({
  sectionId,
  headingText,
  subText,
  steps,
}: {
  sectionId: string;
  headingText: string;
  subText: string;
  steps: PracticeProtocolStep[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id={sectionId}
      className="relative z-20 w-full bg-[#0D121F] border-b border-[#D3AF37]/15 text-[#F3ECEC] overflow-hidden select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12"
      style={{ backgroundColor: '#0D121F' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Centered Header */}
        <motion.div
          variants={protocolHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-4xl flex flex-col items-center justify-center text-center mx-auto mb-14 sm:mb-16 px-4"
        >
          <h2 className="font-big-shoulders font-[900] uppercase text-white tracking-tight leading-tight text-3xl sm:text-5xl lg:text-6xl text-center">
            <ScrollLetterReveal text={headingText} delay={0.08} stagger={0.016} once={true} />
          </h2>

          <p className="font-geist font-normal text-sm sm:text-base lg:text-lg text-gray-300/90 mt-4 max-w-2xl text-center leading-relaxed">
            <ScrollLetterReveal text={subText} delay={0.2} granularity="word" stagger={0.024} once={true} />
          </p>
        </motion.div>

        {/* Connected 4-Stage Architectural Grid matching Criminal Defense */}
        <motion.div
          variants={protocolContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D3AF37]/30 rounded-2xl overflow-hidden shadow-2xl"
        >
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={step.number}
                variants={protocolCardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col justify-between items-start p-7 sm:p-8 lg:p-9 transition-all duration-300 cursor-pointer min-h-[330px] overflow-hidden ${
                  index !== 0 ? 'lg:border-l lg:border-[#D3AF37]/20' : ''
                } ${index % 2 !== 0 ? 'sm:border-l sm:border-[#D3AF37]/20 lg:border-l' : ''} ${
                  index >= 2 ? 'border-t sm:border-t-0 border-[#D3AF37]/20' : ''
                }`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center filter brightness-[0.92] contrast-[1.08] blur-[0.5px] transition-transform duration-700 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(180deg, rgba(3, 5, 8, 0.32) 0%, rgba(3, 5, 8, 0.42) 50%, rgba(3, 5, 8, 0.60) 100%)'
                        : 'linear-gradient(180deg, rgba(3, 5, 8, 0.38) 0%, rgba(3, 5, 8, 0.48) 50%, rgba(3, 5, 8, 0.68) 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/65 via-transparent to-[#030508]/15 pointer-events-none" />
                </div>

                {/* Step Number */}
                <span
                  className="relative z-10 font-big-shoulders font-[900] tracking-tight text-5xl sm:text-6xl leading-none transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
                  style={{
                    color: isHovered ? '#FEF5CD' : '#D3AF37',
                  }}
                >
                  {step.number}
                </span>

                {/* Step Content */}
                <div className="relative z-10 flex flex-col gap-3 mt-12 sm:mt-16 w-full">
                  <h3
                    className="font-big-shoulders font-[900] uppercase text-2xl sm:text-[26px] leading-tight transition-colors duration-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.98)]"
                    style={{
                      color: isHovered ? '#FEF5CD' : '#FFFFFF',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-geist font-medium text-xs sm:text-sm leading-relaxed transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)]"
                    style={{
                      color: isHovered ? 'rgba(254, 245, 205, 0.95)' : 'rgba(229, 231, 235, 0.9)',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
