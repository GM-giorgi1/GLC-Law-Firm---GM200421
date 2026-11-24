import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

const SITE_URL = 'https://glclaw.ge';

function serveTempMediaPlugin(): Plugin {
  return {
    name: 'serve-tempmedia',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/.tempmediaStorage/')) {
          const cleanUrl = decodeURIComponent(req.url.split('?')[0]);
          const fileName = path.basename(cleanUrl);
          const candidatePaths = [
            path.resolve(__dirname, 'public/.tempmediaStorage', fileName),
            path.resolve(__dirname, '.tempmediaStorage', fileName),
            path.resolve(__dirname, 'public', fileName),
          ];
          for (const filePath of candidatePaths) {
            if (fs.existsSync(filePath)) {
              const ext = path.extname(filePath).toLowerCase();
              const contentType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
              res.setHeader('Content-Type', contentType);
              return fs.createReadStream(filePath).pipe(res);
            }
          }
        }
        next();
      });
    },
  };
}

interface ParsedBlogFaq {
  question: string;
  answer: string;
}

interface ParsedBlogMeta {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  faqs: ParsedBlogFaq[];
}

function stripMarkdownPlain(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractBracketBlock(source: string, openBracketIndex: number): string {
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let escaped = false;

  for (let i = openBracketIndex; i < source.length; i++) {
    const ch = source[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }
    if (!inDouble && ch === "'") {
      inSingle = !inSingle;
      continue;
    }
    if (!inSingle && ch === '"') {
      inDouble = !inDouble;
      continue;
    }
    if (inSingle || inDouble) continue;

    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) {
        return source.slice(openBracketIndex + 1, i);
      }
    }
  }
  return '';
}

