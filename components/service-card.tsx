import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Service } from "@/data/services"

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  
  return (
    <div className="group">
      <Card className="relative overflow-hidden transition-all duration-300 border-transparent hover:border-blue-400 hover:shadow-2xl h-full bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-0 left-0 w-24 h-24 -ml-8 -mt-8 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300"></div>
        <CardHeader className="pb-2 relative">
          <div className="mb-4 p-3 bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle className="text-xl transition-colors duration-200 group-hover:text-blue-700">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <p className="text-gray-600 group-hover:text-gray-700 text-base">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
