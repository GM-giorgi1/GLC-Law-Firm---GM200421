'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ShieldAlert, Scale, FileSearch, Gavel, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import { BlurWaveText } from '@/src/components/common/MotionReveal';

// Background Image Assets for 4 Strategic Pillars
import investigationImg from '@/src/assets/investigation.png';
import evidenceImg from '@/src/assets/evidence.png';
import detentionImg from '@/src/assets/detention.png';
import courtroomImg from '@/src/assets/courtroom.png';

export default function DefensePillarsBento() {
  const { language } = useLanguage();

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';
  const isRus = language === 'RUS';

  const badgeText = isGeo
    ? 'გამოცდილება. სტრატეგია. შედეგი.'
    : isEng
    ? 'EXPERIENCE. STRATEGY. RESULT.'
    : isRus
    ? 'ОПЫТ. СТРАТЕГИЯ. РЕЗУЛЬТАТ.'
    : 'DENEYİM. STRATEJİ. SONUÇ.';

  const headingText = isGeo
    ? 'სისხლისსამართლებრივი დაცვის 4 ფუნდამენტური საყრდენი'
    : isEng
    ? '4 Fundamental Pillars of Criminal Defense'
    : isRus
    ? '4 фундаментальные опоры уголовной защиты'
    : 'Ceza Savunmasının 4 Temel Dayanağı';

  const subText = isGeo
    ? 'საპროცესო სიზუსტე, საგამოძიებო კონტროლი და თავისუფლების უფლების ურყევი დაცვა სასამართლოს ყველა ინსტანციაში.'
    : isEng
    ? 'Procedural rigor, strict investigation oversight, and uncompromising defense of your personal liberty across all court jurisdictions.'
    : isRus
    ? 'Процессуальная строгость, жесткий контроль следствия и бескомпромиссная защита свободы во всех инстанциях.'
    : 'Usul titizliği, sıkı soruşturma denetimi ve tüm mahkeme kademelerinde kişisel özgürlüğün tavizsiz savunması.';

  const pillars = [
    {
      number: '01',
      icon: ShieldAlert,
      image: investigationImg || '/investigation.png',
      title: isGeo
        ? 'დაცვა გამოძიების ეტაპზე'
        : isEng
        ? 'Defense at Investigation Stage'
        : isRus
        ? 'Защита на стадии следствия'
        : 'Soruşturma Aşamasında Savunma',
      description: isGeo
        ? 'გამოძიების დაწყებიდანვე ვაფასებთ საქმის გარემოებებს, ვქმნით სტრატეგიას და ვიცავთ თქვენს უფლებებს. დროული სამართლებრივი ჩარევა ხელს უწყობს დაცვის ეფექტიანი სტრატეგიის ჩამოყალიბებას.'
        : isEng
        ? 'From the inception of investigation, we assess case circumstances, forge a proven strategy, and safeguard your rights. Timely legal intervention establishes an effective defense.'
        : isRus
        ? 'С самого начала следствия мы оцениваем обстоятельства дела, формируем стратегию и защищаем ваши права. Своевременное вмешательство обеспечивает эффективность защиты.'
        : 'Soruşturmanın başlangıcından itibaren delilleri değerlendirir, strateji kurar ve haklarınızı savunuruz. Zamanında müdahale etkin savunma sağlar.',
      feature: isGeo ? 'ადვოკატის ჩართვა გამოძიების ეტაპზე' : isEng ? 'Counsel at Investigation Stage' : isRus ? 'Участие адвоката на следствии' : 'Soruşturmaya Avukat Katılımı',
    },
    {
      number: '02',
      icon: FileSearch,
      image: evidenceImg || '/evidence.png',
      title: isGeo
        ? 'მტკიცებულებების მოპოვება და შეფასება'
        : isEng
        ? 'Obtaining & Evaluating Evidence'
        : isRus
        ? 'Сбор и правовая оценка доказательств'
        : 'Delillerin Toplanması ve Değerlendirilmesi',
      description: isGeo
        ? 'ვიკვლევთ საქმის მასალებს, ვამოწმებთ მტკიცებულებათა სანდოობას & დასაშვებობას, ვამზადებთ სამართლებრივ პოზიციას და ვატარებთ დამატებით საგამოძიებო მოქმედებებსა თუ ექსპერტიზას.'
        : isEng
        ? 'We scrutinize case materials, audit the credibility and admissibility of evidence, craft legal positioning, and conduct supplementary investigations or expert analysis.'
        : isRus
        ? 'Мы исследуем материалы дела, проверяем достоверность и допустимость доказательств, готовим правовую позицию и проводим экспертизы.'
        : 'Dava dosyalarını inceler, delillerin güvenilirliğini denetler, hukuki pozisyon hazırlar ve ek bilirkişi incelemeleri yaptırırız.',
      feature: isGeo ? 'მტკიცებულებების სამართლებრივი შეფასება' : isEng ? 'Legal Assessment of Evidence' : isRus ? 'Правовая оценка доказательств' : 'Delillerin Hukuki Değerlendirmesi',
    },
    {
      number: '03',
      icon: Scale,
      image: detentionImg || '/detention.png',
      title: isGeo
        ? 'აღკვეთის ღონისძიება და პატიმრობაში მყოფ პირთა დაცვა'
        : isEng
        ? 'Preventive Measures & Custody Defense'
        : isRus
        ? 'Меры пресечения и защита лиц под стражей'
        : 'Adli Kontrol ve Tutuklu Hakları Savunması',
      description: isGeo
        ? 'ვიცავთ კლიენტის ინტერესებს აღკვეთის ღონისძიების შერჩევის, შეცვლის და გაუქმების საკითხებზე. ვამზადებთ შუამდგომლობებს და უზრუნველყოფთ 24/7 ოპერატიულ კომუნიკაციას.'
        : isEng
        ? 'We defend our client on the selection, modification, and revocation of preventive custody. We prepare legal motions and guarantee 24/7 emergency communication.'
        : isRus
        ? 'Защищаем интересы при избрании, изменении и отмене меры пресечения. Готовим ходатайства и обеспечиваем связь 24/7.'
        : 'Tedbirlerin seçimi, değişimi ve iptalinde müvekkili savunuruz. İtiraz dilekçeleri hazırlar ve 7/24 iletişim sağlarız.',
      feature: isGeo ? 'აღკვეთის ღონისძიებაზე სამართლებრივი დახმარება' : isEng ? 'Bail & Custody Legal Assistance' : isRus ? 'Помощь по мерам пресечения' : 'Tedbir ve Tahliye Yardımı',
    },
    {
      number: '04',
      icon: Gavel,
      image: courtroomImg || '/courtroom.png',
      title: isGeo
        ? 'დაცვა სასამართლოში და გადაწყვეტილების გასაჩივრება'
        : isEng
        ? 'Courtroom Trial Defense & Appeals'
        : isRus
        ? 'Защита в суде и обжалование решений'
        : 'Duruşma Savunması ve Karar Temyizi',
      description: isGeo
        ? 'წარმოვადგენთ კლიენტის ინტერესებს საქალაქო, სააპელაციო თუ უზენაეს სასამართლოში: მტკიცებულებათა გამოკვლევა, მოწმეთა დაკითხვა თუ სწორი სტრატეგიული დაცვა.'
        : isEng
        ? 'We represent clients across District, Appellate, and Supreme Court jurisdictions: examining evidence, cross-examining witnesses, and delivering strategic defense.'
        : isRus
        ? 'Представляем клиентов в судах первой, апелляционной и кассационной инстанций: допрос свидетелей и стратегическая защита.'
        : 'İlk derece, İstinaf ve Yargıtay nezdinde temsil: delillerin incelenmesi, çapraz sorgu ve stratejik duruşma savunması.',
      feature: isGeo ? 'სასამართლოში წარმომადგენლობა' : isEng ? 'Courtroom Trial Representation' : isRus ? 'Судебное представительство' : 'Mahkemede Temsil',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="defense-pillars"
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
          {/* Top Badge: Strictly „გამოცდილება. სტრატეგია. შედეგი.“ without blinking dot */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#D3AF37]/40 bg-[#0E1322]/90 backdrop-blur-md shadow-sm mb-4">
            <span className="font-geist font-bold text-xs uppercase tracking-[0.2em] text-[#D3AF37]">
              {badgeText}
            </span>
          </div>

          <h2 className="font-big-shoulders font-[900] uppercase text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            <BlurWaveText text={headingText} />
          </h2>

          <p className="font-geist font-normal text-sm sm:text-base lg:text-lg text-gray-300/85 mt-4 max-w-2xl leading-relaxed">
            {subText}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 w-full"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.28, ease: 'easeOut' } }}
                className="group relative flex flex-col justify-between p-7 sm:p-9 lg:p-10 rounded-2xl overflow-hidden border border-[#D3AF37]/25 hover:border-[#D3AF37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.6),0_12px_28px_rgba(0,0,0,0.5),0_24px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(211,175,55,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.7),0_20px_40px_rgba(0,0,0,0.6),0_32px_64px_rgba(0,0,0,0.5),0_0_28px_rgba(211,175,55,0.22)] transition-all duration-300"
              >
                {/* Dedicated Background Image Layer (Positioned strictly BEHIND content) */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover object-center filter brightness-[0.78] contrast-[1.08] blur-[1.5px] transition-transform duration-700 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  {/* Refined delicate dark glassmorphism gradient shadow overlay (rgba(3, 5, 8, 0.75)) */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(180deg, rgba(3, 5, 8, 0.62) 0%, rgba(3, 5, 8, 0.75) 50%, rgba(3, 5, 8, 0.88) 100%)'
                    }}
                  />
                  {/* Directional vignette protecting bottom text readability */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#030508]/85 via-transparent to-[#030508]/30 pointer-events-none" 
                  />
                  {/* Subtle golden ambient highlight on hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D3AF37]/[0.03] group-hover:bg-[#D3AF37]/[0.10] rounded-bl-full pointer-events-none transition-colors duration-500" />
                </div>

                {/* Content Layer (relative z-10) */}
                <div className="relative z-10 w-full flex flex-col justify-between h-full">
                  
                  {/* Card Top Row - Statute reference purged */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A2234]/95 to-[#0A0F1A]/95 border border-[#D3AF37]/50 flex items-center justify-center text-[#D3AF37] group-hover:scale-105 group-hover:border-[#D3AF37] shadow-[0_4px_12px_rgba(0,0,0,0.7)] transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    {/* Oval container numbered badge with richer gold tone on hover */}
                    <div className="px-3.5 py-1 rounded-full border border-[#D3AF37]/40 bg-[#0B0F19]/85 backdrop-blur-md group-hover:bg-gradient-to-r group-hover:from-[#D3AF37]/30 group-hover:to-[#BA9524]/40 group-hover:border-[#D3AF37]/80 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                      <span className="font-big-shoulders font-[900] text-2xl sm:text-3xl text-[#D3AF37]/80 group-hover:text-[#FEF5CD] group-hover:drop-shadow-[0_0_8px_rgba(211,175,55,0.6)] transition-colors duration-300">
                        {pillar.number}
                      </span>
                    </div>
                  </div>

                  {/* Card Main Body with High-Contrast Typography */}
                  <div className="flex flex-col gap-3 my-2">
                    <h3 className="font-big-shoulders font-[900] uppercase text-2xl sm:text-3xl text-white group-hover:text-[#FEF5CD] transition-colors duration-200 tracking-tight leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                      {pillar.title}
                    </h3>

                    <p className="font-geist font-medium text-sm sm:text-base text-gray-100 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.98)] drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Card Footer Pill */}
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
