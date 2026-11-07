'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const servicesImg01 = '/legal_walpaper1.jpg';
const servicesImg02 = 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop';
const servicesImg03 = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
const servicesImg04 = '/lawwallpaper.jpg';
const servicesImg05 = '/law temple wallpapaer.jpg';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  image: string;
  alt: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'investigation-defense',
    number: '01',
    title: 'საგამოძიებო ეტაპის სტრატეგია',
    image: servicesImg01,
    alt: 'Investigation Defense - საგამოძიებო მოქმედებების მონიტორინგი და დაკითხვა',
  },
  {
    id: 'evidence-suppression',
    number: '02',
    title: 'მტკიცებულებათა განეიტრალება',
    image: servicesImg02,
    alt: 'Evidence Suppression - უკანონო მტკიცებულებების დაუშვებლად ცნობა',
  },
  {
    id: 'detention-bail',
    number: '03',
    title: 'აღკვეთის ღონისძიებები & გირაო',
    image: servicesImg03,
    alt: 'Detention & Bail Rights - პატიმრობის ალტერნატივები და იზოლატორი',
  },
  {
    id: 'trial-advocacy',
    number: '04',
    title: 'სასამართლო & ნაფიც მსაჯულთა პროცესი',
    image: servicesImg04,
    alt: 'Trial Advocacy - უმაღლესი ინსტანციისა და ნაფიც მსაჯულთა დაცვა',
  },
  {
    id: 'appeals-cassation',
    number: '05',
    title: 'სააპელაციო & ადამიანის უფლებათა დაცვა',
    image: servicesImg05,
    alt: 'Appellate Advocacy - სააპელაციო და საკასაციო წარმოება',
  },
];

