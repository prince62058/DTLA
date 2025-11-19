import heroImage from "@/assets/hero-digital-trust.jpg";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.5)" }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="mb-6 text-sm tracking-widest uppercase opacity-90">
          Welcome to
        </div>
        <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-tight">
          DTLA
        </h1>
        <p className="text-2xl md:text-3xl mb-8 font-light max-w-3xl mx-auto">
          Digital Trust Literacy App
        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Empowering you to navigate the digital world safely and confidently
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Features
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
            onClick={() => document.getElementById("report")?.scrollIntoView({ behavior: "smooth" })}
          >
            Report a Scam
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-12 h-12" />
      </button>
    </section>
  );
};

export default Hero;
