import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export const ImageSlider = ({ slides, autoPlayInterval = 5000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, slides.length, goToSlide]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, slides.length, goToSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext, autoPlayInterval]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div 
      className="relative w-full h-full group overflow-hidden rounded-xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 z-20"
              style={{ background: "var(--gradient-overlay)" }}
            />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 z-30 p-8 md:p-12 lg:p-16">
              <div className={cn(
                "transition-all duration-700 ease-out",
                currentIndex === index 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 
                   bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 
                   bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </Button>

      {/* Auto-play Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleAutoPlay}
        className="absolute top-4 right-4 z-40 w-10 h-10 md:w-12 md:h-12 
                   bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <Pause className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Play className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-accent w-8 md:w-12"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
