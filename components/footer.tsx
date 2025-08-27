import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Accueil", href: "/" },
    { name: "Enseignes", href: "/enseignes" },
    { name: "Services", href: "/services" },
    { name: "Actualités", href: "/actualites" },
    { name: "Horaires", href: "/horaires" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground borderless">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold font-heading mb-3">Boumiza Square</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-md text-sm">
              Votre destination gastronomique et de loisirs au cœur de la modernité. Découvrez une expérience culinaire
              unique dans un cadre élégant et contemporain.
            </p>
            <div className="flex gap-3">
              <Link 
                href="https://www.facebook.com/profile.php?id=61563502731837" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link 
                href="https://www.instagram.com/boumiza__square/?hl=fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link 
                href="https://www.tiktok.com/@boumiza.square" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 4 15.38a6.34 6.34 0 0 0 10.05-1.66V2.5a8.23 8.23 0 0 0 4.3 1.38v3.81z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Navigation</h4>
            <ul className="space-y-1">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span className="text-xs">Rue Yasser Arafet Z4, Sousse, Sahloul 4054</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span className="text-xs">+216 51 648 574</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span className="text-xs">contact@boumizasquare.tn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex justify-center">
          <p className="text-sm text-primary-foreground/60">© 2024 Boumiza Square. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
