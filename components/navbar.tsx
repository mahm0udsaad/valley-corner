"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { useTranslate } from "@/lib/i18n-client"
import type { Language } from "@/lib/types"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t, locale, changeLanguage, direction } = useTranslate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    changeLanguage(locale === 'en' ? 'ar' : 'en' as Language)
  }

  const navLinks = [
    { name: t('navigation.home'), href: "/" },
    { name: t('navigation.about'), href: "#about" },
    { name: t('navigation.services'), href: "#services" },
    { name: t('navigation.offers'), href: "#offers" },
    { name: t('navigation.testimonials'), href: "#testimonials" },
    { name: t('navigation.contact'), href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className={`relative h-12 w-36 ${isScrolled ? "" : "md:block"}`}>
              <Image src="/images/logo.png" alt={t('general.siteName')} fill className="object-contain" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? "text-blue-600" : "text-white"} ml-2 hidden md:inline`}>
              Valley Corner
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`flex items-center gap-1 ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:bg-white/10"
              }`}
            >
              <Globe className="h-4 w-4" />
              <span>{t('language.switchTo')}</span>
            </Button>
            
            <Button
              className={isScrolled ? "bg-blue-600 hover:bg-blue-700" : "bg-white text-blue-600 hover:bg-blue-50"}
            >
              {t('general.bookNow')}
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={`h-6 w-6 ${isScrolled ? "text-blue-600" : "text-white"}`} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={locale === 'ar' ? "left" : "right"} className="overflow-y-auto max-h-screen">
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-8 mt-4">
                  <Image src="/images/logo.png" alt={t('general.siteName')} width={120} height={120} />
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <Button
                    variant="ghost"
                    onClick={toggleLanguage}
                    className="flex items-center justify-start px-4 py-2 text-lg font-medium text-gray-700 hover:text-blue-600"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    <span>{t('language.switchTo')}</span>
                  </Button>
                </nav>
                <div className="mt-auto mb-8">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">{t('general.bookNow')}</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
