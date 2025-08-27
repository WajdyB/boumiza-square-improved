"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X, Facebook, Instagram } from "lucide-react"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Enseignes", href: "/enseignes" },
  { name: "Services", href: "/services" },
  { name: "Actualités", href: "/actualites" },
  { name: "Horaires", href: "/horaires" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 borderless ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="text-2xl font-bold font-heading transition-colors duration-200 group-hover:text-accent">
              Boumiza Square
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-accent/10 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-all duration-200 relative group ${
                pathname === item.href ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-200 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <div className="flex items-center gap-2">
            <Link
              href="https://www.facebook.com/profile.php?id=61563502731837"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-all duration-200 hover:scale-110 transform"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/boumiza__square/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-all duration-200 hover:scale-110 transform"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@boumiza.square"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-all duration-200 hover:scale-110 transform"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 4 15.38a6.34 6.34 0 0 0 10.05-1.66V2.5a8.23 8.23 0 0 0 4.3 1.38v3.81z"/>
              </svg>
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold font-heading">Boumiza Square</span>
              </Link>
              <Button
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 hover:bg-accent/10 transition-colors"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all duration-200 hover:bg-accent/10 hover:translate-x-1 ${
                        pathname === item.href ? "text-accent bg-accent/5" : "text-foreground"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
