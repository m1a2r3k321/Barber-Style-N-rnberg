import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { ChevronRight, CalendarDays, Clock, CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { cn } from '@/lib/utils';

type AvailabilityResult = 'available' | 'unavailable' | 'error' | 'past' | null;

const TerminVerfuegbarkeit = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AvailabilityResult>(null);
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

  const handleCheckAvailability = async () => {
    if (!date || !time) return;

    // Client-side validation for past times
    if (isTimeInPast()) {
      setResult('past');
      return;
    }

    setIsLoading(true);
    setResult(null);

    const formattedDate = format(date, 'yyyy-MM-dd');
    const url = `https://bucolic-flan-ed412f.netlify.app/.netlify/functions/check-availability?date=${formattedDate}&time=${time}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.available === true) {
        setResult('available');
      } else if (data.available === false) {
        setResult('unavailable');
      } else {
        setResult('error');
      }
    } catch (error) {
      console.error('Error checking availability:', error);
      setResult('error');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = date && time;

  return (
    <>
      <Helmet>
        <title>Terminverfügbarkeit prüfen | The Gentleman's Cut Berlin</title>
        <meta 
          name="description" 
          content="Prüfen Sie die Verfügbarkeit Ihres Wunschtermins bei The Gentleman's Cut Berlin." 
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
              <span className="text-foreground">Terminverfügbarkeit</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Terminplanung</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Verfügbarkeit prüfen
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Wählen Sie Ihren Wunschtermin und prüfen Sie die Verfügbarkeit.
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
                    {/* Date Picker */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground uppercase tracking-widest">
                        Datum
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
                        Uhrzeit
                      </label>
                      <Select 
                        value={time} 
                        onValueChange={(value) => {
                          setTime(value);
                          setResult(null);
                        }}
                      >
                        <SelectTrigger className="w-full h-12 bg-input border-border">
                          <Clock className="mr-3 h-5 w-5 text-primary" />
                          <SelectValue placeholder="Uhrzeit auswählen" />
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
                      onClick={handleCheckAvailability}
                      disabled={!isFormValid || isLoading}
                      className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest font-medium"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Wird geprüft...
                        </>
                      ) : (
                        'Verfügbarkeit checken'
                      )}
                    </Button>

                    {/* Result Display */}
                    {result && (
                      <AnimateOnScroll animation="fade-up">
                        <div 
                          className={cn(
                            "p-4 rounded-sm border text-center",
                            result === 'available' && "bg-green-900/20 border-green-600 text-green-400",
                            result === 'unavailable' && "bg-red-900/20 border-red-600 text-red-400",
                            result === 'error' && "bg-orange-900/20 border-orange-600 text-orange-400",
                            result === 'past' && "bg-red-900/20 border-red-600 text-red-400"
                          )}
                        >
                          {result === 'available' && (
                            <div className="flex items-center justify-center gap-2">
                              <CheckCircle className="h-5 w-5" />
                              <span>✅ Termin verfügbar</span>
                            </div>
                          )}
                          {result === 'unavailable' && (
                            <div className="flex items-center justify-center gap-2">
                              <XCircle className="h-5 w-5" />
                              <span>❌ Termin leider nicht verfügbar, probiere einen anderen Termin</span>
                            </div>
                          )}
                          {result === 'error' && (
                            <div className="flex items-center justify-center gap-2">
                              <AlertCircle className="h-5 w-5" />
                              <span>Fehler beim Prüfen, bitte später erneut versuchen</span>
                            </div>
                          )}
                          {result === 'past' && (
                            <div className="flex items-center justify-center gap-2">
                              <XCircle className="h-5 w-5" />
                              <span>❌ Termine in der Vergangenheit können nicht geprüft werden</span>
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

export default TerminVerfuegbarkeit;
