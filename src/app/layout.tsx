import type { Metadata } from 'next';
import Script from 'next/script';
import { poppins, inter } from '@/lib/fonts';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/footer/footer';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollToTop } from '@/components/shared/scroll-to-top';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mango J (Manganikka) — Tamil Creator in Dubai',
  description:
    'Official portfolio of Mango J (Manganikka), Dubai-based Tamil YouTube creator. Food reviews, travel vlogs, gold guides, and property tours. Brand collaborations and media kit.',
  keywords: [
    'Mango J',
    'Manganikka',
    'Dubai Tamil Vlogger',
    'Dubai Food Review Tamil',
    'Dubai Tamil YouTuber',
    'Dubai Real Estate Tamil',
    'Manganikka YouTube Channel',
  ],
  authors: [{ name: 'Mango J' }],
  creator: 'Abdul Ajees M',
  publisher: 'Safr Labs',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mangoj13.com',
    title: 'Mango J (Manganikka) — Tamil Creator in Dubai',
    description:
      'Official portfolio of Mango J (Manganikka), Dubai-based Tamil YouTube creator. Explore food reviews, travel vlogs, and property tours.',
    siteName: 'Manganikka Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mango J (Manganikka) — Tamil Creator in Dubai',
    description:
      'Official portfolio of Mango J (Manganikka), Dubai-based Tamil YouTube creator. Explore food reviews, travel vlogs, and property tours.',
    creator: '@manganikka',
  },
  icons: {
    icon: '/mangoj.webp',
    shortcut: '/mangoj.webp',
    apple: '/mangoj.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const creatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'mainEntity': {
      '@type': 'Person',
      'name': 'Mango J',
      'alternateName': 'Manganikka',
      'description': 'Dubai-based Tamil lifestyle, food, and real estate YouTube creator.',
      'jobTitle': 'Content Creator',
      'nationality': 'Indian',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Dubai',
        'addressCountry': 'AE',
      },
      'sameAs': [
        'https://www.youtube.com/@manganikka',
        'https://www.instagram.com/manganikka',
      ],
    },
  };

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
          <JsonLd schema={creatorSchema} />
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
