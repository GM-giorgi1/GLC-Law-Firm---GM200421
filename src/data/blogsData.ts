export interface BlogPostDetail {
  id: number;
  slug: string;
  category: string;
  readTime: string;
  date: {
    GEO: string;
    ENG: string;
    RUS: string;
    TUR: string;
  };
  title: {
    GEO: string;
    ENG: string;
    RUS: string;
    TUR: string;
  };
  excerpt: {
    GEO: string;
    ENG: string;
    RUS: string;
    TUR: string;
  };
  image: string;
  alt: string;
  author: {
    name: string;
    role: {
      GEO: string;
      ENG: string;
      RUS: string;
      TUR: string;
    };
    avatar: string;
  };
  content: {
    GEO: {
      intro: string;
      sections: {
        heading: string;
        statuteRef?: string;
        body: string[];
      }[];
      keyTakeaways: string[];
      statutorySummary: string;
    };
    ENG: {
      intro: string;
      sections: {
        heading: string;
        statuteRef?: string;
        body: string[];
      }[];
      keyTakeaways: string[];
      statutorySummary: string;
    };
    RUS: {
      intro: string;
      sections: {
        heading: string;
        statuteRef?: string;
        body: string[];
      }[];
      keyTakeaways: string[];
      statutorySummary: string;
    };
    TUR: {
      intro: string;
      sections: {
        heading: string;
        statuteRef?: string;
        body: string[];
      }[];
      keyTakeaways: string[];
      statutorySummary: string;
    };
  };
}

