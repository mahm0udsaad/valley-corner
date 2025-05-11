import Link from "next/link"
import { Button } from "@/components/ui/button"
import PackageCard from "@/components/package-card"
import { travelPackages } from "@/data/packages"
import Footer from "@/components/footer"

export const dynamic = "force-static"

export default function PackagesPage() {
  return (
    <>
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Travel Packages</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of travel packages to destinations around the world. Find your perfect getaway with
              Valley Corner Travel & Tourism.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelPackages.map((pkg) => (
              <PackageCard key={pkg.id} packageData={pkg} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/#contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us for Custom Packages
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
