"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const actualites = [
  {
    id: 1,
    title: "Envie d'un peu de détente ?",
    date: "05-06-2024",
    image: "/espace-detente.png",
    excerpt: "Laissez-vous séduire par les espaces paisibles et accueillants de BoumizaSquare, conçus pour vous offrir une pause bien méritée au cœur de l'animation urbaine. ",
  },
  {
    id: 2,
    title: "Plus d'espace pour travailler",
    date: "11-02-2024",
    image: "/espace-travail.png",
    excerpt: "Profitez d'un environnement dynamique et d'une connexion Wi-Fi rapide, vous permettant de rester connecté et efficace tout au long de votre journée de travail.",
  },
  {
    id: 3,
    title: "Un espace pour apprendre, réfléchir et évoluer",
    date: "26-07-2025",
    image: "/espace-collaboratif.png",
    excerpt: "C'est un lieu paisible et accueillant, parfait pour étudier ou lire dans les meilleurs conditions. Pensé pour encourager la concentration, cet espace confortable et bien aménagé permet à chacun de se poser et réfléchir.",
  },
]

export function ActualitesPreview() {
  return (
    <section className="py-20 px-6 bg-background borderless">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Actualités</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Restez informé des dernières nouveautés, événements et ouvertures de Boumiza Square.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {actualites.map((article) => (
            <Card
              key={article.id}
              className="group overflow-hidden borderless bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Nouveau
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/actualites">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Toutes les actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
