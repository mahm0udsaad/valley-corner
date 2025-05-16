'use client'

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="ركن الترفيه للسفر والسياحه"
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="text-gray-400">شريكك الموثوق لتجارب سفر لا تُنسى.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="#offers" className="text-gray-400 hover:text-white transition-colors">
                  العروض
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  آراء العملاء
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">الوجهات الشائعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages/istanbul-turkey" className="text-gray-400 hover:text-white transition-colors">
                  تركيا
                </Link>
              </li>
              <li>
                <Link href="/packages/georgia" className="text-gray-400 hover:text-white transition-colors">
                  جورجيا
                </Link>
              </li>
              <li>
                <Link href="/packages/bosnia" className="text-gray-400 hover:text-white transition-colors">
                  البوسنة
                </Link>
              </li>
              <li>
                <Link href="/packages/cairo-egypt" className="text-gray-400 hover:text-white transition-colors">
                  مصر
                </Link>
              </li>
              <li>
                <Link href="/packages/azerbaijan" className="text-gray-400 hover:text-white transition-colors">
                  أذربيجان
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-400">الخبر، حي العقربية، الشارع العاشر، بجوار مطعم سمك التنورة، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-gray-400">+966 510 490 506</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-gray-400">valleycornertravel@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ركن الترفيه للسفر والسياحه. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
