import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check } from 'lucide-react';

const priceCategories = [
  {
    title: 'Haarschnitte',
    items: [
      { name: 'Klassischer Haarschnitt', price: '€35', description: 'Waschen, Schneiden, Styling' },
      { name: 'Maschinenschnitt', price: '€25', description: 'Einheitliche Länge' },
      { name: 'Fade & Undercut', price: '€40', description: 'Präzise Übergänge' },
      { name: 'Kinder (bis 12 Jahre)', price: '€22', description: 'Schneiden & Styling' },
    ],
  },
  {
    title: 'Bartpflege',
    items: [
      { name: 'Bart trimmen', price: '€15', description: 'Form & Kontur' },
      { name: 'Bartpflege komplett', price: '€25', description: 'Trimmen, Pflege, Styling' },
      { name: 'Traditionelle Nassrasur', price: '€30', description: 'Mit heißen Tüchern' },
      { name: 'Konturrasur', price: '€12', description: 'Nacken & Konturen' },
    ],
  },
  {
    title: 'Extras & Pakete',
    items: [
      { name: 'Färben / Tönen', price: '€45+', description: 'Nach Aufwand' },
      { name: 'Augenbrauenpflege', price: '€10', description: 'Trimmen & Formen' },
      { name: 'Kopfmassage', price: '€15', description: '10 Minuten Entspannung' },
      { name: 'Gesichtsbehandlung', price: '€35', description: 'Reinigung & Pflege' },
    ],
  },
];

const packages = [
  {
    name: 'Classic',
    price: '€50',
    description: 'Ideal für den regelmäßigen Besuch',
    features: ['Haarschnitt', 'Waschen & Styling', 'Barttrimmen'],
  },
  {
    name: 'Gentleman',
    price: '€85',
    description: 'Das beliebte Rundum-Paket',
    features: ['Haarschnitt', 'Bartpflege komplett', 'Gesichtsbehandlung', 'Kopfmassage'],
    highlighted: true,
  },
  {
    name: 'Executive',
    price: '€120',
    description: 'Luxuriöse Auszeit',
    features: ['Haarschnitt mit Beratung', 'Traditionelle Nassrasur', 'Gesichtsbehandlung', 'Kopfmassage', 'Premium Getränk'],
  },
];

const Prices = () => {
  return (
    <>
      <Helmet>
        <title>Preise | The Gentleman's Cut Berlin</title>
        <meta 
          name="description" 
          content="Transparente Preise für alle Services: Haarschnitte ab €35, Bartpflege ab €15. Entdecken Sie unsere Pakete im The Gentleman's Cut Berlin." 
        />
        <link rel="canonical" href="https://gentlemanscut.de/preise" />
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
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Preise</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Transparent & Fair</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Unsere Preise
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Qualität hat ihren Wert. Hier finden Sie eine Übersicht unserer Services und Preise.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Price List */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {priceCategories.map((category, categoryIndex) => (
                <AnimateOnScroll key={category.title} animation="fade-up" delay={categoryIndex * 100}>
                  <div className="bg-card border border-border rounded-sm p-8">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                      {category.title}
                    </h2>
                    <ul className="space-y-4">
                      {category.items.map((item) => (
                        <li key={item.name} className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-foreground font-medium">{item.name}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                          <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Packages */}
            <AnimateOnScroll animation="fade-up" className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Unsere Pakete
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Sparen Sie mit unseren beliebten Kombinationsangeboten
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <AnimateOnScroll key={pkg.name} animation="fade-up" delay={index * 100}>
                  <div 
                    className={`relative rounded-sm p-8 h-full flex flex-col ${
                      pkg.highlighted 
                        ? 'bg-gradient-to-b from-primary/20 to-card border-2 border-primary' 
                        : 'bg-card border border-border'
                    }`}
                  >
                    {pkg.highlighted && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs uppercase tracking-wider px-4 py-1 rounded-sm">
                        Beliebt
                      </span>
                    )}
                    
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    <p className="font-display text-4xl font-bold text-primary mb-6">
                      {pkg.price}
                    </p>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground">
                          <Check className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={pkg.highlighted ? 'gold' : 'goldOutline'} 
                      className="w-full"
                      asChild
                    >
                      <Link to="/kontakt">Jetzt Buchen</Link>
                    </Button>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Prices;
