'use client'

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Tag } from "lucide-react"
import type { TravelPackage } from "@/data/packages"
import { useTranslate } from "@/lib/i18n-client"
import { Language } from "@/lib/types"

interface PackageCardProps {
  packageData: TravelPackage
  locale: Language
}

export default function PackageCard({ packageData, locale }: PackageCardProps) {
  const { t } = useTranslate()
  
  return (
    <Link href={`/${locale}/packages/${packageData.id}`} className="block group">
      <Card className="overflow-hidden transition-all duration-300 h-full hover:shadow-xl border-transparent hover:border-blue-400 bg-white relative">
        {/* Add a gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-600/0 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        
        {/* Image container with hover effect */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20 z-10"></div>
          <Image
            src={packageData.image || "/placeholder.svg"}
            alt={packageData.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Price tag */}
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-20 shadow-md">
            {packageData.price}
          </div>
          
          {/* Duration badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 text-blue-800 px-3 py-1 rounded-full text-sm font-medium z-20 flex items-center">
            <Clock className="h-3.5 w-3.5 mx-1" />
            {packageData.days}
          </div>
        </div>
        
        <CardContent className={`p-5 relative ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
          {/* Main content */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
            {packageData.title}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mx-1 text-blue-600 flex-shrink-0" />
            <span className="text-sm truncate">{packageData.destination}</span>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
            {packageData.description}
          </p>
          
          {/* Bottom section with view details button */}
          <div className={`flex ${locale === 'ar' ? 'justify-end' : 'justify-start'}`}>
            <Button 
              variant="outline" 
              size="sm"
              className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 group-hover:border-blue-500 transition-all duration-300"
            >
              {t('general.viewDetails')}
              <svg className={`w-4 h-4 mx-1.5 group-hover:${locale === 'ar' ? 'translate-x-[-2px]' : 'translate-x-[2px]'} transition-transform`} 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
