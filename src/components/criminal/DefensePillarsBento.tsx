'use client';

import React from 'react';
import { ShieldAlert, Scale, FileSearch, Gavel } from 'lucide-react';
import { useLanguage } from '@/src/context/LanguageContext';
import {
  PracticePillarsBento,
  type PracticePillarItem,
} from '@/src/components/practice/PracticeSections';

// Background Image Assets for 4 Strategic Pillars
import investigationImg from '@/src/assets/investigation.png';
import evidenceImg from '@/src/assets/evidence.png';
import detentionImg from '@/src/assets/detention.png';
import courtroomImg from '@/src/assets/courtroom.png';

export default function DefensePillarsBento() {
  const { language } = useLanguage();

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';
  const isRus = language === 'RUS';

  const badgeText = isGeo
    ? 'გამოცდილება. სტრატეგია. შედეგი.'
    : isEng
    ? 'EXPERIENCE. STRATEGY. RESULT.'
    : isRus
    ? 'ОПЫТ. СТРАТЕГИЯ. РЕЗУЛЬТАТ.'
    : 'DENEYİM. STRATEJİ. SONUÇ.';

  const headingText = isGeo
    ? 'დაცვის 4 ფუნდამენტური საყრდენი'
    : isEng
    ? '4 Fundamental Pillars of Defense'
    : isRus
    ? '4 фундаментальные опоры защиты'
    : 'Savunmanın 4 Temel Dayanağı';

  const subText = isGeo
    ? 'საპროცესო სიზუსტე, საგამოძიებო კონტროლი და თავისუფლების უფლების ურყევი დაცვა სასამართლოს ყველა ინსტანციაში.'
    : isEng
    ? 'Procedural rigor, strict investigation oversight, and uncompromising defense of your personal liberty across all court jurisdictions.'
    : isRus
    ? 'Процессуальная строгость, жесткий контроль следствия и бескомпромиссная защита свободы во всех инстанциях.'
    : 'Usul titizliği, sıkı soruşturma denetimi ve tüm mahkeme kademelerinde kişisel özgürlüğün tavizsiz savunması.';

  const pillars: PracticePillarItem[] = [
    {
      number: '01',
      icon: ShieldAlert,
      image: investigationImg || '/investigation.png',
      title: isGeo
        ? 'დაცვა გამოძიების ეტაპზე'
        : isEng
        ? 'Defense at Investigation Stage'
        : isRus
        ? 'Защита на стадии следствия'
        : 'Soruşturma Aşamasında Savunma',
      description: isGeo
        ? 'გამოძიების დაწყებიდანვე ვაფასებთ საქმის გარემოებებს, ვქმნით სტრატეგიას და ვიცავთ თქვენს უფლებებს. დროული სამართლებრივი ჩარევა ხელს უწყობს დაცვის ეფექტიანი სტრატეგიის ჩამოყალიბებას.'
        : isEng
        ? 'From the inception of investigation, we assess case circumstances, forge a proven strategy, and safeguard your rights. Timely legal intervention establishes an effective defense.'
        : isRus
        ? 'С самого начала следствия мы оцениваем обстоятельства дела, формируем стратегию и защищаем ваши права. Своевременное вмешательство обеспечивает эффективность защиты.'
        : 'Soruşturmanın başlangıcından itibaren delilleri değerlendirir, strateji kurar ve haklarınızı savunuruz. Zamanında müdahale etkin savunma sağlar.',
      feature: isGeo ? 'ადვოკატის ჩართვა გამოძიების ეტაპზე' : isEng ? 'Counsel at Investigation Stage' : isRus ? 'Участие адвоката на следствии' : 'Soruşturmaya Avukat Katılımı',
    },
    {
      number: '02',
      icon: FileSearch,
      image: evidenceImg || '/evidence.png',
      title: isGeo
        ? 'მტკიცებულებების მოპოვება და შეფასება'
        : isEng
        ? 'Obtaining & Evaluating Evidence'
        : isRus
        ? 'Сбор и правовая оценка доказательств'
        : 'Delillerin Toplanması ve Değerlendirilmesi',
      description: isGeo
        ? 'ვიკვლევთ საქმის მასალებს, ვამოწმებთ მტკიცებულებათა სანდოობას & დასაშვებობას, ვამზადებთ სამართლებრივ პოზიციას და ვატარებთ დამატებით საგამოძიებო მოქმედებებსა თუ ექსპერტიზას.'
        : isEng
        ? 'We scrutinize case materials, audit the credibility and admissibility of evidence, craft legal positioning, and conduct supplementary investigations or expert analysis.'
        : isRus
        ? 'Мы исследуем материалы дела, проверяем достоверность и допустимость доказательств, готовим правовую позицию и проводим экспертизы.'
        : 'Dava dosyalarını inceler, delillerin güvenilirliğini denetler, hukuki pozisyon hazırlar ve ek bilirkişi incelemeleri yaptırırız.',
      feature: isGeo ? 'მტკიცებულებების სამართლებრივი შეფასება' : isEng ? 'Legal Assessment of Evidence' : isRus ? 'Правовая оценка доказательств' : 'Delillerin Hukuki Değerlendirmesi',
    },
    {
      number: '03',
      icon: Scale,
      image: detentionImg || '/detention.png',
      title: isGeo
        ? 'აღკვეთის ღონისძიება და პატიმრობაში მყოფ პირთა დაცვა'
        : isEng
        ? 'Preventive Measures & Custody Defense'
        : isRus
        ? 'Меры пресечения и защита лиц под стражей'
        : 'Adli Kontrol ve Tutuklu Hakları Savunması',
      description: isGeo
        ? 'ვიცავთ კლიენტის ინტერესებს აღკვეთის ღონისძიების შერჩევის, შეცვლის და გაუქმების საკითხებზე. ვამზადებთ შუამდგომლობებს და უზრუნველყოფთ 24/7 ოპერატიულ კომუნიკაციას.'
        : isEng
        ? 'We defend our client on the selection, modification, and revocation of preventive custody. We prepare legal motions and guarantee 24/7 emergency communication.'
        : isRus
        ? 'Защищаем интересы при избрании, изменении и отмене меры пресечения. Готовим ходатайства и обеспечиваем связь 24/7.'
        : 'Tedbirlerin seçimi, değişimi ve iptalinde müvekkili savunuruz. İtiraz dilekçeleri hazırlar ve 7/24 iletişim sağlarız.',
      feature: isGeo ? 'აღკვეთის ღონისძიებაზე სამართლებრივი დახმარება' : isEng ? 'Bail & Custody Legal Assistance' : isRus ? 'Помощь по мерам пресечения' : 'Tedbir ve Tahliye Yardımı',
    },
    {
      number: '04',
      icon: Gavel,
      image: courtroomImg || '/courtroom.png',
      title: isGeo
        ? 'დაცვა სასამართლოში და გადაწყვეტილების გასაჩივრება'
        : isEng
        ? 'Courtroom Trial Defense & Appeals'
        : isRus
        ? 'Защита в суде и обжалование решений'
        : 'Duruşma Savunması ve Karar Temyizi',
      description: isGeo
        ? 'წარმოვადგენთ კლიენტის ინტერესებს საქალაქო, სააპელაციო თუ უზენაეს სასამართლოში: მტკიცებულებათა გამოკვლევა, მოწმეთა დაკითხვა თუ სწორი სტრატეგიული დაცვა.'
        : isEng
        ? 'We represent clients across District, Appellate, and Supreme Court jurisdictions: examining evidence, cross-examining witnesses, and delivering strategic defense.'
        : isRus
        ? 'Представляем клиентов в судах первой, апелляционной и кассационной инстанций: допрос свидетелей и стратегическая защита.'
        : 'İlk derece, İstinaf ve Yargıtay nezdinde temsil: delillerin incelenmesi, çapraz sorgu ve stratejik duruşma savunması.',
      feature: isGeo ? 'სასამართლოში წარმომადგენლობა' : isEng ? 'Courtroom Trial Representation' : isRus ? 'Судебное представительство' : 'Mahkemede Temsil',
    },
  ];

  return (
    <PracticePillarsBento
      sectionId="defense-pillars"
      badgeText={badgeText}
      headingText={headingText}
      subText={subText}
      pillars={pillars}
    />
  );
}
