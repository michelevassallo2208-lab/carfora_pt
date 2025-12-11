import { useState } from "react";
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react";

import certNutrizione from "@/assets/cert-nutrizione.jpeg";
import certPosturale from "@/assets/cert-posturale.jpeg";
import certPt1 from "@/assets/cert-pt1.jpeg";
import certPt2 from "@/assets/cert-pt2.jpeg";
import certPt3 from "@/assets/cert-pt3.jpeg";
import certDiploma2 from "@/assets/cert-diploma2.jpeg";
import certDiploma3 from "@/assets/cert-diploma3.jpeg";
import certDiploma4 from "@/assets/cert-diploma4.jpeg";
import certFitboxe from "@/assets/cert-fitboxe.jpeg";

const certifications = [
  {
    title: "Personal Trainer 3° Livello",
    issuer: "ENDAS - Ente Nazionale",
    year: "2024",
    image: certPt3,
    description: "Qualifica massima nel percorso Personal Trainer",
  },
  {
    title: "Personal Trainer 2° Livello",
    issuer: "ENDAS - Ente Nazionale",
    year: "2024",
    image: certPt2,
    description: "Ginnastica finalizzata alla salute e al fitness",
  },
  {
    title: "Personal Trainer 1° Livello",
    issuer: "ENDAS - Ente Nazionale",
    year: "2024",
    image: certPt1,
    description: "Attività sportiva ginnastica fitness",
  },
  {
    title: "Istruttore 3° Livello",
    issuer: "Libertas - Scuola Nazionale",
    year: "2024",
    image: certDiploma4,
    description: "Attività sportiva ginnastica finalizzata alla salute",
  },
  {
    title: "Istruttore 2° Livello",
    issuer: "Libertas - Scuola Nazionale",
    year: "2024",
    image: certDiploma3,
    description: "Ginnastica finalizzata alla salute e al fitness",
  },
  {
    title: "Istruttore 1° Livello",
    issuer: "Libertas - Scuola Nazionale",
    year: "2024",
    image: certDiploma2,
    description: "Attività sportiva ginnastica fitness",
  },
  {
    title: "Nutrizione nello Sport",
    issuer: "Libertas - Scuola Nazionale",
    year: "2024",
    image: certNutrizione,
    description: "Nutrizione Sportiva 1° Livello - Sistema Nazionale S.Na.Q",
  },
  {
    title: "Tecnico Ginnastica Posturale",
    issuer: "ENDAS/CONI - Metodo Roberto D'Elia",
    year: "2023",
    image: certPosturale,
    description: "Specializzazione in ginnastica posturale in sala attrezzi",
  },
  {
    title: "Istruttore FitBoxe",
    issuer: "NonSoloFitness - Certificato Nazionale",
    year: "2025",
    image: certFitboxe,
    description: "Qualifica nazionale di Istruttore FitBoxe",
  },
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedCert(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedCert(null);
    document.body.style.overflow = "unset";
  };

  const navigateCert = (direction: "prev" | "next") => {
    if (selectedCert === null) return;
    if (direction === "prev") {
      setSelectedCert(selectedCert === 0 ? certifications.length - 1 : selectedCert - 1);
    } else {
      setSelectedCert(selectedCert === certifications.length - 1 ? 0 : selectedCert + 1);
    }
  };

  return (
    <section id="certificazioni" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Award className="w-5 h-5" />
            <span className="font-body text-sm font-medium uppercase tracking-wider">
              Formazione Certificata
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Le Mie <span className="text-gradient">Certificazioni</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualifiche riconosciute a livello nazionale dal CONI e dai principali enti di promozione sportiva.
            Iscritto all'Albo Nazionale dei Tecnici Sportivi.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  {cert.year}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="font-body text-sm text-primary font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="font-body text-sm text-muted-foreground line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-background/90 rounded-full font-body text-sm font-medium text-foreground">
                  Clicca per ingrandire
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Albo Tecnici Info */}
        <div className="mt-16 p-8 bg-card rounded-3xl shadow-card border border-border/50">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-12 h-12 text-primary" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Iscritto all'Albo Nazionale Tecnici
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                <strong>CARFORA DAVIDE (SA)</strong> - Tecnico certificato con le seguenti qualifiche:
              </p>
              <ul className="font-body text-sm text-muted-foreground space-y-1">
                <li>• Nutrizione nello Sport - 1° Livello</li>
                <li>• Istruttore 1°, 2°, 3° Livello Attività Sportiva Ginnastica finalizzata alla Salute e al Fitness</li>
                <li>• Tecnico Ginnastica Posturale in Sala Attrezzi</li>
                <li>• Istruttore FitBoxe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateCert("prev");
            }}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateCert("next");
            }}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certifications[selectedCert].image}
              alt={certifications[selectedCert].title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="font-display text-foreground font-semibold">
              {certifications[selectedCert].title}
            </p>
            <p className="font-body text-sm text-muted-foreground">
              {certifications[selectedCert].issuer} - {certifications[selectedCert].year}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
