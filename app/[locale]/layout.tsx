import React from 'react'
import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "@/components/client-layout"
import type { Language } from "@/lib/types"

const inter = Inter({ subsets: ["latin"] })

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
        url: 'https://valley-corner.vercel.app/images/hero.jpg',
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
    images: ['https://valley-corner.vercel.app/images/hero.jpg'],
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

// Generate static params for supported locales
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const localeTyped = locale as Language
  const dir = localeTyped === 'ar' ? 'rtl' : 'ltr'
  
  return (
    <html lang={localeTyped} dir={dir} suppressHydrationWarning>
      <body className={`${inter.className} ${localeTyped === 'ar' ? 'font-arabic' : ''}`}>
        <ClientLayout locale={localeTyped}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 