"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Offers", href: "#offers" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className={`relative h-12 w-36 ${isScrolled ? "" : "md:block"}`}>
              <Image src="/images/logo.png" alt="Valley Corner Travel & Tourism" fill className="object-contain" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? "text-blue-600" : "text-white"} ml-2 hidden md:inline`}>
              Valley Corner
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              className={isScrolled ? "bg-blue-600 hover:bg-blue-700" : "bg-white text-blue-600 hover:bg-blue-50"}
            >
              Book Now
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={`h-6 w-6 ${isScrolled ? "text-blue-600" : "text-white"}`} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto max-h-screen">
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-8 mt-4">
                  <Image src="/images/logo.png" alt="Valley Corner Travel & Tourism" width={120} height={120} />
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto mb-8">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
