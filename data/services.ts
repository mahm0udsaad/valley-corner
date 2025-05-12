import {
  Plane,
  Hotel,
  CreditCard,
  Car,
  MapPin,
  Ship,
  type LucideIcon
} from "lucide-react"

export interface Service {
  icon: LucideIcon
  titleKey: string
  descriptionKey: string
}

export const services: Service[] = [
  {
    icon: Plane,
    titleKey: 'services.flightBookings.title',
    descriptionKey: 'services.flightBookings.description'
  },
  {
    icon: Hotel,
    titleKey: 'services.hotelReservations.title',
    descriptionKey: 'services.hotelReservations.description'
  },
  {
    icon: CreditCard,
    titleKey: 'services.visaServices.title',
    descriptionKey: 'services.visaServices.description'
  },
  {
    icon: MapPin,
    titleKey: 'services.tourismPackages.title',
    descriptionKey: 'services.tourismPackages.description'
  },
  {
    icon: Car,
    titleKey: 'services.carRentals.title',
    descriptionKey: 'services.carRentals.description'
  },
  {
    icon: Ship,
    titleKey: 'services.cruiseBookings.title',
    descriptionKey: 'services.cruiseBookings.description'
  }
] 