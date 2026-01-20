import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { ChevronRight, Instagram } from 'lucide-react';

const team = [
  {
    name: 'Marcus Weber',
    role: 'Gründer & Master Barber',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    imageAlt: 'Portrait von Marcus Weber, Gründer und Master Barber mit über 15 Jahren Erfahrung',
    bio: 'Mit über 15 Jahren Erfahrung ist Marcus ein Meister seines Fachs. Seine Leidenschaft für klassische Handwerkskunst verbindet er mit modernen Techniken.',
    instagram: '@marcus.thecut',
  },
  {
    name: 'Alexander Schmidt',
    role: 'Senior Barber',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    imageAlt: 'Portrait von Alexander Schmidt, Senior Barber und Spezialist für Bartpflege',
    bio: 'Alexander ist Spezialist für Bartpflege und traditionelle Nassrasur. Seine präzise Arbeit hat ihm eine treue Kundschaft eingebracht.',
    instagram: '@alex.barber',
  },
  {
    name: 'Daniel Müller',
    role: 'Barber',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
    imageAlt: 'Portrait von Daniel Müller, Barber für moderne Herrenfrisuren und Styles',
    bio: 'Daniel bringt frische Ideen und moderne Styles in unser Team. Er ist besonders beliebt bei jüngeren Kunden.',
    instagram: '@daniel.cuts',
  },
  {
    name: 'Thomas Klein',
    role: 'Junior Barber',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face',
    imageAlt: 'Portrait von Thomas Klein, Junior Barber mit Leidenschaft für klassische Haarschnitte',
    bio: 'Als unser neuestes Teammitglied bringt Thomas Energie und Enthusiasmus mit. Er lernt schnell und hat bereits seine eigene Stammkundschaft.',
    instagram: '@tom.barber',
  },
];

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Unser Team | The Gentleman's Cut Berlin</title>
        <meta 
          name="description" 
          content="Lernen Sie unser Team erfahrener Barber kennen. Professionelle Friseure mit Leidenschaft für klassische Handwerkskunst im The Gentleman's Cut Berlin." 
        />
        <link rel="canonical" href="https://gentlemanscut.de/team" />
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
              <span className="text-foreground">Team</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Die Profis</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Unser Team
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Lernen Sie die Experten kennen, die hinter The Gentleman's Cut stehen.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <AnimateOnScroll key={member.name} animation="fade-up" delay={index * 100}>
                  <article className="group">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
                      <img
                        src={member.image}
                        alt={member.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent" />
                      
                      {/* Social Icon */}
                      <a
                        href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-foreground/30 bg-charcoal-dark/50 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                        aria-label={`${member.name} auf Instagram`}
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Content */}
                    <h2 className="font-display text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h2>
                    <p className="text-primary text-sm uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-24 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <AnimateOnScroll animation="fade-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Werden Sie Teil unseres Teams
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Sie sind ein leidenschaftlicher Barber auf der Suche nach einer neuen Herausforderung?
              </p>
              <a 
                href="mailto:jobs@gentlemanscut.de"
                className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors uppercase tracking-widest text-sm gold-underline"
              >
                Jetzt bewerben
              </a>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;
