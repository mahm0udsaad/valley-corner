import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { Language } from './types'

// Server-side language resources cache
const languageResources: Record<string, any> = {}

// Pre-load translations at build time (import statically)
import enTranslations from '@/public/locales/en/common.json'
import arTranslations from '@/public/locales/ar/common.json'

// Initialize resources
languageResources['en:common'] = enTranslations
languageResources['ar:common'] = arTranslations

// Get translation resource synchronously
const getTranslationResource = (locale: string, ns: string = 'common') => {
  // Check if we've already loaded this file
  const cacheKey = `${locale}:${ns}`
  return languageResources[cacheKey] || {}
}

// Initialize i18next for server-side
export async function initTranslations(locale: Language, ns: string[] = ['common']) {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .init({
      supportedLngs: ['en', 'ar'],
      fallbackLng: 'en',
      lng: locale,
      fallbackNS: 'common',
      defaultNS: 'common',
      ns,
      resources: {
        en: { common: languageResources['en:common'] },
        ar: { common: languageResources['ar:common'] }
      }
    })

  return {
    i18n: i18nInstance,
    t: i18nInstance.getFixedT(locale, ns[0]),
    resources: getTranslationResource(locale, ns[0]),
  }
}

// Simple translation helper for server components
export function getTranslation(locale: Language, key: string, ns: string = 'common') {
  const resources = getTranslationResource(locale, ns)
  
  // Split the key by dots and traverse the resources object
  const parts = key.split('.')
  let value = resources
  
  for (const part of parts) {
    if (!value || !value[part]) {
      return key // Return the key if translation is not found
    }
    value = value[part]
  }
  
  return typeof value === 'string' ? value : key
} 