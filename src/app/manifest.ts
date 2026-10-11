import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mango J (Manganikka) — Top Tamil Creator in Dubai',
    short_name: 'Mango J',
    description:
      'Official portfolio and channel hub of Mango J (Manganikka), Dubai-based Tamil YouTube creator. Food reviews, travel vlogs, gold guides, and property tours.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#F5A623',
    icons: [
      {
        src: '/mangoj.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/mangoj.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
