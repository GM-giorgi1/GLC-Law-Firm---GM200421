import React, { useEffect } from 'react';
import GlobalNavbar from '@/src/components/common/GlobalNavbar';
import Header from '@/components/templates/lawyer-portfolio-landing-page-alex/Header';
import Aboutme from '@/components/templates/lawyer-portfolio-landing-page-alex/AboutMe';
import Services from '@/components/templates/lawyer-portfolio-landing-page-alex/Services';
import Casestudy from '@/components/templates/lawyer-portfolio-landing-page-alex/CaseStudy';
import Metrics from '@/components/templates/lawyer-portfolio-landing-page-alex/Metrics';
import Testimonials from '@/components/templates/lawyer-portfolio-landing-page-alex/Testimonials';
import Price from '@/components/templates/lawyer-portfolio-landing-page-alex/Price';
import Blogs from '@/components/templates/lawyer-portfolio-landing-page-alex/Blogs';
import Contacts from '@/components/templates/lawyer-portfolio-landing-page-alex/Contacts';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';
import SeoHead, { buildFirmAndAttorneySchema } from '@/src/components/common/SeoHead';
import { useLanguage } from '@/src/context/LanguageContext';
import { scrollToSection } from '@/src/utils/scrollToSection';

export default function HomePage() {
  const { language } = useLanguage();

  useEffect(() => {
    const handleScrollTarget = () => {
      let target: string | null = null;
      try {
        target = sessionStorage.getItem('scroll_target');
        if (target) {
          sessionStorage.removeItem('scroll_target');
        }
      } catch {
        target = null;
      }
      if (!target && window.location.hash) {
        const hash = window.location.hash;
        const match = hash.match(/#(?:.*#)?([a-zA-Z0-9_-]+)$/);
        if (match && match[1] && match[1] !== '/') {
          target = match[1];
        }
      }

      if (target) {
        const validIds = ['about', 'aboutme', 'services', 'cases', 'testimonials', 'team', 'pricing', 'metrics', 'blogs', 'contact'];
        if (validIds.includes(target)) {
          setTimeout(() => {
            if (!scrollToSection(target!)) {
              setTimeout(() => scrollToSection(target!), 180);
            }
          }, 80);
        }
      }
    };

    handleScrollTarget();
  }, []);

  const seoTitle =
    language === 'GEO'
      ? 'GLC Law Company | ადვოკატი გიორგი გუბელაძე - ბათუმი და თბილისი'
      : language === 'RUS'
      ? 'GLC Law Company | Адвокат Георгий Губеладзе - Батуми и Тбилиси'
      : language === 'TUR'
      ? 'GLC Law Company | Avukat Giorgi Gubeladze - Batum ve Tiflis'
      : 'GLC Law Company | Advocate Giorgi Gubeladze - Batumi & Tbilisi';

  const seoDesc =
    language === 'GEO'
      ? '21+ წლიანი გამოცდილება სისხლის, სამოქალაქო, ადმინისტრაციულ, ბიზნეს და საოჯახო სამართალში. დაჯავშნეთ კონსულტაცია GLC Law Company-სთან.'
      : language === 'RUS'
      ? 'Более 21 года опыта судебной защиты и юридической практики в Грузии: уголовное, гражданское, административное, корпоративное и семейное право.'
      : language === 'TUR'
      ? "Gürcistan'da ceza, medeni, idare, şirketler ve aile hukuku alanlarında 21+ yıllık dava ve danışmanlık deneyimi. GLC Law Company ile randevu alın."
      : 'Over 21 years of courtroom and advisory mastery across Criminal, Civil, Administrative, Business, and Family Law in Georgia. Book a consultation with GLC Law Company.';

  const locale = language === 'GEO' ? 'ka_GE' : language === 'RUS' ? 'ru_RU' : language === 'TUR' ? 'tr_TR' : 'en_US';

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDesc}
        canonicalPath="/"
        ogType="website"
        locale={locale}
        schema={buildFirmAndAttorneySchema()}
      />
      <GlobalNavbar />
      <main className="min-h-screen bg-[#0B0B0D] text-[#FAFAFB] overflow-x-clip">
        <Header />
        <Aboutme />
        <Services />
        <Casestudy />
        <Metrics />
        <Testimonials />
        <Price />
        <Blogs />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
