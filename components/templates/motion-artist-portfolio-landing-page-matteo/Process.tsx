'use client';

import React from 'react';
import { useLanguage } from '@/src/context/LanguageContext';
import {
  PracticeProtocolGrid,
  type PracticeProtocolStep,
} from '@/src/components/practice/PracticeSections';

// Background Assets for 4 Procedural Protocol Cards
import card1Img from '@/src/assets/CARD1.webp';
import card2Img from '@/src/assets/CARD2.webp';
import card3Img from '@/src/assets/CARD3.webp';
import card4Img from '@/src/assets/CARD4.webp';

export default function Process() {
  const { language } = useLanguage();

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';
  const isRus = language === 'RUS';

  const headingText = isGeo
    ? 'დაცვის 4 ეტაპი'
    : isEng
    ? '4 stages of defence'
    : isRus
    ? '4 этапа защиты'
    : '4 savunma aşaması';

  const subText = isGeo
    ? 'სისხლისსამართლებრივი დაცვის მკაცრი მექანიზმი დაკავების პირველივე წუთიდან სასამართლოში წარმომადგენლობამდე.'
    : isEng
    ? 'A strict criminal defense mechanism from the first minutes of detention to courtroom representation.'
    : isRus
    ? 'Строгий механизм уголовной защиты с первых минут задержания до представительства в суде.'
    : 'Gözaltının ilk dakikalarından mahkeme temsiline kadar tavizsiz ceza savunma mekanizması.';

  const steps: PracticeProtocolStep[] = [
    {
      number: '1.',
      image: card1Img || '/CARD1.png',
      title: isGeo
        ? 'ოპერატიული რეაგირება'
        : isEng
        ? 'Immediate Emergency Response'
        : isRus
        ? 'Оперативное реагирование'
        : 'Acil Müdahale',
      description: isGeo
        ? 'დაკავების, ჩხრეკისა და დაკითხვის პირველივე წუთებიდან ადვოკატის დაუყოვნებლივი ჩართვა და უკანონო ზეწოლის აღკვეთა.'
        : isEng
        ? 'Immediate lawyer presence from the first minutes of arrest, search, and interrogation to suppress procedural coercion.'
        : isRus
        ? 'Немедленное вступление адвоката с первых минут задержания, обыска и допроса для пресечения давления.'
        : 'Gözaltı, arama ve sorgunun ilk dakikalarından itibaren avukat katılımı ve hukuka aykırı baskının önlenmesi.',
    },
    {
      number: '2.',
      image: card2Img || '/CARD2.png',
      title: isGeo
        ? 'მტკიცებულებათა აუდიტი'
        : isEng
        ? 'Forensic Evidence Audit'
        : isRus
        ? 'Аудит доказательств'
        : 'Delil Denetimi',
      description: isGeo
        ? 'ბრალდების მასალების დეტალური ანალიზი, დამოუკიდებელი ექსპერტიზა და საპროცესო დარღვევით მოპოვებული მასალების გაბათილება.'
        : isEng
        ? 'Comprehensive scrutiny of prosecution files, independent forensic analysis, and invalidation of unlawfully obtained evidence.'
        : isRus
        ? 'Детальный анализ материалов обвинения, независимая экспертиза и признание недопустимыми полученных с нарушением материалов.'
        : 'İddia makamı delillerinin incelenmesi, bağımsız bilirkişi raporları ve usulsüz delillerin hükümsüz kılınması.',
    },
    {
      number: '3.',
      image: card3Img || '/CARD3.png',
      title: isGeo
        ? 'აღკვეთის ღონისძიება'
        : isEng
        ? 'Bail & Custody Defense'
        : isRus
        ? 'Мера пресечения и залог'
        : 'Adli Kontrol ve Kefalet',
      description: isGeo
        ? 'პატიმრობის ალტერნატივების (გირაო, თავდებობა) მიღწევა და რეგულარული ვიზიტები წინასწარი დაკავების იზოლატორსა თუ პენიტენციურ დაწესებულებებში.'
        : isEng
        ? 'Securing bail alternatives to incarceration and regular visits to detention and penitentiary facilities.'
        : isRus
        ? 'Достижение альтернатив аресту (залог, поручительство) и регулярные визиты в изоляторы и пенитенциарные учреждения.'
        : 'Tutuklama yerine kefalet ve adli kontrolün sağlanması; gözaltı ve cezaevlerinde düzenli avukat görüşmeleri.',
    },
    {
      number: '4.',
      image: card4Img || '/CARD4.png',
      title: isGeo
        ? 'სასამართლო დაცვა'
        : isEng
        ? 'Courtroom Trial Advocacy'
        : isRus
        ? 'Судебная защита и оправдание'
        : 'Duruşma ve Beraat Savunması',
      description: isGeo
        ? 'მოწმეთა ჯვარედინი დაკითხვა, ურყევი მტკიცებულებითი ბაზა და ბრძოლა გამამართლებელი განაჩენისათვის.'
        : isEng
        ? 'Cross-examination of witnesses, ironclad defense evidentiary foundation, and fight for a full acquittal.'
        : isRus
        ? 'Перекрестный допрос свидетелей, несокрушимая доказательственная база и борьба за оправдательный приговор.'
        : 'Tanıkların çapraz sorgusu, sarsılmaz delil temeli ve beraat için tavizsiz mücadele.',
    },
  ];

  return (
    <PracticeProtocolGrid
      sectionId="process"
      headingText={headingText}
      subText={subText}
      steps={steps}
    />
  );
}
