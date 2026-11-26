'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Building2,
  FileText,
  Scale,
  ArrowUpRight,
  KeyRound,
  FileSearch,
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import GlobalNavbar from '@/src/components/common/GlobalNavbar';
import ConsultationModal from '@/src/components/common/ConsultationModal';
import Testimonials from '@/components/templates/lawyer-portfolio-landing-page-alex/Testimonials';
import Contacts from '@/components/templates/lawyer-portfolio-landing-page-alex/Contacts';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';
import CurtainIntro from '@/src/components/common/CurtainIntro';
import ScrollLetterReveal from '@/src/components/common/ScrollLetterReveal';
import { PracticePillarsBento, PracticeProtocolGrid } from '@/src/components/practice/PracticeSections';
import SeoHead, { SITE_URL } from '@/src/components/common/SeoHead';

// Real Estate Assets
import realEstateHeroImg from '@/src/assets/realestate0.webp';
import temple1Img from '@/src/assets/TEMPLE1.webp';
import temple2Img from '@/src/assets/TEMPLE2.webp';
import temple3Img from '@/src/assets/TEMPLE3.webp';
import temple0Img from '@/src/assets/TEMPLE0.webp';

// 4 Protocol Cards Assets
import card1Img from '@/src/assets/CARD1.webp';
import card2Img from '@/src/assets/CARD2.webp';
import card3Img from '@/src/assets/CARD3.webp';
import card4Img from '@/src/assets/CARD4.webp';

export default function RealEstatePage() {
  const { language } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

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
    : '4 savunma aşaması';

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

  return (
    <main className="min-h-screen bg-[#030508] text-[#F2ECEC] selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]">
      <SeoHead
        title={
          isGeo
            ? 'უძრავი ქონება და სახელშეკრულებო სამართალი | GLC Law Company'
            : isRus
              ? 'Недвижимость и договорное право | GLC Law Company'
              : language === 'TUR'
                ? 'Gayrimenkul ve Sözleşme Hukuku | GLC Law Company'
                : 'Real Estate & Contract Law | GLC Law Company'
        }
        description={heroSubLine2}
        canonicalPath="/practice-areas/real-estate-law"
        ogType="website"
        ogImage="/realestate0.png"
        locale={isGeo ? 'ka_GE' : isRus ? 'ru_RU' : language === 'TUR' ? 'tr_TR' : 'en_US'}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'GLC Law Company - Real Estate & Contract Law',
            url: `${SITE_URL}/practice-areas/real-estate-law`,
            provider: { '@id': `${SITE_URL}/#organization` },
            serviceType: 'Real Estate & Contract Law',
            areaServed: 'Georgia',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Real Estate & Contract Law', item: `${SITE_URL}/practice-areas/real-estate-law` },
            ],
          },
        ]}
      />
      {/* Universal Curtain Opening Transition */}
      <CurtainIntro title="REAL ESTATE LAW" subtitle="GLC LAW COMPANY" backdropImage={realEstateHeroImg} mode="route" />

      {/* 1. Global Navbar with compact language dropdown */}
      <GlobalNavbar />

      {/* 2. HERO SECTION: Real Estate Architecture Backdrop */}
      <header className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#030508] border-b border-[#D3AF37]/15 overflow-hidden flex flex-col justify-center items-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12">
        {/* Real Estate Background Image with 90% Obsidian Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={realEstateHeroImg || '/realestate0.png'}
            alt="GLC Real Estate & Contract Law"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center filter brightness-[0.96] contrast-[1.08] scale-100"
            unoptimized
          />
          {/* Refined Balanced Obsidian Luxury Gradient (40% - 65% opacity range for vivid background visibility) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(3, 5, 8, 0.42) 0%, rgba(3, 5, 8, 0.35) 40%, rgba(3, 5, 8, 0.65) 100%)',
            }}
          />
          {/* Delicate Centered Radial Vignette for Editorial Elegance and Pristine Text Contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(3, 5, 8, 0.20) 0%, rgba(3, 5, 8, 0.45) 65%, rgba(3, 5, 8, 0.72) 100%)',
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-2 my-auto">
          {/* Center Refined Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D3AF37]/40 bg-[#0E0E10]/90 backdrop-blur-md shadow-[0_0_15px_rgba(211,175,55,0.15)] mb-5 sm:mb-6"
          >
            <Building2 className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span className="font-geist font-bold text-xs uppercase tracking-[0.2em] text-[#D3AF37]">
              {heroBadgeText}
            </span>
          </motion.div>

          {/* Centered Main Headline with letter-by-letter reveal */}
          <h1
            className="font-big-shoulders font-[900] uppercase text-[clamp(32px,5.5vw,76px)] tracking-tight leading-[1.04] sm:leading-[0.98] realestate-gold-gradient select-none text-center max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_8px_rgba(211,175,55,0.35)]"
          >
            <ScrollLetterReveal text={heroHeadlineText} delay={0.64} triggerMode="mount" stagger={0.018} />
          </h1>

          {/* Centered Editorial Subheading (Two distinct centered lines) */}
          <div className="flex flex-col items-center justify-center gap-1.5 mt-5 sm:mt-6 text-center max-w-2xl mx-auto px-2">
            <p className="font-geist font-semibold text-base sm:text-lg lg:text-xl text-[#FEF5CD] tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              <ScrollLetterReveal text={heroSubLine1} delay={0.78} triggerMode="mount" granularity="word" stagger={0.03} />
            </p>
            <p className="font-geist font-medium text-sm sm:text-base text-gray-200/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              <ScrollLetterReveal text={heroSubLine2} delay={0.88} triggerMode="mount" granularity="word" stagger={0.025} />
            </p>
          </div>

          {/* Centered CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.96, ease: [0.16, 1, 0.3, 1] }}
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
              <span>{isGeo ? 'გადაუდებელი კონსულტაცია' : isRus ? 'Срочная консультация' : language === 'TUR' ? 'Acil Danışmanlık' : 'Emergency Consultation'}</span>
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
              <span>{isGeo ? 'საქმის რეგისტრაცია' : isRus ? 'Регистрация обращения' : language === 'TUR' ? 'Başvuru Kaydı' : 'Register Case Inquiry'}</span>
            </button>
          </motion.div>
        </div>
      </header>

      {/* 3. STRATEGIC PILLARS: Rich Dark Slate-Navy (#090D16) */}
      <PracticePillarsBento
        sectionId="real-estate-pillars"
        badgeText={pillarsBadge}
        headingText={pillarsHeading}
        subText={pillarsSub}
        pillars={realEstatePillars}
      />

      {/* 4. PROCEDURAL PROTOCOL: Brushed Charcoal Obsidian (#0D121F) */}
      <PracticeProtocolGrid
        sectionId="real-estate-protocol"
        headingText={protocolHeading}
        subText={protocolSub}
        steps={protocolSteps}
      />

      {/* 5. DEDICATED REAL ESTATE CLIENT TESTIMONIALS */}
      <Testimonials practiceKey="real-estate" />

      {/* 6. EXECUTIVE CONSULTATION: Rich Dark Slate-Navy (#090D16) */}
      <Contacts bgTheme="slate-navy" />

      {/* 6. HOMEPAGE AUTHORITATIVE FOOTER */}
      <Footer />

      {/* 7. Case Inquiry / Consultation Modal */}
      <ConsultationModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
