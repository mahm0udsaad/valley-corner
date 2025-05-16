import {
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
import HomeContactForm from "@/components/home-contact-form"

export const dynamic = "force-static"

export default async function Home() {
  // Get packages for Arabic
  const middleEastPackages = getPackagesByCategory("middle-east")
  const europePackages = getPackagesByCategory("europe")
  const asiaPackages = getPackagesByCategory("asia")
  const cruisesPackages = getPackagesByCategory("cruises")

  return (
    <main className="flex min-h-screen flex-col" dir="rtl">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-gradient-to-r from-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image src="/tropical-resort-view.png" alt="وجهات السفر" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white pt-16">
          <div className="mb-8 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
            <Image
              src="/images/logo.png"
              alt="ركن الترفيه للسفر والسياحه"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">ركن الترفيه للسفر والسياحه</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-shadow">
            شريكك الموثوق لتجارب سفر لا تُنسى
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#offers">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                استكشف الباقات
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="border-white text-blue-700 hover:bg-white/20">
                اتصل بنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
   
      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 py-1 px-4 rounded-full text-sm font-semibold tracking-wide uppercase">خدماتنا</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              نقدم مجموعة شاملة من خدمات السفر والسياحة لجعل رحلتك سلسة وممتعة.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              اكتشف مجموعتنا الواسعة من خدمات السفر المتميزة المصممة لتلبية جميع احتياجاتك.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center p-1 rounded-full bg-blue-50 border border-blue-100">
              <Link href="#contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full">
                  طلب خدمة
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Button>
              </Link>
              <Link href="#offers">
                <Button size="lg" variant="ghost" className="text-blue-700 hover:text-blue-800 hover:bg-blue-100 ml-2 rounded-full">
                  عرض الباقات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

     {/* Special Offers Section */}
     <section className="py-20 bg-white" id="offers">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">العروض الخاصة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استكشف باقات السفر الحصرية والعروض الخاصة إلى الوجهات الشهيرة.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <Tabs defaultValue="europe" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto md:grid-cols-4 mb-12 relative z-10 bg-white shadow-sm">
              <TabsTrigger value="europe">أوروبا</TabsTrigger>
              <TabsTrigger value="middle-east">الشرق الأوسط</TabsTrigger>
              <TabsTrigger value="asia">آسيا</TabsTrigger>
              <TabsTrigger value="cruises">الرحلات البحرية</TabsTrigger>
            </TabsList>

            <TabsContent value="europe" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {europePackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} />
              ))}
            </TabsContent>

            <TabsContent value="middle-east" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {middleEastPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} />
              ))}
            </TabsContent>

            <TabsContent value="asia" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {asiaPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} />
              ))}
            </TabsContent>

            <TabsContent value="cruises" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {cruisesPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} />
              ))}
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Link href="/packages">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                عرض جميع الباقات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ما يقوله عملاؤنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اسمع من عملائنا الراضين عن تجاربهم مع ركن الترفيه للسفر والسياحة.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="سارة القحطاني"
              quote="كانت رحلتنا العائلية إلى تركيا مذهلة! تعاملت ركن الترفيه للسفر مع كل شيء بشكل مثالي، من الرحلات الجوية إلى الفنادق والجولات المصحوبة بمرشدين. أوصي بها بشدة!"
            />
            <TestimonialCard
              name="محمد الحربي"
              quote="قام فريق ركن الترفيه للسفر بكل ما في وسعهم لجعل شهر العسل في جزر المالديف لا يُنسى. خدمة استثنائية من البداية إلى النهاية."
            />
            <TestimonialCard
              name="أحمد خالد"
              quote="كمسافر أعمال متكرر، أقدر اهتمام ركن الترفيه بالتفاصيل والدعم الفوري. لقد جعلوا رحلاتي خالية من التوتر لسنوات."
            />
          </div>
        </div>
      </section>

      {/* About Us Section with Commercial Certificate */}
      <section className="py-20 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 py-1 px-4 rounded-full text-sm font-semibold tracking-wide uppercase">من نحن</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              ركن الترفيه للسفر والسياحه
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 text-lg">
                شركة ركن الترفيه للسفر والسياحة هي شركة سعودية متخصصة في تقديم خدمات السفر والسياحة باحترافية عالية ومعايير عالمية. نعمل على توفير أفضل حلول الحجوزات للطيران الدولي والداخلي، بالإضافة إلى تنظيم الرحلات السياحية الخارجية، واستخراج التأشيرات، وحجوزات الفنادق حول العالم.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                نهدف إلى جعل تجربة السفر أكثر سهولة ورفاهية لعملائنا من خلال خدمات مخصصة، دعم متواصل، وعروض مميزة تناسب جميع الاحتياجات والميزانيات. نحن شركاؤك في كل رحلة، من لحظة التخطيط حتى العودة بذكريات لا تُنسى.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">رؤيتنا</h3>
                <p className="text-gray-700">
                  أن نكون من بين الرواد في قطاع السفر والسياحة على مستوى المملكة والمنطقة، من خلال تقديم خدمات مبتكرة وتجارب سفر متكاملة ترقى لتطلعات العملاء، وتعزز مكانة المملكة كوجهة سياحية
                </p>
              </div>
              
              <Link href="#contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  اتصل بنا
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">شهادة السجل التجاري</h3>
                  <div className="border border-gray-200 rounded-md p-2">
                    <Image 
                      src="/images/certificates/commercial-register.jpg"
                      alt="شهادة السجل التجاري"
                      width={500}
                      height={650}
                      className="mx-auto rounded-md"
                      priority
                    />
                  </div>
                  <p className="text-center text-gray-500 mt-4 text-sm">رقم السجل التجاري: 7042867981</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 py-1 px-4 rounded-full text-sm font-semibold tracking-wide uppercase">اتصل بنا</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              تواصل معنا للاستفسارات أو الحجوزات أو أي مساعدة تحتاجها.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              نحن هنا للإجابة على أي أسئلة قد تكون لديك حول خدماتنا.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative h-48 bg-blue-600">
                <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/map-pattern.png')", backgroundSize: "cover" }}></div>
                <div className="relative p-8 text-white h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2">معلوماتنا</h3>
                  <p className="opacity-90">تواصل معنا من خلال أي من هذه القنوات</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">العنوان</h4>
                      <p className="mt-1 text-gray-600">
                        الخبر، حي العقربية، الشارع العاشر، بجوار مطعم سمك التنورة، المملكة العربية السعودية
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">الهاتف</h4>
                      <p className="mt-1 text-gray-600">+966 510 490 506</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">البريد الإلكتروني</h4>
                      <p className="mt-1 text-gray-600">valleycornertravel@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">تواصل معنا</h4>
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
                      <span className="sr-only">Youtube</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              
                <HomeContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
