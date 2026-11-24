'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import ScrollLetterReveal from '@/src/components/common/ScrollLetterReveal';
import {
  PRACTICE_TESTIMONIALS_DATA,
  type PracticeTestimonialKey,
  type TestimonialCardData,
} from '@/src/data/practiceTestimonialsData';

const TESTIMONIALS_DATA: Record<string, TestimonialCardData[]> = {
  GEO: [
    {
      id: 0,
      name: 'დავით მიჩელი',
      country: 'დიდი ბრიტანეთი',
      role: 'კორპორაციული ინვესტორი',
      rating: 5,
      quote:
        '„გიორგიმ ყურადღებით მომისმინა, ყველაფერი დეტალურად და გასაგებად ამიხსნა და საუკეთესო შედეგისთვის იბრძოლა. ჩემი გამოცდილებით, ის ცალსახად არის საუკეთესო ადვოკატი ბათუმში, რომელთან თანამშრომლობაც უსაფრთხოების სრულ გარანტიას გაძლევს.“',
      seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
    },
    {
      id: 1,
      name: 'მარკუს სტერლინგი',
      country: 'გერმანია',
      role: 'ბიზნესის მფლობელი',
      rating: 5,
      quote:
        '„პირველივე კონსულტაციიდან საბოლოო გამარჯვებამდე, სტრატეგიულმა სიღრმემ ყოველგვარ მოლოდინს გადააჭარბა. GLC Law Company არის საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში.“',
      seoHighlight: 'საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში',
    },
    {
      id: 2,
      name: 'ჯულიან ვენსი',
      country: 'ავსტრალია',
      role: 'უძრავი ქონების დეველოპერი',
      rating: 5,
      quote:
        '„როდესაც ბიუროკრატიულმა ბარიერებმა მშენებლობა შეაჩერა, გიორგი და მისი გუნდი დაუყოვნებლივ ჩაერთნენ. მათ გაგვიწიეს საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში, რამაც ნებართვები რეკორდულ ვადაში მოგვიტანა.“',
      seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
    },
    {
      id: 3,
      name: 'არტურ პენდელტონი',
      country: 'აშშ',
      role: 'მმართველი პარტნიორი',
      rating: 5,
      quote:
        '„ჩვენი საინვესტიციო აქტივებისა და კომპანიის სამართლებრივი სტრუქტურა უმაღლეს დონეზე მომზადდა. გიორგი გუბელაძე არის საუკეთესო ადვოკატი ბათუმში, რომლის ეთიკა და სტრატეგიული სიზუსტე შეუდარებელია.“',
      seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
    },
    {
      id: 4,
      name: 'ელენა როსტოვა',
      country: 'კვიპროსი',
      role: 'კერძო ინვესტორი',
      rating: 5,
      quote:
        '„რთულ საერთაშორისო კომერციულ დავაში გიორგი გუბელაძის სტრატეგიულმა ხედვამ მილიონობით ლარის აქტივები გადაგვირჩინა. GLC Law Company უდავოდ არის საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში.“',
      seoHighlight: 'საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში',
    },
    {
      id: 5,
      name: 'მაიკლ ჩანგი',
      country: 'სინგაპური',
      role: 'ტექნოლოგიური მეწარმე',
      rating: 5,
      quote:
        '„კომპანიის რეგისტრაციიდან მსხვილი საინვესტიციო კონტრაქტის გაფორმებამდე, GLC-მ გაგვიწია საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში, რაც უცხოელი ინვესტორისთვის ფასდაუდებელია.“',
      seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
    },
    {
      id: 6,
      name: 'ლუკას მორო',
      country: 'საფრანგეთი',
      role: 'სასტუმრო ბიზნესის დირექტორი',
      rating: 5,
      quote:
        '„უმაღლესი დონის მომსახურება, სწრაფი რეაგირება და ურყევი თავდადება. გიორგი გუბელაძე არის საუკეთესო ადვოკატი ბათუმში, რომელთან თანამშრომლობაც საქართველოში ბიზნესის წარმართვის საუკეთესო გარანტიაა.“',
      seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
    },
    {
      id: 7,
      name: 'სოფია ალ-მანსური',
      country: 'არაბთა გაერთიანებული საამიროები',
      role: 'საერთაშორისო კლიენტი',
      rating: 5,
      quote:
        '„საოჯახო და უძრავი ქონების საკითხებში მივიღეთ საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში, სრული კონფიდენციალურობითა და რკინისებრი სამართლებრივი დაცვით.“',
      seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
    },
  ],
  ENG: [
    {
      id: 0,
      name: 'David Mitchell',
      country: 'United Kingdom',
      role: 'Corporate Litigation Client',
      rating: 5,
      quote:
        '"Giorgi listened carefully, explained everything clearly, and fought for the best outcome. He is unequivocally the best lawyer in Batumi, and I felt completely protected throughout the entire legal process."',
      seoHighlight: 'best lawyer in Batumi',
    },
    {
      id: 1,
      name: 'Marcus Sterling',
      country: 'Germany',
      role: 'Business Principal',
      rating: 5,
      quote:
        '"From the initial strategy consultation to final resolution, their execution exceeded every expectation. GLC Law Company is undeniably the best law firm in Batumi and all Georgia."',
      seoHighlight: 'best law firm in Batumi and all Georgia',
    },
    {
      id: 2,
      name: 'Julian Vance',
      country: 'Australia',
      role: 'Real Estate Developer',
      rating: 5,
      quote:
        '"When municipal hurdles stalled our construction, Giorgi intervened with decisive precision. They provided the top legal services in the Batumi region and Georgia, securing permits in record time."',
      seoHighlight: 'top legal services in the Batumi region and Georgia',
    },
    {
      id: 3,
      name: 'Arthur Pendelton',
      country: 'United States',
      role: 'Managing Partner',
      rating: 5,
      quote:
        '"Unmatched integrity, ethics, and discretion. Giorgi structured our corporate estate plan flawlessly; he is truly the best attorney in Batumi."',
      seoHighlight: 'best attorney in Batumi',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      country: 'Cyprus',
      role: 'Private Investor',
      rating: 5,
      quote:
        '"Navigating high-stakes cross-border litigation was daunting until Giorgi took command. GLC Law Company is the best law firm in Batumi and throughout Georgia."',
      seoHighlight: 'best law firm in Batumi and throughout Georgia',
    },
    {
      id: 5,
      name: 'Michael Chang',
      country: 'Singapore',
      role: 'Tech Entrepreneur',
      rating: 5,
      quote:
        '"From entity incorporation to complex investment drafting, GLC delivered the leading legal services in Batumi and Georgia, giving our business total certainty."',
      seoHighlight: 'leading legal services in Batumi and Georgia',
    },
    {
      id: 6,
      name: 'Lucas Moreau',
      country: 'France',
      role: 'Hospitality Director',
      rating: 5,
      quote:
        '"Elite standard of practice, swift response, and unwavering dedication. Giorgi is the top lawyer in Batumi, and working with him guarantees absolute peace of mind."',
      seoHighlight: 'top lawyer in Batumi',
    },
    {
      id: 7,
      name: 'Sophia Al-Mansoor',
      country: 'United Arab Emirates',
      role: 'Private Client',
      rating: 5,
      quote:
        '"For high-stakes family assets and real estate transactions, we received the best legal services in the Batumi region and Georgia with absolute discretion and strength."',
      seoHighlight: 'best legal services in the Batumi region and Georgia',
    },
  ],
  RUS: [
    {
      id: 0,
      name: 'Давид Митчелл',
      country: 'Великобритания',
      role: 'Корпоративный клиент',
      rating: 5,
      quote:
        '«Георгий внимательно выслушал, доступно объяснил каждый этап и добился победы. Он однозначно лучший адвокат в Батуми, с которым чувствуешь себя в полной безопасности.»',
      seoHighlight: 'лучший адвокат в Батуми',
    },
    {
      id: 1,
      name: 'Маркус Стерлинг',
      country: 'Германия',
      role: 'Владелец бизнеса',
      rating: 5,
      quote:
        '«От первой консультации до победы в деле стратегическая глубина превзошла все ожидания. GLC Law Company — это лучшая юридическая компания в Батуми и всей Грузии.»',
      seoHighlight: 'лучшая юридическая компания в Батуми и всей Грузии',
    },
    {
      id: 2,
      name: 'Джулиан Вэнс',
      country: 'Австралия',
      role: 'Девелопер недвижимости',
      rating: 5,
      quote:
        '«Когда бюрократические препятствия остановили проект, Георгий оперативно решил вопрос. Нам предоставили лучшие юридические услуги в Батуми и Грузии.»',
      seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
    },
    {
      id: 3,
      name: 'Артур Пенделтон',
      country: 'США',
      role: 'Управляющий партнер',
      rating: 5,
      quote:
        '«Непререкаемая честность, этика и конфиденциальность. Георгий структурировал активы безупречно; он лучший адвокат в Батуми для международного бизнеса.»',
      seoHighlight: 'лучший адвокат в Батуми',
    },
    {
      id: 4,
      name: 'Елена Ростова',
      country: 'Кипр',
      role: 'Частный инвестор',
      rating: 5,
      quote:
        '«В сложном коммерческом споре стратегический подход сохранил активы на миллионы. GLC Law Company — безусловно лучшая юридическая компания в Батуми и всей Грузии.»',
      seoHighlight: 'лучшая юридическая компания в Батуми и всей Грузии',
    },
    {
      id: 5,
      name: 'Майкл Чанг',
      country: 'Сингапур',
      role: 'Технологический предприниматель',
      rating: 5,
      quote:
        '«От учреждения компании до подписания крупных сделок мы получили лучшие юридические услуги в Батуми и Грузии, дающие абсолютную правовую уверенность.»',
      seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
    },
    {
      id: 6,
      name: 'Лукас Моро',
      country: 'Франция',
      role: 'Отельер и инвестор',
      rating: 5,
      quote:
        '«Высочайший стандарт практики, быстрое реагирование и преданность клиенту. Георгий — лучший адвокат в Батуми для защиты инвестиций.»',
      seoHighlight: 'лучший адвокат в Батуми',
    },
    {
      id: 7,
      name: 'София Аль-Мансур',
      country: 'ОАЭ',
      role: 'Частный клиент',
      rating: 5,
      quote:
        '«В семейных и имущественных вопросах нам гарантировали лучшие юридические услуги в Батуми и Грузии при абсолютной конфиденциальности.»',
      seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
    },
  ],
  TUR: [
    {
      id: 0,
      name: 'David Mitchell',
      country: 'Birleşik Krallık',
      role: 'Kurumsal Dava Müvekkili',
      rating: 5,
      quote:
        '"Giorgi süreci dikkatle dinledi ve mükemmel bir netice elde etti. Kendisi şüphesiz Batum\'daki en iyi avukat ve tam bir güvence sağladı."',
      seoHighlight: "Batum'daki en iyi avukat",
    },
    {
      id: 1,
      name: 'Marcus Sterling',
      country: 'Almanya',
      role: 'Şirket Sahibi',
      rating: 5,
      quote:
        '"İlk danışmanlıktan zaferle sonuçlanan karara kadar her şey kusursuzdu. GLC Law Company, Batum ve tüm Gürcistan\'daki en iyi hukuk bürosu unvanını hak ediyor."',
      seoHighlight: "Batum ve tüm Gürcistan'daki en iyi hukuk bürosu",
    },
    {
      id: 2,
      name: 'Julian Vance',
      country: 'Avustralya',
      role: 'Gayrimenkul Yatırımcısı',
      rating: 5,
      quote:
        '"Bürokratik engeller projemizi durdurduğunda devreye girdiler. Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler ile ruhsatlarımızı rekor sürede aldık."',
      seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
    },
    {
      id: 3,
      name: 'Arthur Pendelton',
      country: 'ABD',
      role: 'Yönetici Ortak',
      rating: 5,
      quote:
        '"Eşsiz dürüstlük, yüksek mesleki etik ve tam gizlilik. Giorgi Gubeladze tartışmasız Batum\'daki en iyi avukat olarak şirketimizi başarıyla temsil etti."',
      seoHighlight: "Batum'daki en iyi avukat",
    },
    {
      id: 4,
      name: 'Elena Rostova',
      country: 'Kıbrıs',
      role: 'Özel Yatırımcı',
      rating: 5,
      quote:
        '"Uluslararası ticari uyuşmazlığımızda milyonlarca liralık varlığımızı korudu. GLC Law Company, Batum ve tüm Gürcistan\'daki en iyi hukuk bürosu olduğunu kanıtladı."',
      seoHighlight: "Batum ve tüm Gürcistan'daki en iyi hukuk bürosu",
    },
    {
      id: 5,
      name: 'Michael Chang',
      country: 'Singapur',
      role: 'Teknoloji Girişimcisi',
      rating: 5,
      quote:
        '"Şirket kuruluşundan sözleşmelere kadar Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler ile yabancı yatırımcı olarak bize tam güvence sağladılar."',
      seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
    },
    {
      id: 6,
      name: 'Lucas Moreau',
      country: 'Fransa',
      role: 'Otelcilik Direktörü',
      rating: 5,
      quote:
        '"Üst düzey avukatlık, hızlı iletişim ve tavizsiz özveri. Giorgi kesinlikle Batum\'daki en iyi avukat ve Gürcistan\'daki en sağlam ortağımız."',
      seoHighlight: "Batum'daki en iyi avukat",
    },
    {
      id: 7,
      name: 'Sophia Al-Mansoor',
      country: 'BAE',
      role: 'Özel Müvekkil',
      rating: 5,
      quote:
        '"Aile ve miras hukukunda Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler desteğiyle ailemize sarsılmaz bir hukuki güvence sağladılar."',
      seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
    },
  ],
};

