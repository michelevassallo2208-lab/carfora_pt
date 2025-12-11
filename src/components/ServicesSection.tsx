import { Dumbbell, Heart, Activity, Sparkles } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "Allenamenti individuali personalizzati per raggiungere i tuoi obiettivi specifici, con costante monitoraggio dei progressi.",
  },
  {
    icon: Heart,
    title: "Fit Boxe",
    description: "Un mix esplosivo di boxe e fitness che ti permetterà di bruciare calorie e scaricare lo stress in modo divertente.",
  },
  {
    icon: Activity,
    title: "Ginnastica Posturale",
    description: "Migliora la tua postura, previeni dolori e tensioni muscolari con esercizi mirati e tecniche specifiche.",
  },
  {
    icon: Sparkles,
    title: "Consulenza Gratuita",
    description: "Prima lezione di prova gratuita per conoscerti e definire insieme il percorso più adatto a te.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servizi" className="section-padding bg-muted/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-12 left-16 w-44 h-44 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-12 right-16 w-56 h-56 rounded-full bg-accent/12 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="section-shell px-6 sm:px-10 md:px-12 py-12 md:py-14 bg-white/80 backdrop-blur-xl">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Servizi Offerti
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Cosa Posso Fare<br />
              <span className="text-gradient">Per Te</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg">
              Offro una gamma completa di servizi per accompagnarti nel tuo percorso di trasformazione fisica e mentale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white/90 rounded-2xl p-6 md:p-8 shadow-card card-hover overflow-hidden border border-border/70"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-px rounded-[18px] border border-transparent group-hover:border-primary/30 transition-colors duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-primary/15 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
