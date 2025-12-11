import { Link } from "react-router-dom";
import logo from "@/assets/logo-dc.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={logo}
              alt="Davide Carfora Logo"
              className="h-12 w-12 rounded-full group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <p className="font-display text-lg font-semibold text-background group-hover:text-primary transition-colors duration-300">
                Davide Carfora
              </p>
              <p className="font-body text-sm text-background/60">
                Personal Trainer
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            {["Home", "Chi Sono", "Servizi", "Prezzi", "Contatti"].map((link) => (
              <Link
                key={link}
                to={`/#${link.toLowerCase().replace(" ", "-")}`}
                className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>

          <p className="font-body text-sm text-background/50">
            © {new Date().getFullYear()} Davide Carfora. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
