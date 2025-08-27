import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Car, Train, Bus, MessageCircle, Facebook, Instagram } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Téléphone",
    primary: "+216 51 648 574",
    secondary: "Service client : 9h00 - 21h00",
    description: "Pour toute question urgente",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "contact@boumizasquare.tn",
    secondary: "Réponse sous 24h",
    description: "Pour vos demandes détaillées",
  },
  {
    icon: MessageCircle,
    title: "Réseaux sociaux",
    primary: "@BoumizaSquare",
    secondary: "Facebook, Instagram",
    description: "Suivez notre actualité",
  },
]

export function ContactInfo() {
  return (
    <section className="py-20 px-6 bg-muted/30 borderless">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">Nos coordonnées</h2>
          <p className="text-muted-foreground">Plusieurs moyens de nous contacter selon vos préférences</p>
        </div>

        {/* Moyens de contact */}
        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <Card key={index} className="p-6 borderless bg-card hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-lg font-medium text-accent mb-1">{method.primary}</p>
                    <p className="text-sm text-muted-foreground mb-2">{method.secondary}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Adresse et accès */}
        <Card className="p-8 borderless bg-card mb-12">
          <h3 className="text-xl font-bold font-heading mb-6 text-foreground flex items-center gap-3">
            <MapPin className="h-6 w-6 text-accent" />
            Adresse & Accès
          </h3>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-semibold text-foreground">Boumiza Square</p>
              <p className="text-muted-foreground">
                Rue Yasser Arafet Z4
                <br />
                Sousse, Sahloul 4054
                <br />
                Tunisie
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Parking disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <Train className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Transport en commun</span>
            </div>
            <div className="flex items-center gap-2">
              <Bus className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Arrêt à proximité</span>
            </div>
          </div>
        </Card>

        {/* Horaires */}
        <Card className="p-8 borderless bg-card">
          <h3 className="text-xl font-bold font-heading mb-6 text-foreground flex items-center gap-3">
            <Clock className="h-6 w-6 text-accent" />
            Horaires d'ouverture
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-foreground">Lundi - Jeudi</span>
              <span className="font-semibold text-accent">07h30 - 01h00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground">Vendredi - Dimanche</span>
              <span className="font-semibold text-accent">07h30 - 02h00</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
