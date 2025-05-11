import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Valley Corner Travel & Tourism"
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="text-gray-400">Your trusted partner for unforgettable travel experiences.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#offers" className="text-gray-400 hover:text-white transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages/istanbul-turkey" className="text-gray-400 hover:text-white transition-colors">
                  Turkey
                </Link>
              </li>
              <li>
                <Link href="/packages/georgia" className="text-gray-400 hover:text-white transition-colors">
                  Georgia
                </Link>
              </li>
              <li>
                <Link href="/packages/bosnia" className="text-gray-400 hover:text-white transition-colors">
                  Bosnia
                </Link>
              </li>
              <li>
                <Link href="/packages/cairo-egypt" className="text-gray-400 hover:text-white transition-colors">
                  Egypt
                </Link>
              </li>
              <li>
                <Link href="/packages/azerbaijan" className="text-gray-400 hover:text-white transition-colors">
                  Azerbaijan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-400">Al-Khobar, Al-Aqrabiah district, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-gray-400">+966 510 490 506</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-gray-400">info@valleytravelcorner.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Valley Corner Travel & Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
