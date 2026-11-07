export interface PracticeAreaDetail {
  id: string;
  categoryNumber: string;
  badge: {
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
  subtitle: {
    GEO: string;
    ENG: string;
    RUS: string;
    TUR: string;
  };
  heroImage: string;
  overview: {
    GEO: string;
    ENG: string;
    RUS: string;
    TUR: string;
  };
  keyPillars: {
    title: {
      GEO: string;
      ENG: string;
      RUS: string;
      TUR: string;
    };
    description: {
      GEO: string;
      ENG: string;
      RUS: string;
      TUR: string;
    };
    statute?: string;
  }[];
  statutoryFramework: {
    code: string;
    articleRange: string;
    summary: {
      GEO: string;
      ENG: string;
      RUS: string;
      TUR: string;
    };
  };
  proceduralStages: {
    step: string;
    title: {
      GEO: string;
      ENG: string;
      RUS: string;
      TUR: string;
    };
    desc: {
      GEO: string;
      ENG: string;
      RUS: string;
      TUR: string;
    };
  }[];
  whyUs: {
    stat: string;
    label: {
      GEO: string;
      ENG: string;
      RUS: string;
      TUR: string;
    };
  }[];
}

export const PRACTICE_AREAS_DETAIL: Record<string, PracticeAreaDetail> = {
  'criminal-defense': {
    id: 'criminal-defense',
    categoryNumber: '01.',
    badge: {
      GEO: 'სისხლის სამართალი & დაცვის ადვოკატურა',
      ENG: 'Criminal Trial Advocacy & Defense',
      RUS: 'Уголовное право и защита',
      TUR: 'Ceza Hukuku ve Savunma',
    },
    title: {
      GEO: 'სისხლის სამართალი და სისხლისსამართლებრივი დაცვა',
      ENG: 'Criminal Law & Trial Defense Advocacy',
      RUS: 'Уголовное право и судебная защита',
      TUR: 'Ceza Hukuku ve Dava Savunması',
    },
    subtitle: {
      GEO: '21+ წლიანი გამოცდილება სასამართლო დარბაზში, გამოძიების ეტაპზე მტკიცებულებათა განეიტრალება და თავისუფლების უფლების ურყევი დაცვა.',
      ENG: '21+ years of dedicated courtroom trial advocacy, neutralizing unlawful evidence at the investigation phase, and relentless defense of liberty.',
      RUS: '21+ год опыта судебной защиты, признание доказательств недопустимыми на стадии следствия и бескомпромиссная борьба за свободу.',
      TUR: '21+ yılı aşkın mahkeme deneyimi, soruşturma aşamasında hukuka aykırı delillerin çürütülmesi ve özgürlüğün tavizsiz savunması.',
    },
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400&auto=format&fit=crop',
    overview: {
      GEO: 'სისხლის სამართლის საქმეებში შეცდომის ფასი თავისუფლება და რეპუტაციაა. ჩვენი საადვოკატო გუნდი ხელმძღვანელობს უმკაცრესი პროცესუალური კონტროლის პრინციპით: საგამოძიებო ორგანოების მიერ ჩადენილი უმცირესი დარღვევაც კი გამოიყენება მტკიცებულებათა დაუშვებლად ცნობისა და ბრალდების სრული გაუქმებისთვის.',
      ENG: 'In criminal proceedings, the cost of error is personal freedom and lifelong reputation. Our defense team operates with rigorous procedural scrutiny: the slightest breach by investigative authorities is systematically leveraged to suppress evidence and secure full dismissal or acquittal.',
      RUS: 'В уголовных делах ценой ошибки является личная свобода и репутация. Наша команда работает по принципу жесткого процессуального контроля: любое процессуальное нарушение следствия используется для признания доказательств недопустимыми.',
      TUR: 'Ceza davalarında hatanın bedeli özgürlüktür. Ekibimiz en sıkı usul denetimiyle hareket eder: soruşturma makamlarının yaptığı en ufak usul hatası delillerin dosyadan çıkarılması ve beraat için kullanılır.',
    },
    keyPillars: [
      {
        title: {
          GEO: 'საგამოძიებო ეტაპის სტრატეგია და ადრეული ჩართვა',
          ENG: 'Investigation Stage & Early Intervention',
          RUS: 'Стратегия на стадии следствия и раннее вмешательство',
          TUR: 'Soruşturma Aşaması ve Erken Müdahale Stratejisi',
        },
        description: {
          GEO: 'გამოძიების პირველივე წუთებიდან ჩართვა, დაკითხვისა და საგამოძიებო ექსპერიმენტების პროცესუალური კონტროლი, თვითინკრიმინაციისა და ფსიქოლოგიური ზეწოლის სრული აღკვეთა.',
          ENG: 'Immediate procedural control from the first minutes of inquiry, supervising interrogations and experiments, safeguarding against self-incrimination.',
          RUS: 'Вступление с первых минут расследования, контроль допросов и следственных действий, пресечение самооговора и давления.',
          TUR: 'Soruşturmanın ilk dakikalarından itibaren müdahale, sorgu ve işlemlerin denetimi, baskı ve kendini suçlamanın önlenmesi.',
        },
      },
      {
        title: {
          GEO: 'მტკიცებულებათა მოპოვება და განეიტრალება',
          ENG: 'Obtaining & Challenging Evidence',
          RUS: 'Сбор и признание доказательств недопустимыми',
          TUR: 'Delillerin Toplanması ve Hukuka Aykırı Delillerin İptali',
        },
        description: {
          GEO: 'ალტერნატიული ექსპერტიზების ინიცირება, დაცვის მოწმეთა მოძიება, ბრალდების უკანონო მტკიცებულებათა დაუშვებლად ცნობა და საქმის მასალებიდან ამორიცხვა.',
          ENG: 'Securing independent forensic expert testimony, uncovering defense witnesses, and successfully filing motions to suppress tainted prosecution evidence.',
          RUS: 'Назначение независимых экспертиз, сбор доказательств защиты и исключение недопустимых материалов обвинения из дела.',
          TUR: 'Bağımsız bilirkişi incelemeleri, savunma tanıklarının tespiti ve hukuka aykırı toplanan delillerin dosyadan çıkarılması.',
        },
      },
      {
        title: {
          GEO: 'აღკვეთის ღონისძიებები და პენიტენციური ვიზიტები',
          ENG: 'Preventive Measures & Detention Rights',
          RUS: 'Меры пресечения и пенитенциарный контроль',
          TUR: 'Adli Kontrol, Tutukluluğa İtiraz ve Cezaevi Ziyaretleri',
        },
        description: {
          GEO: 'საპატიმრო აღკვეთის ღონისძიების თავიდან არიდება და გირაოს გამოყენება; დაუყოვნებელი და შეუზღუდავი ვიზიტები წინასწარი დაკავების იზოლატორებსა და ციხეებში.',
          ENG: 'Aggressive opposition to pre-trial detention securing bail release, coupled with round-the-clock confidential visits to detention and penitentiary facilities.',
          RUS: 'Предотвращение ареста и замена залогом, регулярные конфиденциальные визиты в изоляторы и пенитенциарные учреждения.',
          TUR: 'Tutuklama taleplerinin reddi ve kefaletle serbest bırakma; gözaltı ve cezaevlerinde sınırsız birebir avukat görüşmesi.',
        },
      },
      {
        title: {
          GEO: 'ნაფიც მსაჯულთა სასამართლო და ზედა ინსტანციებში საქმისწარმოება',
          ENG: 'Jury & Appellate Trial Advocacy',
          RUS: 'Суд присяжных и ведение дел в высших инстанциях',
          TUR: 'Jüri Yargılaması ve Üst Düzey İstinaf/Temyiz Savunması',
        },
        description: {
          GEO: 'სტრატეგიული სასამართლო რიტორიკა, მოწმეთა ჯვარედინი დაკითხვა ნაფიც მსაჯულთა წინაშე, სააპელაციო და უზენაესი სასამართლოს გამამართლებელი პრაქტიკა.',
          ENG: 'Masterful courtroom persuasion, forensic cross-examination before juries, and relentless appellate advocacy before the Court of Appeals and Supreme Court.',
          RUS: 'Убедительная риторика и перекрестный допрос перед присяжными, успешная практика в апелляционной и кассационной инстанциях.',
          TUR: 'Jüri heyeti önünde etkili çapraz sorgu ve hitabet; İstinaf ve Yargıtay nezdinde beraat odaklı üst derece savunma.',
        },
      },
    ],
    statutoryFramework: {
      code: 'საქართველოს სისხლის სამართლის საპროცესო კოდექსი',
      articleRange: 'მუხლები 38, 72, 119–124, 205–208, 226',
      summary: {
        GEO: 'სისხლის სამართლის საპროცესო კოდექსის 72-ე მუხლის თანახმად, არსებითი დარღვევით მოპოვებული მტკიცებულება დაუშვებელია და იურიდიული ძალა არ გააჩნია.',
        ENG: 'Article 72 of the Criminal Procedure Code renders any evidence obtained in material breach of law strictly inadmissible.',
        RUS: 'Согласно статье 72 УПК Грузии, доказательства, полученные с существенным нарушением закона, признаются недопустимыми.',
        TUR: 'Ceza Muhakemesi Kanunu 72. maddesi gereğince hukuka aykırı yollarla toplanan deliller geçersizdir.',
      },
    },
    proceduralStages: [
      {
        step: '01',
        title: {
          GEO: 'დაკავების პირველი 48 საათი',
          ENG: 'First 48 Hours of Custody',
          RUS: 'Первые 48 часов задержания',
          TUR: 'Gözaltının İlk 48 Saati',
        },
        desc: {
          GEO: 'დაუყოვნებელი ჩართვა, ჩვენების მიცემისგან თავის შეკავება, ოქმების აუდიტი და პატიმრობის რისკის შემცირება.',
          ENG: 'Immediate deployment, invoking right to silence, forensic audit of arrest warrants and charge mitigation.',
          RUS: 'Вступление адвоката в дело, реализация права на молчание, аудит протоколов задержания.',
          TUR: 'Derhal müdahale, susma hakkının kullandırılması ve tutuklama riskinin bertaraf edilmesi.',
        },
      },
      {
        step: '02',
        title: {
          GEO: 'წინასასამართლო სხდომა',
          ENG: 'Pre-Trial Evidentiary Hearing',
          RUS: 'Предварительное судебное заседание',
          TUR: 'Ön Duruşma Aşaması',
        },
        desc: {
          GEO: 'ბრალდების მტკიცებულებათა დაუშვებლად ცნობის შუამდგომლობების დაყენება და დაცვის მტკიცებულებების დარეგისტრირება.',
          ENG: 'Filing suppression motions to eliminate unlawful prosecution exhibits prior to substantive trial.',
          RUS: 'Заявление ходатайств о признании доказательств обвинения недопустимыми до начала процесса по существу.',
          TUR: 'Esas duruşmaya geçilmeden önce iddia makamının delillerinin iptali için itirazların sunulması.',
        },
      },
      {
        step: '03',
        title: {
          GEO: 'სასამართლო არსებითი განხილვა',
          ENG: 'Substantive Courtroom Trial',
          RUS: 'Судебное разбирательство по существу',
          TUR: 'Esas Duruşma ve Hüküm',
        },
        desc: {
          GEO: 'მოწმეთა ჯვარედინი დაკითხვა, ექსპერტთა ჩვენებების დეკონსტრუქცია და გამამართლებელი განაჩენის მიღწევა.',
          ENG: 'Aggressive cross-examination, dismantling forensic expert reports, and pursuing full acquittal.',
          RUS: 'Перекрестный допрос экспертов и свидетелей обвинения, достижение оправдательного приговора.',
          TUR: 'Tanıkların çapraz sorgusu, adli tıp raporlarının çürütülmesi ve beraat kararı alınması.',
        },
      },
    ],
    whyUs: [
      {
        stat: '21+',
        label: {
          GEO: 'წლიანი სასამართლო გამოცდილება',
          ENG: 'Years Courtroom Advocacy',
          RUS: 'Лет судебного опыта',
          TUR: 'Yıllık Mahkeme Deneyimi',
        },
      },
      {
        stat: '98%',
        label: {
          GEO: 'წარმატებით დასრულებული საქმეები',
          ENG: 'Successful Case Resolutions',
          RUS: 'Успешно решенных дел',
          TUR: 'Başarılı Dava Sonucu',
        },
      },
      {
        stat: '24/7',
        label: {
          GEO: 'სასწრაფო იურიდიული რეაგირება',
          ENG: 'Emergency Custody Response',
          RUS: 'Экстренное реагирование 24/7',
          TUR: '7/24 Acil Hukuki Destek',
        },
      },
    ],
  },

  'family-law': {
    id: 'family-law',
    categoryNumber: '02.',
    badge: {
      GEO: 'საოჯახო & მემკვიდრეობითი სამართალი',
      ENG: 'Family & Inheritance Law Counsel',
      RUS: 'Семейное и наследственное право',
      TUR: 'Aile ve Miras Hukuku',
    },
    title: {
      GEO: 'საოჯახო, სამემკვიდრეო და სამოქალაქო სამართალი',
      ENG: 'Family, Estate & Civil Dispute Resolution',
      RUS: 'Семейное, наследственное и гражданское право',
      TUR: 'Aile, Miras ve Medeni Hukuk Davaları',
    },
    subtitle: {
      GEO: 'ქონების სამართლიანი გაყოფა, ბავშვთა საუკეთესო ინტერესების დაცვა, ალიმენტი და სამკვიდრო ქონების უსაფრთხო მიღება.',
      ENG: 'Equitable marital asset division, child custody safeguarding, alimony recovery, and flawless probate administration.',
      RUS: 'Справедливый раздел имущества, защита интересов детей, взыскание алиментов и оформление наследства.',
      TUR: 'Eşit mal paylaşımı, velayet güvencesi, nafaka tahsili ve miras intikali süreçlerinin yönetimi.',
    },
    heroImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1400&auto=format&fit=crop',
    overview: {
      GEO: 'საოჯახო და სამემკვიდრეო დავები ხასიათდება მაღალი ემოციური და ფინანსური წნეხით. ჩვენი პრაქტიკა აერთიანებს მკაცრ სამართლებრივ სიზუსტესა და კონფიდენციალურ მედიაციას. ჩვენ ვიცავთ კლიენტის ქონებრივ ინტერესებს და უზრუნველვყოფთ ბავშვთა ინტერესების მაქსიმალურ პრიორიტეტს.',
      ENG: 'Family and probate disputes involve intense emotional and financial complexity. Our practice pairs rigorous statutory precision with discreet negotiation, preserving client wealth while firmly safeguarding children’s welfare.',
      RUS: 'Семейные и наследственные споры требуют деликатного подхода и жесткой правовой защиты. Мы защищаем имущественные права доверителей и обеспечиваем приоритет интересов детей.',
      TUR: 'Aile ve miras uyuşmazlıkları hassas ve karmaşık süreçlerdir. Ekibimiz haklarınızı korurken çocukların üstün yararını ve mal varlığınızı güvenceye alır.',
    },
    keyPillars: [
      {
        title: {
          GEO: 'თანასაკუთრებისა და ქორწინებაში შეძენილი ქონების გაყოფა',
          ENG: 'Marital Property & Common Asset Partition',
          RUS: 'Раздел совместно нажитого имущества супругов',
          TUR: 'Boşanmada Mal Paylaşımı Davaları',
        },
        description: {
          GEO: 'საბანკო ანგარიშების, უძრავი ქონებისა და ბიზნეს-წილების იდენტიფიცირება და თანაბარი სამართლებრივი გაყოფა.',
          ENG: 'Discovery and equitable valuation of joint bank deposits, real estate holdings, and company shares.',
          RUS: 'Розыск скрытых активов, раздел банковских счетов, недвижимости и долей в уставном капитале.',
          TUR: 'Gizlenen mal varlıklarının tespiti, şirket payları ve gayrimenkullerin eşit paylaşımı.',
        },
        statute: 'სამოქალაქო კოდექსი მუხლი 1158–1171',
      },
      {
        title: {
          GEO: 'ბავშვის მეურვეობა და საცხოვრებელი ადგილის განსაზღვრა',
          ENG: 'Child Custody, Guardianship & Support',
          RUS: 'Определение места жительства детей и алименты',
          TUR: 'Velayet ve Nafaka Düzenlemeleri',
        },
        description: {
          GEO: 'ბავშვთა საუკეთესო ინტერესების დაცვა, მეორე მშობელთან ურთიერთობის გრაფიკის დადგენა და სათანადო ალიმენტის დაკისრება.',
          ENG: 'Court determination of primary residence, visitation rights, and statutory child support enforcement.',
          RUS: 'Судебное определение порядка общения с ребенком и взыскание соразмерных алиментов.',
          TUR: 'Çocuğun üstün yararına uygun velayet tesisi, kişisel ilişki kurulması ve iştirak nafakası talepleri.',
        },
        statute: 'სამოქალაქო კოდექსი მუხლი 1198–1215',
      },
      {
        title: {
          GEO: 'სამკვიდრო მოწმობის მიღება და ანდერძის გასაჩივრება',
          ENG: 'Probate, Estate Succession & Will Contests',
          RUS: 'Оформление наследства и оспаривание завещаний',
          TUR: 'Mirasçılık Belgesi ve Vasiyetnamenin İptali',
        },
        description: {
          GEO: 'სამკვიდროს მიღების 6-თვიანი ვადის აღდგენა, სავალდებულო წილის გამოყოფა და უკანონო ანდერძის გაუქმება.',
          ENG: 'Restoring lapsed 6-month succession deadlines, securing compulsory estate shares, and will invalidation.',
          RUS: 'Восстановление пропущенного срока принятия наследства, выдел обязательной доли и аннулирование завещаний.',
          TUR: '6 aylık miras kabul süresinin ihyası, saklı pay talepleri ve geçersiz vasiyetnamelerin iptali.',
        },
        statute: 'სამოქალაქო კოდექსი მუხლი 1306–1440',
      },
      {
        title: {
          GEO: 'საქორწინო კონტრაქტების მომზადება',
          ENG: 'Prenuptial & Marital Property Agreements',
          RUS: 'Брачные договоры и соглашения об имуществе',
          TUR: 'Evlilik Sözleşmesi ve Mal Rejimi',
        },
        description: {
          GEO: 'ინდივიდუალური საქორწინო ხელშეკრულების შედგენა ქორწინებამდე ან ქორწინების პერიოდში.',
          ENG: 'Custom drafting of prenuptial agreements safeguarding pre-marital wealth and commercial investments.',
          RUS: 'Составление индивидуальных брачных контрактов до или в период брака для защиты активов.',
          TUR: 'Kişisel mal varlıklarını koruyan evlilik öncesi veya sırası mal rejimi sözleşmeleri.',
        },
        statute: 'სამოქალაქო კოდექსი მუხლი 1172–1181',
      },
    ],
    statutoryFramework: {
      code: 'საქართველოს სამოქალაქო კოდექსი',
      articleRange: 'წიგნი მეხუთე (საოჯახო სამართალი) და მეექვსე (მემკვიდრეობითი სამართალი)',
      summary: {
        GEO: 'საქართველოს სამოქალაქო კოდექსის თანახმად, ქორწინების განმავლობაში შეძენილი ქონება წარმოადგენს მეუღლეთა საერთო საკუთრებას, გარდა ჩუქებით ან მემკვიდრეობით მიღებულისა.',
        ENG: 'Under the Civil Code of Georgia, property acquired during marriage constitutes joint common ownership unless inherited or gifted.',
        RUS: 'Имущество, нажитое во время брака, является общей совместной собственностью супругов, кроме полученного в дар или по наследству.',
        TUR: 'Evlilik birliği içerisinde edinilen mallar ortak mülkiyete tabidir; bağış ve miras yoluyla gelenler istisnadır.',
      },
    },
    proceduralStages: [
      {
        step: '01',
        title: {
          GEO: 'მედიაცია და მორიგების მცდელობა',
          ENG: 'Mandatory / Voluntary Mediation',
          RUS: 'Медиация и переговоры',
          TUR: 'Arabuluculuk ve Sulh Görüşmeleri',
        },
        desc: {
          GEO: 'სასამართლო დავის დაწყებამდე მხარეებს შორის მოლაპარაკება ქონებრივი და ბავშვთა საკითხების მშვიდობიანი მოგვარებისთვის.',
          ENG: 'Pre-litigation negotiation to achieve mutually binding settlements avoiding costly public trials.',
          RUS: 'Попытка мирного урегулирования спора до передачи дела в суд для снижения издержек.',
          TUR: 'Dava açılmadan önce taraflar arasında adil ve gizli sulh protokolünün oluşturulması.',
        },
      },
      {
        step: '02',
        title: {
          GEO: 'სარჩელის აღძვრა და ქონების დაყადაღება',
          ENG: 'Petition & Injunction Liens',
          RUS: 'Подача иска и арест спорного имущества',
          TUR: 'Dava Açılması ve İhtiyati Tedbir',
        },
        desc: {
          GEO: 'მოპასუხის მიერ ქონების გასხვისების აღსაკვეთად უძრავ ნივთებსა და ანგარიშებზე ყადაღის დაუყოვნებელი დადება.',
          ENG: 'Securing ex-parte injunctions to freeze bank accounts and real estate preventing unlawful transfer.',
          RUS: 'Наложение обеспечительных мер (ареста) на имущество и счета во избежание их сокрытия.',
          TUR: 'Malların kaçırılmasını engellemek amacıyla tapu ve banka hesaplarına ihtiyati tedbir konulması.',
        },
      },
      {
        step: '03',
        title: {
          GEO: 'სასამართლო გადაწყვეტილების აღსრულება',
          ENG: 'Enforcement & Title Registration',
          RUS: 'Исполнение решения и регистрация прав',
          TUR: 'İcra ve Mülkiyet Tescili',
        },
        desc: {
          GEO: 'საჯარო რეესტრში ახალი საკუთრების უფლების რეგისტრაცია და სააღსრულებო ბიუროს მეშვეობით ალიმენტის ამოღება.',
          ENG: 'Registration of undivided real estate shares with the Public Registry and child support enforcement.',
          RUS: 'Регистрация права собственности в Публичном реестре и принудительное взыскание через приставов.',
          TUR: 'Mahkeme kararının Tapu Kadastroda tescili ve icra yoluyla alacakların tahsili.',
        },
      },
    ],
    whyUs: [
      {
        stat: '100%',
        label: {
          GEO: 'კონფიდენციალურობის გარანტია',
          ENG: 'Strict Confidentiality',
          RUS: 'Полная конфиденциальность',
          TUR: 'Mutlak Gizlilik Güvencesi',
        },
      },
      {
        stat: '14+',
        label: {
          GEO: 'წარმატებული სამემკვიდრეო საქმეები',
          ENG: 'Complex Estates Settled',
          RUS: 'Решенных наследственных дел',
          TUR: 'Miras Davasında Başarı',
        },
      },
      {
        stat: '30+',
        label: {
          GEO: 'დღე საშუალო მორიგებისთვის',
          ENG: 'Days Average Settlement Time',
          RUS: 'Дней средний срок мирного соглашения',
          TUR: 'Günde Ortalama Sulh',
        },
      },
    ],
  },

  'real-estate-law': {
    id: 'real-estate-law',
    categoryNumber: '03.',
    badge: {
      GEO: 'უძრავი ქონება & სახელშეკრულებო სამართალი',
      ENG: 'Real Estate & Commercial Contracts',
      RUS: 'Недвижимость и договорное право',
      TUR: 'Gayrimenkul ve Sözleşmeler Hukuku',
    },
    title: {
      GEO: 'უძრავი ქონება, ტრანზაქციები და სახელშეკრულებო სამართალი',
      ENG: 'Real Estate Transactions & Contract Law',
      RUS: 'Недвижимость, сделки и договорное право',
      TUR: 'Gayrimenkul Yatırımları ve Sözleşmeler',
    },
    subtitle: {
      GEO: 'საინვესტიციო პროექტების სრული იურიდიული აუდიტი (Due Diligence), საჯარო რეესტრის რისკების განეიტრალება და უსაფრთხო ნასყიდობა.',
      ENG: 'Comprehensive Title Due Diligence, risk elimination at the National Public Registry, and secure property acquisitions.',
      RUS: 'Полный юридический аудит объектов (Due Diligence), устранение рисков в Публичном реестре и безопасные сделки.',
      TUR: 'Kapsamlı Tapu Due Diligence incelemesi, tescil risklerinin giderilmesi ve güvenli gayrimenkul alım-satımı.',
    },
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop',
    overview: {
      GEO: 'უძრავი ქონების ბაზარზე მილიონობით ლარის ღირებულების გარიგებები ხშირად ემყარება არასრულ ან საშიშ ხელშეკრულებებს. ჩვენი სერვისი იცავს როგორც ადგილობრივ, ისე უცხოელ ინვესტორებს: ვახორციელებთ საკადასტრო საზღვრების, იპოთეკური ტვირთების, ყადაღების და მშენებლობის ნებართვების სრულ სამართლებრივ ექსპერტიზას.',
      ENG: 'High-value real estate investments frequently falter due to poorly drafted agreements and unexamined encumbrances. We provide domestic and foreign investors with total transactional security: inspecting cadastral boundaries, mortgage liens, injunctions, and municipal building permits.',
      RUS: 'Крупные инвестиции в недвижимость сопряжены с рисками скрытых обременений и некорректных договоров. Мы обеспечиваем полную юридическую чистоту сделок для местных и иностранных инвесторов.',
      TUR: 'Gayrimenkul yatırımlarında hatalı sözleşmeler ve gizli ipotekler büyük zararlara yol açar. Yatırımcılara tam hukuki güvence sağlayarak kadastro, imar ve mülkiyet denetimini eksiksiz yürütüyoruz.',
    },
    keyPillars: [
      {
        title: {
          GEO: 'სამართლებრივი აუდიტი (Title Due Diligence)',
          ENG: 'Comprehensive Title & Permitting Due Diligence',
          RUS: 'Полный юридический аудит объекта (Due Diligence)',
          TUR: 'Hukuki İnceleme (Due Diligence) ve Tapu Kontrolü',
        },
        description: {
          GEO: 'საჯარო რეესტრის ისტორიული ამონაწერის, იპოთეკების, ყადაღების, მესამე პირთა უფლებებისა და მიწის სტატუსის გადამოწმება.',
          ENG: 'Scrutiny of historical registry records, encumbrances, third-party rights, and agricultural zoning status.',
          RUS: 'Проверка истории объекта в Публичном реестре, наличия ипотек, арестов и статуса земельного участка.',
          TUR: 'Tapu kayıt geçmişi, ipotek, haciz ve tarım arazisi statüsünün detaylı denetimi.',
        },
        statute: 'კანონი „საჯარო რეესტრის შესახებ“',
      },
      {
        title: {
          GEO: 'ნასყიდობის, იჯარისა და იპოთეკის ხელშეკრულებები',
          ENG: 'Tailored Purchase, Commercial Lease & Mortgage Deeds',
          RUS: 'Разработка договоров купли-продажи, аренды и ипотеки',
          TUR: 'Alım-Satım, Kira ve İpotek Sözleşmeleri',
        },
        description: {
          GEO: 'ინდივიდუალური პირობების შემუშავება: ეტაპობრივი ანგარიშსწორება (Escrow), დეველოპერის პასუხისმგებლობა და პირგასამტეხლო.',
          ENG: 'Drafting structured escrow conditions, completion warranties, construction milestone schedules, and penalties.',
          RUS: 'Составление безопасных условий расчетов через эскроу, гарантий застройщика и штрафных санкций.',
          TUR: 'Escrow güvenceli ödeme planları, müteahhit teslim garantileri ve cezai şartların düzenlenmesi.',
        },
        statute: 'სამოქალაქო კოდექსი მუხლი 477–530',
      },
      {
        title: {
          GEO: 'უცხო ქვეყნის მოქალაქეებისთვის მიწის შეძენის რეგულაციები',
          ENG: 'Foreign Ownership Compliance & Zoning Conversion',
          RUS: 'Приобретение земли иностранными гражданами',
          TUR: 'Yabancıların Mülk Edinimi ve İmar Statüsü',
        },
        description: {
          GEO: 'სასოფლო-სამეურნეო მიწის არასასოფლო სტატუსზე გადაყვანა და უცხოელი ინვესტორებისთვის ლეგალური სტრუქტურის შექმნა.',
          ENG: 'Navigating statutory moratoriums, agricultural land conversion, and corporate holding structures for non-residents.',
          RUS: 'Смена целевого назначения (статуса) земли и структурирование сделок для иностранных резидентов.',
          TUR: 'Tarım arazisi vasfının değiştirilmesi ve yabancı yatırımcılar için güvenli kurumsal modeller.',
        },
        statute: 'ორგანული კანონი „სასოფლო-სამეურნეო მიწის შესახებ“',
      },
      {
        title: {
          GEO: 'უძრავ ქონებასთან დაკავშირებული სასამართლო დავები',
          ENG: 'Boundary, Eviction & Real Property Litigation',
          RUS: 'Судебные споры о праве собственности и выселении',
          TUR: 'Mülkiyet, Tahliye ve Tapu İptal Davaları',
        },
        description: {
          GEO: 'საკადასტრო საზღვრების გადაფარვის გასწორება, უკანონო მფლობელობიდან ნივთის გამოთხოვა (ვინდიკაცია) და გამოსახლება.',
          ENG: 'Boundary overlap rectification, vindication claims for property recovery, and lawful eviction representation.',
          RUS: 'Устранение наложений кадастровых границ, истребование имущества из чужого незаконного владения.',
          TUR: 'Kadastro sınır uyuşmazlıkları, müdahalenin men-i ve tahliye davalarının yürütülmesi.',
        },
        statute: 'სამოქალაქო კოდექსი მუხლი 172',
      },
    ],
    statutoryFramework: {
      code: 'საქართველოს სამოქალაქო კოდექსი & კანონი „საჯარო რეესტრის შესახებ“',
      articleRange: 'მუხლები 170–183, 311–315, 477–530',
      summary: {
        GEO: 'საქართველოს კანონმდებლობით, უძრავ ქონებაზე საკუთრების უფლება წარმოიშობა მხოლოდ საჯარო რეესტრში რეგისტრაციის მომენტიდან.',
        ENG: 'Under Georgian law, title to real estate is legally created strictly upon official registration with the National Public Registry.',
        RUS: 'Право собственности на недвижимое имущество возникает исключительно с момента его регистрации в Публичном реестре.',
        TUR: 'Gürcistan mevzuatında gayrimenkul mülkiyeti ancak Tapu Siciline tescil ile kazanılır.',
      },
    },
    proceduralStages: [
      {
        step: '01',
        title: {
          GEO: 'წინასწარი იურიდიული აუდიტი',
          ENG: 'Pre-Signing Due Diligence Audit',
          RUS: 'Предварительный юридический аудит',
          TUR: 'İmza Öncesi Hukuki Risk Analizi',
        },
        desc: {
          GEO: 'ობიექტის სრული ისტორიის, დავალიანებების, ყადაღებისა და არქიტექტურული ნებართვების ექსპერტიზა.',
          ENG: 'Complete inspection of title chain, tax encumbrances, construction permits, and utility authorizations.',
          RUS: 'Проверка юридической чистоты истории объекта, налоговых долгов и градостроительных разрешений.',
          TUR: 'Tapu kayıt geçmişi, vergi borçları ve imar ruhsatlarının eksiksiz taranması.',
        },
      },
      {
        step: '02',
        title: {
          GEO: 'ხელშეკრულების შედგენა & მოლაპარაკება',
          ENG: 'Contract Structuring & Closing Clauses',
          RUS: 'Разработка контракта и переговоры',
          TUR: 'Sözleşme Hazırlığı ve Müzakere',
        },
        desc: {
          GEO: 'კლიენტის ინტერესებზე მორგებული ნასყიდობის ხელშეკრულების შექმნა საბანკო გარანტიებითა და მკაცრი სანქციებით.',
          ENG: 'Formulating client-protective closing deeds featuring clear seller warranties and escrow covenants.',
          RUS: 'Подготовка договора купли-продажи с гарантиями чистоты сделки и механизмом защиты платежей.',
          TUR: 'Alıcıyı koruyan cezai şartlar ve güvenli ödeme sistemlerinin sözleşmeye işlenmesi.',
        },
      },
      {
        step: '03',
        title: {
          GEO: 'რეგისტრაცია საჯარო რეესტრში & გასაღების მიღება',
          ENG: 'Registry Closing & Title Deed Issuance',
          RUS: 'Регистрация в Публичном реестре и закрытие',
          TUR: 'Tapu Tescili ve Mülkiyetin Teslimi',
        },
        desc: {
          GEO: 'იუსტიციის სახლში ტრანზაქციის თანხლება, სუფთა ამონაწერის მიღება და საკუთრების უფლების გადაცემა.',
          ENG: 'Direct representation at the Public Service Hall, obtaining unencumbered title deeds and physical possession.',
          RUS: 'Сопровождение в Доме юстиции, получение выписки без обременений и подписание акта приема-передачи.',
          TUR: 'Adalet Sarayında (Public Service Hall) tescil işleminin tamamlanması ve temiz tapu belgesinin temini.',
        },
      },
    ],
    whyUs: [
      {
        stat: '100M+',
        label: {
          GEO: 'ლარის უსაფრთხო ტრანზაქციები',
          ENG: 'GEL Worth of Deals Audited',
          RUS: 'Лари проверенных сделок',
          TUR: 'GEL Değerinde Güvenli İşlem',
        },
      },
      {
        stat: '0',
        label: {
          GEO: 'დაკარგული საკუთრების უფლება',
          ENG: 'Client Title Loss Rate',
          RUS: 'Потерь права собственности',
          TUR: 'Mülkiyet Kaybı Oranı',
        },
      },
      {
        stat: '48h',
        label: {
          GEO: 'სრული Due Diligence დასკვნა',
          ENG: 'Turnaround for Due Diligence Report',
          RUS: 'Срок подготовки отчета Due Diligence',
          TUR: 'Saatlik Hızlı Raporlama',
        },
      },
    ],
  },
};
