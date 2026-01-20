import { Link } from 'react-router-dom';
import { Scissors, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <Scissors className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-45" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-foreground tracking-wide">
                  The Gentleman's
                </span>
                <span className="text-primary text-sm tracking-[0.3em] uppercase -mt-1">
                  Cut
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium Barbershop für den modernen Gentleman. 
              Tradition trifft auf zeitgemäßen Stil seit 2010.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Galerie', path: '/galerie' },
                { label: 'Team', path: '/team' },
                { label: 'Preise', path: '/preise' },
                { label: 'Kontakt', path: '/kontakt' },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Öffnungszeiten
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-muted-foreground">
                <span>Montag - Freitag</span>
                <span className="text-foreground">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Samstag</span>
                <span className="text-foreground">10:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sonntag</span>
                <span className="text-foreground">Geschlossen</span>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Musterstraße 123<br />
                  10115 Berlin, Deutschland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href="tel:+4930123456789" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +49 30 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href="mailto:info@gentlemanscut.de" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@gentlemanscut.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} The Gentleman's Cut. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
