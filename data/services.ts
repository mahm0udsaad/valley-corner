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
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Plane,
    title: 'حجز الطيران',
    description: 'نقدم خدمات حجز تذاكر الطيران الدولية والداخلية بأفضل الأسعار وضمان أفضل الخدمات.'
  },
  {
    icon: Hotel,
    title: 'حجز الفنادق',
    description: 'احجز إقامتك في أفضل الفنادق حول العالم مع عروض حصرية وضمان أفضل الأسعار.'
  },
  {
    icon: CreditCard,
    title: 'خدمات التأشيرات',
    description: 'نساعدك في استخراج التأشيرات لجميع دول العالم بسرعة وكفاءة عالية.'
  },
  {
    icon: MapPin,
    title: 'الباقات السياحية',
    description: 'باقات سياحية متكاملة إلى مختلف الوجهات العالمية مع أفضل الخدمات والرعاية.'
  },
  {
    icon: Car,
    title: 'تأجير السيارات',
    description: 'خدمة تأجير السيارات في مختلف دول العالم مع أفضل الأسعار والخدمات.'
  },
  {
    icon: Ship,
    title: 'حجز الرحلات البحرية',
    description: 'رحلات بحرية مميزة إلى أجمل الوجهات العالمية مع أفضل شركات الرحلات البحرية.'
  }
] 