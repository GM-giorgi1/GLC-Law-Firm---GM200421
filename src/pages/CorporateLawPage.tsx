'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  FileCheck2,
  Scale,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import GlobalNavbar from '@/src/components/common/GlobalNavbar';
import CurtainIntro from '@/src/components/common/CurtainIntro';
import ConsultationModal from '@/src/components/common/ConsultationModal';
import ScrollLetterReveal from '@/src/components/common/ScrollLetterReveal';
import { PracticePillarsBento, PracticeProtocolGrid } from '@/src/components/practice/PracticeSections';
import SeoHead, { SITE_URL } from '@/src/components/common/SeoHead';
import Testimonials from '@/components/templates/lawyer-portfolio-landing-page-alex/Testimonials';
import Contacts from '@/components/templates/lawyer-portfolio-landing-page-alex/Contacts';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';

// Corporate Law Assets
import corporateHeroImg from '@/src/assets/corporate.png';
import temple0Img from '@/src/assets/TEMPLE0.png';
import temple1Img from '@/src/assets/TEMPLE1.png';
import temple2Img from '@/src/assets/TEMPLE2.png';
import temple3Img from '@/src/assets/TEMPLE3.png';

// Protocol Card Assets
import card1Img from '@/src/assets/CARD1.png';
import card2Img from '@/src/assets/CARD2.png';
import card3Img from '@/src/assets/CARD3.png';
import card4Img from '@/src/assets/CARD4.png';

