'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useLanguage, TestimonialDetail } from '@/src/context/LanguageContext';

const FALLBACK_TESTIMONIALS: TestimonialDetail[] = [
  {
    id: 0,
    name: 'დავით მიჩელი',
    role: 'კორპორაციული კლიენტი · საქართველო',
    badge: 'ბიზნეს დავა',
    titlePrefix: 'საქმე მოგებულია',
    titleAccent: 'დამაჯერებლად',
    rating: '5.0',
    quote:
      'გიორგიმ ყურადღებით მომისმინა, ყველაფერი დეტალურად ამიხსნა და საუკეთესო შედეგისთვის იბრძოლა. მთელი პროცესის განმავლობაში თავს დაცულად ვგრძნობდი.',
    image: '',
  },
  {
    id: 1,
    name: 'მარკუს სტერლინგი',
    role: 'აქტივების დაცვის კლიენტი · გაერთიანებული სამეფო',
    badge: 'აქტივების მართვა',
    titlePrefix: 'აქტივები დაცულია',
    titleAccent: 'იდეალურად',
    rating: '5.0',
    quote:
      'პირველივე კონსულტაციიდან საბოლოო შედეგამდე, სტრატეგიულმა სიღრმემ და პროფესიონალიზმმა ყოველგვარ მოლოდინს გადააჭარბა. ფასდაუდებელი პარტნიორი.',
    image: '',
  },
  {
    id: 2,
    name: 'ჯულიან ვენსი',
    role: 'დეველოპერი კლიენტი · აშშ',
    badge: 'უძრავი ქონება და ზონირება',
    titlePrefix: 'ქონებრივი დავა',
    titleAccent: 'მოგვარებულია',
    rating: '5.0',
    quote:
      'როდესაც ბიუროკრატიულმა დაბრკოლებებმა მშენებლობა შეაჩერა, გიორგი უმაღლესი იურიდიული სიზუსტით ჩაერთო. ნებართვები რეკორდულ დროში მივიღეთ.',
    image: '',
  },
  {
    id: 3,
    name: 'არტურ პენდელტონი',
    role: 'მმართველი პარტნიორი · შვეიცარია',
    badge: 'სახელშეკრულებო უფლებები',
    titlePrefix: 'სამართლიანობა',
    titleAccent: 'მიღწეულია',
    rating: '5.0',
    quote:
      'კორპორაციულ სფეროში გატარებულმა ათწლეულებმა მასწავლა, რამდენად იშვიათია ნამდვილი იურიდიული ოსტატობა. ეს ფირმა შეუპოვარი დაცვის განსახიერებაა.',
    image: '',
  },
  {
    id: 4,
    name: 'რობერტ ჰეისი',
    role: 'საოჯახო დავის კლიენტი · საქართველო',
    badge: 'მემკვიდრეობა და ოჯახი',
    titlePrefix: 'სრული სიმშვიდე და',
    titleAccent: 'სიცხადე',
    rating: '5.0',
    quote:
      'გულისხმიერი, უაღრესად კომპეტენტური და ოპერატიული. ჩემი ცხოვრების ყველაზე რთულ მომენტში გიორგის ჩართულობამ ჩემს ოჯახს სრული სიმშვიდე მოუტანა.',
    image: '',
  },
  {
    id: 5,
    name: 'ელეონორ ვენსი',
    role: 'ტექნოლოგიური კომპანიის დირექტორი · გერმანია',
    badge: 'IP და ტექნოლოგიები',
    titlePrefix: 'ინტელექტუალური საკუთრება',
    titleAccent: 'დაცულია',
    rating: '5.0',
    quote:
      'საზღვარგარეთ ინტელექტუალური საკუთრების დაცვა ურთულესი გამოწვევა იყო, სანამ გიორგი არ ჩაერთო. მისმა სტრატეგიულმა ხედვამ მილიონობით დოლარის ღირებულების აქტივები გადაგვირჩინა.',
    image: '',
  },
  {
    id: 6,
    name: 'გრეგორი ბენეტი',
    role: 'აღმასრულებელი დირექტორი, M&A · საქართველო',
    badge: 'კორპორაციული შერწყმა',
    titlePrefix: 'შეთანხმება დასრულდა',
    titleAccent: 'წარმატებით',
    rating: '5.0',
    quote:
      'გიორგიმ ჩვენი კომპანიების შერწყმის პროცესი უმაღლესი სიზუსტით წარმართა. ყველა საკონტრაქტო პუნქტი და რეგულაციური მოთხოვნა უნაკლოდ შესრულდა.',
    image: '',
  },
  {
    id: 7,
    name: 'სოფია ლორანი',
    role: 'კერძო კაპიტალის მმართველი · საფრანგეთი',
    badge: 'ტრასტი და მართვა',
    titlePrefix: 'აქტივები',
    titleAccent: 'დაცულია',
    rating: '5.0',
    quote:
      'გამორჩეული პროფესიონალიზმი და კონფიდენციალურობა. გიორგიმ ჩვენი მრავალთაობიანი საოჯახო აქტივების დაცვის გეგმა სრული სიცხადითა და დეტალური სიზუსტით შეადგინა.',
    image: '',
  },
];

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  return typeof window !== 'undefined' ? window.innerWidth : 1280;
}

