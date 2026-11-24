import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const CurtainIntro: React.FC = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(true);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    setActive(true);
    setOpening(false);

    const openTimer = window.setTimeout(() => {
      setOpening(true);
    }, 550);

    const hideTimer = window.setTimeout(() => {
      setActive(false);
    }, 1650);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-40 pointer-events-none select-none overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#060608] border-b border-[#C5A059]/25 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: opening ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 0, 0)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#060608] border-t border-[#C5A059]/25 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: opening ? 'translate3d(0, 100%, 0)' : 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
};

export default CurtainIntro;
