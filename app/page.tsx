import "./globals.css"
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TestimonialCard from "@/components/testimonial-card"
import PackageCard from "@/components/package-card"
import ServiceCard from "@/components/service-card"
import { getFeaturedPackages, getPackagesByCategory } from "@/data/packages"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

// Add custom styles
const textShadowStyle = {
  textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
}

export const dynamic = "force-static"

export default function Home() {
  const featuredPackages = getFeaturedPackages()
  const middleEastPackages = getPackagesByCategory("middle-east")
  const europePackages = getPackagesByCategory("europe")
  const asiaPackages = getPackagesByCategory("asia")
  const cruisesPackages = getPackagesByCategory("cruises")

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-gradient-to-r from-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image src="/tropical-resort-view.png" alt="Travel destinations" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white pt-16">
          <div className="mb-8 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
            <Image
              src="/images/logo.png"
              alt="Valley Corner Travel & Tourism"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">Valley Corner Travel & Tourism</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-shadow">
            Your trusted partner for unforgettable travel experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#offers">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Packages
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="border-white  hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Valley Corner Travel & Tourism</h3>
              <p className="text-gray-700 mb-6">
                Valley Corner Travel & Tourism is a Saudi company specializing in providing travel and tourism services
                with high professionalism and international standards. We work to provide the best booking solutions for
                international and domestic flights, in addition to organizing foreign tourist trips, extracting visas,
                and hotel reservations around the world.
              </p>
              <p className="text-gray-700 mb-6">
                We aim to make the travel experience easier and more luxurious for our customers through customized
                services, continuous support, and special offers that suit all needs and budgets. We are your partners
                in every journey, from the moment of planning until returning with unforgettable memories.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
                <p className="text-gray-700">
                  To be among the leaders in the travel and tourism sector at the Kingdom and regional level, by
                  providing innovative services and integrated travel experiences that live up to the aspirations of
                  customers, and enhance the Kingdom's position as a tourist destination.
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
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of travel and tourism services to make your journey seamless and enjoyable.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Plane className="h-10 w-10 text-blue-600" />}
              title="Flight Bookings"
              description="Domestic and international flight bookings with the best airlines at competitive prices."
            />
            <ServiceCard
              icon={<Hotel className="h-10 w-10 text-blue-600" />}
              title="Hotel Reservations"
              description="Book accommodations worldwide, from luxury hotels to budget-friendly options."
            />
            <ServiceCard
              icon={<CreditCard className="h-10 w-10 text-blue-600" />}
              title="Visa Services"
              description="Hassle-free visa processing for various countries with expert guidance."
            />
            <ServiceCard
              icon={<MapPin className="h-10 w-10 text-blue-600" />}
              title="Tourism Packages"
              description="Customized tourism packages for individuals, families, and groups to various destinations."
            />
            <ServiceCard
              icon={<Car className="h-10 w-10 text-blue-600" />}
              title="Car Rentals"
              description="Car rental services with or without drivers for convenient transportation."
            />
            <ServiceCard
              icon={<Plane className="h-10 w-10 text-blue-600" />}
              title="Cruise Bookings"
              description="Luxury cruise packages to various destinations with all-inclusive options."
            />
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-white" id="offers">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our exclusive travel packages and special offers to popular destinations.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <Tabs defaultValue="middle-east" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto md:grid-cols-4 mb-12 relative z-10 bg-white shadow-sm">
              <TabsTrigger value="middle-east">Middle East</TabsTrigger>
              <TabsTrigger value="europe">Europe</TabsTrigger>
              <TabsTrigger value="asia">Asia</TabsTrigger>
              <TabsTrigger value="cruises">Cruises</TabsTrigger>
            </TabsList>

            <TabsContent value="middle-east" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {middleEastPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageData={pkg} />
              ))}
            </TabsContent>

            <TabsContent value="europe" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
              {europePackages.map((pkg) => (
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
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experiences with Valley Corner Travel & Tourism.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rashid"
              quote="Thank you Valley Corner Travel, you didn't fall short with us at all, your arrangement for the trip was perfect."
            />
            <TestimonialCard
              name="Noura"
              quote="My experience with you was amazing! Thank you from the heart, Valley Corner Travel."
            />
            <TestimonialCard
              name="Abdullah"
              quote="One of the best companies I've dealt with, sophisticated work and excellent service, thank you."
            />
            <TestimonialCard
              name="Fatima"
              quote="Thank you so much for the good organization and attention to the smallest details, I will definitely deal with you again."
            />
            <TestimonialCard
              name="Saud"
              quote="Thank you Valley Corner Travel, you relieved us from the burden of arrangements, everything was at the highest level."
            />
            <TestimonialCard
              name="Al-Anoud"
              quote="Thank you all, I felt pampered because everything was so well arranged!"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for inquiries, bookings, or any assistance you need.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Our Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">
                        Al-Khobar, Al-Aqrabiah district, 10th Street, next to Al-Tannura Fish Restaurant, Kingdom of
                        Saudi Arabia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+966 510 490 506</p>
                      <p className="text-gray-600">+966 56 298 2415</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">info@valleytravelcorner.com</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Social Media</h4>
                    <div className="flex gap-4">
                      <Link
                        href="https://www.instagram.com/valleycornertravel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <Instagram className="h-5 w-5 text-blue-600" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link
                        href="https://x.com/corner_tra12256"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-blue-600" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="https://www.facebook.com/share/1BqvwmZj4S/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <Facebook className="h-5 w-5 text-blue-600" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@valley.corner.tra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <TikTok className="h-5 w-5 text-blue-600" />
                        <span className="sr-only">TikTok</span>
                      </Link>
                      <Link
                        href="https://www.snapchat.com/add/valleycornertra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <Snapchat className="h-5 w-5 text-blue-600" />
                        <span className="sr-only">Snapchat</span>
                      </Link>
                      <Link
                        href="https://youtube.com/@valleycornertravel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 p-3 rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <Youtube className="h-5 w-5 text-blue-600" />
                        <span className="sr-only">YouTube</span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
