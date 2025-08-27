"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Star, Clock, MapPin, ChevronLeft, ChevronRight, Play } from "lucide-react"

interface EnseigneModalProps {
  enseigne: {
    id: number
    name: string
    logo: string
    category: string
    shortDescription: string
    rating: number
    openingHours: string
    location: string
    image: string
    fullDescription: string
    specialties: string[]
    gallery: string[]
    videoUrl: string // Local video file path (e.g., /videos/enseigne-name.mp4)
    features: string[]
  }
  onClose: () => void
}

export function EnseigneModal({ enseigne, onClose }: EnseigneModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % enseigne.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + enseigne.gallery.length) % enseigne.gallery.length)
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="!w-[50vw] !max-w-none !h-[90vh] overflow-y-auto borderless" showCloseButton={false}>
        <DialogHeader className="relative">
          <Button variant="ghost" size="sm" onClick={onClose} className="absolute right-0 top-0 h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-4 pr-8">
            <img
              src={enseigne.logo || "/placeholder.svg"}
              alt={`Logo ${enseigne.name}`}
              className="h-16 w-auto object-contain"
            />
            <div>
              <DialogTitle className="text-2xl font-bold font-heading text-foreground">{enseigne.name}</DialogTitle>
              <Badge className="mt-2 bg-accent text-accent-foreground">{enseigne.category}</Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Gallery Section */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              {showVideo ? (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <video
                    src={enseigne.videoUrl}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay={false}
                    muted
                    loop
                    title={`Vidéo - ${enseigne.name}`}
                  >
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              ) : (
                <img
                  src={enseigne.gallery[currentImageIndex] || "/placeholder.svg"}
                  alt={`${enseigne.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Gallery Controls */}
            <div className="absolute inset-y-0 left-2 flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="h-8 w-8 p-0 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="h-8 w-8 p-0 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Video Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowVideo(!showVideo)}
              className="absolute bottom-2 right-2 bg-black/50 text-white hover:bg-black/70"
            >
              <Play className="h-4 w-4 mr-2" />
              {showVideo ? "Photos" : "Vidéo"}
            </Button>

            {/* Gallery Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {enseigne.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="font-semibold text-foreground text-lg">{enseigne.rating}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-medium">Horaires d'ouverture :</div>
                    <div className="text-sm leading-relaxed whitespace-pre-line">
                      {enseigne.openingHours}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-medium">Localisation :</div>
                    <div className="text-sm leading-relaxed">
                      {enseigne.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{enseigne.fullDescription}</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Spécialités</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {enseigne.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {specialty}
                  </Badge>
                ))}
              </div>

              <h4 className="font-semibold text-foreground mb-3">Services & Équipements</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {enseigne.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {feature}
                  </Badge>
                ))}
              </div>


            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
