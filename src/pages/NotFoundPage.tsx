import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import GlobalNavbar from '@/src/components/common/GlobalNavbar';
import Footer from '@/components/templates/lawyer-portfolio-landing-page-alex/Footer';
import SeoHead from '@/src/components/common/SeoHead';
import { useLanguage } from '@/src/context/LanguageContext';

export default function NotFoundPage() {
  const { language } = useLanguage();

  const title =
    language === 'GEO'
      ? 'გვერდი ვერ მოიძებნა (404) | GLC Law Company'
      : language === 'RUS'
      ? 'Страница не найдена (404) | GLC Law Company'
      : language === 'TUR'
      ? 'Sayfa Bulunamadı (404) | GLC Law Company'
      : 'Page Not Found (404) | GLC Law Company';

  const heading =
    language === 'GEO'
      ? 'გვერდი ვერ მოიძებნა'
      : language === 'RUS'
      ? 'Страница не найдена'
      : language === 'TUR'
      ? 'Sayfa Bulunamadı'
      : 'Page Not Found';

  const description =
    language === 'GEO'
      ? 'მოთხოვნილი მისამართი არ არსებობს ან გადატანილია. გთხოვთ დაბრუნდეთ მთავარ გვერდზე.'
      : language === 'RUS'
      ? 'Запрашиваемая страница не существует или была перемещена. Пожалуйста, вернитесь на главную.'
      : language === 'TUR'
      ? 'Aradığınız sayfa bulunamadı veya taşınmış olabilir. Lütfen ana sayfaya dönün.'
      : 'The requested page does not exist or has been moved. Please return to the homepage.';

  const ctaLabel =
    language === 'GEO'
      ? 'მთავარ გვერდზე დაბრუნება'
      : language === 'RUS'
      ? 'Вернуться на главную'
      : language === 'TUR'
      ? 'Ana Sayfaya Dön'
      : 'Return to Homepage';

  return (
    <div className="min-h-screen bg-[#030508] text-[#FAFAFB] flex flex-col">
      <SeoHead
        title={title}
        description={description}
        canonicalPath="/404"
        noIndex
      />
      <GlobalNavbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#D3AF37]/10 border border-[#D3AF37]/40 flex items-center justify-center text-[#D3AF37] mb-6">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#D3AF37] mb-3">
          HTTP 404
        </span>
        <h1 className="font-['Antonio'] uppercase text-3xl sm:text-5xl font-bold text-white mb-4">
          {heading}
        </h1>
        <p className="font-inter-tight text-sm sm:text-base text-gray-400 max-w-md mb-8 leading-relaxed">
          {description}
        </p>
        <Link
          to="/"
          className="saas-btn-gold inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-['Antonio'] font-bold text-base text-black uppercase tracking-wider min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{ctaLabel}</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
