export interface TestimonialCardData {
  id: number;
  name: string;
  country: string;
  role: string;
  rating: number;
  quote: string;
  seoHighlight: string;
}

export type PracticeTestimonialKey = 'criminal' | 'family' | 'real-estate' | 'corporate';

export const PRACTICE_TESTIMONIALS_DATA: Record<
  PracticeTestimonialKey,
  Record<string, TestimonialCardData[]>
> = {
  criminal: {
    GEO: [
      {
        id: 100,
        name: 'ლევან ბერიძე',
        country: 'საქართველო',
        role: 'სისხლის სამართლის დაცვის კლიენტი',
        rating: 5,
        quote:
          '„გამოძიების პირველივე საათებიდან გიორგი გუბელაძემ აიღო საქმის სრული კონტროლი, გაასაჩივრა უსაფუძვლო ბრალდება და გირაოთი გათავისუფლება მოიპოვა. ჩემი გამოცდილებით, ის არის საუკეთესო ადვოკატი ბათუმში რთული სისხლის სამართლის საქმეებისთვის.“',
        seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
      },
      {
        id: 101,
        name: 'ირაკლი თავაძე',
        country: 'საქართველო',
        role: 'კომპანიის დირექტორი',
        rating: 5,
        quote:
          '„ეკონომიკური დანაშაულის ბრალდებისას მტკიცებულებათა დეტალურმა აუდიტმა პროკურატურის პოზიცია სრულად დაშალა. GLC Law Company-მ გაგვიწია საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში და საქმე შეწყდა.“',
        seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
      },
      {
        id: 102,
        name: 'ალექსანდრე კობახიძე',
        country: 'გერმანია / საქართველო',
        role: 'კერძო პირი',
        rating: 5,
        quote:
          '„სასამართლო პროცესზე თითოეული საპროცესო დარღვევა და დაუშვებელი მტკიცებულება უზუსტესად გამოავლინეს, რამაც გამამართლებელი განაჩენი მოგვიტანა. უდავოდ, ეს არის საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში',
      },
      {
        id: 103,
        name: 'ემირ ილდირიმი',
        country: 'თურქეთი',
        role: 'საერთაშორისო ტრანსპორტის მფლობელი',
        rating: 5,
        quote:
          '„საზღვარზე შექმნილი სისხლისსამართლებრივი ინციდენტის დროს ღამის საათებშივე ჩაერთვნენ დაკითხვაზე და დაიცვეს ჩემი თავისუფლება. გიორგი ნამდვილად არის საუკეთესო ადვოკატი ბათუმში გადაუდებელი დაცვისთვის.“',
        seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
      },
      {
        id: 104,
        name: 'მარიამ ჯაფარიძე',
        country: 'საქართველო',
        role: 'ოჯახის წარმომადგენელი',
        rating: 5,
        quote:
          '„მძიმე აღკვეთის ღონისძიების შეცვლა და სააპელაციო ინსტანციაში სამართლიანი შედეგის მიღწევა მხოლოდ GLC-ის სტრატეგიით გახდა შესაძლებელი. ეს არის საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში',
      },
    ],
    ENG: [
      {
        id: 100,
        name: 'Levan Beridze',
        country: 'Georgia',
        role: 'Criminal Defense Client',
        rating: 5,
        quote:
          '"From the very first hour of investigation, Giorgi took command of the file, challenged unlawful charges, and secured bail release. For high-stakes defense, he is truly the best lawyer in Batumi."',
        seoHighlight: 'best lawyer in Batumi',
      },
      {
        id: 101,
        name: 'Irakli Tavadze',
        country: 'Georgia',
        role: 'Corporate Executive',
        rating: 5,
        quote:
          '"Facing complex financial crime allegations, their forensic evidence audit dismantled the prosecution theory completely. They delivered the top legal services in the Batumi region and Georgia until charges were dropped."',
        seoHighlight: 'top legal services in the Batumi region and Georgia',
      },
      {
        id: 102,
        name: 'Alexander Kobakhidze',
        country: 'Germany',
        role: 'Private Client',
        rating: 5,
        quote:
          '"Every procedural violation and inadmissible piece of evidence was exposed in open court, resulting in full acquittal. GLC Law Company is clearly the best law firm in Batumi and all Georgia."',
        seoHighlight: 'best law firm in Batumi and all Georgia',
      },
      {
        id: 103,
        name: 'Emir Yildirim',
        country: 'Turkey',
        role: 'Logistics Fleet Owner',
        rating: 5,
        quote:
          '"When an urgent border criminal inquiry arose overnight, Giorgi attended questioning immediately and protected my liberty. He is unequivocally the best attorney in Batumi for emergency criminal counsel."',
        seoHighlight: 'best attorney in Batumi',
      },
      {
        id: 104,
        name: 'Mariam Japaridze',
        country: 'Georgia',
        role: 'Family Representative',
        rating: 5,
        quote:
          '"Overturning pre-trial detention and prevailing on appeal was only possible through their courtroom discipline. GLC provides the best legal services in Batumi and Georgia."',
        seoHighlight: 'best legal services in Batumi and Georgia',
      },
    ],
    RUS: [
      {
        id: 100,
        name: 'Леван Беридзе',
        country: 'Грузия',
        role: 'Клиент по уголовной защите',
        rating: 5,
        quote:
          '«С первых часов следствия Георгий Губеладзе взял дело под полный контроль, оспорил необоснованное обвинение и добился освобождения под залог. Он однозначно лучший адвокат в Батуми.»',
        seoHighlight: 'лучший адвокат в Батуми',
      },
      {
        id: 101,
        name: 'Ираклий Тавадзе',
        country: 'Грузия',
        role: 'Директор компании',
        rating: 5,
        quote:
          '«При обвинении в экономическом преступлении аудит доказательств полностью разрушил позицию обвинения. Нам предоставили лучшие юридические услуги в Батуми и Грузии, и дело было прекращено.»',
        seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
      },
      {
        id: 102,
        name: 'Александр Кобахидзе',
        country: 'Германия',
        role: 'Частный клиент',
        rating: 5,
        quote:
          '«Каждое процессуальное нарушение было точно зафиксировано в суде, что привело к оправдательному приговору. GLC Law Company — лучшая юридическая компания в Батуми и всей Грузии.»',
        seoHighlight: 'лучшая юридическая компания в Батуми и всей Грузии',
      },
      {
        id: 103,
        name: 'Эмир Йылдырым',
        country: 'Турция',
        role: 'Владелец логистики',
        rating: 5,
        quote:
          '«При срочном задержании адвокат прибыл на допрос ночью и защитил мои права с первой минуты. Георгий — лучший адвокат в Батуми для экстренной уголовной защиты.»',
        seoHighlight: 'лучший адвокат в Батуми',
      },
      {
        id: 104,
        name: 'Мариам Джапаридзе',
        country: 'Грузия',
        role: 'Представитель семьи',
        rating: 5,
        quote:
          '«Отмена ареста и победа в апелляционной инстанции стали реальностью благодаря их стратегии. Это лучшая юридическая компания в Батуми и всей Грузии.»',
        seoHighlight: 'лучшая юридическая компания в Батуми и всей Грузии',
      },
    ],
    TUR: [
      {
        id: 100,
        name: 'Levan Beridze',
        country: 'Gürcistan',
        role: 'Ceza Savunma Müvekkili',
        rating: 5,
        quote:
          '"Soruşturmanın ilk saatinden itibaren Giorgi dosyayı devraldı, haksız suçlamalara itiraz etti ve kefaletle tahliye sağladı. Ceza hukukunda şüphesiz Batum\'daki en iyi avukat."',
        seoHighlight: "Batum'daki en iyi avukat",
      },
      {
        id: 101,
        name: 'İrakli Tavadze',
        country: 'Gürcistan',
        role: 'Şirket Yöneticisi',
        rating: 5,
        quote:
          '"Ekonomik suç isnadında yürütülen delil denetimi iddianameyi çürüttü ve takipsizlik kararı alındı. Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler ile özgürlüğümüz korundu."',
        seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
      },
      {
        id: 102,
        name: 'Alexander Kobakhidze',
        country: 'Almanya',
        role: 'Özel Müvekkil',
        rating: 5,
        quote:
          '"Duruşmadaki her usul hatasını ustalıkla ortaya çıkararak beraat kararı almamızı sağladılar. GLC Law Company kesinlikle Batum ve tüm Gürcistan\'daki en iyi hukuk bürosu."',
        seoHighlight: "Batum ve tüm Gürcistan'daki en iyi hukuk bürosu",
      },
      {
        id: 103,
        name: 'Emir Yıldırım',
        country: 'Türkiye',
        role: 'Lojistik İşletmecisi',
        rating: 5,
        quote:
          '"Sınırda yaşanan acil soruşturmada gece yarısı ifadeye katılarak haklarımı eksiksiz savundu. Acil ceza savunması için kesinlikle Batum\'daki en iyi avukat."',
        seoHighlight: "Batum'daki en iyi avukat",
      },
      {
        id: 104,
        name: 'Mariam Japaridze',
        country: 'Gürcistan',
        role: 'Aile Temsilcisi',
        rating: 5,
        quote:
          '"Tutukluluk kararının kaldırılması ve istinafta kazanılan zafer yalnızca onların titiz savunmasıyla mümkün oldu. Batum ve tüm Gürcistan\'daki en iyi hukuk bürosu."',
        seoHighlight: "Batum ve tüm Gürcistan'daki en iyi hukuk bürosu",
      },
    ],
  },

  family: {
    GEO: [
      {
        id: 200,
        name: 'ნინო კალანდაძე',
        country: 'საქართველო',
        role: 'საოჯახო დავის კლიენტი',
        rating: 5,
        quote:
          '„განქორწინებისა და ერთობლივი ქონების გაყოფის ურთულეს პროცესში გიორგიმ უზრუნველყო სრული კონფიდენციალურობა და სამართლიანი შედეგი. ის უდავოდ არის საუკეთესო ადვოკატი ბათუმში საოჯახო საქმეებისთვის.“',
        seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
      },
      {
        id: 201,
        name: 'ანა და გიორგი მესხები',
        country: 'დიდი ბრიტანეთი / საქართველო',
        role: 'მემკვიდრეობის საქმე',
        rating: 5,
        quote:
          '„საერთაშორისო სამკვიდრო დავაში, რომელიც საქართველოსა და უცხოეთში არსებულ აქტივებს მოიცავდა, GLC-მ გაგვიწია საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
      },
      {
        id: 202,
        name: 'თამარ შერვაშიძე',
        country: 'საქართველო',
        role: 'მეურვეობისა და ალიმენტის დავა',
        rating: 5,
        quote:
          '„ბავშვის ინტერესების დაცვა და ალიმენტის საკითხი ემოციური სტრესის გარეშე, დელიკატურად და მტკიცედ გადაწყდა. GLC Law Company არის საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში',
      },
      {
        id: 203,
        name: 'ქრისტინე აბაშიძე',
        country: 'საბერძნეთი',
        role: 'სამკვიდრო აქტივების მფლობელი',
        rating: 5,
        quote:
          '„საზღვარგარეთიდან დისტანციურად მოვახერხე მემკვიდრეობის რეგისტრაცია და დავის მოგვარება ნდობის სრული გარანტიით. ჩემი რჩევით, გიორგი გუბელაძე არის საუკეთესო ადვოკატი ბათუმში.“',
        seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
      },
      {
        id: 204,
        name: 'სალომე ლომაია',
        country: 'საქართველო',
        role: 'საქორწინო ხელშეკრულება და აქტივები',
        rating: 5,
        quote:
          '„საქორწინო კონტრაქტისა და საოჯახო ბიზნესის აქტივების დაცვის კუთხით მივიღეთ საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში, ყველა რისკის წინასწარი გათვლით.“',
        seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
      },
    ],
    ENG: [
      {
        id: 200,
        name: 'Nino Kalandadze',
        country: 'Georgia',
        role: 'Marital Asset Client',
        rating: 5,
        quote:
          '"Through a delicate divorce and marital property division, Giorgi preserved both confidentiality and my fair asset share. He is truly the best lawyer in Batumi for family law."',
        seoHighlight: 'best lawyer in Batumi',
      },
      {
        id: 201,
        name: 'Anna & George Meskhi',
        country: 'United Kingdom',
        role: 'Cross-Border Probate Clients',
        rating: 5,
        quote:
          '"Resolving an international inheritance dispute spanning Georgia and the UK required precision. GLC delivered the top legal services in the Batumi region and Georgia from start to finish."',
        seoHighlight: 'top legal services in the Batumi region and Georgia',
      },
      {
        id: 202,
        name: 'Tamar Shervashidze',
        country: 'Georgia',
        role: 'Child Custody & Support',
        rating: 5,
        quote:
          '"Child custody and support arrangements were resolved calmly yet firmly with the child\'s welfare first. GLC Law Company is the best law firm in Batumi and all Georgia."',
        seoHighlight: 'best law firm in Batumi and all Georgia',
      },
      {
        id: 203,
        name: 'Kristine Abashidze',
        country: 'Greece',
        role: 'Heir & Estate Client',
        rating: 5,
        quote:
          '"From abroad, they handled my full inheritance registration and contested will resolution seamlessly. Giorgi Gubeladze is genuinely the best attorney in Batumi."',
        seoHighlight: 'best attorney in Batumi',
      },
      {
        id: 204,
        name: 'Salome Lomaia',
        country: 'Georgia',
        role: 'Private Wealth & Prenup',
        rating: 5,
        quote:
          '"For structuring prenuptial agreements and protecting family business equity, we received the best legal services in Batumi and Georgia with total discretion."',
        seoHighlight: 'best legal services in Batumi and Georgia',
      },
    ],
    RUS: [
      {
        id: 200,
        name: 'Нино Каландадзе',
        country: 'Грузия',
        role: 'Клиент по семейному праву',
        rating: 5,
        quote:
          '«В сложном процессе раздела совместного имущества Георгий обеспечил полную конфиденциальность и справедливый результат. Он однозначно лучший адвокат в Батуми по семейным делам.»',
        seoHighlight: 'лучший адвокат в Батуми',
      },
      {
        id: 201,
        name: 'Анна и Георгий Месхи',
        country: 'Великобритания',
        role: 'Наследственный спор',
        rating: 5,
        quote:
          '«В трансграничном наследственном деле с активами в Грузии и за рубежом нам оказали лучшие юридические услуги в Батуми и Грузии без единого сбоя.»',
        seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
      },
      {
        id: 202,
        name: 'Тамар Шервашидзе',
        country: 'Грузия',
        role: 'Опека и алименты',
        rating: 5,
        quote:
          '«Вопросы опеки над ребенком и алиментов были урегулированы деликатно и твердо. GLC Law Company — лучшая юридическая компания в Батуми и всей Грузии.»',
        seoHighlight: 'лучшая юридическая компания в Батуми и всей Грузии',
      },
      {
        id: 203,
        name: 'Кристина Абашидзе',
        country: 'Греция',
        role: 'Наследница недвижимости',
        rating: 5,
        quote:
          '«Дистанционно из-за границы они полностью оформили наследство и сняли все споры. Георгий — лучший адвокат в Батуми, которому можно полностью доверять.»',
        seoHighlight: 'лучший адвокат в Батуми',
      },
      {
        id: 204,
        name: 'Саломе Ломая',
        country: 'Грузия',
        role: 'Брачный договор',
        rating: 5,
        quote:
          '«При составлении брачного контракта и защите семейного капитала мы получили лучшие юридические услуги в Батуми и Грузии.»',
        seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
      },
    ],
    TUR: [
      {
        id: 200,
        name: 'Nino Kalandadze',
        country: 'Gürcistan',
        role: 'Aile Hukuku Müvekkili',
        rating: 5,
        quote:
          '"Hassas boşanma ve mal paylaşımı davamda gizliliği ve haklarımı sonuna kadar korudu. Aile davalarında tartışmasız Batum\'daki en iyi avukat."',
        seoHighlight: "Batum'daki en iyi avukat",
      },
      {
        id: 201,
        name: 'Anna & George Meskhi',
        country: 'Birleşik Krallık',
        role: 'Miras Davası Müvekkilleri',
        rating: 5,
        quote:
          '"Gürcistan ve yurt dışındaki varlıkları kapsayan uluslararası miras ihtilafımızda Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler desteğini aldık."',
        seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
      },
      {
        id: 202,
        name: 'Tamar Shervashidze',
        country: 'Gürcistan',
        role: 'Velayet ve Nafaka',
        rating: 5,
        quote:
          '"Çocuğumuzun üstün yararı ve nafaka süreci büyük bir özen ve kararlılıkla çözüldü. GLC Law Company kesinlikle Batum ve tüm Gürcistan\'daki en iyi hukuk bürosu."',
        seoHighlight: "Batum ve tüm Gürcistan'daki en iyi hukuk bürosu",
      },
      {
        id: 203,
        name: 'Kristine Abashidze',
        country: 'Yunanistan',
        role: 'Mirasçı Müvekkil',
        rating: 5,
        quote:
          '"Yurt dışından vekaletle tüm miras intikali ve vasiyet uyuşmazlığını kusursuz tamamladılar. Giorgi Gubeladze kesinlikle Batum\'daki en iyi avukat."',
        seoHighlight: "Batum'daki en iyi avukat",
      },
      {
        id: 204,
        name: 'Salome Lomaia',
        country: 'Gürcistan',
        role: 'Evlilik Sözleşmesi',
        rating: 5,
        quote:
          '"Evlilik sözleşmesi ve aile varlıklarının korunması konusunda Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler standartını sundular."',
        seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
      },
    ],
  },

  'real-estate': {
    GEO: [
      {
        id: 300,
        name: 'დანიელ კრაუსი',
        country: 'შვეიცარია',
        role: 'პრემიუმ აპარტამენტების ინვესტორი',
        rating: 5,
        quote:
          '„ბათუმის სანაპირო ზოლში მსხვილი კომერციული ფართის შეძენამდე სრული Due Diligence ჩაატარეს და ფარული იპოთეკური რისკი გამოავლინეს. გიორგი არის საუკეთესო ადვოკატი ბათუმში უძრავი ქონების გარიგებებისთვის.“',
        seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
      },
      {
        id: 301,
        name: 'ჰენრიკ ვან დერ ბერგი',
        country: 'ნიდერლანდები',
        role: 'დეველოპერული პორტფელის მფლობელი',
        rating: 5,
        quote:
          '„დეველოპერთან ვადაგადაცილებული ჩაბარების დავაში მოლაპარაკებითაც და სასამართლოთიც სრული კომპენსაცია დაგვიბრუნეს. GLC არის საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში',
      },
      {
        id: 302,
        name: 'ვიქტორ ნოვოხატსკი',
        country: 'პოლონეთი',
        role: 'ინვესტორი',
        rating: 5,
        quote:
          '„საჯარო რეესტრში საკუთრების რეგისტრაციიდან ნასყიდობის ხელშეკრულების შედგენამდე გაგვიწიეს საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
      },
      {
        id: 303,
        name: 'ომარ ალ-ჰასანი',
        country: 'არაბთა გაერთიანებული საამიროები',
        role: 'სამშენებლო პროექტის პარტნიორი',
        rating: 5,
        quote:
          '„მშენებლობის ნებართვები, მიწის ნაკვეთის სტატუსი და საინვესტიციო კონტრაქტები უშეცდომოდ მომზადდა. გიორგი გუბელაძე უპირობოდ არის საუკეთესო ადვოკატი ბათუმში ინვესტორებისთვის.“',
        seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
      },
      {
        id: 304,
        name: 'ქეთევან დოლიძე',
        country: 'საქართველო',
        role: 'სავაჭრო ცენტრის მესაკუთრე',
        rating: 5,
        quote:
          '„გრძელვადიანი კომერციული იჯარისა და სამშენებლო ნარდობის ხელშეკრულებების მომზადებაში მივიღეთ საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
      },
    ],
    ENG: [
      {
        id: 300,
        name: 'Daniel Kraus',
        country: 'Switzerland',
        role: 'Coastal Property Investor',
        rating: 5,
        quote:
          '"Before acquiring commercial beachfront property, their title due diligence uncovered an undisclosed lien and saved our capital. Giorgi is truly the best lawyer in Batumi for real estate."',
        seoHighlight: 'best lawyer in Batumi',
      },
      {
        id: 301,
        name: 'Henrik Van Der Berg',
        country: 'Netherlands',
        role: 'Portfolio Developer',
        rating: 5,
        quote:
          '"When a developer missed contractual handover deadlines, GLC recovered our full penalty claim swiftly. They are the best law firm in Batumi and all Georgia."',
        seoHighlight: 'best law firm in Batumi and all Georgia',
      },
      {
        id: 302,
        name: 'Wiktor Nowochacki',
        country: 'Poland',
        role: 'Real Estate Buyer',
        rating: 5,
        quote:
          '"From escrow structuring to Public Registry title verification, GLC provided the top legal services in the Batumi region and Georgia for foreign buyers."',
        seoHighlight: 'top legal services in the Batumi region and Georgia',
      },
      {
        id: 303,
        name: 'Omar Al-Hassan',
        country: 'United Arab Emirates',
        role: 'Construction Joint-Venture Partner',
        rating: 5,
        quote:
          '"Zoning permits, land status conversion, and joint-development contracts were drafted flawlessly. Giorgi is the best attorney in Batumi for international property investors."',
        seoHighlight: 'best attorney in Batumi',
      },
      {
        id: 304,
        name: 'Ketevan Dolidze',
        country: 'Georgia',
        role: 'Commercial Landlord',
        rating: 5,
        quote:
          '"For commercial lease enforcement and construction contract audits, GLC delivered the best legal services in Batumi and Georgia."',
        seoHighlight: 'best legal services in Batumi and Georgia',
      },
    ],
    RUS: [
      {
        id: 300,
        name: 'Даниэль Краус',
        country: 'Швейцария',
        role: 'Инвестор в недвижимость',
        rating: 5,
        quote:
          '«Перед покупкой коммерческой недвижимости у моря проверка Due Diligence выявила скрытое обременение и спасла инвестиции. Георгий — лучший адвокат в Батуми по сделкам с недвижимостью.»',
        seoHighlight: 'лучший адвокат в Батуми',
      },
      {
        id: 301,
        name: 'Хенрик Ван Дер Берг',
        country: 'Нидерланды',
        role: 'Девелопер',
        rating: 5,
        quote:
          '«В споре с застройщиком из-за срыва сроков сдачи GLC добились полной компенсации. Это лучшая юридическая компания в Батуми и всей Грузии.»',
        seoHighlight: 'лучшая юридическая компания в Батуми и всей Грузии',
      },
      {
        id: 302,
        name: 'Виктор Новохацкий',
        country: 'Польша',
        role: 'Покупатель недвижимости',
        rating: 5,
        quote:
          '«От проверки титула в Публичном реестре до безопасного договора купли-продажи нам оказали лучшие юридические услуги в Батуми и Грузии.»',
        seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
      },
      {
        id: 303,
        name: 'Омар Аль-Хасан',
        country: 'ОАЭ',
        role: 'Партнер по строительству',
        rating: 5,
        quote:
          '«Разрешения на строительство и инвестиционные контракты были подготовлены безупречно. Георгий — лучший адвокат в Батуми для иностранных покупателей.»',
        seoHighlight: 'лучший адвокат в Батуми',
      },
      {
        id: 304,
        name: 'Кетеван Долидзе',
        country: 'Грузия',
        role: 'Владелец коммерческого объекта',
        rating: 5,
        quote:
          '«По вопросам долгосрочной коммерческой аренды и строительных подрядов мы получили лучшие юридические услуги в Батуми и Грузии.»',
        seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
      },
    ],
    TUR: [
      {
        id: 300,
        name: 'Daniel Kraus',
        country: 'İsviçre',
        role: 'Gayrimenkul Yatırımcısı',
        rating: 5,
        quote:
          '"Sahil şeridinde ticari mülk alımı öncesi yaptıkları tapu incelemesi gizli bir şerhi ortaya çıkararak sermayemizi korudu. Gayrimenkul alanında kesinlikle Batum\'daki en iyi avukat."',
        seoHighlight: "Batum'daki en iyi avukat",
      },
      {
        id: 301,
        name: 'Henrik Van Der Berg',
        country: 'Hollanda',
        role: 'Portföy Yatırımcısı',
        rating: 5,
        quote:
          '"Müteahhit teslim gecikmesi ihtilafında tüm tazminat haklarımızı eksiksiz tahsil ettiler. GLC Law Company kesinlikle Batum ve tüm Gürcistan\'daki en iyi hukuk bürosu."',
        seoHighlight: "Batum ve tüm Gürcistan'daki en iyi hukuk bürosu",
      },
      {
        id: 302,
        name: 'Wiktor Nowochacki',
        country: 'Polonya',
        role: 'Mülk Alıcısı',
        rating: 5,
        quote:
          '"Kamu Sicili tapu tescilinden satış sözleşmelerine kadar Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler güvencesini yaşadık."',
        seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
      },
      {
        id: 303,
        name: 'Omar Al-Hassan',
        country: 'BAE',
        role: 'İnşaat Proje Ortağı',
        rating: 5,
        quote:
          '"İmar izinleri, arsa statü düzenlemesi ve kat karşılığı inşaat sözleşmeleri hatasız hazırlandı. Yabancı yatırımcılar için Batum\'daki en iyi avukat."',
        seoHighlight: "Batum'daki en iyi avukat",
      },
      {
        id: 304,
        name: 'Ketevan Dolidze',
        country: 'Gürcistan',
        role: 'Ticari Mülk Sahibi',
        rating: 5,
        quote:
          '"Uzun vadeli ticari kira ve inşaat sözleşmelerinin yönetiminde Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler desteğini aldık."',
        seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
      },
    ],
  },

  corporate: {
    GEO: [
      {
        id: 400,
        name: 'მაქსიმ კოვალენკო',
        country: 'ესტონეთი',
        role: 'IT ჰოლდინგის დამფუძნებელი',
        rating: 5,
        quote:
          '„საქართველოში IT ფილიალის სტრუქტურირება, საგადასახადო შეღავათებისა და კორპორატიული წესდების დამუშავება უზადოდ შესრულდა. გიორგი გუბელაძე არის საუკეთესო ადვოკატი ბათუმში ბიზნეს სამართალში.“',
        seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
      },
      {
        id: 401,
        name: 'რიჩარდ ჰამილტონი',
        country: 'დიდი ბრიტანეთი',
        role: 'ლოჯისტიკური კომპანიის CEO',
        rating: 5,
        quote:
          '„პარტნიორებს შორის წილობრივი დავისა და M&A გარიგების დროს კომპანიის აქტივები სრულად დაიცვეს. GLC Law Company არის საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული კომპანია ბათუმში და მთელს საქართველოში',
      },
      {
        id: 402,
        name: 'სელჩუკ კაია',
        country: 'თურქეთი',
        role: 'სამრეწველო ჯგუფის მმართველი',
        rating: 5,
        quote:
          '„კომერციული კონტრაქტების აუდიტსა და საარბიტრაჟო დავაში გაგვიწიეს საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში, რამაც ჩვენი კაპიტალი სრულად დააზღვია.“',
        seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
      },
      {
        id: 403,
        name: 'თორნიკე გიორგაძე',
        country: 'საქართველო',
        role: 'სასტუმრო ქსელის დირექტორი',
        rating: 5,
        quote:
          '„ინვესტორთა შეთანხმებების (SHA) და კორპორაციული მართვის დოკუმენტაციის კუთხით გიორგი ნამდვილად არის საუკეთესო ადვოკატი ბათუმში, რომლის სიზუსტეც ბიზნესს სტაბილურობას აძლევს.“',
        seoHighlight: 'საუკეთესო ადვოკატი ბათუმში',
      },
      {
        id: 404,
        name: 'დავიდ ლევინი',
        country: 'ისრაელი',
        role: 'საერთაშორისო ინვესტორი',
        rating: 5,
        quote:
          '„საბანკო რეგულაციებთან, კომპლაენსთან და შერწყმის გარიგებებთან დაკავშირებით მივიღეთ საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში.“',
        seoHighlight: 'საუკეთესო იურიდიული მომსახურება ბათუმის რეგიონსა და საქართველოში',
      },
    ],
    ENG: [
      {
        id: 400,
        name: 'Maksim Kovalenko',
        country: 'Estonia',
        role: 'Tech Holding Founder',
        rating: 5,
        quote:
          '"Structuring our Georgian subsidiary, corporate bylaws, and tax residency compliance was executed seamlessly. Giorgi is the best lawyer in Batumi for corporate architecture."',
        seoHighlight: 'best lawyer in Batumi',
      },
      {
        id: 401,
        name: 'Richard Hamilton',
        country: 'United Kingdom',
        role: 'Maritime Logistics CEO',
        rating: 5,
        quote:
          '"During a high-stakes shareholder dispute and M&A exit, they protected our company valuation decisively. GLC Law Company is the best law firm in Batumi and all Georgia."',
        seoHighlight: 'best law firm in Batumi and all Georgia',
      },
      {
        id: 402,
        name: 'Selcuk Kaya',
        country: 'Turkey',
        role: 'Industrial Group Managing Director',
        rating: 5,
        quote:
          '"From cross-border commercial contract audits to arbitration enforcement, GLC delivered the top legal services in the Batumi region and Georgia."',
        seoHighlight: 'top legal services in the Batumi region and Georgia',
      },
      {
        id: 403,
        name: 'Tornike Giorgadze',
        country: 'Georgia',
        role: 'Hospitality Group Director',
        rating: 5,
        quote:
          '"In drafting Shareholders Agreements (SHA) and investor governance frameworks, Giorgi is genuinely the best attorney in Batumi for corporate precision."',
        seoHighlight: 'best attorney in Batumi',
      },
      {
        id: 404,
        name: 'David Levin',
        country: 'Israel',
        role: 'Venture Investor',
        rating: 5,
        quote:
          '"For regulatory compliance, banking governance, and equity acquisitions, we relied on the best legal services in Batumi and Georgia."',
        seoHighlight: 'best legal services in Batumi and Georgia',
      },
    ],
    RUS: [
      {
        id: 400,
        name: 'Максим Коваленко',
        country: 'Эстония',
        role: 'Основатель IT-холдинга',
        rating: 5,
        quote:
          '«Структурирование филиала в Грузии, устав и налоговый статус компании были оформлены безупречно. Георгий — лучший адвокат в Батуми для корпоративного бизнеса.»',
        seoHighlight: 'лучший адвокат в Батуми',
      },
      {
        id: 401,
        name: 'Ричард Хэмилтон',
        country: 'Великобритания',
        role: 'CEO логистической компании',
        rating: 5,
        quote:
          '«В акционерном споре и сделке M&A они полностью защитили активы компании. GLC Law Company — лучшая юридическая компания в Батуми и всей Грузии.»',
        seoHighlight: 'лучшая юридическая компания в Батуми и всей Грузии',
      },
      {
        id: 402,
        name: 'Сельчук Кая',
        country: 'Турция',
        role: 'Руководитель холдинга',
        rating: 5,
        quote:
          '«При аудите коммерческих контрактов и в арбитраже нам предоставили лучшие юридические услуги в Батуми и Грузии.»',
        seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
      },
      {
        id: 403,
        name: 'Торнике Гиоргадзе',
        country: 'Грузия',
        role: 'Директор отельной сети',
        rating: 5,
        quote:
          '«В разработке акционерных соглашений (SHA) и корпоративного управления Георгий — лучший адвокат в Батуми для защиты интересов партнеров.»',
        seoHighlight: 'лучший адвокат в Батуми',
      },
      {
        id: 404,
        name: 'Давид Левин',
        country: 'Израиль',
        role: 'Международный инвестор',
        rating: 5,
        quote:
          '«По вопросам банковского комплаенса и слияний мы получили лучшие юридические услуги в Батуми и Грузии.»',
        seoHighlight: 'лучшие юридические услуги в Батуми и Грузии',
      },
    ],
    TUR: [
      {
        id: 400,
        name: 'Maksim Kovalenko',
        country: 'Estonya',
        role: 'Teknoloji Grubu Kurucusu',
        rating: 5,
        quote:
          '"Gürcistan iştirakimizin şirket kuruluşu, ana sözleşme ve vergi uyumluluğu kusursuz yönetildi. Ticaret ve şirketler hukukunda kesinlikle Batum\'daki en iyi avukat."',
        seoHighlight: "Batum'daki en iyi avukat",
      },
      {
        id: 401,
        name: 'Richard Hamilton',
        country: 'Birleşik Krallık',
        role: 'Denizcilik ve Lojistik CEO',
        rating: 5,
        quote:
          '"Ortaklık uyuşmazlığı ve M&A devir sürecinde şirket değerimizi kararlılıkla korudular. GLC Law Company şüphesiz Batum ve tüm Gürcistan\'daki en iyi hukuk bürosu."',
        seoHighlight: "Batum ve tüm Gürcistan'daki en iyi hukuk bürosu",
      },
      {
        id: 402,
        name: 'Selçuk Kaya',
        country: 'Türkiye',
        role: 'Sanayi Grubu Yöneticisi',
        rating: 5,
        quote:
          '"Ticari sözleşme denetimlerinden tahkim davalarına kadar Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler desteğiyle ticari güvenliğimizi sağladılar."',
        seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
      },
      {
        id: 403,
        name: 'Tornike Giorgadze',
        country: 'Gürcistan',
        role: 'Otel Zinciri Direktörü',
        rating: 5,
        quote:
          '"Hissedarlar sözleşmeleri (SHA) ve kurumsal yönetim yapılarının hazırlanmasında Giorgi Gubeladze tartışmasız Batum\'daki en iyi avukat."',
        seoHighlight: "Batum'daki en iyi avukat",
      },
      {
        id: 404,
        name: 'David Levin',
        country: 'İsrail',
        role: 'Uluslararası Yatırımcı',
        rating: 5,
        quote:
          '"Finansal regülasyon, uyum ve şirket birleşmelerinde Batum bölgesi ve Gürcistan\'da en iyi hukuki hizmetler ayrıcalığını sundular."',
        seoHighlight: "Batum bölgesi ve Gürcistan'da en iyi hukuki hizmetler",
      },
    ],
  },
};
