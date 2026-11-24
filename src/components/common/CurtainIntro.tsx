import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/src/context/LanguageContext';

interface CurtainCopy {
  title: string;
  subtitle: string;
}

const getCurtainCopy = (pathname: string, language: string): CurtainCopy => {
  const path = pathname.toLowerCase();
  const firmName = 'GLC LAW COMPANY';

  if (path.includes('criminal')) {
    if (language === 'GEO') return { title: 'სისხლის სამართალი', subtitle: firmName };
    if (language === 'RUS') return { title: 'CRIMINAL LAW', subtitle: firmName };
    if (language === 'TUR') return { title: 'CRIMINAL LAW', subtitle: firmName };
    return { title: 'CRIMINAL LAW', subtitle: firmName };
  }

  if (path.includes('real-estate') || path.includes('property')) {
    return { title: 'REAL ESTATE LAW', subtitle: firmName };
  }

  if (path.includes('family') || path.includes('inheritance')) {
    return { title: 'FAMILY & INHERITANCE', subtitle: firmName };
  }

  if (path.includes('corporate') || path.includes('business')) {
    return { title: 'CORPORATE LAW', subtitle: firmName };
  }

  if (path.includes('blog')) {
    return { title: 'LEGAL INSIGHTS', subtitle: firmName };
  }

  return { title: 'GLC LAW FIRM', subtitle: firmName };
};

export const CurtainIntro: React.FC = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const [phase, setPhase] = useState<'idle' | 'entering' | 'revealing' | 'done'>('entering');

  const copy = useMemo(() => getCurtainCopy(pathname, language), [pathname, language]);

  useEffect(() => {
    setPhase('entering');

    const revealTimer = window.setTimeout(() => {
      setPhase('revealing');
    }, 680);

    const doneTimer = window.setTimeout(() => {
      setPhase('done');
    }, 1580);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(doneTimer);
    };
  }, [pathname]);

  if (phase === 'done') return null;

  const isRevealing = phase === 'revealing';

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-40 pointer-events-none select-none flex items-center justify-center bg-[#030508] transition-opacity duration-700 ease-out ${
        isRevealing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`flex flex-col items-center text-center px-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isRevealing ? '-translate-y-4 scale-[0.98]' : 'translate-y-0 scale-100'
        }`}
      >
        <span className="font-inter-tight text-sm sm:text-base md:text-lg tracking-[0.38em] uppercase font-medium bg-gradient-to-r from-[#FFF4CC] via-[#E2C359] to-[#CDA12B] bg-clip-text text-transparent">
          {copy.title}
        </span>

        <span
          className={`mt-3 h-[1px] bg-gradient-to-r from-transparent via-[#E2C359] to-transparent transition-all duration-700 ${
            isRevealing ? 'w-8 opacity-40' : 'w-24 opacity-100'
          }`}
        />

        <span className="mt-3 font-inter-tight text-[11px] sm:text-xs tracking-[0.32em] uppercase text-[#F2ECEC]/85">
          {copy.subtitle}
        </span>
      </div>
    </div>
  );
};

export default CurtainIntro;
