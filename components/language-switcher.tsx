"use client"

import { useTranslate } from '@/lib/i18n-client'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const { locale, changeLanguage, t } = useTranslate()
  const router = useRouter()
  
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'
    // Set the cookie
    Cookies.set('NEXT_LOCALE', newLocale, {
      path: '/',
      expires: 365,
      sameSite: 'strict'
    })
    changeLanguage(newLocale)
    
    // Refresh the page to trigger middleware
    const newPath = window.location.pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
    router.push(newPath)
  }
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
    >
      <Globe className="h-4 w-4" />
      <span>{t('language.switchTo')}</span>
    </Button>
  )
} 