export const BLOG_POSTS_DETAIL: BlogPostDetail[] = [
  {
    id: 1,
    slug: 'what-to-do-when-served-lawsuit',
    category: 'სამოქალაქო სამართალი',
    readTime: '6 წთ საკითხავი',
    date: {
      GEO: '18 სექტემბერი, 2026',
      ENG: 'Sep 18, 2026',
      RUS: '18 сентября 2026 г.',
      TUR: '18 Eylül 2026',
    },
    title: {
      GEO: 'რა უნდა მოიმოქმედოთ, როდესაც სასამართლო სარჩელს ჩაგაბარებენ',
      ENG: "What to Do When You're Served with a Lawsuit",
      RUS: 'Что делать, если вам вручили судебный иск',
      TUR: 'Size Bir Dava Tebliğ Edildiğinde Ne Yapmalısınız',
    },
    excerpt: {
      GEO: 'სასამართლო უწყების ჩაბარებისთანავე იწყება მკაცრი პროცესუალური ვადების ათვლა. გაიგეთ, როგორ დაიცვათ თავი და არ დაკარგოთ თქვენი კანონიერი უფლებები.',
      ENG: 'Receipt of a summons initiates strict statutory limitation periods. Discover critical procedural steps to preserve your legal rights and strategic defense.',
      RUS: 'Вручение судебного иска запускает строгие процессуальные сроки. Узнайте, как защитить свои права и сформировать стратегическую защиту.',
      TUR: 'Dava tebligatı ile birlikte yasal süreler işlemeye başlar. Yasal haklarınızı korumak ve etkili bir savunma hazırlamak için gereken adımlar.',
    },
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Golden scales of justice on mahogany executive desk with law books',
    author: {
      name: 'გიორგი გუბელაძე',
      role: {
        GEO: 'უფროსი პარტნიორი, ადვოკატი',
        ENG: 'Senior Partner, Attorney at Law',
        RUS: 'Старший партнер, Адвокат',
        TUR: 'Kıdemli Ortak, Avukat',
      },
      avatar: '/.tempmediaStorage/GUBE1.jpeg',
    },
    content: {
      GEO: {
        intro: 'საქართველოს სამოქალაქო საპროცესო კოდექსის შესაბამისად, სასამართლო სარჩელისა და თანდართული დოკუმენტაციის ოფიციალური ჩაბარების მომენტიდან იწყება მოპასუხის უფლება-მოვალეობების პროცესუალური ათვლა. პასიურობა ან ვადების გაშვება იწვევს დაუსწრებელი გადაწყვეტილების გამოტანას მოსარჩელის სასარგებლოდ.',
        sections: [
          {
            heading: '1. ჩაბარების თარიღის ფიქსაცია და დოკუმენტების აუდიტი',
            statuteRef: 'სსსკ მუხლი 70–78 (სასამართლო შეტყობინება და დაბარება)',
            body: [
              'ჩაბარების ფაქტი და თარიღი არის საპროცესო ვადის ათვლის ერთადერთი სამართლებრივი საწყისი წერტილი. აუცილებლად დააფიქსირეთ გზავნილის მიღების ზუსტი დღე და საათი.',
              'სრულად გადაამოწმეთ სარჩელზე თანდართული მტკიცებულებების ნუსხა: ყველა მოხსენიებული დოკუმენტი რეალურად არის თუ არა ჩაბარებულ კონვერტში.',
            ],
          },
          {
            heading: '2. შესაგებლის მომზადების იმპერატიული ვადა',
            statuteRef: 'სსსკ მუხლი 201 (შესაგებლის წარდგენა)',
            body: [
              'სასამართლოს მიერ განისაზღვრება შესაგებლის წარდგენის ვადა (როგორც წესი, 14-დან 21 დღემდე საქმის სირთულის მიხედვით).',
              'თუ მოპასუხე დადგენილ ვადაში არ წარადგენს შესაგებელს და არ წარმოადგენს საპატიო მიზეზს, მოსამართლე უფლებამოსილია გამოიტანოს დაუსწრებელი გადაწყვეტილება მოსარჩელის მოთხოვნის სრული დაკმაყოფილებით.',
            ],
          },
          {
            heading: '3. შეგებებული სარჩელის წარდგენა და მტკიცებულებითი ბაზა',
            statuteRef: 'სსსკ მუხლი 207 (შეგებებული სარჩელი)',
            body: [
              'თუ თქვენ გაქვთ ურთიერთდაკავშირებული მოთხოვნა მოსარჩელის მიმართ, შეგებებული სარჩელის აღძვრა შესაძლებელია მხოლოდ შესაგებლისთვის დადგენილ ვადაში.',
              'მტკიცებულებების მოძიება (წერილობითი ხელშეკრულებები, საბანკო ამონაწერები, ექსპერტიზის დასკვნები) უნდა დაიწყოს დაუყოვნებლივ პირველსავე დღეებში.',
            ],
          },
        ],
        keyTakeaways: [
          'არასდროს დატოვოთ სასამართლო გზავნილი უპასუხოდ; იურიდიული უმოქმედობა უტოლდება მოთხოვნის უსიტყვო აღიარებას.',
          'შესაგებლის წარდგენის ვადის გაშვება იწვევს დაუსწრებელ გადაწყვეტილებას (Default Judgment).',
          'საქმის მასალების პროფესიონალური ანალიზი პირველივე 48 საათში ზრდის მოგების შანსს 80%-ზე მეტით.',
        ],
        statutorySummary: 'საქართველოს სამოქალაქო საპროცესო კოდექსის მუხლი 201-ის თანახმად, შესაგებლის წარდგენის ვადის გაგრძელება შესაძლებელია მხოლოდ საპატიო მიზეზის არსებობისას შესაბამისი შუამდგომლობის დროული დაყენებით.',
      },
      ENG: {
        intro: 'Under procedural civil law, the formal service of a lawsuit initiates a strict clock. Inaction or missed deadlines typically result in a default judgment being granted directly in favor of the plaintiff.',
        sections: [
          {
            heading: '1. Date Stamp and Comprehensive Evidence Audit',
            statuteRef: 'Civil Procedure Code, Arts. 70-78',
            body: [
              'Document the precise day and hour of delivery. This is the sole starting point for procedural statutory periods.',
              'Cross-check every exhibit referenced in the petition against physical copies delivered.',
            ],
          },
          {
            heading: '2. Mandatory Timeframe for Filing a Formal Defense',
            statuteRef: 'Civil Procedure Code, Art. 201',
            body: [
              'The court establishes a strict response window (typically 14 to 21 days). Failure to reply allows the court to issue a default judgment without further trial hearing.',
            ],
          },
          {
            heading: '3. Counterclaims and Evidentiary Submission',
            statuteRef: 'Civil Procedure Code, Art. 207',
            body: [
              'Counterclaims must be filed strictly concurrently with your statement of defense.',
              'Evidence collection must begin within the first 48 hours to secure witness statements and forensic materials.',
            ],
          },
        ],
        keyTakeaways: [
          'Never ignore a formal court delivery; silence is legally construed as admissions.',
          'Statutory response periods are rigid; missed deadlines result in default judgments.',
          'Immediate legal counsel within 48 hours preserves procedural counterclaims.',
        ],
        statutorySummary: 'Civil Procedure Code Article 201 mandates formal defense submission within the statutory timeframe or face binding adverse judgment.',
      },
      RUS: {
        intro: 'В соответствии с Гражданским процессуальным кодексом официальное вручение искового заявления запускает строгий отсчет процессуальных сроков. Бездействие приводит к вынесению заочного решения в пользу истца.',
        sections: [
          {
            heading: '1. Фиксация даты вручения и аудит доказательств',
            statuteRef: 'ГПК, статьи 70–78 (Судебные извещения)',
            body: [
              'Зафиксируйте точный день и час получения. Это отправная точка всех сроков.',
              'Проверьте соответствие всех приложенных документов описи.',
            ],
          },
          {
            heading: '2. Пресекательный срок подачи отзыва на иск',
            statuteRef: 'ГПК, статья 201 (Подача возражения)',
            body: [
              'Суд устанавливает срок подачи отзыва (обычно от 14 до 21 дня). Непредоставление отзыва влечет вынесение заочного решения.',
            ],
          },
          {
            heading: '3. Встречный иск и доказательственная база',
            statuteRef: 'ГПК, статья 207 (Встречный иск)',
            body: [
              'Встречный иск может быть подан исключительно в пределах срока, установленного для подачи возражений.',
            ],
          },
        ],
        keyTakeaways: [
          'Игнорирование иска влечет заочное решение суда в пользу истца.',
          'Сроки ответа строго регламентированы процессуальным законом.',
          'Своевременное обращение к адвокату позволяет сохранить право на встречный иск.',
        ],
        statutorySummary: 'Статья 201 ГПК предусматривает обязательную подачу отзыва на иск под угрозой немедленного вынесения заочного решения.',
      },
      TUR: {
        intro: 'Hukuk Muhakemeleri Kanunu uyarınca dava dilekçesinin tebliği ile birlikte yasal süreler işlemeye başlar. Hareketsizlik, davacı lehine gıyapta karar verilmesine yol açabilir.',
        sections: [
          {
            heading: '1. Tebligat Tarihinin Tespiti ve Belge Denetimi',
            statuteRef: 'HMK İlgili Tebligat Maddeleri',
            body: [
              'Tebligatın alındığı gün ve saati kesin olarak not edin.',
              'Dava dilekçesine ekli tüm delilleri eksiksiz kontrol edin.',
            ],
          },
          {
            heading: '2. Cevap Dilekçesi Verme Zorunluluğu',
            statuteRef: 'HMK Cevap Süreleri',
            body: [
              'Yasal süresi içerisinde cevap dilekçesi verilmemesi, davacının iddialarının kabulü anlamına gelebilecek sonuçlar doğurur.',
            ],
          },
          {
            heading: '3. Karşı Dava Açma ve Delil Sunumu',
            statuteRef: 'HMK Karşı Dava Hükümleri',
            body: [
              'Karşı dava ancak cevap süresi içerisinde açılabilir; gecikmeler hak kaybına neden olur.',
            ],
          },
        ],
        keyTakeaways: [
          'Tebligatı asla yanıtsız bırakmayın.',
          'Yasal süreler kesin olup gecikmeler telafisi zor sonuçlar doğurur.',
          'İlk 48 saatte uzman bir avukatla strateji oluşturmak hayati önem taşır.',
        ],
        statutorySummary: 'Yasal cevap süresinde savunma sunulması esastır.',
      },
    },
  },
  {
    id: 2,
    slug: '5-legal-steps-every-small-business-should-take',
    category: 'კორპორაციული სამართალი',
    readTime: '8 წთ საკითხავი',
    date: {
      GEO: '12 სექტემბერი, 2026',
      ENG: 'Sep 12, 2026',
      RUS: '12 сентября 2026 г.',
      TUR: '12 Eylül 2026',
    },
    title: {
      GEO: '5 სამართლებრივი ნაბიჯი, რომელიც ყველა ბიზნესმა უნდა გადადგას',
      ENG: '5 Legal Steps Every Small Business Should Take',
      RUS: '5 правовых шагов, которые должен предпринять каждый бизнес',
      TUR: 'Her Küçük İşletmenin Atması Gereken 5 Hukuki Adım',
    },
    excerpt: {
      GEO: 'კორპორაციული წესდება, დამფუძნებელთა შეთანხმება, შრომითი კონტრაქტები და ინტელექტუალური საკუთრების დაცვა — როგორ ავიცილოთ თავიდან ძვირადღირებული დავები.',
      ENG: 'Articles of association, founders agreement, employment contracts, and intellectual property protection — avoid crippling corporate disputes early.',
      RUS: 'Корпоративный устав, соглашение учредителей, трудовые контракты и защита интеллектуальной собственности — предотвращение рисков.',
      TUR: 'Şirket esas sözleşmesi, kurucu ortaklar sözleşmesi, iş sözleşmeleri ve fikri mülkiyetin korunması rehberi.',
    },
    image: '/.tempmediaStorage/lawwallpaper.jpg',
    alt: 'Attorney in tailored suit signing legal documents with fountain pen and gavel',
    author: {
      name: 'გიორგი გუბელაძე',
      role: {
        GEO: 'უფროსი პარტნიორი, ადვოკატი',
        ENG: 'Senior Partner, Attorney at Law',
        RUS: 'Старший партнер, Адвокат',
        TUR: 'Kıdemli Ortak, Avukat',
      },
      avatar: '/.tempmediaStorage/GUBE1.jpeg',
    },
    content: {
      GEO: {
        intro: 'საქართველოს კანონი „მეწარმეთა შესახებ“ ახალი რედაქციით მნიშვნელოვნად ცვლის კორპორაციული მართვის, პარტნიორთა უფლებამოსილებებისა და დირექტორის პასუხისმგებლობის სტანდარტებს. ქვემოთ განხილულია 5 სავალდებულო სამართლებრივი ინსტრუმენტი.',
        sections: [
          {
            heading: '1. პარტნიორთა შეთანხმების (Shareholders Agreement) გაფორმება',
            statuteRef: 'კანონი „მეწარმეთა შესახებ“ მუხლი 12–14',
            body: [
              'სტანდარტული წესდება არ იცავს პარტნიორებს ჩიხური სიტუაციებისგან (Deadlock).',
              'აუცილებელია დეტალური შეთანხმება წილების გასხვისების წესზე (Tag-Along, Drag-Along უფლებები) და გადაწყვეტილების მიღების კვორუმზე.',
            ],
          },
          {
            heading: '2. შრომითი ხელშეკრულებების სრული შესაბამისობა კოდექსთან',
            statuteRef: 'საქართველოს შრომის კოდექსი მუხლი 6–15',
            body: [
              'ზეპირი შეთანხმებები და ბუნდოვანი პირობები იწვევს დამსაქმებლის სრულ ფინანსურ პასუხისმგებლობას და კომპენსაციის დაკისრებას სასამართლოში.',
              'კონფიდენციალურობისა (NDA) და არაკონკურენციის პირობები უნდა იყოს ზუსტად გაწერილი.',
            ],
          },
          {
            heading: '3. ინტელექტუალური საკუთრებისა და სავაჭრო ნიშნის რეგისტრაცია',
            statuteRef: 'კანონი „სასაქონლო ნიშნების შესახებ“ („საქპატენტი“)',
            body: [
              'თქვენი ბრენდის სახელი და ლოგო არ არის დაცული, სანამ არ გაივლის ოფიციალურ რეგისტრაციას საქპატენტში.',
              'დაურეგისტრირებელი ნიშნის გამოყენებამ შეიძლება გამოიწვიოს მესამე პირების მხრიდან ბრენდის მითვისება.',
            ],
          },
          {
            heading: '4. კონტრაქტორებთან პასუხისმგებლობის ზღვრის განსაზღვრა',
            statuteRef: 'საქართველოს სამოქალაქო კოდექსი მუხლი 390–405',
            body: [
              'ხელშეკრულებებში გათვალისწინებული უნდა იყოს პასუხისმგებლობის ზედა ზღვარი (Limitation of Liability) და ფორსმაჟორული დათქმები.',
            ],
          },
          {
            heading: '5. საგადასახადო რისკების პრევენციული აუდიტი',
            statuteRef: 'საქართველოს საგადასახადო კოდექსი',
            body: [
              'ტრანზაქციების სწორი დოკუმენტირება იცავს კომპანიას საგადასახადო ჯარიმებისა და დარიცხვებისაგან.',
            ],
          },
        ],
        keyTakeaways: [
          'ახალი „მეწარმეთა შესახებ“ კანონი ითხოვს წესდებების განახლებას.',
          'კონფიდენციალურობის შეთანხმება (NDA) უნდა გაფორმდეს ნებისმიერ მოლაპარაკებამდე.',
          'საქპატენტში რეგისტრაცია ბიზნესის აქტივების დაცვის ქვაკუთხედია.',
        ],
        statutorySummary: 'კორპორაციული დოკუმენტაციის დროული მოწესრიგება კომპანიას არიდებს მრავალათასიან ზიანსა და პარტნიორთა შორის გაჭიანურებულ დავებს.',
      },
      ENG: {
        intro: 'The modern Law of Georgia on Entrepreneurs establishes elevated fiduciary duties for directors and robust minority shareholder mechanisms. Here are the 5 vital legal pillars every operating business must secure.',
        sections: [
          {
            heading: '1. Comprehensive Shareholders Agreement (SHA)',
            statuteRef: 'Law on Entrepreneurs, Arts. 12-14',
            body: [
              'Standard public statutes fail to prevent deadlock. Tailored dead-lock mechanisms and share transfer restrictions (Right of First Refusal, Tag-Along) are imperative.',
            ],
          },
          {
            heading: '2. Enforceable Employment Contracts & NDAs',
            statuteRef: 'Labor Code of Georgia, Arts. 6-15',
            body: [
              'Ambiguous terms expose businesses to full statutory back-pay liability in court.',
            ],
          },
          {
            heading: '3. Trademark Registration via Sakpatenti',
            statuteRef: 'Law on Trademarks',
            body: [
              'Your trade name and logo possess zero legal exclusivity until registered with the national patent office.',
            ],
          },
          {
            heading: '4. Contractual Limitation of Liability',
            statuteRef: 'Civil Code of Georgia, Arts. 390-405',
            body: [
              'Cap consequential damages in all supplier and service provider agreements.',
            ],
          },
          {
            heading: '5. Preventive Tax and Regulatory Compliance',
            statuteRef: 'Tax Code of Georgia',
            body: [
              'Maintain strict documentary substantiation for all capital transactions.',
            ],
          },
        ],
        keyTakeaways: [
          'Mandatory company charter re-registration under the Entrepreneurial Act.',
          'Execute non-disclosure agreements before sharing trade secrets.',
          'Trademark registration shields corporate identity from infringement.',
        ],
        statutorySummary: 'Proactive corporate governance eliminates over 85% of catastrophic shareholder and operational disputes.',
      },
      RUS: {
        intro: 'Новая редакция Закона Грузии «О предпринимателях» устанавливает строгие требования к корпоративному управлению. Ниже приведены 5 ключевых правовых инструментов защиты бизнеса.',
        sections: [
          {
            heading: '1. Соглашение учредителей (Корпоративный договор)',
            statuteRef: 'Закон «О предпринимателях», ст. 12–14',
            body: [
              'Устранение тупиковых ситуаций (Deadlock) и четкий регламент отчуждения долей.',
            ],
          },
          {
            heading: '2. Трудовые договоры и соглашения о неразглашении (NDA)',
            statuteRef: 'Трудовой кодекс Грузии',
            body: [
              'Четкое формулирование трудовых обязанностей исключает риски судебных компенсаций.',
            ],
          },
          {
            heading: '3. Регистрация товарного знака в Сакпатенти',
            statuteRef: 'Закон «О товарных знаках»',
            body: [
              'Без официальной регистрации бренд уязвим для недобросовестных конкурентов.',
            ],
          },
          {
            heading: '4. Ограничение ответственности в договорах',
            statuteRef: 'Гражданский кодекс Грузии',
            body: [
              'Ограничение пределов возмещения убытков в коммерческих контрактах.',
            ],
          },
          {
            heading: '5. Налоговый аудит транзакций',
            statuteRef: 'Налоговый кодекс Грузии',
            body: [
              'Надлежащее оформление сделок защищает от штрафных санкций налоговых органов.',
            ],
          },
        ],
        keyTakeaways: [
          'Обязательное обновление уставов в соответствии с новым законодательством.',
          'Защита интеллектуальной собственности через национальный патентный орган.',
          'Юридический аудит контрактов до их подписания.',
        ],
        statutorySummary: 'Своевременное правовое структурирование бизнеса гарантирует защиту активов и стабильность операций.',
      },
      TUR: {
        intro: 'Gürcistan Ticaret Kanunu çerçevesinde şirketlerin uyması gereken temel kurumsal standartlar ve 5 kritik adım.',
        sections: [
          {
            heading: '1. Hissedarlar Sözleşmesi ve Çözüm Mekanizmaları',
            statuteRef: 'Ticaret Kanunu',
            body: [
              'Ortaklar arası anlaşmazlıkları önleyen pay devri ve karar alma kuralları.',
            ],
          },
          {
            heading: '2. İş Sözleşmeleri ve Gizlilik Anlaşmaları (NDA)',
            statuteRef: 'İş Kanunu',
            body: [
              'Yasal tazminat risklerine karşı koruyan eksiksiz sözleşmeler.',
            ],
          },
          {
            heading: '3. Marka Tescili (Sakpatenti)',
            statuteRef: 'Marka Kanunu',
            body: [
              'Ticari unvan ve logonun tescil ile tam koruma altına alınması.',
            ],
          },
          {
            heading: '4. Sözleşmelerde Sorumluluk Sınırları',
            statuteRef: 'Borçlar Kanunu',
            body: [
              'Tedarikçi ve müşteri sözleşmelerinde risklerin sınırlandırılması.',
            ],
          },
          {
            heading: '5. Vergi ve Uyum Denetimi',
            statuteRef: 'Vergi Kanunu',
            body: [
              'İşlemlerin mevzuata uygun şekilde belgelenmesi.',
            ],
          },
        ],
        keyTakeaways: [
          'Şirket ana sözleşmesinin güncellenmesi zorunludur.',
          'Gizlilik anlaşmaları olmadan ticari sır paylaşmayın.',
          'Marka tescili ile kurumsal kimliğinizi koruyun.',
        ],
        statutorySummary: 'Hukuki altyapının baştan sağlam kurulması işletmenin geleceğini güvenceye alır.',
      },
    },
  },
  {
    id: 3,
    slug: 'understanding-rights-criminal-investigation',
    category: 'სისხლის სამართალი',
    readTime: '7 წთ საკითხავი',
    date: {
      GEO: '9 სექტემბერი, 2026',
      ENG: 'Sep 9, 2026',
      RUS: '9 сентября 2026 г.',
      TUR: '9 Eylül 2026',
    },
    title: {
      GEO: 'თქვენი უფლებები სისხლისსამართლებრივი გამოძიების დროს',
      ENG: 'Understanding Your Rights during a Criminal Investigation',
      RUS: 'Ваши права в ходе уголовного расследования',
      TUR: 'Ceza Soruşturması Sırasında Haklarınız',
    },
    excerpt: {
      GEO: 'დუმილის უფლება, ადვოკატის დაუყოვნებელი მოთხოვნა, ჩხრეკისა და დაკავების კანონიერი ფარგლები — რა უნდა იცოდეთ პოლიციასთან პირველივე კონტაქტისას.',
      ENG: 'Right to silence, immediate attorney representation, lawful limits of search and detention — imperative safeguards upon first law enforcement contact.',
      RUS: 'Право на молчание, немедленный вызов адвоката, пределы обыска и задержания — фундаментальные гарантии при контакте с полицией.',
      TUR: 'Suskunluk hakkı, derhal avukat talep etme, arama ve gözaltının yasal sınırları rehberi.',
    },
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop',
    alt: 'Bronze Lady Justice statue with balanced scales in dark law library',
    author: {
      name: 'გიორგი გუბელაძე',
      role: {
        GEO: 'უფროსი პარტნიორი, ადვოკატი',
        ENG: 'Senior Partner, Attorney at Law',
        RUS: 'Старший партнер, Адвокат',
        TUR: 'Kıdemli Ortak, Avukat',
      },
      avatar: '/.tempmediaStorage/GUBE1.jpeg',
    },
    content: {
      GEO: {
        intro: 'საქართველოს სისხლის სამართლის საპროცესო კოდექსი და საქართველოს კონსტიტუცია აღჭურავს პირს ფუნდამენტური გარანტიებით გამოძიების ნებისმიერ ეტაპზე. ამ უფლებათა ზედმიწევნით ცოდნა და მათი მტკიცედ მოთხოვნა ხშირად გადამწყვეტია თავისუფლების შესანარჩუნებლად.',
        sections: [
          {
            heading: '1. დუმილის უფლება და თვითინკრიმინაციის აკრძალვა',
            statuteRef: 'სსსკ მუხლი 38 და საქართველოს კონსტიტუციის 31-ე მუხლი',
            body: [
              'არავინ არის ვალდებული მისცეს ჩვენება საკუთარი თავის ან ახლო ნათესავების წინააღმდეგ.',
              'დუმილის უფლების გამოყენება არ შეიძლება შეფასდეს ბრალეულობის დამადასტურებელ გარემოებად ან გამოყენებულ იქნეს პირის საზიანოდ.',
            ],
          },
          {
            heading: '2. ადვოკატის დაუყოვნებლივი მოთხოვნის უფლება',
            statuteRef: 'სსსკ მუხლი 38, ნაწილი 3',
            body: [
              'დაკავების ან გამოკითხვის პირველივე წამიდან გაქვთ უფლება მოითხოვოთ ადვოკატის დასწრება.',
              'ადვოკატის მოსვლამდე სამართალდამცავებს არ აქვთ უფლება გააგრძელონ თქვენი დაკითხვა ან ზეწოლა.',
            ],
          },
          {
            heading: '3. ჩხრეკისა და ამოღების კანონიერი წესი',
            statuteRef: 'სსსკ მუხლები 119–124 (საგამოძიებო მოქმედებები)',
            body: [
              'ჩხრეკა უნდა ჩატარდეს მხოლოდ მოსამართლის განჩინების საფუძველზე, გარდა გადაუდებელი აუცილებლობის შემთხვევებისა.',
              'გადაუდებელი ჩხრეკის შემთხვევაში გამომძიებელი ვალდებულია 24 საათში მიმართოს სასამართლოს ჩხრეკის კანონიერების შესამოწმებლად.',
            ],
          },
          {
            heading: '4. დაკავების მაქსიმალური ვადები (48 + 24 საათი)',
            statuteRef: 'საქართველოს კონსტიტუციის მე-13 მუხლი',
            body: [
              'დაკავებული პირი უნდა წარედგინოს სასამართლოს არაუგვიანეს 48 საათისა. თუ მომდევნო 24 საათში სასამართლო არ გამოიტანს გადაწყვეტილებას აღკვეთის ღონისძიების შესახებ, პირი დაუყოვნებლივ უნდა გათავისუფლდეს.',
            ],
          },
        ],
        keyTakeaways: [
          'არასდროს მისცეთ განმარტება ან ჩვენება ადვოკატის გარეშე.',
          'დუმილის უფლება კონსტიტუციური გარანტიაა.',
          'ადვოკატთან კონფიდენციალური კომუნიკაცია დაცულია კანონით და არ ექვემდებარება მიყურადებას.',
        ],
        statutorySummary: 'საქართველოს სისხლის სამართლის საპროცესო კოდექსის თანახმად, უკანონო მეთოდებით ან ადვოკატის გარეშე მოპოვებული მტკიცებულება სასამართლოში დაუშვებლად (inadmissible) ცხადდება.',
      },
      ENG: {
        intro: 'The Constitution of Georgia and the Criminal Procedure Code grant absolute procedural safeguards upon any interaction with investigating bodies. Understanding and firmly invoking these rights is vital.',
        sections: [
          {
            heading: '1. Absolute Right to Remain Silent',
            statuteRef: 'Criminal Procedure Code, Art. 38; Constitution Art. 31',
            body: [
              'You cannot be compelled to testify against yourself or close family members. Silence can never be utilized as an admission of guilt.',
            ],
          },
          {
            heading: '2. Immediate Access to Defense Counsel',
            statuteRef: 'Criminal Procedure Code, Art. 38(3)',
            body: [
              'From the initial moment of detention or interrogation, you are entitled to retain legal counsel. Questioning must halt until your attorney arrives.',
            ],
          },
          {
            heading: '3. Judicial Warrants for Search and Seizure',
            statuteRef: 'Criminal Procedure Code, Arts. 119-124',
            body: [
              'Searches require a prior judicial warrant, except under strict emergency circumstances where post-factum judicial verification is mandatory within 24 hours.',
            ],
          },
          {
            heading: '4. Strict 48+24 Hour Detention Limit',
            statuteRef: 'Constitution of Georgia, Art. 13',
            body: [
              'A detainee must appear before a judge within 48 hours. If the court does not order detention within an additional 24 hours, immediate release is compulsory.',
            ],
          },
        ],
        keyTakeaways: [
          'Never provide statements without defense counsel present.',
          'Silence is a protected constitutional immunity.',
          'Evidence gathered in violation of procedural rights is legally inadmissible in court.',
        ],
        statutorySummary: 'Under the Criminal Procedure Code, evidence obtained in violation of counsel rights is permanently suppressed as inadmissible evidence.',
      },
      RUS: {
        intro: 'Конституция Грузии и Уголовно-процессуальный кодекс гарантируют фундаментальные права при контакте со следственными органами. Четкое следование правилам исключает процессуальные злоупотребления.',
        sections: [
          {
            heading: '1. Право на молчание и запрет самоизобличения',
            statuteRef: 'УПК Грузии, ст. 38; Конституция, ст. 31',
            body: [
              'Никто не обязан свидетельствовать против себя и близких родственников. Отказ от дачи показаний не является доказательством вины.',
            ],
          },
          {
            heading: '2. Незамедлительное требование адвоката',
            statuteRef: 'УПК Грузии, ст. 38, ч. 3',
            body: [
              'С первой секунды задержания или опроса вы имеете право на участие защитника. До его прибытия следственные действия должны быть приостановлены.',
            ],
          },
          {
            heading: '3. Порядок проведения обыска и выемки',
            statuteRef: 'УПК Грузии, ст. 119–124',
            body: [
              'Обыск проводится исключительно на основании судебного постановления, за исключением случаев неотложной необходимости.',
            ],
          },
          {
            heading: '4. Сроки задержания: правило 48 + 24 часов',
            statuteRef: 'Конституция Грузии, ст. 13',
            body: [
              'Задержанное лицо должно предстать перед судьей в течение 48 часов, иначе подлежит немедленному освобождению.',
            ],
          },
        ],
        keyTakeaways: [
          'Никаких показаний до конфиденциальной беседы с адвокатом.',
          'Право на молчание гарантировано Конституцией Грузии.',
          'Доказательства, полученные с нарушением права на защиту, признаются недопустимыми.',
        ],
        statutorySummary: 'УПК Грузии прямо запрещает использование в суде доказательств, полученных с нарушением прав обвиняемого.',
      },
      TUR: {
        intro: 'Gürcistan Anayasası ve Ceza Muhakemesi Kanunu, soruşturma aşamasında şüpheli ve sanıklara geniş anayasal güvenceler tanımaktadır.',
        sections: [
          {
            heading: '1. Susma Hakkı ve Kendini Suçlamama İlkesi',
            statuteRef: 'CMK Md. 38; Anayasa Md. 31',
            body: [
              'Hiç kimse kendisi veya yakınları aleyhine ifade vermeye zorlanamaz.',
            ],
          },
          {
            heading: '2. Derhal Avukat Talep Etme Hakkı',
            statuteRef: 'CMK Md. 38/3',
            body: [
              'Gözaltı veya sorgunun ilk anından itibaren avukatınızın hazır bulunmasını isteme hakkınız vardır.',
            ],
          },
          {
            heading: '3. Arama ve Elkoymanın Yasal Koşulları',
            statuteRef: 'CMK Md. 119-124',
            body: [
              'Arama işlemleri kural olarak hâkim kararı ile gerçekleştirilir.',
            ],
          },
          {
            heading: '4. Gözaltı Süreleri (48 + 24 Kuralı)',
            statuteRef: 'Gürcistan Anayasası Md. 13',
            body: [
              'Gözaltına alınan kişi en geç 48 saat içinde hâkim önüne çıkarılmalıdır.',
            ],
          },
        ],
        keyTakeaways: [
          'Avukatınız olmadan hiçbir belge imzalamayın ve ifade vermeyin.',
          'Susma hakkı yasal bir güvencedir.',
          'Hukuka aykırı deliller mahkemede hükme esas alınamaz.',
        ],
        statutorySummary: 'Usule aykırı toplanan tüm deliller mahkeme kararıyla dosya dışı bırakılır.',
      },
    },
  },
];
