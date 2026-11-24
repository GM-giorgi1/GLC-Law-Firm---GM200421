import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GlobalNavbar from '@/src/components/common/GlobalNavbar';
import Header from '@/components/templates/motion-artist-portfolio-landing-page-matteo/Header';
import DefensePillarsBento from '@/src/components/criminal/DefensePillarsBento';
import Process from '@/components/templates/motion-artist-portfolio-landing-page-matteo/Process';
import Testimonials from '@/components/templates/lawyer-portfolio-landing-page-alex/Testimonials';
import Contacts from '@/components/templates/lawyer-portfolio-landing-page-alex/Contacts';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';
import RealEstatePage from '@/src/pages/RealEstatePage';
import FamilyLawPage from '@/src/pages/FamilyLawPage';
import CorporateLawPage from '@/src/pages/CorporateLawPage';
import SeoHead, { SITE_URL } from '@/src/components/common/SeoHead';
import { useLanguage } from '@/src/context/LanguageContext';

export const PracticeAreaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

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

  const canonicalPath = id ? `/practice-areas/${id}` : '/practice-areas/criminal-defense';
  const seoTitle =
    language === 'GEO'
      ? 'სისხლის სამართალი და დაცვა | GLC Law Company'
      : language === 'RUS'
        ? 'Уголовное право и судебная защита | GLC Law Company'
        : language === 'TUR'
          ? 'Ceza Hukuku ve Dava Savunması | GLC Law Company'
          : 'Criminal Law & Defense Advocacy | GLC Law Company';
  const seoDesc =
    language === 'GEO'
      ? 'სისხლის სამართლის გამოცდილი ადვოკატი ბათუმსა და თბილისში: დაცვა გამოძიების ეტაპზე, აღკვეთის ღონისძიება, მტკიცებულებათა აუდიტი და სასამართლო წარმომადგენლობა.'
      : language === 'RUS'
        ? 'Опытный адвокат по уголовным делам в Батуми и Тбилиси: защита на стадии следствия, аудит доказательств, меры пресечения и представительство в суде.'
        : language === 'TUR'
          ? 'Batum ve Tiflis ceza avukatı: soruşturma aşamasında savunma, delil denetimi, tutukluluğa itiraz ve mahkemede temsil.'
          : 'Dedicated criminal defense representation in Batumi & Tbilisi: investigation defense, forensic evidence audit, bail advocacy, and trial defense.';
  const locale =
    language === 'GEO' ? 'ka_GE' : language === 'RUS' ? 'ru_RU' : language === 'TUR' ? 'tr_TR' : 'en_US';

  return (
    <main className="min-h-screen bg-[#030508] text-[#F2ECEC] selection:bg-[#D3AF37]/30 selection:text-[#FEF5CD]">
      <SeoHead
        title={seoTitle}
        description={seoDesc}
        canonicalPath={canonicalPath}
        ogType="website"
        ogImage="/criminalhero.png"
        locale={locale}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'GLC Law Company - Criminal Law & Defense Advocacy',
            url: `${SITE_URL}${canonicalPath}`,
            provider: { '@id': `${SITE_URL}/#organization` },
            serviceType: 'Criminal Defense Law',
            areaServed: 'Georgia',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Criminal Defense', item: `${SITE_URL}${canonicalPath}` },
            ],
          },
        ]}
      />
      {/* 1. Global Navbar with rich backdrop-blur-xl and subtle gold border glow */}
      <GlobalNavbar />

      {/* 2. Hero Section: Deep Obsidian Black (#030508) */}
      <Header />

      {/* 3. 4 Core Defense Pillars Bento Grid: Rich Dark Slate-Navy (#090D16) */}
      <DefensePillarsBento />

      {/* 4. 4 Stages of Procedural Protocol: Brushed Charcoal Obsidian (#0D121F) */}
      <Process />

      {/* 5. Dedicated Criminal Defense Client Testimonials */}
      <Testimonials practiceKey="criminal" />

      {/* 6. Executive Consultation & Case Inquiry: Rich Dark Slate-Navy (#090D16) */}
      <Contacts bgTheme="slate-navy" />

      {/* 7. Homepage Authoritative Footer: Deep Obsidian (#080909) with Marquee & Booking */}
      <Footer />
    </main>
  );
};

export default PracticeAreaPage;
