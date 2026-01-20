import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum | Barbershop Mustername Wien</title>
        <meta 
          name="description" 
          content="Impressum von Barbershop Mustername in Wien. Rechtliche Informationen und Kontaktdaten gemäß § 5 ECG." 
        />
        <link rel="canonical" href="https://barbershop-mustername.at/impressum" />
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
              <span className="text-foreground">Impressum</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Impressum
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-3xl mx-auto">
                <div className="space-y-8 text-muted-foreground">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      Informationspflicht laut § 5 E-Commerce-Gesetz (ECG)
                    </h2>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Betreiber der Website</h3>
                    <p>
                      Barbershop Mustername<br />
                      Max Mustermann
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Adresse</h3>
                    <p>
                      Musterstraße 12<br />
                      1010 Wien<br />
                      Österreich
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Kontakt</h3>
                    <p>
                      Telefon: <a href="tel:+436601234567" className="text-primary hover:underline">+43 660 1234567</a><br />
                      E-Mail: <a href="mailto:office@barbershop-mustername.at" className="text-primary hover:underline">office@barbershop-mustername.at</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Unternehmensform</h3>
                    <p>Einzelunternehmen</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Gewerbe</h3>
                    <p>Friseur und Perückenmacher</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Gewerbebehörde</h3>
                    <p>Magistrat der Stadt Wien</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Kammermitgliedschaft</h3>
                    <p>Mitglied der Wirtschaftskammer Österreich (WKO)</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Umsatzsteuer-ID</h3>
                    <p>ATU12345678</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
                    <p className="leading-relaxed">
                      Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                      Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Haftung für Links</h3>
                    <p className="leading-relaxed">
                      Unsere Website enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir 
                      keinen Einfluss. Für diese fremden Inhalte übernehmen wir keine Haftung.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Urheberrecht</h3>
                    <p className="leading-relaxed">
                      Die durch den Websitebetreiber erstellten Inhalte und Werke auf dieser Website 
                      unterliegen dem österreichischen Urheberrecht.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Impressum;
