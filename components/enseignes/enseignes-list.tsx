"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EnseigneModal } from "./enseigne-modal"
import { Star, Clock, MapPin, Eye } from "lucide-react"

const enseignes = [
  {
    id: 1,
    name: "Underground Space",
    logo: "/underground-space-logo.jpg",
    category: "Espace de loisirs",
    shortDescription: "Un espace de loisirs moderne et dynamique pour tous les âges, offrant des activités divertissantes et des moments de détente.",
    rating: 4.8,
    openingHours: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "Sous-sol",
    image: "/underground-space-picture.jpg",
    fullDescription:
      "Underground Space est votre destination de loisirs au cœur de Boumiza Square. Découvrez un espace moderne et convivial où divertissement et détente se rencontrent pour créer des moments inoubliables en famille ou entre amis.",
    specialties: ["Espace de jeux", "Zone de détente", "Activités interactives"],
    gallery: [
      "/underground-space-picture.jpg"
    ],
    videoUrl: "underground-space.mp4",
    features: ["Espace enfants", "Zone gaming", "WiFi gratuit", "Snacks disponibles"],
  },
  {
    id: 2,
    name: "Oboba",
    logo: "/oboba-logo.jpg",
    category: "Boissons",
    shortDescription: "Découvrez une sélection premium de boissons et rafraîchissements pour tous les goûts et occasions.",
    rating: 4.7,
    openingHours: "du Lundi au Jeudi: de 09h00h à 01h00h\ndu Vendredi au Dimanche: de 09h00h à 02h00h",
    location: "1er étage",
    image: "/oboba-picture.jpg",
    fullDescription:
      "Oboba vous propose une gamme exceptionnelle de boissons, des jus frais aux cocktails signature, en passant par les boissons chaudes et les rafraîchissements. Un concept unique pour satisfaire toutes vos envies.",
    specialties: ["Jus frais", "Cocktails signature", "Boissons chaudes", "Rafraîchissements"],
    gallery: [
      "/oboba-picture.jpg"
    ],
    videoUrl: "oboba.mp4",
    features: ["Jus pressés", "Cocktails", "Boissons chaudes", "Service rapide"],
  },
  {
    id: 3,
    name: "Plan B",
    logo: "/plan-b-logo.jpg",
    category: "Restaurant",
    shortDescription: "Une cuisine inventive et savoureuse qui vous propose une alternative gourmande et originale.",
    rating: 4.9,
    openingHours: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "1er étage",
    image: "/plan-b-picture.jpg",
    fullDescription:
      "Plan B révolutionne l'expérience culinaire avec une approche créative et audacieuse. Notre chef propose des plats uniques qui marient tradition et innovation pour une expérience gastronomique exceptionnelle.",
    specialties: ["Cuisine fusion", "Plats signature", "Desserts créatifs", "Carte saisonnière"],
    gallery: [
      "/plan-b-picture.jpg"
    ],
    videoUrl: "plan-b.mp4",
    features: ["Terrasse", "Menu dégustation", "Réservations", "Service traiteur"],
  },
  {
    id: 4,
    name: "La Leyenda",
    logo: "/la-leyenda-logo.jpg",
    category: "Café",
    shortDescription: "Un café de charme avec une ambiance chaleureuse et des saveurs authentiques.",
    rating: 4.6,
    openingHours: "du Lundi au Jeudi: de 07h30h à 01h00h\ndu Vendredi au Dimanche: de 07h30h à 02h00h",
    location: "1er étage",
    image: "/la-leyenda-picture.jpg",
    fullDescription:
      "La Leyenda vous accueille dans un cadre chaleureux et authentique. Découvrez notre sélection de cafés d'exception, nos pâtisseries maison et une ambiance conviviale parfaite pour vos moments de détente.",
    specialties: ["Café d'exception", "Pâtisseries maison", "Thés premium", "Snacks gourmands"],
    gallery: [
      "/la-leyenda-picture.jpg"
    ],
    videoUrl: "la-leyenda.mp4",
    features: ["WiFi gratuit", "Terrasse", "Brunch weekend", "Événements"],
  },
  {
    id: 5,
    name: "Khaznadar",
    logo: "/khaznadar-logo.jpg",
    category: "Café",
    shortDescription: "Un café traditionnel qui célèbre l'authenticité et les saveurs d'antan.",
    rating: 4.5,
    openingHours: "du Lundi au Jeudi: de 09h00h à 01h00h\ndu Vendredi au Dimanche: de 09h00h à 02h00h",
    location: "1er étage",
    image: "/khaznadar-picture.jpg",
    fullDescription:
      "Khaznadar perpétue la tradition du café authentique avec des recettes transmises de génération en génération. Un lieu où l'histoire et la gastronomie se rencontrent pour créer des moments inoubliables.",
    specialties: ["Café traditionnel", "Pâtisseries orientales", "Thés d'exception", "Douceurs locales"],
    gallery: [
      "/khaznadar-picture.jpg"
    ],
    videoUrl: "video5.mp4",
    features: ["Ambiance traditionnelle", "Terrasse", "Musique live", "Événements culturels"],
  },
  {
    id: 6,
    name: "Peppinos",
    logo: "/peppinos-logo.jpg",
    category: "Pizzeria",
    shortDescription: "Pizzas artisanales préparées avec passion et des ingrédients d'exception.",
    rating: 4.8,
    openingHours: "du Lundi au Jeudi: de 10h00h à 01h00h\ndu Vendredi au Dimanche: de 10h00h à 02h00h",
    location: "1er étage",
    image: "/peppinos-picture.jpg",
    fullDescription:
      "Peppinos vous propose des pizzas artisanales préparées selon les traditions italiennes. Notre pâte fraîche, nos ingrédients de qualité et notre four à bois garantissent une expérience pizza authentique et savoureuse.",
    specialties: ["Pizza Margherita", "Pizza Quattro Stagioni", "Calzone", "Desserts italiens"],
    gallery: [
      "/peppinos-picture.jpg"
    ],
    videoUrl: "peppinos.mp4",
    features: ["Four à bois", "Livraison", "Emporter", "Menu enfants"],
  },
  {
    id: 7,
    name: "Miel Boumiza",
    logo: "/miel-boumiza-logo.jpg",
    category: "Miel",
    shortDescription: "Découvrez la douceur naturelle de nos miels artisanaux et produits de la ruche.",
    rating: 4.9,
    openingHours: "du Lundi au Jeudi: de 09h00h à 23h00h\ndu Vendredi au Dimanche: de 09h00h à 23h00h",
    location: "RDC",
    image: "/miel-boumiza-picture.jpg",
    fullDescription:
      "Miel Boumiza vous fait découvrir l'univers fascinant de l'apiculture avec une sélection de miels artisanaux, de la gelée royale et des produits de la ruche d'exception. Une expérience naturelle et authentique.",
    specialties: ["Miel de fleurs", "Gelée royale", "Propolis", "Produits de la ruche"],
    gallery: [
      "/miel-boumiza-picture.jpg"
    ],
    videoUrl: "video7.mp4",
    features: ["Produits naturels", "Conseils experts", "Dégustation", "Vente en ligne"],
  },
  {
    id: 8,
    name: "Okaya",
    logo: "/okaya-logo.jpg",
    category: "Restaurant",
    shortDescription: "Une cuisine raffinée qui allie tradition et modernité dans un cadre élégant.",
    rating: 4.7,
    openingHours: "du Lundi au Jeudi: de 12h00h à 01h00h\ndu Vendredi au Dimanche: de 12h00h à 02h00h",
    location: "1er étage",
    image: "/okaya-picture.jpg",
    fullDescription:
      "Okaya vous invite à un voyage culinaire exceptionnel où tradition et innovation se rencontrent. Notre chef crée des plats raffinés qui éveillent tous vos sens dans un environnement sophistiqué et accueillant.",
    specialties: ["Cuisine fusion", "Plats signature", "Dégustation", "Carte saisonnière"],
    gallery: [
      "/okaya-picture.jpg",
      "/okaya-dishes.jpg",
      "/okaya-interior.jpg",
    ],
    videoUrl: "okaya.mp4",
    features: ["Terrasse", "Menu dégustation", "Cave à vins", "Service traiteur"],
  },
  {
    id: 9,
    name: "Karina Cosmétique",
    logo: "/karina-cosmetique-logo.jpg",
    category: "Beauté",
    shortDescription: "Votre destination beauté avec des produits cosmétiques de qualité et des conseils experts.",
    rating: 4.6,
    openingHours: "du Lundi au Jeudi: de 09h00h à 21h00h\ndu Vendredi au Dimanche: de 09h00h à 22h00h",
    location: "RDC",
    image: "/karina-picture.jpg",
    fullDescription:
      "Karina Cosmétique vous accompagne dans votre routine beauté avec une sélection rigoureuse de produits cosmétiques de qualité. Nos experts vous conseillent pour trouver les produits parfaits pour votre peau et vos besoins.",
    specialties: ["Soins visage", "Maquillage", "Parfums", "Produits bio"],
    gallery: [
      "/karina-picture.jpg",
      "/karina-cosmetics.jpg",
      "/karina-beauty-products.jpg",
    ],
    videoUrl: "karina.mp4",
    features: ["Conseils experts", "Tests produits", "Fidélité", "Événements beauté"],
  },
  {
    id: 10,
    name: "Chaneb Tacos",
    logo: "/chaneb-tacos-logo.jpg",
    category: "Fast-food",
    shortDescription: "Tacos savoureux et street food de qualité pour une pause gourmande rapide.",
    rating: 4.4,
    openingHours: "du Lundi au Jeudi: de 10h00h à 01h00h\ndu Vendredi au Dimanche: de 10h00h à 02h00h",
    location: "1er étage",
    image: "/chaneb-tacos-picture.jpg",
    fullDescription:
      "Chaneb Tacos révolutionne le street food avec des tacos authentiques et savoureux. Nos recettes originales et nos ingrédients frais garantissent une expérience gustative unique et rapide.",
    specialties: ["Tacos signature", "Burritos", "Quesadillas", "Sauces maison"],
    gallery: [
      "/chaneb-tacos-picture.jpg"
    ],
    videoUrl: "chaneb-tacos.mp4",
    features: ["Service rapide", "Emporter", "Livraison", "Menu végétarien"],
  },
  {
    id: 11,
    name: "Mister Hachicha",
    logo: "/mister-hachicha-logo.jpg",
    category: "Gourmandise",
    shortDescription: "Découvrez nos délicieuses pâtisseries et gourmandises artisanales.",
    rating: 4.8,
    openingHours: "du Lundi au Jeudi: de 08h00h à 02h00h\ndu Vendredi au Dimanche: de 08h00h à 03h00h",
    location: "1er étage",
    image: "/mister-hachicha-image.jpg",
    fullDescription:
      "Mister Hachicha vous propose une sélection de pâtisseries et gourmandises artisanales préparées avec passion. Découvrez des saveurs authentiques et des créations uniques qui raviront vos papilles.",
    specialties: ["Pâtisseries orientales", "Gâteaux artisanaux", "Douceurs", "Pains spéciaux"],
    gallery: [
      "/mister-hachicha-image.jpg"
    ],
    videoUrl: "mister-hachicha.mp4",
    features: ["Pâtisseries fraîches", "Commandes spéciales", "Événements", "Livraison"],
  },
  {
    id: 12,
    name: "Ostedh",
    logo: "/ostedh-logo.jpg",
    category: "Restaurant",
    shortDescription: "Une cuisine traditionnelle revisitée avec créativité et authenticité.",
    rating: 4.7,
    openingHours: "du Lundi au Jeudi: de 11h00h à 02h00h\ndu Vendredi au Dimanche: de 11h00h à 03h00h",
    location: "1er étage",
    image: "/ostedh-picture.jpg",
    fullDescription:
      "Ostedh vous propose une cuisine traditionnelle revisitée avec créativité et authenticité. Notre chef mariage habilement les saveurs d'antan avec des techniques modernes pour une expérience culinaire unique.",
    specialties: ["Plats traditionnels", "Cuisine fusion", "Desserts maison", "Carte saisonnière"],
    gallery: [
      "/ostedh-picture.jpg"
    ],
    videoUrl: "ostedh.mp4",
    features: ["Terrasse", "Menu dégustation", "Réservations", "Événements privés"],
  },
  {
    id: 13,
    name: "Terminal A",
    logo: "/terminalA-logo .jpg",
    category: "Restaurant",
    shortDescription: "Un concept restaurant unique qui vous transporte dans un univers aéronautique.",
    rating: 4.6,
    openingHours: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "1er étage",
    image: "/terminalA-picture.jpg",
    fullDescription:
      "Terminal A vous invite à embarquer pour un voyage culinaire exceptionnel dans un décor inspiré de l'univers aéronautique. Notre cuisine internationale vous fera découvrir des saveurs du monde entier.",
    specialties: ["Cuisine internationale", "Plats signature", "Cocktails", "Desserts créatifs"],
    gallery: [
      "/terminalA-picture.jpg"
    ],
    videoUrl: "terminalA.mp4",
    features: ["Décor unique", "Menu international", "Cocktails", "Événements thématiques"],
  },
  {
    id: 14,
    name: "Crêpe & Co",
    logo: "/crepe&CO-logo.jpg",
    category: "Crêperie",
    shortDescription: "Crêpes sucrées et salées préparées avec des ingrédients frais et de qualité.",
    rating: 4.5,
    openingHours: "du Lundi au Jeudi: de 12h00h à 01h00h\ndu Vendredi au Dimanche: de 12h00h à 02h00h",
    location: "1er étage",
    image: "/crepe&CO-picture.jpg",
    fullDescription:
      "Crêpe & Co vous propose une large sélection de crêpes sucrées et salées préparées avec des ingrédients frais et de qualité. Découvrez nos recettes originales et nos garnitures gourmandes.",
    specialties: ["Crêpes sucrées", "Crêpes salées", "Garnitures maison", "Desserts"],
    gallery: [
      "/crepe&CO-picture.jpg"
    ],
    videoUrl: "crepe&co.mp4",
    features: ["Préparation devant vous", "Ingrédients frais", "Emporter", "Menu enfants"],
  },
  {
    id: 15,
    name: "O'Juice",
    logo: "/o'juice-logo.jpg",
    category: "Jus & Boissons",
    shortDescription: "Jus frais et boissons naturelles pour votre bien-être et votre vitalité.",
    rating: 4.7,
    openingHours: "du Lundi au Jeudi: de 09h00h à 01h00h\ndu Vendredi au Dimanche: de 09h00h à 02h00h",
    location: "1er étage",
    image: "/o'juice-picture.jpg",
    fullDescription:
      "O'Juice vous propose une gamme de jus frais et boissons naturelles préparées avec des fruits et légumes de saison. Découvrez nos recettes équilibrées pour votre bien-être et votre vitalité au quotidien.",
    specialties: ["Jus frais", "Smoothies", "Boissons détox", "Jus de légumes"],
    gallery: [
      "/o'juice-picture.jpg"
    ],
    videoUrl: "o'juice.mp4",
    features: ["Jus frais", "Ingrédients bio", "Personnalisation", "Programmes détox"],
  },
]

