import Link from "next/link"
import { Button } from "@/components/ui/button"
import PackageCard from "@/components/package-card"
import { travelPackages } from "@/data/packages"
import { travelPackages as arabicPackages } from "@/data/packages.ar"
import { initTranslations } from "@/lib/i18n-server"
import { Language } from "@/lib/types"

export const dynamic = "force-static"

interface PageProps {
  params: {
    locale: Language
  }
}

export default async function PackagesPage({ params }: PageProps) {
  const { locale } = params
  const { t } = await initTranslations(locale)
  
  // Get the appropriate packages based on locale
  const packages = locale === 'ar' ? arabicPackages : travelPackages

  return (
    <>
      <main className="min-h-screen pt-24 pb-20" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('packages.title')}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('packages.description')}
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} packageData={pkg} locale={locale} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href={`/${locale}/#contact`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('packages.contactButton')}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
