import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    let pendingTarget: string | null = null;
    try {
      pendingTarget = sessionStorage.getItem('scroll_target');
    } catch {
      pendingTarget = null;
    }
    const hasPendingAnchor = Boolean(pendingTarget) || (Boolean(hash) && hash !== '#/' && pathname === '/');
    if (hasPendingAnchor) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname, search, hash]);

  return null;
}