export function EnseignesList() {
  const [selectedEnseigne, setSelectedEnseigne] = useState<(typeof enseignes)[0] | null>(null)

  return (
    <>
      <section className="py-20 px-6 bg-background borderless">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chaque enseigne de Boumiza Square a été soigneusement sélectionnée pour son excellence culinaire et son
              engagement envers la qualité. Découvrez des expériences gastronomiques uniques dans un cadre moderne et
              élégant.
            </p>
          </div>

          <div className="space-y-8">
            {enseignes.map((enseigne, index) => (
              <Card
                key={enseigne.id}
                className={`group overflow-hidden borderless bg-card hover:shadow-2xl transition-all duration-500 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={enseigne.image || "/placeholder.svg"}
                    alt={enseigne.name}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{enseigne.category}</Badge>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={enseigne.logo || "/placeholder.svg"}
                      alt={`Logo ${enseigne.name}`}
                      className="h-12 w-auto object-contain"
                    />
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-semibold text-foreground">{enseigne.rating}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold font-heading mb-4 text-foreground group-hover:text-accent transition-colors">
                    {enseigne.name}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{enseigne.shortDescription}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{enseigne.openingHours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{enseigne.location}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setSelectedEnseigne(enseigne)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Voir détails
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedEnseigne && <EnseigneModal enseigne={selectedEnseigne} onClose={() => setSelectedEnseigne(null)} />}
    </>
  )
}
