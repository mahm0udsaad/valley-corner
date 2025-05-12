'use client'

import React from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Language } from "@/lib/types"
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

interface ClientLayoutProps {
  children: React.ReactNode
  locale: Language
}

export default function ClientLayout({ children, locale }: ClientLayoutProps) {
  // Set i18next language
  React.useEffect(() => {
    if (i18next.isInitialized) {
      i18next.changeLanguage(locale)
    }
  }, [locale])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <I18nextProvider i18n={i18next}>
        <Navbar />
        {children}
        <Footer />
      </I18nextProvider>
    </ThemeProvider>
  )
} 