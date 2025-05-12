import {
  Plane,
  Hotel,
  CreditCard,
  Car,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  TwitterIcon as TikTok,
  SnailIcon as Snapchat,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TestimonialCard from "@/components/testimonial-card"
import PackageCard from "@/components/package-card"
import ServiceCard from "@/components/service-card"
import { getPackagesByCategory } from "@/lib/utils"
import { services } from "@/data/services"
import Footer from "@/components/footer"
import { Language } from "@/lib/types"
import { initTranslations } from "@/lib/i18n-server"

export const dynamic = "force-static"

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const localeTyped = locale as Language
  const { t } = await initTranslations(localeTyped)
  
  // Get packages based on locale
  const middleEastPackages = getPackagesByCategory("middle-east", localeTyped)
  const europePackages = getPackagesByCategory("europe", localeTyped)
  const asiaPackages = getPackagesByCategory("asia", localeTyped)
  const cruisesPackages = getPackagesByCategory("cruises", localeTyped)

  return (
    <main className="flex min-h-screen flex-col" dir={localeTyped === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-gradient-to-r from-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image src="/tropical-resort-view.png" alt="Travel destinations" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white pt-16">
          <div className="mb-8 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
            <Image
              src="/images/logo.png"
              alt={t('general.siteName')}
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-shadow">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#offers">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                {t('general.explore')}
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="border-white text-blue-700 hover:bg-white/20">
                {t('general.contactUs')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
     {/* Special Offers Section */}
     <section className="py-20 bg-white" id="offers">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('offers.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('offers.subtitle')}
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <Tabs defaultValue="europe" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto md:grid-cols-4 mb-12 relative z-10 bg-white shadow-sm">
              <TabsTrigger value="europe">{t('offers.tabs.europe')}</TabsTrigger>
              <TabsTrigger value="middle-east">{t('offers.tabs.middleEast')}</TabsTrigger>
              <TabsTrigger value="asia">{t('offers.tabs.asia')}</TabsTrigger>
              <TabsTrigger value="cruises">{t('offers.tabs.cruises')}</TabsTrigger>
            </TabsList>

            <TabsContent value="europe" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {europePackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} locale={localeTyped} />
              ))}
            </TabsContent>

            <TabsContent value="middle-east" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {middleEastPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} locale={localeTyped} />
              ))}
            </TabsContent>

            <TabsContent value="asia" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {asiaPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} locale={localeTyped} />
              ))}
            </TabsContent>

            <TabsContent value="cruises" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {cruisesPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} locale={localeTyped} />
              ))}
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Link href="/packages">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('general.viewAllPackages')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('about.companyName')}</h3>
              <p className="text-gray-700 mb-6">
                {t('about.description1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('about.description2')}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-xl font-semibold mb-2">{t('about.visionTitle')}</h4>
                <p className="text-gray-700">
                  {t('about.vision')}
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image src="/luxury-travel-agency.png" alt="Our office" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 py-1 px-4 rounded-full text-sm font-semibold tracking-wide uppercase">{t('services.title')}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              {t('services.subtitle')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t('services.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                locale={localeTyped}
                t={t}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center p-1 rounded-full bg-blue-50 border border-blue-100">
              <Link href="#contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full">
                  {t('services.requestService')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Button>
              </Link>
              <Link href="#offers">
                <Button size="lg" variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-100 ml-2 rounded-full">
                  {t('services.viewPackages')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

 
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('testimonials.clients', { returnObjects: true }) as Array<{name: string; quote: string}>).map((client, index) => (
              <TestimonialCard
                key={index}
                name={client.name}
                quote={client.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 py-1 px-4 rounded-full text-sm font-semibold tracking-wide uppercase">{t('contact.title')}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              {t('contact.subtitle')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative h-48 bg-blue-600">
                <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/map-pattern.png')", backgroundSize: "cover" }}></div>
                <div className="relative p-8 text-white h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2">Our Information</h3>
                  <p className="opacity-90">{t('contact.infoDescription')}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{t('contact.locationTitle')}</h4>
                      <p className="mt-1 text-gray-600">
                        {t('contact.location')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{t('contact.phoneTitle')}</h4>
                      <p className="mt-1 text-gray-600">+966 510 490 506</p>
                      <p className="text-gray-600">+966 56 298 2415</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{t('contact.emailTitle')}</h4>
                      <p className="mt-1 text-gray-600">info@valleytravelcorner.com</p>
                    </div>
                    </div>
                  </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('contact.connectTitle')}</h4>
                  <div className="flex flex-wrap gap-3">
                      <Link
                        href="https://www.instagram.com/valleycornertravel"
                        target="_blank"
                        rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 shadow-sm"
                      >
                      <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href="https://x.com/corner_tra12256"
                        target="_blank"
                        rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 shadow-sm"
                      >
                      <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="https://www.facebook.com/share/1BqvwmZj4S/"
                        target="_blank"
                        rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 shadow-sm"
                      >
                      <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@valley.corner.tra"
                        target="_blank"
                        rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 shadow-sm"
                      >
                      <TikTok className="h-5 w-5" />
                        <span className="sr-only">TikTok</span>
                      </Link>
                      <Link
                        href="https://www.snapchat.com/add/valleycornertra"
                        target="_blank"
                        rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 shadow-sm"
                      >
                      <Snapchat className="h-5 w-5" />
                        <span className="sr-only">Snapchat</span>
                      </Link>
                      <Link
                        href="https://youtube.com/@valleycornertravel"
                        target="_blank"
                        rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300 shadow-sm"
                      >
                      <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </Link>
                    </div>
                  </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 -mr-12 -mt-12 bg-blue-100 rounded-full opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 -ml-10 -mb-10 bg-indigo-100 rounded-full opacity-30"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-1 text-gray-900">{t('contact.formTitle')}</h3>
                <p className="text-gray-600 mb-6">{t('contact.formDescription')}</p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t('contact.form.name')}
                      </label>
                      <input 
                        id="name" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t('contact.form.email')}
                      </label>
                      <input 
                        id="email" 
                        type="email" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      {t('contact.form.phone')}
                    </label>
                    <input 
                      id="phone" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder={t('contact.phonePlaceholder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {t('contact.form.subject')}
                    </label>
                    <input 
                      id="subject" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder={t('contact.subjectPlaceholder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {t('contact.form.message')}
                    </label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder={t('contact.messagePlaceholder')}
                    ></textarea>
                  </div>
                  <div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium">
                      {t('contact.form.send')}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
