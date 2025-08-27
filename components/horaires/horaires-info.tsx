import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Mail, Car, Bus, Train, Wifi, CreditCard, Users, Shield, Info } from "lucide-react"

const horaires = [
  {
    jour: "Lundi - Jeudi",
    heures: "07h30 - 01h00",
    status: "normal",
  },
  {
    jour: "Vendredi - Dimanche",
    heures: "07h30 - 02h00",
    status: "extended",
  },
]

const enseignesHoraires = [
  {
    id: 1,
    nom: "Underground Space",
    logo: "/underground-space-logo.jpg",
    category: "Espace de loisirs",
    horaires: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "Sous-sol",
  },
  {
    id: 2,
    nom: "Oboba",
    logo: "/oboba-logo.jpg",
    category: "Boissons",
    horaires: "du Lundi au Jeudi: de 09h00h à 01h00h\ndu Vendredi au Dimanche: de 09h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 3,
    nom: "Plan B",
    logo: "/plan-b-logo.jpg",
    category: "Restaurant",
    horaires: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 4,
    nom: "La Leyenda",
    logo: "/la-leyenda-logo.jpg",
    category: "Café",
    horaires: "du Lundi au Jeudi: de 07h30h à 01h00h\ndu Vendredi au Dimanche: de 07h30h à 02h00h",
    location: "1er étage",
  },
  {
    id: 5,
    nom: "Khaznadar",
    logo: "/khaznadar-logo.jpg",
    category: "Café",
    horaires: "du Lundi au Jeudi: de 09h00h à 01h00h\ndu Vendredi au Dimanche: de 09h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 6,
    nom: "Peppinos",
    logo: "/peppinos-logo.jpg",
    category: "Pizzeria",
    horaires: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 7,
    nom: "Miel Boumiza",
    logo: "/miel-boumiza-logo.jpg",
    category: "Miel",
    horaires: "du Lundi au Jeudi: de 09h00h à 01h00h\ndu Vendredi au Dimanche: de 09h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 8,
    nom: "Okaya",
    logo: "/okaya-logo.jpg",
    category: "Restaurant",
    horaires: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 9,
    nom: "Karina Cosmétique",
    logo: "/karina-cosmetique-logo.jpg",
    category: "Beauté",
    horaires: "du Lundi au Jeudi: de 10h00h à 01h00h\ndu Vendredi au Dimanche: de 10h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 10,
    nom: "Chaneb Tacos",
    logo: "/chaneb-tacos-logo.jpg",
    category: "Fast-food",
    horaires: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 11,
    nom: "Mister Hachicha",
    logo: "/mister-hachicha-logo.jpg",
    category: "Gourmandise",
    horaires: "du Lundi au Jeudi: de 08h00h à 01h00h\ndu Vendredi au Dimanche: de 08h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 12,
    nom: "Ostedh",
    logo: "/ostedh-logo.jpg",
    category: "Restaurant",
    horaires: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 13,
    nom: "Terminal A",
    logo: "/terminalA-logo .jpg",
    category: "Restaurant",
    horaires: "du Lundi au Jeudi: de 11h00h à 01h00h\ndu Vendredi au Dimanche: de 11h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 14,
    nom: "Crêpe & Co",
    logo: "/crepe&CO-logo.jpg",
    category: "Crêperie",
    horaires: "du Lundi au Jeudi: de 10h00h à 01h00h\ndu Vendredi au Dimanche: de 10h00h à 02h00h",
    location: "1er étage",
  },
  {
    id: 15,
    nom: "O'Juice",
    logo: "/o'juice-logo.jpg",
    category: "Jus & Boissons",
    horaires: "du Lundi au Jeudi: de 08h00h à 01h00h\ndu Vendredi au Dimanche: de 08h00h à 02h00h",
    location: "1er étage",
  },
]

