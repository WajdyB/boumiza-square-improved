import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

export function LocalisationSection() {
  return (
    <section className="py-20 px-6 bg-background borderless">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Nous Trouver</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Situé au cœur de la ville, Boumiza Square vous accueille dans un cadre moderne et accessible, 
              avec des transports en commun à proximité.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                        Rue Yasser Arafet Z4 
                    <br />
                        Sousse , Sahloul 4054 
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                  <p className="text-muted-foreground">
                    +216 51 648 574
                    <br />
                    contact@boumizasquare.tn
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                  <p className="text-muted-foreground">
                    Lundi - Jeudi: 07h30 - 01h00
                    <br />
                    Vendredi - Dimanche: 07h30 - 02h00
                    <br />
                    Service continu
                  </p>
                </div>
              </div>
            </div>


          </div>

          <div className="relative animate-slide-up">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.405895036502!2d10.594690075599239!3d35.83904957253665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b000fe1605d%3A0x4851f701969ef73b!2sBoumiza%20Square!5e0!3m2!1sfr!2stn!4v1756286914942!5m2!1sfr!2stn" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Boumiza Square - Localisation"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
