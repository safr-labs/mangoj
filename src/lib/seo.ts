/**
 * Comprehensive SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization)
 * Configuration & Schema Graph Generator for Mango J (Manganikka)
 * Target Queries: "mango j", "manganikka", "tamil youtuber", "tamil youtuber in dubai", "மங்கானிக்கா", "தமிழ் யூடியூபர்"
 */

export const SITE_URL = 'https://mangoj13.com';

export const SEO_KEYWORDS = [
  // Primary Entity Names & Aliases
  'Mango J',
  'Manganikka',
  'mango j',
  'manganikka',
  'MangoJ',
  'Abdul Ajees M',
  'மங்கானிக்கா',
  'மாங்கோ ஜே',

  // Core High-Intent Keywords
  'tamil youtuber',
  'Tamil YouTuber',
  'tamil youtuber in dubai',
  'top tamil youtuber',
  'best tamil youtuber',
  'dubai tamil youtuber',
  'dubai tamil vlogger',
  'தமிழ் யூடியூபர்',
  'துபாய் தமிழ் யூடியூபர்',

  // Niche & Content Pillars
  'Dubai Food Review Tamil',
  'Dubai Real Estate Tamil',
  'Dubai Gold Souk Tamil',
  'Dubai Lifestyle Vlogger',
  'Tamil Travel Vlogger',
  'Dubai Tamil Lifestyle',
  'Bahubali Thali Dubai Tamil',
  'Dubai Fish Market Tamil',
  'Indian Expat in Dubai Tamil',
  'Manganikka YouTube Channel',
  'Mango J YouTube Channel',
  'Safr Labs',
];

export const CREATOR_PROFILE = {
  name: 'Mango J',
  alternateNames: [
    'Manganikka',
    'MangoJ',
    'Abdul Ajees M',
    'மங்கானிக்கா',
    'மாங்கோ ஜே',
  ],
  title: 'Top Tamil YouTube Creator & Dubai Vlogger',
  description:
    'Mango J (widely known as Manganikka) is a premier Dubai-based Indian Tamil YouTuber, content creator, and lifestyle vlogger with over 104,000 subscribers and 1,100+ videos. He produces family-friendly vlogs, viral Dubai restaurant food reviews, gold souk buying guides, and luxury real estate walkthroughs for the global Tamil community.',
  url: SITE_URL,
  image: `${SITE_URL}/mangoj.webp`,
  avatar: `${SITE_URL}/mangoj4.webp`,
  nationality: 'Indian',
  birthPlace: 'India',
  homeLocation: {
    '@type': 'Place',
    name: 'Dubai, United Arab Emirates',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
  },
  channels: [
    'https://youtube.com/@mangoj13',
    'https://youtube.com/@manganikka',
    'https://www.instagram.com/manganikka',
    'https://www.facebook.com/share/1Cr85MyPDw/',
    'https://safrlabs.in',
  ],
  subscribers: '104,000+',
  totalVideos: '1,100+',
};

