import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteCurtainLabel {
  title: string;
  subtitle: string;
}

const getCurtainLabel = (pathname: string): RouteCurtainLabel => {
  const path = pathname.toLowerCase();

  if (path.includes('criminal')) {
    return { title: 'CRIMINAL LAW', subtitle: 'GLC LAW COMPANY' };
  }
  if (path.includes('real-estate') || path.includes('property')) {
    return { title: 'REAL ESTATE & CONTRACTS', subtitle: 'GLC LAW COMPANY' };
  }
  if (path.includes('family') || path.includes('inheritance')) {
    return { title: 'FAMILY & INHERITANCE LAW', subtitle: 'GLC LAW COMPANY' };
  }
  if (path.includes('corporate') || path.includes('business')) {
    return { title: 'CORPORATE & BUSINESS LAW', subtitle: 'GLC LAW COMPANY' };
  }
  if (path.includes('administrative')) {
    return { title: 'ADMINISTRATIVE LAW', subtitle: 'GLC LAW COMPANY' };
  }
  if (path.includes('blog')) {
    return { title: 'PUBLICATIONS & INSIGHTS', subtitle: 'GLC LAW COMPANY' };
  }

  return { title: 'LEGAL EXCELLENCE', subtitle: 'GLC LAW COMPANY' };
};

export const CurtainIntro: React.FC = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);
  const [revealed, setRevealed] = useState(false);

  const label = useMemo(() => getCurtainLabel(pathname), [pathname]);

  useEffect(() => {
    setVisible(true);
    setRevealed(false);

    const revealTimer = window.setTimeout(() => {
      setRevealed(true);
    }, 520);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1520);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-40 pointer-events-none select-none flex items-center justify-center bg-[#060608] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        revealed ? 'opacity-0 scale-[1.03]' : 'opacity-100 scale-100'
      }`}
    >
      <div
        className={`flex flex-col items-center text-center px-6 transition-all duration-700 ease-out ${
          revealed ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'
        }`}
      >
        <span className="text-xs sm:text-sm md:text-base tracking-[0.34em] uppercase font-medium bg-gradient-to-r from-[#FFF4CC] via-[#E2C359] to-[#CDA12B] bg-clip-text text-transparent">
          {label.title}
        </span>
        <span className="mt-3 h-[1px] w-20 bg-gradient-to-r from-transparent via-[#E2C359] to-transparent" />
        <span className="mt-3 text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#F5F2EB]/85">
          {label.subtitle}
        </span>
      </div>
    </div>
  );
};

export default CurtainIntro;
