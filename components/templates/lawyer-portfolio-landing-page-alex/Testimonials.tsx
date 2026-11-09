'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

interface TestimonialCardData {
  id: number;
  name: string;
  country: string;
  role: string;
  rating: number;
  quote: string;
}

const TESTIMONIALS_DATA: Record<string, TestimonialCardData[]> = {
  GEO: [
    {
      id: 0,
      name: 'დავით მიჩელი',
      country: 'დიდი ბრიტანეთი',
      role: 'კორპორაციული ინვესტორი',
      rating: 5,
      quote:
        '„გიორგიმ ყურადღებით მომისმინა, ყველაფერი დეტალურად და გასაგებად ამიხსნა და საუკეთესო შედეგისთვის იბრძოლა. მთელი პროცესის განმავლობაში თავს სრულად დაცულად და ინფორმირებულად ვგრძნობდი.“',
    },
    {
      id: 1,
      name: 'მარკუს სტერლინგი',
      country: 'გერმანია',
      role: 'ბიზნესის მფლობელი',
      rating: 5,
      quote:
        '„პირველივე კონსულტაციიდან საბოლოო გამარჯვებამდე, სტრატეგიულმა სიღრმემ და პროფესიონალიზმმა ყოველგვარ მოლოდინს გადააჭარბა. GLC Law Company არის ფასდაუდებელი იურიდიული პარტნიორი.“',
    },
    {
      id: 2,
      name: 'ჯულიან ვენსი',
      country: 'ავსტრალია',
      role: 'უძრავი ქონების დეველოპერი',
      rating: 5,
      quote:
        '„როდესაც ბიუროკრატიულმა დაბრკოლებებმა ჩვენი მშენებლობა შეაჩერა, გიორგი უმაღლესი იურიდიული სიზუსტით ჩაერთო. ნებართვები რეკორდულ დროში მივიღეთ ისე, რომ ჩვენი გეგმები არ შეცვლილა.“',
    },
    {
      id: 3,
      name: 'არტურ პენდელტონი',
      country: 'აშშ',
      role: 'მმართველი პარტნიორი',
      rating: 5,
      quote:
        '„კეთილსინდისიერება, მაღალი ეთიკა და სრული კონფიდენციალურობა. ჩვენი საოჯახო აქტივებისა და კომპანიის სამართლებრივი სტრუქტურა უმაღლეს დონეზე მომზადდა.“',
    },
    {
      id: 4,
      name: 'ელენა როსტოვა',
      country: 'კვიპროსი',
      role: 'კერძო ინვესტორი',
      rating: 5,
      quote:
        '„რთულ საერთაშორისო კომერციულ დავაში გიორგი გუბელაძის სტრატეგიულმა ხედვამ მილიონობით ლარის აქტივები გადაგვირჩინა. საუკეთესო ადვოკატი ბათუმსა და თბილისში.“',
    },
    {
      id: 5,
      name: 'მაიკლ ჩანგი',
      country: 'სინგაპური',
      role: 'ტექნოლოგიური მეწარმე',
      rating: 5,
      quote:
        '„კომპანიის რეგისტრაციიდან მსხვილი საინვესტიციო კონტრაქტის გაფორმებამდე, გიორგი იყო შეუცვლელი მრჩეველი, რომლის რეკომენდაციებსაც უყოყმანოდ ვენდობით.“',
    },
    {
      id: 6,
      name: 'ლუკას მორო',
      country: 'საფრანგეთი',
      role: 'სასტუმრო ბიზნესის დირექტორი',
      rating: 5,
      quote:
        '„უმაღლესი დონის მომსახურება, სწრაფი რეაგირება და ურყევი თავდადება. გიორგისთან თანამშრომლობა საქართველოში ბიზნესის წარმართვის საუკეთესო გარანტიაა.“',
    },
    {
      id: 7,
      name: 'სოფია ალ-მანსური',
      country: 'არაბთა გაერთიანებული საამიროები',
      role: 'საერთაშორისო კლიენტი',
      rating: 5,
      quote:
        '„საოჯახო და ქონებრივ საკითხებში გიორგის მიერ გაწეული მგრძნობიარე და ამავდროულად რკინისებრი სიმტკიცის მქონე მხარდაჭერა ჩემი ოჯახისთვის გადამწყვეტი აღმოჩნდა.“',
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
        '"Giorgi listened carefully, explained everything clearly, and fought for the best outcome. I felt fully supported, protected, and informed throughout the entire legal process."',
    },
    {
      id: 1,
      name: 'Marcus Sterling',
      country: 'Germany',
      role: 'Business Principal',
      rating: 5,
      quote:
        '"From the initial strategy consultation to final resolution, the strategic depth and relentless execution exceeded every expectation. An invaluable legal counselor."',
    },
    {
      id: 2,
      name: 'Julian Vance',
      country: 'Australia',
      role: 'Real Estate Developer',
      rating: 5,
      quote:
        '"When municipal hurdles stalled our development, Giorgi stepped in with authoritative legal precision. We secured approvals in record time without compromising our vision."',
    },
    {
      id: 3,
      name: 'Arthur Pendelton',
      country: 'United States',
      role: 'Managing Partner',
      rating: 5,
      quote:
        '"Unmatched integrity, ethics, and discretion. Giorgi structured our multi-generational family estate plan with clarity and meticulous attention to detail."',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      country: 'Cyprus',
      role: 'Private Investor',
      rating: 5,
      quote:
        '"Navigating high-stakes cross-border litigation was daunting until Giorgi took command. His strategic insight saved our proprietary assets and millions in capital."',
    },
    {
      id: 5,
      name: 'Michael Chang',
      country: 'Singapore',
      role: 'Tech Entrepreneur',
      rating: 5,
      quote:
        '"From corporate entity incorporation to complex investment drafting, Giorgi has been an indispensable legal partner whose counsel we trust without reservation."',
    },
    {
      id: 6,
      name: 'Lucas Moreau',
      country: 'France',
      role: 'Hospitality Director',
      rating: 5,
      quote:
        '"Elite standard of practice, swift response, and unwavering dedication. Having Giorgi in our corner gives us total peace of mind in Georgia."',
    },
    {
      id: 7,
      name: 'Sophia Al-Mansoor',
      country: 'United Arab Emirates',
      role: 'Private Client',
      rating: 5,
      quote:
        '"Compassionate, razor-sharp, and remarkably responsive. In a stressful estate season, having Giorgi represent us gave my family absolute confidence and peace."',
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
        '«Георгий внимательно выслушал, доступно объяснил каждый этап и боролся за наилучший результат. На протяжении всего процесса я чувствовал абсолютную поддержку.»',
    },
    {
      id: 1,
      name: 'Маркус Стерлинг',
      country: 'Германия',
      role: 'Владелец бизнеса',
      rating: 5,
      quote:
        '«От первой консультации до победы в деле стратегическая глубина и профессионализм превзошли все ожидания. GLC Law Company — надежнейший юридический партнер.»',
    },
    {
      id: 2,
      name: 'Джулиан Вэнс',
      country: 'Австралия',
      role: 'Девелопер недвижимости',
      rating: 5,
      quote:
        '«Когда бюрократические препятствия остановили наш проект, Георгий вмешался с безупречной правовой точностью. Мы получили разрешения в рекордные сроки.»',
    },
    {
      id: 3,
      name: 'Артур Пенделтон',
      country: 'США',
      role: 'Управляющий партнер',
      rating: 5,
      quote:
        '«Непререкаемая честность, этика и конфиденциальность. Георгий структурировал наш план защиты активов с исключительным вниманием к каждой детали.»',
    },
    {
      id: 4,
      name: 'Елена Ростова',
      country: 'Кипр',
      role: 'Частный инвестор',
      rating: 5,
      quote:
        '«В сложном коммерческом споре стратегический подход Георгия Губеладзе защитил активы на миллионы. Лучший адвокат в Грузии.»',
    },
    {
      id: 5,
      name: 'Майкл Чанг',
      country: 'Сингапур',
      role: 'Технологический предприниматель',
      rating: 5,
      quote:
        '«От учреждения компании до подписания крупных сделок Георгий был незаменимым советником, чьему слову мы доверяем безоговорочно.»',
    },
    {
      id: 6,
      name: 'Люка Моро',
      country: 'Франция',
      role: 'Директор гостиничного бизнеса',
      rating: 5,
      quote:
        '«Высочайший уровень адвокатуры, быстрая реакция и преданность клиенту. Сотрудничество с Георгием — гарантия безопасности бизнеса.»',
    },
    {
      id: 7,
      name: 'София Аль-Мансур',
      country: 'ОАЭ',
      role: 'Международный клиент',
      rating: 5,
      quote:
        '«Деликатный и в то же время несокрушимо твердый подход Георгия в семейных и имущественных вопросах стал решающим фактором спокойствия нашей семьи.»',
    },
  ],
  TUR: [
    {
      id: 0,
      name: 'David Mitchell',
      country: 'Birleşik Krallık',
      role: 'Kurumsal Müvekkil',
      rating: 5,
      quote:
        '"Giorgi davayı dikkatle dinledi, her detayı net bir şekilde açıkladı ve en iyi sonuç için savaştı. Süreç boyunca kendimi tam anlamıyla güvende hissettim."',
    },
    {
      id: 1,
      name: 'Marcus Sterling',
      country: 'Almanya',
      role: 'İş İnsanı',
      rating: 5,
      quote:
        '"İlk strateji toplantısından nihai çözüme kadar derinlik ve kararlılık beklentilerimizin çok ötesindeydi. Gürcistan\'daki vazgeçilmez hukuk ortağımız."',
    },
    {
      id: 2,
      name: 'Julian Vance',
      country: 'Avustralya',
      role: 'Gayrimenkul Yatırımcısı',
      rating: 5,
      quote:
        '"Bürokratik engeller projemizi durdurduğunda Giorgi üstün hukuki hassasiyetle devreye girdi. Ruhsatları vizyonumuzdan ödün vermeden rekor sürede aldık."',
    },
    {
      id: 3,
      name: 'Arthur Pendelton',
      country: 'ABD',
      role: 'Yönetici Ortak',
      rating: 5,
      quote:
        '"Eşsiz dürüstlük, yüksek mesleki etik ve tam gizlilik. Aile varlıklarımızın yapılandırılmasını titizlikle yönetti."',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      country: 'Kıbrıs',
      role: 'Özel Yatırımcı',
      rating: 5,
      quote:
        '"Uluslararası ticari uyuşmazlığımızda Giorgi Gubeladze\'nin stratejik yaklaşımı milyonlarca liralık varlığımızı korudu."',
    },
    {
      id: 5,
      name: 'Michael Chang',
      country: 'Singapur',
      role: 'Teknoloji Girişimcisi',
      rating: 5,
      quote:
        '"Şirket kuruluşundan büyük sözleşmelere kadar Giorgi vazgeçilmez bir danışman oldu. Tavsiyelerine tereddütsüz güveniyoruz."',
    },
    {
      id: 6,
      name: 'Lucas Moreau',
      country: 'Fransa',
      role: 'Otelcilik Direktörü',
      rating: 5,
      quote:
        '"Üst düzey avukatlık, hızlı iletişim ve tavizsiz özveri. Giorgi ile çalışmak Gürcistan\'daki yatırımlarımız için en sağlam güvence."',
    },
    {
      id: 7,
      name: 'Sophia Al-Mansoor',
      country: 'BAE',
      role: 'Özel Müvekkil',
      rating: 5,
      quote:
        '"Aile ve miras hukukunda Giorgi\'nin sergilediği sarsılmaz kararlılık ve nezaket ailemize tam bir huzur sağladı."',
    },
  ],
};

