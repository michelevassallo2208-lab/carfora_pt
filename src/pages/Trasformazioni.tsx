import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import trasformazioneValerio from "@/assets/trasformazione-valerio.png";
import trasformazioneDavide from "@/assets/trasformazione-davide.png";
import trasformazioneAlfredo from "@/assets/trasformazione-alfredo.png";
import trasformazioneCp from "@/assets/trasformazione-cp.png";
import trasformazioneGiuseppe from "@/assets/trasformazione-giuseppe.png";
import trasformazioneSchiena from "@/assets/trasformazione-schiena.png";
import trasformazioneMarco from "@/assets/trasformazione-marco.png";

const transformations = [
  {
    id: 1,
    name: "Marco",
    duration: "1 Anno",
    image: trasformazioneMarco,
    description: "Da 'non ci credo' a 'ci credo davvero!' Un anno fa, questo ragazzo è venuto da me con un obiettivo chiaro: dimagrire, tonificare e costruire massa muscolare. Oggi, dopo un percorso di impegno e dedizione, possiamo dire che il primo step è superato!",
    quote: "Ho avuto il privilegio di seguirlo a 360° e insieme abbiamo lavorato duro, affrontando alti e bassi. È stato incredibile vederlo trasformarsi, non solo fisicamente, ma anche mentalmente. Ha abbracciato un nuovo stile di vita e ha superato ogni aspettativa. Ricorda: i risultati arrivano a chi non si arrende!"
  },
  {
    id: 2,
    name: "Valerio",
    duration: "6 Mesi",
    image: trasformazioneValerio,
    description: "In soli sei mesi, Valerio ha compiuto un incredibile viaggio di trasformazione! Con dedizione e impegno, abbiamo raggiunto risultati straordinari: maggior tonificazione, incremento della massa muscolare e un netto miglioramento della postura. Ogni passo ci ha resi più motivati e pronti ad affrontare nuove sfide!",
    quote: "Se anche tu vuoi cambiare la tua vita e raggiungere i tuoi obiettivi, contattami! Insieme possiamo superare ogni limite e scoprire il tuo potenziale!"
  },
  {
    id: 3,
    name: "Davide",
    duration: "La Mia Trasformazione",
    image: trasformazioneDavide,
    description: "Ogni percorso inizia con un primo passo e il mio è stato un viaggio di dedizione, impegno e trasformazione. Nella foto a sinistra, ero solo all'inizio del mio percorso, ma con determinazione e passione ho lavorato sodo per ottenere i risultati che vedete oggi. Non si tratta solo di tonificazione e definizione muscolare, ma anche di un miglioramento della postura e della salute generale.",
    quote: "Ricorda: non è mai troppo tardi per iniziare! Se ce l'ho fatta io, puoi farcela anche tu! Sii il cambiamento che vuoi vedere nella tua vita!"
  },
  {
    id: 4,
    name: "Alfredo",
    duration: "7 Mesi",
    image: trasformazioneAlfredo,
    description: "La costanza batte tutto: il percorso di Alfredo in 3 fasi. Questo non è un semplice 'prima e dopo'. È il percorso reale di Alfredo, fatto di disciplina, fiducia e miglioramento costante. Partenza: 110 kg, Dopo 3 mesi: 96 kg, Oggi (7° mese): 89 kg.",
    quote: "Ma il peso è solo un numero. La verità è che la condizione fisica, la postura, la qualità del movimento e la forma generale stanno cambiando di mese in mese. Ed è questo che conta davvero."
  },
  {
    id: 5,
    name: "C.P.",
    duration: "6 Mesi",
    image: trasformazioneCp,
    description: "Vi presento questa signora che fa parte del mio team da 6 mesi, lei è C.P., ha 52 anni e pesava 57 kg. Ha sempre praticato sport ma non era in condizione estetica ottimale. Con soli due allenamenti settimanali seguiti da me passo passo, abbiamo ottenuto dei grandi risultati in soli 6 mesi.",
    quote: "Come si evince dai dati e dalle foto il corpo della signora è cambiato in maniera equilibrata, lo vediamo dai glutei, dall'addome, dalle gambe, dalla schiena e dalle braccia. Per questo il mio invito è di prendervi cura di voi stessi perché cambiare è possibile, basta solo volerlo!"
  },
  {
    id: 6,
    name: "Giuseppe",
    duration: "8 Mesi",
    image: trasformazioneGiuseppe,
    description: "Vi presento uno dei miei allievi che ben 8 mesi fa è entrato a far parte del mio team. Quando ci siamo conosciuti pesava 48 kg e mi ha spiegato bene quali obiettivi voleva raggiungere: aumentare in primis massa muscolare, aumentare la forza, migliorare la postura e migliorare la sua forma fisica generale.",
    quote: "Dopo un percorso fatto di step e di costanza, con 3 allenamenti settimanali ha iniziato a vedere degli ottimi risultati: la massa muscolare è aumentata pesando 53,3 kg, la forza è aumentata, la postura è migliorata e soprattutto è migliorata la sua condizione fisica."
  },
  {
    id: 7,
    name: "Trasformazione Schiena",
    duration: "Luglio - Ottobre",
    image: trasformazioneSchiena,
    description: "L'unica costante della vita è il cambiamento. Questa trasformazione della schiena mostra i risultati ottenuti in soli 3 mesi di allenamento mirato e costante.",
    quote: "Il cambiamento è possibile quando c'è determinazione e un programma strutturato."
  }
];

