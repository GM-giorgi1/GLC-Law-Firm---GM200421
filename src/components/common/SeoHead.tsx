import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SITE_URL = 'https://glclaw.ge';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/HERO_GUBE.jpeg`;

export interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  locale?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string, remove = false) {
  const existing = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (remove) {
    existing?.remove();
    return;
  }
  let el = existing;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertHreflangs(href: string, remove = false) {
  const langs = ['ka', 'en', 'ru', 'tr', 'x-default'];
  langs.forEach((lang) => {
    const existing = document.head.querySelector(
      `link[rel="alternate"][hreflang="${lang}"]`
    ) as HTMLLinkElement | null;
    if (remove) {
      existing?.remove();
      return;
    }
    let el = existing;
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', 'alternate');
      el.setAttribute('hreflang', lang);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  });
}

function upsertJsonLd(data?: Record<string, unknown> | Array<Record<string, unknown>>) {
  const id = 'glc-seo-jsonld';
  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    existing?.remove();
    return;
  }
  let script = existing;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function normalizeCanonicalUrl(path: string): string {
  if (!path || path === '/') return `${SITE_URL}/`;
  const cleaned = path.split('#')[0].split('?')[0].replace(/\/+$/, '').toLowerCase();
  return `${SITE_URL}${cleaned.startsWith('/') ? cleaned : `/${cleaned}`}`;
}

export function buildFirmAndAttorneySchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'GLC Law Company',
      url: `${SITE_URL}/`,
      inLanguage: ['ka', 'en', 'ru', 'tr'],
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'GLC Law Company',
      alternateName: 'GLC Law Company - ადვოკატი გიორგი გუბელაძე',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/HERO_GUBE.jpeg`,
      image: DEFAULT_OG_IMAGE,
      telephone: '+995599277794',
      email: 'lawyergiorgigubeladze@gmail.com',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ქუთაისის ქ. #31',
        addressLocality: 'Batumi',
        addressRegion: 'Adjara',
        postalCode: '6000',
        addressCountry: 'GE',
      },
      areaServed: [
        { '@type': 'City', name: 'Batumi' },
        { '@type': 'City', name: 'Tbilisi' },
        { '@type': 'Country', name: 'Georgia' },
      ],
      knowsLanguage: ['ka', 'en', 'ru', 'tr'],
      sameAs: [
        'https://www.facebook.com/profile.php?id=61566775323850',
        'https://www.tiktok.com/@giorgi.gubeladze',
      ],
      founder: {
        '@id': `${SITE_URL}/#attorney`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Attorney',
      '@id': `${SITE_URL}/#attorney`,
      name: 'Giorgi Gubeladze',
      alternateName: 'გიორგი გუბელაძე',
      jobTitle: 'Founder & Lead Trial Counsel',
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/GUBE1.jpeg`,
      telephone: '+995599277794',
      email: 'lawyergiorgigubeladze@gmail.com',
      worksFor: {
        '@id': `${SITE_URL}/#organization`,
      },
      memberOf: {
        '@type': 'Organization',
        name: 'Georgian Bar Association (GBA)',
      },
      knowsAbout: [
        'Criminal Law',
        'Civil Law',
        'Administrative Law',
        'Business Law',
        'Family & Inheritance Disputes',
        'Real Estate & Contract Law',
      ],
    },
  ];
}

export default function SeoHead({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  locale = 'ka_GE',
  noIndex = false,
  schema,
}: SeoHeadProps) {
  const location = useLocation();
  const resolvedPath = canonicalPath ?? location.pathname;
  const canonicalUrl = normalizeCanonicalUrl(resolvedPath);
  const resolvedOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  useEffect(() => {
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta(
      'name',
      'robots',
      noIndex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    upsertCanonical(canonicalUrl, noIndex);
    upsertHreflangs(canonicalUrl, noIndex);

    // Open Graph
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:site_name', 'GLC Law Company');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', resolvedOgImage);
    upsertMeta('property', 'og:locale', locale);

    // Twitter Cards
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:url', canonicalUrl);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', resolvedOgImage);

    // JSON-LD Schema
    const payload = noIndex ? undefined : (schema ?? buildFirmAndAttorneySchema());
    upsertJsonLd(payload);
  }, [title, description, canonicalUrl, ogType, resolvedOgImage, locale, noIndex, schema]);

  return null;
}
