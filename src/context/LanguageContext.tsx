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
      about: 'ABOUT GLC LAW FIRM',
      services: 'PRACTICE AREAS',
      cases: 'NOTABLE CASE RESULTS',
      testimonials: 'TESTIMONIALS',
      team: 'OUR TEAM',
      blogs: 'LATEST INSIGHTS',
      contact: 'CONTACT & LOCATION',
      officeHeadquarters: 'OFFICE HEADQUARTERS',
      address: 'Georgia, Batumi, Kutaisi str, office #31, Batumi, Georgia, 6000',
      rightsReserved: '© 2026 GLC Law Firm. All rights reserved.',
      attorneyNotice: 'Attorney Advertising. Prior results do not guarantee a similar outcome.',
    },
    hero: {
      mainTitle: 'Trusted Legal Counsel For Growing Business',
      mainTitleHighlight: 'Business',
      subheading: 'Focused Representation With Purpose',
      trustHeadline: 'TRUSTED. EXPERIENCED. STRATEGIC.',
      trustParagraph:
        'With over 21 years of distinguished expertise in criminal, administrative, and civil litigation, Giorgi Gubeladze is a licensed advocate and recognized member of the Georgian Bar Association (GBA), delivering elite, results-driven legal strategy and uncompromised protection across Georgia and internationally.',
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
      headingText: 'WE STAND FOR PEOPLE WHO REFUSE TO BACK DOWN. FEWER OBSTACLES, MORE CLARITY, AND A LAWYER WHO TREATS YOUR CASE LIKE IT TRULY MATTERS.',
      headingHighlight: 'REFUSE',
      quoteTitle: 'STRATEGIC ADVOCACY ROOTED IN REAL IMPACT',
      quoteParagraph:
        'True legal representation isn’t just about knowing the law — it’s about understanding the stakes. When your business, your family, or your freedom is on the line, you don’t need generic advice. You need an advocate who listens, strategizes, and executes with precision.',
      quoteParagraph2:
        'With decades of combined courtroom trial experience and strategic corporate counsel, our practice is built on trust, transparency, and results.',
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
          id: 'business-law',
          categoryNumber: '01.',
          categoryName: 'Business Law',
          title: 'Business Formation & Corporate Counsel',
          bullets: [
            'Start and structure your business with confidence',
            'Ongoing legal support as your company grows',
            'Contracts, compliance and risk management',
          ],
          tags: ['Business Formation', 'Contracts', 'Compliance', 'Intellectual Property'],
          detailedOverview:
            'From LLC and corporation formations to drafting high-stakes commercial agreements, we act as outside general counsel protecting entrepreneurs, founders, and established enterprises from liability and disputes.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
              caption: 'Corporate Strategy & Governance',
            },
            {
              url: '/.tempmediaStorage/LAW_PICTURE.jpg',
              caption: 'Contract Execution & Regulatory Advisory',
            },
          ],
        },
        {
          id: 'family-law',
          categoryNumber: '02.',
          categoryName: 'Family Law',
          title: 'Divorce & Family Matters',
          bullets: [
            'Compassionate guidance during difficult times',
            'Protecting your family and children’s best interests',
            'Clear, practical solutions for a brighter future',
          ],
          tags: ['Divorce', 'Child Custody', 'Spousal Support', 'Mediation'],
          detailedOverview:
            'We bring empathy and courtroom rigor to family legal disputes, focusing on equitable asset division, tailored parenting plans, and private mediation to protect your family’s well-being and privacy.',
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
          id: 'criminal-defense',
          categoryNumber: '03.',
          categoryName: 'Criminal Defense',
          title: 'Felony & Misdemeanor Defense',
          bullets: [
            'Strong defense for your rights and freedom',
            'Thorough case analysis and strategic planning',
            'Dedicated representation at every stage',
          ],
          tags: ['Felony Defense', 'Misdemeanors', 'DUI / DWI'],
          detailedOverview:
            'When your freedom and future are on the line, we deploy aggressive investigative strategies, challenge unlawful evidence, and fight tirelessly in courtrooms across state and federal jurisdictions.',
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
          id: 'civil-litigation',
          categoryNumber: '04.',
          categoryName: 'Civil Litigation',
          title: 'Commercial Litigation & Dispute Resolution',
          bullets: [
            'Relentless courtroom representation in high-stakes disputes',
            'Tailored arbitration and settlement negotiation strategies',
            'Protecting commercial assets, reputation, and rights',
          ],
          tags: ['Commercial Litigation', 'Breach of Contract', 'Arbitration', 'Appeals'],
          detailedOverview:
            'Handling intricate commercial claims, fiduciary disputes, and breach of fiduciary duties. We combine rigorous legal research with tenacious trial advocacy to secure favorable judgments and settlements.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop',
              caption: 'Federal & State Appellate Litigation',
            },
            {
              url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
              caption: 'Financial Audit & Deposition Prep',
            },
          ],
        },
        {
          id: 'real-estate-law',
          categoryNumber: '05.',
          categoryName: 'Real Estate Law',
          title: 'Property Transactions & Land Development',
          bullets: [
            'Comprehensive support for commercial and residential closings',
            'Title examinations, zoning, and municipal permit clearance',
            'Decisive resolution of boundary, lease, and land disputes',
          ],
          tags: ['Commercial Closings', 'Zoning & Land Use', 'Title Insurance'],
          detailedOverview:
            'Guiding developers, investors, and property owners through acquisitions, title clearances, environmental covenants, and complex municipal approvals to guarantee clean ownership and risk-free deals.',
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
          tags: ['Business Law', 'Corporate Counsel'],
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
          id: 'case-3',
          title: 'High-Asset Estate Preservation',
          subtitle: 'Family Enterprise & Private Mediation',
          description:
            'Protected multi-million family enterprise assets and negotiated amicable marital dissolution with total discretion.',
          tags: ['Family Law', 'Asset Protection'],
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
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
        {
          id: 'case-7',
          title: 'Cross-Border Arbitration',
          subtitle: 'International Trade & Contract Enforcement',
          description:
            'საარბიტრაჟო დავაში მოპოვებული გამარჯვება და ეფექტური აღსრულება.',
          tags: ['International Law', 'Arbitration'],
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
      ],
    },
    metricsSection: {
      tag: 'JUSTICE IN ACTION',
      watermark: 'JUSTICE',
      headline: 'You deserve counsel that fights for you',
      headlineHighlight: 'fights',
      subtitle: 'We believe every client, whether an individual or a business, deserves the same level of commitment, clear communication, and a results-driven approach.',
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
      copyright: '© 2026 GLC Law Firm. All rights reserved.',
    },
  },

  GEO: {
    nav: {
      backToTop: 'ზევით დაბრუნება',
      menu: 'Menu',
      closeMenu: 'მენიუს დახურვა',
      scheduleConsultation: 'კონსულტაციის დაჯავშნა',
      home: 'მთავარი',
      about: 'GLC LAW FIRM-ის შესახებ',
      services: 'სამართლის სფეროები',
      cases: 'წარმატებული საქმეები',
      testimonials: 'შეფასებები',
      team: 'ჩვენი გუნდი',
      blogs: 'სიახლეები და სტატიები',
      contact: 'კონტაქტი და ლოკაცია',
      officeHeadquarters: 'ცენტრალური ოფისი',
      address: 'საქართველო, ბათუმი, ქუთაისის ქ. #31, ბათუმი, 6000',
      rightsReserved: '© 2026 GLC Law Firm. ყველა უფლება დაცულია.',
      attorneyNotice: 'ადვოკატის რეკლამა. წარსული შედეგები არ იძლევა მსგავსი შედეგის გარანტიას.',
    },
    hero: {
      mainTitle: 'სანდო იურიდიული პარტნიორი',
      mainTitleHighlight: 'პარტნიორი',
      subheading: 'მიზანმიმართული და შედეგზე ორიენტირებული წარმომადგენლობა',
      trustHeadline: 'ნდობა. გამოცდილება. სტრატეგია.',
      trustParagraph:
        'სისხლის, ადმინისტრაციულ და სამოქალაქო სფეროებში 21+ წლის გამოცდილება უზრუნველყოფს შედეგზე ორიენტირებულ იურიდიულ სტრატეგიასა და უკომპრომისო დაცვას.',
      memberBadge: 'წევრი',
      barAssociation: 'ადვოკატთა ასოციაციის',
      badgePillars: ['პროფესიონალიზმი', 'სიზუსტე', 'შედეგი'],
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
      headingText: 'ჩვენ ვიცავთ მათ, ვინც უკან არ იხევს. ნაკლები დაბრკოლება, მეტი სიცხადე და ადვოკატი, რომლისთვისაც თქვენი საქმე ნამდვილად მნიშვნელოვანია.',
      headingHighlight: 'ვიცავთ',
      quoteTitle: 'სტრატეგიული დაცვა რეალური შედეგისთვის',
      quoteParagraph:
        'ნამდვილი იურიდიული წარმომადგენლობა მხოლოდ კანონების ცოდნა არ არის — ეს არის სასწორზე დადებული ინტერესების გაცნობიერება. როდესაც საქმე ეხება თქვენს ბიზნესს, ოჯახს ან თავისუფლებას, ზოგადი რჩევები საკმარისი არ არის. თქვენ გჭირდებათ ადვოკატი, რომელიც გისმენთ, აგებს სტრატეგიას და მოქმედებს მაქსიმალური სიზუსტით.',
      quoteParagraph2:
        'მრავალწლიანი სასამართლო პრაქტიკითა და სტრატეგიული კონსულტაციით, ჩვენი საქმიანობა ეფუძნება ნდობას, გამჭვირვალობასა და შედეგს.',
      founderTitle: 'გიორგი გუბელაძე',
      founderSubtitle: 'დამფუძნებელი და მმართველი პარტნიორი',
      exploreBtn: 'სამართლის სფეროები',
    },
    servicesSection: {
      badgeNumber: '03',
      badgeText: 'ჩვენი იურიდიული მომსახურება',
      headline: 'სანდო გამოცდილება სამართლის ყველა სფეროში',
      headlineHighlight: 'ყველა',
      subtitle: 'ჩვენ გთავაზობთ საუკეთესო იურიდიულ მხარდაჭერას, სიღრმისეულ ცოდნასა და ინდივიდუალურ მიდგომას სამართლის ყველა სპექტრში.',
      seeDetails: 'დეტალურად',
      items: [
        {
          id: 'business-law',
          categoryNumber: '01.',
          categoryName: 'ბიზნეს სამართალი',
          title: 'კომპანიის დაფუძნება და კორპორაციული იურისტი',
          bullets: [
            'ბიზნესის დაწყება და სტრუქტურირება სანდო პარტნიორთან ერთად',
            'მუდმივი იურიდიული მხარდაჭერა კომპანიის ზრდის პროცესში',
            'კონტრაქტები, რეგულაციებთან შესაბამისობა და რისკების მართვა',
          ],
          tags: ['ბიზნესის რეგისტრაცია', 'კონტრაქტები', 'შესაბამისობა', 'ინტელექტუალური საკუთრება'],
          detailedOverview:
            'შპს-სა და სააქციო საზოგადოებების რეგისტრაციიდან დაწყებული, მსხვილი კომერციული ხელშეკრულებების მომზადებით დამთავრებული — ჩვენ ვიცავთ დამფუძნებლებსა და ბიზნესს შესაძლო დავებისგან.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
              caption: 'კორპორაციული სტრატეგია და მართვა',
            },
            {
              url: '/.tempmediaStorage/LAW_PICTURE.jpg',
              caption: 'კონტრაქტების აღსრულება და კონსულტაცია',
            },
          ],
        },
        {
          id: 'family-law',
          categoryNumber: '02.',
          categoryName: 'საოჯახო სამართალი',
          title: 'განქორწინება და საოჯახო დავები',
          bullets: [
            'მხარდაჭერა და გულისხმიერება რთულ პერიოდში',
            'ოჯახისა და შვილების საუკეთესო ინტერესების დაცვა',
            'მკაფიო, პრაქტიკული გადაწყვეტილებები მშვიდი მომავლისთვის',
          ],
          tags: ['განქორწინება', 'შვილების მეურვეობა', 'ალიმენტი', 'მედიაცია'],
          detailedOverview:
            'საოჯახო დავებში ჩვენ ვაერთიანებთ ემპათიასა და სასამართლო სიმტკიცეს: ქონების სამართლიანი გაყოფა, ბავშვზე ზრუნვის გეგმები და კონფიდენციალური მედიაცია.',
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
          id: 'criminal-defense',
          categoryNumber: '03.',
          categoryName: 'სისხლის სამართალი',
          title: 'სისხლისსამართლებრივი დაცვა ყველა ინსტანციაში',
          bullets: [
            'სისხლის სამართლის დაცვა და წარმომადგენლობა ყველა ინსტანციაში',
            'საქმის მასალების დეტალური ანალიზი და დაცვის სტრატეგია',
            'უკომპრომისო დაცვა და წარმომადგენლობა საქმის ნებისმიერ ეტაპზე.',
          ],
          tags: ['მძიმე დანაშაულები', 'გამოძიება', 'აღკვეთის ღონისძიება'],
          detailedOverview:
            'როდესაც საფრთხე ემუქრება თქვენს თავისუფლებას, ჩვენ ვიყენებთ აქტიურ საგამოძიებო მეთოდებს, ვაპროტესტებთ უკანონო მტკიცებულებებს და ვიბრძვით გამამართლებელი განაჩენისთვის.',
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
          id: 'civil-litigation',
          categoryNumber: '04.',
          categoryName: 'სამოქალაქო სამართალი',
          title: 'კომერციული დავები და არბიტრაჟი',
          bullets: [
            'უმაღლესი დონის სასამართლო წარმომადგენლობა მსხვილ დავებში',
            'მორგებული საარბიტრაჟო და მორიგების სტრატეგიები',
            'კომერციული აქტივების, რეპუტაციისა და უფლებების დაცვა',
          ],
          tags: ['კომერციული დავები', 'ვალდებულების დარღვევა', 'არბიტრაჟი', 'სააპელაციო საჩივარი'],
          detailedOverview:
            'რთული კომერციული მოთხოვნები, პარტნიორთა შორის დავები და ხელშეკრულებების დარღვევა. ჩვენ ვაერთიანებთ სიღრმისეულ იურიდიულ კვლევასა და მტკიცე სასამართლო პოზიციონირებას.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop',
              caption: 'სააპელაციო და საკასაციო სასამართლო დავები',
            },
            {
              url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
              caption: 'ფინანსური აუდიტი და დეპოზიცია',
            },
          ],
        },
        {
          id: 'real-estate-law',
          categoryNumber: '05.',
          categoryName: 'უძრავი ქონების სამართალი',
          title: 'ქონებრივი გარიგებები და მიწის განაშენიანება',
          bullets: [
            'უძრავი ქონების სრული იურიდიული მომსახურება, ნებართვები და გარიგებები',
            'უძრავი ქონების სამართლებრივი შემოწმება, აზომვა და ნებართვები.',
            'მიწის, იჯარისა და სამშენებლო დავების ეფექტური გადაწყვეტა',
          ],
          tags: ['უძრავი ქონების შესყიდვა', 'ზონირება', 'საკუთრების უფლება'],
          detailedOverview:
            'დეველოპერებისა და მესაკუთრეების სრული იურიდიული უზრუნველყოფა: ქონების შეძენა, საჯარო რეესტრის სისუფთავე და მუნიციპალური ნებართვების მოპოვება რისკების გარეშე.',
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
          tags: ['ბიზნეს სამართალი', 'კორპორაციული მომსახურება'],
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
          id: 'case-3',
          title: 'მსხვილი აქტივების შენარჩუნება',
          subtitle: 'საოჯახო ბიზნესი და მედიაცია',
          description:
            'მრავალმილიონიანი საოჯახო ბიზნესის აქტივების დაცვა და კონფიდენციალური მორიგების მიღწევა.',
          tags: ['საოჯახო სამართალი', 'აქტივების დაცვა'],
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
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
          title: 'უძრავი ქონების შეყიდვა',
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
        {
          id: 'case-7',
          title: 'საერთაშორისო არბიტრაჟი',
          subtitle: 'საგარეო ვაჭრობა და ხელშეკრულებების აღსრულება',
          description:
            'საარბიტრაჟო დავაში მოპოვებული გამარჯვება და ეფექტური აღსრულება.',
          tags: ['საერთაშორისო სამართალი', 'არბიტრაჟი'],
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
      ],
    },
    metricsSection: {
      tag: 'სამართალი მოქმედებაში',
      watermark: 'სამართალი',
      headline: 'თქვენ იმსახურებთ ადვოკატს, რომელიც იბრძვის თქვენთვის',
      headlineHighlight: 'იბრძვის',
      subtitle: 'ჩვენ გვჯერა, რომ თითოეული კლიენტი — ინდივიდი თუ კორპორაცია — იმსახურებს მაქსიმალურ ერთგულებას, ღია კომუნიკაციასა და შედეგზე ორიენტირებულ მიდგომას.',
      stat1Label: 'წლიანი გამოცდილება',
      stat2Label: 'წარმატებული საქმეები',
      stat3Label: 'დაბრუნებული აქტივები',
    },
    testimonialsSection: {
      badgeNumber: '(06)',
      badgeText: 'კლიენტთა შეფასებები',
      headline: 'რას ამბობენ ჩვენზე კლიენტები',
      headlineHighlight: 'ამბობენ',
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
      copyright: '© 2026 GLC Law Firm. ყველა უფლება დაცულია.',
    },
  },

  RUS: {
    nav: {
      backToTop: 'Наверх',
      menu: 'МЕНЮ',
      closeMenu: 'Закрыть меню',
      scheduleConsultation: 'ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ',
      home: 'ГЛАВНАЯ',
      about: 'О КОМПАНИИ GLC LAW FIRM',
      services: 'ПРАКТИКИ И УСЛУГИ',
      cases: 'УСПЕШНЫЕ ДЕЛА',
      testimonials: 'ОТЗЫВЫ',
      team: 'НАША КОМАНДА',
      blogs: 'СТАТЬИ И АНАЛИТИКА',
      contact: 'КОНТАКТЫ И АДРЕС',
      officeHeadquarters: 'ГЛАВНЫЙ ОФИС',
      address: 'Грузия, Батуми, ул. Кутаиси #31, офис 6000',
      rightsReserved: '© 2026 GLC Law Firm. Все права защищены.',
      attorneyNotice: 'Реклама адвокатских услуг. Предыдущие результаты не гарантируют аналогичный исход.',
    },
    hero: {
      mainTitle: 'Надежная правовая защита для растущего бизнеса',
      mainTitleHighlight: 'бизнеса',
      subheading: 'Целеустремленная защита ваших интересов',
      trustHeadline: 'ДОВЕРИЕ. ОПЫТ. СТРАТЕГИЯ.',
      trustParagraph:
        'Более 21 года успешной практики в уголовном, административном и гражданском судопроизводстве. Адвокат Георгий Губеладзе — член Палаты адвокатов Грузии, обеспечивающий бескомпромиссную правовую защиту.',
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
      headingText: 'МЫ ЗАЩИЩАЕМ ТЕХ, КТО НЕ ОТСТУПАЕТ. МЕНЬШЕ ПРЕПЯТСТВИЙ, БОЛЬШЕ ЯСНОСТИ И АДВОКАТ, ДЛЯ КОТОРОГО ВАШЕ ДЕЛО ДЕЙСТВИТЕЛЬНО ВАЖНО.',
      headingHighlight: 'НЕ ОТСТУПАЕТ',
      quoteTitle: 'СТРАТЕГИЧЕСКАЯ ЗАЩИТА С РЕАЛЬНЫМ РЕЗУЛЬТАТОМ',
      quoteParagraph:
        'Истинное юридическое представительство — это не просто знание закона, это понимание ценности поставленного на карту. Когда на кону ваш бизнес, семья или свобода, вам нужны не шаблонные советы, а сильный защитник, который слушает, строит стратегию и действует безупречно.',
      quoteParagraph2:
        'Благодаря многолетней судебной практике и глубокому корпоративному консалтингу, наша деятельность основана на доверии, честности и победах.',
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
          id: 'business-law',
          categoryNumber: '01.',
          categoryName: 'Бизнес-право',
          title: 'Регистрация бизнеса и корпоративное сопровождение',
          bullets: [
            'Уверенный старт и правильное структурирование компании',
            'Постоянная юридическая поддержка растущего бизнеса',
            'Договоры, комплаенс и минимизация рисков',
          ],
          tags: ['Регистрация', 'Контракты', 'Комплаенс', 'Интеллектуальная собственность'],
          detailedOverview:
            'От учреждения ООО и корпораций до подготовки сложных международных коммерческих соглашений — мы защищаем предпринимателей от любых правовых споров.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
              caption: 'Корпоративная стратегия и управление',
            },
            {
              url: '/.tempmediaStorage/LAW_PICTURE.jpg',
              caption: 'Исполнение контрактов и консалтинг',
            },
          ],
        },
        {
          id: 'family-law',
          categoryNumber: '02.',
          categoryName: 'Семейное право',
          title: 'Расторжение брака и семейные споры',
          bullets: [
            'Чуткая поддержка и защита в сложные периоды',
            'Защита наилучших интересов детей и семьи',
            'Четкие, практичные решения для спокойного будущего',
          ],
          tags: ['Развод', 'Опека над детьми', 'Алименты', 'Медиация'],
          detailedOverview:
            'Мы сочетаем эмпатию и бескомпромиссную защиту в суде: справедливый раздел имущества, алиментные соглашения и конфиденциальная медиация.',
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
          id: 'criminal-defense',
          categoryNumber: '03.',
          categoryName: 'Уголовное право',
          title: 'Уголовная защита на всех стадиях процесса',
          bullets: [
            'Бескомпромиссная защита ваших прав и свободы',
            'Глубокий анализ дела и построение линии защиты',
            'Участие в следственных действиях и всех инстанциях',
          ],
          tags: ['Тяжкие статьи', 'Следствие', 'Меры пресечения'],
          detailedOverview:
            'Когда свобода под угрозой, мы проводим независимые адвокатские расследования, исключаем недопустимые доказательства и добиваемся оправдания.',
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
          id: 'civil-litigation',
          categoryNumber: '04.',
          categoryName: 'Гражданский процесс',
          title: 'Коммерческие споры и арбитраж',
          bullets: [
            'Эффективное судебное представительство в сложных спорах',
            'Стратегии арбитражного урегулирования и мировых соглашений',
            'Защита активов, деловой репутации и коммерческих интересов',
          ],
          tags: ['Арбитраж', 'Нарушение договоров', 'Взыскание убытков', 'Апелляция'],
          detailedOverview:
            'Взыскание задолженностей, партнерские корпоративные конфликты и защита договоров. Мы объединяем глубокую юридическую науку и победную тактику в суде.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop',
              caption: 'Апелляционные и кассационные споры',
            },
            {
              url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
              caption: 'Финансовый аудит и допросы',
            },
          ],
        },
        {
          id: 'real-estate-law',
          categoryNumber: '05.',
          categoryName: 'Недвижимость',
          title: 'Сделки с недвижимостью и девелопмент',
          bullets: [
            'Полное юридическое сопровождение купли-продажи и аренды',
            'Проверка чистоты титула, зонирование и разрешения',
            'Разрешение земельных и строительных споров',
          ],
          tags: ['Сопровождение сделок', 'Зонирование', 'Проверка титула'],
          detailedOverview:
            'Сопровождение инвесторов и девелоперов: приобретение земельных участков, проверка чистоты реестра и оформление градостроительных согласований без рисков.',
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
          tags: ['Бизнес-право', 'Корпоративный юрист'],
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
          id: 'case-3',
          title: 'Сохранение крупных активов',
          subtitle: 'Семейный бизнес и медиация',
          description:
            'Защита многомиллионных семейных активов и мирное конфиденциальное урегулирование спора.',
          tags: ['Семейное право', 'Защита активов'],
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
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
        {
          id: 'case-7',
          title: 'Международный арбитраж',
          subtitle: 'Внешнеэкономическая деятельность',
          description:
            'საარბიტრაჟო დავაში მოპოვებული გამარჯვება და ეფექტური აღსრულება.',
          tags: ['Международное право', 'Арбитраж'],
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
      ],
    },
    metricsSection: {
      tag: 'ПРАВОСУДИЕ В ДЕЙСТВИИ',
      watermark: 'ПРАВО',
      headline: 'Вы заслуживаете адвоката, который борется за вас',
      headlineHighlight: 'борется',
      subtitle: 'Мы убеждены, что каждый доверитель заслуживает максимальной отдачи, честной коммуникации и работы на безусловный результат.',
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
      copyright: '© 2026 GLC Law Firm. Все права защищены.',
    },
  },

  TUR: {
    nav: {
      backToTop: 'Yukarı Dön',
      menu: 'MENÜ',
      closeMenu: 'Menüyü Kapat',
      scheduleConsultation: 'RANDEVU ALIN',
      home: 'ANA SAYFA',
      about: 'GLC LAW FIRM HAKKINDA',
      services: 'UZMANLIK ALANLARI',
      cases: 'BAŞARILI DAVALAR',
      testimonials: 'MÜVEKKİL YORUMLARI',
      team: 'EKİBİMİZ',
      blogs: 'HUKUKİ YAZILAR',
      contact: 'İLETİŞİM VE KONUM',
      officeHeadquarters: 'GENEL MERKEZ',
      address: 'Gürcistan, Batum, Kutaisi Cad. #31, Ofis 6000',
      rightsReserved: '© 2026 GLC Law Firm. Tüm hakları saklıdır.',
      attorneyNotice: 'Avukatlık tanıtımıdır. Geçmiş sonuçlar benzer sonucu garanti etmez.',
    },
    hero: {
      mainTitle: 'Büyüyen İşletmeler İçin Güvenilir Hukuki Danışmanlık',
      mainTitleHighlight: 'İşletmeler',
      subheading: 'Kararlılık ve Hedefe Odaklı Hukuki Temsil',
      trustHeadline: 'GÜVEN. DENEYİM. STRATEJİ.',
      trustParagraph:
        'Ceza, idare ve medeni hukuk alanlarında 21 yılı aşkın tecrübesiyle Giorgi Gubeladze, Gürcistan Barolar Birliği üyesi olarak sonuç odaklı hukuki strateji ve tavizsiz koruma sağlar.',
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
      headingText: 'GERİ ADIM ATMAYANLARIN YANINDAYIZ. DAHA AZ ENGEL, DAHA FAZLA NETLİK VE DAVANIZI GERÇEKTEN ÖNEMSEYEN BİR AVUKAT.',
      headingHighlight: 'GERİ ADIM',
      quoteTitle: 'GERÇEK ETKİYE DAYANAN STRATEJİK SAVUNMA',
      quoteParagraph:
        'Gerçek hukuki temsil sadece kanunları bilmekten ibaret değildir — riskin büyüklüğünü anlamaktır. İşiniz, aileniz veya özgürlüğünüz söz konusu olduğunda sıradan tavsiyelere değil; dinleyen, strateji geliştiren ve kusursuz uygulayan bir savunucuya ihtiyacınız vardır.',
      quoteParagraph2:
        'Yıllara dayanan mahkeme tecrübemiz ve kurumsal danışmanlığımızla pratiğimiz güven, şeffaflık ve sonuç odaklılık üzerine kuruludur.',
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
          id: 'business-law',
          categoryNumber: '01.',
          categoryName: 'Ticaret Hukuku',
          title: 'Şirket Kuruluşu ve Kurumsal Hukuk Müşavirliği',
          bullets: [
            'Şirketinizi güvenle kurun ve yapılandırın',
            'Şirketiniz büyürken kesintisiz hukuki koruma',
            'Sözleşmeler, mevzuata uyum ve risk yönetimi',
          ],
          tags: ['Şirket Kuruluşu', 'Sözleşmeler', 'Uyum', 'Fikri Mülkiyet'],
          detailedOverview:
            'Limited ve anonim şirket kuruluşlarından yüksek hacimli ticari sözleşmelere kadar, girişimcileri ve köklü işletmeleri olası uyuşmazlıklardan koruyoruz.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
              caption: 'Kurumsal Strateji ve Yönetişim',
            },
            {
              url: '/.tempmediaStorage/LAW_PICTURE.jpg',
              caption: 'Sözleşme İcrası ve Düzenleyici Danışmanlık',
            },
          ],
        },
        {
          id: 'family-law',
          categoryNumber: '02.',
          categoryName: 'Aile Hukuku',
          title: 'Boşanma ve Aile Hukuku Uyuşmazlıkları',
          bullets: [
            'Zorlu süreçlerde şefkatli ve kararlı rehberlik',
            'Ailenizin ve çocuklarınızın menfaatlerinin korunması',
            'Geleceğiniz için net ve pratik hukuki çözümler',
          ],
          tags: ['Boşanma', 'Velayet', 'Nafaka', 'Arabuluculuk'],
          detailedOverview:
            'Aile hukuku davalarında empati ile mahkeme kararlılığını bir araya getiriyoruz: adil mal paylaşımı, velayet planlaması ve gizli arabuluculuk.',
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
          id: 'criminal-defense',
          categoryNumber: '03.',
          categoryName: 'Ceza Hukuku',
          title: 'Ceza Davalarında Etkin Savunma',
          bullets: [
            'Haklarınız ve özgürlüğünüz için güçlü savunma',
            'Kapsamlı dosya analizi ve stratejik planlama',
            'Soruşturma ve kovuşturmanın her aşamasında temsil',
          ],
          tags: ['Ağır Ceza', 'Soruşturma', 'Tutukluluğa İtiraz'],
          detailedOverview:
            'Özgürlüğünüz tehlikedeyken bağımsız soruşturma taktikleri uyguluyor, hukuka aykırı delillere itiraz ediyor ve beraat için mücadele ediyoruz.',
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
          id: 'civil-litigation',
          categoryNumber: '04.',
          categoryName: 'Medeni ve Ticari Dava',
          title: 'Ticari Davalar ve Uyuşmazlık Çözümü',
          bullets: [
            'Yüksek riskli ticari davalarda tavizsiz temsil',
            'Tahkim ve uzlaşma müzakerelerinde güçlü stratejiler',
            'Ticari varlıkların, itibarın ve hakların güvenceye alınması',
          ],
          tags: ['Ticari Dava', 'Sözleşme İhlali', 'Tahkim', 'Temyiz'],
          detailedOverview:
            'Karmaşık ticari alacaklar, ortaklık ihtilafları ve sadakat yükümlülüğü ihlalleri. Titiz hukuki araştırmayı güçlü duruşma savunmasıyla birleştiriyoruz.',
          images: [
            {
              url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop',
              caption: 'İstinaf ve Yargıtay Dava Temsili',
            },
            {
              url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
              caption: 'Mali Denetim ve İfadeye Hazırlık',
            },
          ],
        },
        {
          id: 'real-estate-law',
          categoryNumber: '05.',
          categoryName: 'Gayrimenkul Hukuku',
          title: 'Gayrimenkul İşlemleri ve İmar Hukuku',
          bullets: [
            'Ticari ve konut gayrimenkul alım-satımında tam destek',
            'Tapu incelemeleri, imar durumu ve belediye ruhsat onayları',
            'Kira, tahliye ve sınır uyuşmazlıklarının çözümü',
          ],
          tags: ['Mülk Devri', 'İmar ve Ruhsat', 'Tapu Güvencesi'],
          detailedOverview:
            'Yatırımcıları ve mülk sahiplerini gayrimenkul alımlarında, tapu tescillerinde ve imar süreçlerinde sıfır riskle yönlendiriyoruz.',
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
          tags: ['Ticaret Hukuku', 'Kurumsal Hukuk'],
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
          id: 'case-3',
          title: 'Büyük Aile Varlıklarının Korunması',
          subtitle: 'Aile Şirketi ve Gizli Arabuluculuk',
          description:
            'Milyonlarca dolarlık aile şirket varlıklarının korunması ve tam gizlilikle sulh sağlanması.',
          tags: ['Aile Hukuku', 'Varlık Koruma'],
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
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
        {
          id: 'case-7',
          title: 'Sınır Ötesi Tahkim',
          subtitle: 'Uluslararası Ticaret ve Sözleşmeler',
          description:
            'საარბიტრაჟო დავაში მოპოვებული გამარჯვება და ეფექტური აღსრულება.',
          tags: ['Uluslararası Hukuk', 'Tahkim'],
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
          aspectClass: 'aspect-[16/10]',
        },
      ],
    },
    metricsSection: {
      tag: 'ADALET EYLEMDE',
      watermark: 'ADALET',
      headline: 'Sizin için mücadele eden bir avukatı hak ediyorsunuz',
      headlineHighlight: 'mücadele',
      subtitle: 'İster birey ister kurumsal bir işletme olsun, her müvekkilin aynı adanmışlığı, şeffaf iletişimi ve sonuç odaklı yaklaşımı hak ettiğine inanıyoruz.',
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
      copyright: '© 2026 GLC Law Firm. Tüm hakları saklıdır.',
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
      const saved = localStorage.getItem('glc_law_firm_lang');
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
      localStorage.setItem('glc_law_firm_lang', lang);
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