function parseBlogsFromSource(rootDir: string): ParsedBlogMeta[] {
  const blogsPath = path.resolve(rootDir, 'src/data/blogsData.ts');
  if (!fs.existsSync(blogsPath)) return [];

  const content = fs.readFileSync(blogsPath, 'utf-8');
  const results: ParsedBlogMeta[] = [];

  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const matches = [...content.matchAll(slugRegex)];

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index ?? 0;
    const end = i + 1 < matches.length ? (matches[i + 1].index ?? content.length) : content.length;
    const block = content.slice(start, end);
    const slug = matches[i][1];

    const categoryMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
    const geoTitleMatch = block.match(/title:\s*\{[\s\S]*?GEO:\s*['"]([^'"]+)['"]/);
    const geoExcerptMatch = block.match(/excerpt:\s*\{[\s\S]*?GEO:\s*['"]([^'"]+)['"]/);
    const ogImageMatch = block.match(/ogImage:\s*['"]([^'"]+)['"]/);
    const imageMatch = ogImageMatch || block.match(/image:\s*['"]([^'"]+)['"]/);

    const faqs: ParsedBlogFaq[] = [];
    const geoHeaderMatch = block.match(/GEO:\s*\{[\s\S]*?faq:\s*\{[\s\S]*?items:\s*\[/);
    if (geoHeaderMatch && geoHeaderMatch.index !== undefined) {
      const openIdx = geoHeaderMatch.index + geoHeaderMatch[0].length - 1;
      const faqItemsBlock = extractBracketBlock(block, openIdx);
      const itemRegex = /question:\s*(['"])((?:\\.|(?!\1).)*)\1\s*,\s*answer:\s*\[/g;
      for (const itemMatch of faqItemsBlock.matchAll(itemRegex)) {
        const q = stripMarkdownPlain(itemMatch[2].replace(/\\(['"])/g, '$1'));
        const ansOpenIdx = (itemMatch.index ?? 0) + itemMatch[0].length - 1;
        const ansArrayBlock = extractBracketBlock(faqItemsBlock, ansOpenIdx);
        const answerStrings: string[] = [];
        const strRegex = /(['"])((?:\\.|(?!\1).)*)\1/g;
        for (const ansMatch of ansArrayBlock.matchAll(strRegex)) {
          answerStrings.push(stripMarkdownPlain(ansMatch[2].replace(/\\(['"])/g, '$1')));
        }
        if (q && answerStrings.length > 0) {
          faqs.push({ question: q, answer: answerStrings.join(' ') });
        }
      }
    }

    results.push({
      slug,
      category: categoryMatch?.[1] || 'სამართალი',
      title: geoTitleMatch?.[1] || 'GLC Law Company - სამართლებრივი პუბლიკაცია',
      excerpt:
        geoExcerptMatch?.[1] ||
        'პრაქტიკული სამართლებრივი ანალიზი და საკანონმდებლო განმარტებები GLC Law Company-ისგან.',
      image: imageMatch?.[1] || '/GM7.webp',
      faqs,
    });
  }

  return results;
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildHreflangTags(fullUrl: string): string {
  return [
    `<link rel="alternate" hreflang="ka" href="${fullUrl}" />`,
    `<link rel="alternate" hreflang="en" href="${fullUrl}" />`,
    `<link rel="alternate" hreflang="ru" href="${fullUrl}" />`,
    `<link rel="alternate" hreflang="tr" href="${fullUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${fullUrl}" />`,
  ].join('\n    ');
}

function dynamicSitemapPlugin(): Plugin {
  return {
    name: 'dynamic-sitemap',
    writeBundle() {
      const today = new Date().toISOString().split('T')[0];
      const baseRoutes = [
        { path: '/', changefreq: 'weekly', priority: '1.0' },
        { path: '/practice-areas/criminal-defense', changefreq: 'monthly', priority: '0.9' },
        { path: '/practice-areas/family-law', changefreq: 'monthly', priority: '0.9' },
        { path: '/practice-areas/real-estate-law', changefreq: 'monthly', priority: '0.9' },
        { path: '/practice-areas/corporate-law', changefreq: 'monthly', priority: '0.9' },
        { path: '/blogs', changefreq: 'weekly', priority: '0.8' },
      ];

      const blogs = parseBlogsFromSource(__dirname);
      const urls = [
        ...baseRoutes,
        ...blogs.map((b) => ({
          path: `/blogs/${b.slug}`,
          changefreq: 'monthly',
          priority: '0.7',
        })),
      ];

      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls
        .map((u) => {
          const fullUrl = `${SITE_URL}${u.path}`;
          const alternates = ['ka', 'en', 'ru', 'tr', 'x-default']
            .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${fullUrl}" />`)
            .join('\n');
          return `  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n${alternates}\n  </url>`;
        })
        .join('\n')}\n</urlset>\n`;

      const distDir = path.resolve(__dirname, 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
      }
    },
  };
}

interface StaticRouteSpec {
  outFile: string;
  canonicalPath: string;
  title: string;
  description: string;
  ogType: 'website' | 'article';
  ogImage: string;
  noIndex?: boolean;
  schema?: Array<Record<string, unknown>>;
  ssrHtml: string;
}

function renderRouteHtml(templateHtml: string, spec: StaticRouteSpec): string {
  const canonicalUrl = spec.canonicalPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${spec.canonicalPath}`;
  const ogImageUrl = spec.ogImage.startsWith('http')
    ? spec.ogImage
    : `${SITE_URL}${spec.ogImage.startsWith('/') ? spec.ogImage : `/${spec.ogImage}`}`;
  const safeTitle = escapeHtmlAttr(spec.title);
  const safeDesc = escapeHtmlAttr(spec.description);

  let html = templateHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${safeDesc}" />`
  );

  const robotsValue = spec.noIndex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  html = html.replace(
    /<meta\s+name="robots"[\s\S]*?\/>/,
    `<meta name="robots" content="${robotsValue}" />`
  );

  if (spec.noIndex) {
    html = html.replace(/<link rel="canonical"[^>]*\/>\s*/g, '');
    html = html.replace(/<link rel="alternate" hreflang="[^"]*"[^>]*\/>\s*/g, '');
  } else {
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
    html = html.replace(
      /(<link rel="alternate" hreflang="ka"[^>]*\/>[\s\S]*?<link rel="alternate" hreflang="x-default"[^>]*\/>)/,
      buildHreflangTags(canonicalUrl)
    );
  }

  html = html.replace(
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${spec.ogType}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${ogImageUrl}" />`
  );

  html = html.replace(
    /<meta name="twitter:url" content="[^"]*" \/>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${ogImageUrl}" />`
  );

  if (spec.noIndex) {
    html = html.replace(/<script id="glc-seo-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/, '');
  } else if (spec.schema) {
    html = html.replace(
      /<script id="glc-seo-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="glc-seo-jsonld" type="application/ld+json">${JSON.stringify(spec.schema)}</script>`
    );
  }

  html = html.replace('<div id="root"></div>', `<div id="root">${spec.ssrHtml}</div>`);

  return html;
}

function staticPrerenderPlugin(): Plugin {
  return {
    name: 'static-prerender',
    writeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const templateHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
      const blogs = parseBlogsFromSource(__dirname);

      const routes: StaticRouteSpec[] = [
        {
          outFile: 'practice-areas/criminal-defense/index.html',
          canonicalPath: '/practice-areas/criminal-defense',
          title: 'სისხლის სამართალი და დაცვა | GLC Law Company',
          description:
            'სისხლის სამართლის გამოცდილი ადვოკატი ბათუმსა და თბილისში: დაცვა გამოძიების ეტაპზე, აღკვეთის ღონისძიება, მტკიცებულებათა აუდიტი და სასამართლო წარმომადგენლობა.',
          ogType: 'website',
          ogImage: '/criminalhero.png',
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'GLC Law Company - Criminal Law & Defense Advocacy',
              url: `${SITE_URL}/practice-areas/criminal-defense`,
              provider: { '@id': `${SITE_URL}/#organization` },
              serviceType: 'Criminal Defense Law',
              areaServed: 'Georgia',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Criminal Defense', item: `${SITE_URL}/practice-areas/criminal-defense` },
              ],
            },
          ],
          ssrHtml:
            '<main style="background:#030508;color:#FAFAFB;padding:3rem 1.5rem;font-family:sans-serif"><h1>სისხლის სამართალი და დაცვა | GLC Law Company</h1><p>დაცვა გამოძიების ეტაპზე, აღკვეთის ღონისძიება, მტკიცებულებათა აუდიტი და სასამართლო წარმომადგენლობა ბათუმსა და თბილისში.</p><nav><a href="/">მთავარი</a> | <a href="/blogs">ბლოგი</a></nav></main>',
        },
        {
          outFile: 'practice-areas/family-law/index.html',
          canonicalPath: '/practice-areas/family-law',
          title: 'საოჯახო და მემკვიდრეობითი სამართალი | GLC Law Company',
          description:
            'საოჯახო და მემკვიდრეობითი დავების კვალიფიციური იურიდიული დახმარება საქართველოში: განქორწინება, ქონების გაყოფა, სამემკვიდრეო უფლებების დაცვა.',
          ogType: 'website',
          ogImage: '/family.png',
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'GLC Law Company - Family & Inheritance Law',
              url: `${SITE_URL}/practice-areas/family-law`,
              provider: { '@id': `${SITE_URL}/#organization` },
              serviceType: 'Family & Inheritance Law',
              areaServed: 'Georgia',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Family Law', item: `${SITE_URL}/practice-areas/family-law` },
              ],
            },
          ],
          ssrHtml:
            '<main style="background:#030508;color:#FAFAFB;padding:3rem 1.5rem;font-family:sans-serif"><h1>საოჯახო და მემკვიდრეობითი სამართალი | GLC Law Company</h1><p>ოჯახური აქტივების დაცვა და სამართლებრივი მემკვიდრეობა - GLC Law Company.</p><nav><a href="/">მთავარი</a> | <a href="/blogs">ბლოგი</a></nav></main>',
        },
        {
          outFile: 'practice-areas/real-estate-law/index.html',
          canonicalPath: '/practice-areas/real-estate-law',
          title: 'უძრავი ქონება და სახელშეკრულებო სამართალი | GLC Law Company',
          description:
            'უძრავი ქონების იურიდიული აუდიტი, გარიგებების სრული სამართლებრივი თანხლება, დეველოპერული და საინვესტიციო დავები ბათუმსა და თბილისში.',
          ogType: 'website',
          ogImage: '/realestate0.png',
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'GLC Law Company - Real Estate & Contract Law',
              url: `${SITE_URL}/practice-areas/real-estate-law`,
              provider: { '@id': `${SITE_URL}/#organization` },
              serviceType: 'Real Estate & Property Law',
              areaServed: 'Georgia',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Real Estate Law', item: `${SITE_URL}/practice-areas/real-estate-law` },
              ],
            },
          ],
          ssrHtml:
            '<main style="background:#030508;color:#FAFAFB;padding:3rem 1.5rem;font-family:sans-serif"><h1>უძრავი ქონება და სახელშეკრულებო სამართალი | GLC Law Company</h1><p>უსაფრთხო საინვესტიციო და უძრავი ქონების გარიგებების სამართლებრივი მხარდაჭერა.</p><nav><a href="/">მთავარი</a> | <a href="/blogs">ბლოგი</a></nav></main>',
        },
        {
          outFile: 'practice-areas/corporate-law/index.html',
          canonicalPath: '/practice-areas/corporate-law',
          title: 'ბიზნესი და კორპორაციული სამართალი | GLC Law Company',
          description:
            'ბიზნესის სტრატეგიული იურიდიული მომსახურება: კორპორაციული მართვა, M&A გარიგებები, კომერციული კონტრაქტები და საარბიტრაჟო დავები.',
          ogType: 'website',
          ogImage: '/corporate.png',
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'GLC Law Company - Business & Corporate Law',
              url: `${SITE_URL}/practice-areas/corporate-law`,
              provider: { '@id': `${SITE_URL}/#organization` },
              serviceType: 'Corporate & Business Law',
              areaServed: 'Georgia',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Corporate Law', item: `${SITE_URL}/practice-areas/corporate-law` },
              ],
            },
          ],
          ssrHtml:
            '<main style="background:#030508;color:#FAFAFB;padding:3rem 1.5rem;font-family:sans-serif"><h1>ბიზნესი და კორპორაციული სამართალი | GLC Law Company</h1><p>კორპორაციული უსაფრთხოება და ბიზნეს-ადვოკატირება ბათუმსა და თბილისში.</p><nav><a href="/">მთავარი</a> | <a href="/blogs">ბლოგი</a></nav></main>',
        },
        {
          outFile: 'blogs/index.html',
          canonicalPath: '/blogs',
          title: 'სამართლებრივი პუბლიკაციები და ბლოგი | GLC Law Company',
          description:
            'პრაქტიკული ანალიტიკა, სასამართლო პრეცედენტები და საკანონმდებლო განმარტებები GLC Law Company-ის ადვოკატებისგან.',
          ogType: 'website',
          ogImage: '/GM7.webp',
          schema: [
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'GLC Law Company - Legal Insights & Articles',
              url: `${SITE_URL}/blogs`,
              isPartOf: { '@id': `${SITE_URL}/#organization` },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
              ],
            },
          ],
          ssrHtml: `<main style="background:#0C0D0D;color:#FAFAFB;padding:3rem 1.5rem;font-family:sans-serif"><h1>სამართლებრივი პუბლიკაციები და ბლოგი | GLC Law Company</h1><ul>${blogs
            .map((b) => `<li><a href="/blogs/${b.slug}">${escapeHtmlAttr(b.title)}</a></li>`)
            .join('')}</ul></main>`,
        },
        ...blogs.map((b) => {
          const schemas: Array<Record<string, unknown>> = [
            {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: b.title,
              description: b.excerpt,
              image: b.image.startsWith('http') ? b.image : `${SITE_URL}/${path.basename(b.image)}`,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${SITE_URL}/blogs/${b.slug}`,
              },
              author: {
                '@type': 'Attorney',
                name: 'გიორგი გუბელაძე',
                url: `${SITE_URL}/`,
              },
              publisher: {
                '@type': 'LegalService',
                name: 'GLC Law Company',
                url: `${SITE_URL}/`,
                logo: {
                  '@type': 'ImageObject',
                  url: `${SITE_URL}/HERO_GUBE.jpeg`,
                },
              },
              articleSection: b.category,
              inLanguage: 'ka',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
                { '@type': 'ListItem', position: 3, name: b.title, item: `${SITE_URL}/blogs/${b.slug}` },
              ],
            },
          ];

          if (b.faqs.length > 0) {
            schemas.push({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: b.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            });
          }

          return {
            outFile: `blogs/${b.slug}/index.html`,
            canonicalPath: `/blogs/${b.slug}`,
            title: `${b.title} | GLC Law Company`,
            description: b.excerpt,
            ogType: 'article' as const,
            ogImage: b.image.startsWith('/.tempmediaStorage/') ? `/${path.basename(b.image)}` : b.image,
            schema: schemas,
            ssrHtml: `<main style="background:#0C0D0D;color:#FAFAFB;padding:3rem 1.5rem;font-family:sans-serif"><article><h1>${escapeHtmlAttr(
              b.title
            )}</h1><p>${escapeHtmlAttr(b.excerpt)}</p><nav><a href="/blogs">ყველა პუბლიკაცია</a></nav></article></main>`,
          };
        }),
        {
          outFile: '404.html',
          canonicalPath: '/404',
          title: 'გვერდი ვერ მოიძებნა (404) | GLC Law Company',
          description: 'მოთხოვნილი გვერდი ვერ მოიძებნა. გთხოვთ გადახვიდეთ GLC Law Company-ის მთავარ გვერდზე.',
          ogType: 'website',
          ogImage: '/HERO_GUBE.jpeg',
          noIndex: true,
          ssrHtml:
            '<main style="background:#030508;color:#FAFAFB;padding:4rem 1.5rem;text-align:center;font-family:sans-serif"><h1>404 - გვერდი ვერ მოიძებნა</h1><p>მოთხოვნილი მისამართი არ არსებობს.</p><a href="/">მთავარ გვერდზე დაბრუნება</a></main>',
        },
      ];

      for (const spec of routes) {
        const targetPath = path.join(distDir, spec.outFile);
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        fs.writeFileSync(targetPath, renderRouteHtml(templateHtml, spec), 'utf-8');
      }

      const homeSsr =
        '<main style="background:#030508;color:#FAFAFB;padding:3rem 1.5rem;font-family:sans-serif"><h1>GLC Law Company | ადვოკატი გიორგი გუბელაძე - ბათუმი და თბილისი</h1><p>21+ წლიანი გამოცდილება სისხლის, სამოქალაქო, ადმინისტრაციულ, ბიზნეს და საოჯახო სამართალში.</p><nav><a href="/practice-areas/criminal-defense">სისხლის სამართალი</a> | <a href="/practice-areas/family-law">საოჯახო სამართალი</a> | <a href="/practice-areas/real-estate-law">უძრავი ქონება</a> | <a href="/practice-areas/corporate-law">კორპორაციული სამართალი</a> | <a href="/blogs">ბლოგი</a></nav></main>';
      const updatedIndex = templateHtml.replace('<div id="root"></div>', `<div id="root">${homeSsr}</div>`);
      fs.writeFileSync(indexHtmlPath, updatedIndex, 'utf-8');
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), serveTempMediaPlugin(), dynamicSitemapPlugin(), staticPrerenderPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'next/image': path.resolve(__dirname, 'src/shims/next-image.tsx'),
        'next/link': path.resolve(__dirname, 'src/shims/next-link.tsx'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (
                id.includes('/react/') ||
                id.includes('/react-dom/') ||
                id.includes('/react-router')
              ) {
                return 'react-vendor';
              }
              if (id.includes('/framer-motion/') || id.includes('/motion/')) {
                return 'motion-vendor';
              }
              if (id.includes('/lucide-react/')) {
                return 'icons-vendor';
              }
            }
          },
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
