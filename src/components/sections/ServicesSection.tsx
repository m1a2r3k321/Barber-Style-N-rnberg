import { Scissors, Droplets, Sparkles, Crown } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Scissors,
    title: 'Klassischer Haarschnitt',
    description: 'Präzise geschnittene Frisuren, abgestimmt auf Ihren persönlichen Stil und Ihre Gesichtsform.',
    price: 'ab €35',
  },
  {
    icon: Droplets,
    title: 'Bartpflege & Rasur',
    description: 'Professionelle Bartpflege mit heißen Tüchern und traditioneller Nassrasur.',
    price: 'ab €25',
  },
  {
    icon: Sparkles,
    title: 'Styling & Beratung',
    description: 'Individuelle Stilberatung und professionelles Finish für jeden Anlass.',
    price: 'ab €20',
  },
  {
    icon: Crown,
    title: 'Premium Paket',
    description: 'Das Rundum-Erlebnis: Haarschnitt, Bartpflege, Gesichtsbehandlung und Styling.',
    price: 'ab €85',
  },
];

export const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="py-24 md:py-32 bg-gradient-dark"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Was wir bieten
          </p>
          <h2 
            id="services-heading" 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Unsere Services
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Erstklassige Handwerkskunst kombiniert mit modernen Techniken 
            für den anspruchsvollen Gentleman.
          </p>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll 
              key={service.title} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div className="group bg-card border border-border rounded-sm p-8 h-full transition-all duration-500 hover:border-primary hover:shadow-gold hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price */}
                <p className="text-primary font-semibold text-lg">
                  {service.price}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={400} className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors uppercase tracking-widest text-sm gold-underline"
          >
            Alle Services anzeigen
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
