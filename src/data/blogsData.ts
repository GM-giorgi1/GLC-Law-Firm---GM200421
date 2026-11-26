import sisImg from '@/src/assets/images/SIS.webp';
import glcImg from '@/src/assets/images/GLC.webp';
import anderImg from '@/src/assets/images/ANDER.webp';

export interface BlogFaqItem {
  question: string;
  answer: string[];
}

export interface BlogSection {
  heading: string;
  statuteRef?: string;
  body: string[];
  listItems?: string[];
  bodyAfterList?: string[];
}

export interface LocalizedBlogContent {
  intro: string;
  sections: BlogSection[];
  faq?: {
    title: string;
    items: BlogFaqItem[];
  };
  closingTitle?: string;
  closingNote?: string;
  keyTakeaways?: string[];
  statutorySummary?: string;
}

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
  seoTitle?: {
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
  ogImage?: string;
  fallbackImage?: string;
  publishedDate?: string;
  schemaType?: 'BlogPosting' | 'NewsArticle';
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
    GEO: LocalizedBlogContent;
    ENG: LocalizedBlogContent;
    RUS: LocalizedBlogContent;
    TUR: LocalizedBlogContent;
  };
}

export const BLOG_POSTS_DETAIL: BlogPostDetail[] = [
  {
    id: 1,
    slug: 'inheritance-and-wills-in-georgia',
    category: 'მემკვიდრეობითი სამართალი',
    readTime: '5 წთ საკითხავი',
    date: {
      GEO: '2026 წლის სექტემბერი',
      ENG: 'September 2026',
      RUS: 'Сентябрь 2026 г.',
      TUR: 'Eylül 2026',
    },
    title: {
      GEO: 'მემკვიდრეობის მიღება და ანდერძი: როგორ მივიღოთ კუთვნილი წილი?',
      ENG: 'Inheritance and Wills in Georgia: How to Claim Your Rightful Share',
      RUS: 'Наследство и завещание в Грузии: как получить причитающуюся долю',
      TUR: "Gürcistan'da Miras ve Vasiyetname: Hakkınız Olan Payı Nasıl Alırsınız?",
    },
    seoTitle: {
      GEO: 'მემკვიდრეობის მიღება და ანდერძი: როგორ მივიღოთ კუთვნილი წილი? | GLC Law Company',
      ENG: 'Inheritance and Wills in Georgia: How to Claim Your Rightful Share | GLC Law Company',
      RUS: 'Наследство и завещание в Грузии: как получить причитающуюся долю | GLC Law Company',
      TUR: "Gürcistan'da Miras ve Vasiyetname: Hakkınız Olan Payı Nasıl Alırsınız? | GLC Law Company",
    },
    excerpt: {
      GEO: 'ექვსთვიანი ვადა მემკვიდრეობის მისაღებად, ანდერძი და მემკვიდრეების რიგითობა საქართველოს სამოქალაქო კოდექსის მიხედვით.',
      ENG: 'The six-month deadline for accepting an inheritance, wills, compulsory shares, and notary registration rules under the Civil Code of Georgia.',
      RUS: 'Шестимесячный срок принятия наследства, завещание, очередность наследников и регистрация прав в Грузии.',
      TUR: "Gürcistan Medeni Kanunu'na göre mirasın kabulü için altı aylık süre, vasiyetname, mirasçı sıralaması ve tapu tescili.",
    },
    image: anderImg,
    ogImage: '/family.png',
    alt: 'Inheritance and wills legal representation in Georgia - GLC Law Company',
    author: {
      name: 'გიორგი გუბელაძე',
      role: {
        GEO: 'უფროსი პარტნიორი, ადვოკატი',
        ENG: 'Senior Partner, Attorney at Law',
        RUS: 'Старший партнер, Адвокат',
        TUR: 'Kıdemli Ortak, Avukat',
      },
      avatar: '/GUBE1.jpeg',
    },
    content: {
      GEO: {
        intro:
          'ნათესავის გარდაცვალების შემდეგ ოჯახებს ქონებაზე ფიქრის თავიც არ აქვთ, თუმცა კანონი მემკვიდრეობის მისაღებად კონკრეტულ ვადას ადგენს და მისი გაშვება **წლობით გაჭიანურებულ სასამართლო დავაში შეიძლება გადაიზარდოს.** ამ საკითხებს [სამოქალაქო კოდექსი](https://matsne.gov.ge/ka/document/view/16426) მემკვიდრეობითი სამართლით აწესრიგებს, ქვემოთ კი იმას მიმოვიხილავთ, რაც პრაქტიკაში ყველაზე ხშირად გვჭირდება.',
        sections: [
          {
            heading: 'ვის რა წილი ერგება',
            statuteRef: 'საქართველოს სამოქალაქო კოდექსი - მემკვიდრეობითი სამართალი',
            body: [
              'თუ გარდაცვლილმა **ანდერძი** დატოვა, ქონება მის ნებას უნდა მიჰყვეს, ხოლო ანდერძის არარსებობისას მემკვიდრეები კანონით განისაზღვრებიან **რიგების მიხედვით**, სადაც **პირველ რიგში შვილები, მეუღლე და მშობლები დგანან**, მათ მოჰყვებიან **და-ძმები, ბებია-ბაბუა** და **უფრო შორეული ნათესავები.**',
              'ანდერძის არსებობის შემთხვევაშიც კი კანონი ზოგიერთ ახლო ნათესავს სავალდებულო წილს უტოვებს, ამიტომ ქონების მთლიანად სასურველ პირზე გადაცემა ყოველთვის ვერ ხერხდება.',
              '**უმჯობესია ანდერძი ნოტარიუსთან დამოწმდეს,** რადგან მესამე პირის ხელში მოხვედრილი ან დაკარგული ეგზემპლარის შემთხვევაში [**ნოტარიუსთან**](https://www.notary.ge/geo-1-mtavari) **დაცული ასლი ადვილად აღდგება.**',
            ],
          },
          {
            heading: 'როგორ და როდის მივიღოთ მემკვიდრეობა',
            statuteRef: 'მემკვიდრეობის მიღების 6-თვიანი ვადა და საჯარო რეესტრში რეგისტრაცია',
            body: [
              'გარდაცვალებიდან **ექვსი თვის** განმავლობაში [ნოტარიუსთან](https://notary.ge/eng-2859-succession-proceedings-and-compliance-of-practice-with-law) უნდა შეიტანოთ განცხადება მემკვიდრეობის მიღების შესახებ, რის საფუძველზეც **ნოტარიუსი მემკვიდრეობის მოწმობას გასცემს**, უძრავი ქონების შემთხვევაში კი ამ მოწმობით თქვენი საკუთრება [საჯარო რეესტრში](https://www.napr.gov.ge) უნდა დარეგისტრირდეს.',
            ],
          },
        ],
        faq: {
          title: 'ხშირად დასმული კითხვები',
          items: [
            {
              question: 'რა ხდება, თუ ექვსი თვე გავუშვი?',
              answer: [
                'როგორც წესი, მემკვიდრეობა მიღებულად ითვლება მაშინაც, თუ მემკვიდრემ ქონება **ფაქტობრივად დაიკავა ან მართავს** მას, თუმცა დავის დროს ამის დამტკიცება შესაძლოა არ იყოს მარტივი, ხოლო **საპატიო მიზეზის** არსებობისას სასამართლოს ვადის გაგრძელება შეუძლია.',
              ],
            },
            {
              question: 'შეიძლება მემკვიდრეობაზე უარის თქმა?',
              answer: [
                'კანონი ამის შესაძლებლობას იძლევა, რაც განსაკუთრებით მნიშვნელოვანია მაშინ, როცა **გარდაცვლილს ვალები დარჩა,** ამიტომ გადაწყვეტილებამდე ქონებისა და ვალების სრული ანალიზი უნდა ჩაატაროთ.',
              ],
            },
            {
              question: 'აუცილებელია თუ არა ანდერძის ნოტარიუსთან დამოწმება?',
              answer: [
                'ანდერძი წერილობით უნდა შედგეს და ხელმოწერილი უნდა იყოს, ჩვეულებრივ კი მას ნოტარიუსი ამოწმებს, რადგან დაუმოწმებელი ანდერძის გასაჩივრება გაცილებით ადვილია.',
              ],
            },
            {
              question: 'რა დოკუმენტებია საჭირო?',
              answer: [
                'ჩვეულებრივ საჭიროა გარდაცვალების მოწმობა, ნათესაობის დამადასტურებელი დოკუმენტები, ქონებაზე საკუთრების დოკუმენტები და პირადობის მოწმობა.',
              ],
            },
            {
              question: 'რა ხდება, როცა მემკვიდრეები წილზე ვერ თანხმდებიან?',
              answer: [
                'გაყოფის შესახებ წერილობითი შეთანხმება საუკეთესო გზაა, ხოლო თუ ის ვერ შედგა, საკითხს **სასამართლო გადაწყვეტს,** ამიტომ ადვოკატის ადრეული ჩართვა ხშირად დროსა და ნერვებს გიზოგავთ.',
              ],
            },
          ],
        },
        closingTitle: 'სამემკვიდრეო დავები - GLC Law Company',
        closingNote:
          '**GLC Law Company**-ის ადვოკატები დაგეხმარებიან სამემკვდირეო დავის წარმატებით დასრულებაში, ანდერძის შემოწმებიდან სასამართლოში წარმომადგენლობამდე.\n\nკონსულტაციისთვის დაჯავშნეთ თქვენი ადგილი ან გადაუდებელი აუცილებლობის შემთხვევაში მოგვმართეთ ცხელ ხაზზე: +995 599 27 77 74.',
      },
      ENG: {
        intro:
          'After the death of a loved one, families rarely have the energy to think about property, yet the law sets a deadline for accepting an inheritance, and missing it can grow into a **court dispute that drags on for years.** These matters are governed by the [Civil Code](https://matsne.gov.ge/en/document/view/16426), and below we go through what comes up most often in practice.',
        sections: [
          {
            heading: 'Who gets what',
            statuteRef: 'Civil Code of Georgia - Inheritance Law',
            body: [
              'If the deceased left a **will**, the estate follows it, and without one the heirs are determined by **order of priority** under the law, with **children, the spouse and parents in the first order**, followed by **siblings, grandparents** and **more distant relatives.**',
              'Even with a will, the law reserves a compulsory share for certain close relatives, so the estate cannot always be passed entirely to the person the testator prefers.',
              '**A will certified by a notary is the safer route,** because if the testator\'s own copy is lost or ends up with a third party, the copy deposited with the [**notary**](https://www.notary.ge/geo-1-mtavari) **can easily be restored.**',
            ],
          },
          {
            heading: 'How and when to accept',
            statuteRef: 'Six-Month Acceptance Deadline and Public Registry',
            body: [
              'Within **six months** of the death you need to submit a statement of acceptance to a [notary](https://notary.ge/eng-2859-succession-proceedings-and-compliance-of-practice-with-law), who then issues a **succession certificate confirming your ownership**, and for real estate that certificate is what you take to the [Public Registry](https://www.napr.gov.ge) to have your name entered.',
            ],
          },
        ],
        faq: {
          title: 'Questions and answers',
          items: [
            {
              question: 'What if I miss the six months?',
              answer: [
                'As a rule an heir is also treated as having accepted by **actually taking over or managing** the estate, though this can be hard to prove in a dispute, and a court may extend the deadline where the delay has a **valid reason.**',
              ],
            },
            {
              question: 'Can I refuse an inheritance?',
              answer: [
                'The law allows it, which matters when the **deceased left debts**, so it is worth getting a full picture of assets and liabilities before deciding.',
              ],
            },
            {
              question: 'Does a will have to be notarized?',
              answer: [
                'A will must be in writing and signed, and it is normally certified by a notary, because an uncertified will is far easier to challenge.',
              ],
            },
            {
              question: 'Which documents do I need?',
              answer: [
                'Typically the death certificate, proof of your family relationship, ownership documents for the property and your ID, although the notary will confirm the exact list.',
              ],
            },
            {
              question: 'What if the heirs cannot agree on shares?',
              answer: [
                'A written agreement on division is the best route, and if it fails **the court decides**, so involving a lawyer early often saves time and stress.',
              ],
            },
          ],
        },
        closingTitle: 'Inheritance Cases - GLC Law Company',
        closingNote:
          'The lawyers of **GLC Law Company** handle inheritance cases from Batumi and assist with both notary procedures and court proceedings, from will verification to courtroom representation.\n\nFor a consultation call +995 599 27 77 74. If you cannot afford a lawyer, contact the [Legal Aid Service](https://www.legalaid.ge). This article is general information, not legal advice.',
      },
      RUS: {
        intro:
          'После смерти близкого человека семьям редко хватает сил думать об имуществе, однако закон устанавливает срок для принятия наследства, и его пропуск может обернуться **судебным спором на долгие годы.** Эти вопросы регулирует [Гражданский кодекс](https://matsne.gov.ge/en/document/view/16426), и ниже мы разберем то, с чем на практике сталкиваются чаще всего.',
        sections: [
          {
            heading: 'Кому что достается',
            statuteRef: 'Гражданский кодекс Грузии - Наследственное право',
            body: [
              'Если умерший оставил **завещание**, имущество переходит согласно его воле, а при отсутствии завещания наследники определяются **по очередям**, установленным законом: **в первую очередь это дети, супруг и родители**, затем **братья и сестры, бабушки и дедушки** и **более дальние родственники.**',
              'Даже при наличии завещания закон закрепляет обязательную долю за некоторыми близкими родственниками, поэтому передать все имущество желаемому лицу удается не всегда.',
              '**Завещание лучше удостоверить у нотариуса,** ведь при утрате собственного экземпляра завещателя экземпляр, хранящийся у [**нотариуса**](https://www.notary.ge/geo-1-mtavari), **можно легко восстановить.**',
            ],
          },
          {
            heading: 'Как и когда принять наследство',
            statuteRef: 'Шестимесячный срок и регистрация в Публичном реестре',
            body: [
              'В течение **шести месяцев** со дня смерти необходимо подать заявление о принятии наследства [нотариусу](https://notary.ge/eng-2859-succession-proceedings-and-compliance-of-practice-with-law), который выдаст **свидетельство о праве на наследство**, а в случае недвижимости с этим свидетельством нужно обратиться в [Публичный реестр](https://www.napr.gov.ge), чтобы зарегистрировать право собственности.',
            ],
          },
        ],
        faq: {
          title: 'Вопросы и ответы',
          items: [
            {
              question: 'Что делать, если я пропустил шесть месяцев?',
              answer: [
                'Как правило, наследство считается принятым и тогда, когда наследник **фактически вступил во владение имуществом или управляет им**, хотя доказать это в споре бывает трудно, а суд при **уважительной причине** может продлить срок.',
              ],
            },
            {
              question: 'Можно ли отказаться от наследства?',
              answer: [
                'Закон это допускает, что особенно важно при наличии **у умершего долгов**, поэтому перед решением стоит получить полную картину активов и обязательств.',
              ],
            },
            {
              question: 'Обязательно ли нотариально удостоверять завещание?',
              answer: [
                'Завещание должно быть составлено письменно и подписано, а обычно его удостоверяет нотариус, поскольку неудостоверенное завещание оспорить гораздо проще.',
              ],
            },
            {
              question: 'Какие документы потребуются?',
              answer: [
                'Как правило, свидетельство о смерти, документы о родстве, документы на право собственности на имущество и удостоверение личности, однако точный перечень уточнит нотариус.',
              ],
            },
            {
              question: 'Что делать, если наследники не могут договориться о долях?',
              answer: [
                'Лучший путь - письменное соглашение о разделе, а если оно не достигнуто, спор **решает суд**, поэтому раннее привлечение адвоката часто экономит время и нервы.',
              ],
            },
          ],
        },
        closingTitle: 'Наследственные споры - GLC Law Company',
        closingNote:
          'Адвокаты **GLC Law Company** ведут наследственные дела из Батуми и помогают на каждом этапе, от проверки завещания и нотариальных процедур до представительства в суде.\n\nДля консультации звоните по горячей линии: +995 599 27 77 74. Если нанять адвоката нет возможности, обратитесь в [Службу юридической помощи](https://www.legalaid.ge). Статья носит общий информационный характер и не заменяет консультацию юриста.',
      },
      TUR: {
        intro:
          'Yakınımızı kaybettikten sonra aileler çoğu zaman mal varlığını düşünecek halde olmaz, ancak kanun mirasın kabulü için belirli bir süre koyar ve bu sürenin kaçırılması **yıllarca süren bir mahkeme uyuşmazlığına dönüşebilir.** Bu konuları [Medeni Kanun](https://matsne.gov.ge/en/document/view/16426) düzenler; aşağıda pratikte en sık karşılaşılanları ele alıyoruz.',
        sections: [
          {
            heading: 'Kime ne düşer',
            statuteRef: 'Gürcistan Medeni Kanunu - Miras Hukuku',
            body: [
              'Ölen kişi **vasiyetname** bıraktıysa mal varlığı onun iradesine göre paylaşılır, vasiyetname yoksa mirasçılar kanunla belirlenen **sıralara göre** tespit edilir; **birinci sırada çocuklar, eş ve anne baba**, ardından **kardeşler, büyükanne ve büyükbaba** ile **daha uzak akrabalar** gelir.',
              'Vasiyetname olsa bile kanun bazı yakın akrabalar için saklı pay öngörür, bu yüzden mal varlığının tamamını istenen kişiye bırakmak her zaman mümkün olmaz.',
              '**Vasiyetnamenin noterde onaylanması daha güvenlidir,** çünkü vasiyet edenin kendi nüshası kaybolursa [**notere**](https://www.notary.ge/geo-1-mtavari) **bırakılan nüsha kolayca geri getirilebilir.**',
            ],
          },
          {
            heading: 'Miras nasıl ve ne zaman kabul edilir',
            statuteRef: 'Altı Aylık Başvuru Süresi ve Kamu Sicili Tescili',
            body: [
              'Ölümden itibaren **altı ay** içinde [notere](https://notary.ge/eng-2859-succession-proceedings-and-compliance-of-practice-with-law) mirasın kabulüne dair başvuru yapmanız gerekir; noter **mülkiyetinizi doğrulayan veraset belgesini** düzenler, taşınmaz söz konusuysa bu belgeyle [Kamu Sicili](https://www.napr.gov.ge) kurumuna giderek adınıza tescil yaptırırsınız.',
            ],
          },
        ],
        faq: {
          title: 'Sorular ve cevaplar',
          items: [
            {
              question: 'Altı ayı kaçırırsam ne olur?',
              answer: [
                'Kural olarak mirasçı malı **fiilen devralmışsa veya yönetiyorsa** miras kabul edilmiş sayılır, ancak bir uyuşmazlıkta bunu ispatlamak zor olabilir ve **geçerli bir neden** varsa mahkeme süreyi uzatabilir.',
              ],
            },
            {
              question: 'Mirası reddedebilir miyim?',
              answer: [
                'Kanun buna izin verir; ölenin **borçları varsa** bu özellikle önemlidir, bu yüzden karar vermeden önce mal varlığı ve borçların tam dökümünü görmekte fayda var.',
              ],
            },
            {
              question: 'Vasiyetnamenin noterde onaylanması şart mı?',
              answer: [
                'Vasiyetname yazılı olmalı ve imzalanmalıdır, genellikle de noter tarafından onaylanır, çünkü onaysız bir vasiyetnameye itiraz etmek çok daha kolaydır.',
              ],
            },
            {
              question: 'Hangi belgeler gerekir?',
              answer: [
                'Genellikle ölüm belgesi, akrabalık belgeleri, mal varlığının mülkiyet belgeleri ve kimlik gerekir; kesin listeyi noter size bildirir.',
              ],
            },
            {
              question: 'Mirasçılar paylar konusunda anlaşamazsa ne olur?',
              answer: [
                'En iyi yol yazılı bir paylaşım sözleşmesidir; olmazsa **mahkeme karar verir**, bu yüzden avukatı erken sürece dahil etmek çoğu zaman zaman ve sinir kazandırır.',
              ],
            },
          ],
        },
        closingTitle: 'Miras Davaları - GLC Law Company',
        closingNote:
          "**GLC Law Company** avukatları miras davalarına Batum'dan bakıyor ve vasiyetnamenin incelenmesinden noter işlemlerine ve mahkeme temsiline kadar her aşamada destek veriyor.\n\nDanışmak için +995 599 27 77 74 numarasını arayın. Avukat tutamıyorsanız [Hukuki Yardım Servisi](https://www.legalaid.ge) sayfasına başvurabilirsiniz. Bu yazı genel bilgi niteliğindedir, hukuki tavsiye yerine geçmez.",
      },
    },
  },
  {
    id: 2,
    slug: 'rogor-shevarchioth-iuridiuli-kompania',
    category: 'იურიდიული გზამკვლევი',
    readTime: '6 წთ საკითხავი',
    date: {
      GEO: '2026 წლის სექტემბერი',
      ENG: 'September 2026',
      RUS: 'Сентябрь 2026 г.',
      TUR: 'Eylül 2026',
    },
    title: {
      GEO: 'როგორ შევარჩიოთ იურიდიული კომპანია: სრული გზამკვლევი',
      ENG: 'How to Choose a Law Firm: A Complete Guide',
      RUS: 'Как выбрать юридическую компанию: полное руководство',
      TUR: 'Hukuk Şirketi Nasıl Seçilir: Kapsamlı Rehber',
    },
    seoTitle: {
      GEO: 'როგორ შევარჩიოთ იურიდიული კომპანია: სრული გზამკვლევი | GLC Law Company',
      ENG: 'How to Choose a Law Firm in Georgia: A Complete Guide | GLC Law Company',
      RUS: 'Как выбрать юридическую компанию в Грузии: полное руководство | GLC Law Company',
      TUR: "Gürcistan'da Hukuk Şirketi Nasıl Seçilir: Kapsamlı Rehber | GLC Law Company",
    },
    excerpt: {
      GEO: 'როგორ შევარჩიოთ იურიდიული კომპანია საქართველოში: რას დავაკვირდეთ, რა არის საგანგაშო ნიშანი და რა უნდა ეწეროს ხელშეკრულებაში.',
      ENG: 'How to choose a law firm in Georgia: what to check, which red flags to avoid, and what a service agreement should contain.',
      RUS: 'Как выбрать юридическую компанию в Грузии: на что смотреть, какие тревожные сигналы учитывать и что должен содержать договор.',
      TUR: "Gürcistan'da hukuk şirketi nasıl seçilir: nelere bakmalı, hangi uyarı işaretlerinden kaçınmalı ve hizmet sözleşmesinde neler olmalı.",
    },
    image: glcImg,
    ogImage: '/HERO_GUBE.jpeg',
    alt: 'GLC Law Company office and legal counsel guide on choosing a law firm in Georgia',
    author: {
      name: 'გიორგი გუბელაძე',
      role: {
        GEO: 'უფროსი პარტნიორი, ადვოკატი',
        ENG: 'Senior Partner, Attorney at Law',
        RUS: 'Старший партнер, Адвокат',
        TUR: 'Kıdemli Ortak, Avukat',
      },
      avatar: '/GUBE1.jpeg',
    },
    content: {
      GEO: {
        intro:
          'იურისტს ხშირად მაშინ ვეძებთ, როცა პრობლემა უკვე გვაწუხებს. როდესაც სარჩელი ჩაგბარდებათ, ან თქვენს წინააღმდეგ დაიწყება სისხლის სამართლებრივი დევნა ან ბიზნესს სჭირდება იურიდიული აუდიტი - შესაძლოა უკვე გვიანი იყოს.\n\nნებისმიერ შემთხვევაში, აუცილებელია წინასწარ იცოდეთ, რომელ იურიდიულ კომპანიას მიმართოთ მაშინვე დასახმარებლად.',
        sections: [
          {
            heading: 'როგორ უნდა დაიწყოთ შერჩევა',
            body: [
              'სანამ კომპანიას შეარჩევთ, უნდა იცოდეთ, თუ რისთვის გჭირდებათ იგი. ერთჯერადი და მრავალჯერადი საქმეებისთვის ერთი და იგივე კომპანია ხშირად არ გამოდგება. იურიდიული პრაქტიკა ერთგვაროვანი არ არის.',
              'მაგალითად, სასამართლოში გამოცდილი ადვოკატი სულაც არ არის ხშირად საუკეთესო არჩევანი კორპორაციული საქმეებისათვის, ამიტომ ჯერ უნდა განსაზღვროთ სექტორული გამოცდილება.',
            ],
          },
          {
            heading: 'რას უნდა მიაქციოთ ყურადღება',
            body: [
              'იურიდიული კომპანიის ან კერძო ადვოკატის არჩევისას ყურადღება გაამახვილეთ შემდეგ კრიტერიუმებზე:',
            ],
            listItems: [
              '1) **სექტორული გამოცდილება -** დაადგინეთ, რამდენად აქვს გამოცდილება კომპანიას კონკრეტულად ისეთ საქმეებში, რომელიც თქვენი საქმის იდენტურია, და ვინ იმუშავებს უშუალოდ თქვენს საქმეზე.',
              '2) **სტატუსი -** თუ ადვოკატს ან იურიდიულ კომპანიას არჩევთ, მნიშვნელოვანია მის მიერ დამკვიდრებული სტატუსი და რეგისტრაცია ([ადვოკატთა ასოციაცია](https://www.gcba.org.ge/) და [საჯარო რეესტრი](https://napr.gov.ge/)), რადგან იურიდიულ სფეროში ნდობა და ღირსება ყველაზე მნიშვნელოვანია.',
              '3) **კომუნიკაცია -** თუ თქვენი დამცველი გვიან გპასუხობთ ან ვერ იღებთ მკაფიო განმარტებებს, ეს მნიშვნელოვანი მინუსია და სჯობს სწრაფად ჩაანაცვლოთ კვალიფიციური დამცველით. დამცველთან კომუნიკაცია არ უნდა იყოს ბარიერი, არამედ მარტივი და გასაგები პროცესი.',
            ],
          },
          {
            heading: 'საგანგაშო ნიშნები',
            body: [
              'საკონსულტაციო ეტაპზევე მიაქციეთ ყურადღება რისკის შემცველ სიგნალებს:',
            ],
            listItems: [
              '1) **მაშინვე შეწყვიტეთ კომუნიკაცია, თუ კომპანია ან კერძო ადვოკატი გარანტირებულ შედეგს გპირდებათ.**',
              '2) **მაშინვე შეწყვიტეთ კომუნიკაცია, თუ მომსახურების საფასურს დამატებითი კითხვებისა და საქმის მოცულობის შესწავლის გარეშე გიდგენთ.**',
              '3) **მაშინვე შეწყვიტეთ კომუნიკაცია, თუ დამცველი უდიერად ეპყრობა თქვენს საქმეს ან საფრთხის ქვეშ აყენებს კონფიდენციალურობას.**',
            ],
          },
        ],
        closingTitle: 'დასკვნა - GLC Law Company',
        closingNote:
          '**GLC Law Company** არის საქართველოში, კერძოდ, ბათუმში დაფუძნებული იურიდიული კომპანია, რომელიც ცნობილია პროფესიონალიზმით, ეფექტური წარმომადგენლობით და დიდი გამოცდილებით იურიდიულ სფეროში.\n\nკომპანიას აქვს როგორც ადგილობრივი, ისე საერთაშორისო გამოცდილება და სპეციალიზდება სამართლის ყველა მიმართულებით: სისხლის სამართალი, სამოქალაქო და ბიზნეს სამართალი, ადმინისტრაციული სამართალი, საოჯახო და მემკვიდრეობითი დავები თუ სხვა.\n\nჩვენთვის გადამწყვეტია თქვენი ინტერესების ეფექტურად დაცვა, რადგან თქვენი გამარჯვება ჩვენი გამარჯვებაცაა. ინდივიდუალური სამართლებრივი სტრატეგიით გამარჯვების მოსაპოვებლად დაჯავშნეთ კონსულტაცია ან დაგვიკავშირდით ცხელ ხაზზე: +995 599 27 77 94.',
        faq: {
          title: 'ხშირად დასმული კითხვები',
          items: [
            {
              question: 'რა ღირს იურიდიული მომსახურება საქართველოში?',
              answer: [
                'ერთიანი ტარიფი რა თქმა უნდა არ არსებობს, რადგან ფასი დამოკიდებულია საქმის სირთულეზე, ვადებსა და ანგარიშსწორების მოდელზე (საათობრივი, ფიქსირებული ან აბონენტური).',
              ],
            },
            {
              question: 'რით განსხვავდება იურისტი ადვოკატისგან?',
              answer: [
                'იურისტი ფართო ცნებაა და იურიდიული განათლების მქონე ნებისმიერ სპეციალისტს მოიცავს, ხოლო ადვოკატს ადვოკატის სტატუსი აქვს და [ადვოკატთა ასოციაციის](https://www.gcba.org.ge/) წევრია.',
              ],
            },
            {
              question: 'შემიძლია თუ არა კომპანიის წარსული შედეგების შემოწმება?',
              answer: [
                'კლიენტების საქმეები კონფიდენციალურია, ამიტომ კომპანია ცხადია მათ ვერ გაგიმხელთ. კომპანიის და ადვოკატის სტატუსი, როგორც წესი, საზოგადოებაში ფართოდ არის გავრცელებული და ყველასთვის ხელმისაწვდომია. საჯარო სასამართლო პრაქტიკის გაცნობა ასევე შესაძლებელია [უზენაესი სასამართლოს](https://www.supremecourt.ge/) ვებგვერდზე.',
              ],
            },
            {
              question: 'რა უნდა ეწეროს მომსახურების ხელშეკრულებაში?',
              answer: [
                'მომსახურების მოცულობა, ჰონორარი და გადახდის წესი, ხარჯების განაწილება, ვადები, კონფიდენციალურობა და ხელშეკრულების შეწყვეტის პირობები ([სამოქალაქო კოდექსი](https://matsne.gov.ge/ka/document/view/31702)).',
              ],
            },
            {
              question: 'შემიძლია იურისტის შეცვლა საქმის დაწყების შემდეგ?',
              answer: [
                'როგორც წესი, დიახ, თუმცა უნდა დაიცვათ ხელშეკრულებით გათვალისწინებული შეწყვეტის წესი და აანაზღაუროთ უკვე შესრულებული სამუშაო. ყოფილი ადვოკატი კი ვალდებულია ახალ ადვოკატს საქმის ყოველი მასალა დაუყოვნებლივ გადასცეს.',
              ],
            },
            {
              question: 'დაცულია თუ არა ჩემი ინფორმაცია და კონფიდენციალურობა?',
              answer: [
                'ადვოკატის ერთ-ერთი ყველაზე საყურადღებო პასუხისმგებლობა არის კლიენტის ინფორმაციის კონფიდენციალურად შენახვა, რადგან სხვა შემთხვევაში შესაძლებელია დისციპლინარული სამართალწარმოების დაწყება და გაფრთხილების მიღება, ან ადვოკატის ლიცენზიის შეჩერება ან შეწყვეტა.',
              ],
            },
            {
              question: 'როდის ღირს მუდმივი იურიდიული აუთსორსინგი?',
              answer: [
                'როცა ბიზნესს რეგულარულად სჭირდება ხელშეკრულებები, შრომითი ურთიერთობების მოწესრიგება ან [საგადასახადო](https://www.rs.ge/) შესაბამისობა.',
              ],
            },
          ],
        },
      },
      ENG: {
        intro:
          "Most of us look for a lawyer when the problem is already at the door: a claim has arrived, a contract must be signed tomorrow, or a business is about to launch with a foreign partner. Under that pressure we choose by a friend's recommendation or by the lowest price.\n\nSometimes that works. Sometimes one badly drafted clause costs far more than a good lawyer's fee, so knowing which firm to call in advance makes all the difference.",
        sections: [
          {
            heading: 'Start with your own needs',
            body: [
              'Before you pick a firm, answer two questions: do you need litigation or legal structuring for a business? Is it a one-off matter or ongoing support? Legal practice is not uniform.',
              'A courtroom veteran is not automatically the best choice for a corporate deal, so check sector specialisation first and price second.',
            ],
          },
          {
            heading: 'What to look for',
            body: [
              'When evaluating a law firm or advocate in Georgia, focus on these core standards:',
            ],
            listItems: [
              '1) **Experience in cases like yours -** Ask how many similar matters they have handled and who exactly will work on yours.',
              '2) **Status and registration -** If you are hiring an advocate, confirm membership on the [Georgian Bar Association](https://www.gcba.org.ge/) website, and look up the company in the [public registry](https://napr.gov.ge/).',
              '3) **A written agreement -** Within the [Civil Code](https://matsne.gov.ge/ka/document/view/31702) you are free to agree on scope, fees and deadlines, and all of it should be on paper.',
              '4) **Communication -** A good lawyer does not leave questions unanswered and explains complex points in plain language.',
              "5) **Language and international experience -** If you have a foreign partner or investor, the firm should be able to explain [Georgia's investment environment](https://www.investingeorgia.org/) and local rules clearly in both languages.",
            ],
          },
          {
            heading: 'Red flags',
            body: [
              'Do not overlook clear warning signs during your initial consultation:',
            ],
            listItems: [
              '1) **Stop immediately if a firm or lawyer promises a guaranteed win.** In law there are no guaranteed outcomes, only well-assessed risks.',
              '2) **Stop immediately if fees are quoted without reviewing your documents or asking clarifying questions.** Fees require understanding the scope of work.',
              '3) **Stop immediately if your counsel handles your file carelessly or puts client confidentiality at risk.**',
            ],
          },
          {
            heading: 'Price or value, and the first meeting',
            body: [
              'Fees may be hourly, fixed or a monthly retainer. In every case ask for a written estimate and what it includes and excludes. A cheap lawyer becomes expensive if you later discover a missed procedural deadline, or that the company form chosen is not the best fit for your business (see the [Law on Entrepreneurs](https://matsne.gov.ge/document/view/5230186?publication=12)).',
              'Bring your documents to the first meeting and prepare three questions: which risks does the lawyer see, what options exist, and what does each cost? If the answer is vague and general, you have already learned what working together would look like.',
            ],
          },
        ],
        closingTitle: 'Conclusion - GLC Law Company',
        closingNote:
          '**GLC Law Company** is a law firm founded in Batumi, Georgia, recognized for professionalism, decisive courtroom advocacy, and deep legal experience.\n\nWith both domestic and international practice across criminal, civil, corporate, administrative, family, and inheritance law, our team prioritizes protecting your interests because your victory is our victory. At GLC Law Company, the first conversation starts with your goal, not with a price. Call +995 599 27 77 94 to schedule a consultation.',
        faq: {
          title: 'Frequently Asked Questions',
          items: [
            {
              question: 'How much do legal services cost in Georgia?',
              answer: [
                'There is no single tariff. The price depends on the complexity of the matter, deadlines and the billing model (hourly, fixed or retainer). Always ask for a written estimate.',
              ],
            },
            {
              question: 'What is the difference between a lawyer and an advocate?',
              answer: [
                '"Lawyer" is a broad term for any legally trained professional. An advocate holds advocate status and is a member of the [Georgian Bar Association](https://www.gcba.org.ge/). Which one you need depends on the type of case.',
              ],
            },
            {
              question: "Can I check a firm's track record?",
              answer: [
                'Client matters are confidential, so a firm cannot disclose them. Published case law, including on the [Supreme Court](https://www.supremecourt.ge/) website, helps you understand how courts reason in cases like yours.',
              ],
            },
            {
              question: 'What should a service agreement include?',
              answer: [
                'Scope of services, fee and payment terms, allocation of expenses, deadlines, confidentiality and termination conditions.',
              ],
            },
            {
              question: 'Can I change my lawyer after the work has started?',
              answer: [
                'Generally yes, but you must follow the termination terms of the agreement and pay for work already done. The former advocate is obligated to hand over all case materials promptly to the new lawyer.',
              ],
            },
            {
              question: 'Is my information protected?',
              answer: [
                "An advocate's professional secrecy is strictly protected by law, and violations may lead to disciplinary proceedings or suspension of the advocate's license. In any case, write a confidentiality clause into the agreement as well.",
              ],
            },
            {
              question: 'When is ongoing legal outsourcing worth it?',
              answer: [
                'When a business regularly needs contracts, employment matters or [tax](https://www.rs.ge/) compliance. A retainer is then often more predictable than paying for each issue separately.',
              ],
            },
          ],
        },
      },
      RUS: {
        intro:
          'Юриста обычно ищут тогда, когда проблема уже на пороге: пришел иск, завтра нужно подписать договор или бизнес запускается вместе с иностранным партнером. В такой момент выбор делают по совету знакомого или по самой низкой цене.\n\nИногда это срабатывает, а иногда один неудачно составленный пункт обходится гораздо дороже, чем гонорар хорошего юриста. Поэтому важно заранее понимать, к какой юридической компании обратиться за помощью.',
        sections: [
          {
            heading: 'Начните с собственной задачи',
            body: [
              'Прежде чем выбирать компанию, ответьте на два вопроса: вам нужно ведение спора или юридическое оформление бизнеса? Это разовый вопрос или постоянное сопровождение? Юридическая практика неоднородна.',
              'Опытный судебный юрист не всегда лучший выбор для корпоративной сделки, поэтому сначала проверьте отраслевую специализацию и только потом цену.',
            ],
          },
          {
            heading: 'На что обратить внимание',
            body: [
              'При выборе юридической компании или адвоката в Грузии оцените следующие критерии:',
            ],
            listItems: [
              '1) **Опыт в похожих делах -** Спросите, сколько аналогичных дел компания уже вела и кто именно будет работать по вашему делу.',
              '2) **Статус и регистрация -** Если вы нанимаете адвоката, проверьте членство на сайте [Ассоциации адвокатов Грузии](https://www.gcba.org.ge/), а данные компании найдите в [публичном реестре](https://napr.gov.ge/).',
              '3) **Письменный договор -** В рамках [Гражданского кодекса](https://matsne.gov.ge/ka/document/view/31702) вы вправе свободно согласовать объем услуг, гонорар и сроки, но все это должно быть зафиксировано на бумаге.',
              '4) **Коммуникация -** Хороший юрист не оставляет вопросы без ответа и объясняет сложное простым языком.',
              '5) **Язык и международный опыт -** Если у вас иностранный партнер или инвестор, компания должна уметь объяснить [инвестиционную среду Грузии](https://www.investingeorgia.org/) и местные правила на обоих языках.',
            ],
          },
          {
            heading: 'Тревожные сигналы',
            body: [
              'Немедленно прекратите общение или проявите максимальную осторожность в следующих случаях:',
            ],
            listItems: [
              '1) **Если вам обещают гарантированный результат.** В праве не бывает гарантированных побед, бывает только грамотно оцененный риск.',
              '2) **Если стоимость называют без изучения документов и уточняющих вопросов.**',
              '3) **Если защитник небрежно относится к вашему делу или ставит под угрозу конфиденциальность.**',
            ],
          },
          {
            heading: 'Цена или ценность и первая встреча',
            body: [
              'Гонорар может быть почасовым, фиксированным или в виде ежемесячной абонентской платы. В любом случае запросите письменную смету и уточните, что в нее входит, а что нет. Дешевый юрист обходится дорого, если позже выясняется, что пропущен процессуальный срок или выбрана неподходящая организационно-правовая форма (см. [Закон о предпринимателях](https://matsne.gov.ge/document/view/5230186?publication=12)).',
              'Возьмите на консультацию документы и подготовьте три вопроса: какие риски видит юрист, какие есть варианты и сколько стоит каждый. Если ответ получился общим и расплывчатым, вы уже поняли, какое сотрудничество вас ждет.',
            ],
          },
        ],
        closingTitle: 'Заключение - GLC Law Company',
        closingNote:
          '**GLC Law Company** - юридическая компания, основанная в Батуми, известная профессионализмом, результативным представительством и многолетним опытом.\n\nКомпания обладает как местной, так и международной практикой во всех ключевых отраслях права: уголовном, гражданском, корпоративном, административном, семейном и наследственном. В GLC Law Company первую беседу мы начинаем с вашей цели, а не с цены. Для консультации звоните по горячей линии: +995 599 27 77 94.',
        faq: {
          title: 'Часто задаваемые вопросы',
          items: [
            {
              question: 'Сколько стоят юридические услуги в Грузии?',
              answer: [
                'Единого тарифа нет. Цена зависит от сложности дела, сроков и модели оплаты (почасовая, фиксированная или абонентская). Запросите письменную смету.',
              ],
            },
            {
              question: 'Чем юрист отличается от адвоката?',
              answer: [
                '"Юрист" - широкое понятие, охватывающее любого специалиста с юридическим образованием. Адвокат имеет статус адвоката и состоит в [Ассоциации адвокатов Грузии](https://www.gcba.org.ge/). Кто нужен вам, зависит от типа дела.',
              ],
            },
            {
              question: 'Можно ли проверить прошлые результаты компании?',
              answer: [
                'Дела клиентов конфиденциальны, поэтому компания не вправе их раскрывать. Опубликованная судебная практика, в том числе на сайте [Верховного суда](https://www.supremecourt.ge/), поможет понять, как суды рассуждают по похожим делам.',
              ],
            },
            {
              question: 'Что должен содержать договор на юридические услуги?',
              answer: [
                'Объем услуг, гонорар и порядок оплаты, распределение расходов, сроки, конфиденциальность и условия расторжения.',
              ],
            },
            {
              question: 'Можно ли сменить юриста после начала работы?',
              answer: [
                'Как правило, да, но нужно соблюсти порядок расторжения, предусмотренный договором, и оплатить уже выполненную работу. Бывший адвокат обязан незамедлительно передать все материалы дела новому адвокату.',
              ],
            },
            {
              question: 'Защищена ли моя информация?',
              answer: [
                'Профессиональная тайна адвоката защищена законом, а ее нарушение влечет дисциплинарную ответственность вплоть до приостановления или прекращения лицензии. Условие о конфиденциальности также стоит закрепить в договоре.',
              ],
            },
            {
              question: 'Когда выгоден постоянный юридический аутсорсинг?',
              answer: [
                'Когда бизнесу регулярно нужны договоры, кадровое оформление или [налоговое](https://www.rs.ge/) соответствие. Тогда абонентская модель часто предсказуемее, чем оплата каждого вопроса отдельно.',
              ],
            },
          ],
        },
      },
      TUR: {
        intro:
          "Avukatı çoğu zaman sorun kapıya dayandığında ararız: dava dilekçesi geldi, sözleşme yarın imzalanacak ya da iş yabancı bir ortakla başlıyor. Böyle anlarda seçimi ya bir tanıdığın tavsiyesine ya da en düşük fiyata göre yaparız.\n\nBazen işe yarar; bazen de kötü yazılmış tek bir madde, iyi bir avukatın ücretinden çok daha pahalıya patlar. Bu nedenle ihtiyaç anında hangi hukuk şirketine başvuracağınızı önceden bilmeniz gerekir.",
        sections: [
          {
            heading: 'Önce kendi ihtiyacınızı belirleyin',
            body: [
              'Bir şirket seçmeden önce iki soruyu yanıtlayın: Dava takibine mi yoksa işinizin hukuki yapılandırmasına mı ihtiyacınız var? Tek seferlik bir konu mu, sürekli destek mi? Hukuk pratiği tek tip değildir.',
              'Mahkemede deneyimli bir avukat, kurumsal bir işlem için otomatik olarak en iyi seçim sayılmaz; bu yüzden önce sektörel uzmanlığa, sonra fiyata bakın.',
            ],
          },
          {
            heading: 'Nelere dikkat etmelisiniz',
            body: [
              'Gürcistan’da bir hukuk şirketi veya avukat seçerken şu temel kriterleri kontrol edin:',
            ],
            listItems: [
              '1) **Benzer işlerdeki deneyim -** Kaç benzer dosya yürüttüklerini ve sizin dosyanızda tam olarak kimin çalışacağını sorun.',
              '2) **Statü ve kayıt -** Bir avukat tutuyorsanız üyeliği [Gürcistan Barolar Birliği](https://www.gcba.org.ge/) sitesinden doğrulayın; şirket bilgilerini ise [kamu sicilinde](https://napr.gov.ge/) arayın.',
              '3) **Yazılı sözleşme -** [Medeni Kanun](https://matsne.gov.ge/ka/document/view/31702) çerçevesinde hizmetin kapsamı, ücret ve süreler üzerinde serbestçe anlaşabilirsiniz; ancak hepsi yazılı olmalıdır.',
              '4) **İletişim -** İyi bir avukat soruları yanıtsız bırakmaz ve karmaşık konuları sade bir dille anlatır.',
              "5) **Dil ve uluslararası deneyim -** Yabancı bir ortağınız ya da yatırımcınız varsa şirket, [Gürcistan'ın yatırım ortamını](https://www.investingeorgia.org/) ve yerel kuralları iki dilde açıklayabilmelidir.",
            ],
          },
          {
            heading: 'Kırmızı bayraklar',
            body: [
              'Görüşme sırasında aşağıdaki uyarı işaretlerinden biriyle karşılaşırsanız iletişimi hemen durdurun:',
            ],
            listItems: [
              '1) **Garantili sonuç vaat ediliyorsa iletişimi hemen kesin.** Hukukta garantili galibiyet yoktur; yalnızca iyi değerlendirilmiş risk vardır.',
              '2) **Belgeleriniz incelenmeden ve kapsam değerlendirilmeden ücret belirleniyorsa dikkatli olun.**',
              '3) **Dosyanıza özensiz yaklaşılıyor veya gizliliğiniz riske atılıyorsa hemen başka bir uzmanla çalışın.**',
            ],
          },
          {
            heading: 'Fiyat mı, değer mi ve ilk görüşme',
            body: [
              'Ücret saatlik, sabit ya da aylık abonelik şeklinde olabilir. Her durumda yazılı bir maliyet tahmini isteyin ve nelerin dahil, nelerin hariç olduğunu öğrenin. Ucuz avukat, sonradan usul süresinin kaçırıldığı ya da işinize uygun olmayan bir şirket türünün seçildiği anlaşılırsa pahalıya mal olur ([Girişimciler Kanunu](https://matsne.gov.ge/document/view/5230186?publication=12)).',
              'Görüşmeye belgelerinizi götürün ve üç soru hazırlayın: avukat hangi riskleri görüyor, hangi seçenekler var ve her birinin maliyeti ne? Yanıt genel ve belirsizse, nasıl bir iş birliğinin sizi beklediğini zaten görmüşsünüzdür.',
            ],
          },
        ],
        closingTitle: 'Sonuç - GLC Law Company',
        closingNote:
          "**GLC Law Company**, Gürcistan'ın Batum şehrinde kurulmuş olup profesyonelliği, etkili temsili ve köklü hukuk deneyimiyle tanınmaktadır.\n\nCeza, medeni, şirketler, idare, aile ve miras hukuku dahil tüm temel alanlarda yerel ve uluslararası deneyime sahip olan ekibimiz, başarınızı kendi başarısı olarak görür. İlk görüşmeye fiyatla değil, sizin hedefinizle başlıyoruz. Danışmak için +995 599 27 77 94 numarasını arayın.",
        faq: {
          title: 'Sıkça Sorulan Sorular',
          items: [
            {
              question: "Gürcistan'da hukuki hizmetlerin maliyeti nedir?",
              answer: [
                'Tek bir tarife yoktur. Fiyat, işin karmaşıklığına, sürelere ve ücretlendirme modeline (saatlik, sabit veya abonelik) bağlıdır. Yazılı bir maliyet tahmini isteyin.',
              ],
            },
            {
              question: 'Hukukçu ile avukat arasındaki fark nedir?',
              answer: [
                '"Hukukçu", hukuk eğitimi almış herkesi kapsayan geniş bir kavramdır. Avukat ise avukatlık statüsüne sahiptir ve [Gürcistan Barolar Birliği](https://www.gcba.org.ge/) üyesidir. Hangisine ihtiyacınız olduğu davanın türüne bağlıdır.',
              ],
            },
            {
              question: 'Bir şirketin geçmiş sonuçlarını kontrol edebilir miyim?',
              answer: [
                'Müvekkil dosyaları gizlidir, bu nedenle şirket bunları paylaşamaz. [Yargıtay](https://www.supremecourt.ge/) sitesi dahil yayımlanmış mahkeme içtihatları, mahkemelerin benzer davalarda nasıl değerlendirme yaptığını anlamanıza yardımcı olur.',
              ],
            },
            {
              question: 'Hizmet sözleşmesinde neler yer almalı?',
              answer: [
                'Hizmetin kapsamı, ücret ve ödeme şekli, masrafların paylaşımı, süreler, gizlilik ve sözleşmenin sona erme koşulları.',
              ],
            },
            {
              question: 'İş başladıktan sonra avukatımı değiştirebilir miyim?',
              answer: [
                'Genellikle evet; ancak sözleşmedeki fesih usulüne uymanız ve yapılmış işin bedelini ödemeniz gerekir. Önceki avukat, dosya belgelerini gecikmeksizin yeni avukata devretmekle yükümlüdür.',
              ],
            },
            {
              question: 'Bilgilerim korunuyor mu?',
              answer: [
                'Avukatın mesleki sırrı kanunla korunur ve ihlali disiplin soruşturmasına veya ruhsatın askıya alınmasına yol açabilir. Her durumda gizlilik şartını sözleşmeye de yazdırın.',
              ],
            },
            {
              question: 'Sürekli hukuki dış kaynak kullanımı ne zaman mantıklıdır?',
              answer: [
                'İşletmenizin düzenli olarak sözleşmelere, iş ilişkilerinin düzenlenmesine veya [vergi](https://www.rs.ge/) uyumuna ihtiyacı olduğunda. Bu durumda abonelik modeli, her konuyu ayrı ödemekten çoğu zaman daha öngörülebilirdir.',
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: 3,
    slug: 'drug-offences-in-georgia',
    category: 'სისხლის სამართალი',
    readTime: '6 წთ საკითხავი',
    date: {
      GEO: '2025 წლის ივლისი',
      ENG: 'July 2025',
      RUS: 'Июль 2025 г.',
      TUR: 'Temmuz 2025',
    },
    title: {
      GEO: 'ნარკოდანაშაული საქართველოში: რა უნდა ვიცოდეთ ქართულ კანონმდებლობაზე',
      ENG: 'Drug Offences in Georgia: What You Should Know About Georgian Law',
      RUS: 'Наркопреступления в Грузии: что нужно знать о грузинском законодательстве',
      TUR: "Gürcistan'da Uyuşturucu Suçları: Gürcü Hukuku Hakkında Bilmeniz Gerekenler",
    },
    seoTitle: {
      GEO: 'ნარკოდანაშაული საქართველოში: სსკ 260 და 273 მუხლები | GLC Law Company',
      ENG: 'Drug Offences in Georgia: Articles 260 & 273 Guide | GLC Law Company',
      RUS: 'Наркопреступления в Грузии: статьи 260 и 273 УК | GLC Law Company',
      TUR: "Gürcistan'da Uyuşturucu Suçları: 260 ve 273. Maddeler | GLC Law Company",
    },
    excerpt: {
      GEO: 'ნარკოტიკებთან დაკავშირებული საქმეები ხშირად ერთი შემოწმებით, ტესტით ან პატარა პაკეტით იწყება. გაიგეთ, სად გადის ზღვარი 260-ე და 273-ე მუხლებს შორის და რა შეიცვალა 2025 წელს.',
      ENG: 'Drug cases in Georgia often start with one police check, one test, or a small packet. Learn where the line sits under Articles 260 and 273 and what changed in 2025.',
      RUS: 'Дела о наркотиках в Грузии часто начинаются с одной проверки или теста. Узнайте о статьях 260 и 273 УК Грузии и об ужесточении закона в 2025 году.',
      TUR: "Gürcistan'da uyuşturucu davaları çoğu zaman tek bir kontrol veya testle başlar. 260. ve 273. maddeler arasındaki sınırı ve 2025 yılı değişikliklerini öğrenin.",
    },
    image: sisImg,
    ogImage: '/criminalhero.png',
    alt: 'Criminal law legal defense analysis on drug offences legislation in Georgia',
    author: {
      name: 'გიორგი გუბელაძე',
      role: {
        GEO: 'უფროსი პარტნიორი, ადვოკატი',
        ENG: 'Senior Partner, Attorney at Law',
        RUS: 'Старший партнер, Адвокат',
        TUR: 'Kıdemli Ortak, Avukat',
      },
      avatar: '/GUBE1.jpeg',
    },
    content: {
      GEO: {
        intro:
          'ნარკოტიკებთან დაკავშირებული საქმეები ხშირად დიდი ბრალდებით კი არა, ერთი შემოწმებით, ერთი ტესტით ან ჯიბეში ნაპოვნი პატარა პაკეტით იწყება. 2025 წელს [სისხლის სამართლის კოდექსში](https://matsne.gov.ge/ka/document/view/16426) შეტანილმა ცვლილებებმა ნარკოდანაშაულები კიდევ უფრო გაამკაცრა.',
        sections: [
          {
            heading: 'სად გადის ზღვარი',
            statuteRef: 'სსკ მუხლი 260 და მუხლი 273',
            body: [
              'ნარკოდანაშაულებთან დაკავშირებით ყველაზე აქტუალურია **260-ე** და **273-ე** მუხლები. თავის მხრივ, სასჯელი სამ რამეზეა დამოკიდებული:',
            ],
            listItems: [
              '1) **რა ნივთიერებაა?**',
              '2) **რამდენია?**',
              '3) **რისთვის ინახება?**',
            ],
            bodyAfterList: [
              'თითოეული ნივთიერებისთვის კანონი ოდენობას გრამებში ადგენს, ზოგი მძიმე ნარკოტიკისთვის კი უმცირესი ოდენობაც საკმარისია სისხლისსამართლებრივი პასუხისმგებლობისთვის.',
              'ჩვენს პრაქტიკაში ბევრია შემთხვევა, როდესაც პროკურატურამ ადამიანს ნივთიერების პირადი მოხმარებისათვის გასაღების ბრალდება წაუყენა.',
              'ეს ორი უკანასკნელი კი რადიკალურად სხვადასხვა რამეა.',
              'გასაღებად ითვლება ნებისმიერი გზით სხვისთვის გადაცემა და სასჯელი ძალიან მძიმეა, დამამძიმებელ გარემოებებში საერთოდ უვადო თავისუფლების აღკვეთამდეც კი ადის.',
            ],
          },
          {
            heading: 'რა შეიცვალა 2025 წელს',
            statuteRef: '2025 წლის 1 ივნისის და 2 ივლისის საკანონმდებლო ცვლილებები',
            body: [
              '[2 ივლისის ცვლილებით](https://matsne.gov.ge/ka/document/view/6560604/0) კანაფი და მარიხუანა სხვა ნარკოტიკების გვერდით დადგა.',
              '[მათი შეძენა, შენახვა, დამზადება და გასაღება ახლა ზოგადი წესით ისჯება](https://civil.ge/?p=689664).',
              'ამავე წლის 1 ივნისიდან კი [მოხმარების დადასტურება ან ნარკოლოგიურ შემოწმებაზე უარი სამი წლით მართვის უფლების ჩამორთმევას იწვევს](https://jam-news.net/ge/marikhuanis-da-kanafis-regulacia/).',
            ],
          },
        ],
        faq: {
          title: 'ხშირად დასმული შეკითხვები',
          items: [
            {
              question: 'რა მემუქრება, თუ პირველად დამაკავებენ მოხმარებისთვის?',
              answer: [
                'როგორც წესი, ადმინისტრაციული სახდელი და არა სისხლისსამართლებრივი პასუხისმგებლობა.',
                'მაგრამ თუ იმავე ქმედებას ერთი წლის განმავლობაში გაიმეორებთ, ის უკვე დანაშაულია.',
                '2025 წელს ამასთან დაკავშირებით შეიცვალა [ადმინისტრაციულ სამართალდარღვევათა კოდექსიც](https://www.matsne.gov.ge/ka/document/view/6560332).',
              ],
            },
            {
              question: 'შეიძლება ნარკოლოგიურ შემოწმებაზე უარის თქმა?',
              answer: [
                'პოლიციის კანონიერი მოთხოვნისას უარი **დადასტურებულ მოხმარებასთან უთანაბრდება** და შედეგიც მძიმეა. ამიტომ ჯერ იკითხეთ, რა საფუძვლით გთხოვენ შემოწმებას, შემდეგ დაუყოვნებლივ მოგვმართეთ დახმარებისათვის.',
              ],
            },
            {
              question: 'რა შეზღუდვები მოჰყვება ძირითად სასჯელს?',
              answer: [
                'ძირითადი სასჯელის გარდა შეიძლება შეგეზღუდოთ მართვის უფლება, მუშაობა საჯარო სამსახურში, საგანმანათლებლო, სამედიცინო და ფარმაცევტულ სფეროში, იარაღის ფლობა.',
                'სასამართლოს სავალდებულო მკურნალობის დანიშვნაც შეუძლია.',
              ],
            },
            {
              question: 'მარიხუანის მოხმარება ახლა დანაშაულია?',
              answer: [
                'პარლამენტში განაცხადეს, რომ [მოხმარების წესები უცვლელია](https://civil.ge/?p=689664). თუმცა შეძენა და შენახვა, რაც მოხმარებას თითქმის აუცილებლად უსწრებს, ახლა ზოგადი წესით ისჯება, ამიტომ ზღვარი თითქმის არ არსებობს.',
                'კონკრეტული ქმედების კვალიფიკაცია გარემოებებზეა დამოკიდებული, ამიტომ ნებისმიერ შემთხვევაში დაგვიკავშირდით კონსულტაციისთვის.',
              ],
            },
          ],
        },
        closingNote:
          '**GLC Law Company**-ის იურიდიული გუნდი სისხლის სამართლის საქმეებს ათწლეულებია უძღვება. ჩვენი გამოცდილება და პრაქტიკა არის თქვენი წარმატების გასაღები. ჩვენ ვუზრუნველყოფთ თქვენს ეფექტურ დაცვას დაკავების პირველივე წუთებიდან სასამართლოში კვალიფიციურ წარმომადგენლობამდე.',
      },
      ENG: {
        intro:
          'Drug cases in Georgia rarely begin with a dramatic accusation. More often it is one police check, one test, or a small packet found in a pocket. That is why it pays to know where the line is drawn before you need to. Amendments to the [Criminal Code](https://matsne.gov.ge/en/document/view/16426) in summer 2025 made an already strict picture stricter.',
        sections: [
          {
            heading: 'Where the line is drawn',
            statuteRef: 'Criminal Code, Articles 260 and 273',
            body: [
              'The core rules sit in **Articles 260 and 273**. Punishment depends on three things:',
            ],
            listItems: [
              '1) **Which substance is it?**',
              '2) **How much is involved?**',
              '3) **What was it kept for?**',
            ],
            bodyAfterList: [
              'The law sets quantities in grams for each substance, and for some hard drugs even a tiny amount is enough for criminal liability.',
              'In our practice, prosecutors frequently bring sale charges even in cases involving a substance kept for personal use. Possession for personal use and sale are entirely different acts.',
              'Sale means handing a substance to anyone in any way, including leaving it in a hiding spot for pickup, and it carries the heaviest penalties, up to life imprisonment in aggravated cases.',
            ],
          },
          {
            heading: 'What changed in 2025',
            statuteRef: 'Amendments of 1 June and 2 July 2025',
            body: [
              'The [amendment of 2 July](https://matsne.gov.ge/ka/document/view/6560604/0) put cannabis and marijuana alongside other drugs: [buying, keeping, producing and selling them is now punished under the general rules](https://civil.ge/?p=689664).',
              'And since 1 June, [a confirmed positive test, or refusing a drug test, costs you your driving licence for three years](https://jam-news.net/ge/marikhuanis-da-kanafis-regulacia/).',
            ],
          },
        ],
        faq: {
          title: 'Questions and answers',
          items: [
            {
              question: 'What happens if I am detained for personal use for the first time?',
              answer: [
                'As a rule, an administrative penalty rather than a criminal case.',
                'But repeating the same act within a year makes it a crime. The [Code of Administrative Offences](https://www.matsne.gov.ge/ka/document/view/6560332) was also amended in 2025.',
              ],
            },
            {
              question: 'Can I refuse a drug test?',
              answer: [
                'When the police request is lawful, **refusing is treated the same as a confirmed positive**, with the same consequences. So first ask on what grounds you are being tested, and call a lawyer immediately.',
              ],
            },
            {
              question: 'What restrictions follow a conviction?',
              answer: [
                'Besides the main sentence, you may lose the right to drive, to work in the civil service, education, healthcare and pharmacy, and to own weapons.',
                'The court can also order mandatory treatment.',
              ],
            },
            {
              question: 'Is cannabis use now a crime?',
              answer: [
                'Parliament said [the rules on consumption are unchanged](https://civil.ge/?p=689664). But buying and keeping it, which almost always comes before use, is now punished under the general rules, so the line is very thin.',
                'How an act is classified depends on the circumstances, so talk to a lawyer before giving a statement or signing a protocol.',
              ],
            },
          ],
        },
        closingNote:
          'The lawyers of **GLC Law Company** handle criminal cases from Batumi. The key is to have a lawyer from the first minutes of detention. For a consultation call +995 599 27 77 74. If you cannot afford a lawyer, contact the [Legal Aid Service](https://www.legalaid.ge). This article is general information, not legal advice.',
      },
      RUS: {
        intro:
          'Дела о наркотиках в Грузии редко начинаются с громкого обвинения. Чаще это одна проверка, один тест или небольшой сверток в кармане. Поэтому границу лучше знать заранее. Поправки к [Уголовному кодексу](https://matsne.gov.ge/en/document/view/16426), принятые летом 2025 года, сделали и без того жесткую картину еще жестче.',
        sections: [
          {
            heading: 'Где проходит граница',
            statuteRef: 'УК Грузии, статьи 260 и 273',
            body: [
              'Основные правила содержатся в **статьях 260 и 273**. Наказание зависит от трех факторов:',
            ],
            listItems: [
              '1) **Какое это вещество?**',
              '2) **В каком количестве?**',
              '3) **Для чего оно хранится?**',
            ],
            bodyAfterList: [
              'Закон устанавливает количества в граммах для каждого вещества, а для некоторых тяжелых наркотиков уголовная ответственность наступает даже при минимальном количестве.',
              'В нашей практике немало случаев, когда обвинение предъявлялось за сбыт при хранении для личного потребления. Хранение для личного потребления и сбыт - принципиально разные деяния.',
              'Сбытом считается передача вещества другому лицу любым способом, в том числе через "закладку", и наказание за него самое строгое, вплоть до пожизненного лишения свободы при отягчающих обстоятельствах.',
            ],
          },
          {
            heading: 'Что изменилось в 2025 году',
            statuteRef: 'Поправки от 1 июня и 2 июля 2025 года',
            body: [
              '[Поправка от 2 июля](https://matsne.gov.ge/ka/document/view/6560604/0) поставила каннабис и марихуану в один ряд с другими наркотиками: [их приобретение, хранение, изготовление и сбыт теперь наказываются по общим правилам](https://civil.ge/?p=689664).',
              'А с 1 июня [подтвержденное употребление или отказ от наркологической проверки влечет лишение водительских прав на три года](https://jam-news.net/ge/marikhuanis-da-kanafis-regulacia/).',
            ],
          },
        ],
        faq: {
          title: 'Вопросы и ответы',
          items: [
            {
              question: 'Что грозит, если меня впервые задержат за употребление?',
              answer: [
                'Как правило, административное взыскание, а не уголовное дело.',
                'Но если в течение года вы повторите то же деяние, оно станет преступлением. В 2025 году изменился и [Кодекс об административных правонарушениях](https://www.matsne.gov.ge/ka/document/view/6560332).',
              ],
            },
            {
              question: 'Можно ли отказаться от наркологической проверки?',
              answer: [
                'При законном требовании полиции **отказ приравнивается к подтвержденному употреблению**, и последствия те же. Поэтому сначала спросите, на каком основании вас просят пройти проверку, и сразу позвоните адвокату.',
              ],
            },
            {
              question: 'Какие ограничения следуют за приговором?',
              answer: [
                'Помимо основного наказания могут ограничить право управлять транспортом, работать на госслужбе, в образовании, медицине и фармацевтике, владеть оружием.',
                'Суд также может назначить лечение.',
              ],
            },
            {
              question: 'Является ли употребление марихуаны теперь преступлением?',
              answer: [
                'В парламенте заявили, что [правила об употреблении не менялись](https://civil.ge/?p=689664). Но приобретение и хранение, которые почти всегда предшествуют употреблению, теперь наказываются по общим правилам, так что грань очень тонкая.',
                'Квалификация зависит от обстоятельств, поэтому сначала поговорите с адвокатом, а потом давайте показания или подписывайте протокол.',
              ],
            },
          ],
        },
        closingNote:
          'Адвокаты **GLC Law Company** ведут уголовные дела из Батуми. Главное - пригласить адвоката с первых минут задержания. Для консультации звоните: +995 599 27 77 74. Если нанять адвоката нет возможности, обратитесь в [Службу юридической помощи](https://www.legalaid.ge). Статья носит общий информационный характер и не заменяет консультацию юриста.',
      },
      TUR: {
        intro:
          "Gürcistan'da uyuşturucu davaları nadiren büyük bir suçlamayla başlar. Çoğu zaman tek bir kontrol, tek bir test ya da cebinizde bulunan küçük bir paket yeter. Bu yüzden sınırın nerede çizildiğini önceden bilmekte fayda var. 2025 yazında [Ceza Kanunu](https://matsne.gov.ge/en/document/view/16426)'nda yapılan değişiklikler, zaten sıkı olan tabloyu daha da sertleştirdi.",
        sections: [
          {
            heading: 'Sınır nerede çiziliyor',
            statuteRef: 'Gürcistan Ceza Kanunu, 260. ve 273. Maddeler',
            body: [
              'Temel kurallar **260. ve 273. maddelerde** yer alır. Ceza üç şeye bağlıdır:',
            ],
            listItems: [
              '1) **Maddenin türü nedir?**',
              '2) **Miktarı ne kadardır?**',
              '3) **Ne amaçla bulundurulmaktadır?**',
            ],
            bodyAfterList: [
              'Kanun her madde için miktarı gram cinsinden belirler; bazı ağır uyuşturucularda en küçük miktar bile cezai sorumluluk için yeterlidir.',
              'Uygulamamızda kişisel kullanım amacıyla bulundurulan maddeler için satış suçlaması yöneltilen pek çok dosya bulunmaktadır. Kişisel kullanım amacıyla bulundurma ile satış tamamen farklı fiillerdir.',
              'Satış, maddeyi başkasına herhangi bir yolla vermek demektir; gizli bir noktaya bırakmak da buna dahildir. En ağır ceza bunun için öngörülür ve ağırlaştırıcı hallerde ömür boyu hapse kadar çıkar.',
            ],
          },
          {
            heading: "2025'te ne değişti",
            statuteRef: '1 Haziran ve 2 Temmuz 2025 Değişiklikleri',
            body: [
              '[2 Temmuz tarihli değişiklik](https://matsne.gov.ge/ka/document/view/6560604/0) kenevir ve marihuanayı diğer uyuşturucularla aynı sıraya koydu: [bunların satın alınması, bulundurulması, üretilmesi ve satılması artık genel kurallara göre cezalandırılıyor](https://civil.ge/?p=689664).',
              '1 Haziran itibarıyla da [kullanımın doğrulanması ya da uyuşturucu testinin reddi, ehliyetin üç yıl süreyle alınmasına yol açıyor](https://jam-news.net/ge/marikhuanis-da-kanafis-regulacia/).',
            ],
          },
        ],
        faq: {
          title: 'Sıkça sorulan sorular',
          items: [
            {
              question: 'İlk kez kullanım nedeniyle gözaltına alınırsam ne olur?',
              answer: [
                'Kural olarak ceza davası değil, idari yaptırım uygulanır.',
                'Ancak bir yıl içinde aynı fiili tekrarlarsanız artık suç sayılır. 2025 yılında [İdari Suçlar Kanunu](https://www.matsne.gov.ge/ka/document/view/6560332) da değişti.',
              ],
            },
            {
              question: 'Uyuşturucu testini reddedebilir miyim?',
              answer: [
                'Polisin yasal talebi karşısında **ret, kullanımın doğrulanmasıyla aynı sayılır** ve sonuçlar aynıdır. Bu yüzden önce testin hangi gerekçeyle istendiğini sorun ve hemen bir avukat arayın.',
              ],
            },
            {
              question: 'Mahkumiyetten sonra hangi kısıtlamalar gelir?',
              answer: [
                'Asıl cezaya ek olarak araç kullanma, kamu görevi, eğitim, sağlık ve eczacılık alanlarında çalışma ile silah bulundurma hakları kısıtlanabilir.',
                'Mahkeme tedavi de kararlaştırabilir.',
              ],
            },
            {
              question: 'Kenevir kullanımı artık suç mu?',
              answer: [
                'Parlamentoda [tüketime ilişkin kuralların değişmediği](https://civil.ge/?p=689664) belirtildi. Ancak kullanımdan neredeyse her zaman önce gelen satın alma ve bulundurma artık genel kurallara göre cezalandırılıyor; yani sınır çok ince.',
                'Fiilin nasıl nitelendirileceği somut duruma bağlıdır, bu yüzden ifade vermeden ya da tutanak imzalamadan önce bir avukatla konuşun.',
              ],
            },
          ],
        },
        closingNote:
          "**GLC Law Company** avukatları ceza davalarına Batum'dan bakıyor. En önemlisi, gözaltının ilk dakikalarından itibaren yanınızda bir avukat olmasıdır. Danışmak için +995 599 27 77 74 numarasını arayın. Avukat tutamıyorsanız [Hukuki Yardım Servisi](https://www.legalaid.ge) sayfasına başvurabilirsiniz. Bu yazı genel bilgi niteliğindedir, hukuki tavsiye yerine geçmez.",
      },
    },
  },
  {
    id: 4,
    slug: 'grave-bodily-harm-charge-defendant-released',
    category: 'სისხლის სამართალი',
    readTime: '4 წთ საკითხავი',
    publishedDate: '2026-11-26',
    schemaType: 'NewsArticle',
    date: {
      GEO: '2026 წლის ნოემბერი',
      ENG: 'November 2026',
      RUS: 'Ноябрь 2026 г.',
      TUR: 'Kasım 2026',
    },
    title: {
      GEO: 'ჯანმრთელობის განზრახ მძიმე დაზიანებაზე ბრალდებული ოთხთვიანი პატიმრობის შემდეგ სასამართლო დარბაზიდან გათავისუფლდა',
      ENG: 'Defendant Charged With Intentional Grave Bodily Harm Walks Out of Court After Four Months in Detention',
      RUS: 'Обвиняемого в умышленном тяжком вреде здоровью освободили из зала суда после четырёх месяцев под стражей',
      TUR: 'Kasten Ağır Yaralama ile Suçlanan Sanık, Dört Aylık Tutukluluğun Ardından Duruşma Salonundan Serbest Bırakıldı',
    },
    seoTitle: {
      GEO: 'ჯანმრთელობის მძიმე დაზიანება: ბრალდებული გათავისუფლდა | GLC Law Company',
      ENG: 'Grave Bodily Harm Charge: Defendant Released From Court | GLC Law Company',
      RUS: 'Тяжкий вред здоровью: обвиняемый освобождён из зала суда | GLC Law Company',
      TUR: 'Kasten Ağır Yaralama: Sanık Duruşma Salonundan Serbest Bırakıldı | GLC Law Company',
    },
    excerpt: {
      GEO: 'ოთხთვიანი პატიმრობის შემდეგ ჯანმრთელობის განზრახ მძიმე დაზიანებაზე ბრალდებული პირი დარბაზიდან გათავისუფლდა. რა გადაწყვიტა საქმის შედეგი და რას უნდა მიექცეს ყურადღება ბრალდებისას.',
      ENG: 'After four months in pretrial detention, a defendant charged with intentional grave bodily harm was released from the courtroom. See what decided the case outcome.',
      RUS: 'После четырёх месяцев под стражей обвиняемый в умышленном тяжком вреде здоровью был освобождён из зала суда. Что определило исход дела и на что обратить внимание защите.',
      TUR: 'Dört aylık tutukluluğun ardından kasten ağır yaralama ile suçlanan sanık duruşma salonundan serbest bırakıldı. Davanın sonucunu belirleyen unsurlar ve savunma süreci.',
    },
    image: '/CRIM.jpg',
    ogImage: '/CRIM.jpg',
    fallbackImage: '/criminalhero.png',
    alt: 'Courtroom defense and release after four months in detention - GLC Law Company Criminal Defense',
    author: {
      name: 'გიორგი გუბელაძე',
      role: {
        GEO: 'უფროსი პარტნიორი, ადვოკატი',
        ENG: 'Senior Partner, Attorney at Law',
        RUS: 'Старший партнер, Адвокат',
        TUR: 'Kıdemli Ortak, Avukat',
      },
      avatar: '/GUBE1.jpeg',
    },
    content: {
      GEO: {
        intro:
          'ჯანმრთელობის განზრახ მძიმე დაზიანების მუხლით ბრალდებული პირი, რომელსაც ბრალდების დადგენილების მიხედვით **ოთხიდან შვიდ წლამდე თავისუფლების აღკვეთა ემუქრებოდა,** ოთხთვიანი პატიმრობის შემდეგ GLC Law Company-ის დახმარებით **სასამართლო დარბაზიდან გათავისუფლდა.**\n\nადვოკატ გიორგი გუბელაძის ცნობით, გადაწყვეტილების გამოცხადებისას დარბაზში ტაში გაისმა, ბრალდებულს კი სასამართლოსთან ოჯახი და ახლობლები ელოდნენ.',
        sections: [
          {
            heading: 'რა იყო ბრალდება და რა ემუქრებოდა პირს',
            statuteRef: 'საქართველოს სისხლის სამართლის კოდექსი, მუხლი 117',
            body: [
              'ბრალდება [სისხლის სამართლის კოდექსის](https://matsne.gov.ge/ka/document/view/16426) იმ მუხლს ემყარებოდა, რომელიც **ჯანმრთელობის განზრახ მძიმე დაზიანებას სჯის,** და დადგენილების თანახმად სასჯელის ზომა ოთხიდან შვიდ წლამდე თავისუფლების აღკვეთას შეადგენდა, ხოლო ბრალდებული მთელი ეს დრო, ოთხი თვის განმავლობაში, პატიმრობაში იმყოფებოდა.',
            ],
          },
          {
            heading: 'რამ განსაზღვრა საქმის შედეგი',
            statuteRef: 'მტკიცებულებათა შეფასება და ფაქტობრივი წინაპირობა',
            body: [
              'ადვოკატის შეფასებით, საქმეში გადამწყვეტი აღმოჩნდა მომხდარის წინაპირობა, ანუ ის, რაც დაზიანებას წინ უსწრებდა, და დაცვის მხარე ამ გარემოებებს თანმიმდევრულად მტკიცებულებებით ადასტურებდა მაშინაც, როცა დარბაზი ბრალდებულის მიმართ თავიდან უარყოფითად იყო განწყობილი. ჩვენი წამყვანი ადვოკატის თქმით, ეს იყო საქმე, სადაც კანონი და მორალი ერთმანეთს დაეჯახა და ბოლოს სამართლიანობამ გაიმარჯვა.',
              'გაეცანით ასევე ჩვენს [სისხლის სამართლის დაცვის პრაქტიკას](/practice-areas/criminal-defense) და წაიკითხეთ ჩვენი პრაქტიკული გზამკვლევი [ნარკოდანაშაულის საქმეებზე საქართველოში](/blogs/drug-offences-in-georgia).',
            ],
          },
        ],
        faq: {
          title: 'ხშირად დასმული კითხვები',
          items: [
            {
              question: 'რას ნიშნავს ჯანმრთელობის განზრახ მძიმე დაზიანება?',
              answer: [
                'ეს სისხლის სამართლის კოდექსით გათვალისწინებული დანაშაულია, სადაც კვალიფიკაციას დაზიანების სიმძიმის და განზრახვის არსებობა განსაზღვრავს, ამიტომ პრაქტიკაში გადამწყვეტია სასამართლო-სამედიცინო ექსპერტიზის დასკვნა და საქმის კონკრეტული გარემოებები.',
              ],
            },
            {
              question: 'რატომ აქვს მნიშვნელობა მომხდარის წინაპირობას?',
              answer: [
                'ერთი და იგივე ქმედება სხვადასხვაგვარად შეიძლება შეფასდეს იმის მიხედვით, რა მოხდა მანამდე, მაგალითად, როცა პირი თავდასხმისგან იცავდა თავს, ამიტომ სასამართლო ქმედებას მთლიანი კონტექსტის გათვალისწინებით აფასებს.',
              ],
            },
            {
              question: 'როგორ აგროვებს ადვოკატი მტკიცებულებებს?',
              answer: [
                'დაცვის მხარე ეძებს მოწმეებს, ვიდეოჩანაწერებს, სამედიცინო დოკუმენტაციას და სხვა მასალას, რომელიც ბრალდების ვერსიას უპირისპირდება, და რაც უფრო ადრე ჩაერთვება ადვოკატი, მით უფრო დიდია შანსი, რომ მტკიცებულება არ დაიკარგოს.',
              ],
            },
            {
              question: 'შეიძლება თუ არა პატიმრობიდან პირის გამოყვანა?',
              answer: [
                'პატიმრობა აღკვეთის ყველაზე მკაცრი ღონისძიებაა და მისი კანონიერება სასამართლოში შეიძლება გასაჩივრდეს ან მოთხოვნილ იქნეს შედარებით მსუბუქი აღკვეთის ღონისძიების გამოყენება პატიმრობის ნაცვლად. ზუსტ პროცედურასა და ვადებს [სისხლის სამართლის საპროცესო კოდექსი](https://matsne.gov.ge/ka/document/view/90034) ადგენს.',
              ],
            },
          ],
        },
        closingNote:
          '**GLC Law Company** ბათუმში დაფუძნებული წამყვანი იურიდიული კომპანიაა, რომელსაც [სისხლის სამართლის მიმართულებით](/practice-areas/criminal-defense) ათწლეულების გამოცდილება გააჩნია.\n\nთუ თქვენ ან თქვენს ახლობელს ბრალი წაგიყენეს, დაგვირეკეთ ცხელ ხაზზე: +995 599 27 77 94, ან იხილეთ ჩვენი წინა სტატია [ნარკოდანაშაულზე საქართველოში](/blogs/drug-offences-in-georgia).',
        statutorySummary:
          'წინამდებარე მასალა ატარებს ზოგად საინფორმაციო ხასიათს და არ წარმოადგენს ინდივიდუალურ იურიდიულ კონსულტაციას. თითოეული სისხლის სამართლის საქმე უნიკალურია და წარსული შედეგი არ განსაზღვრავს მომავალი საქმის შედეგს. სტატიაში მხარეთა ვინაობა და პერსონალური დეტალები დაფარულია.',
      },
      ENG: {
        intro:
          'A defendant charged with intentional grave bodily harm, who faced four to seven years in prison under the indictment, was released from the courtroom after four months in pretrial detention with the legal defense of **GLC Law Company**.\n\nAccording to defence lawyer Giorgi Gubeladze, applause broke out in the hall when the decision was announced, and the defendant’s family and relatives were waiting outside the court.',
        sections: [
          {
            heading: 'What the charge was and what was at stake',
            statuteRef: 'Criminal Code of Georgia, Article 117',
            body: [
              'The charge rested on the article of the [Criminal Code](https://matsne.gov.ge/en/document/view/16426) that punishes intentional grave bodily harm, and under the indictment the sentence ranged from four to seven years of imprisonment, while the defendant had spent all of those four months in custody.',
            ],
          },
          {
            heading: 'What decided the outcome',
            statuteRef: 'Evidentiary Context & Defense Strategy',
            body: [
              'In the lawyer’s assessment, the decisive factor was what had happened before the injury, and the defence consistently backed those circumstances with evidence even though the courtroom was initially hostile toward the defendant. As the lawyer puts it, this was a case where law and morality collide, and in the end justice prevailed.',
              'Explore our [Criminal Law & Defense Advocacy](/practice-areas/criminal-defense) practice or read our guide on [Drug Offences in Georgia](/blogs/drug-offences-in-georgia).',
            ],
          },
        ],
        faq: {
          title: 'Questions and answers',
          items: [
            {
              question: 'What does intentional grave bodily harm mean?',
              answer: [
                'It is an offence under the Criminal Code where the classification depends on the seriousness of the injury and on whether intent was present, which is why the forensic medical expert’s conclusion and the circumstances of the case weigh so heavily in practice.',
              ],
            },
            {
              question: 'Why does the background of the incident matter?',
              answer: [
                'The same act can be assessed differently depending on what came before it, for example when a person was defending himself against an attack, so the court looks at the whole context.',
              ],
            },
            {
              question: 'How does a defence lawyer gather evidence?',
              answer: [
                'The defence looks for witnesses, video recordings, medical records and other material that challenges the prosecution’s version, and the earlier a lawyer gets involved, the better the chance that evidence is not lost.',
              ],
            },
            {
              question: 'Can pretrial detention be challenged?',
              answer: [
                'Detention is the strictest preventive measure and its lawfulness can be challenged in court, with the exact procedure and time limits set by the [Criminal Procedure Code](https://matsne.gov.ge/en/document/view/90034), while the right to liberty is also protected by [Article 5 of the European Convention on Human Rights](https://www.echr.coe.int/documents/d/echr/convention_eng).',
              ],
            },
          ],
        },
        closingNote:
          '**GLC Law Company** handles [criminal defense cases](/practice-areas/criminal-defense) from Batumi and Tbilisi. If you or someone close to you has been charged, call +995 599 27 77 94, or contact the [Legal Aid Service](https://www.legalaid.ge). You can also review our previous criminal law analysis on [drug offences in Georgia](/blogs/drug-offences-in-georgia).',
        statutorySummary:
          'This text is informational and is not individual legal advice; every case is different and a past result does not determine a future one. Party identities and case details remain confidential.',
      },
      RUS: {
        intro:
          'Обвиняемого в умышленном причинении тяжкого вреда здоровью, которому по постановлению о привлечении в качестве обвиняемого грозило от четырёх до семи лет лишения свободы, освободили из зала суда после четырёх месяцев содержания под стражей при защите **GLC Law Company**.\n\nПо словам адвоката Гиорги Губеладзе, при оглашении решения в зале раздались аплодисменты, а у здания суда обвиняемого ждали семья и родственники.',
        sections: [
          {
            heading: 'В чём обвиняли и что грозило',
            statuteRef: 'Уголовный кодекс Грузии, статья 117',
            body: [
              'Обвинение основывалось на статье [Уголовного кодекса](https://matsne.gov.ge/en/document/view/16426), предусматривающей наказание за умышленное причинение тяжкого вреда здоровью, и по постановлению мера наказания составляла от четырёх до семи лет лишения свободы, при этом все эти четыре месяца обвиняемый провёл под стражей.',
            ],
          },
          {
            heading: 'Что определило исход дела',
            statuteRef: 'Оценка доказательств и предыстория дела',
            body: [
              'По оценке адвоката, решающую роль сыграла предыстория случившегося, то есть то, что предшествовало повреждению, и сторона защиты последовательно подтверждала эти обстоятельства доказательствами, хотя поначалу зал был настроен по отношению к обвиняемому негативно. По словам адвоката, это было дело, в котором закон и мораль сталкиваются, и в конце концов победила справедливость.',
              'Подробнее о нашей практике по [уголовному праву и защите в суде](/practice-areas/criminal-defense), а также в предыдущей публикации о [наркопреступлениях в Грузии](/blogs/drug-offences-in-georgia).',
            ],
          },
        ],
        faq: {
          title: 'Вопросы и ответы',
          items: [
            {
              question: 'Что означает умышленное причинение тяжкого вреда здоровью?',
              answer: [
                'Это преступление по Уголовному кодексу, квалификация которого зависит от тяжести повреждения и от наличия умысла, поэтому на практике так важны заключение судебно-медицинской экспертизы и обстоятельства дела.',
              ],
            },
            {
              question: 'Почему важна предыстория события?',
              answer: [
                'Одно и то же деяние может оцениваться по-разному в зависимости от того, что ему предшествовало, например когда человек защищался от нападения, поэтому суд рассматривает весь контекст.',
              ],
            },
            {
              question: 'Как защитник собирает доказательства?',
              answer: [
                'Защита ищет свидетелей, видеозаписи, медицинские документы и другие материалы, опровергающие версию обвинения, и чем раньше подключается адвокат, тем выше шанс, что доказательства не будут утрачены.',
              ],
            },
            {
              question: 'Можно ли обжаловать заключение под стражу?',
              answer: [
                'Заключение под стражу является самой строгой мерой пресечения, и его законность можно оспорить в суде, при этом точный порядок и сроки определяет [Уголовно-процессуальный кодекс](https://matsne.gov.ge/en/document/view/90034), а право на свободу защищает и [статья 5 Европейской конвенции по правам человека](https://www.echr.coe.int/documents/d/echr/convention_eng).',
              ],
            },
          ],
        },
        closingNote:
          'Юридическая компания **GLC Law Company** ведёт [уголовные дела](/practice-areas/criminal-defense) из Батуми и Тбилиси. Если обвинение предъявлено вам или вашему близкому, звоните: +995 599 27 77 94, или обратитесь в [Службу юридической помощи](https://www.legalaid.ge). Также ознакомьтесь с нашей статьёй о [наркопреступлениях в Грузии](/blogs/drug-offences-in-georgia).',
        statutorySummary:
          'Текст носит информационный характер и не заменяет индивидуальную юридическую консультацию, результат каждого дела уникален, а прошлый результат не определяет будущий. Имена сторон и детали дела не разглашаются.',
      },
      TUR: {
        intro:
          'İddianameye göre dört ila yedi yıl hapis cezasıyla karşı karşıya olan ve kasten ağır yaralama suçlamasıyla yargılanan sanık, **GLC Law Company** savunmasıyla dört aylık tutukluluğun ardından duruşma salonundan serbest bırakıldı.\n\nAvukat Giorgi Gubeladze’nin aktardığına göre karar açıklanırken salonda alkış koptu, mahkeme önünde ise sanığın ailesi ve yakınları onu bekliyordu.',
        sections: [
          {
            heading: 'Suçlama neydi ve ne risk altındaydı',
            statuteRef: 'Gürcistan Ceza Kanunu, 117. Madde',
            body: [
              'Suçlama, kasten ağır yaralamayı cezalandıran [Ceza Kanunu](https://matsne.gov.ge/en/document/view/16426) maddesine dayanıyordu ve iddianameye göre ceza dört ile yedi yıl hapis arasındaydı, sanık ise bu dört ayın tamamını tutuklu geçirdi.',
            ],
          },
          {
            heading: 'Sonucu ne belirledi',
            statuteRef: 'Delillerin Değerlendirilmesi ve Olayın Arka Planı',
            body: [
              'Avukatın değerlendirmesine göre davada belirleyici olan, yaralanmadan önce yaşananlardı ve savunma, salon başlangıçta sanığa karşı olumsuz bir tutum sergilese de bu koşulları delillerle tutarlı biçimde ortaya koydu. Avukata göre bu, hukukla ahlakın çarpıştığı bir davaydı ve sonunda adalet galip geldi.',
              '[Ceza Hukuku ve Dava Savunması](/practice-areas/criminal-defense) sayfamızı ve [Gürcistan’da Uyuşturucu Suçları](/blogs/drug-offences-in-georgia) başlıklı önceki makalemizi de inceleyebilirsiniz.',
            ],
          },
        ],
        faq: {
          title: 'Sıkça sorulan sorular',
          items: [
            {
              question: 'Kasten ağır yaralama ne anlama gelir?',
              answer: [
                'Ceza Kanunu’nda düzenlenen bu suçta nitelendirmeyi yaralanmanın ağırlığı ile kastın bulunup bulunmadığı belirler, bu yüzden uygulamada adli tıp raporu ve olayın koşulları büyük önem taşır.',
              ],
            },
            {
              question: 'Olayın arka planı neden önemlidir?',
              answer: [
                'Aynı fiil, öncesinde yaşananlara göre farklı değerlendirilebilir, örneğin bir kişi saldırıdan kendini koruyorsa, bu nedenle mahkeme olayı bütün bağlamıyla ele alır.',
              ],
            },
            {
              question: 'Savunma avukatı delilleri nasıl toplar?',
              answer: [
                'Savunma; tanıkları, kamera kayıtlarını, tıbbi belgeleri ve iddia makamının anlatımına karşı çıkan diğer malzemeyi arar, avukat ne kadar erken devreye girerse delillerin kaybolma ihtimali o kadar azalır.',
              ],
            },
            {
              question: 'Tutukluluğa itiraz edilebilir mi?',
              answer: [
                'Tutuklama en ağır koruma tedbiridir ve hukuka uygunluğu mahkemede tartışılabilir, kesin usul ve süreleri [Ceza Muhakemesi Kanunu](https://matsne.gov.ge/en/document/view/90034) belirler, özgürlük hakkını ise [Avrupa İnsan Hakları Sözleşmesi’nin 5. maddesi](https://www.echr.coe.int/documents/d/echr/convention_eng) da korur.',
              ],
            },
          ],
        },
        closingNote:
          '**GLC Law Company** [ceza davalarına](/practice-areas/criminal-defense) Batum ve Tiflis’ten bakıyor. Siz ya da yakınınız hakkında suçlama yöneltildiyse +995 599 27 77 94 numarasını arayın veya [Hukuki Yardım Servisi](https://www.legalaid.ge)’ne başvurun. Ayrıca [Gürcistan’da uyuşturucu suçları](/blogs/drug-offences-in-georgia) rehberimize göz atabilirsiniz.',
        statutorySummary:
          'Bu yazı bilgilendirme amaçlıdır ve bireysel hukuki tavsiye yerine geçmez, her davanın sonucu farklıdır ve geçmiş sonuç gelecekteki sonucu belirlemez. Tarafların kimlikleri ve dava detayları gizli tutulmuştur.',
      },
    },
  },
];
