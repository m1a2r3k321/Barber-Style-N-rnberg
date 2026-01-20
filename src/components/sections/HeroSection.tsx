import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-barbershop.jpg';

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image with Overlay - LCP optimiert */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegantes Barbershop Interieur mit Vintage-Friseurstühlen"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/50 to-charcoal-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tagline */}
          <p 
            className="text-primary uppercase tracking-[0.4em] text-sm md:text-base font-medium opacity-0 animate-fade-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Premium Barbershop seit 2010
          </p>

          {/* Main Headline */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            The Gentleman's
            <span className="block text-gradient">Cut</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            Wo Tradition auf modernen Stil trifft. Erleben Sie erstklassige 
            Haarschnitte und Bartpflege in einer einzigartigen Atmosphäre.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">Termin Buchen</Link>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/services">Unsere Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
      >
        <a 
          href="#services" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Nach unten scrollen"
        >
          <span className="text-xs uppercase tracking-widest">Entdecken</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-40 right-10 w-20 h-20 border border-primary/20 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};
