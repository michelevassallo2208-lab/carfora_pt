import { Phone, Mail, Clock, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefono",
      value: "334 746 6610",
      action: "tel:+393347466610",
    },
    {
      icon: MapPin,
      label: "Indirizzo",
      value: "Via Etruria, 4",
      sublabel: "84091 Battipaglia (SA)",
      action: "https://maps.google.com/?q=Via+Etruria+4+84091+Battipaglia+SA",
    },
    {
      icon: Clock,
      label: "Orari",
      value: "7:00 - 22:00",
      sublabel: "Su appuntamento",
    },
    {
      icon: Mail,
      label: "WhatsApp",
      value: "Scrivimi su WhatsApp",
      action: "https://wa.me/393347466610",
    },
  ];

  return (
    <section id="contatti" className="section-padding bg-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Contatti
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Inizia il Tuo<br />
            <span className="text-gradient">Percorso</span>
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg">
            Prenota la tua prima lezione gratuita e scopri come posso aiutarti a raggiungere i tuoi obiettivi.
          </p>
        </div>

        <div className="grid gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="group p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-body text-sm text-primary-foreground/60 mb-1">
                    {info.label}
                  </p>
                  {info.action ? (
                    <a
                      href={info.action}
                      className="font-display text-lg text-primary-foreground font-medium hover:text-primary transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-display text-lg text-primary-foreground font-medium">
                      {info.value}
                    </p>
                  )}
                  {info.sublabel && (
                    <p className="font-body text-sm text-primary-foreground/60 mt-1">
                      {info.sublabel}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20">
              <h4 className="font-display text-xl font-semibold text-primary-foreground mb-4">
                Seguimi sui Social
              </h4>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium hover:bg-teal-light transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                @davidecarfora
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Free Trial CTA */}
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary to-teal-light text-primary-foreground">
                <h4 className="font-display text-2xl font-bold mb-2">
                  Prima Lezione Gratuita
                </h4>
                <p className="font-body text-primary-foreground/90 mb-4">
                  Nessun impegno. Scopri il mio metodo di allenamento.
                </p>
                <a
                  href="https://wa.me/393347466610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-body font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Contattami Ora
                </a>
              </div>
              <div className="p-8 rounded-2xl bg-card text-primary-foreground shadow-card flex flex-col justify-center gap-4">
                <h4 className="font-display text-2xl font-bold">Preferisci un messaggio diretto?</h4>
                <p className="font-body text-primary-foreground/80">
                  Scrivimi su WhatsApp e organizziamo insieme il tuo percorso personalizzato.
                </p>
                <a
                  href="https://wa.me/393347466610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-teal-light transition-transform duration-300 hover:scale-105 w-fit"
                >
                  <Phone className="w-5 h-5" />
                  Scrivimi su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
