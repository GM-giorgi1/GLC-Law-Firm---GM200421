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

export const PracticeAreaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

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

  return (
    <main className="min-h-screen bg-[#030508] text-[#F2ECEC] selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]">
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