function renderHighlightedQuote(quote: string, highlight?: string) {
  if (!highlight || !quote.includes(highlight)) {
    return <span className="text-[#E2E8F0]">{quote}</span>;
  }
  const parts = quote.split(highlight);
  return (
    <>
      <span className="text-[#CBD5E1]">{parts[0]}</span>
      <span className="font-semibold text-[15px] sm:text-[16px] lg:text-[16.5px] bg-gradient-to-r from-[#FFF4CC] via-[#E2C359] to-[#CDA12B] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(211,175,55,0.45)] px-0.5 inline">
        {highlight}
      </span>
      <span className="text-[#CBD5E1]">{parts.slice(1).join(highlight)}</span>
    </>
  );
}

interface TestimonialsProps {
  practiceKey?: PracticeTestimonialKey;
  sectionId?: string;
}

export default function Testimonials({
  practiceKey,
  sectionId = 'testimonials',
}: TestimonialsProps) {
  const { language } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const singleSetRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const offsetRef = useRef(0);
  const targetNudgeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const activeMap = practiceKey
    ? PRACTICE_TESTIMONIALS_DATA[practiceKey]
    : TESTIMONIALS_DATA;
  const testimonials = activeMap[language] || activeMap.GEO;

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Reset scroll offset cleanly when dataset/language changes
  useEffect(() => {
    offsetRef.current = 0;
    targetNudgeRef.current = 0;
    if (trackRef.current) {
      trackRef.current.style.transform = 'translate3d(0px, 0, 0)';
    }
  }, [practiceKey, language]);

  // Continuous requestAnimationFrame marquee — deliberately slower than Blogs (46px/s vs 78px/s)
  // so client quotes remain serene, fluid, and comfortable to read.
  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();
    const SPEED_PX_PER_SEC = 46;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const singleSetEl = singleSetRef.current;
      const trackEl = trackRef.current;

      if (singleSetEl && trackEl) {
        const setWidth = singleSetEl.offsetWidth;
        if (setWidth > 0) {
          if (Math.abs(targetNudgeRef.current) > 0.5) {
            const step = targetNudgeRef.current * Math.min(1, dt * 10);
            offsetRef.current += step;
            targetNudgeRef.current -= step;
          } else if (!isPausedRef.current && !isDraggingRef.current) {
            offsetRef.current -= SPEED_PX_PER_SEC * dt;
          }

          while (offsetRef.current <= -setWidth) {
            offsetRef.current += setWidth;
          }
          while (offsetRef.current > 0) {
            offsetRef.current -= setWidth;
          }

          trackEl.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [testimonials.length, practiceKey]);

  const handleStep = (direction: 'prev' | 'next') => {
    const firstCard = singleSetRef.current?.querySelector('[data-testimonial-card]') as HTMLElement | null;
    const cardStep = firstCard ? firstCard.offsetWidth + 24 : 420;
    targetNudgeRef.current += direction === 'next' ? -cardStep : cardStep;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragDistanceRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    dragStartXRef.current = e.clientX;
    dragDistanceRef.current += Math.abs(dx);
    offsetRef.current += dx;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const badgeLabel =
    language === 'GEO'
      ? 'უკუკავშირი'
      : language === 'ENG'
      ? 'TESTIMONIALS'
      : language === 'RUS'
      ? 'ОТЗЫВЫ'
      : 'MÜVEKKİL YORUMLARI';

  const headlineLabel =
    language === 'GEO'
      ? 'რას ამბობენ კლიენტები ჩვენზე'
      : language === 'ENG'
      ? 'WHAT OUR CLIENTS SAY ABOUT US'
      : language === 'RUS'
      ? 'ЧТО ГОВОРЯТ О НАС КЛИЕНТЫ'
      : 'MÜVEKKİLLERİMİZİN BİZİM HAKKIMIZDA SÖYLEDİKLERİ';

  const subtitleLabel =
    language === 'GEO'
      ? 'გულწრფელი შეფასებები მეწარმეებისგან, ოჯახებისა და ორგანიზაციებისგან, რომლებმაც საკუთარი უფლებების დაცვა ჩვენ გვანდეს.'
      : language === 'ENG'
      ? 'Direct feedback from entrepreneurs, families, and multinational organizations who trust our counsel.'
      : language === 'RUS'
      ? 'Искренние отзывы предпринимателей, семей и международных организаций, доверивших нам свою защиту.'
      : 'Haklarının korunmasında bize güvenen girişimcilerden ve ailelerden gelen doğrudan geri bildirimler.';

  const renderTestimonialCard = (item: TestimonialCardData, isClone = false) => (
    <div
      key={`${isClone ? 'clone' : 'orig'}-${item.id}`}
      data-testimonial-card={!isClone ? 'true' : undefined}
      className="w-[84vw] sm:w-[370px] md:w-[400px] lg:w-[420px] shrink-0 flex"
    >
      {/* Clean, Elite Dark Obsidian Glassmorphism Card with Framer Motion hover elevation */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative group w-full bg-[#090D16]/90 sm:bg-[#090D16]/95 backdrop-blur-xl rounded-[22px] p-6 sm:p-8 border border-[#D3AF37]/25 hover:border-[#D3AF37]/80 shadow-[0_16px_45px_rgba(0,0,0,0.7),0_0_20px_rgba(211,175,55,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(211,175,55,0.28)] flex flex-col justify-between transition-colors duration-500 overflow-hidden cursor-pointer select-none"
      >
        {/* Radiant Ambient Luxury Color Wave inside the card */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[22px] z-0">
          <motion.div
            animate={{
              x: ['-25%', '25%', '-25%'],
              y: ['-15%', '20%', '-15%'],
              scale: [1, 1.18, 1],
              opacity: [0.18, 0.35, 0.18],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-br from-[#D3AF37]/35 via-[#E5A93C]/25 to-transparent blur-[55px]"
          />
          <motion.div
            animate={{
              x: ['25%', '-25%', '25%'],
              y: ['20%', '-15%', '20%'],
              scale: [1.15, 0.95, 1.15],
              opacity: [0.15, 0.30, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-tl from-[#BA9524]/30 via-[#D3AF37]/15 to-transparent blur-[60px]"
          />
          {/* Dynamic bronze and gold reflection sheen intensified on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D3AF37]/0 via-[#D3AF37]/[0.05] to-[#FFF4CC]/[0.10] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[22px]" />
          <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#D3AF37]/0 group-hover:bg-[#D3AF37]/15 blur-2xl transition-all duration-700 pointer-events-none" />
          {/* Subtle delicate glass sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/50 pointer-events-none" />
        </div>

        {/* Top: 5 Prominent Gold Rating Stars */}
        <div className="relative z-10 flex items-center justify-between mb-5">
          <div className="flex items-center gap-1">
            {[...Array(item.rating)].map((_, starIdx) => (
              <Star
                key={starIdx}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#D3AF37] text-[#D3AF37] stroke-[1.5] drop-shadow-[0_0_8px_rgba(211,175,55,0.5)]"
              />
            ))}
          </div>
          <span className="font-mono text-xs font-semibold text-[#D3AF37]/90 tracking-wider px-2 py-0.5 rounded-full bg-[#121622]/80 border border-[#D3AF37]/30">
            5.0
          </span>
        </div>

        {/* Middle: Italicized Client Review Quote with generous line-height & Signature Golden SEO Accent */}
        <p className="relative z-10 font-serif italic text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.8] my-auto mb-6">
          {renderHighlightedQuote(item.quote, item.seoHighlight)}
        </p>

        {/* Bottom: Minimalist Dark Author Info */}
        <div className="relative z-10 pt-5 border-t border-[#D3AF37]/20 flex items-center gap-3.5">
          {/* Minimalist Dark Circular Avatar with subtle gold accent ring */}
          <div className="w-10 h-10 rounded-full bg-[#121622] border border-[#D3AF37]/40 flex items-center justify-center text-[#D3AF37] shrink-0 shadow-inner group-hover:border-[#D3AF37] group-hover:scale-105 transition-all">
            <User className="w-5 h-5 text-[#D3AF37] stroke-[1.8]" />
          </div>

          {/* Author Name in Bold + Country underneath */}
          <div className="flex flex-col min-w-0">
            <span className="font-['Inter_Tight',sans-serif] font-bold text-sm sm:text-base text-white leading-snug truncate group-hover:text-[#FEF5CD] transition-colors">
              {item.name}
            </span>
            <span className="font-['Inter_Tight',sans-serif] text-xs font-medium text-gray-400 tracking-wide mt-0.5 truncate">
              {item.country} • {item.role}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section
      id={sectionId}
      className="relative w-full bg-[#030508] text-[#FAFAFB] py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-[#D3AF37]/15 scroll-mt-20"
    >
      {/* Background ambient lighting & fluid motion waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.14, 1],
            opacity: [0.035, 0.075, 0.035],
            x: ['-50%', '-48%', '-50%'],
            y: ['-50%', '-52%', '-50%'],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#D3AF37]/25 via-[#BA9524]/20 to-[#D3AF37]/25 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{
            x: ['-15%', '15%', '-15%'],
            y: ['10%', '-10%', '10%'],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-10 w-[650px] h-[450px] bg-gradient-to-bl from-[#E2C359]/20 to-transparent rounded-full blur-[140px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center max-w-4xl lg:max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* Top Small Tag/Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121622]/90 border border-[#D3AF37]/40 shadow-[0_2px_12px_rgba(211,175,55,0.12)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37] animate-pulse" />
            <span className="font-['Inter_Tight',sans-serif] text-xs font-bold uppercase tracking-[0.25em] text-[#D3AF37]">
              {badgeLabel}
            </span>
          </div>

          {/* Main Section Headline with scroll-triggered staggered letter reveal */}
          <h2
            className={`font-['Antonio',sans-serif] uppercase font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] ${
              language === 'GEO'
                ? 'text-[clamp(21px,3.7vw,48px)] sm:whitespace-nowrap leading-tight px-1'
                : 'text-3xl sm:text-5xl lg:text-6xl leading-[1.18]'
            }`}
          >
            <ScrollLetterReveal text={headlineLabel} delay={0.08} stagger={0.018} />
          </h2>

          {/* Georgian Typography Spacing Fix: Generous Vertical Margin */}
          <div className={language === 'GEO' ? 'h-6 sm:h-8' : 'h-3 sm:h-4'} />

          <p className="font-['Inter_Tight',sans-serif] text-sm sm:text-base text-gray-300/90 max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <ScrollLetterReveal text={subtitleLabel} delay={0.25} stagger={0.008} />
          </p>
        </div>
      </div>

      {/* ================= FULL-BLEED CONTINUOUS HORIZONTAL MARQUEE ================= */}
      <div
        className="relative z-10 w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handlePointerUp();
        }}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        {/* Side Navigation Arrow Buttons */}
        <div className="hidden sm:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 lg:left-8 lg:right-8 z-30 pointer-events-none">
          <button
            type="button"
            onClick={() => handleStep('prev')}
            aria-label="Previous testimonials"
            className="pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#0D121F]/90 hover:bg-[#D3AF37] text-[#D3AF37] hover:text-black border border-[#D3AF37]/40 hover:border-[#D3AF37] flex items-center justify-center transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.8)] cursor-pointer active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AF37]"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={() => handleStep('next')}
            aria-label="Next testimonials"
            className="pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#0D121F]/90 hover:bg-[#D3AF37] text-[#D3AF37] hover:text-black border border-[#D3AF37]/40 hover:border-[#D3AF37] flex items-center justify-center transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.8)] cursor-pointer active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AF37]"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Overflow Track Wrapper with Pointer Drag Support & Subtle Edge Vignettes */}
        <div
          className="relative w-full overflow-hidden py-5 touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-[#030508] to-transparent z-20 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#030508] to-transparent z-20 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex flex-row flex-nowrap w-max will-change-transform px-4 sm:px-6 lg:px-10"
          >
            {/* Primary Set */}
            <div
              ref={singleSetRef}
              className="flex flex-row flex-nowrap items-stretch gap-6 pr-6 shrink-0"
            >
              {testimonials.map((item) => renderTestimonialCard(item, false))}
            </div>

            {/* Seamless Infinite Loop Clone Set */}
            <div
              aria-hidden="true"
              className="flex flex-row flex-nowrap items-stretch gap-6 pr-6 shrink-0"
            >
              {testimonials.map((item) => renderTestimonialCard(item, true))}
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation Buttons */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-4 px-4">
          <button
            type="button"
            onClick={() => handleStep('prev')}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full bg-[#121622] text-[#D3AF37] border border-[#D3AF37]/40 flex items-center justify-center active:scale-95 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AF37]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleStep('next')}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full bg-[#121622] text-[#D3AF37] border border-[#D3AF37]/40 flex items-center justify-center active:scale-95 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AF37]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
