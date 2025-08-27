import { Card } from "@/components/ui/card"
import { Wifi, Users, Baby, Sofa, Cigarette, Zap, CreditCard, Gift, Accessibility, MapPin, Phone, Clock } from "lucide-react"

const services = [
  {
    id: 1,
    title: "WIFI Gratuit",
    description: "Connectez-vous gratuitement à notre réseau WiFi haute vitesse dans tout l'espace",
    icon: Wifi,
  },
  {
    id: 2,
    title: "Espace Familial",
    description: "Un espace dédié aux familles avec des zones de jeux et de détente pour tous les âges",
    icon: Users,
  },
  {
    id: 3,
    title: "Chaise haute à manger pour bébé",
    description: "Des chaises hautes confortables et sécurisées disponibles pour les plus petits",
    icon: Baby,
  },
  {
    id: 4,
    title: "Zone de repos",
    description: "Espace de détente avec sièges confortables pour vous reposer entre vos activités",
    icon: Sofa,
  },
  {
    id: 5,
    title: "Zone fumeur",
    description: "Zone dédiée et aménagée pour les fumeurs avec cendriers et protection",
    icon: Cigarette,
  },
  {
    id: 6,
    title: "Bornes de recharge de téléphone",
    description: "Rechargez vos appareils électroniques gratuitement avec nos bornes de recharge",
    icon: Zap,
  },
  {
    id: 7,
    title: "Paiement par carte",
    description: "Acceptation de tous types de cartes bancaires et moyens de paiement modernes",
    icon: CreditCard,
  },
  {
    id: 8,
    title: "Carte de fidelité",
    description: "Programme de fidélité avec points et avantages exclusifs pour nos clients réguliers",
    icon: Gift,
  },
  {
    id: 9,
    title: "Passage fauteuil roulant",
    description: "Accès facilité et aménagements adaptés pour les personnes à mobilité réduite",
    icon: Accessibility,
  },
]

export function ServicesList() {
  return (
    <section className="py-20 px-6 bg-background borderless">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Boumiza Square vous offre une gamme complète de services premium pour enrichir votre expérience et répondre
            à tous vos besoins. Notre équipe dédiée est à votre service pour vous accompagner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className="group p-8 text-center borderless bg-background hover:shadow-xl transition-all duration-300 hover:bg-accent/5 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-accent/5 borderless">
            <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Besoin d'aide ou d'informations ?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos
              demandes spécifiques.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-3">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Adresse</h4>
                <p className="text-muted-foreground text-sm">
                  Rue Yasser Arafet Z4<br />
                  Sousse, Sahloul 4054
                </p>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-3">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                <p className="text-muted-foreground text-sm">
                  +216 51 648 574<br />
                  contact@boumizasquare.tn
                </p>
              </div>
              <div className="text-center">
                <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-3">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Horaires</h4>
                <p className="text-muted-foreground text-sm">
                  Lundi - Jeudi: 07h30 - 01h00<br />
                  Vendredi - Dimanche: 07h30 - 02h00<br />
                  Service continu
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
