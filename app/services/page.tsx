import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </main>
  )
}
