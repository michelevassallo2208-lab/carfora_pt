import logo from "@/assets/logo-dc.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Davide Carfora Logo"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-display text-lg font-semibold text-background">
                Davide Carfora
              </p>
              <p className="font-body text-sm text-background/60">
                Personal Trainer
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {["Home", "Chi Sono", "Servizi", "Prezzi", "Contatti"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
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
