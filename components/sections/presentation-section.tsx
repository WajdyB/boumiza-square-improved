export function PresentationSection() {
  return (
    <section className="py-20 px-6 bg-background borderless">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
               Présentation de notre centre commercial
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Boumiza Square est un lieu unique alliant gastronomie et divertissement. Ce centre moderne regroupe restaurants, 
            commerces gastronomiques et producteurs passionnés pour une expérience culinaire variée. Une salle de jeux conviviale complète l’offre,
             offrant détente et plaisir à toute la famille.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              De la gastronomie traditionnelle aux créations les plus innovantes, chaque enseigne vous propose une
              expérience culinaire mémorable dans un espace pensé pour le confort et la convivialité.
            </p>
          </div>
          <div className="relative animate-slide-up">
            <img
              src="/boumiza-square.jpg"
              alt="Intérieur moderne de Boumiza Square"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
