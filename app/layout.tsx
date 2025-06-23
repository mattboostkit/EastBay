import './globals.css';
import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CanonicalLink } from '@/components/SEO/CanonicalLink';
import { GoogleAnalytics } from '@/components/SEO/GoogleAnalytics';
import { OrganizationStructuredData } from '@/components/SEO/StructuredData';

// Initialize the Geist fonts
const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org'),
  title: {
    default: 'East Wear Bay Project | Folkestone Roman Villa Research',
    template: '%s | East Wear Bay Project',
  },
  description: 'Exploring the Folkestone Roman Villa through community archaeology, digital preservation, and education. Join us in preserving this coastal heritage site threatened by erosion.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org',
    title: 'East Wear Bay Project | Folkestone Roman Villa Research',
    description: 'Exploring the Folkestone Roman Villa through community archaeology, digital preservation, and education.',
    siteName: 'East Wear Bay Project',
    images: [
      {
        url: 'https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg',
        width: 1200,
        height: 630,
        alt: 'East Wear Bay Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'East Wear Bay Project | Folkestone Roman Villa Research',
    description: 'Exploring the Folkestone Roman Villa through community archaeology, digital preservation, and education.',
    images: ['https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://eastwearbaypt.org'}/rss.xml`,
    },
  },
  applicationName: 'East Wear Bay Project',
  authors: [{ name: 'East Wear Bay Project Team' }],
  keywords: ['archaeology', 'Folkestone Roman Villa', '3D artefacts', 'community archaeology', 'digital preservation', 'coastal erosion', 'heritage', 'East Wear Bay'],
  creator: 'East Wear Bay Project',
  publisher: 'East Wear Bay Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <CanonicalLink />
        <OrganizationStructuredData />
        <GoogleAnalytics />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}