"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Car, Train, Bus, Clock, Phone, ExternalLink } from "lucide-react"

const transportOptions = [
  {
    type: "Voiture",
    icon: Car,
    lines: ["Route principale"],
    station: "Parking disponible",
    walkTime: "Accès facile",
    color: "bg-purple-100 text-purple-800",
  },
  {
    type: "Transport en commun",
    icon: Bus,
    lines: ["Bus", "Taxis"],
    station: "Arrêt à proximité",
    walkTime: "Quelques minutes",
    color: "bg-green-100 text-green-800",
  },
  {
    type: "À pied",
    icon: Train,
    lines: ["Centre-ville"],
    station: "Zone accessible",
    walkTime: "Promenade agréable",
    color: "bg-blue-100 text-blue-800",
  },
]

const nearbyPlaces = [
  { name: "Centre-ville de Sousse", distance: "2km", walkTime: "25 min" },
  { name: "Zone Sahloul", distance: "0.5km", walkTime: "6 min" },
  { name: "Université de Sousse", distance: "1km", walkTime: "12 min" },
  { name: "Hôpital Sahloul", distance: "0.8km", walkTime: "10 min" },
]

export function ContactMap() {
  const [activeTransport, setActiveTransport] = useState<string | null>(null)

  return (
    <section className="py-20 px-6 bg-background borderless">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">Nous trouver</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Boumiza Square est idéalement situé à Sousse, facilement accessible par tous les moyens de transport
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Google Maps */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden borderless bg-card">
              <div className="relative h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.405895036502!2d10.594690075599239!3d35.83904957253665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13!1!3m3!1m2!1s0x12fd8b000fe1605d%3A0x4851f701969ef73b!2sBoumiza%20Square!5e0!3m2!1sfr!2stn!4v1756286914942!5m2!1sfr!2stn"
                  width="100%"
                  height="100%"
                  style={{border:0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boumiza Square - Localisation"
                />
              </div>
            </Card>
          </div>

          {/* Transport & Info */}
          <div className="space-y-6">
            {/* Transport Options */}
            <Card className="p-6 borderless bg-card">
              <h3 className="text-xl font-bold font-heading mb-4 text-foreground">Comment venir</h3>

              <div className="space-y-4">
                {transportOptions.map((transport, index) => {
                  const IconComponent = transport.icon
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        activeTransport === transport.type
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                      onClick={() => setActiveTransport(activeTransport === transport.type ? null : transport.type)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="h-5 w-5 text-accent" />
                        <span className="font-semibold text-foreground">{transport.type}</span>
                        <Badge className={transport.color}>{transport.walkTime}</Badge>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        <p className="mb-1">{transport.station}</p>
                        <div className="flex flex-wrap gap-1">
                          {transport.lines.map((line, lineIndex) => (
                            <Badge key={lineIndex} variant="outline" className="text-xs">
                              {line}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            {/* Nearby Places */}
            <Card className="p-6 borderless bg-card">
              <h3 className="text-xl font-bold font-heading mb-4 text-foreground">À proximité</h3>

              <div className="space-y-3">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-foreground">{place.name}</span>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{place.distance}</div>
                      <div>{place.walkTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="p-6 bg-accent/5 borderless">
              <h3 className="text-lg font-bold font-heading mb-4 text-foreground">Contact rapide</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">+216 51 648 574</p>
                    <p className="text-sm text-muted-foreground">Service client</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">07h30 - 02h00</p>
                    <p className="text-sm text-muted-foreground">7 jours sur 7</p>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                <Phone className="mr-2 h-4 w-4" />
                Appeler maintenant
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
