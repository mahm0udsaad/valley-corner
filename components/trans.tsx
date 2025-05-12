import { getTranslation } from '@/lib/i18n-server'
import type { Language } from '@/lib/types'

interface TransTextProps {
  locale: Language
  text: string
  ns?: string
}

// A simple component to use translations in server components
export function TransText({ locale, text, ns = 'common' }: TransTextProps) {
  return <>{getTranslation(locale, text, ns)}</>
} 