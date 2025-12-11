import { Award, Clock, Users, Target } from "lucide-react";
import logo from "@/assets/logo-dc.png";

const features = [
  {
    icon: Clock,
    title: "Orario Flessibile",
    description: "Disponibile dalle 7 alle 22, su appuntamento",
  },
  {
    icon: Users,
    title: "Approccio Personalizzato",
    description: "Seguito a 360 gradi con massimo impegno",
  },
  {
    icon: Award,
    title: "Professionalità",
    description: "Esperienza e competenza al tuo servizio",
  },
  {
    icon: Target,
    title: "Obiettivi Concreti",
    description: "Risultati misurabili e duraturi",
  },
];

const AboutSection = () => {
  return (
    <section id="chi-sono" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
                Chi Sono
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Il Tuo Partner per il<br />
                <span className="text-gradient">Successo Fitness</span>
              </h2>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                Sono Davide Carfora, Personal Trainer professionista. La mia missione è aiutarti a raggiungere i tuoi obiettivi di fitness attraverso un approccio personalizzato e scientifico. Ogni percorso è unico, proprio come te.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-5 md:p-6 rounded-xl bg-card shadow-card card-hover cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Logo Display */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              
              {/* Logo Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-card shadow-card-hover flex items-center justify-center animate-float">
                <img
                  src={logo}
                  alt="DC Logo"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>

              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-125" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
