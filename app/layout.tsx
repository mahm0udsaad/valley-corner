import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/client-layout"
import WhatsAppButton from "@/components/whatsapp-button"
import TikTokPixel from "@/components/tiktok-pixel"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff"
}

export const metadata: Metadata = {
  title: "وادي الترفيه للسفر والسياحه | رحلات وعروض سياحية مميزة",
  description: "وادي الترفيه للسفر والسياحه - شريكك الموثوق لتجارب سفر لا تُنسى. نقدم خدمات حجز الفنادق، تذاكر الطيران، الرحلات السياحية المنظمة، والبرامج السياحية المتكاملة بأفضل الأسعار",
  keywords: "وادي الترفيه, وادي الترفيه للسفر, وادي الترفيه للسياحة, سفر, سياحة, حجز رحلات, عطلات, تذاكر طيران, فنادق, برامج سياحية, رحلات منظمة, سياحة خارجية, حجز فنادق, سياحة داخلية",
  authors: [{ name: "وادي الترفيه للسفر والسياحه" }],
  creator: "وادي الترفيه للسفر والسياحه",
  publisher: "وادي الترفيه للسفر والسياحه",
  openGraph: {
    title: "وادي الترفيه للسفر والسياحه - رحلات وعروض سياحية مميزة",
    description: "وادي الترفيه للسفر والسياحه - شريكك الموثوق لتجارب سفر لا تُنسى. نقدم خدمات حجز الفنادق، تذاكر الطيران، الرحلات السياحية المنظمة، والبرامج السياحية المتكاملة بأفضل الأسعار",
    url: "https://www.valleycorner.com",
    siteName: "وادي الترفيه للسفر والسياحه",
    locale: "ar_SA",
    type: "website",
    images: [ 
      {
        url: "https://www.valleycorner.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "وادي الترفيه للسفر والسياحه"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "وادي الترفيه للسفر والسياحه - رحلات وعروض سياحية مميزة",
    description: "وادي الترفيه للسفر والسياحه - شريكك الموثوق لتجارب سفر لا تُنسى. نقدم خدمات حجز الفنادق، تذاكر الطيران، الرحلات السياحية المنظمة، والبرامج السياحية المتكاملة بأفضل الأسعار",
    images: ["https://www.valleycorner.com/images/hero.jpg"],
    creator: "@valleycorner",
    site: "@valleycorner"
  },
  alternates: {
    canonical: "https://www.valleycorner.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <ClientLayout>
          {children}
          <WhatsAppButton />
        </ClientLayout>
        <TikTokPixel />
      </body>
    </html>
  )
} 