import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/davide-hero.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-teal-dark/20" />

      {/* Animated glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-dark/30 rounded-full blur-[180px]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p
              className="font-body text-primary uppercase tracking-[0.4em] text-sm md:text-base mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Personal Trainer
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Davide<br />
              <span className="text-gradient">Carfora</span>
            </h1>
            <p
              className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              Trasforma il tuo corpo, supera i tuoi limiti.<br />
              Prima lezione di prova <span className="text-primary font-semibold">gratuita</span>.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="#contatti"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-glow relative overflow-hidden"
              >
                <span className="relative z-10">Prenota Ora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#prezzi"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/50 text-primary-foreground font-body font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                Listino Prezzi
              </a>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-full border-2 border-primary/30 animate-pulse" />
              <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-primary/20" />
              <div className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-primary/10" />
            </div>
            
            {/* Image container with effects */}
            <div className="relative">
              {/* Teal glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-primary/40 rounded-full blur-3xl" />
              
              {/* Main image */}
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Davide Carfora Personal Trainer"
                  className="relative z-10 w-72 h-auto md:w-96 lg:w-[450px] object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 40px hsl(170 45% 35% / 0.4))'
                  }}
                />
                {/* Gradient overlay on image for blend */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-dark via-transparent to-transparent opacity-30 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#chi-sono"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary transition-colors duration-300 animate-float"
      >
        <ChevronDown size={32} />
      </a>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
