import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { Scissors, Droplets, Sparkles, Crown, Palette, Wind, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Scissors,
    title: 'Klassischer Haarschnitt',
    description: 'Präzise geschnittene Frisuren, abgestimmt auf Ihren persönlichen Stil und Ihre Gesichtsform. Inklusive Waschen, Schneiden und Styling.',
    price: 'ab €35',
    duration: '45 Min',
  },
  {
    icon: Droplets,
    title: 'Traditionelle Nassrasur',
    description: 'Luxuriöse Rasur mit heißen Tüchern, Premium-Rasierschaum und klassischem Rasiermesser für ein unvergleichlich glattes Ergebnis.',
    price: 'ab €30',
    duration: '30 Min',
  },
  {
    icon: Sparkles,
    title: 'Bartpflege & Trimmen',
    description: 'Professionelles Barttrimmen und -styling. Wir bringen Ihren Bart in Form und pflegen ihn mit hochwertigen Produkten.',
    price: 'ab €25',
    duration: '20 Min',
  },
  {
    icon: Crown,
    title: 'Premium Gentleman Paket',
    description: 'Das ultimative Verwöhnerlebnis: Haarschnitt, Bartpflege, Gesichtsbehandlung, Kopfmassage und Styling.',
    price: 'ab €85',
    duration: '90 Min',
  },
  {
    icon: Palette,
    title: 'Färben & Tönen',
    description: 'Dezente Grauabdeckung oder modische Farbakzente. Wir beraten Sie individuell zu den besten Optionen für Ihr Haar.',
    price: 'ab €45',
    duration: '60 Min',
  },
  {
    icon: Wind,
    title: 'Styling & Beratung',
    description: 'Individuelle Stilberatung und professionelles Finish. Ideal für besondere Anlässe oder wenn Sie einen neuen Look ausprobieren möchten.',
    price: 'ab €20',
    duration: '20 Min',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Unsere Services | The Gentleman's Cut Berlin</title>
        <meta 
          name="description" 
          content="Entdecken Sie unsere Premium-Services: Klassische Haarschnitte, traditionelle Nassrasur, Bartpflege und mehr im The Gentleman's Cut Berlin." 
        />
        <link rel="canonical" href="https://gentlemanscut.de/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "@id": "https://example-barbershop.at/#barbershop",
            "name": "Beispiel Barbershop Wien",
            "url": "https://example-barbershop.at",
            "logo": "https://example-barbershop.at/images/logo.png",
            "image": "https://example-barbershop.at/images/shop.jpg",
            "telephone": "+43 1 2345678",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Musterstraße 12",
              "addressLocality": "Wien",
              "postalCode": "1020",
              "addressCountry": "AT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.2167",
              "longitude": "16.3958"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Wien"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "sameAs": [
              "https://www.google.com/maps?cid=1234567890",
              "https://www.instagram.com/beispielbarbershop",
              "https://www.facebook.com/beispielbarbershop"
            ]
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-dark">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Services</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Was wir bieten
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Unsere Services
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Von klassischen Haarschnitten bis zur luxuriösen Nassrasur – 
                wir bieten Ihnen erstklassige Handwerkskunst für den modernen Gentleman.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimateOnScroll key={service.title} animation="fade-up" delay={index * 100}>
                  <article className="group bg-card border border-border rounded-sm p-8 h-full transition-all duration-500 hover:border-primary hover:shadow-gold">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-primary font-semibold text-lg">
                        {service.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {service.duration}
                      </span>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>

            {/* CTA */}
            <AnimateOnScroll animation="fade-up" className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Bereit für Ihren neuen Look?
              </p>
              <Button variant="gold" size="xl" asChild>
                <Link to="/kontakt">Termin Vereinbaren</Link>
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
