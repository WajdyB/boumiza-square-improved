import { Card } from "@/components/ui/card"

const actualites = [
  {
    id: 1,
    title: "Envie d'un peu de détente ?",
    date: "05-06-2024",
    image: "/espace-detente.png",
    excerpt: "Laissez-vous séduire par les espaces paisibles et accueillants de BoumizaSquare, conçus pour vous offrir une pause bien méritée au cœur de l'animation urbaine. ",
  },
  {
    id: 2,
    title: "Plus d'espace pour travailler",
    date: "11-02-2024",
    image: "/espace-travail.png",
    excerpt: "Profitez d'un environnement dynamique et d'une connexion Wi-Fi rapide, vous permettant de rester connecté et efficace tout au long de votre journée de travail.",
  },
  {
    id: 3,
    title: "Un espace pour apprendre, réfléchir et évoluer",
    date: "26-07-2025",
    image: "/espace-collaboratif.png",
    excerpt: "C'est un lieu paisible et accueillant, parfait pour étudier ou lire dans les meilleurs conditions. Pensé pour encourager la concentration, cet espace confortable et bien aménagé permet à chacun de se poser et réfléchir.",
  },
]

export function ActualitesList() {
  return (
    <section className="py-20 px-6 bg-background borderless">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Restez informé des dernières nouveautés, événements et ouvertures de Boumiza Square.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden borderless bg-card hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Nouveau
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