function getServerSnapshot() {
  return 1280;
}

export default function Testimonials() {
  const { t } = useLanguage();
  const currentTestimonials = useMemo(() => {
    return t.testimonialsSection.items && t.testimonialsSection.items.length > 0
      ? t.testimonialsSection.items
      : FALLBACK_TESTIMONIALS;
  }, [t.testimonialsSection.items]);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: false });

  const windowWidth = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure slider viewport container precisely
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Responsive cards per view: 3 on desktop (>=1024px), 2 on tablet (>=640px), 1 on mobile
  const cardsPerView = windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1;
  const gap = 24; // 1.5rem gap

  const total = currentTestimonials.length;
  const maxIndex = Math.max(0, total - cardsPerView);

  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Keep index clamped when window resizes
  useEffect(() => {
    if (startIndex > maxIndex) {
      setStartIndex(maxIndex);
    }
  }, [maxIndex, startIndex]);

  // Auto-play loop every 5.5 seconds, pauses on hover or user interaction
  useEffect(() => {
    if (isPaused || !isInView || maxIndex <= 0) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, isInView, maxIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Touch swipe support for mobile and tablets
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Card exact pixel width inside container
  const safeContainerWidth = containerWidth || (windowWidth >= 1280 ? 1200 : windowWidth - 48);
  const cardWidth =
    cardsPerView === 3
      ? (safeContainerWidth - gap * 2) / 3
      : cardsPerView === 2
      ? (safeContainerWidth - gap) / 2
      : safeContainerWidth;

  const stepDistance = cardWidth + gap;

  // Localized badge and headline values strictly honoring:
  // ENG: badge "TESTIMONIALS", headline "What Our Clients Say About Us"
  // GEO: badge "უკუკავშირი", headline "კლიენტთა შეფასებები"
  const badgeText = t.testimonialsSection.badgeText || 'უკუკავშირი';
  const headlineText = t.testimonialsSection.headline || 'კლიენტთა შეფასებები';

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-[#080B11] text-[#FAFAFB] py-20 sm:py-24 md:py-28 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Subtle Warm Obsidian and Bronze Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[950px] h-[480px] bg-[#D3AF37]/[0.045] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#1E293B]/[0.15] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* ================= 1. SECTION TITLE & BADGE UPDATE ================= */}
        {/* Small Tag / Badge: localized strictly (GEO: უკუკავშირი / ENG: TESTIMONIALS) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4"
        >
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D3AF37]/80" />
          <span className="text-xs sm:text-[13px] tracking-[0.25em] text-[#D3AF37] font-semibold font-inter-tight uppercase drop-shadow-[0_0_8px_rgba(211,175,55,0.3)]">
            {badgeText}
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D3AF37]/80" />
        </motion.div>

        {/* Main Section Headline: localized strictly (GEO: კლიენტთა შეფასებები / ENG: What Our Clients Say About Us) */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            key={headlineText}
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Antonio'] uppercase tracking-tight text-[32px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[1.1] text-white"
          >
            {headlineText}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-sm sm:text-base text-zinc-400 max-w-[620px] mx-auto font-inter-tight"
          >
            {t.testimonialsSection.subtitle ||
              'გულწრფელი უკუკავშირი მეწარმეებისგან, ოჯახებისა და ორგანიზაციებისგან, რომლებმაც თავიანთი საქმე ჩვენ გვანდეს.'}
          </motion.p>
        </div>

        {/* ================= 2. SLIDER WRAPPER WITH SLEEK SIDE ARROWS ================= */}
        <div className="relative w-full">
          {/* Left Navigation Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#090D16]/90 border border-[#D3AF37]/30 hover:border-[#D3AF37] text-white/80 hover:text-[#D3AF37] flex items-center justify-center transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md active:scale-95 cursor-pointer hover:bg-[#121724] group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Right Navigation Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#090D16]/90 border border-[#D3AF37]/30 hover:border-[#D3AF37] text-white/80 hover:text-[#D3AF37] flex items-center justify-center transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md active:scale-95 cursor-pointer hover:bg-[#121724] group"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Slider Overflow Viewport */}
          <div
            ref={containerRef}
            className="w-full overflow-hidden px-1 py-2"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex will-change-transform"
              style={{ gap: `${gap}px` }}
              animate={{ x: -startIndex * stepDistance }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 30,
                mass: 0.8,
              }}
            >
              {currentTestimonials.map((item, idx) => (
                <div
                  key={item.id ?? idx}
                  style={{ width: `${cardWidth}px` }}
                  className="shrink-0 flex flex-col justify-between rounded-[22px] bg-[#090D16]/80 backdrop-blur-xl border border-[#D3AF37]/20 hover:border-[#D3AF37]/60 p-7 sm:p-8 md:p-9 transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_0_24px_rgba(211,175,55,0.04)] hover:shadow-[0_18px_48px_rgba(211,175,55,0.14),inset_0_1px_0_rgba(255,255,255,0.15)] min-h-[320px] sm:min-h-[340px] relative overflow-hidden group/card"
                >
                  {/* Subtle Top-Right Ambient Radial Light */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[radial-gradient(circle_at_center,rgba(211,175,55,0.08),transparent_70%)] pointer-events-none" />

                  {/* Top: Gold Star Ratings */}
                  <div className="flex items-center gap-1.5 mb-5 sm:mb-6">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-[#D3AF37] text-[#D3AF37] drop-shadow-[0_0_8px_rgba(211,175,55,0.45)]"
                      />
                    ))}
                  </div>

                  {/* Middle: Review Text */}
                  <blockquote className="text-[#E2E4EC] text-[15px] sm:text-[16px] leading-[1.8] font-inter-tight font-normal mb-8 flex-grow select-text">
                    „{item.quote}“
                  </blockquote>

                  {/* Bottom: Minimalist Author Info */}
                  <div className="flex items-center gap-3.5 pt-4 sm:pt-5 border-t border-[#D3AF37]/15 mt-auto">
                    {/* Minimalist Grey / Gold Circular Avatar Placeholder Icon */}
                    <div className="w-12 h-12 rounded-full bg-[#121826]/90 border border-[#D3AF37]/25 flex items-center justify-center text-[#D3AF37] shrink-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                      <User className="w-5 h-5 text-[#D3AF37]/90" />
                    </div>

                    {/* Author Name and Country / Title */}
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-white text-[15px] sm:text-base leading-snug tracking-tight truncate font-inter-tight">
                        {item.name}
                      </span>
                      <span className="text-xs sm:text-[13px] text-zinc-400 font-medium leading-tight mt-0.5 truncate font-inter-tight">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ================= 3. ACTIVE BOTTOM DOT PAGINATION INDICATORS ================= */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2.5">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setStartIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className="py-2 px-1 focus:outline-none cursor-pointer transition-all duration-300"
            >
              {dotIdx === startIndex ? (
                <motion.div
                  layoutId="activeTestimonialDot"
                  className="w-8 sm:w-10 h-2.5 rounded-full bg-gradient-to-r from-[#FFF4CC] via-[#E2C359] to-[#CDA12B] shadow-[0_0_12px_rgba(211,175,55,0.6)]"
                />
              ) : (
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
