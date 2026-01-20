import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">Seite nicht gefunden</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Die gewünschte Seite existiert leider nicht.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/"><Home className="w-5 h-5 mr-2" />Zur Startseite</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
