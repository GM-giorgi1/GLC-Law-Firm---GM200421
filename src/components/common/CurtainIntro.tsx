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
    return { title: 'PUBLICATIONS', subtitle: firmName };
  }

  return { title: 'GLC LAW COMPANY', subtitle: firmName };
};

export const CurtainIntro: React.FC = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const [phase, setPhase] = useState<'closed' | 'opening' | 'done'>('closed');

  const copy = useMemo(() => getCurtainCopy(pathname, language), [pathname, language]);

  useEffect(() => {
    setPhase('closed');

    const openTimer = window.setTimeout(() => {
      setPhase('opening');
    }, 560);

    const doneTimer = window.setTimeout(() => {
      setPhase('done');
    }, 1340);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(doneTimer);
    };
  }, [pathname]);

  if (phase === 'done') return null;

  const isOpening = phase === 'opening';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-40 pointer-events-none select-none overflow-hidden"
    >
      {/* TOP CURTAIN */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#0B0B0D] border-b border-[#D3AF37]/30 flex flex-col justify-end items-center pb-3 px-4 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform"
        style={{
          transform: isOpening ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 0, 0)',
        }}
      >
        <span className="font-inter-tight font-semibold uppercase text-[#F2ECEC] tracking-[0.18em] text-2xl sm:text-4xl md:text-5xl text-center leading-none">
          {copy.title}
        </span>
      </div>

      {/* BOTTOM CURTAIN */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0B0B0D] border-t border-[#D3AF37]/30 flex flex-col justify-start items-center pt-3.5 px-4 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform"
        style={{
          transform: isOpening ? 'translate3d(0, 100%, 0)' : 'translate3d(0, 0, 0)',
        }}
      >
        <p className="font-inter-tight font-semibold text-sm sm:text-base text-[#D3AF37] tracking-[0.3em] uppercase text-center">
          {copy.subtitle}
        </p>
      </div>
    </div>
  );
};

export default CurtainIntro;
