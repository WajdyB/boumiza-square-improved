import { Navigation } from "@/components/navigation"
import { EnseignesHero } from "@/components/enseignes/enseignes-hero"
import { EnseignesList } from "@/components/enseignes/enseignes-list"
import { Footer } from "@/components/footer"

export default function EnseignesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <EnseignesHero />
      <EnseignesList />
      <Footer />
    </main>
  )
}