export default function CorporateLawPage() {
  const { language } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';
  const isRus = language === 'RUS';

  // Hero Copy
  const heroBadgeText = isGeo
    ? 'კორპორაციული უსაფრთხოება & ბიზნეს-ადვოკატირება'
    : isEng
    ? 'CORPORATE SECURITY & STRATEGIC BUSINESS ADVOCACY'
    : isRus
    ? 'КОРПОРАТИВНАЯ БЕЗОПАСНОСТЬ И БИЗНЕС-АДВОКАТУРА'
    : 'KURUMSAL GÜVENLİK VE STRATEJİK İŞ DANIŞMANLIĞI';

  const heroHeadlineText = isGeo
    ? 'ბიზნესი & კორპორაციული სამართალი'
    : isEng
    ? 'BUSINESS & CORPORATE LAW'
    : isRus
    ? 'БИЗНЕС И КОРПОРАТИВНОЕ ПРАВО'
    : 'İŞ VE ŞİRKETLER HUKUKU';

  const heroSubLine1 = isGeo
    ? '„კორპორაციული უსაფრთხოება, სტრატეგიული გარიგებები და ბიზნესის სამართლებრივი მართვა.“'
    : isEng
    ? 'Corporate security, high-stakes transactions, and rigorous legal stewardship for growing businesses.'
    : isRus
    ? 'Корпоративная безопасность, стратегические сделки и правовое управление бизнесом.'
    : 'Büyüyen şirketler için kurumsal güvenlik, stratejik işlemler ve tavizsiz hukuki yönetim.';

  const heroSubLine2 = isGeo
    ? '„კომპანიების რეგისტრაცია, M&A ტრანზაქციები, რთული კომერციული ხელშეკრულებები და პარტნიორთა შორის დავების გადაწყვეტა - უმაღლესი კლასის იურიდიული მხარდაჭერა.“'
    : isEng
    ? 'Entity incorporation, M&A transactions, complex commercial contracts, and decisive shareholder dispute resolution - elite legal advocacy across Georgia.'
    : isRus
    ? 'Регистрация компаний, сделки M&A, сложные коммерческие контракты и разрешение споров между партнерами — первоклассная правовая поддержка.'
    : 'Şirket kuruluşu, M&A işlemleri, ticari sözleşmeler ve ortaklar arası uyuşmazlıkların çözümü - Gürcistan genelinde üst düzey hukuki destek.';

  // Strategic Pillars Copy
  const pillarsBadge = isGeo
    ? 'გამოცდილება. სტრატეგია. შედეგი.'
    : isEng
    ? 'EXPERIENCE. STRATEGY. RESULT.'
    : isRus
    ? 'ОПЫТ. СТРАТЕГИЯ. РЕЗУЛЬТАТ.'
    : 'DENEYİM. STRATEJİ. SONUÇ.';

  const pillarsHeading = isGeo
    ? '4 ფუნდამენტური საყრდენი'
    : isEng
    ? '4 Fundamental Pillars'
    : isRus
    ? '4 фундаментальные опоры'
    : '4 Temel Dayanak';

  const pillarsSub = isGeo
    ? 'სწორი მიდგომა, რეალური სტრატეგია და გამოცდილება თქვენი ბიზნესის დაცვის რეალური საფუძველია'
    : isEng
    ? 'The right approach, genuine strategy, and extensive experience form the true foundation for protecting your business.'
    : isRus
    ? 'Правильный подход, проверенная стратегия и опыт — основа безопасности вашего бизнеса.'
    : 'Doğru yaklaşım, kanıtlanmış strateji ve tecrübe işletmenizin korunmasının gerçek temelidir.';

  // 4 Corporate Pillars
  const corporatePillars = [
    {
      number: '01',
      icon: Building2,
      image: temple0Img || '/TEMPLE0.png',
      title: isGeo
        ? 'კომპანიების დაფუძნება & რესტრუქტურიზაცია'
        : isEng
        ? 'Entity Incorporation & Restructuring'
        : isRus
        ? 'Регистрация компаний и реорганизация'
        : 'Şirket Kuruluşu ve Yeniden Yapılandırma',
      description: isGeo
        ? 'შპს, სს, ფილიალების რეგისტრაცია, რეორგანიზაცია, ჰოლდინგური სტრუქტურების აგება და საწესდებო კაპიტალის ფორმირება.'
        : isEng
        ? 'LLC, JSC, branch registration, entity restructuring, holding formation, and statutory capital structuring.'
        : isRus
        ? 'Регистрация ООО, АО, филиалов, реорганизация, создание холдинговых структур и формирование уставного капитала.'
        : 'Limited ve Anonim şirket kuruluşu, şube tescilleri, yeniden yapılandırma ve holding yapılarının oluşturulması.',
      feature: isGeo ? 'სრული კორპორაციული უსაფრთხოება' : isEng ? '100% Corporate Security' : isRus ? '100% безопасность бизнеса' : '%100 Kurumsal Güvenlik',
    },
    {
      number: '02',
      icon: FileCheck2,
      image: temple1Img || '/TEMPLE1.png',
      title: isGeo
        ? 'კორპორაციული მართვა & წესდებები'
        : isEng
        ? 'Corporate Governance & Bylaws'
        : isRus
        ? 'Корпоративное управление и уставы'
        : 'Kurumsal Yönetim ve Ana Sözleşmeler',
      description: isGeo
        ? 'წესდებების, პარტნიორთა შეთანხმებების (SHA) შედგენა, კრების ოქმები და დირექტორთა უფლებამოსილების სამართლებრივი რეგულირება.'
        : isEng
        ? 'Bespoke corporate bylaws, shareholders agreements (SHA), minutes of meetings, and executive fiduciary governance.'
        : isRus
        ? 'Разработка уставов, соглашений участников (SHA), протоколов собраний и регламентация полномочий директоров.'
        : 'Özel ana sözleşmeler, hissedarlar sözleşmesi (SHA), genel kurul tutanakları ve yönetici yetkilerinin düzenlenmesi.',
      feature: isGeo ? 'SHA & წესდების ექსპერტიზა' : isEng ? 'SHA & Bylaws Expertise' : isRus ? 'Экспертиза уставов и SHA' : 'Ana Sözleşme ve SHA Uzmanlığı',
    },
    {
      number: '03',
      icon: Briefcase,
      image: temple2Img || '/TEMPLE2.png',
      title: isGeo
        ? 'კომერციული კონტრაქტები & M&A'
        : isEng
        ? 'Commercial Contracts & M&A Transactions'
        : isRus
        ? 'Коммерческие контракты и сделки M&A'
        : 'Ticari Sözleşmeler ve M&A İşlemleri',
      description: isGeo
        ? 'მსხვილი კომერციული გარიგებები, შერწყმა და შეძენა (M&A), Due Diligence აუდიტი და რისკების სრული ნეიტრალიზება.'
        : isEng
        ? 'High-stakes commercial deals, mergers & acquisitions (M&A), legal Due Diligence audits, and total transaction risk mitigation.'
        : isRus
        ? 'Крупные коммерческие сделки, слияния и поглощения (M&A), аудит Due Diligence и нейтрализация финансовых рисков.'
        : 'Büyük ölçekli ticari işlemler, şirket birleşme ve devralmaları (M&A), Due Diligence denetimleri ve işlem güvenliği.',
      feature: isGeo ? 'M&A & Due Diligence გარანტია' : isEng ? 'M&A & Due Diligence Shield' : isRus ? 'Защита сделок M&A' : 'M&A ve Due Diligence Koruması',
    },
    {
      number: '04',
      icon: Scale,
      image: temple3Img || '/TEMPLE3.png',
      title: isGeo
        ? 'პარტნიორთა დავები & აქტივების დაცვა'
        : isEng
        ? 'Shareholder Disputes & Asset Protection'
        : isRus
        ? 'Корпоративные споры и защита активов'
        : 'Ortaklar Arası Uyuşmazlıklar ve Varlık Koruması',
      description: isGeo
        ? 'კორპორაციული კონფლიქტების მოგვარება, წილების გამოსყიდვა, დირექტორთა პასუხისმგებლობა და სასამართლო წარმომადგენლობა.'
        : isEng
        ? 'Resolution of shareholder disputes, buy-out agreements, director liability claims, and formidable commercial litigation.'
        : isRus
        ? 'Урегулирование конфликтов участников, выкуп долей, ответственность руководства и защита интересов в суде.'
        : 'Hissedar uyuşmazlıklarının çözümü, pay devirleri, yönetici sorumluluk davaları ve ticari mahkemelerde temsil.',
      feature: isGeo ? 'ინტერესების მტკიცე დაცვა' : isEng ? 'Decisive Advocacy' : isRus ? 'Защита интересов в суде' : 'Kararlı Dava Temsili',
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
    ? 'ბიზნესისა და კორპორაციული საკითხების სრული იურიდიული მომსახურება აუდიტიდან აღსრულებამდე.'
    : isEng
    ? 'End-to-end legal architecture for corporate matters from regulatory audit through closing and litigation.'
    : isRus
    ? 'Полный юридический цикл сопровождения бизнеса от комплексного аудита до исполнения решений.'
    : 'İncelemeden kapanış ve dava takibine kadar kurumsal konular için uçtan uca hukuki destek.';

  const protocolSteps = [
    {
      number: '1.',
      image: card1Img || '/CARD1.png',
      title: isGeo
        ? 'კორპორაციული & საგადასახადო აუდიტი'
        : isEng
        ? 'Corporate & Risk Audit'
        : isRus
        ? 'Корпоративный и налоговый аудит'
        : 'Kurumsal ve Vergi Denetimi',
      description: isGeo
        ? 'კომპანიის სამართლებრივი სტატუსის, ხელშეკრულებებისა და რისკების პირველადი სიღრმისეული ანალიზი.'
        : isEng
        ? 'Comprehensive legal Due Diligence, contract auditing, compliance review, and vulnerability assessment.'
        : isRus
        ? 'Глубокий анализ правового статуса компании, действующих договоров и регуляторных рисков.'
        : 'Şirketin yasal durumunun, sözleşmelerinin ve kurumsal risklerinin ayrıntılı Due Diligence analizi.',
    },
    {
      number: '2.',
      image: card2Img || '/CARD2.png',
      title: isGeo
        ? 'სტრატეგია და სტრუქტურირება'
        : isEng
        ? 'Strategy & Structuring'
        : isRus
        ? 'Стратегия и структурирование'
        : 'Strateji ve Yapılandırma',
      description: isGeo
        ? 'ოპტიმალური იურიდიული მოდელის შერჩევა, პარტნიორთა შეთანხმებების დაგეგმვა და რისკების პრევენცია.'
        : isEng
        ? 'Designing tax-efficient corporate frameworks, shareholder mechanisms, and proactive dispute shielding.'
        : isRus
        ? 'Выбор оптимальной правовой модели, структурирование сделки и предотвращение корпоративных рисков.'
        : 'En uygun yasal modelin belirlenmesi, ortaklık yapısının planlanması ve risk önleyici tedbirler.',
    },
    {
      number: '3.',
      image: card3Img || '/CARD3.png',
      title: isGeo
        ? 'დოკუმენტური & სახელშეკრულებო ექსპერტიზა'
        : isEng
        ? 'Contractual Drafting & Closing'
        : isRus
        ? 'Договорная база и оформление'
        : 'Sözleşme ve Tescil Süreci',
      description: isGeo
        ? 'წესდებების, ხელშეკრულებების მომზადება, რეესტრში რეგისტრაცია და ნებართვების მოპოვება.'
        : isEng
        ? 'Drafting bespoke commercial covenants, notary execution, expedited state registry filings, and closing.'
        : isRus
        ? 'Подготовка уставов, коммерческих контрактов, регистрация в публичном реестре и получение лицензий.'
        : 'Ana sözleşmelerin hazırlanması, resmi tescil işlemleri ve ticari sözleşmelerin imzalanması.',
    },
    {
      number: '4.',
      image: card4Img || '/CARD4.png',
      title: isGeo
        ? 'სასამართლო & დავების წარმომადგენლობა'
        : isEng
        ? 'Commercial Advocacy & Enforcement'
        : isRus
        ? 'Судебная защита и арбитраж'
        : 'Mahkeme ve Tahkim Temsili',
      description: isGeo
        ? 'ბიზნეს ინტერესების ურყევი დაცვა სასამართლოში, არბიტრაჟში და მარეგულირებელ ორგანოებში.'
        : isEng
        ? 'Fearless representation in commercial courts, arbitration panels, and regulatory agency disputes.'
        : isRus
        ? 'Бескомпромиссная защита интересов бизнеса в суде, арбитраже и государственных инстанциях.'
        : 'Ticaret mahkemelerinde, tahkim kurullarında ve resmi kurumlarda kararlı hak savunuculuğu.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#030508] text-[#F2ECEC] selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]">
      <SeoHead
        title={
          isGeo
            ? 'ბიზნესი და კორპორაციული სამართალი | GLC Law Company'
            : isRus
              ? 'Корпоративное и бизнес-право | GLC Law Company'
              : language === 'TUR'
                ? 'İş ve Şirketler Hukuku | GLC Law Company'
                : 'Business & Corporate Law | GLC Law Company'
        }
        description={heroSubLine2}
        canonicalPath="/practice-areas/corporate-law"
        ogType="website"
        ogImage="/corporate.png"
        locale={isGeo ? 'ka_GE' : isRus ? 'ru_RU' : language === 'TUR' ? 'tr_TR' : 'en_US'}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'GLC Law Company - Business & Corporate Law',
            url: `${SITE_URL}/practice-areas/corporate-law`,
            provider: { '@id': `${SITE_URL}/#organization` },
            serviceType: 'Business & Corporate Law',
            areaServed: 'Georgia',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Business & Corporate Law', item: `${SITE_URL}/practice-areas/corporate-law` },
            ],
          },
        ]}
      />
      {/* Universal Curtain Opening Transition */}
      <CurtainIntro
        title="BUSINESS & CORPORATE LAW"
        subtitle="GLC LAW COMPANY"
        backdropImage={corporateHeroImg}
        mode="route"
      />

      {/* 1. Global Navbar */}
      <GlobalNavbar />

      {/* 2. HERO SECTION: Corporate Law Backdrop (Obsidian #030508) */}
      <header className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#030508] border-b border-[#D3AF37]/15 overflow-hidden flex flex-col justify-center items-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12">
        {/* Corporate Background Image with Obsidian Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={corporateHeroImg || '/corporate.png'}
            alt="GLC Corporate & Business Law"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center filter brightness-[0.96] contrast-[1.08] scale-100"
            unoptimized
          />
          {/* Refined Balanced Obsidian Luxury Gradient (40% - 65% opacity range for vivid background visibility) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(3, 5, 8, 0.42) 0%, rgba(3, 5, 8, 0.35) 40%, rgba(3, 5, 8, 0.65) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030508]/40 via-transparent to-[#030508]/40 pointer-events-none" />
        </div>

        {/* Ambient Gold Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D3AF37]/[0.05] rounded-full blur-[160px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121214]/85 border border-[#D3AF37]/40 shadow-[0_4px_20px_rgba(211,175,55,0.12)] mb-6 sm:mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-[#D3AF37]" />
            <span className="text-xs sm:text-sm font-geist font-semibold uppercase tracking-[0.2em] text-[#FEF5CD]">
              {heroBadgeText}
            </span>
          </motion.div>

          {/* Centered Compact Headline with letter-by-letter reveal */}
          <h1
            className="font-big-shoulders font-[900] uppercase text-[40px] sm:text-[58px] md:text-[72px] lg:text-[84px] leading-[0.96] tracking-tight mb-6 sm:mb-8 text-center max-w-4xl"
          >
            <span className="corporate-gold-gradient block drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              <ScrollLetterReveal text={heroHeadlineText} delay={0.64} triggerMode="mount" stagger={0.018} />
            </span>
          </h1>

          {/* Two Distinct Hero Subtext Lines Centered */}
          <div className="w-full max-w-3xl flex flex-col items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12 px-2">
            {/* Line 1: Strong authoritative statement */}
            <p className="font-geist text-base sm:text-lg md:text-xl font-medium text-[#FAF8F5] leading-relaxed text-center tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              <ScrollLetterReveal text={heroSubLine1} delay={0.78} triggerMode="mount" granularity="word" stagger={0.03} />
            </p>

            {/* Subtle Divider Bar */}
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D3AF37]/60 to-transparent my-0.5" />

            {/* Line 2: Comprehensive scope */}
            <p className="font-geist text-xs sm:text-sm md:text-base text-gray-300 font-normal leading-relaxed text-center max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              <ScrollLetterReveal text={heroSubLine2} delay={0.88} triggerMode="mount" granularity="word" stagger={0.025} />
            </p>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.96, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="saas-btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold font-geist text-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_4px_25px_rgba(211,175,55,0.25)] cursor-pointer"
            >
              <span>{isGeo ? 'კონსულტაციის დაჯავშნა' : isEng ? 'SCHEDULE CORPORATE AUDIT' : isRus ? 'ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ' : 'KURUMSAL DANIŞMANLIK AL'}</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </button>

            <a
              href="https://wa.me/995599277794"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-semibold font-geist text-[#FEF5CD] border border-[#D3AF37]/40 bg-[#121214]/80 hover:bg-[#1C1C1E] hover:border-[#D3AF37] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
            >
              <span>{isGeo ? 'WHATSAPP დაუყოვნებლივ' : isRus ? 'СВЯЗЬ В WHATSAPP' : language === 'TUR' ? 'WHATSAPP İLETİŞİM' : 'WHATSAPP DIRECT'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#D3AF37]" />
            </a>
          </motion.div>

        </div>
      </header>


      {/* 3. 4 CORE PILLARS SECTION */}
      <PracticePillarsBento
        sectionId="pillars"
        badgeText={pillarsBadge}
        headingText={pillarsHeading}
        subText={pillarsSub}
        pillars={corporatePillars}
      />

      {/* 4. 4 STAGES PROCEDURAL PROTOCOL */}
      <PracticeProtocolGrid
        sectionId="protocol"
        headingText={protocolHeading}
        subText={protocolSub}
        steps={protocolSteps}
      />


      {/* 5. DEDICATED BUSINESS & CORPORATE CLIENT TESTIMONIALS */}
      <Testimonials practiceKey="corporate" />

      {/* 6. EXECUTIVE CONSULTATION & CASE INQUIRY: Dark Slate-Navy (#090D16) */}
      <Contacts bgTheme="slate-navy" />

      {/* 6. AUTHORITATIVE FOOTER: Deep Obsidian (#080909) */}
      <Footer />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
