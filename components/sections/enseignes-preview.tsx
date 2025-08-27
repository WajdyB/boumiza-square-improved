"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const enseignes = [
  {
    id: 1,
    name: "Underground Space",
    logo: "/underground-space-logo.jpg",
    image: "/underground-space-picture.jpg",
    category: "Espace de loisirs",
  },
  {
    id: 2,
    name: "Oboba",
    logo: "/oboba-logo.jpg",
    image: "/oboba-picture.jpg",
    category: "Boissons",
  },
  {
    id: 3,
    name: "Plan B",
    logo: "/plan-b-logo.jpg",
    image: "/plan-b-picture.jpg",
    category: "Restaurant",
  },
  {
    id: 4,
    name: "La Leyenda",
    logo: "/la-leyenda-logo.jpg",
    image: "/la-leyenda-picture.jpg",
    category: "Café",
  },
  {
    id: 5,
    name: "Khaznadar",
    logo: "/khaznadar-logo.jpg",
    image: "/khaznadar-picture.jpg",
    category: "Café",
  },
  {
    id: 6,
    name: "Peppinos",
    logo: "/peppinos-logo.jpg",
    image: "/peppinos-picture.jpg",
    category: "Pizzeria",
  },
  {
    id: 7,
    name: "Miel Boumiza",
    logo: "/miel-boumiza-logo.jpg",
    image: "/miel-boumiza-picture.jpg",
    category: "Miel",
  },
  {
    id: 8,
    name: "Okaya",
    logo: "/okaya-logo.jpg",
    image: "/okaya-picture.jpg",
    category: "Restaurant",
  },
  {
    id: 9,
    name: "Karina Cosmétique",
    logo: "/karina-cosmetique-logo.jpg",
    image: "/karina-picture.jpg",
    category: "Beauté",
  },
  {
    id: 10,
    name: "Chaneb Tacos",
    logo: "/chaneb-tacos-logo.jpg",
    image: "/chaneb-tacos-picture.jpg",
    category: "Fast-food",
  },
  {
    id: 11,
    name: "Mister Hachicha",
    logo: "/mister-hachicha-logo.jpg",
    image: "/mister-hachicha-image.jpg",
    category: "Gourmandise",
  },
  {
    id: 12,
    name: "Ostedh",
    logo: "/ostedh-logo.jpg",
    image: "/ostedh-picture.jpg",
    category: "Restaurant",
  },
  {
    id: 13,
    name: "Terminal A",
    logo: "/terminalA-logo .jpg",
    image: "/terminalA-picture.jpg",
    category: "Restaurant",
  },
  {
    id: 14,
    name: "Crêpe & Co",
    logo: "/crepe&CO-logo.jpg",
    image: "/crepe&CO-picture.jpg",
    category: "Crêperie",
  },
  {
    id: 15,
    name: "O'Juice",
    logo: "/o'juice-logo.jpg",
    image: "/o'juice-picture.jpg",
    category: "Jus & Boissons",
  },
]

export function EnseignesPreview() {
  const [hoveredEnseigne, setHoveredEnseigne] = useState<typeof enseignes[0] | null>(null)

  return (
    <section className="py-20 px-6 bg-card borderless">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Nos Enseignes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez la diversité culinaire et commerciale de Boumiza Square à travers nos enseignes soigneusement sélectionnées.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {enseignes.map((enseigne) => (
            <div
              key={enseigne.id}
              className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-2"
              onMouseEnter={() => setHoveredEnseigne(enseigne)}
              onMouseLeave={() => setHoveredEnseigne(null)}
            >
              <div className="relative">
                <img
                  src={enseigne.logo}
                  alt={`Logo ${enseigne.name}`}
                  className="w-full h-24 md:h-32 object-contain bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              </div>
              <div className="text-center mt-3">
                <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {enseigne.name}
                </h3>
                <p className="text-xs text-muted-foreground">{enseigne.category}</p>
              </div>

              {/* Hover Popup Image - Positioned above the card */}
              {hoveredEnseigne?.id === enseigne.id && (
                <div className="absolute z-[999999] -top-4 left-1/2 transform -translate-x-1/2 w-80 h-60 rounded-lg overflow-hidden shadow-2xl border-4 border-white animate-in fade-in-0 zoom-in-95 duration-200" style={{ zIndex: 999999 }}>
                  <img
                    src={enseigne.image}
                    alt={enseigne.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">{enseigne.name}</h4>
                    <p className="text-white/90 text-sm">{enseigne.category}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Voir toutes les enseignes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