const services = [
  {
    nom: "WiFi Gratuit",
    horaires: "24h/24",
    disponibilite: "7j/7",
    icon: Wifi,
  },
  {
    nom: "Espace Familial",
    horaires: "10h00-22h00",
    disponibilite: "7j/7",
    icon: Users,
  },
  {
    nom: "Zone de repos",
    horaires: "10h00-22h00",
    disponibilite: "7j/7",
    icon: Users,
  },
  {
    nom: "Bornes de recharge",
    horaires: "10h00-22h00",
    disponibilite: "7j/7",
    icon: Wifi,
  },
]

export function HorairesInfo() {
  return (
    <section className="py-20 px-6 bg-background borderless">
      <div className="max-w-7xl mx-auto">
        {/* Horaires Généraux */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-heading text-center mb-12 text-foreground">Horaires d'Ouverture</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {horaires.map((horaire, index) => (
              <Card
                key={index}
                className="p-6 text-center borderless bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{horaire.jour}</h3>
                <p className="text-2xl font-bold text-accent mb-2">{horaire.heures}</p>
                <Badge
                  variant={horaire.status === "extended" ? "default" : "outline"}
                  className={horaire.status === "extended" ? "bg-green-100 text-green-800" : ""}
                >
                  {horaire.status === "extended"
                    ? "Horaires étendus"
                    : "Horaires normaux"}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Informations Pratiques */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact & Localisation */}
          <Card className="p-8 borderless bg-card">
            <h3 className="text-2xl font-bold font-heading mb-6 text-foreground flex items-center gap-3">
              <MapPin className="h-6 w-6 text-accent" />
              Contact & Localisation
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Adresse</p>
                  <p className="text-muted-foreground">
                    Rue Yasser Arafet Z4
                    <br />
                    Sousse, Sahloul 4054
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Téléphone</p>
                  <p className="text-muted-foreground">+216 51 648 574</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">contact@boumizasquare.tn</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Accès & Transport */}
          <Card className="p-8 borderless bg-card">
            <h3 className="text-2xl font-bold font-heading mb-6 text-foreground flex items-center gap-3">
              <Car className="h-6 w-6 text-accent" />
              Accès & Transport
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Car className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold text-foreground">En voiture</p>
                  <p className="text-muted-foreground">
                    Parking disponible à proximité
                    <br />
                    Accès facile depuis la route principale
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Train className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Transport en commun</p>
                  <p className="text-muted-foreground">
                    Bus et taxis disponibles
                    <br />
                    Arrêt à proximité immédiate
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bus className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Accessibilité</p>
                  <p className="text-muted-foreground">
                    Passage fauteuil roulant
                    <br />
                    Espaces adaptés PMR
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Horaires des Enseignes */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-heading text-center mb-8 text-foreground">Horaires des Enseignes</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enseignesHoraires.map((enseigne, index) => (
              <Card key={enseigne.id} className="p-6 borderless bg-card hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={enseigne.logo}
                    alt={`Logo ${enseigne.nom}`}
                    className="h-12 w-12 object-contain rounded-lg bg-white p-2 shadow-sm"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{enseigne.nom}</h4>
                    <Badge variant="outline" className="text-xs">
                      {enseigne.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-accent mt-0.5" />
                    <div className="text-sm text-muted-foreground whitespace-pre-line">
                      {enseigne.horaires}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{enseigne.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Disponibles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-heading text-center mb-8 text-foreground">Services & Équipements</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="p-6 text-center borderless bg-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-3">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{service.nom}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{service.horaires}</p>
                  <Badge variant="outline" className="text-xs">
                    {service.disponibilite}
                  </Badge>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Informations Importantes */}
        <Card className="p-8 bg-accent/5 borderless">
          <h3 className="text-2xl font-bold font-heading mb-6 text-foreground text-center">Informations Importantes</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Moyens de Paiement
              </h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Cartes</li>
                <li>• Espèces</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-accent" />À Savoir
              </h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• WiFi gratuit dans tous les espaces</li>
                <li>• Accès PMR sur tous les niveaux</li>
                <li>• Espaces famille et nurserie</li>
                <li>• Consigne automatique disponible</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
