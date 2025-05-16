import Link from "next/link"
import { Button } from "@/components/ui/button"
import PackageCard from "@/components/package-card"
import { travelPackages as arabicPackages } from "@/data/packages.ar"

export const dynamic = "force-static"

export default async function PackagesPage() {
  return (
    <>
      <main className="min-h-screen pt-24 pb-20" dir="rtl">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">باقات السفر</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعتنا المختارة من باقات السفر المميزة إلى أفضل الوجهات العالمية
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arabicPackages.map((pkg) => (
              <PackageCard key={pkg.id} packageData={pkg} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/#contact" className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
