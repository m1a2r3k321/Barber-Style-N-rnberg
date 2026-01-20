import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Team', href: '/team' },
  { name: 'Preise', href: '/preise' },
  { name: 'Kontakt', href: '/kontakt' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
          aria-label="The Gentleman's Cut - Home"
        >
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

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`gold-underline text-sm uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/kontakt">Termin Buchen</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`block py-2 text-lg uppercase tracking-widest transition-colors ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button variant="gold" className="w-full" asChild>
                <Link to="/kontakt">Termin Buchen</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
