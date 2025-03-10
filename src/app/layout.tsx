// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/shared/FloatingButtons';
// Metadata is defined in metadata.ts file
import Script from 'next/script';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import GoogleTagManagerNoScript from '@/components/analytics/GoogleTagManagerNoScript';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata is defined in metadata.ts file

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sanjeevaniayurveda.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4CAF50" />
        <GoogleTagManager />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleTagManagerNoScript />
        
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
        
        {/* Schema.org structured data */}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sanjeevani Chikitsa Ayurveda",
              "url": "https://sanjeevaniayurveda.com",
              "logo": "https://sanjeevaniayurveda.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-6389362607",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://facebook.com/sanjeevanichikitsaayurveda",
                "https://instagram.com/sanjeevanichikitsaayurveda",
                "https://youtube.com/c/sanjeevanichikitsaayurveda"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
