import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LanguageProvider } from "@/src/context/LanguageContext";
import ScrollToTop from "@/src/components/ScrollToTop";
import HomePage from "@/src/pages/HomePage";

// Route-level code splitting for faster initial homepage load (LCP/INP)
const PracticeAreaPage = lazy(() => import("@/src/pages/PracticeAreaPage"));
const BlogListPage = lazy(() => import("@/src/pages/BlogListPage"));
const BlogPostPage = lazy(() => import("@/src/pages/BlogPostPage"));
const RealEstatePage = lazy(() => import("@/src/pages/RealEstatePage"));
const FamilyLawPage = lazy(() => import("@/src/pages/FamilyLawPage"));
const CorporateLawPage = lazy(() => import("@/src/pages/CorporateLawPage"));
const NotFoundPage = lazy(() => import("@/src/pages/NotFoundPage"));

function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      const targetPath = hash.slice(1) || '/';
      navigate(targetPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

export default function App() {
  useEffect(() => {
    const updateButtonCoords = (clientX: number, clientY: number, target: Element | null) => {
      const btn = target?.closest('.saas-btn-gold, .saas-btn-dark, .premium-saas-btn') as HTMLElement | null;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      btn.style.setProperty('--mouse-x', `${Math.round(x)}px`);
      btn.style.setProperty('--mouse-y', `${Math.round(y)}px`);
    };

    const handlePointerMove = (e: PointerEvent) => {
      updateButtonCoords(e.clientX, e.clientY, e.target as Element);
    };

    const handlePointerDown = (e: PointerEvent) => {
      const btn = (e.target as Element)?.closest('.saas-btn-gold, .saas-btn-dark, .premium-saas-btn') as HTMLElement | null;
      if (btn) {
        updateButtonCoords(e.clientX, e.clientY, btn);
        btn.setAttribute('data-pressed', 'true');
      }
    };

    const handlePointerUp = () => {
      document.querySelectorAll('[data-pressed="true"]').forEach((el) => {
        el.removeAttribute('data-pressed');
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        updateButtonCoords(e.touches[0].clientX, e.touches[0].clientY, e.target as Element);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointercancel', handlePointerUp, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <LegacyHashRedirect />
        <ScrollToTop />
        <div className="min-h-screen bg-[#0C0D0D]">
          <Suspense fallback={<div className="min-h-screen bg-[#0C0D0D]" aria-busy="true" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/practice-areas/real-estate-law" element={<RealEstatePage />} />
              <Route path="/practice-areas/family-law" element={<FamilyLawPage />} />
              <Route path="/practice-areas/corporate-law" element={<CorporateLawPage />} />
              <Route path="/practice-areas/criminal-defense" element={<PracticeAreaPage />} />
              <Route path="/practice-areas/:id" element={<NotFoundPage />} />
              <Route path="/blogs" element={<BlogListPage />} />
              <Route path="/blogs/:slug" element={<BlogPostPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
