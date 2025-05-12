import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://valleytravelcorner.com'),
    title: {
      template: '%s | Valley Corner Travel & Tourism',
      default: 'Valley Corner Travel & Tourism - Your Trusted Travel Partner'
    },
    description: 'Your trusted partner for unforgettable travel experiences. We offer comprehensive travel solutions including flight bookings, hotel reservations, tour packages, and visa services.',
    keywords: ['travel agency', 'tourism', 'Saudi Arabia', 'travel packages', 'flight bookings', 'hotel reservations', 'visa services'],
    authors: [{ name: 'Valley Corner Travel & Tourism' }],
    creator: 'Valley Corner Travel & Tourism',
    publisher: 'Valley Corner Travel & Tourism',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'ar_SA',
      title: 'Valley Corner Travel & Tourism',
      description: 'Your trusted partner for unforgettable travel experiences. Discover our exclusive travel packages and services.',
      siteName: 'Valley Corner Travel & Tourism',
      images: [
        {
          url: 'https://valleytravelcorner.com/images/hero.jpg',
          width: 1200,
          height: 630,
          alt: 'Valley Corner Travel & Tourism Hero Image',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Valley Corner Travel & Tourism',
      description: 'Your trusted partner for unforgettable travel experiences. Discover our exclusive travel packages and services.',
      images: ['https://valleytravelcorner.com/images/hero.jpg'],
      creator: '@corner_tra12256',
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
    verification: {
      google: 'add-your-google-site-verification-here',
    },
    alternates: {
      canonical: 'https://valleytravelcorner.com',
      languages: {
        'en-US': 'https://valleytravelcorner.com/en',
        'ar-SA': 'https://valleytravelcorner.com/ar',
      },
    },
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 