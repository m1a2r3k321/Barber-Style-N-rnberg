import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

export const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = {
    'fade-up': 'animate-fade-up',
    'fade-in': 'animate-fade-in',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
  }[animation];

  return (
    <div 
      ref={ref} 
      className={`opacity-0 ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      data-animation={animationClass}
    >
      <style>{`
        .animate-visible[data-animation="animate-fade-up"] {
          animation: fadeUp 0.6s ease-out forwards;
          animation-delay: ${delay}ms;
        }
        .animate-visible[data-animation="animate-fade-in"] {
          animation: fadeIn 0.6s ease-out forwards;
          animation-delay: ${delay}ms;
        }
        .animate-visible[data-animation="animate-slide-in-left"] {
          animation: slideRight 0.6s ease-out forwards;
          animation-delay: ${delay}ms;
        }
        .animate-visible[data-animation="animate-slide-in-right"] {
          animation: slideLeft 0.6s ease-out forwards;
          animation-delay: ${delay}ms;
        }
      `}</style>
      {children}
    </div>
  );
};
