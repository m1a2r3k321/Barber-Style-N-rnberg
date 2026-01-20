import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Prenzlauer Berg | The Gentleman's Cut</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop The Gentleman's Cut in Berlin Prenzlauer Berg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Berlin, Prenzlauer Berg"
        />
        <link rel="canonical" href="https://gentlemanscut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="The Gentleman's Cut | Premium Barbershop Berlin" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Berlin Prenzlauer Berg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemanscut.de" />
        <meta property="og:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Gentleman's Cut | Premium Barbershop Berlin" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "The Gentleman's Cut",
            "image": "https://gentlemanscut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Straße 12",
              "addressLocality": "Berlin",
              "postalCode": "10115",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.5200",
              "longitude": "13.4050"
            },
            "url": "https://gentlemanscut.de",
            "telephone": "+49 30 1234567",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/gentlemanscut",
              "https://www.instagram.com/gentlemanscut"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

