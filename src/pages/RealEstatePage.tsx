'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Building2,
  ShieldCheck,
  FileText,
  Scale,
  ArrowUpRight,
  CheckCircle2,
  KeyRound,
  FileSearch,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import GlobalNavbar from '@/src/components/common/GlobalNavbar';
import ConsultationModal from '@/src/components/common/ConsultationModal';
import Contacts from '@/components/templates/lawyer-portfolio-landing-page-alex/Contacts';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';
import CurtainIntro from '@/src/components/common/CurtainIntro';
import SEOHead from '@/src/components/common/SEOHead';
import { BlurWaveText } from '@/src/components/common/MotionReveal';

// Real Estate Assets
import realEstateHeroImg from '@/src/assets/realestate.png';
import temple1Img from '@/src/assets/TEMPLE1.png';
import temple2Img from '@/src/assets/TEMPLE2.png';
import temple3Img from '@/src/assets/TEMPLE3.png';
import temple0Img from '@/src/assets/TEMPLE0.png';

// 4 Protocol Cards Assets
import card1Img from '@/src/assets/CARD1.png';
import card2Img from '@/src/assets/CARD2.png';
import card3Img from '@/src/assets/CARD3.png';
import card4Img from '@/src/assets/CARD4.png';

export default function RealEstatePage() {
  const { language } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoveredProtocolIndex, setHoveredProtocolIndex] = useState<number | null>(null);

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';
  const isRus = language === 'RUS';

  // Hero Copy
  const heroBadgeText = isGeo
    ? 'უსაფრთხო ინვესტიციები & ბიზნეს-კორპორაციული სამართალი'
    : isEng
    ? 'SECURE INVESTMENTS & CORPORATE REAL ESTATE LAW'
    : isRus
    ? 'БЕЗОПАСНЫЕ ИНВЕСТИЦИИ И КОРПОРАТИВНОЕ ПРАВО'
    : 'GÜVENLİ YATIRIMLAR VE ŞİRKETLER HUKUKU';

  const heroHeadlineText = isGeo
    ? 'უძრავი ქონება & სახელშეკრულებო სამართალი'
    : isEng
    ? 'REAL ESTATE & CONTRACT LAW'
    : isRus
    ? 'НЕДВИЖИМОСТЬ И ДОГОВОРНОЕ ПРАВО'
    : 'GAYRİMENKUL VE SÖZLEŞMELER HUKUKU';

  const heroSubLine1 = isGeo
    ? 'თქვენი ქონებრივი ინტერესებისა და ინვესტიციების ურყევი სამართლებრივი გარანტია.'
    : isEng
    ? 'Uncompromising legal security for your property interests and investments.'
    : isRus
    ? 'Несокрушимая правовая гарантия ваших имущественных интересов и инвестиций.'
    : 'Mülkiyet haklarınız ve yatırımlarınız için tavizsiz hukuki güvence.';

  const heroSubLine2 = isGeo
    ? 'სრული იურიდიული აუდიტი, რისკების ნიველირება და უსაფრთხო გარიგებები.'
    : isEng
    ? 'Comprehensive due diligence, risk elimination, and secure transactions.'
    : isRus
    ? 'Полный юридический аудит, нивелирование рисков и безопасность сделок.'
    : 'Kapsamlı hukuki denetim, risk eliminasyonu ve güvenli işlemler.';

  // Strategic Pillars (with Temple Assets)
  const pillarsBadge = isGeo
    ? 'გამოცდილება. სტრატეგია. შედეგი.'
    : isEng
    ? 'EXPERIENCE. STRATEGY. RESULT.'
    : isRus
    ? 'ОПЫТ. СТРАТЕГИЯ. РЕЗУЛЬТАТ.'
    : 'DENEYİM. STRATEJİ. SONUÇ.';

  const pillarsHeading = isGeo
    ? 'უძრავი ქონების დაცვის 4 ფუნდამენტური საყრდენი'
    : isEng
    ? '4 Fundamental Pillars of Real Estate Law'
    : isRus
    ? '4 фундаментальные опоры защиты недвижимости'
    : 'Gayrimenkul Hukukunun 4 Temel Dayanağı';

  const pillarsSub = isGeo
    ? 'სრული სამართლებრივი ექსპერტიზა, საჯარო რეესტრის მონიტორინგი და ინვესტიციების ურყევი დაცვა.'
    : isEng
    ? 'Comprehensive title examination, public registry oversight, and ironclad investment protection.'
    : isRus
    ? 'Полная правовая экспертиза, контроль публичного реестра и защита инвестиций.'
    : 'Kapsamlı tapu incelemesi, sicil denetimi ve tavizsiz yatırım koruması.';

  const realEstatePillars = [
    {
      number: '01',
      icon: FileSearch,
      image: temple1Img || '/TEMPLE1.png',
      title: isGeo
        ? 'სრული იურიდიული აუდიტი (Due Diligence)'
        : isEng
        ? 'Comprehensive Legal Due Diligence'
        : isRus
        ? 'Полный юридический аудит (Due Diligence)'
        : 'Kapsamlı Hukuki İnceleme (Due Diligence)',
      description: isGeo
        ? 'ქონების სამართლებრივი სტატუსის, ყადაღის, იპოთეკისა და საკადასტრო საზღვრების დეტალური შემოწმება გარიგების დადებამდე.'
        : isEng
        ? 'In-depth scrutiny of property legal status, liens, encumbrances, mortgages, and cadastral boundaries prior to transaction execution.'
        : isRus
        ? 'Детальная проверка юридического статуса объекта, арестов, ипотек и кадастровых границ до заключения сделки.'
        : 'İşlem öncesinde mülkiyet durumu, haciz, ipotek ve kadastro sınırlarının ayrıntılı hukuki denetimi.',
      feature: isGeo ? 'რისკების 100%-იანი პრევენცია' : isEng ? '100% Risk Prevention' : isRus ? '100% устранение рисков' : '%100 Risk Önleme',
    },
    {
      number: '02',
      icon: Building2,
      image: temple2Img || '/TEMPLE2.png',
      title: isGeo
        ? 'საჯარო რეესტრი & საკადასტრო აუდიტი'
        : isEng
        ? 'Public Registry & Cadastral Audit'
        : isRus
        ? 'Публичный реестр и кадастровый контроль'
        : 'Tapu Sicili ve Kadastro Denetimi',
      description: isGeo
        ? 'საკუთრების უფლების რეგისტრაცია, მიჯნის დავების პრევენცია, სამშენებლო ნებართვებისა და მიწის სტატუსის უსაფრთხოება.'
        : isEng
        ? 'Title registration oversight, boundary dispute resolution, municipal building permits, and zoning status verification.'
        : isRus
        ? 'Регистрация права собственности, предотвращение межевых споров, проверка разрешений на строительство.'
        : 'Mülkiyet tescili, sınır uyuşmazlıklarının çözümü, inşaat ruhsatları ve imar durumu kontrolü.',
      feature: isGeo ? 'საჯარო რეესტრის სრული კონტროლი' : isEng ? 'Public Registry Control' : isRus ? 'Контроль в публичном реестре' : 'Tapu Sicil Güvencesi',
    },
    {
      number: '03',
      icon: FileText,
      image: temple3Img || '/TEMPLE3.png',
      title: isGeo
        ? 'ნასყიდობა, იპოთეკა და ინვესტიციები'
        : isEng
        ? 'Acquisitions, Mortgages & Contracts'
        : isRus
        ? 'Купля-продажа, ипотека и инвестиции'
        : 'Alım-Satım, İpotek ve Sözleşmeler',
      description: isGeo
        ? 'მრავალმილიონიანი სამშენებლო, დეველოპერული და საინვესტიციო ხელშეკრულებების მომზადება და ფინანსური ინტერესების დაცვა.'
        : isEng
        ? 'Drafting multi-million dollar construction, development, joint venture, and investment agreements with escrow protections.'
        : isRus
        ? 'Составление девелоперских и инвестиционных контрактов с надежной защитой финансовых средств.'
        : 'Büyük ölçekli inşaat, geliştirme ve yatırım sözleşmelerinin güvenli hazırlanması ve finansal koruma.',
      feature: isGeo ? 'უსაფრთხო სახელშეკრულებო ბაზა' : isEng ? 'Ironclad Contractual Security' : isRus ? 'Безопасные контракты' : 'Kusursuz Sözleşme Güvencesi',
    },
    {
      number: '04',
      icon: Scale,
      image: temple0Img || '/TEMPLE0.png',
      title: isGeo
        ? 'ქონებრივი დავები და სასამართლო'
        : isEng
        ? 'Property Litigation & Dispute Defense'
        : isRus
        ? 'Имущественные споры и судебная защита'
        : 'Gayrimenkul Davaları ve Duruşma Temsili',
      description: isGeo
        ? 'საკუთრების უფლების აღიარება, ხელშეკრულების ბათილობა, ზიანის ანაზღაურება და წარმომადგენლობა ყველა ინსტანციის სასამართლოში.'
        : isEng
        ? 'Affirmation of title, contract invalidation, compensation for damages, and rigorous advocacy across all court instances.'
        : isRus
        ? 'Признание права собственности, оспаривание сделок, взыскание ущерба и защита во всех инстанциях судов.'
        : 'Mülkiyet tespiti, sözleşme iptali, tazminat davaları ve tüm mahkemelerde kararlı savunma.',
      feature: isGeo ? 'სასამართლო დაცვა & რეპრეზენტაცია' : isEng ? 'Courtroom Trial Advocacy' : isRus ? 'Судебное представительство' : 'Mahkemede Üst Düzey Temsil',
    },
  ];

  // 4 Stages Protocol Data

  const protocolHeading = isGeo
    ? 'დაცვის 4 ეტაპი'
    : isEng
    ? '4 stages of defence'
    : isRus
    ? '4 этапа защиты'
    : '4 Savunma Aşaması';

  const protocolSub = isGeo
    ? 'ქონებრივი გარიგებისა და ინვესტიციების სრული იურიდიული მექანიზმი პირველადი შემოწმებიდან საკუთრების დაცვამდე.'
    : isEng
    ? 'A rigorous legal protocol for real estate transactions and investments from initial inquiry to final title security.'
    : isRus
    ? 'Строгий правовой механизм сделок с недвижимостью и инвестиций от первичной проверки до защиты права собственности.'
    : 'İlk incelemeden nihai mülkiyet tesciline kadar gayrimenkul işlemlerinin eksiksiz hukuki mekanizması.';

  const protocolSteps = [
    {
      number: '1.',
      image: card1Img || '/CARD1.png',
      title: isGeo
        ? 'პირველადი ექსპერტიზა'
        : isEng
        ? 'Preliminary Title Audit'
        : isRus
        ? 'Первичная экспертиза'
        : 'Ön Hukuki İnceleme',
      description: isGeo
        ? 'ქონების სამართლებრივი ისტორიის, ტვირთებისა და საკადასტრო საზღვრების ამომწურავი აუდიტი.'
        : isEng
        ? 'Exhaustive audit of property title history, historical liens, mortgages, and cadastral boundary lines.'
        : isRus
        ? 'Исчерпывающий аудит истории объекта недвижимости, обременений и границ.'
        : 'Mülkiyet geçmişi, tapu şerhleri ve kadastro sınırlarının ayrıntılı incelenmesi.',
    },
    {
      number: '2.',
      image: card2Img || '/CARD2.png',
      title: isGeo
        ? 'სახელშეკრულებო არქიტექტურა'
        : isEng
        ? 'Contractual Architecture'
        : isRus
        ? 'Договорная архитектура'
        : 'Sözleşme Mimarisi',
      description: isGeo
        ? 'ნასყიდობის, იჯარისა და ინვესტირების ხელშეკრულებების მომზადება კლიენტის ინტერესების გარანტიით.'
        : isEng
        ? 'Bespoke drafting of purchase, lease, and investment contracts with risk-neutralizing covenants.'
        : isRus
        ? 'Разработка договоров купли-продажи, аренды и инвестиций с максимальной защитой интересов.'
        : 'Müvekkil menfaatlerini güvence altına alan özel alım, kiralama ve yatırım sözleşmelerinin hazırlanması.',
    },
    {
      number: '3.',
      image: card3Img || '/CARD3.png',
      title: isGeo
        ? 'რეგისტრაცია და ტრანზაქცია'
        : isEng
        ? 'Closing & Registration'
        : isRus
        ? 'Регистрация и сделка'
        : 'Tescil ve Kapanış',
      description: isGeo
        ? 'ნოტარიული დამოწმება, საჯარო რეესტრში რეგისტრაციის სრული კონტროლი და ფინანსური უსაფრთხოება.'
        : isEng
        ? 'Escrow supervision, notary signing, and guaranteed expedited title registration in the Public Registry.'
        : isRus
        ? 'Нотариальное заверение, контроль регистрации в реестре и безопасность расчетов.'
        : 'Noter onayları, tapu sicil tescilinin takibi ve finansal takas güvenliğinin sağlanması.',
    },
    {
      number: '4.',
      image: card4Img || '/CARD4.png',
      title: isGeo
        ? 'უფლების დაცვა და მონიტორინგი'
        : isEng
        ? 'Asset Defense & Monitoring'
        : isRus
        ? 'Защита прав и мониторинг'
        : 'Hakların Korunması ve İzleme',
      description: isGeo
        ? 'ქონებრივი უფლების ურყევი დაცვა, მიჯნის დავების მოგვარება და სასამართლო წარმომადგენლობა.'
        : isEng
        ? 'Vigorous post-closing title protection, boundary dispute resolution, and courtroom trial defense.'
        : isRus
        ? 'Надежная защита прав собственности, урегулирование споров и судебная защита.'
        : 'Mülkiyet hakkının korunması, sınır ihtilaflarının çözümü ve mahkemelerde temsil.',
    },
  ];

  const realEstateTitle = isGeo
    ? 'უძრავი ქონება & სახელშეკრულებო სამართალი — GLC Law Company | გიორგი გუბელაძე'
    : isEng
    ? 'Real Estate & Contract Law — GLC Law Company | Giorgi Gubeladze'
    : 'Недвижимость и договорное право — GLC Law Company | Георгий Губеладзе';

  const realEstateDesc = isGeo
    ? 'უძრავი ქონების სრული იურიდიული აუდიტი, ინვესტიციების დაცვა, ხელშეკრულებები და ქონებრივი დავები. 21+ წლიანი გამოცდილება. დარეკეთ: +995 599 27 77 94.'
    : isEng
    ? 'Comprehensive real estate due diligence, contract drafting, zoning permits, and property dispute litigation in Georgia. Call: +995 599 27 77 94.'
    : 'Полный аудит недвижимости, инвестиционная безопасность, договоры и судебная защита в Грузии. Тел: +995 599 27 77 94.';

  return (
    <main className="min-h-screen bg-[#030508] text-[#F2ECEC] selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]">
      <SEOHead
        title={realEstateTitle}
        description={realEstateDesc}
        canonicalPath="/practice-areas/real-estate-law"
        practiceAreaName={isGeo ? 'უძრავი ქონების სამართალი' : 'Real Estate Law'}
      />
      {/* Universal Curtain Opening Transition */}
      <CurtainIntro title="REAL ESTATE LAW" subtitle="GLC LAW COMPANY" backdropImage={realEstateHeroImg} />

      {/* 1. Global Navbar with compact language dropdown */}
      <GlobalNavbar />

      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Antonio:wght@600;700;800&family=Inter+Tight:wght@400;500;600;700&display=swap');
          
          .font-big-shoulders {
            font-family: 'Big Shoulders Display', 'Antonio', sans-serif;
            font-optical-sizing: auto;
          }
          .font-geist {
            font-family: 'Inter Tight', -apple-system, sans-serif;
          }
          
          .realestate-gold-gradient {
            background: linear-gradient(180deg, #FEF5CD 0%, #E2C359 45%, #D2AE37 75%, #8C6A1C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `
      }} />

      {/* 2. HERO SECTION: Real Estate Architecture Backdrop */}
      <header className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#030508] border-b border-[#D3AF37]/15 overflow-hidden flex flex-col justify-center items-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12">
        {/* Real Estate Background Image with 90% Obsidian Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={realEstateHeroImg || '/realestate.png'}
            alt="GLC Real Estate & Contract Law"
            fill
            priority
            className="object-cover object-center filter brightness-[0.92] contrast-[1.08] scale-100"
            unoptimized
          />
          {/* Multi-stop Dark Obsidian Luxury Gradient (~90% opacity for pristine text legibility) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(3, 5, 8, 0.88) 0%, rgba(3, 5, 8, 0.82) 40%, rgba(3, 5, 8, 0.94) 100%)',
            }}
          />
          {/* Subtle Radial Vignette for Centered Typography Hierarchy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(3, 5, 8, 0.55) 0%, rgba(3, 5, 8, 0.85) 65%, rgba(3, 5, 8, 0.98) 100%)',
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-2 my-auto">
          {/* Center Refined Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D3AF37]/40 bg-[#0E0E10]/90 backdrop-blur-md shadow-[0_0_15px_rgba(211,175,55,0.15)] mb-5 sm:mb-6"
          >
            <Building2 className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span className="font-geist font-bold text-xs uppercase tracking-[0.2em] text-[#D3AF37]">
              {heroBadgeText}
            </span>
          </motion.div>

          {/* Centered Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="font-big-shoulders font-[900] uppercase text-[clamp(32px,5.5vw,76px)] tracking-tight leading-[1.04] sm:leading-[0.98] realestate-gold-gradient select-none text-center max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_8px_rgba(211,175,55,0.35)]"
          >
            {heroHeadlineText}
          </motion.h1>

          {/* Centered Editorial Subheading (Two distinct centered lines) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-1.5 mt-5 sm:mt-6 text-center max-w-2xl mx-auto px-2"
          >
            <p className="font-geist font-semibold text-base sm:text-lg lg:text-xl text-[#FEF5CD] tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              {heroSubLine1}
            </p>
            <p className="font-geist font-medium text-sm sm:text-base text-gray-200/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              {heroSubLine2}
            </p>
          </motion.div>

          {/* Centered CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-9 w-full sm:w-auto"
          >
            {/* Primary Action: WhatsApp Consultation */}
            <motion.a
              href="https://wa.me/995599277794"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto overflow-hidden inline-flex items-center justify-center pl-6 pr-3 py-3 gap-3 bg-gradient-to-r from-[#FEF5CD] via-[#D2AE37] to-[#BA9524] text-[#00070B] rounded-xl cursor-pointer shadow-[0_8px_30px_rgba(211,175,55,0.4)] font-big-shoulders font-[900] text-lg sm:text-xl uppercase tracking-wider"
            >
              <span>{isGeo ? 'გადაუდებელი კონსულტაცია' : 'Emergency Consultation'}</span>
              <div className="w-8 h-8 bg-[#00070B] rounded-lg flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4 text-[#D3AF37] stroke-[2.5]" />
              </div>
            </motion.a>

            {/* Secondary Action: Case Registration Modal */}
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0E0E10]/90 border border-[#D3AF37]/50 hover:border-[#D3AF37] hover:bg-[#D3AF37]/10 text-white text-sm font-semibold tracking-wide transition-all cursor-pointer font-geist shadow-md"
            >
              <KeyRound className="w-4 h-4 text-[#D3AF37]" />
              <span>{isGeo ? 'საქმის რეგისტრაცია' : 'Register Case Inquiry'}</span>
            </button>
          </motion.div>
        </div>
      </header>

      {/* 3. STRATEGIC PILLARS: Rich Dark Slate-Navy (#090D16) with Temple Assets */}
      <section
        id="real-estate-pillars"
        className="relative z-20 w-full bg-[#090D16] border-b border-[#D3AF37]/15 text-[#F2ECEC] overflow-hidden select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12"
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
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#D3AF37]/40 bg-[#0E1322]/90 backdrop-blur-md shadow-sm mb-4">
              <span className="font-geist font-bold text-xs uppercase tracking-[0.2em] text-[#D3AF37]">
                {pillarsBadge}
              </span>
            </div>

            <h2 className="font-big-shoulders font-[900] uppercase text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              <BlurWaveText text={pillarsHeading} />
            </h2>

            <p className="font-geist font-normal text-sm sm:text-base lg:text-lg text-gray-300/85 mt-4 max-w-2xl leading-relaxed">
              {pillarsSub}
            </p>
          </motion.div>

          {/* Bento Grid: 4 Cards with Temple Assets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 w-full">
            {realEstatePillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: pIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.28, ease: 'easeOut' } }}
                  className="group relative flex flex-col justify-between p-7 sm:p-9 lg:p-10 rounded-2xl overflow-hidden border border-[#D3AF37]/25 hover:border-[#D3AF37]/50 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_28px_rgba(211,175,55,0.22)] transition-all duration-300 min-h-[380px]"
                >
                  {/* Temple Photo Background with subtle blur & glassmorphism overlay */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 640px"
                      className="object-cover object-center filter brightness-[0.78] contrast-[1.08] blur-[1.5px] transition-transform duration-700 ease-out group-hover:scale-105"
                      unoptimized
                    />
                    {/* Delicate Dark Glassmorphism Gradient Overlay (rgba(3, 5, 8, 0.75)) */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(3, 5, 8, 0.62) 0%, rgba(3, 5, 8, 0.75) 50%, rgba(3, 5, 8, 0.88) 100%)',
                      }}
                    />
                    {/* Directional Vignette protecting typography */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/85 via-transparent to-[#030508]/30 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#D3AF37]/[0.03] group-hover:bg-[#D3AF37]/[0.10] rounded-bl-full pointer-events-none transition-colors duration-500" />
                  </div>

                  {/* Content Layer (relative z-10) */}
                  <div className="relative z-10 w-full flex flex-col justify-between h-full">
                    {/* Top Row: Icon + Number Badge */}
                    <div className="flex items-center justify-between w-full mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A2234]/95 to-[#0A0F1A]/95 border border-[#D3AF37]/50 flex items-center justify-center text-[#D3AF37] group-hover:scale-105 group-hover:border-[#D3AF37] shadow-[0_4px_12px_rgba(0,0,0,0.7)] transition-all duration-300">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>

                      <div className="px-3.5 py-1 rounded-full border border-[#D3AF37]/40 bg-[#0B0F19]/85 backdrop-blur-md group-hover:bg-gradient-to-r group-hover:from-[#D3AF37]/30 group-hover:to-[#BA9524]/40 group-hover:border-[#D3AF37]/80 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                        <span className="font-big-shoulders font-[900] text-2xl sm:text-3xl text-[#D3AF37]/80 group-hover:text-[#FEF5CD] group-hover:drop-shadow-[0_0_8px_rgba(211,175,55,0.6)] transition-colors duration-300">
                          {pillar.number}
                        </span>
                      </div>
                    </div>

                    {/* Card Title & Description */}
                    <div className="flex flex-col gap-3 my-2">
                      <h3 className="font-big-shoulders font-[900] uppercase text-2xl sm:text-3xl text-white group-hover:text-[#FEF5CD] transition-colors duration-200 tracking-tight leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.98)] drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                        {pillar.title}
                      </h3>

                      <p className="font-geist font-medium text-sm sm:text-base text-gray-100 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.98)] drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Card Footer Tag */}
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
          </div>
        </div>
      </section>

      {/* 4. PROCEDURAL PROTOCOL: Brushed Charcoal Obsidian (#0D121F) */}
      <section
        id="real-estate-protocol"
        className="relative z-20 w-full bg-[#0D121F] border-b border-[#D3AF37]/15 text-[#F3ECEC] overflow-hidden select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Centered Symmetrical Header */}
          {/* Centered Symmetrical Header without protocol prefix badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl flex flex-col items-center justify-center text-center mx-auto mb-14 sm:mb-16 px-4"
          >
            <h2 className="font-big-shoulders font-[900] uppercase text-white tracking-tight leading-tight text-3xl sm:text-5xl lg:text-6xl text-center">
              <BlurWaveText text={protocolHeading} />
            </h2>

            <p className="font-geist font-normal text-sm sm:text-base lg:text-lg text-gray-300/90 mt-4 max-w-2xl text-center leading-relaxed">
              {protocolSub}
            </p>
          </motion.div>

          {/* 4 Protocol Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D3AF37]/30 rounded-2xl overflow-hidden shadow-2xl">
            {protocolSteps.map((step, index) => {
              const isHovered = hoveredProtocolIndex === index;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setHoveredProtocolIndex(index)}
                  onMouseLeave={() => setHoveredProtocolIndex(null)}
                  className={`group relative flex flex-col justify-between items-start p-7 sm:p-8 lg:p-9 transition-all duration-300 cursor-pointer min-h-[330px] overflow-hidden ${
                    index !== 0 ? 'lg:border-l lg:border-[#D3AF37]/20' : ''
                  } ${
                    index % 2 !== 0 ? 'sm:border-l sm:border-[#D3AF37]/20 lg:border-l' : ''
                  } ${index >= 2 ? 'border-t sm:border-t-0 border-[#D3AF37]/20' : ''}`}
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center filter brightness-[0.78] contrast-[1.08] blur-[1.5px] transition-transform duration-700 ease-out group-hover:scale-105"
                      unoptimized
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background: isHovered
                          ? 'linear-gradient(180deg, rgba(3, 5, 8, 0.55) 0%, rgba(3, 5, 8, 0.70) 50%, rgba(3, 5, 8, 0.85) 100%)'
                          : 'linear-gradient(180deg, rgba(3, 5, 8, 0.65) 0%, rgba(3, 5, 8, 0.75) 50%, rgba(3, 5, 8, 0.90) 100%)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/85 via-transparent to-[#030508]/30 pointer-events-none" />
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE CONSULTATION: Rich Dark Slate-Navy (#090D16) */}
      <Contacts bgTheme="slate-navy" />

      {/* 6. HOMEPAGE AUTHORITATIVE FOOTER */}
      <Footer />

      {/* 7. Case Inquiry / Consultation Modal */}
      <ConsultationModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
