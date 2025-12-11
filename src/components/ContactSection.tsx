import { Phone, Mail, Clock, MapPin, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio Inviato!",
      description: "Ti risponderò il prima possibile.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Inviami un Messaggio
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm text-muted-foreground block mb-2">
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  placeholder="Il tuo nome"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="email@esempio.it"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground block mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="+39 xxx xxx xxxx"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground block mb-2">
                  Messaggio
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  placeholder="Raccontami i tuoi obiettivi..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-teal-light transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Invia Messaggio
              </button>
            </form>
          </div>

          {/* Contact Info */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
