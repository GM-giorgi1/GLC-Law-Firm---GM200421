'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const topAboutImg = '/GUBE.jpeg';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
}

const ABOUT_MEDIA_ROW: MediaItem[] = [
  {
    id: 'media-1',
    type: 'image',
    src: '/legal_walpaper1.jpg',
    alt: 'სასამართლო დარბაზის არქიტექტურა და სვეტები',
  },
  {
    id: 'media-2',
    type: 'image',
    src: '/lawwallpaper.jpg',
    alt: 'უზენაესი სასამართლო პროცესი და სხდომათა დარბაზი',
  },
  {
    id: 'media-3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop',
    alt: 'მართლმსაჯულების სასწორი და კანონთა კრებული',
  },
  {
    id: 'media-4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    alt: 'პატიმრობის ალტერნატივები და თავისუფლების უფლება',
  },
  {
    id: 'media-5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
    alt: 'სისხლისსამართლებრივი საქმის მასალების ექსპერტიზა',
  },
];

const letterBlurVariant: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 3,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textSentenceVariant: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.014,
      delayChildren: 0.05,
    },
  },
};

function AnimatedTextWords({
  text,
  className,
  colorClass,
}: {
  text: string;
  className?: string;
  colorClass?: string;
}) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.24em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterBlurVariant}
              className={`inline-block ${colorClass || ''}`}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export default function AboutMe() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mediaCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const desktopTopRef = React.useRef<HTMLDivElement>(null);
  const [desktopScale, setDesktopScale] = React.useState(1);

  React.useEffect(() => {
    const handleResize = () => {
      if (desktopTopRef.current) {
        const containerWidth = desktopTopRef.current.parentElement?.offsetWidth || window.innerWidth;
        if (containerWidth < 1472) {
          setDesktopScale(containerWidth / 1472);
        } else {
          setDesktopScale(1);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="about"
      className="relative z-10 w-full bg-[#00070B] text-[#F2ECEC] overflow-hidden select-none flex justify-center items-center"
      style={{ backgroundColor: '#00070B' }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Antonio:wght@700;900&family=Geist:wght@300;400;500;600;700&display=swap');
          
          .font-big-shoulders {
            font-family: 'Big Shoulders Display', 'Antonio', sans-serif;
            font-optical-sizing: auto;
          }
          .font-geist {
            font-family: 'Inter Tight', 'Geist', -apple-system, sans-serif;
          }
        `,
      }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full min-h-[900px] flex flex-col justify-between items-start px-6 sm:px-10 lg:px-[64px] pt-[84px] pb-[48px] gap-[60px] lg:gap-[100px] xl:gap-[130px] box-border relative"
      >
        {/* TOP ROW CONTAINER */}
        <div className="w-full relative">
          
          {/* DESKTOP VIEW */}
          <div
            ref={desktopTopRef}
            className="hidden lg:flex justify-end relative w-full overflow-visible"
            style={{
              height: `${480 * desktopScale}px`,
            }}
          >
            <div
              className="relative shrink-0 ml-auto"
              style={{
                width: '1472px',
                height: '480px',
                transform: `scale(${desktopScale})`,
                transformOrigin: 'top right',
              }}
            >
              {/* TAG */}
              <motion.div
                variants={fadeInUp}
                className="absolute"
                style={{
                  position: 'absolute',
                  width: '180px',
                  height: '19px',
                  left: '374px',
                  top: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '120%',
                    color: '#D3AF37',
                    letterSpacing: '0.15em',
                  }}
                  className="block whitespace-nowrap uppercase"
                >
                  სტრატეგიული დაცვა
                </span>
              </motion.div>

              {/* Main Headline Block 1 */}
              <div
                className="absolute"
                style={{
                  position: 'absolute',
                  width: '849px',
                  height: '238px',
                  left: '623px',
                  top: '0px',
                }}
              >
                <motion.h2
                  variants={textSentenceVariant}
                  className="font-big-shoulders"
                  style={{
                    fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 900,
                    fontSize: '52px',
                    lineHeight: '115%',
                  }}
                >
                  <AnimatedTextWords
                    text="ჩვენ ვიცავთ თქვენს თავისუფლებას უმკაცრესი საპროცესო სიზუსტითა და ურყევი სტრატეგიით"
                    colorClass="text-[#F2ECEC]"
                  />{' '}
                  <AnimatedTextWords
                    text="პირველივე წუთიდან"
                    colorClass="text-[#D3AF37]/60"
                  />
                </motion.h2>
              </div>

              {/* Main Headline Block 2 */}
              <div
                className="absolute"
                style={{
                  position: 'absolute',
                  width: '850px',
                  height: '174px',
                  left: '374px',
                  top: '260px',
                }}
              >
                <motion.h3
                  variants={textSentenceVariant}
                  className="font-big-shoulders"
                  style={{
                    fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 900,
                    fontSize: '52px',
                    lineHeight: '115%',
                  }}
                >
                  <AnimatedTextWords
                    text="21+ წლიანი გამოცდილება"
                    colorClass="text-[#D3AF37]"
                  />{' '}
                  <AnimatedTextWords
                    text="საქართველოს სასამართლოებში თქვენი უფლებების სრული გამარჯვებისათვის."
                    colorClass="text-[#F2ECEC]"
                  />
                </motion.h3>
              </div>

              {/* Lawyer Portrait Card */}
              <motion.div
                variants={mediaCardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="absolute overflow-hidden rounded-[10px] border border-[#D3AF37]/30 shadow-2xl"
                style={{
                  position: 'absolute',
                  width: '224px',
                  height: '270px',
                  left: '1248px',
                  top: '160px',
                }}
              >
                <Image
                  src={topAboutImg}
                  alt="GLC Law Company Advocate Giorgi Gubeladze"
                  fill
                  priority
                  unoptimized
                  sizes="224px"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105 filter contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-[11px] font-bold text-[#D3AF37] uppercase tracking-wider text-center font-geist">
                  გიორგი გუბელაძე (GBA #10044)
                </div>
              </motion.div>
            </div>
          </div>

          {/* MOBILE & TABLET RESPONSIVE FALLBACK */}
          <div className="flex lg:hidden flex-col gap-6 w-full">
            <motion.div variants={fadeInUp}>
              <span className="font-geist font-bold text-[14px] leading-[120%] tracking-[0.2em] text-[#D3AF37] uppercase">
                სტრატეგიული დაცვა // 21+ წელი
              </span>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.h2
                variants={textSentenceVariant}
                className="font-big-shoulders font-[900] text-[clamp(28px,5vw,42px)] leading-[115%] tracking-tight"
              >
                <AnimatedTextWords
                  text="ჩვენ ვიცავთ თქვენს თავისუფლებას უმკაცრესი საპროცესო სიზუსტითა და ურყევი სტრატეგიით"
                  colorClass="text-[#F2ECEC]"
                />{' '}
                <AnimatedTextWords
                  text="პირველივე წუთიდან"
                  colorClass="text-[#D3AF37]/60"
                />
              </motion.h2>

              <motion.h3
                variants={textSentenceVariant}
                className="font-big-shoulders font-[900] text-[clamp(26px,4.5vw,38px)] leading-[115%] tracking-tight"
              >
                <AnimatedTextWords
                  text="21+ წლიანი გამოცდილება"
                  colorClass="text-[#D3AF37]"
                />{' '}
                <AnimatedTextWords
                  text="საქართველოს სასამართლოებში თქვენი უფლებების სრული გამარჯვებისათვის."
                  colorClass="text-[#F2ECEC]"
                />
              </motion.h3>
            </div>

            <motion.div
              variants={mediaCardVariants}
              className="relative w-[220px] h-[260px] overflow-hidden rounded-[8px] border border-[#D3AF37]/30 shadow-xl"
            >
              <Image
                src={topAboutImg}
                alt="Advocate Giorgi Gubeladze"
                fill
                unoptimized
                sizes="220px"
                className="object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>

        {/* BOTTOM ROW (5-CARD LEGAL PHOTOGRAPHY ROW) */}
        <div className="w-full flex justify-end">
          <div
            className="hidden lg:grid grid-cols-12 gap-x-3 xl:gap-x-5 w-full items-center ml-auto"
            style={{
              maxWidth: `${1472 * desktopScale}px`,
            }}
          >
            {ABOUT_MEDIA_ROW.map((item, idx) => {
              const startCols = ['col-span-2', 'col-start-4 col-span-2', 'col-start-7 col-span-2', 'col-start-9 col-span-2', 'col-start-11 col-span-2'];
              return (
                <motion.div
                  key={item.id}
                  variants={mediaCardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`${startCols[idx]} relative w-full aspect-[16/10] max-h-[135px] rounded-[6px] overflow-hidden bg-[#0B0F13] border border-[#D3AF37]/20 shadow-md group`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 1536px) 200px, 240px"
                    className="object-cover object-center filter brightness-[0.75] contrast-[1.1] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.95]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Fallback */}
          <div className="flex lg:hidden flex-row gap-3 w-full items-center overflow-x-auto pb-2 scrollbar-none">
            {ABOUT_MEDIA_ROW.map((item) => (
              <motion.div
                key={item.id}
                variants={mediaCardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative shrink-0 w-[180px] sm:w-[220px] aspect-[16/10] rounded-[6px] overflow-hidden bg-[#0B0F13] border border-[#D3AF37]/20 shadow-md group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 180px, 220px"
                  className="object-cover object-center filter brightness-[0.75] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
