import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Service } from "@/data/services"
import type { Language } from "@/lib/types"

interface ServiceCardProps {
  service: Service
  locale: Language
  t: (key: string) => string
}

export default function ServiceCard({ service, locale, t }: ServiceCardProps) {
  const Icon = service.icon
  
  return (
    <div className="group">
      <Card className="relative overflow-hidden transition-all duration-300 border-transparent hover:border-blue-400 hover:shadow-2xl h-full bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className={`absolute top-0 ${locale === 'ar' ? 'left-0' : 'right-0'} w-24 h-24 ${locale === 'ar' ? '-ml-8' : '-mr-8'} -mt-8 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300`}></div>
        <CardHeader className="pb-2 relative">
          <div className="mb-4 p-3 bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle className="text-xl transition-colors duration-200 group-hover:text-blue-700">
            {t(service.titleKey)}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <p className="text-gray-600 group-hover:text-gray-700 text-base">
            {t(service.descriptionKey)}
          </p>
          <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 -mb-2 font-medium text-sm">
            {t('general.learnMore')}
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
