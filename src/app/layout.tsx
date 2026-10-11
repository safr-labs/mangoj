import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { poppins, inter } from '@/lib/fonts';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/footer/footer';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollToTop } from '@/components/shared/scroll-to-top';
import { buildGlobalSchemaGraph, SEO_KEYWORDS, SITE_URL } from '@/lib/seo';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5A623' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mango J (Manganikka) — Top Tamil YouTuber & Dubai Vlogger',
    template: '%s | Mango J (Manganikka) — Tamil Creator',
  },
  description:
    'Official portfolio of Mango J (Manganikka), leading Dubai-based Tamil YouTube creator with 104K+ subscribers. Viral food reviews, Gold Souk shopping bargains, travel vlogs, and property walkthroughs in Tamil.',
  keywords: SEO_KEYWORDS,
  authors: [
    { name: 'Mango J', url: SITE_URL },
    { name: 'Abdul Ajees M', url: 'https://safrlabs.in' },
  ],
  creator: 'Abdul Ajees M',
  publisher: 'Safr Labs',
  category: 'Entertainment & Lifestyle',
  applicationName: 'Mango J Portfolio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'ta-IN': '/',
      'x-default': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    alternateLocale: ['ta_IN'],
    url: SITE_URL,
    title: 'Mango J (Manganikka) — Top Tamil YouTuber & Dubai Vlogger',
    description:
      'Official portfolio of Mango J (Manganikka), leading Dubai-based Tamil YouTube creator. Food reviews, travel vlogs, gold bargains, and property tours.',
    siteName: 'Mango J (Manganikka) Official',
    firstName: 'Mango',
    lastName: 'J',
    gender: 'male',
    username: 'manganikka',
    images: [
      {
        url: '/mangoj4.webp',
        width: 1122,
        height: 1402,
        alt: 'Mango J (Manganikka) — Top Tamil YouTuber in Dubai',
      },
      {
        url: '/mangoj.webp',
        width: 500,
        height: 500,
        alt: 'Mango J Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mango J (Manganikka) — Top Tamil YouTuber & Dubai Vlogger',
    description:
      'Official portfolio of Mango J (Manganikka), Dubai-based Tamil YouTube creator. Food reviews, travel vlogs, gold guides, and property walkthroughs.',
    images: ['/mangoj4.webp'],
    creator: '@manganikka',
    site: '@manganikka',
  },
  icons: {
    icon: [
      { url: '/mangoj.webp', sizes: 'any' },
    ],
    shortcut: '/mangoj.webp',
    apple: [
      { url: '/mangoj.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
  verification: {
    google: 'pezeIX6JqyqIheLhm1fYi4lqN1iCXv5cdi4q9y4T6mQ',
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
    'geo.position': '25.2048;55.2708',
    'ICBM': '25.2048, 55.2708',
    'target-audience': 'Tamil Diaspora, South Asians, Foodies, Dubai Residents',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = buildGlobalSchemaGraph();

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-26P19YW8BF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-26P19YW8BF');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:p-3 focus:rounded-xl focus:font-semibold focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd schema={globalSchema} />
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
