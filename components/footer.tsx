'use client'

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { useTranslate } from "@/lib/i18n-client"

export default function Footer() {
  const { t } = useTranslate()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt={t('general.siteName')}
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="text-gray-400">{t('footer.tagline')}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link href="#offers" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.offers')}
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.testimonials')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.popularDestinations')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages/istanbul-turkey" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.turkey')}
                </Link>
              </li>
              <li>
                <Link href="/packages/georgia" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.georgia')}
                </Link>
              </li>
              <li>
                <Link href="/packages/bosnia" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.bosnia')}
                </Link>
              </li>
              <li>
                <Link href="/packages/cairo-egypt" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.egypt')}
                </Link>
              </li>
              <li>
                <Link href="/packages/azerbaijan" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.azerbaijan')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-400">{t('contact.address.value')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-gray-400">{t('contact.phone.value1')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-gray-400">{t('contact.email.value')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {t('general.siteName')}. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
