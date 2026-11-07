'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface AwardItem {
  organization: string;
  title: string;
  date: string;
}

const AWARDS_LIST: AwardItem[] = [
  {
    organization: 'საქართველოს ადვოკატთა ასოციაცია (GBA)',
    title: 'სისხლის სამართლის ლიცენზირებული ადვოკატი (სიითი #10044)',
    date: '2005 — დღემდე',
  },
  {
    organization: 'სასამართლო წარმომადგენლობა',
    title: '21+ წლიანი უწყვეტი საპროცესო გამოცდილება ყველა ინსტანციაში',
    date: '2003 — 2026',
  },
  {
    organization: 'საპროცესო სამართალი',
    title: 'მტკიცებულებათა დაუშვებლად ცნობა და აღკვეთის ღონისძიების შეცვლა',
    date: 'პრაქტიკა',
  },
  {
    organization: 'ნაფიც მსაჯულთა ინსტიტუტი',
    title: 'განსაკუთრებით მძიმე კატეგორიის საქმეების წარმატებული დაცვა',
    date: 'აქტიური',
  },
];

export default function Awwards() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const awardsTextVariants: Variants = {
    hidden: { opacity: 0, y: -60, x: -30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const winningTextVariants: Variants = {
    hidden: { opacity: 0, y: 60, x: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const tableRowVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="awards"
      className="relative z-30 w-full min-h-screen bg-[#00070B] text-[#F2ECEC] overflow-hidden select-none flex justify-center items-center py-[84px]"
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full flex flex-col justify-between items-start px-6 sm:px-10 lg:px-[64px] box-border gap-[48px] lg:gap-[72px] relative"
      >
        {/* TOP ROW */}
        <div className="w-full relative flex flex-col lg:flex-row items-center justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]">
          
          <motion.div
            variants={fadeUpVariants}
            className="w-full lg:w-auto flex justify-start lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mb-4 lg:mb-0"
          >
            <span
              className="font-geist font-bold text-[14px] sm:text-[15px] leading-[120%] uppercase text-[#D3AF37] tracking-[0.2em]"
            >
              კვალიფიკაცია
            </span>
          </motion.div>

          {/* Center Offset Typography */}
          <div className="w-full flex justify-center items-center z-10 my-4 lg:my-0">
            <div className="flex flex-col items-start">
              <motion.h2
                variants={awardsTextVariants}
                className="font-big-shoulders font-[900] uppercase text-[#F2ECEC] tracking-tight leading-[0.88] text-[50px] sm:text-[100px] md:text-[130px] lg:text-[160px]"
                style={{
                  fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                  fontWeight: 900,
                  color: '#F2ECEC',
                }}
              >
                LEGAL
              </motion.h2>

              <motion.h2
                variants={winningTextVariants}
                className="font-big-shoulders font-[900] uppercase tracking-tight leading-[0.88] text-[50px] sm:text-[100px] md:text-[130px] lg:text-[160px] ml-[40px] sm:ml-[110px] lg:ml-[148px]"
                style={{
                  fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                  fontWeight: 900,
                  color: '#D3AF37',
                }}
              >
                ADVOCACY
              </motion.h2>
            </div>
          </div>

          {/* Top Right Action Button */}
          <motion.div
            variants={fadeUpVariants}
            className="w-full lg:w-auto flex justify-end lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 mt-6 lg:mt-0"
          >
            <motion.a
              href="https://wa.me/995599277794"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative group overflow-hidden flex flex-row items-center justify-center pl-5 sm:pl-6 pr-2.5 py-2.5 sm:py-[10px] gap-3 sm:gap-4 w-auto h-[48px] sm:h-[60px] bg-gradient-to-r from-[#FEF5CD] via-[#D2AE37] to-[#BA9524] text-[#00070B] rounded-[8px] cursor-pointer shadow-lg"
            >
              <span
                className="relative z-10 font-big-shoulders font-[900] text-[16px] sm:text-[20px] lg:text-[22px] leading-[140%] uppercase text-[#00070B] whitespace-nowrap flex items-center"
              >
                {'დაუკავშირდით ადვოკატს'.split('').map((char, index) => (
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
        </div>

        {/* BOTTOM ROW: CREDENTIALS TABLE */}
        <motion.div
          variants={fadeUpVariants}
          className="w-full border border-[#D3AF37]/30 rounded-[16px] overflow-hidden bg-[rgba(1,7,11,0.60)] backdrop-blur-md"
        >
          <div className="grid grid-cols-12 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 border-b border-[#D3AF37]/20 text-[12px] sm:text-[13px] tracking-widest uppercase font-geist font-bold text-[#D3AF37]">
            <div className="col-span-4 lg:col-span-3 text-left">
              ინსტიტუცია / ორგანო
            </div>
            <div className="col-span-5 lg:col-span-7 text-left">
              სტატუსი / საპროცესო კომპეტენცია
            </div>
            <div className="col-span-3 lg:col-span-2 text-right">
              პერიოდი
            </div>
          </div>

          <div className="flex flex-col divide-y divide-[#D3AF37]/15">
            {AWARDS_LIST.map((item) => (
              <motion.div
                key={item.title}
                variants={tableRowVariants}
                whileHover={{
                  backgroundColor: 'rgba(211, 175, 55, 0.06)',
                }}
                className="grid grid-cols-12 px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 items-center transition-colors duration-200 cursor-pointer group"
              >
                <div className="col-span-4 lg:col-span-3 text-left font-geist font-medium text-[14px] sm:text-[16px] text-gray-300 group-hover:text-white transition-colors">
                  {item.organization}
                </div>

                <div className="col-span-5 lg:col-span-7 text-left font-geist font-medium text-[14px] sm:text-[17px] lg:text-[19px] text-[#F2ECEC] group-hover:text-[#D3AF37] transition-colors pr-2">
                  {item.title}
                </div>

                <div className="col-span-3 lg:col-span-2 text-right font-geist font-bold text-[12px] sm:text-[14px] text-[#D3AF37] tracking-wider uppercase transition-colors">
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
