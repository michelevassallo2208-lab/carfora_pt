import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/davide-hero.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-overlay" />

      {/* Accent corners */}
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-16 bottom-10 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />

      {/* Animated glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[520px] h-[520px] bg-accent/15 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-teal-dark/40 rounded-full blur-[190px]" />
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
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-5 md:space-y-7">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-xs md:text-sm uppercase tracking-[0.3em] animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Personal Trainer
            </div>

            <div className="glass-gradient rounded-3xl p-6 md:p-8 shadow-glow animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <h1
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05]"
              >
                Davide<br />
                <span className="text-gradient">Carfora</span>
              </h1>
              <p
                className="font-body text-primary-foreground/80 text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mt-4"
              >
                Trasforma il tuo corpo, supera i tuoi limiti.<br />
                Prima lezione di prova <span className="text-primary font-semibold">gratuita</span>.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#contatti"
                  className="group inline-flex items-center justify-center px-7 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow relative overflow-hidden"
                >
                  <span className="relative z-10">Prenota Ora</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="#prezzi"
                  className="inline-flex items-center justify-center px-7 py-3 md:px-8 md:py-4 border border-primary/50 text-primary-foreground font-body font-semibold rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  Listino Prezzi
                </a>
              </div>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-full border-2 border-primary/25 animate-pulse" />
              <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-primary/20" />
              <div className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-primary/10" />
            </div>
            
            {/* Image container with effects */}
            <div className="relative">
              {/* Teal glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-primary/45 rounded-full blur-3xl" />
              
              {/* Main image */}
              <div className="relative">
                <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-primary/5 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-primary/15 bg-dark/40 backdrop-blur-md shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Davide Carfora Personal Trainer"
                    className="relative z-10 w-72 h-auto md:w-96 lg:w-[450px] object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 40px hsl(222 78% 55% / 0.38))'
                    }}
                  />
                  {/* Gradient overlay on image for blend */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-dark via-transparent to-transparent opacity-30 pointer-events-none" />
                </div>
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
