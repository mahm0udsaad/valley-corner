import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { travelPackages as arabicPackages } from '@/data/packages.ar'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPackagesByCategory(category: string) {
  return arabicPackages.filter(pkg => pkg.category === category)
}
