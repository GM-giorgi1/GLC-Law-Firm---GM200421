'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Users,
  HeartHandshake,
  FileText,
  Scale,
  ArrowUpRight,
  CheckCircle2,
  Scroll,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import GlobalNavbar from '@/src/components/common/GlobalNavbar';
import CurtainIntro from '@/src/components/common/CurtainIntro';
import ConsultationModal from '@/src/components/common/ConsultationModal';
import Contacts from '@/components/templates/lawyer-portfolio-landing-page-alex/Contacts';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';

// Family Law Assets
import familyHeroImg from '@/src/assets/family.png';
import family1Img from '@/src/assets/family1.png';
import family2Img from '@/src/assets/family2.png';
import family3Img from '@/src/assets/family3.png';
import family4Img from '@/src/assets/family4.png';
import family5Img from '@/src/assets/family5.png';
import family6Img from '@/src/assets/family6.png';
import family7Img from '@/src/assets/family7.png';
import family8Img from '@/src/assets/family8.png';

export default function FamilyLawPage() {
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
    ? 'ოჯახური აქტივების დაცვა & სამართლებრივი მემკვიდრეობა'
    : isEng
    ? 'FAMILY ASSET PROTECTION & ESTATE SUCCESSION'
    : isRus
    ? 'ЗАЩИТА СЕМЕЙНЫХ АКТИВОВ И НАСЛЕДСТВЕННОЕ ПРАВО'
    : 'AİLE VARLIKLARININ KORUNMASI VE MİRAS HUKUKU';

  const heroHeadlineText = isGeo
    ? 'საოჯახო & მემკვიდრეობითი სამართალი'
    : isEng
    ? 'FAMILY & INHERITANCE LAW'
    : isRus
    ? 'СЕМЕЙНОЕ И НАСЛЕДСТВЕННОЕ ПРАВО'
    : 'AİLE VE MİRAS HUKUKU';

  // Hero Subtexts (strictly as specified by user)
  const heroSubLine1 = isGeo
    ? '„ოჯახური და ქონებრივი ინტერესების დაცვა სწორი სტრატეგიით და სამართლებრივი მიდგომით.“'
    : isEng
    ? 'Protection of family and property interests with sound strategy and rigorous legal advocacy.'
    : isRus
    ? 'Защита семейных и имущественных интересов с правильной стратегией и правовым подходом.'
    : 'Doğru strateji ve hukuki yaklaşımla ailevi ve mülkiyet haklarının tavizsiz korunması.';

  const heroSubLine2 = isGeo
    ? '„განქორწინება, ქონების გაყოფა, არასრულწლოვნის უფლებები და მემკვიდრეობითი დავები - ინდივიდუალური სამართლებრივი სტრატეგია და პროფესიული წარმომადგენლობა სასამართლოს ნებისმიერ ინსტანციასა თუ დაწესებულებაში.“'
    : isEng
    ? 'Divorce, division of marital assets, minor rights, and inheritance disputes - personalized legal strategy and authoritative advocacy across all courts and agencies.'
    : isRus
    ? 'Развод, раздел имущества, права несовершеннолетних и наследственные споры — индивидуальная правовая стратегия и профессиональное представительство во всех инстанциях.'
    : 'Boşanma, mal paylaşımı, reşit olmayanların hakları ve miras davaları - tüm mahkemelerde ve kurumlarda profesyonel temsil.';

  // Strategic Pillars Copy (Section 2)
  const pillarsBadge = isGeo
    ? 'გამოცდილება. სტრატეგია. შედეგი.'
    : isEng
    ? 'EXPERIENCE. STRATEGY. RESULT.'
    : isRus
    ? 'ОПЫТ. СТРАТЕГИЯ. РЕЗУЛЬТАТ.'
    : 'DENEYİM. STRATEJİ. SONUÇ.';

  // Strictly: "4 ფუნდამენტური საყრდენი"
  const pillarsHeading = isGeo
    ? '4 ფუნდამენტური საყრდენი'
    : isEng
    ? '4 Fundamental Pillars'
    : isRus
    ? '4 фундаментальные опоры'
    : '4 Temel Dayanak';

  // Strictly: "სწორი მიდგომა, რეალური სტრატეგია და გამოცდილება თქვენი ინტერესების დაცვის რეალური საფუძველია"
  const pillarsSub = isGeo
    ? 'სწორი მიდგომა, რეალური სტრატეგია და გამოცდილება თქვენი ინტერესების დაცვის რეალური საფუძველია'
    : isEng
    ? 'The right approach, genuine strategy, and extensive experience form the true foundation for protecting your interests.'
    : isRus
    ? 'Правильный подход, реальная стратегия и опыт — основа надежной защиты ваших интересов.'
    : 'Doğru yaklaşım, gerçek strateji ve deneyim haklarınızın korunmasının temel dayanağıdır.';

  // 4 Core Pillar Cards with family1 to family4 assets
  const familyPillars = [
    {
      number: '01',
      icon: Users,
      image: family1Img || '/family1.png',
      title: isGeo
        ? 'ქორწინება და ქონების გაყოფა'
        : isEng
        ? 'Marriage & Property Division'
        : isRus
        ? 'Брак и раздел имущества'
        : 'Evlilik ve Mal Paylaşımı',
      description: isGeo
        ? 'ქორწინების რეგისტრაცია, საქორწინო ხელშეკრულების შედგენა და ქონების გამიჯვნა, განქორწინება, ქონების გამიჯვნა და გაყოფა.'
        : isEng
        ? 'Marriage registration, drafting prenuptial agreements, asset separation, divorce proceedings, and equitable division of marital property.'
        : isRus
        ? 'Регистрация брака, составление брачного договора, развод, выдел и раздел совместно нажитого имущества.'
        : 'Evlilik tescili, evlilik sözleşmesi hazırlığı, boşanma, mal ayrılığı ve ortak malların adil paylaşımı.',
      feature: isGeo ? 'აქტივების 100%-იანი დაცვა' : isEng ? '100% Asset Protection' : isRus ? '100% защита активов' : '%100 Varlık Güvenliği',
    },
    {
      number: '02',
      icon: HeartHandshake,
      image: family2Img || '/family2.png',
      title: isGeo
        ? 'არასრულწლოვნის უფლებები & ალიმენტი'
        : isEng
        ? 'Minor Rights & Alimony'
        : isRus
        ? 'Права несовершеннолетних и алименты'
        : 'Çocuk Hakları ve Nafaka',
      description: isGeo
        ? 'არასრულწლოვნის საუკეთესო ინტერესის დაცვა, შვილის მეურვეობა თუ ალიმენტის დაკისრება.'
        : isEng
        ? 'Guaranteed defense of the best interests of minors, child custody determinations, visitation protocols, and fair alimony awards.'
        : isRus
        ? 'Защита наилучших интересов ребенка, опека над детьми, определение места жительства и взыскание алиментов.'
        : 'Çocuğun üstün yararının korunması, velayet işlemleri ve adil nafaka bağlanması.',
      feature: isGeo ? 'ბავშვის ინტერესების პრიორიტეტი' : isEng ? 'Best Interests of Minor' : isRus ? 'Приоритет прав ребенка' : 'Çocuğun Üstün Yararı',
    },
    {
      number: '03',
      icon: Scroll,
      image: family3Img || '/family3.png',
      title: isGeo
        ? 'ანდერძი და მემკვიდრეობის მიღება'
        : isEng
        ? 'Wills & Inheritance Succession'
        : isRus
        ? 'Завещания и принятие наследства'
        : 'Vasiyetname ve Mirasın Kabulü',
      description: isGeo
        ? 'სამკვდრო გახსნა და მიღება, ანდერძი, სავალდებულო წილი, ქონების გაყოფა და ნოტარიული წარმოება.'
        : isEng
        ? 'Opening and acceptance of inheritance, wills, mandatory forced share claims, estate division, and notary representation.'
        : isRus
        ? 'Открытие и принятие наследства, завещания, обязательная доля, раздел наследственного имущества и нотариальное оформление.'
        : 'Mirasın açılması ve kabulü, vasiyetname, saklı pay talepleri, miras paylaşımı ve noter işlemleri.',
      feature: isGeo ? 'მემკვიდრეობის უსაფრთხო გადაცემა' : isEng ? 'Secure Estate Transfer' : isRus ? 'Безопасное наследование' : 'Güvenli Miras İntikali',
    },
    {
      number: '04',
      icon: Scale,
      image: family4Img || '/family4.png',
      title: isGeo
        ? 'სასამართლო წარმომადგენლობა'
        : isEng
        ? 'Courtroom Advocacy & Litigation'
        : isRus
        ? 'Судебное представительство'
        : 'Mahkeme Temsili ve Dava Takibi',
      description: isGeo
        ? 'კონფლიქტის მედიაციით მოგვარება, კონფიდენციალური მოლაპარაკებები და დავების და სასამართლოს ყველა ინსტანციაში ეფექტური სამართლებრივი წარმომადგენლობა.'
        : isEng
        ? 'Dispute resolution through mediation, confidential out-of-court negotiations, and formidable trial advocacy across all court instances.'
        : isRus
        ? 'Урегулирование конфликтов через медиацию, конфиденциальные переговоры и эффективная защита во всех судебных инстанциях.'
        : 'Uyuşmazlıkların arabuluculukla çözümü, gizli müzakereler ve tüm mahkeme derecelerinde etkili temsil.',
      feature: isGeo ? 'ყველა ინსტანციაში წარმომადგენლობა' : isEng ? 'Advocacy Across All Courts' : isRus ? 'Защита во всех инстанциях' : 'Tüm Mahkemelerde Temsil',
    },
  ];

  // 4 Stages Protocol Data with family5 to family8 assets
  const protocolBadge = isGeo
    ? 'საპროცესო პროტოკოლი'
    : isEng
    ? 'PROCEDURAL PROTOCOL'
    : isRus
    ? 'ПРОЦЕССУАЛЬНЫЙ ПРОТОКОЛ'
    : 'USUL PROTOKOLÜ';

  const protocolHeading = isGeo
    ? 'საპროცესო პროტოკოლი, დაცვის 4 ეტაპი'
    : isEng
    ? 'PROCEDURAL PROTOCOL. 4 STAGES OF PROTECTION'
    : isRus
    ? 'ПРОЦЕССУАЛЬНЫЙ ПРОТОКОЛ. 4 ЭТАПА ЗАЩИТЫ'
    : 'USUL PROTOKOLÜ. 4 KORUMA AŞAMASI';

  // Strictly: "საოჯახო და მემკვიდრეობით საკითხებთან დაკავშირებულ საკითხებზე სრული იურიდიული მომსახურეობა."
  const protocolSub = isGeo
    ? 'საოჯახო და მემკვიდრეობით საკითხებთან დაკავშირებულ საკითხებზე სრული იურიდიული მომსახურეობა.'
    : isEng
    ? 'Comprehensive legal services for all matters relating to family and inheritance law.'
    : isRus
    ? 'Полное юридическое обслуживание по всем вопросам семейного и наследственного права.'
    : 'Aile ve miras hukukuna ilişkin tüm konularda eksiksiz hukuki danışmanlık ve temsil.';

  const protocolSteps = [
    {
      number: '1.',
      image: family5Img || '/family5.png',
      title: isGeo
        ? 'კონფიდენციალური აუდიტი'
        : isEng
        ? 'Confidential Case Audit'
        : isRus
        ? 'Конфиденциальный аудит'
        : 'Gizli Vaka İncelemesi',
      description: isGeo
        ? 'საქმის გარემოებების, ქონებრივი აქტივებისა და ოჯახური ინტერესების პირველადი სიღრმისეული ანალიზი.'
        : isEng
        ? 'In-depth private assessment of family circumstances, estate assets, and strategic legal avenues.'
        : isRus
        ? 'Первичный глубинный анализ обстоятельств дела, имущественных активов и семейных интересов.'
        : 'Ailevi durumun, mal varlıklarının ve hukuki hedeflerin gizlilik esasıyla ayrıntılı değerlendirilmesi.',
    },
    {
      number: '2.',
      image: family6Img || '/family6.png',
      title: isGeo
        ? 'მედიაცია და მოლაპარაკება'
        : isEng
        ? 'Mediation & Settlement'
        : isRus
        ? 'Медиация и переговоры'
        : 'Arabuluculuk ve Uzlaşma',
      // Strictly: "კონფლიქტის მშვიდობიანი მოგვარება, შეთანხმების მიღწევა და დავის დროული პრევენცია"
      description: isGeo
        ? 'კონფლიქტის მშვიდობიანი მოგვარება, შეთანხმების მიღწევა და დავის დროული პრევენცია'
        : isEng
        ? 'Peaceful dispute settlement, reaching binding agreements, and timely dispute prevention.'
        : isRus
        ? 'Мирное урегулирование конфликта, достижение соглашений и своевременное предотвращение спора.'
        : 'Uyuşmazlıkların barışçıl çözümü, anlaşmaya varılması ve uzun dava süreçlerinin önlenmesi.',
    },
    {
      number: '3.',
      image: family7Img || '/family7.png',
      title: isGeo
        ? 'საპროცესო დოკუმენტაცია'
        : isEng
        ? 'Procedural Filings & Evidence'
        : isRus
        ? 'Процессуальные документы'
        : 'Dava Dilekçesi ve Delil Hazırlığı',
      // Strictly: "სარჩელის თუ შესაგებლის შედგენა, მტკიცებულებების შეგროვება თუ შუამდგომლობების მომზადება სასამართლო დავის ეფექტურად წარმოებისათვის."
      description: isGeo
        ? 'სარჩელის თუ შესაგებლის შედგენა, მტკიცებულებების შეგროვება თუ შუამდგომლობების მომზადება სასამართლო დავის ეფექტურად წარმოებისათვის.'
        : isEng
        ? 'Drafting claims or defense pleadings, gathering evidence, and filing motions for effective courtroom advocacy.'
        : isRus
        ? 'Составление иска или отзыва, сбор доказательств и подготовка ходатайств для эффективного ведения дела.'
        : 'Dava dilekçelerinin ve cevapların hazırlanması, delillerin toplanması ve etkili yargılama için taleplerin sunulması.',
    },
    {
      number: '4.',
      image: family8Img || '/family8.png',
      title: isGeo
        ? 'სასამართლო და აღსრულება'
        : isEng
        ? 'Trial Advocacy & Enforcement'
        : isRus
        ? 'Суд и исполнение решений'
        : 'Duruşma Temsili ve İcra',
      description: isGeo
        ? 'ინტერესების მტკიცე დაცვა სასამართლოში, გადაწყვეტილების მიღება და სააღსრულებო მონიტორინგი.'
        : isEng
        ? 'Formidable advocacy in all court hearings, securing definitive verdicts, and monitoring full enforcement.'
        : isRus
        ? 'Твердая защита интересов во всех судебных заседаниях и контроль фактического исполнения решений.'
        : 'Tüm mahkeme duruşmalarında tavizsiz temsil, kesin hükmün alınması ve icra takibinin denetimi.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#030508] text-[#F2ECEC] selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]">
      {/* Universal Curtain Opening Transition */}
      <CurtainIntro
        title="FAMILY & INHERITANCE LAW"
        subtitle="GLC LAW COMPANY"
        backdropImage={familyHeroImg}
      />

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
          
          .family-gold-gradient {
            background: linear-gradient(180deg, #FEF5CD 0%, #E2C359 45%, #D2AE37 75%, #8C6A1C 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `
      }} />

      {/* 2. HERO SECTION: Family Law Backdrop (Obsidian #030508) */}
      <header className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#030508] border-b border-[#D3AF37]/15 overflow-hidden flex flex-col justify-center items-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12">
        {/* Family Background Image with Obsidian Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={familyHeroImg || '/family.png'}
            alt="GLC Family & Inheritance Law"
            fill
            priority
            className="object-cover object-center filter brightness-[0.92] contrast-[1.08] scale-100"
            unoptimized
          />
          {/* Multi-stop Dark Obsidian Luxury Gradient (~90% opacity for pristine text legibility) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(3, 5, 8, 0.90) 0%, rgba(3, 5, 8, 0.82) 40%, rgba(3, 5, 8, 0.92) 80%, #030508 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030508]/85 via-transparent to-[#030508]/85 pointer-events-none" />
        </div>

        {/* Ambient Gold Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D3AF37]/[0.05] rounded-full blur-[160px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121214]/85 border border-[#D3AF37]/40 shadow-[0_4px_20px_rgba(211,175,55,0.12)] mb-6 sm:mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-[#D3AF37]" />
            <span className="text-xs sm:text-sm font-geist font-semibold uppercase tracking-[0.2em] text-[#FEF5CD]">
              {heroBadgeText}
            </span>
          </motion.div>

          {/* Centered Compact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-big-shoulders font-[900] uppercase text-[40px] sm:text-[58px] md:text-[72px] lg:text-[84px] leading-[0.96] tracking-tight mb-6 sm:mb-8 text-center max-w-4xl"
          >
            <span className="family-gold-gradient block drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              {heroHeadlineText}
            </span>
          </motion.h1>

          {/* Two Distinct Hero Subtext Lines Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl flex flex-col items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12 px-2"
          >
            {/* Line 1: Strong authoritative statement */}
            <p className="font-geist text-base sm:text-lg md:text-xl font-medium text-[#FAF8F5] leading-relaxed text-center tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {heroSubLine1}
            </p>

            {/* Subtle Divider Bar */}
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D3AF37]/60 to-transparent my-0.5" />

            {/* Line 2: Comprehensive scope */}
            <p className="font-geist text-xs sm:text-sm md:text-base text-gray-300 font-normal leading-relaxed text-center max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {heroSubLine2}
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="saas-btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold font-geist text-black uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_4px_25px_rgba(211,175,55,0.25)] cursor-pointer"
            >
              <span>{isGeo ? 'კონსულტაციის დაჯავშნა' : isEng ? 'SCHEDULE STRATEGY AUDIT' : 'ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ'}</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </button>

            <a
              href="https://wa.me/995599277794"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-semibold font-geist text-[#FEF5CD] border border-[#D3AF37]/40 bg-[#121214]/80 hover:bg-[#1C1C1E] hover:border-[#D3AF37] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
            >
              <span>{isGeo ? 'WHATSAPP დაუყოვნებლივ' : 'WHATSAPP DIRECT'}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </a>
          </motion.div>

        </div>
      </header>


      {/* 3. 4 CORE PILLARS SECTION: Rich Dark Slate-Navy (#090D16) with subtle 1px gold border */}
      <section 
        id="pillars" 
        className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#090D16] border-y border-[#D3AF37]/15 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="font-geist text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D3AF37] uppercase mb-3">
              {pillarsBadge}
            </span>
            <h2 className="font-big-shoulders font-[900] uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              {pillarsHeading}
            </h2>
            <p className="font-geist text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
              {pillarsSub}
            </p>
          </div>

          {/* 4 Pillars Grid with family1 to family4 assets and subtle blur glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {familyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group rounded-2xl overflow-hidden bg-[#0D121F] border border-[#D3AF37]/25 hover:border-[#D3AF37]/70 shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-500 flex flex-col justify-between min-h-[340px] sm:min-h-[380px] p-6 sm:p-8"
                >
                  {/* Subtle Background Photography with Blur and Glassmorphism Gradient */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center filter blur-[1px] brightness-[0.70] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Rich multi-stop dark obsidian glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#090D16]/90 via-[#090D16]/82 to-[#090D16]/95 pointer-events-none" />
                  </div>

                  {/* Card Header: Number & Icon */}
                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <span className="font-big-shoulders font-bold text-2xl sm:text-3xl text-[#D3AF37] tracking-wider">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#121214]/85 border border-[#D3AF37]/40 flex items-center justify-center text-[#D3AF37] group-hover:scale-110 group-hover:border-[#D3AF37] transition-all shadow-md">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Card Content: Title & Text */}
                  <div className="relative z-10">
                    <h3 className="font-big-shoulders font-bold uppercase text-2xl sm:text-3xl text-white tracking-tight mb-3 group-hover:text-[#FEF5CD] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-geist text-sm sm:text-base text-gray-200 leading-relaxed mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                      {pillar.description}
                    </p>

                    {/* Bottom feature pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#030508]/85 border border-[#D3AF37]/35 text-xs font-geist text-[#D3AF37] font-semibold tracking-wider uppercase">
                      <Award className="w-3.5 h-3.5 text-[#D3AF37]" />
                      <span>{pillar.feature}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 4. 4 STAGES PROCEDURAL PROTOCOL: Brushed Charcoal Obsidian (#0D121F) with subtle 1px gold border */}
      <section 
        id="protocol" 
        className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#0D121F] border-b border-[#D3AF37]/15 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="font-geist text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D3AF37] uppercase mb-3">
              {protocolBadge}
            </span>
            <h2 className="font-big-shoulders font-[900] uppercase text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              {protocolHeading}
            </h2>
            <p className="font-geist text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
              {protocolSub}
            </p>
          </div>

          {/* 4 Protocol Cards Grid with family5 to family8 assets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {protocolSteps.map((step, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: sIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredProtocolIndex(sIdx)}
                onMouseLeave={() => setHoveredProtocolIndex(null)}
                className="relative group rounded-2xl overflow-hidden bg-[#030508] border border-[#D3AF37]/25 hover:border-[#D3AF37] shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all duration-500 flex flex-col justify-between min-h-[320px] p-6"
              >
                {/* Protocol Card Photography with Subtle Blur and Obsidian Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center filter blur-[1px] brightness-[0.70] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/85 to-[#030508]/75 pointer-events-none" />
                </div>

                {/* Number & Stage indicator */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <span className="font-big-shoulders font-[900] text-3xl sm:text-4xl text-[#D3AF37]">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#121214]/80 border border-[#D3AF37]/35 flex items-center justify-center text-[#D3AF37]">
                    <CheckCircle2 className="w-4 h-4 text-[#D3AF37]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <h4 className="font-big-shoulders font-bold uppercase text-xl sm:text-2xl text-white tracking-tight mb-2.5 group-hover:text-[#FEF5CD] transition-colors">
                    {step.title}
                  </h4>
                  <p className="font-geist text-xs sm:text-sm text-gray-200 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. EXECUTIVE CONSULTATION & CASE INQUIRY: Dark Slate-Navy (#090D16) */}
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
