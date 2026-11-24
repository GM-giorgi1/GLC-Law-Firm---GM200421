'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = '',
}: ConsultationModalProps) {
  const { language, t: tr } = useLanguage();
  const normalizeService = (svc: string) => {
    switch (svc) {
      case 'criminal-defense':
      case 'criminal':
        return 'criminal';
      case 'real-estate-law':
      case 'civil':
        return 'civil';
      case 'administrative':
        return 'administrative';
      case 'corporate':
      case 'corporate-law':
      case 'business':
        return 'business';
      case 'family-law':
      case 'familyInheritance':
        return 'familyInheritance';
      default:
        return 'criminal';
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: normalizeService(defaultService),
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: normalizeService(defaultService),
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#0E0E10] border border-[#D3AF37]/50 rounded-2xl p-6 sm:p-8 text-[#FAFAFB] shadow-[0_25px_70px_rgba(0,0,0,0.95)] my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[#D3AF37] font-['Antonio'] font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>{tr.hero.confidentialSession}</span>
              </div>
              <h2 className="font-['Antonio'] font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                {tr.hero.bookConsultation}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-inter-tight mt-1 leading-relaxed">
                {tr.hero.modalSubtitle}
              </p>
            </div>

            {/* Success State */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#D3AF37]/20 border-2 border-[#D3AF37] text-[#D3AF37] flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-['Antonio'] font-bold text-2xl sm:text-3xl text-white uppercase">
                  {tr.hero.requestReceived}
                </h3>
                <p className="text-sm text-gray-300 font-inter-tight max-w-md leading-relaxed">
                  {tr.hero.requestReceivedDesc}
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href="https://wa.me/995599277794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="saas-btn-gold py-3 px-6 rounded-xl font-['Antonio'] text-base uppercase font-bold text-black flex items-center justify-center gap-2 flex-1"
                  >
                    <span>
                      {language === 'GEO'
                        ? 'პირდაპირი დაკავშირება'
                        : language === 'RUS'
                          ? 'Написать напрямую'
                          : language === 'TUR'
                            ? 'Doğrudan Mesaj'
                            : 'Direct Message'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="saas-btn-dark py-3 px-6 rounded-xl font-['Antonio'] text-base uppercase font-bold text-gray-300 hover:text-white flex items-center justify-center flex-1 cursor-pointer min-h-[44px]"
                  >
                    {language === 'GEO'
                      ? 'დახურვა'
                      : language === 'RUS'
                        ? 'Закрыть'
                        : language === 'TUR'
                          ? 'Kapat'
                          : 'Close'}
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-4 font-inter-tight">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    {tr.hero.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      language === 'GEO'
                        ? 'მაგ. გიორგი ბერიძე'
                        : language === 'RUS'
                          ? 'Напр. Георгий Беридзе'
                          : language === 'TUR'
                            ? 'Örn. Ahmet Yılmaz'
                            : 'e.g. John Doe'
                    }
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#151518] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D3AF37] transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      {tr.hero.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+995 5XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#151518] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D3AF37] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      {tr.hero.workEmailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#151518] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D3AF37] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    {tr.hero.practiceAreaLabel}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#151518] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#D3AF37] transition-colors text-sm"
                  >
                    <option value="criminal">{tr.hero.options.criminal}</option>
                    <option value="civil">{tr.hero.options.civil}</option>
                    <option value="administrative">{tr.hero.options.administrative}</option>
                    <option value="business">{tr.hero.options.business}</option>
                    <option value="familyInheritance">{tr.hero.options.familyInheritance}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    {tr.hero.caseSummaryLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      language === 'GEO'
                        ? 'მოკლედ აღწერეთ თქვენი საქმე ან კითხვა...'
                        : language === 'RUS'
                          ? 'Кратко опишите ваше дело или вопрос...'
                          : language === 'TUR'
                            ? 'Durumunuzu veya sorunuzu kısaca özetleyin...'
                            : 'Briefly describe your case or question...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#151518] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D3AF37] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="saas-btn-gold w-full py-3.5 px-6 rounded-xl font-['Antonio'] text-lg uppercase font-bold text-black flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2 min-h-[44px]"
                >
                  <span>
                    {isSubmitting
                      ? language === 'GEO'
                        ? 'იგზავნება...'
                        : language === 'RUS'
                          ? 'Отправка...'
                          : language === 'TUR'
                            ? 'Gönderiliyor...'
                            : 'Submitting...'
                      : tr.hero.confirmScheduleBtn}
                  </span>
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>

                {/* Direct Line Alternative */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>
                    {language === 'GEO'
                      ? 'სასწრაფო საქმეებზე პირდაპირი კავშირი:'
                      : language === 'RUS'
                        ? 'Срочная линия связи:'
                        : language === 'TUR'
                          ? 'Acil Doğrudan Hat:'
                          : 'Urgent Direct Line:'}
                  </span>
                  <a
                    href="tel:+995599277794"
                    className="text-[#D3AF37] font-semibold hover:underline inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+995 599 27 77 94</span>
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
