export function ActualitesHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden borderless">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-black.jpg" alt="Actualités" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">Actualités</h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          Découvrez les dernières nouvelles et événements de Boumiza Square
        </p>
      </div>
    </section>
  )
}
