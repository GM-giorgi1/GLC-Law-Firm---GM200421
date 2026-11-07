'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';

function AnimatedMetricNumber({
  value,
  isOrange,
}: {
  value: string;
  isOrange: boolean;
}) {
  return (
    <div
      className="font-big-shoulders font-[900] uppercase text-[60px] sm:text-[72px] lg:text-[84px] leading-none select-none tracking-tight transition-colors duration-300"
      style={{
        fontFamily: "'Big Shoulders Display', 'Antonio', sans-serif",
        fontWeight: 900,
        color: isOrange ? '#FEF5CD' : '#D3AF37',
      }}
    >
      {value}
    </div>
  );
}

export default function Metrics() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';
  const isRus = language === 'RUS';

  const badgeText = isGeo
    ? 'რატომ GLC LAW COMPANY'
    : isEng
    ? 'WHY GLC LAW COMPANY'
    : isRus
    ? 'ПОЧЕМУ GLC LAW COMPANY'
    : 'NEDEN GLC LAW COMPANY';

  const headlinePart1 = isGeo
    ? 'ჩვენ ვიცავთ თქვენს თავისუფლებას 21+ წლიანი გამოცდილებით, ურყევი პრინციპებითა და '
    : isEng
    ? 'Defending your liberty with 21+ years of trial mastery, unwavering integrity, and '
    : isRus
    ? 'Мы защищаем вашу свободу с 21+ годом судебного опыта, твердыми принципами и '
    : 'Özgürlüğünüzü 21+ yıllık duruşma deneyimi, sarsılmaz ilkeler ve ';

  const headlineHighlight = isGeo
    ? 'უმაღლესი საპროცესო ოსტატობით,'
    : isEng
    ? 'supreme courtroom advocacy,'
    : isRus
    ? 'высшим процессуальным мастерством,'
    : 'en üst düzey usul ustalığıyla,';

  const headlinePart2 = isGeo
    ? ' საქართველოს სასამართლოების ნებისმიერ ინსტანციაში.'
    : isEng
    ? ' across every court jurisdiction in Georgia.'
    : isRus
    ? ' в судебных инстанциях всех уровней Грузии.'
    : ' Gürcistan mahkemelerinin tüm kademelerinde savunuyoruz.';

  const sublineText = isGeo
    ? '[ საადვოკატო პრაქტიკა // თბილისი & ბათუმი ]'
    : isEng
    ? '[ Criminal Trial Practice // Tbilisi & Batumi ]'
    : isRus
    ? '[ Судебная практика // Тбилиси и Батуми ]'
    : '[ Ceza Dava Uygulaması // Tiflis ve Batum ]';

  const metricsData = [
    {
      id: 'exp',
      number: '21+',
      label: isGeo
        ? 'წლიანი გამოცდილება'
        : isEng
        ? 'Years of Experience'
        : isRus
        ? 'Лет практики'
        : 'Yıllık Deneyim',
      description: isGeo
        ? 'სისხლისსამართლებრივი დაცვა და სასამართლო წარმომადგენლობა 2003 წლიდან.'
        : isEng
        ? 'Criminal trial defense and courtroom representation continuously since 2003.'
        : isRus
        ? 'Уголовная защита и судебное представительство непрерывно с 2003 года.'
        : '2003 yılından bu yana kesintisiz ceza savunması ve mahkeme temsili.',
    },
    {
      id: 'sat',
      number: '98%',
      label: isGeo
        ? 'სასამართლო შედეგი'
        : isEng
        ? 'Favorable Outcomes'
        : isRus
        ? 'Успешные дела'
        : 'Başarılı Sonuç',
      description: isGeo
        ? 'გამამართლებელი განაჩენები, საქმის შეწყვეტა და სასჯელის მინიმუმამდე დაყვანა.'
        : isEng
        ? 'Full acquittals, charges dismissed pre-trial, and sentence mitigation.'
        : isRus
        ? 'Оправдательные приговоры, прекращение дел и минимизация наказаний.'
        : 'Beraat kararları, kovuşturmaya yer olmadığı kararları ve ceza indirimi.',
    },
    {
      id: 'response',
      number: '24/7',
      label: isGeo
        ? 'ოპერატიული რეაგირება'
        : isEng
        ? 'Emergency Response'
        : isRus
        ? 'Реагирование 24/7'
        : 'Acil Müdahale',
      description: isGeo
        ? 'ადვოკატის დაუყოვნებლივი გასვლა დაკავების ადგილზე, იზოლატორსა და დაკითხვებზე.'
        : isEng
        ? 'Immediate lawyer presence at detention sites, police stations, and interrogations.'
        : isRus
        ? 'Немедленный выезд адвоката на место задержания, в изолятор и на допросы.'
        : 'Gözaltı merkezine, emniyete ve sorguya derhal avukat intikali.',
    },
    {
      id: 'cases',
      number: '1500+',
      label: isGeo
        ? 'დაცული საქმე'
        : isEng
        ? 'Litigated Cases'
        : isRus
        ? 'Защищенных дел'
        : 'Savunulan Dava',
      description: isGeo
        ? 'წარმატებით წარმართული სისხლის სამართლის საქმეები საქართველოს ყველა ინსტანციაში.'
        : isEng
        ? 'Successfully defended criminal defense matters across all courts of Georgia.'
        : isRus
        ? 'Успешно проведенные уголовные дела во всех судебных инстанциях Грузии.'
        : 'Gürcistan genelindeki tüm mahkemelerde başarıyla sonuçlandırılmış ceza davaları.',
    },
  ];

  const topHeaderVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.2 },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="metrics"
      className="relative z-20 w-full bg-[#030508] border-b border-[#D3AF37]/15 text-[#F3ECEC] overflow-hidden select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12"
      style={{ backgroundColor: '#030508' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-start gap-14 sm:gap-16">
        
        {/* TOP ROW */}
        <motion.div
          variants={topHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-14"
        >
          <div className="shrink-0 pt-1">
            <span className="font-geist font-bold text-xs uppercase text-[#D3AF37] tracking-[0.2em] px-3 py-1.5 rounded-full border border-[#D3AF37]/35 bg-[#0E121A]/80">
              {badgeText}
            </span>
          </div>

          <div className="w-full max-w-4xl flex flex-col items-start gap-6">
            <h2 className="font-big-shoulders font-[900] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight">
              <span className="text-[#F3ECEC]">{headlinePart1}</span>
              <span className="text-[#D3AF37]">{headlineHighlight}</span>
              <span className="text-gray-400">{headlinePart2}</span>
            </h2>

            <div className="flex flex-row items-center gap-3">
              <div className="w-4 h-4 bg-[#D3AF37] shrink-0 rounded-sm" />
              <span className="font-geist font-medium text-xs sm:text-sm text-gray-300">
                {sublineText}
              </span>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM ROW: 4 METRICS CARDS */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D3AF37]/30 rounded-2xl overflow-hidden shadow-2xl"
        >
          {metricsData.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={item.id}
                variants={cardItemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col justify-between items-start p-7 sm:p-8 lg:p-9 transition-colors duration-300 cursor-pointer min-h-[300px] ${
                  index !== 0 ? 'lg:border-l lg:border-[#D3AF37]/20' : ''
                } ${
                  index % 2 !== 0 ? 'sm:border-l sm:border-[#D3AF37]/20 lg:border-l' : ''
                } ${
                  index >= 2 ? 'border-t sm:border-t-0 border-[#D3AF37]/20' : ''
                }`}
                style={{
                  backgroundColor: isHovered ? '#0F1626' : '#060A12',
                }}
              >
                <div className="w-full">
                  <p className="font-geist font-normal text-xs sm:text-sm leading-relaxed text-gray-300">
                    {item.description}
                  </p>
                </div>

                <div className="w-full flex flex-col items-start gap-3 mt-12 sm:mt-16">
                  <AnimatedMetricNumber
                    value={item.number}
                    isOrange={isHovered}
                  />

                  <span className="font-geist font-bold text-sm sm:text-base uppercase tracking-wider text-gray-200">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
