import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import type { TravelPackage } from "@/data/packages"

interface PackageCardProps {
  packageData: TravelPackage
}

export default function PackageCard({ packageData }: PackageCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image src={packageData.image || "/placeholder.svg"} alt={packageData.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{packageData.title}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {packageData.days}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{packageData.description}</p>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xl font-bold text-blue-600">{packageData.price}</div>
          <div className="text-sm text-gray-500">{packageData.priceDetail}</div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-4">
        <Link href={`/packages/${packageData.id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
