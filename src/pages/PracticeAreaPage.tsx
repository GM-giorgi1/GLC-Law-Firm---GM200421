import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GlobalNavbar from '@/src/components/common/GlobalNavbar';
import Header from '@/components/templates/motion-artist-portfolio-landing-page-matteo/Header';
import DefensePillarsBento from '@/src/components/criminal/DefensePillarsBento';
import Process from '@/components/templates/motion-artist-portfolio-landing-page-matteo/Process';
import Contacts from '@/components/templates/lawyer-portfolio-landing-page-alex/Contacts';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';
import RealEstatePage from '@/src/pages/RealEstatePage';
import FamilyLawPage from '@/src/pages/FamilyLawPage';
import CorporateLawPage from '@/src/pages/CorporateLawPage';

import SEOHead from '@/src/components/common/SEOHead';
import { useLanguage } from '@/src/context/LanguageContext';

export const PracticeAreaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';

  // Ensure page scrolls to top on route navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (id === 'real-estate-law') {
    return <RealEstatePage />;
  }

  if (id === 'family-law') {
    return <FamilyLawPage />;
  }

  if (id === 'corporate-law') {
    return <CorporateLawPage />;
  }

  const criminalTitle = isGeo
    ? 'სისხლის სამართლის დაცვა — GLC Law Company | გიორგი გუბელაძე'
    : isEng
    ? 'Criminal Defense Advocacy — GLC Law Company | Giorgi Gubeladze'
    : 'Защита по уголовным делам — GLC Law Company | Георгий Губеладзе';

  const criminalDesc = isGeo
    ? 'სისხლისსამართლებრივი დაცვის 4 ფუნდამენტური საყრდენი. დაცვა გამოძიების ეტაპზე, აღკვეთის ღონისძიება, მტკიცებულებები და სასამართლო წარმომადგენლობა. დარეკეთ: +995 599 27 77 94.'
    : isEng
    ? 'Elite criminal defense counsel in Georgia: investigation advocacy, pre-trial detention mitigation, evidentiary review, and court trials. Call: +995 599 27 77 94.'
    : 'Элитная защита по уголовным делам в Грузии: стадия следствия, меры пресечения, доказательства и суд. Тел: +995 599 27 77 94.';

  return (
    <main className="min-h-screen bg-[#030508] text-[#F2ECEC] selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]">
      <SEOHead
        title={criminalTitle}
        description={criminalDesc}
        canonicalPath="/practice-areas/criminal-defense"
        practiceAreaName={isGeo ? 'სისხლის სამართალი' : 'Criminal Defense'}
      />
      {/* 1. Global Navbar with rich backdrop-blur-xl and subtle gold border glow */}
      <GlobalNavbar />

      {/* 2. Hero Section: Deep Obsidian Black (#030508) */}
      <Header />

      {/* 3. 4 Core Defense Pillars Bento Grid: Rich Dark Slate-Navy (#090D16) */}
      <DefensePillarsBento />

      {/* 4. 4 Stages of Procedural Protocol: Brushed Charcoal Obsidian (#0D121F) */}
      <Process />

      {/* 5. Executive Consultation & Case Inquiry: Rich Dark Slate-Navy (#090D16) */}
      <Contacts bgTheme="slate-navy" />

      {/* 7. Homepage Authoritative Footer: Deep Obsidian (#080909) with Marquee & Booking */}
      <Footer />
    </main>
  );
};

export default PracticeAreaPage;
