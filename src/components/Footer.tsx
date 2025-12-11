import { Link } from "react-router-dom";
import logo from "@/assets/logo-dc.png";

const Footer = () => {
  return (
    <footer className="bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-10 top-0 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container-custom relative py-12">
        <div className="section-shell bg-background/90 border border-primary/10 px-6 sm:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={logo}
              alt="Davide Carfora Logo"
              className="h-12 w-12 rounded-full group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <p className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                Davide Carfora
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Personal Trainer
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            {["Home", "Chi Sono", "Servizi", "Prezzi", "Contatti"].map((link) => (
              <Link
                key={link}
                to={`/#${link.toLowerCase().replace(" ", "-")}`}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>

          <p className="font-body text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Davide Carfora. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
