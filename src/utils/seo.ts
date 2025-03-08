import { SITE_CONSTANTS } from './constants';
import type { Metadata } from 'next';

const { BUSINESS_NAME, BUSINESS_DESCRIPTION } = SITE_CONSTANTS;

export const defaultMetadata: Metadata = {
  title: `${BUSINESS_NAME} | Ayurvedic Men's Sexual Wellness`,
  description: `Premium Ayurvedic products for men's sexual wellness and health. Natural remedies based on ancient Ayurvedic principles.`,
  keywords: [
    'Ayurvedic remedies',
    'men\'s sexual wellness',
    'natural health supplements',
    'male vitality',
    'Ayurvedic medicine',
    'sexual health',
    'natural remedies',
    'herbal supplements',
    'traditional medicine',
    'male enhancement',
    'Ayurveda',
  ],
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sanjeevaniayurveda.com',
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | Ayurvedic Men's Sexual Wellness`,
    description: BUSINESS_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: BUSINESS_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | Ayurvedic Men's Sexual Wellness`,
    description: BUSINESS_DESCRIPTION,
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sanjeevaniayurveda.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your actual verification code
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const getPageMetadata = (page: string): Metadata => {
  const pageMetadata: Record<string, Metadata> = {
    home: {
      title: `${BUSINESS_NAME} | Ayurvedic Men's Sexual Wellness Products`,
      description: `Premium Ayurvedic products for men's sexual wellness and health. Natural remedies based on ancient Ayurvedic principles.`,
      alternates: {
        canonical: 'https://sanjeevaniayurveda.com',
      },
    },
    products: {
      title: `Ayurvedic Products for Men's Health | ${BUSINESS_NAME}`,
      description: `Explore our range of authentic Ayurvedic products designed to enhance men's sexual health and vitality. Natural, effective, and based on traditional formulations.`,
      alternates: {
        canonical: 'https://sanjeevaniayurveda.com/products',
      },
    },
    about: {
      title: `About ${BUSINESS_NAME} | Our Ayurvedic Journey`,
      description: `Learn about our mission to revitalize men's health through authentic Ayurvedic principles. Discover our story, values, and commitment to quality.`,
      alternates: {
        canonical: 'https://sanjeevaniayurveda.com/about',
      },
    },
    contact: {
      title: `Contact ${BUSINESS_NAME} | Get Expert Ayurvedic Advice`,
      description: `Reach out to our Ayurvedic experts for personalized advice on men's sexual wellness products. We're here to help you on your journey to better health.`,
      alternates: {
        canonical: 'https://sanjeevaniayurveda.com/contact',
      },
    },
  };

  return {
    ...defaultMetadata,
    ...pageMetadata[page],
  } as Metadata;
};
