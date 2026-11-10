'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';
import ScrollLetterReveal from '@/src/components/common/ScrollLetterReveal';

// Background Assets for 4 Procedural Protocol Cards
import card1Img from '@/src/assets/CARD1.png';
import card2Img from '@/src/assets/CARD2.png';
import card3Img from '@/src/assets/CARD3.png';
import card4Img from '@/src/assets/CARD4.png';

export default function Process() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';
  const isRus = language === 'RUS';

  const badgeText = isGeo
    ? 'საპროცესო პროტოკოლი'
    : isEng
    ? 'PROCEDURAL PROTOCOL'
    : isRus
    ? 'ПРОЦЕССУАЛЬНЫЙ ПРОТОКОЛ'
    : 'USUL PROTOKOLÜ';

  const headingText = isGeo
    ? 'დაცვის 4 ეტაპი'
    : isEng
    ? '4 stages of defence'
    : isRus
    ? '4 этапа защиты'
    : '4 savunma aşaması';

  const subText = isGeo
    ? 'სისხლისსამართლებრივი დაცვის მკაცრი მექანიზმი დაკავების პირველივე წუთიდან სასამართლოში წარმომადგენლობამდე.'
    : isEng
    ? 'A strict criminal defense mechanism from the first minutes of detention to courtroom representation.'
    : isRus
    ? 'Строгий механизм уголовной защиты с первых минут задержания до представительства в суде.'
    : 'Gözaltının ilk dakikalarından mahkeme temsiline kadar tavizsiz ceza savunma mekanizması.';

  const steps = [
    {
      number: '1.',
      image: card1Img || '/CARD1.png',
      title: isGeo
        ? 'ოპერატიული რეაგირება'
        : isEng
        ? 'Immediate Emergency Response'
        : isRus
        ? 'Оперативное реагирование'
        : 'Acil Müdahale',
      description: isGeo
        ? 'დაკავების, ჩხრეკისა და დაკითხვის პირველივე წუთებიდან ადვოკატის დაუყოვნებლივი ჩართვა და უკანონო ზეწოლის აღკვეთა.'
        : isEng
        ? 'Immediate lawyer presence from the first minutes of arrest, search, and interrogation to suppress procedural coercion.'
        : isRus
        ? 'Немедленное вступление адвоката с первых минут задержания, обыска и допроса для пресечения давления.'
        : 'Gözaltı, arama ve sorgunun ilk dakikalarından itibaren avukat katılımı ve hukuka aykırı baskının önlenmesi.',
    },
    {
      number: '2.',
      image: card2Img || '/CARD2.png',
      title: isGeo
        ? 'მტკიცებულებათა აუდიტი'
        : isEng
        ? 'Forensic Evidence Audit'
        : isRus
        ? 'Аудит доказательств'
        : 'Delil Denetimi',
      description: isGeo
        ? 'ბრალდების მასალების დეტალური ანალიზი, დამოუკიდებელი ექსპერტიზა და საპროცესო დარღვევით მოპოვებული მასალების გაბათილება.'
        : isEng
        ? 'Comprehensive scrutiny of prosecution files, independent forensic analysis, and invalidation of unlawfully obtained evidence.'
        : isRus
        ? 'Детальный анализ материалов обвинения, независимая экспертиза и признание недопустимыми полученных с нарушением материалов.'
        : 'İddia makamı delillerinin incelenmesi, bağımsız bilirkişi raporları ve usulsüz delillerin hükümsüz kılınması.',
    },
    {
      number: '3.',
      image: card3Img || '/CARD3.png',
      title: isGeo
        ? 'აღკვეთის ღონისძიება'
        : isEng
        ? 'Bail & Custody Defense'
        : isRus
        ? 'Мера пресечения и залог'
        : 'Adli Kontrol ve Kefalet',
      description: isGeo
        ? 'პატიმრობის ალტერნატივების (გირაო, თავდებობა) მიღწევა და რეგულარული ვიზიტები წინასწარი დაკავების იზოლატორსა თუ პენიტენციურ დაწესებულებებში.'
        : isEng
        ? 'Securing bail alternatives to incarceration and regular visits to detention and penitentiary facilities.'
        : isRus
        ? 'Достижение альтернатив аресту (залог, поручительство) и регулярные визиты в изоляторы и пенитенциарные учреждения.'
        : 'Tutuklama yerine kefalet ve adli kontrolün sağlanması; gözaltı ve cezaevlerinde düzenli avukat görüşmeleri.',
    },
    {
      number: '4.',
      image: card4Img || '/CARD4.png',
      title: isGeo
        ? 'სასამართლო დაცვა'
        : isEng
        ? 'Courtroom Trial Advocacy'
        : isRus
        ? 'Судебная защита и оправдание'
        : 'Duruşma ve Beraat Savunması',
      description: isGeo
        ? 'მოწმეთა ჯვარედინი დაკითხვა, ურყევი მტკიცებულებითი ბაზა და ბრძოლა გამამართლებელი განაჩენისათვის.'
        : isEng
        ? 'Cross-examination of witnesses, ironclad defense evidentiary foundation, and fight for a full acquittal.'
        : isRus
        ? 'Перекрестный допрос свидетелей, несокрушимая доказательственная база и борьба за оправдательный приговор.'
        : 'Tanıkların çapraz sorgusu, sarsılmaz delil temeli ve beraat için tavizsiz mücadele.',
    },
  ];

  const topHeaderVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="process"
      className="relative z-20 w-full bg-[#0D121F] border-b border-[#D3AF37]/15 text-[#F3ECEC] overflow-hidden select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12"
      style={{ backgroundColor: '#0D121F' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Header: Perfectly Center-Aligned & Symmetrical */}
        <motion.div
          variants={topHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-4xl flex flex-col items-center justify-center text-center mx-auto mb-14 sm:mb-16 px-4"
        >
          <h2 className="font-big-shoulders font-[900] uppercase text-white tracking-tight leading-tight text-3xl sm:text-5xl lg:text-6xl text-center">
            <ScrollLetterReveal text={headingText} delay={0.08} stagger={0.016} />
          </h2>

          <p className="font-geist font-normal text-sm sm:text-base lg:text-lg text-gray-300/90 mt-4 max-w-2xl text-center leading-relaxed">
            <ScrollLetterReveal text={subText} delay={0.2} stagger={0.008} />
          </p>
        </motion.div>

        {/* 4 Cards Grid with Embedded CARD1, CARD2, CARD3, CARD4 Backgrounds */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D3AF37]/30 rounded-2xl overflow-hidden shadow-2xl"
        >
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={step.number}
                variants={cardItemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col justify-between items-start p-7 sm:p-8 lg:p-9 transition-all duration-300 cursor-pointer min-h-[330px] overflow-hidden ${
                  index !== 0 ? 'lg:border-l lg:border-[#D3AF37]/20' : ''
                } ${
                  index % 2 !== 0 ? 'sm:border-l sm:border-[#D3AF37]/20 lg:border-l' : ''
                } ${
                  index >= 2 ? 'border-t sm:border-t-0 border-[#D3AF37]/20' : ''
                }`}
              >
                {/* Background Image Layer: Embedded Photography with subtle blur & delicate dark glassmorphism */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center filter brightness-[0.92] contrast-[1.08] blur-[0.5px] transition-transform duration-700 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  {/* Refined delicate dark glassmorphism gradient shadow overlay (40% - 68% balanced range) */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(180deg, rgba(3, 5, 8, 0.32) 0%, rgba(3, 5, 8, 0.42) 50%, rgba(3, 5, 8, 0.60) 100%)'
                        : 'linear-gradient(180deg, rgba(3, 5, 8, 0.38) 0%, rgba(3, 5, 8, 0.48) 50%, rgba(3, 5, 8, 0.68) 100%)'
                    }}
                  />
                  {/* Subtle directional vignette for text readability */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#030508]/65 via-transparent to-[#030508]/15 pointer-events-none" 
                  />
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
