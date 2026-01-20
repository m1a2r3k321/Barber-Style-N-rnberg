import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutz | Barbershop Mustername Wien</title>
        <meta 
          name="description" 
          content="Datenschutzerklärung von Barbershop Mustername in Wien. Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO." 
        />
        <link rel="canonical" href="https://barbershop-mustername.at/datenschutz" />
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
              <span className="text-foreground">Datenschutz</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Datenschutzerklärung
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
                <div className="space-y-10 text-muted-foreground">
                  
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      1. Allgemeine Hinweise
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
                      Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen 
                      Bestimmungen (DSGVO, TKG 2003).
                    </p>
                    <p className="leading-relaxed">
                      Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der 
                      Verarbeitung personenbezogener Daten auf dieser Website.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      2. Verantwortlicher
                    </h2>
                    <p className="mb-4">
                      Barbershop Mustername<br />
                      Max Mustermann<br />
                      Musterstraße 12<br />
                      1010 Wien<br />
                      Österreich
                    </p>
                    <p>
                      E-Mail: <a href="mailto:office@barbershop-mustername.at" className="text-primary hover:underline">office@barbershop-mustername.at</a><br />
                      Telefon: <a href="tel:+436601234567" className="text-primary hover:underline">+43 660 1234567</a>
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      3. Hosting
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Unsere Website wird bei Netlify, Inc. gehostet.
                      Beim Aufruf der Website werden automatisch Server-Logfiles erhoben 
                      (z. B. IP-Adresse, Browsertyp, Datum und Uhrzeit).
                    </p>
                    <p className="leading-relaxed mb-4">
                      Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien 
                      Betriebs und werden nicht mit anderen Datenquellen zusammengeführt.
                    </p>
                    <p className="text-sm">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      4. Cookies & Einwilligungsmanagement
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Unsere Website verwendet Cookies.
                      Die Verwaltung der Einwilligungen erfolgt über Cookiebot.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Notwendige Cookies werden automatisch gesetzt.
                      Statistik-Cookies (Google Analytics) werden nur nach Ihrer ausdrücklichen 
                      Einwilligung verwendet.
                    </p>
                    <p className="leading-relaxed">
                      Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen 
                      widerrufen oder ändern.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      5. Google Analytics (GA4)
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Diese Website nutzt Google Analytics 4, einen Webanalysedienst von 
                      Google Ireland Ltd.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Google Analytics verwendet Cookies, um anonymisierte Informationen über 
                      die Nutzung der Website zu erfassen. Die IP-Adresse wird anonymisiert verarbeitet.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Google Analytics wird erst nach Ihrer Einwilligung aktiviert.
                    </p>
                    <p className="text-sm">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      6. Google Fonts
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Auf dieser Website werden Google Fonts verwendet, um eine einheitliche 
                      Darstellung von Schriftarten zu gewährleisten.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Dabei kann es zu einer Verbindung zu Servern von Google kommen.
                    </p>
                    <p className="text-sm">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an 
                      einer ansprechenden Darstellung)
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      7. Chatbot (CommonNinja AI)
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Wir verwenden einen externen Chatbot-Dienst (CommonNinja AI).
                    </p>
                    <p className="leading-relaxed mb-4">
                      Personenbezogene Daten werden nur verarbeitet, wenn Sie diese freiwillig 
                      eingeben (z. B. Name, Nachricht).
                    </p>
                    <p className="leading-relaxed mb-4">
                      Die Daten dienen ausschließlich der Bearbeitung Ihrer Anfrage und werden 
                      vertraulich behandelt.
                    </p>
                    <p className="text-sm">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      8. Digitaler Receptionist (Placetel AI)
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Zur Unterstützung der Terminverwaltung nutzen wir einen digitalen 
                      Receptionist-Dienst (Placetel AI).
                    </p>
                    <p className="leading-relaxed mb-4">
                      Dabei werden nur jene Daten verarbeitet, die Sie freiwillig im Rahmen 
                      Ihrer Anfrage angeben.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Die Verarbeitung erfolgt ausschließlich zum Zweck der Terminorganisation.
                    </p>
                    <p className="text-sm">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      9. Terminbuchung & Google Kalender
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Bei der Online-Terminbuchung werden personenbezogene Daten 
                      (z. B. Name, Telefonnummer, E-Mail-Adresse) erhoben.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Diese Daten werden verschlüsselt an Google Kalender übermittelt und 
                      ausschließlich zur Verwaltung von Terminen verwendet.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Nur autorisierte Mitarbeiter haben Zugriff auf die Buchungsdaten.
                    </p>
                    <p className="text-sm">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      10. Speicherdauer
                    </h2>
                    <p className="leading-relaxed">
                      Personenbezogene Daten werden nur so lange gespeichert, wie dies für 
                      den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      11. Ihre Rechte
                    </h2>
                    <p className="leading-relaxed mb-4">
                      Sie haben jederzeit das Recht auf:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Auskunft</li>
                      <li>Berichtigung</li>
                      <li>Löschung</li>
                      <li>Einschränkung der Verarbeitung</li>
                      <li>Datenübertragbarkeit</li>
                      <li>Widerruf einer Einwilligung</li>
                    </ul>
                    <p className="leading-relaxed">
                      Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das 
                      Datenschutzrecht verstößt, können Sie sich bei der österreichischen 
                      Datenschutzbehörde beschweren.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      12. Datenschutzbehörde
                    </h2>
                    <p>
                      Österreichische Datenschutzbehörde<br />
                      Barichgasse 40–42<br />
                      1030 Wien<br />
                      <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dsb.gv.at</a>
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      13. Datensicherheit
                    </h2>
                    <p className="leading-relaxed">
                      Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, 
                      um Ihre Daten gegen Verlust, Manipulation und unbefugten Zugriff zu schützen.
                      Die Datenübertragung erfolgt verschlüsselt (HTTPS).
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

export default Datenschutz;
