import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-dc.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#chi-sono", label: "Chi Sono" },
    { href: "/#servizi", label: "Servizi" },
    { href: "/trasformazioni", label: "Trasformazioni", isPage: true },
    { href: "/#certificazioni", label: "Certificazioni" },
    { href: "/#prezzi", label: "Prezzi" },
    { href: "/#contatti", label: "Contatti" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-card py-3 border-b border-border/80"
          : "bg-gradient-to-b from-dark/90 via-dark/70 to-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Davide Carfora Personal Trainer"
            className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110 ring-2 ring-primary/20"
          />
          <span
            className={`font-display text-xl font-semibold hidden sm:block transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Davide Carfora
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-body text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          className={`md:hidden p-2 rounded-full border border-primary/20 bg-primary/10 shadow-sm transition-all duration-300 ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          } ${isMobileMenuOpen ? "bg-primary text-primary-foreground border-primary/40" : ""}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-[min(92vw,420px)] top-20 bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/80 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-foreground text-lg font-semibold py-3 border-b border-border/50 last:border-b-0 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-6 pb-6">
            <Link
              to="/#contatti"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold shadow-card hover:shadow-card-hover transition-transform duration-300 hover:-translate-y-0.5"
            >
              Prenota una consulenza
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
