import React, { useEffect } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalPath?: string;
  practiceAreaName?: string;
  isArticle?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogImage,
  canonicalPath = '',
  practiceAreaName,
  isArticle = false,
}) => {
  const { language } = useLanguage();

  const isGeo = language === 'GEO';
  const isEng = language === 'ENG';

  // Default localized meta titles & descriptions
  const defaultTitle = isGeo
    ? 'GLC Law Company — პრემიუმ იურიდიული მომსახურება | გიორგი გუბელაძე'
    : isEng
    ? 'GLC Law Company — Premier Legal Counsel & Litigation | Giorgi Gubeladze'
    : 'GLC Law Company — Премиальные юридические услуги | Георгий Губеладзе';

  const defaultDescription = isGeo
    ? 'სისხლის სამართლის დაცვა, კორპორაციული სამართალი, უძრავი ქონება და საოჯახო დავები. 21+ წლიანი პრაქტიკა. დარეკეთ: +995 599 27 77 94.'
    : isEng
    ? 'Elite legal counsel in criminal defense, corporate M&A, real estate investments, and family law in Georgia. 21+ years trial mastery. Call: +995 599 27 77 94.'
    : 'Уголовная защита, корпоративное право, инвестиции в недвижимость и семейные споры в Грузии. Тел: +995 599 27 77 94.';

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = ogImage || 'https://glclaw.ge/legal_wallpaper.jpg';

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle;

    // Helper to update or create meta tags
    const setMetaTag = (attribute: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'author', 'GLC Law Company - Giorgi Gubeladze');
    setMetaTag('name', 'keywords', 'law firm tbilisi, lawyer batumi, ადვოკატი თბილისი, ადვოკატი ბათუმი, criminal defense georgia, corporate lawyer tbilisi, real estate lawyer georgia');

    // 3. OpenGraph Tags
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://glclaw.ge';
    const currentUrl = `${origin}/#${canonicalPath}`;

    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:type', isArticle ? 'article' : 'website');
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', finalImage);
    setMetaTag('property', 'og:site_name', 'GLC Law Company');
    setMetaTag('property', 'og:locale', isGeo ? 'ka_GE' : isEng ? 'en_US' : 'ru_RU');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', finalImage);

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. JSON-LD Structured Data Schema (LegalService / LocalBusiness)
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': isArticle ? 'Article' : 'LegalService',
      name: 'GLC Law Company',
      alternateName: 'ჯი-ელ-სი იურიდიული კომპანია',
      url: origin,
      logo: `${origin}/CARD1.png`,
      image: finalImage,
      telephone: '+995 599 27 77 94',
      email: 'contact@glclaw.ge',
      priceRange: '$$$',
      description: finalDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tbilisi & Batumi Executive Offices',
        addressLocality: 'Tbilisi',
        addressRegion: 'Tbilisi',
        postalCode: '0100',
        addressCountry: 'GE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.7151,
        longitude: 44.8271,
      },
      founder: {
        '@type': 'Person',
        name: 'Giorgi Gubeladze',
        jobTitle: 'Founder & Lead Trial Counsel',
      },
      areaServed: [
        { '@type': 'City', name: 'Tbilisi' },
        { '@type': 'City', name: 'Batumi' },
        { '@type': 'Country', name: 'Georgia' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Core Legal Practice Areas',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Criminal Defense (სისხლის სამართალი)',
              description: 'Investigation advocacy, detention mitigation, and trial litigation across Georgia.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Corporate & M&A Law (კორპორაციული სამართალი)',
              description: 'Company incorporation, complex commercial agreements, shareholder disputes, and M&A.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Real Estate & Zoning Law (უძრავი ქონების სამართალი)',
              description: 'Comprehensive property audits, contract drafting, title registration, and investment security.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Family & Inheritance Law (საოჯახო და მემკვიდრეობითი სამართალი)',
              description: 'Divorce settlements, asset division, child custody, alimony, and inheritance succession.',
            },
          },
        ],
      },
      ...(practiceAreaName
        ? {
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: isGeo ? 'მთავარი' : 'Home',
                  item: `${origin}/#/`,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: practiceAreaName,
                  item: currentUrl,
                },
              ],
            },
          }
        : {}),
    };

    let scriptEl = document.getElementById('jsonld-schema-script');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'jsonld-schema-script';
      scriptEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaData);
  }, [finalTitle, finalDescription, finalImage, canonicalPath, isArticle, practiceAreaName, isGeo, isEng]);

  return null;
};

export default SEOHead;
