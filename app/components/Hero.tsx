'use client';

import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // approximate height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/front.jpeg')",
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="z-10 px-6 max-w-screen-2xl mx-auto text-center flex flex-col items-center space-y-8 relative">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight fade-in-up delay-100">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">The Co-Pilot for</span> <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-700">Precision Builders.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl fade-in-up delay-200 leading-relaxed">
          Developing the next generation of wearable AI. Real-time audiovisual intelligence for complex electro-mechanical assembly operations.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 fade-in-up delay-300 pt-6 w-full sm:w-auto">
          <a 
            href="#demo" 
            onClick={(e) => scrollToSection(e, 'demo')}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105 w-full sm:w-auto shadow-lg shadow-white/10"
          >
            <Play className="w-5 h-5 fill-current" />
            Watch the Demo
          </a>
          <a 
            href="#deploy" 
            onClick={(e) => scrollToSection(e, 'deploy')}
            className="flex items-center justify-center px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>

        <div className="fade-in-up delay-300 pt-16">
          <a 
            href="#hardware" 
            onClick={(e) => scrollToSection(e, 'hardware')}
            className="group flex items-center gap-2 text-base font-medium text-zinc-500 hover:text-white transition-colors duration-300"
          >
            Explore Specifications
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
