import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { ChevronRight, CalendarDays, Clock, CheckCircle, XCircle, AlertCircle, Loader2, User, Mail, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { cn } from '@/lib/utils';

type BookingResult = 'confirmed' | 'conflict' | 'invalid' | 'error' | 'past' | null;

const services = [
  'Klassischer Haarschnitt',
  'Traditionelle Nassrasur',
  'Bartpflege & Trimmen',
  'Premium Gentleman Paket',
  'Färben & Tönen',
  'Styling & Beratung',
];

const TerminBuchen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BookingResult>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check if selected date is today
  const isToday = date && format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');

  // Get current hour and minute for filtering times
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Generate time options from 09:00 to 20:00
  const allTimeOptions: string[] = [];
  for (let hour = 9; hour <= 20; hour++) {
    allTimeOptions.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < 20) {
      allTimeOptions.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }

  // Filter out past times if today is selected
  const timeOptions = isToday
    ? allTimeOptions.filter((timeOption) => {
        const [hour, minute] = timeOption.split(':').map(Number);
        if (hour > currentHour) return true;
        if (hour === currentHour && minute > currentMinute) return true;
        return false;
      })
    : allTimeOptions;

  // Disable Sundays and past dates
  const disableDates = (dateToCheck: Date) => {
    const isSunday = dateToCheck.getDay() === 0;
    const isPast = dateToCheck < today;
    return isSunday || isPast;
  };

  // Check if the selected time is in the past (for today)
  const isTimeInPast = () => {
    if (!date || !time || !isToday) return false;
    const [hour, minute] = time.split(':').map(Number);
    if (hour < currentHour) return true;
    if (hour === currentHour && minute <= currentMinute) return true;
    return false;
  };

  // Email validation
  const isValidEmail = (emailToCheck: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToCheck);
  };

  const isFormValid = name.trim() && email.trim() && isValidEmail(email) && service && date && time;

  const handleBookAppointment = async () => {
    if (!isFormValid) return;

    // Client-side validation for past times
    if (isTimeInPast()) {
      setResult('past');
      return;
    }

    setIsLoading(true);
    setResult(null);

    const formattedDate = format(date!, 'yyyy-MM-dd');

    try {
      const response = await fetch('https://bucolic-flan-ed412f.netlify.app/.netlify/functions/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          date: formattedDate,
          time: time,
          service: service,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'confirmed') {
          setResult('confirmed');
          // Reset form on success
          setName('');
          setEmail('');
          setService('');
          setDate(undefined);
          setTime('');
        } else {
          setResult('error');
        }
      } else if (response.status === 409) {
        setResult('conflict');
      } else if (response.status === 400) {
        setResult('invalid');
      } else {
        setResult('error');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      setResult('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Termin buchen | The Gentleman's Cut Berlin</title>
        <meta 
          name="description" 
          content="Buchen Sie jetzt Ihren Termin bei The Gentleman's Cut Berlin." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Termin buchen</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Terminbuchung</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Termin buchen
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Buchen Sie Ihren Termin verbindlich online.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <AnimateOnScroll animation="fade-up">
              <div className="max-w-md mx-auto">
                <div className="bg-card border border-border rounded-sm p-8">
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground uppercase tracking-widest">
                        Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                        <Input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            setResult(null);
                          }}
                          placeholder="Ihr vollständiger Name"
                          className="pl-12 h-12 bg-input border-border"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground uppercase tracking-widest">
                        E-Mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setResult(null);
                          }}
                          placeholder="ihre@email.de"
                          className="pl-12 h-12 bg-input border-border"
                          required
                        />
                      </div>
                      {email && !isValidEmail(email) && (
                        <p className="text-xs text-red-400">Bitte geben Sie eine gültige E-Mail-Adresse ein</p>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground uppercase tracking-widest">
                        Service *
                      </label>
                      <Select 
                        value={service} 
                        onValueChange={(value) => {
                          setService(value);
                          setResult(null);
                        }}
                      >
                        <SelectTrigger className="w-full h-12 bg-input border-border">
                          <Scissors className="mr-3 h-5 w-5 text-primary" />
                          <SelectValue placeholder="Service auswählen" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {services.map((serviceOption) => (
                            <SelectItem key={serviceOption} value={serviceOption}>
                              {serviceOption}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date Picker */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground uppercase tracking-widest">
                        Datum *
                      </label>
                      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-12 bg-input border-border hover:bg-muted",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarDays className="mr-3 h-5 w-5 text-primary" />
                            {date ? format(date, 'yyyy-MM-dd') : <span>Datum auswählen</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(newDate) => {
                              setDate(newDate);
                              setTime(''); // Reset time when date changes
                              setCalendarOpen(false);
                              setResult(null);
                            }}
                            disabled={disableDates}
                            initialFocus
                            locale={de}
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-xs text-muted-foreground">Sonntags geschlossen</p>
                    </div>

                    {/* Time Picker */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground uppercase tracking-widest">
                        Uhrzeit *
                      </label>
                      <Select 
                        value={time} 
                        onValueChange={(value) => {
                          setTime(value);
                          setResult(null);
                        }}
                        disabled={!date}
                      >
                        <SelectTrigger className="w-full h-12 bg-input border-border">
                          <Clock className="mr-3 h-5 w-5 text-primary" />
                          <SelectValue placeholder={date ? "Uhrzeit auswählen" : "Bitte zuerst Datum wählen"} />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border max-h-60">
                          {timeOptions.map((timeOption) => (
                            <SelectItem key={timeOption} value={timeOption}>
                              {timeOption} Uhr
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Öffnungszeiten: 09:00 – 20:00 Uhr</p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      onClick={handleBookAppointment}
                      disabled={!isFormValid || isLoading}
                      className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest font-medium"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Wird gebucht...
                        </>
                      ) : (
                        'Termin verbindlich buchen'
                      )}
                    </Button>

                    {/* Result Display */}
                    {result && (
                      <AnimateOnScroll animation="fade-up">
                        <div 
                          className={cn(
                            "p-4 rounded-sm border text-center",
                            result === 'confirmed' && "bg-green-900/20 border-green-600 text-green-400",
                            result === 'conflict' && "bg-red-900/20 border-red-600 text-red-400",
                            result === 'invalid' && "bg-red-900/20 border-red-600 text-red-400",
                            result === 'error' && "bg-orange-900/20 border-orange-600 text-orange-400",
                            result === 'past' && "bg-red-900/20 border-red-600 text-red-400"
                          )}
                        >
                          {result === 'confirmed' && (
                            <div className="flex items-center justify-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              <span>✅ Dein Termin wurde erfolgreich gebucht.</span>
                            </div>
                          )}
                          {result === 'conflict' && (
                            <div className="flex items-center justify-center gap-2">
                              <XCircle className="h-5 w-5" />
                              <span>❌ Dieser Termin wurde schon vergeben. Bitte wähle einen anderen Zeitpunkt.</span>
                            </div>
                          )}
                          {result === 'invalid' && (
                            <div className="flex items-center justify-center gap-2">
                              <XCircle className="h-5 w-5" />
                              <span>❌ Bitte überprüfe deine Eingaben.</span>
                            </div>
                          )}
                          {result === 'error' && (
                            <div className="flex items-center justify-center gap-2">
                              <AlertCircle className="h-5 w-5" />
                              <span>❌ Dieser Termin wurde schon vergeben. Bitte wähle einen anderen Zeitpunkt.</span>
                            </div>
                          )}
                          {result === 'past' && (
                            <div className="flex items-center justify-center gap-2">
                              <XCircle className="h-5 w-5" />
                              <span>❌ Termine in der Vergangenheit können nicht gebucht werden</span>
                            </div>
                          )}
                        </div>
                      </AnimateOnScroll>
                    )}
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

export default TerminBuchen;