const LOOPED_SERVICES: (ServiceItem & { loopKey: string; originalIndex: number })[] = [
  { ...SERVICES_DATA[4], loopKey: 'pre-05', originalIndex: 4 },
  { ...SERVICES_DATA[0], loopKey: 'main-01', originalIndex: 0 },
  { ...SERVICES_DATA[1], loopKey: 'main-02', originalIndex: 1 },
  { ...SERVICES_DATA[2], loopKey: 'main-03', originalIndex: 2 },
  { ...SERVICES_DATA[3], loopKey: 'main-04', originalIndex: 3 },
  { ...SERVICES_DATA[4], loopKey: 'main-05', originalIndex: 4 },
  { ...SERVICES_DATA[0], loopKey: 'post-01', originalIndex: 0 },
  { ...SERVICES_DATA[1], loopKey: 'post-02', originalIndex: 1 },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const centerGapWidth = useTransform(scrollYProgress, [0, 0.10], [28, 680], { clamp: true });
  const typographyScale = useTransform(scrollYProgress, [0, 0.10], [1.38, 1.0], { clamp: true });

  const imageStreamOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1], { clamp: true });
  const topRowOpacity = useTransform(scrollYProgress, [0.01, 0.05], [0, 1], { clamp: true });
  const topRowY = useTransform(scrollYProgress, [0.01, 0.05], [-40, 0], { clamp: true });
  const bottomListOpacity = useTransform(scrollYProgress, [0.01, 0.05], [0, 1], { clamp: true });
  const bottomListX = useTransform(scrollYProgress, [0.01, 0.05], [50, 0], { clamp: true });

  const mobileCenterGap = useTransform(scrollYProgress, [0, 0.10], [12, 50], { clamp: true });
  const mobileTypographyScale = useTransform(scrollYProgress, [0, 0.10], [1.25, 1.0], { clamp: true });

  const CARD_STEP = 504;
  const desktopY = useTransform(
    scrollYProgress,
    [0, 0.10, 0.28, 0.46, 0.64, 0.82, 1.0],
    [
      -CARD_STEP * 0.7,
      -CARD_STEP * 1,
      -CARD_STEP * 2,
      -CARD_STEP * 3,
      -CARD_STEP * 4,
      -CARD_STEP * 5,
      -CARD_STEP * 5,
    ],
    { clamp: true }
  );

  const mobileX = useTransform(
    scrollYProgress,
    [0.02, 0.22, 0.42, 0.62, 0.82, 1.0],
    ['0%', '-20%', '-40%', '-60%', '-80%', '-80%'],
    { clamp: true }
  );

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.20) {
      setActiveIndex(0);
    } else if (latest < 0.38) {
      setActiveIndex(1);
    } else if (latest < 0.56) {
      setActiveIndex(2);
    } else if (latest < 0.74) {
      setActiveIndex(3);
    } else {
      setActiveIndex(4);
    }
  });

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full bg-[#030609] z-20"
      style={{ height: '420vh', backgroundColor: '#030609' }}
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

      {/* STICKY PINNED 100VH VIEWPORT CANVAS */}
      <div
        id="services-viewport"
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#030609] text-white flex flex-col justify-between items-center select-none"
        style={{ backgroundColor: '#030609' }}
      >
        {/* VERTICAL LEGAL IMAGE STREAM COLUMN */}
        <motion.div
          id="services-image-stream"
          style={{ opacity: imageStreamOpacity }}
          className="hidden lg:block absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-auto"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              style={{
                y: desktopY,
                top: 'calc(50% - 240px)',
              }}
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-[24px]"
            >
              {LOOPED_SERVICES.map((service) => {
                const isActive = service.originalIndex === activeIndex;

                return (
                  <div
                    key={service.loopKey}
                    id={`service-image-${service.loopKey}`}
                    className="relative w-[522px] h-[480px] rounded-[10px] overflow-hidden shrink-0 transition-all duration-300 ease-out cursor-pointer border border-[#D3AF37]/30 shadow-2xl"
                    style={{
                      width: '522px',
                      height: '480px',
                      opacity: 1,
                      filter: isActive
                        ? 'grayscale(0%) contrast(1.1) brightness(0.95)'
                        : 'grayscale(100%) contrast(1.2) brightness(0.4)',
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="522px"
                      priority={service.originalIndex === 0}
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                    <div className="absolute bottom-4 left-6 right-6 text-left">
                      <span className="text-[#D3AF37] font-bold text-xs uppercase tracking-widest block mb-1">
                        საყრდენი {service.number}
                      </span>
                      <h4 className="font-big-shoulders text-xl text-white font-bold uppercase tracking-wide">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* TYPOGRAPHY: DESKTOP ("DEFENSE" [Left] & "PILLARS" [Right]) */}
        <div
          id="services-typography-desktop"
          className="hidden lg:flex absolute inset-0 w-full h-full items-center justify-center pointer-events-none z-20"
        >
          <div className="w-full max-w-[1600px] flex flex-row items-center justify-center px-4">
            
            <motion.div
              id="services-heading-what"
              style={{
                scale: typographyScale,
                transformOrigin: 'right center',
              }}
              className="flex items-center justify-end shrink-0 whitespace-nowrap pointer-events-auto"
            >
              <h2
                className="font-big-shoulders font-[900] uppercase text-white tracking-tight leading-none text-[115px] xl:text-[124px] 2xl:text-[132px] whitespace-nowrap cursor-default"
                style={{
                  fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                  fontWeight: 900,
                  lineHeight: '100%',
                }}
              >
                DEFENSE
              </h2>
            </motion.div>

            <motion.div
              style={{ width: centerGapWidth }}
              className="shrink-0 pointer-events-none"
              aria-hidden="true"
            />

            <motion.div
              id="services-heading-offer"
              style={{
                scale: typographyScale,
                transformOrigin: 'left center',
              }}
              className="flex items-center justify-start shrink-0 whitespace-nowrap pointer-events-auto pl-6"
            >
              <h2
                className="font-big-shoulders font-[900] uppercase bg-gradient-to-r from-[#FEF5CD] via-[#D2AE37] to-[#BA9524] bg-clip-text text-transparent tracking-tight leading-none text-[115px] xl:text-[124px] 2xl:text-[132px] whitespace-nowrap cursor-default"
                style={{
                  fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                  fontWeight: 900,
                  lineHeight: '100%',
                }}
              >
                PILLARS
              </h2>
            </motion.div>

          </div>
        </div>

        {/* TYPOGRAPHY: MOBILE / TABLET */}
        <div
          id="services-typography-mobile"
          className="flex lg:hidden absolute inset-0 w-full h-full flex-col items-center justify-center pointer-events-none z-20 px-4"
        >
          <motion.div
            style={{ scale: mobileTypographyScale }}
            className="flex flex-row items-center justify-center whitespace-nowrap mb-4 pointer-events-auto"
          >
            <h2 className="font-big-shoulders font-[900] uppercase text-white text-[42px] sm:text-[64px] leading-none">
              DEFENSE
            </h2>
            <motion.div style={{ width: mobileCenterGap }} className="shrink-0" />
            <h2 className="font-big-shoulders font-[900] uppercase text-[#D3AF37] text-[42px] sm:text-[64px] leading-none whitespace-nowrap">
              PILLARS
            </h2>
          </motion.div>

          <motion.div
            style={{ opacity: imageStreamOpacity }}
            className="relative w-full max-w-[320px] sm:max-w-[420px] h-[300px] sm:h-[380px] overflow-hidden rounded-[8px] pointer-events-auto border border-[#D3AF37]/30"
          >
            <motion.div
              style={{ x: mobileX }}
              className="flex flex-row h-full w-[500%] absolute top-0 left-0"
            >
              {SERVICES_DATA.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={service.id}
                    className="w-1/5 h-full px-1.5 shrink-0"
                  >
                    <div
                      className="relative w-full h-full rounded-[8px] overflow-hidden transition-all duration-300"
                      style={{
                        filter: isActive
                          ? 'grayscale(0%) contrast(1.1)'
                          : 'grayscale(100%) brightness(0.5)',
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 640px) 320px, 420px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* FOREGROUND UI OVERLAYS */}
        <div
          id="services-foreground-overlays"
          className="w-full h-full flex flex-col justify-between items-start px-6 sm:px-10 lg:px-[64px] pt-[24px] pb-[24px] relative box-border pointer-events-none z-30"
        >
          {/* TOP ROW */}
          <motion.div
            id="services-top-bar"
            style={{
              opacity: topRowOpacity,
              y: topRowY,
            }}
            className="w-full h-[60px] flex flex-row justify-between items-center shrink-0 z-30 pointer-events-auto"
          >
            {/* Number Indicator */}
            <div id="services-index-indicator" className="flex items-baseline cursor-default">
              <span
                className="font-big-shoulders font-[900] text-[36px] sm:text-[42px] leading-[110%] text-[#FEF5CD] tracking-tight"
                style={{
                  fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                  fontWeight: 900,
                  fontSize: '42px',
                  lineHeight: '110%',
                }}
              >
                {SERVICES_DATA[activeIndex]?.number || '01'}
              </span>
              <span
                className="font-big-shoulders font-[900] text-[24px] sm:text-[28px] text-gray-500 ml-1.5"
                style={{
                  fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                  fontWeight: 900,
                }}
              >
                / 05
              </span>
            </div>

            {/* Emergency Hotline Button */}
            <motion.a
              href="https://wa.me/995599277794"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative group overflow-hidden flex flex-row items-center justify-center pl-5 sm:pl-6 pr-2.5 py-2.5 sm:py-[10px] gap-3 sm:gap-4 w-auto h-[48px] sm:h-[60px] bg-black/70 border border-[#D3AF37]/50 rounded-[8px] cursor-pointer shadow-lg"
            >
              <motion.div
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 },
                  tap: { scaleX: 1 },
                }}
                style={{ transformOrigin: 'left' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-[#FEF5CD] via-[#D2AE37] to-[#BA9524] z-0"
              />

              <span
                className="relative z-10 font-big-shoulders font-[900] text-[16px] sm:text-[20px] leading-[140%] uppercase text-white group-hover:text-[#00060A] whitespace-nowrap flex items-center transition-colors duration-200"
              >
                {'გადაუდებელი კონსულტაცია'.split('').map((char, index) => (
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

              <div className="relative z-10 overflow-hidden w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] bg-[#D3AF37] group-hover:bg-[#00070B] rounded-[6px] flex items-center justify-center shrink-0 transition-colors duration-300">
                <ArrowUpRight className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px] text-[#00070B] group-hover:text-[#D3AF37] stroke-[2.5] transition-colors duration-300" />
              </div>
            </motion.a>
          </motion.div>

          <div className="w-full flex-1 pointer-events-none" />

          {/* BOTTOM ROW: SERVICES LIST */}
          <div
            id="services-bottom-row"
            className="w-full flex justify-end items-end shrink-0 pb-2 z-30 pointer-events-none"
          >
            <motion.div
              id="services-list-container"
              style={{
                opacity: bottomListOpacity,
                x: bottomListX,
              }}
              className="flex flex-col items-start gap-[6px] sm:gap-[8px] w-full sm:w-[420px] pointer-events-auto bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-md"
            >
              {SERVICES_DATA.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={service.id}
                    id={`service-item-${service.id}`}
                    className="w-full text-left cursor-pointer"
                  >
                    <span
                      className={`font-big-shoulders font-[900] uppercase tracking-tight block leading-[135%] transition-colors duration-200 ${
                        isActive
                          ? 'text-[#D3AF37] text-[20px] sm:text-[24px]'
                          : 'text-gray-400 text-[17px] sm:text-[20px]'
                      }`}
                      style={{
                        fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                        fontWeight: 900,
                      }}
                    >
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