const Trasformazioni = () => {
  return (
    <main className="overflow-hidden bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-background via-background to-card overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute -left-10 top-0 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-accent/12 blur-3xl" />
        <div className="container-custom">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-body">Torna alla Home</span>
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Risultati Reali
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6">
              Trasformazioni
            </h1>
            <p className="text-muted-foreground text-base md:text-xl font-body max-w-2xl mx-auto">
              Storie vere di cambiamento. Ogni trasformazione è il risultato di dedizione,
              costanza e un programma personalizzato.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto section-shell bg-white/90 backdrop-blur-xl px-6 sm:px-10 md:px-12 py-10 md:py-12">
            <div className="text-center mb-8">
              <span className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
                Video Highlight
              </span>
              <h2 className="font-display text-2xl md:text-4xl text-foreground">
                Il Cambiamento in Movimento
              </h2>
            </div>
            <div className="relative group rounded-3xl bg-gradient-to-br from-primary/15 via-background to-secondary/20 p-1 shadow-elegant">
              <div className="absolute inset-0 rounded-3xl border border-primary/10" />
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/80">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 opacity-50 group-hover:opacity-40 transition-opacity duration-500" />
                <video
                  controls
                  className="h-full w-full object-cover"
                  poster=""
                  preload="metadata"
                >
                  <source src="/videos/trasformazione-video.mp4" type="video/mp4" />
                  Il tuo browser non supporta i video.
                </video>
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-card border border-primary/10 flex items-center gap-2 text-sm font-body text-foreground">
                  <Play size={16} className="text-primary" />
                  Guarda la trasformazione
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid gap-12 md:gap-20">
            {transformations.map((transformation, index) => (
              <article
                key={transformation.id}
                className={`section-shell bg-white/90 backdrop-blur-xl px-6 sm:px-8 md:px-10 py-8 md:py-10 grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-xl shadow-elegant">
                    <img
                      src={transformation.image}
                      alt={`Trasformazione di ${transformation.name}`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-primary-foreground font-display text-sm font-semibold">
                        {transformation.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-5 md:space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <span className="text-primary font-body text-sm tracking-wider uppercase">
                      Storia di Successo
                    </span>
                    <h2 className="font-display text-2xl md:text-4xl text-foreground mt-2">
                      {transformation.name}
                    </h2>
                  </div>

                  <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                    {transformation.description}
                  </p>

                  <blockquote className="border-l-4 border-primary pl-5 md:pl-6 py-2">
                    <p className="text-foreground/80 font-body italic text-base">
                      "{transformation.quote}"
                    </p>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-4 md:mb-6">
            Vuoi Essere la Prossima Trasformazione?
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Inizia il tuo percorso di cambiamento oggi stesso. Contattami per una consulenza gratuita.
          </p>
          <a
            href="https://wa.me/393347466610"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contattami su WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Trasformazioni;
