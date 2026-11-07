'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  period: string;
  description: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'მმართველი პარტნიორი & უფროსი სისხლის სამართლის ადვოკატი',
    company: 'GLC Law Company',
    period: '2015 — დღემდე',
    description:
      'განსაკუთრებით მძიმე დანაშაულები, ეკონომიკური და თანამდებობრივი საქმეები, ნაფიც მსაჯულთა სასამართლო და უზენაესი საკასაციო წარმოება.',
  },
  {
    id: 'exp-2',
    role: 'წამყვანი საადვოკატო პრაქტიკა',
    company: 'საქართველოს ადვოკატთა ასოციაცია (GBA #10044)',
    period: '2009 — 2015',
    description:
      'ასობით წარმატებული სისხლის სამართლის პროცესი, დაუშვებელ მტკიცებულებათა ამორიცხვა და წინასწარი პატიმრობის გირაოთი შეცვლა.',
  },
  {
    id: 'exp-3',
    role: 'სისხლის სამართლის ადვოკატი',
    company: 'საადვოკატო გაერთიანება',
    period: '2005 — 2009',
    description:
      'საგამოძიებო ეტაპის სტრატეგიული დაცვა, 24/7 ვიზიტები წინასწარი დაკავების იზოლატორებში და საქალაქო სასამართლოების წარმოება.',
  },
  {
    id: 'exp-4',
    role: 'საპროცესო სამართლის სპეციალისტი',
    company: 'იურიდიული პრაქტიკა',
    period: '2003 — 2005',
    description:
      'სისხლის სამართლის საპროცესო გარანტიების დაცვა, თვითინკრიმინაციის გამორიცხვა და ბრალდებულთა ფუნდამენტური უფლებების რეალიზაცია.',
  },
];

export default function Experience() {
  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -36,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const timelineContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative z-30 w-full min-h-screen bg-[#06080C] text-[#F2ECEC] overflow-hidden select-none flex justify-center items-center py-[72px] lg:py-[86px]"
      style={{ backgroundColor: '#06080C' }}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="w-full flex flex-col items-center px-4 sm:px-8 lg:px-[64px] box-border gap-[48px] lg:gap-[64px]"
      >
        {/* TOP ROW */}
        <motion.div
          variants={headerVariants}
          className="w-full max-w-[870px] flex flex-col items-center text-center gap-[18px] lg:gap-[22px]"
        >
          <div
            className="flex items-center justify-center px-[20px] py-[8px] rounded-full bg-black/60 border border-[#D3AF37]/30"
          >
            <span
              className="font-geist font-bold text-[13px] sm:text-[14px] leading-[120%] uppercase text-[#D3AF37] tracking-[0.2em]"
            >
              საპროცესო პრაქტიკა
            </span>
          </div>

          <h2
            className="font-big-shoulders font-[900] text-[34px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[105%] uppercase tracking-tight text-white"
            style={{
              fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
              fontWeight: 900,
            }}
          >
            <div>ბრალდების განეიტრალება და</div>
            <div>
              <span className="text-[#D3AF37]">გამამართლებელი </span>
              <span className="text-white">განაჩენი</span>
            </div>
          </h2>
        </motion.div>

        {/* TIMELINE CARD CONTAINER */}
        <div className="w-full max-w-[1080px] flex flex-col items-center relative">
          <div
            className="w-full rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] border border-[#D3AF37]/25 bg-[#0B0F17]/80 p-4 sm:p-6 lg:p-[32px] flex flex-col items-center shadow-2xl backdrop-blur-md"
          >
            <div
              className="w-full rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] bg-[#03060A] border border-white/5 p-6 sm:p-8 lg:p-[36px] relative"
            >
              <div
                className="hidden lg:block absolute left-1/2 top-[44px] bottom-[44px] w-0 -translate-x-1/2 border-l border-dashed border-[#D3AF37]/30"
              />

              <motion.div
                variants={timelineContainerVariants}
                className="w-full flex flex-col gap-10 sm:gap-12 lg:gap-14"
              >
                {EXPERIENCES.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={rowVariants}
                    className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6 lg:gap-7 relative group"
                  >
                    <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
                      <h3
                        className="font-big-shoulders font-[900] text-[22px] sm:text-[26px] leading-[115%] uppercase text-white group-hover:text-[#D3AF37] transition-colors duration-300"
                        style={{
                          fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
                          fontWeight: 900,
                        }}
                      >
                        {item.company ? `${item.role} — ${item.company}` : item.role}
                      </h3>
                      <span className="font-geist font-bold text-[14px] leading-[140%] text-[#D3AF37] mt-1">
                        {item.period}
                      </span>
                    </div>

                    <div className="hidden lg:flex items-center justify-center relative z-10">
                      <div
                        className="w-[20px] h-[20px] rounded-full bg-[#D3AF37] border-[4px] border-[#03060A] shrink-0 transition-transform duration-300 group-hover:scale-125 shadow-[0_0_12px_#D3AF37]"
                      />
                    </div>

                    <div className="flex flex-col items-start text-left max-w-[420px] w-full lg:pl-2">
                      <p className="font-geist font-light text-[15px] sm:text-[16px] leading-[145%] text-gray-300 w-full">
                        {item.description}
                      </p>
                    </div>

                    {index < EXPERIENCES.length - 1 && (
                      <div className="block lg:hidden w-full h-[1px] bg-white/10 mt-4" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Button */}
            <motion.div
              variants={rowVariants}
              className="mt-6 sm:mt-7 lg:mt-8 z-20 flex justify-center"
            >
              <motion.a
                href="https://wa.me/995599277794"
                target="_blank"
                rel="noopener noreferrer"
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative group overflow-hidden flex flex-row items-center justify-center pl-6 pr-2.5 py-2.5 sm:py-[10px] gap-3 sm:gap-4 w-auto h-[48px] sm:h-[60px] bg-gradient-to-r from-[#FEF5CD] via-[#D2AE37] to-[#BA9524] text-[#00070B] rounded-[8px] cursor-pointer shadow-xl"
              >
                <span
                  className="relative z-10 font-big-shoulders font-[900] text-[16px] sm:text-[20px] leading-[140%] uppercase text-[#00070B] tracking-wide whitespace-nowrap flex items-center"
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

                <div className="relative z-10 overflow-hidden w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] bg-[#00070B] rounded-[6px] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px] text-[#D3AF37] stroke-[2.5]" />
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
