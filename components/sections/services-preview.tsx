"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Users, Baby, Sofa, Cigarette, Zap, CreditCard, Gift, Accessibility, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wifi,
    title: "WIFI Gratuit",
    description: "Connectez-vous gratuitement à notre réseau WiFi haute vitesse dans tout l'espace",
  },
  {
    icon: Users,
    title: "Espace Familial",
    description: "Un espace dédié aux familles avec des zones de jeux et de détente pour tous les âges",
  },
  {
    icon: Baby,
    title: "Chaise haute à manger pour bébé",
    description: "Des chaises hautes confortables et sécurisées disponibles pour les plus petits",
  },
  {
    icon: Sofa,
    title: "Zone de repos",
    description: "Espace de détente avec sièges confortables pour vous reposer entre vos activités",
  },
  {
    icon: Cigarette,
    title: "Zone fumeur",
    description: "Zone dédiée et aménagée pour les fumeurs avec cendriers et protection",
  },
  {
    icon: Zap,
    title: "Bornes de recharge de téléphone",
    description: "Rechargez vos appareils électroniques gratuitement avec nos bornes de recharge",
  },
  {
    icon: CreditCard,
    title: "Paiement par carte",
    description: "Acceptation de tous types de cartes bancaires et moyens de paiement modernes",
  },
  {
    icon: Gift,
    title: "Carte de fidelité",
    description: "Programme de fidélité avec points et avantages exclusifs pour nos clients réguliers",
  },
  {
    icon: Accessibility,
    title: "Passage fauteuil roulant",
    description: "Accès facilité et aménagements adaptés pour les personnes à mobilité réduite",
  }
]

export function ServicesPreview() {
  return (
    <section className="py-20 px-6 bg-card borderless">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Nos Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez tous les services pensés pour enrichir votre expérience à Boumiza Square et vous faciliter la vie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-8 text-center borderless bg-background hover:shadow-xl transition-all duration-300 hover:bg-accent/5"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Voir tous les services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
