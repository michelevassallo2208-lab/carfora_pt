import { Check, Star, Gift, Zap } from "lucide-react";
import { useState } from "react";

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
      "Consulenza alimentare gratuita",
      "Kit completo in omaggio",
    ],
  },
];

const extras = [
  { name: "Scheda Allenamento Personalizzata", price: "70", icon: Zap },
  { name: "Scheda Consigli Alimentari", price: "Gratis", icon: Gift },
  { name: "Scheda Consigli Integratori", price: "Gratis", icon: Gift },
  { name: "Consulenza Personal Training", price: "Gratis", icon: Gift },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<"lezioni" | "mensili">("lezioni");

  return (
    <section id="prezzi" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Listino Prezzi
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Investi nel Tuo<br />
            <span className="text-gradient">Benessere</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-4">
            I pacchetti hanno scadenza trimestrale.
          </p>
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-body text-sm font-medium">
            <Star className="w-4 h-4" />
            Prima lezione di prova GRATUITA
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("lezioni")}
              className={`px-6 py-3 rounded-md font-body font-medium text-sm transition-all duration-300 ${
                activeTab === "lezioni"
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Lezioni Singole & Pacchetti
            </button>
            <button
              onClick={() => setActiveTab("mensili")}
              className={`px-6 py-3 rounded-md font-body font-medium text-sm transition-all duration-300 ${
                activeTab === "mensili"
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Abbonamenti Mensili
            </button>
          </div>
        </div>

        {/* Lezioni Tab */}
        {activeTab === "lezioni" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-2xl p-6 shadow-card card-hover ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full">
                    Più Scelto
                  </div>
                )}
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-foreground">
                    €{pkg.price}
                  </span>
                  {pkg.pricePerLesson && (
                    <span className="font-body text-sm text-muted-foreground block mt-1">
                      €{pkg.pricePerLesson}/lezione
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6">
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
        )}

        {/* Mensili Tab */}
        {activeTab === "mensili" && (
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {monthlyPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-2xl p-8 shadow-card card-hover ${
                  pkg.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full">
                    Consigliato
                  </div>
                )}
                
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {pkg.name}
                </h3>
                <p className="font-body text-primary font-medium mb-4">
                  {pkg.sessions}
                </p>
                
                <div className="mb-6">
                  <span className="font-display text-5xl font-bold text-foreground">
                    €{pkg.price}
                  </span>
                  <span className="font-body text-muted-foreground">/mese</span>
                  <p className="font-body text-sm text-primary mt-1">
                    Solo €{pkg.pricePerLesson} a lezione
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
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
        )}

        {/* In Omaggio Section */}
        {activeTab === "mensili" && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary rounded-full">
              <Gift className="w-5 h-5 text-primary" />
              <span className="font-body text-foreground font-medium">
                In omaggio: Maglietta con logo, asciugamano e portachiave
              </span>
            </div>
          </div>
        )}

        {/* Extras */}
        <div className="bg-muted rounded-2xl p-8">
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            Servizi Extra
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {extras.map((extra) => (
              <div
                key={extra.name}
                className="flex items-center gap-4 bg-card rounded-xl p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <extra.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-foreground">
                    {extra.name}
                  </p>
                  <p className={`font-display text-lg font-bold ${
                    extra.price === "Gratis" ? "text-primary" : "text-foreground"
                  }`}>
                    {extra.price === "Gratis" ? "Gratis" : `€${extra.price}`}
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

export default PricingSection;
