import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mangoj13.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Search Engines
      {
        userAgent: ['Googlebot', 'Bingbot', 'Yandex', 'Baiduspider', 'DuckDuckBot'],
        allow: '/',
      },
      // Generative AI / Answer Engine Crawlers (GEO / AEO)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Applebot',
          'Applebot-Extended',
          'cohere-ai',
          'Bytespider',
          'Diffbot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
