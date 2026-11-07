import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/src/context/LanguageContext";
import ScrollToTop from "@/src/components/ScrollToTop";
import HomePage from "@/src/pages/HomePage";
import PracticeAreaPage from "@/src/pages/PracticeAreaPage";
import BlogListPage from "@/src/pages/BlogListPage";
import BlogPostPage from "@/src/pages/BlogPostPage";
import RealEstatePage from "@/src/pages/RealEstatePage";
import FamilyLawPage from "@/src/pages/FamilyLawPage";
import CorporateLawPage from "@/src/pages/CorporateLawPage";

export default function App() {
  // Global high-tech mouse-tracking spotlight and press state coordinator
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
      <HashRouter>
        <ScrollToTop />
        <main className="min-h-screen bg-[#0C0D0D]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/practice-areas/real-estate-law" element={<RealEstatePage />} />
            <Route path="/practice-areas/family-law" element={<FamilyLawPage />} />
            <Route path="/practice-areas/corporate-law" element={<CorporateLawPage />} />
            <Route path="/practice-areas/criminal-defense" element={<PracticeAreaPage />} />
            <Route path="/practice-areas/:id" element={<PracticeAreaPage />} />
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/blogs/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </HashRouter>
    </LanguageProvider>
  );
}
