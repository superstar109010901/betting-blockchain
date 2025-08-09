'use client'

import React, { useState, useEffect, useRef } from "react"
import BlueButton from "../buttons/blue";

interface TypeOneProps {
  title: React.ReactNode;
  button: string;
  image: string; // image URL from /public
  link?: string;
}

interface TypeOneCarouselProps {
  cards: readonly TypeOneProps[] | TypeOneProps[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
}

const TypeOne: React.FC<TypeOneProps> = ({ title, button, image, link = '#' }) => {
  return (
    <div className="group relative overflow-hidden rounded-[14px] h-[270px] p-9 text-white shadow-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-strong">
      {/* Background image layer with hover zoom */}
      <div
        className="absolute inset-0 bg-no-repeat transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      />

      {/* subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

      {/* sheen sweep on hover */}
      <div className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:left-[140%]" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <h1 className="text-3xl font-extrabold leading-tight drop-shadow-md">
          {title}
        </h1>
        <div>
          <a href={link}>
            <BlueButton className="px-6 h-10">{button}</BlueButton>
          </a>
        </div>
      </div>
    </div>
  )
}

const TypeOneCarousel: React.FC<TypeOneCarouselProps> = ({ 
  cards, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  showDots = true 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate how many slides we can show (3 cards at once)
  const maxSlides = Math.max(0, cards.length - 3);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
    setProgress(0);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    setProgress(0);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide || index > maxSlides) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setProgress(0);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(maxSlides);
        break;
    }
  };

  // Combined auto-play and progress animation
  useEffect(() => {
    if (autoPlay && !isTransitioning) {
      const startTime = Date.now();
      
      progressRef.current = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTime;
        const newProgress = Math.min((elapsed / autoPlayInterval) * 100, 100);
        
        setProgress(newProgress);
        
        if (newProgress >= 100) {
          nextSlide();
        }
      }, 50);
    }

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, currentSlide, isTransitioning]);

  const handleMouseEnter = () => {
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay && !isTransitioning) {
      const startTime = Date.now();
      
      progressRef.current = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTime;
        const newProgress = Math.min((elapsed / autoPlayInterval) * 100, 100);
        
        setProgress(newProgress);
        
        if (newProgress >= 100) {
          nextSlide();
        }
      }, 50);
    }
  };

  return (
    <div className="relative w-full">
      <div 
        className="relative m-w-full overflow-hidden rounded-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Carousel"
        ref={containerRef}
      >
        {/* Carousel Container - Show 3 cards at once */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          
        >
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="w-1/3 flex-shrink-0 px-2"
            >
              <TypeOne {...card} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg hidden md:block disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
          disabled={currentSlide === 0}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg hidden md:block disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
          disabled={currentSlide === maxSlides}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots - Positioned under the cards */}
      {showDots && maxSlides > 0 && (
        <div className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Carousel navigation">
          {Array.from({ length: maxSlides + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                index < currentSlide 
                  ? 'bg-blue-400 w-8' // Completed slides - bright blue
                  : index === currentSlide 
                    ? 'bg-gray-700 w-8' // Current slide - dark gray background with progress
                    : 'bg-gray-700 w-8' // Upcoming slides - dark gray
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
            >
              {/* Progress indicator for active dot */}
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-blue-400"
                    style={{
                      transform: `scaleX(${progress / 100})`,
                      transformOrigin: 'left center',
                      transition: 'transform 0.1s linear'
                    }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeOne;
export { TypeOneCarousel };