export default function Testimonials() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = TESTIMONIALS_DATA[language] || TESTIMONIALS_DATA.GEO;
  const total = testimonials.length;

  // Compute number of cards visible based on window width
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, total - visibleCount);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-slide every 5.5 seconds unless user hovers
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Section Header copy strictly as specified:
  // Top tag/badge: "TESTIMONIALS"
  // Main section headline: "უკუკავშირი"
  const badgeLabel = 'TESTIMONIALS';
  const headlineLabel = language === 'GEO' ? 'უკუკავშირი' : language === 'ENG' ? 'FEEDBACK & REVIEWS' : language === 'RUS' ? 'ОТЗЫВЫ' : 'GERİ BİLDİRİM';
  const subtitleLabel = language === 'GEO'
    ? 'გულწრფელი შეფასებები მეწარმეებისგან, ოჯახებისა და ორგანიზაციებისგან, რომლებმაც საკუთარი უფლებების დაცვა ჩვენ გვანდეს.'
    : language === 'ENG'
    ? 'Direct feedback from entrepreneurs, families, and multinational organizations who trust our counsel.'
    : language === 'RUS'
    ? 'Искренние отзывы предпринимателей, семей и международных организаций, доверивших нам свою защиту.'
    : 'Haklarının korunmasında bize güvenen girişimcilerden ve ailelerden gelen doğrudan geri bildirimler.';

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#030508] text-[#FAFAFB] py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-[#D3AF37]/15"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D3AF37]/[0.035] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          {/* Top Small Tag/Badge strictly: "TESTIMONIALS" */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] border border-[#D3AF37]/40 shadow-sm mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D3AF37]" />
            <span className="font-['Inter_Tight',sans-serif] text-xs font-bold uppercase tracking-[0.25em] text-[#D3AF37]">
              {badgeLabel}
            </span>
          </div>

          {/* Main Section Headline strictly: "უკუკავშირი" */}
          <h2 className="font-['Antonio',sans-serif] uppercase font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
            {headlineLabel}
          </h2>

          <p className="font-['Inter_Tight',sans-serif] text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
            {subtitleLabel}
          </p>
        </div>

        {/* ================= CAROUSEL / SLIDER WRAPPER ================= */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full"
        >
          {/* Side Navigation Arrow Buttons */}
          <div className="hidden sm:flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 lg:-left-6 lg:-right-6 z-30 pointer-events-none">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#0D121F]/90 hover:bg-[#D3AF37] text-[#D3AF37] hover:text-black border border-[#D3AF37]/40 hover:border-[#D3AF37] flex items-center justify-center transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.8)] cursor-pointer active:scale-95 group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#0D121F]/90 hover:bg-[#D3AF37] text-[#D3AF37] hover:text-black border border-[#D3AF37]/40 hover:border-[#D3AF37] flex items-center justify-center transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.8)] cursor-pointer active:scale-95 group"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Cards Container with Smooth Slide Animation */}
          <div className="overflow-hidden w-full py-4 px-1">
            <motion.div
              animate={{
                x: `-${currentIndex * (100 / visibleCount)}%`,
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-stretch"
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  style={{
                    width: `${100 / visibleCount}%`,
                    flexShrink: 0,
                  }}
                  className="px-2.5 sm:px-3 md:px-3.5 flex"
                >
                  {/* Clean, Elegant, Rounded Light-Themed Card against Dark Obsidian (nomosgeorgia style) */}
                  <div className="w-full bg-[#FFFFFF] text-[#111827] rounded-[22px] p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.5)] border border-gray-100/90 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(211,175,55,0.2)] hover:-translate-y-1">
                    
                    {/* Top: 5 Prominent Gold Rating Stars */}
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(item.rating)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#E5A93C] text-[#E5A93C] stroke-[1.5]"
                        />
                      ))}
                    </div>

                    {/* Middle: Italicized Client Review Quote with generous line-height */}
                    <p className="font-serif italic text-gray-800 text-[14px] sm:text-[15px] lg:text-base leading-[1.75] my-auto mb-6">
                      {item.quote}
                    </p>

                    {/* Bottom: Minimalist Author Info */}
                    <div className="pt-5 border-t border-gray-100 flex items-center gap-3.5">
                      {/* Minimalist Grey Circular Avatar / Placeholder Icon */}
                      <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 shrink-0 shadow-inner">
                        <User className="w-5 h-5 text-gray-400 stroke-[1.8]" />
                      </div>

                      {/* Author Name in Bold + Country underneath */}
                      <div className="flex flex-col min-w-0">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-sm sm:text-base text-gray-900 leading-snug truncate">
                          {item.name}
                        </span>
                        <span className="font-['Inter_Tight',sans-serif] text-xs font-medium text-gray-500 tracking-wide mt-0.5 truncate">
                          {item.country}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Bottom Navigation Buttons */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-[#121214] text-[#D3AF37] border border-[#D3AF37]/40 flex items-center justify-center active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-[#121214] text-[#D3AF37] border border-[#D3AF37]/40 flex items-center justify-center active:scale-95 shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Active Bottom Dot Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => {
              const isActive = dotIdx === currentIndex;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-7 sm:w-8 bg-[#D3AF37] shadow-[0_0_12px_rgba(211,175,55,0.6)]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
