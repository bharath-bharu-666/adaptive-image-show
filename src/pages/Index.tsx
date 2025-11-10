import { ImageSlider } from "@/components/ImageSlider";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";

const slides = [
  {
    image: slide1,
    title: "Mountain Majesty",
    description: "Experience the breathtaking beauty of sunrise over misty mountain peaks",
  },
  {
    image: slide2,
    title: "Tropical Paradise",
    description: "Discover pristine beaches with crystal-clear turquoise waters",
  },
  {
    image: slide3,
    title: "Urban Dreams",
    description: "Explore modern cityscapes illuminated by twilight's magical glow",
  },
  {
    image: slide4,
    title: "Autumn Serenity",
    description: "Immerse yourself in the vibrant colors of fall foliage",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dynamic Slider
          </h1>
          <nav className="flex gap-4 md:gap-6">
            <a 
              href="#features" 
              className="text-sm md:text-base text-foreground/70 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="text-sm md:text-base text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Slider Section */}
      <section className="h-screen w-full">
        <ImageSlider slides={slides} autoPlayInterval={5000} />
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 md:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Slider Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">Auto-Play</h3>
              <p className="text-muted-foreground">
                Automatic slideshow with customizable intervals and pause on hover
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">Smooth Transitions</h3>
              <p className="text-muted-foreground">
                Beautiful fade animations with elegant timing curves
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl text-white">📱</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">Responsive</h3>
              <p className="text-muted-foreground">
                Fully responsive design that works perfectly on all devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Built with Modern Tech
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            This dynamic image slider is built with React, TypeScript, and Tailwind CSS. 
            It features smooth transitions, auto-play functionality, navigation controls, 
            and a fully responsive design that adapts to any screen size.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Dynamic Image Slider. Powered by React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
