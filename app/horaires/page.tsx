import { Navigation } from "@/components/navigation"
import { HorairesHero } from "@/components/horaires/horaires-hero"
import { HorairesInfo } from "@/components/horaires/horaires-info"
import { Footer } from "@/components/footer"

export default function HorairesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HorairesHero />
      <HorairesInfo />
      <Footer />
    </main>
  )
}
