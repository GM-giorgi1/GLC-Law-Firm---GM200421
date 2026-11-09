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

export default function HomePage() {
  // If an anchor hash or sessionStorage scroll target is present, smoothly scroll to it on load
  useEffect(() => {
    const handleScrollTarget = () => {
      let target = sessionStorage.getItem('scroll_target');
      if (target) {
        sessionStorage.removeItem('scroll_target');
      } else if (window.location.hash) {
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
            const el = document.getElementById(target);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      }
    };

    handleScrollTarget();
  }, []);

  return (
    <>
      <GlobalNavbar />
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
