import { Dumbbell, Heart, Activity, Sparkles } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "Allenamenti individuali personalizzati per raggiungere i tuoi obiettivi specifici, con costante monitoraggio dei progressi.",
    price: "da €30",
  },
  {
    icon: Heart,
    title: "Fit Boxe",
    description: "Un mix esplosivo di boxe e fitness che ti permetterà di bruciare calorie e scaricare lo stress in modo divertente.",
    price: "€30",
  },
  {
    icon: Activity,
    title: "Ginnastica Posturale",
    description: "Migliora la tua postura, previeni dolori e tensioni muscolari con esercizi mirati e tecniche specifiche.",
    price: "€30",
  },
  {
    icon: Sparkles,
    title: "Consulenza Gratuita",
    description: "Prima lezione di prova gratuita per conoscerti e definire insieme il percorso più adatto a te.",
    price: "Gratis",
  },
];

const ServicesSection = () => {
  return (
    <section id="servizi" className="section-padding bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-primary/10 rounded-full" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
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
              className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-card card-hover overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="font-body text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    /lezione
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
