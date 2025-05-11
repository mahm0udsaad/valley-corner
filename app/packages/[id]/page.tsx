import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, CheckCircle, ListChecks, Phone } from "lucide-react"
import { travelPackages } from "@/data/packages"
import VideoPlayer from "@/components/video-player"
import PackageCard from "@/components/package-card"
import Footer from "@/components/footer"

export const dynamic = "force-static"

// Pre-render these routes at build time
export function generateStaticParams() {
  return travelPackages.map((pkg) => ({
    id: pkg.id,
  }))
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params before using them
  const { id } = await params
  
  // Find the package directly from the imported array
  const packageData = travelPackages.find((pkg) => pkg.id === id)

  // If package not found, show 404
  if (!packageData) {
    notFound()
  }

  return (
    <>
      <main className="min-h-screen pt-24 pb-20">
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
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{packageData.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{packageData.destination}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{packageData.days}</span>
                </div>
              </div>
              <div className="bg-blue-600 inline-block px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold">{packageData.price}</span>
                <span className="text-sm ml-2">{packageData.priceDetail}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview Section */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold border-b pb-2">Package Description</h2>
                <p className="text-gray-700">{packageData.description}</p>

                <div>
                  <h3 className="text-xl font-bold mb-4">Highlights</h3>
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
                  <h3 className="text-xl font-bold mb-4">What's Included</h3>
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
                <h2 className="text-2xl font-bold border-b pb-2">Detailed Itinerary</h2>
                {packageData.itinerary.map((day) => (
                  <Card key={day.day} className="overflow-hidden">
                    <div className="bg-blue-600 text-white p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <h3 className="text-xl font-semibold">
                          Day {day.day}: {day.title}
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
                <h2 className="text-2xl font-bold border-b pb-2">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.gallery.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${packageData.title} - Image ${index + 1}`}
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
                  <h2 className="text-2xl font-bold border-b pb-2">Video Tour</h2>
                  <VideoPlayer src={packageData.video} poster={packageData.image} />
                  <p className="text-gray-600 mt-4">
                    Experience the beauty of {packageData.destination} through our video tour. Get a glimpse of what
                    awaits you on this amazing journey.
                  </p>
                </div>
              )}
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold">Book This Package</h3>
                  <p className="text-gray-600">
                    Fill out the form below to inquire about this package or contact us directly for more information.
                  </p>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input id="name" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input id="email" type="email" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <input id="phone" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="travelers" className="text-sm font-medium">
                        Number of Travelers
                      </label>
                      <input id="travelers" type="number" min="1" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium">
                        Preferred Travel Date
                      </label>
                      <input id="date" type="date" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Special Requests
                      </label>
                      <textarea id="message" rows={3} className="w-full p-2 border rounded-md"></textarea>
                    </div>

                    <Button className="w-full">Submit Inquiry</Button>
                  </form>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-2">Need help? Contact us directly:</p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Phone className="h-4 w-4" />
                      <span>+966 510 490 506</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">You May Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {travelPackages
                .filter((pkg) => pkg.id !== packageData.id && pkg.category === packageData.category)
                .slice(0, 3)
                .map((pkg) => (
                  <PackageCard key={pkg.id} packageData={pkg} />
                ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/packages">
              <Button variant="outline" className="mr-4">
                Back to All Packages
              </Button>
            </Link>
            <Link href="/#contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