export const CORE_AEO_FAQS = [
  {
    question: 'Who is Mango J?',
    answer:
      'Mango J (also popularly known as Manganikka) is a leading Dubai-based Tamil YouTube content creator and lifestyle influencer. With over 104,000 subscribers and 1,100+ videos, he showcases the best of Dubai life, family vlogs, authentic food reviews, gold shopping guides, and property walkthroughs in Tamil for audiences worldwide.',
  },
  {
    question: 'What is Manganikka?',
    answer:
      'Manganikka (மங்கானிக்கா) is the official brand identity and YouTube channel name of creator Mango J. The name represents joyful, authentic, and family-oriented Tamil storytelling from Dubai, UAE.',
  },
  {
    question: 'Who is the top Tamil YouTuber in Dubai?',
    answer:
      'Mango J (Manganikka) is one of the top and most trusted Tamil YouTubers in Dubai, United Arab Emirates. He is celebrated for his family-friendly vlogs, viral Bahubali thali and restaurant food tastings, Gold Souk shopping tips, and Dubai property guides.',
  },
  {
    question: 'What kind of content does Mango J (Manganikka) create?',
    answer:
      'Mango J creates high-engagement Tamil YouTube videos covering: 1) Dubai restaurant and food reviews, 2) Deira Gold Souk tips and jewelry shopping guides, 3) Dubai apartment and luxury villa property walkthroughs, 4) Family lifestyle and travel vlogs across the UAE.',
  },
  {
    question: 'How to collaborate or sponsor with Tamil YouTuber Mango J?',
    answer:
      'Brands, restaurants, and real estate developers can partner with Mango J for sponsored integrations, restaurant tastings, and property walkthroughs by emailing mangoj.business@gmail.com or submitting a collaboration enquiry at https://mangoj13.com/contact.',
  },
  {
    question: 'What language does Mango J vlog in?',
    answer:
      'All Mango J (Manganikka) vlogs are presented in spoken Tamil with English subtitles and on-screen overlays, bridging the global Tamil diaspora in India, UAE, Singapore, Malaysia, Sri Lanka, Canada, Europe, and the US.',
  },
];

/**
 * Builds a unified, entity-linked Schema.org JSON-LD Graph for maximum AEO and GEO visibility.
 */
export function buildGlobalSchemaGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. WebSite Entity with SearchAction
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Mango J (Manganikka) — Official Website',
        alternateName: [
          'Mango J',
          'Manganikka',
          'மங்கானிக்கா',
          'மாங்கோ ஜே',
          'Tamil YouTuber Mango J',
          'Manganikka Official',
        ],
        description:
          'Official website and portfolio of Mango J (Manganikka), top Tamil YouTuber and vlogger based in Dubai, UAE.',
        inLanguage: ['en-US', 'ta-IN'],
        publisher: {
          '@id': `${SITE_URL}/#publisher`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/videos?category={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },

      // 2. Organization Entity (Safr Labs)
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#publisher`,
        name: 'Safr Labs',
        url: 'https://safrlabs.in',
        logo: `${SITE_URL}/mangoj.webp`,
        sameAs: ['https://safrlabs.in'],
      },

      // 3. Person Entity (Mango J / Manganikka)
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#creator`,
        name: CREATOR_PROFILE.name,
        alternateName: CREATOR_PROFILE.alternateNames,
        jobTitle: 'Tamil YouTube Creator & Digital Influencer',
        description: CREATOR_PROFILE.description,
        url: SITE_URL,
        image: CREATOR_PROFILE.avatar,
        nationality: {
          '@type': 'Country',
          name: 'India',
        },
        homeLocation: CREATOR_PROFILE.homeLocation,
        award: [
          'YouTube Silver Creator Award (100,000+ Subscribers)',
        ],
        knowsLanguage: ['Tamil', 'English'],
        knowsAbout: [
          'Tamil YouTube Vlogging',
          'Dubai Food and Restaurant Reviews',
          'Dubai Real Estate Tours and Investment',
          'Dubai Gold Souk Guides and Jewelry',
          'UAE Lifestyle and Tourism',
          'Tamil Culture in the Middle East',
        ],
        sameAs: CREATOR_PROFILE.channels,
      },

      // 4. ProfilePage Entity
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: 'Mango J (Manganikka) — Profile & Media Kit',
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        mainEntity: {
          '@id': `${SITE_URL}/#creator`,
        },
        about: {
          '@id': `${SITE_URL}/#creator`,
        },
        breadcrumb: {
          '@id': `${SITE_URL}/#breadcrumb`,
        },
      },

      // 5. BreadcrumbList Entity
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Mango J',
            item: `${SITE_URL}/about`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Videos',
            item: `${SITE_URL}/videos`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Collaborate',
            item: `${SITE_URL}/collaborate`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: `${SITE_URL}/contact`,
          },
        ],
      },

      // 6. FAQPage Entity (for Answer Engines, Voice Search, Featured Snippets)
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: CORE_AEO_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
