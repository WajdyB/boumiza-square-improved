import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <div className="grid lg:grid-cols-2 borderless">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <Footer />
    </main>
  )
}
