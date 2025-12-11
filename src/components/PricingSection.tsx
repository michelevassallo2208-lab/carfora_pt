import { Check, Star, Gift } from "lucide-react";

const packages = [
  {
    name: "Singola",
    price: "30",
    description: "Lezione singola Personal Training",
    features: [
      "1 lezione di 60 minuti",
      "Programma personalizzato",
      "Monitoraggio progressi",
    ],
    popular: false,
  },
  {
    name: "Coppia",
    price: "50",
    description: "Lezione in coppia Personal Training",
    features: [
      "1 lezione di 60 minuti",
      "Allenamento in coppia",
      "Risparmio del 17%",
    ],
    popular: false,
  },
  {
    name: "10 Lezioni",
    price: "250",
    pricePerLesson: "25",
    description: "Pacchetto trimestrale",
    features: [
      "10 lezioni complete",
      "Scheda allenamento inclusa",
      "Risparmio del 17%",
      "Scadenza trimestrale",
    ],
    popular: false,
  },
  {
    name: "15 Lezioni",
    price: "340",
    pricePerLesson: "22.67",
    description: "Pacchetto trimestrale",
    features: [
      "15 lezioni complete",
      "Scheda allenamento inclusa",
      "Risparmio del 24%",
      "Scadenza trimestrale",
    ],
    popular: true,
  },
  {
    name: "20 Lezioni",
    price: "400",
    pricePerLesson: "20",
    description: "Pacchetto trimestrale",
    features: [
      "20 lezioni complete",
      "Scheda allenamento inclusa",
      "Risparmio del 33%",
      "Scadenza trimestrale",
    ],
    popular: false,
  },
];

const monthlyPackages = [
  {
    name: "Base",
    sessions: "1x settimana",
    price: "80",
    pricePerLesson: "20",
    features: [
      "4 lezioni al mese",
      "Scheda allenamento",
      "Allenamento small group (max 3 persone, non 1-to-1)",
      "Consulenza alimentare gratuita",
    ],
  },
  {
    name: "Standard",
    sessions: "2x settimana",
    price: "120",
    pricePerLesson: "15",
    features: [
      "8 lezioni al mese",
      "Scheda allenamento",
      "Allenamento small group (max 3 persone, non 1-to-1)",
      "Consulenza alimentare gratuita",
      "Maglietta in omaggio",
    ],
    popular: true,
  },
  {
    name: "Premium",
    sessions: "3x settimana",
    price: "140",
    pricePerLesson: "11.66",
    features: [
      "12 lezioni al mese",
      "Scheda allenamento",
      "Allenamento small group (max 3 persone, non 1-to-1)",
      "Consulenza alimentare gratuita",
      "Kit completo in omaggio",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="prezzi" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[880px] h-[880px] bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-overlay" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Listino Prezzi
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Investi nel Tuo<br />
            <span className="text-gradient">Benessere</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg mb-3 md:mb-4">
            I pacchetti hanno scadenza trimestrale.
          </p>
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-body text-sm font-medium">
            <Star className="w-4 h-4" />
            Prima lezione di prova GRATUITA
          </p>
        </div>

        {/* Abbonamenti Mensili */}
        <div className="section-shell bg-white/90 backdrop-blur-xl px-6 sm:px-10 md:px-12 py-10 md:py-12 mb-10 md:mb-12">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2 md:mb-3">
              Abbonamenti Mensili
            </h3>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Allenamento small group: massimo 3 persone, non 1-to-1
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {monthlyPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative bg-white/95 rounded-2xl p-6 md:p-8 shadow-card card-hover border border-border/70 ${
                  pkg.popular ? "ring-2 ring-primary md:scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full">
                    Consigliato
                  </div>
                )}

                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
                  {pkg.name}
                </h3>
                <p className="font-body text-primary font-medium mb-3 md:mb-4 text-sm md:text-base">
                  {pkg.sessions}
                </p>

                <div className="mb-6">
                  <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    €{pkg.price}
                  </span>
                  <span className="font-body text-muted-foreground text-sm md:text-base">/mese</span>
                  <p className="font-body text-sm text-primary mt-1">
                    Solo €{pkg.pricePerLesson} a lezione
                  </p>
                </div>

                <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contatti"
                  className={`block text-center py-3 rounded-lg font-body font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-teal-light"
                      : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Inizia Ora
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-3 px-5 md:px-6 py-3 bg-secondary rounded-full text-sm md:text-base shadow-card border border-primary/20">
            <Gift className="w-5 h-5 text-primary" />
            <span className="font-body text-foreground font-medium">
              In omaggio: Maglietta con logo, asciugamano e portachiave
            </span>
          </div>
        </div>

        {/* Lezioni 1 to 1 */}
        <div className="section-shell bg-white/90 backdrop-blur-xl px-6 sm:px-10 md:px-12 py-10 md:py-12">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2 md:mb-3">
              Lezioni 1 to 1
            </h3>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Scegli tra lezioni singole o pacchetti personalizzati per seguire i tuoi obiettivi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative bg-white/95 rounded-2xl p-5 md:p-6 shadow-card card-hover border border-border/70 ${
                  pkg.popular ? "ring-2 ring-primary md:scale-[1.02]" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full">
                    Più Scelto
                  </div>
                )}

                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3 md:mb-4">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    €{pkg.price}
                  </span>
                  {pkg.pricePerLesson && (
                    <span className="font-body text-sm text-muted-foreground block mt-1">
                      €{pkg.pricePerLesson}/lezione
                    </span>
                  )}
                </div>

                <ul className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contatti"
                  className={`block text-center py-3 rounded-lg font-body font-semibold text-sm transition-all duration-300 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-teal-light"
                      : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Scegli
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
