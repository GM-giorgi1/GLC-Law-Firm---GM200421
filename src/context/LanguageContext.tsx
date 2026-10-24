import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ENG' | 'GEO' | 'RUS' | 'TUR';

export interface ServiceDetail {
  id: string;
  categoryNumber: string;
  categoryName: string;
  title: string;
  bullets: string[];
  tags: string[];
  detailedOverview: string;
  images: { url: string; caption: string }[];
}

export interface CaseStudyDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageUrl: string;
  aspectClass: string;
}

export interface TestimonialDetail {
  id: number;
  name: string;
  role: string;
  badge: string;
  titlePrefix: string;
  titleAccent: string;
  rating: string;
  quote: string;
  image: string;
  isBook?: boolean;
}

export interface BlogPostDetail {
  id: number;
  date: string;
  title: string;
  image: string;
  alt: string;
}

export interface TranslationSchema {
  // Navigation & General
  nav: {
    backToTop: string;
    menu: string;
    closeMenu: string;
    scheduleConsultation: string;
    home: string;
    about: string;
    services: string;
    cases: string;
    testimonials: string;
    team: string;
    blogs: string;
    contact: string;
    officeHeadquarters: string;
    address: string;
    rightsReserved: string;
    attorneyNotice: string;
  };
  // Hero Header
  hero: {
    mainTitle: string;
    mainTitleHighlight?: string;
    subheading: string;
    trustHeadline: string;
    trustParagraph: string;
    section2Badge?: string;
    section2Subline?: string;
    section2Tagline?: string;
    memberBadge: string;
    barAssociation: string;
    badgePillars: [string, string, string];
    bookConsultation: string;
    confidentialSession: string;
    modalSubtitle: string;
    fullNameLabel: string;
    workEmailLabel: string;
    phoneLabel: string;
    practiceAreaLabel: string;
    preferredDateLabel: string;
    preferredTimeLabel: string;
    caseSummaryLabel: string;
    confirmScheduleBtn: string;
    requestReceived: string;
    requestReceivedDesc: string;
    options: {
      corporate: string;
      ma: string;
      litigation: string;
      ip: string;
      regulatory: string;
    };
  };
  // About Me
  aboutMe: {
    badgeNumber: string;
    badgeText: string;
    headingText: string;
    headingHighlight: string;
    quoteTitle: string;
    quoteParagraph: string;
    quoteParagraph2: string;
    founderTitle: string;
    founderSubtitle: string;
    exploreBtn: string;
  };
  // Services
  servicesSection: {
    badgeNumber: string;
    badgeText: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    seeDetails: string;
    items: ServiceDetail[];
  };
  // Case Studies
  caseStudiesSection: {
    badgeNumber: string;
    badgeText: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    viewSummary: string;
    items: CaseStudyDetail[];
  };
  // Metrics
  metricsSection: {
    tag: string;
    watermark: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
  };
  // Testimonials
  testimonialsSection: {
    badgeNumber: string;
    badgeText: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    items: TestimonialDetail[];
  };
  // Team / Price
  teamSection: {
    badgeNumber: string;
    badgeText: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    leadName: string;
    leadRole: string;
    bioParagraph: string;
    pills: [string, string, string, string];
    directBtn: string;
  };
  // Blogs
  blogsSection: {
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    viewAllBtn: string;
    readAnalysis: string;
    posts: BlogPostDetail[];
  };
  // Contacts
  contactsSection: {
    responseGuarantee: string;
    businessDayHighlight: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    callUs: string;
    emailMe: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendMessageBtn: string;
    sendingBtn: string;
    servicesList: string[];
    successTitle: string;
    successDesc: string;
    openWhatsAppDirectly: string;
    sendAnotherBtn: string;
  };
  // Footer
  footer: {
    marqueeWord1: string;
    marqueeWord2: string;
    bookBtn: string;
    justiceSlogan: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  ENG: {
    nav: {
      backToTop: 'Back to Top',
      menu: 'MENU',
      closeMenu: 'Close Menu',
      scheduleConsultation: 'SCHEDULE CONSULTATION',
      home: 'HOME',
      about: 'ABOUT GLC LAW COMPANY',
      services: 'PRACTICE AREAS',
      cases: 'NOTABLE CASE RESULTS',
      testimonials: 'TESTIMONIALS',
      team: 'OUR TEAM',
      blogs: 'LATEST INSIGHTS',
      contact: 'CONTACT & LOCATION',
      officeHeadquarters: 'OFFICE HEADQUARTERS',
      address: 'Georgia, Batumi, Kutaisi str, office #31, Batumi, Georgia, 6000',
      rightsReserved: '© 2026 GLC Law Company. All rights reserved.',
      attorneyNotice: 'Attorney Advertising. Prior results do not guarantee a similar outcome.',
    },
    hero: {
      mainTitle: 'Trusted Legal Counsel For Growing Business',
      mainTitleHighlight: 'Business',
      subheading: 'With extensive courtroom trial practice and strategic counsel, our practice is founded on trust, transparency, and results.',
      trustHeadline: 'TRUSTED. EXPERIENCED. STRATEGIC.',
      trustParagraph:
        'With over 21 years of distinguished expertise in criminal, administrative, and civil litigation, Giorgi Gubeladze is a licensed advocate and recognized member of the Georgian Bar Association (GBA), delivering elite, results-driven legal strategy and uncompromised protection across Georgia and internationally.',
      section2Badge: 'CRIMINAL LAW PRACTICE SINCE 2005',
      section2Subline: 'Civil & Administrative Disputes',
      section2Tagline:
        'The right legal strategy and uncompromising defense are the foundation of your victory.',
      memberBadge: 'MEMBER OF THE',
      barAssociation: 'BAR ASSOCIATION',
      badgePillars: ['Legal Expertise', 'Client-Focused', 'Ethical Representation'],
      bookConsultation: 'Book a Consultation',
      confidentialSession: 'CONFIDENTIAL LEGAL SESSION',
      modalSubtitle: 'Schedule a direct strategy conference with Giorgi Gubeladze.',
      fullNameLabel: 'Full Name *',
      workEmailLabel: 'Work Email *',
      phoneLabel: 'Phone Number *',
      practiceAreaLabel: 'Primary Practice Area',
      preferredDateLabel: 'Preferred Date',
      preferredTimeLabel: 'Preferred Time',
      caseSummaryLabel: 'Case Summary & Notes',
      confirmScheduleBtn: 'Confirm & Schedule Consultation',
      requestReceived: 'REQUEST RECEIVED',
      requestReceivedDesc: 'Thank you. Our senior legal team will contact you within 2 business hours to finalize your consultation time.',
      options: {
        corporate: 'Corporate & Business Law',
        ma: 'Mergers & Acquisitions (M&A)',
        litigation: 'Commercial Litigation',
        ip: 'Intellectual Property Strategy',
        regulatory: 'Regulatory & Compliance',
      },
    },
    aboutMe: {
      badgeNumber: '(01)',
      badgeText: 'ABOUT US',
      headingText: 'A LAWYER FOR WHOM YOUR CASE IS A GENUINE PRIORITY',
      headingHighlight: 'PRIORITY',
      quoteTitle: 'STRATEGIC ADVOCACY ROOTED IN REAL IMPACT',
      quoteParagraph:
        'Legal representation is not merely knowing the law — true defense means securing pivotal evidence, realizing what is at stake, and presenting an unwavering strategy in court — a clear path toward victory!',
      quoteParagraph2:
        'When it comes to your family member or your freedom, specialized knowledge and courtroom experience are of paramount importance!',
      founderTitle: 'GIORGI GUBELADZE',
      founderSubtitle: 'FOUNDER & MANAGING PARTNER',
      exploreBtn: 'EXPLORE PRACTICE AREAS',
    },
    servicesSection: {
      badgeNumber: '03',
      badgeText: 'Our Legal Services',
      headline: 'Trusted expertise across every area of law we practice',
      headlineHighlight: 'practice',
      subtitle: 'We provide dedicated legal support with in-depth knowledge and a client-first approach across a wide range of practice areas.',
      seeDetails: 'See Details',
      items: [
        {
          id: 'criminal-defense',
          categoryNumber: '01.',
          categoryName: 'Criminal Defense',
          title: 'Felony & Misdemeanor Defense Advocacy',
          bullets: [
            'Uncompromising defense across investigation and trial stages',
            'In-depth forensic case analysis and trial strategy',
            'Penitentiary facility visits & immediate detainee support',
          ],
          tags: ['Criminal Defense', 'Trial Advocacy', 'Detention Visits'],
          detailedOverview:
            'With 21+ years of dedicated criminal trial experience, we provide fearless courtroom advocacy, suppress unlawful evidence, and conduct prompt visits to detention facilities to protect our clients.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
              caption: 'Courtroom Trial Advocacy & Defense',
            },
            {
              url: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1000&auto=format&fit=crop',
              caption: 'Forensic Evidence & Case Investigation',
            },
          ],
        },
        {
          id: 'family-law',
          categoryNumber: '02.',
          categoryName: 'Civil & Family Law',
          title: 'Family Matters & Civil Dispute Resolution',
          bullets: [
            'Family disputes, divorce proceedings & equitable asset division',
            'Child custody arrangements, spousal support & family protection',
            'Resolution of core civil obligations and contractual disputes',
          ],
          tags: ['Family Law', 'Civil Disputes', 'Mediation'],
          detailedOverview:
            'Combining deep empathy with rigorous trial advocacy, we handle sensitive family matters, divorce negotiations, custody arrangements, and core civil litigation.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
              caption: 'Private Client Consultation & Mediation',
            },
            {
              url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop',
              caption: 'Protective Child & Spousal Agreements',
            },
          ],
        },
        {
          id: 'real-estate-law',
          categoryNumber: '03.',
          categoryName: 'Real Estate Law',
          title: 'Property Transactions & Real Estate Counsel',
          bullets: [
            'Property transaction documentation and contract verification',
            'Title examination, legal due diligence & ownership registration',
            'Decisive resolution of boundary, ownership and lease disputes',
          ],
          tags: ['Property Transactions', 'Due Diligence', 'Title Verification'],
          detailedOverview:
            'Guiding developers, investors, and property owners through acquisitions, property transfers, title clearances, and complex municipal agreements to guarantee clean ownership and risk-free deals.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
              caption: 'Commercial Land Development & Acquisitions',
            },
            {
              url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
              caption: 'Title Examination & Closing Verification',
            },
          ],
        },
      ],
    },
    caseStudiesSection: {
      badgeNumber: '(04)',
      badgeText: 'NOTABLE CASES',
      headline: 'PROVEN RESULTS IN HIGH-STAKES MATTERS',
      headlineHighlight: 'RESULTS',
      subtitle: 'A track record of decisive courtroom victories, strategic settlements, and high-value corporate negotiations.',
      viewSummary: 'View Case Summary',
      items: [
        {
          id: 'case-1',
          title: 'Startup to Success',
          subtitle: 'Business Formation & Corporate Counsel',
          description:
            'Guided a growing tech company through incorporation, contract negotiation, and long-term legal strategy.',
          tags: ['Corporate Counsel', 'Contract Negotiation'],
          imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-2',
          title: 'Charges Dismissed',
          subtitle: 'Criminal Defense & Trial Advocacy',
          description:
            'Successfully defended a client against felony charges, securing a full dismissal and expungement.',
          tags: ['Criminal Defense', 'Case Dismissal'],
          imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-4',
          title: 'Commercial Trial Victory',
          subtitle: 'Civil Litigation & Partner Resolution',
          description:
            'Secured complete jury restitution and multi-million damages in a complex breach of fiduciary partnership dispute.',
          tags: ['Civil Litigation', 'Trial Verdict'],
          imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-5',
          title: 'Zoning & Master Acquisition',
          subtitle: 'Real Estate Law & Development',
          description:
            'Secured municipal development approvals, zoning clearances, and closing for a premier 40-acre commercial logistics hub.',
          tags: ['Real Estate Law', 'Zoning Clearance'],
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-6',
          title: 'Intellectual Property Injunction',
          subtitle: 'Patent & Trade Secret Litigation',
          description:
            'Obtained emergency federal injunction halting willful trademark infringement and protected proprietary software code.',
          tags: ['IP Litigation', 'Trade Secrets'],
          imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
      ],
    },
    metricsSection: {
      tag: 'JUSTICE IN ACTION',
      watermark: 'JUSTICE',
      headline: 'You deserve counsel that fights for you',
      headlineHighlight: 'fights',
      subtitle: 'Every client deserves uncompromising dedication and results-oriented legal defense.',
      stat1Label: 'Years of Experience',
      stat2Label: 'Client Success Rate',
      stat3Label: 'In Client Recoveries',
    },
    testimonialsSection: {
      badgeNumber: '(06)',
      badgeText: 'CLIENT TESTIMONIALS',
      headline: 'WHAT OUR CLIENTS SAY ABOUT US',
      headlineHighlight: 'SAY',
      subtitle: 'Honest feedback from entrepreneurs, families, and organizations who trusted us with their most critical legal matters.',
      items: [
        {
          id: 0,
          name: 'David Mitchell',
          role: 'Corporate Litigation Client',
          badge: 'Business Dispute',
          titlePrefix: 'CASE WON WITH',
          titleAccent: 'CONFIDENCE',
          rating: '5.0',
          quote:
            'Giorgi listened carefully, explained everything clearly, and fought for the best outcome. I felt supported and informed throughout the entire legal process.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2001.png',
        },
        {
          id: 1,
          name: 'Marcus Sterling',
          role: 'Asset Protection Client',
          badge: 'Wealth & Asset Protection',
          titlePrefix: 'ASSETS SECURED',
          titleAccent: 'FLAWLESSLY',
          rating: '5.0',
          quote:
            'From the initial consultation to final resolution, the strategic depth and relentless execution exceeded every expectation. An invaluable legal partner.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2002.png',
        },
        {
          id: 2,
          name: 'Julian Vance',
          role: 'Commercial Property Client',
          badge: 'Real Estate & Zoning',
          titlePrefix: 'ZONING DISPUTE',
          titleAccent: 'RESOLVED',
          rating: '4.9',
          quote:
            'When municipal hurdles stalled our development, Giorgi stepped in with authoritative legal precision. We secured approvals in record time without compromising our vision.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2003.png',
        },
        {
          id: 3,
          name: 'Arthur Pendelton',
          role: 'Senior Advisory Client',
          badge: 'Contractual Rights',
          titlePrefix: 'JUSTICE & TRUST',
          titleAccent: 'ATTAINED',
          rating: '5.0',
          quote:
            'Decades in corporate leadership taught me how rare true legal mastery is. This firm embodies relentless advocacy, pristine ethics, and supreme courtroom prowess.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2004.png',
        },
        {
          id: 4,
          name: 'Robert Hayes',
          role: 'Family Estate Client',
          badge: 'Estate & Probate',
          titlePrefix: 'ESTATE PROBATE',
          titleAccent: 'CLARITY',
          rating: '5.0',
          quote:
            'Compassionate, razor-sharp, and remarkably responsive. In the most stressful season of my life, having Giorgi in our corner gave my family absolute peace of mind.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2005.png',
        },
      ],
    },
    teamSection: {
      badgeNumber: '(08)',
      badgeText: 'OUR TEAM',
      headline: 'Meet the Architects of Justice',
      headlineHighlight: 'Justice',
      subtitle: 'Led by Giorgi Gubeladze, our legal counsel blends deep regional insight with elite international standards to deliver unwavering client advocacy.',
      leadName: 'Giorgi Gubeladze',
      leadRole: 'Founder & Lead Trial Counsel',
      bioParagraph:
        'Specializing in corporate disputes, high-stakes civil litigation, and criminal defense with over 21 years of combined judicial and advisory mastery. Admitted to the Georgian Bar Association with full rights of audience in appellate and supreme jurisdictions.',
      pills: ['Bar Association of Georgia', '21+ Years Experience', 'Batumi & Tbilisi Offices', 'Fluent in ENG, GEO, RUS, TUR'],
      directBtn: 'Direct Legal Consultation',
    },
    blogsSection: {
      headline: 'Latest Insights',
      headlineHighlight: 'Insights',
      subtitle: 'Practical legal guidance, regulatory developments, and strategic advice from our courtroom advocates.',
      viewAllBtn: 'View All Publications',
      readAnalysis: 'Read Analysis',
      posts: [
        {
          id: 1,
          date: 'Sep 18, 2026',
          title: "What to Do When You're Served with a Lawsuit",
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
          alt: 'Golden scales of justice on mahogany executive desk with law books',
        },
        {
          id: 2,
          date: 'Sep 12, 2026',
          title: '5 Legal Steps Every Small Business Should Take',
          image: '/.tempmediaStorage/lawwallpaper.jpg',
          alt: 'Attorney in tailored suit signing legal documents with fountain pen and gavel',
        },
        {
          id: 3,
          date: 'Sep 9, 2026',
          title: 'Understanding Your Rights during a Criminal Investigation',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop',
          alt: 'Bronze Lady Justice statue with balanced scales in dark law library',
        },
      ],
    },
    contactsSection: {
      responseGuarantee: 'Response guaranteed within',
      businessDayHighlight: '1 business day',
      headline: 'BOOK A CONSULTATION',
      headlineHighlight: 'CONSULTATION',
      subtitle: 'Share your details and get expert legal guidance tailored to your situation.',
      callUs: 'Call Us',
      emailMe: 'Email me',
      fullNameLabel: 'Full name',
      fullNamePlaceholder: 'Enter your full name',
      emailLabel: 'Email address',
      emailPlaceholder: 'lawyergiorgigubeladze@gmail.com',
      phoneLabel: 'Phone number',
      phonePlaceholder: 'Your contact number',
      serviceLabel: 'Service needed',
      servicePlaceholder: 'Select a Service',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message here...',
      sendMessageBtn: 'Send message',
      sendingBtn: 'Sending inquiry...',
      servicesList: [
        'Criminal Law',
        'Corporate & Business Law',
        'Litigation & Dispute Resolution',
        'Administrative & Civil Litigation',
        'Intellectual Property',
        'Real Estate & Transactions',
        'Asset Protection & Estate Planning',
        'Other Legal Services',
      ],
      successTitle: 'CONSULTATION REQUEST RECEIVED',
      successDesc: 'Thank you. Giorgi Gubeladze and our executive legal team have received your inquiry and will reach out to you within 1 business day.',
      openWhatsAppDirectly: 'Open WhatsApp Chat Directly',
      sendAnotherBtn: 'Send Another Message',
    },
    footer: {
      marqueeWord1: "LET'S TALK",
      marqueeWord2: 'LAW',
      bookBtn: 'Book a Consultation',
      justiceSlogan: 'Justice In Action',
      copyright: '© 2026 GLC Law Company. All rights reserved.',
    },
  },

  GEO: {
    nav: {
      backToTop: 'ზევით დაბრუნება',
      menu: 'Menu',
      closeMenu: 'მენიუს დახურვა',
      scheduleConsultation: 'კონსულტაციის დაჯავშნა',
      home: 'მთავარი',
      about: 'GLC LAW COMPANY-ის შესახებ',
      services: 'სამართლის სფეროები',
      cases: 'წარმატებული საქმეები',
      testimonials: 'შეფასებები',
      team: 'ჩვენი გუნდი',
      blogs: 'სიახლეები და სტატიები',
      contact: 'კონტაქტი და ლოკაცია',
      officeHeadquarters: 'ცენტრალური ოფისი',
      address: 'საქართველო, ბათუმი, ქუთაისის ქ. #31, ბათუმი, 6000',
      rightsReserved: '© 2026 GLC Law Company. ყველა უფლება დაცულია.',
      attorneyNotice: 'ადვოკატის რეკლამა. წარსული შედეგები არ იძლევა მსგავსი შედეგის გარანტიას.',
    },
    hero: {
      mainTitle: 'სანდო იურიდიული პარტნიორი',
      mainTitleHighlight: 'პარტნიორი',
      subheading: 'მრავალწლიანი სასამართლო პრაქტიკითა და სტრატეგიული კონსულტაციით, ჩვენი საქმიანობა ეფუძნება ნდობას, გამჭვირვალობასა და შედეგს.',
      trustHeadline: 'სამოქალაქო და ადმინისტრაციული დავები',
      trustParagraph:
        'სწორი იურიდიული სტრატეგია და უკომპრომისო დაცვა თქვენი გამარჯვების საწინდარია.',
      section2Badge: 'სისხლის სამართალში 2005 წლიდან',
      section2Subline: 'სამოქალაქო და ადმინისტრაციული დავები',
      section2Tagline:
        'სწორი იურიდიული სტრატეგია და უკომპრომისო დაცვა თქვენი გამარჯვების საწინდარია.',
      memberBadge: '',
      barAssociation: 'ადვოკატთა ასოციაციის წევრი',
      badgePillars: ['პროფესიონალიზმი', 'გამოცდილება', 'შედეგი'],
      bookConsultation: 'კონსულტაციის დაჯავშნა',
      confidentialSession: 'კონფიდენციალური იურიდიული სესია',
      modalSubtitle: 'დაგეგმეთ სტრატეგიული კონსულტაცია გიორგი გუბელაძესთან.',
      fullNameLabel: 'სრული სახელი *',
      workEmailLabel: 'ელექტრონული ფოსტა *',
      phoneLabel: 'ტელეფონის ნომერი *',
      practiceAreaLabel: 'ძირითადი მიმართულება',
      preferredDateLabel: 'სასურველი თარიღი',
      preferredTimeLabel: 'სასურველი დრო',
      caseSummaryLabel: 'საქმის მოკლე აღწერა',
      confirmScheduleBtn: 'კონსულტაციის დადასტურება',
      requestReceived: 'მოთხოვნა მიღებულია',
      requestReceivedDesc: 'გმადლობთ. ჩვენი იურიდიული გუნდი დაგიკავშირდებათ უახლოეს 2 სამუშაო საათში დროის დასაზუსტებლად.',
      options: {
        corporate: 'კორპორაციული და ბიზნეს სამართალი',
        ma: 'შერწყმა და შესყიდვები (M&A)',
        litigation: 'კომერციული დავები',
        ip: 'ინტელექტუალური საკუთრება',
        regulatory: 'რეგულაციები და შესაბამისობა',
      },
    },
    aboutMe: {
      badgeNumber: '(01)',
      badgeText: 'ჩვენს შესახებ',
      headingText: 'ადვოკატი, რომლისთვისაც თქვენი საქმე ნამდვილად პრიორიტეტულია',
      headingHighlight: 'პრიორიტეტულია',
      quoteTitle: 'სტრატეგიული დაცვა რეალური შედეგისთვის',
      quoteParagraph:
        'იურიდიული წარმომადგენლობა მხოლოდ კანონების ცოდნა არ არის - დაცვა არის მტკიცებულებების მოპოვება, სასწორზე დადებული ინტერესების გაცნობიერება და სასამართლოში სწორი სტრატეგიის პრეზენტაცია - სვლა გამარჯვებისაკენ!',
      quoteParagraph2:
        'როდესაც საქმე ეხება ოჯახის წევრს ან თავისუფლებას, ცოდნა და გამოცდილება პრინციპულად მნიშვნელოვანია!',
      founderTitle: 'გიორგი გუბელაძე',
      founderSubtitle: 'დამფუძნებელი და მმართველი პარტნიორი',
      exploreBtn: 'სამართლის სფეროები',
    },
    servicesSection: {
      badgeNumber: '03',
      badgeText: 'ჩვენი იურიდიული მომსახურება',
      headline: 'სანდო გამოცდილება სამართლის ყველა სფეროში',
      headlineHighlight: 'ყველა',
      subtitle: 'ჩვენ გთავაზობთ იურიდიულ მხარდაჭერას, სიღრმისეულ ცოდნასა და ინდივიდუალურ მიდგომას სამართლის ყველა სპექტრში.',
      seeDetails: 'დეტალურად',
      items: [
        {
          id: 'criminal-defense',
          categoryNumber: '01.',
          categoryName: 'სისხლის სამართალი',
          title: 'სისხლისსამართლებრივი დაცვა და წარმომადგენლობა',
          bullets: [
            'კვალიფიციური დაცვა გამოძიებასა და სასამართლოში',
            'საქმის სიღრმისეული ანალიზი და სტრატეგიული გეგმა',
            'ვიზიტი სასჯელაღსრულების დაწესებულებაში.',
          ],
          tags: ['სისხლის სამართალი', 'დაცვა სასამართლოში', 'ადვოკატი'],
          detailedOverview:
            'სისხლის სამართალში 21+ წლიანი გამოცდილებით, ჩვენ უზრუნველვყოფთ უკომპრომისო დაცვას გამოძიების დაწყებიდან განაჩენის გამოტანამდე, მტკიცებულებების შეგროვებას და სასჯელაღსრულების დაწესებულებებში დაუყოვნებლივ ვიზიტს.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
              caption: 'სასამართლო დაცვა და პროცესუალური წარმომადგენლობა',
            },
            {
              url: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1000&auto=format&fit=crop',
              caption: 'მტკიცებულებების ანალიზი და ექსპერტიზა',
            },
          ],
        },
        {
          id: 'family-law',
          categoryNumber: '02.',
          categoryName: 'სამოქალაქო და საოჯახო სამართალი',
          title: 'საოჯახო და მემკვიდრეობითი სამართალი',
          bullets: [
            'საოჯახო დავები, განქორწინება და ქონების გაყოფა',
            'შვილების მეურვეობა, ალიმენტი და ინტერესების დაცვა',
            'სამოქალაქო და სახელშეკრულებო დავების მოგვარება',
          ],
          tags: ['საოჯახო სამართალი', 'სამოქალაქო დავები', 'მედიაცია'],
          detailedOverview:
            'საოჯახო და სამოქალაქო დავებში ჩვენ ვიცავთ კლიენტის ფუნდამენტურ ინტერესებს: ქონების სამართლიანი გაყოფა, ბავშვზე ზრუნვის გეგმები, ალიმენტი და სახელშეკრულებო ვალდებულებების აღსრულება.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
              caption: 'პირადი კონსულტაცია და მედიაცია',
            },
            {
              url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop',
              caption: 'ბავშვთა და მეუღლეთა უფლებების დაცვა',
            },
          ],
        },
        {
          id: 'real-estate-law',
          categoryNumber: '03.',
          categoryName: 'უძრავი ქონების სამართალი',
          title: 'სახელშეკრულებო სამართალი და უძრავი ქონება',
          bullets: [
            'ქონებრივი გარიგებები და ხელშეკრულებების მომზადება/ექსპერტიზა',
            'საკუთრების უფლების რეგისტრაცია და სამართლებრივი აუდიტი (Due Diligence)',
            'უძრავ ქონებასთან დაკავშირებული დავების წარმატებული გადაწყვეტა',
          ],
          tags: ['ქონებრივი გარიგებები', 'Due Diligence', 'საკუთრების უფლება'],
          detailedOverview:
            'უძრავი ქონების შეძენის, გასხვისების და ქონებრივი გარიგებების სრული სამართლებრივი უზრუნველყოფა, ხელშეკრულებების მომზადება და კლიენტის საკუთრების უფლების უსაფრთხოება.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
              caption: 'კომერციული დეველოპმენტი და შესყიდვები',
            },
            {
              url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
              caption: 'უფლების ექსპერტიზა და გარიგების დახურვა',
            },
          ],
        },
      ],
    },
    caseStudiesSection: {
      badgeNumber: '(04)',
      badgeText: 'წარმატებული საქმეები',
      headline: 'დადასტურებული შედეგები მნიშვნელოვან დავებში',
      headlineHighlight: 'შედეგები',
      subtitle: 'ჩვენი საქმეები თავისთავად მეტყველებენ — გამარჯვებები სასამართლოში, მომგებიანი მორიგებები და მსხვილი კორპორაციული მოლაპარაკებები.',
      viewSummary: 'საქმის მიმოხილვა',
      items: [
        {
          id: 'case-1',
          title: 'სტარტაპიდან წარმატებამდე',
          subtitle: 'ბიზნესის დაფუძნება და კორპორაციული მომსახურება',
          description:
            'ტექნოლოგიური კომპანიის სრული იურიდიული მხარდაჭერა დაფუძნებიდან მსხვილ კონტრაქტებამდე.',
          tags: ['კორპორაციული მომსახურება', 'კონტრაქტები'],
          imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-2',
          title: 'ბრალდების შეწყვეტა',
          subtitle: 'სისხლისსამართლებრივი დაცვა',
          description:
            'კლიენტის წარმატებული დაცვა მძიმე ბრალდებისგან და საქმის სრული შეწყვეტა ზიანის ანაზღაურებით.',
          tags: ['სისხლის სამართალი', 'საქმის შეწყვეტა'],
          imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-4',
          title: 'გამარჯვება კომერციულ დავაში',
          subtitle: 'სამოქალაქო დავა და ზიანის ანაზღაურება',
          description:
            'პარტნიორებს შორის წარმოშობილ დავაში მრავალმილიონიანი ზიანის სრული ანაზღაურება სასამართლოს გზით.',
          tags: ['სამოქალაქო სამართალი', 'გადაწყვეტილება'],
          imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-5',
          title: 'უძრავი ქონების შესყიდვა',
          subtitle: 'უძრავი ქონება და დეველოპმენტი',
          description:
            'Due Diligence, ნებართვები, ლიცენზიები და კონტრაქტები',
          tags: ['უძრავი ქონება', 'ზონირების ნებართვა'],
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-6',
          title: 'ინტელექტუალური საკუთრების დაცვა',
          subtitle: 'სავაჭრო ნიშნები და საავტორო უფლებები',
          description:
            'სავაჭრო ნიშნის უკანონო გამოყენების სასწრაფო აკრძალვა და პროგრამული კოდის ექსკლუზიურობის დაცვა.',
          tags: ['ინტელექტუალური საკუთრება', 'აკრძალვა'],
          imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
      ],
    },
    metricsSection: {
      tag: 'სამართალი მოქმედებაში',
      watermark: 'სამართალი',
      headline: 'თქვენ იმსახურებთ ადვოკატს, რომელიც იბრძვის თქვენთვის',
      headlineHighlight: 'იბრძვის',
      subtitle: 'თითოეული კლიენტი იმსახურებს მაქსიმალურ ერთგულებასა და შედეგზე ორიენტირებულ დაცვას.',
      stat1Label: 'წლიანი გამოცდილება',
      stat2Label: 'წარმატებული საქმეები',
      stat3Label: 'დაბრუნებული აქტივები',
    },
    testimonialsSection: {
      badgeNumber: '(06)',
      badgeText: 'კლიენტთა შეფასებები',
      headline: 'კლიენტების შეფასება',
      headlineHighlight: 'შეფასება',
      subtitle: 'გულწრფელი უკუკავშირი მეწარმეებისგან, ოჯახებისა და ორგანიზაციებისგან, რომლებმაც თავიანთი საქმე ჩვენ გვანდეს.',
      items: [
        {
          id: 0,
          name: 'დავით მიჩელი',
          role: 'კორპორაციული კლიენტი',
          badge: 'ბიზნეს დავა',
          titlePrefix: 'საქმე მოგებულია',
          titleAccent: 'დამაჯერებლად',
          rating: '5.0',
          quote:
            'გიორგიმ ყურადღებით მომისმინა, ყველაფერი დეტალურად ამიხსნა და საუკეთესო შედეგისთვის იბრძოლა. მთელი პროცესის განმავლობაში თავს დაცულად ვგრძნობდი.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2001.png',
        },
        {
          id: 1,
          name: 'მარკუს სტერლინგი',
          role: 'აქტივების დაცვის კლიენტი',
          badge: 'აქტივების მართვა',
          titlePrefix: 'აქტივები დაცულია',
          titleAccent: 'იდეალურად',
          rating: '5.0',
          quote:
            'პირველივე კონსულტაციიდან საბოლოო შედეგამდე, სტრატეგიულმა სიღრმემ და პროფესიონალიზმმა ყოველგვარ მოლოდინს გადააჭარბა. ფასდაუდებელი პარტნიორი.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2002.png',
        },
        {
          id: 2,
          name: 'ჯულიან ვენსი',
          role: 'დეველოპერი კლიენტი',
          badge: 'უძრავი ქონება და ზონირება',
          titlePrefix: 'ქონებრივი დავა',
          titleAccent: 'მოგვარებულია',
          rating: '4.9',
          quote:
            'როდესაც ბიუროკრატიულმა დაბრკოლებებმა მშენებლობა შეაჩერა, გიორგი უმაღლესი იურიდიული სიზუსტით ჩაერთო. ნებართვები რეკორდულ დროში მივიღეთ.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2003.png',
        },
        {
          id: 3,
          name: 'არტურ პენდელტონი',
          role: 'მმართველი პარტნიორი',
          badge: 'სახელშეკრულებო უფლებები',
          titlePrefix: 'სამართლიანობა',
          titleAccent: 'მიღწეულია',
          rating: '5.0',
          quote:
            'კორპორაციულ სფეროში გატარებულმა ათწლეულებმა მასწავლა, რამდენად იშვიათია ნამდვილი იურიდიული ოსტატობა. ეს ფირმა შეუპოვარი დაცვის განსახიერებაა.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2004.png',
        },
        {
          id: 4,
          name: 'რობერტ ჰეისი',
          role: 'საოჯახო დავის კლიენტი',
          badge: 'მემკვიდრეობა და ოჯახი',
          titlePrefix: 'სრული სიმშვიდე და',
          titleAccent: 'სიცხადე',
          rating: '5.0',
          quote:
            'გულისხმიერი, უაღრესად კომპეტენტური და ოპერატიული. ჩემი ცხოვრების ყველაზე რთულ მომენტში გიორგის ჩართულობამ ჩემს ოჯახს სრული სიმშვიდე მოუტანა.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2005.png',
        },
      ],
    },
    teamSection: {
      badgeNumber: '(08)',
      badgeText: 'ჩვენი გუნდი',
      headline: 'გაიცანით მართლმსაჯულების არქიტექტორები',
      headlineHighlight: 'არქიტექტორები',
      subtitle: 'გიორგი გუბელაძის ხელმძღვანელობით, ჩვენი გუნდი აერთიანებს რეგიონის სიღრმისეულ ცოდნასა და საერთაშორისო სტანდარტებს.',
      leadName: 'გიორგი გუბელაძე',
      leadRole: 'დამფუძნებელი და წამყვანი ადვოკატი',
      bioParagraph:
        'საქართველოს ადვოკატთა ასოციაციის მოქმედი წევრი, GLC-ის დამფუძნებელი გიორგი გუბელაძე სპეციალიზებულია სამართლის ყველა სპექტრში, განსაკუთრებით, სისხლის სამართლის, სამოქალაქო სამართლის, ადმინისტრაციული სამართლის მიმართულებით.',
      pills: ['საქართველოს ადვოკატთა ასოციაცია', '21+ წლიანი გამოცდილება', 'ბათუმისა და თბილისის ოფისები', 'ფლობს: ENG, GEO, RUS, TUR'],
      directBtn: 'პირადი იურიდიული კონსულტაცია',
    },
    blogsSection: {
      headline: 'ბლოგი & პუბლიკაცია',
      headlineHighlight: 'პუბლიკაცია',
      subtitle: 'პრაქტიკული იურიდიული რჩევები, საკანონმდებლო ცვლილებები და სტრატეგიული ანალიზი ჩვენი პრაქტიკოსი ადვოკატებისგან.',
      viewAllBtn: 'ყველა პუბლიკაციის ნახვა',
      readAnalysis: 'სტატიის წაკითხვა',
      posts: [
        {
          id: 1,
          date: '18 სექ, 2026',
          title: 'რა უნდა მოიმოქმედოთ, როდესაც სასამართლო სარჩელს ჩაგაბარებენ',
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
          alt: 'მართლმსაჯულების სასწორი იურიდიულ ლიტერატურასთან',
        },
        {
          id: 2,
          date: '12 სექ, 2026',
          title: '5 აუცილებელი იურიდიული ნაბიჯი მცირე და საშუალო ბიზნესისთვის',
          image: '/.tempmediaStorage/lawwallpaper.jpg',
          alt: 'ადვოკატი ხელშეკრულების ხელმოწერისას',
        },
        {
          id: 3,
          date: '9 სექ, 2026',
          title: 'თქვენი უფლებები გამოძიებისა და საგამოძიებო მოქმედებების დროს',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop',
          alt: 'თემიდას ქანდაკება ბიბლიოთეკაში',
        },
      ],
    },
    contactsSection: {
      responseGuarantee: 'უკუკავშირი',
      businessDayHighlight: '1 სამუშაო დღეში',
      headline: 'დაჯავშნეთ კონსულტაცია',
      headlineHighlight: 'კონსულტაცია',
      subtitle: 'გაგვიზიარეთ თქვენი საქმის დეტალები და მიიღეთ კვალიფიციური იურიდიული მხარდაჭერა.',
      callUs: 'დაგვირეკეთ',
      emailMe: 'მოგვწერეთ',
      fullNameLabel: 'სრული სახელი',
      fullNamePlaceholder: 'შეიყვანეთ თქვენი სახელი და გვარი',
      emailLabel: 'ელექტრონული ფოსტა',
      emailPlaceholder: 'lawyergiorgigubeladze@gmail.com',
      phoneLabel: 'ტელეფონის ნომერი',
      phonePlaceholder: 'თქვენი საკონტაქტო ნომერი',
      serviceLabel: 'საჭირო მომსახურება',
      servicePlaceholder: 'აირჩიეთ მომსახურება',
      messageLabel: 'შეტყობინება',
      messagePlaceholder: 'მოგვწერეთ თქვენი საქმის შესახებ...',
      sendMessageBtn: 'შეტყობინების გაგზავნა',
      sendingBtn: 'იგზავნება...',
      servicesList: [
        'სისხლის სამართალი',
        'კორპორაციული და ბიზნეს სამართალი',
        'დავების გადაწყვეტა და სასამართლო',
        'ადმინისტრაციული და სამოქალაქო სამართალი',
        'ინტელექტუალური საკუთრება',
        'უძრავი ქონება და ტრანზაქციები',
        'აქტივების დაცვა და მემკვიდრეობა',
        'სხვა იურიდიული მომსახურება',
      ],
      successTitle: 'მოთხოვნა მიღებულია',
      successDesc: 'გმადლობთ. გიორგი გუბელაძე და იურიდიული გუნდი დაგიკავშირდებათ 1 სამუშაო დღის განმავლობაში.',
      openWhatsAppDirectly: 'WhatsApp-ში გადასვლა',
      sendAnotherBtn: 'სხვა შეტყობინების გაგზავნა',
    },
    footer: {
      marqueeWord1: 'ვისაუბროთ',
      marqueeWord2: 'სამართალზე',
      bookBtn: 'კონსულტაციის დაჯავშნა',
      justiceSlogan: 'სამართალი მოქმედებაში',
      copyright: '© 2026 GLC Law Company. ყველა უფლება დაცულია.',
    },
  },

  RUS: {
    nav: {
      backToTop: 'Наверх',
      menu: 'МЕНЮ',
      closeMenu: 'Закрыть меню',
      scheduleConsultation: 'ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ',
      home: 'ГЛАВНАЯ',
      about: 'О КОМПАНИИ GLC LAW COMPANY',
      services: 'ПРАКТИКИ И УСЛУГИ',
      cases: 'УСПЕШНЫЕ ДЕЛА',
      testimonials: 'ОТЗЫВЫ',
      team: 'НАША КОМАНДА',
      blogs: 'СТАТЬИ И АНАЛИТИКА',
      contact: 'КОНТАКТЫ И АДРЕС',
      officeHeadquarters: 'ГЛАВНЫЙ ОФИС',
      address: 'Грузия, Батуми, ул. Кутаиси #31, офис 6000',
      rightsReserved: '© 2026 GLC Law Company. Все права защищены.',
      attorneyNotice: 'Реклама адвокатских услуг. Предыдущие результаты не гарантируют аналогичный исход.',
    },
    hero: {
      mainTitle: 'Надежная правовая защита для растущего бизнеса',
      mainTitleHighlight: 'бизнеса',
      subheading: 'Благодаря многолетней судебной практике и стратегическому консультированию наша деятельность основана на доверии, прозрачности и результатах.',
      trustHeadline: 'ДОВЕРИЕ. ОПЫТ. СТРАТЕГИЯ.',
      trustParagraph:
        'Более 21 года успешной практики в уголовном, административном и гражданском судопроизводстве. Адвокат Георгий Губеладзе — член Палаты адвокатов Грузии, обеспечивающий бескомпромиссную правовую защиту.',
      section2Badge: 'УГОЛОВНОЕ ПРАВО С 2005 ГОДА',
      section2Subline: 'Гражданские и административные споры',
      section2Tagline:
        'Правильная юридическая стратегия и бескомпромиссная защита — залог вашей победы.',
      memberBadge: 'ЧЛЕН',
      barAssociation: 'АССОЦИАЦИИ АДВОКАТОВ',
      badgePillars: ['Правовая экспертиза', 'Клиентоориентированность', 'Профессиональная этика'],
      bookConsultation: 'Записаться на консультацию',
      confidentialSession: 'КОНФИДЕНЦИАЛЬНАЯ ПРАВОВАЯ СЕССИЯ',
      modalSubtitle: 'Назначьте прямую консультацию с Георгием Губеладзе.',
      fullNameLabel: 'ФИО *',
      workEmailLabel: 'Электронная почта *',
      phoneLabel: 'Номер телефона *',
      practiceAreaLabel: 'Основная сфера',
      preferredDateLabel: 'Желаемая дата',
      preferredTimeLabel: 'Желаемое время',
      caseSummaryLabel: 'Краткое описание дела',
      confirmScheduleBtn: 'Подтвердить запись',
      requestReceived: 'ЗАПРОС ПРИНЯТ',
      requestReceivedDesc: 'Спасибо. Наша юридическая команда свяжется с вами в течение 2 рабочих часов для подтверждения времени.',
      options: {
        corporate: 'Корпоративное и коммерческое право',
        ma: 'Слияния и поглощения (M&A)',
        litigation: 'Судебные споры',
        ip: 'Интеллектуальная собственность',
        regulatory: 'Комплаенс и регулирование',
      },
    },
    aboutMe: {
      badgeNumber: '(01)',
      badgeText: 'О НАС',
      headingText: 'АДВОКАТ, ДЛЯ КОТОРОГО ВАШЕ ДЕЛО ДЕЙСТВИТЕЛЬНО ЯВЛЯЕТСЯ ПРИОРИТЕТОМ',
      headingHighlight: 'ПРИОРИТЕТОМ',
      quoteTitle: 'СТРАТЕГИЧЕСКАЯ ЗАЩИТА С РЕАЛЬНЫМ РЕЗУЛЬТАТОМ',
      quoteParagraph:
        'Юридическое представительство — это не просто знание законов: защита заключается в получении доказательств, осознании поставленных на карту интересов и представлении верной стратегии в суде — путь к победе!',
      quoteParagraph2:
        'Когда речь идет о члене семьи или свободе, глубокие знания и реальный опыт имеют принципиальное значение!',
      founderTitle: 'ГЕОРГИЙ ГУБЕЛАДЗЕ',
      founderSubtitle: 'ОСНОВАТЕЛЬ И УПРАВЛЯЮЩИЙ ПАРТНЕР',
      exploreBtn: 'ПРАКТИКИ И УСЛУГИ',
    },
    servicesSection: {
      badgeNumber: '03',
      badgeText: 'Наши услуги',
      headline: 'Надежная экспертиза в ключевых отраслях права',
      headlineHighlight: 'экспертиза',
      subtitle: 'Мы предоставляем всестороннюю правовую поддержку с индивидуальным подходом к каждому доверителю.',
      seeDetails: 'Подробнее',
      items: [
        {
          id: 'criminal-defense',
          categoryNumber: '01.',
          categoryName: 'Уголовное право',
          title: 'Уголовная защита на всех стадиях процесса',
          bullets: [
            'Бескомпромиссная защита на стадиях следствия и суда',
            'Глубокий анализ дела и построение линии защиты',
            'Визиты в пенитенциарные учреждения и оперативная помощь',
          ],
          tags: ['Уголовная защита', 'Следствие', 'Суд'],
          detailedOverview:
            'С более чем 21 годом опыта в уголовных делах мы проводим независимые адвокатские расследования, исключаем недопустимые доказательства и оперативно посещаем пенитенциарные учреждения для защиты доверителей.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
              caption: 'Судебная защита и участие в заседаниях',
            },
            {
              url: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1000&auto=format&fit=crop',
              caption: 'Анализ доказательств и экспертиза',
            },
          ],
        },
        {
          id: 'family-law',
          categoryNumber: '02.',
          categoryName: 'Гражданское и семейное право',
          title: 'Семейные споры и гражданские дела',
          bullets: [
            'Семейные споры, бракоразводные процессы и раздел имущества',
            'Опека над детьми, алименты и защита интересов семьи',
            'Урегулирование ключевых гражданских и договорных споров',
          ],
          tags: ['Семейное право', 'Гражданские споры', 'Медиация'],
          detailedOverview:
            'Мы сочетаем эмпатию и бескомпромиссную защиту в суде: справедливый раздел имущества, алиментные соглашения, защита прав детей и ведение гражданских споров.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
              caption: 'Конфиденциальные консультации и медиация',
            },
            {
              url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop',
              caption: 'Защита прав детей и супругов',
            },
          ],
        },
        {
          id: 'real-estate-law',
          categoryNumber: '03.',
          categoryName: 'Недвижимость и сделки',
          title: 'Сделки с недвижимостью и оформление прав',
          bullets: [
            'Полное сопровождение сделок с недвижимостью и договоров',
            'Проверка чистоты титула, Due Diligence и регистрация прав',
            'Эффективное разрешение споров по праву собственности и аренде',
          ],
          tags: ['Сделки с недвижимостью', 'Due Diligence', 'Право собственности'],
          detailedOverview:
            'Сопровождение инвесторов и частных владельцев: купля-продажа, проверка юридической чистоты объекта, договоры и безопасное закрытие сделок.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
              caption: 'Коммерческий девелопмент и сделки',
            },
            {
              url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
              caption: 'Юридическая экспертиза объекта',
            },
          ],
        },
      ],
    },
    caseStudiesSection: {
      badgeNumber: '(04)',
      badgeText: 'УСПЕШНЫЕ ДЕЛА',
      headline: 'ДОКАЗАННЫЕ РЕЗУЛЬТАТЫ В СЛОЖНЕЙШИХ ДЕЛАХ',
      headlineHighlight: 'РЕЗУЛЬТАТЫ',
      subtitle: 'История побед в суде, выгодных мировых соглашений и успешных переговоров.',
      viewSummary: 'Обзор дела',
      items: [
        {
          id: 'case-1',
          title: 'От стартапа к успеху',
          subtitle: 'Регистрация бизнеса и корпоративное право',
          description:
            'Юридическое сопровождение IT-компании: от учреждения до крупных контрактов.',
          tags: ['Корпоративный юрист', 'Контракты'],
          imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-2',
          title: 'Прекращение обвинений',
          subtitle: 'Уголовная защита и процесс',
          description:
            'Успешная защита клиента от тяжких обвинений с полным прекращением дела и реабилитацией.',
          tags: ['Уголовная защита', 'Прекращение дела'],
          imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-4',
          title: 'Победа в коммерческом суде',
          subtitle: 'Гражданский процесс и партнерские споры',
          description:
            'Полное взыскание многомиллионного ущерба в споре о нарушении фидуциарных обязанностей.',
          tags: ['Гражданский процесс', 'Решение суда'],
          imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-5',
          title: 'Зонирование и приобретение участка',
          subtitle: 'Недвижимость и развитие',
          description:
            'Получение муниципальных разрешений и закрытие сделки по логистическому хабу в 40 акров.',
          tags: ['Недвижимость', 'Разрешение на зонирование'],
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-6',
          title: 'Защита интеллектуальной собственности',
          subtitle: 'Товарные знаки и патенты',
          description:
            'Судебный запрет незаконного использования товарного знака и защита исходного кода ПО.',
          tags: ['Защита IP', 'Судебный запрет'],
          imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
      ],
    },
    metricsSection: {
      tag: 'ПРАВОСУДИЕ В ДЕЙСТВИИ',
      watermark: 'ПРАВО',
      headline: 'Вы заслуживаете адвоката, который борется за вас',
      headlineHighlight: 'борется',
      subtitle: 'Каждый клиент заслуживает максимальной преданности делу и защиты, ориентированной на результат.',
      stat1Label: 'Лет юридической практики',
      stat2Label: 'Успешных дел',
      stat3Label: 'Возмещенных активов',
    },
    testimonialsSection: {
      badgeNumber: '(06)',
      badgeText: 'ОТЗЫВЫ КЛИЕНТОВ',
      headline: 'ОТЗЫВЫ НАШИХ КЛИЕНТОВ',
      headlineHighlight: 'ОТЗЫВЫ',
      subtitle: 'Честные мнения предпринимателей, семей и компаний, доверивших нам свои главные правовые вопросы.',
      items: [
        {
          id: 0,
          name: 'Дэвид Митчелл',
          role: 'Корпоративный клиент',
          badge: 'Бизнес-спор',
          titlePrefix: 'ДЕЛО ВЫИГРАНО',
          titleAccent: 'УВЕРЕННО',
          rating: '5.0',
          quote:
            'Георгий внимательно выслушал, объяснил все этапы и добился максимального результата. На протяжении всего процесса я ощущал полную правовую защиту.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2001.png',
        },
        {
          id: 1,
          name: 'Маркус Стерлинг',
          role: 'Защита активов',
          badge: 'Управление капиталом',
          titlePrefix: 'АКТИВЫ ЗАЩИЩЕНЫ',
          titleAccent: 'БЕЗУПРЕЧНО',
          rating: '5.0',
          quote:
            'От первой встречи до финального решения — глубина стратегии превзошла все ожидания. Незаменимый юридический партнер.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2002.png',
        },
        {
          id: 2,
          name: 'Джулиан Вэнс',
          role: 'Инвестор в недвижимость',
          badge: 'Недвижимость и стройка',
          titlePrefix: 'СПОР ПО ЗОНИРОВАНИЮ',
          titleAccent: 'УРЕГУЛИРОВАН',
          rating: '4.9',
          quote:
            'Когда согласования зашли в тупик, Георгий вмешался с исключительной юридической точностью. Мы получили разрешения в кратчайшие сроки.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2003.png',
        },
        {
          id: 3,
          name: 'Артур Пендлтон',
          role: 'Топ-менеджер корпорации',
          badge: 'Договорные права',
          titlePrefix: 'СПРАВЕДЛИВОСТЬ',
          titleAccent: 'ДОСТИГНУТА',
          rating: '5.0',
          quote:
            'Десятилетия в бизнесе научили меня ценить настоящее юридическое мастерство. Эта фирма — образец преданности клиенту и судебной мощи.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2004.png',
        },
        {
          id: 4,
          name: 'Роберт Хейс',
          role: 'Семейное дело',
          badge: 'Наследство и семья',
          titlePrefix: 'ЯСНОСТЬ И ПОЛНОЕ',
          titleAccent: 'СПОКОЙСТВИЕ',
          rating: '5.0',
          quote:
            'Тактичный, невероятно проницательный и всегда на связи. В самый трудный момент участие Георгия вернуло моей семье уверенность.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2005.png',
        },
      ],
    },
    teamSection: {
      badgeNumber: '(08)',
      badgeText: 'НАША КОМАНДА',
      headline: 'Познакомьтесь с архитекторами правосудия',
      headlineHighlight: 'правосудия',
      subtitle: 'Под руководством Георгия Губеладзе наша практика сочетает глубокое знание законодательства региона с международными стандартами.',
      leadName: 'Георгий Губеладзе',
      leadRole: 'Основатель и ведущий адвокат',
      bioParagraph:
        'Специализируется на корпоративных спорах, сложном гражданском судопроизводстве и уголовной защите. Член Ассоциации адвокатов Грузии с правом выступления в апелляционных инстанциях и Верховном Суде.',
      pills: ['Ассоциация адвокатов Грузии', '21+ год практики', 'Офисы в Батуми и Тбилиси', 'Языки: ENG, GEO, RUS, TUR'],
      directBtn: 'Прямая юридическая консультация',
    },
    blogsSection: {
      headline: 'Актуальная аналитика',
      headlineHighlight: 'аналитика',
      subtitle: 'Практические советы, изменения в законодательстве и стратегический анализ от наших адвокатов.',
      viewAllBtn: 'Все публикации',
      readAnalysis: 'Читать статью',
      posts: [
        {
          id: 1,
          date: '18 сен, 2026',
          title: 'Что делать, если вам предъявили судебный иск',
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
          alt: 'Весы правосудия на дубовом столе с кодексами',
        },
        {
          id: 2,
          date: '12 сен, 2026',
          title: '5 главных правовых шагов для каждого бизнеса',
          image: '/.tempmediaStorage/lawwallpaper.jpg',
          alt: 'Адвокат подписывает юридические документы',
        },
        {
          id: 3,
          date: '9 сен, 2026',
          title: 'Ваши права при следственных действиях и проверках',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop',
          alt: 'Статуя Фемиды с весами в юридической библиотеке',
        },
      ],
    },
    contactsSection: {
      responseGuarantee: 'Ответ гарантирован в течение',
      businessDayHighlight: '1 рабочего дня',
      headline: 'ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ',
      headlineHighlight: 'КОНСУЛЬТАЦИЮ',
      subtitle: 'Поделитесь деталями вашего вопроса и получите профессиональное юридическое решение.',
      callUs: 'Позвонить',
      emailMe: 'Написать',
      fullNameLabel: 'Ваше имя',
      fullNamePlaceholder: 'Введите имя и фамилию',
      emailLabel: 'Электронная почта',
      emailPlaceholder: 'lawyergiorgigubeladze@gmail.com',
      phoneLabel: 'Номер телефона',
      phonePlaceholder: 'Ваш контактный номер',
      serviceLabel: 'Требуемая услуга',
      servicePlaceholder: 'Выберите категорию',
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Опишите вашу ситуацию...',
      sendMessageBtn: 'Отправить сообщение',
      sendingBtn: 'Отправка...',
      servicesList: [
        'Уголовное право и защита',
        'Корпоративное и коммерческое право',
        'Судебные разбирательства и споры',
        'Гражданские и административные дела',
        'Интеллектуальная собственность',
        'Недвижимость и сделки',
        'Защита активов и наследование',
        'Другие юридические услуги',
      ],
      successTitle: 'ЗАПРОС ПРИНЯТ',
      successDesc: 'Спасибо. Георгий Губеладзе и юридическая команда свяжутся с вами в течение 1 рабочего дня.',
      openWhatsAppDirectly: 'Открыть чат WhatsApp напрямую',
      sendAnotherBtn: 'Отправить другое сообщение',
    },
    footer: {
      marqueeWord1: 'ПОГОВОРИМ О',
      marqueeWord2: 'ПРАВЕ',
      bookBtn: 'Записаться на консультацию',
      justiceSlogan: 'Правосудие в действии',
      copyright: '© 2026 GLC Law Company. Все права защищены.',
    },
  },

  TUR: {
    nav: {
      backToTop: 'Yukarı Dön',
      menu: 'MENÜ',
      closeMenu: 'Menüyü Kapat',
      scheduleConsultation: 'RANDEVU ALIN',
      home: 'ANA SAYFA',
      about: 'GLC LAW COMPANY HAKKINDA',
      services: 'UZMANLIK ALANLARI',
      cases: 'BAŞARILI DAVALAR',
      testimonials: 'MÜVEKKİL YORUMLARI',
      team: 'EKİBİMİZ',
      blogs: 'HUKUKİ YAZILAR',
      contact: 'İLETİŞİM VE KONUM',
      officeHeadquarters: 'GENEL MERKEZ',
      address: 'Gürcistan, Batum, Kutaisi Cad. #31, Ofis 6000',
      rightsReserved: '© 2026 GLC Law Company. Tüm hakları saklıdır.',
      attorneyNotice: 'Avukatlık tanıtımıdır. Geçmiş sonuçlar benzer sonucu garanti etmez.',
    },
    hero: {
      mainTitle: 'Büyüyen İşletmeler İçin Güvenilir Hukuki Danışmanlık',
      mainTitleHighlight: 'İşletmeler',
      subheading: 'Yılların mahkeme deneyimi ve stratejik danışmanlığıyla faaliyetlerimiz güven, şeffaflık ve sonuç odaklılık üzerine kuruludur.',
      trustHeadline: 'GÜVEN. DENEYİM. STRATEJİ.',
      trustParagraph:
        'Ceza, idare ve medeni hukuk alanlarında 21 yılı aşkın tecrübesiyle Giorgi Gubeladze, Gürcistan Barolar Birliği üyesi olarak sonuç odaklı hukuki strateji ve tavizsiz koruma sağlar.',
      section2Badge: "2005'TEN BERİ CEZA HUKUKU",
      section2Subline: 'Hukuk ve İdare Davaları',
      section2Tagline:
        'Doğru hukuki strateji ve tavizsiz savunma, zaferinizin teminatıdır.',
      memberBadge: 'BARO BİRLİĞİ',
      barAssociation: 'RESMİ ÜYESİ',
      badgePillars: ['Hukuki Uzmanlık', 'Müvekkil Odaklı', 'Etik Temsil'],
      bookConsultation: 'Danışmanlık Randevusu Al',
      confidentialSession: 'GİZLİ HUKUKİ DANIŞMA OTURUMU',
      modalSubtitle: 'Giorgi Gubeladze ile doğrudan strateji toplantısı planlayın.',
      fullNameLabel: 'Adınız Soyadınız *',
      workEmailLabel: 'E-posta Adresiniz *',
      phoneLabel: 'Telefon Numaranız *',
      practiceAreaLabel: 'Hukuki Alan',
      preferredDateLabel: 'Tercih Edilen Tarih',
      preferredTimeLabel: 'Tercih Edilen Saat',
      caseSummaryLabel: 'Dava Özeti ve Notlar',
      confirmScheduleBtn: 'Randevuyu Onayla ve Planla',
      requestReceived: 'TALEBİNİZ ALINDI',
      requestReceivedDesc: 'Teşekkür ederiz. Kıdemli hukuk ekibimiz 2 iş saati içinde randevunuzu kesinleştirmek için sizinle iletişime geçecektir.',
      options: {
        corporate: 'Şirketler ve Ticaret Hukuku',
        ma: 'Birleşme ve Devralmalar (M&A)',
        litigation: 'Ticari Davalar',
        ip: 'Fikri Mülkiyet Stratejisi',
        regulatory: 'Uyum ve Mevzuat',
      },
    },
    aboutMe: {
      badgeNumber: '(01)',
      badgeText: 'HAKKIMIZDA',
      headingText: 'DAVANIZIN GERÇEKTEN BİR ÖNCELİK OLDUĞU BİR AVUKAT',
      headingHighlight: 'ÖNCELİK',
      quoteTitle: 'GERÇEK ETKİYE DAYANAN STRATEJİK SAVUNMA',
      quoteParagraph:
        'Hukuki temsil sadece kanunları bilmekten ibaret değildir; gerçek savunma, delilleri toplamak, söz konusu menfaatleri kavramak ve mahkemede doğru stratejiyi sunarak zafere ilerlemektir!',
      quoteParagraph2:
        'Söz konusu bir aile ferdi veya özgürlük olduğunda, bilgi ve tecrübe ilkesel olarak hayati öneme sahiptir!',
      founderTitle: 'GIORGI GUBELADZE',
      founderSubtitle: 'KURUCU VE YÖNETİCİ ORTAK',
      exploreBtn: 'UZMANLIK ALANLARINI İNCELE',
    },
    servicesSection: {
      badgeNumber: '03',
      badgeText: 'Hukuki Hizmetlerimiz',
      headline: 'Uzmanlaştığımız her hukuk alanında güvenilir tecrübe',
      headlineHighlight: 'güvenilir',
      subtitle: 'Geniş bir uygulama alanında derin bilgi birikimi ve müvekkil öncelikli yaklaşımla profesyonel hukuki destek sağlıyoruz.',
      seeDetails: 'Detayları Gör',
      items: [
        {
          id: 'criminal-defense',
          categoryNumber: '01.',
          categoryName: 'Ceza Hukuku',
          title: 'Ceza Davalarında Etkin Savunma',
          bullets: [
            'Soruşturma ve mahkeme aşamalarında tavizsiz savunma',
            'Derinlemesine dava analizi ve stratejik savunma planı',
            'Ceza infaz kurumlarına ziyaret ve acil hukuki destek',
          ],
          tags: ['Ağır Ceza', 'Soruşturma', 'Cezaevi Ziyareti'],
          detailedOverview:
            'Ceza hukuku alanında 21 yılı aşkın tecrübemizle soruşturmanın başından hüküm aşamasına kadar tavizsiz savunma sağlıyor, hukuka aykırı delillere itiraz ediyor ve tutukluları ceza infaz kurumlarında ivedilikle ziyaret ediyoruz.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
              caption: 'Duruşma Temsili ve Ceza Savunması',
            },
            {
              url: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1000&auto=format&fit=crop',
              caption: 'Delil İncelemesi ve Dosya İtirazları',
            },
          ],
        },
        {
          id: 'family-law',
          categoryNumber: '02.',
          categoryName: 'Medeni ve Aile Hukuku',
          title: 'Aile Davaları ve Medeni Uyuşmazlıklar',
          bullets: [
            'Aile uyuşmazlıkları, boşanma davaları ve mal paylaşımı',
            'Çocuk velayeti, nafaka ve aile haklarının korunması',
            'Temel medeni ve sözleşme uyuşmazlıklarının çözümü',
          ],
          tags: ['Aile Hukuku', 'Medeni Dava', 'Arabuluculuk'],
          detailedOverview:
            'Aile hukuku davalarında empati ile mahkeme kararlılığını bir araya getiriyoruz: adil mal paylaşımı, velayet planlaması, nafaka ve medeni hukuk uyuşmazlıklarında etkin temsil.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
              caption: 'Özel Danışmanlık ve Arabuluculuk',
            },
            {
              url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop',
              caption: 'Çocuk ve Eş Haklarının Korunması',
            },
          ],
        },
        {
          id: 'real-estate-law',
          categoryNumber: '03.',
          categoryName: 'Gayrimenkul Hukuku',
          title: 'Gayrimenkul İşlemleri ve Mülk Devri',
          bullets: [
            'Gayrimenkul alım-satım ve sözleşme süreçlerinde tam destek',
            'Tapu incelemeleri, hukuki durum tespiti (Due Diligence) ve tescil',
            'Mülkiyet ve kira uyuşmazlıklarının kararlı çözümü',
          ],
          tags: ['Mülk Devri', 'Due Diligence', 'Tapu Güvencesi'],
          detailedOverview:
            'Yatırımcıları ve mülk sahiplerini gayrimenkul alımlarında, tapu devirlerinde ve sözleşme denetiminde tam hukuki güvenceyle yönlendiriyoruz.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
              caption: 'Ticari Arazi Geliştirme ve Satın Alma',
            },
            {
              url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
              caption: 'Tapu Tescili ve Hukuki İnceleme',
            },
          ],
        },
      ],
    },
    caseStudiesSection: {
      badgeNumber: '(04)',
      badgeText: 'BAŞARILI DAVALAR',
      headline: 'KRİTİK DAVALARDA KANITLANMIŞ SONUÇLAR',
      headlineHighlight: 'SONUÇLAR',
      subtitle: 'Kararlı mahkeme zaferleri, stratejik uzlaşmalar ve yüksek değerli ticari müzakereler.',
      viewSummary: 'Dava Özetini İncele',
      items: [
        {
          id: 'case-1',
          title: 'Girişimden Küresel Başarıya',
          subtitle: 'Şirket Kuruluşu ve Kurumsal Danışmanlık',
          description:
            'Büyüyen bir teknoloji şirketine kuruluş, sözleşme müzakereleri ve uzun vadeli stratejide tam danışmanlık.',
          tags: ['Kurumsal Danışmanlık', 'Sözleşmeler'],
          imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-2',
          title: 'Suçlamaların Düşürülmesi',
          subtitle: 'Ceza Hukuku ve Duruşma Savunması',
          description:
            'Ağır ceza davasında müvekkilin başarıyla savunulması ve tüm suçlamaların düşürülmesi.',
          tags: ['Ceza Hukuku', 'Davanın Düşmesi'],
          imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-4',
          title: 'Ticari Mahkeme Zaferi',
          subtitle: 'Medeni Dava ve Ortaklık İhtilafı',
          description:
            'Ortaklar arası sadakat ihlali davasında müvekkil lehine milyonlarca dolarlık tazminat kararı.',
          tags: ['Ticari Dava', 'Mahkeme Kararı'],
          imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-5',
          title: 'İmar Onayı ve Arazi Devri',
          subtitle: 'Gayrimenkul Hukuku ve Geliştirme',
          description:
            '40 dönümlük lojistik merkezi için belediye imar onaylarının alınması ve devir işleminin tamamlanması.',
          tags: ['Gayrimenkul', 'İmar İzni'],
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
        {
          id: 'case-6',
          title: 'Fikri Mülkiyet İhtiyati Tedbiri',
          subtitle: 'Patent ve Ticari Sır Davası',
          description:
            'Marka hakkı ihlalini durduran acil ihtiyati tedbir kararı alınarak yazılım kodunun korunması.',
          tags: ['Fikri Mülkiyet', 'İhtiyati Tedbir'],
          imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
      ],
    },
    metricsSection: {
      tag: 'ADALET EYLEMDE',
      watermark: 'ADALET',
      headline: 'Sizin için mücadele eden bir avukatı hak ediyorsunuz',
      headlineHighlight: 'mücadele',
      subtitle: 'Her müvekkil tavizsiz bir bağlılığı ve sonuç odaklı hukuki savunmayı hak eder.',
      stat1Label: 'Yıllık Deneyim',
      stat2Label: 'Başarı Oranı',
      stat3Label: 'Müvekkil Kazanımı',
    },
    testimonialsSection: {
      badgeNumber: '(06)',
      badgeText: 'MÜVEKKİL YORUMLARI',
      headline: 'MÜVEKKİLLERİMİZ NE DİYOR',
      headlineHighlight: 'DİYOR',
      subtitle: 'En kritik hukuki davalarında bize güvenen girişimcilerden, ailelerden ve şirketlerden dürüst geri bildirimler.',
      items: [
        {
          id: 0,
          name: 'David Mitchell',
          role: 'Kurumsal Dava Müvekkili',
          badge: 'Ticari İhtilaf',
          titlePrefix: 'KAZANILAN DAVA',
          titleAccent: 'GÜVENLE',
          rating: '5.0',
          quote:
            'Giorgi dikkatle dinledi, her aşamayı açıkça anlattı ve en iyi sonuç için savaştı. Tüm süreç boyunca kendimi güvende ve bilgili hissettim.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2001.png',
        },
        {
          id: 1,
          name: 'Marcus Sterling',
          role: 'Varlık Koruma Müvekkili',
          badge: 'Varlık ve Miras',
          titlePrefix: 'KORUNAN VARLIKLAR',
          titleAccent: 'KUSURSUZCA',
          rating: '5.0',
          quote:
            'İlk danışmadan kesin sonuca kadar stratejik derinlik ve tavizsiz uygulama tüm beklentilerimi aştı. Paha biçilmez bir hukuk ortağı.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2002.png',
        },
        {
          id: 2,
          name: 'Julian Vance',
          role: 'Gayrimenkul Yatırımcısı',
          badge: 'İmar ve Ruhsat',
          titlePrefix: 'İMAR İHTİLAFI',
          titleAccent: 'ÇÖZÜLDÜ',
          rating: '4.9',
          quote:
            'Bürokratik engeller projemizi durdurduğunda Giorgi üstün hukuki hassasiyetle devreye girdi. Vizyonumuzdan ödün vermeden rekor sürede onay aldık.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2003.png',
        },
        {
          id: 3,
          name: 'Arthur Pendelton',
          role: 'Üst Düzey Yönetici',
          badge: 'Sözleşme Hakları',
          titlePrefix: 'ADALET VE GÜVEN',
          titleAccent: 'SAĞLANDI',
          rating: '5.0',
          quote:
            'İş dünyasında geçen on yıllar bana gerçek hukuk ustalığının ne kadar nadir olduğunu öğretti. Bu büro adanmış savunmanın simgesidir.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2004.png',
        },
        {
          id: 4,
          name: 'Robert Hayes',
          role: 'Aile Hukuku Müvekkili',
          badge: 'Miras ve Aile',
          titlePrefix: 'NETLİK VE HUZUR',
          titleAccent: 'SAĞLANDI',
          rating: '5.0',
          quote:
            'Şefkatli, son derece zeki ve her zaman ulaşılabilir. Hayatımın en stresli döneminde Giorgi’nin yanımızda olması aileme tam bir huzur verdi.',
          image: 'https://cdn.jiro.build/Jahid/Extra/Img/avater%2005.png',
        },
      ],
    },
    teamSection: {
      badgeNumber: '(08)',
      badgeText: 'EKİBİMİZ',
      headline: 'Adaletin Mimarları ile Tanışın',
      headlineHighlight: 'Adaletin',
      subtitle: 'Giorgi Gubeladze liderliğindeki ekibimiz, bölgesel tecrübeyi uluslararası standartlarla birleştirerek müvekkillerine tavizsiz hukuki destek sunar.',
      leadName: 'Giorgi Gubeladze',
      leadRole: 'Kurucu ve Baş Dava Avukatı',
      bioParagraph:
        'Şirket uyuşmazlıkları, karmaşık medeni davalar ve ceza savunmasında 21 yılı aşkın tecrübeye sahiptir. Gürcistan Barolar Birliği üyesi olup istinaf ve temyiz mahkemelerinde tam yetkili avukattır.',
      pills: ['Gürcistan Barolar Birliği', '21+ Yıl Deneyim', 'Batum ve Tiflis Ofisleri', 'Diller: ENG, GEO, RUS, TUR'],
      directBtn: 'Doğrudan Hukuki Danışmanlık',
    },
    blogsSection: {
      headline: 'Güncel Hukuki Yazılar',
      headlineHighlight: 'Yazılar',
      subtitle: 'Dava avukatlarımızdan pratik hukuki rehberlik, mevzuat güncellemeleri ve stratejik analizler.',
      viewAllBtn: 'Tüm Yayınları Görüntüle',
      readAnalysis: 'Yazıyı Oku',
      posts: [
        {
          id: 1,
          date: '18 Eyl, 2026',
          title: 'Hakkınızda Dava Açıldığında Yapmanız Gerekenler',
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
          alt: 'Hukuk kitapları ve adalet terazisi',
        },
        {
          id: 2,
          date: '12 Eyl, 2026',
          title: 'Her Küçük İşletmenin Atması Gereken 5 Hukuki Adım',
          image: '/.tempmediaStorage/lawwallpaper.jpg',
          alt: 'Avukat sözleşme imzalarken',
        },
        {
          id: 3,
          date: '9 Eyl, 2026',
          title: 'Ceza Soruşturması Sırasında Sahip Olduğunuz Haklar',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop',
          alt: 'Adalet heykeli ve terazi',
        },
      ],
    },
    contactsSection: {
      responseGuarantee: 'Yanıt garantisi',
      businessDayHighlight: '1 iş günü içinde',
      headline: 'DANIŞMANLIK RANDEVUSU AL',
      headlineHighlight: 'DANIŞMANLIK',
      subtitle: 'Detayları bizimle paylaşın ve durumunuza özel uzman hukuki destek alın.',
      callUs: 'Bizi Arayın',
      emailMe: 'E-posta Gönderin',
      fullNameLabel: 'Adınız Soyadınız',
      fullNamePlaceholder: 'Adınızı ve soyadınızı girin',
      emailLabel: 'E-posta adresiniz',
      emailPlaceholder: 'lawyergiorgigubeladze@gmail.com',
      phoneLabel: 'Telefon numaranız',
      phonePlaceholder: 'İletişim numaranız',
      serviceLabel: 'İhtiyaç duyulan hizmet',
      servicePlaceholder: 'Bir Hizmet Seçin',
      messageLabel: 'Mesajınız',
      messagePlaceholder: 'Mesajınızı buraya yazın...',
      sendMessageBtn: 'Mesaj Gönder',
      sendingBtn: 'Gönderiliyor...',
      servicesList: [
        'Ceza Hukuku ve Savunma',
        'Şirketler ve Ticaret Hukuku',
        'Dava ve Uyuşmazlık Çözümü',
        'İdare ve Medeni Hukuk Davaları',
        'Fikri Mülkiyet Hukuku',
        'Gayrimenkul ve İmar Hukuku',
        'Varlık Koruma ve Miras Hukuku',
        'Diğer Hukuki Hizmetler',
      ],
      successTitle: 'TALEBİNİZ ALINDI',
      successDesc: 'Teşekkür ederiz. Giorgi Gubeladze ve hukuk ekibimiz talebinizi almış olup 1 iş günü içinde sizinle iletişime geçecektir.',
      openWhatsAppDirectly: 'WhatsApp Sohbetini Doğrudan Aç',
      sendAnotherBtn: 'Başka Bir Mesaj Gönder',
    },
    footer: {
      marqueeWord1: 'HUKUKU',
      marqueeWord2: 'KONUŞALIM',
      bookBtn: 'Danışmanlık Randevusu Al',
      justiceSlogan: 'Adalet Eylemde',
      copyright: '© 2026 GLC Law Company. Tüm hakları saklıdır.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('glc_law_company_lang') || localStorage.getItem('glc_law_firm_lang');
      if (saved && (saved === 'ENG' || saved === 'GEO' || saved === 'RUS' || saved === 'TUR')) {
        return saved as Language;
      }
    } catch (e) {
      // localStorage may fail or be disabled
    }
    return 'ENG';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('glc_law_company_lang', lang);
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-lang', language);
      document.documentElement.setAttribute(
        'lang',
        language === 'GEO' ? 'ka' : language === 'RUS' ? 'ru' : language === 'TUR' ? 'tr' : 'en'
      );
    }
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
