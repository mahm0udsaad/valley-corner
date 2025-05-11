import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface OfferCardProps {
  image: string
  title: string
  days: string
  description: string
  price: string
  priceDetail: string
}

export default function OfferCard({ image, title, days, description, price, priceDetail }: OfferCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {days}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xl font-bold text-blue-600">{price}</div>
          <div className="text-sm text-gray-500">{priceDetail}</div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-4">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  )
}
