import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, CheckCircle, ListChecks, Phone } from "lucide-react"
import { travelPackages as arabicPackages } from "@/data/packages.ar"
import VideoPlayer from "@/components/video-player"
import PackageCard from "@/components/package-card"
import PackageBookingForm from "@/components/package-booking-form"

export const dynamic = "force-static"

// Pre-render these routes at build time
export function generateStaticParams() {
  return arabicPackages.map((pkg) => ({
    id: pkg.id,
  }))
}

export default async function PackageDetailPage({ params }: { params: { id: string } }) {
  const { id } = params
  const packageData = arabicPackages.find((pkg) => pkg.id === id)

  // If package not found, show 404
  if (!packageData) {
    notFound()
  }

  return (
    <>
      <main className="min-h-screen pt-24 pb-20" dir="rtl">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[50vh] rounded-xl overflow-hidden mb-8">
            <Image
              src={packageData.image || "/placeholder.svg"}
              alt={packageData.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 right-0 p-8 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{packageData.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mx-1" />
                  <span>{packageData.destination}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mx-1" />
                  <span>{packageData.days}</span>
                </div>
              </div>
              <div className="bg-blue-600 inline-block px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">{packageData.price}</span>
                <span className="text-sm mx-2">{packageData.priceDetail}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold border-b pb-2">وصف الرحلة</h2>
                <p className="text-gray-700">{packageData.description}</p>

                <div>
                  <h3 className="text-xl font-bold mb-4">أبرز المعالم</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {packageData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">الخدمات المشمولة</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {packageData.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <ListChecks className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <span className="text-gray-700">{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Itinerary Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2">برنامج الرحلة</h2>
                {packageData.itinerary.map((day) => (
                  <Card key={day.day} className="overflow-hidden">
                    <div className="bg-blue-600 text-white p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <h3 className="text-xl font-semibold">
                          اليوم {day.day}: {day.title}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-700">{day.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Gallery Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2">معرض الصور</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.gallery.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${packageData.title} - صورة ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              {packageData.video && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold border-b pb-2">جولة فيديو</h2>
                  <VideoPlayer src={packageData.video} poster={packageData.image} />
                  <p className="text-gray-600 mt-4">
                    شاهد هذا الفيديو للتعرف على {packageData.destination} بشكل أفضل
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="sticky top-24">
                <PackageBookingForm packageName={packageData.title} />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">قد يعجبك أيضاً</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {arabicPackages
                .filter((pkg) => pkg.id !== packageData.id && pkg.category === packageData.category)
                .slice(0, 3)
                .map((pkg) => (
                  <PackageCard key={pkg.id} packageData={pkg} />
                ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/packages">
              <Button variant="outline" className="mx-4">
                العودة إلى جميع الباقات
              </Button>
            </Link>
            <Link href="/#contact">
              <Button>تواصل معنا</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
