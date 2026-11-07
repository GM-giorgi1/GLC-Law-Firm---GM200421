import React, { useEffect } from 'react';
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

export default function HomePage() {
  // If an anchor hash is present, smoothly scroll to it on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes('#')) {
      const parts = hash.split('#');
      const targetId = parts[parts.length - 1];
      if (targetId && !['/', 'aboutme', 'services', 'cases', 'testimonials', 'blogs', 'contact'].includes(targetId)) {
        return;
      }
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <Aboutme />
      <Services />
      <Casestudy />
      <Metrics />
      <Testimonials />
      <Price />
      <Blogs />
      <Contacts />
      <Footer />
    </>
  );
}
