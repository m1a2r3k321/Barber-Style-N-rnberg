import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop', alt: 'Professioneller Herrenhaarschnitt mit Schere und Kamm im Barbershop Wien', category: 'Haarschnitt' },
  { id: 2, src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop', alt: 'Traditionelle Nassrasur mit heißem Handtuch für gepflegten Vollbart', category: 'Bartpflege' },
  { id: 3, src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop', alt: 'Präzise Bartkontur und Detailarbeit vom erfahrenen Barber', category: 'Detail' },
  { id: 4, src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop', alt: 'Klassischer Fade-Haarschnitt für Herren im modernen Stil', category: 'Haarschnitt' },
  { id: 5, src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop', alt: 'Stilvolles Barbershop Interieur mit Vintage-Friseurstühlen und warmem Ambiente', category: 'Ambiente' },
  { id: 6, src: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&h=600&fit=crop', alt: 'Hochwertige Friseurwerkzeuge und Rasiermesser für perfekte Ergebnisse', category: 'Werkzeuge' },
  { id: 7, src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop', alt: 'Professionelles Barber-Equipment mit Haarschneidemaschinen und Kämmen', category: 'Werkzeuge' },
  { id: 8, src: 'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?w=800&h=600&fit=crop', alt: 'Detailaufnahme eines präzisen Undercut-Haarschnitts im Barbershop', category: 'Haarschnitt' },
  { id: 9, src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop', alt: 'Elegantes Barbershop Interior mit klassischen Ledersesseln und Holzvertäfelung', category: 'Ambiente' },
];

const categories = ['Alle', 'Haarschnitt', 'Bartpflege', 'Ambiente', 'Werkzeuge', 'Detail'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'Alle' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Galerie | The Gentleman's Cut Berlin</title>
        <meta 
          name="description" 
          content="Entdecken Sie unsere Galerie: Impressionen aus unserem Premium Barbershop in Berlin. Haarschnitte, Bartpflege und stilvolles Ambiente." 
        />
        <link rel="canonical" href="https://gentlemanscut.de/galerie" />
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
              <span className="text-foreground">Galerie</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Eindrücke</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Galerie
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Ein Blick hinter die Kulissen unseres Salons und unserer Arbeit.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Filter & Gallery */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <AnimateOnScroll animation="fade-up" className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-sm uppercase tracking-widest border rounded-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </AnimateOnScroll>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <AnimateOnScroll key={image.id} animation="fade-up" delay={index * 50}>
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-muted cursor-pointer w-full"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-foreground font-display text-lg border-b-2 border-primary pb-1">
                        {image.category}
                      </span>
                    </div>
                  </button>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal-dark/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src.replace('w=800&h=600', 'w=1400&h=1050')}
            alt={selectedImage.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
