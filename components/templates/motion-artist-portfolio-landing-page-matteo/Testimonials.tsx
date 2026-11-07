'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  avatar: string;
  name: string;
  role: string;
  quote: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    avatar: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2001.png',
    name: 'Michael Turner',
    role: 'Creative Director, Nova Studio',
    quote:
      'The motion visuals delivered were absolutely stunning. The attention to detail, creativity, and storytelling really brought our brand to life. Communication was smooth and professional throughout. Highly recommended!',
  },
  {
    id: 't-2',
    avatar: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2002.png',
    name: 'Sophia Laurent',
    role: 'Head of Brand Design, Lumina Digital',
    quote:
      'Working together was an absolute game-changer. The 3D animation and cinematic flair elevated our product launch beyond our highest expectations. Truly an exceptional talent in motion design.',
  },
  {
    id: 't-3',
    avatar: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2003.png',
    name: 'David Vance',
    role: 'Executive Producer, Kinetic Media',
    quote:
      'Incredible eye for rhythm, pacing, and visual impact. Every frame felt polished, purposeful, and strikingly modern. Could not have asked for a better partner on our campaign.',
  },
  {
    id: 't-4',
    avatar: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2004.png',
    name: 'Elena Rostova',
    role: 'Lead Art Director, Veloce Studio',
    quote:
      'The speed and precision of delivery were unmatched. The visual identity motion pack provided seamless integration across all our global ad campaigns with flawless execution.',
  },
  {
    id: 't-5',
    avatar: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2005.png',
    name: 'Marcus Chen',
    role: 'Founder & CEO, Apex Interactive',
    quote:
      'Mastery in motion design is rare, but here you find pure excellence. Seamless communication, bold creative direction, and prompt delivery on every single project milestone.',
  },
  {
    id: 't-6',
    avatar: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2006.png',
    name: 'Chloe Dubois',
    role: 'Marketing Director, Pulse Creative',
    quote:
      'Our audience engagement skyrocketed by 180% after rolling out the new motion branding. Truly top-tier craftsmanship, visionary direction, and a pleasure to collaborate with.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const currentItem = TESTIMONIALS_DATA[currentIndex];

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariant: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const contentVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Letter-by-letter blurry opacity reveal variants for text
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.014,
        delayChildren: 0.02,
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(8px)',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 4,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Synchronous Sliding Door / Continuous Conveyor Track Carousel for Avatar
  const imageSliderVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
    }),
    center: {
      x: '0%',
      transition: {
        duration: 0.58,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      transition: {
        duration: 0.58,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative z-30 w-full min-h-screen bg-[#00070B] text-[#F2ECEC] overflow-hidden select-none flex justify-center items-center py-[80px] lg:py-[96px] px-6 sm:px-10 lg:px-[64px]"
      style={{ backgroundColor: '#00070B' }}
    >
      {/* Self-contained Font Imports & CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Big+Shoulders+Text:wght@700;900&family=Geist:wght@300;400;500;600;700&display=swap');
          
          .font-big-shoulders {
            font-family: 'Big Shoulders Display', 'Big Shoulders', sans-serif;
            font-optical-sizing: auto;
          }
          .font-geist {
            font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
          }
        `,
      }} />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="w-full max-w-[1600px] flex flex-col items-center gap-[64px] lg:gap-[96px]"
      >
        {/* ========================================================================= */}
        {/* 1. TOP HUGE HEADING: "TESTIMONIALS" */}
        {/* ========================================================================= */}
        <motion.div
          variants={headerVariant}
          className="w-full max-w-[1472px] flex items-center justify-center text-center"
        >
          <h2
            className="font-big-shoulders font-[900] text-[58px] sm:text-[96px] md:text-[130px] lg:text-[170px] leading-[100%] uppercase tracking-tight text-[#F2ECEC] select-none text-center"
            style={{
              fontFamily: "'Big Shoulders Display', 'Big Shoulders', sans-serif",
              fontWeight: 900,
              color: '#F2ECEC',
            }}
          >
            TESTIMONIALS
          </h2>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. BOTTOM MAIN COLUMN (Quote Text Row + Avatar & Controls Row) */}
        {/* ========================================================================= */}
        <motion.div
          variants={contentVariant}
          className="w-full max-w-[974px] flex flex-col items-center gap-[40px] sm:gap-[48px]"
        >
          {/* Top Row: Testimonials Text with Letter-by-Letter Blurry Opacity Animation */}
          <div className="w-full max-w-[974px] min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] flex items-center justify-center text-center px-2 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentItem.id}
                custom={direction}
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full flex items-center justify-center"
              >
                <p className="font-geist font-normal text-[22px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-[135%] sm:leading-[140%] text-[#F2ECEC] text-center max-w-[974px] flex flex-wrap justify-center items-center">
                  {/* Left Orange Quote Mark - Revealed as the first element */}
                  <motion.span
                    variants={letterVariants}
                    className="inline-block mr-2.5 text-[#FD4E04] font-black text-[28px] sm:text-[38px] lg:text-[46px] select-none"
                    style={{ color: '#FD4E04' }}
                  >
                    “
                  </motion.span>

                  {/* Letter-by-letter reveal for quote body */}
                  {currentItem.quote.split('').map((char, index) => (
                    <motion.span
                      key={`${currentItem.id}-char-${index}`}
                      variants={letterVariants}
                      className="inline-block whitespace-pre"
                    >
                      {char}
                    </motion.span>
                  ))}

                  {/* Right Orange Quote Mark - Appears strictly at the end after all letters finish */}
                  <motion.span
                    variants={letterVariants}
                    className="inline-block ml-2.5 text-[#FD4E04] font-black text-[28px] sm:text-[38px] lg:text-[46px] select-none"
                    style={{ color: '#FD4E04' }}
                  >
                    ”
                  </motion.span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Row: [ PREV Button ] — [ Avatar + Name/Title ] — [ NEXT Button ] */}
          <div className="w-full max-w-[751px] flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-6 lg:gap-[72px]">
            {/* Left Button (PREV) */}
            <div className="order-2 sm:order-1 flex items-center justify-center">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="group w-[145px] h-[54px] rounded-[8px] bg-[#0B0F13] border border-[#F2ECEC]/15 flex items-center justify-center gap-2.5 text-[#F2ECEC] transition-all duration-200 hover:border-[#FD4E04]/50 hover:bg-[#10171A] cursor-pointer"
                style={{ backgroundColor: '#0B0F13' }}
              >
                <ArrowLeft className="w-4 h-4 text-[#FD4E04] transition-transform duration-200 group-hover:-translate-x-1 stroke-[2.5]" />
                <span className="font-geist font-semibold text-[15px] sm:text-[16px] leading-[120%] tracking-wider uppercase text-[#F2ECEC]">
                  PREV
                </span>
              </button>
            </div>

            {/* Avatar and Name/Title Center Block */}
            <div className="order-1 sm:order-2 flex flex-col items-center gap-[24px] sm:gap-[32px] w-full max-w-[320px]">
              {/* Rectangle Avatar Container (Transparent background with simultaneous Door Sliding Animation) */}
              <div className="relative w-[240px] sm:w-[280px] h-[280px] sm:h-[320px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-transparent shrink-0">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentItem.id}
                    custom={direction}
                    variants={imageSliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentItem.avatar}
                      alt={currentItem.name}
                      fill
                      sizes="(max-width: 768px) 240px, 280px"
                      className="object-cover object-center pointer-events-none rounded-[20px] sm:rounded-[24px]"
                      referrerPolicy="no-referrer"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Name and Title Row with Letter Stagger Reveal */}
              <div className="flex flex-col items-center text-center gap-1 sm:gap-2 w-full max-w-[320px] min-h-[78px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentItem.id}
                    custom={direction}
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center text-center gap-1 sm:gap-2 w-full"
                  >
                    {/* Name: Michael Turner */}
                    <h3
                      className="font-big-shoulders font-[900] text-[28px] sm:text-[32px] leading-[140%] uppercase text-[#F2ECEC] tracking-wide flex flex-wrap justify-center"
                      style={{
                        fontFamily: "'Big Shoulders Display', 'Big Shoulders', sans-serif",
                        fontWeight: 900,
                        color: '#F2ECEC',
                      }}
                    >
                      {currentItem.name.split('').map((char, index) => (
                        <motion.span
                          key={`name-${currentItem.id}-${index}`}
                          variants={letterVariants}
                          className="inline-block whitespace-pre"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </h3>

                    {/* Role: Creative Director, Nova Studio */}
                    <p
                      className="font-geist font-medium text-[16px] sm:text-[18px] leading-[140%] text-[rgba(243,237,237,0.7)] flex flex-wrap justify-center"
                      style={{ color: 'rgba(243, 237, 237, 0.7)' }}
                    >
                      {currentItem.role.split('').map((char, index) => (
                        <motion.span
                          key={`role-${currentItem.id}-${index}`}
                          variants={letterVariants}
                          className="inline-block whitespace-pre"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Button (NEXT) */}
            <div className="order-3 flex items-center justify-center">
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="group w-[142px] h-[54px] rounded-[8px] bg-[#0B0F13] border border-[#F2ECEC]/15 flex items-center justify-center gap-2.5 text-[#F2ECEC] transition-all duration-200 hover:border-[#FD4E04]/50 hover:bg-[#10171A] cursor-pointer"
                style={{ backgroundColor: '#0B0F13' }}
              >
                <span className="font-geist font-semibold text-[15px] sm:text-[16px] leading-[120%] tracking-wider uppercase text-[#F2ECEC]">
                  NEXT
                </span>
                <ArrowRight className="w-4 h-4 text-[#FD4E04] transition-transform duration-200 group-hover:translate-x-1 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
