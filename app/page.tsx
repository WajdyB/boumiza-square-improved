import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { PresentationSection } from "@/components/sections/presentation-section"
import { EnseignesPreview } from "@/components/sections/enseignes-preview"
import { ActualitesPreview } from "@/components/sections/actualites-preview"
import { ServicesPreview } from "@/components/sections/services-preview"
import { LocalisationSection } from "@/components/sections/localisation-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      <ScrollAnimation animation="fade-up">
        <PresentationSection />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-left" delay={100}>
        <EnseignesPreview />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={200}>
        <ActualitesPreview />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-right" delay={100}>
        <ServicesPreview />
      </ScrollAnimation>

      <ScrollAnimation animation="scale-up" delay={150}>
        <LocalisationSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in">
        <Footer />
      </ScrollAnimation>
    </main>
  )
}
