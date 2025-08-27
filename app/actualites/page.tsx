import { Navigation } from "@/components/navigation"
import { ActualitesHero } from "@/components/actualites/actualites-hero"
import { ActualitesList } from "@/components/actualites/actualites-list"
import { Footer } from "@/components/footer"

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ActualitesHero />
      <ActualitesList />
      <Footer />
    </main>
  )
}
