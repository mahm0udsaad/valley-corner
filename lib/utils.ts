import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { travelPackages as englishPackages } from '@/data/packages'
import { travelPackages as arabicPackages } from '@/data/packages.ar'
import { Language } from './i18n'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPackagesByCategory(category: string, locale: Language = 'en') {
  const packages = locale === 'ar' ? arabicPackages : englishPackages
  return packages.filter(pkg => pkg.category === category)
}
