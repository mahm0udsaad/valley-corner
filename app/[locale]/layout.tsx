import React from 'react'
import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "@/components/client-layout"
import type { Language } from "@/lib/types"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Valley Corner Travel & Tourism",
  description: "Your trusted partner for unforgettable travel experiences",
  generator: 'v0.dev'
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